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
    
    dojo.require('dojo.io.iframe');
    
    thisSchema = {
        "themeName":"",
        "id":"",
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
                    },
                    {
                        "pic":"",
                        "word":"",
                        "nameTag":"",
                        "phrase":""
                    },
                    {
                        "pic":"",
                        "word":"",
                        "nameTag":"",
                        "phrase":""
                    },
                    {
                        "pic":"",
                        "word":"",
                        "nameTag":"",
                        "phrase":""
                    }
                    ,{
                        "pic":"",
                        "word":"",
                        "nameTag":"",
                        "phrase":""
                    }
                    ,{
                        "pic":"",
                        "word":"",
                        "nameTag":"",
                        "phrase":""
                    },
                    {
                        "pic":"",
                        "word":"",
                        "nameTag":"",
                        "phrase":""
                    },
                    {
                        "pic":"",
                        "word":"",
                        "nameTag":"",
                        "phrase":""
                    },
                    {
                        "pic":"",
                        "word":"",
                        "nameTag":"",
                        "phrase":""
                    }
                ]
            },
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
                    },
                    {
                        "pic":"",
                        "word":"",
                        "nameTag":"",
                        "phrase":""
                    },
                    {
                        "pic":"",
                        "word":"",
                        "nameTag":"",
                        "phrase":""
                    },
                    {
                        "pic":"",
                        "word":"",
                        "nameTag":"",
                        "phrase":""
                    }
                    ,{
                        "pic":"",
                        "word":"",
                        "nameTag":"",
                        "phrase":""
                    }
                    ,{
                        "pic":"",
                        "word":"",
                        "nameTag":"",
                        "phrase":""
                    },
                    {
                        "pic":"",
                        "word":"",
                        "nameTag":"",
                        "phrase":""
                    },
                    {
                        "pic":"",
                        "word":"",
                        "nameTag":"",
                        "phrase":""
                    },
                    {
                        "pic":"",
                        "word":"",
                        "nameTag":"",
                        "phrase":""
                    }
                ]
            },
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
                    },
                    {
                        "pic":"",
                        "word":"",
                        "nameTag":"",
                        "phrase":""
                    },
                    {
                        "pic":"",
                        "word":"",
                        "nameTag":"",
                        "phrase":""
                    },
                    {
                        "pic":"",
                        "word":"",
                        "nameTag":"",
                        "phrase":""
                    }
                    ,{
                        "pic":"",
                        "word":"",
                        "nameTag":"",
                        "phrase":""
                    }
                    ,{
                        "pic":"",
                        "word":"",
                        "nameTag":"",
                        "phrase":""
                    },
                    {
                        "pic":"",
                        "word":"",
                        "nameTag":"",
                        "phrase":""
                    },
                    {
                        "pic":"",
                        "word":"",
                        "nameTag":"",
                        "phrase":""
                    },
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
                    },
                    {
                        "pic":"",
                        "word":"",
                        "nameTag":"",
                        "phrase":""
                    },
                    {
                        "pic":"",
                        "word":"",
                        "nameTag":"",
                        "phrase":""
                    },
                    {
                        "pic":"",
                        "word":"",
                        "nameTag":"",
                        "phrase":""
                    }
                    ,{
                        "pic":"",
                        "word":"",
                        "nameTag":"",
                        "phrase":""
                    }
                    ,{
                        "pic":"",
                        "word":"",
                        "nameTag":"",
                        "phrase":""
                    },
                    {
                        "pic":"",
                        "word":"",
                        "nameTag":"",
                        "phrase":""
                    },
                    {
                        "pic":"",
                        "word":"",
                        "nameTag":"",
                        "phrase":""
                    },
                    {
                        "pic":"",
                        "word":"",
                        "nameTag":"",
                        "phrase":""
                    }
                ]
            },
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
                    },
                    {
                        "pic":"",
                        "word":"",
                        "nameTag":"",
                        "phrase":""
                    },
                    {
                        "pic":"",
                        "word":"",
                        "nameTag":"",
                        "phrase":""
                    },
                    {
                        "pic":"",
                        "word":"",
                        "nameTag":"",
                        "phrase":""
                    }
                    ,{
                        "pic":"",
                        "word":"",
                        "nameTag":"",
                        "phrase":""
                    }
                    ,{
                        "pic":"",
                        "word":"",
                        "nameTag":"",
                        "phrase":""
                    },
                    {
                        "pic":"",
                        "word":"",
                        "nameTag":"",
                        "phrase":""
                    },
                    {
                        "pic":"",
                        "word":"",
                        "nameTag":"",
                        "phrase":""
                    },
                    {
                        "pic":"",
                        "word":"",
                        "nameTag":"",
                        "phrase":""
                    }
                ]
            },
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
                    },
                    {
                        "pic":"",
                        "word":"",
                        "nameTag":"",
                        "phrase":""
                    },
                    {
                        "pic":"",
                        "word":"",
                        "nameTag":"",
                        "phrase":""
                    },
                    {
                        "pic":"",
                        "word":"",
                        "nameTag":"",
                        "phrase":""
                    }
                    ,{
                        "pic":"",
                        "word":"",
                        "nameTag":"",
                        "phrase":""
                    }
                    ,{
                        "pic":"",
                        "word":"",
                        "nameTag":"",
                        "phrase":""
                    },
                    {
                        "pic":"",
                        "word":"",
                        "nameTag":"",
                        "phrase":""
                    },
                    {
                        "pic":"",
                        "word":"",
                        "nameTag":"",
                        "phrase":""
                    },
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
    
    backUpSchema = JSON.stringify(thisSchema);
    backUpSchema = JSON.parse(backUpSchema);
    
    uniqueId = 1000;
    backUpId1 = 1000;
    uniqueId2 = 1000;
    backUpId2 = 1000;

    forwardButton = [];
    backwardButton = [];
    // array = [];
    // array1 = [];
    // array2 = [];
    // array3 = [];
    // array4 = [];
    // array5 = [];
    // array6 = [];
    arrays = [[],[], [], [], [], []];
    backUpArrays = arrays;
    forms = [[["","",""],["","",""],["","",""],["","",""],["","",""],["","",""],["","",""],["","",""],["","",""]],[["","",""],["","",""],["","",""],["","",""],["","",""],["","",""],["","",""],["","",""],["","",""]],[["","",""],["","",""],["","",""],["","",""],["","",""],["","",""],["","",""],["","",""],["","",""]],[["","",""],["","",""],["","",""],["","",""],["","",""],["","",""],["","",""],["","",""],["","",""]],[["","",""],["","",""],["","",""],["","",""],["","",""],["","",""],["","",""],["","",""],["","",""]],[["","",""],["","",""],["","",""],["","",""],["","",""],["","",""],["","",""],["","",""],["","",""]]];
    backUpForms = JSON.stringify(forms);
    backUpForms = JSON.parse(backUpForms);
    
    topNumbers=[0,0,0];
    bottomNumbers=[0,0,0];
    
    isPreload = [];
    
    thisItem = {};
    
    array = [];
    
    
    //only need the URL, originalName, tags, and description (can use the "_id" from the JSON object) of the image/audio (put file into a form)
    
    
    function start() {  
        var mainArea = dojo.byId("mainArea");
        var ulList = ["Step 1 -- Getting Started", "Step 2 -- Customize Your Top Tabs", "Step 3 -- Customize Your Bottom Tabs", "Step 4 -- Summary", "Step 5 -- You're Done!"];
        var tabs = dojo.create("table",{style:{"border-collapse":"collapse"}},mainArea);
        dojo.forEach(ulList, function(item) {
            var td = dojo.create("td",{id:item, innerHTML:item, className:"tabs", style:{"font-size":"25%"}},tabs);
        });
        var ids = ["0","1","2","3","4"];
        for (var i=0; i<5; i++) {
            var div = dojo.create("div",{id:ids[i],className:"mainContent", style:{"display":"none"}},mainArea);
        }
        example = [];
        var db=uow.getDatabase({
            database: 'Aphasia',
            collection: 'AphasiaJson',
            mode: 'crud' });
         db.then(function (data) {
                data.fetch({
                    onItem: function(item) {
                        example.push(item);
                    },
                    onComplete: function() {
                        step1(ids,ulList);
                    }
                });
         });
        //step1(ids,ulList);
        
        jsProgress.update({maximum:4});
        dojo.byId(ulList[0]).className = "td1";
    }

    function step1 (ids,ulList) {
        var k=0;
    
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
        
        var Grid = dojo.create("div",{className:"grid",id:"grid",style:{"display":"none"},innerHTML:"Select the existing interface you want."},div);
        var form = dojo.create("form",{name:"getData"},Grid);
        var table = dojo.create("table",{className:"dataTable"},form);
        var tr = dojo.create("tr",{className:"dataTable"},table);
        var td1 = dojo.create("td",{className:"td3"},tr);
        var td2 = dojo.create("td",{className:"td2",innerHTML:"Interface Theme"},tr);
        var td3 = dojo.create("td",{className:"td2",innerHTML:"Id"},tr);
        var db = uow.getDatabase({
            database: 'Aphasia',
            collection: 'AphasiaJson',
            mode: 'crud' });
        db.then(function(data) {
            data.fetch({
                onItem: function(item) {
                    tr = dojo.create("tr",null,table);
                    td1 = dojo.create("input",{type:"radio",name:"2p", value:item._id, className:"td3"},tr);
                    if (k==0) {
                        td1.checked = true;
                    }
                    if (item.themeName == undefined) {
                        td2 = dojo.create("td",{className:"td3", innerHTML:"N/A"},tr);                   
                    }
                    else {
                        td2 = dojo.create("td",{className:"td3",innerHTML:item.themeName},tr);
                    }

                    td2 = dojo.create("td",{className:"td3",innerHTML:item._id},tr);
                   k++;
                }
            });
        });
        var Grid2  = dojo.create("div",null,div);
        var table1 = dojo.create("table",null,Grid2);
        var tr1 = dojo.create("table",null,table1);
        var td = dojo.create("td",null,tr1);
        var label = dojo.create("label",{innerHTML:"Theme name for interface: "},td);
        var text = dojo.create("input",{id:"themeName"},td);
   
       var forwardButton = dojo.create("button",{innerHTML:"Start"},div);
            dojo.connect(forwardButton,'onclick',dojo.hitch(this,function() {
                if (c1.checked) {  
                    thisSchema = JSON.stringify(backUpSchema);
                    thisSchema = JSON.parse(thisSchema);
                    thisItem = JSON.stringify(thisSchema);
                    thisItem = JSON.parse(thisItem);
                    uniqueId = 1000;
                    uniqueId2 = 1000;
                    arrays=[[],[],[],[],[],[]];
                    forms = JSON.stringify(backUpForms);
                    forms = JSON.parse(forms);
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
                else if (c2.checked) {
                    dojo.empty(dojo.byId(ids[1]));
                    dojo.empty(dojo.byId(ids[2]));
                    loadData(document.forms['getData'].elements['2p'], ids, ulList);

                    dojo.byId(ulList[0]).className = "tabs";
                
                    div.style.display="none";
                    dojo.byId(ids[1]).style.display="block";
                    jsProgress.update({progress:1});
                    
                    dojo.byId(ulList[1]).className = "td1";
                   
                }
                else if (c3.checked) {
                    confirmDelete(document.forms['getData'].elements['2p'],ids,div,ulList);
                }
        }));


        dojo.connect(c2,'onclick',function() {
            Grid.style.display = "block";
            Grid2.style.display = "none";
            if (example.length!=0) {
                forwardButton.style.display = "";
            }
            else {
                forwardButton.style.display = "none";
            }
        });
        dojo.connect(c3,'onclick',function() {
            Grid.style.display = "block";
            Grid2.style.display = "none";
            if (example.length!=0) {
                forwardButton.style.display = "";
            }
            else {
                forwardButton.style.display = "none";
            }
        });
        dojo.connect(c1,'onclick',function() {
            Grid.style.display = "none";
            Grid2.style.display = "block";
            forwardButton.style.display = "";
        });
        div.style.display = "block";
    }
    
    function confirmDelete(radioObj,ids,div,ulList) {
        var id;
        for (var i=0; i<radioObj.length; i++) {
            if (radioObj[i].checked) {
                id = radioObj[i].value;
                break;
            }
        }
        if (radioObj.length==null) {
            id = radioObj.value;
        }
        var answer = confirm("Are you sure you want to delete this item: "+ id);
        if (answer) {
            dojo.empty(dojo.byId(ids[1]));
            dojo.empty(dojo.byId(ids[2]));
            dojo.byId(ulList[0]).className = "tabs";
            div.style.display="none";
            dojo.byId(ids[4]).style.display="block";
            
            jsProgress.update({progress:4});
            dojo.byId(ulList[4]).className = "td1";
            var db = uow.getDatabase({
                database: 'Aphasia',
                collection: 'AphasiaJson',
                mode: 'crud' 
            });
            db.then(function(data) {
                data.deleteOne({
                    query:{'_id':id},
                    save: true,
                    onComplete: donePage(ids,true)
                });
            });
        }
    }
    
    function loadData(radioObj,ids,ulList) {
        var id;
        topNumbers=[0,0,0];
        bottomNumbers=[0,0,0];   
        for (var i=0; i<radioObj.length; i++) {
            if (radioObj[i].checked) {
                id = radioObj[i].value;
                break;
            }
        }
        if (radioObj.length==null) {
            id = radioObj.value;
        }
        var db = uow.getDatabase({
            database: 'Aphasia',
            collection: 'AphasiaJson',
            mode: 'crud' 
        });
        var i=0;
        var j=0;
        var k=0;
        db.then(function(data) {
            data.fetch({
                query: {'_id':id},
                onItem: function(item) {
                    thisItem = item;
                    thisSchema.themeName = item.themeName;
                    thisSchema.id = item._id;
                    if (item.topTabs!=null) {
                        dojo.forEach(item.topTabs, function(aTab) {
                            k=0;
                            thisSchema.topTabs[i].nameTag = aTab.nameTag;
                            thisSchema.topTabs[i].name = "#"+aTab.nameTag;
                            thisSchema.topTabs[i].image = aTab.image;
                            if (aTab.audioImages!=null) {
                                dojo.forEach(aTab.audioImages,function(aPiece) {
                                    if(aPiece.pic=="") {
                                        return;
                                    }
                                    thisSchema.topTabs[i].audioImages[k].pic = aPiece.pic;
                                    thisSchema.topTabs[i].audioImages[k].word = aPiece.word;
                                    thisSchema.topTabs[i].audioImages[k].image = aPiece.image;
                                    thisSchema.topTabs[i].audioImages[k].phrase = aPiece.phrase;
                                    topNumbers[i]++;
                                    k++;
                                });
                            }
                            i++;
                        });
                    }
                    k=0;
                    if (item.bottomTabs!=null) {
                        dojo.forEach(item.bottomTabs, function(aTab) {
                            k=0;
                            thisSchema.bottomTabs[j].nameTag = aTab.nameTag;
                            thisSchema.bottomTabs[j].name = "#"+aTab.nameTag;
                            thisSchema.bottomTabs[j].image = aTab.image;
                            if (aTab.audioImages!=null) {
                                dojo.forEach(aTab.audioImages,function(aPiece) {
                                    if (aPiece.pic=="") {
                                        return;
                                    }
                                    thisSchema.bottomTabs[j].audioImages[k].pic = aPiece.pic;
                                    thisSchema.bottomTabs[j].audioImages[k].word = aPiece.word;
                                    thisSchema.bottomTabs[j].audioImages[k].image = aPiece.image;
                                    thisSchema.bottomTabs[j].audioImages[k].phrase = aPiece.phrase;
                                    bottomNumbers[j]++;
                                    k++;
                                });
                            }
                            j++;                        
                        });
                    }
                },
                onComplete: function(items) {
                    isPreload = [true,true,true,true,true,true];
                    tabStep(ids,1,"Top",ulList);
                    tabStep(ids,2,"Bottom",ulList);  
                    dojo.byId("form1"+1).value = topNumbers[0];
                    dojo.byId("form1"+2).value = topNumbers[1];
                    dojo.byId("form1"+3).value = topNumbers[2];
                    dojo.byId("form1"+4).value = bottomNumbers[0];
                    dojo.byId("form1"+5).value = bottomNumbers[1];
                    dojo.byId("form1"+6).value = bottomNumbers[2];  
                    for (var i=1; i<7; i++) {
                        if (dojo.byId("form1"+i).value!=0) {
                            dynamicForm(dojo.byId("form1"+i),dojo.byId("form1"+i).parentNode,i);
                            dojo.byId("form1"+i).disabled = "";
                            dojo.byId("form1"+i).className = "";
                        }
                    }
                }
            });
        });
    }
    
    function tabStep(ids, j, word, ulList) {
        var div = dojo.byId(ids[j]);
        var theTab = thisSchema.topTabs;
        if (j==2) {
            j=4;
            theTab = thisSchema.bottomTabs;
        }
        var h4 = dojo.create("div",{className:"first",innerHTML:"Customize Your "+word+" Tabs"},div);
        
        var k=j;
        var name1 = dojo.create("div",{className:"second"}, div);        
        var bold = dojo.create("b",{innerHTML:"Tab 1"},name1);
        var tab1 = dojo.create("form",{enctype:"multipart/form-data", method:"POST", id:"uploadForm"+k, className:"third"},name1);
        var tag = dojo.create("input",{name:"tags",style:{"display":"none"}},tab1);
        var label1 = dojo.create("label",{innerHTML:"Name of Tab:  "},tab1);
        var text1 = dojo.create("input",{id:"text11"+j,className:"text",value:theTab[0].nameTag},tab1);
        var label2 = dojo.create("label",{innerHTML:"&nbsp; Tab Picture: "},tab1);
        var text2 = dojo.create("input",{id:"text12"+k,type:"file", name:"file", disabled:"disabled",className:"disabled"},tab1);
        if (text1.value.trim()!="") {
            text2.disabled = "";
            text2.className = "";
        }
        var a = dojo.create("input",{type:"button",value:"Clear", disabled:"disabled"},tab1);
        var label3 = dojo.create("label",{innerHTML:"&nbsp; # Images for Tab: "},tab1);
        var text3 = dojo.create("select",{id:"form1"+k, disabled:"disabled",className:"disabled"},tab1);
        if (text2.value.trim()!="") {
            text3.disabled = "";
            text3.className = "";
        }
        
        var name = dojo.create("input",{name:"description",value:"uploadForm"+k,style:{"display":"none"}},tab1);

        for (var i=0; i<10; i++) {
            dojo.create("option",{value:i,innerHTML:i},text3);
        }
        var theDiv = dojo.create("div",{id:"tab"+k},name1);
            dojo.connect(text1, 'onkeyup', dojo.hitch(this, catchRelease, text1, text2,a, text3, k));
            dojo.connect(text2, 'onchange', dojo.hitch(this, catchRelease, text2, text3,a, "", k));
            dojo.connect(text3,'onchange',dojo.hitch(this, dynamicForm,text3,dojo.byId("tab"+k),k));
            dojo.connect(a, 'onclick', dojo.hitch(this, clearForm, text2, text3, k));
        
        
        var k=j+1;
        var name1 = dojo.create("div",{className:"second"},div);
        var bold = dojo.create("b",{innerHTML:"Tab 2"},name1);
        var tab2 = dojo.create("form",{id:"uploadForm"+k, method:"POST", enctype:"multipart/form-data", className:"third"},name1);
        var label1 = dojo.create("label",{innerHTML:"Name of Tab:  "},tab2);
        var text1 = dojo.create("input",{id:"text11"+k,className:"text",value:theTab[1].nameTag},tab2);
        var label2 = dojo.create("label",{innerHTML:"&nbsp; Tab Picture: "},tab2);
        var text2 = dojo.create("input",{id:"text12"+k,type:"file", name:"file", disabled:"disabled",className:"disabled"},tab2);
        if (text1.value.trim()!="") {
            text2.disabled = "";
            text2.className = "";
        }
        var a = dojo.create("input",{type:"button", value:"Clear", disabled:"disabled"},tab2);
        var label3 = dojo.create("label",{innerHTML:"&nbsp; # Images for Tab: "},tab2);
        var text3 = dojo.create("select",{id:"form1"+k, disabled:"disabled",className:"disabled"},tab2);
        if (text2.value.trim()!="") {
            text3.disabled = "";
            text3.className = "";
            a.disabled = "";
        }
        
        var name = dojo.create("input",{name:"description",value:"uploadForm"+k,style:{"display":"none"}},tab2);
        var tag = dojo.create("input",{name:"tags",style:{"display":"none"}},tab2);

        for (var i=0; i<10; i++) {
            dojo.create("option",{value:i,innerHTML:i},text3);
        }
        var theDiv = dojo.create("div",{id:"tab"+k},name1);
            dojo.connect(text3,'onchange',dojo.hitch(this,dynamicForm,text3,dojo.byId("tab"+k),k));
            dojo.connect(text1, 'onkeyup', dojo.hitch(this, catchRelease, text1, text2,a, text3, k));
            dojo.connect(text2, 'onchange', dojo.hitch(this, catchRelease, text2, text3,a, "", k));
            dojo.connect(a, 'onclick', dojo.hitch(this, clearForm, text2, text3, j+1));

        
        k = j+2;
        var name1 = dojo.create("div",{className:"second"},div);
        var bold = dojo.create("b",{innerHTML:"Tab 3"},name1);
        var tab3 = dojo.create("form",{id:"uploadForm"+k, method:"POST", enctype:"multipart/form-data", className:"third"},name1);
        var label1 = dojo.create("label",{innerHTML:"Name of Tab:  "},tab3);
        var text1 = dojo.create("input",{id:"text11"+k,className:"text",value:theTab[2].nameTag},tab3);
        var label2 = dojo.create("label",{innerHTML:"&nbsp; Tab Picture: "},tab3);
        var text2 = dojo.create("input",{id:"text12"+k,type:"file", name:"file", disabled:"disabled",className:"disabled"},tab3);
        if (text1.value.trim()!="") {
            text2.disabled = "";
            text2.className = "";
        }
        var a = dojo.create("input",{type:"button", value:"Clear", disabled:"disabled"},tab3);
        var label3 = dojo.create("label",{innerHTML:"&nbsp; # Images for Tab: "},tab3);
        var text3 = dojo.create("select",{id:"form1"+k, disabled:"disabled",className:"disabled"},tab3);
        if (text2.value.trim()!="") {
            text3.disabled = "";
            text3.className = "";
            a.disabled = "";
        }
        
        var name = dojo.create("input",{name:"description",value:"uploadForm"+k,style:{"display":"none"}},tab3);
        var tag = dojo.create("input",{name:"tags",style:{"display":"none"}},tab3);

        for (var i=0; i<10; i++) {
            dojo.create("option",{value:i,innerHTML:i},text3);
        }
        var theDiv = dojo.create("div",{id:"tab"+k},name1);
            dojo.connect(text3,'onchange',dojo.hitch(this,dynamicForm,text3,dojo.byId("tab"+k),k));
            dojo.connect(text1, 'onkeyup', dojo.hitch(this, catchRelease, text1, text2,a,text3, k));
            dojo.connect(text2, 'onchange', dojo.hitch(this, catchRelease, text2, text3,a,"", k));
            dojo.connect(a, 'onclick', dojo.hitch(this, clearForm, text2, text3, j+2));

        
        if (j==4) {
            j=2;
        }

        var backwardButton =  dojo.create("button",{innerHTML:"Back"},div);
            dojo.connect(backwardButton,'onclick',dojo.hitch(this,function() {    
                var k=j;
                if (k==1) {
                    array1=[];
                    array2=[];
                    array3=[];
                    array4=[];
                    array5=[];
                    array6=[];
                    arrays=[array1, array2, array3, array4, array5, array6];
                }
                dojo.byId(ulList[k]).className = "tabs";
            
                dojo.byId(ids[k]).style.display="none";
                dojo.byId(ids[--k]).style.display="block";
                jsProgress.update({progress:k});
                
                dojo.byId(ulList[k]).className = "td1";
            }));
        
        var forwardButton1 = dojo.create("button",{innerHTML:"Next"},div);
            dojo.connect(forwardButton1,'onclick',dojo.hitch(this,function() {
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
                
                //captureValue(j);
                
            }));
    }
    
    function dynamicForm(s,tab,i) {
        var second = [];
        var theForm = forms[--i];
        array = [];
        i++;
        var k=0;
        var item1 = "";
        var item2 = "";
        var item3 = "";
        m=i-1;
        if (isPreload[m]) {
            isPreload[m] = false;
            if (i<=3) {
                m = i-1;
                dojo.forEach(thisSchema.topTabs[m].audioImages,function(aim) {
                    if (aim.pic == "") {
                        return;
                    }
                    array.push(aim.pic);
                    array.push(aim.word);
                    array.push(aim.phrase);
                });
            }
            else {
                m = i-4;
                dojo.forEach(thisSchema.bottomTabs[m].audioImages,function(aim) {
                    if (aim.pic == "") {
                        return;
                    }
                    array.push(aim.pic);
                    array.push(aim.word);
                    array.push(aim.phrase);
                });                    
            }
            var theArray = arrays[--i];
            i++;
            if (theArray.length <= array.length) {
                for (j=0; j<array.length; j++) {
                    if (array[j].value!=null) {
                        second[j] = array[j].value;
                        theArray[j] = array[j].value;
                    }
                    else {
                        second[j] = array[j];
                        theArray[j] = array[j];                    
                    }
                }
            }
            else {
                for (j=0; j<theArray.length; j++) {
                    second[j] = theArray[j];
                }
            }
        }
        else {
            if (dojo.byId("tab"+i) != null) {
                array = dojo.byId("tab"+i).getElementsByTagName("input");
            }
            var theArray = arrays[--i];
            console.log(theArray);
            i++;
            if (theArray.length <= array.length) {
                for (j=0; j<array.length; j++) {
                    if (array[j].value!=null) {
                        second[j] = array[j].value;
                        theArray[j] = array[j].value;
                    }
                    else {
                        second[j] = array[j];
                        theArray[j] = array[j];                    
                    }
                }
            }
            else {
                for (j=0; j<theArray.length; j++) {
                    second[j] = theArray[j];
                }
            }            
        }
        for (j=0; j<9; j++) {
            if (dojo.byId("tab"+i+j)!=null) {
                dojo.destroy("tab"+i+j);
            }
        }
        console.log(second[1]);
        for (j=0; j<s.options[s.selectedIndex].value; j++) {
            if(k<second.length) {
                item1 = second[k++];
                item2 = second[k++];
                item3 = second[k++];
                item4 = second[k++];
                item5 = second[k++];
            }
            else {
                item1 = "";
                item2 = "";
                item3 = "";
                item4 = "";
                item5 = "";
            }
            var v = j+1;
            console.log(dojo.byId("tab"+i));
            var div = dojo.create("form",{method:"POST", enctype:"multipart/form-data",id:"tab"+i+j},dojo.byId("tab"+i));
            var table = dojo.create("table",{className:"contentTable"},div);
            var tr = dojo.create("tr",{className:"contentRow"},table);
            var td = dojo.create("td",{className:"contentItem"},tr);
            dojo.create("label",{innerHTML:"Pic #"+v+": "},td);
            var one = theForm[j][0] = dojo.create("input",{type:"file", name:"file", value:"", id: "contentItem"+i+j+"1"},td);
            var a = dojo.create("button",{id:"button"+j+""+i, innerHTML:"Clear"},td);
            var td = dojo.create("td",{className:"contentItem"},tr);
            dojo.create("label",{innerHTML:"Word for Pic #"+v+": "},td);
            var two = theForm[j][1] = dojo.create("input",{value:item2, id: "contentItem"+i+j+"2"},td);
            var td = dojo.create("td",{style:{"border":"1px solid black","width":"30%"}},tr);
            dojo.create("label",{innerHTML:"Phrase: "},td);
            var three = theForm[j][2] = dojo.create("input",{style:{"width":"100%"},value:item3, id: "contentItem"+i+j+"3"},td);
            if (j!=0) {
                dojo.byId("contentItem"+i+j+"1").disabled = "disabled";
                dojo.byId("contentItem"+i+j+"1").className = "disabled";
                dojo.byId("contentItem"+i+j+"2").disabled = "disabled";
                dojo.byId("contentItem"+i+j+"2").className = "disabled";
                dojo.byId("contentItem"+i+j+"3").disabled = "disabled";
                dojo.byId("contentItem"+i+j+"3").className = "disabled";
                a.disabled = "disabled";
            }
            var name = dojo.create("input",{name:"description",value:"tab"+i+j,style:{"display":"none"}},div);
            var tag = dojo.create("input",{name:"tags",style:{"display":"none"}},div);
        }
        
        for (j=0; j<s.options[s.selectedIndex].value; j++) {
            var one = theForm[j][0];
            var two = theForm[j][1];          
            var three = theForm[j][2];
            var v = j+1;
            dojo.connect(dojo.byId("button"+j+""+i), 'onclick', dojo.hitch(this, clearForm2, one, two ,three , dojo.byId("button"+v+""+i),  j+1 , theForm));
            dojo.connect(one, 'onchange', dojo.hitch(this, release2, one, two, three, dojo.byId("button"+v+""+i),  j+1, theForm));
            dojo.connect(two, 'onkeyup', dojo.hitch(this, release2, one, two, three, dojo.byId("button"+v+""+i), j+1, theForm));
            dojo.connect(three, 'onkeyup', dojo.hitch(this, release2, one, two, three, dojo.byId("button"+v+""+i), j+1, theForm));  
        }
        
    }
    
    function summaryPage(ids,ulList) {
        if (thisSchema.themeName.trim() == "") {
            thisSchema.themeName = dojo.byId("themeName").value;
        }
        var isNothing = true;
        var div = dojo.byId(ids[3]);
        var h4 = dojo.create("div",{className:"first",innerHTML:"Summary"},div);
        var h3 = dojo.create("div",{className:"second",innerHTML:"Theme Name for Interface: "+thisSchema.themeName},div);
        

        if (dojo.byId("text111").value.trim() != "" || dojo.byId("text112").value.trim() != "" || dojo.byId("text113").value.trim() != "") {
            var topTabs = dojo.create("div",{style:{"margin":"1%"}, className:"second"},div);
            var bold = dojo.create("b",{innerHTML:"Top Tabs"},topTabs);
            isNothing = false;
        }
            if (dojo.byId("text111").value.trim() != "" || (dojo.byId("text121").value.trim() != "" && dojo.byId("text121").className != "disabled")) {
                var tab1 = dojo.create("div",{style:{"margin":"1%"}, className:"third",innerHTML:"<b>Tab 1</b>"},topTabs);
                var table = dojo.create("table",{style:{"position":"relative", "left":"3%", "font-weight":"bold", "text-align":"center", "width":"50%"}},tab1);
                var tr = dojo.create("tr",null,table);
                thisItem.topTabs[0].nameTag = thisSchema.topTabs[0].nameTag = dojo.byId("text111").value;
                thisItem.topTabs[0].image = thisSchema.topTabs[0].image = dojo.byId("text121").value;
                thisItem.topTabs[0].name = thisSchema.topTabs[0].name = "#"+dojo.byId("text111").value;
                var td = dojo.create("td",{style:{"width":"50%"}, innerHTML:"Name: "+thisSchema.topTabs[0].nameTag},tr);
                var td = dojo.create("td",{style:{"width":"50%"}, innerHTML:"Image: "+thisSchema.topTabs[0].image},tr);
                var i=1;
                if (dojo.byId("form11").options[dojo.byId("form11").selectedIndex].value>0 && dojo.byId("form11").className != "disabled" && forms[0][0][0].value.trim() != "") {
                    var table = dojo.create("table",{className:"dataTable"},tab1);
                    var tr = dojo.create("tr",null,table);
                    var td = dojo.create("td",{style:{"width":"5%"}, className:"dataTd", innerHTML:" "},tr);
                    var td = dojo.create("td",{style:{"width":"20%"},className:"dataTd", innerHTML:"Picture"},tr);
                    var td = dojo.create("td",{style:{"width":"15%"},className:"dataTd", innerHTML:"Word"},tr);
                    var td = dojo.create("td",{className:"dataTd", innerHTML:"Phrase"},tr);
                    for(j=0; j<dojo.byId("form11").options[dojo.byId("form11").selectedIndex].value; j++) {
                        var info = forms[0][j];
                        if (info[0].className == "disabled" || info[0].value == null || info[0].value.trim() == "") {
                            break;
                        }
                        var tr = dojo.create("tr",null,table);
                        var td = dojo.create("td",{className:"dataTd", innerHTML:i},tr);
                        var td = dojo.create("td",{className:"dataTd", innerHTML:info[0].value}, tr);
                        var td = dojo.create("td",{className:"dataTd", innerHTML:info[1].value},tr);
                        var td = dojo.create("td",{className:"dataTd", innerHTML:info[2].value},tr);
                        thisItem.topTabs[0].audioImages[j].pic = thisSchema.topTabs[0].audioImages[j].pic = info[0].value;
                        thisItem.topTabs[0].audioImages[j].word = thisSchema.topTabs[0].audioImages[j].word = info[1].value;
                        thisItem.topTabs[0].audioImages[j].nameTag = thisSchema.topTabs[0].audioImages[j].nameTag = uniqueId2;
                        thisItem.topTabs[0].audioImages[j].phrase = thisSchema.topTabs[0].audioImages[j].phrase = info[2].value;
                        uniqueId2++;
                        i++;
                    }
                }
                else {
                     for (j=0; j<thisItem.topTabs[0].audioImages.length; j++) {
                            thisItem.topTabs[0].audioImages[j].pic = thisSchema.topTabs[0].audioImages[j].pic = "";
                            thisItem.topTabs[0].audioImages[j].word = thisSchema.topTabs[0].audioImages[j].word = "";
                            thisItem.topTabs[0].audioImages[j].nameTag = thisSchema.topTabs[0].audioImages[j].nameTag = "";
                            thisItem.topTabs[0].audioImages[j].phrase = thisSchema.topTabs[0].audioImages[j].phrase = "";                
                    }               
                }
        }
        else {
            thisItem.topTabs[0].nameTag =thisSchema.topTabs[0].nameTag = "";
            thisItem.topTabs[0].name =thisSchema.topTabs[0].name = "";
            thisItem.topTabs[0].image =thisSchema.topTabs[0].image = "";
        } 
        
            if (dojo.byId("text112").value.trim() != "" || (dojo.byId("text122").value.trim() != "" && dojo.byId("text122").className != "disabled")) {
                var tab2 = dojo.create("div",{style:{"margin":"1%"}, className:"third",innerHTML:"<b>Tab 2</b>"},topTabs);
                var table = dojo.create("table",{style:{"position":"relative", "left":"3%", "font-weight":"bold", "text-align":"center", "width":"50%"}},tab2);
                var tr = dojo.create("tr",null,table);
                thisItem.topTabs[1].nameTag = thisSchema.topTabs[1].nameTag = dojo.byId("text112").value;
                thisItem.topTabs[1].image = thisSchema.topTabs[1].image = dojo.byId("text122").value;
                thisItem.topTabs[1].name = thisSchema.topTabs[1].name = "#"+dojo.byId("text112").value;
                var td = dojo.create("td",{style:{"width":"50%"}, innerHTML:"Name: "+thisSchema.topTabs[1].nameTag},tr);
                var td = dojo.create("td",{style:{"width":"50%"}, innerHTML:"Image: "+thisSchema.topTabs[1].image},tr);
                
                var i=1;
                if (dojo.byId("form12").options[dojo.byId("form12").selectedIndex].value>0 && dojo.byId("form12").className != "disabled" && forms[1][0][0].value.trim() != "") {
                    var table = dojo.create("table",{className:"dataTable"},tab2);
                    var tr = dojo.create("tr",null,table);
                    var td = dojo.create("td",{style:{"width":"5%"}, className:"dataTd", innerHTML:" "},tr);
                    var td = dojo.create("td",{style:{"width":"20%"},className:"dataTd", innerHTML:"Picture"},tr);
                    var td = dojo.create("td",{style:{"width":"15%"},className:"dataTd", innerHTML:"Word"},tr);
                    var td = dojo.create("td",{className:"dataTd", innerHTML:"Phrase"},tr);
                    for(j=0; j<dojo.byId("form12").options[dojo.byId("form12").selectedIndex].value; j++) {
                        var info = forms[1][j];
                        if (info[0].className == "disabled" || info[0].value == null || info[0].value.trim() == "") {
                            break;
                        }
                        var tr = dojo.create("tr",null,table);
                        var td = dojo.create("td",{className:"dataTd", innerHTML:i},tr);
                        var td = dojo.create("td",{className:"dataTd", innerHTML:info[0].value}, tr);
                        var td = dojo.create("td",{className:"dataTd", innerHTML:info[1].value},tr);
                        var td = dojo.create("td",{className:"dataTd", innerHTML:info[2].value},tr);
                        thisItem.topTabs[1].audioImages[j].pic = thisSchema.topTabs[1].audioImages[j].pic = info[0].value;
                        thisItem.topTabs[1].audioImages[j].word = thisSchema.topTabs[1].audioImages[j].word = info[1].value;
                        thisItem.topTabs[1].audioImages[j].nameTag = thisSchema.topTabs[1].audioImages[j].nameTag = uniqueId2;
                        thisItem.topTabs[1].audioImages[j].phrase = thisSchema.topTabs[1].audioImages[j].phrase = info[2].value;
                        uniqueId2++;
                        i++;
                    }
                }
                else {
                    for (j=0; j<thisItem.topTabs[1].audioImages.length; j++) {
                        thisItem.topTabs[1].audioImages[j].pic = thisSchema.topTabs[1].audioImages[j].pic = "";
                        thisItem.topTabs[1].audioImages[j].word = thisSchema.topTabs[1].audioImages[j].word = "";
                        thisItem.topTabs[1].audioImages[j].nameTag = thisSchema.topTabs[1].audioImages[j].nameTag = "";
                        thisItem.topTabs[1].audioImages[j].phrase = thisSchema.topTabs[1].audioImages[j].phrase = "";                
                    }
                }
        }
        else {
            thisItem.topTabs[1].nameTag =thisSchema.topTabs[1].nameTag = "";
            thisItem.topTabs[1].name =thisSchema.topTabs[1].name = "";
            thisItem.topTabs[1].image =thisSchema.topTabs[1].image = "";
        } 
        
            if (dojo.byId("text113").value.trim() != "" || (dojo.byId("text123").value.trim() != "" && dojo.byId("text123").className != "disabled")) {
            var tab3 = dojo.create("div",{style:{"margin":"1%"}, className:"third",innerHTML:"<b>Tab 3</b>"},topTabs);
            var table = dojo.create("table",{style:{"position":"relative", "left":"3%", "font-weight":"bold", "text-align":"center", "width":"50%"}},tab3);
            var tr = dojo.create("tr",null,table);
            thisItem.topTabs[2].nameTag = thisSchema.topTabs[2].nameTag = dojo.byId("text113").value;
            thisItem.topTabs[2].image = thisSchema.topTabs[2].image = dojo.byId("text123").value;
            thisItem.topTabs[2].name = thisSchema.topTabs[2].name = "#"+dojo.byId("text113").value;
            var td = dojo.create("td",{style:{"width":"50%"}, innerHTML:"Name: "+thisSchema.topTabs[2].nameTag},tr);
            var td = dojo.create("td",{style:{"width":"50%"}, innerHTML:"Image: "+thisSchema.topTabs[2].image},tr);
            var i=1;
            if (dojo.byId("form13").options[dojo.byId("form13").selectedIndex].value>0 && dojo.byId("form13").className != "disabled" && forms[2][0][0].value.trim() != "") {
                var table = dojo.create("table",{className:"dataTable"},tab3);
                var tr = dojo.create("tr",null,table);
                var td = dojo.create("td",{style:{"width":"5%"}, className:"dataTd", innerHTML:" "},tr);
                var td = dojo.create("td",{style:{"width":"20%"},className:"dataTd", innerHTML:"Picture"},tr);
                var td = dojo.create("td",{style:{"width":"15%"},className:"dataTd", innerHTML:"Word"},tr);
                var td = dojo.create("td",{className:"dataTd", innerHTML:"Phrase"},tr);
                for(j=0; j<dojo.byId("form13").options[dojo.byId("form13").selectedIndex].value; j++) {
                    var info = forms[2][j];
                    if (info[0].className == "disabled" || info[0].value == null || info[0].value.trim() == "") {
                        break;
                    }
                    var tr = dojo.create("tr",null,table);
                    var td = dojo.create("td",{className:"dataTd", innerHTML:i},tr);
                    var td = dojo.create("td",{className:"dataTd", innerHTML:info[0].value}, tr);
                    var td = dojo.create("td",{className:"dataTd", innerHTML:info[1].value},tr);
                    var td = dojo.create("td",{className:"dataTd", innerHTML:info[2].value},tr);
                    thisItem.topTabs[2].audioImages[j].pic = thisSchema.topTabs[2].audioImages[j].pic = info[0].value;
                    thisItem.topTabs[2].audioImages[j].word = thisSchema.topTabs[2].audioImages[j].word = info[1].value;
                    thisItem.topTabs[2].audioImages[j].nameTag = thisSchema.topTabs[2].audioImages[j].nameTag = uniqueId2;
                    thisItem.topTabs[2].audioImages[j].phrase = thisSchema.topTabs[2].audioImages[j].phrase = info[2].value;
                    uniqueId2++;
                    i++;
                }
            }
            else {
                for (j=0; j<thisItem.topTabs[2].audioImages.length; j++) {
                        thisItem.topTabs[2].audioImages[j].pic = thisSchema.topTabs[2].audioImages[j].pic = "";
                        thisItem.topTabs[2].audioImages[j].word = thisSchema.topTabs[2].audioImages[j].word = "";
                        thisItem.topTabs[2].audioImages[j].nameTag = thisSchema.topTabs[2].audioImages[j].nameTag = "";
                        thisItem.topTabs[2].audioImages[j].phrase = thisSchema.topTabs[2].audioImages[j].phrase = "";                
                }            
            }
        }
        else {
            thisItem.topTabs[2].nameTag = thisSchema.topTabs[2].nameTag = "";
            thisItem.topTabs[2].name =thisSchema.topTabs[2].name = "";
            thisItem.topTabs[2].image =thisSchema.topTabs[2].image = "";    
        } 
        
        
        if (dojo.byId("text114").value.trim() != "" || dojo.byId("text115").value.trim() != "" || dojo.byId("text116").value.trim() != "") {
            var bottomTabs = dojo.create("div",{style:{"margin":"1%"}, className:"second"},div);
            var bold = dojo.create("b",{innerHTML:"Bottom Tabs"},bottomTabs);
            isNothing = false;
        }
            if (dojo.byId("text114").value.trim() != "" || (dojo.byId("text124").value.trim() != "" && dojo.byId("text124").className != "disabled")) {
            var tab1 = dojo.create("div",{style:{"margin":"1%"},className:"third",innerHTML:"<b>Tab 1</b>"},bottomTabs);
            var table = dojo.create("table",{style:{"position":"relative", "left":"3%", "font-weight":"bold", "text-align":"center", "width":"50%"}},tab1);
            var tr = dojo.create("tr",null,table);
            thisItem.bottomTabs[0].nameTag = thisSchema.bottomTabs[0].nameTag = dojo.byId("text114").value;
            thisItem.bottomTabs[0].image = thisSchema.bottomTabs[0].image = dojo.byId("text124").value;
            thisItem.bottomTabs[0].name = thisSchema.bottomTabs[0].name = "#"+dojo.byId("text114").value;
            var td = dojo.create("td",{style:{"width":"50%"}, innerHTML:"Name: "+thisSchema.bottomTabs[0].nameTag},tr);
            var td = dojo.create("td",{style:{"width":"50%"}, innerHTML:"Image: "+thisSchema.bottomTabs[0].image},tr);
            var i=1;        
            if (dojo.byId("form14").options[dojo.byId("form14").selectedIndex].value>0 && dojo.byId("form14").className != "disabled" && forms[3][0][0].value.trim() != "") {
                var table = dojo.create("table",{className:"dataTable"},tab1);
                var tr = dojo.create("tr",null,table);
                var td = dojo.create("td",{style:{"width":"5%"}, className:"dataTd", innerHTML:" "},tr);
                var td = dojo.create("td",{style:{"width":"20%"},className:"dataTd", innerHTML:"Picture"},tr);
                var td = dojo.create("td",{style:{"width":"15%"},className:"dataTd", innerHTML:"Word"},tr);
                var td = dojo.create("td",{className:"dataTd", innerHTML:"Phrase"},tr);
                for(j=0; j<dojo.byId("form14").options[dojo.byId("form14").selectedIndex].value; j++) {
                    var info = forms[3][j];
                    if (info[0].className == "disabled" || info[0].value == null || info[0].value.trim() == "") {
                        break;
                    }
                    var tr = dojo.create("tr",null,table);
                    var td = dojo.create("td",{className:"dataTd", innerHTML:i},tr);
                    var td = dojo.create("td",{className:"dataTd", innerHTML:info[0].value}, tr);
                    var td = dojo.create("td",{className:"dataTd", innerHTML:info[1].value},tr);
                    var td = dojo.create("td",{className:"dataTd", innerHTML:info[2].value},tr);
                    thisItem.bottomTabs[0].audioImages[j].pic = thisSchema.bottomTabs[0].audioImages[j].pic = info[0].value;
                    thisItem.bottomTabs[0].audioImages[j].word = thisSchema.bottomTabs[0].audioImages[j].word = info[1].value;
                    thisItem.bottomTabs[0].audioImages[j].nameTag = thisSchema.bottomTabs[0].audioImages[j].nameTag = uniqueId2;
                    thisItem.bottomTabs[0].audioImages[j].phrase = thisSchema.bottomTabs[0].audioImages[j].phrase = info[2].value;
                    uniqueId2++;
                    i++;
                }
            }
            else  {
                for (j=0; j<thisItem.bottomTabs[0].audioImages.length; j++) {
                    thisItem.bottomTabs[0].audioImages[j].pic = thisSchema.bottomTabs[0].audioImages[j].pic = "";
                    thisItem.bottomTabs[0].audioImages[j].word = thisSchema.bottomTabs[0].audioImages[j].word = "";
                    thisItem.bottomTabs[0].audioImages[j].nameTag = thisSchema.bottomTabs[0].audioImages[j].nameTag = "";
                    thisItem.bottomTabs[0].audioImages[j].phrase = thisSchema.bottomTabs[0].audioImages[j].phrase = "";                
                }            
            }
        }
        else {
            thisItem.bottomTabs[0].nameTag = thisSchema.bottomTabs[0].nameTag = "";
            thisItem.bottomTabs[0].name = thisSchema.bottomTabs[0].name = "";
            thisItem.bottomTabs[0].image = thisSchema.bottomTabs[0].image = "";
        } 
        
            if (dojo.byId("text115").value.trim() != "" || (dojo.byId("text125").value.trim() != "" && dojo.byId("text125").className != "disabled")) {
            var tab2 = dojo.create("div",{style:{"margin":"1%"}, className:"third",innerHTML:"<b>Tab 2</b>"},bottomTabs);
            var table = dojo.create("table",{style:{"position":"relative", "left":"3%", "font-weight":"bold", "text-align":"center", "width":"50%"}},tab2);
            var tr = dojo.create("tr",null,table);
            thisItem.bottomTabs[1].nameTag = thisSchema.bottomTabs[1].nameTag = dojo.byId("text115").value;
            thisItem.bottomTabs[1].image = thisSchema.bottomTabs[1].image = dojo.byId("text125").value;
            thisItem.bottomTabs[1].name = thisSchema.bottomTabs[1].name = "#"+dojo.byId("text115").value;
            var td = dojo.create("td",{style:{"width":"50%"}, innerHTML:"Name: "+thisSchema.bottomTabs[1].nameTag},tr);
            var td = dojo.create("td",{style:{"width":"50%"}, innerHTML:"Image: "+thisSchema.bottomTabs[1].image},tr);
            var i=1;
            if (dojo.byId("form15").options[dojo.byId("form15").selectedIndex].value>0 && dojo.byId("form15").className != "disabled" && forms[4][0][0].value.trim() != "") {
                var table = dojo.create("table",{className:"dataTable"},tab2);
                var tr = dojo.create("tr",null,table);
                var td = dojo.create("td",{style:{"width":"5%"}, className:"dataTd", innerHTML:" "},tr);
                var td = dojo.create("td",{style:{"width":"20%"},className:"dataTd", innerHTML:"Picture"},tr);
                var td = dojo.create("td",{style:{"width":"15%"},className:"dataTd", innerHTML:"Word"},tr);
                var td = dojo.create("td",{className:"dataTd", innerHTML:"Phrase"},tr);
                for (j=0; j<dojo.byId("form15").options[dojo.byId("form15").selectedIndex].value; j++) {
                    var info = forms[4][j];
                    if (info[0].className == "disabled" || info[0].value == null || info[0].value.trim() == "") {
                        break;
                    }
                    var tr = dojo.create("tr",null,table);
                    var td = dojo.create("td",{className:"dataTd", innerHTML:i},tr);
                    var td = dojo.create("td",{className:"dataTd", innerHTML:info[0].value}, tr);
                    var td = dojo.create("td",{className:"dataTd", innerHTML:info[1].value},tr);
                    var td = dojo.create("td",{className:"dataTd", innerHTML:info[2].value},tr);
                    thisItem.bottomTabs[1].audioImages[j].pic = thisSchema.bottomTabs[1].audioImages[j].pic = info[0].value;
                    thisItem.bottomTabs[1].audioImages[j].word = thisSchema.bottomTabs[1].audioImages[j].word = info[1].value;
                    thisItem.bottomTabs[1].audioImages[j].nameTag = thisSchema.bottomTabs[1].audioImages[j].nameTag = uniqueId2;
                    thisItem.bottomTabs[1].audioImages[j].phrase = thisSchema.bottomTabs[1].audioImages[j].phrase = info[2].value;
                    uniqueId2++;
                    i++;
                }
            }
            else {
                for (j=0; j<thisItem.bottomTabs[1].audioImages.length; j++) {
                    thisItem.bottomTabs[1].audioImages[j].pic = thisSchema.bottomTabs[1].audioImages[j].pic = "";
                    thisItem.bottomTabs[1].audioImages[j].word = thisSchema.bottomTabs[1].audioImages[j].word = "";
                    thisItem.bottomTabs[1].audioImages[j].nameTag = thisSchema.bottomTabs[1].audioImages[j].nameTag = "";
                    thisItem.bottomTabs[1].audioImages[j].phrase = thisSchema.bottomTabs[1].audioImages[j].phrase = "";                
                }
            }
        }
        else {
            thisItem.bottomTabs[1].nameTag = thisSchema.bottomTabs[1].nameTag = "";
            thisItem.bottomTabs[1].name= thisSchema.bottomTabs[1].name = "";
            thisItem.bottomTabs[1].image = thisSchema.bottomTabs[1].image = "";     
        } 
        
            if (dojo.byId("text116").value.trim() != "" || (dojo.byId("text126").value.trim() != "" && dojo.byId("text126").className != "disabled")) {
            var tab3 = dojo.create("div",{style:{"margin":"1%"},className:"third",innerHTML:"<b>Tab 3</b>"},bottomTabs);
            var table = dojo.create("table",{style:{"position":"relative", "left":"3%", "font-weight":"bold", "text-align":"center", "width":"50%"}},tab3);
            var tr = dojo.create("tr",null,table);
            thisItem.bottomTabs[2].nameTag = thisSchema.bottomTabs[2].nameTag = dojo.byId("text116").value;
            thisItem.bottomTabs[2].image = thisSchema.bottomTabs[2].image = dojo.byId("text126").value;
            thisItem.bottomTabs[2].name = thisSchema.bottomTabs[2].name = "#"+dojo.byId("text116").value;
            var td = dojo.create("td",{style:{"width":"50%"}, innerHTML:"Name: "+thisSchema.bottomTabs[2].nameTag},tr);
            var td = dojo.create("td",{style:{"width":"50%"}, innerHTML:"Image: "+thisSchema.bottomTabs[2].image},tr);
            var i=1;
            if (dojo.byId("form16").options[dojo.byId("form16").selectedIndex].value>0 && dojo.byId("form16").className != "disabled" && forms[5][0][0].value.trim() != "") {
                var table = dojo.create("table",{className:"dataTable"},tab3);
                var tr = dojo.create("tr",null,table);
                var td = dojo.create("td",{style:{"width":"5%"}, className:"dataTd", innerHTML:" "},tr);
                var td = dojo.create("td",{style:{"width":"20%"},className:"dataTd", innerHTML:"Picture"},tr);
                var td = dojo.create("td",{style:{"width":"15%"},className:"dataTd", innerHTML:"Word"},tr);
                var td = dojo.create("td",{className:"dataTd", innerHTML:"Phrase"},tr);
                for(j=0; j<dojo.byId("form16").options[dojo.byId("form16").selectedIndex].value; j++) {
                    var info = forms[5][j];
                    if (info[0].className == "disabled" || info[0].value == null || info[0].value.trim() == "") {
                        break;
                    }
                    var tr = dojo.create("tr",null,table);
                    var td = dojo.create("td",{className:"dataTd", innerHTML:i},tr);
                    var td = dojo.create("td",{className:"dataTd", innerHTML:info[0].value}, tr);
                    var td = dojo.create("td",{className:"dataTd", innerHTML:info[1].value},tr);
                    var td = dojo.create("td",{className:"dataTd", innerHTML:info[2].value},tr);
                    thisItem.bottomTabs[2].audioImages[j].pic = thisSchema.bottomTabs[2].audioImages[j].pic = info[0].value;
                    thisItem.bottomTabs[2].audioImages[j].word = thisSchema.bottomTabs[2].audioImages[j].word = info[1].value;
                    thisItem.bottomTabs[2].audioImages[j].nameTag = thisSchema.bottomTabs[2].audioImages[j].nameTag = uniqueId2;
                    thisItem.bottomTabs[2].audioImages[j].phrase = thisSchema.bottomTabs[2].audioImages[j].phrase = info[2].value;
                    uniqueId2++;
                    i++;
                }
            }
            else {
                for (j=0; j<thisItem.bottomTabs[2].audioImages.length; j++) {
                    thisItem.bottomTabs[2].audioImages[j].pic = thisSchema.bottomTabs[2].audioImages[j].pic = "";
                    thisItem.bottomTabs[2].audioImages[j].word = thisSchema.bottomTabs[2].audioImages[j].word = "";
                    thisItem.bottomTabs[2].audioImages[j].nameTag = thisSchema.bottomTabs[2].audioImages[j].nameTag = "";
                    thisItem.bottomTabs[2].audioImages[j].phrase = thisSchema.bottomTabs[2].audioImages[j].phrase = "";                
                }
            }
        }
        else {
            thisItem.bottomTabs[2].nameTag = thisSchema.bottomTabs[2].nameTag = "";
            thisItem.bottomTabs[2].name = thisSchema.bottomTabs[2].name = "";
            thisItem.bottomTabs[2].image = thisSchema.bottomTabs[2].image = "";    
        } 
        
        var backwardButton = dojo.create("button",{innerHTML:"Back"},div);
            dojo.connect(backwardButton,'onclick',dojo.hitch(this,function() {
                dojo.byId(ulList[3]).className = "tabs";
            
                div.style.display="none";
                dojo.byId(ids[2]).style.display="block";
                jsProgress.update({progress:2});
                
                dojo.byId(ulList[2]).className = "td1";                
            }));
        var forwardButton2 = dojo.create("button",{innerHTML:"Confirm/Finish"},div);
            dojo.connect(forwardButton2,'onclick',dojo.hitch(this,function() {
                rearrange(ids);
            
                dojo.byId(ulList[3]).className = "tabs";
            
                div.style.display="none";
                dojo.byId(ids[4]).style.display="block";
                jsProgress.update({progress:4});
                
                dojo.byId(ulList[4]).className = "td1";
            }));
       
       if (isNothing) {
            forwardButton2.disabled = "disabled";
       }
    }
    
    function rearrange(ids) {
        // dojo.forEach(thisSchema.topTabs, function(aTop) {
            // for (var i=0; i<aTop.audioImages.length; i++) {
                // if (aTop.audioImages[i].pic.trim() == "") {
                    // aTop.audioImages.splice(i,aTop.audioImages.length-i+1);
                    // break;
                // }
            // }
        // });
        // dojo.forEach(thisSchema.bottomTabs, function(aBottom) {
            // for (var i=0; i<aBottom.audioImages.length; i++) {
                // if (aBottom.audioImages[i].pic.trim() == "") {
                    // aBottom.audioImages.splice(i,aBottom.audioImages.length-i+1);
                    // break;
                // }
            // }
        // });
        
        
        /*for (var i=1; i<7; i++) {
            if (dojo.byId("form1"+i).options[dojo.byId("form1"+i).selectedIndex].value>0) {
                for (var j=0; j<dojo.byId("form1"+i).options[dojo.byId("form1"+i).selectedIndex].value; j++) {
                    if (i<4) {
                        var k = i-1;
                        if (thisSchema.topTabs[k].audioImages[j].pic.trim() == "") {
                            thisSchema.topTabs[k].audioImages.splice(j,thisSchema.topTabs[k].audioImages.length-j+1);
                            thisItem.topTabs[k].audioImages.splice(j,thisItem.topTabs[k].audioImages.length-j+1);
                            break;
                        }
                        else if (j==dojo.byId("form1"+i).options[dojo.byId("form1"+i).selectedIndex].value-1) {
                            thisSchema.topTabs[k].audioImages.splice(j+1,thisSchema.topTabs[k].audioImages.length-j);
                            thisItem.topTabs[k].audioImages.splice(j+1,thisItem.topTabs[k].audioImages.length-j);
                        }
                    }
                    else {
                        var k = i-4;
                        if (thisSchema.bottomTabs[k].audioImages[j].pic.trim() == "") {
                            thisSchema.bottomTabs[k].audioImages.splice(j,thisSchema.bottomTabs[i].audioImages.length-j+1);
                            thisItem.bottomTabs[k].audioImages.splice(j,thisItem.bottomTabs[k].audioImages.length-j+1);
                            break;
                        }
                        else if (j==dojo.byId("form1"+i).options[dojo.byId("form1"+i).selectedIndex].value-1) {
                            thisSchema.bottomTabs[k].audioImages.splice(j+1,thisSchema.bottomTabs[k].audioImages.length-j);
                            thisItem.bottomTabs[k].audioImages.splice(j+1,thisItem.bottomTabs[k].audioImages.length-j);
                        }                
                    }
                }
            }
            else {
                if (i<4) {
                    var k = i-1;
                    thisSchema.topTabs[k].audioImages.splice(0,thisSchema.topTabs[k].audioImages.length);
                    thisItem.topTabs[k].audioImages.splice(0,thisItem.topTabs[k].audioImages.length);
                }
                else {
                    var k = i-4;
                    thisSchema.bottomTabs[k].audioImages.splice(0,thisSchema.bottomTabs[k].audioImages.length);
                    thisItem.bottomTabs[k].audioImages.splice(0,thisItem.bottomTabs[k].audioImages.length);
                }
            }
        }
        
        if (dojo.every(thisSchema.topTabs, function(item) {
            return item.nameTag.trim() == "";
        })) {
            delete thisSchema.topTabs;
            delete thisItem.topTabs;
        }
        if (dojo.every(thisSchema.bottomTabs, function(item) {
            return item.nameTag.trim() == "";
        })) {
            delete thisSchema.bottomTabs;
            delete thisItem.bottomTabs;
        }*/
        if (thisSchema.topTabs != null || thisSchema.bottomTabs != null) {  
            
            var db = uow.getDatabase({
                database: 'Aphasia',
                collection: 'AphasiaJson',
                mode: 'crud' });
            // db.addCallback(function(data) {
                // data.upload({
                    // form: thisSchema,
                    // load: function(data, ioArgs) {
                        // console.log("loaded: ",data);
                        // donePage(ids);
                    // },
                    // error: function(msg, ioArgs) {
                        // console.log("error: ",msg);
                    // }
                // });
            // });
            
            db.then(function(data) {
                var item = "";
                if (thisSchema.id.trim()!="") {
                    // data.updateOne({
                        // query:{'_id':thisSchema.id},
                        // data:{'topTabs':thisItem.topTabs,
                              // 'bottomTabs':thisItem.bottomTabs},
                        // save:true
                    // });
                    data.setValues(thisItem,'topTabs',thisItem.topTabs);
                    data.setValues(thisItem,'bottomTabs',thisItem.bottomTabs);
                }                    
                else {
                    item = data.newItem(thisSchema);
                }
                data.save();
                if (item!="") {
                    for (var i=1; i<7; i++) {
                        for (var j=0; j<9; j++) {
                            uploadPictures(i, j, ids, item._id);
                        }   
                    }
                }
                else {
                    for (var i=1; i<7; i++) {
                        for (var j=0; j<9; j++) {
                            uploadPictures(i, j, ids, thisItem._id);
                        }   
                    }
                }
                donePage(ids);
            });
            db.addErrback(function(msg) {
                console.log("error occured: couldn't upload schema");
            });
        }
    }
    
    function uploadPictures(i, j, ids, anID) {
        var def = uow.getDatabase({
            database: 'Media',
            collection: 'Image',
            mode: 'crud' });
        console.log(anID);
        if (j==0) {
            var form1 = dojo.byId("uploadForm"+i);           
            if (form1.file.value!="") {
                def.addCallback(function(db) {
                    db.upload({
                        form: form1,
                        load: function(data, ioArgs) {
                            console.log('load', data);
                        },
                        error: function(msg, ioArgs) {
                            console.log('error', msg);
                        }
                    });
                });
            }
        }
        var form2 = dojo.byId("tab"+i+j);
        if (form2==null) {
            return;
        }
        if (form2.file.value!="") {
            def.addCallback(function(db) {
                db.upload({
                    form: form2,
                    load: function(data, ioArgs) {
                        console.log('load', data);
                    },
                    error: function(msg, ioArgs) {
                        console.log('error', msg);
                    }
                });
            });
        }      
    }
    
    function donePage(ids,deleteItem) {
        var div = dojo.byId(ids[4]);
        var h4 = dojo.create("div",{className:"first",innerHTML:"Summary"},div);
        if (!deleteItem) {
            var p = dojo.create("p",{innerHTML:"You are now done. You can now start the Aphasia web application with one of the interface below:"},div);
        }
        var table = dojo.create("table",null,div);
        var homeDiv = dojo.create("div",{innerHTML:"Or, you can go back to the home page for more options: "},div);
        example = [];
        var db=uow.getDatabase({
            database: 'Aphasia',
            collection: 'AphasiaJson',
            mode: 'crud' });
         db.then(function (data) {
                var a = dojo.create("a",{href:"http://gbserver2.cs.unc.edu/playpen/Aphasia/template/iui/html/interfaceEditor.html"},homeDiv);
                    a.appendChild(document.createTextNode('Click here.'));
         });
    }
    
    // function captureValue(j) {
        // if (j==1) {
            // var theTop = thisSchema.topTabs;
            // var k=1;
            // dojo.forEach(theTop, function(aTop) {
                // if (dojo.byId("text11"+k).value.trim() != "") {
                    // aTop.name="#"+dojo.byId("text11"+k).value;
                // }
                // aTop.nameTag=dojo.byId("text11"+k).value;
                // aTop.image=dojo.byId("text12"+k).value;
                // var image = new Image();
                
                // if (dojo.byId("form1"+j).value!=0) {
                    // for (var i=0; i<dojo.byId("form1"+k).value; i++) {
                        // aTop.audioImages[i].pic = dojo.byId("tab"+k).getElementsByTagName("input")[0].value;
                        // aTop.audioImages[i].nameTag = uniqueId;          
                        // aTop.audioImages[i].word = dojo.byId("tab"+k).getElementsByTagName("input")[1].value;
                        // aTop.audioImages[i].phrase = dojo.byId("tab"+k).getElementsByTagName("input")[2].value;
                        // uniqueId++;
                    // }
                // }
                // k++;
            // });            
        // }
        // else if (j==2) {
            // var theBottom = thisSchema.bottomTabs;
            // var k=4;
            // dojo.forEach(theBottom, function(aBottom) {
                // if (dojo.byId("text11"+k).value.trim() != "") {
                    // aBottom.name="#"+dojo.byId("text11"+k).value;
                // }
                // aBottom.nameTag=dojo.byId("text11"+k).value;
                // aBottom.image=dojo.byId("text12"+k).value;
                // var image = new Image();
                
                // if (dojo.byId("form1"+k).value!=0) {
                    // for (var i=0; i<dojo.byId("form1"+k).value; i++) {
                        // aBottom.audioImages[i].pic = dojo.byId("tab"+k).getElementsByTagName("input")[0].value;
                        // aBottom.audioImages[i].nameTag = uniqueId;          
                        // aBottom.audioImages[i].word = dojo.byId("tab"+k).getElementsByTagName("input")[1].value;
                        // aBottom.audioImages[i].phrase = dojo.byId("tab"+k).getElementsByTagName("input")[2].value;
                        // uniqueId++;
                    // }
                // }
                // k++;
            // });            
        // }
    // }
    
    function catchRelease(first, second, third, fourth, i) {
        if (first.value.length!=0 && first.value.trim() != "") {
            second.disabled = "";
            second.className = "";
            third.disabled = "";
            third.className = "";
            if (second.value.trim() != "") {
                fourth.disabled = "";
                fourth.className = "";
            }
            if (document.getElementById("tab"+i)!=null && document.getElementById("text11"+i).value.trim() != "" && document.getElementById("text12"+i).disabled != "disabled" && document.getElementById("text12"+i).value.trim() != "") {
                document.getElementById("tab"+i).style.display = "";
            }
        }
        else {
            if (document.getElementById("form1"+i)!=null) {
                document.getElementById("form1"+i).disabled = "disabled";
                document.getElementById("form1"+i).className = "disabled";
                if (document.getElementById("tab"+i)!=null) {
                    document.getElementById("tab"+i).style.display = "none";
                }
            }
            second.disabled = "disabled";
            second.className = "disabled";
            third.disabled = "disabled";
            if (third.innerHTML != "Clear") {
                third.className = "disabled";
            }
            fourth.disabled = "disabled";
            fourth.className = "disabled";
        }
    }
    
    function clearForm (first, second, i) {
        first.value = "";
        if (document.getElementById("tab"+i)!=null) {
            document.getElementById("tab"+i).style.display = "none";
        }
        catchRelease(first, second, "","", i);
    }
    
    function release2(one, two, three, a, j, form) {
        if (one.value.trim()!="" && two.value.trim()!="" && three.value.trim()!="") {
            form[j][0].disabled = "";
            form[j][0].className = "";
            form[j][1].disabled = "";
            form[j][1].className = "";
            form[j][2].disabled = "";            
            form[j][2].className = "";
            if (a!=null) {
                a.disabled = "";
            }
        }
        else {
            while (j<form.length) {
                form[j][0].disabled = "disabled";
                form[j][0].className = "disabled";
                form[j][1].disabled = "disabled";
                form[j][1].className = "disabled";
                form[j][2].disabled = "disabled";
                form[j][2].className = "disabled";
                if (a!=null) {
                    a.disabled = "disabled";
                }
                j++;
            }        
        }
    }
    function clearForm2 (first, second, third, a, i, aForm) {
        first.value = "";
        release2(first, second, third, a, i, aForm);
    }
    
    dojo.ready(start);
    