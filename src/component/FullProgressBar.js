import React, { useEffect, useState } from 'react'
import 'react-circular-progressbar/dist/styles.css';
import ProgressBar from 'react-customizable-progressbar'

const FullProgressBar = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        var count = 25;
        const timer = setInterval(() => {
            setProgress(prevProgress => {
                if (prevProgress >= count) {
                    clearInterval(timer);
                    return count;
                }
                return prevProgress + 1;
            });
        }, 50);
        return () => clearInterval(timer);
    }, []);

    return (
        <div>
   
        <ProgressBar
            radius={100}
            progress={progress}
            strokeWidth={20}
            strokeColor="green"
            strokeLinecap="round"
            trackStrokeWidth={20}
        >
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: 'black',
                    fontSize: '30px',
                    fontWeight: 'bold'
                }}>
                    {`${progress}%`}
                </div>
        </ProgressBar>
        </div>



    )
}

export default FullProgressBar