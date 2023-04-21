/*
  Warnings:

  - A unique constraint covering the columns `[userId,examId]` on the table `ExamTakeTable` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[semesterId]` on the table `SemesterTakeTable` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `semesterTitle` to the `Exam` table without a default value. This is not possible if the table is not empty.
  - Added the required column `courseTitle` to the `SemesterTakeTable` table without a default value. This is not possible if the table is not empty.
  - Added the required column `semesterId` to the `SemesterTakeTable` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ExamTakeTable" DROP CONSTRAINT "ExamTakeTable_userId_fkey";

-- DropForeignKey
ALTER TABLE "SemesterMeta" DROP CONSTRAINT "SemesterMeta_semesterId_fkey";

-- DropIndex
DROP INDEX "ExamQuestion_examId_key";

-- DropIndex
DROP INDEX "ExamTakeTable_examId_key";

-- AlterTable
ALTER TABLE "Exam" ADD COLUMN     "semesterTitle" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ExamAnswer" ALTER COLUMN "content" SET NOT NULL,
ALTER COLUMN "content" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "SemesterTakeTable" ADD COLUMN     "courseTitle" TEXT NOT NULL,
ADD COLUMN     "semesterId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ExamTakeTable_userId_examId_key" ON "ExamTakeTable"("userId", "examId");

-- CreateIndex
CREATE UNIQUE INDEX "SemesterTakeTable_semesterId_key" ON "SemesterTakeTable"("semesterId");

-- AddForeignKey
ALTER TABLE "SemesterMeta" ADD CONSTRAINT "SemesterMeta_semesterId_fkey" FOREIGN KEY ("semesterId") REFERENCES "Semester"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SemesterTakeTable" ADD CONSTRAINT "SemesterTakeTable_semesterId_fkey" FOREIGN KEY ("semesterId") REFERENCES "Semester"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamTakeTable" ADD CONSTRAINT "ExamTakeTable_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
