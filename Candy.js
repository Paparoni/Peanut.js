/*!

Candy JS
~ Simple Javascript Library

 */
(function(window) {
    var document = window.document,
        push = [].push,
        slice = [].slice,
        splice = [].splice,
        forEach = [].forEach;

    function candy(selector) {

        if (!(this instanceof candy)) {
            return new candy(selector);
        }

        if (!selector) {
            return this;
        }

        if (selector instanceof candy) {
            return selector;
        }

        if (selector.nodeType) {
            this[0] = selector;
            this.length = 1;
            return this;
        }

        if (typeof selector === 'string') {
            return push.apply(this, slice.call(document.querySelectorAll(selector)));
        }

        if (typeof selector === 'function') {
            return candy(document).ready(selector);
        }
    };

    candy.prototype = {
        length: 0,

        ready: function(callback) {
            if (/t/.test(document.readyState)) {
                callback(candy);

            } else {
                document.addEventListener('DOMContentLoaded', function() {
                    callback(candy);
                }, false);
            }
        },

        each: function(callback) {
            forEach.call(this, function(el, i) {
                callback.call(el, i, el);
            });
        },

        text: function(value) {
            return 1
        },
        httpGet: function(url) {
            var output, xmlhttp;
            xmlhttp = void 0;
            this.url = url;
            if (window.XMLHttpRequest) {
                xmlhttp = new XMLHttpRequest;
            } else {
                xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
            }
            xmlhttp.onreadystatechange = function() {
                    if (xmlhttp.readyState === XMLHttpRequest.DONE) {
                        if (xmlhttp.status === 200) {
                            document.getElementById('myDiv').innerHTML = xmlhttp.responseText;
                        } else if (xmlhttp.status === 400) {
                            alert('There was an error 400');
                        } else {
                            console.log('Error something else other than 200 was returned');
                        }
                    }
                },
                output = xmlhttp.open('GET', this.url, true);
            xmlhttp.send();
            return output;
        },

        shuffle: function(contents) {
            var output;
            this.contents = contents;
            output = this.contents[Math.floor(Math.random() * this.contents.length)];
            return output;
        },

        rand: function(arg, arg_2) {
            var output;
            output = Math.floor(Math.random() * (arg - arg_2 + 1)) + arg_2;
            return output;
        },

        toVar: function(arg, contains) {
            this.arg = arg;
            this.contains = contains;
            window[arg] = contains;
        },

        write: function(arg, arg2) {
            var w;
            var w;
            if (this.arg2 === true) {
                console.log(this.arg);
            } else if (this.arg2 === void 0) {
                w = document.createElement('div');
                w.textContent = this.arg;
                document.body.appendChild(w);
            } else {
                w = document.createElement('div');
                w.textContent = this.arg;
                document.body.appendChild(w);
            }
        },

        time: function() {
            var ampm, candy_time, d, hour, min;
            d = new Date;
            hour = d.getHours() === 0 ? 12 : d.getHours() > 12 ? d.getHours() - 12 : d.getHours();
            min = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();
            ampm = d.getHours() < 12 ? 'AM' : 'PM';
            candy_time = hour + ':' + min + ' ' + ampm;
            return candy_time;
        },

        contains: function(array, value) {
            this.array = array;
            this.value = value;
            if (this.array.indexOf(this.value) !== -1) {
                return true;
            } else {
                return false;
            }
        },

        newList: function(items, tags) {
            var i, listContainer, listData, listElement, listItem, numberOfListItems;
            this.tags = tags;
            this.items = items;
            listData = this.items;
            listContainer = document.createElement('div');
            document.getElementsByTagName('body')[0].appendChild(listContainer);
            listElement = document.createElement(this.tags[0]);
            listContainer.appendChild(listElement);
            numberOfListItems = listData.length;
            i = 0;
            while (i < numberOfListItems) {
                listItem = document.createElement(this.tags[1]);
                listItem.innerHTML = listData[i];
                listElement.appendChild(listItem);
                ++i;
            }
        },

        getIP: function() {
            return '<!--#echo var="REMOTE_ADDR"-->';
        },
        session: function() {
            this.call = function() {
                console.log("Session Called");
            };

        },

        remove: function(array, value) {
            this.array = array;
            this.value = value;
            var index = this.array.indexOf(this.value);
            if (index > -1) {
                this.array.splice(index, 1);
            }
        },
        merge: function(array, array_2) {
            this.array = array;
            this.array_2 = array_2;
            var output = this.array.concat(this.array_2);
            return output;
        },
        hotkey: function(key, code) {
            this.key = key;
            this.code = code;
            var key1 = this.key;
            var x = '';

            function handler(e) {
                if (document.all) {
                    var evnt = window.event;
                    x = evnt.keyCode;
                } else
                    x = e.charCode;
                if (x == key1) this.code
            }
            if (!document.all) {
                window.captureEvents(Event.KEYPRESS);
                window.onkeypress = handler;
            } else {
                document.onkeypress = handler;
            }


        },
        require: function(path, code) {
            this.path = path;
            this.code = code;
            var script = document.createElement('script');
            script.src = this.path + this.code;
            script.type = 'text/javascript';
            var head = document.getElementsByTagName('head').item(0);
            head.appendChild(script);
        }


    };

    Candy = candy.prototype;
    candy.prototype.splice = splice;

    window.candy = window.$ = candy;
}(window));
