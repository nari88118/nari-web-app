import React from 'react';
import { Button } from '../components/ui/button';

interface HeaderProps {
    setSiteState: React.Dispatch<React.SetStateAction<string | null>>;
}
const Header: React.FC<HeaderProps> = ({ setSiteState }) => {
    return (
        <header className="bg-blue-500 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">便利アプリ</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li><Button onClick={() => setSiteState("timer")} className="hover:underline">タイマー</Button></li>
                        <li><Button onClick={() => setSiteState("roulette")} className="hover:underline">ルーレット</Button></li>
                        <li><Button onClick={() => setSiteState("word")} className="hover:underline">文章入力</Button></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;