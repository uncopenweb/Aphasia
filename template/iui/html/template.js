dojo.provide('template');

dojo.declare('template',[], {

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
            
            var imgTable = dojo.create("table",{id:"#tTable",selected:"true",style:{"border-collapse":"collapse","border":"1px solid black","font-size": "75%","width":"99.9%","height":"70px"}},toolbar);
            var tr = dojo.create("tr",{id:"#tTr",style:{"border-collapse":"collapse"}},imgTable);
            dojo.forEach(topTabs, function(tab) {
                var td = dojo.create("td",{id:"#tTd",align:"center",style:{"border":"1px solid black","width":"33.3%"}}, tr);
                var caption = dojo.create("div",{innerHTML:tab.nameTag, selected:"true", style:{"align":"center"}},td);
                var a = dojo.create("a",{href:tab.name},td);
                var image = dojo.create("img",{src:tab.image, height:"45px", width:"50px"}, a);
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
            });
            
            var leftTable = dojo.create("table",{id:"sideTable",style:{"width":'54px',"top":'70px',"height":'196px'},selected:"true"},dojo.body());
                var tr = dojo.create("tr",null,leftTable);
                var td = dojo.create("td",{id:"sidetd1",style:{"height":"49px"}, innerHTML:"Please give me a moment to respond."},tr);
                    dojo.connect(td, 'onmouseup',dojo.hitch(this,'playSound',"Please give me a moment to respond."));
                var tr = dojo.create("tr",null,leftTable);
                var td = dojo.create("td",{id:"sidetd1",style:{"height":"48px"}, innerHTML:"I don't understand"},tr);
                    dojo.connect(td, 'onmouseup',dojo.hitch(this,'playSound',"I don't understand"));
                var tr = dojo.create("tr",null,leftTable);
                var td = dojo.create("td",{id:"sidetd1",style:{"height":"48px"}, innerHTML:"Can you repeat that, please?"},tr);
                    dojo.connect(td, 'onmouseup',dojo.hitch(this,'playSound',"Can you repeat that, please?"));
                var tr = dojo.create("tr",null,leftTable);
                var td = dojo.create("td",{id:"sidetd1",style:{"height":"49px"},innerHTML:"I need help."},tr);
                    dojo.connect(td, 'onmouseup',dojo.hitch(this,'playSound',"I need help"));
            
            var rightTable = dojo.create("table",{id:"sideTable",style:{"width":"51px","height":"215px","left":"265px","top":"70px"},selected:"true"},dojo.body());
            var tr = dojo.create("tr",null,rightTable);
            var td = dojo.create("td",{id:"sidetd2",style:{"height":"104px"}, innerHTML:"Display Text Button"},tr);
                dojo.connect(td,'onmouseup',dojo.hitch(this,'display'));
            var tr = dojo.create("tr",null,rightTable);
            var td = dojo.create("td",{id:"sidetd2",style:{"height":"104px"}, innerHTML:"Keyboard Button"},tr);
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
    
            var imgTable2 = dojo.create("table",{id:"#tTable",selected:"true",style:{"border-collapse":"collapse","border":"1px solid black","font-size": "75%","width":"99.9%","height":"70px", "top":"235px"}},footer);
            var tr = dojo.create("tr",null,imgTable2);
            dojo.forEach(bottomTabs, function(tab) {
                var td = dojo.create("td",{align:"center",style:{"width":"33.3%","border":"1px solid black"}}, tr);
                var caption = dojo.create("div",{innerHTML:tab.nameTag, selected:"true", style:{"align":"center"}},td);
                var a = dojo.create("a",{href:tab.name},td);
                var image = dojo.create("img",{src:tab.image, height:"45px", width:"50px"}, a);
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
            });
        },
        
        createTabs: function() {
            var self = this;
            
            dojo.forEach(topTabs, function(tab) {
                var div = dojo.create("div",{id:tab.nameTag,className:"panel",style:{"top":"75px","left":"60px","width":"204px","height":"216px"}},dojo.body());
                dojo.forEach(tab.audioImages,function(stuff) {
                    var imgDiv = dojo.create("div",{align:"center",style:{"caption-side":"top","width":"68px","height":"72px","float":"left"}},div);
                    var caption = dojo.create("div",{id:"mainCap", style:{"font-size": "70%", "display":"block"}, innerHTML:stuff.word, selected:"true"},imgDiv);
                    var a = dojo.create("a",{href:"javascript:;"},imgDiv);
                    var img = dojo.create("img",{src:stuff.pic, id:"mainImg",height:"75%", width:"75%", alt:stuff.word},a);
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
            });
            dojo.forEach(bottomTabs, function(tab) {
                var div = dojo.create("div",{id:tab.nameTag,className:"panel",style:{"top":"75px","left":"60px","width":"204px","height":"216px"}},dojo.body());
                dojo.forEach(tab.audioImages,function(stuff) {
                    var imgDiv = dojo.create("div",{align:"center",style:{"caption-side":"top","width":"68px","height":"72px","float":"left"}},div);
                    var caption = dojo.create("div",{id:"mainCap", style:{"font-size": "70%", "display":"block"}, innerHTML:stuff.word, selected:"true"},imgDiv);
                    var a = dojo.create("a",{href:"javascript:;"},imgDiv);
                    var img = dojo.create("img",{src:stuff.pic, id:"mainImg",height:"75%", width:"75%", alt:stuff.word},a);
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
            });
            
            var self = this;
            
            dojo.forEach(topTabs, function(tab) {
                dojo.forEach(tab.audioImages,function(stuff) {
                    var div = dojo.create("div",{id:stuff.nameTag,className:"panel",style:{"top":"75px","left":"60px","width":"204px","height":"216px"}},dojo.body());              
                    var imgDiv1 = dojo.create("div",{align:"center",style:{"caption-side":"top","width":"204px","height":"216px","float":"left"}},div);
                        var caption = dojo.create("div",{id:"Cap", style:{"display":"block"}, innerHTML:stuff.phrase, selected:"true"},imgDiv1);
                        var a1 = dojo.create("a",{href:"javascript:;"},imgDiv1);
                            var img = dojo.create("img",{src:stuff.pic, id:"mainImg",style:{"height":"90%", "width":"90%"}, alt:stuff.phrase},a1);
                                dojo.connect(a1,'onmouseup',dojo.hitch(self,'playSound',stuff.phrase));    
                });
            });
            
            dojo.forEach(bottomTabs, function(tab) {
                dojo.forEach(tab.audioImages,function(stuff) {
                    var div = dojo.create("div",{id:stuff.nameTag,className:"panel",style:{"top":"75px","left":"60px","width":"204px","height":"216px"}},dojo.body());              
                        var imgDiv1 = dojo.create("div",{align:"center",style:{"caption-side":"top","width":"204px","height":"216px","float":"left"}},div);
                            var caption = dojo.create("div",{id:"Cap", style:{"display":"block"}, innerHTML:stuff.phrase, selected:"true"},imgDiv1);
                            var a1 = dojo.create("a",{href:"javascript:;"},imgDiv1);
                                var img = dojo.create("img",{src:stuff.pic, id:"mainImg",style:{"height":"90%", "width":"90%"}, alt:stuff.phrase},a1);
                                    dojo.connect(a1,'onmouseup',dojo.hitch(self,'playSound',stuff.phrase));    
                });
            });
            
            
            var formDiv = dojo.create("div",{id:"form",className:"panel",style:{"top":"75px","left":"60px","width":"204px","height":"216px"}}, dojo.body());
            var form = dojo.create("form",null,formDiv);
            var word = dojo.create("textarea",{id:"word",cols:"30",rows:"12"},form);
            var speak = dojo.create("input",{id:"speak",type:"button",value:"speak",onclick:"javascript:;",style:{"vertical-align":"bottom"}},form);
                dojo.connect(speak,'onmouseup',dojo.hitch(this, function() {
                   self.playSound(form.elements[0].value);
                }));

        },
        
        playSound: function(word) {
            this.audio.setProperty({name:'rate',value: 90, channel:'music'});
            this.audio.setProperty({name:'voice',value: 'default+f4',channel:'music'}); 
        
            this.audio.stop({channel:'music'});
            this.audio.say({text:word, channel:'music'});            
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
    new template();
});