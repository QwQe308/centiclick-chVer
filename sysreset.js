syscount = new Decimal(0);
loc = new Decimal(0);
var lupbought = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var lgcount = 16;
var lgcost = [Decimal(1),Decimal(1),Decimal(1),Decimal(1),Decimal(5),Decimal(5),Decimal(5),Decimal(5),Decimal(25),Decimal(25),Decimal(25),Decimal(25),Decimal(125),Decimal(125),Decimal(125),Decimal(125)];
function Bgl(num) {
	num = num - 1;
	if (loc.gte(lgcost[num]) && lupbought[num] == 0) {
		loc.sub(lgcost[num]);
		lupbought[num] = 1;
	}
    if(lupbought[5])for(var i=0;i<16;i++)gupbought[i]=1;
    if(lupbought[9])for(var i=16;i<32;i++)gupbought[i]=1;
    if(lupbought[13])for(var i=32;i<36;i++)gupbought[i]=1;
    if(lupbought[10])stage=2;
    if(lupbought[14])stage=4;
    if(lupbought[9])for(var i=0;i<totalchal;i++)chalcomplete[i]=1;
    if(lupbought[13])for(var i=0;i<tg;i++)goalcomplete[i]=1;
	Loadheader();
	Loadmiddle();
}
function SysReset(){
    console.log("RESETTTTT!!!");
    currentchal = 0;
    pendingchal = 0;
    glitchcount = Decimal(0);
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
    stage=0;
    if(lupbought[5])for(var i=0;i<16;i++)gupbought[i]=1;
    if(lupbought[9])for(var i=16;i<32;i++)gupbought[i]=1;
    if(lupbought[13])for(var i=32;i<36;i++)gupbought[i]=1;
    if(lupbought[10])stage=2;
    if(lupbought[14])stage=4;
    if(lupbought[9])for(var i=0;i<totalchal;i++)chalcomplete[i]=1;
    if(lupbought[13])for(var i=0;i<tg;i++)goalcomplete[i]=1;
    syscount = syscount.add(1);
    loc = loc.add(loconreset());
    Reload();
}
function loconreset() {
    inc = new Decimal(2);
    if(lupbought[3])inc = inc.mul(3);
    if(lupbought[7])inc = inc.mul(3);
    if(lupbought[11])inc = inc.mul(3);
    if(lupbought[15])inc = inc.mul(3);
    return inc;
}
