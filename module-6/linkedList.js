class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    addNode(value) {
        const node = new Node(value)
        this.size++
        if (!this.head)  return this.head = node 
        let current  = this.head
        while(current?.next) current = current.next
        current.next = node
    }

    insertAt(item, index) {
        if ( index < 0 || index > this.size ) throw new Error('Unable to add item')
        let node = new Node(item)
        let curr = this.head 
        let prev 
        let it = 0
        this.size++
        if (index == 0) {
            node.next = this.head
            return this.head = node
        }
        
        while(it < index) {
            it++
            prev = curr
            curr = curr.next
            // console.log({prev, curr})
        } 

        // adding an element
        node.next = curr;
        prev.next = node;
    }

    getSize(){
        return this.size
    }

    // checks the list for empty
    isEmpty() {
        return this.size == 0
    }


    printList() {
        let curr = this.head
        let listData = ''
        while(curr) {
            listData += curr?.value + ' '
            curr = curr?.next 
        }
        console.log(listData)
    }

    indexOf(item) {
        let curr = this.head
        let inidex = 0
        while(curr) {
            if(curr?.value == item) return inidex
            inidex++
            curr = curr?.next
        }
        return -1
    }

    removeItem(item) {}
}

const ll = new LinkedList(1)
ll.addNode(2)
ll.addNode(3)
ll.addNode(23)
// console.log(ll.indexOf(23))
ll.insertAt(45, 2)
ll.printList()

// console.log(JSON.stringify(ll), ll.getSize())
