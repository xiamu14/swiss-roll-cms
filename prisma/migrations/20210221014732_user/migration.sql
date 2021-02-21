/*
  Warnings:

  - You are about to drop the `Hello` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- DropTable
DROP TABLE "Hello";
