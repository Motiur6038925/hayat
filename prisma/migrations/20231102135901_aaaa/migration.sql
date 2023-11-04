/*
  Warnings:

  - You are about to drop the column `catagorises` on the `service` table. All the data in the column will be lost.
  - You are about to drop the column `content` on the `service` table. All the data in the column will be lost.
  - You are about to drop the column `features1` on the `service` table. All the data in the column will be lost.
  - You are about to drop the column `features2` on the `service` table. All the data in the column will be lost.
  - You are about to drop the column `features3` on the `service` table. All the data in the column will be lost.
  - You are about to drop the column `features4` on the `service` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `service` table. All the data in the column will be lost.
  - You are about to alter the column `title` on the `service` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - Added the required column `imgCDN` to the `service` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `blog` MODIFY `des` VARCHAR(60000) NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE `service` DROP COLUMN `catagorises`,
    DROP COLUMN `content`,
    DROP COLUMN `features1`,
    DROP COLUMN `features2`,
    DROP COLUMN `features3`,
    DROP COLUMN `features4`,
    DROP COLUMN `price`,
    ADD COLUMN `imgCDN` VARCHAR(300) NOT NULL,
    MODIFY `title` VARCHAR(50) NOT NULL;

-- CreateTable
CREATE TABLE `price` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `content` VARCHAR(191) NOT NULL DEFAULT '',
    `catagorises` VARCHAR(191) NOT NULL DEFAULT '',
    `price` VARCHAR(191) NOT NULL DEFAULT '',
    `features1` VARCHAR(191) NOT NULL DEFAULT '',
    `features2` VARCHAR(191) NOT NULL DEFAULT '',
    `features3` VARCHAR(191) NOT NULL DEFAULT '',
    `features4` VARCHAR(191) NOT NULL DEFAULT '',
    `createAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updateAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
