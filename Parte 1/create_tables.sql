-- CREATING TABLES...
CREATE TABLE Person (
    BusinessEntityID INT PRIMARY KEY,
    PersonType CHAR(2),
    NameStyle BOOLEAN,
    Title VARCHAR(50),
    FirstName VARCHAR(50),
    MiddleName VARCHAR(50),
    LastName VARCHAR(50),
    Suffix VARCHAR(50),
    EmailPromotion INT,
    AdditionalContactInfo TEXT,
    Demographics VARCHAR,
    rowguid UUID,
    ModifiedDate TIMESTAMP
);

CREATE TABLE Product (
    ProductID INT PRIMARY KEY,
    Name VARCHAR(100),
    ProductNumber VARCHAR(25),
    MakeFlag BOOLEAN,
    FinishedGoodsFlag BOOLEAN,
    Color VARCHAR(15),
    SafetyStockLevel INT,
    ReorderPoint INT,
    StandardCost DECIMAL(18, 4),
    ListPrice DECIMAL(18, 4),
    Size VARCHAR(10),
    SizeUnitMeasureCode CHAR(3),
    WeightUnitMeasureCode CHAR(3),
    Weight DECIMAL(18, 2),
    DaysToManufacture INT,
    ProductLine CHAR(2),
    Class CHAR(2),
    Style CHAR(2),
    ProductSubcategoryID INT,
    ProductModelID INT,
    SellStartDate TIMESTAMP,
    SellEndDate TIMESTAMP,
    DiscontinuedDate TIMESTAMP,
    rowguid UUID,
    ModifiedDate TIMESTAMP
);

CREATE TABLE Customer (
    CustomerID INT PRIMARY KEY,
    PersonID INT,
    StoreID INT,
    TerritoryID INT,
    AccountNumber VARCHAR(20),
    rowguid UUID,
    ModifiedDate TIMESTAMP
);

CREATE TABLE SalesOrderDetail (
    SalesOrderID INT,
    SalesOrderDetailID INT PRIMARY KEY,
    CarrierTrackingNumber VARCHAR(25),
    OrderQty INT,
    ProductID INT,
    SpecialOfferID INT,
    UnitPrice DECIMAL(18, 4),
    UnitPriceDiscount DECIMAL(18, 4),
    LineTotal DECIMAL(18, 4),
    rowguid UUID,
    ModifiedDate TIMESTAMP
);

CREATE TABLE SalesOrderHeader (
    SalesOrderID INT PRIMARY KEY,
    RevisionNumber INT,
    OrderDate TIMESTAMP,
    DueDate TIMESTAMP,
    ShipDate TIMESTAMP,
    Status INT,
    OnlineOrderFlag BOOLEAN,
    SalesOrderNumber VARCHAR(50),
    PurchaseOrderNumber VARCHAR(50),
    AccountNumber VARCHAR(50),
    CustomerID INT,
    SalesPersonID INT,
    TerritoryID INT,
    BillToAddressID INT,
    ShipToAddressID INT,
    ShipMethodID INT,
    CreditCardID INT,
    CreditCardApprovalCode VARCHAR(50),
    CurrencyRateID INT,
    SubTotal DECIMAL(18, 4),
    TaxAmt DECIMAL(18, 4),
    Freight DECIMAL(18, 4),
    TotalDue DECIMAL(18, 4),
    Comment TEXT,
    ModifiedDate TIMESTAMP
);

CREATE TABLE SalesOrderDetail (
    SalesOrderID INT,
    SalesOrderDetailID INT PRIMARY KEY,
    CarrierTrackingNumber VARCHAR(25),
    OrderQty INT,
    ProductID INT,
    SpecialOfferID INT,
    UnitPrice DECIMAL(18, 4),
    UnitPriceDiscount DECIMAL(18, 4),
    LineTotal DECIMAL(18, 4),
    rowguid UUID,
    ModifiedDate TIMESTAMP
);

CREATE TABLE SalesTerritory (
    TerritoryID INT PRIMARY KEY,
    Name VARCHAR(100),
    CountryRegionCode VARCHAR(10),
    "Group" VARCHAR(50),
    SalesYTD DECIMAL(18, 4),
    SalesLastYear DECIMAL(18, 4),
    CostYTD DECIMAL(18, 4),
    CostLastYear DECIMAL(18, 4),
    rowguid UUID,
    ModifiedDate TIMESTAMP
);

CREATE TABLE Secuenciales (
    secuencial INT,
    codigo INT
);