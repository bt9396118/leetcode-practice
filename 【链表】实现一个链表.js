function LinkedList(){
    let Node = function(element) {
        this.element = element;
        this.next = null;
    }

    let length = 0;
    let head = null;

    //添加元素
    this.append = function (element) {
        let node = new Node(element),current;

        //列表中的第一个节点
        if(head === null){
            head = node;
        }else{
            current = head;
            while(current.next){
                current = current.next;
            }
            current.next = node
        }
        length++;
    }

    //在指定位置插入元素
    this.insert = function (position,element) {
        
    }

    //删除指定位置上元素
    this.removeAt = function (position) {
        //检查越界值
        if(position > -1 && position < length){
            let current = head,previous,index;
            
            //删除链表上第一个元素
            if(position === 0){
                head = current.next;
            }else{ //删除链表上指定位置的元素
                while (index++ <= position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            length--;
            return current.element
        }else{
            return null;
        }
    }

    //删除元素
    this.remove = function (element) {
        
    }

    //获取元素位置
    this.indexOf = function (element) {
        
    }

    //判断是否为空
    this.isEmpty = function () {
        
    }

    //链表的大小
    this.size = function () {
        
    }

    //获取链表头
    this.getHead = function () {
        
    }

    //链表转成字符串
    this.toString = function () {
        
    }

    //打印链表
    this.print = function () {
        
    }
}