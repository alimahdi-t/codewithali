/*
  Warnings:

  - You are about to drop the column `description` on the `post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `post` DROP COLUMN `description`,
    ADD COLUMN `overview` VARCHAR(500) NOT NULL DEFAULT '';
