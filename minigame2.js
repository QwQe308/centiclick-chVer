var bpoint = 0;
var prob = [
    [
        "Hevipelle is from Finland.",
        "Glitter, Vomitus and Neon",
        "+ERABY+E CONNEC+10N",
        "Fast-growing Hierachy",
        "https://netheriteingot.github.io/centiclick/",
        "Newsticker Idle",
        "Hit me with the hardcore",
        "Glitched Reality",
        "Malfunctioning Reality",
        "Meta Reality",
        "Galaxy (+ego)",
        "Abstruse Dilemma 2112112",
        "M28",
        "ky btwn W and R brokn, snd nw typr ASAP.",
        ".o0.OoO",
        "Platonic is an MIT graduate.",
        "java.lang.IndexOutOfBoundException",
        "ad astra per aspera",
        "Antimatter Dimensions",
        "ruarua.ru",
        "CaSO4 + BaCO3 === BaSO4 + CaCO3",
        "awWhy",
        "Fractured Angel",
        "Now is the time, Do it",
        "Re: End of a Dream",
        "Game under construction, all mechanics must wear hardcaps.",
        "Time Studies",
        "Void Tear",
        "Donald Trump",
        "Arcana Eden",
        "Compute it with some devilish alcoholic steampunk engines",
        "Fracture Ray",
        "Grievous Lady",
        "Don't Never Around",
        "El Condor Pasa",
        "Meameamealokkapoowa oompa",
        "Made by l319836.js",
        "sasakure.UK vs. TJ.Hangneil",
        "World Ender",
        "Infinite Strife,",
        "Innumerably Construct",
        "Paradoxically Attain",
        "Existencially Prolong",
        "Linguistically Expand",
        "Cosmically Duplicate",
        "Eternal Flow"
    ],
    [
        "annihilation",
        "a-ooga",
        "googology",
        "Mississippi",
        "centiclick",
        "tertiary",
        "Kabbalah",
        "Vitation",
        "camellia",
        "armageddon",
        "DABCABCD",
        "polyploid",
        "antimatter",
        "Hevipelle",
        "suspicious",
        "development",
        "behaviour",
        "Pneumonia",
        "ruarua.ru",
        "lowiro",
        "subscribe",
        "concvssion",
        "discrepancy",
        "aluminium",
        "underground",
        "assassination",
        "turbulence",
        "infinite",
        "eternal",
        "minigame",
        "notation",
        "referee",
        "mopemope"
    ],
    [
        "+ERABY+E CONNEC+10N",
        "Cipher:/2&//<|0",
        "pars\\ey",
        "You have 616 candies. \\_/",
        "Ante matter d'mansions",
        "C:\\Windows\\System32\\cmd.exe",
        "ruarua.ru",
        "CaSO4 + BaCO3 === BaSO4 + CaCO3",
        "1.7976e+308",
        "This message is written on Jul 23 2024!",
        "One, Two, Three, Fire!",
        "https://netheriteingot.github.io/centiclick/",
        "DESTRUCTION 3,2,1",
        "Destr0yer",
        "DataErr0r",
        "var tql = [1, 1.05, 1.1];",
        "minecraft:lava_bucket",
        "Made by l319836.js",
        "#1f1e33",
        "lchzh3473"
    ],
    [
        "JunXion Between Life and Death",
        "CaSe sENsItIVe",
        "PRAGMATISM -RESURRECTION-",
        "INFiNiTE ENERZY ~Overdoze~",
        "CaSO4 + BaCO3 === BaSO4 + CaCO3",
        "VisuaL StudiO CodE",
        "LeaF HyuN NceS",
        "DESTRUCTION 3,2,1",
        "+ERABY+E CONNEC+10N"
    ],
    [
        "@l319836, You have got into a higher dimension!",
        "DESTRUCTION 3,2,1",
        "This message is written on Jul 23 2024!",
        "+ERABY+E CONNEC+10N",
        "Antimatter Dimensions",
        "Platonic is an MIT graduate.",
        "1.7976e+308",
        "INFiNiTE ENERZY ~Overdoze~",
        "El Condor Pasa"
    ]
]
var probname = [
    "Click all the vowels (a,e,i,o,u) in the following sentence:",
    "Click all the characters that only appears once in the following word:",
    "Click all the characters that are not letters or spaces in the following sentence:",
    "Click all the uppercase consonants in the following sentence:",
    "Click all the characters that have an odd ASCII code."
]
var det = 0, probnum = 0;
var stdans = "", curans = "";
function switchstate(num) {
    if (curans[num] == '0') {
        var tmp1 = "";
        for (var i = 0; i < curans.length; i++)tmp1 += (i == num ? "1" : curans[i]);
        curans = tmp1;
        document.getElementById("word" + num).style.backgroundColor = "rgb(30,30,30)";
    }
    else {
        var tmp1 = "";
        for (var i = 0; i < curans.length; i++)tmp1 += (i == num ? "0" : curans[i]);
        curans = tmp1;
        document.getElementById("word" + num).style.backgroundColor = "black";
    }
}
var esp = 0;
function loadgame() {
    document.getElementById("bpt").innerHTML = "You have " + bpoint + " B-points.";
    esp = 1;
    console.log("load");
    if (bpoint >= 100) Exitmg2();
    stdans = "", curans = "";
    document.getElementById("connf").innerHTML = "Confirm";
    document.getElementById("res").innerHTML = "";
    det = Math.floor(Math.random() * 100);
    if (det <= 38) det = 0;
    else if (det <= 77) det = 1;
    else if (det <= 87) det = 2;
    else if (det <= 97) det = 3;
    else det = 4;
    document.getElementById("que").innerHTML = probname[det];
    var s = "";
    probnum = Math.floor(Math.random() * prob[det].length);
    for (var i = 0; i < prob[det][probnum].length; i++) {
        curans += "0";
        s += "<div id=\"word" + i + "\" onclick=\"switchstate(" + i + ")\" style=\"font-size: 22px; color: white;" + (prob[det][probnum][i] == ' ' ? " width: 10px;" : "") + "\">" + prob[det][probnum][i] + "</div>";
    }
    document.getElementById("prob").innerHTML = s;
}
function confrrr() {
    if (esp == 0) loadgame();
    else {
        console.log("confirm");
        stdans = ans[det][probnum];
        if (curans == stdans) {
            document.getElementById("res").innerHTML = "Correct!";
            bpoint += 1;
        }
        else {
            document.getElementById("res").innerHTML = "Wrong!";
            bpoint -= (5 + Math.floor(bpoint / 20));
            bpoint = Math.max(bpoint, 0);
        }
        document.getElementById("connf").innerHTML = "Continue";
        esp = 0;
    }
    document.getElementById("bpt").innerHTML = "You have " + bpoint + " B-points.";
}
function Exitmg2() {
    document.getElementById("mg2").style.zIndex = "-50";
    document.getElementById("mg2").style.display = "none";
    document.getElementById("connf").style.display = "none";
}
function Entermg2() {
    document.getElementById("mg2").style.zIndex = "110";
    document.getElementById("mg2").style.display = "flex";
    document.getElementById("connf").style.display = "";
    loadgame();
}