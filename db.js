import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

prisma
  .$connect()
  .then(() => console.log("Database connected successfully"))
  .catch((error) => console.log("database connection failed", error));

export default prisma;
