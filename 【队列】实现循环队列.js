/**
 * @Author: btg
 * @Date: 2021-12-05 16:15:33
 * @Description: 实现循环队列
 * @method: 在队列的实现过程中，同样有动态空间调整的问题，要实现一个动态空间的队列，通常有两种做法。
 * 第一种做法是使用链表，因为我们不需要进行随机查找，所以利用链表的特性随时申请和删除新的节点就可以了。
 * 第二种做法就是题目里说的循环队列，循环队列本质上是一个大小固定的静态数组，但是队列的头指针和尾指针是可以循环移动的，即如果之前有数据出队了，那么出队的空间可以重复使用。
 */
/**
 * @param {number} k
 */
 var MyCircularQueue = function(k) {
    this.a = new Array(k);
    this.head = 0;
    this.tail = 0;
    this.size = 0;
    this.maxSize = k;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if(this.size === this.maxSize){
        return false
    }
    this.a[this.tail] = value;
    this.tail += 1;
    this.tail %= this.maxSize;
    this.size += 1;
    return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if(this.size === 0){
        return false
    }
    this.head += 1;
    this.head %= this.maxSize;
    this.size -= 1;
    return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if(this.size == 0){
        return -1;
    }
    return this.a[this.head]
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if(this.size == 0){
        return -1;
    }
    var cur = this.tail;
    cur -= 1;
    var cur = (cur + this.maxSize) % this.maxSize;
    return this.a[cur];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.size === 0;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.size === this.maxSize;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */