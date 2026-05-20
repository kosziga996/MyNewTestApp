import { betterAuth } from "better-auth";

export const auth = betterAuth({
  baseURL: import.meta.env.BETTER_AUTH_URL,
  secret: import.meta.env.BETTER_AUTH_SECRET,

  socialProviders: {
    microsoft: {
      clientId: import.meta.env.MICROSOFT_CLIENT_ID,
      clientSecret: import.meta.env.MICROSOFT_CLIENT_SECRET,
      tenantId: import.meta.env.MICROSOFT_TENANT_ID,
    },
  },

  // Uses built-in SQLite by default for development.
  // Replace with your production database configuration.
  // database: { ... }
});
