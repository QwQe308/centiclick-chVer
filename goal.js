var goalcomplete=[0,0,0];
var goalreward=[1,1,1];
var tg=3;
function completegoal(num){
	if(goalcomplete[num]!=1)wp+=goalreward[num];
	goalcomplete[num]=1;
}
function parsegoal(){
	if(pts>=1000)completegoal(0);
	if(t3>0)completegoal(1);
	if(pts>=1e+5)completegoal(2);
}