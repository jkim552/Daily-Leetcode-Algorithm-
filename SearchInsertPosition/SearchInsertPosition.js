/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  var index = nums.length;
  for (var i = 0; i < index; i++) {
    if (nums[i] >= target) {
      return i;
    }
  }
  return index;
};
