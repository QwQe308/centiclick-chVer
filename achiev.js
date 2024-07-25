var gupbought = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var Ugcount = 36;
var Ugcost = [4, 10, 20, 35, 50, 75, 111, 150, 666, 1283, 4e3, 8e3, 1.25e4, 2.5e4, 8e4, 2e5, 5e9, 5e10, 3e11, 6e11, 5e11, 1e12, 5e12, 3e13, 1e16, 2e21, 4e25, 8e28, 1e31, 1e35, 8e37, 1e39, 2e51, 1e54, 1.5e56, 4e65, 6.66e66];
var Ugreq = [0, 0, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 6, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
function buyable(num) {
	if (num < 16) return (wp >= Ugreq[num]);
	else if (num < 20) return (chalcomplete[0]);
	else if (num < 24) return (chalcomplete[1]);
	else if (num < 28) return (stage >= 1);
	else if (num < 32) return (stage >= 2);
	else if (num < 36) return (stage >= 3);
	else return (stage >= 4);
}
function Bg(num) {
	num = num - 1;
	if (glitch >= Ugcost[num] && gupbought[num] == 0 && buyable(num)) {
		glitch -= Ugcost[num];
		gupbought[num] = 1;
		if (num == 36) {
			if (lupbought[1]) SysReset();
			tcyc = 0;
			for (var i = 0; i < 36; i++)gupbought[i] = 1;
		}
	}
	Loadheader();
	Loadmiddle();
}
var totalchal = 3;
var chalcomplete = [0, 0, 0];
var currentchal = 0, pendingchal = 0;
var Page = 1, mxpage = 2;
var canbeshown = [1, 1, 1, 1, 0, 0, 0, 0, 0];
function EnterChal(num) {
	if (currentchal == 0) {
		if (pendingchal == num) pendingchal = 0;
		else if (pendingchal == 0) pendingchal = num;
	}
	Loadmiddle();
}
function awa(num) {
	chalcomplete[num] = 1;
	tl = 3000;
	document.getElementById("completeprom").innerHTML = "Challenge " + (num + 1) + " completed!";
}
function parsechallenge() {
	if (currentchal == 1 && pts >= 1070) awa(0);
	if (currentchal == 2 && pts >= 4e+5) awa(1);
	if (currentchal == 3 && pts >= 1e+17) awa(2);
}
function dpage(num) {
	Page += num;
	Loadmiddle();
}
var glitchpower = 0, t6 = 0;
function extravtfromgpower() {
	var k = Math.log2(1 + glitchpower) * 0.02 * (1 + 0.5 * gupbought[21] + chalcomplete[2]) * (1 + 0.2 * gupbought[33]);
	if (stage <= 1 && k >= 6) return 6;
	else if (stage <= 1 || k < 6) return k;
	else return (5 + Math.pow(k - 5, 0.7));
}
function gpgcost() {
	var x = 1e+4 * (Math.pow(6 - 2 * gupbought[19] - gupbought[23], t6 - 0.6 * gupbought[27]));
	if (t6 >= 10) x *= Math.pow(1.1, (t6 - 10) * (t6 - 10));
	return x;
}
function buy6() {
	if (glitch >= gpgcost()) {
		glitch -= gpgcost();
		t6++;
		Loadmiddle();
	}
}
function buy6max() {
	while (glitch >= gpgcost()) {
		glitch -= gpgcost();
		t6++;
	}
	Loadmiddle();
}
function gpps() {
	var k = t6;
	k *= (Math.pow(4 + 2 * gupbought[18], t6));
	k *= Math.pow((1 + glitchpower), 0.5 * gupbought[24]);
	k *= Math.pow(1 + glitch, gupbought[28]);
	k * Math.pow(vtbase(), (t5 + extravtfromgpower()) * gupbought[30]);
	if (gupbought[32]) k *= Math.pow(wpeffect(), 3);
	if (k >= 1e+280) return 1e+280;
	else return k;
}
var tl = 0, tcyc = 0, visualeffecttestervariable = 0;
function g36effect() {
	if (gupbought[36] == 0) return 0;
	if (tcyc <= 100) return 0.85 + 0.0025 * tcyc;
	else if (tcyc <= 350) return (1.1 - 0.002 * (tcyc - 100));
	else return (0.6 - 0.01 * (tcyc - 350));
}
setInterval(function () {
	glitchpower += gpps() / 20;
	document.getElementById("gpnum").innerHTML = nt(glitchpower);
	document.getElementById("gpeff").innerHTML = nt(extravtfromgpower());
	document.getElementById("gpeff2").innerHTML = nt(0.1 * Math.log2(1 + extravtfromgpower()));
	tl -= 50;
	if (tl <= 0) document.getElementById("completeprom").style.display = "none";
	else if (tl <= 1000) document.getElementById("completeprom").style.opacity = ("" + Math.floor(tl / 10) + "%");
	else {
		document.getElementById("completeprom").style.display = "";
		document.getElementById("completeprom").style.opacity = "100%";
	}
	document.getElementById("effa25").innerHTML = "Effect: " + nt(Math.pow(glitchpower, 0.5)) + "x";
	tcyc += 0.05;
	if (gupbought[36] == 0) document.getElementById("ug37").style.backgroundColor = "rgb(" + (48 + 16 * Math.sin(tcyc)) + ",0,0)";
	else document.getElementById("ug37").style.backgroundColor = "rgb(" + (192 + 63 * Math.sin(tcyc)) + ",0,0)";
	parsegoal();
	if (gupbought[36] == 1) {
		document.getElementById("aftb").style.display = "";
		document.getElementById("gho0").innerHTML = "You will never encounter a glitch reset again. Never."
		document.getElementById("effa37").innerHTML = "- Increases your Willpower effect's exponent's exponent by " + nt(g36effect()) + ". (based on time)"
		gp();
		buy1();
		buy2();
		buy3();
		buy4();
		buy5();
		glitch += 0.005 * calcglitch();
		lastgl = calcglitch();
		if (tcyc <= 30) pts /= 1;
		else if (tcyc <= 90) pts /= 1.001;
		else if (tcyc <= 150) pts /= 1.002;
		else if (tcyc <= 360) pts /= 1.005;
		else pts /= 1.01;
		if (tcyc <= 30) glitch /= 1;
		else if (tcyc <= 90) glitch /= 1.001;
		else if (tcyc <= 150) glitch /= 1.002;
		else if (tcyc <= 360) glitch /= 1.005;
		else glitch /= 1.01;
		if (tcyc <= 30) glitchpower /= 1;
		else if (tcyc <= 90) glitchpower /= 1.01;
		else if (tcyc <= 150) glitchpower /= 1.02;
		else if (tcyc <= 360) glitchpower /= 1.05;
		else glitchpower /= 1.1;
		pts -= 0.05;
		if (glitch > 0.05) glitch -= 0.05;
		if (glitchpower > 0.05) glitchpower -= 0.05;
		if (stage == 4 && pts <= 0.1) {
			stage = 5;
			showstage();
		}
	}
	if (visualeffecttestervariable == 1) {
		visualeffecttestervariable = 0;
		stage = 4;
		glitch = 6.666e+66;
	}
}, 50);