import { betterAuth } from "better-auth";
import { Pool } from "pg";

export const auth = betterAuth({
  baseURL: import.meta.env.BETTER_AUTH_URL,
  secret: import.meta.env.BETTER_AUTH_SECRET,

  database: new Pool({
    connectionString: import.meta.env.DATABASE_URL,
  }),

  socialProviders: {
    microsoft: {
      clientId: import.meta.env.MICROSOFT_CLIENT_ID,
      clientSecret: import.meta.env.MICROSOFT_CLIENT_SECRET,
      tenantId: import.meta.env.MICROSOFT_TENANT_ID,
    },
  },
});
