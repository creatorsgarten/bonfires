/*
  Warnings:

  - You are about to drop the column `title` on the `Event` table. All the data in the column will be lost.
  - Added the required column `name` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Event" DROP COLUMN "title",
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "workspaceId" INTEGER;

-- CreateTable
CREATE TABLE "Workspace" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Workspace_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_UserToWorkspace" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_UserToWorkspace_AB_unique" ON "_UserToWorkspace"("A", "B");

-- CreateIndex
CREATE INDEX "_UserToWorkspace_B_index" ON "_UserToWorkspace"("B");

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_workspaceId_fkey" FOREIGN KEY ("workspaceId") REFERENCES "Workspace"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserToWorkspace" ADD FOREIGN KEY ("A") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserToWorkspace" ADD FOREIGN KEY ("B") REFERENCES "Workspace"("id") ON DELETE CASCADE ON UPDATE CASCADE;
