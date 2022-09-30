-- CreateTable
CREATE TABLE "drinks" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "pictureUrl" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "drinkCategoryId" INTEGER NOT NULL,

    CONSTRAINT "drinks_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "drinks_name_key" ON "drinks"("name");

-- AddForeignKey
ALTER TABLE "drinks" ADD CONSTRAINT "drinks_drinkCategoryId_fkey" FOREIGN KEY ("drinkCategoryId") REFERENCES "drinkCategories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
