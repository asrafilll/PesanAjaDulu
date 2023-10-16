-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fullName" TEXT NOT NULL,
    "shopName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Inventory" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Inventory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "InventoryOnFormOrder" (
    "inventoryId" INTEGER NOT NULL,
    "formOrderId" INTEGER NOT NULL,

    PRIMARY KEY ("inventoryId", "formOrderId"),
    CONSTRAINT "InventoryOnFormOrder_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "Inventory" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "InventoryOnFormOrder_formOrderId_fkey" FOREIGN KEY ("formOrderId") REFERENCES "FormOrder" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "FormOrder" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tile" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "endDate" DATETIME NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "FormOrder_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Response" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "formId" INTEGER NOT NULL,
    "customerName" TEXT NOT NULL,
    "customerAddress" TEXT NOT NULL,
    "customerPhone" TEXT NOT NULL,
    "isDelivery" BOOLEAN NOT NULL,
    "totalOrder" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL,
    "statusId" INTEGER NOT NULL,
    CONSTRAINT "Response_formId_fkey" FOREIGN KEY ("formId") REFERENCES "FormOrder" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Response_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "Status" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "OrderData" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "itemName" TEXT NOT NULL,
    "itemAmount" INTEGER NOT NULL,
    "total" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Status" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OrderDataToResponse" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_OrderDataToResponse_A_fkey" FOREIGN KEY ("A") REFERENCES "OrderData" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_OrderDataToResponse_B_fkey" FOREIGN KEY ("B") REFERENCES "Response" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_shopName_key" ON "User"("shopName");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "_OrderDataToResponse_AB_unique" ON "_OrderDataToResponse"("A", "B");

-- CreateIndex
CREATE INDEX "_OrderDataToResponse_B_index" ON "_OrderDataToResponse"("B");
