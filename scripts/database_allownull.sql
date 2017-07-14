USE nuclei;


CREATE TABLE `test_clinical`  (
  `name` varchar(80),
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Censored`  int,
  `survival_time`  double,
  `age_at_initial`  int,
  `gender_male`  int,
  `race_white`  int,
  `race_Black_orAfricanAmerican`  int,
  `race_Asian`  int,
  `race_AmericanIndian_orAlaskanative`  int ,
  `histological_oligoastrocytoma`  int ,
  `histological_astrocytoma`  int,
  `histological_oligodendroglioma`  int,
  `histological_glioblastoma_multiforme_gbm`  int,
  `histological_treated_primary_gbm` int,
  `histological_untreated_primary_gbm`  int,
  `radiation_therapy_Is_yes`  int,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)

)ENGINE=InnoDB;
