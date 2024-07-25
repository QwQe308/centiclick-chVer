function Load() {
    Loadsave();
    Loadheader();
    Loadmiddle();
}
function Reload() {
    Loadheader();
    Loadmiddle();
}
function Loadheader() {
    document.getElementById("points").innerHTML = nt(pts);
    document.getElementById("cl").innerHTML = clickcount;
    if (clickcount <= 20) document.getElementById("cl").style = "font-size: 22px; color: green;";
    else if (clickcount <= 40) document.getElementById("cl").style = "font-size: 22px; color: yellowgreen;";
    else if (clickcount <= 60) document.getElementById("cl").style = "font-size: 22px; color: yellow;";
    else if (clickcount <= 80) document.getElementById("cl").style = "font-size: 22px; color: orange;";
    else document.getElementById("cl").style = "font-size: 22px; color: red;";
    document.getElementById("getpoint").innerHTML = "Click to get " + nt(calcpts()) + " points.";
}
function Loadmiddle() {
    wp = 0;
    for (var i = 0; i < tg; i++)wp += goalcomplete[i] * goalreward[i];
    if (gupbought[31]) mxpage = 3;
    else mxpage = 2;
    if (lupbought[6] && clickcount < 99) buy5();
    if (glitchcount >= 1 || stage >= 1) document.getElementById("c1").style = "";
    if (glitchcount >= 1 || stage >= 1) document.getElementById("c1x").style = "width: 10px;";
    if (gupbought[15] || stage >= 1) document.getElementById("c2").style = "";
    if (gupbought[15] || stage >= 1) document.getElementById("c2x").style = "width: 10px;";
    if (gupbought[17] || stage >= 1) document.getElementById("c3").style = "";
    if (gupbought[17] || stage >= 1) document.getElementById("c3x").style = "width: 10px;";
    if (stage >= 1) document.getElementById("c4").style = "";
    if (stage >= 1) document.getElementById("c4x").style = "width: 10px;";
    if (syscount >= 1) document.getElementById("c5").style = "";
    if (syscount >= 1) document.getElementById("c5x").style = "width: 10px;";
    if (gupbought[31]) document.getElementById("mg").style.display = "flex";
    document.getElementById("t1").innerHTML = nt(t1);
    document.getElementById("eff1").innerHTML = "Gives you " + nt(t1 * Math.pow(vtbase(), t5 + extravtfromgpower())) + " Points every click.";
    document.getElementById("b1").innerHTML = "Buy a Fault for 10 Points.";
    document.getElementById("b1").style.backgroundColor = (pts >= 10 ? "rgb(31, 30, 51)" : "rgb(60, 60, 60)");
    document.getElementById("b1d").style.backgroundColor = (pts >= 30 ? "rgb(31, 30, 51)" : "rgb(60, 60, 60)");
    document.getElementById("t2").innerHTML = nt(t2);
    document.getElementById("eff2").innerHTML = "Gives you " + nt(t2 * Math.pow(vtbase(), t5 + extravtfromgpower())) + " Faults every " + (10 - 4 * (gupbought[2] + chalcomplete[0])) + " clicks.";
    document.getElementById("b2").innerHTML = "Buy a Crack for " + (gupbought[14] * (currentchal == 1 ? 0 : 1) ? 2 : 10) + " Faults.";
    document.getElementById("b2").style.backgroundColor = (t1 >= 10 - 8 * gupbought[14] * (currentchal == 1 ? 0 : 1) ? "rgb(31, 30, 51)" : "rgb(60, 60, 60)");
    document.getElementById("b2d").style.backgroundColor = (t1 >= 30 - 24 * gupbought[14] * (currentchal == 1 ? 0 : 1) ? "rgb(31, 30, 51)" : "rgb(60, 60, 60)");
    document.getElementById("t3").innerHTML = nt(t3);
    document.getElementById("eff3").innerHTML = "Gives you " + nt(t3 * Math.pow(vtbase(), t5 + extravtfromgpower())) + " Cracks every " + (15 - 4 * chalcomplete[0] - 7 * gupbought[22]) + " clicks.";
    document.getElementById("b3").innerHTML = "Buy a Loophole for " + (gupbought[14] * (currentchal == 1 ? 0 : 1) ? 2 : 10) + " Cracks.";
    document.getElementById("b3").style.backgroundColor = (t2 >= 10 - 8 * gupbought[14] * (currentchal == 1 ? 0 : 1) ? "rgb(31, 30, 51)" : "rgb(60, 60, 60)");
    document.getElementById("b3d").style.backgroundColor = (t2 >= 30 - 24 * gupbought[14] * (currentchal == 1 ? 0 : 1) ? "rgb(31, 30, 51)" : "rgb(60, 60, 60)");
    document.getElementById("t4").innerHTML = nt(t4);
    document.getElementById("eff4").innerHTML = "Gives you " + nt(t4 * Math.pow(vtbase(), t5 + extravtfromgpower())) + " Loopholes every " + (20 - 4 * chalcomplete[0] - 10 * gupbought[26]) + " clicks.";
    document.getElementById("b4").innerHTML = "Buy an Eradication for " + (gupbought[14] * (currentchal == 1 ? 0 : 1) ? 2 : 10) + " Loopholes.";
    document.getElementById("b4").style.backgroundColor = (t3 >= 10 - 8 * gupbought[14] * (currentchal == 1 ? 0 : 1) ? "rgb(31, 30, 51)" : "rgb(60, 60, 60)");
    document.getElementById("b4d").style.backgroundColor = (t3 >= 30 - 24 * gupbought[14] * (currentchal == 1 ? 0 : 1) ? "rgb(31, 30, 51)" : "rgb(60, 60, 60)");
    document.getElementById("t5").innerHTML = "" + nt(t5) + "" + (extravtfromgpower() > 0 ? (" [+" + nt(extravtfromgpower()) + "]") : "");
    document.getElementById("eff5").innerHTML = "Multiplies all production by " + nt(Math.pow(vtbase(), t5 + extravtfromgpower())) + "x.";
    document.getElementById("b5").innerHTML = "Buy a Void Tear for " + nt(vtcost()) + " Points.";
    document.getElementById("b5").style.backgroundColor = (pts >= (vtcost()) ? "rgb(31, 30, 51)" : "rgb(60, 60, 60)");
    document.getElementById("wp").innerHTML = nt(wp);
    document.getElementById("prom0").innerHTML = "Your Willpower gives a " + nt(wpeffect() / 2) + "x bonus to Glitch gain.";
    document.getElementById("gl").innerHTML = nt(glitch);
    document.getElementById("prom").innerHTML = "You have completed " + Math.round(glitchcount) + " Centi-clicks. Last time you got " + nt(lastpt) + " Points = " + nt(lastgl) + " Glitches in 100 clicks.";
    document.getElementById("prom1andahalf").innerHTML = "Your highest Point is " + nt(bestpt) + ". Your highest Glitch gain on one reset is " + nt(bestgl) + ".";
    document.getElementById("prom2").innerHTML = "You get Glitches based on Willpower and Points. If you go Glitch now, you will get " + nt(calcglitch()) + " Glitches.";
    document.getElementById("effa1").innerHTML = "Currently: " + nt(Math.pow(lastgl + 1, 0.125 + 0.075 * gupbought[16])) + "x";
    document.getElementById("effa9").innerHTML = "Currently: " + nt(Math.pow((wpeffect() / 2), 0.2)) + "x";
    document.getElementById("effa11").innerHTML = "Effect: " + nt(((wp + wp * wp + Math.pow(2, 0.5 * Math.pow(wp, 1.2))) + 1) / 2) + "x -> " + nt(((wp + wp * wp + Math.pow(2, 0.5 * Math.pow(wp, 1.45))) + 1) / 2) + "x";
    document.getElementById("effa25").innerHTML = "Effect: " + nt(Math.pow(1 + glitchpower, 0.5)) + "x";
    document.getElementById("effa29").innerHTML = "Effect: " + nt(1 + glitch) + "x";
    document.getElementById("effa30").innerHTML = "Effect: +" + nt(0.1 * Math.log2(1 + extravtfromgpower())) + "";
    document.getElementById("effa33").innerHTML = "Effect: " + nt(Math.pow(wpeffect(), 3)) + "x";
    document.getElementById("effa35").innerHTML = "Effect: " + nt(Math.pow(Math.pow(vtbase(), t5 + extravtfromgpower()), 0.35)) + "x";
    document.getElementById("locnum").innerHTML = nt(loc);
    document.getElementById("sysresetcount").innerHTML = "You have done " + nt(syscount) + " System Resets.";
    if (gupbought[7]) document.getElementById("ct1").style = "height: 100%; display: flex; flex-direction: column; justify-content: center;";
    if (gupbought[11]) document.getElementById("ct2").style = "height: 100%; display: flex; flex-direction: column; justify-content: center;";
    document.getElementById("t6").innerHTML = nt(t6);
    document.getElementById("eff6").innerHTML = "Gives you " + nt(gpps()) + " Glitch Power every second.";
    document.getElementById("b6").innerHTML = "Buy one for " + nt(gpgcost()) + " Glitches.";
    document.getElementById("b6").style.backgroundColor = (pts >= gpgcost() ? "rgb(31, 30, 51)" : "rgb(60, 60, 60)");
    document.getElementById("b6m").style.backgroundColor = (pts >= gpgcost() ? "rgb(31, 30, 51)" : "rgb(60, 60, 60)");
    if (gupbought[29]) document.getElementById("gpc1").style.display = "";
    if (gupbought[29]) document.getElementById("gpc2").style.display = "flex";
    if (gupbought[20]) document.getElementById("gpprom").innerHTML = "Glitch Power is not resetted on Glitch reset thanks to Glitch Upgrade 6x1.";
    if (stage >= 2) document.getElementById("hcp").innerHTML = "Extra Void Tears are not hardcapped because of you being in a Malfunctioning Reality!";
    for (var i = 0; i < tg; i++) {
        document.getElementById("g" + (i + 1)).innerHTML = (goalcomplete[i] == 1 ? "COMPLETED" : ("REWARD: " + goalreward[i] + " WP"));
        document.getElementById("g" + (i + 1)).style.backgroundColor = (goalcomplete[i] == 1 ? "rgb(60, 179, 113)" : "rgb(255, 99, 71)");
    }
    if (currentchal == 2) {
        document.getElementById("b5").innerHTML = "Locked by Challenge 2.";
        document.getElementById("b5").style.backgroundColor = ("rgb(60, 60, 60)");
    }
    for (var i = 0; i < Ugcount; i++) {
        var s = "";
        if (gupbought[i] == 1) s = "rgb(22, 45, 23)";
        else if (glitch >= Ugcost[i] && buyable(i)) s = "rgb(31, 30, 51)";
        else if (buyable(i)) s = "rgb(16, 15, 26)";
        else s = "rgb(0, 0, 0)";
        document.getElementById("ug" + (i + 1)).style.backgroundColor = s;
    }
    for (var i = 0; i < lgcount; i++) {
        var s = "";
        if (lupbought[i] == 1) s = "rgb(22, 45, 23)";
        else if (loc >= lgcost[i]) s = "rgb(31, 30, 51)";
        else s = "rgb(0, 0, 0)";
        document.getElementById("lug" + (i + 1)).style.backgroundColor = s;
    }
    if (hidecompleted == 1) {
        document.getElementById("cgd").innerHTML = "Show Completed";
        for (var i = 0; i < tg; i++) {
            if (goalcomplete[i]) {
                document.getElementById("sp" + (i + 1)).style.display = "none";
                document.getElementById("cg" + (i + 1)).style.display = "none";
            }
        }
    }
    else {
        document.getElementById("cgd").innerHTML = "Hide Completed";
        for (var i = 0; i < tg; i++) {
            document.getElementById("sp" + (i + 1)).style.display = "";
            document.getElementById("cg" + (i + 1)).style.display = "flex";
        }
    }
    for (var i = 0; i < totalchal; i++) {
        var j = i + 1;
        if (j == currentchal) {
            document.getElementById("chal" + j).style.backgroundColor = "black";
            document.getElementById("chal" + j).style.color = "white";
            document.getElementById("chal" + j).style.borderColor = "maroon";
            document.getElementById("chal" + j).innerHTML = "Running";
        }
        else if (j == pendingchal) {
            document.getElementById("chal" + j).style.backgroundColor = "yellow";
            document.getElementById("chal" + j).style.color = "black";
            document.getElementById("chal" + j).style.borderColor = "lime";
            document.getElementById("chal" + j).innerHTML = "Starting on next run...";
        }
        else if (chalcomplete[i]) {
            document.getElementById("chal" + j).style.backgroundColor = "green";
            document.getElementById("chal" + j).style.color = "white";
            document.getElementById("chal" + j).style.borderColor = "lime";
            document.getElementById("chal" + j).innerHTML = "Completed";
        }
        else {
            document.getElementById("chal" + j).style.backgroundColor = "white";
            document.getElementById("chal" + j).style.color = "black";
            document.getElementById("chal" + j).style.borderColor = "lime";
            document.getElementById("chal" + j).innerHTML = "Start on next run";
        }
    }
    if (apoint >= m1end) {
        document.getElementById("chal4").style.backgroundColor = "green";
        document.getElementById("chal4").style.color = "white";
        document.getElementById("chal4").style.borderColor = "lime";
        document.getElementById("chal4").innerHTML = "Completed";
        document.getElementById("chal4").onclick = "";
    }
    if (bpoint >= 100) {
        document.getElementById("chal5").style.backgroundColor = "green";
        document.getElementById("chal5").style.color = "white";
        document.getElementById("chal5").style.borderColor = "lime";
        document.getElementById("chal5").innerHTML = "Completed";
    }
    document.getElementById("pageof").innerHTML = "Page " + Page + " of " + mxpage;
    if (Page == 1) document.getElementById("lastpage").style.visibility = "hidden";
    else document.getElementById("lastpage").style.visibility = "";
    if (Page == mxpage) document.getElementById("nextpage").style.visibility = "hidden";
    else document.getElementById("nextpage").style.visibility = "";
    for (var i = 0; i < canbeshown.length; i++) {
        if ((Page - 1) == (Math.floor(i / 4))) canbeshown[i] = 1;
        else canbeshown[i] = 0;
    }
    if (stage < 1) canbeshown[6] = 0;
    if (stage < 2) canbeshown[7] = 0;
    for (var i = 0; i < canbeshown.length; i++) {
        if (canbeshown[i] == 0) document.getElementById("ugr" + (i + 1)).style.display = "none";
        else document.getElementById("ugr" + (i + 1)).style.display = "flex";
    }
    if (stage == 1) document.getElementById("realityname").innerHTML = "You are currently in a Glitched Reality.";
    if (stage == 2) document.getElementById("realityname").innerHTML = "You are currently in a Malfunctioning Reality.";
    if (stage == 3) document.getElementById("realityname").innerHTML = "You are currently in a Meta Reality.";
    if (stage == 4) document.getElementById("realityname").innerHTML = "You are currently in Florena's Reality.";
    if (stage == 1) document.getElementById("perks").innerHTML = "Willpower effect's exponent's exponent +0.05.";
    if (stage == 2) document.getElementById("perks").innerHTML = "Willpower effect's exponent's exponent +0.10.<br>Remove Extra Void Tear's hardcap.";
    if (stage == 3) document.getElementById("perks").innerHTML = "Willpower effect's exponent's exponent +0.15.<br>Remove Extra Void Tear's hardcap.<br>Glitch gain softcap is slightly lifted.";
    if (stage == 4) document.getElementById("perks").innerHTML = "Willpower effect's exponent's exponent +0.20.<br>Remove Extra Void Tear's hardcap.<br>Glitch gain softcap is slightly lifted.<br>Minigame progress are kept on any (soft) reset.";
}
function Loadsave() {
    console.log("Loaded save!");
    clickcount = Number(LoadItem("clickcount"));
    t1 = 1 + Number(LoadItem("t1"));
    t2 = Number(LoadItem("t2"));
    t3 = Number(LoadItem("t3"));
    t4 = Number(LoadItem("t4"));
    t5 = Number(LoadItem("t5"));
    t6 = Number(LoadItem("t6"));
    pts = Number(LoadItem("pts"));
    lastpt = Number(LoadItem("lastpt"));
    bestpt = Number(LoadItem("bestpt"));
    lastgl = Number(LoadItem("lastgl"));
    bestgl = Number(LoadItem("bestgl"));
    glitch = Number(LoadItem("glitch"));
    glitchcount = Number(LoadItem("glitchcount"));
    glitchpower = Number(LoadItem("glitchpower"));
    hidecompleted = Number(LoadItem("hidecompleted"));
    currentchal = Number(LoadItem("currentchal"));
    stage = Number(LoadItem("stage"));
    apoint = Number(LoadItem("apoint"));
    bpoint = Number(LoadItem("bpoint"));
    syscount = Number(LoadItem("syscount"));
    loc = Number(LoadItem("loc"));
    wp = Number(LoadItem("wp"));
    tcyc = Number(LoadItem("tcyc"));
    var ttf = LoadItem("ttf");
    if (ttf != "2221") Wipe = 1;
    var tmp = localStorage.getItem('rigc');
    for (var i = 0; i < tmp.length; i++)goalcomplete[i] = Number(tmp[i]);
    tmp = localStorage.getItem('rigc2');
    for (var i = 0; i < tmp.length; i++)gupbought[i] = Number(tmp[i]);
    tmp = localStorage.getItem('rigc4');
    for (var i = 0; i < tmp.length; i++)lupbought[i] = Number(tmp[i]);
    tmp = localStorage.getItem('rigc3');
    for (var i = 0; i < tmp.length; i++)chalcomplete[i] = Number(tmp[i]);
    for (var i = 0; i < 6; i++)bd[i] = Number(localStorage.getItem('rigct' + i));
}
function Save() {
    SaveItem("clickcount", clickcount);
    SaveItem("t1", t1 - 1);
    SaveItem("t2", t2);
    SaveItem("t3", t3);
    SaveItem("t4", t4)
    SaveItem("t5", t5);
    SaveItem("t6", t6);
    SaveItem("pts", pts);
    SaveItem("lastpt", lastpt);
    SaveItem("bestpt", bestpt);
    SaveItem("lastgl", lastgl);
    SaveItem("bestgl", bestgl);
    SaveItem("glitch", glitch);
    SaveItem("glitchcount", glitchcount);
    SaveItem("glitchpower", glitchpower);
    SaveItem("hidecompleted", hidecompleted);
    SaveItem("currentchal", currentchal);
    SaveItem("stage", stage);
    SaveItem("apoint", apoint);
    SaveItem("bpoint", bpoint);
    SaveItem("syscount", syscount);
    SaveItem("loc", loc);
    SaveItem("wp", wp);
    SaveItem("tcyc", tcyc);
    SaveItem("ttf", "2221");
    var tmp = "";
    for (var i = 0; i < tg; i++)tmp += goalcomplete[i];
    localStorage.setItem('rigc', tmp);
    tmp = "";
    for (var i = 0; i < gupbought.length; i++)tmp += gupbought[i];
    localStorage.setItem('rigc2', tmp);
    tmp = "";
    for (var i = 0; i < lupbought.length; i++)tmp += lupbought[i];
    localStorage.setItem('rigc4', tmp);
    tmp = "";
    for (var i = 0; i < totalchal; i++)tmp += chalcomplete[i];
    localStorage.setItem('rigc3', tmp);
    for (var i = 0; i < 6; i++)localStorage.setItem('rigct' + i, bd[i]);
}
setInterval(function () {
    Save();
}, 1000);
var Wipe = 0;
setInterval(function () {
    if (Wipe == 1) {
        resetmg1();
        SaveItem("clickcount", 0);
        SaveItem("t1", 0);
        SaveItem("t2", 0);
        SaveItem("t3", 0);
        SaveItem("t4", 0);
        SaveItem("t5", 0);
        SaveItem("t6", 0);
        SaveItem("pts", 0);
        SaveItem("lastpt", 0);
        SaveItem("bestpt", 0);
        SaveItem("lastgl", 0);
        SaveItem("bestgl", 0);
        SaveItem("glitch", 0);
        SaveItem("glitchcount", 0);
        SaveItem("glitchpower", 0);
        SaveItem("hidecompleted", 0);
        SaveItem("currentchal", 0);
        SaveItem("bpoint", 0);
        SaveItem("syscount", 0);
        SaveItem("loc", 0);
        SaveItem("stage", 0);
        SaveItem("wp", 0);
        SaveItem("tcyc", 0);
        SaveItem("ttf", "2221");
        var tmp = "";
        for (var i = 0; i < tg; i++)tmp += "0";
        localStorage.setItem('rigc', tmp);
        tmp = "";
        for (var i = 0; i < gupbought.length; i++)tmp += "0";
        localStorage.setItem('rigc2', tmp);
        tmp = "";
        for (var i = 0; i < lupbought.length; i++)tmp += "0";
        localStorage.setItem('rigc4', tmp);
        tmp = "";
        for (var i = 0; i < totalchal; i++)tmp += "0";
        localStorage.setItem('rigc3', tmp);
        Wipe = 0;
        Load();
    }
}, 50);