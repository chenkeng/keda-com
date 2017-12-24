// 数组去除重复元素
function dedupe(arr) {
    return Array.from(new Set(arr));
}
/*   arr=[1,1,2,2,3];
 *   dedupe(arr); // [1,2,3]
*/

// 默认从小到大排序
arr.sort(function (a,b) {
    return a-b;
})