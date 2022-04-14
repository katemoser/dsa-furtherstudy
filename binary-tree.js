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
    // sets our initial level to 0
    let level = 0;
    let toVisitQueue = [[this.root, level]];

    // handles case where root node is node we are looking for, which means
    // the two nodes can't be cousins
    if(this.root === node1 || this.root === node2) return false;

    let parent1;
    let levelNode1;
    let parent2;
    let levelNode2;

    while(toVisitQueue.length > 0){
      // removing from our queue
      let [currentNode, level] = toVisitQueue.shift();

      // sets parent1 and levelNode1 to currentNode and currentNode's level + 1 
      // if either of its children are node 1
      if(currentNode.left === node1 || currentNode.right === node1){
        parent1 = currentNode;
        levelNode1 = level + 1; 
      }

      // sets parent2 and levelNode2 to currentNode and currentNode's level + 1 
      // if either of its children are node 2
      if(currentNode.left === node2 || currentNode.right === node2){
        parent2 = currentNode;
        levelNode2 = level + 1; 
      }

      if (parent1 && parent2) {
        break;
      }

      // pushing children if they exist
      if (currentNode.left) {
        toVisitQueue.push([currentNode.left, level +1]);
      }
      if (currentNode.right) {
        toVisitQueue.push([currentNode.right, level+1]);
      }
    }
    if(parent1 === parent2 || levelNode1 !== levelNode2){
      return false;
    }
    return true;
  }

}

module.exports = { BinaryTree, BinaryTreeNode };
