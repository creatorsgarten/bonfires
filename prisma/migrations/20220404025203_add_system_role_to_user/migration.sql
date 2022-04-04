-- CreateEnum
CREATE TYPE "SystemRole" AS ENUM ('Admin', 'Member');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "SystemRole" NOT NULL DEFAULT E'Member';
