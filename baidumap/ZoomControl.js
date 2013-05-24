/**
 * Created with JetBrains WebStorm.
 * User: xqlcrystal
 * Date: 12-11-11
 * Time: 上午9:05
 * To change this template use File | Settings | File Templates.
 */
function ZoomControl(){
    this.defaultAnchor=BMAP_ANCHOR_TOP_LEFT;
    this.defaultOffset=new BMap.Size(10,10);
}
ZoomControl.prototype=new BMap.Control();
ZoomControl.prototype.initialize=function(map){
    var div=document.createElement('div');
    div.appendChild(document.createTextNode('放大2级'));
    // 设置样式
    div.style.cursor = "pointer";
    div.style.border = "1px solid gray";
    div.style.backgroundColor = "white";

    div.onclick=function(e){
        map.zoomTo(map.getZoom()+2);
    }
    map.getContainer().appendChild(div);
    return div;

}
