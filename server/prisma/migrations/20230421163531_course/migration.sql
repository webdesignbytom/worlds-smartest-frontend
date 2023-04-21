/*
  Warnings:

  - You are about to drop the column `publishedAt` on the `Exam` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Exam` table. All the data in the column will be lost.
  - You are about to drop the column `examId` on the `ExamAnswer` table. All the data in the column will be lost.
  - You are about to drop the column `content` on the `ExamQuestion` table. All the data in the column will be lost.
  - You are about to drop the `TakeTable` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `semesterId` to the `Exam` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category` to the `ExamQuestion` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Exam" DROP CONSTRAINT "Exam_userId_fkey";

-- DropForeignKey
ALTER TABLE "ExamAnswer" DROP CONSTRAINT "ExamAnswer_examId_fkey";

-- DropForeignKey
ALTER TABLE "TakeTable" DROP CONSTRAINT "TakeTable_examId_fkey";

-- DropIndex
DROP INDEX "Exam_userId_key";

-- DropIndex
DROP INDEX "ExamAnswer_examId_key";

-- AlterTable
ALTER TABLE "BugReport" ADD COLUMN     "solution" TEXT;

-- AlterTable
ALTER TABLE "Exam" DROP COLUMN "publishedAt",
DROP COLUMN "userId",
ADD COLUMN     "semesterId" INTEGER NOT NULL,
ADD COLUMN     "startDate" TIMESTAMP(3),
ALTER COLUMN "metaTitle" SET DATA TYPE VARCHAR(150);

-- AlterTable
ALTER TABLE "ExamAnswer" DROP COLUMN "examId",
ALTER COLUMN "correct" SET DEFAULT false;

-- AlterTable
ALTER TABLE "ExamQuestion" DROP COLUMN "content",
ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "question" VARCHAR(5000) NOT NULL DEFAULT '';

-- DropTable
DROP TABLE "TakeTable";

-- CreateTable
CREATE TABLE "Course" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "numSemesters" INTEGER NOT NULL DEFAULT 3,
    "totalScore" INTEGER NOT NULL DEFAULT 6000,
    "numUsers" INTEGER NOT NULL DEFAULT 0,
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Semester" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "courseId" INTEGER NOT NULL,
    "totalScore" INTEGER NOT NULL DEFAULT 2000,
    "numExams" INTEGER NOT NULL DEFAULT 0,
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Semester_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SemesterMeta" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL DEFAULT '',
    "semesterId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "SemesterMeta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SemesterTakeTable" (
    "id" SERIAL NOT NULL,
    "numNewUsers" INTEGER NOT NULL DEFAULT 0,
    "numCompleted" INTEGER NOT NULL DEFAULT 0,
    "content" TEXT NOT NULL DEFAULT '',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "SemesterTakeTable_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExamTakeTable" (
    "id" SERIAL NOT NULL,
    "status" TEXT NOT NULL,
    "score" INTEGER NOT NULL,
    "examId" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    "startAt" TIMESTAMP(3) NOT NULL,
    "finishedAt" TIMESTAMP(3),
    "content" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "ExamTakeTable_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SemesterMeta_semesterId_key" ON "SemesterMeta"("semesterId");

-- CreateIndex
CREATE UNIQUE INDEX "ExamTakeTable_examId_key" ON "ExamTakeTable"("examId");

-- AddForeignKey
ALTER TABLE "Semester" ADD CONSTRAINT "Semester_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SemesterMeta" ADD CONSTRAINT "SemesterMeta_semesterId_fkey" FOREIGN KEY ("semesterId") REFERENCES "Semester"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exam" ADD CONSTRAINT "Exam_semesterId_fkey" FOREIGN KEY ("semesterId") REFERENCES "Semester"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamAnswer" ADD CONSTRAINT "ExamAnswer_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "ExamQuestion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamTakeTable" ADD CONSTRAINT "ExamTakeTable_examId_fkey" FOREIGN KEY ("examId") REFERENCES "Exam"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamTakeTable" ADD CONSTRAINT "ExamTakeTable_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
