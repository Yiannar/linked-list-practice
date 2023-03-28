const { nums, words } = require("./data/data.js");

class Node{
  constructor(data){
    this.data = data
    this.next = null
  }
}

class LinkedList{
  constructor(head = null){
    this.head = head
  }
insert(data) {
  let newNode = new Node(data);
  if (!this.head) {
    this.head = newNode;
  } else {
    newNode.next = this.head;
    this.head = newNode;
  }
}


size(){
  let count = 0 
  let node = this.head
  while (node){
    count ++
    node = node.next 
  }
  return count 
}

delete (data){
  let node = this.head
  let counter = 0 
  while (node.data !== data && node.next ){
    counter ++
    node = node.next
  }
  let found = node 
  node = this.head 
  for (let i = 1; i < counter; i++){
    node = node.next 
  }
  node.next = found.next 
}

getFirst (){
  return this.head
}

getLast (){
  let node = this.head
  if(!this.head) return null
  while (node.next){
    node = node.next
  } return node
}

search(key){
  let node = this.head
  while (node !== null && node.data !== key){
    node = node.next 
  } 
  return node
}

getKth(key){
  let node = this.head
  let count = 1
  while (node !== null && count < key){
    node = node.next 
    count ++
  }
  return node 
}

getKthToLast (key){
  if (key < 1 ) return null
  let p1 = this.head
  let p2 = this.head

  for (let i = 0; i < key; i++){
    if (!p2) return null 
    p2 = p2.next
  }
  
  while (p2.next){
    p2 = p2.next
    p1 = p1.next
  }
  return p1
}


isEmpty(){
  return this.head === null
}

clear(){
  this.head = null
}

toArray(){
  let arr =[]
  let node = this.head
  while (node){
    arr.push(node.data)
    node = node.next
  } 
  return arr
}

containsDuplicates(){
  const seen =[]
  let current = this.head
  while (current){
    if (seen.includes(current.data)){
      return true 
    }
    seen.push(current.data)
    current = current.next
  }
  return false 
}
}

module.exports = {
  Node,
  LinkedList,
};
