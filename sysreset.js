syscount = new Decimal(0);
loc = new Decimal(0);
var lupbought = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var lgcount = 18;
var lgcost = [Decimal(1), Decimal(1), Decimal(1), Decimal(1), Decimal(5), Decimal(5), Decimal(5), Decimal(5), Decimal(25), Decimal(25), Decimal(25), Decimal(25), Decimal(125), Decimal(125), Decimal(125), Decimal(125), Decimal(4e5), Decimal(625)];
function Bgl(num) {
    num = num - 1;
    if (loc.gte(lgcost[num]) && lupbought[num] == 0) {
        loc = loc.sub(lgcost[num]);
        lupbought[num] = 1;
    }
    if (lupbought[5]) for (var i = 0; i < 16; i++)gupbought[i] = 1;
    if (lupbought[9]) for (var i = 16; i < 32; i++)gupbought[i] = 1;
    if (lupbought[13]) for (var i = 32; i < 36; i++)gupbought[i] = 1;
    if (lupbought[10]) stage = 2;
    if (lupbought[14]) stage = 4;
    if (lupbought[9]) for (var i = 0; i < totalchal; i++)chalcomplete[i] = 1;
    if (lupbought[13]) for (var i = 0; i < tg; i++)goalcomplete[i] = 1;
    Loadheader();
    Loadmiddle();
}
function SysReset() {
    console.log("RESETTTTT!!!");
    loc = loc.add(loconreset());
    syscount = syscount.add(1);
    currentchal = 0;
    pendingchal = 0;
    glitchcount = Decimal(1);
    lastgl = Decimal(0);
    bestgl = Decimal(0);
    glitch = Decimal(0);
    lastpt = Decimal(0);
    bestpt = Decimal(0);
    clickcount = Decimal(0);
    pts = Decimal(0);
    t1 = Decimal(1);
    t2 = Decimal(0);
    t3 = Decimal(0);
    t4 = Decimal(0);
    t5 = Decimal(0);
    t6 = Decimal(0);
    wp = Decimal(0);
    glitchpower = Decimal(0);
    for (var i = 0; i < tg; i++)goalcomplete[i] = 0;
    for (var i = 0; i < 37; i++)gupbought[i] = 0;
    for (var i = 0; i < totalchal; i++)chalcomplete[i] = 0;
    gupbought[15] = 1;
    gupbought[17] = 1;
    stage = 0;
    if (lupbought[5]) for (var i = 0; i < 16; i++)gupbought[i] = 1;
    if (lupbought[9]) for (var i = 16; i < 32; i++)gupbought[i] = 1;
    if (lupbought[13]) for (var i = 32; i < 36; i++)gupbought[i] = 1;
    if (lupbought[10]) stage = 2;
    if (lupbought[14]) stage = 4;
    if (lupbought[9]) for (var i = 0; i < totalchal; i++)chalcomplete[i] = 1;
    if (lupbought[13]) for (var i = 0; i < tg; i++)goalcomplete[i] = 1;
    Reload();
}
function loconreset() {
    inc = new Decimal(2);
    if (lupbought[3]) inc = inc.mul(3);
    if (lupbought[7]) inc = inc.mul(3);
    if (lupbought[11]) inc = inc.mul(3);
    if (lupbought[15]) inc = inc.mul(3);
    if (lupbought[17]) inc = inc.mul(glitch.add(1).log(Decimal(6e+66)).pow(3));
    return inc;
}

var quotenum=0, tsn=0, pend=0, rdquote=0;
var Sysresetcheat=0;
var florenaquote=[
    "Hi.",
    "You are here."
];
function Showquote() {
    document.getElementById("fq").style.zIndex = "98";
    document.getElementById("fq").style.display = "flex";
}
function nextquote() {
    pend=1;
    tsn=2000;
}
setInterval(function(){
    console.log("running awa");
    if(Sysresetcheat==1){
        SysReset();
        Sysresetcheat=0;
    }
    if(pend==1&&tsn<=1000){
        pend=0;
        quotenum++;
        if(quotenum==florenaquote.length){
            quotenum=0;
            document.getElementById("fq").style.zIndex = "-98";
            document.getElementById("fq").style.display = "none";
        }
    }
    if(1000<=tsn&&tsn<=2000)document.getElementById("fq1").style.opacity=""+(Math.floor((tsn-1000)/10))+"%";
    else if(1000>=tsn&&tsn>=0)document.getElementById("fq1").style.opacity=""+(Math.floor((1000-tsn)/10))+"%";
    else document.getElementById("fq1").style.opacity="100%";
    document.getElementById("fq1").innerHTML=florenaquote[quotenum];
    tsn-=50;
    var flag=1;
    for(var i=0;i<lgcount;i++)flag*=lupbought[i];
    if(flag==1&&rdquote==0){
        rdquote=1;
        Showquote();
    }
},50);