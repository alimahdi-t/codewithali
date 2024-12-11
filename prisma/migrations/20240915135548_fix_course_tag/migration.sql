/*
  Warnings:

  - You are about to drop the column `courseId` on the `coursetag` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `coursetag` DROP FOREIGN KEY `CourseTag_courseId_fkey`;

-- AlterTable
ALTER TABLE `coursetag` DROP COLUMN `courseId`;

-- CreateTable
CREATE TABLE `_CourseToCourseTag` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_CourseToCourseTag_AB_unique`(`A`, `B`),
    INDEX `_CourseToCourseTag_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_CourseToCourseTag` ADD CONSTRAINT `_CourseToCourseTag_A_fkey` FOREIGN KEY (`A`) REFERENCES `Course`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CourseToCourseTag` ADD CONSTRAINT `_CourseToCourseTag_B_fkey` FOREIGN KEY (`B`) REFERENCES `CourseTag`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
