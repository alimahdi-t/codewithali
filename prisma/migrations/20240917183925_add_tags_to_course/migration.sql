/*
  Warnings:

  - You are about to drop the `_coursetocoursetag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `coursetag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `posttag` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_coursetocoursetag` DROP FOREIGN KEY `_CourseToCourseTag_A_fkey`;

-- DropForeignKey
ALTER TABLE `_coursetocoursetag` DROP FOREIGN KEY `_CourseToCourseTag_B_fkey`;

-- DropForeignKey
ALTER TABLE `posttag` DROP FOREIGN KEY `PostTag_postId_fkey`;

-- DropIndex
DROP INDEX `Course_discountId_fkey` ON `course`;

-- DropTable
DROP TABLE `_coursetocoursetag`;

-- DropTable
DROP TABLE `coursetag`;

-- DropTable
DROP TABLE `posttag`;

-- CreateTable
CREATE TABLE `Tag` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `Tag_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_CourseTags` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_CourseTags_AB_unique`(`A`, `B`),
    INDEX `_CourseTags_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_CourseTags` ADD CONSTRAINT `_CourseTags_A_fkey` FOREIGN KEY (`A`) REFERENCES `Course`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CourseTags` ADD CONSTRAINT `_CourseTags_B_fkey` FOREIGN KEY (`B`) REFERENCES `Tag`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
