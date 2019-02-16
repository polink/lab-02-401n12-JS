'use strict';

class List {

  constructor() {
    this.length = 0;
    this.data = {};
  }

  /**
   * Add item to the end of the list
   * @param item
   */
  push(item) {
    // Add an item to the end
    this.data[this.length] = item;
    this.length++;
  }

  /**
   * // Remove an item from the end of the list and return it's value
   * @returns {*}
   */
  pop() {
    let returnValue = this.data[this.length-1];
    delete this.data[this.length-1];
    this.length--;
    return returnValue;
  }

  shift(value){
    for(let i = this.length; i>0; i--){
      this.data[i+1]=this.data[i];
    }
    this.data[0]=value;
    this.length++;
  }

  unshift(){
    let returnValue=data[0];
    for (let i in this.data){
      this.data[i] = this.data[i+1];
    }
    return(returnValue);
  }
  forEach(functionIn){
    for (let i in this.data){
      functionIn(this.data[i]);
    };

  }

}

module.exports = List;
