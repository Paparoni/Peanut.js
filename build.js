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
        return http(this.url);
    };

    // Candy.httpGet( URL )


    Candy.shuffle = function(contents) {
        this.contents = contents;
        var output = this.contents[Math.floor(Math.random() * this.contents.length)];
        return output;
    };

    // Candy.shuffle( Array )

    Candy.rand = function(arg, arg_2) {

            var output = Math.floor(Math.random() * (arg - arg_2 + 1)) + arg_2;
            return output;
        };
        // Candy.rand( First Number, Second Number 
    Candy.toVar = function(arg, contains) {
        arg = this.arg;
        contains = this.contains;
        window[arg] = contains;
    };

    Candy.write = function(arg, arg2) {
        if (this.arg2 == true) {
            console.log(this.arg);
        } else if (this.arg2 == undefined) {
            var w = document.createElement("div");
            w.textContent = this.arg;
            document.body.appendChild(w);
        } else {
            var w = document.createElement("div");
            w.textContent = this.arg;
            document.body.appendChild(w);

        }
    };
    Candy.time = function() {
            var d = new Date();
            var hour = d.getHours() == 0 ? 12 : (d.getHours() > 12 ? d.getHours() - 12 : d.getHours());
            var min = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();
            var ampm = d.getHours() < 12 ? 'AM' : 'PM';
            var candy_time = hour + ':' + min + ' ' + ampm;
            return candy_time;

        };
        // Candy.time()
    Candy.contains = function(array, value) {
        this.array = array;
        this.value = value;
        if (this.array.indexOf(this.value) !== -1) {
            return true;
        } else {
            return false;
        }
    };
    Candy.newList = function(items, tags) {
            this.tags = tags;
            this.items = items;

            // Establish the array which acts as a data source for the list
            var listData = this.items;

            // Make a container element for the list - which is a <div>
            // You don't actually need this container to make it work
            var listContainer = document.createElement("div");

            // add it to the page
            document.getElementsByTagName("body")[0].appendChild(listContainer);

            // Make the list itself which is a <ul>
            var listElement = document.createElement(this.tags[0]);

            // add it to the page
            listContainer.appendChild(listElement);

            // Set up a loop that goes through the items in listItems one at a time
            var numberOfListItems = listData.length;

            for (var i = 0; i < numberOfListItems; ++i) {

                // create a <li> for each one.
                var listItem = document.createElement(this.tags[1]);

                // add the item text
                listItem.innerHTML = listData[i];

                // add listItem to the listElement
                listElement.appendChild(listItem);

            }

        };
        // Only Works with HTML... Candy.newMenu(["JAN", "FEB"], ["ul", "li"])

    Candy.getIP = function() {

        return '<!--#echo var="REMOTE_ADDR"-->';
    };

    // Only Works with HTML... Candy.getIP()

