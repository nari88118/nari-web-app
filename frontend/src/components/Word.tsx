import React,{useState} from "react";
import { Textarea } from '../components/ui/textarea';

const  Word = () => {
    const [value, setValue] = useState("");

    return (
        <div className="w-full border flex flex-col items-center justify-center border-gray-500 p-4 rounded bg-bgBlue">
            <Textarea
             value={value}
             onChange={(e) => setValue(e.target.value)}
             className="border border-gray-500 p-2 rounded text-white font-bold h-80"
             placeholder="文章を入力"
             rows  = {10}
             />
        </div>
    );
}
export default Word;