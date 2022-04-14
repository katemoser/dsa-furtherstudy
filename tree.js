/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    let sum = 0;
    let countStack = [this.root];

    while( countStack.length){
      //pop from the top of the stack
      //add that value to the suum
      //push current node's children to the stack.
      //rinse and repeat
      let current = countStack.pop();
      sum += current.val;
      for(let child of current.children){
        countStack.push(child);
      }
    }
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let numEvens = 0;
    let toVisitStack = [this.root];

    while( toVisitStack.length){
      let current = toVisitStack.pop();
      if(current.val %2 === 0){
        numEvens++;

      }
      for(let child of current.children){
        toVisitStack.push(child);
      }
    }
    return numEvens;

  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    let numGreater = 0;
    let toVisitStack = [this.root];

    while(toVisitStack.length){
      let current = toVisitStack.pop();
      if(current.val > lowerBound){
        numGreater++;
      }
      for(let child of current.children){
        toVisitStack.push(child);
      }
    }
    return numGreater;
  }
}

module.exports = { Tree, TreeNode };
