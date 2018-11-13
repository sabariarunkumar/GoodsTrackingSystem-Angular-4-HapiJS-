-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 13, 2018 at 03:31 PM
-- Server version: 10.1.26-MariaDB
-- PHP Version: 7.1.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `products1`
--

-- --------------------------------------------------------

--
-- Table structure for table `product_details`
--

CREATE TABLE `product_details` (
  `order_id` varchar(30) NOT NULL,
  `product_name` varchar(30) NOT NULL,
  `customer_name` varchar(30) NOT NULL,
  `phone` varchar(30) NOT NULL,
  `price` varchar(30) NOT NULL,
  `location` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product_details`
--

INSERT INTO `product_details` (`order_id`, `product_name`, `customer_name`, `phone`, `price`, `location`) VALUES
('1212', 'MSpeaker', 'Mksachin', '4785226955', '1000', 'mohali'),
('124', 'qwerty', 'Mac', '7429644145', '3242', 'Mumbai'),
('21', 'HP', 'Sabari', '7598429040', '100', 'Gobichettipalayam'),
('452', 'Kotlin', 'Thiru', '8465896566466', '753', 'Kerala'),
('4578', 'Jockey', 'Kotpit', '832168153', '45', 'Punjab'),
('564', 'Phone', 'Sabari', '698526544', '800', 'Chennai'),
('62365', 'Oppo', 'Dhoni', '6875315845', '200', 'Erode'),
('78', 'Lenova', 'Kumar', '75988453464', '1000', 'Erode'),
('781', 'Charger', 'Thiru', '7854127854', '7802', 'Chennai'),
('795', 'Samsung', 'Sabari', '85698563', '845', 'Telungana'),
('8795', 'Gamepad', 'Kumaran', '78468522', '8000', 'mumbai'),
('89', 'Mouse', 'Vigrama', '1234242', '1500', 'Mumbai'),
('923', 'Pen', 'Mahe', '26346464646', '8792', '400'),
('9631', 'Okio', 'Dhoni', '321853128', '45', 'Mizoram'),
('98', 'Zen', 'Vignesh', '893241522253', '899', 'Salem'),
('9823', 'Ipad', 'Venkatesh', '783218320', '5820', 'Trippur'),
('99', 'Amplifier', 'Arun', '826598165', '500', 'trichy');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product_details`
--
ALTER TABLE `product_details`
  ADD PRIMARY KEY (`order_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
