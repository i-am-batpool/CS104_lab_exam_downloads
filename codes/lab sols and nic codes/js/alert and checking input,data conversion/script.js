function checkRating()
{
    //TODO: Complete this fucntion as stated in the problem statement
    //This function doesn't take any parameters nor return any value.
    let inp = document.getElementById("rating_input").value;
    if (!inp){
        alert("Invalid Response. Try again, please!");
        return;
    }
    inp=parseInt(inp);
    if (!(0<=inp && inp<=10)){
        alert("Invalid Response. Try again, please!");
        return;
    }
    alert("Thank you for your response!");
}
