-- INCISO 2

CREATE OR REPLACE VIEW TopProductos AS
SELECT
	Rank,
	Mes,
	Producto,
	UnidadesDespachadas
FROM (
	SELECT 
		ROW_NUMBER() OVER (PARTITION BY TO_CHAR(soh.OrderDate, 'YYYY-MM') ORDER BY SUM(sod.OrderQty) DESC) AS Rank,
		TO_CHAR(soh.OrderDate, 'YYYY-MM') AS Mes,
		P.Name AS Producto,
		SUM(sod.OrderQty) AS UnidadesDespachadas
	FROM SalesOrderDetail sod
	JOIN SalesOrderHeader soh ON sod.SalesOrderID = soh.SalesOrderID
	JOIN Product P ON sod.ProductID = P.ProductID
	WHERE SOH.Status = 5
	GROUP BY Mes, P.Name
)
WHERE Rank <= 3;

CREATE OR REPLACE VIEW TopClientes AS
SELECT
	Rank,
	Mes,
	Cliente,
	MontoFacturado
FROM (
	SELECT
		ROW_NUMBER() OVER (PARTITION BY TO_CHAR(SOH.OrderDate, 'YYYY-MM') ORDER BY SUM(soh.TotalDue) DESC) AS Rank,
		TO_CHAR(soh.OrderDate, 'YYYY-MM') AS Mes,
		P.FirstName || ' ' || P.LastName AS Cliente,
		SUM(soh.TotalDue) AS MontoFacturado    
	FROM SalesOrderHeader soh
	JOIN Customer C ON soh.CustomerID = C.CustomerID
	JOIN Person P ON C.PersonID = P.BusinessEntityID
	WHERE soh.Status = 5
	GROUP BY Mes, P.FirstName || ' ' || P.LastName
)
WHERE Rank <= 3;

SELECT
    COALESCE(P.Mes, C.Mes) AS Mes,
    MAX(P.Producto) FILTER (WHERE P.Rank = 1) AS Producto_N1,
    MAX(P.Producto) FILTER (WHERE P.Rank = 2) AS Producto_N2,
    MAX(P.Producto) FILTER (WHERE P.Rank = 3) AS Producto_N3,
    MAX(C.Cliente) FILTER (WHERE C.Rank = 1) AS Cliente_N1,
    MAX(C.Cliente) FILTER (WHERE C.Rank = 2) AS Cliente_N2,
    MAX(C.Cliente) FILTER (WHERE C.Rank = 3) AS Cliente_N3
FROM TopProductos P
FULL JOIN TopClientes C ON P.Mes = C.Mes
GROUP BY COALESCE(P.Mes, C.Mes)
ORDER BY COALESCE(P.Mes, C.Mes);