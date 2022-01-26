var maxSlidingWindow = function(nums, k) {
    //边界条件
    if(k === 0){
        return [];
    }
    if(k === 1){
        return nums;
    }

    let queue = [0];
    let max = [];

    for(let i=1;i<nums.length;i++){
        //形成长度为k的窗口
        if(nums[i] > nums[queue[0]]){
            queue = [];
            queue.push(i);
        }else{
            while(queue.length > 0 && nums[i] > nums[queue[queue.length-1]]){
                queue.pop();
            }
            queue.push(i)
        }
        if(i-queue[0] >= size){
            queue.shift();
        }

        if(i >= k-1){
            //最大值下标始终位于队首
            max.push(nums[queue[0]])
        }
    }
}