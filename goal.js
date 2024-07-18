var goalcomplete=[0,0,0,0];
var goalreward=[1,1,1,1];
var tg=4;
function completegoal(num){
	if(goalcomplete[num]!=1)wp+=goalreward[num];
	goalcomplete[num]=1;
}
function parsegoal(){
	if(pts>=1000)completegoal(0);
	if(t3>=1)completegoal(1);
	if(pts>=1e+5)completegoal(2);
	if(t1>=145)completegoal(3);
}