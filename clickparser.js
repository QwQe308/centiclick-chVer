clickcount = new Decimal(0);
pts = new Decimal(0);
t1 = new Decimal(0);
t2 = new Decimal(0);
t3 = new Decimal(0);
t4 = new Decimal(0);
t5 = new Decimal(0);
glitch = new Decimal(0);
wp = new Decimal(0);
glitchcount = new Decimal(0);
lastpt = new Decimal(0);
lastwp = new Decimal(0);
bestpt = new Decimal(0);
lastgl = new Decimal(0);
bestgl = new Decimal(0);
var tabs = 1;
function clickparser() {
	clickcount = clickcount.add(1)
	if (clickcount.mod((10 - 4 * (gupbought[2] + chalcomplete[0]) * (currentchal == 1 ? 0 : 1))).eq(0)) t1 = t1.add(t2.mul(vtbase().pow(t5.add(extravtfromgpower()))));
	if (clickcount.mod((15 - 4 * chalcomplete[0] - 7 * gupbought[22])).eq(0)) t2 = t2.add(t3.mul(vtbase().pow(t5.add(extravtfromgpower()))));
	if (clickcount.mod((20 - 4 * chalcomplete[0] - 10 * gupbought[26])).eq(0)) t3 = t3.add(t4.mul(vtbase().pow(t5.add(extravtfromgpower()))));
	if (clickcount.gte(100) && gupbought[36] == 0 && lupbought[16] == 0) glitchreset();
}
function vtbase() {
	base = new Decimal(2);
	if (chalcomplete[1]) base = base.add(0.2); //C2
	if (gupbought[25]) base = base.add(0.3); //Glitch Upgrade 7x2
	if (gupbought[29]) base = base.add(extravtfromgpower().add(1).log(2).mul(0.1));
	if (gupbought[36] && tcyc >= 150) base = base.sub(0.01 * (tcyc - 150));
	if (base.lte(0)) base = Decimal(0);
	return base;
}
function gp() {
	pts = pts.add(calcpts());
	parsegoal();
	clickparser();
	if (currentchal == 3) for (var i = 0; i < 4; i++)if (clickcount.lte(100)) clickparser();
	Loadheader();
	Loadmiddle();
}
function calcpts() {
	f = new Decimal(vtbase());
	f = f.pow(t5.add(extravtfromgpower()));
	f = f.mul(lastgl.mul(gupbought[0]).mul(currentchal == 1 ? 0 : 1).add(1).pow(0.125 + 0.075 * gupbought[16]));
	f = f.mul(1 + 2 * gupbought[4] * (currentchal == 1 ? 0 : 1) * (clickcount.lte(3) ? 1 : 0));
	f = f.mul(1 + 4 * gupbought[12] * (currentchal == 1 ? 0 : 1) * (clickcount.gte(95) ? 1 : 0));
	f = f.mul(wpeffect().pow(0.2 * gupbought[8] * (currentchal == 1 ? 0 : 1)));
	return f.mul(t1);
}
function Extrapts() {
	if (lupbought[6]) return calcpts();
	else return calcpts().mul(0.15).mul(gupbought[5] + gupbought[9]).mul(currentchal == 1 ? 0 : 1).mul(currentchal == 3 ? 0 : 1).mul(1 + chalcomplete[2]);
}
function buy1() {
	if (pts.gte(10)) {
		pts = pts.sub(10);
		t1 = t1.add(1);
		pts = pts.add(Extrapts());
		parsegoal();
		clickparser();
		Loadheader();
		Loadmiddle();
	}
}
function buy1x2() {
	if (pts.gte(30)) {
		pts = pts.sub(30);
		t1 = t1.add(2);
		pts = pts.add(Extrapts());
		parsegoal();
		clickparser();
		Loadheader();
		Loadmiddle();
	}
}
function buy2() {
	if (t1.gte(10 - 8 * gupbought[14] * (currentchal == 1 ? 0 : 1))) {
		t1 = t1.sub(10 - 8 * gupbought[14] * (currentchal == 1 ? 0 : 1));
		t2 = t2.add(1);
		pts = pts.add(Extrapts());
		parsegoal();
		clickparser();
		Loadheader();
		Loadmiddle();
	}
}
function buy2x2() {
	if (t1.gte(30 - 24 * gupbought[14] * (currentchal == 1 ? 0 : 1))) {
		t1 = t1.sub(30 - 24 * gupbought[14] * (currentchal == 1 ? 0 : 1));
		t2 = t2.add(2);
		pts = pts.add(Extrapts());
		parsegoal();
		clickparser();
		Loadheader();
		Loadmiddle();
	}
}
function buy3() {
	if (t2.gte(10 - 8 * gupbought[14] * (currentchal == 1 ? 0 : 1))) {
		t2 = t2.sub(10 - 8 * gupbought[14] * (currentchal == 1 ? 0 : 1));
		t3 = t3.add(1);
		pts = pts.add(Extrapts());
		parsegoal();
		clickparser();
		Loadheader();
		Loadmiddle();
	}
}
function buy3x2() {
	if (t2.gte(30 - 24 * gupbought[14] * (currentchal == 1 ? 0 : 1))) {
		t2 = t2.sub(30 - 24 * gupbought[14] * (currentchal == 1 ? 0 : 1));
		t3 = t3.add(2);
		pts = pts.add(Extrapts());
		parsegoal();
		clickparser();
		Loadheader();
		Loadmiddle();
	}
}
function buy4() {
	if (t3.gte(10 - 8 * gupbought[14] * (currentchal == 1 ? 0 : 1))) {
		t3 = t3.sub(10 - 8 * gupbought[14] * (currentchal == 1 ? 0 : 1));
		t4 = t4.add(1);
		pts = pts.add(Extrapts());
		parsegoal();
		clickparser();
		Loadheader();
		Loadmiddle();
	}
}
function buy4x2() {
	if (t3.gte(30 - 24 * gupbought[14] * (currentchal == 1 ? 0 : 1))) {
		t3 = t3.sub(30 - 24 * gupbought[14] * (currentchal == 1 ? 0 : 1));
		t4 = t4.add(2);
		pts = pts.add(Extrapts());
		parsegoal();
		clickparser();
		Loadheader();
		Loadmiddle();
	}
}
function buy5() {
	if (pts.gte(vtcost()) && currentchal != 2) {
		pts = pts.sub(vtcost());
		t5 = t5.add(1);
		pts = pts.add(Extrapts());
		parsegoal();
		clickparser();
		Loadheader();
		Loadmiddle();
	}
}
function vtcost() {
	tc = new Decimal(4);
	bpow = new Decimal(0);
	bpow = t5.mul(t5.add(3)).div(4 + 0.3 * gupbought[6] * (currentchal == 1 ? 0 : 1));
	tc = tc.pow(bpow).mul(300);
	return tc;
}

function glitchreset() {
	parsechallenge();
	currentchal = pendingchal;
	pendingchal = Decimal(0);
	if (glitchcount.eq(0) && stage == 0) st3();
	glitchcount = glitchcount.add(1);
	lastgl = calcglitch();
	if (bestgl.lte(calcglitch())) bestgl = calcglitch();
	glitch = glitch.add(calcglitch());
	lastpt = pts;
	if (pts.gte(bestpt)) bestpt = pts;
	clickcount = Decimal(0);
	pts = Decimal(0);
	t1 = Decimal(1);
	t2 = Decimal(gupbought[3] * (currentchal == 1 ? 0 : 1));
	t3 = Decimal(0);
	t4 = Decimal(0);
	t5 = Decimal(0);
	if (!gupbought[20]) glitchpower = Decimal(0);
	if (lupbought[10]) buy6max();
}
function wpeffect() {
	eff = new Decimal(2);
	eff = eff.pow(wp.pow(1.2 + 0.25 * gupbought[10] + 0.05 * stage).mul(0.5).add(g36effect().pow(5)));
	eff.add(wp.pow(2).add(wp).add(1).mul(g36effect() < 0 ? 0 : 1));
	return eff;
}
function calcglitch() {
	var t = wpeffect(); //Willpower bonus
	t = t.pow(1 + 0.1 * gupbought[13]); //Glitch Upgrade 4x2
	t = t.mul(pts.div(1000).pow(0.43)); //Base
	t = t.mul(1 + 0.4 * gupbought[1]); //Glitch Upgrade 1x2
	if (pts.lte(bestpt.pow(0.98).mul(0.6))) t = t.mul(0.4); //Idle penalty
	if (chalcomplete[0]) t = t.mul(2); //C1 reward
	if (chalcomplete[1]) t = t.mul(2); //C2 reward
	if (chalcomplete[2]) t = t.mul(2); //C3 reward
	if (t.gte(1e+33)) t = t.div(1e+33).pow(0.5 + (stage >= 3 ? 0.15 : 0)).mul(1e+33);
	if (gupbought[31]) t = t.pow(1.2);
	if (gupbought[34]) t = t.mul(vtbase().pow(t5 + extravtfromgpower()).pow(0.35));
	if (lupbought[0]) t = t.mul(2);
	if (lupbought[4]) t = t.mul(3);
	if (lupbought[8]) t = t.mul(4);
	if (lupbought[12]) t = t.pow(1.05);
	return t.mul(currentchal == 1 ? 0 : 1);
}
var tabnum = 0, Hotkeyon = 0;
var numtab = [1, 2, 3, 5, 6, 7, 8, 4];
var rev_numtab = [-1, 0, 1, 2, 7, 3, 4, 5, 6];
function st(num) {
	for (var i = 1; i <= 8; i++) {
		Hide("ctrl" + i);
		document.getElementById("tb" + i).style.backgroundColor = "black";
	}
	Unhide("ctrl" + num);
	document.getElementById("tb" + num).style.backgroundColor = "rgb(64,64,64)";
	tabnum = rev_numtab[num];
	console.log("Set tab to " + num);
}
function sHotkey() {
	Hotkeyon = 1 - Hotkeyon;
	if (Hotkeyon == 0) document.getElementById("hk").innerHTML = "Hotkey OFF";
	else document.getElementById("hk").innerHTML = "Hotkey ON";
	console.log("Hotkey set to " + Hotkeyon);
}
var cd = [0, 0, 0, 0, 0, 0, 0, 0, 0];
setInterval(function () {
	for (var i = 0; i < 9; i++)cd[i] -= 50;
}, 50);