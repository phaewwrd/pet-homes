/*
  Warnings:

  - You are about to alter the column `type` on the `pet` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(1))`.

*/
-- AlterTable
ALTER TABLE `pet` ADD COLUMN `gender` ENUM('MALE', 'FEMALE') NOT NULL DEFAULT 'MALE',
    MODIFY `type` ENUM('NORMAL', 'EXOTIC') NOT NULL DEFAULT 'NORMAL';
