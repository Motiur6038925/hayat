-- AlterTable
ALTER TABLE `blog` MODIFY `des` VARCHAR(60000) NOT NULL;

-- CreateTable
CREATE TABLE `Counter` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `SaleRate` INTEGER NOT NULL,
    `Conversations` INTEGER NOT NULL,
    `Subscribers` INTEGER NOT NULL,
    `TotalRevenue` INTEGER NOT NULL,
    `createAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updateAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
