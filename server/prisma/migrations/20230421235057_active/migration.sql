-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Semester" ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT false;
