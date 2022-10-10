/*
  Warnings:

  - Added the required column `rentedDays` to the `bookCarts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "bookCarts" ADD COLUMN     "rentedDays" INTEGER NOT NULL;
