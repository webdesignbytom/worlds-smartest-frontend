/*
  Warnings:

  - You are about to drop the column `correct` on the `ExamAnswer` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Exam" ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "ExamAnswer" DROP COLUMN "correct",
ADD COLUMN     "isCorrect" BOOLEAN NOT NULL DEFAULT false;
