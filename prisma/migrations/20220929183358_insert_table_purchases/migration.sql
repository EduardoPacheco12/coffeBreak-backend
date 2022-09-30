-- CreateTable
CREATE TABLE "purchases" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "drinkId" INTEGER NOT NULL,
    "purchaseDate" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "purchasePrice" INTEGER NOT NULL,

    CONSTRAINT "purchases_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "purchases" ADD CONSTRAINT "purchases_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "purchases" ADD CONSTRAINT "purchases_drinkId_fkey" FOREIGN KEY ("drinkId") REFERENCES "drinks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
