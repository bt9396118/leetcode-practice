/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0);//哑节点
    dummy.next = head;
    let position = 0;
    let current = head;

    // 得到链表的长度
    while (current.next) {
        position++;
        current = current.next;
    }

    // 获取删除元素的位置
    position = position - n;
    current = dummy;
    while(position >= 0){
        position--;
        current = current.next;
    }
    current.next = current.next.next;
    return dummy.next;
};