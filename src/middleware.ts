import { defineMiddleware } from "astro:middleware";
import { auth } from "./lib/auth";

const PUBLIC_PATHS = ["/signin", "/api/auth"];

export const onRequest = defineMiddleware(async (context, next) => {
  const session = await auth.api.getSession({
    headers: context.request.headers,
  });

  context.locals.session = session?.session ?? null;
  context.locals.user = session?.user ?? null;

  const { pathname } = context.url;
  const isPublic = PUBLIC_PATHS.some((p) => pathname === p || pathname.startsWith(p + "/"));

  if (!session?.user && !isPublic) {
    return context.redirect("/signin");
  }

  return next();
});
