class Heap {
    constructor(compare) {
        this.compare = compare //根据传入的比较函数决定大根堆还是小根堆
        this.queue = []
    }
    compareFn(index1, index2) {
        //处理越界情况，传入的参数决定了index2有可能越界
        if (!this.queue[index2]) return -1

        return this.compare(this.queue[index1], this.queue[index2])
    }
    push(value) {
        //将元素放在队列最后，这样才能在更新过程中找到合适的位置
        this.queue.push(value)

        let index = this.queue.length - 1
        let parent = Math.floor((index - 1) / 2)
        //从后往前开始不断更新
        while (parent >= 0 && this.compareFn(parent, index) > 0) {//注意不要越界以及参数的顺序
            [this.queue[index], this.queue[parent]] = [this.queue[parent], this.queue[index]]

            index = parent
            parent = Math.floor((index - 1) / 2)
        }
    }
    pop() {
        let res = this.queue[0]

        //将最后一个元素放在第一个位置，也就是最大或者最小的放在最前面，只有这样才能把重新正确排序
        this.queue[0] = this.queue.pop()

        //找到比较大（小）的那一个
        let index = 0
        let left = index * 2 + 1
        let choose = this.compareFn(left, left + 1) > 0 ? left + 1 : left

        //从前往后开始不断更新
        while (this.compareFn(index, choose) > 0) {
            [this.queue[index], this.queue[choose]] = [this.queue[choose], this.queue[index]]

            index = choose
            left = index * 2 + 1
            choose = this.compareFn(left, left + 1) > 0 ? left + 1 : left
        }

        return res
    }

}
