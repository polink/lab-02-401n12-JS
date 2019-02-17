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
    let returnValue=this.data[0];
    console.log(returnValue);
    for (let i in this.data){
      this.data[i] = this.data[i];
      console.log(this.data[i])
    }
    this.length--;
    console.log('shifted array'+this.data);
    return (returnValue);
  };

  forEach(functionIn){
    for (let i in this.data){
      let val=this.data[i];
      this.data[i]=functionIn(val);
    }
  };

  map(functionIn){
    let outMap=new List();
    for (let i in this.data){
      outMap.push(functionIn(this.data[i]));
    }
    return outMap;
  };

  filter(functionIn){
    let output = new List();
    for (let i in this.data) {
      if (functionIn(this.data[i])) {
        output.push(this.data[i]);
      }
    }
    return output;
  }

}

module.exports = List;
