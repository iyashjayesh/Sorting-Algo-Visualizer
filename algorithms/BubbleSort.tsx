import React from 'react'
import { useState, useEffect } from 'react';

const swap = (arr: number[], i: number, j: number) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

export default function BubbleSort(arr: number[], speed: number, sortedArray: number[], setSortedArray: number[]) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                setSortedArray(arr);
            }
        }
    }
}

