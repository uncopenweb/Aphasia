dojo.provide('compapp');

dojo.declare('compapp',[], {

        constructor: function() {
            uow.getAudio().addCallback(this.start);
        },
        
        start: function(audio) { 
            this.audio = audio;
            var toolbar = dojo.create("div", {className:"toolbar"},dojo.body());
            var deBody = dojo.create("div", {className:"panel",selected:"true", id:""}, dojo.body());
            
            this.createTabs();
            
            var imgTable = dojo.create("table",{id:"#tTable",selected:"true",style:{"border-collapse":"collapse","border":"1px solid black","font-size": "75%","width":"99.9%"}},toolbar);
            var tr = dojo.create("tr",{id:"#tTr",style:{"border-collapse":"collapse"}},imgTable);
            dojo.forEach(topTabs, function(tab) {
                var td = dojo.create("td",{id:"#tTd",align:"center",style:{"border-right-style":"1px solid black","width":"33.3%"}}, tr);
                var caption = dojo.create("div",{innerHTML:tab.nameTag, selected:"true", style:{"align":"center"}},td);
                var a = dojo.create("a",{href:tab.name},td);
                var image = dojo.create("img",{src:tab.image, height:"45px", width:"50px"}, a);
                dojo.connect(a, 'onmouseup', function() {
                    if (currentTab != tab) {
                        if (currentTab!=null) {
                            if (currentTab.nameTag!=null) {
                                document.getElementById(currentTab.nameTag).setAttribute("selected","false");
                            }
                            else {
                                document.getElementById("form").setAttribute("selected","false");
                            }
                        }
                        currentTab = tab;
                        a.href = tab.name;
                        document.getElementById(currentTab.nameTag).setAttribute("selected","true");
                    }
                    else {
                        a.href = "javascript://";
                    }
                });
            });
            
            var leftTable = dojo.create("table",{id:"sideTable",style:{"width":'12.5%',"height":'80%'},selected:"true"},dojo.body());
                //var tr = dojo.create("tr",null,leftTable);
                var td = dojo.create("table",{id:"sidetd1",style:{"height":"25%","width":'100%'}, innerHTML:"Please give me a moment to respond."},leftTable);
                    dojo.connect(td, 'onmouseup',dojo.hitch(this,playSound,"Please give me a moment to respond."));
                //var tr = dojo.create("tr",null,leftTable);
                var td = dojo.create("table",{id:"sidetd1",style:{"height":"25%","width":'100%'}, innerHTML:"I don't understand"},leftTable);
                    dojo.connect(td, 'onmouseup',dojo.hitch(this,playSound,"I don't understand"));
                //var tr = dojo.create("tr",null,leftTable);
                var td = dojo.create("table",{id:"sidetd1",style:{"height":"25%","width":'100%'},innerHTML:"Can you repeat that, please?"},leftTable);
                    dojo.connect(td, 'onmouseup',dojo.hitch(this,playSound,"Can you repeat that, please?"));
                //var tr = dojo.create("tr",null,leftTable);
                var td = dojo.create("table",{id:"sidetd1",style:{"height":"25%","width":'100%'}, innerHTML:"I need help."},leftTable);
                    dojo.connect(td, 'onmouseup',dojo.hitch(this,playSound,"I need help"));
            
            var rightTable = dojo.create("table",{id:"sideTable",style:{"width":"12.5%","height":"80%","left":"87.5%"},selected:"true"},dojo.body());
            //var tr = dojo.create("tr",{style:{"width":'12.5%'}},rightTable);
            var td = dojo.create("table",{id:"sidetd2",style:{"height":"50%","width":'100%'}, innerHTML:"Display Text Button"},rightTable);
                dojo.connect(td,'onmouseup',dojo.hitch(this,display));
            //var tr = dojo.create("tr",{style:{"width":'12.5%'}},rightTable);
            var td = dojo.create("table",{id:"sidetd2",style:{"height":"50%","width":'100%'}, innerHTML:"Keyboard Button"},rightTable);
                dojo.connect(td,'onmouseup',function() {
                    if (currentTab != document.getElementById("form")) {
                        if (currentTab!=null) {
                            document.getElementById(currentTab.nameTag).setAttribute("selected","false");
                        }
                        currentTab = document.getElementById("form");
                        td.href = "form";
                        currentTab.setAttribute("selected","true");
                    }
                    else {
                        td.href = "javascript://";
                    }
                });
            
            var footer = dojo.create("div",{className:"menu",selected:"true"},dojo.body());
    
            var imgTable2 = dojo.create("table",{id:"#tTable",selected:"true",style:{"border-collapse":"collapse","border":"1px solid black","font-size": "75%","width":"99.9%","height":"17%"}, height:"17%"},footer);
            var tr = dojo.create("tr",null,imgTable2);
            dojo.forEach(bottomTabs, function(tab) {
                var td = dojo.create("td",{align:"center",style:{"width":"33.3%","border-right-style":"1px solid black","padding-top":"10px","padding-bottom":"25px"}}, tr);
                var caption = dojo.create("div",{innerHTML:tab.nameTag, selected:"true", style:{"align":"center"}},td);
                var a = dojo.create("a",{href:tab.name},td);
                var image = dojo.create("img",{src:tab.image, height:"45px", width:"50px"}, a);
                dojo.connect(a, 'onmouseup', function() {
                    if (currentTab != tab) {
                        if (currentTab!=null) {
                            if (currentTab.nameTag!=null) {
                                document.getElementById(currentTab.nameTag).setAttribute("selected","false");
                            }
                            else {
                                document.getElementById("form").setAttribute("selected","false");
                            }
                        }
                        currentTab = tab;
                        a.href = tab.name;
                        document.getElementById(currentTab.nameTag).setAttribute("selected","true");
                    }
                    else {
                        a.href = "javascript://";
                    }
                });
            });
        },
        
        createTabs: function() {
            dojo.forEach(topTabs, function(tab) {
                var div = dojo.create("div",{id:tab.nameTag,className:"panel",style:{"top":"17%","left":"20%","width":"54%","height":"80%"}},dojo.body());
                dojo.forEach(tab.audioImages,function(stuff) {
                    var imgDiv = dojo.create("div",{align:"center",style:{"caption-side":"top","width":"33%","height":"26%","float":"left"}},div);
                    var caption = dojo.create("div",{id:"mainCap", style:{"font-size": "150%", "display":"block"}, innerHTML:stuff.word, selected:"true"},imgDiv);
                    var a = dojo.create("a",{href:"javascript:;"},imgDiv);
                    var img = dojo.create("img",{src:stuff.pic, id:"mainImg",height:"80%", width:"80%", alt:stuff.word},a);
                        //dojo.connect(a,'onmouseup',dojo.hitch(this,'playSound',audio,stuff.word));
                        //dojo.connect(a, 'onmouseup',dojo.hitch(this,'bigImage',audio,stuff.pic,stuff.phrase));
                        dojo.connect(a,'onmouseup',function() {
                            if (currentTab != stuff) {
                                if (currentTab!=null) {
                                    if (currentTab.nameTag!=null) {
                                        document.getElementById(currentTab.nameTag).setAttribute("selected","false");
                                    }
                                    else {
                                        document.getElementById("form").setAttribute("selected","false");
                                    }
                                }
                                currentTab = stuff;
                                a.href = "#"+stuff.nameTag;
                                document.getElementById(currentTab.nameTag).setAttribute("selected","true");
                            }
                        });
                });
            });
            dojo.forEach(bottomTabs, function(tab) {
                var div = dojo.create("div",{id:tab.nameTag,className:"panel",style:{"top":"17%","left":"20%","width":"54%","height":"80%"}},dojo.body());
                dojo.forEach(tab.audioImages,function(stuff) {
                    var imgDiv = dojo.create("div",{align:"center",style:{"caption-side":"top","width":"33%","height":"26%","float":"left"}},div);
                    var caption = dojo.create("div",{id:"mainCap", style:{"font-size": "150%", "display":"block"}, innerHTML:stuff.word, selected:"true"},imgDiv);
                    var a = dojo.create("a",{href:"javascript:;"},imgDiv);
                    var img = dojo.create("img",{src:stuff.pic, id:"mainImg",height:"80%", width:"80%", alt:stuff.word},a);
                        //dojo.connect(a,'onmouseup',dojo.hitch(this,'playSound',audio,stuff.word));
                        //dojo.connect(a,'onmouseup',dojo.hitch(this,'bigImage',audio,stuff.pic,stuff.phrase));
                        dojo.connect(a,'onmouseup',function() {
                            if (currentTab != stuff) {
                                if (currentTab!=null) {
                                    if (currentTab.nameTag!=null) {
                                        document.getElementById(currentTab.nameTag).setAttribute("selected","false");
                                    }
                                    else {
                                        document.getElementById("form").setAttribute("selected","false");
                                    }
                                }
                                currentTab = stuff;
                                a.href = "#"+stuff.nameTag;
                                document.getElementById(currentTab.nameTag).setAttribute("selected","true");
                            }
                        });
                });
            });
            
            var self = this;
            
            dojo.forEach(topTabs, function(tab) {
                dojo.forEach(tab.audioImages,function(stuff) {
                var div = dojo.create("div",{id:stuff.nameTag,className:"panel",style:{"top":"17%","left":"25%","width":"54%","height":"80%"}},dojo.body());              
                    var imgDiv1 = dojo.create("div",{align:"center",style:{"caption-side":"top","width":"100%","height":"26%","float":"left"}},div);
                        var caption = dojo.create("div",{id:"Cap", style:{"display":"block"}, innerHTML:stuff.phrase, selected:"true"},imgDiv1);
                        var a1 = dojo.create("a",{href:"javascript:;"},imgDiv1);
                            var img = dojo.create("img",{src:stuff.pic, id:"mainImg",style:{"height":"250%", "width":"100%"}, alt:stuff.phrase},a1);
                                dojo.connect(a1,'onmouseup',dojo.hitch(this,'playSound',stuff.phrase));    
                });
            });
            
            dojo.forEach(bottomTabs, function(tab) {
                dojo.forEach(tab.audioImages,function(stuff) {
                    var div = dojo.create("div",{id:stuff.nameTag,className:"panel",style:{"top":"17%","left":"25%","width":"54%","height":"80%"}},dojo.body());              
                        var imgDiv1 = dojo.create("div",{align:"center",style:{"caption-side":"top","width":"100%","height":"26%","float":"left"}},div);
                            var caption = dojo.create("div",{id:"Cap", style:{"display":"block"}, innerHTML:stuff.phrase, selected:"true"},imgDiv1);
                            var a1 = dojo.create("a",{href:"javascript:;"},imgDiv1);
                                var img = dojo.create("img",{src:stuff.pic, id:"mainImg",style:{"height":"250%", "width":"100%"}, alt:stuff.phrase},a1);
                                    dojo.connect(a1,'onmouseup',dojo.hitch(this,'playSound',stuff.phrase));    
                });
            });
            
            var formDiv = dojo.create("div",{id:"form",className:"panel",style:{"top":"20%","left":"15%","width":"70%","height":"80%"}}, dojo.body());
            var form = dojo.create("form",null,formDiv);
            var word = dojo.create("textarea",{id:"word",cols:"35",rows:"17",style:{"height":"100%", "width":"100%"}},form);
            var speak = dojo.create("input",{id:"speak",type:"button",value:"speak",onclick:"javascript:;",style:{"vertical-align":"bottom"}},form);
                dojo.connect(speak,'onmouseup',dojo.hitch(this, function() {
                   self.playSound(form.elements[0].value);
                }));
        },
        
        playSound: function(word) {
            this.audio.setProperty({name:'rate',value: 90, channel:'sound'});
            this.audio.setProperty({name:'voice',value: 'default+f4',channel:'sound'});
            
            this.audio.stop({channel:"sound"});
            this.audio.say({text:word, channel:"sound"});                            
       },
       
       display: function() {
          if (currentTab!=null) {
            for (var i=0; i<document.getElementsByTagName("div").length; i++) {
                if(document.getElementsByTagName("div").item(i).parentNode.parentNode.id == currentTab.nameTag && document.getElementsByTagName("div").item(i).id!="Cap") {
                    if (document.getElementsByTagName("div").item(i).id = "mainCap" && document.getElementsByTagName("div").item(i).style.display == "block"){
                        document.getElementsByTagName("div").item(i).style.display="none";
                    }
                    else if (document.getElementsByTagName("div").item(i).id = "mainCap" && document.getElementsByTagName("div").item(i).style.display == "none"){
                        document.getElementsByTagName("div").item(i).style.display="block";
                    }
                }
            }
         }
       }

});

dojo.ready(function() {
    new compapp();
});