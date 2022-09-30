-- CreateTable
CREATE TABLE "drinkCategories" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "drinkCategories_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "drinkCategories_name_key" ON "drinkCategories"("name");
