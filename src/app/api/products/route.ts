import { NextResponse } from "next/server";
import { dbConnect, collections } from "@/lib/dbConnect";

export async function GET() {
  try {
    const productsCollection = dbConnect(collections.PRODUCTS);
    const products = await productsCollection.find({}).toArray();
    
    // Map _id to string for clean JSON serialization
    const sanitizedProducts = products.map((product) => ({
      ...product,
      _id: product._id.toString(),
    }));

    return NextResponse.json(sanitizedProducts);
  } catch (error) {
    console.error("Failed to fetch products from database:", error);
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}
