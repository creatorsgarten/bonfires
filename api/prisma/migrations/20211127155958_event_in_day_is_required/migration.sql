/*
  Warnings:

  - Made the column `eventId` on table `Day` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Day" DROP CONSTRAINT "Day_eventId_fkey";

-- AlterTable
ALTER TABLE "Day" ALTER COLUMN "eventId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Day" ADD CONSTRAINT "Day_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
