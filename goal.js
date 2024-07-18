var goalcomplete=[0,0,0,0,0,0];
var goalreward=[1,1,1,1,2,1];
var tg=6;
function completegoal(num){
	if(goalcomplete[num]!=1)wp+=goalreward[num];
	goalcomplete[num]=1;
}
function parsegoal(){
	if(pts>=1000)completegoal(0);
	if(t3>=1)completegoal(1);
	if(pts>=1e+4)completegoal(2);
	if(t1>=145)completegoal(3);
	if(pts>=1e+5)completegoal(4);
	if(t1>=225)completegoal(5);
}
var hidecompleted=0;
function changegoaldisplay(){
	hidecompleted=1-hidecompleted;
	Loadmiddle();
}