function countDuplicates(numbers) {
    var set = new Set(numbers);
    console.log(set)
    var n = numbers.length-1;
    console.log(n-set.size)
}
countDuplicates([1,1,2,2,2,3,4,3,9])