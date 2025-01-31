


-- @block
CREATE TABLE DrugTable(
    DrugID INT PRIMARY KEY AUTO_INCREMENT,
    DrugName Varchar(50),
    GenericName Varchar(50),
    BrandName Varchar(50),
    DrugIntake Varchar(20),
    HalfLife Varchar(20),
    DressRisk Varchar(20),
    ATCcodes Varchar(8)
);
-- @block
LOAD DATA INFILE 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\Drug Data - Drug Table.csv'
INTO TABLE DrugTable
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

-- @block
ALTER Table DrugTable
MODIFY COLUMN BrandName VARCHAR(255);