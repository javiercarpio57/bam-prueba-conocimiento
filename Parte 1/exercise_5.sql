
-- INCISO 5
-- EXTRICTAMENTE 1 COMPRA
SELECT 
    Mes,
    NombreCliente,
    MAX(FechaUltCompra) AS FechaUltCompra,
    EXTRACT(DAY FROM MAX(FechaUltCompra) - MAX(FechaPenUltCompra)) AS DiasUC_PC,
    EXTRACT(DAY FROM MAX(FechaPenUltCompra) - MAX(FechaAntePenUltCompra)) AS DiasPC_APC
FROM (
	SELECT 
		TO_CHAR(soh.OrderDate, 'YYYY-MM') AS Mes,
		CONCAT(p.FirstName, ' ', p.LastName) AS NombreCliente,
		soh.OrderDate AS FechaUltCompra,
		LAG(soh.OrderDate, 1) OVER (PARTITION BY c.CustomerID ORDER BY soh.OrderDate) AS FechaPenUltCompra,
		LAG(soh.OrderDate, 2) OVER (PARTITION BY c.CustomerID ORDER BY soh.OrderDate) AS FechaAntePenUltCompra
	FROM SalesOrderHeader soh
	JOIN Customer c ON soh.CustomerID = c.CustomerID
	JOIN Person p ON c.PersonID = p.BusinessEntityID
)
GROUP BY Mes, NombreCliente
HAVING COUNT(NombreCliente) = 1
ORDER BY Mes, NombreCliente;



-- MAS DE 3 COMPRAS PARA EVITAR NULLs
SELECT 
    Mes,
    NombreCliente,
    MAX(FechaUltCompra) AS FechaUltCompra,
    EXTRACT(DAY FROM MAX(FechaUltCompra) - MAX(FechaPenUltCompra)) AS DiasUC_PC,
    EXTRACT(DAY FROM MAX(FechaPenUltCompra) - MAX(FechaAntePenUltCompra)) AS DiasPC_APC
FROM (
	SELECT 
		TO_CHAR(soh.OrderDate, 'YYYY-MM') AS Mes,
		CONCAT(p.FirstName, ' ', p.LastName) AS NombreCliente,
		soh.OrderDate AS FechaUltCompra,
		LAG(soh.OrderDate, 1) OVER (PARTITION BY c.CustomerID ORDER BY soh.OrderDate) AS FechaPenUltCompra,
		LAG(soh.OrderDate, 2) OVER (PARTITION BY c.CustomerID ORDER BY soh.OrderDate) AS FechaAntePenUltCompra
	FROM SalesOrderHeader soh
	JOIN Customer c ON soh.CustomerID = c.CustomerID
	JOIN Person p ON c.PersonID = p.BusinessEntityID
)
GROUP BY Mes, NombreCliente
HAVING COUNT(NombreCliente) >= 3
ORDER BY Mes, NombreCliente;