-- DropForeignKey
ALTER TABLE `course` DROP FOREIGN KEY `Course_discountId_fkey`;

-- AddForeignKey
ALTER TABLE `Discount` ADD CONSTRAINT `Discount_courseId_fkey` FOREIGN KEY (`courseId`) REFERENCES `Course`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
