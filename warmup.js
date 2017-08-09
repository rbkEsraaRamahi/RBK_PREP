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
