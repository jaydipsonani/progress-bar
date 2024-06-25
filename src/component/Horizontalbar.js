import React, { useEffect, useState } from 'react';
import './css/Horizontalbar.css';
import { ProgressBar, Step } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";

const Horizontalbar = () => {
    const steps = ["Friend1", "Friend2", "Friend3", "Friend4", "Friend5", "Friend6"];
    const [currentStep, setCurrentStep] = useState(0);
    const [circleColors, setCircleColors] = useState(Array(steps.length).fill("white"));

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentStep(prevStep => {
                const nextStep = prevStep + 1;
                if (nextStep >= steps.length) {
                    clearInterval(interval);
                }
                return nextStep;
            });
        }, 200);

        return () => clearInterval(interval);
    }, [steps.length]);

    useEffect(() => {
        const newCircleColors = steps.map((_, index) => {
            if (index < currentStep) {
                return "orange";
            } else {
                return "white";
            }
        });

        const timeout = setTimeout(() => {
            setCircleColors(newCircleColors);
        }, 200);

        return () => clearTimeout(timeout);
    }, [currentStep, steps]);

    return (
        <div style={{ margin: "10px auto", padding: "20px" }}>
            <ProgressBar
                hasStepZero={false}
                percent={(currentStep / steps.length) * 100}
                filledBackground="orange"
                width="90%"
            >
                {steps.map((label, index) => (
                    <Step key={index}>
                        {({ accomplished }) => (
                            <div className="step-container">
                                <div>
                                    <span style={{ color: "gray" }}>{label}</span>
                                </div>
                                <div className={`circle ${accomplished ? "accomplished" : ""}`} style={{ backgroundColor: circleColors[index] }}>
                                </div>
                                <div className={`tooltip ${accomplished ? "accomplished" : ""}`}>
                                    10%
                                    <div className="tooltip-arrow" />
                                </div>
                            </div>
                        )}
                    </Step>
                ))}
            </ProgressBar>
        </div>
    );
};

export default Horizontalbar;
