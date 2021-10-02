public class BinarySearchTree {
    TreeNode root;

    public BinarySearchTree() {
        this.root = null;
    }

    private TreeNode insertHelper(TreeNode root, int value) {
        if(root == null) {
            return new TreeNode(value);
        }

        if(root.value < value) {
            root.right = insertHelper(root.right, value);
        }

        else if(root.value > value) {
            root.left = insertHelper(root.left, value);
        }

        else {
            root.value = value;
        }

        return root;
    }

    public void insert(int value) {
        this.root = insertHelper(this.root, value);
    }

    private int inorderSuccessor(TreeNode root) {
        int mininum = root.value;
        while(root.left != null) {
            mininum = root.left.value;
            root = root.left;
        }
        return mininum;
    }

    private TreeNode deleteHelper(TreeNode root, int value) {
        if(root == null) {
            return root;
        }

        if(root.value < value) {
            root.right = deleteHelper(root.right, value);
        }

        else if(root.value > value) {
            root.left = deleteHelper(root.left, value);
        }

        else {
            // 0 or 1 children
            if(root.left == null) {
                return root.right;
            }
            else if(root.right == null) {
                return root.left;
            }
            root.value = inorderSuccessor(root.right);
            root.right = deleteHelper(root.right, root.value);
        }

        return root;
    }

    public void delete(int value) {
        this.root = deleteHelper(this.root, value);
    }

    public boolean isPresent(int value) {
        TreeNode curr = this.root;
        while(curr != null) {
            if(curr.value > value) {
                curr = curr.left;
            }
            else if(curr.value < value) {
                curr = curr.right;
            }
            else {
                return true;
            }
        }
        return false;
    }
}