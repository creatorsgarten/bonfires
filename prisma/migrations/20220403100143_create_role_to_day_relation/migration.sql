/*
  Warnings:

  - You are about to drop the column `directorDayId` on the `Staff` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Staff" DROP CONSTRAINT "Staff_directorDayId_fkey";

-- AlterTable
ALTER TABLE "Staff" DROP COLUMN "directorDayId";

-- CreateTable
CREATE TABLE "_DayToRole" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_DayToRole_AB_unique" ON "_DayToRole"("A", "B");

-- CreateIndex
CREATE INDEX "_DayToRole_B_index" ON "_DayToRole"("B");

-- AddForeignKey
ALTER TABLE "_DayToRole" ADD FOREIGN KEY ("A") REFERENCES "Day"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DayToRole" ADD FOREIGN KEY ("B") REFERENCES "Role"("id") ON DELETE CASCADE ON UPDATE CASCADE;
