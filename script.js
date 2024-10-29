class TreeNode {
    constructor (value) {
        this.value=value;
        this.right=undefined;
        this.left=undefined;
    }

    add(value) {
        if (this.value===value) return console.log("такое значение уже есть в дереве");
        if (value < this.value) {
            this.addLeft(value);
        } else {
            this.addRight(value);
        }
    }

    addLeft (value) {
        if (this.left) {
            return this.left.add(value);
        }
        this.left=new TreeNode(value);
    }

    addRight (value) {
        if (this.right) {
            return this.right.add(value);
        }
        this.right=new TreeNode(value);
    }
}

class BinaryTree {
    constructor() {
        this.root=undefined;
    }

    add(value) {
        if (this.root) {
            return this.root.add(value);
        }
        this.root= new TreeNode(value);
    }

    find(value) {
        let current = this.root;
        let cout =0;
        while (true) {
            cout++;
            if (current === undefined) return console.log("нет такого элемента в дереве");
            if(current.value === value){
                console.log(`элемент найден с ${cout} попытки`);
                return current;
            }
            if (value < current.value){
                current=current.left;
            } else {
                current=current.right;
            }
        }
    }
}

const tree = new BinaryTree();
tree.add(3);
tree.add(2);
tree.add(1);
tree.add(4);
tree.add(5); 
tree.add(2);

const rez= tree.find(5); 
console.log(rez);
