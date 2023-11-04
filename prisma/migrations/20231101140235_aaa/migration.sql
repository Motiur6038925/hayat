-- AlterTable
ALTER TABLE `blog` MODIFY `des` VARCHAR(60000) NOT NULL;

-- AlterTable
ALTER TABLE `counter` MODIFY `SaleRate` VARCHAR(191) NOT NULL,
    MODIFY `Conversations` VARCHAR(191) NOT NULL,
    MODIFY `Subscribers` VARCHAR(191) NOT NULL,
    MODIFY `TotalRevenue` VARCHAR(191) NOT NULL;
