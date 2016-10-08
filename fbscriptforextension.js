var storage = null;

document.addEventListener('ToFBScript',function(e){
    storage = e.detail;
    console.log(storage);

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
//c1Node DESIGN (PreMade/Pers/Edit/GoBack)
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
    var editCommentText = document.createElement("DIV");
    var eCText = document.createTextNode("Edit Comments");
    editCommentText.appendChild(eCText);
    c1Elements.push(editCommentText);
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
//c2Node DESIGN(Premade comments)
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
        var lolText = document.createElement("DIV");
        var lText = document.createTextNode("LOL");
        lolText.appendChild(lText);
        c2Elements.push(lolText);
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
//c5Node(Add or delete the comment)
    var c5Node = document.createElement("DIV");
    var c5Elements = [];
    var addCommentText = document.createElement("DIV");
    var aCText = document.createTextNode("Add Comments");
    addCommentText.appendChild(aCText);
    c5Elements.push(addCommentText);
    var deleteCommentText = document.createElement("DIV");
    var dCText = document.createTextNode("Delete Comments");
    deleteCommentText.appendChild(dCText);
    c5Elements.push(deleteCommentText);
    var cancel3Text = document.createElement("DIV");
    var c3Text = document.createTextNode("Go back");
    cancel3Text.appendChild(c3Text);
    c5Elements.push(cancel3Text);
    //STYLING ELEMENTS
    for(var i = 0; i < c5Elements.length; i++){
        c5Elements[i].style.fontSize = '18px';
        c5Elements[i].style.paddingLeft = "40px";
        c5Elements[i].style.paddingRight = "40px";
        c5Elements[i].style.float = "left";
        //ADDING ELEMENTS TO C1NODE
        c5Node.appendChild(c5Elements[i]);
      }

//c3Node(Typing in your comment) DESIGN 
        var c3Node = document.createElement("DIV");
        var customCommentText = document.createElement("DIV");
        var ccText = document.createTextNode("Type in your Custom Message and it will be added!");
        customCommentText.appendChild(ccText);
        var textAreaDiv = document.createElement("DIV");
        var textArea = document.createElement("TEXTAREA");
        textAreaDiv.appendChild(textArea);
        textArea.placeHolder = "Type your personalized comment here!";
        c3Node.appendChild(textAreaDiv);
        c3Node.appendChild(customCommentText);
        ///////////////////////
        var shiftButton = document.createElement("BUTTON");
        var shiftButtonText = document.createTextNode("SHIFT");
        shiftButton.appendChild(shiftButtonText);
        shiftButton.style.padding = "9px";
        shiftButton.style.fontSize = "14px";
        shiftButton.style.borderWidth = "2px";
        shiftButton.style.borderColor = "black";
        shiftButton.style.backgroundColor = "#99badd";
        ///////////////////////
        var doneButton = document.createElement("BUTTON");
        var doneButtonText = document.createTextNode("DONE");
        doneButton.appendChild(doneButtonText);
        doneButton.style.padding = "9px";
        doneButton.style.fontSize = "14px";
        doneButton.style.borderWidth = "2px";
        doneButton.style.borderColor = "black";
        var numberButton = document.createElement("BUTTON");
        var numberButtonText = document.createTextNode("Numbers and Symbols");
        numberButton.appendChild(numberButtonText);
        numberButton.style.padding = "9px";
        numberButton.style.fontSize = "14px";
        numberButton.style.borderWidth = "2px";
        numberButton.style.borderColor = "black";
        var lettersButton = document.createElement("BUTTON");
        var lettersButtonText = document.createTextNode("Letters");
        lettersButton.appendChild(lettersButtonText);
        lettersButton.style.padding = "9px";
        lettersButton.style.fontSize = "14px";
        lettersButton.style.borderWidth = "2px";
        lettersButton.style.borderColor = "black";
        numberButton.style.backgroundColor ="#99badd";
        doneButton.style.backgroundColor ="#99badd";
        lettersButton.style.backgroundColor="#99badd";
        customCommentText.style.fontSize = "14px";
        customCommentText.style.position = "relative";
        textArea.style.position = "relative";
        doneButton.style.position = "relative";
        textArea.style.width = "600px"
        textArea.style.height = "20px"
//emoticonsNode
var emoticonsNode = document.createElement("DIV");
var emoticonElements = [];
var e1 = document.createElement("DIV");
e1.appendChild(document.createTextNode(":)"));
emoticonElements.push(e1);
var e2 = document.createElement("DIV");
e2.appendChild(document.createTextNode(":("));
emoticonElements.push(e2);
var e3 = document.createElement("DIV");
e3.appendChild(document.createTextNode(":D"));
emoticonElements.push(e3);
for(var i = 0; i < emoticonElements.length; i++){
        emoticonElements[i].style.fontSize = '18px';
        emoticonElements[i].style.paddingLeft = "40px";
        emoticonElements[i].style.paddingRight = "40px";
        emoticonElements[i].style.float = "left";
        //ADDING ELEMENTS TO C1NODE
        emoticonsNode.appendChild(emoticonElements[i]);
      }

//KEYBOARD
    var typeIndex = 0;
    var numIndex = 0;
    var alphabetNode = document.createElement("DIV");
    var numberNode = document.createElement("DIV");
    var alphabet = ["a","b","c","d","e","f","g","h","i",
                    "j","k","l","m","n","o","p","q","r",
                    "s","t","u","v","w","x","y","z"," ",""];

    var upperCaseNode = document.createElement("DIV");
    var upperCase = ["A","B","C","D","E","F","G","H","I",
                    "J","K","L","M","N","O","P","Q","R",
                    "S","T","U","V","W","W","Y","Z"," ",""];
    var upperCaseDIV = [];
    for(var i = 0; i < upperCase.length; i++){
                        var tempText = document.createElement("DIV");
                        if(i === 26){
                            var tText = document.createTextNode("SPACE");
                        }else if(i ===27){
                            var tText = document.createTextNode("DELETE");
                        }else{
                            var tText = document.createTextNode(upperCase[i]);
                        }
                        tempText.appendChild(tText);
                        tempText.style.fontSize = "14px";
                        tempText.style.border="solid";
                        tempText.style.borderWidth="1px";
                        tempText.style.float = "left";
                        tempText.style.padding="8px";
                        upperCaseDIV.push(tempText);
                        upperCaseNode.appendChild(tempText);
                        upperCaseNode.style.float ="center";
                    }

    var number = ["1","2","3","4","5","6","7","8","9","0",
                    ":",";",",",".","?","!","@","#","$",
                    "%","^","&","*","(",")","_","-","+",
                    "=","~","`","{","}","[","]","|",":)",":(",":D",":P",">:(","8)",":V","O:)"," ",""];

    var alphabetDIV=[];
    var numberDIV = [];

                    for(var i = 0; i < alphabet.length; i++){
                        var tempText = document.createElement("DIV");
                        if(i === 26){
                            var tText = document.createTextNode("SPACE");
                        }else if(i ===27){
                            var tText = document.createTextNode("DELETE");
                        }else{
                            var tText = document.createTextNode(alphabet[i]);
                        }
                        tempText.appendChild(tText);
                        tempText.style.fontSize = "14px";
                        tempText.style.border="solid";
                        tempText.style.borderWidth="1px";
                        tempText.style.float = "left";
                        tempText.style.padding="8px";
                        alphabetDIV.push(tempText);
                        alphabetNode.appendChild(tempText);
                        alphabetNode.style.float ="center";
                    }

                    for(var i = 0; i < number.length; i++){
                        var tempText = document.createElement("DIV");
                        if(i === number.length-2){
                            var tText = document.createTextNode("SPACE");
                        }else if(i ===number.length-1){
                            var tText = document.createTextNode("DELETE");
                        }else{
                            var tText = document.createTextNode(number[i]);
                        }
                        tempText.appendChild(tText);
                        tempText.style.fontSize = "14px";
                        tempText.style.border="solid";
                        tempText.style.borderWidth="1px";
                        tempText.style.float = "left";
                        tempText.style.padding="8px";
                        numberDIV.push(tempText);
                        numberNode.appendChild(tempText);
                        numberNode.style.float ="center";
                    }
        alphabetDIV.push(shiftButton);
        alphabetNode.appendChild(shiftButton);
        alphabetDIV.push(numberButton);
        alphabetDIV.push(doneButton);
        upperCaseDIV.push(numberButton);
        upperCaseDIV.push(doneButton);
        numberDIV.push(lettersButton);
        numberDIV.push(doneButton);
        numberNode.appendChild(lettersButton);
        alphabetNode.appendChild(numberButton);
        alphabetNode.appendChild(doneButton);
        c3Node.appendChild(alphabetNode);
//WHAT IF STORAGE (C4NODE)
    var customCounter = 0;
    var c6Index = 0;
    var c4Node = document.createElement("DIV");
    var customArray = [];
    var customButtonArray = [];
    var customDeleteArray = [];
    var goBackText = document.createElement("DIV");
    var gBText = document.createTextNode("Go Back");
    goBackText.appendChild(gBText);
    goBackText.style.fontSize = "18px";
    goBackText.style.paddingLeft = "40px";
    goBackText.style.paddingRight = "40px";
    goBackText.style.float = "left";
    var c6Node = document.createElement("DIV");
    var goBackText2 = document.createElement("DIV");
    var gbText2 = document.createTextNode("Go back");
    goBackText2.appendChild(gbText2);
    goBackText2.style.fontSize = "18px";
    goBackText2.style.paddingLeft = "40px";
    goBackText2.style.paddingRight = "40px";
    goBackText2.style.float = "left";
    if(storage !== null){
        for(var i = 0; i < storage.length; i++){
            //Normal Divs and styling
            var tempTextNode = document.createTextNode(storage[i]);
            var tempDiv = document.createElement("DIV");
            tempDiv.appendChild(tempTextNode);
            tempDiv.style.fontSize = '18px';
            tempDiv.style.paddingLeft = "40px";
            tempDiv.style.paddingRight = "40px";
            tempDiv.style.float = "left";
            customArray.push(tempDiv);
            //Button Divs and styling
            var v = storage[i].substring(0,7); 
            var vTextNode = document.createTextNode(v);
            var vDiv = document.createElement("DIV");
            vDiv.appendChild(vTextNode);
            vDiv.style.fontSize = '18px';
            vDiv.style.paddingLeft = "40px";
            vDiv.style.paddingRight = "40px";
            vDiv.style.float = "left";
            customButtonArray.push(vDiv);
            c4Node.appendChild(vDiv);
            //Delete Buttons
            var lTextNode = document.createTextNode(storage[i].substring(0,7));
            var lDiv = document.createElement("DIV");
            lDiv.appendChild(lTextNode);
            lDiv.style.fontSize = '18px';
            lDiv.style.paddingLeft = "40px";
            lDiv.style.paddingRight = "40px";
            lDiv.style.float = "left";
            customDeleteArray.push(lDiv);
            c6Node.appendChild(lDiv);
        }
        customArray.push(goBackText);
        customButtonArray.push(goBackText);
        customDeleteArray.push(goBackText2);

        c4Node.appendChild(goBackText);
        c6Node.appendChild(goBackText2);
        var customCounter = customButtonArray.length-1;
    }else{
        customArray.push(goBackText);
        customButtonArray.push(goBackText);
        customDeleteArray.push(goBackText2);
        c6Node.appendChild(customDeleteArray[0]);
        c4Node.appendChild(customArray[0]);

    }
//Button action
    numberButton.addEventListener("click",function(){
        alphabetDIV[typeIndex].style.backgroundColor = "#99badd";
        upperCaseDIV[upperIndex].style.backgroundColor = "#99badd";
        numberDIV[numIndex].style.backgroundColor = "white";
        if(upper){
            c3Node.removeChild(upperCaseNode);
            upper = false;
        }else{
            c3Node.removeChild(alphabetNode);
            letters = false;
        }
        numberNode.appendChild(doneButton);
        c3Node.appendChild(numberNode);
        numbers = true;
        typeIndex = 0;
        numIndex = 0;
        upperIndex = 0;
    });

    lettersButton.addEventListener("click",function(){
        numberDIV[numIndex].style.backgroundColor = "#99badd";
        alphabetDIV[typeIndex].style.backgroundColor = "white";
        c3Node.removeChild(numberNode);
        alphabetNode.appendChild(numberButton);
        alphabetNode.appendChild(doneButton);
        c3Node.appendChild(alphabetNode);
        letters = true;
        numbers = false;
        typeIndex = 0;
        numIndex = 0;
    });
    ///////////////////////
    var upperIndex = 0;
    var upper = false;
    shiftButton.addEventListener("click",function(){
        alphabetDIV[typeIndex].style.backgroundColor = "#99badd";
        upperCaseDIV[upperIndex].style.backgroundColor = "white";
        c3Node.removeChild(alphabetNode);
        upperCaseNode.appendChild(numberButton);
        upperCaseNode.appendChild(doneButton);
        c3Node.appendChild(upperCaseNode);
        letters = false;
        upper = true;
        typeIndex = 0;
        upperIndex = 0;

    });
    //////////////////////
          var customIndex = 0;

        doneButton.addEventListener("click",function(){
            node.removeChild(c3Node);
            node.appendChild(scrollNode);
            scroll = true;
            scrollElements[index].style.backgroundColor = "white";
            doneButton.style.background = "#99badd"
            var temp = textArea.value;
            typeIndex = 0;
            numIndex = 0;

            ///Make it if it is on numbers and done then makes node good and same with letters 
            if(temp===""){
                console.log("nothing");
            }else{
                console.log(temp);
                customCounter = customCounter + 1;
                var tempTextNode = document.createTextNode(temp); 
                var tempDiv = document.createElement("DIV");
                tempDiv.appendChild(tempTextNode);
                console.log(tempDiv);
                document.dispatchEvent(new CustomEvent('MyConnect',{detail: temp})); 
                customArray.pop(); 
                customArray.push(tempDiv); 
                customArray.push(goBackText); 
                //textArea.value  = ""; 
                //////////For custom Button////////////////
                    var v = temp.substring(0,7);
                    var vTextNode = document.createTextNode(v);
                    var vDiv = document.createElement("DIV");
                    vDiv.appendChild(vTextNode);
                    customButtonArray.pop();
                    customButtonArray.push(vDiv);
                    customButtonArray.push(goBackText);
                    var dTextNode = document.createTextNode(temp.substring(0,7));
                    var dDiv = document.createElement("DIV");
                    dDiv.appendChild(dTextNode);
                    dDiv.style.fontSize= "18px";
                    dDiv.style.paddingLeft = "40px";
                    dDiv.style.paddingRight = "40px"
                    dDiv.style.float = "left";
                    customDeleteArray.pop();
                    customDeleteArray.push(dDiv);
                    customDeleteArray.push(goBackText2);
                    c6Node.removeChild(goBackText2);
                    c6Node.appendChild(customDeleteArray[customDeleteArray.length-2]);
                    c6Node.appendChild(goBackText2);
            }
                var i = customButtonArray.length-2;
                customButtonArray[i].style.fontSize = '18px';
                customButtonArray[i].style.paddingLeft = "40px";
                customButtonArray[i].style.paddingRight = "40px";
                customButtonArray[i].style.float = "left";
                c4Node.removeChild(goBackText);
                c4Node.appendChild(customButtonArray[i]);
                c4Node.appendChild(goBackText);
                textArea.value = "";
                type = false;
         });
//SCROLL ELEMENTS
    //CREATING ARRAYS
        var leftArray = [];
        var rightArray = [];
        var index = 0;
        var nextpost = 0;
        var prepost = 0;

    //FUNCTIONS
        //Keyup event also!?
        leftArray.push(function(){
            var e = new KeyboardEvent("keydown",{bubbles:true,cancelable:true,shiftKey:true});
            Object.defineProperty(e, "keyCode", {"value" : 74});
            document.dispatchEvent(e);            
            index = 0;
            nextpost = nextpost + 1;
            });
        leftArray.push(function(){
             var e = new KeyboardEvent("keydown",{bubbles:true,cancelable:true,shiftKey:true});
             Object.defineProperty(e, "keyCode", {"value" : 76});
             document.dispatchEvent(e);
              });
        leftArray.push(function(){
            node.removeChild(scrollNode);
            node.appendChild(c1Node);
            scrollElements[2].style.backgroundColor = "#99badd";
            index= 0;
            c1Elements[0].style.backgroundColor = "white";
            c1Elements[0].style.backgroundColorWidth = "3px";           
            c1Index =0;   
            c1 = true;        
            scroll = false;
              });
        leftArray.push(function(){
            var e = new KeyboardEvent("keydown",{bubbles:true,cancelable:true,shiftKey:true});
            Object.defineProperty(e, "keyCode", {"value" : 75});
            document.dispatchEvent(e);
            prepost = prepost + 1;
            });
        rightArray.push(function(){
            scrollElements[index].style.backgroundColor = "#99badd";
            index = index+1;
            scrollElements[index].style.backgroundColor = "white";
            });
        rightArray.push(function(){
            scrollElements[index].style.backgroundColor = "#99badd";
            index = index+1;
            scrollElements[index].style.backgroundColor = "white";
            });
        rightArray.push(function(){
           scrollElements[index].style.backgroundColor = "#99badd";
            index = index+1;
            scrollElements[index].style.backgroundColor = "white";
            });
        rightArray.push(function(){
        scrollElements[index].style.backgroundColor = "#99badd";
        index = 0;
        scrollElements[index].style.backgroundColor = "white";
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
            c1Elements[c1Index].style.backgroundColor = "#99badd";
            c2Elements[index].style.backgroundColor = "white";
            var e = new KeyboardEvent("keydown",{bubbles:true,cancelable:true,shiftKey:true});
            Object.defineProperty(e, "keyCode", {"value" : 67});
            document.dispatchEvent(e);
        });
    //PERSONALIZED COMMENTS
        c1LArray.push(function(){
            c1 = false;
            custom = true;
            c1Elements[c1Index].style.backgroundColor = "#99badd";
            customButtonArray[0].style.backgroundColor = "white";
            node.removeChild(c1Node);
            node.appendChild(c4Node);
            var e = new KeyboardEvent("keydown",{bubbles:true,cancelable:true,shiftKey:true});
            Object.defineProperty(e, "keyCode", {"value" : 67});
            document.dispatchEvent(e);
        });
    //EDITCOMMENT
        c1LArray.push(function(){
            c1 = false;
            c5 = true
            c1Elements[c1Index].style.backgroundColor = "#99badd";
            node.removeChild(c1Node);
            node.appendChild(c5Node);
            c5Elements[c5Index].style.backgroundColor = "white";
        });
    //GO BACK
        c1LArray.push(function(){
            c1 = false;
            scroll = true;
            c1Elements[c1Index].style.backgroundColor = "#99badd";
            node.removeChild(c1Node);
            node.appendChild(scrollNode);
            scrollElements[index].style.backgroundColor = "white";
        });
        c1RArray.push(function(){
             c1Elements[c1Index].style.backgroundColor = "#99badd";
             c1Index = c1Index+1;
             c1Elements[c1Index].style.backgroundColor = "white";
        });
        c1RArray.push(function(){
             c1Elements[c1Index].style.backgroundColor = "#99badd";
             c1Index = c1Index+1;
             c1Elements[c1Index].style.backgroundColor = "white"; 
        });
        c1RArray.push(function(){
             c1Elements[c1Index].style.backgroundColor = "#99badd";
             c1Index = c1Index+1;
             c1Elements[c1Index].style.backgroundColor = "white";  
        });
        c1RArray.push(function(){
             c1Elements[c1Index].style.backgroundColor = "#99badd";
             c1Index = 0;
             c1Elements[c1Index].style.backgroundColor = "white"; 
        });
//C2 ELEMENTS
    //CREATING ARRAYS
    var c2LArray = [];
    var c2RArray= [];
    var c2Index = 0;

    //FUNCTIONS
    c2LArray.push(function(){
        document.execCommand("InsertText",false, 'I agree');
        var p = new KeyboardEvent("keydown",{bubbles:true,cancelable:true});
        Object.defineProperty(p, "keyCode", {"value" : 13})
        document.activeElement.dispatchEvent(p);
        scrollElements[index].style.backgroundColor = "white";
        c2 = false;
        scroll = true;
        node.removeChild(c2Node);
        node.appendChild(scrollNode);
        });
    c2LArray.push(function(){
        document.execCommand("InsertText",false, 'I disagree');
        var p = new KeyboardEvent("keydown",{bubbles:true,cancelable:true});
        Object.defineProperty(p, "keyCode", {"value" : 13})
        document.activeElement.dispatchEvent(p);
        scrollElements[index].style.backgroundColor = "white";
        c2 = false;
        scroll = true;
        node.removeChild(c2Node);
        node.appendChild(scrollNode);
        });
    c2LArray.push(function(){
        document.execCommand("InsertText",false, 'Great Picture');
        var p = new KeyboardEvent("keydown",{bubbles:true,cancelable:true});
        Object.defineProperty(p, "keyCode", {"value" : 13})
        document.activeElement.dispatchEvent(p);
        scrollElements[index].style.backgroundColor = "white";
        c2 = false;
        scroll = true;
        node.removeChild(c2Node);
        node.appendChild(scrollNode);
        });
    c2LArray.push(function(){
        document.execCommand("InsertText",false, 'Awesome');
        var p = new KeyboardEvent("keydown",{bubbles:true,cancelable:true});
        Object.defineProperty(p, "keyCode", {"value" : 13})
        document.activeElement.dispatchEvent(p);
        scrollElements[index].style.backgroundColor = "white";
        c2 = false;
        scroll = true;
        node.removeChild(c2Node);
        node.appendChild(scrollNode);
        });
    ////////////////////////////////////////////////////////////
    c2LArray.push(function(){
        document.execCommand("InsertText",false, 'LOL');
        var p = new KeyboardEvent("keydown",{bubbles:true,cancelable:true});
        Object.defineProperty(p, "keyCode", {"value" : 13})
        document.activeElement.dispatchEvent(p);
        scrollElements[index].style.backgroundColor = "white";
        c2 = false;
        scroll = true;
        node.removeChild(c2Node);
        node.appendChild(scrollNode);
        });
    ////////////////////////////////////////////////////////////
    c2LArray.push(function(){
        var p = new KeyboardEvent("keydown",{bubbles:true,cancelable:true});
        Object.defineProperty(p, "keyCode", {"value" : 27})
        document.activeElement.dispatchEvent(p);
        /////
        if(nextpost === prepost+1){
            leftArray[3]();
            prepost = prepost - 1;
        }else{
            leftArray[3]();
            leftArray[0]();
            nextpost = nextpost - 1;
            prepost = prepost -1;
        }
        index = 0;
        node.removeChild(c2Node);
        node.appendChild(scrollNode);
        scrollElements[index].style.backgroundColor = "white";
        c2 = false;
        scroll = true;
         });
    c2RArray.push(function(){
        c2Elements[c2Index].style.backgroundColor = "#99badd";
        c2Index = c2Index+1;
        c2Elements[c2Index].style.backgroundColor = "white";
        });
    c2RArray.push(function(){
        c2Elements[c2Index].style.backgroundColor = "#99badd";
        c2Index = c2Index+1;
        c2Elements[c2Index].style.backgroundColor = "white";
        });
    c2RArray.push(function(){
        c2Elements[c2Index].style.backgroundColor = "#99badd";
        c2Index = c2Index+1;
        c2Elements[c2Index].style.backgroundColor = "white";
        });
    c2RArray.push(function(){
        c2Elements[c2Index].style.backgroundColor = "#99badd";
        c2Index = c2Index+1;
        c2Elements[c2Index].style.backgroundColor = "white";
    });
    //////////////////////////////////////////////////////////////
    c2RArray.push(function(){
        c2Elements[c2Index].style.backgroundColor = "#99badd";
        c2Index = c2Index+1;
        c2Elements[c2Index].style.backgroundColor = "white";
    });
    /////////////////////////////////////////////////////////////
    c2RArray.push(function(){
        c2Elements[c2Index].style.backgroundColor = "#99badd";
        c2Index = 0;
        c2Elements[c2Index].style.backgroundColor = "white";
    });
//C5 ELEMENTS
    var c5LArray = [];
    var c5RArray= [];
    var c5Index = 0;

    c5LArray.push(function(){
        c5 = false;
        node.removeChild(c5Node);
        node.appendChild(c3Node);
        alphabetDIV[0].style.backgroundColor="white";
        type = true;
        letters = true;
    });
    c5LArray.push(function(){
        c5 = false;
        c6 = true;
        node.removeChild(c5Node);
        node.appendChild(c6Node);
        customDeleteArray[0].style.backgroundColor = "white";
        console.log("Pressed delete");
    });
    c5LArray.push(function(){
        c5 = false;
        scroll = true;
        node.removeChild(c5Node);
        node.appendChild(scrollNode);
        scrollElements[index].style.backgroundColor = "white";
    });
    c5RArray.push(function(){
        c5Elements[c5Index].style.backgroundColor = "#99badd";
        c5Index = c5Index+1;
        c5Elements[c5Index].style.backgroundColor = "white";
    });
    c5RArray.push(function(){
        c5Elements[c5Index].style.backgroundColor = "#99badd";
        c5Index = c5Index+1;
        c5Elements[c5Index].style.backgroundColor = "white";
    });
    c5RArray.push(function(){
        c5Elements[c5Index].style.backgroundColor = "#99badd";
        c5Index = 0;
        c5Elements[c5Index].style.backgroundColor = "white";
    });
//ADDING SCROLLNODE TO NODE
    node.appendChild(scrollNode);
    var scroll = true;
    var c1 = false;
    var c2 = false;
    var custom = false;
    var type = false;
    var c4 = false;
    var c5 = false;
    var c6 = false;
    var numbers = false;;
    var letters = false;
    var focus = document.getElementById("blueBarDOMInspector");
    focus.appendChild(node);
    document.getElementById("globalContainer").style.padding = "40px";
//Highlighting first position
    scrollElements[0].style.backgroundColor = "white";
    scrollElements[0].style.backgroundColorWidth = "3px";
/////////Function for KeyBoard
    var  setSelectionRange = function(input, selectionStart, selectionEnd) {
      if (input.setSelectionRange) {
        input.focus();
        input.setSelectionRange(selectionStart, selectionEnd);
      }
      else if (input.createTextRange) {
        var range = input.createTextRange();
        range.collapse(true);
        range.moveEnd('character', selectionEnd);
        range.moveStart('character', selectionStart);
        range.select();
      }
    };

    var setCaretToPos = function(input, pos) {
      setSelectionRange(input, pos, pos);
    };
//EVENT LISTENER
    document.addEventListener("keydown", function(e){
        //LEFT
        if(e.keyCode===37){
                if(scroll){
                    leftArray[index]();
                }else if(c1){
                    c1LArray[c1Index]();
                }else if(custom){
                    if(customIndex !== customCounter){
                        document.execCommand("InsertText",false,customArray[customIndex].innerText);
                        var p = new KeyboardEvent("keydown",{bubbles:true,cancelable:true});
                        Object.defineProperty(p, "keyCode", {"value" : 13})
                        document.activeElement.dispatchEvent(p);
                    }
                    customButtonArray[customIndex].style.backgroundColor = "#99badd";
                    customIndex = 0;
                    node.removeChild(c4Node);
                    node.appendChild(scrollNode);
                    scrollElements[index].style.backgroundColor = "white";
                    scroll = true;
                    custom = false;
                }else if(c5){
                    c5Elements[c5Index].style.backgroundColor = "#99badd";
                    c5LArray[c5Index]();
                    c5Index = 0;
                }else if(type){
                    if(letters){
                           if(typeIndex===alphabetDIV.length-1){
                                doneButton.click();
                                textArea.textContent = "";
                                typeIndex = 0;
                                type = false;
                                letters = false;
                            }else if(typeIndex===alphabetDIV.length-2){
                                numberButton.click();
                                typeIndex = 0;
                                letters = false;
                                numbers = true;
                            }else if(typeIndex===alphabetDIV.length-3){
                                shiftButton.click();
                                typeIndex = 0;
                                letters = false;
                                upper = true;
                            }else if(typeIndex===alphabetDIV.length-4){
                                textArea.value = textArea.value.substring(0,textArea.value.length-1);
                            }else{
                                textArea.value = textArea.value + alphabet[typeIndex];
                            }
                    }else if(upper){
                            if(upperIndex===upperCaseDIV.length-1){
                                doneButton.click();
                                textArea.textContent = "";
                                upperIndex = 0;
                                type = false;
                                upper = false;
                                console.log("Should be DONE");
                            }else if(upperIndex===upperCaseDIV.length-2){
                                numberButton.click();
                                upperIndex = 0;
                                upper = false;
                                numbers = true;
                                console.log("Should be number button");
                            }else if(upperIndex===upperCaseDIV.length-3){
                                console.log("Should be deleting");
                                textArea.value = textArea.value.substring(0,textArea.value.length-1);
                            }else{
                                textArea.value = textArea.value + upperCase[upperIndex];
                            }
                    }else{
                        if(numIndex===numberDIV.length-1){
                                doneButton.click();
                                textArea.value = "";
                                c3Node.removeChild(numberNode);
                                alphabetNode.appendChild(doneButton);
                                c3Node.appendChild(alphabetNode);
                                numIndex = 0;
                                type = false;
                                numbers = false;
                            }else if(numIndex===numberDIV.length-2){
                                lettersButton.click();
                                numIndex = 0;
                                letters = true;
                                numbers = false;
                            }else if(numIndex===numberDIV.length-3){
                                textArea.value = textArea.value.substring(0,textArea.value.length-1);
                            }else{
                                textArea.value = textArea.value + number[numIndex];
                                console.log(textArea.value);
                            }
                    }
                }else if(c6){
                        if(c6Index===customDeleteArray.length -1){
                            customDeleteArray[c6Index].style.backgroundColor = "#99badd";
                            c6Index = 0;
                            node.removeChild(c6Node);
                            node.appendChild(scrollNode);
                            scrollElements[0].style.backgroundColor="white";
                            c6 = false;
                            scroll = true;
                        }else{
                            customDeleteArray.splice(c6Index,1);
                            customButtonArray.splice(c6Index,1);
                            customArray.splice(c6Index,1);
                            var deleted = [];
                            for(var i = 0; i < customArray.length-1; i++){
                                deleted.push(customArray[i].innerText);
                            }
                            document.dispatchEvent(new CustomEvent('Delete',{detail: deleted}));
                            customCounter = customCounter-1;
                            c6Node.removeChild(c6Node.childNodes[c6Index]);
                            c4Node.removeChild(c4Node.childNodes[c6Index]);
                            c6Index = 0;
                            c6 = false;
                            scroll = true;
                            node.removeChild(c6Node);
                            node.appendChild(scrollNode);
                            scrollElements[0].style.backgroundColor = "white";
                        }
                }else{
                    c2Elements[c2Index].style.backgroundColor = "#99badd";
                    c2LArray[c2Index]();
                    c2Index = 0;
                }
        }else if(e.keyCode===39){
             if(scroll){
                rightArray[index]();
             }else if(c1){
                c1RArray[c1Index]();
             }else if(custom){
                    if(customIndex === customButtonArray.length-1){
                        customButtonArray[customIndex].style.backgroundColor = "#99badd";
                        customIndex = 0;
                        customButtonArray[customIndex].style.backgroundColor = "white";  
                    }else{
                        customButtonArray[customIndex].style.backgroundColor = "#99badd";
                        customIndex = customIndex +1;
                        customButtonArray[customIndex].style.backgroundColor = "white";
                    }
             }else if(c5){
                     c5RArray[c5Index]();
             }else if(type){
                    if(letters){
                            if(typeIndex===alphabetDIV.length-1){
                                alphabetDIV[typeIndex].style.backgroundColor = "#99badd";
                                typeIndex = 0;
                                alphabetDIV[typeIndex].style.backgroundColor = "white";
                            }else{
                                alphabetDIV[typeIndex].style.backgroundColor = "#99badd";
                                typeIndex = typeIndex+1;
                                alphabetDIV[typeIndex].style.backgroundColor = "white";
                            }
                    }else if(upper){
                        if(upperIndex===upperCaseDIV.length-1){
                            upperCaseDIV[upperIndex].style.backgroundColor = "#99badd";
                            upperIndex = 0;
                            upperCaseDIV[upperIndex].style.backgroundColor = "white";
                        }else{
                           upperCaseDIV[upperIndex].style.backgroundColor = "#99badd";
                           upperIndex = upperIndex+1;
                           upperCaseDIV[upperIndex].style.backgroundColor = "white"; 
                        }
                    }else{
                            if(numIndex===numberDIV.length-1){
                                numberDIV[numIndex].style.backgroundColor = "#99badd";
                                numIndex = 0;
                                numberDIV[numIndex].style.backgroundColor = "white";
                            }else{
                                numberDIV[numIndex].style.backgroundColor = "#99badd";
                                numIndex = numIndex+1;
                                numberDIV[numIndex].style.backgroundColor = "white";
                            }
                    }
             }else if(c6){
                    if(c6Index === customDeleteArray.length -1){
                        customDeleteArray[c6Index].style.background = "#99badd";
                        c6Index = 0;
                        customDeleteArray[c6Index].style.background = "white";
                    }else{
                        customDeleteArray[c6Index].style.background = "#99badd";
                        c6Index = c6Index+1;
                        customDeleteArray[c6Index].style.background = "white";
                    }
             }else{
                 c2RArray[c2Index]();
             }
        }

    });


    });
