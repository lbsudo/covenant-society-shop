-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `Orders` (
	`ID` int NOT NULL,
	`OrderID` int,
	`ProductID` int,
	`VariantID` int,
	`Quantity` int,
	`FullName` varchar(255),
	`Company` varchar(255),
	`AddressLine1` varchar(255),
	`AddressLine2` varchar(255),
	`Country` varchar(255),
	`StateProvincePrefecture` varchar(255),
	`City` varchar(255),
	`PostalZipCode` int,
	`Phone` varchar(20),
	CONSTRAINT `Orders_ID` PRIMARY KEY(`ID`)
);

*/