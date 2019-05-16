-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 15, 2019 at 07:51 AM
-- Server version: 5.7.18
-- PHP Version: 7.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kunjung`
--

-- --------------------------------------------------------

--
-- Table structure for table `pengunjung`
--

CREATE TABLE `pengunjung` (
  `id` int(11) NOT NULL,
  `nama` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `no_telp` varchar(20) NOT NULL,
  `kesan` text NOT NULL,
  `waktu` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pengunjung`
--

INSERT INTO `pengunjung` (`id`, `nama`, `email`, `no_telp`, `kesan`, `waktu`) VALUES
(15, 'Febrian Dwi Putra', 'febrikimli0@gmail.com', '089688940024', 'enak sih', '2019-05-14 15:00:07'),
(16, 'dawd', 'febri09494@gmail.com', '3123123', 'djawnjdwnajdaw', '2019-05-14 15:20:03'),
(17, 'dnawdaw', 'febrikimli0@gmail.com', '13123', 'dnawjdnjwand', '2019-05-14 15:20:18'),
(18, 'feb', 'febri09494@gmail.com', '213213', 'ndjwandjwa', '2019-05-15 07:13:56'),
(19, 'dawd', 'febrikimli0@gmail.com', '2132', 'swnjadjawnd', '2019-05-15 07:15:53'),
(20, 'dnawj', 'febri09494@gmail.com', '23213', 'YAYAYYAYAYAYYAYAYYAYA', '2019-05-15 07:49:26');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pengunjung`
--
ALTER TABLE `pengunjung`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pengunjung`
--
ALTER TABLE `pengunjung`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
