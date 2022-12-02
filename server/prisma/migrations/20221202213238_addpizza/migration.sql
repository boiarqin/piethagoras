-- CreateTable
CREATE TABLE "Pizza" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "size" TEXT NOT NULL,
    "crust" TEXT NOT NULL,
    "sauce" TEXT NOT NULL,
    "cheeseAmount" TEXT NOT NULL,
    "toppings" TEXT NOT NULL,
    "orderId" INTEGER,
    CONSTRAINT "Pizza_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Wings" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "count" INTEGER NOT NULL,
    "sauce" TEXT NOT NULL,
    "heatLevel" TEXT NOT NULL,
    "orderId" INTEGER,
    CONSTRAINT "Wings_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Order" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
