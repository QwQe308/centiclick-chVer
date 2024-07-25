var syscount=0,loc=0;
var lupbought = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var lgcount = 16;
var lgcost = [1,1,1,1,5,5,5,5,25,25,25,25,125,125,125,125];
function Bgl(num) {
	num = num - 1;
	if (loc >= lgcost[num] && lupbought[num] == 0) {
		loc -= lgcost[num];
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
    glitchcount = 0;
    lastgl = 0;
    bestgl = 0;
    glitch = 0;
    lastpt = 0;
    bestpt = 0;
    clickcount = 0;
    pts = 0;
    t1 = 1;
    t2 = 0;
    t3 = 0;
    t4 = 0;
    t5 = 0;
    t6 = 0;
    wp = 0;
    glitchpower = 0;
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
    syscount++;
    loc+=loconreset();
    Reload();
}
function loconreset() {
    var inc=2;
    if(lupbought[3])inc*=3;
    if(lupbought[7])inc*=3;
    if(lupbought[11])inc*=3;
    if(lupbought[15])inc*=3;
    return inc;
}
