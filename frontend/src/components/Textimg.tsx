import React, { useMemo, useState } from "react";
import { Textarea } from '../components/ui/textarea';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import ReactMarkdown from 'react-markdown';


export default function Textimg(): JSX.Element {

    const [markdown, setMarkdown] = useState(`# Hello World\n\n**Markdown使えるよ！**`);
    const [images, setImages] = useState<string[]>([]);

    const renderImageTags = useMemo(() => {

    }, []);
    return (
        <div className="editor-viewer-container">

            {/* テキストエディター部分 */}
            <Textarea
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
                className="w-full h-64 p-4 border"
                placeholder="Markdownでメモを入力..."
            />

            {/* 表示部分（Markdown + 画像レンダリング） */}
            <div className="markdown-viewer p-4 border mt-4">
                <ReactMarkdown
                    // children={renderImageTags(markdown, images)}
                    components={{
                        img: ({ node, ...props }) => (
                            <img {...props} style={{ maxWidth: '100%', height: 'auto' }} />
                        )
                    }}
                />
            </div>

        </div>
    )
}