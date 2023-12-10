-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 18 oct. 2023 à 12:25
-- Version du serveur : 10.4.28-MariaDB
-- Version de PHP : 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `cabdee`
--

-- --------------------------------------------------------

--
-- Structure de la table `activesession`
--

CREATE TABLE `activesession` (
  `id` int(11) NOT NULL,
  `token` varchar(80) NOT NULL,
  `userID` int(11) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `billing`
--

CREATE TABLE `billing` (
  `BillingNbr` varchar(8) NOT NULL,
  `BookingID` int(11) DEFAULT NULL,
  `BillingAmount` decimal(15,3) DEFAULT NULL,
  `DriverID` varchar(10) DEFAULT NULL,
  `clientID` varchar(10) DEFAULT NULL,
  `Billingcol` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `billing_document`
--

CREATE TABLE `billing_document` (
  `BLDocumentID` int(11) NOT NULL,
  `BillingNbr` varchar(45) DEFAULT NULL,
  `Path` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `booking`
--

CREATE TABLE `booking` (
  `BookingID` int(11) NOT NULL,
  `ClientID` varchar(10) DEFAULT NULL,
  `DriverID` varchar(10) DEFAULT NULL,
  `BookingStatus` varchar(1) DEFAULT NULL,
  `BookingDate` datetime DEFAULT NULL,
  `PickLocationID` int(11) DEFAULT NULL,
  `BillingNbr` varchar(8) DEFAULT NULL,
  `BookingNote` varchar(200) DEFAULT NULL,
  `DropLocationID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `cars`
--

CREATE TABLE `cars` (
  `RegNumber` varchar(45) NOT NULL,
  `Model` varchar(45) DEFAULT NULL,
  `Photo` varchar(45) DEFAULT NULL,
  `DriverID` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `chatmessage`
--

CREATE TABLE `chatmessage` (
  `MessageID` int(11) NOT NULL,
  `SessionID` int(11) DEFAULT NULL,
  `Sender` varchar(45) DEFAULT NULL,
  `Content` varchar(45) DEFAULT NULL,
  `TimeStamp` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `chatsessions`
--

CREATE TABLE `chatsessions` (
  `SessionID` int(11) NOT NULL,
  `ClientID` varchar(10) DEFAULT NULL,
  `DriverID` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `client`
--

CREATE TABLE `client` (
  `ClientID` varchar(10) NOT NULL,
  `PasswordCL` varchar(300) DEFAULT NULL,
  `NameCL` varchar(45) DEFAULT NULL,
  `LastNameCL` varchar(45) DEFAULT NULL,
  `BirthDateCL` date DEFAULT NULL,
  `ActiveCL` tinyint(4) DEFAULT NULL,
  `UsernameCL` varchar(45) DEFAULT NULL,
  `PhoneCL` varchar(45) DEFAULT NULL,
  `EmailCL` varchar(50) DEFAULT NULL,
  `PhotoCL` varchar(200) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Déchargement des données de la table `client`
--

INSERT INTO `client` (`ClientID`, `PasswordCL`, `NameCL`, `LastNameCL`, `BirthDateCL`, `ActiveCL`, `UsernameCL`, `PhoneCL`, `EmailCL`, `PhotoCL`, `createdAt`, `updatedAt`) VALUES
('CL87157882', '$2a$10$6Jlv5dhkiQCN6GkMKCO52ePpVSWE6F.UqmyxJS.3lO7GoZDNvjici', 'andre', 'visco', '1992-01-01', 1, 'andre00', '33001252336', 'andre@live.fr', NULL, '2023-10-02 11:42:54', '2023-10-02 11:42:54'),
('CL8775', '$2a$08$zBmuI8ILzmljqNJ8mc3/mO8SpzXTW20lmJhABbanLFbD9p3FMxmzy', 'Rami', 'Jaubert', '2000-04-21', 1, 'client2', '3304522052', 'client@live.fr', NULL, '2023-10-10 11:50:29', '2023-10-10 11:50:29');

-- --------------------------------------------------------

--
-- Structure de la table `documentdriver`
--

CREATE TABLE `documentdriver` (
  `DocDriverID` int(11) NOT NULL,
  `Identitydocument` varchar(45) DEFAULT NULL,
  `DriverLicence` varchar(45) DEFAULT NULL,
  `Rcpro` varchar(45) DEFAULT NULL,
  `RegVTC` varchar(45) DEFAULT NULL,
  `VTCCard` varchar(45) DEFAULT NULL,
  `GrayCard` varchar(45) DEFAULT NULL,
  `InsuranceCertif` varchar(45) DEFAULT NULL,
  `DriverID` varchar(10) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `driver`
--

CREATE TABLE `driver` (
  `DriverID` varchar(10) NOT NULL,
  `EmailDR` varchar(50) DEFAULT NULL,
  `PasswordDR` varchar(80) DEFAULT NULL,
  `ActiveDR` tinyint(4) DEFAULT NULL,
  `ServiceID` int(11) DEFAULT NULL,
  `GroupID` int(11) DEFAULT NULL,
  `NameDR` varchar(45) NOT NULL,
  `LastNameDR` varchar(45) NOT NULL,
  `UsernameDR` varchar(45) NOT NULL,
  `PhoneDR` varchar(45) NOT NULL,
  `BirthDateDR` datetime DEFAULT NULL,
  `PhotoDR` varchar(200) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Déchargement des données de la table `driver`
--

INSERT INTO `driver` (`DriverID`, `EmailDR`, `PasswordDR`, `ActiveDR`, `ServiceID`, `GroupID`, `NameDR`, `LastNameDR`, `UsernameDR`, `PhoneDR`, `BirthDateDR`, `PhotoDR`, `createdAt`, `updatedAt`) VALUES
('DR03457', 'driver@gmail.com', '$2a$08$Wy1oiKbQ8TI0pAavy8Z3Y.dSSfXJe2VJKK4viag8VyTXqzAfqOg96', 1, 0, 0, 'driver', 'one', 'driver1', '335805621', '1993-10-02 00:00:00', NULL, '2023-10-10 10:04:44', '2023-10-10 10:04:44'),
('DR157882', 'michel@live.fr', '$2a$10$CF3BTbblXMpcptEeSUD0duOlXmZYmG/460NHqLPvWParcpEnB7VEC', 1, 0, 0, 'Michel', 'Lacoste', 'michel100', '3352552123', '0000-00-00 00:00:00', NULL, '2023-10-02 11:42:57', '2023-10-02 11:42:57'),
('DR3350', 'Paul@live.fr', '$2a$08$Wy1oiKbQ8TI0pAavy8Z3Y.dSSfXJe2VJKK4viag8VyT...\r\n', 0, 0, 0, 'Paul', 'Konaté', 'paul2002', '33015520256', '2002-10-03 00:26:32', NULL, '2023-10-02 09:46:27', '2023-10-02 09:46:27');

-- --------------------------------------------------------

--
-- Structure de la table `driver_group`
--

CREATE TABLE `driver_group` (
  `GroupID` int(11) NOT NULL,
  `GroupLabel` varchar(45) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Déchargement des données de la table `driver_group`
--

INSERT INTO `driver_group` (`GroupID`, `GroupLabel`, `createdAt`, `updatedAt`) VALUES
(0, 'Groupe Bordeaux', NULL, NULL),
(1, 'Villa Palace', '2023-10-17 00:20:34', '2023-10-17 00:20:34');

-- --------------------------------------------------------

--
-- Structure de la table `driver_preferences`
--

CREATE TABLE `driver_preferences` (
  `PreferenceID` int(11) NOT NULL,
  `BabySeat` tinyint(4) DEFAULT NULL,
  `Wheelchair` tinyint(4) DEFAULT NULL,
  `Guidedog` tinyint(4) DEFAULT NULL,
  `Startunavtime` time DEFAULT NULL,
  `Endunavtime` time DEFAULT NULL,
  `MinTimeRes` int(11) DEFAULT NULL,
  `MaxTimeCanc` int(11) DEFAULT NULL,
  `DescriptionDR` varchar(300) DEFAULT NULL,
  `PhotoDR` varchar(45) DEFAULT NULL,
  `PaiementCash` tinyint(4) DEFAULT NULL,
  `PaiementTPE` tinyint(4) DEFAULT NULL,
  `PaiementOnline` tinyint(4) DEFAULT NULL,
  `DriverID` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `feedback`
--

CREATE TABLE `feedback` (
  `Feedbackcol1` varchar(45) DEFAULT NULL,
  `Feedbackcol` varchar(45) DEFAULT NULL,
  `FeedbackID` int(11) NOT NULL,
  `ClientID` varchar(10) DEFAULT NULL,
  `DriverID` varchar(10) DEFAULT NULL,
  `FeedbackMessage` varchar(200) DEFAULT NULL,
  `FeedbackRating` int(11) DEFAULT NULL,
  `FeedbackResponse` varchar(200) DEFAULT NULL,
  `Feedbackcol2` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `location`
--

CREATE TABLE `location` (
  `LocationID` int(11) NOT NULL,
  `Adress` varchar(45) DEFAULT NULL,
  `Longitude` varchar(45) DEFAULT NULL,
  `Latitude` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `notifications`
--

CREATE TABLE `notifications` (
  `NotificationID` int(11) NOT NULL,
  `NotificationLabel` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Déchargement des données de la table `roles`
--

INSERT INTO `roles` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'user', '2023-10-03 11:20:37', '2023-10-03 11:20:37'),
(2, 'moderator', '2023-10-03 11:20:37', '2023-10-03 11:20:37'),
(3, 'admin', '2023-10-03 11:20:52', '2023-10-03 11:20:52');

-- --------------------------------------------------------

--
-- Structure de la table `services`
--

CREATE TABLE `services` (
  `ServiceID` int(11) NOT NULL,
  `ServiceLabel` varchar(45) DEFAULT NULL,
  `ServicePrice` decimal(15,3) DEFAULT NULL,
  `Actif` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Déchargement des données de la table `services`
--

INSERT INTO `services` (`ServiceID`, `ServiceLabel`, `ServicePrice`, `Actif`) VALUES
(0, 'Premium', 15.000, 1);

-- --------------------------------------------------------

--
-- Structure de la table `service_features`
--

CREATE TABLE `service_features` (
  `FeatureID` int(11) NOT NULL,
  `ServiceID` int(11) NOT NULL,
  `FeatureLabel` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `settings`
--

CREATE TABLE `settings` (
  `SettingNumber` int(11) NOT NULL,
  `SettingLabel` varchar(45) DEFAULT NULL,
  `SettingValueString` varchar(45) DEFAULT NULL,
  `SettingValueNum` decimal(15,3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `name` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `photo` varchar(200) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `name`, `lastName`, `photo`, `createdAt`, `updatedAt`) VALUES
(2, 'alaa', 'alaacherif@gmail.com', '$2a$08$UN7/cfSQ1mdKQvVap/rC6eiYmMjqQxlm.oCmfwC6baD/6kdhyhPqC', 'Alaa', 'Cherif', NULL, '2023-10-03 09:48:31', '2023-10-15 23:47:29'),
(7, 'admin', 'admin@email.com', '$2a$08$E486xF5gUh0OxQwFwusbi.5fkhgRNZ0APlnGxoN8U3NIlF/uybLma', 'Walaa', 'Teyeb', NULL, '2023-10-15 23:28:46', '2023-10-15 23:51:11');

-- --------------------------------------------------------

--
-- Structure de la table `user_roles`
--

CREATE TABLE `user_roles` (
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `roleId` int(11) NOT NULL,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Déchargement des données de la table `user_roles`
--

INSERT INTO `user_roles` (`createdAt`, `updatedAt`, `roleId`, `userId`) VALUES
('2023-10-03 09:48:31', '2023-10-03 09:48:31', 1, 2),
('2023-10-15 23:28:46', '2023-10-15 23:28:46', 1, 7);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `activesession`
--
ALTER TABLE `activesession`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `billing`
--
ALTER TABLE `billing`
  ADD PRIMARY KEY (`BillingNbr`),
  ADD KEY `BookingID_idx` (`BookingID`);

--
-- Index pour la table `billing_document`
--
ALTER TABLE `billing_document`
  ADD PRIMARY KEY (`BLDocumentID`),
  ADD KEY `FK_BillingID_Document_idx` (`BillingNbr`);

--
-- Index pour la table `booking`
--
ALTER TABLE `booking`
  ADD PRIMARY KEY (`BookingID`),
  ADD KEY `BillingNbr_idx` (`BillingNbr`),
  ADD KEY `DriverID_idx` (`DriverID`),
  ADD KEY `DropLocationID_idx` (`DropLocationID`),
  ADD KEY `PickLocationID_idx` (`PickLocationID`),
  ADD KEY `ClientID_idx` (`ClientID`);

--
-- Index pour la table `cars`
--
ALTER TABLE `cars`
  ADD PRIMARY KEY (`RegNumber`),
  ADD KEY `DriverID_idx` (`DriverID`);

--
-- Index pour la table `chatmessage`
--
ALTER TABLE `chatmessage`
  ADD PRIMARY KEY (`MessageID`),
  ADD KEY `SessionID_idx` (`SessionID`);

--
-- Index pour la table `chatsessions`
--
ALTER TABLE `chatsessions`
  ADD PRIMARY KEY (`SessionID`),
  ADD KEY `DriverID_idx` (`DriverID`),
  ADD KEY `ClientID_idx` (`ClientID`);

--
-- Index pour la table `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`ClientID`);

--
-- Index pour la table `documentdriver`
--
ALTER TABLE `documentdriver`
  ADD PRIMARY KEY (`DocDriverID`),
  ADD KEY `DriverID_idx` (`DriverID`);

--
-- Index pour la table `driver`
--
ALTER TABLE `driver`
  ADD PRIMARY KEY (`DriverID`),
  ADD KEY `GroupID_idx` (`GroupID`),
  ADD KEY `ServiceID_idx` (`ServiceID`);

--
-- Index pour la table `driver_group`
--
ALTER TABLE `driver_group`
  ADD PRIMARY KEY (`GroupID`);

--
-- Index pour la table `driver_preferences`
--
ALTER TABLE `driver_preferences`
  ADD PRIMARY KEY (`PreferenceID`),
  ADD KEY `DriverID_idx` (`DriverID`);

--
-- Index pour la table `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`FeedbackID`),
  ADD KEY `DriverID_idx` (`DriverID`),
  ADD KEY `ClientID_idx` (`ClientID`);

--
-- Index pour la table `location`
--
ALTER TABLE `location`
  ADD PRIMARY KEY (`LocationID`);

--
-- Index pour la table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`NotificationID`);

--
-- Index pour la table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`ServiceID`);

--
-- Index pour la table `service_features`
--
ALTER TABLE `service_features`
  ADD PRIMARY KEY (`FeatureID`,`ServiceID`),
  ADD KEY `ServiceID_idx` (`ServiceID`);

--
-- Index pour la table `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`SettingNumber`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `user_roles`
--
ALTER TABLE `user_roles`
  ADD PRIMARY KEY (`roleId`,`userId`),
  ADD KEY `userId` (`userId`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `activesession`
--
ALTER TABLE `activesession`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `documentdriver`
--
ALTER TABLE `documentdriver`
  MODIFY `DocDriverID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `billing`
--
ALTER TABLE `billing`
  ADD CONSTRAINT `FK_BookingID_Billing` FOREIGN KEY (`BookingID`) REFERENCES `booking` (`BookingID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `billing_document`
--
ALTER TABLE `billing_document`
  ADD CONSTRAINT `FK_BillingID_Document` FOREIGN KEY (`BillingNbr`) REFERENCES `billing` (`BillingNbr`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `booking`
--
ALTER TABLE `booking`
  ADD CONSTRAINT `DropLocationID` FOREIGN KEY (`DropLocationID`) REFERENCES `location` (`LocationID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_BillingNbr_Booking` FOREIGN KEY (`BillingNbr`) REFERENCES `billing` (`BillingNbr`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_ClientID_Booking` FOREIGN KEY (`ClientID`) REFERENCES `client` (`ClientID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_DriverID_Booking` FOREIGN KEY (`DriverID`) REFERENCES `driver` (`DriverID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `PickLocationID` FOREIGN KEY (`PickLocationID`) REFERENCES `location` (`LocationID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `cars`
--
ALTER TABLE `cars`
  ADD CONSTRAINT `FK_DriverID_Car` FOREIGN KEY (`DriverID`) REFERENCES `driver` (`DriverID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `chatmessage`
--
ALTER TABLE `chatmessage`
  ADD CONSTRAINT `FK_SessionID_Message` FOREIGN KEY (`SessionID`) REFERENCES `chatsessions` (`SessionID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `chatsessions`
--
ALTER TABLE `chatsessions`
  ADD CONSTRAINT `FK_ClientID_Chat` FOREIGN KEY (`ClientID`) REFERENCES `client` (`ClientID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_DriverID_Chat` FOREIGN KEY (`DriverID`) REFERENCES `driver` (`DriverID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `documentdriver`
--
ALTER TABLE `documentdriver`
  ADD CONSTRAINT `FK_DriverID_Document` FOREIGN KEY (`DriverID`) REFERENCES `driver` (`DriverID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `driver`
--
ALTER TABLE `driver`
  ADD CONSTRAINT `FKServiceID_Driver` FOREIGN KEY (`ServiceID`) REFERENCES `services` (`ServiceID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_GroupID_Driver` FOREIGN KEY (`GroupID`) REFERENCES `driver_group` (`GroupID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `driver_preferences`
--
ALTER TABLE `driver_preferences`
  ADD CONSTRAINT `FK_DriverID_Preferences` FOREIGN KEY (`DriverID`) REFERENCES `driver` (`DriverID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `feedback`
--
ALTER TABLE `feedback`
  ADD CONSTRAINT `FK_ClientID_Feedback` FOREIGN KEY (`ClientID`) REFERENCES `client` (`ClientID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_DriverID_Feedback` FOREIGN KEY (`DriverID`) REFERENCES `driver` (`DriverID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `service_features`
--
ALTER TABLE `service_features`
  ADD CONSTRAINT `FK_ServiceID_Feature` FOREIGN KEY (`ServiceID`) REFERENCES `services` (`ServiceID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `user_roles`
--
ALTER TABLE `user_roles`
  ADD CONSTRAINT `user_roles_ibfk_1` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_roles_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
