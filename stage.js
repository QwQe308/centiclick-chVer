var stage = 0;
var totalstage = 4;
var stageresetreq = [7.99e+12, 7.99e+28, 9.99e+38, 3.99e+65];
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
        document.getElementById("staged1").innerHTML = "The End";
        document.getElementById("staged2").innerHTML = "JrsY28b9Ef0yEtrn3p9onw==";
        document.getElementById("staged2").style.width = "550px";
        document.getElementById("staged3").innerHTML = "Paste your completion ticket above ^";
        document.getElementById("staged4").innerHTML = "But have you ever thought that this game might be a minigame of something larger?";
    }
    document.getElementById("stage").style.display = "flex";
    if (stage == 5) document.getElementById("staged2").onclick = "";
}
function closestage() {
    document.getElementById("stage").style.display = "none";
    Reload();
}
setInterval(function () {
    if (glitch >= stageresetreq[stage]) {
        stagereset();
        stage++;
        showstage();
        Reload();
    }
    if (stage == 5) {
        document.getElementById("staged1").innerHTML = "The End";
        document.getElementById("staged2").innerHTML = "JrsY28b9Ef0yEtrn3p9onw==";
        document.getElementById("staged2").style.width = "550px";
        document.getElementById("staged3").innerHTML = "Paste your completion ticket above ^";
        document.getElementById("staged4").innerHTML = "But have you ever thought that this game might be a minigame of something larger?";
    }
}, 50);
function stagereset() {
    currentchal = 0;
    pendingchal = 0;
    glitchcount = 0;
    lastgl = 0;
    bestgl = 0;
    glitch = 0
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
    for (var i = 0; i < Ugcount; i++)gupbought[i] = 0;
    for (var i = 0; i < totalchal; i++)chalcomplete[i] = 0;
    gupbought[15] = 1;
}