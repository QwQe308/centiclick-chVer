apoint=new Decimal(0);
var wid=0,hei=0;
bd=[Decimal(0),Decimal(0),Decimal(0),Decimal(0),Decimal(0),Decimal(0)];
costbase=[Decimal(1),Decimal(10),Decimal(1e3),Decimal(1e5),Decimal(1e7),Decimal(1e10)];
inf=[Decimal(5),Decimal(10),Decimal(100),Decimal(1e5),Decimal(1e10),Decimal(1e30)];
var posx=[250,125,-125,-250,-125,125,-125];
var posy=[0,216,216,0,-216,-216,25];
var Wipe1=0;
var inthisgame1=0;
m1end=Decimal(1e+300);
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
        if(apoint.gte(calccost(i)))document.getElementById("mg1"+i).style.backgroundColor=colorf[i];
        else document.getElementById("mg1"+i).style.backgroundColor="rgb(192,192,192)";
    }
    document.getElementById("aps1").innerHTML=apoint.Stdnt(4);
    document.getElementById("aps2").innerHTML=apgain().Stdnt(4);
    document.getElementById("mg10").innerHTML="+"+bd[0].add(1).pow(0.5).Stdnt(4)+"<br>x"+Decimal(2).pow(bd[0]).Stdnt(4);
    for(var i=1;i<5;i++)document.getElementById("mg1"+i).innerHTML="x"+Decimal(2).pow(bd[i]).Stdnt(4);
    document.getElementById("mg15").innerHTML="x"+Decimal(5).pow(bd[i]).Stdnt(4);
    apoint = apoint.add(apgain().div(20));
    if(apoint.gte(m1end))Exitmg1();
    if(Wipe1==1)resetmg1();
},50);
function apgain(){
    ttt = new Decimal(0);
    ttt = bd[0].add(1).pow(0.5);
    ttt = ttt.mul(Decimal(2).pow(bd[0]).Stdnt(4));
    ttt = ttt.mul(Decimal(2).pow(bd[1]).Stdnt(4));
    ttt = ttt.mul(Decimal(2).pow(bd[2]).Stdnt(4));
    ttt = ttt.mul(Decimal(2).pow(bd[3]).Stdnt(4));
    ttt = ttt.mul(Decimal(2).pow(bd[4]).Stdnt(4));
    ttt = ttt.mul(Decimal(5).pow(bd[5]).Stdnt(4));
    return ttt.mul(inthisgame1);
}
function resetmg1(){
    Wipe1=0;
    bd=[Decimal(0),Decimal(0),Decimal(0),Decimal(0),Decimal(0),Decimal(0)];
    apoint=new Decimal(0);
}
function calccost(num){
    return costbase[num].mul(inf[num].pow(bd[num]));
}
function mgbuy(num){
    console.log("bought "+num);
    if(apoint.gte(calccost(num))){
        apoint = apoint.sub(calccost(num));
        bd[num] = bd[num].add(1);
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