-- AlterTable
ALTER TABLE `post` ADD COLUMN `isEditorPick` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `readingTime` INTEGER NOT NULL DEFAULT 0;
