
document.getElementById("randomBtn").addEventListener("click", function(){
    let colors = ["Red", "green", "yellow", "purple", "orange"];
    let random = colors[Math.floor(Math.random()*colors.length)];
    document.body.style.backgroundColor = random;
    document.getElementById("text").innerText = "Background: " + random;
});

document.getElementById("picker").addEventListener("input", function(){
    let color = this.value;
    document.body.style.backgroundColor = color;
    document.getElementById("text").innerText = "Background: " + color;
});

document.getElementById("resetBtn").addEventListener("click", function(){
    document.body.style.backgroundColor = "white";
    document.getElementById("text").innerText = "Click a button to change color"; 
});
