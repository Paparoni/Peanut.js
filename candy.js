(function(window){var document=window.document,session_called=false
push=[].push,slice=[].slice,splice=[].splice,forEach=[].forEach;function candy(selector){if(!(this instanceof candy)){return new candy(selector);}
if(!selector){return this;}
if(selector instanceof candy){return selector;}
if(selector.nodeType){this[0]=selector;this.length=1;return this;}
if(typeof selector==='string'){return push.apply(this,slice.call(document.querySelectorAll(selector)));}
if(typeof selector==='function'){return candy(document).ready(selector);}};var Error={session:function(){console.log("Could not establish a connection session.")
alert("Could not establish a connection session.")}};candy.prototype={length:0,ready:function(callback){if(/t/.test(document.readyState)){callback(candy);}else{document.addEventListener('DOMContentLoaded',function(){callback(candy);},false);}},each:function(callback){forEach.call(this,function(el,i){callback.call(el,i,el);});},text:function(value){return 1},httpGet:function(url){var xmlHttp=new XMLHttpRequest();xmlHttp.open("GET",url,false);xmlHttp.send(null);return xmlHttp.responseText;},shuffle:function(contents){var output;this.contents=contents;output=this.contents[Math.floor(Math.random()*this.contents.length)];return output;},rand:function(arg,arg_2){var output;output=Math.floor(Math.random()*(arg-arg_2+1))+arg_2;return output;},toVar:function(arg,contains){this.arg=arg;this.contains=contains;window[arg]=contains;},write:function(arg,arg2){var w;w=document.createElement('div');w.textContent=this.arg;document.body.appendChild(w);},time:function(){var ampm,candy_time,d,hour,min;d=new Date;hour=d.getHours()===0?12:d.getHours()>12?d.getHours()-12:d.getHours();min=d.getMinutes()<10?'0'+d.getMinutes():d.getMinutes();ampm=d.getHours()<12?'AM':'PM';candy_time=hour+':'+min+' '+ampm;return candy_time;},contains:function(arg,value){if(typeof arg==='string'){if(arg.indexOf(value)>-1){return true;}else{return false;}}else{if(arg.indexOf(value)!==-1){return true;}else{return false;}}},newList:function(items,tags){var i,listContainer,listData,listElement,listItem,numberOfListItems;this.tags=tags;this.items=items;listData=this.items;listContainer=document.createElement('div');document.getElementsByTagName('body')[0].appendChild(listContainer);listElement=document.createElement(this.tags[0]);listContainer.appendChild(listElement);numberOfListItems=listData.length;i=0;while(i<numberOfListItems){listItem=document.createElement(this.tags[1]);listItem.innerHTML=listData[i];listElement.appendChild(listItem);++i;}},session:function(){this.call=function(){return session_called=true};this.get=function(){if(session_called==true){return Candy}};this.getIP=function(){var x_ip=Candy.httpGet("https://api.ipify.org/?format=json")
var y_ip=JSON.parse(x_ip)
var output=y_ip.ip
return output};this.ENV=function(){if(session_called==true){var OSName="Unknown OS";if(navigator.appVersion.indexOf("Win")!=-1)OSName="Windows";if(navigator.appVersion.indexOf("Mac")!=-1)OSName="MacOS";if(navigator.appVersion.indexOf("X11")!=-1)OSName="UNIX";if(navigator.appVersion.indexOf("Linux")!=-1)OSName="Linux";return OSName}else{console.log("Could not establish a connection session.")
alert("Could not establish a connection session.")}};this.Browser=function(){if(session_called==true){var isOpera=!!window.opera||navigator.userAgent.indexOf(' OPR/')>=0;var isFirefox=typeof InstallTrigger!=='undefined';var isSafari=Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor')>0;var isChrome=!!window.chrome&&!isOpera;var isIE=/*@cc_on!@*/ false||!!document.documentMode;if(isOpera==true){return'Opera'}else if(isFirefox==true){return'Firefox'}else if(isChrome==true){return'Chrome'}else if(isIE==true){return'Internet Explorer'}}else{Error.session();}}},newHotKey:function(key,code){this.code=code;this.key=key;var script=this.code;function doc_keyUp(e){if(e.ctrlKey&&e.keyCode==this.key){script;}}
document.addEventListener('keyup',doc_keyUp,false);},isArray:function(arg){return Object.prototype.toString.call(arg)==='[object Array]';},remove:function(array,value){this.array=array;this.value=value;var index=this.array.indexOf(this.value);if(index>-1){this.array.splice(index,1);}},merge:function(array,array_2){this.array=array;this.array_2=array_2;var output=this.array.concat(this.array_2);return output;},require:function(code){this.code=code;var script=document.createElement('script');script.src=this.code;script.type='text/javascript';var head=document.getElementsByTagName('head').item(0);head.appendChild(script);},newCookie:function(name,value,days){var expires="",date;if(days){date=new Date();date.setTime(date.getTime()+(days*24*60*60*1000));expires="; expires="+date.toGMTString();}
document.cookie=name+"="+value+expires+"; path=/";},readCookie:function(name){var nameEQ=name+"=",ca=document.cookie.split(';'),i,c;i=ca.length;while(i--){c=ca[i];while(c.charAt(0)===' '){c=c.substring(1,c.length);}
if(c.indexOf(nameEQ)===0){return c.substring(nameEQ.length,c.length);}}
return null;},removeCookie:function(name){makeCookie(name,'',-1);},addLoadEvent:function(func){var oldonload=window.onload;if(typeof window.onload!=='function'){window.onload=func;}else{window.onload=function(){if(oldonload){oldonload();}
func();};}},isInt:function(str){return(/^-?\d+$/.test(str));},sound:function(source,volume,loop){this.source=source;this.volume=volume;this.loop=loop;var son;this.son=son;this.finish=false;this.stop=function(){document.body.removeChild(this.son);}
this.start=function(){if(this.finish)return false;this.son=document.createElement("embed");this.son.setAttribute("src",this.source);this.son.setAttribute("hidden","true");this.son.setAttribute("volume",this.volume);this.son.setAttribute("autostart","true");this.son.setAttribute("loop",this.loop);document.body.appendChild(this.son);}
this.remove=function(){document.body.removeChild(this.son);this.finish=true;}
this.init=function(volume,loop){this.finish=false;this.volume=volume;this.loop=loop;}}};Candy=candy.prototype;candy.prototype.splice=splice;window.candy=window.$=candy;}(window));
