-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_List" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "slug" TEXT NOT NULL
);
INSERT INTO "new_List" ("description", "id", "slug", "title") SELECT "description", "id", "slug", "title" FROM "List";
DROP TABLE "List";
ALTER TABLE "new_List" RENAME TO "List";
CREATE UNIQUE INDEX "List_slug_key" ON "List"("slug");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
