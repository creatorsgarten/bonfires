-- CreateTable
CREATE TABLE "_EventToRole" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_EventToRole_AB_unique" ON "_EventToRole"("A", "B");

-- CreateIndex
CREATE INDEX "_EventToRole_B_index" ON "_EventToRole"("B");

-- AddForeignKey
ALTER TABLE "_EventToRole" ADD FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventToRole" ADD FOREIGN KEY ("B") REFERENCES "Role"("id") ON DELETE CASCADE ON UPDATE CASCADE;
