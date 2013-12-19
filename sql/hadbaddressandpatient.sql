use hadb;
DROP TABLE `hapatienttbl`;
CREATE TABLE `hapatienttbl` (
  `ID` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `firstname` varchar(150) DEFAULT NULL,
  `lastname` varchar(150) DEFAULT NULL,
  `email` varchar(150) DEFAULT NULL,
  `mobilephone` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `nameidx` (`firstname`,`lastname`)
) 

use hadb;
INSERT INTO `hapatienttbl` (`firstname`, `lastname`, `email`, `mobilephone`) VALUES ('Tarry', 'Cutler', 'tc@email.com', '999-777-1212');
INSERT INTO `hapatienttbl` (`firstname`, `lastname`, `email`, `mobilephone`) VALUES ('Robert', 'Cutler', 'tc@email.com', '999-777-1212');
INSERT INTO `hapatienttbl` (`firstname`, `lastname`, `email`, `mobilephone`) VALUES ('John', 'Cutler', 'tc@email.com', '999-777-1212');
INSERT INTO `hapatienttbl` (`firstname`, `lastname`, `email`, `mobilephone`) VALUES ('David', 'Cutler', 'tc@email.com', '999-777-1212');
INSERT INTO `hapatienttbl` (`firstname`, `lastname`, `email`, `mobilephone`) VALUES ('Betsy', 'Cutler', 'tc@email.com', '999-777-1212');
INSERT INTO `hapatienttbl` (`firstname`, `lastname`, `email`, `mobilephone`) VALUES ('Gearld', 'Cutler', 'tc@email.com', '999-777-1212');
INSERT INTO `hapatienttbl` (`firstname`, `lastname`, `email`, `mobilephone`) VALUES ('Sreve', 'Cutler', 'tc@email.com', '999-777-1212');
INSERT INTO `hapatienttbl` (`firstname`, `lastname`, `email`, `mobilephone`) VALUES ('Randy', 'Cutler', 'tc@email.com', '999-777-1212');
INSERT INTO `hapatienttbl` (`firstname`, `lastname`, `email`, `mobilephone`) VALUES ('Roger', 'Cutler', 'tc@email.com', '999-777-1212');
INSERT INTO `hapatienttbl` (`firstname`, `lastname`, `email`, `mobilephone`) VALUES ('Rover', 'Cutler', 'tc@email.com', '999-777-1212');
INSERT INTO `hapatienttbl` (`firstname`, `lastname`, `email`, `mobilephone`) VALUES ('Rooland', 'Cutler', 'tc@email.com', '999-777-1212');

use hadb;
DROP TABLE `haaddresstbl`;
CREATE TABLE  `haaddresstbl` (
  `ID` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `locationtype` varchar(150) DEFAULT NULL,
  `address1` varchar(150) DEFAULT NULL,
  `address2` varchar(150) DEFAULT NULL,
  `city` varchar(150) DEFAULT NULL,
  `state` varchar(150) DEFAULT NULL,
  `zip` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `locationtypeidx` (`locationtype`)
) 

use hadb;
INSERT INTO `haaddresstbl` (`locationtype`, `address1`, `address2`,`city`, `state`, `zip`) VALUES ('primary', '5 rosebud dr', '', 'boston', 'ma', '01987');
INSERT INTO `haaddresstbl` (`locationtype`, `address1`, `address2`,`city`, `state`, `zip`) VALUES ('primary', '10 jingle dr', '', 'manchester', 'ma', '02345');
INSERT INTO `haaddresstbl` (`locationtype`, `address1`, `address2`,`city`, `state`, `zip`) VALUES ('primary', '23 washbort st', '', 'woburn', 'ma', '09876');
INSERT INTO `haaddresstbl` (`locationtype`, `address1`, `address2`,`city`, `state`, `zip`) VALUES ('primary', '2 blossom ln', '', 'dedham', 'ma', '98098');
INSERT INTO `haaddresstbl` (`locationtype`, `address1`, `address2`,`city`, `state`, `zip`) VALUES ('primary', '23 smith st', '', 'cambridge', 'ma', '39287');
INSERT INTO `haaddresstbl` (`locationtype`, `address1`, `address2`,`city`, `state`, `zip`) VALUES ('primary', '14 cherry dr', '', 'dover', 'ma', '09892');
INSERT INTO `haaddresstbl` (`locationtype`, `address1`, `address2`,`city`, `state`, `zip`) VALUES ('primary', '23 cherry st', '', 'marblehead', 'ma', '80010');
INSERT INTO `haaddresstbl` (`locationtype`, `address1`, `address2`,`city`, `state`, `zip`) VALUES ('primary', '1 bean pl', '', 'arlington', 'ma', '23098');
INSERT INTO `haaddresstbl` (`locationtype`, `address1`, `address2`,`city`, `state`, `zip`) VALUES ('primary', '13 danger way', '', 'newton', 'ma', '09890');
INSERT INTO `haaddresstbl` (`locationtype`, `address1`, `address2`,`city`, `state`, `zip`) VALUES ('primary', '27 arc st', '', 'rockport', 'ma', '01810');
INSERT INTO `haaddresstbl` (`locationtype`, `address1`, `address2`,`city`, `state`, `zip`) VALUES ('primary', '52 bayview dr', '', 'andover', 'ma', '01564');

use hadb;
DROP TABLE `hapatientaddresstbl`;
CREATE TABLE `hapatientaddresstbl` (
  `ID` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `patientid` bigint(20),
  `addressid` bigint(20),
  `addresstype` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `patientididx` (`patientid`),
  KEY `addressididx` (`addressid`)
) 

use hadb;
INSERT INTO `hapatientaddresstbl` (`patientid`, `addressid`, `addresstype`) VALUES (1, 1, 'primary');
INSERT INTO `hapatientaddresstbl` (`patientid`, `addressid`, `addresstype`) VALUES (2, 2, 'primary');
INSERT INTO `hapatientaddresstbl` (`patientid`, `addressid`, `addresstype`) VALUES (3, 3, 'primary');
INSERT INTO `hapatientaddresstbl` (`patientid`, `addressid`, `addresstype`) VALUES (4, 4, 'primary');
INSERT INTO `hapatientaddresstbl` (`patientid`, `addressid`, `addresstype`) VALUES (5, 5, 'primary');
INSERT INTO `hapatientaddresstbl` (`patientid`, `addressid`, `addresstype`) VALUES (6, 6, 'primary');
INSERT INTO `hapatientaddresstbl` (`patientid`, `addressid`, `addresstype`) VALUES (7, 7, 'primary');
INSERT INTO `hapatientaddresstbl` (`patientid`, `addressid`, `addresstype`) VALUES (8, 8, 'primary');
INSERT INTO `hapatientaddresstbl` (`patientid`, `addressid`, `addresstype`) VALUES (9, 9, 'primary');
INSERT INTO `hapatientaddresstbl` (`patientid`, `addressid`, `addresstype`) VALUES (10, 10, 'primary');
INSERT INTO `hapatientaddresstbl` (`patientid`, `addressid`, `addresstype`) VALUES (11, 11, 'primary');