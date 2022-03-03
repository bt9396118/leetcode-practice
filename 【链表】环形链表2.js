/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if(head===null)return null;
   	if(head.next===null)return null;
   	if(head.next.next===null)return null;
   
    var a = head.next;
    var b = head.next.next;

    // 是否存在环
    while(a!==null && b!==null){
        if(a===b)break;
        a=a.next;
        b=b.next;
        if(b!==null)b=b.next;
    }

    if(a===null || b===null)return null;

    a=head;
    while (a!=b) {
        a=a.next;
        b=b.next;
    }
    return b;
};