function each(coll, f) { 
       if (Array.isArray(coll)) { 
             for (var i = 0; i < coll.length; i++) { 
                   f(coll[i], i); 
             } 
       } else { 
             for (var key in coll) { 
                   f(coll[key], key); 
             } 
       } 
 } 
 function map(coll, f) { 
       var acc = []; 
       if (!Array.isArray(coll)){
       	acc={};
       }
       each(coll, function(element, key) { 
             acc[key]=f(element, key); 
       }); 
       return acc;
   }
function filter(coll,predicate){
	var acc=[];
	if (!Array.isArray(coll)){
       	acc={};
       }
	each (coll, function(element,i){
		if (predicate (element,i)){
			acc[i]=element;
		}		
	});
	return acc;
}

function reduce(array, f, acc) { 
       if (acc === undefined) { 
             acc = array[0]; 
             array = array.slice(1); 
       } 
       each(array, function(element, i) { 
             acc = f(acc, element, i); 
       }); 
       return acc; 
 }
 ////studing for challenge 3////////////////////////////////////////////////////////////////////////////////////
//emproved reduce//
//Q1//
function range(start, end){
 var arr=[];
 for(var count=start; count<=end; count++){
 	arr.push(count)
 }	
 return arr;
}

function factorial(n){
	return reduce (range(1,n), function(acc, element){
		return acc*element
	})
}
//Q2//
function max(arr){
	return reduce(arr, function(acc,ele){
		if (ele>acc){
			return acc=ele;
		} else {
			return acc;
		}
	})
}
//Q3//
function modRange(start, end){
 if (end===undefined){
 	end = start;
 	start=0;
 }
 var arr=[];
 for(var count=start; count<=end; count++){
 	arr.push(count)
 }	
 return arr;
}
//Q4//
function allRange(start, end){
 var arr=[];
 if (end===undefined){
 	end = start;
 	start=0;
 }
 for(var count=start; count<=end; count++){
 	arr.push(count)
 }
 if (start>end){
 for(var count=start; count>=end; count--){
 	arr.push(count)
 }	
 }
 return arr;
}
//Advance//

function reduce2(coll, f, acc) { 
 if (!Array.isArray(coll)){
 	var newArr=[];
  for (var key in coll){
  	newArr.push(coll[key])
  }
  if (acc === undefined) { 
             acc = newArr[0]; 
             newArr = newArr.slice(1); 
       } 
       each(newArr, function(element, i) { 
             acc = f(acc, element, i); 
       });     
    } else{if (acc === undefined) { 
             acc = coll[0]; 
             coll = coll.slice(1); 
       } 
       each(coll, function(element, i) { 
             acc = f(acc, element, i); 
       }); }
 
       return acc; 
 }
//////check///
function sum(obj){
	return reduce2(obj, function(acc,ele){
		return acc+ ele
	})
}
function max2(arr){
	return reduce2(arr, function(acc,ele){
		if (ele>acc){
			return acc=ele;
		} else {
			return acc;
		}
	})
}
/////////RBK Answer/////////
function reduce3(coll, f, acc) { 
	if (acc === undefined){
		if (Array.isArray(coll)){
			acc = coll[0]; 
            coll = coll.slice(1);
		}else{
			var key=Object.keys(coll)[0]
			acc=coll[key]
			delete coll[key]
		}
	each(coll, function(element, i) { 
             acc = f(acc, element, i); 
       });
}
       return acc; 
 }
 /////////////////////////////////////////////////////////
 //Introduction closures:
//Q1+2:
 function makeCounter(n){
  var count=n
    return function counter(){
      count=count+1
      return count;
 }}
 ///Q3..Pow/////
function pow(exponent) {
     return function(base) {
          return base**exponent
          }
     } 
//More practice//Q2//

function adding(){
  var total=0
  return function a(n){
    if (n!==undefined){
      total=total+n
      n++
        return a
    }else {
      return total;
} 
  }
}
//More practice //Q1!//
function calculate(){
  var arr=[]
  return function(f,arr1,arr2){
    each (arr1, function (ele, i){
      each (arr2, function (element,j){
        if (i===j){
          arr.push(f(ele,element))
        }
      })

    })
    return arr;
  }
}

//////////////////////////////////////////////////////////////////////
//closures method:///
function makeAccount(initial){
  var balance= initial;
  return{
    withdraw:function(amount){
      if(balance>=amount){
        balance=balance-amount
        return"your money: "+ balance;
      }
      return 'no sufficient money'
      },
    deposit: function(amount){
      balance=balance+amount
      return 'your balance is: ' + balance;
    },
    checkBalance: function(){
      return 'Your balanceis: '+ balance;
    }
  }
}
/////
function makeCounter2(n){
  var count=n
    return{
      up: function(){
      count=count+1
      return count;
       },
      down: function(){
      count=count-1
      return count;
       },
      reset: function(){
      count=n
      return count;
       }


}


    } 
/////////////////////////////

function makeAccount2(initial) {
     var obj={}; 
     obj.balance = initial;
     obj.withdraw=withdraw;
     obj.deposit=deposit;
     return obj;   
}

var withdraw= function(amount) {
               if (this.balance - amount >= 0) {
                    this.balance = this.balance - amount;
                    return 'Here is your money: $' + amount;
               }
          return 'Insufficient funds.';
          }
var deposit= function(amount) {
               this.balance = this.balance + amount;
               return 'Your balance is: $' + this.balance;
          }
//////////////////////
function makeStopwatch() {
     var obj={};
     obj.time = 0;
     obj.start=start;
     obj.stop=stop;
     obj.reset=reset;
     return obj;
}

var start= function() {
  var lol=this;
    lol.stop = setInterval(function() {
    lol.time = lol.time + 1;
        console.log('Elapsed time: ' + lol.time + 's.');
          }, 1000);
     }
var stop= function() {
    clearInterval(stop);
          }

var reset= function() {
  var lol=this;
    clearInterval(lol.stop);
               lol.time = 0;
          }
