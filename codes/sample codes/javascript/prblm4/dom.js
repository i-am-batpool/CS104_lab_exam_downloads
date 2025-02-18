function makeChanges() {
    document.querySelectorAll("img").forEach(element => {
        element.src="timepass.png";
    });
    document.querySelectorAll("h1").forEach(element => {
        element.remove();
    });
    document.querySelectorAll("p").forEach(element => {
        element.innerText="Enough of JavaScript, lets stop.";
    });
    document.querySelectorAll("h2").forEach(element => {
        element.innerText=element.innerText.toUpperCase();
    });

    document.querySelectorAll("#d1").forEach(element => {
        element.innerHTML+="<h3></h3>"
    }) /* doesnt work */

    document.getElementById("d1").innerHTML+="<div3></div3"; /* works */
}