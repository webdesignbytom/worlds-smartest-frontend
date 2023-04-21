/*
  Warnings:

  - Added the required column `semesterTitle` to the `Exam` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "ExamQuestion_examId_key";

-- DropIndex
DROP INDEX "ExamTakeTable_examId_key";

-- AlterTable
ALTER TABLE "Exam" ADD COLUMN     "semesterTitle" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ExamAnswer" ALTER COLUMN "content" SET NOT NULL,
ALTER COLUMN "content" SET DATA TYPE TEXT;
