console.log("test 1");

function showOutput(){
    let name = document.querySelector("#first-name").value;
    document.querySelector('#output').textContent = "hello "+name;
}
document.querySelector('#btn').addEventListener('click',showOutput);
