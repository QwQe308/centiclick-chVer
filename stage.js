var stage = 0;
var totalstage = 4;
stageresetreq = [Decimal(7.99e+12), Decimal(7.99e+28), Decimal(9.99e+38), Decimal(3.99e+65), Decimal(Infinity)];
function showstage() {
    if (stage == 1) {
        document.getElementById("staged1").innerHTML = "Too many Glitches have made the reality glitched.";
        document.getElementById("staged2").innerHTML = "Continue";
        document.getElementById("staged3").innerHTML = "This will reset everything, but also unlocks new content.";
        document.getElementById("staged4").innerHTML = "Willpower effect's exponent's exponent is buffed by +0.05 to compensate.";
    }
    if (stage == 2) {
        document.getElementById("staged1").innerHTML = "Too many Glitches are beginning to break the reality.";
        document.getElementById("staged2").innerHTML = "Continue";
        document.getElementById("staged3").innerHTML = "This will reset everything, but also unlocks new content.";
        document.getElementById("staged4").innerHTML = "Willpower effect's exponent's exponent is buffed by +0.05 and Extra Void Tears' hardcap is removed to compensate.";
    }
    if (stage == 3) {
        document.getElementById("staged1").innerHTML = "You have partially melted your reality, mixing it with others.";
        document.getElementById("staged2").innerHTML = "Continue";
        document.getElementById("staged3").innerHTML = "This will reset everything, but also unlocks new content.";
        document.getElementById("staged4").innerHTML = "Willpower effect's exponent's exponent is buffed by +0.05 and Glitch gain softcap is slightly lifted to compensate.";
    }
    if (stage == 4) {
        document.getElementById("staged1").innerHTML = "Your reality is completely destroyed. However, Florena, the Goddess of Reality, invites you into her reality instead. Hope you don't break it :)";
        document.getElementById("staged2").innerHTML = "Continue";
        document.getElementById("staged3").innerHTML = "This will reset everything, but also unlocks new content.";
        document.getElementById("staged4").innerHTML = "Willpower effect's exponent's exponent is buffed by +0.05 and your minigame progress are kept on any (soft) reset to compensate.";
    }
    if (stage == 5) {
        document.getElementById("staged1").innerHTML = "You have nowhere to go. But you are still there, in the System of Existence.";
        document.getElementById("staged2").innerHTML = "RESET";
        document.getElementById("staged3").innerHTML = "This will reset everything so far, but also unlock a new tab & some upgrades.";
        document.getElementById("staged4").innerHTML = "(But have you ever thought that this game might be a minigame of something larger?)";
    }
    document.getElementById("stage").style.display = "flex";
}
function closestage() {
    document.getElementById("stage").style.display = "none";
    if (stage == 5) SysReset();
    Reload();
}
setInterval(function () {
    if (glitch.gte(stageresetreq[stage])) {
        if (lupbought[2] == 0) stagereset();
        stage++;
        if (lupbought[2] == 0) showstage();
        Reload();
    }
    if (stage == 5) {
        document.getElementById("staged1").innerHTML = "You have nowhere to go. But you are still there, in the System of Existence.";
        document.getElementById("staged2").innerHTML = "RESET";
        document.getElementById("staged3").innerHTML = "This will reset everything so far, but also unlock a new tab & some upgrades.";
        document.getElementById("staged4").innerHTML = "(But have you ever thought that this game might be a minigame of something larger?)";
    }
}, 50);
function stagereset() {
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
    for (var i = 0; i < Ugcount; i++)gupbought[i] = 0;
    for (var i = 0; i < totalchal; i++)chalcomplete[i] = 0;
    gupbought[15] = 1;
    gupbought[17] = 1;
}