var goalcomplete = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var goalreward = [1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 0, 0];
var tg = 14;
function completegoal(num) {
	if (goalcomplete[num] != 1) {
		wp = wp.add(goalreward[num]);
		tl = 3000;
		document.getElementById("completeprom").innerHTML = "Goal " + (num + 1) + " completed!";
	}
	goalcomplete[num] = 1;
}
function parsegoal() {
	if (pts.gte(1000)) completegoal(0);
	if (t3.gte(1)) completegoal(1);
	if (pts.gte(1e+4)) completegoal(2);
	if (t1.gte(145)) completegoal(3);
	if (pts.gte(1e+5)) completegoal(4);
	if (t1.gte(225)) completegoal(5);
	if (glitchpower.gte(1000)) completegoal(6);
	if (extravtfromgpower().gte(0.5)) completegoal(7);
	if (pts.gte(1e+24)) completegoal(8);
	if (extravtfromgpower().gte(5.86)) completegoal(9);
	if (pts.gte(5e+46)) completegoal(10);
	if (pts.gte(6.9e+69)) completegoal(11);
	if (apoint.gte(m1end)) completegoal(12);
	if (bpoint.gte(100)) completegoal(13);
}
var hidecompleted = 0;
function changegoaldisplay() {
	hidecompleted = 1 - hidecompleted;
	Loadmiddle();
}