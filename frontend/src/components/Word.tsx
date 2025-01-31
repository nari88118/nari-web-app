import React, { useState } from "react";
import { Textarea } from '../components/ui/textarea';
import { Button } from "./ui/button";

const Word = () => {
    const [text, setText] = useState("");
    const saveToFile = async () => {
        const response = await fetch("/api/saveText", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text }),
        });

        if (response.ok) {
            alert("保存しました!");
        } else {
            alert("保存に失敗しました");
        }
    };
    return (
        <div className="w-full border flex flex-col items-center justify-center border-gray-500 p-4 rounded bg-bgBlue">
            <Textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="border border-gray-500 p-2 rounded text-white font-bold h-80"
                placeholder="文章を入力"
                rows={10}
            />
            <Button onClick={saveToFile} className="bg-bgBlue text-white p-4 rounded mt-4">
                保存
            </Button>
        </div>
    );
}
export default Word;