


var inputSizes = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000,
                  9000, 10000, 11000, 12000, 13000, 14000, 15000,
                  16000, 17000, 18000, 19000, 20000]

inputSizes.forEach(function(inputSizes){
    var a = [];
    for (var i = 0; i<inputSizes; i++) {
        a.push(Math.random() * 1000)
    }

    //third challenge to read an object
    // var x = {}
    // for (var i = 0; i < inputSizes; i++) {
    // x["property" + i] = "foo";
    // }

    console.log("sorting array of size", a.length); 
    console.time('test') 
    // bubbleSort(a);
    a.sort()
    // bucketSort(a);
    console.timeEnd('test');
});

//  function bubbleSort(a) {
//     var swapped;
//         do {
//             swapped = false;
//             for (var i=0; i < a.length-1; i++) {
//         if (a[i] > a[i+1]) {
//             var temp = a[i];
//                 a[i] = a[i+1];
//                 a[i+1] = temp;
//            swapped = true;
//            }
//         }
//     } while (swapped);
// }

// var a = [3, 2, 1]
// bucketSort(a)
// console.log(a)


// function bucketSort(a) {
//     // step 0,  create an array of buckets
//     var buckets = [];
//     for (var i = 0; i <= 1000; i++) {
//         buckets.push(0)
//     };
//     // step 1, put the numbers in the buckets 
//     for (var i = 0; i < a.length; i++) {
//         var number = a[i];
//         buckets[number]++;
//     };
//     // step 2, create the output array
//     var index = 0;
//     for (var number = 0; number <= 1000; number++) {
//         var count = buckets[number];
//         for (var j=0; j<count; j++) {
//             a[index] = number;
//             index++;
//         }
//     }
// }







