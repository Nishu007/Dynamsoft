//
// Dynamsoft JavaScript Library for Basic Initiation of Dynamic Web TWAIN
// More info on DWT: http://www.dynamsoft.com/Products/WebTWAIN_Overview.aspx
//
// Copyright 2018, Dynamsoft Corporation 
// Author: Dynamsoft Team
// Version: 13.4
//
/// <reference path="dynamsoft.webtwain.initiate.js" />
var Dynamsoft = Dynamsoft || { WebTwainEnv: {} };

Dynamsoft.WebTwainEnv.AutoLoad = true;
///
Dynamsoft.WebTwainEnv.Containers = [{ContainerId:'dwtcontrolContainer', Width:270, Height:350}];

/// If you need to use multiple keys on the same server, you can combine keys and write like this 
/// Dynamsoft.WebTwainEnv.ProductKey = 'key1;key2;key3';
Dynamsoft.WebTwainEnv.ProductKey = 'FEFCC8E98490D7E5B02BC002BD65F84CF9016980AC9C26CAD49EF20342090291CBA3262AD0EF0BF576EA97385D9378455EBA9FC657F85129BC7AB8E9E8E61AA36597FDBF2744C635683BB17069B8B432999232E26837C9083C94DAECA452A666D687337AD88B4262518E1C2B27AEA13FEA26B9C154C1C0A2E09432F473E8A8646561B9F0F3E4419BCEEE2107695E5C440D15680223539581B3B6957DA43E7D82D449453726885BC858F2F1B6A20859CF;t00886QAAACcgdoInfVf5byTMovi/f0GAsoVWz37+EunuXdTTTv4P9SdFoW93DFP2Q0BRbFBpSwVTv2w8r0waRDiosYypU8dFPo39MHWEnGQZuZGfFKo9SnIuew==';
///
Dynamsoft.WebTwainEnv.Trial = true;
///
Dynamsoft.WebTwainEnv.ActiveXInstallWithCAB = false;
///
Dynamsoft.WebTwainEnv.IfUpdateService = false;


(function(){
    var p = document.location.protocol;
    if (p !== 'https:' && p !== 'http:')
		Dynamsoft.WebTwainEnv.ResourcesPath = 'https://demo.dynamsoft.com/DWT/Resources';
})();


/// All callbacks are defined in the dynamsoft.webtwain.install.js file, you can customize them.

// Dynamsoft.WebTwainEnv.RegisterEvent('OnWebTwainReady', function(){
// 		// webtwain has been inited
// });

