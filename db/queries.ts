import { PrismaClient } from "@prisma/client";
import { reactiveHooksExtension } from "@prisma/react-native";
import "@prisma/react-native";

const baseClient = new PrismaClient();

const prisma = baseClient.$extends(
  reactiveHooksExtension()
);

// Queries go here

export {
  // user queries
    // createUser
    // ...etc

  // account queries
    // createAccount
    // ...etc

  // ...etc
}