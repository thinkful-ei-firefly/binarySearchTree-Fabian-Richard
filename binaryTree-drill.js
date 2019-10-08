'use strict';

const BinarySearchTree = require('./binarySearchTree');

function main(){
    //3,1,4,6,9,2,5,7
    const input = [3,1,4,6,9,2,5,7];
    const BST = new BinarySearchTree();

    input.forEach(item => {
        BST.insert(item, item);
    });

    const input1 = 'E A S Y Q U E S T I O N'.split(' ');
    const BST1 = new BinarySearchTree();

    input1.forEach(item => {
        BST1.insert(item, item);
    });

    // console.log(BST1);
    return BST1;

}
/*
            3               currMax = 1 --> Max = 1
                            .left                                   .right
        1       4           currMax = 2 --> Max = 2                 currMax = 2 --> Max = 2
                                .right                                  .right
          2       6             currMax
                5   9
                   7


*/
let max = 0;

const getHeight = (t, currMax=0) => {
    //Base Case this.left and this.right === null
    if(!t) {
        return;
    }
    else {
        currMax++;
        //call function again
        getHeight(t.left, currMax);
        getHeight(t.right, currMax);
    }
    // console.log(max);
    if(currMax > max) {
        max = currMax;
    }
    return max;
};

const BST = main();

max = getHeight(BST);
console.log(`max is = ${max}`);
