function makeChanges() {
    document.querySelectorAll("img").forEach(element => {
        element.src="timepass.png";
    }); //this forEach loop works only on node lists, which are returned by querySelectorAll..getElementsByClass etc functions dont work with this.
    document.querySelectorAll("h1").forEach(element => {
        element.remove();
    });
    document.querySelectorAll("p").forEach(element => {
        element.innerText="Enough of JavaScript, lets stop.";
    });
    document.querySelectorAll("h2").forEach(element => {
        element.innerText=element.innerText.toUpperCase();
    });
    document.getElementById("div1").innerHTML+="<h3></h3";
}