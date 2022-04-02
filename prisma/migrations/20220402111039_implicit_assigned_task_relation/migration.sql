/*
  Warnings:

  - You are about to drop the `TaskAssignees` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TaskAssignees" DROP CONSTRAINT "TaskAssignees_staffId_fkey";

-- DropForeignKey
ALTER TABLE "TaskAssignees" DROP CONSTRAINT "TaskAssignees_taskId_fkey";

-- DropTable
DROP TABLE "TaskAssignees";

-- CreateTable
CREATE TABLE "_StaffToTask" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_StaffToTask_AB_unique" ON "_StaffToTask"("A", "B");

-- CreateIndex
CREATE INDEX "_StaffToTask_B_index" ON "_StaffToTask"("B");

-- AddForeignKey
ALTER TABLE "_StaffToTask" ADD FOREIGN KEY ("A") REFERENCES "Staff"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_StaffToTask" ADD FOREIGN KEY ("B") REFERENCES "Task"("id") ON DELETE CASCADE ON UPDATE CASCADE;
