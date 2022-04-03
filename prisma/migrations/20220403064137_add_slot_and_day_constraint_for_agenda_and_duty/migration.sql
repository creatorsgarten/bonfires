/*
  Warnings:

  - A unique constraint covering the columns `[slot,dayId]` on the table `Agenda` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slot,dayId,managerId]` on the table `Duty` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Agenda_slot_dayId_key" ON "Agenda"("slot", "dayId");

-- CreateIndex
CREATE UNIQUE INDEX "Duty_slot_dayId_managerId_key" ON "Duty"("slot", "dayId", "managerId");
