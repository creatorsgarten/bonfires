/*
  Warnings:

  - Made the column `managerId` on table `Task` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_managerId_fkey";

-- AlterTable
ALTER TABLE "Task" ALTER COLUMN "managerId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_managerId_fkey" FOREIGN KEY ("managerId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
