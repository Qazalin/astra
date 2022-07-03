-- DropIndex
DROP INDEX "User_twitterUsername_key";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "twitterUsername" SET DEFAULT '';
