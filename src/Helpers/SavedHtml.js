export const expoArtistRawHtml = `


<title>New York Art Exhibits and Galleries - ExpoArtist.org</title>
<meta name="description" content="Art exhibits, galleries, venue rentals and artists. New York, SF Bay, Paris, Santa Fe, Portugal, Mexico City and more.">

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
function runkeywordsearch(){
	el = document.getElementById("fname2"); 
	
	var url = 'events.cfm?mode=1&divid=2&guests=10&eventsort=3&keyword='+encodeURIComponent(el.value);
	 
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
  
<body style="font-family:Arial, Helvetica, sans-serif">





    
    
    





<div style="display: table;  
border-bottom:1px solid #ddd; position:fixed; background-color:#fff; width:100%;font-size:16px; color:white; top:0px; left:0px; height:45px;">
<div style="display: table-cell; vertical-align: middle;">

  <div onClick="window.location.href='city.cfm?mode=1';" style=" cursor: pointer; color: #d51a8a; display:inline-block; width:36.5%"> &nbsp; &#10094; Choose City</div>
  
  <div align="center" style="color: black; display:inline-block; width:25%; font-weight:bold; ">New York</div>
  
  
  </div>
  
  
  </div>





<style>td{border:0px; margin:0px; padding:0px}</style>


<div style="position:fixed; top:46px; left:0px; height:80px; width:100%; background-color:white">













<table width="100%" bgcolor="white">


<tr align="center">
<Td colspan="2" align="center" style="padding-bottom:5px; padding-top:5px">
<input type="text" value=""
 id="fname2" 
onkeyup="typewatch(function(){runkeywordsearch();}, 1000 );"
 style="background-color:#eee; margin:0px; height:35px; margin-left:2%; width:95%; border-radius:10px; border:0px" placeholder="search...">
 
</Td>
</tr>

<Tr height="40px">


<Td width="35%" valign="middle" style="border-bottom:1px solid #eee; border-right:1px solid #eee; border-top:1px solid #eee">
<div style="margin-left:10px; cursor:pointer" 
onclick="window.location.href='filter1.cfm?mode=1&divid=2&eventsort=3&guests=10&ypos='+window.scrollY">
<img src="redtriangle.png" width="10" style="margin-right:2px" />

Upcoming

</div>
</Td>

<td valign="middle" style="border-bottom:1px solid #eee">
<div style="margin-left:10px; cursor:pointer" onclick="window.location.href='filter2.cfm?mode=1&divid=2&guests=10&eventsort=3&ypos='+window.scrollY"><img src="redtriangle.png" width="10" / style="margin-right:2px">

All neighborhoods

</div>
</td>
</Tr>
</table>

</div>  








<div style="height:140px"></div>


















    

















<div id="results">



    
    
    <Table width="100%">
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190822_015206PM_56182245.jpeg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41253&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41253&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41253&ypos='+window.scrollY">
    Wang Yan Cheng
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41253&ypos='+window.scrollY">
    Sep 10 19 - Oct 18 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41253&ypos='+window.scrollY">
    Acquavella Galleries
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190908_010911PM_49450201.png" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41342&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41342&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41342&ypos='+window.scrollY">
    Warm, Cool, Round, Square
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41342&ypos='+window.scrollY">
    Sep 10 19 - Sep 22 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41342&ypos='+window.scrollY">
    Blackburn 20|20 Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190813_083500AM_43640571.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41354&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41354&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41354&ypos='+window.scrollY">
    Sherrill Roland : Inertia | Gaku Tsutaja : A Trip to the Moon
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41354&ypos='+window.scrollY">
    Sep 10 19 - Nov 02 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41354&ypos='+window.scrollY">
    Borough of Manhattan Community College - Shirley Fiterman Art Center
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190910_122427PM_89873152.jpeg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41443&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41443&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41443&ypos='+window.scrollY">
    Eadweard Muybridge and Sol LeWitt
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41443&ypos='+window.scrollY">
    Sep 10 19 - Oct 26 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41443&ypos='+window.scrollY">
    Craig F. Starr Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190809_114948AM_64244316.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41459&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41459&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41459&ypos='+window.scrollY">
    Sonia Gechtoff : Forces of Nature on the Grand Stage
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41459&ypos='+window.scrollY">
    Sep 10 19 - Oct 05 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41459&ypos='+window.scrollY">
    David Richard Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190716_071145PM_84501314.png" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41463&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41463&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41463&ypos='+window.scrollY">
    Anni Albers
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41463&ypos='+window.scrollY">
    Sep 10 19 - Oct 19 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41463&ypos='+window.scrollY">
    David Zwirner - West 20th Street
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190716_071755PM_99183197.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41463&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41463&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41463&ypos='+window.scrollY">
    Paul Klee : 1939
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41463&ypos='+window.scrollY">
    Sep 10 19 - Oct 26 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41463&ypos='+window.scrollY">
    David Zwirner - West 20th Street
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190822_093600AM_9272717.jpeg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41473&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41473&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41473&ypos='+window.scrollY">
    William L. Hawkins : Jazz
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41473&ypos='+window.scrollY">
    Sep 10 19 - Oct 19 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41473&ypos='+window.scrollY">
    Demisch Danant
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190816_112524AM_39810306.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41574&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41574&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41574&ypos='+window.scrollY">
    Carlito Carvalhosa : I Want To Be Like You
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41574&ypos='+window.scrollY">
    Sep 10 19 - Oct 19 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41574&ypos='+window.scrollY">
    Galeria Nara Roesler New York
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190726_052034PM_44995688.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41637&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41637&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41637&ypos='+window.scrollY">
    Amy Sherald : the heart of the matter...
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41637&ypos='+window.scrollY">
    Sep 10 19 - Oct 26 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41637&ypos='+window.scrollY">
    Hauser & Wirth New York, 22nd Street
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190805_025052PM_35245670.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41685&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41685&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41685&ypos='+window.scrollY">
    Joshua Goode : Rhoman Ruins
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41685&ypos='+window.scrollY">
    Sep 10 19 - Oct 15 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41685&ypos='+window.scrollY">
    Ivy Brown Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190724_122411PM_92327301.png" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41713&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41713&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41713&ypos='+window.scrollY">
    Ogata Kamio : Nami: Shikaku Geijutsu / Waves of Optical Illusion
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41713&ypos='+window.scrollY">
    Sep 10 19 - Oct 25 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41713&ypos='+window.scrollY">
    Joan B Mirviss Ltd.
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190724_122536PM_57235405.png" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41713&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41713&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41713&ypos='+window.scrollY">
    Composite Memories: The Clay Art of Kishi Eiko
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41713&ypos='+window.scrollY">
    Sep 10 19 - Oct 25 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41713&ypos='+window.scrollY">
    Joan B Mirviss Ltd.
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190823_085745AM_99562150.JPG" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41813&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41813&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41813&ypos='+window.scrollY">
    Hiroshi Sugimoto : Past Presence
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41813&ypos='+window.scrollY">
    Sep 10 19 - Oct 26 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41813&ypos='+window.scrollY">
    Marian Goodman Gallery - New York
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190802_014242PM_88227812.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41819&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41819&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41819&ypos='+window.scrollY">
    Tom Otterness : Sculpture: 1996 - 2017
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41819&ypos='+window.scrollY">
    Sep 10 19 - Oct 12 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41819&ypos='+window.scrollY">
    Marlborough Gallery - Uptown
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190806_094416AM_72545511.jpeg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41876&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41876&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41876&ypos='+window.scrollY">
    Constructing the Frame: Composition Among the Early Soviet Avant-Garde
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41876&ypos='+window.scrollY">
    Sep 10 19 - Oct 26 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41876&ypos='+window.scrollY">
    Nailya Alexander Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190720_101143AM_13330796.png" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41894&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41894&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41894&ypos='+window.scrollY">
    Modernisms : Iranian, Turkish, and Indian Highlights
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41894&ypos='+window.scrollY">
    Sep 10 19 - Dec 07 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41894&ypos='+window.scrollY">
    New York University - Grey Art Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190828_120747PM_46451019.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41902&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41902&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41902&ypos='+window.scrollY">
    "Interpreting Layers" opens at Nohra Haime Gallery on Tuesday, September 10th from 6-8pm
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41902&ypos='+window.scrollY">
    Sep 10 19 - Sep 28 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41902&ypos='+window.scrollY">
    Nohra Haime Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190806_083115AM_56823033.jpeg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41948&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41948&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41948&ypos='+window.scrollY">
    Franz Erhard Walther : Migration of Forms 1956-2006
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41948&ypos='+window.scrollY">
    Sep 10 19 - Oct 26 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41948&ypos='+window.scrollY">
    Peter Freeman - New York
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190906_015214PM_24091613.png" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41979&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41979&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41979&ypos='+window.scrollY">
    Francis Di Tommaso, Chris Duncan : Structure and Expression
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41979&ypos='+window.scrollY">
    Sep 10 19 - Oct 13 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41979&ypos='+window.scrollY">
    Project: ArtSpace
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190822_082330AM_2983705.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41985&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41985&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41985&ypos='+window.scrollY">
    Chairs Beyond Right & Wrong
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41985&ypos='+window.scrollY">
    Sep 10 19 - Oct 19 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41985&ypos='+window.scrollY">
    R & Company
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190618_084802AM_27780621.png" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41985&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41985&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41985&ypos='+window.scrollY">
    Ashley Hicks : Manhattan Studiolo
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41985&ypos='+window.scrollY">
    Sep 10 19 - Oct 19 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41985&ypos='+window.scrollY">
    R & Company
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190910_051513AM_87391322.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42119&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42119&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42119&ypos='+window.scrollY">
    Let's Play Art
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42119&ypos='+window.scrollY">
    Sep 10 19 - Sep 10 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42119&ypos='+window.scrollY">
    The Living Gallery BK
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190829_013135PM_62117800.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42173&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42173&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42173&ypos='+window.scrollY">
    Looking Outward/Looking Inward
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42173&ypos='+window.scrollY">
    Sep 10 19 - Sep 28 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42173&ypos='+window.scrollY">
    Viridian Artists
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190905_033425PM_94659781.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42022&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42022&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42022&ypos='+window.scrollY">
    Jon Tsoi : A Blind-Fold
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42022&ypos='+window.scrollY">
    Sep 11 19 - Sep 25 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42022&ypos='+window.scrollY">
    Salomon Arts Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190810_024337AM_68174532.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42024&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42024&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42024&ypos='+window.scrollY">
    David Benjamin Sherry : American Monuments
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42024&ypos='+window.scrollY">
    Sep 11 19 - Oct 26 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42024&ypos='+window.scrollY">
    Salon 94 Bowery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190821_103649AM_49745414.JPG" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42060&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42060&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42060&ypos='+window.scrollY">
    Michael A. Robinson
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42060&ypos='+window.scrollY">
    Sep 11 19 - Nov 01 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42060&ypos='+window.scrollY">
    SL Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190828_062002PM_9891471.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41968&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41968&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41968&ypos='+window.scrollY">
    Reading Room
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41968&ypos='+window.scrollY">
    Sep 11 19 - Dec 07 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41968&ypos='+window.scrollY">
    Pratt Institute - Brooklyn
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190802_012724PM_99458080.jpeg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41949&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41949&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41949&ypos='+window.scrollY">
    Stephen Prina : English for Foreigners (abridged)
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41949&ypos='+window.scrollY">
    Sep 11 19 - Oct 26 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41949&ypos='+window.scrollY">
    Petzel Gallery -  East 67th Street
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190823_040131AM_32911433.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41882&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41882&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41882&ypos='+window.scrollY">
    Photography (Light & Lens)
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41882&ypos='+window.scrollY">
    Sep 11 19 - Oct 12 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41882&ypos='+window.scrollY">
    National Association of Women Artists - NAWA Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190809_015651PM_29908469.JPG" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41736&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41736&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41736&ypos='+window.scrollY">
    Wayne Miller, Marvin E. Newman
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41736&ypos='+window.scrollY">
    Sep 11 19 - Nov 09 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41736&ypos='+window.scrollY">
    Keith de Lellis Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190829_090557AM_91885196.jpeg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41662&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41662&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41662&ypos='+window.scrollY">
    Don McCullin
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41662&ypos='+window.scrollY">
    Sep 11 19 - Nov 16 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41662&ypos='+window.scrollY">
    Howard Greenberg Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190901_011445PM_21978487.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41579&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41579&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41579&ypos='+window.scrollY">
    JR : The Chronicles of New York City — Sketches
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41579&ypos='+window.scrollY">
    Sep 11 19 - Oct 26 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41579&ypos='+window.scrollY">
    Galerie Perrotin - New York
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190901_011658PM_1973641.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41579&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41579&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41579&ypos='+window.scrollY">
    Bernard Frize : Journey in Autumn
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41579&ypos='+window.scrollY">
    Sep 11 19 - Oct 26 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41579&ypos='+window.scrollY">
    Galerie Perrotin - New York
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190901_011852PM_1012638.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41579&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41579&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41579&ypos='+window.scrollY">
    Leslie Hewitt : Reading Room
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41579&ypos='+window.scrollY">
    Sep 11 19 - Oct 26 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41579&ypos='+window.scrollY">
    Galerie Perrotin - New York
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190909_033145PM_10847749.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41604&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41604&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41604&ypos='+window.scrollY">
    Jean-Pierre Sudre
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41604&ypos='+window.scrollY">
    Sep 11 19 - Nov 09 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41604&ypos='+window.scrollY">
    Gitterman Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190903_043546AM_68824034.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41420&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41420&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41420&ypos='+window.scrollY">
    Meriem Bennani : Party on the Caps
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41420&ypos='+window.scrollY">
    Sep 11 19 - Oct 27 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41420&ypos='+window.scrollY">
    Clearing - Brooklyn
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190814_030143PM_92107306.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41433&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41433&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41433&ypos='+window.scrollY">
    Raúl de Nieves : As Far As UUU Take Me
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41433&ypos='+window.scrollY">
    Sep 11 19 - Sep 11 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41433&ypos='+window.scrollY">
    Company Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190814_030240PM_99047405.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41433&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41433&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41433&ypos='+window.scrollY">
    Sergei Tcherepnin : Dolphin Rock
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41433&ypos='+window.scrollY">
    Sep 11 19 - Sep 11 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41433&ypos='+window.scrollY">
    Company Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190906_023542PM_37214777.png" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41332&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41332&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41332&ypos='+window.scrollY">
    Lamentable tierra / Sorrow Land
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41332&ypos='+window.scrollY">
    Sep 11 19 - Oct 25 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41332&ypos='+window.scrollY">
    Baxter St Camera Club of NY
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190822_014842PM_40867132.JPG" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41284&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41284&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41284&ypos='+window.scrollY">
    CA → NY: Post-War Migration of Abstract Expressionists
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41284&ypos='+window.scrollY">
    Sep 11 19 - Nov 22 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41284&ypos='+window.scrollY">
    Anita Shapolsky Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190805_100524AM_44490755.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41308&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41308&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41308&ypos='+window.scrollY">
    Mariano Ferrante : New Work
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41308&ypos='+window.scrollY">
    Sep 12 19 - Oct 26 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41308&ypos='+window.scrollY">
    Art Projects International
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190816_083903AM_1996000.jpeg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41321&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41321&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41321&ypos='+window.scrollY">
    Rebecca Morgan : Town and Country
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41321&ypos='+window.scrollY">
    Sep 12 19 - Oct 19 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41321&ypos='+window.scrollY">
    Asya Geisberg Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190821_112309AM_88226959.JPG" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41366&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41366&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41366&ypos='+window.scrollY">
    Photoville 2019
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41366&ypos='+window.scrollY">
    Sep 12 19 - Sep 22 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41366&ypos='+window.scrollY">
    Brooklyn Bridge Park
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190801_022154PM_80693198.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41370&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41370&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41370&ypos='+window.scrollY">
    Stephen Wilkes : A Witness to Change
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41370&ypos='+window.scrollY">
    Sep 12 19 - Oct 26 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41370&ypos='+window.scrollY">
    Bryce Wolkowitz Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190904_104909AM_57561459.JPG" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41388&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41388&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41388&ypos='+window.scrollY">
    Joan Mellon, Sumayyah Samaha : Lines, Forms, Substance
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41388&ypos='+window.scrollY">
    Sep 12 19 - Oct 09 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41388&ypos='+window.scrollY">
    Carter Burden Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190904_104619AM_94329412.JPG" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41388&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41388&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41388&ypos='+window.scrollY">
    Bette Klegon Halby : Confrontation: It’s as Clear as Black and White
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41388&ypos='+window.scrollY">
    Sep 12 19 - Oct 09 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41388&ypos='+window.scrollY">
    Carter Burden Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190904_105256AM_43151589.JPG" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41388&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41388&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41388&ypos='+window.scrollY">
    Vera Sapozhnikova : On the Wall
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41388&ypos='+window.scrollY">
    Sep 12 19 - Oct 09 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41388&ypos='+window.scrollY">
    Carter Burden Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190905_032919AM_14633186.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41438&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41438&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41438&ypos='+window.scrollY">
    How to Build a House: Architectural Research in the Digital Age
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41438&ypos='+window.scrollY">
    Sep 12 19 - Oct 13 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41438&ypos='+window.scrollY">
    Cooper Union Galleries
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190801_022600PM_9608730.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41385&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41385&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41385&ypos='+window.scrollY">
    Julião Sarmento : Undisclosed
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41385&ypos='+window.scrollY">
    Sep 12 19 - Nov 16 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41385&ypos='+window.scrollY">
    Carolina Nitsch Project Room
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190726_090750AM_69531037.jpeg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41352&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41352&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41352&ypos='+window.scrollY">
    Louise Kruger: Menagerie
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41352&ypos='+window.scrollY">
    Sep 12 19 - Oct 26 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41352&ypos='+window.scrollY">
    Bookstein Projects
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190806_103233AM_14491804.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41403&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41403&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41403&ypos='+window.scrollY">
    Orlan : Saint Orlan
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41403&ypos='+window.scrollY">
    Sep 12 19 - Nov 02 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41403&ypos='+window.scrollY">
    Ceysson & Bénétière - New York
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190815_031559PM_49847008.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41448&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41448&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41448&ypos='+window.scrollY">
    Natessa Amin: Hyphen
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41448&ypos='+window.scrollY">
    Sep 12 19 - Oct 16 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41448&ypos='+window.scrollY">
    CUE Art Foundation
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190909_031827PM_63239479.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41450&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41450&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41450&ypos='+window.scrollY">
    Realism to the Edge of Abstraction
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41450&ypos='+window.scrollY">
    Sep 12 19 - Nov 27 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41450&ypos='+window.scrollY">
    D. Wigmore Fine Art Inc.
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190812_022407PM_51618989.jpeg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41455&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41455&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41455&ypos='+window.scrollY">
    Arlene Arlene Gottfried : After Dark
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41455&ypos='+window.scrollY">
    Sep 12 19 - Sep 12 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41455&ypos='+window.scrollY">
    Daniel Cooney Fine Art
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190812_022608PM_46301425.JPG" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41458&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41458&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41458&ypos='+window.scrollY">
    Wars: 20th and 21st centuries
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41458&ypos='+window.scrollY">
    Sep 12 19 - Nov 02 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41458&ypos='+window.scrollY">
    David Nolan Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190819_125723PM_82882011.png" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41484&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41484&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41484&ypos='+window.scrollY">
    Sue Yon Hwang : Material Manifestation
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41484&ypos='+window.scrollY">
    Sep 12 19 - Oct 19 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41484&ypos='+window.scrollY">
    Doosan Gallery New York
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190905_024253PM_35229716.jpeg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41407&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41407&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41407&ypos='+window.scrollY">
    Deb Lawrence : Shelter
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41407&ypos='+window.scrollY">
    Sep 12 19 - Oct 26 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41407&ypos='+window.scrollY">
    Cheryl Hazan Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190722_071108AM_44137287.jpeg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41597&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41597&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41597&ypos='+window.scrollY">
    Kristine Woods
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41597&ypos='+window.scrollY">
    Sep 12 19 - Nov 01 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41597&ypos='+window.scrollY">
    Geary Contemporary
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190823_085138AM_74098390.jpeg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41600&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41600&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41600&ypos='+window.scrollY">
    Robert Arneson : The Anti-War Works 1982-86
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41600&ypos='+window.scrollY">
    Sep 12 19 - Oct 26 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41600&ypos='+window.scrollY">
    George Adams Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190901_013548PM_36064776.png" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41613&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41613&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41613&ypos='+window.scrollY">
    DreamState
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41613&ypos='+window.scrollY">
    Sep 12 19 - Oct 12 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41613&ypos='+window.scrollY">
    GR Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190809_010520PM_53506229.jpeg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41615&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41615&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41615&ypos='+window.scrollY">
    Paul Chan : The Bather's Dilemma
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41615&ypos='+window.scrollY">
    Sep 12 19 - Oct 19 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41615&ypos='+window.scrollY">
    Greene Naftali
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190909_032844PM_61595674.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41551&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41551&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41551&ypos='+window.scrollY">
    Heavy Sauce
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41551&ypos='+window.scrollY">
    Sep 12 19 - Oct 23 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41551&ypos='+window.scrollY">
    Fountain House Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190723_091835AM_13054622.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41554&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41554&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41554&ypos='+window.scrollY">
    New York Dada and the Arensberg Circle of Artists
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41554&ypos='+window.scrollY">
    Sep 12 19 - Nov 23 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41554&ypos='+window.scrollY">
    Francis M. Naumann Fine Art
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190830_011657PM_56175071.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41541&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41541&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41541&ypos='+window.scrollY">
    Aleah Chapin : What Happens at the Edge
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41541&ypos='+window.scrollY">
    Sep 12 19 - Nov 02 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41541&ypos='+window.scrollY">
    Flowers Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190821_111807AM_4407000.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41542&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41542&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41542&ypos='+window.scrollY">
    Tse Fei :  At the Twelfth Hour: Confessions of a Hongkonger
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41542&ypos='+window.scrollY">
    Sep 12 19 - Sep 13 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41542&ypos='+window.scrollY">
    Flux Factory
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190821_101626AM_98134960.jpeg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41652&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41652&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41652&ypos='+window.scrollY">
    Louisa Chase : Force Field
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41652&ypos='+window.scrollY">
    Sep 12 19 - Oct 18 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41652&ypos='+window.scrollY">
    Hirschl & Adler
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190906_103032AM_22733518.JPG" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41660&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41660&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41660&ypos='+window.scrollY">
    New Artists Group Exhibition
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41660&ypos='+window.scrollY">
    Sep 12 19 - Oct 04 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41660&ypos='+window.scrollY">
    Hostler Burrows
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190815_093112AM_14621915.jpeg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41718&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41718&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41718&ypos='+window.scrollY">
    Marco Maggi : Initialism
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41718&ypos='+window.scrollY">
    Sep 12 19 - Nov 07 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41718&ypos='+window.scrollY">
    Josée Bienvenu Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190908_060842PM_48421953.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41732&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41732&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41732&ypos='+window.scrollY">
    Haekeung Park : Time Traveler
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41732&ypos='+window.scrollY">
    Sep 12 19 - Sep 30 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41732&ypos='+window.scrollY">
    Kate Oh Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190807_125507PM_14949572.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41734&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41734&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41734&ypos='+window.scrollY">
    Now and later
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41734&ypos='+window.scrollY">
    Sep 12 19 - Oct 19 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41734&ypos='+window.scrollY">
    Kathryn Markel Fine Arts
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190829_115352AM_69389254.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41697&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41697&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41697&ypos='+window.scrollY">
    Sarah Dwyer : Tink
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41697&ypos='+window.scrollY">
    Sep 12 19 - Oct 19 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41697&ypos='+window.scrollY">
    Jane Lombard Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190801_094859PM_5211152.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41878&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41878&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41878&ypos='+window.scrollY">
    Kelly Bjork
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41878&ypos='+window.scrollY">
    Sep 12 19 - Oct 26 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41878&ypos='+window.scrollY">
    Nancy Margolis Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190801_041557PM_90723218.jpeg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41862&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41862&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41862&ypos='+window.scrollY">
    Embodiment
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41862&ypos='+window.scrollY">
    Sep 12 19 - Oct 26 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41862&ypos='+window.scrollY">
    Mitchell-Innes & Nash - Chelsea
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190801_041911PM_96713948.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41863&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41863&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41863&ypos='+window.scrollY">
    Mikiko Hara : Kyrie
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41863&ypos='+window.scrollY">
    Sep 12 19 - Oct 26 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41863&ypos='+window.scrollY">
    Miyako Yoshinaga
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190813_115059AM_87240135.JPG" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41868&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41868&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41868&ypos='+window.scrollY">
    Elisa Johns: Roam
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41868&ypos='+window.scrollY">
    Sep 12 19 - Nov 02 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41868&ypos='+window.scrollY">
    Morgan Lehman Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190722_102926AM_281891.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41820&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41820&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41820&ypos='+window.scrollY">
    Robert Deyber
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41820&ypos='+window.scrollY">
    Sep 12 19 - Sep 12 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41820&ypos='+window.scrollY">
    Martin Lawrence Galleries: Soho
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190829_124119PM_94495240.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41830&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41830&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41830&ypos='+window.scrollY">
    Gary Hume : Destroyed School Paintings
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41830&ypos='+window.scrollY">
    Sep 12 19 - Oct 26 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41830&ypos='+window.scrollY">
    Matthew Marks Gallery - 522 West 22nd Street
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190809_031006PM_3328859.jpeg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41814&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41814&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41814&ypos='+window.scrollY">
    Hannah van Bart: Places and Beings
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41814&ypos='+window.scrollY">
    Sep 12 19 - Oct 26 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41814&ypos='+window.scrollY">
    Marianne Boesky Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190812_091225AM_58326185.jpeg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41798&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41798&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41798&ypos='+window.scrollY">
    Ritsue Mishima : Lumina
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41798&ypos='+window.scrollY">
    Sep 12 19 - Oct 26 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41798&ypos='+window.scrollY">
    Luhring Augustine
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190819_012640PM_53951644.jpeg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41761&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41761&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41761&ypos='+window.scrollY">
    Betwixt and Between
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41761&ypos='+window.scrollY">
    Sep 12 19 - Oct 19 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41761&ypos='+window.scrollY">
    Laurence Miller Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190906_094830AM_38197383.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41776&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41776&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41776&ypos='+window.scrollY">
    Karen Kettering Dimit : Fragmented Beauty
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41776&ypos='+window.scrollY">
    Sep 12 19 - Oct 13 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41776&ypos='+window.scrollY">
    LIC Arts Open Gallery at The Factory
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190906_095241AM_7366071.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41776&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41776&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41776&ypos='+window.scrollY">
    And The Earth Shall Set You Free
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41776&ypos='+window.scrollY">
    Sep 12 19 - Sep 12 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41776&ypos='+window.scrollY">
    LIC Arts Open Gallery at The Factory
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190802_012640PM_47050257.jpeg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41950&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41950&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41950&ypos='+window.scrollY">
    Wade Guyton, Stephen Prina
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41950&ypos='+window.scrollY">
    Sep 12 19 - Oct 05 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41950&ypos='+window.scrollY">
    Petzel Gallery - West 18th Street
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190907_101620AM_5720254.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41957&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41957&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41957&ypos='+window.scrollY">
    Benjamin Swett : 30/30
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41957&ypos='+window.scrollY">
    Sep 12 19 - Oct 13 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41957&ypos='+window.scrollY">
    Planthouse
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190809_053741PM_37107901.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41964&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41964&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41964&ypos='+window.scrollY">
    Ben Gocker : Foskers & Egg Whites
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41964&ypos='+window.scrollY">
    Sep 12 19 - Oct 12 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41964&ypos='+window.scrollY">
    PPOW Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190906_095927AM_44679961.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41941&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41941&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41941&ypos='+window.scrollY">
    About Healthcare…What’s Next and On Whose Dime?
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41941&ypos='+window.scrollY">
    Sep 12 19 - Nov 15 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41941&ypos='+window.scrollY">
    Paul Kolker Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190815_103221AM_82696202.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41943&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41943&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41943&ypos='+window.scrollY">
    Christian Marclay: 48 War Movies and Screams
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41943&ypos='+window.scrollY">
    Sep 12 19 - Oct 19 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41943&ypos='+window.scrollY">
    Paula Cooper Gallery - 524 West 26th Street
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190909_065641PM_82704960.png" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41911&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41911&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41911&ypos='+window.scrollY">
    Risa Puno : The Privilege of Escape
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41911&ypos='+window.scrollY">
    Sep 12 19 - Sep 29 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41911&ypos='+window.scrollY">
    Onassis Cultural Center New York
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190802_010924AM_13014078.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42042&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42042&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42042&ypos='+window.scrollY">
    Vera Molnar : Paintings and Drawings, 1947 - 1986
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42042&ypos='+window.scrollY">
    Sep 12 19 - Nov 02 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42042&ypos='+window.scrollY">
    Senior & Shopmaker Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190802_011257AM_28701905.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42042&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42042&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42042&ypos='+window.scrollY">
    Vija Celmins : Prints
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42042&ypos='+window.scrollY">
    Sep 12 19 - Nov 02 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42042&ypos='+window.scrollY">
    Senior & Shopmaker Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190810_024752AM_59730063.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42023&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42023&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42023&ypos='+window.scrollY">
    Melike Kara
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42023&ypos='+window.scrollY">
    Sep 12 19 - Oct 26 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42023&ypos='+window.scrollY">
    Salon 94
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190907_105031AM_19890749.jpeg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41973&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41973&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41973&ypos='+window.scrollY">
    Scherezade Garcia : Stories of Wonder
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41973&ypos='+window.scrollY">
    Sep 12 19 - Nov 16 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41973&ypos='+window.scrollY">
    Praxis International Art
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190816_074820AM_98319864.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42000&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42000&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42000&ypos='+window.scrollY">
    SHUT UP: Joe Massey´s Messages from Prison
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42000&ypos='+window.scrollY">
    Sep 12 19 - Oct 19 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42000&ypos='+window.scrollY">
    Ricco/Maresca Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190821_034815PM_40130969.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42008&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42008&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42008&ypos='+window.scrollY">
    Michiko Kon : Cannibal Feast
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42008&ypos='+window.scrollY">
    Sep 12 19 - Oct 19 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42008&ypos='+window.scrollY">
    Robert Mann Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190821_034947PM_77366775.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42008&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42008&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42008&ypos='+window.scrollY">
    Harry Callahan : From a Recently Acquired Collection
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42008&ypos='+window.scrollY">
    Sep 12 19 - Oct 19 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42008&ypos='+window.scrollY">
    Robert Mann Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190823_104647AM_66294997.JPG" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42152&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42152&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42152&ypos='+window.scrollY">
    Tiffany Chung : passage of time
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42152&ypos='+window.scrollY">
    Sep 12 19 - Nov 02 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42152&ypos='+window.scrollY">
    Tyler Rollins Fine Art
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190829_012308PM_97716733.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42134&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42134&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42134&ypos='+window.scrollY">
    Annie Morris
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42134&ypos='+window.scrollY">
    Sep 12 19 - Oct 19 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42134&ypos='+window.scrollY">
    Timothy Taylor
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190829_074655AM_43509140.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42099&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42099&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42099&ypos='+window.scrollY">
    Alain Kirili: Who's Afraid of Verticality?
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42099&ypos='+window.scrollY">
    Sep 12 19 - Oct 19 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42099&ypos='+window.scrollY">
    Susan Inglett Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190822_013241PM_15999095.png" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42081&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42081&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42081&ypos='+window.scrollY">
    Txema Yeste : Crossroads
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42081&ypos='+window.scrollY">
    Sep 12 19 - Nov 02 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42081&ypos='+window.scrollY">
    Staley-Wise Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190724_050429AM_4545483.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42098&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42098&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42098&ypos='+window.scrollY">
    Off The Grid
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42098&ypos='+window.scrollY">
    Sep 12 19 - Oct 24 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42098&ypos='+window.scrollY">
    Susan Eley Fine Art
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190802_013821PM_97866236.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42183&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42183&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42183&ypos='+window.scrollY">
    Ray Parker : Simple Paintings c. 1960
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42183&ypos='+window.scrollY">
    Sep 12 19 - Nov 02 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42183&ypos='+window.scrollY">
    Washburn Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190823_105253AM_52951491.jpeg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42202&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42202&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42202&ypos='+window.scrollY">
    Laura Letinsky : To Want for Nothing
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42202&ypos='+window.scrollY">
    Sep 12 19 - Oct 19 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42202&ypos='+window.scrollY">
    Yancey Richardson Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190823_105420AM_27474912.jpeg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42202&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42202&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42202&ypos='+window.scrollY">
    Jared Bark : Public/Private
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42202&ypos='+window.scrollY">
    Sep 12 19 - Oct 19 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42202&ypos='+window.scrollY">
    Yancey Richardson Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190819_112416AM_77275569.JPG" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43163&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43163&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43163&ypos='+window.scrollY">
    Jeppe Hein : I Am With You
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43163&ypos='+window.scrollY">
    Sep 12 19 - Oct 19 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43163&ypos='+window.scrollY">
    303 Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190813_010706PM_47888041.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43164&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43164&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43164&ypos='+window.scrollY">
    Linus Coraggio : Ramifications
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43164&ypos='+window.scrollY">
    Sep 12 19 - Oct 10 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43164&ypos='+window.scrollY">
    Howl! Happening
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190801_035943PM_54680830.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43172&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43172&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43172&ypos='+window.scrollY">
    Bernar Venet : Indeterminate Hypothesis
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43172&ypos='+window.scrollY">
    Sep 12 19 - Sep 22 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43172&ypos='+window.scrollY">
    Kasmin Gallery - 509 West 27th Street
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190806_111156AM_69873438.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43618&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43618&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43618&ypos='+window.scrollY">
    Margarita Cabrera : Engendering New Landscapes
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43618&ypos='+window.scrollY">
    Sep 12 19 - Nov 02 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43618&ypos='+window.scrollY">
    Ruiz-Healy Art
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190908_064523PM_72059445.jpeg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43300&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43300&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43300&ypos='+window.scrollY">
    Francesco Simeti : Refugium
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43300&ypos='+window.scrollY">
    Sep 13 19 - Oct 20 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43300&ypos='+window.scrollY">
    Assembly Room
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190903_034424PM_73997890.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41974&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41974&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41974&ypos='+window.scrollY">
    The Fluff Construct : Press Release
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41974&ypos='+window.scrollY">
    Sep 13 19 - Sep 29 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41974&ypos='+window.scrollY">
    Present Company
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190819_110656AM_49398202.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41986&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41986&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41986&ypos='+window.scrollY">
    Leonhard Hurzlmeier : told tales
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41986&ypos='+window.scrollY">
    Sep 13 19 - Nov 03 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41986&ypos='+window.scrollY">
    Rachel Uffner Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190903_025821PM_52438213.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41912&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41912&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41912&ypos='+window.scrollY">
    Secret Essence of Italy presents Sabìr – “Visionary Bridge”
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41912&ypos='+window.scrollY">
    Sep 13 19 - Sep 18 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41912&ypos='+window.scrollY">
    One Art Space
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190815_100459AM_52039862.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41915&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41915&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41915&ypos='+window.scrollY">
    Maximiliano Siñani : Spalding
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41915&ypos='+window.scrollY">
    Sep 13 19 - Oct 19 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41915&ypos='+window.scrollY">
    Open Source Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190809_052315PM_93224057.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41779&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41779&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41779&ypos='+window.scrollY">
    Bernard Piffaretti
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41779&ypos='+window.scrollY">
    Sep 13 19 - Oct 19 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41779&ypos='+window.scrollY">
    Lisson Gallery - 10th Avenue
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190809_053318PM_74513112.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41780&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41780&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41780&ypos='+window.scrollY">
    Wael Shawky : The Gulf Project Camp
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41780&ypos='+window.scrollY">
    Sep 13 19 - Oct 19 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41780&ypos='+window.scrollY">
    Lisson Gallery - West 24th Street
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190902_085955AM_88688264.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41880&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41880&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41880&ypos='+window.scrollY">
    Jesse Mockrin : The marks of a stranger
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41880&ypos='+window.scrollY">
    Sep 13 19 - Oct 27 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41880&ypos='+window.scrollY">
    Nathalie Karg Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190903_013322PM_64301062.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41738&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41738&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41738&ypos='+window.scrollY">
    Hannah Israel : Imagined Language
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41738&ypos='+window.scrollY">
    Sep 13 19 - Oct 27 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41738&ypos='+window.scrollY">
    Kentler International Drawing Space
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190901_052515PM_41698755.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41753&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41753&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41753&ypos='+window.scrollY">
    Ping Zheng
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41753&ypos='+window.scrollY">
    Sep 13 19 - Nov 09 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41753&ypos='+window.scrollY">
    Kristen Lorello
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190726_052617PM_47733982.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41642&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41642&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41642&ypos='+window.scrollY">
    Erica Rosenfeld : Reverie Forest: Sanctuary for Strange Creatures
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41642&ypos='+window.scrollY">
    Sep 13 19 - Oct 19 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41642&ypos='+window.scrollY">
    Heller Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190729_023632AM_18875425.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41534&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41534&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41534&ypos='+window.scrollY">
    Fedele Spadafora : Stars & Stripes
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41534&ypos='+window.scrollY">
    Sep 13 19 - Oct 27 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41534&ypos='+window.scrollY">
    Figureworks
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190908_020042PM_71643860.png" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41537&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41537&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41537&ypos='+window.scrollY">
    Aaron Elvis Jupin : Piper Pipe that Song Again!
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41537&ypos='+window.scrollY">
    Sep 13 19 - Oct 27 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41537&ypos='+window.scrollY">
    Fisher Parrish Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190829_102716AM_95995540.png" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41606&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41606&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41606&ypos='+window.scrollY">
    Allora & Calzadilla : Cadastre
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41606&ypos='+window.scrollY">
    Sep 13 19 - Nov 02 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41606&ypos='+window.scrollY">
    Gladstone Gallery - West 21st Street
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190903_095539AM_90180479.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41585&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41585&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41585&ypos='+window.scrollY">
    Beyond Geographies : Contemporary Art and Muslim Experience
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41585&ypos='+window.scrollY">
    Sep 13 19 - Nov 17 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41585&ypos='+window.scrollY">
    Gallery at BRIC House
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190904_032842PM_34035372.JPG" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41472&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41472&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41472&ypos='+window.scrollY">
    Cole Lu : The Dust Enforcer (All These Darlings Said It’s the End and Now US)
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41472&ypos='+window.scrollY">
    Sep 13 19 - Oct 20 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41472&ypos='+window.scrollY">
    Deli Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190821_094118AM_41676436.JPG" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41452&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41452&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41452&ypos='+window.scrollY">
    Madhvi Parekh : The Curious Seeker
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41452&ypos='+window.scrollY">
    Sep 13 19 - Oct 27 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41452&ypos='+window.scrollY">
    DAG Modern
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190901_091410AM_66350903.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41405&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41405&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41405&ypos='+window.scrollY">
    Dalton Gata : The Devil Sees Beauty In A Pair Of Horns, Four Claws, And A Tail
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41405&ypos='+window.scrollY">
    Sep 13 19 - Oct 20 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41405&ypos='+window.scrollY">
    Chapter NY
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190812_022023PM_58508099.jpeg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41444&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41444&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41444&ypos='+window.scrollY">
    MK Guth : Menu
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41444&ypos='+window.scrollY">
    Sep 13 19 - Oct 26 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41444&ypos='+window.scrollY">
    Cristin Tierney Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190812_043244PM_7835052.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41441&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41441&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41441&ypos='+window.scrollY">
    The Great Paper Show
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41441&ypos='+window.scrollY">
    Sep 13 19 - Oct 11 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41441&ypos='+window.scrollY">
    Court Tree Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190901_085811AM_51988037.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41373&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41373&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41373&ypos='+window.scrollY">
    Tom Holmes : RealTree®
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41373&ypos='+window.scrollY">
    Sep 13 19 - Nov 03 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41373&ypos='+window.scrollY">
    Bureau
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190830_010136PM_43122933.JPG" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41298&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41298&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41298&ypos='+window.scrollY">
    Fastnet: Plein-Air Drawings at Freshkills Park
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41298&ypos='+window.scrollY">
    Sep 13 19 - Nov 14 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41298&ypos='+window.scrollY">
    Arsenal Gallery - Central Park
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190816_072753AM_67482631.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41288&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41288&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41288&ypos='+window.scrollY">
    Aliza Nisenbaum : Coreografías
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41288&ypos='+window.scrollY">
    Sep 13 19 - Nov 02 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41288&ypos='+window.scrollY">
    Anton Kern Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190829_021342PM_14023512.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41240&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41240&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41240&ypos='+window.scrollY">
    Janiva Ellis
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41240&ypos='+window.scrollY">
    Sep 13 19 - Sep 13 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41240&ypos='+window.scrollY">
    47 Canal Gallery - Grand Street
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190905_022157PM_26734455.png" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41243&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41243&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41243&ypos='+window.scrollY">
    Anna Weyant : Welcome to the Dollhouse
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41243&ypos='+window.scrollY">
    Sep 13 19 - Nov 02 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41243&ypos='+window.scrollY">
    56 Henry
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190829_024039PM_39872255.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41244&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41244&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41244&ypos='+window.scrollY">
    Every day is another day
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41244&ypos='+window.scrollY">
    Sep 13 19 - Nov 17 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41244&ypos='+window.scrollY">
    601Artspace
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190720_031224PM_84821568.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41362&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41362&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41362&ypos='+window.scrollY">
    The Syncope
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41362&ypos='+window.scrollY">
    Sep 14 19 - Oct 19 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41362&ypos='+window.scrollY">
    Bronx River Art Center
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190903_075311AM_22585683.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41325&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41325&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41325&ypos='+window.scrollY">
    Allison Gildersleeve "Paper Trail"
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41325&ypos='+window.scrollY">
    Sep 14 19 - Oct 19 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41325&ypos='+window.scrollY">
    Auxiliary Projects
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190909_031308PM_9260934.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41386&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41386&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41386&ypos='+window.scrollY">
    Karl Lagerfeld : Architectures
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41386&ypos='+window.scrollY">
    Sep 14 19 - Dec 21 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41386&ypos='+window.scrollY">
    Carpenters Workshop Gallery - New York
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190827_045635AM_64402326.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41539&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41539&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41539&ypos='+window.scrollY">
    Barbara Hatfield : Always Light
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41539&ypos='+window.scrollY">
    Sep 14 19 - Oct 12 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41539&ypos='+window.scrollY">
    FiveMyles
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/easelicon.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41888&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41888&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41888&ypos='+window.scrollY">
    Chelsea "Best Exhibits" gallery tour
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41888&ypos='+window.scrollY">
    Sep 14 19 - Sep 14 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41888&ypos='+window.scrollY">
    New York Gallery Tours
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190901_044513PM_40545279.jpeg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41692&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41692&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41692&ypos='+window.scrollY">
    Nam June Paik : Music is Not Sound
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41692&ypos='+window.scrollY">
    Sep 14 19 - Oct 20 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41692&ypos='+window.scrollY">
    James Cohan - Lower East Side
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190903_031338PM_37043695.png" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41920&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41920&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41920&ypos='+window.scrollY">
    Cameron Granger : Before I Let Go
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41920&ypos='+window.scrollY">
    Sep 14 19 - Oct 13 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41920&ypos='+window.scrollY">
    Ortega y Gasset Projects
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190903_031855PM_68160063.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41920&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41920&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41920&ypos='+window.scrollY">
    KT Duffy : The Ways We Record the Universe Are Evidence of Our Own Primitive Nature
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41920&ypos='+window.scrollY">
    Sep 14 19 - Nov 24 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41920&ypos='+window.scrollY">
    Ortega y Gasset Projects
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190717_012938PM_48428671.JPG" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41928&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41928&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41928&ypos='+window.scrollY">
    Peter Hujar : Master Class
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41928&ypos='+window.scrollY">
    Sep 14 19 - Oct 19 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41928&ypos='+window.scrollY">
    Pace Gallery - 540 West 25th Street
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190717_013323PM_79640991.JPG" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41928&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41928&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41928&ypos='+window.scrollY">
    Fred Wilson
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41928&ypos='+window.scrollY">
    Sep 14 19 - Oct 19 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41928&ypos='+window.scrollY">
    Pace Gallery - 540 West 25th Street
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190801_103509PM_52784401.png" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41928&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41928&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41928&ypos='+window.scrollY">
    Alexander Calder
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41928&ypos='+window.scrollY">
    Sep 14 19 - Oct 26 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41928&ypos='+window.scrollY">
    Pace Gallery - 540 West 25th Street
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190801_103916PM_34318509.png" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41928&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41928&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41928&ypos='+window.scrollY">
    Loie Hollowell
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41928&ypos='+window.scrollY">
    Sep 14 19 - Oct 19 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41928&ypos='+window.scrollY">
    Pace Gallery - 540 West 25th Street
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190801_105207PM_53249317.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41928&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41928&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41928&ypos='+window.scrollY">
    David Hockney
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41928&ypos='+window.scrollY">
    Sep 14 19 - Oct 19 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41928&ypos='+window.scrollY">
    Pace Gallery - 540 West 25th Street
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190823_092738AM_93377887.JPG" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41932&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41932&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41932&ypos='+window.scrollY">
    Peter Hujar : Master Class
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41932&ypos='+window.scrollY">
    Sep 14 19 - Oct 19 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41932&ypos='+window.scrollY">
    Pace/MacGill Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190814_102915AM_77522960.JPG" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42010&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42010&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42010&ypos='+window.scrollY">
    ArtSplash 2019
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42010&ypos='+window.scrollY">
    Sep 14 19 - Nov 10 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42010&ypos='+window.scrollY">
    Rockaway Artists Alliance
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190721_054833PM_40980575.jpeg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42037&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42037&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42037&ypos='+window.scrollY">
    Mirrored Display
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42037&ypos='+window.scrollY">
    Sep 14 19 - Oct 05 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42037&ypos='+window.scrollY">
    School of Visual Arts - SVA Gramercy Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190907_105819AM_55241283.jpeg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42036&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42036&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42036&ypos='+window.scrollY">
    Tales and Whispers
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42036&ypos='+window.scrollY">
    Sep 14 19 - Oct 12 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42036&ypos='+window.scrollY">
    School of Visual Arts - SVA Flatiron Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190905_021756PM_42338481.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42179&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42179&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42179&ypos='+window.scrollY">
    Wilfredo BIO Feliciano : Elevated - Reliving Color
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42179&ypos='+window.scrollY">
    Sep 14 19 - Oct 16 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42179&ypos='+window.scrollY">
    Wallworks New York
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190910_025034AM_81000927.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42203&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42203&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42203&ypos='+window.scrollY">
    Friedel Dzubas
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42203&ypos='+window.scrollY">
    Sep 14 19 - Nov 02 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42203&ypos='+window.scrollY">
    Yares Art - New York
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190902_052650PM_31021474.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42185&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42185&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42185&ypos='+window.scrollY">
    Duy Hoàng : Sunroom Project Space 2019
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42185&ypos='+window.scrollY">
    Sep 14 19 - Oct 27 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42185&ypos='+window.scrollY">
    Wave Hill
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190902_053701PM_3287634.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42185&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42185&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42185&ypos='+window.scrollY">
    Emily Oliveira : Sunroom Project Space 2019
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42185&ypos='+window.scrollY">
    Sep 14 19 - Dec 01 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42185&ypos='+window.scrollY">
    Wave Hill
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190904_023916PM_9791666.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42196&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42196&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42196&ypos='+window.scrollY">
    Material Witness
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42196&ypos='+window.scrollY">
    Sep 14 19 - Oct 13 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42196&ypos='+window.scrollY">
    Williamsburg Art & Historical Center
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190904_024254PM_48892284.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42196&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42196&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42196&ypos='+window.scrollY">
    Natsuki Takauji
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42196&ypos='+window.scrollY">
    Sep 14 19 - Oct 13 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42196&ypos='+window.scrollY">
    Williamsburg Art & Historical Center
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190814_121554PM_27874106.jpeg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42149&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42149&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42149&ypos='+window.scrollY">
    An Hoang
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42149&ypos='+window.scrollY">
    Sep 14 19 - Sep 14 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42149&ypos='+window.scrollY">
    Turn Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190908_063750PM_50046774.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42120&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42120&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42120&ypos='+window.scrollY">
    Eyes On The Board - Crossing Game Space
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42120&ypos='+window.scrollY">
    Sep 14 19 - Oct 10 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42120&ypos='+window.scrollY">
    The New School - Sheila C. Johnson Design Center
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190904_015758PM_40391611.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42128&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42128&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42128&ypos='+window.scrollY">
    David Kearns : Framing Devices
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42128&ypos='+window.scrollY">
    Sep 14 19 - Sep 29 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42128&ypos='+window.scrollY">
    Ti Art Studios - Sweet Lorraine Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190819_111558AM_73647595.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42155&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42155&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42155&ypos='+window.scrollY">
    Carrie Yamaoka : Panorama
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42155&ypos='+window.scrollY">
    Sep 15 19 - Oct 20 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42155&ypos='+window.scrollY">
    Ulterior Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190902_115551AM_81003236.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41936&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41936&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41936&ypos='+window.scrollY">
    Constantina Zavitsanos : L&D Motel
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41936&ypos='+window.scrollY">
    Sep 15 19 - Oct 20 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41936&ypos='+window.scrollY">
    Participant Inc.
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190905_030714PM_10797871.jpeg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41821&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41821&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41821&ypos='+window.scrollY">
    Jennie Jieun Lee : Sizzling Gouba and Long Beach
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41821&ypos='+window.scrollY">
    Sep 15 19 - Oct 27 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41821&ypos='+window.scrollY">
    Martos Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190814_033036PM_11002049.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41514&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41514&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41514&ypos='+window.scrollY">
    Nathanaëlle Herbelin : Rituals for Long Distances
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41514&ypos='+window.scrollY">
    Sep 15 19 - Oct 20 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41514&ypos='+window.scrollY">
    Emmanuel Barbault Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190804_044929AM_51828268.png" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41595&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41595&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41595&ypos='+window.scrollY">
    Bethlehem Hospital
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41595&ypos='+window.scrollY">
    Sep 15 19 - Oct 26 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41595&ypos='+window.scrollY">
    Gavin Brown's Enterprise - Harlem
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190816_010442PM_31806794.JPG" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41569&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41569&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41569&ypos='+window.scrollY">
    Richard Serra : Triptychs and Diptychs
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41569&ypos='+window.scrollY">
    Sep 16 19 - Nov 02 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41569&ypos='+window.scrollY">
    Gagosian Gallery - Madison Ave
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190830_011101PM_79539157.jpeg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41469&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41469&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41469&ypos='+window.scrollY">
    Fifty Years of American Art
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41469&ypos='+window.scrollY">
    Sep 16 19 - Oct 25 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41469&ypos='+window.scrollY">
    Debra Force Fine Art
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190821_114303AM_81089362.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42038&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42038&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42038&ypos='+window.scrollY">
    Searching the Sky for Rain
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42038&ypos='+window.scrollY">
    Sep 16 19 - Dec 16 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42038&ypos='+window.scrollY">
    SculptureCenter
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190821_114457AM_59090451.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42038&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42038&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42038&ypos='+window.scrollY">
    Christian Nyampeta  : École du soir (The Evening Academy)
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42038&ypos='+window.scrollY">
    Sep 16 19 - Dec 16 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42038&ypos='+window.scrollY">
    SculptureCenter
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190908_012550PM_17183891.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41500&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41500&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41500&ypos='+window.scrollY">
    Welcome / New Member Exhibition
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41500&ypos='+window.scrollY">
    Sep 17 19 - Dec 06 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41500&ypos='+window.scrollY">
    Elizabeth Foundation for the Arts
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190816_010859PM_5260137.JPG" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41571&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41571&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41571&ypos='+window.scrollY">
    Richard Serra : Reverse Curve
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41571&ypos='+window.scrollY">
    Sep 17 19 - Feb 01 20
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41571&ypos='+window.scrollY">
    Gagosian Gallery - West 21st Steet
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190816_011209PM_49141530.JPG" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41572&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41572&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41572&ypos='+window.scrollY">
    Richard Serra : Forged Rounds
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41572&ypos='+window.scrollY">
    Sep 17 19 - Dec 07 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41572&ypos='+window.scrollY">
    Gagosian Gallery - West 24th Steet
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190816_112912AM_60021675.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41634&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41634&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41634&ypos='+window.scrollY">
    By Hoof, Paw, Wing or Fin: Creatures in Photographs
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41634&ypos='+window.scrollY">
    Sep 17 19 - Nov 15 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41634&ypos='+window.scrollY">
    Hans P. Kraus Jr. Fine Photographs
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190906_090315AM_53009380.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41678&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41678&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41678&ypos='+window.scrollY">
    Sonia Leimer : Via San Gennaro
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41678&ypos='+window.scrollY">
    Sep 17 19 - Jan 03 20
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41678&ypos='+window.scrollY">
    International Studio & Curatorial Program
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190909_032300PM_35882032.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43852&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43852&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43852&ypos='+window.scrollY">
    Utopian Imagination
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43852&ypos='+window.scrollY">
    Sep 17 19 - Dec 07 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43852&ypos='+window.scrollY">
    Ford Foundation Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190821_035550PM_38575.JPG" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41626&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41626&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41626&ypos='+window.scrollY">
    Luis Frangella : Paintings from the 1980s
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41626&ypos='+window.scrollY">
    Sep 18 19 - Dec 20 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41626&ypos='+window.scrollY">
    Hal Bromm Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190806_102122AM_71099217.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41702&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41702&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41702&ypos='+window.scrollY">
    Carlos Fragoso : Age of Foolishness
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41702&ypos='+window.scrollY">
    Sep 18 19 - Sep 18 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41702&ypos='+window.scrollY">
    Jason McCoy Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190906_084502AM_82669843.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41517&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41517&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41517&ypos='+window.scrollY">
    Frank Holliday, Saturn Return
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41517&ypos='+window.scrollY">
    Sep 18 19 - Oct 06 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41517&ypos='+window.scrollY">
    Equity Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190812_024745PM_90004026.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41607&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41607&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41607&ypos='+window.scrollY">
    Walter Swennen : Leavin home but there is no home at all
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41607&ypos='+window.scrollY">
    Sep 18 19 - Oct 19 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41607&ypos='+window.scrollY">
    Gladstone Gallery - West 24th Street
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190908_124937PM_68516146.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41500&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41500&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41500&ypos='+window.scrollY">
    Soft and Wet
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41500&ypos='+window.scrollY">
    Sep 18 19 - Nov 16 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41500&ypos='+window.scrollY">
    Elizabeth Foundation for the Arts
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190822_021807PM_86515038.jpeg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41468&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41468&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41468&ypos='+window.scrollY">
    Photographs from the Paul Sack Collection
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41468&ypos='+window.scrollY">
    Sep 18 19 - Nov 02 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41468&ypos='+window.scrollY">
    Deborah Bell Photographs
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190809_115127AM_23007387.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41459&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41459&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41459&ypos='+window.scrollY">
    Dee Shapiro : Snatched and Reworked
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41459&ypos='+window.scrollY">
    Sep 18 19 - Oct 12 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41459&ypos='+window.scrollY">
    David Richard Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190902_125055PM_8567579.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42044&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42044&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42044&ypos='+window.scrollY">
    Nancy Elsamanoudi : Leg Up
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42044&ypos='+window.scrollY">
    Sep 18 19 - Oct 13 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42044&ypos='+window.scrollY">
    SFA Projects
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190805_035339PM_56234618.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42211&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42211&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42211&ypos='+window.scrollY">
    Tom Doyle
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42211&ypos='+window.scrollY">
    Sep 18 19 - Nov 01 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42211&ypos='+window.scrollY">
    Zurcher New York
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190822_092910AM_61786583.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42084&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42084&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42084&ypos='+window.scrollY">
    Brad Greenwood : GRRR
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42084&ypos='+window.scrollY">
    Sep 19 19 - Nov 30 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42084&ypos='+window.scrollY">
    Steven Amedee Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190829_011750PM_99013497.png" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42104&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42104&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42104&ypos='+window.scrollY">
    Burton Morris : The Art of Friends
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42104&ypos='+window.scrollY">
    Sep 19 19 - Oct 16 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42104&ypos='+window.scrollY">
    Taglialatella Galleries - New York
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190823_100159AM_93750334.JPG" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42021&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42021&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42021&ypos='+window.scrollY">
    American Impressionist Society : 20th Annual National Juried Exhibition
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42021&ypos='+window.scrollY">
    Sep 19 19 - Oct 02 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42021&ypos='+window.scrollY">
    Salmagundi Club
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190902_120855PM_44302979.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41962&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41962&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41962&ypos='+window.scrollY">
    Craig Alan : Populous
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41962&ypos='+window.scrollY">
    Sep 19 19 - Sep 19 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41962&ypos='+window.scrollY">
    Pop International Galleries
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190809_010620PM_29389596.jpeg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41615&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41615&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41615&ypos='+window.scrollY">
    Konrad Lueg
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41615&ypos='+window.scrollY">
    Sep 19 19 - Nov 02 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41615&ypos='+window.scrollY">
    Greene Naftali
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190720_082022AM_20861986.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41588&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41588&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41588&ypos='+window.scrollY">
    The Female Eye
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41588&ypos='+window.scrollY">
    Sep 19 19 - Oct 22 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41588&ypos='+window.scrollY">
    Gallery Henoch
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190805_044552AM_94671332.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41539&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41539&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41539&ypos='+window.scrollY">
    18 Stanzas Sung to a Tatar Reed Whistle
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41539&ypos='+window.scrollY">
    Sep 19 19 - Oct 05 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41539&ypos='+window.scrollY">
    FiveMyles
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190723_034411PM_75064079.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42080&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42080&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42080&ypos='+window.scrollY">
    Diplomacy
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42080&ypos='+window.scrollY">
    Sep 19 19 - Nov 22 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42080&ypos='+window.scrollY">
    St. John's University - Yeh Art Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190812_090403AM_3179738.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43386&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43386&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43386&ypos='+window.scrollY">
    Alexis Kandra
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43386&ypos='+window.scrollY">
    Sep 20 19 - Oct 14 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43386&ypos='+window.scrollY">
    Lucas Lucas
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190909_073029PM_40860294.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41931&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41931&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41931&ypos='+window.scrollY">
    Santi Moix : Hanabi
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41931&ypos='+window.scrollY">
    Sep 20 19 - Oct 26 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41931&ypos='+window.scrollY">
    Pace Prints - West 26th Street
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190905_020127PM_63167747.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41987&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41987&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41987&ypos='+window.scrollY">
    To Look at the Sea is to Become what One is
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41987&ypos='+window.scrollY">
    Sep 20 19 - Nov 08 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41987&ypos='+window.scrollY">
    Radiator Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190812_092224AM_13158171.jpeg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43153&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43153&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43153&ypos='+window.scrollY">
    Daniel John Gadd
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43153&ypos='+window.scrollY">
    Sep 20 19 - Sep 20 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43153&ypos='+window.scrollY">
    M. David & Co.
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190905_020557PM_19353898.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42041&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42041&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42041&ypos='+window.scrollY">
    Aurelia Aurita
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42041&ypos='+window.scrollY">
    Sep 21 19 - Oct 26 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42041&ypos='+window.scrollY">
    Selenas Mountain
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190904_110940AM_57078121.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41937&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41937&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41937&ypos='+window.scrollY">
    Synthetic Souls
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41937&ypos='+window.scrollY">
    Sep 21 19 - Sep 23 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41937&ypos='+window.scrollY">
    Paul Calendrillo New York Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190829_063712PM_86677739.png" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41378&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41378&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41378&ypos='+window.scrollY">
    Amy Barovick
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41378&ypos='+window.scrollY">
    Sep 21 19 - Sep 21 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41378&ypos='+window.scrollY">
    Caelum Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190805_040152AM_68705257.png" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41367&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41367&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41367&ypos='+window.scrollY">
    Color - National Juried Art Show
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41367&ypos='+window.scrollY">
    Sep 21 19 - Oct 27 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41367&ypos='+window.scrollY">
    Brooklyn Waterfront Artists Coalition
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190813_043705PM_58262695.JPG" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41610&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41610&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41610&ypos='+window.scrollY">
    Elisabeth Kley, Tabboo! : Garden
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41610&ypos='+window.scrollY">
    Sep 22 19 - Nov 10 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41610&ypos='+window.scrollY">
    Gordon Robichaux
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190903_020600PM_86784980.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41754&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41754&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41754&ypos='+window.scrollY">
    The Lonely Eclipse
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41754&ypos='+window.scrollY">
    Sep 22 19 - Oct 20 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41754&ypos='+window.scrollY">
    Kunstraum LLC
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190910_051737AM_9657427.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42119&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42119&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42119&ypos='+window.scrollY">
    BYO Art for Bushwick Open Studios!
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42119&ypos='+window.scrollY">
    Sep 22 19 - Sep 22 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42119&ypos='+window.scrollY">
    The Living Gallery BK
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190909_033622PM_80800865.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41690&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41690&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41690&ypos='+window.scrollY">
    Yael Susan Rayman : Yael Adventures
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41690&ypos='+window.scrollY">
    Sep 23 19 - Sep 30 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41690&ypos='+window.scrollY">
    Jadite Galleries
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190909_034014PM_68289672.JPG" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41690&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41690&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41690&ypos='+window.scrollY">
    Pat Swain : Trees
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41690&ypos='+window.scrollY">
    Sep 24 19 - Oct 05 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41690&ypos='+window.scrollY">
    Jadite Galleries
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190909_034217PM_56161883.JPG" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41690&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41690&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41690&ypos='+window.scrollY">
    Donna Garcia : Dusk to Dawn
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41690&ypos='+window.scrollY">
    Sep 24 19 - Oct 05 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41690&ypos='+window.scrollY">
    Jadite Galleries
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190909_025724PM_30107953.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41297&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41297&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41297&ypos='+window.scrollY">
    Rachel Maclean : Native Animals
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41297&ypos='+window.scrollY">
    Sep 24 19 - Nov 09 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41297&ypos='+window.scrollY">
    Arsenal Contemporary New York
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190908_124201PM_12962142.png" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41324&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41324&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41324&ypos='+window.scrollY">
    Resident Alien: Austrian Architects in America
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41324&ypos='+window.scrollY">
    Sep 24 19 - Feb 17 20
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41324&ypos='+window.scrollY">
    Austrian Cultural Forum New York
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190902_104932AM_89758086.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41901&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41901&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41901&ypos='+window.scrollY">
    Malka Inbal “Shooting the Sun”
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41901&ypos='+window.scrollY">
    Sep 24 19 - Oct 19 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41901&ypos='+window.scrollY">
    Noho M55 Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190724_021651PM_48832912.JPG" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41260&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41260&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41260&ypos='+window.scrollY">
    Einar and Jamex de la Torre : High Noon
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41260&ypos='+window.scrollY">
    Sep 25 19 - Nov 02 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41260&ypos='+window.scrollY">
    Agnes Varis Art Center - UrbanGlass
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190909_031531PM_92553371.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41395&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41395&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41395&ypos='+window.scrollY">
    Important Photography Group Show
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41395&ypos='+window.scrollY">
    Sep 26 19 - Oct 19 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41395&ypos='+window.scrollY">
    Cavalier Galleries
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190830_022329PM_77200489.png" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41575&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41575&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41575&ypos='+window.scrollY">
    Otto Meyer-Amden : Vorbereitung
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41575&ypos='+window.scrollY">
    Sep 26 19 - Nov 02 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41575&ypos='+window.scrollY">
    Galerie Buchholz
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190909_072846PM_8923176.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41930&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41930&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41930&ypos='+window.scrollY">
    Contemporary Masters
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41930&ypos='+window.scrollY">
    Sep 26 19 - Oct 26 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41930&ypos='+window.scrollY">
    Pace Prints - East 57th Street
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190828_072802PM_88224598.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41969&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41969&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41969&ypos='+window.scrollY">
    Talking to Action: Art, Pedagogy, and Activism in the Americas
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41969&ypos='+window.scrollY">
    Sep 26 19 - Dec 14 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41969&ypos='+window.scrollY">
    Pratt Institute - Pratt Manhattan Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190806_070113AM_33991985.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43184&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43184&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43184&ypos='+window.scrollY">
    Magnificent Emeralds: Fura’s Tears
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43184&ypos='+window.scrollY">
    Sep 26 19 - Dec 30 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43184&ypos='+window.scrollY">
    Wilensky Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190830_023801PM_94366661.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41947&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41947&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41947&ypos='+window.scrollY">
    John Zurier : North from Here
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41947&ypos='+window.scrollY">
    Sep 27 19 - Nov 09 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41947&ypos='+window.scrollY">
    Peter Blum Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190904_032557PM_45830737.JPG" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43170&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43170&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43170&ypos='+window.scrollY">
    Not “In Vogue”
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43170&ypos='+window.scrollY">
    Sep 27 19 - Oct 27 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43170&ypos='+window.scrollY">
    5-50 Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190903_041743AM_31419049.png" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41351&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41351&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41351&ypos='+window.scrollY">
    Friends, Peace and Sanctuary: Collaborative Works on Paper
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41351&ypos='+window.scrollY">
    Sep 27 19 - Oct 26 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41351&ypos='+window.scrollY">
    Booklyn
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190829_024304PM_5675300.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41248&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41248&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41248&ypos='+window.scrollY">
    Younghye Kim : Think of contact in the age of connection
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41248&ypos='+window.scrollY">
    Sep 27 19 - Oct 03 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41248&ypos='+window.scrollY">
    Able Fine Art NY
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190909_030612PM_8331783.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41251&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41251&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41251&ypos='+window.scrollY">
    Deconstruction Night
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41251&ypos='+window.scrollY">
    Sep 27 19 - Sep 27 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41251&ypos='+window.scrollY">
    AC Institute
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190809_123803PM_82414367.jpeg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41499&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41499&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41499&ypos='+window.scrollY">
    Lynn Davis
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41499&ypos='+window.scrollY">
    Sep 28 19 - Nov 02 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41499&ypos='+window.scrollY">
    Edwynn Houk Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190815_123420PM_38362287.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42180&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42180&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42180&ypos='+window.scrollY">
    Salvatore Federico : Recent Paintings, 2014-2019
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42180&ypos='+window.scrollY">
    Sep 28 19 - Oct 23 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42180&ypos='+window.scrollY">
    Walter Wickiser Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190813_042506AM_3272986.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42063&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42063&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42063&ypos='+window.scrollY">
    Esperanza Cortés : Canté Jondo / Deep Song
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42063&ypos='+window.scrollY">
    Sep 28 19 - Nov 03 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42063&ypos='+window.scrollY">
    Smack Mellon Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190813_043425AM_83959902.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42063&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42063&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42063&ypos='+window.scrollY">
    Viviane Rombaldi Seppey : Voice
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42063&ypos='+window.scrollY">
    Sep 28 19 - Nov 03 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42063&ypos='+window.scrollY">
    Smack Mellon Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190823_093753AM_62849496.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41981&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41981&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41981&ypos='+window.scrollY">
    Juan Pablo Garza : Le hablo a tu fantasma (Todas las cosas se borran)
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41981&ypos='+window.scrollY">
    Sep 28 19 - Sep 28 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41981&ypos='+window.scrollY">
    Proxyco
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190904_033328PM_3249049.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41485&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41485&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41485&ypos='+window.scrollY">
    At Sea
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41485&ypos='+window.scrollY">
    Sep 29 19 - Dec 08 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41485&ypos='+window.scrollY">
    Dorsky Gallery Curatorial Programs
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190819_115646AM_53934727.JPG" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41345&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41345&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41345&ypos='+window.scrollY">
    Richard Castellana : This and That III: A Silent Auction
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41345&ypos='+window.scrollY">
    Oct 01 19 - Oct 26 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41345&ypos='+window.scrollY">
    Blue Mountain Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190615_040503AM_98572877.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41953&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41953&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41953&ypos='+window.scrollY">
    Marsha Heller
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41953&ypos='+window.scrollY">
    Oct 01 19 - Oct 31 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41953&ypos='+window.scrollY">
    Phoenix Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190814_125956PM_3244442.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41902&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41902&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41902&ypos='+window.scrollY">
    Ruby Rumie & Justine Graham's COMMON PLACE opens at Nohra Haime Gallery on October 1st
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41902&ypos='+window.scrollY">
    Oct 02 19 - Nov 16 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41902&ypos='+window.scrollY">
    Nohra Haime Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190906_020853PM_76842485.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41791&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41791&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41791&ypos='+window.scrollY">
    NY Latin American Art Triennial
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41791&ypos='+window.scrollY">
    Oct 02 19 - Dec 11 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41791&ypos='+window.scrollY">
    Longwood Art Gallery At Hostos
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190829_103029AM_35809289.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41656&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41656&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41656&ypos='+window.scrollY">
    LeonBerkowitz : Thresholds of Perceptibility
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41656&ypos='+window.scrollY">
    Oct 03 19 - Nov 02 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41656&ypos='+window.scrollY">
    Hollis Taggart Galleries - Chelsea
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190905_031642PM_71896017.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43183&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43183&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43183&ypos='+window.scrollY">
    Ugo Schildge : Nectar
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43183&ypos='+window.scrollY">
    Oct 03 19 - Oct 04 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43183&ypos='+window.scrollY">
    NonFinito Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190822_124342PM_49922561.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41757&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41757&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41757&ypos='+window.scrollY">
    Ruby Rumié : Divine Breath
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41757&ypos='+window.scrollY">
    Oct 04 19 - Oct 29 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41757&ypos='+window.scrollY">
    La MaMa Galleria
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190830_014604PM_80763674.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41562&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41562&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41562&ypos='+window.scrollY">
    Total Eclipse
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41562&ypos='+window.scrollY">
    Oct 04 19 - Oct 25 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41562&ypos='+window.scrollY">
    Friday Studio Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190903_033712PM_78495439.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41956&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41956&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41956&ypos='+window.scrollY">
    Jacolby Satterwhite : You're at home
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41956&ypos='+window.scrollY">
    Oct 04 19 - Nov 24 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41956&ypos='+window.scrollY">
    Pioneer Works
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190813_081438AM_38985206.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41955&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41955&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41955&ypos='+window.scrollY">
    Elliott Green : Under the Map Room
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41955&ypos='+window.scrollY">
    Oct 05 19 - Nov 10 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41955&ypos='+window.scrollY">
    Pierogi
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190802_123648AM_79770557.jpeg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42035&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42035&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42035&ypos='+window.scrollY">
    The Masters Series: Steve Brodner
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42035&ypos='+window.scrollY">
    Oct 05 19 - Nov 02 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42035&ypos='+window.scrollY">
    School of Visual Arts - SVA Chelsea Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190904_021507PM_99791148.jpeg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42132&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42132&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42132&ypos='+window.scrollY">
    Nick Farhi
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42132&ypos='+window.scrollY">
    Oct 05 19 - Dec 16 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42132&ypos='+window.scrollY">
    Tillou Fine Art
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190901_014626PM_7592600.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43413&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43413&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43413&ypos='+window.scrollY">
    Anna Valdez : Natural Curiosity
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43413&ypos='+window.scrollY">
    Oct 05 19 - Oct 26 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43413&ypos='+window.scrollY">
    Hashimoto Contemporary NYC
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190804_072511AM_62288149.png" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42175&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42175&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42175&ypos='+window.scrollY">
    Alice Miceli : Projeto Chernobyl
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42175&ypos='+window.scrollY">
    Oct 07 19 - Jan 25 20
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42175&ypos='+window.scrollY">
    Visual Arts at Americas Society
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190809_115320AM_94882870.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41459&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41459&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41459&ypos='+window.scrollY">
    Anthe Zacharias : Shaken, Not Stirred
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41459&ypos='+window.scrollY">
    Oct 08 19 - Nov 09 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41459&ypos='+window.scrollY">
    David Richard Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190723_123446PM_57325843.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41882&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41882&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41882&ypos='+window.scrollY">
    Art Angels
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41882&ypos='+window.scrollY">
    Oct 09 19 - Oct 30 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41882&ypos='+window.scrollY">
    National Association of Women Artists - NAWA Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190907_093806AM_49603102.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41891&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41891&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41891&ypos='+window.scrollY">
    Atlas Unlimited: Acts VII-X
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41891&ypos='+window.scrollY">
    Oct 10 19 - Nov 03 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41891&ypos='+window.scrollY">
    New York University - 80WSE Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190902_065338PM_34986262.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42051&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42051&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42051&ypos='+window.scrollY">
    Vik Muniz
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42051&ypos='+window.scrollY">
    Oct 10 19 - Nov 16 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42051&ypos='+window.scrollY">
    Sikkema Jenkins & Co.
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190822_081558AM_23309176.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41984&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41984&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41984&ypos='+window.scrollY">
    Important American Paintings, Volume XX: Truth
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41984&ypos='+window.scrollY">
    Oct 10 19 - Aug 10 20
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41984&ypos='+window.scrollY">
    Questroyal Fine Art
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190816_101740AM_37025883.jpeg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41476&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41476&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41476&ypos='+window.scrollY">
    Karl Wirsum : Unmixedly at Ease: 50 Years of Drawing
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41476&ypos='+window.scrollY">
    Oct 10 19 - Nov 10 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41476&ypos='+window.scrollY">
    Derek Eller Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190816_102136AM_41489182.png" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41540&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41540&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41540&ypos='+window.scrollY">
    Nicolas Party : Pastel
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41540&ypos='+window.scrollY">
    Oct 10 19 - Dec 14 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41540&ypos='+window.scrollY">
    FLAG Art Foundation
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190906_030952PM_2150352.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41724&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41724&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41724&ypos='+window.scrollY">
    Sandra Lerner : Cosmic Sublime
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41724&ypos='+window.scrollY">
    Oct 10 19 - Nov 12 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41724&ypos='+window.scrollY">
    June Kelly Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190901_022955PM_51518926.png" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41650&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41650&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41650&ypos='+window.scrollY">
    Amanda Church
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41650&ypos='+window.scrollY">
    Oct 10 19 - Nov 10 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41650&ypos='+window.scrollY">
    High Noon
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190822_112801AM_21452080.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41677&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41677&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41677&ypos='+window.scrollY">
    PAPER BORDERS
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41677&ypos='+window.scrollY">
    Oct 10 19 - Dec 18 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41677&ypos='+window.scrollY">
    International Print Center New York
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190806_102530AM_98263897.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41700&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41700&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41700&ypos='+window.scrollY">
    Made in Tokyo: Architecture and Living, 1964/2020
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41700&ypos='+window.scrollY">
    Oct 11 19 - Jan 26 20
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41700&ypos='+window.scrollY">
    Japan Society Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190901_074709PM_36048043.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41856&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41856&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41856&ypos='+window.scrollY">
    Pat Passlof : The Brush is the Finger of the Brain
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41856&ypos='+window.scrollY">
    Oct 11 19 - Apr 12 20
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41856&ypos='+window.scrollY">
    Milton Resnick and Pat Passlof Foundation
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190906_015847PM_39206476.jpeg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42037&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42037&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42037&ypos='+window.scrollY">
    Mesmeric
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42037&ypos='+window.scrollY">
    Oct 12 19 - Nov 02 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42037&ypos='+window.scrollY">
    School of Visual Arts - SVA Gramercy Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190902_105406AM_29632320.png" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41901&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41901&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41901&ypos='+window.scrollY">
    Dino Pazzanese “A Sorte”
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41901&ypos='+window.scrollY">
    Oct 15 19 - Dec 02 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41901&ypos='+window.scrollY">
    Noho M55 Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190809_115502AM_91090708.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41459&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41459&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41459&ypos='+window.scrollY">
    Izvor Pende : Abstraction, Naturally
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41459&ypos='+window.scrollY">
    Oct 15 19 - Nov 16 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41459&ypos='+window.scrollY">
    David Richard Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190806_081549AM_52513170.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41399&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41399&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41399&ypos='+window.scrollY">
    Marino Marini : Arcadian Nudes
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41399&ypos='+window.scrollY">
    Oct 17 19 - Jun 13 20
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41399&ypos='+window.scrollY">
    Center for Italian Modern Art
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190822_094358AM_63998834.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41549&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41549&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41549&ypos='+window.scrollY">
    Somaya Critchlow : Sincere for Synonym
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41549&ypos='+window.scrollY">
    Oct 17 19 - Nov 24 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41549&ypos='+window.scrollY">
    Fortnight Institute
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190907_102623AM_75421503.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41957&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41957&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41957&ypos='+window.scrollY">
    Victoria Burge : Notations
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41957&ypos='+window.scrollY">
    Oct 17 19 - Nov 30 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41957&ypos='+window.scrollY">
    Planthouse
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190907_102848AM_10904007.jpeg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41957&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41957&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41957&ypos='+window.scrollY">
    Matt Magee : Recent Paintings and Works on Paper
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41957&ypos='+window.scrollY">
    Oct 17 19 - Nov 30 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41957&ypos='+window.scrollY">
    Planthouse
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190905_011520PM_37943380.JPG" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41958&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41958&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41958&ypos='+window.scrollY">
    Space:Light
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41958&ypos='+window.scrollY">
    Oct 17 19 - Nov 17 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41958&ypos='+window.scrollY">
    Plaxall Gallery - Long Island City Artists
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190809_055109PM_46949261.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41964&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41964&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41964&ypos='+window.scrollY">
    Sanam Khatibi : An hour before the Devil fell
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41964&ypos='+window.scrollY">
    Oct 17 19 - Nov 16 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41964&ypos='+window.scrollY">
    PPOW Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190812_081958AM_47155818.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41764&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41764&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41764&ypos='+window.scrollY">
    Progressive Transition : The New York Latin American Art Triennial 2019
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41764&ypos='+window.scrollY">
    Oct 19 19 - Jan 25 20
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41764&ypos='+window.scrollY">
    Lehman College Art Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190829_121323PM_813900.png" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41712&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41712&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41712&ypos='+window.scrollY">
    Manuel Knapp : Here, Now
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41712&ypos='+window.scrollY">
    Oct 19 19 - Oct 20 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41712&ypos='+window.scrollY">
    Jim Kempner Fine Art
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190815_015213AM_93905398.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41890&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41890&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41890&ypos='+window.scrollY">
    Hermine Ford
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41890&ypos='+window.scrollY">
    Oct 21 19 - Dec 01 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41890&ypos='+window.scrollY">
    New York Studio School of Drawing, Painting and Sculpture
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190823_105901AM_37073558.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42206&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42206&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42206&ypos='+window.scrollY">
    Simen Johan : Conspiracy of Ravens
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42206&ypos='+window.scrollY">
    Oct 24 19 - Dec 07 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42206&ypos='+window.scrollY">
    Yossi Milo Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190905_041953AM_5825698.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41564&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41564&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41564&ypos='+window.scrollY">
    Gaetano Pesce : Age of Contaminations
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41564&ypos='+window.scrollY">
    Oct 24 19 - Dec 14 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41564&ypos='+window.scrollY">
    Friedman Benda
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190716_072337PM_28395630.png" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41462&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41462&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41462&ypos='+window.scrollY">
    Jason Rhoades
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41462&ypos='+window.scrollY">
    Oct 24 19 - Dec 07 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41462&ypos='+window.scrollY">
    David Zwirner - West 19th Street
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190909_031652PM_40802017.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41395&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41395&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41395&ypos='+window.scrollY">
    Guy Stanley Philoche
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41395&ypos='+window.scrollY">
    Oct 24 19 - Nov 17 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41395&ypos='+window.scrollY">
    Cavalier Galleries
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190726_085825AM_8200650.jpeg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41268&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41268&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41268&ypos='+window.scrollY">
    Melvin Edwards
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41268&ypos='+window.scrollY">
    Oct 24 19 - Dec 14 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41268&ypos='+window.scrollY">
    Alexander Gray Associates
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190819_120257PM_98443084.JPG" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41345&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41345&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41345&ypos='+window.scrollY">
    Marie Van Elder : New Work
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41345&ypos='+window.scrollY">
    Oct 29 19 - Nov 23 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41345&ypos='+window.scrollY">
    Blue Mountain Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190726_051714PM_62102495.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41636&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41636&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41636&ypos='+window.scrollY">
    Alina Szapocznikow
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41636&ypos='+window.scrollY">
    Oct 29 19 - Dec 21 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41636&ypos='+window.scrollY">
    Hauser & Wirth - New York, 69th Street
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190819_092013AM_73991304.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41770&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41770&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41770&ypos='+window.scrollY">
    Nicole Awai : Envisioning the Liquid Land
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41770&ypos='+window.scrollY">
    Oct 30 19 - Dec 21 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41770&ypos='+window.scrollY">
    Lesley Heller Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190819_092155AM_54414246.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41770&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41770&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41770&ypos='+window.scrollY">
    Rachelle Dang : Uncertain Haven
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41770&ypos='+window.scrollY">
    Oct 30 19 - Dec 21 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41770&ypos='+window.scrollY">
    Lesley Heller Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190724_125138PM_39448331.jpeg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42003&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42003&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42003&ypos='+window.scrollY">
    Masterworks : From the 14th to the 20th Century
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42003&ypos='+window.scrollY">
    Oct 31 19 - Dec 12 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42003&ypos='+window.scrollY">
    Richard L. Feigen & Co.
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190801_041720PM_79476328.jpeg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41862&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41862&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41862&ypos='+window.scrollY">
    Brent Wadden
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41862&ypos='+window.scrollY">
    Nov 01 19 - Dec 21 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41862&ypos='+window.scrollY">
    Mitchell-Innes & Nash - Chelsea
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190530_070743PM_62945413.png" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43654&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43654&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43654&ypos='+window.scrollY">
    4th New York International Miniature Print Exhibition
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43654&ypos='+window.scrollY">
    Nov 01 19 - Nov 30 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43654&ypos='+window.scrollY">
    Manhattan Graphics Center
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190901_015012PM_55446362.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43413&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43413&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43413&ypos='+window.scrollY">
    DALeast : Rippling Stone
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43413&ypos='+window.scrollY">
    Nov 02 19 - Nov 23 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43413&ypos='+window.scrollY">
    Hashimoto Contemporary NYC
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190902_105541AM_26405539.jpeg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41901&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41901&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41901&ypos='+window.scrollY">
    Ed Rath “Metropolis'
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41901&ypos='+window.scrollY">
    Nov 05 19 - Nov 23 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41901&ypos='+window.scrollY">
    Noho M55 Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190830_022945PM_39962035.jpeg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41771&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41771&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41771&ypos='+window.scrollY">
    Friedel Dzubas : Sketches
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41771&ypos='+window.scrollY">
    Nov 05 19 - Jan 04 20
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41771&ypos='+window.scrollY">
    Leslie Feely
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190806_083209AM_61438344.jpeg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41948&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41948&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41948&ypos='+window.scrollY">
    Mel Bochner : Exasperations
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41948&ypos='+window.scrollY">
    Nov 05 19 - Dec 21 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41948&ypos='+window.scrollY">
    Peter Freeman - New York
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190906_024920PM_435459.JPG" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41584&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41584&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41584&ypos='+window.scrollY">
    Ashley G Garner: Aesthesia
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41584&ypos='+window.scrollY">
    Nov 06 19 - Dec 15 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41584&ypos='+window.scrollY">
    Gallery 151
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190822_124528PM_54292576.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41757&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41757&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41757&ypos='+window.scrollY">
    Crowds
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41757&ypos='+window.scrollY">
    Nov 07 19 - Dec 08 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41757&ypos='+window.scrollY">
    La MaMa Galleria
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/easelicon.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41868&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41868&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41868&ypos='+window.scrollY">
    Carolanna Parlato: New Paintings
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41868&ypos='+window.scrollY">
    Nov 07 19 - Dec 21 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41868&ypos='+window.scrollY">
    Morgan Lehman Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190822_081732AM_70887371.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41984&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41984&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41984&ypos='+window.scrollY">
    Eric Sloane : Taking Us Home
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41984&ypos='+window.scrollY">
    Nov 08 19 - Dec 01 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41984&ypos='+window.scrollY">
    Questroyal Fine Art
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190716_073101PM_42459706.png" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41463&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41463&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41463&ypos='+window.scrollY">
    Yayoi Kusama
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41463&ypos='+window.scrollY">
    Nov 09 19 - Dec 14 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41463&ypos='+window.scrollY">
    David Zwirner - West 20th Street
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190724_021944PM_5907571.JPG" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41260&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41260&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41260&ypos='+window.scrollY">
    Olivia Booth : Drawing Out Time
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41260&ypos='+window.scrollY">
    Nov 13 19 - Jan 04 20
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41260&ypos='+window.scrollY">
    Agnes Varis Art Center - UrbanGlass
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190315_110419AM_6113594.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41714&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41714&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41714&ypos='+window.scrollY">
    LINEAGE: Featuring MATT DEVINE, ANTHONY HUNTER, ADRIANA OLIVER
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41714&ypos='+window.scrollY">
    Nov 14 19 - Dec 31 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41714&ypos='+window.scrollY">
    JoAnne Artman Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190724_051042AM_50932018.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42098&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42098&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42098&ypos='+window.scrollY">
    Angela A'Court
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42098&ypos='+window.scrollY">
    Nov 14 19 - Dec 31 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=42098&ypos='+window.scrollY">
    Susan Eley Fine Art
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190906_031023PM_21934171.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41724&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41724&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41724&ypos='+window.scrollY">
    Julio Valdez : Water Abstractions
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41724&ypos='+window.scrollY">
    Nov 15 19 - Dec 31 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41724&ypos='+window.scrollY">
    June Kelly Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190829_090711AM_55671882.jpeg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41662&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41662&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41662&ypos='+window.scrollY">
    Jessica Lange : Highway 61
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41662&ypos='+window.scrollY">
    Nov 20 19 - Jan 18 20
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41662&ypos='+window.scrollY">
    Howard Greenberg Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190809_060026PM_96919030.JPG" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41964&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41964&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41964&ypos='+window.scrollY">
    Hunter Reynolds : From Drag to Dervish
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41964&ypos='+window.scrollY">
    Nov 21 19 - Dec 21 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41964&ypos='+window.scrollY">
    PPOW Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190902_105800AM_30651105.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41901&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41901&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41901&ypos='+window.scrollY">
    Julia Eisen-Lester '' Urban Tides'
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41901&ypos='+window.scrollY">
    Nov 26 19 - Dec 14 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41901&ypos='+window.scrollY">
    Noho M55 Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190816_095654AM_42088968.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41475&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41475&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41475&ypos='+window.scrollY">
    Maja Ruznic : Ukazanje
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41475&ypos='+window.scrollY">
    Dec 13 19 - Jan 26 20
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41475&ypos='+window.scrollY">
    Denny Dimin Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190902_110033AM_73539386.png" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41901&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41901&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41901&ypos='+window.scrollY">
    Made in Japan, JCAT
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41901&ypos='+window.scrollY">
    Dec 17 19 - Dec 28 19
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41901&ypos='+window.scrollY">
    Noho M55 Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190821_034340PM_17361368.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43172&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43172&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43172&ypos='+window.scrollY">
    Keith Sonnier
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43172&ypos='+window.scrollY">
    Dec 21 19 - Jan 11 20
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=43172&ypos='+window.scrollY">
    Kasmin Gallery - 509 West 27th Street
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190902_110145AM_96293264.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41901&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41901&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41901&ypos='+window.scrollY">
    2020
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41901&ypos='+window.scrollY">
    Jan 07 20 - Jan 25 20
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41901&ypos='+window.scrollY">
    Noho M55 Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190726_090317AM_49163211.jpeg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41268&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41268&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41268&ypos='+window.scrollY">
    Luis Camnitzer
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41268&ypos='+window.scrollY">
    Jan 09 20 - Feb 15 20
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41268&ypos='+window.scrollY">
    Alexander Gray Associates
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190822_124630PM_43859074.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41757&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41757&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41757&ypos='+window.scrollY">
    Mark Tambella : New Paintings
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41757&ypos='+window.scrollY">
    Jan 09 20 - Feb 02 20
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41757&ypos='+window.scrollY">
    La MaMa Galleria
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190725_020609PM_65768297.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41290&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41290&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41290&ypos='+window.scrollY">
    Souls Grown Diaspora
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41290&ypos='+window.scrollY">
    Jan 11 20 - Mar 07 20
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41290&ypos='+window.scrollY">
    apexart - New York
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190720_101523AM_31969971.png" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41894&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41894&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41894&ypos='+window.scrollY">
    Taking Shape: Abstraction from the Arab World, 1950s–1980s
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41894&ypos='+window.scrollY">
    Jan 14 20 - Apr 04 20
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41894&ypos='+window.scrollY">
    New York University - Grey Art Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190831_124649PM_98168549.jpeg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41714&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41714&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41714&ypos='+window.scrollY">
    Beyond the Stars
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41714&ypos='+window.scrollY">
    Feb 13 20 - Mar 28 20
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41714&ypos='+window.scrollY">
    JoAnne Artman Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190724_040721AM_88329190.png" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41329&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41329&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41329&ypos='+window.scrollY">
    Eileen Gray : Perpetual Movement
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41329&ypos='+window.scrollY">
    Feb 28 20 - Jul 10 20
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41329&ypos='+window.scrollY">
    Bard Graduate Center Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190720_101801AM_8175051.png" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41894&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41894&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41894&ypos='+window.scrollY">
    Anne Brigman: A Visionary in Modern Photography
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41894&ypos='+window.scrollY">
    Apr 21 20 - Jul 11 20
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41894&ypos='+window.scrollY">
    New York University - Grey Art Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190725_021432PM_40133495.jpg" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41290&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41290&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41290&ypos='+window.scrollY">
    Meteorological Mobilities
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41290&ypos='+window.scrollY">
    May 28 20 - Aug 01 20
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41290&ypos='+window.scrollY">
    apexart - New York
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    

    <Tr valign="top">
    <Td width="90">
    
    
    <img src="https://expoartist.org/userimages/thumb_20190724_041008AM_8069468.png" width="80" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41329&ypos='+window.scrollY" style="cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41329&ypos='+window.scrollY">
    </Td>
    <td>
    <div style="font-size:1.3em; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41329&ypos='+window.scrollY">
    Majolica Mania : Transatlantic Pottery in England and the United States, 1850–1915
    </div>
    <div style="font-size:.9em; line-height:1.5em; color:red; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41329&ypos='+window.scrollY">
    Sep 25 20 - Jan 03 21
    </div>
    <div style="font-size:1em; font-weight:bold; cursor:pointer" onclick="window.location.href='profile.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41329&ypos='+window.scrollY">
    Bard Graduate Center Gallery
    </div>
    </td>
    </Tr>
    <tr><Td colspan="2"><div style="border-bottom:1px solid #eee; height:5px; margin-bottom:5px; cursor:pointer"></div></Td></tr>
    
    </Table>



</div>
`