import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const member = pgTable("member", {
  id: text("id").primaryKey(),
  firstname: text("firstname").notNull(),
  lastname: text("lastname").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("createdAt")
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
});
