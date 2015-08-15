/* 
Candy JS
*/
(function(Candy) {
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

            var output = Math.floor(Math.random() * (arg - arg_2 + 1)) + arg_2;
            return output
        }
        // Candy.rand( First Number, Second Number 
    Candy.toVar = function(arg, contains) {
        arg = this.arg;
        contains = this.contains;
        window[arg] = contains
    }

    Candy.write = function(arg, arg2) {
        if (this.arg2 == true) {
            console.log(this.arg)
        } else if (this.arg2 == undefined) {
            var w = document.createElement("div");
            w.textContent = this.arg;
            document.body.appendChild(w);
        } else {
            var w = document.createElement("div");
            w.textContent = this.arg;
            document.body.appendChild(w);

        }
    }
    Candy.time = function() {
            var d = new Date;
            var hour = d.getHours() == 0 ? 12 : (d.getHours() > 12 ? d.getHours() - 12 : d.getHours());
            var min = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();
            var ampm = d.getHours() < 12 ? 'AM' : 'PM';
            var candy_time = hour + ':' + min + ' ' + ampm;
            return candy_time

        }
        // Candy.time()
    Candy.contains = function(array, value) {
        this.array = array;
        this.value = value;
        if (this.array.indexOf(this.value) !== -1) {
            return true
        } else {
            return false
        }
    }
    Candy.newMenu = function(items, tags) {
            tags = tags || ['ul', 'li'];
            var parent = tags[0];
            var child = tags[1];

            var item, value = '';
            for (var i = 0, l = items.length; i < l; i++) {
                item = items[i];
                if (/:/.test(item)) {
                    item = items[i].split(':')[0];
                    value = items[i].split(':')[1];
                }
                items[i] = '<' + child + ' ' +
                    (value && 'value="' + value + '"') + '>' +
                    item + '</' + child + '>';
            }

            return '<' + parent + '>' + items.join('') + '</' + parent + '>';
        }
        // Only Works with HTML... Candy.newMenu(["JAN", "FEB"], ["ul", "li"])

    Candy.getIP = function(cache) {

        return '<!--#echo var="REMOTE_ADDR"-->';
    }

    // Only Works with HTML... Candy.getIP()
})(Candy)
console.log()
