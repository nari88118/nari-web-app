import React, { useEffect, useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

export default function Roulette(): JSX.Element {
  const [sections, setSections] = useState<string[] | null>(null);
  const [newSection, setNewSection] = useState<string>('');

  const [isSpinning, setIsSpinning] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (isSpinning) {
      interval = setInterval(() => {
        if (sections) {
          setIndex(Math.floor(Math.random() * sections.length));
        }
      }, 10); // ルーレットの中身を切り替える速度
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isSpinning, sections?.length]);


  const addSection = () => {
    if (newSection.trim() !== '') {
      setSections([...(sections || []), newSection]);
      setNewSection('');
    }
  }
  const removeSection = (sectionToRemove: string) => {
    setSections((sections || []).filter(section => section !== sectionToRemove));
    if (sections && index >= sections.length - 1) {
      setIndex(0);
    }
  };
  return (
    <div className="w-full border flex flex-col items-center justify-center border-gray-500 p-4 rounded bg-bgBlue">
      <div className="relative w-64 h-64 border-4 border-gray-500 rounded-full flex items-center justify-center text-white text-3xl font-bold py-2 px-4 rounded">
        {sections && sections[index]}
      </div>
      <Button
        onClick={() => setIsSpinning(!isSpinning)}
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {isSpinning ? "ストップ" : "スタート"}
      </Button>
      <div className="mt-4 flex space-x-2 items-center">
        <Input
          type="text"
          value={newSection}
          onChange={(e) => setNewSection(e.target.value)}
          className="border border-gray-500 p-2 rounded text-white font-bold h-10"
          placeholder="新しいセクション"
        />
        <Button
          onClick={addSection}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold h-10 w-20"
        >追加
        </Button>
      </div>
      <div className="mt-4 flex space-x-2 items-center">
        {

          sections && sections.length > 0 && (
            <div>
              {sections.map((section, idx) => (
                <Button
                  key={idx}
                  onClick={() => removeSection(section)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold h-10 w-200"
                >
                  {section} ×
                </Button>
              ))}
            </div>
          )
        }
      </div>
    </div>
  );
};