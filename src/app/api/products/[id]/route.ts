import { collection, dbConnect } from "@/src/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;

    if (!id) {
      return NextResponse.json(
        { message: "Product ID is required" },
        { status: 400 },
      );
    }

    const query = { _id: new ObjectId(id) };
    const product = await (await dbConnect(collection.PRODUCTS)).findOne(query);

    if (!product) {
      return NextResponse.json({ success: false }, { status: 404 });
    }

    return NextResponse.json({ success: true, product }, { status: 200 });
  } catch (error) {
    console.error("Faild to fetch", error);
    return NextResponse.json(
      { message: "Error fetching product", error },
      { status: 500 },
    );
  }
}
