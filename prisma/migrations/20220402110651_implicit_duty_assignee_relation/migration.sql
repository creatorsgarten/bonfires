/*
  Warnings:

  - You are about to drop the `DutyAssignees` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "DutyAssignees" DROP CONSTRAINT "DutyAssignees_dutyId_fkey";

-- DropForeignKey
ALTER TABLE "DutyAssignees" DROP CONSTRAINT "DutyAssignees_staffId_fkey";

-- DropTable
DROP TABLE "DutyAssignees";

-- CreateTable
CREATE TABLE "_DutyToStaff" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_DutyToStaff_AB_unique" ON "_DutyToStaff"("A", "B");

-- CreateIndex
CREATE INDEX "_DutyToStaff_B_index" ON "_DutyToStaff"("B");

-- AddForeignKey
ALTER TABLE "_DutyToStaff" ADD FOREIGN KEY ("A") REFERENCES "Duty"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DutyToStaff" ADD FOREIGN KEY ("B") REFERENCES "Staff"("id") ON DELETE CASCADE ON UPDATE CASCADE;
