### 修改文档

#### 插入
- ```i``` 当前字符前插入
- ```a``` 当前字符后插入
- ```I``` 行首插入
- ```A``` 行尾插入
- ```o``` 在下一行插入
- ```O``` 在上一行插入

#### 删除、复制、粘贴
- ```dd``` 删除整行
- ```yy``` 复制整行
- ```d<X>``` 删除指定内容并保存到 vim 剪贴板
- ```y<X>``` 复制指定内容并保存到 vim 剪贴板
- ```c<X>``` 删除指定内容并保存到 vim 剪贴板同时进入 insert 模式
- ```p``` 在当前位置后粘贴
- ```P``` 在当前位置前粘贴

_说明： ```<X>``` 部分是对操作内容的描述，如果要删除一个单词，就输入 ```dw``` 或者 ```de```，要复制当前位置到行尾的内容，就输入 ```y$```，要删除后面 3 个字符并插入，就输入 ```c3l``` 诸如此类_

#### 替换
- ```:%s/<search>/<replace>/``` 查找 search 内容并替换为 replace 内容

#### 保存文件
- ```:w``` 保存当前文件
- ```:wa``` 保存全部文件
- ```:wq``` or ```ZZ``` 保存并退出
- ```:saveas <new filename>``` 文件另存为

> 尝试在下面的文本中进行练习

```
Try to delete this line.
And paste it under this line.
Cut foo and paste before bar, looks like the next line.
Cut and paste before foo bar.

```
