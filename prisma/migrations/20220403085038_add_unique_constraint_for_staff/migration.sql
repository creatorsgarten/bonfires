/*
  Warnings:

  - A unique constraint covering the columns `[userId,eventId]` on the table `Staff` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Staff_userId_eventId_key" ON "Staff"("userId", "eventId");
