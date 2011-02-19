    schema = {
        title: "Aphasia Application",
        description: "Editing the Pictures and Words on the interface.",
        type: "object",
        properties: {
            topTabs: {
                type: "array",
                minItems: 1,
                maxItems: 3,
                items: {
                    type: "object",
                    properties: {
                        name: {
                            type: "string",
                            title: "Tab Name",
                            description: "URL Name of the tab (first character must be #)"
                        },
                        nameTag: {
                            type: "string",
                            title: "Appeared Tab Name",
                            description: "The name of the tab actually appearing on the page"
                        },
                        image: {
                            type: "string",
                            title: "Tab Image Name",
                            description: "The image that describes the tab name"
                        },
                        audioImages: {
                            type: "array",
                            minItems: 0,
                            maxItems: 9,
                            items: {
                                type: "object",
                                properties: {
                                    pic: {
                                        type: "string",
                                        title: "Picture name",
                                        description: "File name of the picture with extension"
                                    },
                                    word: {
                                        type: "string",
                                        title: "Word",
                                        description: "Short description of the picture"                                        
                                    },
                                    nameTag: {
                                        type: "string",
                                        title: "Unique name for Tab",
                                        description: "URL Name for the tab that contains the picture (must be unique from all other nameTag within audioImages"
                                    },
                                    phrase: {
                                        type: "string",
                                        title: "Phrase",
                                        description: "Long descriptive name of the picture"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            bottomTabs: {
                type: "array",
                minItems: 1,
                maxItems: 3,
                items: {
                    type: "object",
                    properties: {
                        name: {
                            type: "string",
                            title: "Tab Name",
                            description: "URL Name of the tab (first character must be #)"
                        },
                        nameTag: {
                            type: "string",
                            title: "Appeared Tab Name",
                            description: "The name of the tab actually appearing on the page"
                        },
                        image: {
                            type: "string",
                            title: "Tab Image Name",
                            description: "The image that describes the tab name"
                        },
                        audioImages: {
                            type: "array",
                            minItems: 0,
                            maxItems: 9,
                            items: {
                                type: "object",
                                properties: {
                                    pic: {
                                        type: "string",
                                        title: "Picture name",
                                        description: "File name of the picture with extension"
                                    },
                                    word: {
                                        type: "string",
                                        title: "Word",
                                        description: "Short description of the picture"                                        
                                    },
                                    nameTag: {
                                        type: "string",
                                        title: "Unique name for Tab",
                                        description: "URL Name for the tab that contains the picture (must be unique from all other nameTag within audioImages"
                                    },
                                    phrase: {
                                        type: "string",
                                        title: "Phrase",
                                        description: "Long descriptive name of the picture"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }  
    }
    
    thisSchema = {};
    
    
    function start() {
        var mainArea = dojo.byId("mainArea");
        var ulList = ["Step 1 -- Getting Started", "Step 2 -- Customize Your Tabs", "Step 3 -- Select Contents for Your Tabs", "Step 4 -- Summary", "Step 5 -- You're Done!"];
        var tabs = dojo.create("table",null,mainArea);
        dojo.forEach(ulList, function(item) {
            var td = dojo.create("td",{id:item, innerHTML:item, style:{"font-size":"25%"}},tabs);
        });
        this.forwardButton = [];
        this.backwardButton = [];
        var ids = ["0","1","2","3","4"];
        for (var i=0; i<5; i++) {
            var div = dojo.create("div",{id:ids[i],className:"mainContent", style:{"display":"none"}},mainArea);
        }
        this.forwardButton[0] = step1(ids);
        
        i=0;
        jsProgress.update({maximum:4});
        dojo.forEach(this.forwardButton, function(button) {
            dojo.connect(button,'onclick',function() {
                if (i!=4) {
                                  
                    dojo.byId(ulList[i]).className = null;
                
                    button.parentNode.style.display="none";
                    forwardButton[++i].parentNode.style.display="block";
                    jsProgress.update({progress:i});
                    
                    dojo.byId(ulList[i]).className = "td1";
                }
            });
        });
        dojo.forEach(this.backwardButton, function(button) {
            dojo.connect(button,'onclick',function() {
                if (i!=0) {
                
                    dojo.byId(ulList[i]).className = null;
                
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
    
        var layout = [{
            field:"Theme",
            name:"Theme of Interface",
            width:"200px"
        },
        {
            field:"id",
            name:"Unique ID",
            width:"200px"
        }
        ];
    
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
        
        var gridDiv = dojo.create("div",{className:"grid",style:{"width":"400px","display":"none"},innerHTML:"Select the existing interface you want."},div);
        var grid = new dojox.grid.DataGrid({
            query: { Title: '*' },
            structure: layout
        },document.createElement("div"));
        dojo.place(grid.domNode,gridDiv);
        
        dojo.create("br",null,form);
        dojo.create("br",null,form);
        var button = dojo.create("button",{innerHTML:"Next"},div);
        
        
        dojo.connect(c2,'onclick',function() {
            gridDiv.style.display = "block";
        });
        dojo.connect(c3,'onclick',function() {
            gridDiv.style.display = "block";
        });
        dojo.connect(c1,'onclick',function() {
            gridDiv.style.display = "none";
        });
        
        div.style.display = "block";
        grid.startup();
        return button;
    }
    
    dojo.ready(start);
    