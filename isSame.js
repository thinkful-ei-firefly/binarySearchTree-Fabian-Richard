'use strict';

let arr1 = [3, 5, 4, 6, 1, 0, 2];
let arr2 = [3, 1, 5, 2, 4, 6, 0];


const isSame = (arr1, arr2) => {
    //base cases
    if(arr1.length !== arr2.length)
        return false;
    if(arr1.length === 0)
        return true;
    if(arr1[0] !== arr2[0])
        return false;

    // add all the values less than first index to a left array
    // add all the values greater than first index to a right array
    let arr1Left = [];
    let arr1Right = [];
    let arr2Left = [];
    let arr2Right =[];

    for(let i=1; i<arr1.length; i++) {
        if(arr1[i] < arr1[0])
            arr1Left.push();
        else
            arr1Right.push();
        if(arr2[i] < arr2[0])
            arr2Left.push();
        else
            arr2Right.push();
    }

    //Recursively compare left and right arrays
    return isSame(arr1Left, arr2Left) &&
           isSame(arr1Right, arr2Right);
    
};

console.log(isSame(arr1, arr2));