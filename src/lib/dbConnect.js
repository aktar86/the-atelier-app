import { MongoClient, ServerApiVersion } from "mongodb";
const uri = process.env.MONGODB_URI;
const dbname = process.env.DB_NAME;

export const collection = {
  USERS: "users",
  PRODUCTS: "products",
  CART: "cart",
};

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const dbConnect = async (collectionName) => {
  return client.db(dbname).collection(collectionName);
};
