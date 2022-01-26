var minSetSize = function(arr) {
    let map = new Map();
    let countArr = [];
    let minCount = 0;
    for(let i = 0;i<arr.length;i++){
        if(map.has(arr[i])){
            map.set(arr[i],map.get(arr[i])+1)
        }else{
            map.set(arr[i],1)
        }
    }
    map.forEach((value)=>{
        countArr.push(value);
    })
    countArr.sort((a,b) => b-a);

    let ans = 0;
    for(let i=0;i<countArr.length;i++){
        if(ans>=arr.length / 2){
            break;
        }
        ans+=countArr[i];
        minCount++;
    }
    return minCount;
};

console.log(minSetSize([3,3,3,3,5,5,5,2,2,7]))