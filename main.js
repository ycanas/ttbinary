const buttonBinary = document.getElementById('buttonBinary');
const buttonText = document.getElementById('buttonText');

buttonBinary.onclick = function(){
    const divOutput = document.getElementById('divOutput');
    const input = document.getElementById('inputText').value;
    let output = "";

    if(input == ''){
        divOutput.innerHTML = "";
        document.getElementById('divOutput').className = "";
        return;
    }

    for(let i = 0; i < input.length; i++){
        let binary = input.charCodeAt(i).toString(2).toString();
        output += Array(8-binary.length+1).join('0')+binary+" ";
    }

    document.getElementById('inputText').value = "";
    divOutput.className = "alert alert-success mx-auto";
    divOutput.innerHTML = `${output.trim()}`;
}

buttonText.onclick = function(){
    const divOutput = document.getElementById('divOutput');
    const input = document.getElementById('inputText').value.split(' ');
    let output = "";

    for(let i = 0; i < input.length; i++){
        if(isNaN(parseInt(input[0], 2))){
            document.getElementById('inputText').value = "";
            divOutput.className = "alert alert-success mx-auto";
            divOutput.innerHTML = "Tipo de texto inválido";
            return;
        }

        if(parseInt(input[0], 2) < 32){
            divOutput.innerHTML = "";
            divOutput.className = "";
            document.getElementById('inputText').value = "";
            return;
        }

        output += String.fromCharCode(parseInt(input[i], 2));
    }

    document.getElementById('inputText').value = "";
    divOutput.className = "alert alert-success mx-auto";
    divOutput.innerHTML = `${output.trim()}`;
}
