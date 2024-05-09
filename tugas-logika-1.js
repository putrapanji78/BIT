const perfectTwo = (nums, target) => {
    const numMap = new Map(); 

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }
        
        numMap.set(nums[i], i);
    }
    return 'no way'
}


const nums = [2, 7, 11, 15];
const target = 19;
console.log(perfectTwo(nums, target));
