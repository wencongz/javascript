# DOM是针对HTML和XML文档的一个API
## 1、节点层次
###  1.1Node类型
> 每个节点都有一个nodeType属性。因此所有节点都共享着相同的基本属性的方法。主要有12个数值常量来表示
<ul>
    <li> node.ELEMENT_NODE(1)enter code here
    <li> node.ATTRIBUTE_NODE(2)
    <li> node.TEXT_NODE(3)
    <li> Node.CDATA_SECTION_NIDE(4)
    <li> Node.ENTITY_REFERENCE_NODE(5)
    <li> Node.ENTITY_NODE(6)
    <li> Node.PROCESSING_INSTRUCTION_NODE(7)
    <li> Node.CONNENT_NODE(8)
    <li> Node.DOCUMENT_NODE(9)
    <li> Node.DOCUMENT_TYPE_NODE(10)
    <li> Node.DOCUMENT_FRAGMENT_NODE(11)
    <li> Node.NOTATION_NODE
#### nodeName和nodeValue
> 要了解节点的具体信息，可以使用nodeName和nodeValue这两具属性，这两个属性的值完全取决于节点的类型。
> ```
> if(someNode.nodeType == Node.ELEMENT_NODE){//在IE中无效
	 alert("Node is an element")
> }
> ```
> 并不所有的节点类型都受到web浏览器支持。IE中没有公开Node类型的构造函数，因此上面的代码在IE中会导致报错。为了保证跨浏览器兼容，最好还是将nodeType属性与数字值进行比较
>```
>if(someNode.nodeType == 1){//适用于所有浏览器
	alert("Node is an element")
> }
> ```
> 对于元素节点，nodeName中保存的始终都是元素的标签名，而nodeValue值则始终为null
#### 节点关系
> 每个节点都有一个childNodes属性，其中保存着一个NodeList对。NodeList保存一组有序节点，可以通过位置来访问这些节点。
NodeList是类数组对象，保存一组有序节点，可以通过位置来访问这些节点，nodeList对象是基于DOM结构动态执行查询的结果，因此DOM结构的变化能够自动反映在NodeList对象中。
>```
someNode.childNodes[0]
someNode.childNodes.item[0]
```
>每个节点都有一个parentNode属性，该属性指向文档树中父结点。
包含在childNodes中的每个节点相互之间都是同胞结点，可以使用列表中的每个节点的previousSibling和ndexSibling可以访问同一列表中的其它节点，列表中第一个节点的previousSibling为null,同样列表中的最后一个节点的ndexSibling也是null
#### 操作节点
+ appendChild(node)
+ insertBefore(newNode,node)
+ replaceChild(newNode,node)
+ removeChild(node)
>其它方法
+ cloneNode([Boolean]) 用于创建调用这个方法的节点的一个完全相同的副本,布尔值表示是否是深复制
### 1.2 Document类型
Document表示整个HTML页面，docuemnt是window的一个属性，可以直接访问
+ nodeType的值是9
+ nodeName的值为"#docuemnt"
+ nodeValue的值为null
+ parentNode为null
+ ownerDocument的值为null
### 1.3 Element类型
+ nodeType的值是1
+ nodeName的值为元素标签名
+ nodeValue的值为null
+ parentNode为可以是Document,也可能是Element
Element标准特性
+ id
+ title
+ lang
+ dir 语言方向rtl(right to left),ltr(left to right)
+ className 与元素的class特性对应，即为元素指定的CSS类
标准特性可以直接通过下面的方式获取
```
var div  = docuemnt.getElementById("myDiv");
alert(div.id)
alert(div.title)
alert(div.className)
alert(div.dir)
alert(div.lang)
```
也可以通过下成的方式修改
```
div.id = "myId"
div.title = "other title"
div.className = "flt"
div.lang = "fr"
div.dir = "rtl"
```
标准属性以外，还可以为Element设置自定义属性，主要API有
setAttribute、getAttribute、removeAttribute
