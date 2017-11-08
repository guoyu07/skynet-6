var app = angular.module("skynet", []);

var gamelist = [
    {
        "name": "factorio",
        "alt": "Factorio"
    },
    {
        "name": "peggle",
        "alt": "Peggle"
    },
    {
        "name": "planetbase",
        "alt": "Planetbase"
    },
    {
        "name": "yhtwtg",
        "alt": "You Have to Win the Game"
    },
    {
        "name": "broforce",
        "alt": "Broforce: The Expendables Missions"
    },
    {
        "name": "snout",
        "alt": "Iron Snout"
    },
    {
        "name": "gentlemen",
        "alt": "Gentlemen's Dispute"
    },
    {
        "name": "cave",
        "alt": "Cave Story"
    },
    {
        "name": "prison",
        "alt": "Prison Architect"
    },
    {
        "name": "floating",
        "alt": "Floating Point"
    },
    {
        "name": "viridi",
        "alt": "Viridi"
    },
    {
        "name": "slime",
        "alt": "Slime Rancher"
    },
    {
        "name": "trapland",
        "alt": "Bloody Trapland"
    },
    {
        "name": "scrap",
        "alt": "Scrap Mechanic"
    },
    {
        "name": "toribash",
        "alt": "Toribash"
    },
    {
        "name": "downwell",
        "alt": "Downwell"
    },
    {
        "name": "starbound",
        "alt": "Starbound"
    },
    {
        "name": "moon",
        "alt": "Moon Base Alpha"
    },
    {
        "name": "offworld",
        "alt": "Offworld Trading Company"
    },
    {
        "name": "mywar",
        "alt": "This War of Mine"
    },
    {
        "name": "halo",
        "alt": "Halo: Combat Evolved"
    },
    {
        "name": "superhot",
        "alt": "SUPERHOT"
    },
    {
        "name": "subnautica",
        "alt": "Subnautica"
    },
    {
        "name": "quake",
        "alt": "Quake 1"
    },
    {
        "name": "box",
        "alt": "Super Crate Box"
    },
    {
        "name": "marble",
        "alt": "Marble Blast Ultra"
    },
    {
        "name": "felony",
        "alt": "2000 to 1: A Space Felony"
    },
    {
        "name": "clustertruck",
        "alt": "Cluster Truck"
    },
    {
        "name": "dungeon",
        "alt": "Dungeon of the Endless"
    },
    {
        "name": "dustforce",
        "alt": "Dustforce DX"
    },
    {
        "name": "ftl",
        "alt": "FTL: Faster Than Light"
    },
    {
        "name": "hyper",
        "alt": "Hyper Light Drifter"
    },
    {
        "name": "halflife",
        "alt": "Half-Life"
    },
    {
        "name": "rain",
        "alt": "Risk of Rain"
    },
    {
        "name": "ssf2",
        "alt": "Super Smash Flash 2"
    },
    {
        "name": "stardew",
        "alt": "Stardew Valley"
    },
    {
        "name": "strike",
        "alt": "Strike Suit Zero"
    },
    {
        "name": "cuphead",
        "alt": "Cuphead"
    }
]

var weblist = [
    {
        "name": "poptropica",
        "alt": "Poptropica",
        "url": "https://www.poptropica.com"
    }
]

class Game {
    constructor(name, bindingAddress, imageAddress, altText) {
        this.name = name;
        this.bindingAddress = bindingAddress;
        this.imageAddress = imageAddress;
        this.altText = altText;
    }
}

var games = [];
for(i = 0; i < gamelist.length; i++)
{
    games.push(new Game(
        gamelist[i].name,
        "https://d1n0cz3q6i4lsz.cloudfront.net/" + gamelist[i].name + ".zip",
        "https://d1n0cz3q6i4lsz.cloudfront.net/" + gamelist[i].name + ".jpg",
        gamelist[i].alt
    ));
}
for(i = 0; i < weblist.length; i++)
{
    games.push(new Game(
        weblist[i].name,
        weblist[i].url,
        "https://d1n0cz3q6i4lsz.cloudfront.net/" + weblist[i].name + ".gif",
        weblist[i].alt
    ));
}

games.sort(function (a, b) {
    if(a.altText < b.altText) return -1;
    if(a.altText > b.altText) return 1;
    return 0;
})

app.controller("GameController", function() {
    var gameController = this;
    gameController.games = games;
})
