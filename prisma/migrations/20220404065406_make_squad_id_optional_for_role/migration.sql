-- DropForeignKey
ALTER TABLE "Role" DROP CONSTRAINT "Role_squadId_fkey";

-- AlterTable
ALTER TABLE "Role" ALTER COLUMN "squadId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Role" ADD CONSTRAINT "Role_squadId_fkey" FOREIGN KEY ("squadId") REFERENCES "Squad"("id") ON DELETE SET NULL ON UPDATE CASCADE;
