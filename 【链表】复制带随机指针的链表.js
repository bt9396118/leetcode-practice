/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
//解法一，使用hash存储原结点和克隆结点的映射关系，通过映射关系处理克隆结点的random指针，时间复杂度O(n)
var copyRandomList = function(head) {
    if(head == null){
        return head;
    }
    let current = head,node = new Node(),tmp = node,map = new Map();

    while(current != null){
        tmp.val = current.val;
        tmp.next = current.next ? new Node() : null;
        map.set(current,tmp);
        tmp = tmp.next;
        current = current.next;
    }

    tmp = node;
    while (head != null) {
        tmp.random = head.random ? map.get(head.random) : null;
        head = head.next;
        tmp = tmp.next
    }
    return node;
};

//解法二，原地处理，将克隆结点放在原结点后面，在原链表上处理克隆结点的random指针，最后分离两个链表，时间复杂度O(1)
var copyRandomList = function(head){
    if(head == null){
        return head;
    }
    let current = head;
    // 将克隆结点放在原结点后面，1->2->3  ==>  1->1'->2->2'->3->3'
    while (current != null) {
        const clone = new Node(current.val,current.next,null);
        const temp = current.next;
        current.next = clone;
        current = temp;
    }

    //处理random指针
    current = head;
    while (current != null) {
        current.next.random = current.random == null ? null : current.random.next;
        current = current.next.next; 
    }

    // 还原原始链表，即分离原链表和克隆链表
    current = head;
    const cloneHead = head.next;
    while (current.next != null) {
      const temp = current.next;
      current.next = current.next.next;
      current = temp;
    }
    return cloneHead;
}

