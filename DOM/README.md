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
