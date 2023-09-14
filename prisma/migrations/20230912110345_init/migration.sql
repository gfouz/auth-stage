-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "url" TEXT,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
