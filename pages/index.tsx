import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getRandomArray } from "../store/actions/sampleAction";
import { useEffect, useState } from "react";

import BubbleSort from '../algorithms/BubbleSort';

export default function Home() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRandomArray(10));
  }, []);


  const sampleListData = useSelector((state) => state.randomArray);

  const CurrentSelectedAlgorithm = useSelector((state) => state.algorithm);

  const [sortedArray, setSortedArray] = useState([]);

  const SortArray = () => {
    switch (CurrentSelectedAlgorithm.algorithm) {
      case 'Bubble Sort':
        console.log("Bubble Sort Called");
        BubbleSort(sampleListData.sample, 1000, sortedArray, setSortedArray);
      default:
        break;
    }
  }

  return (
    <>
      <h1>Home Page</h1>
      <h3>Current Algorithm: {CurrentSelectedAlgorithm.algorithm}</h3>
      <h3>Array Length: {sampleListData.sample.length}</h3>
      <h4>{JSON.stringify(sampleListData.sample)}</h4>
      <button onClick={SortArray}>Sort IT!</button>

      <h4>Sorted Array {JSON.stringify(sortedArray)}</h4>

    </>
  );
}