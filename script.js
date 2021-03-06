/************
	naming of the variables in form of _ is intentional for this file :)
**********/

function createRequestObject(){
	return new XMLHttpRequest();
}

var _o;
var _ = new createRequestObject();

/********/
var _m;
function call(){
	
	if(_!=null){
		_.open("GET", "https://jsonplaceholder.typicode.com/users", true);
		_.onreadystatechange = function processResponse(){
				if(_.status==200 && _.readyState==4){
						var wrapper = document.getElementById("persons");
						_o = JSON.parse(_.responseText);
						
						for(var m=0; m<_o.length; m++){	

							var _one = document.createElement("div");
							_one.classList.add("pname");
							_one.innerHTML=_o[m].name;
							
							var _two = document.createElement("div");
							_two.classList.add("pdet");
							_two.setAttribute("id", m);
							_two.setAttribute("onmouseover", "hideThis(this)");
							//_two.innerHTML="details";
									var __1two  = document.createElement("div");
									__1two.classList.add("pdetd");
									__1two.innerHTML=_o[m].username;
									
									var __2two  = document.createElement("div");
									__2two.classList.add("pdetd");
									__2two.innerHTML=_o[m].phone;
									
									var __3two  = document.createElement("div");
									__3two.classList.add("pdetd");
									__3two.innerHTML=_o[m].website;
									
									var __4two  = document.createElement("div");
									__4two.classList.add("pdetd");
									__4two.innerHTML=_o[m].company.name;
									
									_two.appendChild(__1two);
									_two.appendChild(__2two);
									_two.appendChild(__3two);
									_two.appendChild(__4two);
									
							
							var __ = document.createElement("div");
							__.classList.add("pbox");
							__.setAttribute("id", m);
							__.setAttribute("onmouseout", "showOver("+m+")");
							
								/*___  = document.createElement("div");
								___.innerHTML=_o[m].name;
								___.classList.add("pboxheader");
								__.appendChild(___);
								
								____  = document.createElement("div");
								____.innerHTML=_o[m].name+""+_o[m].name;
								____.classList.add("pboxbody");
								__.appendChild(____);*/
								
							
							
							_m = new google.maps.Map(
							__,
							{
								center:{
									lat:parseInt(_o[m].address.geo.lat),
									lng:parseInt(_o[m].address.geo.lng)
								},
								zoom:1
							}
							);
							
							var marker = new google.maps.Marker({
								position:{
									lat:parseInt(_o[m].address.geo.lat),
									lng:parseInt(_o[m].address.geo.lng)
								},
								title:_o[m].name,
								animation: google.maps.Animation.DROP,
								map:_m
							});
							
							
							/***
							get the only children of the element ____ and change its positon to none
							***/
							
							//____.children[0].setAttribute("style", "height: 100%;width: 100%;top: 0px;left: 0px;background-color: rgb(229, 227, 223);");
							
							wrapper.appendChild(_one);
							wrapper.appendChild(_two);
							wrapper.appendChild(__);
							//f();
								
						}
					}
			};
		_.send(null);
		
	}
	else{
		console.log("Object is null");
	}
	
}

document.addEventListener('DOMContentLoaded', function (){
	call();
	
});

function f(){
		var _e = document.getElementsByClassName("pboxbody");
		console.log(_e.length);
		for(var _=0; _<_e.length; _++){
			console.log("setting style of this eleemtn "+ _e[_]);
			_e[_].children[0].setAttribute("style", "height: 100%;width: 100%;top: 0px;left: 0px;background-color: rgb(229, 227, 223);");
		}
}

function hideThis(e){
	e.style.display="none";
}
function showOver(e){
	document.getElementById(e).style.display="block";
}