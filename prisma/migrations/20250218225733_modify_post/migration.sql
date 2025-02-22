-- AlterTable
ALTER TABLE `post` MODIFY `isEditorPick` BOOLEAN NULL DEFAULT false,
    ALTER COLUMN `readingTime` DROP DEFAULT;
