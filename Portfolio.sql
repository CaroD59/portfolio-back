CREATE DATABASE Portfolio;
USE Portfolio;

CREATE TABLE `GitHub_Creations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(128) NOT NULL,
  `github_url_front` varchar(255) NOT NULL,
  `github_url_back` varchar(255) NULL,
  `github_image` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  PRIMARY KEY(`id`)
);