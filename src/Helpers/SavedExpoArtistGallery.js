export const expoArtistGalleryRawHtml = `




<title>Acquavella Galleries - ExpoArtist.org</title>
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
	
	var url = 'events.cfm?mode=1&divid=2&guests=10&eventsort=3&profileid=41253&&keyword='+encodeURIComponent(el.value);
	 
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

  <div onClick="window.location.href='events.cfm?mode=1&divid=2&guests=10&eventsort=3&ypos=0';" style=" cursor: pointer; color: #d51a8a; display:inline-block; width:36.5%"> &nbsp; &#10094; New York</div>
  
  <div align="center" style="color: black; display:inline-block; width:25%; font-weight:bold; ">Gallery</div>
  
  
  </div>
  
  
  </div>





<style>td{border:0px; margin:0px; padding:0px}</style>








<div style="height:50px"></div>






    
    

























<div style="padding-left:10px">


<font style="font-size:1.6em">Acquavella Galleries</font><br>
<font style="font-size:1.2em; line-height:1.3em; color:gray">18 E 79th St New York<br>
212-734-6300<br>
Monday -  Saturday: 10 am - 5 pm
</font>



<div style="height:10px"></div>


<div>




	
    <a href="tel:212-734-6300"><img src="https://expoartist.org/img/profileiconphone.png" width="50"></a>
    
    
    
    <a href="https://maps.google.com?daddr=18 E 79th St+New York" target="_blank"><img src="https://expoartist.org/img/profileiconmap.png" width="50"></a>





<a href="http://www.acquavellagalleries.com/" target="_blank"><img src="https://expoartist.org/img/profileiconweb.png" width="50"></a>

</div>





<a href="https://instagram.com/acquavellagalleries/" target="_blank"><img src="../socialmediaicons/instagram.png" width="48"></a>




<a href="https://www.facebook.com/pages/Acquavella-Galleries-Inc/105472136186727" target="_blank"><img src="../socialmediaicons/facebook.png" width="48"></a>







<a href="https://twitter.com/acquavellaart" target="_blank"><img src="../socialmediaicons/twitter.png" width="48"></a>









</div>













<div style="height:15px"></div>


    
    


        <div style="font-size:1.2em; line-height:1.5em">
        
        <div style="margin-left:10px; margin-right:10px">
        <strong style="font-size:1.2em; line-height:1.1em">Wang Yan Cheng</strong>
        
        <div style="color:#E51965; font-weight:bold">
        Sep 10 - Oct 18 2019
        
        
         - 38 days left
        
        </div>
         
        
        <div> Wang Yan Cheng has developed a deep understanding of painting in terms of structure, color and technique. In recent years he has frequently gone beyond the “abstract.” Opening Reception: Tue, Sep 10, 6-8pm.</div> 
        
        
        </div>
        
        
        
        
        
         
        
        <img border="0" style="margin-top:10px" src="../userimages/20190822_015206PM_56182245.jpeg" class="u-max-full-width">
        <div style="height:30px"></div> 
        </div>
    



`