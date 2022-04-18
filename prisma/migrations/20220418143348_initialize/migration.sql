-- CreateEnum
CREATE TYPE "SystemRole" AS ENUM ('Admin', 'Member');

-- CreateEnum
CREATE TYPE "RoleType" AS ENUM ('Manager', 'Director', 'Staff');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL4 NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "SystemRole" NOT NULL DEFAULT E'Member',
    "displayName" TEXT NOT NULL,
    "photo" TEXT,
    "profileId" INT4,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL4 NOT NULL,
    "userId" INT4,
    "firstName" TEXT,
    "lastName" TEXT,
    "phone" TEXT,
    "homeAddress" TEXT,
    "lineId" TEXT,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Squad" (
    "id" SERIAL4 NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Squad_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Role" (
    "id" SERIAL4 NOT NULL,
    "title" TEXT NOT NULL,
    "type" "RoleType" NOT NULL,
    "squadId" INT4,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Task" (
    "id" SERIAL4 NOT NULL,
    "title" TEXT NOT NULL,
    "squadId" INT4,
    "managerId" INT4 NOT NULL,
    "dueDate" TIMESTAMP(3),
    "dutyId" INT4,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Staff" (
    "id" SERIAL4 NOT NULL,
    "displayName" TEXT,
    "userId" INT4 NOT NULL,
    "eventId" INT4 NOT NULL,

    CONSTRAINT "Staff_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Workspace" (
    "id" SERIAL4 NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "Workspace_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Agenda" (
    "id" SERIAL4 NOT NULL,
    "title" TEXT NOT NULL,
    "slot" INT4 NOT NULL,
    "dayId" INT4,

    CONSTRAINT "Agenda_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Duty" (
    "id" SERIAL4 NOT NULL,
    "title" TEXT NOT NULL,
    "dayId" INT4 NOT NULL,
    "slot" INT4 NOT NULL,
    "managerId" INT4 NOT NULL,

    CONSTRAINT "Duty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Day" (
    "id" SERIAL4 NOT NULL,
    "title" TEXT NOT NULL,
    "startsAt" TIMESTAMP(3) NOT NULL,
    "eventId" INT4 NOT NULL,

    CONSTRAINT "Day_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" SERIAL4 NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT,
    "color" TEXT,
    "icon" TEXT,
    "workspaceId" INT4,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_UserToWorkspace" (
    "A" INT4 NOT NULL,
    "B" INT4 NOT NULL
);

-- CreateTable
CREATE TABLE "_RoleToStaff" (
    "A" INT4 NOT NULL,
    "B" INT4 NOT NULL
);

-- CreateTable
CREATE TABLE "_StaffToTask" (
    "A" INT4 NOT NULL,
    "B" INT4 NOT NULL
);

-- CreateTable
CREATE TABLE "_DutyToStaff" (
    "A" INT4 NOT NULL,
    "B" INT4 NOT NULL
);

-- CreateTable
CREATE TABLE "_DayToRole" (
    "A" INT4 NOT NULL,
    "B" INT4 NOT NULL
);

-- CreateTable
CREATE TABLE "_EventToRole" (
    "A" INT4 NOT NULL,
    "B" INT4 NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userId_key" ON "Profile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Staff_userId_eventId_key" ON "Staff"("userId", "eventId");

-- CreateIndex
CREATE UNIQUE INDEX "Workspace_slug_key" ON "Workspace"("slug");

-- CreateIndex
CREATE INDEX "Workspace_id_slug_name_idx" ON "Workspace"("id", "slug", "name");

-- CreateIndex
CREATE UNIQUE INDEX "Agenda_slot_dayId_key" ON "Agenda"("slot", "dayId");

-- CreateIndex
CREATE UNIQUE INDEX "Duty_slot_dayId_managerId_key" ON "Duty"("slot", "dayId", "managerId");

-- CreateIndex
CREATE INDEX "Day_id_title_idx" ON "Day"("id", "title");

-- CreateIndex
CREATE UNIQUE INDEX "Event_slug_key" ON "Event"("slug");

-- CreateIndex
CREATE INDEX "Event_id_name_slug_idx" ON "Event"("id", "name", "slug");

-- CreateIndex
CREATE UNIQUE INDEX "_UserToWorkspace_AB_unique" ON "_UserToWorkspace"("A", "B");

-- CreateIndex
CREATE INDEX "_UserToWorkspace_B_index" ON "_UserToWorkspace"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_RoleToStaff_AB_unique" ON "_RoleToStaff"("A", "B");

-- CreateIndex
CREATE INDEX "_RoleToStaff_B_index" ON "_RoleToStaff"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_StaffToTask_AB_unique" ON "_StaffToTask"("A", "B");

-- CreateIndex
CREATE INDEX "_StaffToTask_B_index" ON "_StaffToTask"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_DutyToStaff_AB_unique" ON "_DutyToStaff"("A", "B");

-- CreateIndex
CREATE INDEX "_DutyToStaff_B_index" ON "_DutyToStaff"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_DayToRole_AB_unique" ON "_DayToRole"("A", "B");

-- CreateIndex
CREATE INDEX "_DayToRole_B_index" ON "_DayToRole"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EventToRole_AB_unique" ON "_EventToRole"("A", "B");

-- CreateIndex
CREATE INDEX "_EventToRole_B_index" ON "_EventToRole"("B");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Role" ADD CONSTRAINT "Role_squadId_fkey" FOREIGN KEY ("squadId") REFERENCES "Squad"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_squadId_fkey" FOREIGN KEY ("squadId") REFERENCES "Squad"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_managerId_fkey" FOREIGN KEY ("managerId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_dutyId_fkey" FOREIGN KEY ("dutyId") REFERENCES "Duty"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Staff" ADD CONSTRAINT "Staff_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Staff" ADD CONSTRAINT "Staff_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Agenda" ADD CONSTRAINT "Agenda_dayId_fkey" FOREIGN KEY ("dayId") REFERENCES "Day"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Duty" ADD CONSTRAINT "Duty_managerId_fkey" FOREIGN KEY ("managerId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Duty" ADD CONSTRAINT "Duty_dayId_fkey" FOREIGN KEY ("dayId") REFERENCES "Day"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Day" ADD CONSTRAINT "Day_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_workspaceId_fkey" FOREIGN KEY ("workspaceId") REFERENCES "Workspace"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserToWorkspace" ADD FOREIGN KEY ("A") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserToWorkspace" ADD FOREIGN KEY ("B") REFERENCES "Workspace"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RoleToStaff" ADD FOREIGN KEY ("A") REFERENCES "Role"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RoleToStaff" ADD FOREIGN KEY ("B") REFERENCES "Staff"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_StaffToTask" ADD FOREIGN KEY ("A") REFERENCES "Staff"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_StaffToTask" ADD FOREIGN KEY ("B") REFERENCES "Task"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DutyToStaff" ADD FOREIGN KEY ("A") REFERENCES "Duty"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DutyToStaff" ADD FOREIGN KEY ("B") REFERENCES "Staff"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DayToRole" ADD FOREIGN KEY ("A") REFERENCES "Day"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DayToRole" ADD FOREIGN KEY ("B") REFERENCES "Role"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventToRole" ADD FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventToRole" ADD FOREIGN KEY ("B") REFERENCES "Role"("id") ON DELETE CASCADE ON UPDATE CASCADE;
