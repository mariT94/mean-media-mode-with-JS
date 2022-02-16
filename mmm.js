
/* first way to calculate the mean
function calculateMean (List){
    let sumList = 0;
        for(let i = 0; i<List.length; i++){
            sumList = sumList + List[i]; 
    }
    const listMean = sumList / List.length; 
    return listMean
}
*/




function calculateMean (numbers) { 
   
    const List =numbers.sort (function(a,b){
       return a - b
   }); 

    const sumList = List.reduce(
        function (accumulatedValue = 0, newElement) {
            return accumulatedValue + newElement; 
            
        }
    ); 

    const listMean = sumList / List.length; 
    return listMean; 
   }


function calculateMedian (numbers){

    const List =numbers.sort (function(a,b){
        return a - b
    }); 

const halfList = parseInt(List.length / 2) ; 
   
function evenNumber(modNumber){
if  (modNumber % 2 === 0 ){
return true; 

 } else {
return false; 

 }
}

let median;  

if (evenNumber(List.length)){
const element1= List[halfList - 1]
const element2 = List[halfList]

const averageElement1and2 = calculateMean([
    element1, 
    element2,
])
median = averageElement1and2; 

}else{
     median = List[halfList]
}
return median
}



function calculateMode (list){
 
const listCount  = {};
 
list.map (
    function(element) {
        if (listCount[element]) {
            listCount[element] += 1;
        } else {
            listCount[element] = 1;
        }
    }

);

const listArray  = Object.entries (listCount).sort(
    function (a, b){
        return a - b; 
    }
);

const mode = listArray [listArray.length -1]; 
return mode;
}


