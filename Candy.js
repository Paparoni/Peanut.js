/*!

Candy JS
~ Simple Javascript Library

 */
(function(window) {
    var document = window.document,
        session_called = false
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
            w = document.createElement('div');
            w.textContent = this.arg;
            document.body.appendChild(w);
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
                return session_called = true
            };
            this.get = function() {
                if (session_called == true) {
                    return Candy
                }
            }
            this.ENV = function() {
                if (session_called == true) {
                    var OSName = "Unknown OS";
                    if (navigator.appVersion.indexOf("Win") != -1) OSName = "Windows";
                    if (navigator.appVersion.indexOf("Mac") != -1) OSName = "MacOS";
                    if (navigator.appVersion.indexOf("X11") != -1) OSName = "UNIX";
                    if (navigator.appVersion.indexOf("Linux") != -1) OSName = "Linux";
                    return OSName
                } else {
                    console.log("Could not establish a connection session.")
                    alert("Could not establish a connection session.")
                }
            }


        },
        newHotKey: function(key, code) {
            this.code = code;
            this.key = key;
            var script = this.code;

            function doc_keyUp(e) {

                // this would test for whichever key is 40 and the ctrl key at the same time
                if (e.ctrlKey && e.keyCode == this.key) {
                    // call your function to do the thing
                    script;
                }
            }
            document.addEventListener('keyup', doc_keyUp, false);
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

        require: function(code) {
            this.code = code;
            var script = document.createElement('script');
            script.src = this.code;
            script.type = 'text/javascript';
            var head = document.getElementsByTagName('head').item(0);
            head.appendChild(script);
        },

        sound: function(source, volume, loop) {
            this.source = source;
            this.volume = volume;
            this.loop = loop;
            var son;
            this.son = son;
            this.finish = false;
            this.stop = function() {
                document.body.removeChild(this.son);
            }
            this.start = function() {
                if (this.finish) return false;
                this.son = document.createElement("embed");
                this.son.setAttribute("src", this.source);
                this.son.setAttribute("hidden", "true");
                this.son.setAttribute("volume", this.volume);
                this.son.setAttribute("autostart", "true");
                this.son.setAttribute("loop", this.loop);
                document.body.appendChild(this.son);
            }
            this.remove = function() {
                document.body.removeChild(this.son);
                this.finish = true;
            }
            this.init = function(volume, loop) {
                this.finish = false;
                this.volume = volume;
                this.loop = loop;
            }
        }


    };

    Candy = candy.prototype;
    candy.prototype.splice = splice;

    window.candy = window.$ = candy;
}(window));
