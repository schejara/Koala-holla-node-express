CREATE TABLE "koala"(
   "id" SERIAL PRIMARY KEY,
   "name" VARCHAR (250) NOT NULL,   
   "age" INTEGER,
   "favoriteColor" VARCHAR (100) NOT NULL,
   "readytotranser" boolean,
   "notes" VARCHAR (100) NOT NULL
);
INSERT INTO "koala" (name, "age", "favoriteColor", readytotranser, notes)
VALUES
      ('Scotty', 4, 'Red', 'Y', 'Born in Guatemala'),
      ('Jean', 5, 'Green', 'Y', 'Allergic to lots of lava'),
      ('Ororo', 7, 'Yellow', 'N', 'Loves listening to Paula (Abdul)'),
      ('K''Leaf', 15, 'Purple', 'N', 'Never refuses a treat.'),
      ('Charlie', 9, 'Orange', 'Y', 'Favorite band is Nirvana'),
      ('Betsy', 4, 'Blue', 'Y', 'Has a pet iguana');