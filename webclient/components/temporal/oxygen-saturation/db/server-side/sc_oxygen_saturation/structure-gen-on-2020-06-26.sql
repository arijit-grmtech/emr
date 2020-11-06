use sc_vital_signs;

DROP TABLE IF EXISTS `oxygenSaturation`;

CREATE TABLE `oxygenSaturation` (
  `serverSideRowUuid` char(36) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `ptUuid` char(36) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `oxygenSaturationInSpo2` int(11) DEFAULT NULL,
  `timeOfMeasurementInMilliseconds` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `notes` text DEFAULT NULL,
  `recordChangedByUuid` char(36) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `recordChangedFromIPAddress` varchar(20) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
   PRIMARY KEY (`serverSideRowUuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 WITH SYSTEM VERSIONING;