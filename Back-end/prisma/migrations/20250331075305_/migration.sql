/*
  Warnings:

  - You are about to alter the column `type` on the `vet_clinic` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(3))`.

*/
-- AlterTable
ALTER TABLE `user` MODIFY `role` ENUM('USER', 'ADMIN', 'VETS') NOT NULL DEFAULT 'USER';

-- AlterTable
ALTER TABLE `vet_clinic` ADD COLUMN `role` ENUM('USER', 'ADMIN', 'VETS') NOT NULL DEFAULT 'VETS',
    MODIFY `type` ENUM('NORMAL', 'EXOTIC') NOT NULL DEFAULT 'NORMAL';
