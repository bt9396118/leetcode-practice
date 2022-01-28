/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var quickSort = function(nums){
    var pivot = (nums,l,r) => {
        if(l >= r)return;
        var mid = Math.round(Math.random() * (r - l) + l);
        [nums[l],nums[mid]] = [nums[mid],nums[l]];
        var x = nums[l];
        var i = l+1,j=r;
        while(i < j){
            while(i < j && nums[i] >= x)i++;
            while(i < j && nums[j] <= x)j--;
            if(i===j)break;
            [nums[i],nums[j]] = [nums[j],nums[i]];
        }
        if(nums[i] < x){
            [nums[i-1],nums[l]] = [nums[l], nums[i-1]];
            i -= 1;
        }else{
            [nums[i],nums[l]] = [nums[l], nums[i]];
        }
        pivot(nums,l,i-1);
        pivot(nums,i+1,r);
    }
    pivot(nums,0,nums.length-1);
    return nums;
}

var findKthLargest = function(nums, k) {
    //调库解法
    // nums.sort((a,b) => b-a);

    //快速排序解法
    quickSort(nums);
    return nums[k-1];
};

console.log(findKthLargest([3,2,1,5,6,4],2))