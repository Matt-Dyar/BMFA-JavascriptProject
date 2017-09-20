/* Javascript Map for Bind Truck Apparatus Type to respective public image path. */
var FT_truckTypeImageUrl = {
	'FooterBellImg':'https://brindlee--c.na78.content.force.com/servlet/servlet.ImageServer?id=0151N000003fIoK&oid=00Do0000000JLLE&lastMod=1499264854000',
	'Default' : 'https://c.na78.content.force.com/servlet/servlet.ImageServer?id=0151N000003exvn&oid=00Do0000000JLLE&lastMod=1497451382000',
	'All Used Trucks' : 'https://c.na78.content.force.com/servlet/servlet.ImageServer?id=0151N000002Wht1&oid=00Do0000000JLLE&lastMod=1495568542000',
	'Rescue Pumpers and Engines' : 'https://c.na78.content.force.com/servlet/servlet.ImageServer?id=0151N000002Whtz&oid=00Do0000000JLLE&lastMod=1495568876000',
	'Used Rescue Trucks and Squads' : 'https://c.na78.content.force.com/servlet/servlet.ImageServer?id=0151N000002WhuY&oid=00Do0000000JLLE&lastMod=1495568998000',
	'Used Aerials, Ladder Trucks and Quints' : 'https://c.na78.content.force.com/servlet/servlet.ImageServer?id=0151N000002Whu9&oid=00Do0000000JLLE&lastMod=1495568916000',
	'Used Tankers and Tenders' : 'https://c.na78.content.force.com/servlet/servlet.ImageServer?id=0151N000002Whud&oid=00Do0000000JLLE&lastMod=1495569016000',
	'Ambulances and Transport Units' : 'https://c.na78.content.force.com/servlet/servlet.ImageServer?id=0151N000002WhtL&oid=00Do0000000JLLE&lastMod=1495568688000',
	'Used Brush Trucks, Quick Attacks & Minis' : 'https://c.na78.content.force.com/servlet/servlet.ImageServer?id=0151N000002WhuO&oid=00Do0000000JLLE&lastMod=1495568956000',
	'Used ARFF and Airport Crash Trucks' : 'https://c.na78.content.force.com/servlet/servlet.ImageServer?id=0151N000002WhuE&oid=00Do0000000JLLE&lastMod=1495568936000',
	'Towers and Platforms' : 'https://c.na78.content.force.com/servlet/servlet.ImageServer?id=0151N000002Whtl&oid=00Do0000000JLLE&lastMod=1495568896000',
	'Command Units' : 'https://c.na78.content.force.com/servlet/servlet.ImageServer?id=0151N000002WhtQ&oid=00Do0000000JLLE&lastMod=1495568717000',
	'Loose and Miscellaneous Equipment' : 'https://c.na78.content.force.com/servlet/servlet.ImageServer?id=0151N000002Whtp&oid=00Do0000000JLLE&lastMod=1495568834000',
	'European Style Units' : 'https://c.na78.content.force.com/servlet/servlet.ImageServer?id=0151N000002Whtf&oid=00Do0000000JLLE&lastMod=1495568815000',
	'Pacific Rim Style Fire Apparatus' : 'https://c.na78.content.force.com/servlet/servlet.ImageServer?id=0151N000002Whtu&oid=00Do0000000JLLE&lastMod=1495568856000',
	'Vocational Trucks' : 'https://c.na78.content.force.com/servlet/servlet.ImageServer?id=0151N000002Whun&oid=00Do0000000JLLE&lastMod=1495569042000',
	'Used Pumpers and Engines' : 'https://c.na78.content.force.com/servlet/servlet.ImageServer?id=0151N000002WhuT&oid=00Do0000000JLLE&lastMod=1495568974000',
	'Demoand Refurb Units' : 'https://c.na78.content.force.com/servlet/servlet.ImageServer?id=0151N000002Whta&oid=00Do0000000JLLE&lastMod=1495568791000',
};

/* Javascript Map for Bind Truck Details(HTML) Abstract content dynamically with respective field data of truck. */
var FT_GlobalFieldToStrHTML = {
	VF_Main_Title__c : '<h1 class="FT_title">{0}</h1><br/>',
	VF_Website_Price__c : '<h2 class="FT_heading" style="color:{0}">{1} - click <a href="javascript:void(0)" onclick="{2}">here</a> to inquire about this truck</h2>',
	Cloud_Documents__r : ''
}

/* Javascript Map for Bind Truck Mini-Details(HTML) Top content dynamically with respective field data of truck. */
var FT_MiniDetailFieldToStrHTML = {
	VF_Main_Title__c : '<div class="FT_redTxt" style="color:{0}">{1}</div>',
	Description : '<div class="FT_gryTxt">{0}</div>'	
}

/* Javascript Map for Bind Truck Mini-Details(HTML) bottom content dynamically with respective field data of truck. */
var FT_MiniDetailBottomFieldsToStrHTML = {
	VF_Additional_Pricing_Text__c : '<div>{0}</div>',
	VF_Website_Price__c : '<div class="FT_blackCost">{0}</div>'
}

// this Map values changes as per Dealer website theam.
var FT_ThemeProperties = {
	background : '',
	color : ''
}

// this Map value will set as per URL parametrs value.
var FT_URLParam = {
	stockno : '',
	category : ''
}

/* Javascript Map for Bind Truck Details(HTML) Tab content dynamically with respective field data of truck. */
var FT_DetailFieldToStrHTML = {
	'Stock_Number__c' : '<div class="FT_redTxt FT_bigTxt" style="color:{0}">Stock # {1}</div>',
	'Description' : '{0}<br/>',
	'VF_Main_Title__c' : '<div>{0}</div>',
	'VF_Chassis__c' : '{0}<br/>',
	'VF_Seating__c' : '{0}<br/>',
	'Fire_Truck__r.Additional_Chassis_Info__c' : '{0}<br/>',
	'Fire_Truck__r.Additional_Fire_Body_Info__c' : '{0}<br/>',
	'VF_Engine__c' : '{0}<br/>',
	'VF_Transmission_Description__c' : '{0}<br/>',
	'VF_Engine_Brake__c' : '{0}<br/>',
	'Fire_Truck__r.Additional_Engine_Info__c' : '{0}<br/>',
	'VF_Pump__c' : '{0}<br/>',
	'VF_Current_Annual_Pump_Service_Test__c' : '{0}<br/>',
	'VF_Water_Tank__c' : '{0}<br/>',
	'VF_Foam_System__c' : '{0}<br/>',
	'VF_Foam_Tank_1__c' : '{0}<br/>',
	'VF_Foam_Tank_2__c' : '{0}<br/>',
	'Fire_Truck__r.Additional_Pump_Info__c' : '{0}<br/>',
	'VF_Drivers_Side_Discharges__c' : '{0}<br/>',
	'VF_Drivers_Side_Suction__c' : '{0}<br/>',
	'VF_Officers_Side_Discharges__c' : '{0}<br/>',
	'VF_Officers_Side_Suction__c' : '{0}<br/>',
	'VF_Front_Discharges__c' : '{0}<br/>',
	'VF_Front_Suction__c' : '{0}<br/>',
	'VF_Rear_Discharges__c' : '{0}<br/>',
	'VF_Rear_Suction__c' : '{0}<br/>',
	'FT_Deck_Gun__c' : '{0}<br/>',
	'Fire_Truck__r.Additional_Plumbing_Info__c' : '{0}<br/>',
	'VF_Booster_Reel__c' : '{0}<br/>',
	'VF_Crosslays_Speedlays__c' : '{0}<br/>',
	'VF_Monitor_Description__c' : '{0}<br/>',
	'VF_Generator_Description__c' : '{0}<br/>',
	'VF_Lighting_Description__c' : '{0}<br/>',
	'VF_Heated_Mirrors__c' : '{0}<br/>',
	'VF_Hard_Suction__c' : '{0}<br/>',
	'VF_Electric_Reels__c' : '{0}<br/>',
	'VF_Hydraulic_Reels__c' : '{0}<br/>',
	'VF_Air_Reels__c' : '{0}<br/>',
	'VF_Electronic_Siren__c' : '{0}<br/>',
	'Fire_Truck__r.Additional_Electrical_Info__c' : '{0}<br/>',
	'VF_Cascade_System__c' : '{0}<br/>',
	'VF_Breathing_Air__c' : '{0}<br/>',			
	'VF_Air_Conditioning__c' : '{0}<br/>',
	'VF_Hydraulic_Ladder_Rack__c' : '{0}<br/>',
	'VF_Aluminum_Hose_Bed_Cover__c' : '{0}<br/>',
	'VF_Automatic_Tire_Chains__c' : '{0}<br/>',
	'VF_Pump_Heat_Pan__c' : '{0}<br/>',
	'VF_Backup_Camera__c' : '{0}<br/>',
	'VF_Federal_Q2B_Siren__c' : '{0}<br/>',
	'FT_Ground_Ladders__c' : '{0}<br/>',
	'VF_Auto_Lube_System__c' : '{0}<br/>',
	'Fire_Truck__r.Additional_Features__c' : '{0}<br/>',
	'VF_Pump_Hours__c' : '{0}<br/>',
	'VF_Engine_Hours__c' : '{0}<br/>',
	'VF_Arrowstick_Traffic_Indicator__c' : '{0}<br/>',
	'VF_LED_Lighting__c' : '{0}<br/>',
	'VF_Light_Tower__c' : '{0}<br/>',
	'VF_Telescoping_Lights__c' : '{0}<br/>',
	'Fire_Truck__r.Additional_Lighting_Info__c' : '{0}<br/>',
	'VF_Current_Aerial_Certification__c' : '{0}<br/>',
	'Fire_Truck__r.Aerial_Info__c' : '{0}<br/>',
	'FT_Aerial_Hours__c' : '{0}<br/>',
	'VF_Mileage__c' : '{0}<br/>',
	'Loose_Equipment_Included__c' : '{0}<br/>',
	'VF_Break_Text_1__c' : '{0}<br/>',
	'VF_OAL__c' : '{0}<br/>',
	'VF_OAH__c' : '{0}<br/>',
	'VF_OAW__c' : '{0}<br/>',
	'VF_GVRW__c' : '{0}<br/>',
	'VF_Wheelbase__c' : '{0}<br/>',
	'Additional_Dimension_Info__c' : '{0}<br/>'
};

/* Javascript global variable for Bind footer element on page. */
var FT_PageFooterStrHTML = '<div class="FT_footer" style="background:{0}">' +
						   '	<img src="'+FT_truckTypeImageUrl['FooterBellImg']+'" class="FT_imgfL"/>'+
						   '	<img src="'+FT_truckTypeImageUrl['FooterBellImg']+'" class="FT_imgfR"/>'+
						   '	<h5 style="color:{1}" class="FT_footerHead">Selling A Used Fire Truck?</h5>' +
						   '	<a href="javascript:void(0)" onclick="showSellModal()" style="color:{2}" target="_blank">Click Here For More Information </a>' +
						   '</div>';
var FT_LoaderHtml = '<div class="FT_container FT_loaderContainer"><div class="bgBlack FT_loader" id="FT_loader"><div class="whtieBg"><div class="loader" style="border-top: 4px solid {0}"></div></div><p class="FT_loaderText">We are finding your fire truck</p></div></div>';

/* Javascript variables contains CSS class in string format to for add to page. */
var FT_DynamicTabCSS = 'li.FT_active a, li.FT_active a:hover { background: {0}; color: {1}; }'
var FT_DynamicNxtBtnCSS = 'a.FT_swiperBtn.FT_nextBtn:before { content: ""; border: solid {0}; border-width: 0 3px 3px 0; position: absolute; border-radius: 3px; left: 10px;';
var FT_DynamicPrvBtnCSS = 'a.FT_swiperBtn.FT_prevBtn:before { content: ""; border: solid {0}; border-width: 0 3px 3px 0; position: absolute; border-radius: 3px; left: 10px;';

var FT_BMFA_TruckContainer;
var FT_lastCategorySelected;
var FT_lastTruckSelected;
var FT_isLocalStorageSupport = (typeof(Storage) !== "undefined");
var FT_defaultTruckImageKey = 'Default';
var FT_tab1Id = 'descriptionTab';
var FT_tab2Id = 'inquiryTab';
var FT_tab3Id = 'shareLinkTab';
var FT_emailRegex =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var FT_phoneRegex =  /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
var FT_currencyRegex = /[\$]?([0-9,])*[\.][0-9]{2}/;
var FT_DealerAccointId = ''; // this value changes as per Dealer.
var FT_TruckId;
var isSandbox = false;

var navigatedFromCategories = false;
var swiperLargeImageList = [];
var isDisplayTruckPricing = true;
var FT_truckTypeMap;
/* A javascript Class Module for API requests. */
var FT_WebRequestHandler = {
	getWebRequestInstance : function() {
		var xhttp = null;
		if ( window.XMLHttpRequest ) {
			// code for modern browsers
			xhttp = new XMLHttpRequest();
		} else if( window.ActiveXObject ) {
			// code for old IE browsers
			xhttp = new ActiveXObject("Microsoft.XMLHTTP");
		} else {
			console.log('Your Browser Does Not Support Web-Request!');
			return xhttp;
		}
		return xhttp;
	},			
	getRequest : function(callback) {
		xhttp = this.getWebRequestInstance();
		if(xhttp) {
			xhttp.open("GET", "https://www.firetruckapi.com/api/services?accountId=" + FT_DealerAccointId + "&isSandbox="+isSandbox, true);
			xhttp.setRequestHeader("Authorization", "Basic ZnNtLWFkbWluOjhlZDMxMmM4NTE0ZDRhMDI3OWFjOTBjNTQxOGEwOGQ5");
			xhttp.send();
			xhttp.onreadystatechange = function() {
				callback(this);
			};
		}
	},			
	postRequest : function(payload, callback) {
		xhttp = this.getWebRequestInstance();
		if(xhttp) {
			xhttp.open("POST", "https://www.firetruckapi.com/api/services?isSandbox="+isSandbox, true);
			xhttp.setRequestHeader("Authorization", "Basic ZnNtLWFkbWluOjhlZDMxMmM4NTE0ZDRhMDI3OWFjOTBjNTQxOGEwOGQ5");
			xhttp.send(payload);
			xhttp.onreadystatechange = function() {
				callback(this);
			};
		}
	},
	postRequestCustom : function(payload, url, callback) {
		xhttp = this.getWebRequestInstance();
		if(xhttp) {
			xhttp.open("POST", url , true);
			xhttp.setRequestHeader("Authorization", "Basic ZnNtLWFkbWluOjhlZDMxMmM4NTE0ZDRhMDI3OWFjOTBjNTQxOGEwOGQ5");
			xhttp.send(payload);
			xhttp.onreadystatechange = function() {
				callback(this);
			};
		}
	}
}
/* Check if indexedDb is supported by browser 
* if yes then create db and objectStore for caching the data */
var FT_idbSupported = false;
var FT_idxDb;
var FT_isIndexedDbCreated = false;
var FT_loadCachedTruckData = function() {
	var accountId = document.getElementById('dealerTruckContainerId').getAttribute('accountId');
	//create accountId specific detabases so that cache can maintained per account
	var dbName = (accountId) ? "FT_trucksDb_"+accountId : "FT_trucksDb"; 
	var openRequest = indexedDB.open(dbName);	 
    openRequest.onupgradeneeded = function(e) {
        var thisDB = e.target.result;	 
        if(!thisDB.objectStoreNames.contains("FT_trucks")) {
            thisDB.createObjectStore("FT_trucks");
        }	 
    }	 
    openRequest.onsuccess = function(e) {
        //console.log("Success in cache db creation!");
        FT_idxDb = e.target.result;
        FT_isIndexedDbCreated = true;
        /*Check if indexedDB FT_truckKey exists : if not fech data from server else from cache*/
        var transaction = FT_idxDb.transaction(["FT_trucks"],"readwrite");
        if( transaction ) {
			var objectStore = transaction.objectStore("FT_trucks");
	        if( objectStore ) {
				var req = objectStore.openCursor("FT_truckKey");
				req.onsuccess = function(e) {
					var cursor = e.target.result;
					if (cursor) { // key already exist
						/*if differnce between current time and time at which data is cached  
						is more than one hr then fech new data from server else use cached data*/
						var ob = objectStore.get("FT_dataSavedTime");
						if( ob ) {
			 				ob.onsuccess = function(e) {
			 					var dataSavedTimeStamp = e.target.result;
							 	var currentTimeStamp = FT_getCurrentTimeStamp();
							 	var timeDifference = currentTimeStamp - dataSavedTimeStamp;
							 	var hoursDifference = Math.floor(timeDifference/1000/60/60);
							 	/*var minutesDifference = Math.floor(timeDifference/1000/60);
							 	console.log('minutesDifference',minutesDifference);
							 	if( minutesDifference < 1 ) */
							 	if( hoursDifference < 1 ) 
							 		FT_loadCustomTruckData(true);
						    	else 	
						    		FT_loadCustomTruckData(false);	
							}
							ob.onerror = function(e) {
								FT_loadCustomTruckData(false);		
							}
						} else {
							FT_loadCustomTruckData(false);		
						}															
					} else { // key not exist
						FT_loadCustomTruckData(false);
					}
				}
				req.onerror = function(e) {
					FT_loadCustomTruckData(false);					
				}
			} else {
				FT_loadCustomTruckData(false);
			}  
		} else {
			FT_loadCustomTruckData(false);
		}    
    }	 
    openRequest.onerror = function(e) {
        console.log("Error: ", e);
        FT_loadCustomTruckData(false);
    }	 
}

/* A function for initialize FT_URLParam Map. */
var FT_GetURLParams = function() {
	for( var param in FT_URLParam) {
		var urlParam = FT_GetParam(window.location.search, param);
		//var urlParam = FT_GetParam(parent.document.location.search, param);
		FT_URLParam[param] = decodeURI( urlParam );
	}
}

/* A function for get url parameter's value by there name.
 * @Param urlSearch	: string url contains seach string only.
 * @Param param		: name of url parameter.
 */
var FT_GetParam = function( urlSearch, param) {
	var query = urlSearch.substring(1);
	var value = '';
	var vars = query.split("&");	
	for (var i=0; i<vars.length; i++) {
		var pair = vars[i].split("=");
		if (pair[0] == param) {
			value = pair[1];
			break;
		}
	}
	return value;
}

/* A function for add dynamic CSS application for variaous website themes. */
var FT_AddDynamicCSS = function() { 
	var DynamicCSSRow = [];
	DynamicCSSRow.push(FT_DynamicTabCSS.FT_format([FT_ThemeProperties.background, FT_ThemeProperties.color]));
	DynamicCSSRow.push(FT_DynamicNxtBtnCSS.FT_format([FT_ThemeProperties.background]));
	DynamicCSSRow.push(FT_DynamicPrvBtnCSS.FT_format([FT_ThemeProperties.background]));
	var isStylePresent = true;
	var style = document.getElementsByTagName('style')[0];
	if(!style) {
		isStylePresent = false;
		style = document.createElement('style');
	}
	DynamicCSSRow.forEach(function(dynamicCSS) {
		if (style.styleSheet) {
			style.styleSheet.cssText += dynamicCSS;
		} else {
			style.appendChild(document.createTextNode(dynamicCSS));
		}
	});
	if(!isStylePresent) {
		document.getElementsByTagName('head')[0].appendChild(style);		
	}
}

/* A function as entry point for all functionality. 
 * - A div having id 'dealerTruckContainerId', must be present on DOM.
 @isCached : boolean to get if data is catched or not
 */
var FT_loadTruckData = function() {
	/* Check if indexedDB is supported by browser */
	if("indexedDB" in window) {
		var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
		//console.log("ios: ",iOS);
		if( !iOS )
        	FT_idbSupported = true;
    }	
    if(FT_idbSupported) { //if indexedDB supported then use cached data
    	FT_loadCachedTruckData();      	
    } else { //if indexedDB not supported then fech data from server
		FT_loadCustomTruckData(false);
	}	
}
var FT_loadCustomTruckData = function(isCached) {
	FT_GetURLParams();
	FT_BMFA_TruckContainer = document.getElementById('dealerTruckContainerId');
	FT_DealerAccointId = FT_BMFA_TruckContainer.getAttribute('accountId');
	isSandbox = FT_BMFA_TruckContainer.getAttribute('isSandbox');
	var style = getComputedStyle(FT_BMFA_TruckContainer);
	FT_ThemeProperties.background = style.backgroundColor;
	FT_ThemeProperties.color = style.color;
	FT_BMFA_TruckContainer.innerHTML = FT_LoaderHtml.FT_format([FT_ThemeProperties.background]);
	FT_BMFA_TruckContainer.className = FT_BMFA_TruckContainer.className.replace('FT_ThemeContainer', '');
	FT_AddDynamicCSS();
	//if data is not cached then get it from server else use cached data
	if( !isCached )
		FT_WebRequestHandler.getRequest(FT_processTruckData);
	else
		FT_processCachedTruckData();
}

/* A function handle 'GET' response from request. 
 * @Param xhttp	: holding instance of XMLHttpRequest.
 */
var FT_processTruckData = function(xhttp) {
	if ( xhttp && xhttp.readyState == 4 && xhttp.status == 200 ) {
		try {
			var serverResponse = JSON.parse(xhttp.responseText);
			if(serverResponse.Success) {
				var truckData = JSON.parse(JSON.parse(serverResponse.Data));
				//console.log('truckData: ',truckData);
				var trucks = truckData.recordList;
				isDisplayTruckPricing = truckData.isDisplayTruckPricing;
				if(trucks.length) {
					FT_prepareTruckTypeMap(trucks).then(function() {
						if(FT_URLParam.category) {
							var div = document.createElement('div');
							FT_getBMFAStorage().then(function(truckTypeMap) {
								//store truckTypeMap in global variable for later use
								FT_truckTypeMap = truckTypeMap;
					   			div.setAttribute('category', (( FT_URLParam.category in truckTypeMap ) ? FT_URLParam.category : 'All Used Trucks' ));
								FT_expandCategory( div );
					   		}, function(error) {
					   			console.log("Error: ", error);
					   		});								
						} else {
							//added for history maintainance
							navigatedFromCategories = true;
							FT_getBMFAStorage().then(
								function(truckTypeMap) {
									//store truckTypeMap in global variable for later use
									FT_truckTypeMap = truckTypeMap;
									FT_displayCategories( truckTypeMap );
								},
								function(error) {
									console.log('Error: ',error)
								}
							);
						}
					}, function(error) {
						console.log("Error: ",error);
					});
				} else {
					
				}						
			} else {
				console.log('Server Error Message : ', serverResponse.Message);
			}
		} catch(exp) {
			console.log('Parsing Error Message : ', exp.message);
		}
	}
}

/* Function to process cached truck data */
var FT_processCachedTruckData = function() {
	if(FT_URLParam.category) {
		var div = document.createElement('div');
		FT_getBMFAStorage().then(function(truckTypeMap) {
			//store truckTypeMap in global variable for later use
			FT_truckTypeMap = truckTypeMap;
   			div.setAttribute('category', (( FT_URLParam.category in truckTypeMap ) ? FT_URLParam.category : 'All Used Trucks' ));
			FT_expandCategory( div );
   		}, function(error) {
   			console.log("Error: ", error);
   		});								
	} else {
		//added for history maintainance
		navigatedFromCategories = true;
		FT_getBMFAStorage().then(
			function(truckTypeMap) {
				//store truckTypeMap in global variable for later use
				FT_truckTypeMap = truckTypeMap;
				FT_displayCategories( truckTypeMap );
			},
			function(error) {
				console.log('Error: ',error)
			}
		);
	}
}

/* A function for add Footer element. 
 * @Param parent	: hold parent element where footer will be added.
 */
var FT_addPageFooter = function(parent) {
	var FooterStrHtml = FT_PageFooterStrHTML.FT_format([FT_ThemeProperties.background, FT_ThemeProperties.color, FT_ThemeProperties.color]);
	var div = document.createElement('div');
	div.innerHTML = FooterStrHtml;
	/* create a modal for sell form and append to footer */
    createSellModal(div);
	
	parent.appendChild(div);
}

/* A function store's and manipulate data. 
 * @Param trucks	: holding instance of list for all trucks(irrespective of categories).
 */
var FT_prepareTruckTypeMap = function(trucks) {
	var truckTypeMap = { 'All Used Trucks': [] };
	trucks.forEach(function(truck) {
		truckTypeMap['All Used Trucks'].push(truck);
		if(truck.apparatusType__c) {
			truck.apparatusType__c.split(';').forEach(function(apparatusType) {
				//var trimedKey = apparatusType.replace(/[^\w]/gi, '');
				var trimedKey = apparatusType;
				if(!truckTypeMap[trimedKey]) {
					truckTypeMap[trimedKey] = [];
				}
				truckTypeMap[trimedKey].push(truck);
			});
		}
	});
	/* Add response from server(truckdata) in indexed DB for caching */
	var promise = new Promise(function(resolve, reject) {
		var dbError = false;
		if( FT_idbSupported ) {
			if( FT_isIndexedDbCreated ) {
				var transaction = FT_idxDb.transaction(["FT_trucks"],"readwrite");
				if( transaction ) {
					var store = transaction.objectStore("FT_trucks");
					if( store ) {
						var request = store.put(truckTypeMap,'FT_truckKey');
						request.onerror = function(e) {
						    console.log("Error",e.target.error.name);
						    //if error occures store in window variable
						    window.truckTypeGlobalMap = truckTypeMap;
						    reject(e.target.error.name);
						}
						request.onsuccess = function(e) {
							resolve(true);
						    //console.log("DB entry done!! stored in DB");
						    //save the timestamp at which data is been cached
						   	var dataSavedTime = FT_getCurrentTimeStamp();
						   	store.put(dataSavedTime,'FT_dataSavedTime');
						   	store.put(isDisplayTruckPricing,'FT_isDisplayTruckPricing');						   	
						}
					} else 
						dbError = true;
				} else 
					dbError = true;
			} else 
				dbError = true;
		}
		if( !FT_idbSupported || dbError ) {
			//console.log("stored in window var");
			window.truckTypeGlobalMap = truckTypeMap;
			resolve(true);
		}
	});
	return promise;	
}

/* A function returns manipulated data either from localsorage or global variable. */
var dbFetchError = false;
var FT_getBMFAStorage = function() {
	/* Fetch data from indexedDB cache */
	var dbResults = {};
	var promise = new Promise(function(resolve, reject) {
		if( FT_idbSupported ) {
			if( FT_isIndexedDbCreated ) {
				var transaction = FT_idxDb.transaction(["FT_trucks"],"readwrite");
				if( transaction ) {
					var store = transaction.objectStore("FT_trucks");
					if( store ) {
						var ob = store.get("FT_truckKey");
						if( ob ) {
			 				ob.onsuccess = function(e) {
			 					dbResults = e.target.result;
							 	//get the key from db whether to display truck price or not
							 	var obj = store.get("FT_isDisplayTruckPricing");
								if( obj ) {
									obj.onsuccess = function(e) {
										isDisplayTruckPricing = e.target.result;
										resolve(dbResults);
									}
								}
							}
							ob.onerror = function(e) {
								//console.log("error in getting db key: ");
							 	reject("error in getting db key");
							}
						} else
						dbFetchError = true;
					} else
						dbFetchError = true;
				} else
					dbFetchError = true;
			} else
				dbFetchError = true;
		} else {
			resolve(window.truckTypeGlobalMap);
		}	  
		if( dbFetchError && window.truckTypeGlobalMap )
			resolve(window.truckTypeGlobalMap);
	});
	return promise;
}

/* Function to scroll window at position where truck container starts */
var FT_scrollTop = function() {
	setTimeout(function () {
        window.scrollTo(0, (FT_BMFA_TruckContainer.offsetTop-10));
        if( document.body.scrollTo )
			document.body.scrollTo(0, (FT_BMFA_TruckContainer.offsetTop-10));
    },2);	
}

/* A function for expand purticuler category. 
 * @Param element	: holding instance of category DOM-element that is currently selected by User.
 */
var FT_expandCategory = function(element) {
	var category = element.getAttribute('category');
	//add history
	if(history.state === null || (history.state !== null && history.state.page !== undefined && history.state.page != 'categoryDetail' )) {
		var currentUrl = window.location.href;
		//var currentUrl = parent.document.location.href;
		//if not truck detail page then add category detail page in history
		if(FT_GetParam(currentUrl, 'stockno') == '') {
			var historyUrl = FT_SetURLParam(currentUrl, 'category', element.getAttribute('category') );
			history.pushState({page:'categoryDetail',category:element.getAttribute('category') }, null, historyUrl);
		}
	}

	FT_lastCategorySelected = element;
	FT_clearContainerDom();
	
	var containerDiv = document.createElement('div');
	containerDiv.className = 'FT_container';

	FT_constructBackButton('To Categories');
	var titleDiv = document.createElement('div');
	titleDiv.className = 'FT_PageTitle';
	titleDiv.innerHTML = 'Shop Our '+ ((category === 'All Used Trucks' ) ? 'Used Fire Trucks' : category);
	
	containerDiv.appendChild(titleDiv);
	
	containerDiv.appendChild( FT_prepareImageContainer(false, FT_truckTypeMap[category], 'FT_truckList') );
	FT_BMFA_TruckContainer.appendChild(containerDiv);
	FT_addPageFooter(FT_BMFA_TruckContainer);
	FT_bindEvent('click', FT_prepareTruckDetails, FT_BMFA_TruckContainer.querySelectorAll('img'));
	FT_bindEvent('click', FT_prepareTruckDetails, FT_BMFA_TruckContainer.querySelectorAll('a.FT_redBtn'));
	
	
	if(FT_URLParam.stockno && !FT_lastTruckSelected) {
		var div = document.createElement('div');
		var truckId = FT_GetTruckIdByStockNo(FT_URLParam.stockno);
		div.setAttribute('truckId', truckId);
		if(truckId) {
			FT_prepareTruckDetails( div );
		}					
	}
	//call lazy load
	FT_setLazyLoad();
	/* Scroll to top at start of truck container div */
	FT_scrollTop();	 
}

/* A function for get truck id by it's stockno. 
 * @Param stockno	: holding truck stockno as a string.
 */
var FT_GetTruckIdByStockNo = function(stockno) {
	var truckId;
	FT_truckTypeMap['All Used Trucks'].forEach(function(truck) {
		if(truck['Stock_Number__c'] === stockno) {
			truckId = truck.Id;			
		}
	});
	return truckId;	
}

/* A function for display all possible categories. 
 * @Param truckTypeMap	: holding instance of list for all trucks respective to categories.
 */
var FT_displayCategories = function(truckTypeMap) {
	//add history
	if(history.state === null || (history.state !== null && history.state.page !== undefined && history.state.page != 'categoryListing' )) {
		history.pushState({page:'categoryListing'}, null, null);
	}

	FT_clearContainerDom();

	var containerDiv = document.createElement('div');
	containerDiv.className = 'FT_container';

	var titleDiv = document.createElement('div');
	titleDiv.className = 'FT_PageTitle';
	titleDiv.innerHTML = 'Shop Our Used Fire Trucks';

	containerDiv.appendChild(titleDiv);
	containerDiv.appendChild( FT_prepareImageContainer(true, truckTypeMap, 'FT_category') );
	FT_BMFA_TruckContainer.appendChild(containerDiv);
	FT_addPageFooter(FT_BMFA_TruckContainer);

	FT_bindEvent('click', FT_expandCategory, FT_BMFA_TruckContainer.querySelectorAll('img'));	
	/* Scroll to top at start of truck container div */
	FT_scrollTop();
}

/* A function bind click events on DOM elements. 
 * @Param callback	: holding a function that will class after click event occured.
 * @Param elements	: holding a list of elements that has to bind with click event.
 */
var FT_bindEvent = function(eventToBind, callback, elements) {
	for (var i = 0; i < elements.length; i++) {
		elements[i].addEventListener(eventToBind, function(event) {
			callback(event.target);
		});
	}
}

/* A function add back button to DOM. 
 * @Param toword	: holding string value that indicate where to go after back button clicked. 
 */
var FT_constructBackButton = function(toword) {
	var button = document.createElement('a');
	button.style.textAlign = "left";
	button.innerText = '« Return ' + toword;
	button.className='FT_backLink';
	button.setAttribute('jData', toword);
	FT_BMFA_TruckContainer.appendChild( button );
	FT_bindEvent('click', FT_doBack, [button]);
}

/* A function handles click event on back button. 
 * @Param button	: button DOM-element. 
 */		
var FT_doBack = function(button) {
	if(navigatedFromCategories)
		history.back();
	var toBackStr = button.getAttribute('jData');
	if(toBackStr === 'To Categories') {
		FT_displayCategories( FT_truckTypeMap );   				
	} else if(toBackStr === 'To Truck List') {
		FT_expandCategory(FT_lastCategorySelected);
	}
}

/* A function for display images in container.
 * @Param isForCategory	: A boolean used to indicate where container is for 
 *						  all category image fill or extended category image fill.
 * @Param truckDataList	: A Map/List of truckes for display images on DOM
 */
var FT_prepareImageContainer = function(isForCategory, truckDataList, UICclass) {
	TruckImageContainer = document.createElement('div');
	TruckImageContainer.className += 'FT_container';
	var ul = document.createElement('ul');
	ul.className = 'FT_listStyle ' + UICclass;
	for(var truck in truckDataList) {
		if(truckDataList[truck] || isForCategory) {
			var imgSrc = FT_truckTypeImageUrl[truck];
			var li = document.createElement('li');
			var div = document.createElement('div');
			var img = document.createElement('img');
			
			if(isForCategory) {
				var catDetailDiv = document.createElement('div');
				catDetailDiv.innerHTML = truck+ ' (' +truckDataList[truck].length+ ')';
				catDetailDiv.className = 'FT_redTxt';
				catDetailDiv.style.color = FT_ThemeProperties.background;
				
				img.setAttribute('category', truck);
				if(!imgSrc) {		
					console.log(truck);
				}
				div.appendChild(img);
				div.appendChild(catDetailDiv);
			} else {
				truck = truckDataList[truck];
				img.setAttribute('truckid', truck.Id); // Attribute to find truck(for Dev)
				if(truck.Cloud_Documents__r && truck.Cloud_Documents__r.records.length) {
					imgSrc = truck.Cloud_Documents__r.records[0].Amazon_S3_Image_URL__c; //Amazon_S3_Main_Thumbnail_URL__c
					//check if main image is set for truck and if set take minimized image to display on trucks listing page
					for( var k=0; k < truck.Cloud_Documents__r.records.length; k++ ) {
						if( truck.Cloud_Documents__r.records[k].Main_Image__c ) {
							imgSrc = truck.Cloud_Documents__r.records[k].Amazon_S3_Main_Thumbnail_URL__c;
							break;
						}
					}
				}
				//Add loading text for lazy loading
				var loadingSpan = document.createElement('span');
				loadingSpan.setAttribute('class','FT_loadingImage');
				loadingSpan.textContent = "Loading...";
				div.appendChild(loadingSpan);
	
				div.appendChild(img);
				var miniDetailDiv = document.createElement('div');
				var miniDetailHtml = '';
				for(var field in FT_MiniDetailFieldToStrHTML) {
					if(truck[field]) {
						if('VF_Main_Title__c' === field) {
							miniDetailHtml += FT_MiniDetailFieldToStrHTML[field].FT_format([FT_ThemeProperties.background, truck[field]]);
						} else {
							miniDetailHtml += FT_MiniDetailFieldToStrHTML[field].FT_format([truck[field]]);
						}
					}					
				}
				miniDetailHtml += '<div class="FT_btmDiv">';
				if( isDisplayTruckPricing ) {
					for(var field in FT_MiniDetailBottomFieldsToStrHTML) {
						if(truck[field]) {
							miniDetailHtml += FT_MiniDetailBottomFieldsToStrHTML[field].FT_format([truck[field]]);
						}					
					}
				} else {
					miniDetailHtml += '<span class="FT_PriceText">Call For Custom Quote</span>';
				}
				miniDetailHtml += '<a class="FT_redBtn" '+
								  '	  style="color:'+FT_ThemeProperties.color+'; background:'+FT_ThemeProperties.background+'; border:1px solid '+FT_ThemeProperties.background+'" truckid="'+truck.Id+'">'+
								  'View Details</a></div>';
				miniDetailDiv.innerHTML = miniDetailHtml;
				div.appendChild(miniDetailDiv);
			}
			/* Add lazy load class and data-src */
			var originalImgSrc = ((imgSrc) ? imgSrc : FT_truckTypeImageUrl[FT_defaultTruckImageKey]);
			if( !isForCategory ) {
				img.setAttribute('class', 'FT_lazy');
				img.setAttribute('data-src', originalImgSrc);
				img.style.opacity = "0";
			} else {
				img.src = originalImgSrc;
			}
			li.appendChild(div);
			ul.appendChild(li);
		}
	}	
	return TruckImageContainer.appendChild(ul);;
}

/* A function handles click event of other imgaes of same truck.
 * @Param element	: DOM-element holding image of same truck.
 */
var FT_ImgClickHandler = function(element) {
	var imgIndexClass = element.className.split(' ');
	var imgIndex = ((imgIndexClass[1]) ? parseInt(imgIndexClass[1].split('_')[1]) : 0);
	FT_openModal();
	FT_currentSlide(imgIndex+1);
}

/* Functions for modal slider at truck detail page */
var FT_slideIndex = 1;
var FT_plusSlides = function(element) {
	FT_showSlide(FT_slideIndex += 1);
}
var FT_minusSlides = function(element) {
	FT_showSlide(FT_slideIndex -= 1);
}

var FT_closeModal = function(element) {
	document.getElementById('FT_modal').style.display = "none";	
}

var FT_closeSellModal = function(element) {
	document.getElementById('FT_sellModal').style.display = "none";	
}

var FT_openModal = function() {
  document.getElementById('FT_modal').style.display = "block";
}
var FT_currentSlide = function(n) {
  FT_showSlide(FT_slideIndex = n);
}
var FT_showSlide = function(n) {
  var i;
  var FT_slides = document.getElementsByClassName("FT_slide");
  if (n > FT_slides.length) {FT_slideIndex = 1} 
  if (n < 1) {FT_slideIndex = FT_slides.length}
  for (i = 0; i < FT_slides.length; i++) {
      FT_slides[i].style.display = "none"; 
  }
  if( document.getElementsByClassName('FT_currentSlideTxt')[0] )
  	document.getElementsByClassName('FT_currentSlideTxt')[0].innerHTML = FT_slideIndex;
  FT_slides[FT_slideIndex-1].style.display = "block"; 
}

/* A function for add images for selected truck.
 * @Param ParentNode	: DOM-element inside which all truck images will be added.
 * @Param ImageList		: list of object holding images/image-paths.
 */
var FT_addTruckImages = function(ParentNode, ImageList) {
	var swiperContainer = document.createElement('div');
	swiperContainer.className = 'FT_swiperContainer FT_fR';
	var mainImg = document.createElement('img');
	mainImg.className = 'FT_TruckImg img_0';
	swiperContainer.appendChild(mainImg);
	ParentNode.appendChild(swiperContainer);
	
	var truckImageContainer = document.createElement('div');
	truckImageContainer.className = 'FT_fL FT_thumbnail';
	swiperLargeImageList = [];
	ImageList.forEach( function(doc, index) {
		var img = document.createElement('img');
		img.className = 'FT_TruckImg img_'+ index;
		//in left side load large images and at right side load small thumbnails
		var largeImage = (doc['Amazon_S3_Image_URL__c'] ? doc['Amazon_S3_Image_URL__c'] : '');
		var imgSrc = (doc['Amazon_S3_Image_Thumbnail_URL__c'] ? doc['Amazon_S3_Image_Thumbnail_URL__c'] : '');
		if(doc['Main_Image__c']) {
			mainImg.src = largeImage;
		}
		if(!imgSrc) {
			imgSrc = FT_truckTypeImageUrl[FT_defaultTruckImageKey];
		}
		img.src = imgSrc;
		//add corrosponding large image in swiper large image array
		if( !largeImage ) {
			largeImage = FT_truckTypeImageUrl[FT_defaultTruckImageKey];
		}
		swiperLargeImageList[index] = largeImage;
		truckImageContainer.appendChild(img);
	});
	if(!mainImg.src && ImageList.length) {
		mainImg.src = ImageList[0]['Amazon_S3_Image_URL__c'];		
	}
	ParentNode.appendChild(truckImageContainer);

	/* Create a swipper for images to show in their original sizes : opens on click of any thumbnail */
	var modalWrap = document.createElement('div');
	modalWrap.className = 'FT_modal';
	modalWrap.setAttribute('id','FT_modal');
	var modalContainer = document.createElement('div');
	modalContainer.className = 'FT_modalContent';
	var closeBtn = document.createElement('span');
	closeBtn.className = 'FT_modalClose cursor';
	closeBtn.appendChild(document.createTextNode("x"));
	var nextArrow = document.createElement('a');
	nextArrow.className = 'FT_nextArrow';
	var prevArrow = document.createElement('a');
	prevArrow.className = 'FT_prevArrow';
	var slideNumber = document.createElement('div');
	slideNumber.className = 'FT_slideNumber';
	var currentSlideText = document.createElement('span');
	currentSlideText.className = 'FT_currentSlideTxt';
	slideNumber.appendChild(document.createTextNode('Image '));
	slideNumber.appendChild(currentSlideText);
	var totalSlides = document.createElement('span');
	totalSlides.appendChild(document.createTextNode(' of '+swiperLargeImageList.length));
	slideNumber.appendChild(totalSlides);
	swiperLargeImageList.forEach( function(imgSrc, index) {
		var singleSlide = document.createElement('div');
		singleSlide.className = 'FT_slide FT_fade';
		var slideImage = document.createElement('img');
		slideImage.src = imgSrc;
		singleSlide.appendChild(slideImage);
		modalContainer.appendChild(singleSlide);
	});
	modalWrap.appendChild(closeBtn);
	modalWrap.appendChild(modalContainer);
	if( swiperLargeImageList.length > 1 ) {
		modalWrap.appendChild(prevArrow);
		modalWrap.appendChild(nextArrow);
		modalWrap.appendChild(slideNumber);
	}	
	ParentNode.appendChild(modalWrap);
}

/* Function to get height of main image of swipper and set it to thumbnails div */
var FT_setSwiperHeight = function() {
	if(document.getElementsByClassName('FT_fL FT_thumbnail').length > 0 && document.getElementsByClassName('FT_TruckImg img_0').length > 0 ) {
		var mainImage = document.getElementsByClassName('FT_TruckImg img_0')[0];
		var mainImgHeight = window.getComputedStyle(mainImage, null).getPropertyValue("height");
		document.getElementsByClassName('FT_fL FT_thumbnail')[0].style.maxHeight = mainImgHeight;
	}
}
window.addEventListener("resize", FT_setSwiperHeight);

/* A function handles click event on indivisual truck. 
 * @Param element	: DOM-element holding image of truck.
 */	
var FT_prepareTruckDetails = function(element) {
	FT_TruckId = element.getAttribute('truckid');
	var selectedTruck;
	var isFound = false;
	FT_truckTypeMap['All Used Trucks'].some( function(truck) {
		selectedTruck = truck;
		return (isFound = (truck.Id === FT_TruckId));
	});
	if(isFound) {
		//add history
		if(history.state === null || (history.state !== null && history.state.page !== undefined && history.state.page != 'truckDetail' )) {
			//add history only when navigated from categories page and not opened directly using share link of truck
			if(navigatedFromCategories) {
				var historyUrl = window.location.href;
				//var historyUrl = parent.document.location.href;
				var urlParams = {stockno: selectedTruck['Stock_Number__c'], category: FT_lastCategorySelected.getAttribute('category') }
				for(var param in urlParams) {
					historyUrl = FT_SetURLParam(historyUrl, param, urlParams[param] );
				}
				history.pushState({page:'truckDetail',category:FT_lastCategorySelected.getAttribute('category'), truck: FT_TruckId }, null, historyUrl);
			}
		}

		FT_URLParam.stockno = selectedTruck['Stock_Number__c'];
		var isValidCategory = ( FT_URLParam.category && (selectedTruck['apparatusType__c'].indexOf(FT_URLParam.category) > -1) );
		FT_URLParam.category = (isValidCategory ? FT_URLParam.category : FT_lastCategorySelected.getAttribute('category'));
		
		FT_lastTruckSelected = selectedTruck;
		FT_clearContainerDom();

		var containerDiv = document.createElement('div');
		containerDiv.className = 'FT_container';

		FT_constructBackButton('To Truck List');
		var truckContainer = document.createElement('div');
		truckContainer.setAttribute('truckId', FT_TruckId);
		truckContainer.align = "left";
		var truckPart1Container = document.createElement('div');
		var TruckDetailsHtml = '';
		for(var field in FT_GlobalFieldToStrHTML) {					
			var fieldVal = ((selectedTruck[field]) ? selectedTruck[field] : '');
			if(field === 'Cloud_Documents__r') {
				var tempImageContainer = document.createElement('div');
				truckImageContainer = document.createElement('div');				
				if(selectedTruck[field]) {
					var cloudDocs = selectedTruck[field].records;
					FT_addTruckImages(truckImageContainer, selectedTruck[field].records);
				} else {
					FT_addTruckImages(truckImageContainer, [{Main_Image__c:true, Amazon_S3_Main_Thumbnail_URL__c:FT_truckTypeImageUrl[FT_defaultTruckImageKey]}]);
				}
				tempImageContainer.appendChild(truckImageContainer);
				var clearFloatDiv = document.createElement('div');
				clearFloatDiv.className = 'FT_clr';
				tempImageContainer.appendChild(clearFloatDiv);
				TruckDetailsHtml += tempImageContainer.innerHTML;
			} else if(field === 'VF_Website_Price__c') {
				//var linkUrl = ((selectedTruck['Truck_Public_URL__c']) ? selectedTruck['Truck_Public_URL__c'] : '');
				var pricingText = fieldVal;
				if( !isDisplayTruckPricing ) pricingText = 'Call For Custom Quote';
				TruckDetailsHtml += FT_GlobalFieldToStrHTML[field].FT_format([FT_ThemeProperties.background, pricingText, 'document.getElementsByName(\''+FT_tab2Id+'\')[0].click()']);
			} else {
				TruckDetailsHtml += FT_GlobalFieldToStrHTML[field].FT_format([fieldVal]);
			}
		}
		truckPart1Container.innerHTML = TruckDetailsHtml;
		truckContainer.appendChild(truckPart1Container);
		containerDiv.appendChild(truckContainer);
		//FT_BMFA_TruckContainer.appendChild(truckContainer);
		var shareLinkDiv = document.createElement('div');
		shareLinkDiv.className += 'FT_copyLinkDiv';
		containerDiv.appendChild(shareLinkDiv);
		//FT_BMFA_TruckContainer.appendChild(shareLinkDiv);
		
		FT_BMFA_TruckContainer.appendChild(containerDiv);
		FT_bindEvent('click', FT_ImgClickHandler, FT_BMFA_TruckContainer.getElementsByClassName('FT_TruckImg'));
		/* modal slider events */
		FT_bindEvent('click', FT_plusSlides, FT_BMFA_TruckContainer.getElementsByClassName('FT_nextArrow'));
		FT_bindEvent('click', FT_minusSlides, FT_BMFA_TruckContainer.getElementsByClassName('FT_prevArrow'));
		FT_bindEvent('click', FT_closeModal, FT_BMFA_TruckContainer.getElementsByClassName('FT_modalClose'));	
		FT_displayTabs(truckContainer, selectedTruck);	
		/*set max height to thumbnails div similar to calculated height of main image*/
		var swiperMainImg = document.getElementsByClassName('FT_TruckImg img_0')[0];
		if( swiperMainImg )
			swiperMainImg.addEventListener("load",FT_setSwiperHeight);		
	}
	FT_addPageFooter(FT_BMFA_TruckContainer);
	/* Scroll to top at start of truck container div */
	FT_scrollTop();
		
}

/* This is the String format function. */
String.prototype.FT_format = function (args) {
	var str = this;
	return str.replace(String.prototype.FT_format.regex, function(item) {
		var intVal = parseInt(item.substring(1, item.length - 1));
		var replace;
		if (intVal >= 0) {
			replace = args[intVal];
		} else if (intVal === -1) {
			replace = "{";
		} else if (intVal === -2) {
			replace = "}";
		} else {
			replace = "";
		}
		return replace;
	});
};
String.prototype.FT_format.regex = new RegExp("{-?[0-9]+}", "g");

/* A function to diaply details of indivisual truck. 
 * @Param selectedTruck	: javascript object of selected Truck.
 */
var FT_displayTabs = function(parentNode, selectedTruck) {
	
	TruckDetailsContainer = document.createElement('div');
	TruckDetailsContainer.id = 'detailsTabId';
	TruckDetailsContainer.className += 'FT_tabs';
	
	var tabs = FT_createTabs(selectedTruck.Id);
	TruckDetailsContainer.appendChild( tabs );
	
	var contentDiv = document.createElement('div');
	contentDiv.className += 'FT_content';
	
	var tab1Div = document.createElement('div');	
	tab1Div.id = FT_tab1Id;
	tab1Div.className = 'FT_gryTxt';
	
	var truckDetailsHtml = '';
	for(var field in FT_DetailFieldToStrHTML) {
		var innerFieldVal = '';
		var innerMostField = '';
		field.split('.').some(function(innerField, index) {
			var innerObject = (!(index) ? selectedTruck : (innerObject) ? innerObject : '');
			innerFieldVal = ((innerObject[innerField]) ? innerObject[innerField] : null);
			innerMostField = innerField;
			return (innerFieldVal == null);
		});
		if(innerFieldVal) {
			if(innerMostField === 'Stock_Number__c') {
				truckDetailsHtml += FT_DetailFieldToStrHTML[field].FT_format([FT_ThemeProperties.background, innerFieldVal]);
			} else {
				truckDetailsHtml += FT_DetailFieldToStrHTML[field].FT_format([innerFieldVal]);
			}
		}
	}
	tab1Div.innerHTML = truckDetailsHtml;
	contentDiv.appendChild( tab1Div );	
	// Adding From for user interest(tab2).
	var tab2 = FT_addInetrestFrom();
	contentDiv.appendChild( tab2 );
	// Adding Share Link Tab(tab3).
	var tab3 = FT_addShareLinkTab();
	contentDiv.appendChild( tab3 );
	
	TruckDetailsContainer.appendChild( contentDiv );
	parentNode.appendChild( TruckDetailsContainer )
	FT_bindEvent('click', FT_tabClickHandling, tabs.getElementsByTagName('a'));
	FT_bindEvent('click', FT_CopyInnerText, tab3.getElementsByClassName('copyBtn'));
}
/* A function to create loader node */
var FT_createLoaderNode = function() {
	var loaderWrap = document.createElement('div');
	loaderWrap.className = 'FT_container FT_loaderContainer';
	var loaderBg = document.createElement('div');
	loaderBg.className = 'bgBlack FT_loader';
	loaderBg.setAttribute('id','FT_loader');
	var innerDiv = document.createElement('div');
	innerDiv.className = 'whtieBg';
	var loaderDiv = document.createElement('div');
	loaderDiv.className = 'loader';
	loaderDiv.setAttribute('style', 'border-top: 4px solid '+FT_ThemeProperties.background);
	innerDiv.appendChild(loaderDiv);
	loaderBg.appendChild(innerDiv);	
	loaderWrap.appendChild(loaderBg);
	return loaderWrap;
}
/* A function to add Intrest form to DOM. */
var FT_addInetrestFrom = function() {
	var fieldAndType = {
		'First Name':'input',
		'Last Name':'input',
		'Phone':'input',
		'Email':'input',
		'Purchase Timeframe':'select',
		//'Make An Offer':'div',
		'City':'input',
		'State':'select',
		'FD or Company': 'input',
		'Inquiry Message':'textarea'
	}
	
	var fieldToClasses = {
		'First Name':'FT_input FT_required',
		'Last Name':'FT_input FT_required',
		'Phone':'FT_input FT_required FT_phone',
		'Email':'FT_input FT_required FT_email',
		'Purchase Timeframe':'FT_input FT_required',
		//'Make An Offer':'',
		'City':'FT_input FT_required',
		'State':'FT_input FT_required',
		'FD or Company': 'FT_input FT_required',
		'Inquiry Message':'FT_input FT_required'
	}
	/* set initial values of form fields */
	var fieldToValues = {
		'First Name':'',
		'Last Name':'',
		'Phone':'',
		'Email':'',
		'Purchase Timeframe':' ',
		//'Make An Offer':'',
		'City':'',
		'State':' ',
		'FD or Company': '',
		'Inquiry Message':''
	}
	/* get form field values from cookie and if cookie is set then override it's values */
	var inquiryFormData = FT_getCookie("inquiryFormData");
	if( inquiryFormData != "" ) {
		var frmData = JSON.parse(inquiryFormData);
		if( frmData['FirstName'] ) fieldToValues['First Name'] = frmData['FirstName'];
		if( frmData['LastName'] ) fieldToValues['Last Name'] = frmData['LastName'];
		if( frmData['Phone'] ) fieldToValues['Phone'] = frmData['Phone'];
		if( frmData['Email'] ) fieldToValues['Email'] = frmData['Email'];
		if( frmData['PurchaseTimeframe'] ) fieldToValues['Purchase Timeframe'] = frmData['PurchaseTimeframe'];
		if( frmData['City'] ) fieldToValues['City'] = frmData['City'];
		if( frmData['State'] ) fieldToValues['State'] = frmData['State'];
		if( frmData['FDorCompany'] ) fieldToValues['FD or Company'] = frmData['FDorCompany'];
		if( frmData['InquiryMessage'] ) fieldToValues['Inquiry Message'] = frmData['InquiryMessage'];		
	}
	
	var PurchaseTimeframeOpt = ['', 'Less than 1 month', '1 month - 3 months', '6 months - 12 months', '12 months+'];
	//var StateOpt = ['', 'CA'];
	var StateOpt = ["", "AL", "AK", "AS", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FM", "FL", "GA", "GU", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MH", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "MP", "OH", "OK", "OR", "PW", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VI", "VA", "WA", "WV", "WI", "WY"];
	
	var tab2Div = document.createElement('div');
	tab2Div.id = FT_tab2Id;
	tab2Div.style.display = 'none';
	tab2Div.className = 'FT_gryTxt';
	
	var formTitleDiv = document.createElement('div');
	formTitleDiv.innerHTML = 'Contact us to learn more about this truck.';
	formTitleDiv.className = 'FT_formTitle';
	tab2Div.appendChild(formTitleDiv);
	var formWarpper = document.createElement('div');
	formWarpper.className = 'inquiryFrom';
	var messageContainerDiv = document.createElement('div');
	messageContainerDiv.id = 'messageContainerId';
	messageContainerDiv.classClass = 'FT_closeBtn';
	formWarpper.appendChild(messageContainerDiv);
	var index = 0;
	for(var fieldName in fieldAndType) {
		var inputContainer = document.createElement('div');
		inputContainer.className += ((index%2) ? 'FT_fL' : 'FT_fR');
		var dynamicDom = document.createElement(fieldAndType[fieldName]);
		dynamicDom.name = fieldName.replace(/\s/g,'');
		dynamicDom.className = fieldToClasses[fieldName];
		if(fieldName === 'Purchase Timeframe') {
			dynamicDom.className += ' FT_gryTxt FT_select';
			PurchaseTimeframeOpt.forEach(function(opt) {				
				var option = document.createElement('option');
				option.value = (opt) ? opt: ' ';
				option.innerHTML = (opt) ? opt: 'Timeframe';
				if(!opt) {
					option.disabled = true;
					option.selected = true;
				}
				dynamicDom.appendChild(option);
			});
			
			FT_bindEvent('change', removeFT_SelectClass, [dynamicDom]);
		} else if(fieldName === 'State') {
			dynamicDom.className += ' FT_gryTxt FT_select';
			StateOpt.forEach(function(opt) {
				var option = document.createElement('option');
				option.value = (opt) ? opt: ' ';
				option.innerHTML = (opt) ? opt : 'State';
				if(!opt) {
					option.disabled = true;
					option.selected = true;
				}
				dynamicDom.appendChild(option);
			});
			
			FT_bindEvent('change', removeFT_SelectClass, [dynamicDom]);
		} else {
			dynamicDom.placeholder = fieldName;			
			if(fieldName === 'Phone') {
				FT_bindEvent('keyup', FT_processNumberEntry, [dynamicDom]);
			} else if(fieldName === 'Inquiry Message') {
				inputContainer.className += 'FT_TextArea';
			}			
		}
		//populate value from cookie data (check conditions if radio/checkbox field is added in form)
		if( fieldAndType[fieldName] == 'input' || fieldAndType[fieldName] == 'select' || fieldAndType[fieldName] == 'textarea' )
			dynamicDom.value = fieldToValues[fieldName];
		inputContainer.appendChild(dynamicDom);
		formWarpper.appendChild(inputContainer);
		index++;
	}
	var submitButton = document.createElement('button');
	submitButton.type = 'button';
	submitButton.className = 'FT_submitBtn';
	submitButton.innerHTML = 'Submit Fire Truck Inquiry';
	formWarpper.appendChild(submitButton);
	tab2Div.appendChild(formWarpper);
	//append loader displayed when for is submitted
	var loaderDiv = FT_createLoaderNode();
	tab2Div.appendChild(loaderDiv);
	FT_bindEvent('click', FT_submitEnquiry, [submitButton]);
	return tab2Div;
}

/* A function to add share link tab to DOM. */
var FT_addShareLinkTab = function() {
	var tab3Div = document.createElement('div');
	tab3Div.id = FT_tab3Id;
	tab3Div.style.display = 'none';
	tab3Div.className = 'FT_gryTxt';
	
	var a = document.createElement('a');
	a.id = 'linkContainerId';
	a.innerHTML = window.location.href;
	//a.innerHTML = parent.document.location.href;
	for(var param in FT_URLParam) {
		a.innerHTML = FT_SetURLParam(a.innerHTML, param, FT_URLParam[param] );
	}
	a.innerHTML = decodeURI(a.innerHTML);
	//a.href = a.innerHTML;
	tab3Div.appendChild(a);
	
	var copyBtn = document.createElement('a');
	copyBtn.className += 'copyBtn';
	copyBtn.innerHTML = 'Copy';
	copyBtn.style.cursor = 'pointer';
	copyBtn.setAttribute('containerId', a.id);
	tab3Div.appendChild(copyBtn);
	
	return tab3Div;
}

/* A function for copy link text to clipboard.
 * @Param element	: DOM-element which's inner html will be copied.
 */
var FT_CopyInnerText = function(element) {
	var sel, range;
	var id = element.getAttribute('containerId');
	var el = document.getElementById(id); //get element id
	if (window.getSelection && document.createRange) { //Browser compatibility
		sel = window.getSelection();
		range = document.createRange(); //range object
		range.selectNodeContents(el); //sets Range
		sel.removeAllRanges(); //remove all ranges from selection
		sel.addRange(range);//add Range to a Selection.
		document.execCommand('copy');
	} else if (document.selection) { //older ie
		sel = document.selection.createRange();
		range = document.body.createTextRange();//Creates TextRange object
		range.moveToElementText(el);//sets Range
		range.select(); //make selection.
		document.execCommand('copy');
	}
}

/* A function for set URL parameter for being copied.
 * @Param url			: URL in string format which going to updated.
 * @Param paramName		: Holding URL Parameter Name which we want to set.
 * @Param paramValue	: Holding URL Parameter value which we want to set.
 */
var FT_SetURLParam = function(url, paramName, paramValue) {
    var hash = location.hash;
    url = url.replace(hash, '');
    if (url.indexOf(paramName + "=") >= 0)
    {
        var prefix = url.substring(0, url.indexOf(paramName));
        var suffix = url.substring(url.indexOf(paramName));
        suffix = suffix.substring(suffix.indexOf("=") + 1);
        suffix = (suffix.indexOf("&") >= 0) ? suffix.substring(suffix.indexOf("&")) : "";
        url = prefix + paramName + "=" + paramValue + suffix;
    }
    else
    {
    if (url.indexOf("?") < 0)
        url += "?" + paramName + "=" + paramValue;
    else
        url += "&" + paramName + "=" + paramValue;
    }
    return  (url + hash);
}

/* A function to validate and mask the phone number.
 * @Param element	: set message for Error or Success.
 */
var FT_processNumberEntry = function(element) {
	var val = element.value;
	if(val.length >= 13) {
		element.value = formatPhone(val.replace(/[^0-9]+/g,'').slice(0, 10));
		return false;
	} else {
		element.value = formatPhone(val.replace(/[^0-9]+/g,''));
	}
	
	function formatPhone(value) {
		var digitList = value.split('');
		digitList.forEach(function(char, index) {
			if(index === 2 || index === 6) {
				digitList.splice( index+1, 0, '-');
			}
		});
		return digitList.join('');
	}
}

/* A function for reset page message.
 * @Param element	: DOM element under which page messages are displayed.
 */
var FT_clearFormMessage = function(element) {
	var messageContainer = document.getElementById('messageContainerId');
	if( messageContainer )
		messageContainer.innerHTML = '';
	
	var sellMessageContainer = document.getElementById('sellMessageContainerId');
	if( sellMessageContainer )
		sellMessageContainer.innerHTML = '';
}

/* A function to add page message.
 * @Param isSuccess	: set message for Error or Success.
 * @Param errorMessage	: Message to display.
 */
var FT_setMessage = function(isSuccess, errorMessage) {
	var messageContainer = document.getElementById('messageContainerId');
	messageContainer.innerHTML = '';
	messageDiv = document.createElement('div');
	messageDiv.className += ((isSuccess) ? 'FT_successMsg' : 'FT_errorMsg');				
	messageDiv.innerHTML  = errorMessage + '<a class="FT_closeBtn"/>';		
	messageContainer.appendChild(messageDiv);
	FT_bindEvent('click', FT_clearFormMessage, messageContainer.getElementsByTagName('a'));
}

/* A function to submit from for inquiry. 
 * @Param element	: DOM element upon which class will be searched.
 * @Param className	: class Name to search.
 */
var FT_hasClass = function(element, className) {
	var hadClass = false;
	element.className.split(' ').some(function(elementClass) {
		return hadClass = (elementClass === className);
	});
	return hadClass;
}

/* A function to validate data and display error messages if any, before submit. */
var FT_validateData = function() {
	var isProcced = true;
	var inquirJSON = {};
	var inquiryTab = document.getElementById(FT_tab2Id);
	var messageContainer = document.getElementById('messageContainerId');
	messageContainer.innerHTML = '';
	var fieldElementList = inquiryTab.getElementsByClassName('FT_input');
	var isFocusSet = false;
	var isEmailValid = false;
	var isPhoneValid = false;
	var requiredEmpty = false;
	for(var index = 0; index < fieldElementList.length; index++) {
		var element = fieldElementList[index];
		var elementValue = element.value;
		var errorMessage;
		if(elementValue && elementValue.trim()) {
			if(FT_hasClass(element, 'FT_required')) {				
				if(FT_hasClass(element, 'FT_email')) {
					isEmailValid = FT_emailRegex.test(elementValue);
					if(!isEmailValid) {
						errorMessage = 'Invalid Email!';
						isProcced = false;
					} else {
						element.style.borderColor = 'darkgrey';
					}					
				} else if(FT_hasClass(element, 'FT_phone')) {
					isPhoneValid = FT_phoneRegex.test(elementValue);
					if(!isPhoneValid) {
						errorMessage = 'Invalid Phone!';
						isProcced = false;
					} else {
						element.style.borderColor = 'darkgrey';
					}
				} else {
					if( !requiredEmpty && isPhoneValid && isEmailValid ) {
						isProcced = true;
					}
					element.style.borderColor = 'darkgrey';
				}		
			}
			if(isProcced) {
				inquirJSON[element.name] = elementValue;
				element.style.borderColor = 'darkgrey';
			} else {
				//element.style.borderColor = 'red';
			}
		} else if(FT_hasClass(element, 'FT_required')) {
			element.style.borderColor = 'red';
			if(isProcced) isProcced = false;
			requiredEmpty = true;
			errorMessage = 'Please Fill All Required Fields!';
		}
		if(!isProcced) {
			if( !isFocusSet ) {
				element.focus();
				isFocusSet = true;
			}
			FT_setMessage(isProcced, errorMessage);			
		}		
	}
	return ((isProcced)? inquirJSON : isProcced);
}
/* 
* Function to get given cookie
* @cname : cookie name to get 
*/
var FT_getCookie = function(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
/*
* Function to save form data to cookie which can be used for furthet form sumissions
* @formData : form filled data to be saved in cookie
*/
var FT_saveFormToCookie = function (formData) {
    var d = new Date();
    d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = "inquiryFormData=" + formData + ";" + expires + ";path=/";  
};

/* A function to submit from for inquiry. */
var FT_submitEnquiry = function() {
	var JSON_Buffer = FT_validateData();
	if(JSON_Buffer) {
		JSON_Buffer['AccountId'] = FT_DealerAccointId;
		JSON_Buffer['TruckId'] = FT_TruckId;
		//display loader
		document.getElementsByClassName('inquiryFrom')[0].style.display = 'none';
		document.getElementsByClassName('FT_loaderContainer')[0].style.display = 'block';
	    FT_WebRequestHandler.postRequest(JSON.stringify(JSON_Buffer), function(xhttp) {
			if ( xhttp && xhttp.readyState == 4 && xhttp.status == 200 ) {
				var serverResponse = JSON.parse(xhttp.responseText);
				//console.log('serverResponse: ',serverResponse);
				var serverData = JSON.parse(JSON.parse(serverResponse.Data));
				if( serverData.strMessage == 'Success' ) {
					FT_setMessage(true, 'Your Request Has Been Submited Successfully!');
					FT_saveFormToCookie(JSON.stringify(JSON_Buffer));					
				} else {
					console.log(serverResponse.Message);
					FT_setMessage(false, 'Something Went Wrong. Please Contact Admin!');
				}
			}
			//hide loader
			document.getElementsByClassName('inquiryFrom')[0].style.display = 'block';
			document.getElementsByClassName('FT_loaderContainer')[0].style.display = 'none';
		});
	}
}

/* A function to Tab click handling. */
var FT_tabClickHandling = function(selectedTab) {
	var liTab = selectedTab.parentNode;
	var currentTabToDisplay = document.getElementById(selectedTab.name);
	var activeTabs = liTab.parentNode.getElementsByClassName('FT_active');
	for(var index = 0; index < activeTabs.length; index++) {
		document.getElementById(activeTabs[index].getElementsByTagName('a')[0].name).style.display = 'none';
		activeTabs[index].classList.remove('FT_active');
	}
	currentTabToDisplay.style.display = 'block';
	liTab.className += 'FT_active';	
	if(selectedTab.name === FT_tab2Id) {
		var id = setTimeout(function(){
			currentTabToDisplay.getElementsByClassName('FT_input')[0].focus();
		}, 500);
	}
}

/* A function to add tabs to DOM. */
var FT_createTabs = function() {
	var ul = document.createElement('ul');
	ul.className = 'FT_tab-links';
	
	var li1 = document.createElement('li');
	li1.className = 'FT_active';
	var a1 = document.createElement('a');
	a1.innerHTML = 'DESCRIPTION';
	//a1.href = '#detailsTabId';	
	a1.href = 'javascript:void(0)';	
	a1.name = FT_tab1Id;
	li1.appendChild(a1);
	ul.appendChild(li1);
	
	var li2 = document.createElement('li');
	var a2 = document.createElement('a');
	a2.innerHTML = 'YES I&#39;M INTERESTED';
	//a2.href = '#detailsTabId';
	a2.href = 'javascript:void(0)';
	a2.name = FT_tab2Id;
	li2.appendChild(a2);
	ul.appendChild(li2);
	
	var li3 = document.createElement('li');
	var a3 = document.createElement('a');
	a3.innerHTML = 'LINK TO SHARE';
	//a3.href = '#detailsTabId';
	a3.href = 'javascript:void(0)';
	a3.name = FT_tab3Id;
	li3.appendChild(a3);
	ul.appendChild(li3);
	
	return ul;
}
/* Method for clear DOM. */
var FT_clearContainerDom = function() {
	while (FT_BMFA_TruckContainer.hasChildNodes()) {
		FT_BMFA_TruckContainer.removeChild(FT_BMFA_TruckContainer.lastChild);
	}
}
/*History popstate - for back button functionality*/		
window.addEventListener("popstate", function(e) {
	if(e.state !== null) { 
	   if(e.state.page == 'categoryListing') {
	   		FT_displayCategories( FT_truckTypeMap );	   		   
	   } else if(e.state.page == 'categoryDetail') {
			var div = document.createElement('div');
			div.setAttribute('category', e.state.category);
			if(e.state.category) {
				FT_expandCategory( div );
			}
	   } else if(e.state.page == 'truckDetail') {
			var div = document.createElement('div');
			div.setAttribute('truckId', e.state.truck);
			if(e.state.truck) {
				FT_prepareTruckDetails( div );
			}		
	   }
   } else {
	   window.history.back();
   }
});
/* Lazy loading for images */
var FT_lazyImages = [];
function FT_setLazyLoad(){
	FT_lazyImages = document.getElementsByClassName('FT_lazy');
	FT_lazyLoadImages();
}
function FT_loadImage() {
	//fade effect
	this.style.transition = "opacity 3s";
	this.style.opacity = "1";
	var loaderSpan = this.parentNode.querySelectorAll('span.FT_loadingImage');
	loaderSpan[0].parentNode.removeChild(loaderSpan[0]);
}
function FT_lazyLoadImages(){
	for(var i = 0; i < FT_lazyImages.length; i++){
		if (FT_lazyImages[i].getAttribute('data-src')){
            FT_lazyImages[i].src = 
            FT_lazyImages[i].getAttribute('data-src');
            var currentImage = FT_lazyImages[i];
            currentImage.addEventListener("load",FT_loadImage);
            // remove the attribute
            FT_lazyImages[i].removeAttribute('data-src');
        }
	}
    FT_cleanLazyLoadImages();
}
function FT_cleanLazyLoadImages(){
    FT_lazyImages = 
    Array.prototype.filter.call(
        FT_lazyImages, 
        function(l){ 
            return l.getAttribute('data-src');
         }
    );
}
function FT_getCurrentTimeStamp() {
	if (!Date.now) {
		return new Date().getTime();
	} else {
		return Date.now();
	}
}

/***Sell Modal**/
var createSellModal = function(parentNode){	
	
	var modalWrap = document.createElement('div');
	modalWrap.className = 'FT_modal';
	modalWrap.setAttribute('id','FT_sellModal');
	var modalContainer = document.createElement('div');
	modalContainer.className = 'FT_modalContent';
	
	
	var sellForm = FT_addSellFrom();
	
	modalContainer.appendChild(sellForm);
	
	var closeBtn = document.createElement('span');
	closeBtn.className = 'FT_modalClose cursor';
	closeBtn.appendChild(document.createTextNode("x"));
	
	FT_bindEvent('click', FT_closeSellModal, [closeBtn]);
	
	modalWrap.appendChild(closeBtn);
	modalWrap.appendChild(modalContainer);
	
	parentNode.appendChild(modalWrap);
	
}

/* A function to add Intrest form to DOM. */
var FT_addSellFrom = function() {
	var fieldAndType = {
		'First Name':'input',
		'Last Name':'input',
		'Fire Department' : 'input',
		'Email':'input',
		'Phone':'input',
		'State':'select',
		'How many trucks would you like to sell':'input',
		'Are you also considering buying a used truck' : 'select',		
		'What year is your truck':'input',
		'What type of truck' : 'select',
		'What brand is your truck' : 'input',
		'When would you like to sell your truck' : 'select',
		'Have you ordered a replacement truck' : 'select',		
		'What price is needed for your truck': 'input',
		'Comments':'textarea'
	}
	
	var fieldToClasses = {	
		'First Name': 'FT_input FT_required',
		'Last Name': 'FT_input FT_required',
		'Fire Department' : 'FT_input FT_required',
		'Email': 'FT_input FT_required FT_email',
		'Phone': 'FT_input FT_required',
		'State': 'FT_input FT_required',
		'How many trucks would you like to sell': 'FT_input',
		'Are you also considering buying a used truck' : 'FT_input',
		'What year is your truck': 'FT_input',
		'What type of truck' : 'FT_input',
		'What brand is your truck' : 'FT_input',
		'When would you like to sell your truck' : 'FT_input',
		'Have you ordered a replacement truck' : 'FT_input',
		'What price is needed for your truck': 'FT_input',
		'Comments' : 'FT_input'
		
	}
	/* set initial values of form fields */
	var fieldToValues = {
		'First Name': '',
		'Last Name': '',
		'Fire Department' : '',
		'Email': '',
		'Phone': '',
		'State': '',
		'How many trucks would you like to sell': '',
		'Are you also considering buying a used truck' : '',
		'What year is your truck': '',
		'What type of truck' : '',
		'What brand is your truck' : '',
		'When would you like to sell your truck' : '',
		'Have you ordered a replacement truck' : '',
		'What price is needed for your truck': '',	
		'Comments' : ''		
	}
	/* get form field values from cookie and if cookie is set then override it's values */
	var sellFormData = FT_getCookie("sellFormData");
	//console.log('sellFormData');
	if( sellFormData != "" ) {
		var frmData = JSON.parse(sellFormData);
		if( frmData['FirstName'] ) fieldToValues['First Name'] = frmData['FirstName']; 
		if( frmData['LastName'] ) fieldToValues['Last Name'] = frmData['LastName'];
		if( frmData['Phone'] ) fieldToValues['Phone'] = frmData['Phone'];
		if( frmData['Email'] ) fieldToValues['Email'] = frmData['Email'];
		if( frmData['FireDepartment'] ) fieldToValues['FireDepartment'] = frmData['FireDepartment'];
		if( frmData['Howmanytruckswouldyouliketosell'] ) fieldToValues['Howmanytruckswouldyouliketosell'] = frmData['Howmanytruckswouldyouliketosell'];
		if( frmData['State'] ) fieldToValues['State'] = frmData['State'];
		if( frmData['Areyoualsoconsideringbuyingausedtruck'] ) fieldToValues['Are you also considering buying a used truck'] = frmData['Areyoualsoconsideringbuyingausedtruck'];
		if( frmData['Whatyearisyourtruck'] ) fieldToValues['What year is your truck'] = frmData['Whatyearisyourtruck'];	
		if( frmData['Whattypeoftruck'] ) fieldToValues['What type of truck'] = frmData['Whattypeoftruck'];	
		if( frmData['Whatbrandisyourtruck'] ) fieldToValues['What brand is your truck'] = frmData['Whatbrandisyourtruck'];	
		if( frmData['Whenwouldyouliketosellyourtruck'] ) fieldToValues['When would you like to sell your truck'] = frmData['Whenwouldyouliketosellyourtruck'];	
		if( frmData['Haveyouorderedareplacementtruck'] ) fieldToValues['Have you ordered a replacement truck'] = frmData['Haveyouorderedareplacementtruck'];			
		if( frmData['Whatpriceisneededforyourtruck'] ) fieldToValues['What price is needed for your truck'] = frmData['Whatpriceisneededforyourtruck'];			
		if( frmData['Comments'] ) fieldToValues['Comments'] = frmData['Comments'];			
	}
	
	var StateOpt = ['', 'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
	
	var BooleanOpt = ['', 'Yes', 'No'];
	
	var truckTypeOpt = ['', 'Used Pumper and Engines', 'Rescue Pumper and Engines', 'Used Aerial, Ladder Trucks and Quints', 'Towers and Platforms', 'Used Tankers and Tenders', 'Used Brush Trucks, Quick Attacks and Mini Pumpers', 'Used Rescue Trucks and Squads', 'Command Units', 'Used ARFF and Airport Crash Trucks', 'Ambulances and Transport Units', 'European Style Units', 'Vocational Trucks'];
	
	var timeForSellOpt = ['', 'Today', '30 Days', 'May be 6 Months', 'Probably 1 Year Or More'];
	
	var replacementOpt = ['', 'Yes', 'No', 'Working On It', 'Not Replacing'];
	
	
	
	var sellFormSection = document.createElement('div');
	sellFormSection.id = 'FT_SellSecId';
	//sellFormSection.style.display = 'none';
	sellFormSection.className = 'FT_gryTxt FT_container FT_SellSec';
	
	var formTitleDiv = document.createElement('div');
	var titleText = 'Thank you for your interest in contacting us about selling your used fire truck!';
	formTitleDiv.innerHTML = titleText;
	formTitleDiv.className = 'FT_formTitle';
	sellFormSection.appendChild(formTitleDiv);
	
	var formSubTitleDiv = document.createElement('div');
	formSubTitleDiv.className = 'FT_formSubTitle';
	var subtitleText = '<p>Please fill out the form below, and a member of our team will be in touch with you as soon as possible to answer what questions you have.</p>';

	subtitleText += '<p>Thank you again for your interest – we look forward to speaking with you soon, and working with you in the sale of your used emergency apparatus!</p>';
	formSubTitleDiv.innerHTML = subtitleText;
	sellFormSection.appendChild(formSubTitleDiv);

	var formWarpper = document.createElement('div');
	formWarpper.className = 'sellFrom';
	var messageContainerDiv = document.createElement('div');
	messageContainerDiv.id = 'sellMessageContainerId';
	messageContainerDiv.classClass = 'FT_closeBtn';
	formWarpper.appendChild(messageContainerDiv);
	var index = 0;
	
	for(var fieldName in fieldAndType) {
		var inputContainer = document.createElement('div');
		inputContainer.className += ((index%2) ? 'FT_fL' : 'FT_fR');
		var dynamicDom = document.createElement(fieldAndType[fieldName]);
		dynamicDom.name = fieldName.replace(/\s/g,'');
		dynamicDom.className = fieldToClasses[fieldName];
		if(fieldName === 'State') {
			dynamicDom.className += ' FT_gryTxt FT_select';
			var idx = 0;
			StateOpt.forEach(function(opt) {	
				idx++;			
				var option = document.createElement('option');
				option.value = (opt) ? opt: '';
				option.innerHTML = (opt) ? opt: 'State';
				if(!opt) {
					option.disabled = true;
					option.selected = true;
				}
				if(idx == 1) option.selected = true;
				dynamicDom.appendChild(option);
			});
			
			FT_bindEvent('change', removeFT_SelectClass, [dynamicDom]);
			
		} else if(fieldName === 'Are you also considering buying a used truck') {
			dynamicDom.className += ' FT_gryTxt FT_select';
			BooleanOpt.forEach(function(opt) {
				var option = document.createElement('option');
				option.value = (opt) ? opt: '';
				option.innerHTML = (opt) ? opt : 'Are you also considering buying a used truck?';
				if(!opt) {
					option.disabled = true;
					option.selected = true;
				}
				dynamicDom.appendChild(option);

				
			});
			FT_bindEvent('change', removeFT_SelectClass, [dynamicDom]);

    //dynamicDom.appendChild(option);

		}else if(fieldName === 'What type of truck') {
			dynamicDom.className += ' FT_gryTxt FT_select';
			truckTypeOpt.forEach(function(opt) {
				var option = document.createElement('option');
				option.value = (opt) ? opt: '';
				option.innerHTML = (opt) ? opt : 'What type of truck?';
				if(!opt) {
					option.disabled = true;
					option.selected = true;					
				}
				dynamicDom.appendChild(option);
			});
			
			FT_bindEvent('change', removeFT_SelectClass, [dynamicDom]);
			
		}else if(fieldName === 'When would you like to sell your truck') {
			dynamicDom.className += ' FT_gryTxt FT_select';
			timeForSellOpt.forEach(function(opt) {
				var option = document.createElement('option');
				option.value = (opt) ? opt: '';
				option.innerHTML = (opt) ? opt : 'When would you like to sell your truck?';
				if(!opt) {
					option.disabled = true;
					option.selected = true;
				}
				dynamicDom.appendChild(option);
			});
			
			FT_bindEvent('change', removeFT_SelectClass, [dynamicDom]);
		}
		else if(fieldName === 'Have you ordered a replacement truck') {
			dynamicDom.className += ' FT_gryTxt FT_select';
			replacementOpt.forEach(function(opt) {
				var option = document.createElement('option');
				option.value = (opt) ? opt: '';
				option.innerHTML = (opt) ? opt : 'Have you ordered a replacement truck?';
				if(!opt) {
					option.disabled = true;
					option.selected = true;
				}
				dynamicDom.appendChild(option);
			});
			
			FT_bindEvent('change', removeFT_SelectClass, [dynamicDom]);
		}
		else {
				
			if(fieldName == 'How many trucks would you like to sell' ||			   
			   fieldName == 'What brand is your truck'){
				
				dynamicDom.placeholder = fieldName + '?';
								
			}else if(fieldName == 'What price is needed for your truck'){
				
				dynamicDom.placeholder = fieldName + '?';				
				dynamicDom.className += ' FT_gryTxt FT_select FT_currency';
				FT_bindEvent('keyup', FT_validateCurrency, [dynamicDom]);
				
			}else if(fieldName == 'What year is your truck' ){
				dynamicDom.placeholder = fieldName + '?';								
				dynamicDom.setAttribute("maxlength", "4");							
			}else{
				dynamicDom.placeholder = fieldName;	
			}
			
			if(fieldName === 'Phone') {
				FT_bindEvent('keyup', FT_processNumberEntry, [dynamicDom]);
			}
			else if(fieldName === 'Comments') {
				inputContainer.className += 'FT_TextArea';
			}			
		}
		//populate value from cookie data (check conditions if radio/checkbox field is added in form)
		if( fieldAndType[fieldName] == 'input' || fieldAndType[fieldName] == 'select' || fieldAndType[fieldName] == 'textarea' )
			dynamicDom.value = fieldToValues[fieldName];
			
		inputContainer.appendChild(dynamicDom);
		formWarpper.appendChild(inputContainer);
		index++;
	}
	
	var submitButton = document.createElement('button');
	submitButton.type = 'button';
	submitButton.className = 'FT_submitBtn';
	submitButton.innerHTML = 'Submit';
	formWarpper.appendChild(submitButton);
	sellFormSection.appendChild(formWarpper);
	//append loader displayed when for is submitted
	var loaderDiv = FT_createLoaderNode();
	sellFormSection.appendChild(loaderDiv);
	FT_bindEvent('click', FT_submitSell, [submitButton]);
	return sellFormSection;
}

var showSellModal = function(){	
	document.getElementById('FT_sellModal').style.display = 'block';
	clearSellFormData();
	hideLoader('FT_SellSecId');	
}

var showLoader = function(parentId){
	var parentElement = document.getElementById(parentId);
	var childElement = parentElement.getElementsByClassName('FT_loaderContainer');	
	childElement[0].style.display = 'block';
}

var hideLoader = function(parentId){
	var parentElement = document.getElementById(parentId);
	var childElement = parentElement.getElementsByClassName('FT_loaderContainer');	
	childElement[0].style.display = 'none';
}

var FT_submitSell = function() {
	var JSON_Buffer = FT_validateSellsData();
	console.log(JSON_Buffer);
	
	if(JSON_Buffer) {
		JSON_Buffer['AccountId'] = FT_DealerAccointId;
		JSON_Buffer['TruckId'] = FT_TruckId;
		
		//-- Need to comment once the service is exposed
		document.getElementsByClassName('sellFrom')[0].style.display = 'none';		
		showLoader('FT_SellSecId');
		var isSellFormError = true;
		FT_WebRequestHandler.postRequestCustom(JSON.stringify(JSON_Buffer), "https://www.firetruckapi.com/api/trucks?issandbox="+isSandbox, function(xhttp) {
			if ( xhttp && xhttp.readyState == 4 && xhttp.status == 200 ) {
				var serverResponse = JSON.parse(xhttp.responseText);
				//console.log('serverResponse: ',serverResponse);
				var firstParse = JSON.parse(serverResponse.Data);
				if( FT_isJSON(firstParse) ) {
					var serverData = JSON.parse(firstParse);
					if( serverData.strMessage == 'Success' ) {
						//FT_setSellMessage(true, 'Your Request Has Been Submited Successfully!');
						FT_setSellMessage(true, 'Thank you for the opportunity to sell your truck.  A member of our team will be in touch with you as soon as possible to answer your questions.');
						FT_saveSellFormToCookie(JSON.stringify(JSON_Buffer));	
						isSellFormError = false;						
					} else {
						console.log(serverResponse.Message);
						FT_setSellMessage(false, 'Something Went Wrong. Please Contact Admin!');						
						isSellFormError = true;
					}
					
				} else {
					FT_setSellMessage(false, firstParse[0].message);
					isSellFormError = true;
				}				
			}
			//hide loader
			hideLoader('FT_SellSecId');
			
			if(!isSellFormError) {
				setTimeout(function(){ 
					document.getElementById('FT_sellModal').style.display = 'none';
					document.getElementsByClassName('sellFrom')[0].style.display = 'block';
				}, 3000);
				
			}else{
				document.getElementsByClassName('sellFrom')[0].style.display = 'block';
			}
		});
	}
}

function FT_isJSON(str) {
    try {
        return (JSON.parse(str) && !!str);
    } catch (e) {
        return false;
    }
} 
/* A function to validate data and display error messages if any, before submit. */
var FT_validateSellsData = function() {
	var isProcced = true;
	var inquirJSON = {};
	var inquiryTab = document.getElementById('FT_SellSecId');
	var messageContainer = document.getElementById('sellMessageContainerId');
	messageContainer.innerHTML = '';
	var fieldElementList = inquiryTab.getElementsByClassName('FT_input');
	var isFocusSet = false;
	var isEmailValid = false;
	var isPhoneValid = false;
	var isCurrencyValid = false;
	var requiredEmpty = false;
	for(var index = 0; index < fieldElementList.length; index++) {
		var element = fieldElementList[index];
		var elementValue = element.value;
		var errorMessage;
		if(elementValue && elementValue.trim()) {
			if(FT_hasClass(element, 'FT_required')) {				
				if(FT_hasClass(element, 'FT_email')) {
					isEmailValid = FT_emailRegex.test(elementValue);
					if(!isEmailValid) {
						errorMessage = 'Invalid Email!';
						isProcced = false;
					} else {
						element.style.borderColor = 'darkgrey';
					}					
				} else if(FT_hasClass(element, 'FT_phone')) {
					isPhoneValid = FT_phoneRegex.test(elementValue);
					if(!isPhoneValid) {
						errorMessage = 'Invalid Phone!';
						isProcced = false;
					} else {
						element.style.borderColor = 'darkgrey';
					}
				} else {
					if( !requiredEmpty && isPhoneValid && isEmailValid ) {
						isProcced = true;
					}
					element.style.borderColor = 'darkgrey';
				}		
			}
			if(isProcced) {
				inquirJSON[element.name] = elementValue;
				element.style.borderColor = 'darkgrey';
			} else {
				//element.style.borderColor = 'red';
			}
		} else if(FT_hasClass(element, 'FT_required')) {
			element.style.borderColor = 'red';
			if(isProcced) isProcced = false;
			requiredEmpty = true;
			errorMessage = 'Please Fill All Required Fields!';
		}
		if(!isProcced) {
			if( !isFocusSet ) {
				element.focus();
				isFocusSet = true;
			}
			FT_setSellMessage(isProcced, errorMessage);			
		}		
	}
	return ((isProcced)? inquirJSON : isProcced);
}

var removeFT_SelectClass = function(element){
	element.classList.remove('FT_select');
}

/* A function to add page message.
 * @Param isSuccess	: set message for Error or Success.
 * @Param errorMessage	: Message to display.
 */
var FT_setSellMessage = function(isSuccess, errorMessage) {
	var messageContainer = document.getElementById('sellMessageContainerId');
	messageContainer.innerHTML = '';
	messageDiv = document.createElement('div');
	messageDiv.className += ((isSuccess) ? 'FT_successMsg' : 'FT_errorMsg');				
	messageDiv.innerHTML  = errorMessage + '<a class="FT_closeBtn"/>';		
	messageContainer.appendChild(messageDiv);
	FT_bindEvent('click', FT_clearFormMessage, messageContainer.getElementsByTagName('a'));
}

/*
* Function to save form data to cookie which can be used for furthet form sumissions
* @formData : form filled data to be saved in cookie
*/
var FT_saveSellFormToCookie = function (formData) {   
	var d = new Date();
    d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = "sellFormData=" + formData + ";" + expires + ";path=/";  		
};

var clearSellFormData = function(){
		
	var sellFrom = document.getElementsByClassName('sellFrom')[0];
	
	var inputs = sellFrom.getElementsByClassName('FT_input');
	
	for(var i = 0; i < inputs.length; i++){
		fieldName = inputs[i].getAttribute("Name");
		
		if(fieldName == 'Howmanytruckswouldyouliketosell' || fieldName == 'Areyoualsoconsideringbuyingausedtruck' ||
		   fieldName == 'Whatyearisyourtruck' || fieldName == 'Whattypeoftruck' ||
		   fieldName == 'Whatbrandisyourtruck' || fieldName == 'Whenwouldyouliketosellyourtruck' ||
		   fieldName == 'Haveyouorderedareplacementtruck' || fieldName == 'Whatpriceisneededforyourtruck' ||
		   fieldName == 'Comments'){
		
			inputs[i].value = '';
			
			if(inputs[i].tagName === 'SELECT' || inputs[i].tagName === 'select'){
				console.log(fieldName);
				inputs[i].classList.add('FT_select');
			}
	    }
	}
}
var FT_validateCurrency = function (element) {
	console.log(event.which);
	if(event.which != 110){
		var n = parseFloat(element.value.replace(/\,/g,''),10);        
		if(n)
			element.value = n.toLocaleString();
	}
}