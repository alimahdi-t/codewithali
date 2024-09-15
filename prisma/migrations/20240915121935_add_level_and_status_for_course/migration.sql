/*
  Warnings:

  - Added the required column `level` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `course` ADD COLUMN `level` ENUM('BEGINNER', 'ADVANCED', 'EXPERT') NOT NULL,
    ADD COLUMN `status` ENUM('COMPLETED', 'PREORDER', 'ONGOING', 'CANCELLED', 'UPCOMING') NOT NULL;
