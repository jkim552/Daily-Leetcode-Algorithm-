/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    var start = 1;
    var mid;
    var end = n;
    while (start <= end) {
      mid = Math.floor((end - start) / 2) + start;
      if (isBadVersion(mid)) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return start;
  };
};
