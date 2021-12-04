-- AlterTable
ALTER TABLE "Staff" ADD COLUMN     "displayName" TEXT;

-- CreateTable
CREATE TABLE "Task" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "squadId" INTEGER,
    "managerId" INTEGER,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TaskAssignees" (
    "taskId" INTEGER NOT NULL,
    "staffId" INTEGER NOT NULL,

    CONSTRAINT "TaskAssignees_pkey" PRIMARY KEY ("taskId","staffId")
);

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_squadId_fkey" FOREIGN KEY ("squadId") REFERENCES "Squad"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_managerId_fkey" FOREIGN KEY ("managerId") REFERENCES "Staff"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TaskAssignees" ADD CONSTRAINT "TaskAssignees_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Task"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TaskAssignees" ADD CONSTRAINT "TaskAssignees_staffId_fkey" FOREIGN KEY ("staffId") REFERENCES "Staff"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
