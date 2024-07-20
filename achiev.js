var gupbought=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var Ugcount=16;
var Ugcost=[4,10,20,35,50,75,111,150,666,1283,1671,2330,2500,5432,12345,40000];
var Ugreq=[0,0,1,1,1,1,2,2,2,3,3,4,4,5,6,7];
function Bg(num){
	num=num-1;
	if(glitch>=Ugcost[num]&&gupbought[num]==0&&wp>=Ugreq[num]){
		glitch-=Ugcost[num];
		gupbought[num]=1;
	}
	Loadheader();
	Loadmiddle();
}
var totalchal=2;
var chalcomplete=[0,0];
var currentchal=0,pendingchal=0;
function EnterChal(num){
	if(currentchal==0){
		if(pendingchal==num)pendingchal=0;
		else if(pendingchal==0)pendingchal=num;
	}
	Loadmiddle();
}
function parsechallenge(){
	if(currentchal==1&&pts>=1072)chalcomplete[0]=1;
}