/*
  Warnings:

  - You are about to drop the column `content` on the `dynamicblog` table. All the data in the column will be lost.
  - You are about to alter the column `title` on the `dynamicblog` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to drop the `blog` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE `dynamicblog` DROP COLUMN `content`,
    ADD COLUMN `des` VARCHAR(60000) NOT NULL DEFAULT '',
    MODIFY `title` VARCHAR(50) NOT NULL DEFAULT '',
    MODIFY `imgCDN` VARCHAR(300) NOT NULL DEFAULT '';

-- DropTable
DROP TABLE `blog`;
