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
    
    uniqueId = 1000;
    uniqueId2 = 1000;

    forwardButton = [];
    backwardButton = [];
    array = [];
    array1 = [];
    array2 = [];
    array3 = [];
    array4 = [];
    array5 = [];
    array6 = [];
    arrays = [array1, array2, array3, array4, array5, array6];
    forms = [[["","",""],["","",""],["","",""],["","",""],["","",""],["","",""],["","",""],["","",""],["","",""]],[["","",""],["","",""],["","",""],["","",""],["","",""],["","",""],["","",""],["","",""],["","",""]],[["","",""],["","",""],["","",""],["","",""],["","",""],["","",""],["","",""],["","",""],["","",""]],[["","",""],["","",""],["","",""],["","",""],["","",""],["","",""],["","",""],["","",""],["","",""]],[["","",""],["","",""],["","",""],["","",""],["","",""],["","",""],["","",""],["","",""],["","",""]],[["","",""],["","",""],["","",""],["","",""],["","",""],["","",""],["","",""],["","",""],["","",""]]];
    
    
    function start() {
        var db = uow.getDatabase({
            database: 'Aphasia',
            collection: 'AphasiaJson',
            mode: 'crud' });
        db.then(function(data) {
            data.fetch({
                query:{'id':'4d93c68d229fe84f4e0001ab'},
                onItem: function(item) {
                    if (item.topTabs != null) {
                        console.log(item);
                    }
                }
            });
        });
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
        if (j==2) {
            j=4;
        }
        var h4 = dojo.create("div",{className:"first",innerHTML:"Customize Your "+word+" Tabs"},div);
        
        var tab1 = dojo.create("div",{className:"second"},div);
        var bold = dojo.create("b",{innerHTML:"Tab 1"},tab1);
        var name1 = dojo.create("div",{className:"third"},tab1);
        var label1 = dojo.create("label",{innerHTML:"Name of Tab:  "},name1);
        var text1 = dojo.create("input",{id:"text11"+j,className:"text"},name1);
        var label2 = dojo.create("label",{innerHTML:"&nbsp; Tab Picture: "},name1);
        var text2 = dojo.create("input",{id:"text12"+j,type:"file", disabled:"disabled",className:"disabled"},name1);
        var a = dojo.create("button",{innerHTML:"Clear", disabled:"disabled"},name1);
        var label3 = dojo.create("label",{innerHTML:"&nbsp; # Images for Tab: "},name1);
        var text3 = dojo.create("select",{id:"form1"+j, disabled:"disabled",className:"disabled"},name1);
        for (var i=0; i<10; i++) {
            dojo.create("option",{value:i,innerHTML:i},text3);
        }
            dojo.connect(text1, 'onkeyup', dojo.hitch(this, catchRelease, text1, text2,a, text3, j));
            dojo.connect(text2, 'onchange', dojo.hitch(this, catchRelease, text2, text3,"", "", j));
            dojo.connect(text3,'onchange',dojo.hitch(this, dynamicForm,text3,tab1,j));
            dojo.connect(a, 'onclick', dojo.hitch(this, clearForm, text2, text3, j));
        
        var k=j+1;
        var tab2 = dojo.create("div",{className:"second"},div);
        var bold = dojo.create("b",{innerHTML:"Tab 2"},tab2);
        var name1 = dojo.create("div",{className:"third"},tab2);
        var label1 = dojo.create("label",{innerHTML:"Name of Tab:  "},name1);
        var text1 = dojo.create("input",{id:"text11"+k,className:"text"},name1);
        var label2 = dojo.create("label",{innerHTML:"&nbsp; Tab Picture: "},name1);
        var text2 = dojo.create("input",{id:"text12"+k,type:"file", disabled:"disabled",className:"disabled"},name1);
        var a = dojo.create("button",{innerHTML:"Clear", disabled:"disabled"},name1);
        var label3 = dojo.create("label",{innerHTML:"&nbsp; # Images for Tab: "},name1);
        var text3 = dojo.create("select",{id:"form1"+k, disabled:"disabled",className:"disabled"},name1);
        for (var i=0; i<10; i++) {
            dojo.create("option",{value:i,innerHTML:i},text3);
        }
            dojo.connect(text3,'onchange',dojo.hitch(this,dynamicForm,text3,tab2,j+1));
            dojo.connect(text1, 'onkeyup', dojo.hitch(this, catchRelease, text1, text2,a, text3, k));
            dojo.connect(text2, 'onchange', dojo.hitch(this, catchRelease, text2, text3,"", "", k));
            dojo.connect(a, 'onclick', dojo.hitch(this, clearForm, text2, text3, j+1));
        
        k = j+2;
        var tab3 = dojo.create("div",{className:"second"},div);
        var bold = dojo.create("b",{innerHTML:"Tab 3"},tab3);
        var name1 = dojo.create("div",{className:"third"},tab3);
        var label1 = dojo.create("label",{innerHTML:"Name of Tab:  "},name1);
        var text1 = dojo.create("input",{id:"text11"+k,className:"text"},name1);
        var label2 = dojo.create("label",{innerHTML:"&nbsp; Tab Picture: "},name1);
        var text2 = dojo.create("input",{id:"text12"+k,type:"file", disabled:"disabled",className:"disabled"},name1);
        var a = dojo.create("button",{innerHTML:"Clear", disabled:"disabled"},name1);
        var label3 = dojo.create("label",{innerHTML:"&nbsp; # Images for Tab: "},name1);
        var text3 = dojo.create("select",{id:"form1"+k, disabled:"disabled",className:"disabled"},name1);
        for (var i=0; i<10; i++) {
            dojo.create("option",{value:i,innerHTML:i},text3);
        }
            dojo.connect(text3,'onchange',dojo.hitch(this,dynamicForm,text3,tab3,j+2));
            dojo.connect(text1, 'onkeyup', dojo.hitch(this, catchRelease, text1, text2,a,text3, k));
            dojo.connect(text2, 'onchange', dojo.hitch(this, catchRelease, text2, text3,"","", k));
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
                
                //captureValue(j);
                
            }));
    }
    
    function dynamicForm(s,tab,i) {
        var second = [];
        var theForm = forms[--i];
        i++;
        var k=0;
        var item1 = "";
        var item2 = "";
        var item3 = "";
        if (dojo.byId("tab"+i) !=null) {
            array = dojo.byId("tab"+i).getElementsByTagName("input");
            var theArray = arrays[--i];
            i++;
            if (theArray.length <= array.length) {
                for (j=0; j<array.length; j++) {
                    second[j] = array[j].value;
                    theArray[j] = array[j].value;
                }
            }
            else {
                for (j=0; j<theArray.length; j++) {
                    second[j] = theArray[j];
                }
            }
            dojo.destroy("tab"+i);
        }
        var div = dojo.create("div",{id:"tab"+i},tab);
        var table = dojo.create("table",{className:"contentTable"},div);
        for (j=0; j<s.options[s.selectedIndex].value; j++) {
            if(k<second.length) {
                item1 = second[k++];
                item2 = second[k++];
                item3 = second[k++];
            }
            else {
                item1 = "";
                item2 = "";
                item3 = "";
            }
            var v = j+1;
            var tr = dojo.create("tr",{className:"contentRow"},table);
            var td = dojo.create("td",{className:"contentItem"},tr);
            dojo.create("label",{innerHTML:"Pic #"+v+": "},td);
            var one = theForm[j][0] = dojo.create("input",{type:"file",value:"", id: "contentItem"+i+j+"1"},td);
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
        var isNothing = true;
        var div = dojo.byId(ids[3]);
        var h4 = dojo.create("div",{className:"first",innerHTML:"Summary"},div);
        
        
        if (dojo.byId("text111").value.trim() != "" || dojo.byId("text112").value.trim() != "" || dojo.byId("text113").value.trim() != "") {
            var topTabs = dojo.create("div",{style:{"margin":"1%"}, className:"second"},div);
            var bold = dojo.create("b",{innerHTML:"Top Tabs"},topTabs);
            isNothing = false;
        }
            if (dojo.byId("text111").value.trim() != "" || (dojo.byId("text121").value.trim() != "" && dojo.byId("text121").className != "disabled")) {
                var tab1 = dojo.create("div",{style:{"margin":"1%"}, className:"third",innerHTML:"<b>Tab 1</b>"},topTabs);
                var table = dojo.create("table",{style:{"position":"relative", "left":"3%", "font-weight":"bold", "text-align":"center", "width":"50%"}},tab1);
                var tr = dojo.create("tr",null,table);
                thisSchema.topTabs[0].nameTag = dojo.byId("text111").value;
                thisSchema.topTabs[0].image = dojo.byId("text121").value;
                thisSchema.topTabs[0].name = "#"+dojo.byId("text111").value;
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
                        thisSchema.topTabs[0].audioImages[j].pic = info[0].value;
                        thisSchema.topTabs[0].audioImages[j].word = info[1].value;
                        thisSchema.topTabs[0].audioImages[j].nameTag = uniqueId2;
                        thisSchema.topTabs[0].audioImages[j].phrase = info[2].value;
                        uniqueId2++;
                        i++;
                    }
                }
        }
        else {
            thisSchema.topTabs[0].nameTag = "";
            thisSchema.topTabs[0].name = "";
            thisSchema.topTabs[0].image = "";
        } 
        
            if (dojo.byId("text112").value.trim() != "" || (dojo.byId("text122").value.trim() != "" && dojo.byId("text122").className != "disabled")) {
                var tab2 = dojo.create("div",{style:{"margin":"1%"}, className:"third",innerHTML:"<b>Tab 2</b>"},topTabs);
                var table = dojo.create("table",{style:{"position":"relative", "left":"3%", "font-weight":"bold", "text-align":"center", "width":"50%"}},tab2);
                var tr = dojo.create("tr",null,table);
                thisSchema.topTabs[1].nameTag = dojo.byId("text112").value;
                thisSchema.topTabs[1].image = dojo.byId("text122").value;
                thisSchema.topTabs[1].name = "#"+dojo.byId("text112").value;
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
                        thisSchema.topTabs[1].audioImages[j].pic = info[0].value;
                        thisSchema.topTabs[1].audioImages[j].word = info[1].value;
                        thisSchema.topTabs[1].audioImages[j].nameTag = uniqueId2;
                        thisSchema.topTabs[1].audioImages[j].phrase = info[2].value;
                        uniqueId2++;
                        i++;
                    }
                }
        }
        else {
            thisSchema.topTabs[1].nameTag = "";
            thisSchema.topTabs[1].name = "";
            thisSchema.topTabs[1].image = "";
        } 
        
            if (dojo.byId("text113").value.trim() != "" || (dojo.byId("text123").value.trim() != "" && dojo.byId("text123").className != "disabled")) {
            var tab3 = dojo.create("div",{style:{"margin":"1%"}, className:"third",innerHTML:"<b>Tab 3</b>"},topTabs);
            var table = dojo.create("table",{style:{"position":"relative", "left":"3%", "font-weight":"bold", "text-align":"center", "width":"50%"}},tab3);
            var tr = dojo.create("tr",null,table);
            thisSchema.topTabs[2].nameTag = dojo.byId("text113").value;
            thisSchema.topTabs[2].image = dojo.byId("text123").value;
            thisSchema.topTabs[2].name = "#"+dojo.byId("text113").value;
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
                    thisSchema.topTabs[2].audioImages[j].pic = info[0].value;
                    thisSchema.topTabs[2].audioImages[j].word = info[1].value;
                    thisSchema.topTabs[2].audioImages[j].nameTag = uniqueId2;
                    thisSchema.topTabs[2].audioImages[j].phrase = info[2].value;
                    uniqueId2++;
                    i++;
                }
            }
        }
        else {
            thisSchema.topTabs[2].nameTag = "";
            thisSchema.topTabs[2].name = "";
            thisSchema.topTabs[2].image = "";
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
            thisSchema.bottomTabs[0].nameTag = dojo.byId("text114").value;
            thisSchema.bottomTabs[0].image = dojo.byId("text124").value;
            thisSchema.bottomTabs[0].name = "#"+dojo.byId("text114").value;
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
                    thisSchema.bottomTabs[0].audioImages[j].pic = info[0].value;
                    thisSchema.bottomTabs[0].audioImages[j].word = info[1].value;
                    thisSchema.bottomTabs[0].audioImages[j].nameTag = uniqueId2;
                    thisSchema.bottomTabs[0].audioImages[j].phrase = info[2].value;
                    uniqueId2++;
                    i++;
                }
            }
        }
        else {
            thisSchema.bottomTabs[0].nameTag = "";
            thisSchema.bottomTabs[0].name = "";
            thisSchema.bottomTabs[0].image = "";
        } 
        
            if (dojo.byId("text115").value.trim() != "" || (dojo.byId("text125").value.trim() != "" && dojo.byId("text125").className != "disabled")) {
            var tab2 = dojo.create("div",{style:{"margin":"1%"}, className:"third",innerHTML:"<b>Tab 2</b>"},bottomTabs);
            var table = dojo.create("table",{style:{"position":"relative", "left":"3%", "font-weight":"bold", "text-align":"center", "width":"50%"}},tab2);
            var tr = dojo.create("tr",null,table);
            thisSchema.bottomTabs[1].nameTag = dojo.byId("text115").value;
            thisSchema.bottomTabs[1].image = dojo.byId("text125").value;
            thisSchema.bottomTabs[1].name = "#"+dojo.byId("text115").value;
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
                    thisSchema.bottomTabs[1].audioImages[j].pic = info[0].value;
                    thisSchema.bottomTabs[1].audioImages[j].word = info[1].value;
                    thisSchema.bottomTabs[1].audioImages[j].nameTag = uniqueId2;
                    thisSchema.bottomTabs[1].audioImages[j].phrase = info[2].value;
                    uniqueId2++;
                    i++;
                }
            }
        }
        else {
            thisSchema.bottomTabs[1].nameTag = "";
            thisSchema.bottomTabs[1].name = "";
            thisSchema.bottomTabs[1].image = "";
        } 
        
            if (dojo.byId("text116").value.trim() != "" || (dojo.byId("text126").value.trim() != "" && dojo.byId("text126").className != "disabled")) {
            var tab3 = dojo.create("div",{style:{"margin":"1%"},className:"third",innerHTML:"<b>Tab 3</b>"},bottomTabs);
            var table = dojo.create("table",{style:{"position":"relative", "left":"3%", "font-weight":"bold", "text-align":"center", "width":"50%"}},tab3);
            var tr = dojo.create("tr",null,table);
            thisSchema.bottomTabs[2].nameTag = dojo.byId("text116").value;
            thisSchema.bottomTabs[2].image = dojo.byId("text126").value;
            thisSchema.bottomTabs[2].name = "#"+dojo.byId("text116").value;
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
                    thisSchema.bottomTabs[2].audioImages[j].pic = info[0].value;
                    thisSchema.bottomTabs[2].audioImages[j].word = info[1].value;
                    thisSchema.bottomTabs[2].audioImages[j].nameTag = uniqueId2;
                    thisSchema.bottomTabs[2].audioImages[j].phrase = info[2].value;
                    uniqueId2++;
                    i++;
                }
            }
        }
        else {
            thisSchema.bottomTabs[2].nameTag = "";
            thisSchema.bottomTabs[2].name = "";
            thisSchema.bottomTabs[2].image = "";
        } 
        
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
                rearrange(ids);
            
                dojo.byId(ulList[3]).className = "tabs";
            
                div.style.display="none";
                dojo.byId(ids[4]).style.display="block";
                jsProgress.update({progress:4});
                
                dojo.byId(ulList[4]).className = "td1";
            }));
       
       if (isNothing) {
            forwardButton.disabled = "disabled";
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
        
        for (var i=1; i<7; i++) {
            if (dojo.byId("form1"+i).options[dojo.byId("form1"+i).selectedIndex].value>0) {
                for (var j=0; j<dojo.byId("form1"+i).options[dojo.byId("form1"+i).selectedIndex].value; j++) {
                    if (i<4) {
                        var k = i-1;
                        if (thisSchema.topTabs[k].audioImages[j].pic.trim() == "") {
                            thisSchema.topTabs[k].audioImages.splice(j,thisSchema.topTabs[k].audioImages.length-j+1);
                            break;
                        }
                        else if (j==dojo.byId("form1"+i).options[dojo.byId("form1"+i).selectedIndex].value-1) {
                            thisSchema.topTabs[k].audioImages.splice(j+1,thisSchema.topTabs[k].audioImages.length-j);
                        }
                    }
                    else {
                        var k = i-4;
                        if (thisSchema.bottomTabs[k].audioImages[j].pic.trim() == "") {
                            thisSchema.bottomTabs[k].audioImages.splice(j,thisSchema.bottomTabs[i].audioImages.length-j+1);
                            break;
                        }
                        else if (j==dojo.byId("form1"+i).options[dojo.byId("form1"+i).selectedIndex].value-1) {
                            thisSchema.bottomTabs[k].audioImages.splice(j+1,thisSchema.bottomTabs[k].audioImages.length-j);
                        }                
                    }
                }
            }
            else {
                if (i<4) {
                    var k = i-1;
                    thisSchema.topTabs[k].audioImages.splice(0,thisSchema.topTabs[k].audioImages.length);
                }
                else {
                    var k = i-4;
                    thisSchema.bottomTabs[k].audioImages.splice(0,thisSchema.bottomTabs[k].audioImages.length);
                }
            }
        }
        
        if (dojo.every(thisSchema.topTabs, function(item) {
            return item.nameTag.trim() == "";
        })) {
            delete thisSchema.topTabs;
        }
        if (dojo.every(thisSchema.bottomTabs, function(item) {
            return item.nameTag.trim() == "";
        })) {
            delete thisSchema.bottomTabs;
        }

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
                    data.newItem(thisSchema);
                    data.save();
                    donePage(ids);
                });
            db.addErrback(function(msg) {
                console.log("error occured: couldn't upload schema");
            });
        }
    }
    
    function donePage(ids) {
        alert(JSON.stringify(thisSchema));
        var div = dojo.byId(ids[4]);
        var h4 = dojo.create("div",{className:"first",innerHTML:"Summary"},div);
        var p = dojo.create("p",{innerHTML:"You are now done. You can now start the Aphasia web application with one of the interface below:"},div);
        var table = dojo.create("table",null,div);
        var homeDiv = dojo.create("div",{innerHTML:"Or, you can go back to the home page for more options: "},div);
        var a = dojo.create("a",{href:"http://gbserver2.cs.unc.edu/playpen/Aphasia/template/iui/html/interfaceEditor.html"},homeDiv);
            a.appendChild(document.createTextNode('Click here.'));
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
    