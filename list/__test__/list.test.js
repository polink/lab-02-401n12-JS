'use strict';

// These 2 should be interchangeable!
const List = require('../list.js');
// const List = require('../list-constructor.js');

describe('List Data Structure', () => {

  it('starts with a length of -1 and an empty data set', () => {
    let stuff = new List();
    expect(stuff.length).toEqual(0);
    expect(stuff.data).toEqual({});
  });

  it('pushes items to the end of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    expect(stuff.length).toEqual(2);
    expect(stuff.data[1]).toEqual('b');
  });

  it('pops items off of the end of the list and returns them', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    expect(stuff.pop()).toEqual('b');
    expect(stuff.length).toEqual(1);
  });

  it('can shift an item on to the front of the list',()=>{
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.shift('c');
    expect(stuff.length).toEqual(3);
    expect(stuff.data[0]).toEqual('c');
  });

  it('can successfully unshift and return the value that was at the frond and changes the length',()=>{
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    expect(stuff.unshift()).toEqual('a');
    expect(stuff.length).toEqual(1);
  });

  it('takes in a function and will run it for each index', ()=>{
    let stuff = new List();
    stuff.push(2);
    stuff.push(10);
    stuff.forEach((data)=>{ return data+=1});
    expect(stuff.data[0]).toEqual(3);
  })

  it('can create a new map based upon itself',()=>{
    let stuff = new List();
    stuff.push('1');
    stuff.push('5');
    let tmap= stuff.map((data)=>{
      return data+2;
    });
    expect(tmap.length).toEqual(stuff.length);
    expect(tmap.data[0]).toEqual(stuff.data[0]+2);
  })

  it('successfuly creates a new list based on filtering its own data',()=>{
    let stuff = new List();
    stuff.push(2);
    stuff.push(5);
    stuff.push(7);
    stuff.push(8);
    let filtered=stuff.filter((data)=>data%2===0);
    expect(filtered.length).toEqual(2);
    expect(filtered.data[0]).toEqual(2);
  } )




});