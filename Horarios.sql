-- MySQL dump 10.16  Distrib 10.1.26-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: Horarios
-- ------------------------------------------------------
-- Server version	10.1.26-MariaDB-0+deb9u1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Alumno`
--

DROP TABLE IF EXISTS `Alumno`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Alumno` (
  `noControl` varchar(8) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `correo` varchar(30) DEFAULT NULL,
  `contrasena` varchar(100) DEFAULT NULL,
  `totaMateEspe` int(11) DEFAULT NULL,
  `id` int(11) DEFAULT NULL,
  PRIMARY KEY (`noControl`),
  KEY `id` (`id`),
  CONSTRAINT `Alumno_ibfk_1` FOREIGN KEY (`id`) REFERENCES `Totales` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Alumno`
--

LOCK TABLES `Alumno` WRITE;
/*!40000 ALTER TABLE `Alumno` DISABLE KEYS */;
/*!40000 ALTER TABLE `Alumno` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `HistorialMaterias`
--

DROP TABLE IF EXISTS `HistorialMaterias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `HistorialMaterias` (
  `noControl` varchar(8) NOT NULL,
  `clave` varchar(10) NOT NULL,
  `semestre` int(11) DEFAULT NULL,
  `oportunidad` int(11) DEFAULT NULL,
  PRIMARY KEY (`noControl`,`clave`),
  KEY `clave` (`clave`),
  CONSTRAINT `HistorialMaterias_ibfk_1` FOREIGN KEY (`noControl`) REFERENCES `Alumno` (`noControl`),
  CONSTRAINT `HistorialMaterias_ibfk_2` FOREIGN KEY (`clave`) REFERENCES `Materias` (`clave`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `HistorialMaterias`
--

LOCK TABLES `HistorialMaterias` WRITE;
/*!40000 ALTER TABLE `HistorialMaterias` DISABLE KEYS */;
/*!40000 ALTER TABLE `HistorialMaterias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Materias`
--

DROP TABLE IF EXISTS `Materias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Materias` (
  `clave` varchar(10) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `creditos` int(11) DEFAULT NULL,
  `semestre` int(11) DEFAULT NULL,
  PRIMARY KEY (`clave`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Materias`
--

LOCK TABLES `Materias` WRITE;
/*!40000 ALTER TABLE `Materias` DISABLE KEYS */;
INSERT INTO `Materias` VALUES ('ACA-0907','Taller de etica',4,1),('ACA-0909','Taller de investigación I',4,7),('ACA-0910','Taller de investigacion II',4,8),('ACC-0906','Fundamentos de investigacion',4,1),('ACD-0908','Desarrollo sustentable',5,2),('ACF-0901','Calculo diferencial',5,1),('ACF-0902','Calculo integral',5,2),('ACF-0903','Algebra lineal',5,3),('ACF-0904','Calculo vectorial',5,3),('ACF-0905','Ecuaciones diferenciales',5,4),('AEB-1055','Programación web',5,6),('AEC-1008','Contabilidad financiera',4,3),('AEC-1034','Fundamentos de telecomunicaciones',4,5),('AEC-1058','Quimica',4,2),('AEC-1061','Sistemas operativos',4,4),('AED-1026','Estructura de datos',5,3),('AED-1285','Fundamentos de programacion',5,1),('AEF-1031','Fundamentos de base de datos',5,4),('AEF-1041','Matematicas discretas',5,1),('AEF-1052','Proababilidad y estadistica',5,2),('IND-1701','Desarrollo de habilidades directivas',5,7),('IND-1702','Gestión estrategica',5,8),('IND-1703','Analática de negocios',5,8),('IND-1705','Proyectos de innovación tecnológica',5,8),('INF-1704','Herramientas para la inteligencia de negocios',5,8),('SCA-1002','Administración de redes',4,8),('SCA-1025','Taller de base de datos',4,5),('SCA-1026','Taller de sistemas operativos',4,5),('SCB-1001','Administración de base de datos',5,6),('SCC-1005','Cultura empresarial',4,5),('SCC-1007','Fundamentos de ingeniería del software',4,5),('SCC-1010','Graficación',5,6),('SCC-1012','Inteligencia artificial',4,7),('SCC-1013','Investigación de operaciones',4,3),('SCC-1014','Lenguajes de interfáz',4,6),('SCC-1017','Métodos numéricos',4,4),('SCC-1019','Programación lógica y funcional',4,8),('SCD-1003','Arquitectura de computadoras',5,5),('SCD-1004','Conmutación y enrutamiento de redes',5,7),('SCD-1011','Ingeniería de software',5,6),('SCD-1015','Lenguajes y automátas I',5,6),('SCD-1016','Lenguajes y automótas II',5,7),('SCD-1018','Principios eléctricos y aplicaciones digitales',5,4),('SCD-1020','Programacion orientada a objetos',5,2),('SCD-1021','Redes de computadoras',5,6),('SCD-1022','Simluación',5,5),('SCD-1023','Sistemas programables',4,7),('SCD-1027','Tópicos avanzados de programación',5,4),('SCF-1006','Fisica general',5,3),('SCG-1009','Gestión de proyectos de software',6,7),('SCH-1024','Taller de administracion',4,2),('TGD-1701','Tópicos avanzados de programación web',5,7),('TGD-1702','Top. avanzados de seguridad en redes convergentes',5,8),('TGD-1703','Programación avanzada en tecnologías móviles',5,8),('TGF-1704','Tópicos avanzados de bases de datos',5,8),('TGF-1705','Desarrollos inteligentes',5,8);
/*!40000 ALTER TABLE `Materias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Totales`
--

DROP TABLE IF EXISTS `Totales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Totales` (
  `id` int(11) NOT NULL,
  `crediAcumulados` int(11) DEFAULT NULL,
  `semeAcumulados` int(11) DEFAULT NULL,
  `porcAvance` int(11) DEFAULT NULL,
  `totaMateCursados` int(11) DEFAULT NULL,
  `totaMateRecu` int(11) DEFAULT NULL,
  `totaMateEspe` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Totales`
--

LOCK TABLES `Totales` WRITE;
/*!40000 ALTER TABLE `Totales` DISABLE KEYS */;
/*!40000 ALTER TABLE `Totales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `coMaterias`
--

DROP TABLE IF EXISTS `coMaterias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `coMaterias` (
  `claveMa` varchar(10) NOT NULL,
  `claveMC` varchar(10) NOT NULL,
  PRIMARY KEY (`claveMa`,`claveMC`),
  KEY `claveMC` (`claveMC`),
  CONSTRAINT `coMaterias_ibfk_1` FOREIGN KEY (`claveMC`) REFERENCES `Materias` (`clave`),
  CONSTRAINT `coMaterias_ibfk_2` FOREIGN KEY (`claveMa`) REFERENCES `Materias` (`clave`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coMaterias`
--

LOCK TABLES `coMaterias` WRITE;
/*!40000 ALTER TABLE `coMaterias` DISABLE KEYS */;
INSERT INTO `coMaterias` VALUES ('ACF-0904','ACF-0903'),('AEF-1052','ACF-0902'),('SCC-1017','ACF-0905'),('SCC-1017','SCD-1020'),('SCD-1015','AED-1026'),('SCD-1027','AED-1026'),('SCF-1006','ACF-0904');
/*!40000 ALTER TABLE `coMaterias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `preMaterias`
--

DROP TABLE IF EXISTS `preMaterias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `preMaterias` (
  `claveM` varchar(10) NOT NULL,
  `claveMP` varchar(10) NOT NULL,
  PRIMARY KEY (`claveM`,`claveMP`),
  KEY `claveMP` (`claveMP`),
  CONSTRAINT `preMaterias_ibfk_1` FOREIGN KEY (`claveMP`) REFERENCES `Materias` (`clave`),
  CONSTRAINT `preMaterias_ibfk_2` FOREIGN KEY (`claveM`) REFERENCES `Materias` (`clave`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `preMaterias`
--

LOCK TABLES `preMaterias` WRITE;
/*!40000 ALTER TABLE `preMaterias` DISABLE KEYS */;
INSERT INTO `preMaterias` VALUES ('ACA-0910','ACA-0909'),('ACF-0902','ACF-0901'),('ACF-0903','ACF-0901'),('ACF-0904','ACF-0902'),('ACF-0905','ACF-0904'),('AEB-1055','SCA-1025'),('AEC-1034','SCD-1018'),('AEC-1061','AED-1026'),('AED-1026','SCD-1020'),('AEF-1031','AED-1026'),('SCA-1002','SCA-1026'),('SCA-1002','SCD-1004'),('SCB-1001','SCA-1025'),('SCC-1007','AED-1026'),('SCC-1010','AED-1026'),('SCC-1013','ACF-0902'),('SCC-1013','AEF-1052'),('SCC-1014','SCD-1003'),('SCC-1019','AED-1026'),('SCD-1004','SCD-1021'),('SCD-1011','SCC-1007'),('SCD-1018','SCF-1006'),('SCD-1020','ACC-0906'),('SCD-1021','AEC-1034'),('SCD-1022','SCC-1013'),('SCD-1022','SCD-1020'),('SCD-1027','SCD-1020'),('SCG-1009','SCA-1025'),('SCG-1009','SCD-1011'),('SCG-1009','SCH-1024');
/*!40000 ALTER TABLE `preMaterias` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-05-02  1:13:38
