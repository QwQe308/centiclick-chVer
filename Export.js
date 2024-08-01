function base64TemplateMerge(){
    let res=`${clickcount} ${t1-1} ${t2} ${t3} ${t4} ${t5} ${t6} ${pts} ${lastpt} ${bestpt} ${lastgl} ${bestgl} ${glitch} ${glitchcount} ${glitchpower} ${hidecompleted} ${currentchal} ${stage} ${apoint} ${bpoint} ${syscount} ${loc} ${wp} ${tcyc} ${JSON.stringify(goalcomplete)} ${JSON.stringify(gupbought)} ${JSON.stringify(lupbought)} ${JSON.stringify(chalcomplete)}`
    return res;
}
function Export() {
    const base64Template = base64TemplateMerge();
    const encodedData = btoa(base64Template);
    const dummyElement = document.createElement("textarea");
    dummyElement.value = encodedData;
    document.body.appendChild(dummyElement);
    dummyElement.select();
    document.execCommand("copy");
    document.body.removeChild(dummyElement);

    console.log("Encoded data copied to clipboard:");
    console.log(encodedData);
	tl = 3000;
	document.getElementById("completeprom").innerHTML = "Exported to Clipboard!";
}
function Exportintofile() {
    const base64Template = base64TemplateMerge()
    const encodedData = btoa(base64Template);
    const blob = new Blob([encodedData], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'encoded_data.txt';
    link.click();
    URL.revokeObjectURL(url);
    console.log("Encoded data exported to file 'encoded_data.txt'");
	tl = 3000;
	document.getElementById("completeprom").innerHTML = "Exported to file!";
}
/*
function handleFileSelect(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function(event) {
        const base64Data = event.target.result.split(',')[1];
        const decodedData = atob(base64Data);
        const [variable1, variable2] = decodedData.split(' ');
        console.log("Variable 1:", variable1);
        console.log("Variable 2:", variable2);
    };
    reader.readAsDataURL(file);
}
*/
function handleFileSelect(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
        const base64Data = event.target.result.split(',')[1];
        const decodedData = atob(base64Data);
        
        // Extract variables from the decoded data
        const variables = decodedData.split(' ');
        const variable1 = variables[0] || '';
        const variable2 = variables[1] || '';

        // Use the extracted variables as needed
        console.log("Variable 1:", variable1);
        console.log("Variable 2:", variable2);
    };

    reader.readAsDataURL(file);
}
function Importfromfile() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.addEventListener('change', handleFileSelect);
    fileInput.click();
	tl = 3000;
	document.getElementById("completeprom").innerHTML = "Imported from file!";
}
/*
function handlePaste(event) {
    const clipboardData = event.clipboardData || window.clipboardData;
    const pastedData = clipboardData.getData('Text');
    const base64Data = pastedData.trim();
    const decodedData = atob(base64Data);
    const [variable1, variable2] = decodedData.split(' ');
    console.log("Variable 1:", variable1);
    console.log("Variable 2:", variable2);
}
function Import() {
    document.addEventListener('paste', handlePaste);
    console.log("Please paste the base64 data from the clipboard to decode into variables.");
}
*/
function Handle(decodedData){
    var g1,g2,g3,g4;
    [clickcount,t1,t2,t3,t4,t5,t6,pts,lastpt,bestpt,lastgl,bestgl,glitch,glitchcount,glitchpower,hidecompleted,currentchal,stage,apoint,bpoint,syscount,loc,wp,tcyc,g1,g2,g3,g4]=decodedData.split(' ');
    // console.log(g1);
    goalcomplete=JSON.parse(g1);
    // console.log(goalcomplete);
    // console.log(pts);
    // console.log(Decimal(pts));
    // console.log(pts===Decimal(pts));
    gupbought=JSON.parse(g2);
    lupbought=JSON.parse(g3);
    chalcomplete=JSON.parse(g4);
    clickcount=Decimal(clickcount);
    t1=Decimal(t1)+1;
    t2=Decimal(t2);
    t3=Decimal(t3);
    t4=Decimal(t4);
    t5=Decimal(t5);
    t6=Decimal(t6);
    pts=Decimal(pts);
    lastpt=Decimal(lastpt);
    bestpt=Decimal(bestpt);
    lastgl=Decimal(lastgl);
    bestgl=Decimal(bestgl);
    glitch=Decimal(glitch);
    glitchcount=Decimal(glitchcount);
    glitchpower=Decimal(glitchpower);
    hidecompleted==Number(hidecompleted);
    currentchal=Number(currentchal);
    stage=Number(stage);
    apoint=Decimal(apoint);
    bpoint=Decimal(bpoint);
    syscount=Decimal(syscount);
    loc=Decimal(loc);
    wp=Decimal(wp);
    tcyc=Number(tcyc);
	tl = 3000;
	document.getElementById("completeprom").innerHTML = "Imported from Clipboard!";
    Reload();
}
function Import() {
    const encodedData = prompt("Import your save here:");
    const base64Data = encodedData.trim();
    const decodedData = atob(base64Data);
    console.log(decodedData);
    Handle(decodedData);
}