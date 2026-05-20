/// <reference types="astro/client" />

declare namespace App {
  interface Locals {
    session: import("better-auth").Session | null;
    user: import("better-auth").User | null;
  }
}

interface ImportMetaEnv {
  readonly BETTER_AUTH_SECRET: string;
  readonly BETTER_AUTH_URL: string;
  readonly PUBLIC_BETTER_AUTH_URL: string;
  readonly MICROSOFT_CLIENT_ID: string;
  readonly MICROSOFT_CLIENT_SECRET: string;
  readonly MICROSOFT_TENANT_ID: string;
}
