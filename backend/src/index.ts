import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { env } from "hono/adapter";
const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
  };
}>();

app.put("/api/v1/blog", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  await prisma.user.create({
    data: {
      email: body.email,
      password: body.password,
    },
  });
  return c.text("get blog!");
});
app.get("/api/v1/blog/:id", (c) => {
  return c.text("get particular blog!");
});
app.get("/api/v1/blog", (c) => {
  return c.text("all blog!");
});
app.post("/api/v1/signup", (c) => c.text("post"));

app.post("/api/v1/blog", (c) => {
  return c.text("get blog!");
});
app.post("/api/v1/signin", (c) => {
  return c.text("signin");
});
export default app;
