// import { authOptions } from "@/src/lib/authOptions";
// import { getServerSession } from "next-auth";
import { collection, dbConnect } from "@/src/lib/dbConnect";

import { NextResponse } from "next/server";

const productCollections = dbConnect(collection.PRODUCTS);

export async function GET() {
  try {
    // const session = await getServerSession(authOptions);

    // if (!session?.user) {
    //   return NextResponse.json(
    //     { message: "Unauthorized access" },
    //     { status: 401 },
    //   );
    // }

    const products = await (await productCollections).find().toArray();

    const formattedProducts = products.map((product) => ({
      ...product,
      _id: product._id.toString(),
    }));

    return NextResponse.json({
      success: true,
      // user: session.user,
      data: formattedProducts,
    });
  } catch (error) {
    console.error("GET products error:", error);

    return NextResponse.json(
      {
        message: "Internal Server Error",
      },
      {
        status: 500,
      },
    );
  }
}
