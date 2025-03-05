/*
  Warnings:

  - Added the required column `time` to the `vet_appointment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `pet` MODIFY `name` VARCHAR(191) NULL,
    MODIFY `age` VARCHAR(191) NULL,
    MODIFY `breed` VARCHAR(191) NULL,
    MODIFY `type` ENUM('NORMAL', 'EXOTIC') NULL DEFAULT 'NORMAL',
    MODIFY `gender` ENUM('MALE', 'FEMALE') NULL DEFAULT 'MALE';

-- AlterTable
ALTER TABLE `vet_appointment` ADD COLUMN `time` VARCHAR(191) NOT NULL;
