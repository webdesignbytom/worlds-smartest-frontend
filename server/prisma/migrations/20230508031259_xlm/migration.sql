/*
  Warnings:

  - The values [MULTIPLECHOICE,USERINPUT] on the enum `QuestionType` will be removed. If these variants are still used in the database, this will fail.

*/
-- CreateEnum
CREATE TYPE "AnswerType" AS ENUM ('MULTIPLECHOICE', 'TEXTINPUT', 'AUDIOINPUT');

-- AlterEnum
BEGIN;
CREATE TYPE "QuestionType_new" AS ENUM ('SPEED', 'REACTION', 'RIDDLE', 'HOWTO', 'PUZZLE', 'BESTANSWER', 'GENERALKNOWLEDGE');
ALTER TABLE "ExamQuestion" ALTER COLUMN "questionType" DROP DEFAULT;
ALTER TABLE "ExamQuestion" ALTER COLUMN "questionType" TYPE "QuestionType_new" USING ("questionType"::text::"QuestionType_new");
ALTER TYPE "QuestionType" RENAME TO "QuestionType_old";
ALTER TYPE "QuestionType_new" RENAME TO "QuestionType";
DROP TYPE "QuestionType_old";
ALTER TABLE "ExamQuestion" ALTER COLUMN "questionType" SET DEFAULT 'GENERALKNOWLEDGE';
COMMIT;

-- AlterTable
ALTER TABLE "ExamQuestion" ADD COLUMN     "answerType" "AnswerType" NOT NULL DEFAULT 'MULTIPLECHOICE',
ALTER COLUMN "questionType" SET DEFAULT 'GENERALKNOWLEDGE';
