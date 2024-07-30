var gupbought = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var Ugcount = 36;
var Ugcost = [Decimal(4), Decimal(10), Decimal(20), Decimal(35), Decimal(50), Decimal(75), Decimal(111), Decimal(150), Decimal(666), Decimal(1283), Decimal(4e3), Decimal(8e3), Decimal(1.25e4), Decimal(2.5e4), Decimal(8e4), Decimal(2e5), Decimal(5e9), Decimal(5e10), Decimal(3e11), Decimal(6e11), Decimal(5e11), Decimal(1e12), Decimal(5e12), Decimal(3e13), Decimal(1e16), Decimal(2e21), Decimal(4e25), Decimal(8e28), Decimal(1e31), Decimal(1e35), Decimal(8e37), Decimal(1e39), Decimal(2e51), Decimal(1e54), Decimal(1.5e56), Decimal(4e65), Decimal(6.66e66)];
var Ugreq = [0, 0, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 6, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
function buyable(num) {
	if (num < 16) return (wp.gte(Ugreq[num]));
	else if (num < 20) return (chalcomplete[0]);
	else if (num < 24) return (chalcomplete[1]);
	else if (num < 28) return (stage >= 1);
	else if (num < 32) return (stage >= 2);
	else if (num < 36) return (stage >= 3);
	else return (stage >= 4);
}
function Bg(num) {
	num = num - 1;
	if (glitch.gte(Ugcost[num]) && gupbought[num] == 0 && buyable(num)) {
		glitch = glitch.sub(Ugcost[num]);
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
	if (currentchal == 1 && pts.gte(1210)) awa(0);
	if (currentchal == 2 && pts.gte(4e+5)) awa(1);
	if (currentchal == 3 && pts.gte(1e+17)) awa(2);
}
function dpage(num) {
	Page += num;
	Loadmiddle();
}
glitchpower = new Decimal(0);
t6 = new Decimal(0);
function extravtfromgpower() {
	k = glitchpower.add(1).log(2).mul(0.02).mul(1 + 0.5 * gupbought[21] + chalcomplete[2]).mul(1 + 0.2 * gupbought[33]);
	if (stage <= 1 && k.gte(6)) return 6;
	else if (stage <= 1 || k.lt(6)) return k;
	else return (k.sub(5).pow(0.7).add(5));
}
function gpgcost() {
	x = new Decimal(1e+4);
	y = new Decimal(6 - 2 * gupbought[19] - gupbought[23]);
	x = x.mul(y.pow(t6.sub(0.6*gupbought[27])));
	if (t6.gte(10)) x = x.mul(Decimal(1.1).pow(t6.sub(10).pow(2)));
	return x;
}
function buy6() {
	if (glitch.gte(gpgcost())) {
		glitch.sub(gpgcost());
		t6 = t6.add(1);
		Loadmiddle();
	}
}
function buy6max() {
	while (glitch.gte(gpgcost())) {
		glitch.sub(gpgcost());
		t6 = t6.add(1);
	}
	Loadmiddle();
}
function gpps() {
	k = t6;
	k = k.mul(Decimal(4+2*gupbought[18]).pow(t6));
	k = k.mul(glitchpower.add(1).pow(0.5*gupbought[24]));
	k = k.mul(glitch.add(1).pow(gupbought[28]));
	k = k.mul(vtbase().pow((t5 + extravtfromgpower())*gupbought[30]));
	if (gupbought[32]) k = k.mul(wpeffect().pow(3));
	if (k.gte(Decimal(10).pow(300))) k = k.div(Decimal(10).pow(300)).pow(0.1).mul(Decimal(10).pow(300));
	return k;
}
var tl = 0, tcyc = 0, visualeffecttestervariable = 0;
function g36effect() {
	if (gupbought[36] == 0) return Decimal(0);
	if (tcyc <= 100) return Decimal(0.85 + 0.0025 * tcyc);
	else if (tcyc <= 350) return Decimal(1.1 - 0.002 * (tcyc - 100));
	else return Decimal(0.6 - 0.01 * (tcyc - 350));
}
setInterval(function () {
	glitchpower = glitchpower.add(gpps().div(20));
	document.getElementById("gpnum").innerHTML = glitchpower.Stdnt(4);
	document.getElementById("gpeff").innerHTML = extravtfromgpower().Stdnt(4);
	document.getElementById("gpeff2").innerHTML = extravtfromgpower().add(1).log(2).mul(0.1).Stdnt(4);
	tl -= 50;
	if (tl <= 0) document.getElementById("completeprom").style.display = "none";
	else if (tl <= 1000) document.getElementById("completeprom").style.opacity = ("" + Math.floor(tl / 10) + "%");
	else {
		document.getElementById("completeprom").style.display = "";
		document.getElementById("completeprom").style.opacity = "100%";
	}
	document.getElementById("effa25").innerHTML = "Effect: " + glitchpower.pow(0.5).Stdnt(4) + "x";
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
		glitch = glitch.add(calcglitch().mul(0.005));
		lastgl = calcglitch();
		if (tcyc <= 30) pts = pts.div(1);
		else if (tcyc <= 90) pts = pts.div(1.001);
		else if (tcyc <= 150) pts = pts.div(1.005);
		else if (tcyc <= 360) pts = pts.div(1.025);
		else pts = pts.div(2);
		if (tcyc <= 30) glitch = glitch.div(1);
		else if (tcyc <= 90) glitch = glitch.div(1.001);
		else if (tcyc <= 150) glitch = glitch.div(1.005);
		else if (tcyc <= 360) glitch = glitch.div(1.025);
		else glitch = glitch.div(1.5);
		if (tcyc <= 30) glitchpower = glitchpower.div(1);
		else if (tcyc <= 90) glitchpower = glitchpower.div(1.001);
		else if (tcyc <= 150) glitchpower = glitchpower.div(1.008);
		else if (tcyc <= 360) glitchpower = glitchpower.div(1.050);
		else glitchpower = glitchpower.div(3);
		pts = pts.sub(0.05);
		if (glitch.gte(0.05)) glitch = glitch.sub(0.05);
		if (stage == 4 && pts.lte(0.1)) {
			stage = 5;
			showstage();
		}
	}
	if (visualeffecttestervariable == 1) {
		visualeffecttestervariable = 0;
		stage = 4;
		glitch = Decimal(6.7e+66);
	}
}, 50);