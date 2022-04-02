/*
  Warnings:

  - You are about to drop the column `endSlot` on the `Agenda` table. All the data in the column will be lost.
  - You are about to drop the column `startSlot` on the `Agenda` table. All the data in the column will be lost.
  - You are about to drop the column `endSlot` on the `Duty` table. All the data in the column will be lost.
  - You are about to drop the column `startSlot` on the `Duty` table. All the data in the column will be lost.
  - Added the required column `slot` to the `Agenda` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slot` to the `Duty` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Agenda" DROP COLUMN "endSlot",
DROP COLUMN "startSlot",
ADD COLUMN     "slot" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Duty" DROP COLUMN "endSlot",
DROP COLUMN "startSlot",
ADD COLUMN     "slot" INTEGER NOT NULL;
