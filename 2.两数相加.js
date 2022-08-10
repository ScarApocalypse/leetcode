/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let cur = preHead = new ListNode(0,null);
  let extend = 0;
  while(l1 || l2){
    let val1 = l1?.val || 0;
    let val2 = l2?.val || 0;
    let sum = val1 + val2 + extend;
    extend = sum >= 10 ? 1 : 0;
    cur.next = new ListNode(sum % 10, null);
    l1 = l1?.next;
    l2 = l2?.next;
    cur = cur.next;
  }
  cur.next = extend > 0 ? new ListNode(1,null) : null;
  return preHead.next;
};
// @lc code=end
