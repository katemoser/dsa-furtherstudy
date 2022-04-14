/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth(node = this.root, level = 0) {

    // console.log("CURRENTLY LOOKING AT :", node ? node.val : "null");
    
    if(!node){
      return 0
    }

    //add one for the level of the current node
    return 1 + Math.min(
      this.minDepth(node.left),
      this.minDepth(node.right)
    )
    
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth(node = this.root) {

  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound, node = this.root) {

  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {
    let level = 0;
    let toVisitQueue = [[this.root, level]];

    if(this.root === node1 || this.root === node2) return false;

    let parent1;
    let levelNode1;
    let parent2;
    let levelNode2;

    while(toVisitQueue){
      console.log("queue", toVisitQueue);
      let [currentNode, level] = toVisitQueue.shift();
      console.log("Current node", currentNode, "level", level)
      if(currentNode?.left === node1 || currentNode?.right === node1){
        parent1 = currentNode;
        levelNode1 = level + 1; 
      }
      if(currentNode?.left === node2 || currentNode?.right === node2){
        parent2 = currentNode;
        levelNode2 = level + 1; 
      }
      
      toVisitQueue.push([currentNode?.left, level +1]);
      toVisitQueue.push([currentNode?.right, level+1]);
    }
    if(parent1 === parent2 || levelNode1 !== levelNode2){
      return false;
    }
    return true;

  }

}

module.exports = { BinaryTree, BinaryTreeNode };
