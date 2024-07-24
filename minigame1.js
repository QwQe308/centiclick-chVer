var apoint=0;
var wid=0,hei=0;
var bd=[0,0,0,0,0,0];
var costbase=[1,10,1e3,1e5,1e7,1e10];
var inf=[5,10,100,1e5,1e10,1e30];
var posx=[250,125,-125,-250,-125,125,-125];
var posy=[0,216,216,0,-216,-216,25];
var Wipe1=0;
var inthisgame1=0;
var m1end=1e+300;
var colorf=["rgb(255,128,128)","rgb(255,183,128)","rgb(255,255,128)","rgb(128,255,128)","rgb(128,128,255)","rgb(165,128,192)"];
setInterval(function(){
    if(wid!=window.innerWidth||hei!=window.innerHeight){
        wid=window.innerWidth;
        hei=window.innerHeight;
        for(var i=0;i<7;i++){
            document.getElementById("mg1"+i).style.top=(""+(hei*0.5+posy[i]-75)+"px");
            document.getElementById("mg1"+i).style.left=(""+(wid*0.5+posx[i]-75)+"px");
        }
    }
    for(var i=0;i<6;i++){
        if(apoint>=calccost(i))document.getElementById("mg1"+i).style.backgroundColor=colorf[i];
        else document.getElementById("mg1"+i).style.backgroundColor="rgb(192,192,192)";
    }
    document.getElementById("aps1").innerHTML=nt(apoint);
    document.getElementById("aps2").innerHTML=nt(apgain());
    document.getElementById("mg10").innerHTML="+"+nt(Math.pow(1+bd[0],0.5))+"<br>x"+nt(Math.pow(2,bd[0]));
    for(var i=1;i<5;i++)document.getElementById("mg1"+i).innerHTML="x"+nt(Math.pow(2,bd[i]));
    document.getElementById("mg15").innerHTML="x"+nt(Math.pow(5,bd[5]));
    apoint+=apgain()/20;
    if(apoint>=m1end)Exitmg1();
    if(Wipe1==1)resetmg1();
},50);
function apgain(){
    var ttt=Math.pow(1+bd[0],0.5);
    ttt*=Math.pow(2,bd[0]);
    ttt*=Math.pow(2,bd[1]);
    ttt*=Math.pow(2,bd[2]);
    ttt*=Math.pow(2,bd[3]);
    ttt*=Math.pow(2,bd[4]);
    ttt*=Math.pow(5,bd[5]);
    return ttt*inthisgame1;
}
function resetmg1(){
    Wipe1=0;
    bd=[0,0,0,0,0,0];
    apoint=0;
}
function calccost(num){
    return costbase[num]*Math.pow(inf[num],bd[num]);
}
function mgbuy(num){
    console.log("bought "+num);
    if(apoint>=calccost(num)){
        apoint-=calccost(num);
        bd[num]++;
    }
}
function Exitmg1(){
    document.getElementById("mg1").style.zIndex="-50";
    document.getElementById("mg1").style.display="none";
    inthisgame1=0;
}
function Entermg1(){
    document.getElementById("mg1").style.zIndex="110";
    document.getElementById("mg1").style.display="flex";
    inthisgame1=1;
}