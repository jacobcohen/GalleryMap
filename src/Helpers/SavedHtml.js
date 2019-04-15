export const expoArtistRawHtml = `<title>NYC Galleries - Art exhibits, artists, open studios, news</title>

<meta name="viewport" content="width=device-width, initial-scale=1"> 
<link href="//fonts.googleapis.com/css?family=Raleway:400,300,600" rel="stylesheet" type="text/css"> 
<link rel="stylesheet" href="normalize.css">
<link rel="stylesheet" href="skeleton.css">



<style>
.myformstyle{
    
    -webkit-box-shadow: 0px 2px 6px 1px rgba(0,0,0,0.49);
-moz-box-shadow: 0px 2px 6px 1px rgba(0,0,0,0.49);
box-shadow: 0px 2px 6px 1px rgba(0,0,0,0.49);

}

td{border:0px; margin:0px; padding:0px}
tr{border:0px; margin:0px; padding:0px}
table{border:0px; margin:0px;  padding:0px}
form{border:0px; margin:0px;  padding:0px}
h5{border:0px; margin:0px;  padding:0px; margin-bottom:10px}
h4{border:0px; margin:0px;  padding:0px; margin-bottom:10px}
h3{border:0px; margin:0px;  padding:0px; margin-bottom:10px}
a{color:black; }

</style>


<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-133758317-1"></script>
<script>
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-133758317-1');
</script>



<script type="text/javascript" language="JavaScript">









<!--
function RemoveContent(d) {
document.getElementById(d).style.display = "none";
}

function InsertContent(d) {
document.getElementById(d).style.display = "";
}

function toggleDiv(d){

if(document.getElementById(d).style.display=='none'){
   InsertContent(d);
} else {
  RemoveContent(d);
}
}
//-->



function runajax(divtoupdate,url,nextaction,nextactioninfo)
{
  
  
//send request
var xmlhttp;
if (window.XMLHttpRequest)
{// code for IE7+, Firefox, Chrome, Opera, Safari
xmlhttp=new XMLHttpRequest();
}
else
{// code for IE6, IE5
xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}
//response
xmlhttp.onreadystatechange=function()
{
if (xmlhttp.readyState==4 && xmlhttp.status==200)
  {	  
  document.getElementById(divtoupdate).innerHTML=xmlhttp.responseText; 

      if(nextaction==1){
          //nextaction is set to 1 in admin_Categories_Assign.cfm
          //why - to update the span showing all current cats for a vendor AFTER we update the cat from the button 		
          runajax('spanxx'+nextactioninfo,'assigncategoriesgetallcatsforvendor.cfm?vid='+nextactioninfo);
      }

      if(nextaction==2){
          //nextaction is set to 1 in assignvendortags.cfm
          //why - to update the span showing all current tags for a vendor AFTER we update the tag from the button 		
          runajax('spanxx'+nextactioninfo,'assignvendortagsgetalltagsforvendor.cfm?vid='+nextactioninfo);
      }

      if(nextaction==3){
          //nextaction is set to 3 in emailrecipients.cfm
          //why - to update the span showing all how many emails are not included in a blast 		
          runajax('notincluded','emailrecipientsprocesstotal.cfm');
      }




  }
}
xmlhttp.open("GET",url,true);
xmlhttp.send();
}





//called in searchbody.cfm 
var typewatch = function(){ 
  var timer = 0;
  return function(callback, ms){
      clearTimeout (timer);
      timer = setTimeout(callback, ms);
  }  
}(); 






//called in searchbody.cfm , reportform.cfm
function runkeywordsearch(template){
  el = document.getElementById("fname2"); 
  
  var url = template+'?keyword2='+encodeURIComponent(el.value);
   
  window.location.href=url;
  
}  


//called when closing cover see nav.cfm
function refreshCells(){
  
  //alert('refresh cells');
  
  runajax('refreshcellsdiv','refreshcellscontent.cfm');
  
}



//javascript:parent.runprofile(167155,'default',window.pageYOffset);canScroll=0;lastYScrollPosition=window.pageYOffset
function runemail(sendtoindividual){
  
  canScroll=0;
  lastYScrollPosition=window.pageYOffset;
  
  var url =  'email.cfm?sendtoindividual='+sendtoindividual;
  InsertContent('cover');
  runajax('detailcontent',url);
}







function runbidlist(){
  var url =  'bidlist.cfm';
  InsertContent('cover');
  runajax('detailcontent',url);
}



function runimagelibrary(){
  var url =  'imagelibrary.cfm';
  InsertContent('cover');
  runajax('detailcontent',url);
}



function runprofile(vid,clickedfrom,yoffset,totoprofiletemplate,urlvars){
  //if(urlvars) alert(urlvars);
  if(!yoffset)yoffset=0;
  if(!urlvars)urlvars='';
  //alert(yoffset+ ' runprofile()');
  
  var thisTemplate = 'profile1.cfm';
  if(totoprofiletemplate) {
      thisTemplate = totoprofiletemplate;
      //alert(thisTemplate);
  }
  
  var url = 'profile.cfm?clickedfrom='+clickedfrom+'&vid='+vid+'&yoffset='+yoffset+'&specifictemplate='+thisTemplate+urlvars;
  InsertContent('cover');
  runajax('detailcontent',url);
}



function runaddvendor(typeofvendor){
  var url =  'addvendor.cfm';
  
  if(typeofvendor == 'tourstop'){
      url = 'addvendor.cfm?istourstop=1';
  }
  InsertContent('cover');
  runajax('detailcontent',url);
}


function runaddperson(){
  var url =  'addvendor.cfm';
  
  InsertContent('cover');
  runajax('detailcontent',url);
}

//resetyoffset is 1 when simply clicking SEARCH from main nav. otherwise it's 0 when coming from profilebody.cfm BACK TO SEARCH --->
function runsearch(resetyoffset){ 
  var url =  'search.cfm';
  if(resetyoffset==1) url = 'search.cfm?yoffset=0';
  parent.InsertContent('cover');
  parent.runajax('detailcontent',url);
  
  
} 


</script>


<style>
td{border-bottom:1px solid #eee}
</style>

<style>
.button {font-size:1.1em; background-color: #eeeeee; margin-left:5%; color:black; width:90%; border:0px; line-height:2.5em; height:2.5em; overflow:hidden}
</style>

<body style="padding:5px">








<div id="hooddiv" style="display:none">

<div style="position: fixed; color:white; width:100%; height:2.4em; line-height:2.4em; overflow:hidden; color:white; font-size:1.3em; left:0px; top:0px; background-color: #d51a8a">


<div style="display:inline-block; width:18%;">
&nbsp;
</div>

<div style="display:inline-block; width:60%" align="center">
<b>Neighborhoods</b>
</div>

<div style="display:inline-block; width:18%;" align="right">
<a href="Javascript:RemoveContent('hooddiv'); InsertContent('resultsdiv');" style=" color:white; text-decoration:none">Close &nbsp; </a>
</div>


</div>






<div style="height:55px"></div>




<div class="row">
<div class="three columns">&nbsp;</div>
<div class="six columns">
<a class="button" href="/events.cfm?pid=2&sort=3">All neighborhoods</a><br>

<a class="button" href="/events.cfm?pid=2&sort=3&hoodid=53176">Bronx</a><br>

<a class="button" href="/events.cfm?pid=2&sort=3&hoodid=53179">Brooklyn</a><br>

<a class="button" href="/events.cfm?pid=2&sort=3&hoodid=53170">Bushwick/Greenpoint/Ridgewood/Williamsburg</a><br>

<a class="button" href="/events.cfm?pid=2&sort=3&hoodid=53171">Chelsea</a><br>

<a class="button" href="/events.cfm?pid=2&sort=3&hoodid=53172">Chinatown/Downtown/Tribeca</a><br>

<a class="button" href="/events.cfm?pid=2&sort=3&hoodid=53180">East Village/Greenwich Village</a><br>

<a class="button" href="/events.cfm?pid=2&sort=3&hoodid=53181">Gramercy/Flatiron/NoMad/UnionSq</a><br>

<a class="button" href="/events.cfm?pid=2&sort=3&hoodid=53173">Harlem/Inwood/Washington Heights</a><br>

<a class="button" href="/events.cfm?pid=2&sort=3&hoodid=53175">Little Italy/Nolita/Soho</a><br>

<a class="button" href="/events.cfm?pid=2&sort=3&hoodid=53177">Lower East Side</a><br>

<a class="button" href="/events.cfm?pid=2&sort=3&hoodid=53174">Midtown</a><br>

<a class="button" href="/events.cfm?pid=2&sort=3&hoodid=53182">Queens</a><br>

<a class="button" href="/events.cfm?pid=2&sort=3&hoodid=53184">Staten Island</a><br>

<a class="button" href="/events.cfm?pid=2&sort=3&hoodid=53183">Upper East Side</a><br>

<a class="button" href="/events.cfm?pid=2&sort=3&hoodid=53178">Upper West Side</a><br>

</div>
</div>

</div>




<script>

function runkeywordsearch(){
  var el = document.getElementById("textfield");
  var value = el.value;
  value = value.trim();
  if (value.length == 0) {return;}
  var myurl = '/events.cfm?pid=2&sort=3&hoodid=53171&keyword='+encodeURIComponent(value);
  window.location.href=myurl;
}   


</script>




<div id="resultsdiv">




<div id="searchnav" style=" display:none; position: fixed; color:white; z-index:1000; width:100%; 
height:3.3em; line-height:1.5em; overflow:hidden; color:white; font-size:1.3em; left:0px; top:0px; background-color: #d51a8a">
<div align="center" style="line-height:3.3em">

<input type="text" id="textfield" 
onkeyup="typewatch(function(){runkeywordsearch();}, 970 );"
value=""
style=" color:black; border:0px; width:65%; margin:0px; padding:4px; height:2em" placeholder="search..."> 
<a href="/events.cfm?pid=2&sort=3&hoodid=53171" style="margin-left:15px; color:white; text-decoration:none">Cancel</a>
</div>

</div>





<div id="mainnav" style="display:; position: fixed; color:white; z-index:1000;  width:100%; 
height:3.3em; line-height:1.5em; overflow:hidden; color:white; font-size:1.3em; left:0px; top:0px; background-color: #d51a8a">




<div style="display:inline-block; width:18%;">
<a href="city.cfm?pid=2" style=" color:white; text-decoration:none">&nbsp; &#10096; Back</a>
</div>


<div style="display:inline-block; width:60%" align="center">
<b>Upcoming</b>
</div>


<div style="display:inline-block; width:18%;" align="right">
<a href="Javascript:RemoveContent('mainnav'); InsertContent('searchnav'); document.getElementById('textfield').focus()" style=" color:white; text-decoration:none">Search &nbsp; </a>
</div>


<div align="center" style="width:97%">
<a href="Javascript:InsertContent('hooddiv'); RemoveContent('resultsdiv');" style="color:white; text-decoration:none">Chelsea &#9660;</a>
</div>



</div>






<div style="height:55px"></div>








<div style="margin-bottom:15px; margin-top:15px; font-weight:bold" align="center">
49 galleries, 57 exhibits</div> 






<a href="profile.cfm?pid=2&vid=41957" style="text-decoration:none">
  
<div style="height:4px; margin-bottom:5px; margin-top:5px; border-top:0px solid #eee; "></div>



<div style="width:25%;  display:inline-block;">
     <img style="margin:0px" border="0" src="userimages/thumb_20190415_110050AM_78862400.jpg" width="80">
 </div>
   
   
 <div style=" width:70%; position:relative; padding-left:4px;  display:inline-block; vertical-align:top;">
 
 <div style=" font-size:1.1em; line-height:1.2em; font-weight:bold">Planthouse</div>
  
 <div style="font-size:.8em; line-height:1.4; margin-top:3px">55 W 28th St, New York, NY</div>
 
 <div style="overflow:hidden; margin-top:3px; font-size:1.1em; height:3em; line-height:1.4em">
 <font color="#E51965">
 Apr 16-May 11 2019
     </font>

     <Br> Anders Bergstrom, Ruth Lingen : Double Life
 </div>

</div>
</a>

<a href="profile.cfm?pid=2&vid=41959" style="text-decoration:none">
  
<div style="height:4px; margin-bottom:5px; margin-top:5px; border-top:1px solid #eee; "></div>



<div style="width:25%;  display:inline-block;">
     <img style="margin:0px" border="0" src="userimages/thumb_20190415_052937AM_81265270.png" width="80">
 </div>
   
   
 <div style=" width:70%; position:relative; padding-left:4px;  display:inline-block; vertical-align:top;">
 
 <div style=" font-size:1.1em; line-height:1.2em; font-weight:bold">Pleiades Gallery</div>
  
 <div style="font-size:.8em; line-height:1.4; margin-top:3px">530 W 25th St, #405, New York, NY</div>
 
 <div style="overflow:hidden; margin-top:3px; font-size:1.1em; height:3em; line-height:1.4em">
 <font color="#E51965">
 Apr 16-May 11 2019
     </font>

     <Br> Ellen Bradshaw
 </div>

</div>
</a>

<a href="profile.cfm?pid=2&vid=41959" style="text-decoration:none">
  
<div style="height:4px; margin-bottom:5px; margin-top:5px; border-top:1px solid #eee; "></div>



<div style="width:25%;  display:inline-block;">
     <img style="margin:0px" border="0" src="userimages/thumb_20190415_053506AM_88827159.png" width="80">
 </div>
   
   
 <div style=" width:70%; position:relative; padding-left:4px;  display:inline-block; vertical-align:top;">
 
 <div style=" font-size:1.1em; line-height:1.2em; font-weight:bold">Pleiades Gallery</div>
  
 <div style="font-size:.8em; line-height:1.4; margin-top:3px">530 W 25th St, #405, New York, NY</div>
 
 <div style="overflow:hidden; margin-top:3px; font-size:1.1em; height:3em; line-height:1.4em">
 <font color="#E51965">
 Apr 16-May 11 2019
     </font>

     <Br> Charlie R. Olson : Plastivegetation: Transmuting Trash
 </div>

</div>
</a>

<a href="profile.cfm?pid=2&vid=43337" style="text-decoration:none">
  
<div style="height:4px; margin-bottom:5px; margin-top:5px; border-top:1px solid #eee; "></div>



<div style="width:25%;  display:inline-block;">
     <img style="margin:0px" border="0" src="userimages/thumb_20190412_054602AM_93711958.png" width="80">
 </div>
   
   
 <div style=" width:70%; position:relative; padding-left:4px;  display:inline-block; vertical-align:top;">
 
 <div style=" font-size:1.1em; line-height:1.2em; font-weight:bold">Odetta Gallery - Chelsea</div>
  
 <div style="font-size:.8em; line-height:1.4; margin-top:3px">269 11th Ave, Lobby 4, 7th Fl, New York, NY</div>
 
 <div style="overflow:hidden; margin-top:3px; font-size:1.1em; height:3em; line-height:1.4em">
 <font color="#E51965">
 Apr 17-May 17 2019
     </font>

     <Br> Emily Berger, Bob Seng : Syncopation
 </div>

</div>
</a>

<a href="profile.cfm?pid=2&vid=42051" style="text-decoration:none">
  
<div style="height:4px; margin-bottom:5px; margin-top:5px; border-top:1px solid #eee; "></div>



<div style="width:25%;  display:inline-block;">
     <img style="margin:0px" border="0" src="userimages/thumb_20190413_094115AM_8348316.jpg" width="80">
 </div>
   
   
 <div style=" width:70%; position:relative; padding-left:4px;  display:inline-block; vertical-align:top;">
 
 <div style=" font-size:1.1em; line-height:1.2em; font-weight:bold">Sikkema Jenkins & Co.</div>
  
 <div style="font-size:.8em; line-height:1.4; margin-top:3px">530 W 22nd St, New York, NY</div>
 
 <div style="overflow:hidden; margin-top:3px; font-size:1.1em; height:3em; line-height:1.4em">
 <font color="#E51965">
 Apr 18-May 24 2019
     </font>

     <Br> Louis Fratino : Come Softly to Me
 </div>

</div>
</a>

<a href="profile.cfm?pid=2&vid=41852" style="text-decoration:none">
  
<div style="height:4px; margin-bottom:5px; margin-top:5px; border-top:1px solid #eee; "></div>



<div style="width:25%;  display:inline-block;">
     <img style="margin:0px" border="0" src="userimages/thumb_20190415_033408AM_44650116.jpeg" width="80">
 </div>
   
   
 <div style=" width:70%; position:relative; padding-left:4px;  display:inline-block; vertical-align:top;">
 
 <div style=" font-size:1.1em; line-height:1.2em; font-weight:bold">Miles McEnery Gallery - 520 West 21st Street</div>
  
 <div style="font-size:.8em; line-height:1.4; margin-top:3px">520 W 21st St, New York, NY</div>
 
 <div style="overflow:hidden; margin-top:3px; font-size:1.1em; height:3em; line-height:1.4em">
 <font color="#E51965">
 Apr 18-May 24 2019
     </font>

     <Br> John Sonsini
 </div>

</div>
</a>

<a href="profile.cfm?pid=2&vid=41853" style="text-decoration:none">
  
<div style="height:4px; margin-bottom:5px; margin-top:5px; border-top:1px solid #eee; "></div>



<div style="width:25%;  display:inline-block;">
     <img style="margin:0px" border="0" src="userimages/thumb_20190415_033705AM_1629806.jpeg" width="80">
 </div>
   
   
 <div style=" width:70%; position:relative; padding-left:4px;  display:inline-block; vertical-align:top;">
 
 <div style=" font-size:1.1em; line-height:1.2em; font-weight:bold">Miles McEnery Gallery - 525 West 22nd Street</div>
  
 <div style="font-size:.8em; line-height:1.4; margin-top:3px">525 W 22nd St, New York, NY</div>
 
 <div style="overflow:hidden; margin-top:3px; font-size:1.1em; height:3em; line-height:1.4em">
 <font color="#E51965">
 Apr 18-May 24 2019
     </font>

     <Br> Tomory Dodge
 </div>

</div>
</a>

<a href="profile.cfm?pid=2&vid=41877" style="text-decoration:none">
  
<div style="height:4px; margin-bottom:5px; margin-top:5px; border-top:1px solid #eee; "></div>



<div style="width:25%;  display:inline-block;">
     <img style="margin:0px" border="0" src="userimages/thumb_20190304_023214AM_46598338.jpg" width="80">
 </div>
   
   
 <div style=" width:70%; position:relative; padding-left:4px;  display:inline-block; vertical-align:top;">
 
 <div style=" font-size:1.1em; line-height:1.2em; font-weight:bold">Nancy Hoffman Gallery</div>
  
 <div style="font-size:.8em; line-height:1.4; margin-top:3px">520 W 27th St, New York, NY</div>
 
 <div style="overflow:hidden; margin-top:3px; font-size:1.1em; height:3em; line-height:1.4em">
 <font color="#E51965">
 Apr 18-May 25 2019
     </font>

     <Br> Michael Gregory
 </div>

</div>
</a>

<a href="profile.cfm?pid=2&vid=41878" style="text-decoration:none">
  
<div style="height:4px; margin-bottom:5px; margin-top:5px; border-top:1px solid #eee; "></div>



<div style="width:25%;  display:inline-block;">
     <img style="margin:0px" border="0" src="userimages/thumb_20190415_050719AM_22493101.jpg" width="80">
 </div>
   
   
 <div style=" width:70%; position:relative; padding-left:4px;  display:inline-block; vertical-align:top;">
 
 <div style=" font-size:1.1em; line-height:1.2em; font-weight:bold">Nancy Margolis Gallery</div>
  
 <div style="font-size:.8em; line-height:1.4; margin-top:3px">523 W 25th St, New York, NY</div>
 
 <div style="overflow:hidden; margin-top:3px; font-size:1.1em; height:3em; line-height:1.4em">
 <font color="#E51965">
 Apr 18-Jun 01 2019
     </font>

     <Br> Aubrey Levinthal
 </div>

</div>
</a>

<a href="profile.cfm?pid=2&vid=41268" style="text-decoration:none">
  
<div style="height:4px; margin-bottom:5px; margin-top:5px; border-top:1px solid #eee; "></div>



<div style="width:25%;  display:inline-block;">
     <img style="margin:0px" border="0" src="userimages/thumb_20190412_045309PM_35461906.jpeg" width="80">
 </div>
   
   
 <div style=" width:70%; position:relative; padding-left:4px;  display:inline-block; vertical-align:top;">
 
 <div style=" font-size:1.1em; line-height:1.2em; font-weight:bold">Alexander Gray Associates</div>
  
 <div style="font-size:.8em; line-height:1.4; margin-top:3px">510 W 26th St, New York, NY</div>
 
 <div style="overflow:hidden; margin-top:3px; font-size:1.1em; height:3em; line-height:1.4em">
 <font color="#E51965">
 Apr 18-May 25 2019
     </font>

     <Br> Count of Three
 </div>

</div>
</a>

<a href="profile.cfm?pid=2&vid=41455" style="text-decoration:none">
  
<div style="height:4px; margin-bottom:5px; margin-top:5px; border-top:1px solid #eee; "></div>



<div style="width:25%;  display:inline-block;">
     <img style="margin:0px" border="0" src="userimages/thumb_20190414_015704PM_38601994.jpg" width="80">
 </div>
   
   
 <div style=" width:70%; position:relative; padding-left:4px;  display:inline-block; vertical-align:top;">
 
 <div style=" font-size:1.1em; line-height:1.2em; font-weight:bold">Daniel Cooney Fine Art</div>
  
 <div style="font-size:.8em; line-height:1.4; margin-top:3px">508 - 526 W 26th St, #9C, New York, NY</div>
 
 <div style="overflow:hidden; margin-top:3px; font-size:1.1em; height:3em; line-height:1.4em">
 <font color="#E51965">
 Apr 18-Jun 01 2019
     </font>

     <Br> Richard Haines : The History Of Beauty
 </div>

</div>
</a>

<a href="profile.cfm?pid=2&vid=41588" style="text-decoration:none">
  
<div style="height:4px; margin-bottom:5px; margin-top:5px; border-top:1px solid #eee; "></div>



<div style="width:25%;  display:inline-block;">
     <img style="margin:0px" border="0" src="userimages/thumb_20190415_023800AM_49683524.jpg" width="80">
 </div>
   
   
 <div style=" width:70%; position:relative; padding-left:4px;  display:inline-block; vertical-align:top;">
 
 <div style=" font-size:1.1em; line-height:1.2em; font-weight:bold">Gallery Henoch</div>
  
 <div style="font-size:.8em; line-height:1.4; margin-top:3px">555 W 25th St, New York, NY</div>
 
 <div style="overflow:hidden; margin-top:3px; font-size:1.1em; height:3em; line-height:1.4em">
 <font color="#E51965">
 Apr 18-May 11 2019
     </font>

     <Br> Susan Goldsmith : Abiding Beauty
 </div>

</div>
</a>

<a href="profile.cfm?pid=2&vid=41699" style="text-decoration:none">
  
<div style="height:4px; margin-bottom:5px; margin-top:5px; border-top:1px solid #eee; "></div>



<div style="width:25%;  display:inline-block;">
     <img style="margin:0px" border="0" src="userimages/thumb_20190307_110902AM_23101485.jpg" width="80">
 </div>
   
   
 <div style=" width:70%; position:relative; padding-left:4px;  display:inline-block; vertical-align:top;">
 
 <div style=" font-size:1.1em; line-height:1.2em; font-weight:bold">JanKossen Contemporary</div>
  
 <div style="font-size:.8em; line-height:1.4; margin-top:3px">529 W 20th St, 7th Fl, 7W, New York, NY</div>
 
 <div style="overflow:hidden; margin-top:3px; font-size:1.1em; height:3em; line-height:1.4em">
 <font color="#E51965">
 Apr 18-Jun 22 2019
     </font>

     <Br> Le Bateau Ivre
 </div>

</div>
</a>

<a href="profile.cfm?pid=2&vid=41765" style="text-decoration:none">
  
<div style="height:4px; margin-bottom:5px; margin-top:5px; border-top:1px solid #eee; "></div>



<div style="width:25%;  display:inline-block;">
     <img style="margin:0px" border="0" src="userimages/thumb_20190328_091856AM_38432354.png" width="80">
 </div>
   
   
 <div style=" width:70%; position:relative; padding-left:4px;  display:inline-block; vertical-align:top;">
 
 <div style=" font-size:1.1em; line-height:1.2em; font-weight:bold">Lehmann Maupin - Chelsea</div>
  
 <div style="font-size:.8em; line-height:1.4; margin-top:3px">536 W 22nd St, New York, NY</div>
 
 <div style="overflow:hidden; margin-top:3px; font-size:1.1em; height:3em; line-height:1.4em">
 <font color="#E51965">
 Apr 18-Jun 15 2019
     </font>

     <Br> Tim Rollins and K.O.S.: Workshop
 </div>

</div>
</a>

<a href="profile.cfm?pid=2&vid=41458" style="text-decoration:none">
  
<div style="height:4px; margin-bottom:5px; margin-top:5px; border-top:1px solid #eee; "></div>



<div style="width:25%;  display:inline-block;">
     <img style="margin:0px" border="0" src="userimages/thumb_20190414_020407PM_36648221.jpg" width="80">
 </div>
   
   
 <div style=" width:70%; position:relative; padding-left:4px;  display:inline-block; vertical-align:top;">
 
 <div style=" font-size:1.1em; line-height:1.2em; font-weight:bold">David Nolan Gallery</div>
  
 <div style="font-size:.8em; line-height:1.4; margin-top:3px">527 W 29th St, New York, NY</div>
 
 <div style="overflow:hidden; margin-top:3px; font-size:1.1em; height:3em; line-height:1.4em">
 <font color="#E51965">
 Apr 19-Jun 14 2019
     </font>

     <Br> Wardell Milan : Parisian Landscapes, Blue Zenith
 </div>

</div>
</a>

<a href="profile.cfm?pid=2&vid=41931" style="text-decoration:none">
  
<div style="height:4px; margin-bottom:5px; margin-top:5px; border-top:1px solid #eee; "></div>



<div style="width:25%;  display:inline-block;">
     <img style="margin:0px" border="0" src="userimages/thumb_20190413_072214AM_2313925.jpg" width="80">
 </div>
   
   
 <div style=" width:70%; position:relative; padding-left:4px;  display:inline-block; vertical-align:top;">
 
 <div style=" font-size:1.1em; line-height:1.2em; font-weight:bold">Pace Prints - West 26th Street</div>
  
 <div style="font-size:.8em; line-height:1.4; margin-top:3px">521 W 26th St, New York, NY</div>
 
 <div style="overflow:hidden; margin-top:3px; font-size:1.1em; height:3em; line-height:1.4em">
 <font color="#E51965">
 Apr 19-May 24 2019
     </font>

     <Br> Alan Shields
 </div>

</div>
</a>

<a href="profile.cfm?pid=2&vid=41901" style="text-decoration:none">
  
<div style="height:4px; margin-bottom:5px; margin-top:5px; border-top:1px solid #eee; "></div>



<div style="width:25%;  display:inline-block;">
     <img style="margin:0px" border="0" src="userimages/thumb_20190413_071132AM_51812492.jpg" width="80">
 </div>
   
   
 <div style=" width:70%; position:relative; padding-left:4px;  display:inline-block; vertical-align:top;">
 
 <div style=" font-size:1.1em; line-height:1.2em; font-weight:bold">Noho M55 Gallery</div>
  
 <div style="font-size:.8em; line-height:1.4; margin-top:3px">530 W 25th St, 4th Fl, New York, NY</div>
 
 <div style="overflow:hidden; margin-top:3px; font-size:1.1em; height:3em; line-height:1.4em">
 <font color="#E51965">
 Apr 23-May 11 2019
     </font>

     <Br> Karen Gentile, Eileen Mislove
 </div>

</div>
</a>

<a href="profile.cfm?pid=2&vid=41914" style="text-decoration:none">
  
<div style="height:4px; margin-bottom:5px; margin-top:5px; border-top:1px solid #eee; "></div>



<div style="width:25%;  display:inline-block;">
     <img style="margin:0px" border="0" src="userimages/thumb_20190324_082526AM_32145933.png" width="80">
 </div>
   
   
 <div style=" width:70%; position:relative; padding-left:4px;  display:inline-block; vertical-align:top;">
 
 <div style=" font-size:1.1em; line-height:1.2em; font-weight:bold">Onishi Gallery</div>
  
 <div style="font-size:.8em; line-height:1.4; margin-top:3px">521 W 26th St, New York, NY</div>
 
 <div style="overflow:hidden; margin-top:3px; font-size:1.1em; height:3em; line-height:1.4em">
 <font color="#E51965">
 Apr 23-May 11 2019
     </font>

     <Br> Ichiro Tsuruta : Bijin-ga
 </div>

</div>
</a>

<a href="profile.cfm?pid=2&vid=41536" style="text-decoration:none">
  
<div style="height:4px; margin-bottom:5px; margin-top:5px; border-top:1px solid #eee; "></div>



<div style="width:25%;  display:inline-block;">
     <img style="margin:0px" border="0" src="userimages/thumb_20190312_101251AM_11335195.jpg" width="80">
 </div>
   
   
 <div style=" width:70%; position:relative; padding-left:4px;  display:inline-block; vertical-align:top;">
 
 <div style=" font-size:1.1em; line-height:1.2em; font-weight:bold">First Street Gallery</div>
  
 <div style="font-size:.8em; line-height:1.4; margin-top:3px">526 W 26th St, Suite 209, New York, NY</div>
 
 <div style="overflow:hidden; margin-top:3px; font-size:1.1em; height:3em; line-height:1.4em">
 <font color="#E51965">
 Apr 23-May 19 2019
     </font>

     <Br> Jessica McGarry Bartlet: Trace of Man
 </div>

</div>
</a>

<a href="profile.cfm?pid=2&vid=41572" style="text-decoration:none">
  
<div style="height:4px; margin-bottom:5px; margin-top:5px; border-top:1px solid #eee; "></div>



<div style="width:25%;  display:inline-block;">
     <img style="margin:0px" border="0" src="userimages/thumb_20190403_074107PM_37661626.png" width="80">
 </div>
   
   
 <div style=" width:70%; position:relative; padding-left:4px;  display:inline-block; vertical-align:top;">
 
 <div style=" font-size:1.1em; line-height:1.2em; font-weight:bold">Gagosian Gallery - West 24th Steet</div>
  
 <div style="font-size:.8em; line-height:1.4; margin-top:3px">555 W 24th St, New York, NY</div>
 
 <div style="overflow:hidden; margin-top:3px; font-size:1.1em; height:3em; line-height:1.4em">
 <font color="#E51965">
 Apr 24-Jul 19 2019
     </font>

     <Br> Jonas Wood
 </div>

</div>
</a>

<a href="profile.cfm?pid=2&vid=41950" style="text-decoration:none">
  
<div style="height:4px; margin-bottom:5px; margin-top:5px; border-top:1px solid #eee; "></div>



<div style="width:25%;  display:inline-block;">
     <img style="margin:0px" border="0" src="userimages/thumb_20190415_052234AM_83943185.jpeg" width="80">
 </div>
   
   
 <div style=" width:70%; position:relative; padding-left:4px;  display:inline-block; vertical-align:top;">
 
 <div style=" font-size:1.1em; line-height:1.2em; font-weight:bold">Petzel Gallery - West 18th Street</div>
  
 <div style="font-size:.8em; line-height:1.4; margin-top:3px">456 W 18th St, New York, NY</div>
 
 <div style="overflow:hidden; margin-top:3px; font-size:1.1em; height:3em; line-height:1.4em">
 <font color="#E51965">
 Apr 24-Jun 15 2019
     </font>

     <Br> Ross Bleckner : Pharmaceutria
 </div>

</div>
</a>

<a href="profile.cfm?pid=2&vid=41929" style="text-decoration:none">
  
<div style="height:4px; margin-bottom:5px; margin-top:5px; border-top:1px solid #eee; "></div>



<div style="width:25%;  display:inline-block;">
     <img style="margin:0px" border="0" src="userimages/thumb_20190415_051645AM_19020247.png" width="80">
 </div>
   
   
 <div style=" width:70%; position:relative; padding-left:4px;  display:inline-block; vertical-align:top;">
 
 <div style=" font-size:1.1em; line-height:1.2em; font-weight:bold">Pace Gallery - West 25th Street</div>
  
 <div style="font-size:.8em; line-height:1.4; margin-top:3px">510 W 25th St, New York, NY</div>
 
 <div style="overflow:hidden; margin-top:3px; font-size:1.1em; height:3em; line-height:1.4em">
 <font color="#E51965">
 Apr 25-Jun 22 2019
     </font>

     <Br> Tony Smith : Source, Tau, Throwback
 </div>

</div>
</a>

<a href="profile.cfm?pid=2&vid=42061" style="text-decoration:none">
  
<div style="height:4px; margin-bottom:5px; margin-top:5px; border-top:1px solid #eee; "></div>



<div style="width:25%;  display:inline-block;">
     <img style="margin:0px" border="0" src="userimages/thumb_20190413_104058AM_89241316.jpg" width="80">
 </div>
   
   
 <div style=" width:70%; position:relative; padding-left:4px;  display:inline-block; vertical-align:top;">
 
 <div style=" font-size:1.1em; line-height:1.2em; font-weight:bold">SLA307</div>
  
 <div style="font-size:.8em; line-height:1.4; margin-top:3px">307 W 30th St, New York, NY</div>
 
 <div style="overflow:hidden; margin-top:3px; font-size:1.1em; height:3em; line-height:1.4em">
 <font color="#E51965">
 Apr 25-May 25 2019
     </font>

     <Br> Egle Gineityte : Painting 2017-19
 </div>

</div>
</a>

<a href="profile.cfm?pid=2&vid=41842" style="text-decoration:none">
  
<div style="height:4px; margin-bottom:5px; margin-top:5px; border-top:1px solid #eee; "></div>



<div style="width:25%;  display:inline-block;">
     <img style="margin:0px" border="0" src="userimages/thumb_20190415_032018AM_90169430.jpeg" width="80">
 </div>
   
   
 <div style=" width:70%; position:relative; padding-left:4px;  display:inline-block; vertical-align:top;">
 
 <div style=" font-size:1.1em; line-height:1.2em; font-weight:bold">Metro Pictures</div>
  
 <div style="font-size:.8em; line-height:1.4; margin-top:3px">519 W 24th St, New York, NY</div>
 
 <div style="overflow:hidden; margin-top:3px; font-size:1.1em; height:3em; line-height:1.4em">
 <font color="#E51965">
 Apr 25-May 25 2019
     </font>

     <Br> Robert Longo : Amerika
 </div>

</div>
</a>

<a href="profile.cfm?pid=2&vid=41637" style="text-decoration:none">
  
<div style="height:4px; margin-bottom:5px; margin-top:5px; border-top:1px solid #eee; "></div>



<div style="width:25%;  display:inline-block;">
     <img style="margin:0px" border="0" src="userimages/thumb_20190413_053030AM_95874625.jpg" width="80">
 </div>
   
   
 <div style=" width:70%; position:relative; padding-left:4px;  display:inline-block; vertical-align:top;">
 
 <div style=" font-size:1.1em; line-height:1.2em; font-weight:bold">Hauser & Wirth New York, 22nd Street</div>
  
 <div style="font-size:.8em; line-height:1.4; margin-top:3px">548 W 22nd St, New York, NY</div>
 
 <div style="overflow:hidden; margin-top:3px; font-size:1.1em; height:3em; line-height:1.4em">
 <font color="#E51965">
 Apr 25-Jul 26 2019
     </font>

     <Br> Piero Manzoni : Lines
 </div>

</div>
</a>

<a href="profile.cfm?pid=2&vid=41637" style="text-decoration:none">
  
<div style="height:4px; margin-bottom:5px; margin-top:5px; border-top:1px solid #eee; "></div>



<div style="width:25%;  display:inline-block;">
     <img style="margin:0px" border="0" src="userimages/thumb_20190413_053241AM_79928181.jpg" width="80">
 </div>
   
   
 <div style=" width:70%; position:relative; padding-left:4px;  display:inline-block; vertical-align:top;">
 
 <div style=" font-size:1.1em; line-height:1.2em; font-weight:bold">Hauser & Wirth New York, 22nd Street</div>
  
 <div style="font-size:.8em; line-height:1.4; margin-top:3px">548 W 22nd St, New York, NY</div>
 
 <div style="overflow:hidden; margin-top:3px; font-size:1.1em; height:3em; line-height:1.4em">
 <font color="#E51965">
 Apr 25-Jul 26 2019
     </font>

     <Br> Piero Manzoni : Materials of His Time
 </div>

</div>
</a>

<a href="profile.cfm?pid=2&vid=41637" style="text-decoration:none">
  
<div style="height:4px; margin-bottom:5px; margin-top:5px; border-top:1px solid #eee; "></div>



<div style="width:25%;  display:inline-block;">
     <img style="margin:0px" border="0" src="userimages/thumb_20190413_053809AM_52631169.jpg" width="80">
 </div>
   
   
 <div style=" width:70%; position:relative; padding-left:4px;  display:inline-block; vertical-align:top;">
 
 <div style=" font-size:1.1em; line-height:1.2em; font-weight:bold">Hauser & Wirth New York, 22nd Street</div>
  
 <div style="font-size:.8em; line-height:1.4; margin-top:3px">548 W 22nd St, New York, NY</div>
 
 <div style="overflow:hidden; margin-top:3px; font-size:1.1em; height:3em; line-height:1.4em">
 <font color="#E51965">
 Apr 25-Jul 26 2019
     </font>

     <Br> Lorna Simpson : Darkening
 </div>

</div>
</a>

<a href="profile.cfm?pid=2&vid=41765" style="text-decoration:none">
  
<div style="height:4px; margin-bottom:5px; margin-top:5px; border-top:1px solid #eee; "></div>



<div style="width:25%;  display:inline-block;">
     <img style="margin:0px" border="0" src="userimages/thumb_20190328_092007AM_63495715.png" width="80">
 </div>
   
   
 <div style=" width:70%; position:relative; padding-left:4px;  display:inline-block; vertical-align:top;">
 
 <div style=" font-size:1.1em; line-height:1.2em; font-weight:bold">Lehmann Maupin - Chelsea</div>
  
 <div style="font-size:.8em; line-height:1.4; margin-top:3px">536 W 22nd St, New York, NY</div>
 
 <div style="overflow:hidden; margin-top:3px; font-size:1.1em; height:3em; line-height:1.4em">
 <font color="#E51965">
 Apr 25-Jun 15 2019
     </font>

     <Br> Heidi Bucher: The Site of Memory
 </div>

</div>
</a>

<a href="profile.cfm?pid=2&vid=41814" style="text-decoration:none">
  
<div style="height:4px; margin-bottom:5px; margin-top:5px; border-top:1px solid #eee; "></div>



<div style="width:25%;  display:inline-block;">
     <img style="margin:0px" border="0" src="userimages/thumb_20190413_054932AM_6081867.jpeg" width="80">
 </div>
   
   
 <div style=" width:70%; position:relative; padding-left:4px;  display:inline-block; vertical-align:top;">
 
 <div style=" font-size:1.1em; line-height:1.2em; font-weight:bold">Marianne Boesky Gallery</div>
  
 <div style="font-size:.8em; line-height:1.4; margin-top:3px">507/509 W 24th St, New York, NY</div>
 
 <div style="overflow:hidden; margin-top:3px; font-size:1.1em; height:3em; line-height:1.4em">
 <font color="#E51965">
 Apr 25-May 31 2019
     </font>

     <Br> Frank Stella : Recent Work
 </div>

</div>
</a>

<a href="profile.cfm?pid=2&vid=41241" style="text-decoration:none">
  
<div style="height:4px; margin-bottom:5px; margin-top:5px; border-top:1px solid #eee; "></div>



<div style="width:25%;  display:inline-block;">
     <img style="margin:0px" border="0" src="userimages/thumb_20190414_111213AM_15616014.jpg" width="80">
 </div>
   
   
 <div style=" width:70%; position:relative; padding-left:4px;  display:inline-block; vertical-align:top;">
 
 <div style=" font-size:1.1em; line-height:1.2em; font-weight:bold">511 Gallery - 511 Projects</div>
  
 <div style="font-size:.8em; line-height:1.4; margin-top:3px">252 7th Ave, Suite 12J, New York, NY</div>
 
 <div style="overflow:hidden; margin-top:3px; font-size:1.1em; height:3em; line-height:1.4em">
 <font color="#E51965">
 Apr 25-Jun 07 2019
     </font>

     <Br> David Gaither : Structure
 </div>

</div>
</a>

<a href="profile.cfm?pid=2&vid=41462" style="text-decoration:none">
  
<div style="height:4px; margin-bottom:5px; margin-top:5px; border-top:1px solid #eee; "></div>



<div style="width:25%;  display:inline-block;">
     <img style="margin:0px" border="0" src="userimages/thumb_20190414_021240PM_29688274.png" width="80">
 </div>
   
   
 <div style=" width:70%; position:relative; padding-left:4px;  display:inline-block; vertical-align:top;">
 
 <div style=" font-size:1.1em; line-height:1.2em; font-weight:bold">David Zwirner - West 19th Street</div>
  
 <div style="font-size:.8em; line-height:1.4; margin-top:3px">519, 525, 533 W 19th St, New York, NY</div>
 
 <div style="overflow:hidden; margin-top:3px; font-size:1.1em; height:3em; line-height:1.4em">
 <font color="#E51965">
 Apr 25-Jun 15 2019
     </font>

     <Br> Josh Smith : Emo Jungle
 </div>

</div>
</a>

<a href="profile.cfm?pid=2&vid=41336" style="text-decoration:none">
  
<div style="height:4px; margin-bottom:5px; margin-top:5px; border-top:1px solid #eee; "></div>



<div style="width:25%;  display:inline-block;">
     <img style="margin:0px" border="0" src="userimages/thumb_20190413_042312AM_76631482.png" width="80">
 </div>
   
   
 <div style=" width:70%; position:relative; padding-left:4px;  display:inline-block; vertical-align:top;">
 
 <div style=" font-size:1.1em; line-height:1.2em; font-weight:bold">Bernarducci Gallery</div>
  
 <div style="font-size:.8em; line-height:1.4; margin-top:3px">525 W 25th St, New York, NY</div>
 
 <div style="overflow:hidden; margin-top:3px; font-size:1.1em; height:3em; line-height:1.4em">
 <font color="#E51965">
 Apr 25-May 25 2019
     </font>

     <Br> Curt Hoppe : Downtown Portraits
 </div>

</div>
</a>

<a href="profile.cfm?pid=2&vid=41370" style="text-decoration:none">
  
<div style="height:4px; margin-bottom:5px; margin-top:5px; border-top:1px solid #eee; "></div>



<div style="width:25%;  display:inline-block;">
     <img style="margin:0px" border="0" src="userimages/thumb_20190414_011936PM_10734895.jpg" width="80">
 </div>
   
   
 <div style=" width:70%; position:relative; padding-left:4px;  display:inline-block; vertical-align:top;">
 
 <div style=" font-size:1.1em; line-height:1.2em; font-weight:bold">Bryce Wolkowitz Gallery</div>
  
 <div style="font-size:.8em; line-height:1.4; margin-top:3px">505 W 24th St, New York, NY</div>
 
 <div style="overflow:hidden; margin-top:3px; font-size:1.1em; height:3em; line-height:1.4em">
 <font color="#E51965">
 Apr 25-Jun 29 2019
     </font>

     <Br> Jose Parla : Anonymous Vernacular
 </div>

</div>
</a>

<a href="profile.cfm?pid=2&vid=41444" style="text-decoration:none">
  
<div style="height:4px; margin-bottom:5px; margin-top:5px; border-top:1px solid #eee; "></div>



<div style="width:25%;  display:inline-block;">
     <img style="margin:0px" border="0" src="userimages/thumb_20190414_015040PM_99825322.png" width="80">
 </div>
   
   
 <div style=" width:70%; position:relative; padding-left:4px;  display:inline-block; vertical-align:top;">
 
 <div style=" font-size:1.1em; line-height:1.2em; font-weight:bold">Cristin Tierney Gallery</div>
  
 <div style="font-size:.8em; line-height:1.4; margin-top:3px">540 W 28th St, New York, NY</div>
 
 <div style="overflow:hidden; margin-top:3px; font-size:1.1em; height:3em; line-height:1.4em">
 <font color="#E51965">
 Apr 25-Jun 01 2019
     </font>

     <Br> Inside Baseball
 </div>

</div>
</a>

<a href="profile.cfm?pid=2&vid=41446" style="text-decoration:none">
  
<div style="height:4px; margin-bottom:5px; margin-top:5px; border-top:1px solid #eee; "></div>



<div style="width:25%;  display:inline-block;">
     <img style="margin:0px" border="0" src="userimages/thumb_20190413_042857AM_32205443.jpg" width="80">
 </div>
   
   
 <div style=" width:70%; position:relative; padding-left:4px;  display:inline-block; vertical-align:top;">
 
 <div style=" font-size:1.1em; line-height:1.2em; font-weight:bold">Crush Curatorial</div>
  
 <div style="font-size:.8em; line-height:1.4; margin-top:3px">526 W 26th St, Suite 709, New York, NY</div>
 
 <div style="overflow:hidden; margin-top:3px; font-size:1.1em; height:3em; line-height:1.4em">
 <font color="#E51965">
 Apr 26-May 24 2019
     </font>

     <Br> Alina Tenser : Reading Room
 </div>

</div>
</a>

<a href="profile.cfm?pid=2&vid=41798" style="text-decoration:none">
  
<div style="height:4px; margin-bottom:5px; margin-top:5px; border-top:1px solid #eee; "></div>



<div style="width:25%;  display:inline-block;">
     <img style="margin:0px" border="0" src="userimages/thumb_20190410_060122PM_80881708.jpeg" width="80">
 </div>
   
   
 <div style=" width:70%; position:relative; padding-left:4px;  display:inline-block; vertical-align:top;">
 
 <div style=" font-size:1.1em; line-height:1.2em; font-weight:bold">Luhring Augustine</div>
  
 <div style="font-size:.8em; line-height:1.4; margin-top:3px">531 W 24th St, New York, NY</div>
 
 <div style="overflow:hidden; margin-top:3px; font-size:1.1em; height:3em; line-height:1.4em">
 <font color="#E51965">
 Apr 26-Jun 15 2019
     </font>

     <Br> Sanya Kantarovsky : On them
 </div>

</div>
</a>

<a href="profile.cfm?pid=2&vid=41977" style="text-decoration:none">
  
<div style="height:4px; margin-bottom:5px; margin-top:5px; border-top:1px solid #eee; "></div>



<div style="width:25%;  display:inline-block;">
     <img style="margin:0px" border="0" src="userimages/thumb_20190414_022838PM_22145984.png" width="80">
 </div>
   
   
 <div style=" width:70%; position:relative; padding-left:4px;  display:inline-block; vertical-align:top;">
 
 <div style=" font-size:1.1em; line-height:1.2em; font-weight:bold">Printed Matter Inc.</div>
  
 <div style="font-size:.8em; line-height:1.4; margin-top:3px">231 11th Ave, New York, NY</div>
 
 <div style="overflow:hidden; margin-top:3px; font-size:1.1em; height:3em; line-height:1.4em">
 <font color="#E51965">
 Apr 27-Apr 27 2019
     </font>

     <Br> Gordon Hall : The Number of Inches Between Them
 </div>

</div>
</a>

<a href="profile.cfm?pid=2&vid=41571" style="text-decoration:none">
  
<div style="height:4px; margin-bottom:5px; margin-top:5px; border-top:1px solid #eee; "></div>



<div style="width:25%;  display:inline-block;">
     <img style="margin:0px" border="0" src="userimages/thumb_20190414_065358PM_41927758.png" width="80">
 </div>
   
   
 <div style=" width:70%; position:relative; padding-left:4px;  display:inline-block; vertical-align:top;">
 
 <div style=" font-size:1.1em; line-height:1.2em; font-weight:bold">Gagosian Gallery - West 21st Steet</div>
  
 <div style="font-size:.8em; line-height:1.4; margin-top:3px">522 W 21st St, New York, NY</div>
 
 <div style="overflow:hidden; margin-top:3px; font-size:1.1em; height:3em; line-height:1.4em">
 <font color="#E51965">
 Apr 30-Jun 22 2019
     </font>

     <Br> Jeff Wall
 </div>

</div>
</a>

<a href="profile.cfm?pid=2&vid=41607" style="text-decoration:none">
  
<div style="height:4px; margin-bottom:5px; margin-top:5px; border-top:1px solid #eee; "></div>



<div style="width:25%;  display:inline-block;">
     <img style="margin:0px" border="0" src="userimages/thumb_20190415_025338AM_59867505.jpg" width="80">
 </div>
   
   
 <div style=" width:70%; position:relative; padding-left:4px;  display:inline-block; vertical-align:top;">
 
 <div style=" font-size:1.1em; line-height:1.2em; font-weight:bold">Gladstone Gallery - West 24th Street</div>
  
 <div style="font-size:.8em; line-height:1.4; margin-top:3px">515 W 24th St, New York, NY</div>
 
 <div style="overflow:hidden; margin-top:3px; font-size:1.1em; height:3em; line-height:1.4em">
 <font color="#E51965">
 May 01-Jun 08 2019
     </font>

     <Br> Damian Ortega : Porous Structures
 </div>

</div>
</a>

<a href="profile.cfm?pid=2&vid=41830" style="text-decoration:none">
  
<div style="height:4px; margin-bottom:5px; margin-top:5px; border-top:1px solid #eee; "></div>



<div style="width:25%;  display:inline-block;">
     <img style="margin:0px" border="0" src="userimages/thumb_20190413_055518AM_54202117.png" width="80">
 </div>
   
   
 <div style=" width:70%; position:relative; padding-left:4px;  display:inline-block; vertical-align:top;">
 
 <div style=" font-size:1.1em; line-height:1.2em; font-weight:bold">Matthew Marks Gallery - 522 West 22nd Street</div>
  
 <div style="font-size:.8em; line-height:1.4; margin-top:3px">522 W 22nd St, New York, NY</div>
 
 <div style="overflow:hidden; margin-top:3px; font-size:1.1em; height:3em; line-height:1.4em">
 <font color="#E51965">
 May 01-Jun 15 2019
     </font>

     <Br> Ron Nagle : Getting to No
 </div>

</div>
</a>

<a href="profile.cfm?pid=2&vid=41831" style="text-decoration:none">
  
<div style="height:4px; margin-bottom:5px; margin-top:5px; border-top:1px solid #eee; "></div>



<div style="width:25%;  display:inline-block;">
     <img style="margin:0px" border="0" src="userimages/thumb_20190413_055837AM_1061005.png" width="80">
 </div>
   
   
 <div style=" width:70%; position:relative; padding-left:4px;  display:inline-block; vertical-align:top;">
 
 <div style=" font-size:1.1em; line-height:1.2em; font-weight:bold">Matthew Marks Gallery - 523 West 24th Street</div>
  
 <div style="font-size:.8em; line-height:1.4; margin-top:3px">523 W 24th St, New York, NY</div>
 
 <div style="overflow:hidden; margin-top:3px; font-size:1.1em; height:3em; line-height:1.4em">
 <font color="#E51965">
 May 01-Jun 29 2019
     </font>

     <Br> Jordan Belson : Paintings 1950-1965
 </div>

</div>
</a>

<a href="profile.cfm?pid=2&vid=41714" style="text-decoration:none">
  
<div style="height:4px; margin-bottom:5px; margin-top:5px; border-top:1px solid #eee; "></div>



<div style="width:25%;  display:inline-block;">
     <img style="margin:0px" border="0" src="userimages/thumb_20190226_011436PM_47196986.JPG" width="80">
 </div>
   
   
 <div style=" width:70%; position:relative; padding-left:4px;  display:inline-block; vertical-align:top;">
 
 <div style=" font-size:1.1em; line-height:1.2em; font-weight:bold">JoAnne Artman Gallery</div>
  
 <div style="font-size:.8em; line-height:1.4; margin-top:3px">511 A West 22nd Street, New York, NY</div>
 
 <div style="overflow:hidden; margin-top:3px; font-size:1.1em; height:3em; line-height:1.4em">
 <font color="#E51965">
 May 02-May 05 2019
     </font>

     <Br> JoAnne Artman Gallery at CONTEXT NEW YORK
 </div>

</div>
</a>

<a href="profile.cfm?pid=2&vid=41642" style="text-decoration:none">
  
<div style="height:4px; margin-bottom:5px; margin-top:5px; border-top:1px solid #eee; "></div>



<div style="width:25%;  display:inline-block;">
     <img style="margin:0px" border="0" src="userimages/thumb_20190331_063132AM_17632320.jpg" width="80">
 </div>
   
   
 <div style=" width:70%; position:relative; padding-left:4px;  display:inline-block; vertical-align:top;">
 
 <div style=" font-size:1.1em; line-height:1.2em; font-weight:bold">Heller Gallery</div>
  
 <div style="font-size:.8em; line-height:1.4; margin-top:3px">303 10th Ave, New York, NY</div>
 
 <div style="overflow:hidden; margin-top:3px; font-size:1.1em; height:3em; line-height:1.4em">
 <font color="#E51965">
 May 02-Jun 15 2019
     </font>

     <Br> Amber Cowan
 </div>

</div>
</a>

<a href="profile.cfm?pid=2&vid=41656" style="text-decoration:none">
  
<div style="height:4px; margin-bottom:5px; margin-top:5px; border-top:1px solid #eee; "></div>



<div style="width:25%;  display:inline-block;">
     <img style="margin:0px" border="0" src="userimages/thumb_20190415_025824AM_63472865.jpeg" width="80">
 </div>
   
   
 <div style=" width:70%; position:relative; padding-left:4px;  display:inline-block; vertical-align:top;">
 
 <div style=" font-size:1.1em; line-height:1.2em; font-weight:bold">Hollis Taggart Galleries - Chelsea</div>
  
 <div style="font-size:.8em; line-height:1.4; margin-top:3px">521 W 26th St, New York, NY</div>
 
 <div style="overflow:hidden; margin-top:3px; font-size:1.1em; height:3em; line-height:1.4em">
 <font color="#E51965">
 May 02-May 27 2019
     </font>

     <Br> Knox Martin : Radical Structures
 </div>

</div>
</a>

<a href="profile.cfm?pid=2&vid=42019" style="text-decoration:none">
  
<div style="height:4px; margin-bottom:5px; margin-top:5px; border-top:1px solid #eee; "></div>



<div style="width:25%;  display:inline-block;">
     <img style="margin:0px" border="0" src="userimages/thumb_20190410_100129AM_30209857.JPG" width="80">
 </div>
   
   
 <div style=" width:70%; position:relative; padding-left:4px;  display:inline-block; vertical-align:top;">
 
 <div style=" font-size:1.1em; line-height:1.2em; font-weight:bold">SACI New York Gallery</div>
  
 <div style="font-size:.8em; line-height:1.4; margin-top:3px">454 W 19th St, New York, NY</div>
 
 <div style="overflow:hidden; margin-top:3px; font-size:1.1em; height:3em; line-height:1.4em">
 <font color="#E51965">
 May 02-Aug 08 2019
     </font>

     <Br> MFA Graduate Exhibition Series
 </div>

</div>
</a>

<a href="profile.cfm?pid=2&vid=41463" style="text-decoration:none">
  
<div style="height:4px; margin-bottom:5px; margin-top:5px; border-top:1px solid #eee; "></div>



<div style="width:25%;  display:inline-block;">
     <img style="margin:0px" border="0" src="userimages/thumb_20190414_021608PM_70554028.png" width="80">
 </div>
   
   
 <div style=" width:70%; position:relative; padding-left:4px;  display:inline-block; vertical-align:top;">
 
 <div style=" font-size:1.1em; line-height:1.2em; font-weight:bold">David Zwirner - West 20th Street</div>
  
 <div style="font-size:.8em; line-height:1.4; margin-top:3px">537 W 20th St, New York, NY</div>
 
 <div style="overflow:hidden; margin-top:3px; font-size:1.1em; height:3em; line-height:1.4em">
 <font color="#E51965">
 May 03-Jun 22 2019
     </font>

     <Br> Joan Mitchell : I carry my landscapes around with me
 </div>

</div>
</a>

<a href="profile.cfm?pid=2&vid=41265" style="text-decoration:none">
  
<div style="height:4px; margin-bottom:5px; margin-top:5px; border-top:1px solid #eee; "></div>



<div style="width:25%;  display:inline-block;">
     <img style="margin:0px" border="0" src="userimages/thumb_20190414_120405PM_56087793.jpg" width="80">
 </div>
   
   
 <div style=" width:70%; position:relative; padding-left:4px;  display:inline-block; vertical-align:top;">
 
 <div style=" font-size:1.1em; line-height:1.2em; font-weight:bold">Albertz Benda</div>
  
 <div style="font-size:.8em; line-height:1.4; margin-top:3px">515 W 26th St, New York, NY</div>
 
 <div style="overflow:hidden; margin-top:3px; font-size:1.1em; height:3em; line-height:1.4em">
 <font color="#E51965">
 May 03-Jun 08 2019
     </font>

     <Br> Brie Ruais : Ways
 </div>

</div>
</a>

<a href="profile.cfm?pid=2&vid=41564" style="text-decoration:none">
  
<div style="height:4px; margin-bottom:5px; margin-top:5px; border-top:1px solid #eee; "></div>



<div style="width:25%;  display:inline-block;">
     <img style="margin:0px" border="0" src="userimages/thumb_20190414_063918PM_52595262.jpg" width="80">
 </div>
   
   
 <div style=" width:70%; position:relative; padding-left:4px;  display:inline-block; vertical-align:top;">
 
 <div style=" font-size:1.1em; line-height:1.2em; font-weight:bold">Friedman Benda</div>
  
 <div style="font-size:.8em; line-height:1.4; margin-top:3px">515 W 26th St, New York, NY</div>
 
 <div style="overflow:hidden; margin-top:3px; font-size:1.1em; height:3em; line-height:1.4em">
 <font color="#E51965">
 May 03-Jul 08 2019
     </font>

     <Br> An Accelerated Culture
 </div>

</div>
</a>

<a href="profile.cfm?pid=2&vid=41888" style="text-decoration:none">
  
<div style="height:4px; margin-bottom:5px; margin-top:5px; border-top:1px solid #eee; "></div>



<div style="width:25%;  display:inline-block;">
     <img style="margin:0px" border="0" src="userimages/easelicon.jpg" width="80">
 </div>
   
   
 <div style=" width:70%; position:relative; padding-left:4px;  display:inline-block; vertical-align:top;">
 
 <div style=" font-size:1.1em; line-height:1.2em; font-weight:bold">New York Gallery Tours</div>
  
 <div style="font-size:.8em; line-height:1.4; margin-top:3px">526 West 26th Street, New York, NY</div>
 
 <div style="overflow:hidden; margin-top:3px; font-size:1.1em; height:3em; line-height:1.4em">
 <font color="#E51965">
 May 04-May 04 2019
     </font>

     <Br> Chelsea "Best Exhibits" gallery tour
 </div>

</div>
</a>

<a href="profile.cfm?pid=2&vid=43184" style="text-decoration:none">
  
<div style="height:4px; margin-bottom:5px; margin-top:5px; border-top:1px solid #eee; "></div>



<div style="width:25%;  display:inline-block;">
     <img style="margin:0px" border="0" src="userimages/thumb_20190226_021217PM_91141270.jpg" width="80">
 </div>
   
   
 <div style=" width:70%; position:relative; padding-left:4px;  display:inline-block; vertical-align:top;">
 
 <div style=" font-size:1.1em; line-height:1.2em; font-weight:bold">Wilensky Gallery</div>
  
 <div style="font-size:.8em; line-height:1.4; margin-top:3px">173 10th Ave, New York, NY</div>
 
 <div style="overflow:hidden; margin-top:3px; font-size:1.1em; height:3em; line-height:1.4em">
 <font color="#E51965">
 May 09-Aug 03 2019
     </font>

     <Br> Ancient Treasures: Fossils from The Eocene
 </div>

</div>
</a>

<a href="profile.cfm?pid=2&vid=41275" style="text-decoration:none">
  
<div style="height:4px; margin-bottom:5px; margin-top:5px; border-top:1px solid #eee; "></div>



<div style="width:25%;  display:inline-block;">
     <img style="margin:0px" border="0" src="userimages/thumb_20190405_103825AM_41628070.jpg" width="80">
 </div>
   
   
 <div style=" width:70%; position:relative; padding-left:4px;  display:inline-block; vertical-align:top;">
 
 <div style=" font-size:1.1em; line-height:1.2em; font-weight:bold">Amsterdam Whitney</div>
  
 <div style="font-size:.8em; line-height:1.4; margin-top:3px">531 West 25th Street Ground Floor, New York, NY</div>
 
 <div style="overflow:hidden; margin-top:3px; font-size:1.1em; height:3em; line-height:1.4em">
 <font color="#E51965">
 May 10-Jun 12 2019
     </font>

     <Br> Amsterdam Whitney's MAY Exhibition
 </div>

</div>
</a>

<a href="profile.cfm?pid=2&vid=41275" style="text-decoration:none">
  
<div style="height:4px; margin-bottom:5px; margin-top:5px; border-top:1px solid #eee; "></div>



<div style="width:25%;  display:inline-block;">
     <img style="margin:0px" border="0" src="userimages/thumb_20190405_103851AM_4662203.jpg" width="80">
 </div>
   
   
 <div style=" width:70%; position:relative; padding-left:4px;  display:inline-block; vertical-align:top;">
 
 <div style=" font-size:1.1em; line-height:1.2em; font-weight:bold">Amsterdam Whitney</div>
  
 <div style="font-size:.8em; line-height:1.4; margin-top:3px">531 West 25th Street Ground Floor, New York, NY</div>
 
 <div style="overflow:hidden; margin-top:3px; font-size:1.1em; height:3em; line-height:1.4em">
 <font color="#E51965">
 May 10-Jun 12 2019
     </font>

     <Br> Amsterdam Whitney's MAY Exhibition
 </div>

</div>
</a>

<a href="profile.cfm?pid=2&vid=41278" style="text-decoration:none">
  
<div style="height:4px; margin-bottom:5px; margin-top:5px; border-top:1px solid #eee; "></div>



<div style="width:25%;  display:inline-block;">
     <img style="margin:0px" border="0" src="userimages/thumb_20190413_042006AM_23673620.jpeg" width="80">
 </div>
   
   
 <div style=" width:70%; position:relative; padding-left:4px;  display:inline-block; vertical-align:top;">
 
 <div style=" font-size:1.1em; line-height:1.2em; font-weight:bold">Anders Wahlstedt Fine Art</div>
  
 <div style="font-size:.8em; line-height:1.4; margin-top:3px">548 W 28th St, Suite 636, New York, NY</div>
 
 <div style="overflow:hidden; margin-top:3px; font-size:1.1em; height:3em; line-height:1.4em">
 <font color="#E51965">
 May 16-Jun 28 2019
     </font>

     <Br> American contemporary works on paper
 </div>

</div>
</a>

<a href="profile.cfm?pid=2&vid=42016" style="text-decoration:none">
  
<div style="height:4px; margin-bottom:5px; margin-top:5px; border-top:1px solid #eee; "></div>



<div style="width:25%;  display:inline-block;">
     <img style="margin:0px" border="0" src="userimages/thumb_20190413_011718PM_5325082.jpg" width="80">
 </div>
   
   
 <div style=" width:70%; position:relative; padding-left:4px;  display:inline-block; vertical-align:top;">
 
 <div style=" font-size:1.1em; line-height:1.2em; font-weight:bold">RYAN LEE</div>
  
 <div style="font-size:.8em; line-height:1.4; margin-top:3px">515 W 26th St 3fl, New York, NY</div>
 
 <div style="overflow:hidden; margin-top:3px; font-size:1.1em; height:3em; line-height:1.4em">
 <font color="#E51965">
 May 16-Jun 15 2019
     </font>

     <Br> George Miyasaki | Abstract Expressionist California: Paintings and Lithographs, 1955-61
 </div>

</div>
</a>

<a href="profile.cfm?pid=2&vid=41536" style="text-decoration:none">
  
<div style="height:4px; margin-bottom:5px; margin-top:5px; border-top:1px solid #eee; "></div>



<div style="width:25%;  display:inline-block;">
     <img style="margin:0px" border="0" src="userimages/thumb_20190410_113029AM_22334306.png" width="80">
 </div>
   
   
 <div style=" width:70%; position:relative; padding-left:4px;  display:inline-block; vertical-align:top;">
 
 <div style=" font-size:1.1em; line-height:1.2em; font-weight:bold">First Street Gallery</div>
  
 <div style="font-size:.8em; line-height:1.4; margin-top:3px">526 W 26th St, Suite 209, New York, NY</div>
 
 <div style="overflow:hidden; margin-top:3px; font-size:1.1em; height:3em; line-height:1.4em">
 <font color="#E51965">
 May 21-Jun 15 2019
     </font>

     <Br> Fei Li: Chaos, In An Almost Classical Mode
 </div>

</div>
</a>

<a href="profile.cfm?pid=2&vid=41714" style="text-decoration:none">
  
<div style="height:4px; margin-bottom:5px; margin-top:5px; border-top:1px solid #eee; "></div>



<div style="width:25%;  display:inline-block;">
     <img style="margin:0px" border="0" src="userimages/thumb_20181020_121625PM_43904880.jpg" width="80">
 </div>
   
   
 <div style=" width:70%; position:relative; padding-left:4px;  display:inline-block; vertical-align:top;">
 
 <div style=" font-size:1.1em; line-height:1.2em; font-weight:bold">JoAnne Artman Gallery</div>
  
 <div style="font-size:.8em; line-height:1.4; margin-top:3px">511 A West 22nd Street, New York, NY</div>
 
 <div style="overflow:hidden; margin-top:3px; font-size:1.1em; height:3em; line-height:1.4em">
 <font color="#E51965">
 Jun 13-Aug 31 2019
     </font>

     <Br> “BEGIN AGAIN” FEATURING BROOKE SHADEN
 </div>

</div>
</a>

<a href="profile.cfm?pid=2&vid=41714" style="text-decoration:none">
  
<div style="height:4px; margin-bottom:5px; margin-top:5px; border-top:1px solid #eee; "></div>



<div style="width:25%;  display:inline-block;">
     <img style="margin:0px" border="0" src="userimages/thumb_20190315_110419AM_6113594.jpg" width="80">
 </div>
   
   
 <div style=" width:70%; position:relative; padding-left:4px;  display:inline-block; vertical-align:top;">
 
 <div style=" font-size:1.1em; line-height:1.2em; font-weight:bold">JoAnne Artman Gallery</div>
  
 <div style="font-size:.8em; line-height:1.4; margin-top:3px">511 A West 22nd Street, New York, NY</div>
 
 <div style="overflow:hidden; margin-top:3px; font-size:1.1em; height:3em; line-height:1.4em">
 <font color="#E51965">
 Nov 14-Dec 31 2019
     </font>

     <Br> LINEAGE: Featuring MATT DEVINE, ANTHONY HUNTER, ADRIANA OLIVER
 </div>

</div>
</a>




`