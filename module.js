function iH(handle){
    return document.getElementById(handle).innerHTML;
}
function SetiH(handle,content){
    document.getElementById(handle).innerHTML=content;
}
function insert(handle,content){
    txt=iH(handle);
    SetiH(handle,txt+content);
}
function insert_at_beginning(){
    txt=iH(handle);
    SetiH(handle,content+txt);
}
function SaveItem(handle,value){
    localStorage.setItem(handle,value);
}
function LoadItem(handle){
    return localStorage.getItem(handle);
}
function Hide(handle){
    document.getElementById(handle).style="display: none; position: absolute; top: 320px; z-index: -1; width: 100%;";
}
function Unhide(handle){
    document.getElementById(handle).style="position: absolute; top: 320px; z-index: 0; width: 100%;";
}