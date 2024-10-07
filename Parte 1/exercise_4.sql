
-- INCISO 4
SELECT DISTINCT codigo
FROM (
    SELECT 
        codigo,
        LAG(codigo, 1) OVER (ORDER BY secuencial) AS codigo_anterior_1,
        LAG(codigo, 2) OVER (ORDER BY secuencial) AS codigo_anterior_2
    FROM Secuenciales
	ORDER BY secuencial
)
WHERE codigo = codigo_anterior_1 AND codigo = codigo_anterior_2;