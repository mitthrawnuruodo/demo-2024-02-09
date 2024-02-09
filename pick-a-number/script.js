document.title = "Pick a number";
document.querySelector("button#submitme").addEventListener("click", checkNumber);
const msg = document.getElementById("feedback");

function checkNumber() {
    let x = document.getElementById("yournumber").value;
    console.log (x);
    try {
        if(x === "") throw "Please fill in a number";
        if(isNaN(x)) throw "'"+x+"' is not a number";
        x = Number(x);
        if(x < 1) throw ""+x+" is too low";
        if(x > 100) throw ""+x+" is too high";
        msg.style.color = 'green';
        msg.innerHTML = "You've chosen " + x + ((x===42) ? ": The Answer to the Ultimate Question of Life, the Universe, and Everything":": An ordinary Number");    
    } catch (e) {
        console.error(e); 
        msg.style.color = 'red';
        msg.innerHTML = e;
    } finally {
        // Reset the input, no matter what
        document.getElementById("yournumber").value = "";
    }
}