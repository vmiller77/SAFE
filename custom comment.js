//ORIGINAL NODE
    var node = document.createElement("DIV");
    node.style.padding = "5px";
    node.style.backgroundColor = "#99badd";
    node.style.width = "100%";
    node.style.position = "fixed";

//SCROLLNODE DESIGN
    var scrollNode = document.createElement("DIV");

    //ELEMENTS
    var scrollElements = [];
    var nextPostText = document.createElement("DIV");
    var npText = document.createTextNode("Next Post!");
    nextPostText.appendChild(npText);
    scrollElements.push(nextPostText);
    var likeText = document.createElement("DIV");
    var lText = document.createTextNode("Press Like!");
    likeText.appendChild(lText);
    scrollElements.push(likeText);
    var commentText = document.createElement("DIV");
    var cText = document.createTextNode("Comment!");
    commentText.appendChild(cText);
    scrollElements.push(commentText);
    var previousPostText = document.createElement("DIV");
    var ppText = document.createTextNode("Previous Post!");
    previousPostText.appendChild(ppText);
    scrollElements.push(previousPostText);

    //STYLING ELEMENTS
 for(var i = 0; i < scrollElements.length; i++){
    scrollElements[i].style.fontSize = '18px';
    scrollElements[i].style.paddingLeft = "40px";
    scrollElements[i].style.paddingRight = "40px";
    scrollElements[i].style.float = "left";
    //ADDING ELEMENTS TO SCROLLNODE
    scrollNode.appendChild(scrollElements[i]);
  }
//c1Node DESIGN
    var c1Node = document.createElement("DIV");

    //ELEMENTS
    var c1Elements = [];
    var preMadeCommentsText = document.createElement("DIV");
    var pMCText = document.createTextNode("Pre-made Comments");
    preMadeCommentsText.appendChild(pMCText);
    c1Elements.push(preMadeCommentsText);
    var personalizedCommentsText = document.createElement("DIV");
    var pCText = document.createTextNode("Personalized Comments");
    personalizedCommentsText.appendChild(pCText);
    c1Elements.push(personalizedCommentsText);
    var addCommentText = document.createElement("DIV");
    var aCText = document.createTextNode("Add a Comment");
    addCommentText.appendChild(aCText);
    c1Elements.push(addCommentText);
    var cancelText = document.createElement("DIV");
    var cText = document.createTextNode("Go back");
    cancelText.appendChild(cText);
    c1Elements.push(cancelText);
    //STYLING ELEMENTS
    for(var i = 0; i < c1Elements.length; i++){
        c1Elements[i].style.fontSize = '18px';
        c1Elements[i].style.paddingLeft = "40px";
        c1Elements[i].style.paddingRight = "40px";
        c1Elements[i].style.float = "left";
        //ADDING ELEMENTS TO C1NODE
        c1Node.appendChild(c1Elements[i]);
      }
//c2Node DESIGN
    var c2Node = document.createElement("DIV");

    //ELEMENTS
        var c2Elements = [];
        var agreeText = document.createElement("DIV");
        var aText = document.createTextNode("I agree!");
        agreeText.appendChild(aText);
        c2Elements.push(agreeText);
        var disagreeText = document.createElement("DIV");
        var dText = document.createTextNode("I disagree!");
        disagreeText.appendChild(dText);
        c2Elements.push(disagreeText);
        var greatPicsText = document.createElement("DIV");
        var gText = document.createTextNode("Great picture!");
        greatPicsText.appendChild(gText);
        c2Elements.push(greatPicsText);
        var awesomeText = document.createElement("DIV");
        var aweText = document.createTextNode("Awesome!");
        awesomeText.appendChild(aweText);
        c2Elements.push(awesomeText);
        var cancel2Text = document.createElement("DIV");
        var c2Text = document.createTextNode("Go back");
        cancel2Text.appendChild(c2Text);
        c2Elements.push(cancel2Text);
    //STYLING ELEMENTS
     for(var i = 0; i < c2Elements.length; i++){
        c2Elements[i].style.fontSize = '18px';
        c2Elements[i].style.paddingLeft = "40px";
        c2Elements[i].style.paddingRight = "40px";
        c2Elements[i].style.float = "left";
        //ADDING ELEMENTS TO c2Node
        c2Node.appendChild(c2Elements[i]);
      }
//c3Node DESIGN + c4Node creation
    var c4Node = document.createElement("DIV");
    var customArray = [];
    var goBackText = document.createElement("DIV");
    var gBText = document.createTextNode("Go Back");
    goBackText.appendChild(gBText);
    customArray.push(goBackText);
    c4Node.appendChild(customArray[0]);
    var c3Node = document.createElement("DIV");
    var customCommentText = document.createElement("DIV");
    var ccText = document.createTextNode("Type in your Custom Message and it will be added!");
    customCommentText.appendChild(ccText);
    var textArea = document.createElement("TEXTAREA");
    textArea.cols = "15";
    textArea.placeHolder = "Type your personalized comment here!";
    customCommentText.appendChild(textArea);
    c3Node.appendChild(customCommentText);
    //Make a button that says DONE
    var doneButton = document.createElement("BUTTON");
    var doneButtonText = document.createTextNode("DONE");
    doneButton.appendChild(doneButtonText);
    c3Node.appendChild(doneButton);
    var customCounter = 0;
    var customIndex = 0;
    doneButton.addEventListener("click",function(){
        customCounter = customCounter +1;
        node.removeChild(c3Node);
        node.appendChild(scrollNode);
        scroll = true;
        var temp = textArea.value;
        customArray.pop();
        customArray.push(document.createElement("DIV").appendChild(document.createTextNode(temp)));
        customArray.push(goBackText);
        textArea.value  = "";
        scrollElements[index].style.border = "solid";
        c4Node.removeChild(customArray[customArray.length-1]);
        c4Node.appendChild(customArray[0]);
        //UPDATE THE NEW NODE FOR CUSTOM COMMENTS - Maybe Style and stuff

    });


//SCROLL ELEMENTS
    //CREATING ARRAYS
        var leftArray = [];
        var rightArray = [];
        var index = 0;

    //FUNCTIONS
        //Keyup event also!?
        leftArray.push(function(){
            var e = new KeyboardEvent("keydown",{bubbles:true,cancelable:true,shiftKey:true});
            Object.defineProperty(e, "keyCode", {"value" : 74});
            document.dispatchEvent(e);            
            index = 0;
            });
        leftArray.push(function(){
             var e = new KeyboardEvent("keydown",{bubbles:true,cancelable:true,shiftKey:true});
             Object.defineProperty(e, "keyCode", {"value" : 76});
             document.dispatchEvent(e);
              });
        leftArray.push(function(){
            node.removeChild(scrollNode);
            node.appendChild(c1Node);
            scrollElements[2].style.border = "none";
            index= 0;
            c1Elements[0].style.border = "solid";
            c1Elements[0].style.borderWidth = "3px";           
            c1Index =0;   
            c1 = true;        
            scroll = false;
              });
        leftArray.push(function(){
            var e = new KeyboardEvent("keydown",{bubbles:true,cancelable:true,shiftKey:true});
            Object.defineProperty(e, "keyCode", {"value" : 75});
            document.dispatchEvent(e);
            });
        rightArray.push(function(){
            scrollElements[index].style.border = "none";
            index = index+1;
            scrollElements[index].style.border = "solid";
            });
        rightArray.push(function(){
            scrollElements[index].style.border = "none";
            index = index+1;
            scrollElements[index].style.border = "solid";
            });
        rightArray.push(function(){
           scrollElements[index].style.border = "none";
            index = index+1;
            scrollElements[index].style.border = "solid";
            });
        rightArray.push(function(){
        scrollElements[index].style.border = "none";
        index = 0;
        scrollElements[index].style.border = "solid";
        });
//C1 ELEMENTS
 //ARRAYS
    var c1LArray = [];
    var c1RArray = [];
    var c1Index = 0;
    //FUNCTIONS
        c1LArray.push(function(){
            c1 = false;
            c2 = true;
            node.removeChild(c1Node);
            node.appendChild(c2Node);
            c1Elements[c1Index].style.border = "none";
            c2Elements[index].style.border = "solid";
        });
    //PERSONALIZED COMMENTS
        c1LArray.push(function(){
            c1 = false;
            custom = true;
            c1Elements[c1Index].style.border = "none";
            node.removeChild(c1Node);
            node.appendChild(c4Node);
        });
    //ADDING A COMMENT
        c1LArray.push(function(){
            c1 = false;
            c1Elements[c1Index].style.border = "none";
            node.removeChild(c1Node);
            node.appendChild(c3Node);
        });
    //GO BACK
        c1LArray.push(function(){
            c1 = false;
            scroll = true;
            c1Elements[c1Index].style.border = "none";
            node.removeChild(c1Node);
            node.appendChild(scrollNode);
            scrollElements[index].style.border = "solid";
        });
        c1RArray.push(function(){
             c1Elements[c1Index].style.border = "none";
             c1Index = c1Index+1;
             c1Elements[c1Index].style.border = "solid";
        });
        c1RArray.push(function(){
             c1Elements[c1Index].style.border = "none";
             c1Index = c1Index+1;
             c1Elements[c1Index].style.border = "solid"; 
        });
        c1RArray.push(function(){
             c1Elements[c1Index].style.border = "none";
             c1Index = c1Index+1;
             c1Elements[c1Index].style.border = "solid";  
        });
        c1RArray.push(function(){
             c1Elements[c1Index].style.border = "none";
             c1Index = 0;
             c1Elements[c1Index].style.border = "solid"; 
        });
//C2 ELEMENTS
    //CREATING ARRAYS
    var c2LArray = [];
    var c2RArray= [];
    var c2Index = 0;

    //FUNCTIONS
    c2LArray.push(function(){
        var e = new KeyboardEvent("keydown",{bubbles:true,cancelable:true,shiftKey:true});
        Object.defineProperty(e, "keyCode", {"value" : 67});
        document.dispatchEvent(e);
        document.execCommand("InsertText",false, 'I agree');
        c2Elements[c2Index].style.border = "none";
        scrollElements[index].style.border = "solid";
        c2 = false;
        scroll = true;
        node.removeChild(c2Node);
        node.appendChild(scrollNode);
        });
    c2LArray.push(function(){
        var e = new KeyboardEvent("keydown",{bubbles:true,cancelable:true,shiftKey:true});
        Object.defineProperty(e, "keyCode", {"value" : 67});
        document.dispatchEvent(e);
        document.execCommand("InsertText",false, 'I disagree');
        c2Elements[c2Index].style.border = "none";
        scrollElements[index].style.border = "solid";
        c2 = false;
        scroll = true;
        node.removeChild(c2Node);
        node.appendChild(scrollNode);
        });
    c2LArray.push(function(){
        var e = new KeyboardEvent("keydown",{bubbles:true,cancelable:true,shiftKey:true});
        Object.defineProperty(e, "keyCode", {"value" : 67});
        document.dispatchEvent(e);
        document.execCommand("InsertText",false, 'Great Picture');
        c2Elements[c2Index].style.border = "none";
        scrollElements[index].style.border = "solid";
        c2 = false;
        scroll = true;
        node.removeChild(c2Node);
        node.appendChild(scrollNode);
        });
    c2LArray.push(function(){
        var e = new KeyboardEvent("keydown",{bubbles:true,cancelable:true,shiftKey:true});
        Object.defineProperty(e, "keyCode", {"value" : 67});
        document.dispatchEvent(e);
        document.execCommand("InsertText",false, 'Awesome');
        c2Elements[c2Index].style.border = "none";
        scrollElements[index].style.border = "solid";
        c2 = false;
        scroll = true;
        node.removeChild(c2Node);
        node.appendChild(scrollNode);
        });
    c2LArray.push(function(){
        c2Index = 0;
        index = 0;
        c2Elements[c2Index].style.border = "none";
        node.removeChild(c2Node);
        node.appendChild(scrollNode);
        scrollElements[index].style.border = "solid";
        c2 = false;
        scroll = true;
         });
    c2RArray.push(function(){
        c2Elements[c2Index].style.border = "none";
        c2Index = c2Index+1;
        c2Elements[c2Index].style.border = "solid";
        });
    c2RArray.push(function(){
        c2Elements[c2Index].style.border = "none";
        c2Index = c2Index+1;
        c2Elements[c2Index].style.border = "solid";
        });
    c2RArray.push(function(){
        c2Elements[c2Index].style.border = "none";
        c2Index = c2Index+1;
        c2Elements[c2Index].style.border = "solid";
        });
    c2RArray.push(function(){
        c2Elements[c2Index].style.border = "none";
        c2Index = c2Index+1;
        c2Elements[c2Index].style.border = "solid";
    });
    c2RArray.push(function(){
        c2Elements[c2Index].style.border = "none";
        c2Index = 0;
        c2Elements[c2Index].style.border = "solid";
    });

///////////////DOING STUFF WITH FINAL THINGS/////////////////

//ADDING SCROLLNODE TO NODE
    node.appendChild(scrollNode);
    var scroll = true;
    var c1 = false;
    var c2 = false;
    var custom = false;
//ADDING NODE TO PAGE
    var focus = document.getElementById("blueBarDOMInspector");
    focus.appendChild(node);
    document.getElementById("globalContainer").style.padding = "40px";

//Highlighting first position
    scrollElements[0].style.border = "solid";
    scrollElements[0].style.borderWidth = "3px";

//EVENT LISTENER
    document.addEventListener("keydown", function(e){
        //LEFT
        if(e.keyCode===37){
            if(scroll){
                leftArray[index]();
            }else if(c1){
                c1LArray[c1Index]();
            }else if(custom){
                if(customIndex === customCounter){
                        customIndex = 0;
                        c4Node.removeChild(customArray[customCounter]);
                        c4Node.appendChild(customArray[customIndex]);
                        node.removeChild(c4Node);
                        node.appendChild(scrollNode);
                        scrollElements[index].style.border = "solid";
                        scroll = true;
                        custom = false;
                }else{
                    //DO SOMETHING
                }
            }else{
                c2LArray[c2Index]();
            }
        }else if(e.keyCode===39){
             if(scroll){
                rightArray[index]();
            }else if(c1){
                c1RArray[c1Index]();
            }else if(custom){
                //DO SOMETHING
                if(customIndex === customCounter){
                    customIndex = 0;
                    c4Node.removeChild(customArray[customCounter]);
                    c4Node.appendChild(customArray[customIndex]);   
                }else{
                    c4Node.removeChild(customArray[customIndex]);
                    customIndex = customIndex + 1;
                    c4Node.appendChild(customArray[customIndex]);
                }
            }else{
                c2RArray[c2Index]();
            }
        }

    });