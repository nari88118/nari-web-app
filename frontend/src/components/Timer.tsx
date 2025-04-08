import React, { useEffect } from "react";
import { Button } from '../components/ui/button';

export default function Timer(): JSX.Element {
    const [time, setTime] = React.useState(0);
    const [isRunning, setIsRunning] = React.useState(false);

    useEffect(() => {
        let timer: NodeJS.Timeout | undefined;
        if (isRunning) {
            timer = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
        } else if (!isRunning && time !== 0) {
            clearInterval(timer);
        }
        return () => clearInterval(timer);
    }, [isRunning, time]);

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    return (
        <div className="w-full border flex flex-col items-center justify-center border-gray-500 p-4 rounded bg-bgBlue">
            <div className="text-white text-xl text-center mb-4">{formatTime(time)}</div>
            <div className="flex space-x-4">
                <Button onClick={() => setIsRunning(!isRunning)}
                    className="bg-comBlue hover:comHoverBlue text-white font-bold py-2 px-4 rounded border border-gray-500">
                    {isRunning ? "Stop" : "Start"}
                </Button>
                <Button onClick={() => setTime(0)}
                    className="bg-comBlue hover:comHoverBlue text-white font-bold py-2 px-4 rounded ml-4 border border-gray-500">
                    Reset
                </Button>
            </div>
        </div>
    );
};