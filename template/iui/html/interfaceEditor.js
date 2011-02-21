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
        step1(ids);
        step2(ids);
        
        i=0;
        jsProgress.update({maximum:4});
        console.log(forwardButton);
        dojo.forEach(forwardButton, function(button) {
            dojo.connect(button,'onclick',function() {
                if (i!=4) {
                                  
                    dojo.byId(ulList[i]).className = "tabs";
                
                    button.parentNode.style.display="none";
                    forwardButton[++i].parentNode.style.display="block";
                    jsProgress.update({progress:i});
                    
                    dojo.byId(ulList[i]).className = "td1";
                }
            });
        });
        dojo.forEach(backwardButton, function(button) {
            dojo.connect(button,'onclick',function() {
                if (i!=0) {
                
                    dojo.byId(ulList[i]).className = "tabs";
                
                    button.parentNode.style.display="none";
                    forwardButton[--i].parentNode.style.display="block";
                    jsProgress.update({progress:i});
                    
                    dojo.byId(ulList[i]).className = "td1";
                }
            });
        });

        dojo.byId(ulList[0]).className = "td1";
    }

    function step1 (ids) {
    
        var div = dojo.byId(ids[0]);
        var h4 = dojo.create("div",{className:"first", innerHTML:"What do you want to do?"},div);
            dojo.create("br",null,div);
        var form = dojo.create("form", null, div);
        var c1 = dojo.create("input",{type:"radio", value:"c", name:"1p"},form);
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
        forwardButton[0] = dojo.create("button",{innerHTML:"Next"},div);
        backwardButton[0] = dojo.create("div",null,div);

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
    
    function step2(ids) {
        var div = dojo.byId(ids[1]);
        var h4 = dojo.create("div",{className:"first",innerHTML:"Customize Your Top Tabs"},div);
        
        var tab1 = dojo.create("div",{className:"second",innerHTML:"Tab 1"},div);
        var name1 = dojo.create("div",{className:"third"},tab1);
        var label1 = dojo.create("label",{innerHTML:"Name of Tab:  "},name1);
        var text1 = dojo.create("input",{className:"text"},name1);
        var label2 = dojo.create("label",{innerHTML:"&nbsp; Tab Picture: "},name1);
        var text2 = dojo.create("input",{type:"file"},name1);
        var label3 = dojo.create("label",{innerHTML:"&nbsp; # Images for Tab: "},name1);
        var text3 = dojo.create("select",{id:"form1"},name1);
            //dojo.create("option",{value:" ",selected:"selected",innerHTML:" "},text3);
        for (var i=1; i<10; i++) {
            dojo.create("option",{value:i,innerHTML:i},text3);
        }
            dojo.connect(text3,'onchange',dojo.hitch(this,dynamicForm,text3));
        
        var tab2 = dojo.create("div",{className:"second",innerHTML:"Tab 2"},div);
        
        var tab3 = dojo.create("div",{className:"second",innerHTML:"Tab 3"},div);
        
        
        backwardButton[1] = dojo.create("button",{innerHTML:"Back"},div);
        forwardButton[1] = dojo.create("button",{innerHTML:"Next"},div);
    }
    
    function dynamicForm(s) {
        alert(s.options[s.selectedIndex].value);
    }
    
    dojo.ready(start);
    