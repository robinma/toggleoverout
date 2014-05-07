toggleoverout
=============

this is a packaging of mouse toggle with a target to mouseover and mouseout event


##Here's a example

>Example----use seajs loader js file

~~~~
var Toggle=require('toggleoverout')
~~~
#### //demo1
~~~
var toggle = new Toggle()

target.on('mouseover',function(){
  //to do sth
  toggle.evnOver(function(){
    // to do stn
  })
}).on('mouseout',function(){
  //to do sth
  toggle.evnOut(function(){
  //to do sth
  })
})
~~~
#### //demo2
~~~
//Toggle(target,envOver,EvnOut,[timer])
/**
*targtet {jquery Obj} target jquery object
*evnOver {Function} mouseover trigger Function
*Evnout {Function} mouseover trigger Function
*Timer {time || 50} seetTimeout wait time
*/

var toggle2=new Toggle(target,function(){
// this function is evnOver 
//to do sth
},function(){
//this function is evnOut
//to do sth
})
~~~~
