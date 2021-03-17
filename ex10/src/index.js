function myFunction() {
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            release_year: 1973,
            formats: {
                1: "CD",
                2: "BT",
                3: "LP"
            },
            gold: true
        },
        002: {
            // Ad a record here
            artist: "Imagine Dragons",
            title: "Evolve",
            release_year: 2017,
            formats: {
                1: "DL",
                2: "CS",
                3: "PP"
        },
    }
}; return myMusic;
}
myFunction()[2];
console.log(myFunction()[2]);
module.exports = myFunction;