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
            
            var imgTable = dojo.create("table",{id:"#tTable",selected:"true",style:{"border-collapse":"collapse","border":"1px solid black","font-size": "75%","width":"99.9%"}},toolbar);
            var tr = dojo.create("tr",{id:"#tTr",style:{"border-collapse":"collapse"}},imgTable);
            dojo.forEach(mainTabs.topTabs, function(tab) {
                self.createBorderBar(self,tab,tr);
            });
       
            var leftPhrases = ["Please give me a moment to respond.", "I don't understand.", "Can you repeat that, please?", "I need help."];
            var leftTable = dojo.create("table",{id:"sideTable",style:{"width":'12.5%',"height":'80%'},selected:"true"},dojo.body());
                dojo.forEach(leftPhrases, function(aPhrase) {
                    var td = dojo.create("table",{id:"sidetd1",style:{"height":"25%","width":"100%"},innerHTML:aPhrase},leftTable);
                        dojo.connect(td, 'onmouseup',dojo.hitch(self,'playSound',aPhrase));
                });
            
            
            
            
            var rightTable = dojo.create("table",{id:"sideTable",style:{"width":"12.5%","height":"80%","left":"87.5%"},selected:"true"},dojo.body());
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
                    }
                    else {
                        td.href = "javascript://";
                    }
                });
            
            var footer = dojo.create("div",{className:"menu",selected:"true"},dojo.body());    
            var imgTable2 = dojo.create("table",{id:"tTable",selected:"true",style:{"border-collapse":"collapse","border-top":"1px solid black","font-size": "75%","width":"99.9%","height":"0%"}},footer);
            var tr = dojo.create("tr",null,imgTable2);
                dojo.forEach(mainTabs.bottomTabs, function(tab) {
                    self.createBorderBar(self, tab, tr);
                });
        },
        
        createBorderBar: function(self, tab, tr) {
            var td = dojo.create("td",{id:"tTd",align:"center",style:{"border-right-style":"1px solid black","width":"33.3%"}}, tr);
            var caption = dojo.create("div",{innerHTML:tab.nameTag, selected:"true", style:{"font-size":"x-large","align":"center"}},td);
            var a = dojo.create("a",{href:tab.name},td);
            var image = dojo.create("img",{src:tab.image, width:"17%", height:"17%"}, a);
            dojo.connect(a, 'onmouseup', function() {
                if (self.currentTab != tab) {
                    if (self.currentTab!=null) {
                        if (self.currentTab.nameTag!=null) {
                            document.getElementById(self.currentTab.nameTag).setAttribute("selected","false");
                        }
                        else {
                            document.getElementById("form").setAttribute("selected","false");
                        }
                    }
                    self.currentTab = tab;
                    a.href = tab.name;
                    document.getElementById(self.currentTab.nameTag).setAttribute("selected","true");
                }
                else {
                    a.href = "javascript://";
                }
            });
        },
        
        createTabs: function() {
            var self = this;
            
            dojo.forEach(mainTabs.topTabs, function(tab) {
                self.createMoreTabs(self, tab);
            });
            dojo.forEach(mainTabs.bottomTabs, function(tab) {
                self.createMoreTabs(self, tab);
            });
            
            var formDiv = dojo.create("div",{id:"form",className:"panel",style:{"top":"20%","left":"15%","width":"70%","height":"80%"}}, dojo.body());
            var form = dojo.create("form",null,formDiv);
            var word = dojo.create("textarea",{id:"word",cols:"35",rows:"17",style:{"height":"100%", "width":"100%"}},form);
            var speak = dojo.create("input",{id:"speak",type:"button",value:"speak",onclick:"javascript:;",style:{"vertical-align":"bottom"}},form);
                dojo.connect(speak,'onmouseup',dojo.hitch(this, function() {
                   self.playSound(form.elements[0].value);
                }));
        },
        
        createMoreTabs: function(self, tab) {        
            var div = dojo.create("div",{id:tab.nameTag,className:"panel",style:{"top":"17%","left":"20%","width":"54%","height":"80%"}},dojo.body());
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
                var div = dojo.create("div",{id:stuff.nameTag,className:"panel",style:{"top":"17%","left":"25%","width":"54%","height":"80%"}},dojo.body());              
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