import React, { useMemo, useState } from "react";
import { Textarea } from '../components/ui/textarea';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import ReactMarkdown from 'react-markdown';


export default function Textimg(): JSX.Element {

    const [markdown, setMarkdown] = useState(`# Hello World\n\n**Markdown使えるよ！**`);
    const [images, setImages] = useState<string[]>([]);

    const renderImageTags = useMemo(() => {
        return (markdown: string, images: string[]) => {
            // Process markdown and images as needed
            return markdown; // Replace this with actual logic if needed
        };
    }, []);
    return (
        <div className="editor-viewer-container">

            <Textarea
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
                className="w-full h-64 p-4 border"
                placeholder="Markdownでメモを入力..."
            />
            <Button>
                <Input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                        const files = e.target.files;
                        if (files) {
                            const newImages = Array.from(files).map(file => URL.createObjectURL(file));
                            setImages(prev => [...prev, ...newImages]);
                        }
                    }}
                />
            </Button>

            <div className="markdown-viewer p-4 border mt-4">
                <ReactMarkdown
                    children={renderImageTags(markdown, images)}
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