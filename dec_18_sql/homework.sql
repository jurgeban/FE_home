-- 1) Вывести данные о товарах (название, цена со скидкой в 0.5%).
SELECT ProductName,
       Price * 0.995 AS Price_Discount
FROM Products;

-- 2) Вывести самый дорогой товар в диапазоне до 100 EUR.
SELECT ProductName, Price
FROM Products
WHERE Price <= 100 order by Price DESC limit 1;

-- 3) Вывести два самых дешевых товара из категории 4.
SELECT *
FROM Products
WHERE CategoryID = 4 order by Price ASC limit 2;

-- 4) Вывести один товар, который находится на пятом месте среди самых дорогих.
SELECT *
FROM Products
order by Price DESC limit 1 offset 4;

