import React, { useEffect, useRef, useState } from "react";
import { Stage, Container } from "@pixi/react";
import * as PIXI from "pixi.js";

let Live2DModel: any; // pixi-live2d-displayのモデル

declare global {
    interface Window {
        PIXI: typeof PIXI;
        Live2D: any; // Live2Dランタイム
    }
}

const Live2DViewer: React.FC = () => {
    const containerRef = useRef<PIXI.Container | null>(null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        const loadScript = (src: string) => {
            return new Promise<void>((resolve, reject) => {
                const script = document.createElement("script");
                script.src = src;
                script.onload = () => resolve();
                script.onerror = () => reject(new Error(`${src}のロードに失敗しました`));
                document.body.appendChild(script);
            });
        };

        const loadLive2DModel = async () => {
            try {
                await loadScript("/live2dcubismcore.min.js");
                await loadScript("/live2d.min.js") // ランタイムをロード
                window.PIXI = PIXI;

                const module = await import("pixi-live2d-display");
                Live2DModel = module.Live2DModel;

                const model = await Live2DModel.from("/raguto/raguto.model3.json");
                console.log("モデルが読み込まれました:", model);

                // モデルの位置とサイズを設定
                model.x = 100;
                model.y = window.innerHeight / 2;
                model.scale.set(0.2, 0.2);
                model.anchor?.set(0.5, 0.5);

                containerRef.current?.addChild(model);
            } catch (error) {
                console.error("Live2Dモデルの読み込みエラー:", error);
            }
        };

        setIsClient(true);
        loadLive2DModel();
    }, []);

    if (!isClient) {
        return null; // サーバーサイドレンダリング時は何も表示しない
    }

    return (
        <div>
            <Stage width={200} height={window.innerHeight - 80} options={{ backgroundColor: 0x19192e }}>
                <Container ref={containerRef} />
            </Stage>
        </div>
    );
};

export default Live2DViewer;


// import React, { useEffect, useRef, useState } from "react";
//import { Stage, Container } from "@pixi/react";
// import * as PIXI from "pixi.js";
// import { Live2DModel } from "pixi-live2d-display";

// declare global {
//     interface Window {
//         PIXI: typeof PIXI;
//     }
// }

// const Live2DViewer: React.FC = () => {
//     const [isClient, setIsClient] = useState(false);
//     const modelRef = useRef<Live2DModel | null>(null);
//     const containerRef = useRef<PIXI.Container | null>(null);

//     useEffect(() => {
//         setIsClient(true);

//         if (typeof window !== 'undefined') {
//             window.PIXI = PIXI;

//             const loadLive2DModel = async () => {
//                 try {
//                     // モデルのロード
//                     const model = await Live2DModel.from("/raguto/raguto.model3.json");

//                     // モデルの位置とサイズを設定
//                     model.x = 100;
//                     model.y = window.innerHeight / 2;
//                     model.scale.set(0.2, 0.2);
//                     model.anchor?.set(0.5, 0.5); // anchorが存在する場合のみ設定

//                     modelRef.current = model;
//                     containerRef.current?.addChild(model);
//                 } catch (error) {
//                     console.error('Live2Dモデルの読み込みエラー:', error);
//                 }
//             };

//             loadLive2DModel();
//         }
//     }, []);

//     if (!isClient) {
//         return null; // サーバーサイドレンダリング時には何も表示しない
//     }

//     return (
//         <Stage width={200} height={window.innerHeight - 80} options={{ backgroundColor: 0x19192e }}>
//             <Container ref={containerRef} />
//         </Stage>
//     );
// };


// const initPixi = async () => {
//     if (!containerRef.current) return;

//     // PIXI.Applicationのインスタンスを生成
//     const app = new PIXI.Application({
//         width: window.innerWidth - 15,
//         height: window.innerHeight - 300,
//         backgroundColor: 0xDFF1F6,
//     });

//     // モデルの読み込み
//     const model = await Live2DModel.from("/raguto/raguto.model3.json");

//     // pixijsのviewにモデルを描画する
//     app.stage.addChild(model);

//     // モデルの表示位置や表示場所などを設定
//     model.x = window.innerWidth / 2;
//     model.y = 100;
//     model.scale.set(0.2, 0.2); // モデルの縮尺
//     model.anchor.set(0.6, 0.1); // 表示の基準の位置
// };

// initPixi();