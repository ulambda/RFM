-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 04, 2021 at 09:42 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `RFM`
--

-- --------------------------------------------------------

--
-- Table structure for table `songs`
--

CREATE TABLE `songs` (
  `id` int(11) NOT NULL,
  `directory` varchar(1000) NOT NULL,
  `title` varchar(1000) NOT NULL,
  `artist` varchar(1000) NOT NULL,
  `cover` varchar(1000) NOT NULL,
  `listens` int(11) NOT NULL,
  `downloads` int(11) NOT NULL,
  `likes` int(111) NOT NULL,
  `duration` varchar(11) NOT NULL,
  `genre` varchar(11) NOT NULL,
  `mood` varchar(11) NOT NULL,
  `instrument` varchar(11) NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `songs`
--

INSERT INTO `songs` (`id`, `directory`, `title`, `artist`, `cover`, `listens`, `downloads`, `likes`, `duration`, `genre`, `mood`, `instrument`, `date`) VALUES
(85, 'resources/songs/audio/Illhearted2.mp3', 'Ill Hearted', 'Upwards', 'resources/songs/covers/AlbumCover6.png', 4, 0, 0, '3:26', 'Pop', 'Sad', 'Synth', '2021-08-26'),
(86, 'resources/songs/audio/so Fly.mp3', 'So Fly', 'Upwards', 'resources/songs/covers/AlbumCover7.png', 3, 0, 0, '3:22', 'Future bass', 'Chill', 'Synth', '2021-08-26'),
(90, 'resources/songs/audio/Flow Beat.mp3', 'Flow', 'Upwards', 'resources/songs/covers/AlbumCover4.png', 1, 0, 0, '2:53', 'Hip hop', 'Chill', 'Drums', '2021-08-26'),
(91, 'resources/songs/audio/Lost you beat.mp3', 'Lost you', 'Upwards', 'resources/songs/covers/AlbumCover5.png', 1, 0, 0, '1:04', 'Hip hop', 'Chill', 'Drums', '2021-08-26'),
(92, 'resources/songs/audio/Flip+-= (Cm 150).mp3', 'Flip', 'Upwards', 'resources/songs/covers/AlbumCover6.png', 2, 0, 0, '3:12', 'Hip hop', 'Intense', 'Drums', '2021-08-26'),
(93, 'resources/songs/audio/Deep and Dark.mp3', 'Deep and Dark', 'Upwards', 'resources/songs/covers/AlbumCover7.png', 2, 0, 0, '2:14', 'Hip hop', 'Intense', 'Drums', '2021-08-26'),
(95, 'resources/songs/audio/Feeling it better.mp3', 'Feeling it', 'Upwards', 'resources/songs/covers/AlbumCover2.png', 2, 0, 0, '2:03', 'Hip hop', 'Chill', 'Drums', '2021-08-26'),
(96, 'resources/songs/audio/Keep it low 4.mp3', 'Keep it low', 'Upwards', 'resources/songs/covers/AlbumCover4.png', 3, 0, 0, '2:34', 'None', 'Happy', 'Drums', '2021-08-26'),
(97, 'resources/songs/audio/Oracless (Quieter snare).mp3', 'Oracles', 'Upwards', 'resources/songs/covers/AlbumCover5.png', 4, 0, 0, '2:36', 'None', 'Happy', 'Synth', '2021-08-26'),
(98, 'resources/songs/audio/Lonely Vibes better.mp3', 'Lonely Vibes', 'Upwards', 'resources/songs/covers/AlbumCover6.png', 5, 1, 0, '2:08', 'None', 'Sad', 'Piano', '2021-08-26'),
(99, 'resources/songs/audio/chance (1).mp3', 'Chance', 'Yung Limp', 'resources/songs/covers/channels4_profile.jpg', 25, 0, 0, '3:53', 'Hip hop', 'Happy', 'Precussion', '2021-08-26'),
(100, 'resources/songs/audio/fiverrTeccaBeat(1).mp3', 'Tecca beat', 'Yung Limp', 'resources/songs/covers/channels4_profile.jpg', 6, 0, 0, '2:11', 'Pop', 'Chill', 'Synth', '2021-08-26'),
(101, 'resources/songs/audio/Strong_Beat.mp3', 'Strong Beat', 'Yung Limp', 'resources/songs/covers/channels4_profile.jpg', 12, 7, 0, '0:41', 'Pop', 'Chill', 'Piano', '2021-08-26'),
(108, 'resources/songs/audio/Geometry.mp3', 'Geometry', 'Upwards', 'resources/songs/covers/AlbumCover1.png', 1, 0, 0, '3:55', 'Future bass', 'Chill', 'Synth', '2021-08-31'),
(109, 'resources/songs/audio/The New Unkown (Chill Future Bass).mp3', 'The New Unknown', 'Upwards', 'resources/songs/covers/AlbumCover2.png', 0, 0, 0, '3:39', 'Future bass', 'Chill', 'Synth', '2021-08-31'),
(110, 'resources/songs/audio/Out Of Time (Melodic_Chill Bass).mp3', 'Out of Time', 'Upwards', 'resources/songs/covers/AlbumCover3.png', 0, 0, 0, '3:52', 'Future bass', 'Chill', 'Synth', '2021-08-31'),
(111, 'resources/songs/audio/falling smudges.mp3', 'Falling Smudges', 'Upwards', 'resources/songs/covers/AlbumCover4.png', 0, 0, 0, '2:59', 'Future bass', 'None', 'None', '2021-08-31'),
(112, 'resources/songs/audio/Don_t Let Go.mp3', 'Don\'t Let Go', 'Upwards', 'resources/songs/covers/AlbumCover5.png', 0, 0, 0, '3:51', 'Future bass', 'None', 'None', '2021-08-31'),
(113, 'resources/songs/audio/Leaving You.mp3', 'Leaving You – feat. Benj B and Daisy S', 'Upwards', 'resources/songs/covers/AlbumCover6.png', 0, 0, 0, '3:26', 'Future bass', 'Intense', 'Synth', '2021-08-31'),
(114, 'resources/songs/audio/Insomnia.mp3', 'Insomnia', 'Upwards', 'resources/songs/covers/AlbumCover7.png', 0, 0, 0, '3:42', 'Future bass', 'Chill', 'Synth', '2021-08-31'),
(115, 'resources/songs/audio/Ties.mp3', 'Ties', 'Upwards', 'resources/songs/covers/AlbumCover1.png', 0, 0, 0, '2:30', 'Hip hop', 'Intense', 'Drums', '2021-08-31'),
(116, 'resources/songs/audio/Jewels.mp3', 'Jewels', 'Upwards', 'resources/songs/covers/AlbumCover2.png', 0, 0, 0, '2:13', 'Hip hop', 'None', 'None', '2021-08-31'),
(117, 'resources/songs/audio/Poppin.mp3', 'Poppin', 'Upwards', 'resources/songs/covers/AlbumCover3.png', 0, 0, 0, '3:12', 'Hip hop', 'Sad', 'Drums', '2021-08-31'),
(118, 'resources/songs/audio/Sunsets.mp3', 'Sunsets', 'Upwards', 'resources/songs/covers/AlbumCover4.png', 0, 0, 0, '2:53', 'Hip hop', 'Chill', 'Drums', '2021-08-31'),
(119, 'resources/songs/audio/Feel_in drillin.mp3', 'Feelings', 'Upwards', 'resources/songs/covers/AlbumCover5.png', 0, 0, 0, '2:58', 'Hip hop', 'Chill', 'Piano', '2021-08-31'),
(120, 'resources/songs/audio/Psycho.mp3', 'Psycho', 'Upwards', 'resources/songs/covers/AlbumCover6.png', 0, 0, 0, '2:31', 'Hip hop', 'Chill', 'Drums', '2021-08-31'),
(121, 'resources/songs/audio/Chariots.mp3', 'Chariots', 'Upwards', 'resources/songs/covers/AlbumCover7.png', 0, 0, 0, '2:38', 'Cinematic', 'Intense', 'Drums', '2021-08-31'),
(122, 'resources/songs/audio/Wrlds.mp3', 'Worlds', 'Upwards', 'resources/songs/covers/AlbumCover1.png', 0, 0, 0, '3:25', 'None', 'Sad', 'Guitar', '2021-08-31'),
(123, 'resources/songs/audio/Lowkey.mp3', 'Low Key', 'Upwards', 'resources/songs/covers/AlbumCover2.png', 0, 0, 0, '3:57', 'None', 'Sad', 'Guitar', '2021-08-31'),
(124, 'resources/songs/audio/Quick.mp3', 'Quick', 'Upwards', 'resources/songs/covers/AlbumCover3.png', 0, 0, 0, '3:12', 'None', 'Intense', 'Synth', '2021-08-31'),
(125, 'resources/songs/audio/reeves.mp3', 'Reeves', 'Upwards', 'resources/songs/covers/AlbumCover4.png', 0, 0, 0, '3:14', 'None', 'Intense', 'Synth', '2021-08-31'),
(126, 'resources/songs/audio/Tantrum.mp3', 'Tantrum', 'Upwards', 'resources/songs/covers/AlbumCover5.png', 0, 0, 0, '2:12', 'None', 'Intense', 'Synth', '2021-08-31'),
(127, 'resources/songs/audio/2021 vision.mp3', '2021 Vision', 'Upwards', 'resources/songs/covers/AlbumCover6.png', 0, 0, 0, '1:58', 'Cinematic', 'Sad', 'Piano', '2021-08-31'),
(128, 'resources/songs/audio/Crashing.mp3', 'Crashing – feat. Benj B', 'Upwards', 'resources/songs/covers/lonewolfcover.png', 1, 0, 0, '4:00', 'Cinematic', 'Intense', 'Piano', '2021-08-31'),
(129, 'resources/songs/audio/In the Air (Cinematic).mp3', 'In The Air', 'Upwards', 'resources/songs/covers/lonewolfcover.png', 1, 0, 0, '3:31', 'Cinematic', 'Chill', 'Piano', '2021-08-31'),
(130, 'resources/songs/audio/its tiring.mp3', 'It\'s Tiring', 'Upwards', 'resources/songs/covers/AlbumCover2.png', 1, 0, 0, '1:44', 'Cinematic', 'Sad', 'Piano', '2021-08-31'),
(131, 'resources/songs/audio/lofi cinema.mp3', 'Lofi Cinema', 'Upwards', 'resources/songs/covers/lonewolfcover.png', 1, 0, 0, '2:48', 'Cinematic', 'Sad', 'Piano', '2021-08-31'),
(132, 'resources/songs/audio/Shadow of the war v4.mp3', 'Shadow of War', 'Upwards', 'resources/songs/covers/lonewolfcover.png', 1, 0, 0, '3:26', 'Cinematic', 'Intense', 'Piano', '2021-08-31'),
(133, 'resources/songs/audio/Time (Cinematic track).mp3', 'Time', 'Upwards', 'resources/songs/covers/lonewolfcover.png', 1, 0, 0, '3:22', 'Cinematic', 'Intense', 'Piano', '2021-08-31'),
(134, 'resources/songs/audio/waiting2.mp3', 'Waiting', 'Upwards', 'resources/songs/covers/lonewolfcover.png', 1, 0, 0, '2:46', 'Cinematic', 'Sad', 'Piano', '2021-08-31'),
(135, 'resources/songs/audio/WW2 Airplane Game Theme Song.mp3', 'WW2 Airplane Song', 'Upwards', 'resources/songs/covers/lonewolfcover.png', 1, 0, 0, '1:58', 'Cinematic', 'Intense', 'None', '2021-08-31'),
(136, 'resources/songs/audio/Homesick.mp3', 'Homesick', 'Upwards', 'resources/songs/covers/AlbumCover1.png', 0, 0, 0, '1:19', 'Hip hop', 'Chill', 'Piano', '2021-08-31'),
(137, 'resources/songs/audio/I miss you.mp3', 'I Miss You', 'Upwards', 'resources/songs/covers/AlbumCover2.png', 0, 0, 0, '1:03', 'Hip hop', 'Sad', 'Piano', '2021-08-31'),
(138, 'resources/songs/audio/in the rain with Yourself.mp3', 'In The Rain With Yourself', 'Upwards', 'resources/songs/covers/AlbumCover3.png', 0, 0, 0, '2:12', 'Hip hop', 'Chill', 'Piano', '2021-08-31'),
(139, 'resources/songs/audio/lalala.mp3', 'Lalala', 'Upwards', 'resources/songs/covers/AlbumCover4.png', 0, 0, 0, '2:21', 'Hip hop', 'Chill', 'Piano', '2021-08-31'),
(140, 'resources/songs/audio/Seafoam.mp3', 'Seafoam', 'Upwards', 'resources/songs/covers/AlbumCover5.png', 0, 0, 0, '1:39', 'Hip hop', 'Chill', 'Piano', '2021-08-31'),
(141, 'resources/songs/audio/rainy day 1.mp3', 'Rainy Day', 'Upwards', 'resources/songs/covers/AlbumCover6.png', 0, 0, 0, '2:05', 'Hip hop', 'Chill', 'Piano', '2021-08-31'),
(142, 'resources/songs/audio/Ashes - Upwards. Remix.mp3', 'Ashes (Remix) – Jon Sine', 'Upwards', 'resources/songs/covers/AlbumCover7.png', 1, 0, 0, '2:35', 'Future bass', 'Chill', 'Synth', '2021-08-31'),
(143, 'resources/songs/audio/Beggin - UK Drill Remix.mp3', 'Beggin (Drill Remix) – Maneskin', 'Upwards', 'resources/songs/covers/AlbumCover1.png', 0, 0, 0, '2:11', 'Hip hop', 'Intense', 'Drums', '2021-08-31'),
(144, 'resources/songs/audio/Butter - Future Bass Remix.mp3', 'Butter (Remix) – BTS', 'Upwards', 'resources/songs/covers/AlbumCover2.png', 0, 0, 0, '3:22', 'Future bass', 'Happy', 'Drums', '2021-08-31'),
(145, 'resources/songs/audio/Chasing (Future Bass Remix).mp3', 'Chasing (Remix) – NF', 'Upwards', 'resources/songs/covers/AlbumCover3.png', 0, 0, 0, '3:53', 'Future bass', 'Sad', 'Drums', '2021-08-31'),
(146, 'resources/songs/audio/Comptine D un Autre (Cover).mp3', 'Comptine d\'un autre été (Remix) – Yann Tiersen', 'Upwards', 'resources/songs/covers/AlbumCover4.png', 0, 0, 0, '2:55', 'Future bass', 'Happy', 'Piano', '2021-08-31'),
(147, 'resources/songs/audio/Cool (Future Bass Remix).mp3', 'Cool (Remix) – Matthew Parker & Landon Austin', 'Upwards', 'resources/songs/covers/AlbumCover5.png', 0, 0, 0, '4:33', 'Future bass', 'Happy', 'Drums', '2021-08-31'),
(148, 'resources/songs/audio/CornField Chase remix.mp3', 'Cornfield Chase (Remix) – Hans Zimmer', 'Upwards', 'resources/songs/covers/AlbumCover6.png', 0, 0, 0, '3:17', 'Future bass', 'Intense', 'Piano', '2021-08-31'),
(149, 'resources/songs/audio/Don_t Start Now (Remix).mp3', 'Don\'t Start Now (Remix) – Dua Lipa', 'Upwards', 'resources/songs/covers/AlbumCover7.png', 0, 0, 0, '2:20', 'Future bass', 'Chill', 'Piano', '2021-08-31'),
(150, 'resources/songs/audio/Elodie Reviere - Red Carpet - Upwards. Remix.mp3', 'Red Carpet (Remix) – Elodie Reviere', 'Upwards', 'resources/songs/covers/AlbumCover1.png', 0, 0, 0, '3:41', 'Future bass', 'Chill', 'Piano', '2021-08-31'),
(151, 'resources/songs/audio/Favorite Crime (Future Bass Remix).mp3', 'Favorite Crime (Remix) – Olivia Rodrigo', 'Upwards', 'resources/songs/covers/AlbumCover2.png', 0, 0, 0, '3:24', 'Future bass', 'Chill', 'Synth', '2021-08-31'),
(152, 'resources/songs/audio/Monster (Future Bass Remix).mp3', 'Monster (Remix) — Shawn Mendes & Justin Bieber', 'Upwards', 'resources/songs/covers/AlbumCover3.png', 0, 0, 0, '3:27', 'Future bass', 'Chill', 'Drums', '2021-08-31'),
(153, 'resources/songs/audio/Sabai-Memories Remix `1.mp3', 'Memories (Remix) — Sabai & Claire Ridgley', 'Upwards', 'resources/songs/covers/AlbumCover5.png', 1, 0, 0, '3:15', 'Future bass', 'Chill', 'Piano', '2021-08-31');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `usersId` int(11) NOT NULL,
  `usersUsername` varchar(128) NOT NULL,
  `usersEmail` varchar(128) NOT NULL,
  `usersPassword` varchar(128) NOT NULL,
  `usersPictureDirectory` varchar(1000) NOT NULL,
  `Playlists` varchar(111) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`usersId`, `usersUsername`, `usersEmail`, `usersPassword`, `usersPictureDirectory`, `Playlists`) VALUES
(2, 'Upwards', 'upwards@gmail.com', '$2y$10$CLov4tLZ2wCgBdHXp9J8Le6kzQ4zJgJW6Gp0orCWppufuA07GCoWm', 'resources/users/profilePicture/Upwards.jpg', 'Liked Songs;'),
(3, 'Yung Limp', 'yunglimp@gmail.com', '$2y$10$auwH1OWQpNK7FM9ARR/KbutF4H3TEOo518lxP5NF7FEd.aNHBjJsC', 'resources/users/profilePicture/channels4_profile.jpg', 'Liked Songs;');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`usersId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `usersId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
