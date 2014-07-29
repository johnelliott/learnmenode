// console.log(process.argv);

var array = process.argv;
var sum = 0;
for (i = 2; i < array.length; i++) {
    sum = sum + Number(array[i]);
};
console.log(sum);
