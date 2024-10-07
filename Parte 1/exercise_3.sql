
-- INCISO 3
SELECT
    TO_CHAR(soh.OrderDate, 'YYYY-MM') AS OrderMonth,
    st."Group" AS TerritoryGroup,
    AVG(soh.SubTotal) AS MonthAvg,
    AVG(soh.SubTotal) - (
		SELECT AVG(SubTotal)
		FROM SalesOrderHeader
		WHERE OrderDate >= DATE_TRUNC('month', (
			SELECT OrderDate FROM SalesOrderHeader ORDER BY OrderDate DESC LIMIT 1
		)) - INTERVAL '6 months') AS Diff,
    CASE
        WHEN AVG(SOH.SubTotal) > (
			SELECT AVG(SubTotal)
			FROM SalesOrderHeader
			WHERE OrderDate >= DATE_TRUNC('month', (
				SELECT OrderDate FROM SalesOrderHeader ORDER BY OrderDate DESC LIMIT 1
				)) - INTERVAL '6 months') THEN 'ABOVE'
        WHEN AVG(SOH.SubTotal) < (
			SELECT AVG(SubTotal)
			FROM SalesOrderHeader
			WHERE OrderDate >= DATE_TRUNC('month', (
				SELECT OrderDate FROM SalesOrderHeader ORDER BY OrderDate DESC LIMIT 1
				)) - INTERVAL '6 months') THEN 'BELOW'
        ELSE 'EQUAL'
    END AS Indicator
FROM SalesOrderHeader soh
JOIN SalesTerritory st ON soh.TerritoryID = st.TerritoryID
WHERE SOH.OrderDate >= DATE_TRUNC('month', (
	SELECT OrderDate FROM SalesOrderHeader ORDER BY OrderDate DESC LIMIT 1
)) - INTERVAL '6 months'
GROUP BY OrderMonth, TerritoryGroup
ORDER BY OrderMonth, TerritoryGroup;