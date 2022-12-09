-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Pizza" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "size" TEXT NOT NULL,
    "crust" TEXT NOT NULL,
    "sauce" TEXT NOT NULL,
    "cheeseAmount" TEXT NOT NULL,
    "toppings" TEXT NOT NULL,
    "status" INTEGER NOT NULL DEFAULT 0,
    "orderId" INTEGER,
    CONSTRAINT "Pizza_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Pizza" ("cheeseAmount", "crust", "id", "name", "orderId", "sauce", "size", "toppings") SELECT "cheeseAmount", "crust", "id", "name", "orderId", "sauce", "size", "toppings" FROM "Pizza";
DROP TABLE "Pizza";
ALTER TABLE "new_Pizza" RENAME TO "Pizza";
CREATE TABLE "new_Order" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" INTEGER NOT NULL DEFAULT 0,
    "email" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Order" ("createdAt", "email", "id", "userId") SELECT "createdAt", "email", "id", "userId" FROM "Order";
DROP TABLE "Order";
ALTER TABLE "new_Order" RENAME TO "Order";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
