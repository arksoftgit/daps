use hadb;

CREATE TABLE `haadminusertbl` (
  `userid` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(150) DEFAULT NULL,
  `password` varchar(150) DEFAULT NULL,
  `lastlogin` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`userid`)
) 