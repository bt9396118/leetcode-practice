/**
 * @param {number[]} nums
 * @return {number}
 */
 var jump = function(nums) {
    const steps = [0];
    let r = 0;
    for(let i=0;i<nums.length;i++){
        let nr = Math.min(i + nums[i],nums.length-1);
        //如果右端点大于当前步数区间长度，则不需要操作
        if(nr < r){
            continue;
        }else{//如果右端点小于当前步数区间长度，说明右端点的位置要发生变化
            for(let j=r+1;j<nr+1;j++){
                steps.push(steps[i]+1)
            }
            r=nr;
        }
    }
    return steps[nums.length - 1];
};