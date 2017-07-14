USE nuclei;


CREATE TABLE `clinical`  (
  `name` varchar(80) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Censored`  INT NOT NULL,
  `survival_time`  DOUBLE NOT NULL,
  `age_at_initial`  INT NOT NULL,
  `gender_male`  INT NOT NULL,
  `race_white`  INT NOT NULL,
  `race_Black_orAfricanAmerican`  INT NOT NULL,
  `race_Asian`  INT NOT NULL,
  `race_AmericanIndian_orAlaskanative`  INT NOT NULL,
  `histological_oligoastrocytoma`  INT NOT NULL,
  `histological_astrocytoma`  INT NOT NULL,
  `histological_oligodendroglioma`  INT NOT NULL,
  `histological_glioblastoma_multiforme_gbm`  INT NOT NULL,
  `histological_treated_primary_gbm`  INT NOT NULL,
  `histological_untreated_primary_gbm`  INT NOT NULL,
  `radiation_therapy_Is_yes`  INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)

)ENGINE=InnoDB;
