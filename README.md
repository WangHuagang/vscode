## 我是标题
- 1.第一个段落  

- 2.第二个段落  

- 3.第三个段落<br>
*这是粗体<br>
*这是斜体*<br>
```
    <script>
            var arr = [1, 2, 3, 4, 5, 6, 7, 8];
            var f = arr.filter(function(x) {
            return x % 2 === 0; 
            })
            console.log('剩下的偶数是：' + f);

            var back = arr.filter(function(ele, index, self) { 
                console.log(ele);
                console.log(index);
                console.log(self);
                return true;
            })
        </script>
```
***
    上面是分割线  
    
    这是一个超链接<http://www.baidu.com>