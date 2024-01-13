// Node Factory
const Node = (input) => {
    return {
        value: input || null,
        nextNode: null,
        changeValue(newValue) {
            this.value = newValue;
        },
    }
}

// Linked List Factory
const LinkedList = () => {
    let length = 0;

    const append = (value) => {
        const newNode = Node(value);
        length++;
        if (head === null) {
            return (head = newNode);
        }
        let pointer = head;
        while (pointer.nextNode !== null) {
            pointer = pointer.nextNode;
        }
        pointer.nextNode = newNode;
    }

    const prepend = (value) => {
        const newNode = Node(value);
        length++;
        if (head === null) {
            return (head = newNode);
        }
    }

    const size = () => {
        if (!head) return null;
        return length;
     }

    const head = () => {
        if (!head) return null;
        return head.value;
    }

    const tail = () => {
        if (!head) return null;
        let pointer = head
        while (pointer.nextNode !== null) {
            pointer = pointer.nextNode;
        }
        return pointer.value;
    }

    const at = (index) => {
        if (!head) return null;
        let pointer = head;
       for(let i = 0; i < index; i++) {
        pointer = pointer.nextNode;
       }
       return pointer;
    }

    const pop = () => {
        if (!head) return null;
        //for a list with one node
        if(head.nextNode === null) {
            head = null;
        }
        //find pointer before tail
        at(size() - 2).nextNode = null;
        length--;
    }

    const contains = (value) => {
        if (!head) return null;
        let pointer = head;
        while(pointer.nextNode !== null) {
            if (pointer.value == value) return true;
            pointer = pointer.nextNode;
        }
        //checking the tail
        return pointer.value === value ? true : false;
    }

    const find = (value) => {
        if (!head) return null;
        let index = 0;
        let pointer = head;
        while (pointer.nextNode !== null) {
            if (pointer.value === value) return index;
            pointer = pointer.nextNode;
            index++;
        }
        //checking the tail
        return pointer.value === value ? index : null;
    }

    const toString = () => {
        if (!head) return null;
        let pointer = head;
        let string = "";
        while (pointer.nextNode !== null) {
            string = string.concat(`$[ {pointer.value} ] -> `);
            pointer = pointer.nextNode;
        }
        //for the tail
        string = string.concat(`$[ {pointer.value} ] -> null`);
        console.log(string);
        return string;
    }

    // extra credit
    const insertAt = (value, index) => {
        if (!head) return null;
        const newNode = Node(value);
        length++;
        let pointer = head;
        for (let i = 0; i < index - 1; i++) {
            pointer = pointer.nextNode;
        }
        const nextNode = pointer.nextNode;
        pointer.nextNode = newNode;
        newNode.nextNode = nextNode;
    }

    const removeAt = (index) => {
        if (!head) return null;
        if (index > length || index < 0) return;
        if (index === 0)head = head.nextNode;
        else {
            const prePointer = at(index -1);
            prePointer.nextNode = prePointer.nextNode.nextNode;
        }
        length--;
    }

    return {
        head,
        length,
        append,
        prepend,
        size,
        tail,
        at,
        pop,
        contains,
        find,
        toString, 
        insertAt,
        removeAt,
    }
}