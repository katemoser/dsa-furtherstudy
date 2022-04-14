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
    //the approach: breadth-first, recursively
    //look at the tree, tier by tier until one 
    //of the nodes doesn't have either a left or right attr (kidfree)
    //that first node is the minimum depth

    //create depthCount = 1
    //create parent queue, root node goes in
    //while loop (parentQueue.length)
    //current = parentQueue.shift()
    //create children queue
    //check current.left and .right, put kids into childrenQueue
    //increment depthCount

    //base case: root is null
    // if(node === null){
    //   return level;
    // }

    // if(node.left === null && node.right === null){
    //   return level;
    // }
    // level++;
    
    // //recursion
    // return Math.min(this.minDepth(node.left, level +1), this.minDepth(node.right, level +1))
    
    // let depthCount = 1;


    // let parentQueue = [node];

    // while(parentQueue.length){
    //   let current = queue.shift();

    //   if(current.left === null && current.right === null){
    //     //if the node is a leaf, yer a free elf!
    //     depthCount++;
    //     return depthCount;
    //   }

    //   while()
    //   for(let child of [current.left, current.right]){
    //     if(child !== null){
    //       queue.push(child);
    //     }
    //   }
    //   depthCount++;
    // }
    
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
  }

}

module.exports = { BinaryTree, BinaryTreeNode };
