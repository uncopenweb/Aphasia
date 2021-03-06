dojo.provide('compapp');

dojo.declare('compapp',[], {

        constructor: function() {
            uow.getAudio().addCallback(dojo.hitch(this,'start'));
            this.currentTab = null;
        },
        
        start: function(audio) { 
            this.audio = audio;
            var toolbar = dojo.create("div", {className:"toolbar"},dojo.body());
            var deBody = dojo.create("div", {className:"panel",selected:"true", id:""}, dojo.body());
            
            this.createTabs();
            
            var self = this;
            
            var imgTable = dojo.create("table",{id:"#tTable",selected:"true",style:{"width":"100%"}},toolbar);
            var tr = dojo.create("tr",null,imgTable);
            dojo.forEach(mainTabs.topTabs, function(tab) {
                self.createBorderBar(self,tab,tr);
            });
       
            var index = 0;
            var leftPhrases = ["Please give me a moment to respond.", "I don't understand.", "Can you repeat that, please?", "I need help."];
            var leftPics = ["stop.png","question.png","repeat.png","help.png"];
            var leftTable = dojo.create("table",{id:"sideTable",style:{"width":'12.5%',"height":'67%'},selected:"true"},dojo.body());
                /*dojo.forEach(leftPhrases, function(aPhrase) {
                    var td = dojo.create("table",{id:"sidetd1",style:{"height":"25%","width":"100%"},innerHTML:aPhrase},leftTable);
                        dojo.connect(td, 'onmouseup',dojo.hitch(self,'playSound',aPhrase));
                });*/
                dojo.forEach(leftPhrases, function(aPhrase) {
                    var tr = dojo.create("tr",null,leftTable);
                    var td = dojo.create("td",{id:"sidetd1",style:{"width":'100%', "height":"100px"}},tr);
                    var div = dojo.create("a",{href:"javascript:;"},td);
                    var img = dojo.create("img",{src:leftPics[index++],width:"100%",height:"100%",border:"0"},div);
                        dojo.connect(td, 'onmouseup', dojo.hitch(self, 'playSound', aPhrase));
                });
            
            
            
            
            var rightTable = dojo.create("table",{id:"sideTable",style:{"width":"12.5%","height":"68%","left":"87.5%"},selected:"true"},dojo.body());
            var td = dojo.create("table",{id:"sidetd1",style:{"height":"25%","width":'100%'}, innerHTML:"How about you?"},rightTable);
                dojo.connect(td,'onmouseup',dojo.hitch(self, 'playSound', "How about you?"));
            var td = dojo.create("table",{id:"sidetd1",style:{"height":"25%","width":'100%'}, innerHTML:"Thank you."},rightTable);
                dojo.connect(td,'onmouseup',dojo.hitch(self, 'playSound', "Thank you."));
            var td = dojo.create("table",{id:"sidetd2",style:{"height":"25%","width":'100%'}, innerHTML:"Display Text Button"},rightTable);
                dojo.connect(td,'onmouseup',dojo.hitch(this,'display'));
            var td = dojo.create("table",{id:"sidetd2",style:{"height":"25%","width":'100%'}, innerHTML:"Keyboard Button"},rightTable);
                dojo.connect(td,'onmouseup',function() {
                    if (self.currentTab != document.getElementById("form")) {
                        if (self.currentTab!=null) {
                            document.getElementById(self.currentTab.nameTag).setAttribute("selected","false");
                        }
                        self.currentTab = document.getElementById("form");
                        td.href = "form";
                        self.currentTab.setAttribute("selected","true");
                        for (var i=0; i<document.getElementById("#tTable").getElementsByTagName("td").length; i++) {
                            document.getElementById("#tTable").getElementsByTagName("td")[i].className = "";
                        }                                    
                        for (var i=0; i<document.getElementById("tTable").getElementsByTagName("td").length; i++) {
                            document.getElementById("tTable").getElementsByTagName("td")[i].className = "";
                        }
                    }
                    else {
                        td.href = "javascript://";
                    }
                });
            
            var footer = dojo.create("div",{className:"menu",selected:"true"},dojo.body());    
            var imgTable2 = dojo.create("table",{id:"tTable",selected:"true",style:{"width":"100%", "top":"1%"}},footer);
            var tr = dojo.create("tr",null,imgTable2);
                dojo.forEach(mainTabs.bottomTabs, function(tab) {
                    self.createBorderBar(self, tab, tr);
                });
        },
        
        createBorderBar: function(self, tab, tr) {
            var td = dojo.create("td",{align:"center",style:{"font-size":"x-large","width":"33.3%"}}, tr);
            var caption = dojo.create("div",{innerHTML:tab.nameTag, selected:"true", style:{"align":"center"}},td);
            if (tab.image.trim()!="") {
                var a = dojo.create("a",{href:tab.name},td);
                var image = dojo.create("img",{src:tab.image, width:"73px", height:"73px"}, a);
                if(tab.audioImages.length !=0) {
                    dojo.connect(a, 'onmouseup', function() {
                        if (self.currentTab != tab) {
                            if (self.currentTab!=null) {
                                if (self.currentTab.nameTag!=null) {
                                    document.getElementById(self.currentTab.nameTag).setAttribute("selected","false");
                                    for (var i=0; i<document.getElementById("#tTable").getElementsByTagName("td").length; i++) {
                                        document.getElementById("#tTable").getElementsByTagName("td")[i].className = "";
                                    }                                    
                                    for (var i=0; i<document.getElementById("tTable").getElementsByTagName("td").length; i++) {
                                        document.getElementById("tTable").getElementsByTagName("td")[i].className = "";
                                    }
                                }
                                else {
                                    document.getElementById("form").setAttribute("selected","false");
                                    for (var i=0; i<document.getElementById("#tTable").getElementsByTagName("td").length; i++) {
                                        document.getElementById("#tTable").getElementsByTagName("td")[i].className = "";
                                    }                                    
                                    for (var i=0; i<document.getElementById("tTable").getElementsByTagName("td").length; i++) {
                                        document.getElementById("tTable").getElementsByTagName("td")[i].className = "";
                                    }
                                }
                            }
                            self.currentTab = tab;
                            a.href = tab.name;
                            document.getElementById(self.currentTab.nameTag).setAttribute("selected","true");
                            td.className = "selected";
                        }
                        else {
                            a.href = "javascript://";
                        }
                    });
                }
            }
        },
        
        createTabs: function() {
            var self = this;
            
            if (mainTabs.topTabs != null) {
                dojo.forEach(mainTabs.topTabs, function(tab) {
                    self.createMoreTabs(self, tab);
                });
            }
            if (mainTabs.bottomTabs != null) {
                dojo.forEach(mainTabs.bottomTabs, function(tab) {
                    self.createMoreTabs(self, tab);
                });
            }
            
            var formDiv = dojo.create("div",{id:"form",className:"panel",style:{"top":"20%","left":"15%","width":"70%","height":"68%"}}, dojo.body());
            var form = dojo.create("form",null,formDiv);
            var word = dojo.create("textarea",{id:"word",cols:"35",rows:"17",style:{"height":"100%", "width":"100%"}},form);
            var speak = dojo.create("input",{id:"speak",type:"button",value:"speak",onclick:"javascript:;",style:{"vertical-align":"bottom"}},form);
                dojo.connect(speak,'onmouseup',dojo.hitch(this, function() {
                   self.playSound(form.elements[0].value);
                }));
        },
        
        createMoreTabs: function(self, tab) {        
            var div = dojo.create("div",{id:tab.nameTag,className:"panel",style:{"top":"17%","left":"25%","width":"54%","height":"76%"}},dojo.body());
            dojo.forEach(tab.audioImages,function(stuff) {
                var imgDiv = dojo.create("div",{align:"center",style:{"caption-side":"top","width":"33%","height":"26%","float":"left"}},div);
                    var caption = dojo.create("div",{id:"mainCap", style:{"font-size": "150%", "display":"block"}, innerHTML:stuff.word, selected:"true"},imgDiv);
                var a = dojo.create("a",{href:"javascript:;"},imgDiv);
                var img = dojo.create("img",{src:stuff.pic, id:"mainImg",height:"80%", width:"80%", alt:stuff.word},a);
                    dojo.connect(a,'onmouseup',function() {
                        if (self.currentTab != stuff) {
                            if (self.currentTab!=null) {
                                if (self.currentTab.nameTag!=null) {
                                    document.getElementById(self.currentTab.nameTag).setAttribute("selected","false");
                                }
                                else {
                                    document.getElementById("form").setAttribute("selected","false");
                                }
                            }
                            self.currentTab = stuff;
                            a.href = "#"+stuff.nameTag;
                            document.getElementById(self.currentTab.nameTag).setAttribute("selected","true");
                        }
                    });
            }); 

            dojo.forEach(tab.audioImages,function(stuff) {
                var div = dojo.create("div",{id:stuff.nameTag,className:"panel",style:{"top":"21%","left":"25%","width":"54%","height":"76%"}},dojo.body());              
                var imgDiv1 = dojo.create("div",{align:"center",style:{"caption-side":"top","width":"100%","height":"26%","float":"left"}},div);
                    var caption = dojo.create("div",{id:"Cap", style:{"display":"block"}, innerHTML:stuff.phrase, selected:"true"},imgDiv1);
                    var a1 = dojo.create("a",{href:"javascript:;"},imgDiv1);
                        var img = dojo.create("img",{src:stuff.pic, id:"mainImg",style:{"height":"200%", "width":"50%"}, alt:stuff.phrase},a1);
                            dojo.connect(a1,'onmouseup',dojo.hitch(self,'playSound',stuff.phrase));  
            });            
        },
        
        playSound: function(word) {
            this.audio.setProperty({name:'rate',value: 135, channel:'sound'});
            this.audio.setProperty({name:'voice',value: 'default+f4',channel:'sound'});
            
            this.audio.stop({channel:"sound"});
            this.audio.say({text:word, channel:"sound"});                            
       },
       
       display: function() {
          if (this.currentTab!=null) {
            for (var i=0; i<document.getElementsByTagName("div").length; i++) {
                if(document.getElementsByTagName("div").item(i).parentNode.parentNode.id == this.currentTab.nameTag && document.getElementsByTagName("div").item(i).id!="Cap") {
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