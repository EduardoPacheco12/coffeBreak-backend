-- CreateTable
CREATE TABLE "bookCarts" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "bookId" INTEGER NOT NULL,

    CONSTRAINT "bookCarts_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "bookCarts" ADD CONSTRAINT "bookCarts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bookCarts" ADD CONSTRAINT "bookCarts_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "books"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
