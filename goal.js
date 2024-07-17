var goalcomplete=[0,0];
var goalreward=[1,1];
var tg=2;
function completegoal(num){
	if(goalcomplete[num]!=1)wp+=goalreward[num];
	goalcomplete[num]=1;
}
function parsegoal(){
	if(pts>=1000)completegoal(0);
	if(t3>0)completegoal(1);
}