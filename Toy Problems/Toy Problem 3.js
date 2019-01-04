//Make the function invocation work



//code here

var sum = function(arr, callback){
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
      total = (total + arr[i]);
  }  callback(total);
}


//make this work

sum([1, 4, 3, 5, 2, 8], function(total){
    console.log("the total sum of the array is " + total);
});