/*
  Warnings:

  - You are about to drop the column `imgCDN` on the `service` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `blog` MODIFY `des` VARCHAR(60000) NOT NULL;

-- AlterTable
ALTER TABLE `service` DROP COLUMN `imgCDN`,
    ADD COLUMN `catagorises` VARCHAR(50) NOT NULL DEFAULT 'DefaultName',
    ADD COLUMN `content` VARCHAR(191) NOT NULL DEFAULT '',
    ADD COLUMN `features1` VARCHAR(191) NOT NULL DEFAULT '',
    ADD COLUMN `features2` VARCHAR(191) NOT NULL DEFAULT '',
    ADD COLUMN `features3` VARCHAR(191) NOT NULL DEFAULT '',
    ADD COLUMN `features4` VARCHAR(191) NOT NULL DEFAULT '',
    ADD COLUMN `price` VARCHAR(191) NOT NULL DEFAULT '0.00',
    MODIFY `title` VARCHAR(191) NOT NULL;
