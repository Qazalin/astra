-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "alias" TEXT NOT NULL DEFAULT '',
    "address" TEXT NOT NULL,
    "discordUsername" TEXT NOT NULL DEFAULT '',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "twitterUsername" TEXT NOT NULL DEFAULT '',
    "pfpUrl" TEXT NOT NULL DEFAULT '',
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_alias_key" ON "User"("alias");

-- CreateIndex
CREATE UNIQUE INDEX "User_address_key" ON "User"("address");

-- CreateIndex
CREATE UNIQUE INDEX "User_twitterUsername_key" ON "User"("twitterUsername");
