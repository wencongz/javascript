
/**
 * 是否是元素
 * @method isElement
 * @param  {[type]}  ele
 * @return {Boolean}
 */
function isElement(ele){
   return ele && ele.nodeType == 1;
}

/**
 * 将DOM的childNodes转化为数组
 * @method convertToArray
 * @param  {[nodeList]}       nodes [description]
 * @return {[Array]}             [description]
 */
function convertToArray(nodes){
  var array = null;
  try{
    array = Array.prototype.slice.call(nodes,0); //IE8+
  }catch(e){
    array = new Array();
    for (var i = 0; i < nodes.length; i++) {
      array.push(nodes[i]);
    }
  }
  return array;
}
