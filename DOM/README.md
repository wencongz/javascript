>DOM是针对HTML和XML文档的一个API
>>1、节点层次
>>> 1.1Node类型
>>>> 每个节点都有一个nodeType属性。因此所有节点都共享着相同的基本属性的方法。主要有12个数值常量来表示 
<ul>
 <li> node.ELEMENT_NODE(1)
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