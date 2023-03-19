import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setAlgorithm, getRandomArray } from "../store/actions/sampleAction";
import DropDown from '@/components/DropDown'

import BubbleSort from '../algorithms/BubbleSort';

export default function Layout({ children }) {
    const [speed, setSpeed] = useState(10);
    const [numberofBarLines, setNumberOfBarLines] = useState(10);

    const [sortedArray, setSortedArray] = useState([]);

    const dispatch = useDispatch();

    const CurrentSelectedAlgorithm = useSelector((state) => state.algorithm);
    const { algorithm } = CurrentSelectedAlgorithm;

    const generateNewArray = () => {
        dispatch(getRandomArray(numberofBarLines));
    }

    const visualizeSorting = () => {
        switch (algorithm) {
            case 'Bubble Sort':
                console.log("Bubble Sort Called");
                break;
            case 'Insertion Sort':
                console.log("Insertion Sort Called");
                break;
            case 'Selection Sort':
                console.log("Selection Sort Called");
                break;
            case 'Merge Sort':
                console.log("Merge Sort Called");
                break;
            case 'Quick Sort':
                console.log("Quick Sort Called");
                break;
            default:
                break;
        }
    }


    return (
        <div>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="about">About</a></li>
                <li>
                    <a>
                        <DropDown name={"algo"} setValue={setAlgorithm} list={['Bubble Sort', 'Insertion Sort', 'Selection Sort', 'Merge Sort', 'Quick Sort']} />
                    </a>
                </li>
                <li>
                    <a>
                        <div className="sliderContainer">
                            <span>Speed: {speed} x</span>
                            <input className="slider" type="range" min="1" max="350" value={speed} onChange={(e) => { setSpeed(parseInt(e.target.value)) }}>
                            </input>
                        </div>
                    </a>
                </li>
                <li>
                    <a>
                        <div className="sliderContainer">
                            <span>Bar Lines: {numberofBarLines}</span>
                            <input className="slider" type="range" min="10" max="100" value={numberofBarLines} onChange={(e) => { setNumberOfBarLines(parseInt(e.target.value)) }}>
                            </input>
                        </div>
                    </a>
                </li>
                <li>
                    <a>
                        <button onClick={generateNewArray}>Generate New Array</button>
                    </a>
                </li>
                <li>
                    <a>
                        <button onClick={visualizeSorting}>
                            Visualize {algorithm}
                        </button>
                    </a>
                </li>
            </ul>
            <main className='main-container'>{children}</main>
        </div>
    )
}