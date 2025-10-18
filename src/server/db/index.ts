import { drizzle } from "drizzle-orm/neon-http";
import { env } from "@/env.mjs";

import * as authSchema from "./schema/auth-schema";
const schema = {
  ...authSchema,
};

export const db = drizzle(env.DATABASE_URL, {
  schema,
});
