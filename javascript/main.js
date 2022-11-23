const button = document.getElementById('button');

button.onclick = function(){
    const divOutput = document.getElementById('divOutput');
    const input = document.getElementById('input').value;
    let output = "";

    for(let i = 0; i < input.length; i++){
        let binary = input.charCodeAt(i).toString(2).toString();
        output += Array(8-binary.length+1).join('0')+binary+" ";
    }

    document.getElementById('input').value = "";
    divOutput.className = "alert alert-success mx-auto";
    divOutput.innerHTML = `${output.trim()}`;
}
