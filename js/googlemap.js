// JavaScript Document
	var map,eps,autoGeoCode;
	onLoad();
	function onLoad()
	{
		map = new GMap2(document.getElementById("map"));
		map.setCenter(new GLatLng(31.21058088360432,121.68899059295654),13,G_SATELLITE_MAP);
	window.setTimeout(function() {
  map.panTo(new GLatLng(31.21058088360432,121.68899059295654),13);
}, 200000);
map.openInfoWindowHtml(map.getCenter(),
                   "<img src='http://www.verticalrollermills.biz/img/googlemaplogo.gif' style='float:none' /><p>SHIBANG Company</p><p>Tel:86-21-58386189,58386176 </p><p><a href='http://www.verticalrollermills.biz'>www.verticalrollermills.biz</a></p>");
map.addControl(new GOverviewMapControl());
map.addControl(new GLargeMapControl());
map.setMapType(G_NORMAL_MAP);
htmlControl=new K_HtmlControl("<div style='padding:3;background-color:white;border:solid 1 black;cursor:hand;'>http://www.verticalrollermills.biz</div>");
	map.addControl(htmlControl);
	GEvent.addListener(htmlControl,"click",function(){self.location="http://www.verticalrollermills.biz/";});

		autoGeoCode=new K_MSOPGeoCodeSrv(SetGeoCodeInfo);
		GEvent.addListener(map,"moveend",function(){autoGeoCode.GetGeoCode(map.getCenter());});
		autoGeoCode.GetGeoCode(map.getCenter());
		
		
	}
	function SetGeoCodeInfo(geoCode)
	{
		if(geoCode.status==2)
			document.getElementById("Info").innerHTML=geoCode.result;
	}
