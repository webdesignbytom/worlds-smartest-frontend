/*
  Warnings:

  - Made the column `city` on table `Profile` required. This step will fail if there are existing NULL values in that column.
  - Made the column `gender` on table `Profile` required. This step will fail if there are existing NULL values in that column.
  - Made the column `lastName` on table `Profile` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "profession" TEXT,
ADD COLUMN     "title" TEXT,
ADD COLUMN     "university" TEXT,
ALTER COLUMN "city" SET NOT NULL,
ALTER COLUMN "city" SET DEFAULT '',
ALTER COLUMN "gender" SET NOT NULL,
ALTER COLUMN "gender" SET DEFAULT '',
ALTER COLUMN "lastName" SET NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "agreedToNewsletter" BOOLEAN NOT NULL DEFAULT true;
