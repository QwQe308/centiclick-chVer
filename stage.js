var stage=0;
var totalstage=3;
var stageresetreq=[7.99e+12,7.99e+28,1e+308,1.7976e+308];
function showstage(){
    if(stage==1){
        document.getElementById("staged1").innerHTML="Too many Glitches have made the reality glitched.";
        document.getElementById("staged2").innerHTML="Continue";
        document.getElementById("staged3").innerHTML="This will reset everything, but also unlocks new content.";
        document.getElementById("staged4").innerHTML="Willpower effect's exponent's exponent is buffed by +0.05 to compensate.";
    }
    if(stage==2){
        document.getElementById("staged1").innerHTML="Too many Glitches are beginning to break the reality.";
        document.getElementById("staged2").innerHTML="Continue";
        document.getElementById("staged3").innerHTML="This will reset everything, but also unlocks new content.";
        document.getElementById("staged4").innerHTML="Willpower effect's exponent's exponent is buffed by +0.05 and Extra Void Tears' hardcap is removed to compensate.";
    }
    document.getElementById("stage").style.display="flex";
    if(stage==4)document.getElementById("staged2").onclick="";
}
function closestage(){
    document.getElementById("stage").style.display="none";
}
setInterval(function(){
    if(glitch>=stageresetreq[stage]){
        stagereset();
        stage++;
        showstage();
        Reload();
    }
},50);
function stagereset(){
	currentchal=0;
	pendingchal=0;
	glitchcount=0;
	lastgl=0;
	bestgl=0;
	glitch=0
	lastpt=0;
	bestpt=0;
	clickcount=0;
	pts=0;
	t1=1;
	t2=0;
	t3=0;
	t4=0;
	t5=0;
    t6=0;
    wp=0;
	glitchpower=0;
    for(var i=0;i<tg;i++)goalcomplete[i]=0;
    for(var i=0;i<Ugcount;i++)gupbought[i]=0;
    for(var i=0;i<totalchal;i++)chalcomplete[i]=0;
    gupbought[15]=1;
}