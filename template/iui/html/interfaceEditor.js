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
    
    
    function start() {
        var mainArea = dojo.byId("mainArea");
        var ulList = ["Step 1 -- Getting Started", "Step 2 -- Customize Your Tabs", "Step 3 -- Select Contents for Your Tabs", "Step 4 -- Summary", "Step 5 -- You're Done!"];
        var tabs = dojo.create("table",null,mainArea);
        for (var i=0; i<5; i++) {
            var div = dojo.create("div",{id:i, className:"mainContent", style:{"display":"none"}, innerHTML:i},mainArea);
            var backButton = new dijit.form.Button({
                label: "Back"
                
            },"mainArea");
        }
        dojo.byId("0").style.display = "block";
        dojo.forEach(ulList, function(item) {
            var td = dojo.create("td",{innerHTML:item, className:"tabs"},tabs);
        });
    }    
    
    dojo.ready(start);
    