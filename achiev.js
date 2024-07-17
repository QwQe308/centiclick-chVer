var gupbought=[0,0,0,0,0,0,0,0,0,0,0,0];
var Ugcount=12;
var Ugcost=[4,10,20,35,50,75,111,150,666,1000,1283,1671];
function Bg(num){
	num=num-1;
	if(glitch>=Ugcost[num]&&gupbought[num]==0){
		glitch-=Ugcost[num];
		gupbought[num]=1;
	}
	Loadheader();
	Loadmiddle();
}