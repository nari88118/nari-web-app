import fs from "fs";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const { text, fileName } = req.body;
    if (!text) {
        return res.status(400).json({ message: "テキストが空です" });
    }

    const filePath = path.join(process.cwd(), "public", "text/" + fileName + ".txt");

    try {
        fs.writeFileSync(filePath, text, "utf8");
        res.status(200).json({ message: "保存成功" });
    } catch (error) {
        res.status(500).json({ message: "保存に失敗しました" });
    }
}
