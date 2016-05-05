/*

 Simple JSON translator
 Translates any language to Spanish, English, or Russian
 Created by: Cleomedes for Peanut.js function testing.
 
 */
var log_array = [];

function log(text) {
    this.text = text;
    log_array.push(text);
}
$(document).ready(function() {
    $("#savelog").click(function() {
        var blob_save = log_array.toString().split(',').join(' ');
        var blob = new Blob([blob_save], {
            type: "text/plain;charset=utf-8"
        });
        saveAs(blob, "log.txt");
    })
    $("#log").hide()
    $("#translate").click(function() {

        bootbox.dialog({
            message: "Choose language to convert to ",
            title: "Choose language to conver to",
            buttons: {
                success: {
                    label: "Spanish",
                    className: "btn-primary",
                    callback: function() {
                        bootbox.prompt("What would you like to translate", function(result) {
                            Peanut.loadJSON("https://translate.yandex.net/api/v1.5/tr.json/detect?key=trnsl.1.1.20160503T130721Z.febfceae36b8944c.5671ad1d6b9648cadc9815344695c9448a29c665&text=" + encodeURIComponent(result), function(response) {
                                var parsed_lang = JSON.parse(response);
                                var lang = parsed_lang.lang;
                                var translate_query = result
                                Peanut.loadJSON("https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20160503T130721Z.febfceae36b8944c.5671ad1d6b9648cadc9815344695c9448a29c665&lang=" + encodeURIComponent(lang) + "-es&text=" + encodeURIComponent(translate_query), function(response) {
                                    $("#translated").html("<font color=\"blue\" size=14><center>" + JSON.parse(response).text + "</center></font>");
                                    log(Peanut.time() + ": Translated \"" + result + "\" to \"" + JSON.parse(response).text + "\"\r\n");
                                });
                            })

                        });
                    }
                },
                danger: {
                    label: "English",
                    className: "btn-primary",
                    callback: function() {
                        bootbox.prompt("What would you like to translate", function(result) {
                            Peanut.loadJSON("https://translate.yandex.net/api/v1.5/tr.json/detect?key=trnsl.1.1.20160503T130721Z.febfceae36b8944c.5671ad1d6b9648cadc9815344695c9448a29c665&text=" + encodeURIComponent(result), function(response) {
                                var parsed_lang = JSON.parse(response);
                                var lang = parsed_lang.lang;
                                var translate_query = result
                                Peanut.loadJSON("https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20160503T130721Z.febfceae36b8944c.5671ad1d6b9648cadc9815344695c9448a29c665&lang=" + encodeURIComponent(lang) + "-en&text=" + encodeURIComponent(translate_query), function(response) {
                                    $("#translated").html("<font color=\"blue\" size=14><center>" + JSON.parse(response).text + "</center></font>");
                                    log(Peanut.time() + ": Translated \"" + result + "\" to \"" + JSON.parse(response).text + "\"\r\n");


                                });
                            })

                        });
                    }
                },
                main: {
                    label: "Russian",
                    className: "btn-primary",
                    callback: function() {
                        bootbox.prompt("What would you like to translate", function(result) {
                            Peanut.loadJSON("https://translate.yandex.net/api/v1.5/tr.json/detect?key=trnsl.1.1.20160503T130721Z.febfceae36b8944c.5671ad1d6b9648cadc9815344695c9448a29c665&text=" + encodeURIComponent(result), function(response) {
                                var parsed_lang = JSON.parse(response);
                                var lang = parsed_lang.lang;
                                var translate_query = result
                                Peanut.loadJSON("https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20160503T130721Z.febfceae36b8944c.5671ad1d6b9648cadc9815344695c9448a29c665&lang=" + encodeURIComponent(lang) + "-ru&text=" + encodeURIComponent(translate_query), function(response) {
                                    $("#translated").html("<font color=\"blue\" size=14><center>" + JSON.parse(response).text + "</center></font>");

                                    log(Peanut.time() + ": Translated \"" + result + "\" to \"" + JSON.parse(response).text + "\"\r\n");

                                });
                            })

                        });
                    }
                }
            }
        });

    })
})
