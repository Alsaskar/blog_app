-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Feb 05, 2019 at 08:58 AM
-- Server version: 10.1.16-MariaDB
-- PHP Version: 5.5.38

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mywriting`
--

-- --------------------------------------------------------

--
-- Table structure for table `post`
--

CREATE TABLE `post` (
  `id` int(11) NOT NULL,
  `subject` varchar(150) NOT NULL,
  `category` enum('article','tutorial','inspiration','story') NOT NULL,
  `url` varchar(150) NOT NULL,
  `content` text NOT NULL,
  `tgl_publish` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `id_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `post`
--

INSERT INTO `post` (`id`, `subject`, `category`, `url`, `content`, `tgl_publish`, `id_user`) VALUES
(4, 'Panduan Komplit Asynchronous Programming pada Javascript', 'tutorial', 'panduan-komplit-asynchronous-programming-pada-javascript', 'Pada saat mengeksekusi beberapa proses asynchronous, ada kalanya kita harus memilih eksekusi secara serial atau parallel. Serial biasanya digunakan jika kita ingin mengeksekusi proses asynchronous secara berurutan. Sedangkan paralel jika ingin di eksekusi secara bersamaan, dalam hal ini urutan tidak menjadi prioritas tapi hasil dan performa.\n\nPada saat mengeksekusi beberapa proses asynchronous, ada kalanya kita harus memilih eksekusi secara serial atau parallel. Serial biasanya digunakan jika kita ingin mengeksekusi proses asynchronous secara berurutan. Sedangkan paralel jika ingin di eksekusi secara bersamaan, dalam hal ini urutan tidak menjadi prioritas tapi hasil dan performa.\n\nPada saat mengeksekusi beberapa proses asynchronous, ada kalanya kita harus memilih eksekusi secara serial atau parallel. Serial biasanya digunakan jika kita ingin mengeksekusi proses asynchronous secara berurutan. Sedangkan paralel jika ingin di eksekusi secara bersamaan, dalam hal ini urutan tidak menjadi prioritas tapi hasil dan performa.\n\nPada saat mengeksekusi beberapa proses asynchronous, ada kalanya kita harus memilih eksekusi secara serial atau parallel. Serial biasanya digunakan jika kita ingin mengeksekusi proses asynchronous secara berurutan. Sedangkan paralel jika ingin di eksekusi secara bersamaan, dalam hal ini urutan tidak menjadi prioritas tapi hasil dan performa.\n\nPada saat mengeksekusi beberapa proses asynchronous, ada kalanya kita harus memilih eksekusi secara serial atau parallel. Serial biasanya digunakan jika kita ingin mengeksekusi proses asynchronous secara berurutan. Sedangkan paralel jika ingin di eksekusi secara bersamaan, dalam hal ini urutan tidak menjadi prioritas tapi hasil dan performa.', '2019-02-05 07:29:42', 11),
(5, 'Panduan Komplit Asynchronous Programming pada Javascript', 'tutorial', 'panduan-komplit-asynchronous-programming-pada-javascript', 'Memahami asynchronus adalah salah satu hal penting dalam dunia Javascript. Topik ini sering dilewatkan ketika masih di tahap belajar fundamental mungkin karena konsepnya terlalu ribet dijelaskan atau alasan lain. Bahkan banyak yang sudah bertahun-tahun menggunakan javascript ternyata masih banyak yang masih kurang paham dengan konsep asynchronous. Walaupun secara praktek mungkin sudah sering digunakan.\n\nAda banyak sekali implementasi asynchronous dalam javascript seperti event, timer, request ajax, listener, interaksi user dan masih banyak lagi. NodeJS merupakan salah satu contoh sukses platform javascript yang sangat bergantung pada teknik asynchronus.\n\nTopik asynchronous memang termasuk salah satu topik yang tidak terlalu mudah untuk dipahami, tapi ada istilah “practice makes perfect”. Semakin sering di praktekkan semakin paham. Tapi praktek tanpa memahami konsep juga buta, terlalu banyak trial and error dan makan waktu. Menurut saya cara ideal untuk memahami asynchronous dengan memahami konsepnya adalah secara bertahap dan mempraktekkannya. Ingat kuncinya adalah bertahap bukan borongan.\n\nMemahami asynchronus adalah salah satu hal penting dalam dunia Javascript. Topik ini sering dilewatkan ketika masih di tahap belajar fundamental mungkin karena konsepnya terlalu ribet dijelaskan atau alasan lain. Bahkan banyak yang sudah bertahun-tahun menggunakan javascript ternyata masih banyak yang masih kurang paham dengan konsep asynchronous. Walaupun secara praktek mungkin sudah sering digunakan.\n\nAda banyak sekali implementasi asynchronous dalam javascript seperti event, timer, request ajax, listener, interaksi user dan masih banyak lagi. NodeJS merupakan salah satu contoh sukses platform javascript yang sangat bergantung pada teknik asynchronus.\n\nTopik asynchronous memang termasuk salah satu topik yang tidak terlalu mudah untuk dipahami, tapi ada istilah “practice makes perfect”. Semakin sering di praktekkan semakin paham. Tapi praktek tanpa memahami konsep juga buta, terlalu banyak trial and error dan makan waktu. Menurut saya cara ideal untuk memahami asynchronous dengan memahami konsepnya adalah secara bertahap dan mempraktekkannya. Ingat kuncinya adalah bertahap bukan borongan.\n\nMemahami asynchronus adalah salah satu hal penting dalam dunia Javascript. Topik ini sering dilewatkan ketika masih di tahap belajar fundamental mungkin karena konsepnya terlalu ribet dijelaskan atau alasan lain. Bahkan banyak yang sudah bertahun-tahun menggunakan javascript ternyata masih banyak yang masih kurang paham dengan konsep asynchronous. Walaupun secara praktek mungkin sudah sering digunakan.\n\nAda banyak sekali implementasi asynchronous dalam javascript seperti event, timer, request ajax, listener, interaksi user dan masih banyak lagi. NodeJS merupakan salah satu contoh sukses platform javascript yang sangat bergantung pada teknik asynchronus.\n\nTopik asynchronous memang termasuk salah satu topik yang tidak terlalu mudah untuk dipahami, tapi ada istilah “practice makes perfect”. Semakin sering di praktekkan semakin paham. Tapi praktek tanpa memahami konsep juga buta, terlalu banyak trial and error dan makan waktu. Menurut saya cara ideal untuk memahami asynchronous dengan memahami konsepnya adalah secara bertahap dan mempraktekkannya. Ingat kuncinya adalah bertahap bukan borongan.\n\nMemahami asynchronus adalah salah satu hal penting dalam dunia Javascript. Topik ini sering dilewatkan ketika masih di tahap belajar fundamental mungkin karena konsepnya terlalu ribet dijelaskan atau alasan lain. Bahkan banyak yang sudah bertahun-tahun menggunakan javascript ternyata masih banyak yang masih kurang paham dengan konsep asynchronous. Walaupun secara praktek mungkin sudah sering digunakan.\n\nAda banyak sekali implementasi asynchronous dalam javascript seperti event, timer, request ajax, listener, interaksi user dan masih banyak lagi. NodeJS merupakan salah satu contoh sukses platform javascript yang sangat bergantung pada teknik asynchronus.\n\nTopik asynchronous memang termasuk salah satu topik yang tidak terlalu mudah untuk dipahami, tapi ada istilah “practice makes perfect”. Semakin sering di praktekkan semakin paham. Tapi praktek tanpa memahami konsep juga buta, terlalu banyak trial and error dan makan waktu. Menurut saya cara ideal untuk memahami asynchronous dengan memahami konsepnya adalah secara bertahap dan mempraktekkannya. Ingat kuncinya adalah bertahap bukan borongan.', '2019-02-05 07:30:45', 11);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstname` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(150) NOT NULL,
  `photo` varchar(100) NOT NULL,
  `date_join` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `email`, `password`, `photo`, `date_join`) VALUES
(11, 'Alsaskar', 'Mirando', 'alsaskarmirando@gmail.com', '$2a$10$1X0SHRHSAP7pfF.S92B5L.dXJm7iITinxhZaA950RDjAwFSkjlhnC', '', '2019-01-26 10:21:33'),
(12, 'Richie', 'Mokoagow', 'richie@gmail.com', '$2a$10$Azyfu1Aj4fGUu2ObLjVzS.Kx2wvFUg4RwK.INR/9OZ/XlwICs8Cmi', '', '2019-01-29 07:42:54'),
(13, 'Jovan', 'Rauan', 'jovanrauan@gmail.com', '$2a$10$8vvoSePg8rPDbhw/QKlWfeGSsDycn/evfvI6q3LD8sWsKIlZ5aUwm', '', '2019-01-31 08:34:01'),
(14, 'Bintang', 'Algaza', 'bintang@gmail.com', '$2a$10$UuuSmUcdifL/Qd9KQowHQ.uQRDCBZ1vMfTwD/Vwn6EOGzkhFL3YqS', '', '2019-02-02 09:25:53'),
(15, 'Alolapar', 'Alokenyang', 'alolapar@gmail.com', '$2a$10$bsgRb9Ewxk/wZa/J0ZFuruXOyyzCNeVNPXC12mNnNEE/1C0MLDFEi', '', '2019-02-02 09:53:40');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `post`
--
ALTER TABLE `post`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
