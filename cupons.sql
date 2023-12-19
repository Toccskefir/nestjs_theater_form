-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2023. Dec 19. 13:20
-- Kiszolgáló verziója: 10.4.22-MariaDB
-- PHP verzió: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `theater_test`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `cupons`
--

CREATE TABLE `cupons` (
  `id` int(11) NOT NULL,
  `title` varchar(1000) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `percentage` int(2) NOT NULL,
  `code` varchar(1000) COLLATE utf8mb4_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `cupons`
--

INSERT INTO `cupons` (`id`, `title`, `percentage`, `code`) VALUES
(2, 'Mamma Mia', 20, 'ABCD-123456'),
(3, 'Diótörő', 25, 'EKFJ-837829'),
(4, 'Hattyúk Tava', 5, 'HATY-452987'),
(5, 'Operaház Fantomja', 50, 'LOKK-887291'),
(6, 'Diótörő', 10, 'SKPR-122558');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `cupons`
--
ALTER TABLE `cupons`
  ADD PRIMARY KEY (`id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `cupons`
--
ALTER TABLE `cupons`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
