function Load() {
    Loadsave();
    Loadheader();
    Loadmiddle();
    st(1);
}
function Reload() {
    Loadheader();
    Loadmiddle();
}
function Loadheader() {
    document.getElementById("points").innerHTML = pts.Stdnt(4);
    document.getElementById("cl").innerHTML = (clickcount.gte(1e+5) ? clickcount.gte(4) : clickcount);
    if (clickcount.lte(20)) document.getElementById("cl").style = "font-size: 22px; color: green;";
    else if (clickcount.lte(40)) document.getElementById("cl").style = "font-size: 22px; color: yellowgreen;";
    else if (clickcount.lte(60)) document.getElementById("cl").style = "font-size: 22px; color: yellow;";
    else if (clickcount.lte(80)) document.getElementById("cl").style = "font-size: 22px; color: orange;";
    else document.getElementById("cl").style = "font-size: 22px; color: red;";
    document.getElementById("getpoint").innerHTML = "Click to get " + calcpts().Stdnt(4) + " points.";
}
function Loadmiddle() {
    wp = Decimal(0);
    for (var i = 0; i < tg; i++)wp = wp.add(goalcomplete[i] * goalreward[i]);
    if (gupbought[31]) mxpage = 3;
    else mxpage = 2;
    if (lupbought[6] && clickcount.lte(99)) buy5();
    if (glitchcount.gte(1) || stage >= 1) document.getElementById("c1").style = "";
    if (glitchcount.gte(1) || stage >= 1) document.getElementById("c1x").style = "width: 10px;";
    if (gupbought[15] || stage >= 1) document.getElementById("c2").style = "";
    if (gupbought[15] || stage >= 1) document.getElementById("c2x").style = "width: 10px;";
    if (gupbought[17] || stage >= 1) document.getElementById("c3").style = "";
    if (gupbought[17] || stage >= 1) document.getElementById("c3x").style = "width: 10px;";
    if (stage >= 1) document.getElementById("c4").style = "";
    if (stage >= 1) document.getElementById("c4x").style = "width: 10px;";
    if (syscount.gte(1)) document.getElementById("c5").style = "";
    if (syscount.gte(1)) document.getElementById("c5x").style = "width: 10px;";
    if (rdquote) document.getElementById("c6").style = "";
    if (rdquote) document.getElementById("c6x").style = "width: 10px;";
    if (gupbought[31]) document.getElementById("mg").style.display = "flex";
    document.getElementById("t1").innerHTML = t1.Stdnt(4);
    document.getElementById("eff1").innerHTML = "Gives you " + t1.mul(vtbase().pow(t5.add(extravtfromgpower()))).Stdnt(4) + " Points every click.";
    document.getElementById("b1").innerHTML = "Buy a Fault for 10 Points.";
    document.getElementById("b1").style.backgroundColor = (pts.gte(10) ? "rgb(31, 30, 51)" : "rgb(60, 60, 60)");
    document.getElementById("b1d").style.backgroundColor = (pts.gte(30) ? "rgb(31, 30, 51)" : "rgb(60, 60, 60)");
    document.getElementById("t2").innerHTML = t2.Stdnt(4);
    document.getElementById("eff2").innerHTML = "Gives you " + t2.mul(vtbase().pow(t5.add(extravtfromgpower()))).Stdnt(4) + " Faults every " + (10 - 4 * (gupbought[2] + chalcomplete[0])) + " clicks.";
    document.getElementById("b2").innerHTML = "Buy a Crack for " + (gupbought[14] * (currentchal == 1 ? 0 : 1) ? 2 : 10) + " Faults.";
    document.getElementById("b2").style.backgroundColor = (t1.gte(10 - 8 * gupbought[14] * (currentchal == 1 ? 0 : 1)) ? "rgb(31, 30, 51)" : "rgb(60, 60, 60)");
    document.getElementById("b2d").style.backgroundColor = (t1.gte(30 - 24 * gupbought[14] * (currentchal == 1 ? 0 : 1)) ? "rgb(31, 30, 51)" : "rgb(60, 60, 60)");
    document.getElementById("t3").innerHTML = t3.Stdnt(4);
    document.getElementById("eff3").innerHTML = "Gives you " + t3.mul(vtbase().pow(t5.add(extravtfromgpower()))).Stdnt(4) + " Cracks every " + (15 - 4 * chalcomplete[0] - 7 * gupbought[22]) + " clicks.";
    document.getElementById("b3").innerHTML = "Buy a Loophole for " + (gupbought[14] * (currentchal == 1 ? 0 : 1) ? 2 : 10) + " Cracks.";
    document.getElementById("b3").style.backgroundColor = (t2.gte(10 - 8 * gupbought[14] * (currentchal == 1 ? 0 : 1)) ? "rgb(31, 30, 51)" : "rgb(60, 60, 60)");
    document.getElementById("b3d").style.backgroundColor = (t2.gte(30 - 24 * gupbought[14] * (currentchal == 1 ? 0 : 1)) ? "rgb(31, 30, 51)" : "rgb(60, 60, 60)");
    document.getElementById("t4").innerHTML = t4.Stdnt(4);
    document.getElementById("eff4").innerHTML = "Gives you " + t4.mul(vtbase().pow(t5.add(extravtfromgpower()))).Stdnt(4) + " Loopholes every " + (20 - 4 * chalcomplete[0] - 10 * gupbought[26]) + " clicks.";
    document.getElementById("b4").innerHTML = "Buy an Eradication for " + (gupbought[14] * (currentchal == 1 ? 0 : 1) ? 2 : 10) + " Loopholes.";
    document.getElementById("b4").style.backgroundColor = (t3.gte(10 - 8 * gupbought[14] * (currentchal == 1 ? 0 : 1)) ? "rgb(31, 30, 51)" : "rgb(60, 60, 60)");
    document.getElementById("b4d").style.backgroundColor = (t3.gte(30 - 24 * gupbought[14] * (currentchal == 1 ? 0 : 1)) ? "rgb(31, 30, 51)" : "rgb(60, 60, 60)");
    document.getElementById("t5").innerHTML = "" + t5.Stdnt(4) + "" + (extravtfromgpower().gt(0) ? (" [+" + extravtfromgpower().Stdnt(4) + "]") : "");
    document.getElementById("eff5").innerHTML = "Multiplies all production by " + vtbase().pow(extravtfromgpower().add(t5)).Stdnt(4) + "x.";
    document.getElementById("b5").innerHTML = "Buy a Void Tear for " + vtcost().Stdnt(4) + " Points.";
    document.getElementById("b5").style.backgroundColor = (pts.gte(vtcost()) ? "rgb(31, 30, 51)" : "rgb(60, 60, 60)");
    document.getElementById("wp").innerHTML = wp.Stdnt(4);
    document.getElementById("prom0").innerHTML = "Your Willpower gives a " + wpeffect().Stdnt(4) + "x bonus to Glitch gain.";
    document.getElementById("gl").innerHTML = glitch.Stdnt(4);
    document.getElementById("prom").innerHTML = "You have completed " + glitchcount.floor() + " Centi-clicks. Last time you got " + lastpt.Stdnt(4) + " Points = " + lastgl.Stdnt(4) + " Glitches in 100 clicks.";
    document.getElementById("prom1andahalf").innerHTML = "Your highest Point is " + bestpt.Stdnt(4) + ". Your highest Glitch gain on one reset is " + bestgl.Stdnt(4) + ".";
    document.getElementById("prom2").innerHTML = "You get Glitches based on Willpower and Points. If you go Glitch now, you will get " + calcglitch().Stdnt(4) + " Glitches.";
    document.getElementById("effa1").innerHTML = "Currently: " + lastgl.add(1).pow(0.125 + 0.075 * gupbought[16]).Stdnt(4) + "x";
    document.getElementById("effa9").innerHTML = "Currently: " + wpeffect().div(2).pow(0.2).Stdnt(4) + "x";
    document.getElementById("effa11").innerHTML = "Effect: " + Decimal(2).pow(wp.pow(1.2).mul(0.5)).add(wp.pow(2)).add(wp).add(1).div(2).Stdnt(4) + "x -> " + Decimal(2).pow(wp.pow(1.45).mul(0.5)).add(wp.pow(2)).add(wp).add(1).div(2).Stdnt(4) + "x";
    document.getElementById("effa25").innerHTML = "Effect: " + glitchpower.add(1).pow(0.5).Stdnt(4) + "x";
    document.getElementById("effa29").innerHTML = "Effect: " + glitch.add(1).Stdnt(4) + "x";
    document.getElementById("effa30").innerHTML = "Effect: +" + extravtfromgpower().add(1).log(2).mul(0.1).Stdnt(4) + "";
    document.getElementById("effa33").innerHTML = "Effect: " + wpeffect().pow(3).Stdnt(4) + "x";
    document.getElementById("effa35").innerHTML = "Effect: " + vtbase().pow(t5.add(extravtfromgpower())).pow(0.35).Stdnt(4) + "x";
    document.getElementById("locnum").innerHTML = loc.Stdnt(4);
    document.getElementById("sysresetcount").innerHTML = "You have done " + syscount.Stdnt(4) + " System Resets.";
    if (gupbought[7]) document.getElementById("ct1").style = "height: 100%; display: flex; flex-direction: column; justify-content: center;";
    if (gupbought[11]) document.getElementById("ct2").style = "height: 100%; display: flex; flex-direction: column; justify-content: center;";
    document.getElementById("t6").innerHTML = t6.Stdnt(4);
    document.getElementById("eff6").innerHTML = "Gives you " + gpps().Stdnt(4) + " Glitch Power every second.";
    document.getElementById("b6").innerHTML = "Buy one for " + gpgcost().Stdnt(4) + " Glitches.";
    document.getElementById("b6").style.backgroundColor = (pts.gte(gpgcost()) ? "rgb(31, 30, 51)" : "rgb(60, 60, 60)");
    document.getElementById("b6m").style.backgroundColor = (pts.gte(gpgcost()) ? "rgb(31, 30, 51)" : "rgb(60, 60, 60)");
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
        else if (glitch.gte(Ugcost[i]) && buyable(i)) s = "rgb(31, 30, 51)";
        else if (buyable(i)) s = "rgb(16, 15, 26)";
        else s = "rgb(0, 0, 0)";
        document.getElementById("ug" + (i + 1)).style.backgroundColor = s;
    }
    for (var i = 0; i < lgcount; i++) {
        var s = "";
        if (lupbought[i] == 1) s = "rgb(22, 45, 23)";
        else if (loc.gte(lgcost[i])) s = "rgb(31, 30, 51)";
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
    if (apoint.gte(m1end)) {
        document.getElementById("chal4").style.backgroundColor = "green";
        document.getElementById("chal4").style.color = "white";
        document.getElementById("chal4").style.borderColor = "lime";
        document.getElementById("chal4").innerHTML = "Completed";
        document.getElementById("chal4").onclick = "";
    }
    if (bpoint.gte(100)) {
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
    document.getElementById("locgot").innerHTML = "You will get " + loconreset().Stdnt() + " Lines of Code on reset.";
    if (stage == 1) document.getElementById("realityname").innerHTML = "You are currently in a Glitched Reality.";
    if (stage == 2) document.getElementById("realityname").innerHTML = "You are currently in a Malfunctioning Reality.";
    if (stage == 3) document.getElementById("realityname").innerHTML = "You are currently in a Meta Reality.";
    if (stage == 4) document.getElementById("realityname").innerHTML = "You are currently in Florena's Reality.";
    if (stage == 1) document.getElementById("perks").innerHTML = "Willpower effect's exponent's exponent +0.05.";
    if (stage == 2) document.getElementById("perks").innerHTML = "Willpower effect's exponent's exponent +0.10.<br>Remove Extra Void Tear's hardcap.";
    if (stage == 3) document.getElementById("perks").innerHTML = "Willpower effect's exponent's exponent +0.15.<br>Remove Extra Void Tear's hardcap.<br>Glitch gain softcap is slightly lifted.";
    if (stage == 4) document.getElementById("perks").innerHTML = "Willpower effect's exponent's exponent +0.20.<br>Remove Extra Void Tear's hardcap.<br>Glitch gain softcap is slightly lifted.<br>Minigame progress are kept on any (soft) reset.";
    document.addEventListener('keydown', function (event) {
        if (event.key === ' ' && Hotkeyon == 1 && cd[0] <= 0) {
            gp();
            cd[0] = 100;
        }
        if (event.key === '1' && Hotkeyon == 1 && cd[1] <= 0) {
            buy1();
            cd[1] = 100;
        }
        if (event.key === '2' && Hotkeyon == 1 && cd[2] <= 0) {
            buy2();
            cd[2] = 100;
        }
        if (event.key === '3' && Hotkeyon == 1 && cd[3] <= 0) {
            buy3();
            cd[3] = 100;
        }
        if (event.key === '4' && Hotkeyon == 1 && cd[4] <= 0) {
            buy4();
            cd[4] = 100;
        }
        if (event.key === '5' && Hotkeyon == 1 && cd[7] <= 0) {
            buy5();
            cd[7] = 100;
        }
        if (event.key === '6' && Hotkeyon == 1 && cd[8] <= 0) {
            buy6();
            cd[8] = 100;
        }
        if (event.key === 'ArrowLeft' && Hotkeyon == 1 && cd[5] <= 0) {
            tabnum--;
            tabnum = (tabnum + 9) % 9;
            if (rdquote == 0 && tabnum == 7) tabnum--;
            if (syscount.eq(0) && tabnum == 6) tabnum--;
            if (stage == 0 && tabnum == 5) tabnum--;
            if (gupbought[17] == 0 && stage == 0 && tabnum == 4) tabnum--;
            if (gupbought[15] == 0 && stage == 0 && tabnum == 3) tabnum--;
            if (glitchcount.lt(1) && stage == 0 && tabnum == 2) tabnum--;
            st(numtab[tabnum]);
            cd[5] = 100;
        }
        if (event.key === 'ArrowRight' && Hotkeyon == 1 && cd[6] <= 0) {
            tabnum++;
            tabnum = (tabnum + 9) % 9;
            if (glitchcount.lt(1) && stage == 0 && tabnum == 2) tabnum++;
            if (gupbought[15] == 0 && stage == 0 && tabnum == 3) tabnum++;
            if (gupbought[17] == 0 && stage == 0 && tabnum == 4) tabnum++;
            if (stage == 0 && tabnum == 5) tabnum++;
            if (syscount.eq(0) && tabnum == 6) tabnum++;
            if (rdquote == 0 && tabnum == 7) tabnum++;
            st(numtab[tabnum]);
            cd[6] = 100;
        }
    });
    if (Hotkeyon == 0) document.getElementById("hk").innerHTML = "Hotkey OFF";
    else document.getElementById("hk").innerHTML = "Hotkey ON";
}
function Loadsave() {
    console.log("Loaded save!");
    clickcount = Decimal(LoadItem("clickcount"));
    t1 = Decimal(LoadItem("t1")).add(1);
    t2 = Decimal(LoadItem("t2"));
    t3 = Decimal(LoadItem("t3"));
    t4 = Decimal(LoadItem("t4"));
    t5 = Decimal(LoadItem("t5"));
    t6 = Decimal(LoadItem("t6"));
    pts = Decimal(LoadItem("pts"));
    lastpt = Decimal(LoadItem("lastpt"));
    bestpt = Decimal(LoadItem("bestpt"));
    lastgl = Decimal(LoadItem("lastgl"));
    bestgl = Decimal(LoadItem("bestgl"));
    glitch = Decimal(LoadItem("glitch"));
    glitchcount = Decimal(LoadItem("glitchcount"));
    glitchpower = Decimal(LoadItem("glitchpower"));
    hidecompleted = Number(LoadItem("hidecompleted"));
    currentchal = Number(LoadItem("currentchal"));
    stage = Number(LoadItem("stage"));
    apoint = Decimal(LoadItem("apoint"));
    bpoint = Decimal(LoadItem("bpoint"));
    syscount = Decimal(LoadItem("syscount"));
    loc = Decimal(LoadItem("loc"));
    wp = Decimal(LoadItem("wp"));
    tcyc = Number(LoadItem("tcyc"));
    Hotkeyon = Number(LoadItem("Hotkeyon"));
    rdquote = Number(LoadItem("rdquote"));
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
    for (var i = 0; i < 6; i++)bd[i] = Decimal(localStorage.getItem('rigct' + i));
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
    SaveItem("Hotkeyon", Hotkeyon);
    SaveItem("rdquote", rdquote);
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
        SaveItem("clickcount", Decimal(0));
        SaveItem("t1", Decimal(0));
        SaveItem("t2", Decimal(0));
        SaveItem("t3", Decimal(0));
        SaveItem("t4", Decimal(0));
        SaveItem("t5", Decimal(0));
        SaveItem("t6", Decimal(0));
        SaveItem("pts", Decimal(0));
        SaveItem("lastpt", Decimal(0));
        SaveItem("bestpt", Decimal(0));
        SaveItem("lastgl", Decimal(0));
        SaveItem("bestgl", Decimal(0));
        SaveItem("glitch", Decimal(0));
        SaveItem("glitchcount", Decimal(0));
        SaveItem("glitchpower", Decimal(0));
        SaveItem("hidecompleted", 0);
        SaveItem("currentchal", 0);
        SaveItem("bpoint", Decimal(0));
        SaveItem("syscount", Decimal(0));
        SaveItem("loc", Decimal(0));
        SaveItem("stage", 0);
        SaveItem("wp", Decimal(0));
        SaveItem("rdquote", Decimal(0));
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