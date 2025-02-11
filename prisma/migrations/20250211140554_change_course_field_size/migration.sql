/*
  Warnings:

  - You are about to alter the column `description` on the `course` table. The data in that column could be lost. The data in that column will be cast from `VarChar(2000)` to `VarChar(500)`.

*/
-- AlterTable
ALTER TABLE `course` MODIFY `description` VARCHAR(500) NOT NULL,
    MODIFY `content` VARCHAR(2000) NOT NULL;
