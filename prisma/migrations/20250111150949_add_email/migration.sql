/*
  Warnings:

  - Added the required column `email` to the `Player` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Player" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "meleeUser" TEXT NOT NULL
);
INSERT INTO "new_Player" ("id", "meleeUser", "name", "username") SELECT "id", "meleeUser", "name", "username" FROM "Player";
DROP TABLE "Player";
ALTER TABLE "new_Player" RENAME TO "Player";
CREATE UNIQUE INDEX "Player_username_key" ON "Player"("username");
CREATE UNIQUE INDEX "Player_email_key" ON "Player"("email");
CREATE UNIQUE INDEX "Player_meleeUser_key" ON "Player"("meleeUser");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
