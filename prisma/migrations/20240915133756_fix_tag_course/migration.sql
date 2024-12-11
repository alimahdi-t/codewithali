/*
  Warnings:

  - You are about to drop the column `userId` on the `coursetag` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[label]` on the table `CourseTag` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `CourseTag_description_key` ON `coursetag`;

-- AlterTable
ALTER TABLE `course` MODIFY `description` VARCHAR(2000) NOT NULL,
    MODIFY `content` VARCHAR(500) NOT NULL;

-- AlterTable
ALTER TABLE `coursetag` DROP COLUMN `userId`,
    ADD COLUMN `label` VARCHAR(191) NOT NULL DEFAULT '',
    MODIFY `title` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `CourseTag_label_key` ON `CourseTag`(`label`);
