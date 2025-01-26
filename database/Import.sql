USE AddressDB;

LOAD DATA INFILE 'C:\\Users\\gaber\\Documents\\dumps\\Drug Data - Drug Table.csv'
INTO TABLE DrugTable
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;