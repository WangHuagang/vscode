## 我是标题
1.第一个段落
2.第二个段落
3.第三个段落
*这是粗体
*这是斜体*
`<script>
        var arr = [1, 2, 3, 4, 5, 6, 7, 8];
        var f = arr.filter(function(x) {
            return x % 2 === 0; //过滤掉所有的奇数
        })
        console.log('剩下的偶数是：' + f);

        //回调函数
        var back = arr.filter(function(ele, index, self) { //ele表示每个元素的值，index表示索引，self表示当前数组本身
            console.log(ele);
            console.log(index);
            console.log(self);
            return true;
        })
    </script>
`
***