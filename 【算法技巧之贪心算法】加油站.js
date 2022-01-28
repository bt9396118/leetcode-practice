/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
 var gas  = [7,1,0,11,4];
 var cost = [5,9,1,2,5];
 
 var canCompleteCircuit = function(gas, cost) {
    let res = 0,index=0,start=0;
    for(let i=0;i<gas.length;i++){
        start += gas[i] - cost[i];
        res += gas[i] - cost[i];
        if(start < 0){
            start = 0;
            index = (i+1)%gas.length; 
        }
    }
    return res < 0 ? -1 : index;
};

console.log(canCompleteCircuit(gas,cost))