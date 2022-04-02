/*
  Warnings:

  - The values [MC,OD,HEAD,STAFF] on the enum `RoleType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `squadId` on the `Duty` table. All the data in the column will be lost.
  - Added the required column `managerId` to the `Duty` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "RoleType_new" AS ENUM ('Manager', 'Director', 'Staff');
ALTER TABLE "Role" ALTER COLUMN "type" TYPE "RoleType_new" USING ("type"::text::"RoleType_new");
ALTER TYPE "RoleType" RENAME TO "RoleType_old";
ALTER TYPE "RoleType_new" RENAME TO "RoleType";
DROP TYPE "RoleType_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "Duty" DROP CONSTRAINT "Duty_squadId_fkey";

-- AlterTable
ALTER TABLE "Duty" DROP COLUMN "squadId",
ADD COLUMN     "managerId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "DutyAssignees" (
    "dutyId" INTEGER NOT NULL,
    "staffId" INTEGER NOT NULL,

    CONSTRAINT "DutyAssignees_pkey" PRIMARY KEY ("dutyId","staffId")
);

-- AddForeignKey
ALTER TABLE "DutyAssignees" ADD CONSTRAINT "DutyAssignees_staffId_fkey" FOREIGN KEY ("staffId") REFERENCES "Staff"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DutyAssignees" ADD CONSTRAINT "DutyAssignees_dutyId_fkey" FOREIGN KEY ("dutyId") REFERENCES "Duty"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Duty" ADD CONSTRAINT "Duty_managerId_fkey" FOREIGN KEY ("managerId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
