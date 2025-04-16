import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Timer from '../components/Timer';
import Header from '../components/Header';
import Roulette from '../components/Roulette';
import Word from '../components/Word';
import Textimg from '@/components/Textimg';
const Live2DViewer = dynamic(() => import('../components/Live2DViewer'),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  });

export default function Home() {
  const [siteState, setSiteState] = useState<string | null>(null);
  return (
    <div className="App">
      <Header setSiteState={setSiteState}></Header>
      <div className="flex text-white p-4 mb-4 ">
        <Live2DViewer />
        {siteState === "timer" ? <Timer /> : null}
        {siteState === "roulette" ? <Roulette /> : null}
        {siteState === "word" ? <Word /> : null}
        {siteState === "textimg" ? <Textimg /> : null}
      </div>
    </div>
  );
}
