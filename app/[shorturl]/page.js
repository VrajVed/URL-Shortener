import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb.js";

export default async function Page ({ params}) {
    const shorturl = (await params).shorturl;  
    let client = await clientPromise;
    const db = client.db('bitlinks');
    const collection = db.collection("url");

    
    const doc = await collection.findOne({ shorturl: shorturl });
    if (doc) {
        redirect(doc.url);
    } else {
        redirect(process.env.NEXT_PUBLIC_HOST);
    }
    
}