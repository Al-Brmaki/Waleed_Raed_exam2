document.addEventListener("DOMContentLoaded", function(event){
	document.querySelector(".section:nth-child(3)").addEventListener("click", function(){
    //Call server to get the entriy and the items
    var item=null;
    var currentItem=null;
    var fullitem="";
		var xttp=new XMLHttpRequest();
		xttp.onreadystatechange=function(){
			if((this.readyState==4)&&(this.status==200)){
        item = this.responseText;
        var xttp=new XMLHttpRequest();
		    xttp.onreadystatechange=function(){
			    if((this.readyState==4)&&(this.status==200)){
            var entry= JSON.parse(this.responseText);

			var initDiv = document.getElementById("content");
			initDiv.innerHTML = ""; // Clears the content of the div


			for(var i=0 ; i < entry.length ;i++){
        
          currentItem = item.replace(new RegExp("{{name}}", "g"), entry[i].name);
          currentItem = currentItem.replace(new RegExp("{{description}}", "g"), entry[i].description);
          fullitem += currentItem;
          console.log(initDiv)		
			}
      document.querySelector("#content").innerHTML= document.querySelector("#content").innerHTML+fullitem;
      document.querySelector("#header").innerHTML= "Sushi Menu";
      
			    }
		    };
        xttp.open("GET", "data/sushi.json", true);
		    xttp.send(null);//for POST only
			}
		};
		xttp.open("GET", "templates/sushi.html", true);
    xttp.send(null);//for POST only
  });
  
});


document.addEventListener("DOMContentLoaded", function(event){
	document.querySelector(".section:nth-child(2)").addEventListener("click", function(){
    //Call server to get the entriy and the items
    var item=null;
    var currentItem=null;
    var fullitem="";
		var xttp=new XMLHttpRequest();
		xttp.onreadystatechange=function(){
			if((this.readyState==4)&&(this.status==200)){
        item = this.responseText;
        var xttp=new XMLHttpRequest();
		    xttp.onreadystatechange=function(){
			    if((this.readyState==4)&&(this.status==200)){
            var entry= JSON.parse(this.responseText);

			var initDiv = document.getElementById("content");
			initDiv.innerHTML = ""; // Clears the content of the div
      

			for(var i=0 ; i < entry.length ;i++){
        
          currentItem = item.replace(new RegExp("{{name}}", "g"), entry[i].name);
          currentItem = currentItem.replace(new RegExp("{{description}}", "g"), entry[i].description);
          fullitem += currentItem;
          console.log(initDiv)		
			}
      document.querySelector("#content").innerHTML= document.querySelector("#content").innerHTML+fullitem;
      document.querySelector("#header").innerHTML= "Beef Menu";

			    }
		    };
        xttp.open("GET", "data/beef.json", true);
		    xttp.send(null);//for POST only
			}
		};
		xttp.open("GET", "templates/beef.html", true);
    xttp.send(null);//for POST only
  });
  
});

document.addEventListener("DOMContentLoaded", function(event){
	document.querySelector(".section").addEventListener("click", function(){
    //Call server to get the entriy and the items
    var item=null;
    var currentItem=null;
    var fullitem="";
		var xttp=new XMLHttpRequest();
		xttp.onreadystatechange=function(){
			if((this.readyState==4)&&(this.status==200)){
        item = this.responseText;
        var xttp=new XMLHttpRequest();
		    xttp.onreadystatechange=function(){
			    if((this.readyState==4)&&(this.status==200)){
            var entry= JSON.parse(this.responseText);

			var initDiv = document.getElementById("content");
			initDiv.innerHTML = ""; // Clears the content of the div


			for(var i=0 ; i < entry.length ;i++){
        
          currentItem = item.replace(new RegExp("{{name}}", "g"), entry[i].name);
          currentItem = currentItem.replace(new RegExp("{{description}}", "g"), entry[i].description);
          fullitem += currentItem;
          console.log(initDiv)		
			}
      document.querySelector("#content").innerHTML= document.querySelector("#content").innerHTML+fullitem;
      document.querySelector("#header").innerHTML= "Chicken Menu";
			    }
		    };
        xttp.open("GET", "data/chicken.json", true);
		    xttp.send(null);//for POST only
			}
		};
		xttp.open("GET", "templates/chicken.html", true);
    xttp.send(null);//for POST only
  });
  
});
