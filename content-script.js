/* cookie */
document.cookie = 0;

/* This is the object for the relevant site */
/*var relevantSite = {
    score: 0;
    URL: "";
    searchQuery: "";
}*/

/* For each search URL, we send the data to the data base */


  var sites = document.getElementsByClassName("_Rm"); //these are the links to go to HTTP GET
  var links = []
  /*for(i=0;i<sites.length;i++)
  {
     links.push(sites[i].textContent);

  }*/
var pen;
universe = 0;
  var upvotes = []
  var downvotes = []
  var ratings = []
var upvotedict = {}
  var downvotedict = {}


  var searchQuery = document.URL.match(/(&q=(.)+?)(?=&)/)[0];
  var dict = {"query":searchQuery,"links":links};
  json1 = JSON.stringify(dict);
  alert(searchQuery);
  var xhr = new XMLHttpRequest();
  var url = "http://commonelements.zacharyrmckee.com/1/" + searchQuery;
  xhr.open("GET", url, false);
var parser;
alert("running1?");

function doStuff()
{
    if ((xhr.readyState == 4) && (xhr.status == 200)) {
      var x = JSON.parse(xhr.responseText);
      alert("running?")
      parser = x["links"][0].rating;
      for(var i=0;i< x["links"].length; i++)
      {
        ratings[i] = x["links"][i].rating;
        alert(ratings[i]);
      }
      for (var i = 0; i < x["links"].length; i++)
      {
         links[i] = x["links"][i];
      }
    }
    universe.innerText = parser;
    alert(parser)


}
  xhr.onreadystatechange = function()
  {
    doStuff();

  };
  xhr.send();







  var xhr2 = new XMLHttpRequest();
  var url = "http://commonelements.zacharyrmckee.com/1/" + searchQuery;
  xhr2.open("POST", url, true);
  xhr2.setRequestHeader('Content-Type', 'application/json');
  xhr2.send(json1);










var results = document.getElementsByClassName("g");
for (var i=0; i<results.length; i++) {
	//results.item(i).insertBefore(icon,results.item(i).firstChild);
	var element = results.item(i).firstChild;
  //alert(element.tagName)
	if(!results.item(i).className.includes("rhs") && !results.item(i).className.includes("g-blk") && element.tagName != "G-SECTION-WITH-HEADER")
	{
		var icon = document.createElement("div");
		//icon.innerText = "*icon goes here*";
    child = results.item(i).getElementsByTagName('div')[0];
    if(Number.isInteger(parseInt(child.getAttribute("data-hveid"))))
    {
      child.style = "display: inline-block; width: 90%;"
    }
		results.item(i).insertBefore(icon,results.item(i).firstChild);
		results.item(i).firstChild.style = "background-color: red; vertical-align: top; margin: auto; display: inline-block; width: 10%; height: 100%;";

    var upvote = document.createElement("div")
    upvote.id = "upvote" + i;
    upvote.style = "height: 30px; margin: 0; text-align: center; background-color: blue;";
    upvote.innerText = "Upvote";
    upvotedict[upvote.id] = links[i].url;

    upvote.addEventListener("click", function(e) {

      e = e || window.event;
      var target = e.target || e.srcElement
          id = target.id;

      var thisUrl = upvotedict[target.id]
      var searchQuery = document.URL.match(/(&q=(.)+?)(?=&)/)[0];
      var xhr3 = new XMLHttpRequest();
      var url = "http://commonelements.zacharyrmckee.com/1/" + searchQuery +"/" + thisUrl + "2";
      xhr3.open("PUT", url, true);
      xhr3.send();

      //search query, the upvote, and URL


    }, false);
    results.item(i).firstChild.appendChild(upvote);

    var rating = document.createElement("div")
    rating.id = "rating" + i;
    rating.style = "height: 30px; margin: 0; text-align: center; background-color: lightgreen;"; ;
    rating.innerText = ratings[i];

    results.item(i).firstChild.appendChild(rating);
    universe = rating;

    var downvote = document.createElement("div");
    downvote.id = "downvote" + i;
    downvote.style = "height: 30px; margin: 0; background-color: lightred;";
    downvote.innerText = "Downvote";
    downvotedict[downvote.id] = links[i].url;
    downvote.addEventListener("click",function(e){
      e = e || window.event;
      var target = e.target || e.srcElement
          id = target.id;

      var thisUrl = downvotedict[target.id]
      var searchQuery = document.URL.match(/(&q=(.)+?)(?=&)/)[0];
      var xhr3 = new XMLHttpRequest();
      var url = "http://commonelements.zacharyrmckee.com/1/" + searchQuery +"/" + thisUrl + "1";
      xhr3.open("PUT", url, true);
  //    xhr3.setRequestHeader('Content-Type', 'application/json');
      xhr3.send();


    });};
    downvotes.push(downvote);
    results.item(i).firstChild.appendChild(downvote);


	}


var div = document.createElement("div");
document.body.appendChild(div);
div.innerText = "test123";





