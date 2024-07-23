var goalcomplete = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var goalreward = [1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 2];
var tg = 14;
function completegoal(num) {
	if (goalcomplete[num] != 1) {
		wp += goalreward[num];
		tl = 3000;
		document.getElementById("completeprom").innerHTML = "Goal " + (num + 1) + " completed!";
	}
	goalcomplete[num] = 1;
}
function parsegoal() {
	if (pts >= 1000) completegoal(0);
	if (t3 >= 1) completegoal(1);
	if (pts >= 1e+4) completegoal(2);
	if (t1 >= 145) completegoal(3);
	if (pts >= 1e+5) completegoal(4);
	if (t1 >= 225) completegoal(5);
	if (glitchpower >= 1000) completegoal(6);
	if (extravtfromgpower() >= 0.5) completegoal(7);
	if (pts >= 1e+24) completegoal(8);
	if (extravtfromgpower() >= 5.86) completegoal(9);
	if (pts >= 5e+46) completegoal(10);
	if (pts >= 6.9e+69) completegoal(11);
	if (apoint >= m1end) completegoal(12);
	if (bpoint >= 100) completegoal(13);
}
var hidecompleted = 0;
function changegoaldisplay() {
	hidecompleted = 1 - hidecompleted;
	Loadmiddle();
}