/* 

Candy JS

*/
var Candy = this.Candy = {};
Candy.httpGet = function(url) {
    function http(URL) {
        var candyHttp = new XMLHttpRequest();
        candyHttp.open("GET", this.URL, false);
        candyHttp.send(null);
        return candyHttp.responseText;
    }
    return http(this.url)
}

// Candy.httpGet( URL )


Candy.shuffle = function(contents) {
    this.contents = contents;
    var output = this.contents[Math.floor(Math.random() * this.contents.length)];
    return output;
}

// Candy.shuffle( Array )

Candy.rand = function(arg, arg_2) {

        var output = Math.random() * (arg - arg_2) + arg_2;
        return output
    }
    // Candy.rand( First Number, Second Number )
