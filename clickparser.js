var clickcount = 0;
var pts = 0, t1 = 1, t2 = 0, t3 = 0, t4 = 0, t5 = 0;
var glitch = 0, wp = 0, glitchcount = 0;
var lastpt = 0, lastwp = 0, bestpt = 0, lastgl = 0, bestgl = 0;
var tabs = 1;
function clickparser() {
	clickcount++;
	if (clickcount % (10 - 4 * (gupbought[2] + chalcomplete[0]) * (currentchal == 1 ? 0 : 1)) == 0) t1 += t2 * Math.pow(vtbase(), t5 + extravtfromgpower());
	if (clickcount % (15 - 4 * chalcomplete[0] - 7 * gupbought[22]) == 0) t2 += t3 * Math.pow(vtbase(), t5 + extravtfromgpower());
	if (clickcount % (20 - 4 * chalcomplete[0] - 10 * gupbought[26]) == 0) t3 += t4 * Math.pow(vtbase(), t5 + extravtfromgpower());
	if (clickcount >= 100) {
		glitchreset();
	}
}
function vtbase() {
	var base = 2;
	if (chalcomplete[1]) base += 0.2; //C2
	if (gupbought[25]) base += 0.3; //Glitch Upgrade 7x2
	if (gupbought[29]) base += 0.1 * Math.log2(extravtfromgpower());
	return base;
}
function gp() {
	pts += calcpts();
	parsegoal();
	clickparser();
	if (currentchal == 3) for (var i = 0; i < 4; i++)if (clickcount < 100) clickparser();
	Loadheader();
	Loadmiddle();
}
function calcpts() {
	var f = Math.pow(vtbase(), t5 + extravtfromgpower());
	f *= (Math.pow(lastgl * gupbought[0] * (currentchal == 1 ? 0 : 1) + 1, 0.125 + 0.075 * gupbought[16]));
	f *= (1 + 2 * gupbought[4] * (currentchal == 1 ? 0 : 1) * (clickcount < 3 ? 1 : 0));
	f *= (1 + 4 * gupbought[12] * (currentchal == 1 ? 0 : 1) * (clickcount >= 95 ? 1 : 0));
	f *= (Math.pow((((wp + wp * wp + Math.floor(Math.pow(2, 0.5 * Math.pow(wp, 1.3)))) + 1) / 2), 0.2 * gupbought[8] * (currentchal == 1 ? 0 : 1)));
	return f * t1;
}
function buy1() {
	if (pts >= 10) {
		pts -= 10;
		t1++;
		pts += 0.15 * calcpts() * (gupbought[5] + gupbought[9]) * (currentchal == 1 ? 0 : 1) * (currentchal == 3 ? 0 : 1) * (1 + chalcomplete[2]);
		parsegoal();
		clickparser();
		Loadheader();
		Loadmiddle();
	}
}
function buy1x2() {
	if (pts >= 30) {
		pts -= 30;
		t1 += 2;
		pts += 0.15 * calcpts() * (gupbought[5] + gupbought[9]) * (currentchal == 1 ? 0 : 1) * (currentchal == 3 ? 0 : 1) * (1 + chalcomplete[2]);
		parsegoal();
		clickparser();
		Loadheader();
		Loadmiddle();
	}
}
function buy2() {
	if (t1 >= 10 - 8 * gupbought[14] * (currentchal == 1 ? 0 : 1)) {
		t1 -= (10 - 8 * gupbought[14] * (currentchal == 1 ? 0 : 1));
		t2++;
		pts += 0.15 * calcpts() * (gupbought[5] + gupbought[9]) * (currentchal == 1 ? 0 : 1) * (currentchal == 3 ? 0 : 1) * (1 + chalcomplete[2]);
		parsegoal();
		clickparser();
		Loadheader();
		Loadmiddle();
	}
}
function buy2x2() {
	if (t1 >= 30 - 24 * gupbought[14] * (currentchal == 1 ? 0 : 1)) {
		t1 -= (30 - 24 * gupbought[14] * (currentchal == 1 ? 0 : 1));
		t2 += 2;
		pts += 0.15 * calcpts() * (gupbought[5] + gupbought[9]) * (currentchal == 1 ? 0 : 1) * (currentchal == 3 ? 0 : 1) * (1 + chalcomplete[2]);
		parsegoal();
		clickparser();
		Loadheader();
		Loadmiddle();
	}
}
function buy3() {
	if (t2 >= 10 - 8 * gupbought[14] * (currentchal == 1 ? 0 : 1)) {
		t2 -= (10 - 8 * gupbought[14] * (currentchal == 1 ? 0 : 1));
		t3++;
		pts += 0.15 * calcpts() * (gupbought[5] + gupbought[9]) * (currentchal == 1 ? 0 : 1) * (currentchal == 3 ? 0 : 1) * (1 + chalcomplete[2]);
		parsegoal();
		clickparser();
		Loadheader();
		Loadmiddle();
	}
}
function buy3x2() {
	if (t2 >= 30 - 24 * gupbought[14] * (currentchal == 1 ? 0 : 1)) {
		t2 -= (30 - 24 * gupbought[14] * (currentchal == 1 ? 0 : 1));
		t3 += 2;
		pts += 0.15 * calcpts() * (gupbought[5] + gupbought[9]) * (currentchal == 1 ? 0 : 1) * (currentchal == 3 ? 0 : 1) * (1 + chalcomplete[2]);
		parsegoal();
		clickparser();
		Loadheader();
		Loadmiddle();
	}
}
function buy4() {
	if (t3 >= 10 - 8 * gupbought[14] * (currentchal == 1 ? 0 : 1)) {
		t3 -= (10 - 8 * gupbought[14] * (currentchal == 1 ? 0 : 1));
		t4++;
		pts += 0.15 * calcpts() * (gupbought[5] + gupbought[9]) * (currentchal == 1 ? 0 : 1) * (currentchal == 3 ? 0 : 1) * (1 + chalcomplete[2]);
		parsegoal();
		clickparser();
		Loadheader();
		Loadmiddle();
	}
}
function buy4x2() {
	if (t3 >= 30 - 24 * gupbought[14] * (currentchal == 1 ? 0 : 1)) {
		t3 -= (30 - 24 * gupbought[14] * (currentchal == 1 ? 0 : 1));
		t4 += 2;
		pts += 0.15 * calcpts() * (gupbought[5] + gupbought[9]) * (currentchal == 1 ? 0 : 1) * (currentchal == 3 ? 0 : 1) * (1 + chalcomplete[2]);
		parsegoal();
		clickparser();
		Loadheader();
		Loadmiddle();
	}
}
function buy5() {
	if (pts >= vtcost() && currentchal != 2) {
		pts -= vtcost();
		t5++;
		pts += 0.15 * calcpts() * (gupbought[5] * (currentchal == 1 ? 0 : 1) + gupbought[9] * (currentchal == 1 ? 0 : 1)) * (currentchal == 3 ? 0 : 1) * (1 + chalcomplete[2]);
		parsegoal();
		clickparser();
		Loadheader();
		Loadmiddle();
	}
}
function vtcost() {
	var tc = Math.pow(4, t5 * (3 + t5) / (4 + 0.3 * gupbought[6] * (currentchal == 1 ? 0 : 1))) * 300;
	return tc;
}

function glitchreset() {
	parsechallenge();
	currentchal = pendingchal;
	pendingchal = 0;
	if (glitchcount == 0 && stage == 0) st3();
	glitchcount++;
	lastgl = calcglitch();
	if (bestgl < calcglitch()) bestgl = calcglitch();
	glitch += calcglitch();
	lastpt = pts;
	if (pts > bestpt) bestpt = pts;
	clickcount = 0;
	pts = 0;
	t1 = 1;
	t2 = gupbought[3] * (currentchal == 1 ? 0 : 1);
	t3 = 0;
	t4 = 0;
	t5 = 0;
	if (!gupbought[20]) glitchpower = 0;
}
function wpeffect() {
	return ((wp + wp * wp + Math.pow(2, 0.5 * Math.pow(wp, 1.2 + 0.25 * gupbought[10] + 0.05 * stage))) + 1);
}
function calcglitch() {
	var t = wpeffect(); //Willpower bonus
	t = Math.pow(t, 1 + 0.1 * gupbought[13]); //Glitch Upgrade 4x2
	t *= Math.pow((pts / 1000), 0.43); //Base
	t *= (1 + 0.4 * gupbought[1]); //Glitch Upgrade 1x2
	if (pts <= 0.6 * bestpt) t *= 0.4; //Idle penalty
	if (chalcomplete[0]) t *= 2; //C1 reward
	if (chalcomplete[1]) t *= 2; //C2 reward
	if (chalcomplete[2]) t *= 2; //C3 reward
	if (t >= 1e+33) t = 1e+33 * (Math.pow(t / 1e+33, 0.5 + (stage >= 3 ? 0.15 : 0)));
	return t * (currentchal == 1 ? 0 : 1);
}

function st1() {
	Unhide("ctrl1");
	Hide("ctrl2");
	Hide("ctrl3");
	Hide("ctrl4");
	Hide("ctrl5");
	Hide("ctrl6");
	Hide("ctrl7");
}
function st2() {
	Hide("ctrl1");
	Unhide("ctrl2");
	Hide("ctrl3");
	Hide("ctrl4");
	Hide("ctrl5");
	Hide("ctrl6");
	Hide("ctrl7");
}
function st3() {
	Hide("ctrl1");
	Hide("ctrl2");
	Unhide("ctrl3");
	Hide("ctrl4");
	Hide("ctrl5");
	Hide("ctrl6");
	Hide("ctrl7");
}
function st4() {
	Hide("ctrl1");
	Hide("ctrl2");
	Hide("ctrl3");
	Unhide("ctrl4");
	Hide("ctrl5");
	Hide("ctrl6");
	Hide("ctrl7");
}
function st5() {
	Hide("ctrl1");
	Hide("ctrl2");
	Hide("ctrl3");
	Hide("ctrl4");
	Unhide("ctrl5");
	Hide("ctrl6");
	Hide("ctrl7");
}
function st6() {
	Hide("ctrl1");
	Hide("ctrl2");
	Hide("ctrl3");
	Hide("ctrl4");
	Hide("ctrl5");
	Unhide("ctrl6");
	Hide("ctrl7");
}
function st7() {
	Hide("ctrl1");
	Hide("ctrl2");
	Hide("ctrl3");
	Hide("ctrl4");
	Hide("ctrl5");
	Hide("ctrl6");
	Unhide("ctrl7");
}