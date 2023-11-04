/*
  Warnings:

  - You are about to drop the `dynamicblog` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `dynamicblog`;

-- CreateTable
CREATE TABLE `blog` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(50) NOT NULL DEFAULT '',
    `imgCDN` VARCHAR(300) NOT NULL DEFAULT '',
    `des` VARCHAR(60000) NOT NULL DEFAULT '',
    `createAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updateAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
