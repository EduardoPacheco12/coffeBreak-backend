-- CreateTable
CREATE TABLE "drinkCarts" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "drinkId" INTEGER NOT NULL,

    CONSTRAINT "drinkCarts_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "drinkCarts" ADD CONSTRAINT "drinkCarts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "drinkCarts" ADD CONSTRAINT "drinkCarts_drinkId_fkey" FOREIGN KEY ("drinkId") REFERENCES "drinks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
