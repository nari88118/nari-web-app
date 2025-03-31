# nariWebApp
このプロジェクトは、**Next.js** フレームワークを使用して構築された、Live2DモデルをWeb上で動かすアプリケーションです。  
制作者が作業する際に便利だと思った様々な機能も組み込んでいます!

動作イメージ
![image](https://github.com/user-attachments/assets/22a1e992-ec5b-4b19-9119-82f6954a932b)

## 📥 Live2D Cubism SDK for Web の導入方法

このプロジェクトでは、**Live2D Cubism SDK for Web** を使用していますが、著作権保護のため GitHub には含めていません。  
以下の手順で SDK をご自身で取得し、配置してください。

### 1. SDKのダウンロード
公式サイトよりweb開発用のSDKをダウンロードしてください。

### 2. 必要なファイルの取得
こちらのプロジェクトを実行するには、live2d.min.js というファイルが必要です。
残念ながら、このファイルは2019年9月4日以降、公式サイトからはダウンロードできなくなっています。
しかし、以下のGitHubリポジトリから取得することができます。
- [GitHub: dylanNew/live2d - live2d.min.js](https://github.com/dylanNew/live2d/tree/master/webgl/Live2D/lib)

**注意事項 :**  
live2d.min.js は公式から提供されていないため、有志による提供です。このため、使用は自己責任で行ってください。

### 3. フォルダ配置
公式SDKより **`live2dcubismcore.min.js`** と上でダウンロードした **`live2d.min.js`** を以下のディレクトリに配置してください：

- public
  └ nari
  └ raguto
  └ text
  └ live2dcubismcore.min.js
  └ live2d.min.js


## 🚀 使用技術スタック
- **Next.js** (Reactフレームワーク)
- **TypeScript**
- **Tailwind CSS** (スタイリング)
- **Live2D Cubism SDK for WebGL**

---

## 🔥 実装機能一覧

### 🎨 Live2Dモデル表示機能
- 自作Live2DモデルをWeb上で表示し、アニメーションさせることができます。

### 💬 テキストの入力 & 保存機能
- ユーザーがテキストを入力し、保存できる機能。  

### 🎲 ルーレット機能
- 複数の選択肢をランダムに選ぶためのルーレットを実装。    

## 🔥実装中

### ⏰ タイマー機能
- 作業用のタイマー機能。
- ポモドーロタイマーとしての実装を目標としています。

### その他
- 実装済みの機能も不便な個所は修正していきます。
- 制作者が欲しい機能を随時追加予定です。

---


### Live2Dモデルについて
プロジェクト内のLive2Dモデルは制作者が自作したものです。個人私用に限定して自由に使用していただいて構いません。

### Live2D SDKについて
- 本プロジェクトでは、Live2D Cubism SDK for Webを使用しています。このSDKは、[Live2D社](https://www.live2d.com)によって提供されており、商用利用にはLive2D社のライセンス契約が必要です。詳細なライセンス規約については、SDKの提供元である[公式サイト](https://www.live2d.com)をご確認ください。
