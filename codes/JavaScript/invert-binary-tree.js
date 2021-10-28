/*

Tree:
   7
 /   \
 5   2
/ \ /
1 6 8

*/

let tree = {
    left: {
        left: {
            value: 1
        },
        right: {
            value: 6
        },
        value: 5
    },
    right: {
        left: {
            value: 8
        },
        value: 2
    },
    value: 7
};

function invert_binary_tree(root) {
    if(!root || (!root.left && !root.right)) {
        return root;
    }
      
    let tempLeft = root.left;
    root.left = root.right ? root.right : null;
    root.right = tempLeft ? tempLeft : null;
    invert_binary_tree(root.left);
    invert_binary_tree(root.right);
    return root;
}

invertedTree = invert_binary_tree(tree);
console.log(invertedTree);