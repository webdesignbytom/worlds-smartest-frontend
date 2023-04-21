-- DropIndex
DROP INDEX "ExamQuestion_examId_key";

-- DropIndex
DROP INDEX "ExamTakeTable_examId_key";

-- AlterTable
ALTER TABLE "ExamAnswer" ALTER COLUMN "content" SET NOT NULL,
ALTER COLUMN "content" SET DATA TYPE TEXT;
