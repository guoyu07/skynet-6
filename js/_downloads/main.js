var searchbox = document.getElementById("searchbox");

searchbox.onkeyup = function() {
    var games = document.getElementByClassName("game-image");
    if(searchbox.value === "")
    {
        for(i = 0; i < games.length; i++)
        {
            if(!games[i].alt.includes(searchbox.value)) {
                games[i].parentElement.parentElement.innerHTML.style.display = "none";
            }
            else {
                games[i].parentElement.parentElement.innerHTML.style.display = "block";
            }
        }
    }
    else {
        for(i = 0; i < games.length; i++)
        {
            games[i].parentElement.parentElement.innerHTML.style.display = "block";
        }
    }
}
