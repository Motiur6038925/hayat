-- AlterTable
ALTER TABLE `about` ADD COLUMN `name` VARCHAR(50) NOT NULL DEFAULT 'DefaultName';

-- AlterTable
ALTER TABLE `blog` MODIFY `des` VARCHAR(60000) NOT NULL;
