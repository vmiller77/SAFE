// var g;
// chrome.storage.local.get("storage",function(object){
// 	g = object["storage"];
// 	console.log(g);
// 	document.dispatchEvent(new CustomEvent('ToFBScript',{detail: {data: g}}));
// });

// document.dispatchEvent(new CustomEvent('ToFBScript',{detail: {data: "Hello World"}}));

//Injecting Script
	var s = document.createElement('script');
	s.src = chrome.extension.getURL('fbscriptforextension.js');
	(document.head||document.documentElement).appendChild(s);
	s.onload = function(){
	 s.parentNode.removeChild(s);
	 //document.dispatchEvent(new CustomEvent('ToFBScript',{detail: "Hello World"}));
	var g;
	chrome.storage.local.get("storage",function(object){
		g = object["storage"];
		document.dispatchEvent(new CustomEvent('ToFBScript',{detail: g}));
	});
	/////////
	};

//Getting Info from InjectedScript
document.addEventListener('MyConnect', function(e) {
    var v = e.detail;
    chrome.storage.local.get("storage",function(object){
    	if(object["storage"]===null){
    		var newArray = [];
    		newArray.push(v);
    		chrome.storage.local.set({"storage":newArray});
    		console.log("Nothing stored here yet!");
    	}else{
    		//Get the storage Array and push new item into it
    		var p = object["storage"];
    		p.push(v);
    		chrome.storage.local.set({"storage":p});
    	}
    });
    chrome.storage.local.get(null, function (Items) {console.log(Items)});
    chrome.storage.local.get("storage",function(object){
    	var g = object["storage"];
    	console.log(g);
    	console.log(g.length);
    });
});

document.addEventListener('Delete',function(e){
	var p = e.detail;
	chrome.storage.local.set({"storage":p},function(){
		console.log("I see delete");
		console.log(p[0]);
	});
});