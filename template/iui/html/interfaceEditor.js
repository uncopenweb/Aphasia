    // schema = {
        // title: "Aphasia Application",
        // description: "Editing the Pictures and Words on the interface.",
        // type: "object",
        // properties: {
            // topTabs: {
                // type: "array",
                // minItems: 1,
                // maxItems: 3,
                // items: {
                    // type: "object",
                    // properties: {
                        // name: {
                            // type: "string",
                            // title: "Tab Name",
                            // description: "URL Name of the tab (first character must be #)"
                        // },
                        // nameTag: {
                            // type: "string",
                            // title: "Appeared Tab Name",
                            // description: "The name of the tab actually appearing on the page"
                        // },
                        // image: {
                            // type: "string",
                            // title: "Tab Image Name",
                            // description: "The image that describes the tab name"
                        // },
                        // audioImages: {
                            // type: "array",
                            // minItems: 0,
                            // maxItems: 9,
                            // items: {
                                // type: "object",
                                // properties: {
                                    // pic: {
                                        // type: "string",
                                        // title: "Picture name",
                                        // description: "File name of the picture with extension"
                                    // },
                                    // word: {
                                        // type: "string",
                                        // title: "Word",
                                        // description: "Short description of the picture"                                        
                                    // },
                                    // nameTag: {
                                        // type: "string",
                                        // title: "Unique name for Tab",
                                        // description: "URL Name for the tab that contains the picture (must be unique from all other nameTag within audioImages"
                                    // },
                                    // phrase: {
                                        // type: "string",
                                        // title: "Phrase",
                                        // description: "Long descriptive name of the picture"
                                    // }
                                // }
                            // }
                        // }
                    // }
                // }
            // },
            // bottomTabs: {
                // type: "array",
                // minItems: 1,
                // maxItems: 3,
                // items: {
                    // type: "object",
                    // properties: {
                        // name: {
                            // type: "string",
                            // title: "Tab Name",
                            // description: "URL Name of the tab (first character must be #)"
                        // },
                        // nameTag: {
                            // type: "string",
                            // title: "Appeared Tab Name",
                            // description: "The name of the tab actually appearing on the page"
                        // },
                        // image: {
                            // type: "string",
                            // title: "Tab Image Name",
                            // description: "The image that describes the tab name"
                        // },
                        // audioImages: {
                            // type: "array",
                            // minItems: 0,
                            // maxItems: 9,
                            // items: {
                                // type: "object",
                                // properties: {
                                    // pic: {
                                        // type: "string",
                                        // title: "Picture name",
                                        // description: "File name of the picture with extension"
                                    // },
                                    // word: {
                                        // type: "string",
                                        // title: "Word",
                                        // description: "Short description of the picture"                                        
                                    // },
                                    // nameTag: {
                                        // type: "string",
                                        // title: "Unique name for Tab",
                                        // description: "URL Name for the tab that contains the picture (must be unique from all other nameTag within audioImages"
                                    // },
                                    // phrase: {
                                        // type: "string",
                                        // title: "Phrase",
                                        // description: "Long descriptive name of the picture"
                                    // }
                                // }
                            // }
                        // }
                    // }
                // }
            // }
        // }  
    // }
    thisSchema = {
        "topTabs": [
           {
                "name": "",
                "nameTag":"",
                "image": "",
                "audioImages": [
                    {
                        "pic":"",
                        "word":"",
                        "nameTag":"",
                        "phrase":""
                    }
                ]
            }
        ],
        "bottomTabs":[
           {
                "name": "",
                "nameTag":"",
                "image": "",
                "audioImages": [
                    {
                        "pic":"",
                        "word":"",
                        "nameTag":"",
                        "phrase":""
                    }
                ]
           }
        ]
    };

    forwardButton = [];
    backwardButton = [];
    
    
    function start() {
        var mainArea = dojo.byId("mainArea");
        var ulList = ["Step 1 -- Getting Started", "Step 2 -- Customize Your Top Tabs", "Step 3 -- Customize Your Bottom Tabs", "Step 4 -- Summary", "Step 5 -- You're Done!"];
        var tabs = dojo.create("table",null,mainArea);
        dojo.forEach(ulList, function(item) {
            var td = dojo.create("td",{id:item, innerHTML:item, className:"tabs", style:{"font-size":"25%"}},tabs);
        });
        var ids = ["0","1","2","3","4"];
        for (var i=0; i<5; i++) {
            var div = dojo.create("div",{id:ids[i],className:"mainContent", style:{"display":"none"}},mainArea);
        }
        step1(ids,ulList);
        
        jsProgress.update({maximum:4});
        dojo.byId(ulList[0]).className = "td1";
    }

    function step1 (ids,ulList) {
    
        var div = dojo.byId(ids[0]);
        var h4 = dojo.create("div",{className:"first", innerHTML:"What do you want to do?"},div);
            dojo.create("br",null,div);
        var form = dojo.create("form", null , div);
        var c1 = dojo.create("input",{type:"radio", value:"c", name:"1p", checked:"checked"},form);
            dojo.create("label",{innerHTML:"Create a new interface"},form);
            dojo.create("br",null,form);
            dojo.create("br",null,form);
        var c2 = dojo.create("input",{type:"radio", value:"e", name:"1p"},form);
            dojo.create("label",{innerHTML:"Edit an existing interface"},form);
            dojo.create("br",null,form);
            dojo.create("br",null,form);
        var c3 = dojo.create("input",{type:"radio", value:"d", name:"1p"},form);
            dojo.create("label",{innerHTML:"Delete an existing interface"},form);
            dojo.create("br",null,form);
            dojo.create("br",null,form);
        
        dojo.create("br",null,form);
        dojo.create("br",null,form);
        
        var Grid = dojo.create("div",{className:"grid",id:"grid",left:"20px",style:{"display":"none"},innerHTML:"Select the existing interface you want."},div);
        var table = dojo.create("table",{className:"dataTable"},Grid);
        var tr = dojo.create("tr",{className:"dataTable"},table);
        var td1 = dojo.create("td",{className:"td3"},tr);
        var td2 = dojo.create("td",{className:"td2",innerHTML:"Interface Theme"},tr);
        var td3 = dojo.create("td",{className:"td2",innerHTML:"Id"},tr);
            tr = dojo.create("tr",null,table);
            td1 = dojo.create("input",{type:"radio",className:"td3"},tr);
            td2 = dojo.create("td",{className:"td3",innerHTML:"Example Theme"},tr);
            td2 = dojo.create("td",{className:"td3",innerHTML:"automatic generated id"},tr);
            
            
       var forwardButton = dojo.create("button",{innerHTML:"Start"},div);
            dojo.connect(forwardButton,'onclick',dojo.hitch(this,function() {
                if (c1.checked) {  
                    
                    dojo.empty(dojo.byId(ids[1]));
                    dojo.empty(dojo.byId(ids[2]));
                    tabStep(ids,1,"Top",ulList);
                    tabStep(ids,2,"Bottom",ulList);
                
                    dojo.byId(ulList[0]).className = "tabs";
                
                    div.style.display="none";
                    dojo.byId(ids[1]).style.display="block";
                    jsProgress.update({progress:1});
                    
                    dojo.byId(ulList[1]).className = "td1";
                }
        }));


        dojo.connect(c2,'onclick',function() {
            Grid.style.display = "block";
        });
        dojo.connect(c3,'onclick',function() {
            Grid.style.display = "block";
        });
        dojo.connect(c1,'onclick',function() {
            Grid.style.display = "none";
        });
        div.style.display = "block";
    }
    
    function tabStep(ids, j, word, ulList) {
        var div = dojo.byId(ids[j]);
        var h4 = dojo.create("div",{className:"first",innerHTML:"Customize Your "+word+" Tabs"},div);
        
        var tab1 = dojo.create("div",{className:"second"},div);
        var bold = dojo.create("b",{innerHTML:"Tab 1"},tab1);
        var name1 = dojo.create("div",{className:"third"},tab1);
        var label1 = dojo.create("label",{innerHTML:"Name of Tab:  "},name1);
        var text1 = dojo.create("input",{className:"text"},name1);
        var label2 = dojo.create("label",{innerHTML:"&nbsp; Tab Picture: "},name1);
        var text2 = dojo.create("input",{type:"file"},name1);
        var label3 = dojo.create("label",{innerHTML:"&nbsp; # Images for Tab: "},name1);
        var text3 = dojo.create("select",{id:"form1"},name1);
        for (var i=0; i<10; i++) {
            dojo.create("option",{value:i,innerHTML:i},text3);
        }
            dojo.connect(text3,'onchange',dojo.hitch(this,dynamicForm,text3,tab1,j));
        
        var tab2 = dojo.create("div",{className:"second"},div);
        var bold = dojo.create("b",{innerHTML:"Tab 2"},tab2);
        var name1 = dojo.create("div",{className:"third"},tab2);
        var label1 = dojo.create("label",{innerHTML:"Name of Tab:  "},name1);
        var text1 = dojo.create("input",{className:"text"},name1);
        var label2 = dojo.create("label",{innerHTML:"&nbsp; Tab Picture: "},name1);
        var text2 = dojo.create("input",{type:"file"},name1);
        var label3 = dojo.create("label",{innerHTML:"&nbsp; # Images for Tab: "},name1);
        var text3 = dojo.create("select",{id:"form1"},name1);
        for (var i=0; i<10; i++) {
            dojo.create("option",{value:i,innerHTML:i},text3);
        }
            dojo.connect(text3,'onchange',dojo.hitch(this,dynamicForm,text3,tab2,j+1));
        
        var tab3 = dojo.create("div",{className:"second"},div);
        var bold = dojo.create("b",{innerHTML:"Tab 3"},tab3);
        var name1 = dojo.create("div",{className:"third"},tab3);
        var label1 = dojo.create("label",{innerHTML:"Name of Tab:  "},name1);
        var text1 = dojo.create("input",{className:"text"},name1);
        var label2 = dojo.create("label",{innerHTML:"&nbsp; Tab Picture: "},name1);
        var text2 = dojo.create("input",{type:"file"},name1);
        var label3 = dojo.create("label",{innerHTML:"&nbsp; # Images for Tab: "},name1);
        var text3 = dojo.create("select",{id:"form1"},name1);
        for (var i=0; i<10; i++) {
            dojo.create("option",{value:i,innerHTML:i},text3);
        }
            dojo.connect(text3,'onchange',dojo.hitch(this,dynamicForm,text3,tab3,j+2));
        

        var backwardButton =  dojo.create("button",{innerHTML:"Back"},div);
            dojo.connect(backwardButton,'onclick',dojo.hitch(this,function() {    
                var k=j;
                dojo.byId(ulList[k]).className = "tabs";
            
                dojo.byId(ids[k]).style.display="none";
                dojo.byId(ids[--k]).style.display="block";
                jsProgress.update({progress:k});
                
                dojo.byId(ulList[k]).className = "td1";                
            }));
        
        var forwardButton = dojo.create("button",{innerHTML:"Next"},div);
            dojo.connect(forwardButton,'onclick',dojo.hitch(this,function() {
                var m=j;
                if (m==2) {
                    dojo.empty(dojo.byId(ids[3]));
                    summaryPage(ids,ulList);
                
                    dojo.byId(ulList[m]).className = "tabs";
                    
                    dojo.byId(ids[m]).style.display="none";
                    dojo.byId(ids[++m]).style.display="block";
                    jsProgress.update({progress:m});
                    
                    dojo.byId(ulList[m]).className = "td1";
                }
                else if (m==1) {
                    dojo.byId(ulList[m]).className = "tabs";
                    
                    dojo.byId(ids[m]).style.display="none";
                    dojo.byId(ids[++m]).style.display="block";
                    jsProgress.update({progress:m});
                    
                    dojo.byId(ulList[m]).className = "td1";
                }
            }));
    }
    
    function dynamicForm(s,tab,i) {
        if (dojo.byId("tab"+i) !=null) {
            dojo.destroy("tab"+i);
        }
        var div = dojo.create("div",{id:"tab"+i},tab);
        var table = dojo.create("table",{className:"contentTable"},div);
        for (j=0; j<s.options[s.selectedIndex].value; j++) {
            var v = j+1;
            var tr = dojo.create("tr",{className:"contentRow"},table);
            var td = dojo.create("td",{className:"contentItem"},tr);
            dojo.create("label",{innerHTML:"Pic #"+v+": "},td);
            dojo.create("input",{type:"file"},td);
            var td = dojo.create("td",{className:"contentItem"},tr);
            dojo.create("label",{innerHTML:"Word for Pic #"+v+": "},td);
            dojo.create("input",null,td);
            var td = dojo.create("td",{style:{"border":"1px solid black","width":"30%"}},tr);
            dojo.create("label",{innerHTML:"Phrase: "},td);
            dojo.create("input",{style:{"width":"100%"}},td);
        }
    }
    
    function summaryPage(ids,ulList) {
        var div = dojo.byId(ids[3]);
        var h4 = dojo.create("div",{className:"first",innerHTML:"Summary"},div);
        
        var topTabs = dojo.create("div",{className:"second"},div);
        var bold = dojo.create("b",{innerHTML:"Top Tabs"},topTabs);
        var tab1 = dojo.create("div",{className:"third",innerHTML:"Tab 1"},topTabs);
        var table = dojo.create("table",{className:"dataTable"},topTabs);
        var tab2 = dojo.create("div",{className:"third",innerHTML:"Tab 2"},topTabs);
        var table = dojo.create("table",{className:"dataTable"},topTabs);
        var tab3 = dojo.create("div",{className:"third",innerHTML:"Tab 3"},topTabs);
        var table = dojo.create("table",{className:"dataTable"},topTabs);
        
        var bottomTabs = dojo.create("div",{className:"second"},div);
        var bold = dojo.create("b",{innerHTML:"Bottom Tabs"},bottomTabs);
        var tab1 = dojo.create("div",{className:"third",innerHTML:"Tab 1"},bottomTabs);
        var table = dojo.create("table",{className:"dataTable"},bottomTabs);
        var tab2 = dojo.create("div",{className:"third",innerHTML:"Tab 2"},bottomTabs);
        var table = dojo.create("table",{className:"dataTable"},bottomTabs);
        var tab3 = dojo.create("div",{className:"third",innerHTML:"Tab 3"},bottomTabs);
        var table = dojo.create("table",{className:"dataTable"},bottomTabs);
        
        
        var backwardButton = dojo.create("button",{innerHTML:"Back"},div);
            dojo.connect(backwardButton,'onclick',dojo.hitch(this,function() {
                dojo.byId(ulList[3]).className = "tabs";
            
                div.style.display="none";
                dojo.byId(ids[2]).style.display="block";
                jsProgress.update({progress:2});
                
                dojo.byId(ulList[2]).className = "td1";                
            }));
        var forwardButton = dojo.create("button",{innerHTML:"Confirm/Finish"},div);
            dojo.connect(forwardButton,'onclick',dojo.hitch(this,function() {
                donePage(ids);
            
                dojo.byId(ulList[3]).className = "tabs";
            
                div.style.display="none";
                dojo.byId(ids[4]).style.display="block";
                jsProgress.update({progress:4});
                
                dojo.byId(ulList[4]).className = "td1";
            }));
    }
    
    function donePage(ids) {
        var div = dojo.byId(ids[4]);
        var h4 = dojo.create("div",{className:"first",innerHTML:"Summary"},div);
        var p = dojo.create("p",{innerHTML:"You are now done. You can now start the Aphasia web application with one of the interface below:"},div);
        var table = dojo.create("table",null,div);
        var homeDiv = dojo.create("div",{innerHTML:"Or, you can go back to the home page for more options: "},div);
        var a = dojo.create("a",{href:"http://gbserver2.cs.unc.edu/playpen/Aphasia/template/iui/html/interfaceEditor.html"},homeDiv);
            a.appendChild(document.createTextNode('Click here.'));
    }
    
    dojo.ready(start);
    