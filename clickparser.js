var clickcount=0;
var pts=0,t1=1,t2=0,t3=0,t4=0,t5=0;
var glitch=0,wp=0,glitchcount=0;
var lastpt=0,lastwp=0,bestpt=0,lastgl=0,bestgl=0;
var tabs=1;
function clickparser(){
	clickcount++;
	if(clickcount>=100){
		glitchreset();
	}
}
function gp(){
	pts+=calcpts();
	if(clickcount%(10-4*gupbought[2])==(9-4*gupbought[2]))t1+=t2*Math.pow(2,t5);
	if(clickcount%15==14)t2+=t3*Math.pow(2,t5);
	if(clickcount%20==19)t3+=t4*Math.pow(2,t5);
	parsegoal();
	clickparser();
	Loadheader();
	Loadmiddle();
}
function calcpts() {
	var f= Math.pow(2, t5) * (Math.pow(lastgl*gupbought[0] + 1, 0.2)) * (1+2*gupbought[4]*(clickcount<3?1:0)) * (Math.pow((((wp+wp*wp+Math.floor(Math.pow(2,0.5*Math.pow(wp,1.3))))+1)/2),0.2*gupbought[8]));
	var g=(t1>8?2*Math.pow(t1,0.67):t1);
	return f*g;
}
function buy1(){
	if(pts>=10){
		pts-=10;
		t1++;
		pts+=0.15*calcpts()*(gupbought[5]+gupbought[9]);
		parsegoal();
		clickparser();
		Loadheader();
		Loadmiddle();
	}
}
function buy1x2(){
	if(pts>=30){
		pts-=30;
		t1+=2;
		pts+=0.15*calcpts()*(gupbought[5]+gupbought[9]);
		parsegoal();
		clickparser();
		Loadheader();
		Loadmiddle();
	}
}
function buy2(){
	if(t1>=10){
		t1-=10;
		t2++;
		pts+=0.15*calcpts()*(gupbought[5]+gupbought[9]);
		parsegoal();
		clickparser();
		Loadheader();
		Loadmiddle();
	}
}
function buy2x2(){
	if(t1>=30){
		t1-=30;
		t2+=2;
		pts+=0.15*calcpts()*(gupbought[5]+gupbought[9]);
		parsegoal();
		clickparser();
		Loadheader();
		Loadmiddle();
	}
}
function buy3(){
	if(t2>=10){
		t2-=10;
		t3++;
		pts+=0.15*calcpts()*(gupbought[5]+gupbought[9]);
		parsegoal();
		clickparser();
		Loadheader();
		Loadmiddle();
	}
}
function buy3x2(){
	if(t2>=30){
		t2-=30;
		t3+=2;
		pts+=0.15*calcpts()*(gupbought[5]+gupbought[9]);
		parsegoal();
		clickparser();
		Loadheader();
		Loadmiddle();
	}
}
function buy4(){
	if(t3>=10){
		t3-=10;
		t4++;
		pts+=0.15*calcpts()*(gupbought[5]+gupbought[9]);
		parsegoal();
		clickparser();
		Loadheader();
		Loadmiddle();
	}
}
function buy4x2(){
	if(t3>=30){
		t3-=30;
		t4+=2;
		pts+=0.15*calcpts()*(gupbought[5]+gupbought[9]);
		parsegoal();
		clickparser();
		Loadheader();
		Loadmiddle();
	}
}
function buy5(){
	if(pts>=vtcost()){
		pts-=vtcost();
		t5++;
		pts+=0.15*calcpts()*(gupbought[5]+gupbought[9]);
		parsegoal();
		clickparser();
		Loadheader();
		Loadmiddle();
	}
}
function vtcost() {
	var tc=Math.pow(4, t5*(9+t5)/(10+gupbought[6])) * 300;
	return tc;
}

function glitchreset(){
	if(glitchcount==0)st3();
	glitchcount++;
	lastgl=calcglitch();
	if(bestgl<calcglitch())bestgl=calcglitch();
	glitch+=calcglitch();
	lastpt=pts;
	if(pts>bestpt)bestpt=pts;
	clickcount=0;
	pts=0;
	t1=1;
	t2=gupbought[3];
	t3=0;
	t4=0;
	t5=0;
}
function calcglitch() {
	return ((wp + wp * wp + Math.pow(2, 0.5 * Math.pow(wp, 1.2+0.25*gupbought[10]))) + 1) * Math.pow((pts / 1000),0.3)*(1+0.4*gupbought[1]);
}

function st1(){
	console.log("Set Tab to 1");
	Unhide("ctrl1");
	Hide("ctrl2");
	Hide("ctrl3");
	Hide("ctrl4");
}
function st2(){
	console.log("Set Tab to 2");
	Hide("ctrl1");
	Unhide("ctrl2");
	Hide("ctrl3");
	Hide("ctrl4");
}
function st3(){
	console.log("Set Tab to 3");
	Hide("ctrl1");
	Hide("ctrl2");
	Unhide("ctrl3");
	Hide("ctrl4");
}
function st4(){
	console.log("Set Tab to 4");
	Hide("ctrl1");
	Hide("ctrl2");
	Hide("ctrl3");
	Unhide("ctrl4");
}