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

// const BST = main();

// max = getHeight(BST);
// console.log(`max is = ${max}`);


/*
      7
   3     8
2    5      9


      7
   3     13
1   2      39


     7
  3     13
2  5       8

*/

const validBST = new BinarySearchTree(7, 7);
validBST.left = new BinarySearchTree(3, 3);
validBST.left.left = new BinarySearchTree(2, 2);
validBST.left.right = new BinarySearchTree(5, 5);
validBST.right = new BinarySearchTree(13, 13);
validBST.right.right = new BinarySearchTree(33, 33);

const fakeBST = new BinarySearchTree(7, 7);
fakeBST.left = new BinarySearchTree(3, 3);
fakeBST.left.left = new BinarySearchTree(1, 1);
fakeBST.left.right = new BinarySearchTree(2, 2);
fakeBST.right = new BinarySearchTree(13, 13);
fakeBST.right.right = new BinarySearchTree(39, 39);

const fakeBST1 = new BinarySearchTree(7, 7);
fakeBST1.left = new BinarySearchTree(3, 3);
fakeBST1.left.left = new BinarySearchTree(2, 2);
fakeBST1.left.right = new BinarySearchTree(5, 5);
fakeBST1.right = new BinarySearchTree(13, 13);
fakeBST1.right.right = new BinarySearchTree(8, 8);

// console.log(fakeBST1);

const isBST = (bst) => {
  if (bst===null)
    return true;

  if ((bst.left && bst.left.key>bst.key) || (bst.right && bst.right.key<bst.key)){
    return false
  }else{
    return isBST(bst.left) && isBST(bst.right)
  }
}

/*console.log(isBST(validBST)); //true
console.log(isBST(fakeBST));  //false
console.log(isBST(fakeBST1)); //false
*/

/*

            3
        1       4
          2       -6-
                5   9
                   7

*/

//loop through the tree -- keep track
//compair all the loops and return key at n - 3

const thirdLargest = (BST, path='', results=[]) => {
    //Base Case
    if(!BST) {
        results.push(path);
    }
    else {
        path = path +':'+ BST.key;
        thirdLargest(BST.left, path, results);
        thirdLargest(BST.right, path, results);
    }
    return results;
};

const thirdHelper = (array) => {
    let longestPath = array.reduce((acc, string) => {
        if(acc.length > string.length) {
            return acc;
        }
        else {
            return string;
        }
    }, '');
    return longestPath[(longestPath.length-3)];
};

const BST = new BinarySearchTree();

let array = [3,1,4,6,9,2,5,7];
// let array = 'E A S Y Q U T I O N'.split(' ');
/*
            E
          A     S
              Q   Y
             I    U
              O  T
            N
*/

array.forEach(item => {
    BST.insert(item, item);
});

// console.log(thirdHelper(thirdLargest(BST))); //6

const thirdHelperBalance = (array) => {
    let smaller = array[0].split(':').length;
    for (let i=1; i<array.length; i++){
      if (Math.abs(smaller - array[i].split(':').length) > 1) return false
      if (array[i].split(':').length< smaller) smaller=array[i].split(':').length
    }
    return true;
};

/*console.log(thirdHelperBalance(thirdLargest(BST))); //False
console.log(thirdHelperBalance(thirdLargest(validBST))); //True
*/