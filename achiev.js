var gupbought=[0,0,0,0,0,0,0,0];
var Ugcount=8;
var Ugcost=[4,10,20,35,50,75,111,150];
function Bg(num){
	num=num-1;
	if(glitch>=Ugcost[num]&&gupbought[num]==0){
		glitch-=Ugcost[num];
		gupbought[num]=1;
	}
	Loadheader();
	Loadmiddle();
}