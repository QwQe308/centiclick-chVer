function Load(){
    Loadsave();
    Loadheader();
    Loadmiddle();
}
function Loadheader(){
    document.getElementById("points").innerHTML=nt(pts);
    document.getElementById("cl").innerHTML=clickcount;
    if(clickcount<=20)document.getElementById("cl").style="font-size: 22px; color: green;";
    else if(clickcount<=40)document.getElementById("cl").style="font-size: 22px; color: yellowgreen;";
    else if(clickcount<=60)document.getElementById("cl").style="font-size: 22px; color: yellow;";
    else if(clickcount<=80)document.getElementById("cl").style="font-size: 22px; color: orange;";
    else document.getElementById("cl").style="font-size: 22px; color: red;";
    document.getElementById("getpoint").innerHTML="Click to get "+nt(calcpts())+" points.";
}
function Loadmiddle(){
    if(glitchcount>=1)document.getElementById("c1").style="";
    document.getElementById("t1").innerHTML=nt(t1);
    document.getElementById("eff1").innerHTML="Gives you "+nt((t1>8?2*Math.pow(t1,0.67):t1)*Math.pow(2,t5))+" Points every click."+(t1>8?" (Softcapped)":"");
    document.getElementById("b1").innerHTML="Buy a Fault for 10 Points.";
    document.getElementById("b1").style.backgroundColor=(pts>=10?"rgb(31, 30, 51)":"rgb(60, 60, 60)");
    document.getElementById("b1d").style.backgroundColor=(pts>=30?"rgb(31, 30, 51)":"rgb(60, 60, 60)");
    document.getElementById("t2").innerHTML=nt(t2);
    document.getElementById("eff2").innerHTML="Gives you "+nt(t2*Math.pow(2,t5))+" Faults every 10 clicks.";
    document.getElementById("b2").innerHTML="Buy a Crack for 10 Faults.";
    document.getElementById("b2").style.backgroundColor=(t1>=10?"rgb(31, 30, 51)":"rgb(60, 60, 60)");
    document.getElementById("b2d").style.backgroundColor=(t1>=30?"rgb(31, 30, 51)":"rgb(60, 60, 60)");
    document.getElementById("t3").innerHTML=nt(t3);
    document.getElementById("eff3").innerHTML="Gives you "+nt(t3*Math.pow(2,t5))+" Cracks every 15 clicks.";
    document.getElementById("b3").innerHTML="Buy a Loophole for 10 Cracks.";
    document.getElementById("b3").style.backgroundColor=(t2>=10?"rgb(31, 30, 51)":"rgb(60, 60, 60)");
    document.getElementById("b3d").style.backgroundColor=(t2>=30?"rgb(31, 30, 51)":"rgb(60, 60, 60)");
    document.getElementById("t4").innerHTML=nt(t4);
    document.getElementById("eff4").innerHTML="Gives you "+nt(t4*Math.pow(2,t5))+" Loopholes every 20 clicks.";
    document.getElementById("b4").innerHTML="Buy an Eradication for 10 Loopholes.";
    document.getElementById("b4").style.backgroundColor=(t3>=10?"rgb(31, 30, 51)":"rgb(60, 60, 60)");
    document.getElementById("b4d").style.backgroundColor=(t3>=30?"rgb(31, 30, 51)":"rgb(60, 60, 60)");
    document.getElementById("t5").innerHTML=nt(t5);
    document.getElementById("eff5").innerHTML="Multiplies all production by "+nt(Math.pow(2,t5))+"x.";
    document.getElementById("b5").innerHTML="Buy a Void Thear for "+nt(vtcost())+" Points.";
    document.getElementById("b5").style.backgroundColor=(pts>=(vtcost())?"rgb(31, 30, 51)":"rgb(60, 60, 60)");
    document.getElementById("wp").innerHTML=nt(wp);
    document.getElementById("prom0").innerHTML="Your Willpower gives a "+nt(((wp+wp*wp+Math.pow(2,0.5*Math.pow(wp,1.2+gupbought[10]*0.25)))+1)/2)+"x bonus to Glitch gain.";
    document.getElementById("gl").innerHTML=nt(glitch);
    document.getElementById("prom").innerHTML="You have completed "+Math.round(glitchcount)+" Centi-clicks. Last time you got "+nt(lastpt)+" Points = "+nt(lastgl)+" Glitches in 100 clicks.";
    document.getElementById("prom1andahalf").innerHTML="Your highest Point is "+nt(bestpt)+". Your highest Glitch gain on one reset is "+nt(bestgl)+".";
    document.getElementById("prom2").innerHTML="You get Glitches based on Willpower and Points. If you go Glitch now, you will get "+nt(calcglitch())+" Glitches.";
    document.getElementById("effa1").innerHTML="Currently: "+nt(Math.pow(lastgl + 1, 0.2))+"x";
    document.getElementById("effa9").innerHTML="Currently: "+nt(Math.pow((((wp+wp*wp+Math.floor(Math.pow(2,0.5*Math.pow(wp,1.3))))+1)/2),0.2))+"x";
    document.getElementById("effa11").innerHTML="Effect: "+nt(((wp+wp*wp+Math.pow(2,0.5*Math.pow(wp,1.2)))+1)/2)+"x -> "+nt(((wp+wp*wp+Math.pow(2,0.5*Math.pow(wp,1.45)))+1)/2)+"x";
    if(gupbought[7])document.getElementById("ct1").style="height: 100%; display: flex; flex-direction: column; justify-content: center;";
    if(gupbought[11])document.getElementById("ct2").style="height: 100%; display: flex; flex-direction: column; justify-content: center;";
    for(var i=0;i<tg;i++){
        document.getElementById("g"+(i+1)).innerHTML=(goalcomplete[i]==1?"COMPLETED":("REWARD: "+goalreward[i]+" WP"));
        document.getElementById("g"+(i+1)).style.backgroundColor=(goalcomplete[i]==1?"rgb(60, 179, 113)":"rgb(255, 99, 71)");
    }
    for(var i=0;i<Ugcount;i++){
        var s="";
        if(gupbought[i]==1&&wp>=Ugreq[i])s="rgb(22, 45, 23)";
        else if(glitch>=Ugcost[i]&&wp>=Ugreq[i])s="rgb(31, 30, 51)";
        else if(wp>=Ugreq[i])s="rgb(16, 15, 26)";
        else s="rgb(0, 0, 0)";
        document.getElementById("ug"+(i+1)).style.backgroundColor=s;
    }
}
function Loadsave(){
    console.log("Loaded save!");
    clickcount=Number(LoadItem("clickcount"));
    t1=1+Number(LoadItem("t1"));
    t2=Number(LoadItem("t2"));
    t3=Number(LoadItem("t3"));
    t4=Number(LoadItem("t4"));
    t5=Number(LoadItem("t5"));
    pts=Number(LoadItem("pts"));
    lastpt=Number(LoadItem("lastpt"));
    bestpt=Number(LoadItem("bestpt"));
    lastgl=Number(LoadItem("lastgl"));
    bestgl=Number(LoadItem("bestgl"));
    glitch=Number(LoadItem("glitch"));
    glitchcount=Number(LoadItem("glitchcount"));
    wp=Number(LoadItem("wp"));
    var ttf=LoadItem("ttf");
    if(ttf!="2221")Wipe=1;
	var tmp=localStorage.getItem('rigc');
	for(var i=0;i<tmp.length;i++)goalcomplete[i]=Number(tmp[i]);
	tmp=localStorage.getItem('rigc2');
	for(var i=0;i<tmp.length;i++)gupbought[i]=Number(tmp[i]);
}
function Save(){
    SaveItem("clickcount",clickcount);
    SaveItem("t1",t1-1);
    SaveItem("t2",t2);
    SaveItem("t3",t3);
    SaveItem("t4",t4)
    SaveItem("t5",t5);
    SaveItem("pts",pts);
    SaveItem("lastpt",lastpt);
    SaveItem("bestpt",bestpt);
    SaveItem("lastgl",lastgl);
    SaveItem("bestgl",bestgl);
    SaveItem("glitch",glitch);
    SaveItem("glitchcount",glitchcount);
    SaveItem("wp",wp);
    SaveItem("ttf","2221");
	var tmp="";
	for(var i=0;i<tg;i++)tmp+=goalcomplete[i];
	localStorage.setItem('rigc',tmp);
	tmp="";
	for(var i=0;i<Ugcount;i++)tmp+=gupbought[i];
	localStorage.setItem('rigc2',tmp);
}
setInterval(function(){
    Save();
},1000);
var Wipe=0;
setInterval(function(){
    if(Wipe==1){
        SaveItem("clickcount",0);
        SaveItem("t1",0);
        SaveItem("t2",0);
        SaveItem("t3",0);
        SaveItem("t4",0);
        SaveItem("t5",0);
        SaveItem("pts",0);
        SaveItem("lastpt",0);
        SaveItem("bestpt",0);
        SaveItem("lastgl",0);
        SaveItem("bestgl",0);
        SaveItem("glitch",0);
        SaveItem("glitchcount",0);
        SaveItem("wp",0);
        var tmp="";
        for(var i=0;i<tg;i++)tmp+="0";
        localStorage.setItem('rigc',tmp);
        tmp="";
        for(var i=0;i<Ugcount;i++)tmp+="0";
        localStorage.setItem('rigc2',tmp);
        Wipe=0;
        Load();
    }
},50);