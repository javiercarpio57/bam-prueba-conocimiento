-- INCISO 1
SELECT
	TO_CHAR(soh.OrderDate, 'YYYY-MM') as Mes,
	st.name as NombreTerritorio,
	COUNT(*) FILTER (WHERE soh.status = 1) AS TrProceso,
    COUNT(*) FILTER (WHERE soh.status = 2) AS TrAprobadas,
    COUNT(*) FILTER (WHERE soh.status = 3) AS TrAtrasadas,
    COUNT(*) FILTER (WHERE soh.status = 4) AS TrRechazadas,
    COUNT(*) FILTER (WHERE soh.status = 5) AS TrEnviadas,
    COUNT(*) FILTER (WHERE soh.status = 6) AS TrCanceladas,
    COALESCE(SUM(soh.TotalDue) FILTER (WHERE soh.status = 1), 0) AS MntProceso,
    COALESCE(SUM(soh.TotalDue) FILTER (WHERE soh.status = 2), 0) AS MntAprobadas,
    COALESCE(SUM(soh.TotalDue) FILTER (WHERE soh.status = 3), 0) AS MntAtrasadas,
    COALESCE(SUM(soh.TotalDue) FILTER (WHERE soh.status = 4), 0) AS MntRechazadas,
    COALESCE(SUM(soh.TotalDue) FILTER (WHERE soh.status = 5), 0) AS MntEnviadas,
    COALESCE(SUM(soh.TotalDue) FILTER (WHERE soh.status = 6), 0) AS MntCanceladas
FROM salesterritory st
JOIN salesorderheader as soh ON st.territoryid = soh.territoryid
GROUP BY TO_CHAR(SOH.OrderDate, 'YYYY-MM'), st.Name
ORDER BY Mes, NombreTerritorio;