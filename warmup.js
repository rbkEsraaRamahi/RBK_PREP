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

