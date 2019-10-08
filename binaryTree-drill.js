const BinarySearchTree = require('./binarySearchTree')

function main(){
  //3,1,4,6,9,2,5,7
  const input = [3,1,4,6,9,2,5,7]
  const BST = new BinarySearchTree();

  input.forEach(item => {
    BST.insert(item, item);
  })

  //console.log(BST);

  const input1 = 'E A S Y Q U E S T I O N'.split(' ')
  const BST1 = new BinarySearchTree();

  input1.forEach(item => {
    BST1.insert(item, item);
  })

  console.log(BST1);

}

main();
