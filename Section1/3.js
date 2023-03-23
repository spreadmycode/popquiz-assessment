// Algorithm:
// 1) Initialize maxProduct and minProduct to be the first element of the array.
// 2) Initialize the variable result to be equal to maxProduct.
// 3) Iterate through the rest of the array:
// - If the current number is negative, swap maxProduct and minProduct.
// - Update maxProduct and minProduct based on the current number and the products that end at the previous position.
// - Update the variable result to be the maximum of result and maxProduct.

function maxProduct(nums) {
  let maxProduct = nums[0];
  let minProduct = nums[0];
  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < 0) {
      [maxProduct, minProduct] = [minProduct, maxProduct];
    }
    maxProduct = Math.max(nums[i], maxProduct * nums[i]);
    minProduct = Math.min(nums[i], minProduct * nums[i]);
    result = Math.max(result, maxProduct);
  }

  return result;
}
