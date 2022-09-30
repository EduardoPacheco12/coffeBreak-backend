-- CreateTable
CREATE TABLE "books" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "pictureUrl" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "totalStock" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "bookCategoryId" INTEGER NOT NULL,

    CONSTRAINT "books_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "books_name_key" ON "books"("name");

-- AddForeignKey
ALTER TABLE "books" ADD CONSTRAINT "books_bookCategoryId_fkey" FOREIGN KEY ("bookCategoryId") REFERENCES "bookCategories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
