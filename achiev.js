var gupbought=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var Ugcount=24;
var Ugcost=[4,10,20,35,50,75,111,150,666,1283,1671,2330,2500,5432,12345,40000,1e+9,1e+10,5e+10,1e+11,1.75e+11,2.5e+11,1e12,8e12];
var Ugreq=[0,0,1,1,1,1,2,2,2,3,3,4,4,5,6,7,0,0,0,0,0,0,0,0];
function buyable(num){
	if(num<16)return (wp>=Ugreq[num]);
	else if(num<20)return (chalcomplete[0]);
	else if(num<24)return (chalcomplete[1]);
}
function Bg(num){
	num=num-1;
	if(glitch>=Ugcost[num]&&gupbought[num]==0&&buyable(num)){
		glitch-=Ugcost[num];
		gupbought[num]=1;
	}
	Loadheader();
	Loadmiddle();
}
var totalchal=3;
var chalcomplete=[0,0,0];
var currentchal=0,pendingchal=0;
var Page=1,mxpage=2;
var canbeshown=[1,1,1,1,0,0];
function EnterChal(num){
	if(currentchal==0){
		if(pendingchal==num)pendingchal=0;
		else if(pendingchal==0)pendingchal=num;
	}
	Loadmiddle();
}
function parsechallenge(){
	if(currentchal==1&&pts>=1070)chalcomplete[0]=1;
	if(currentchal==2&&pts>=52000)chalcomplete[1]=1;
	if(currentchal==3&&pts>=2.34e+14)chalcomplete[2]=1;
}
function dpage(num){
	Page+=num;
	Loadmiddle();
}
var glitchpower=0,t6=0;
function extravtfromgpower(){
	return Math.log2(1+glitchpower)*0.02*(1+0.5*gupbought[21]+chalcomplete[2]);
}
function gpgcost(){
	var x=1e+4*(Math.pow(6-2*gupbought[19]-gupbought[23],t6));
	if(t6>=10)x*=Math.pow(1.1,(t6-10)*(t6-10));
	return x;
}
function buy6(){
	if(glitch>=gpgcost()){
		glitch-=gpgcost();
		t6++;
		Loadmiddle();
	}
}
function buy6max(){
	while(glitch>=gpgcost()){
		glitch-=gpgcost();
		t6++;
	}
	Loadmiddle();
}
function gpps(){
	return t6*(Math.pow(4+2*gupbought[18],t6));
}
setInterval(function(){
	glitchpower+=gpps()/20;
	document.getElementById("gpnum").innerHTML=nt(glitchpower);
	document.getElementById("gpeff").innerHTML=nt(extravtfromgpower());
},50);