// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { title, image, subTitle, desc, date } = req.body;
    const client = MongoClient.connect(process.env.MONGO_URL);
  }
  res.status(200).json({ name: "John Doe" });
}
