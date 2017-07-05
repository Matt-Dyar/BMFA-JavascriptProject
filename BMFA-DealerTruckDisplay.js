/* Javascript Map for Bind Truck Apparatus Type to respective public image path. */
var FT_truckTypeImageUrl = {
	'Default' : 'https://c.na78.content.force.com/servlet/servlet.ImageServer?id=0151N000003exvn&oid=00Do0000000JLLE&lastMod=1497451382000',
	'All Used Trucks' : 'https://c.na78.content.force.com/servlet/servlet.ImageServer?id=0151N000002Wht1&oid=00Do0000000JLLE&lastMod=1495568542000',
	'Rescue Pumpers and Engines' : 'https://c.na78.content.force.com/servlet/servlet.ImageServer?id=0151N000002Whtz&oid=00Do0000000JLLE&lastMod=1495568876000',
	'Used Rescue Trucksand Squads' : 'https://c.na78.content.force.com/servlet/servlet.ImageServer?id=0151N000002WhuY&oid=00Do0000000JLLE&lastMod=1495568998000',
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
	VF_Main_Title__c : '<h1 class="FT_title">{0}</h1>',
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

/* Javascript global variable for Bind footer element on page. */
var FT_PageFooterStrHTML = '<div class="FT_footer" style="background:{0}">' +
						   '	<h5 style="color:{1}">Selling A Used Fire Truck?</h5>' +
						   '	<a href="https://www.firetruckmall.com" style="color:{2}" target="_blank">Click Here For More Information </a>' +
						   '</div>';

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

var FT_BMFA_TruckContainer;
var FT_lastCategorySelected;
var FT_isLocalStorageSupport = (typeof(Storage) !== "undefined");
var FT_defaultTruckImageKey = 'Default';
var FT_tab1Id = 'descriptionTab';
var FT_tab2Id = 'inquiryTab';
var FT_emailRegex =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var FT_phoneRegex =  /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;

var FT_DealerAccointId = ''; // this value changes as per Dealer.
var FT_TheamBackground = ''; // this value changes as per Dealer website theam.
var FT_TheamTextColor = ''; // this value changes as per Dealer website theam.
var FT_TruckId;

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
			//xhttp.open("GET", "http://34.208.168.193/api/services?accountId=" + FT_DealerAccointId, true);
			xhttp.open("GET", "https://www.firetruckapi.com/api/services?accountId=" + FT_DealerAccointId, true);
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
			//xhttp.open("POST", "http://34.208.168.193/api/services", true);
			xhttp.open("POST", "https://www.firetruckapi.com/api/services", true);
			xhttp.setRequestHeader("Authorization", "Basic ZnNtLWFkbWluOjhlZDMxMmM4NTE0ZDRhMDI3OWFjOTBjNTQxOGEwOGQ5");
			xhttp.send(payload);
			xhttp.onreadystatechange = function() {
				callback(this);
			};
		}
	}
}

/* A function as entry point for all functionality. 
 * - A div having id 'dealerTruckContainerId', must be present on DOM.
 */
var FT_loadTruckData = function() {
	FT_BMFA_TruckContainer = document.getElementById('dealerTruckContainerId');
	FT_DealerAccointId = FT_BMFA_TruckContainer.getAttribute('accountId');
	var style = getComputedStyle(FT_BMFA_TruckContainer);
	FT_TheamBackground = style.backgroundColor;
	FT_TheamTextColor = style.color;
	FT_BMFA_TruckContainer.className = FT_BMFA_TruckContainer.className.replace('FT_ThemeContainer', '');
	FT_WebRequestHandler.getRequest(FT_processTruckData);
}

/* A function handle 'GET' response from request. 
 * @Param xhttp	: holding instance of XMLHttpRequest.
 */
var FT_processTruckData = function(xhttp) {
	if ( xhttp && xhttp.readyState == 4 && xhttp.status == 200 ) {
		try {
			var serverResponse = JSON.parse(xhttp.responseText);
			if(serverResponse.Success) {
				var truckData = JSON.parse(serverResponse.Data);
				var trucks = JSON.parse(serverResponse.Data);
				if(trucks.length) {
					FT_prepareTruckTypeMap(trucks);
					FT_displayCategories( FT_getBMFAStorage() );
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

var FT_addPageFooter = function(parent) {
	parent.innerHTML += FT_PageFooterStrHTML.FT_format([FT_TheamBackground, FT_TheamTextColor, FT_TheamTextColor]);;
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
	((FT_isLocalStorageSupport) ? localStorage.setItem('truckTypeMap', JSON.stringify(truckTypeMap)) : (window.truckTypeGlobalMap = truckTypeMap));
}

/* A function returns manipulated data either from localsorage or global variable. */
var FT_getBMFAStorage = function() {
	return ((FT_isLocalStorageSupport) ? JSON.parse(localStorage.getItem('truckTypeMap')) : window.truckTypeGlobalMap);
}

/* A function for expand purticuler category. 
 * @Param element	: holding instance of catagory DOM-element that is currently selected by User.
 */
var FT_expandCategory = function(element) {
	var category = element.getAttribute('category');
	FT_lastCategorySelected = element;
	FT_clearContainerDom();
	FT_constructBackButton('To Catagories');
	var titleDiv = document.createElement('div');
	titleDiv.className = 'FT_PageTitle';
	titleDiv.innerHTML = 'Shop Our '+ ((category === 'All Used Trucks' ) ? 'Used Fire Trucks' : category);
	FT_BMFA_TruckContainer.appendChild(titleDiv);
	FT_BMFA_TruckContainer.appendChild( FT_prepareImageContainer(false, FT_getBMFAStorage()[category], '') );
	FT_addPageFooter(FT_BMFA_TruckContainer);
	
	FT_bindEvent('click', FT_prepareTruckDetails, FT_BMFA_TruckContainer.querySelectorAll('img'));
	FT_bindEvent('click', FT_prepareTruckDetails, FT_BMFA_TruckContainer.querySelectorAll('a.FT_redBtn'));
}

/* A function for display all possible categories. 
 * @Param truckTypeMap	: holding instance of list for all trucks respective to categories.
 */
var FT_displayCategories = function(truckTypeMap) {
	FT_clearContainerDom();
	var titleDiv = document.createElement('div');
	titleDiv.className = 'FT_PageTitle';
	titleDiv.innerHTML = 'Shop Our Used Fire Trucks';
	FT_BMFA_TruckContainer.appendChild(titleDiv);
	FT_BMFA_TruckContainer.appendChild( FT_prepareImageContainer(true, truckTypeMap, 'FT_category') );
	FT_addPageFooter(FT_BMFA_TruckContainer);
	
	FT_bindEvent('click', FT_expandCategory, FT_BMFA_TruckContainer.querySelectorAll('img'));
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
	var toBackStr = button.getAttribute('jData');
	if(toBackStr === 'To Catagories') {
		FT_displayCategories( FT_getBMFAStorage() );
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
				catDetailDiv.style.color = FT_TheamBackground;
				
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
				}
				div.appendChild(img);
				var miniDetailDiv = document.createElement('div');
				var miniDetailHtml = '';
				for(var field in FT_MiniDetailFieldToStrHTML) {
					if(truck[field]) {
						if('VF_Main_Title__c' === field) {
							miniDetailHtml += FT_MiniDetailFieldToStrHTML[field].FT_format([FT_TheamBackground, truck[field]]);
						} else {
							miniDetailHtml += FT_MiniDetailFieldToStrHTML[field].FT_format([truck[field]]);
						}
					}					
				}
				miniDetailHtml += '<div class="FT_btmDiv">'
				for(var field in FT_MiniDetailBottomFieldsToStrHTML) {
					if(truck[field]) {
						miniDetailHtml += FT_MiniDetailBottomFieldsToStrHTML[field].FT_format([truck[field]]);
					}					
				}
				miniDetailHtml += '<a class="FT_redBtn" '+
								  '	  style="color:'+FT_TheamTextColor+'; background:'+FT_TheamBackground+'; border:1px solid '+FT_TheamBackground+'" truckid="'+truck.Id+'">'+
								  'View Details</a></div>';
				miniDetailDiv.innerHTML = miniDetailHtml;
				div.appendChild(miniDetailDiv);
			}
			img.src = ((imgSrc) ? imgSrc : FT_truckTypeImageUrl[FT_defaultTruckImageKey]);					
			li.appendChild(div);
			ul.appendChild(li);
		}
	}	
	return TruckImageContainer.appendChild(ul);;
}

var FT_swiperClickHandler = function(element) {
	var parentElement = element.parentNode;
	var currentImg = parentElement.getElementsByTagName('img')[0].className.split(' ')[1];
	console.log(parentElement.getElementsByTagName('img')[0].className);
	if(currentImg) {
		var index = parseInt(currentImg.split('_')[1]);
		var newImg = '';
		if(FT_hasClass(element, 'FT_prevBtn')){
			newImg = 'img_'+ (index -= 1);
		} else {
			newImg = 'img_'+ (index += 1);
		}		
		if(index) {
			var nextImg = parentElement.parentNode.getElementsByClassName(newImg);
			var nextOfNextImg = parentElement.parentNode.getElementsByClassName('img_'+ (index+1));			
			if(nextImg.length) {
				parentElement.getElementsByClassName('FT_nextBtn')[0].style.display = ((nextOfNextImg.length) ? 'block': 'none');
				parentElement.getElementsByTagName('img')[0].src = nextImg[0].src;
				parentElement.getElementsByTagName('img')[0].className = nextImg[0].className;
			} else {
				index -= 1;
				parentElement.getElementsByClassName('FT_nextBtn')[0].style.display = 'none';
			}
			parentElement.getElementsByClassName('FT_prevBtn')[0].style.display = 'block';
		} else {
			var nextImg = parentElement.parentNode.getElementsByClassName(newImg);
			parentElement.getElementsByTagName('img')[0].src = nextImg[0].src;
			parentElement.getElementsByTagName('img')[0].className = nextImg[0].className;
			parentElement.getElementsByClassName('FT_prevBtn')[0].style.display = 'none';
			parentElement.getElementsByClassName('FT_nextBtn')[0].style.display = 'block';
		}
	}
}

var FT_ImgClickHandler = function(element) {
	var mainImgParent = element.parentNode.previousSibling;
	var mainImgContainer = mainImgParent.getElementsByTagName('img')[0];
	if(mainImgContainer) {
		mainImgContainer.src = element.src;
		mainImgContainer.className = element.className;
	}
	var imgIndexClass = element.className.split(' ');
	var imgIndex = ((imgIndexClass[1]) ? parseInt(imgIndexClass[1].split('_')[1]) : 0);
	if(imgIndex) {
		mainImgParent.getElementsByClassName('FT_prevBtn')[0].style.display = 'block';
		var nextOfNextImg = element.parentNode.getElementsByClassName('img_'+ (imgIndex+1));
		mainImgParent.getElementsByClassName('FT_nextBtn')[0].style.display = ((nextOfNextImg.length) ? 'block': 'none');;
	} else {
		mainImgParent.getElementsByClassName('FT_prevBtn')[0].style.display = 'none';
		mainImgParent.getElementsByClassName('FT_nextBtn')[0].style.display = 'block';
	}
}

var FT_addTruckImages = function(ParentNode, ImageList) {
	var swiperContainer = document.createElement('div');
	swiperContainer.className = 'FT_swiperContainer FT_fR';
	var mainImg = document.createElement('img');
	mainImg.className = 'FT_TruckImg img_0';
	var prevBtn = document.createElement('a');
	prevBtn.className = 'FT_swiperBtn FT_prevBtn';
	var nextBtn = document.createElement('a');
	nextBtn.className = 'FT_swiperBtn FT_nextBtn';
	swiperContainer.appendChild(mainImg);
	swiperContainer.appendChild(prevBtn);
	swiperContainer.appendChild(nextBtn);
	ParentNode.appendChild(swiperContainer);
	
	var truckImageContainer = document.createElement('div');
	truckImageContainer.className = 'FT_fL FT_thumbnail';
	console.log(ImageList);
	ImageList.forEach( function(doc, index) {
		var img = document.createElement('img');
		img.className = 'FT_TruckImg img_'+ index;
		var imgSrc = (doc['Amazon_S3_Image_URL__c'] ? doc['Amazon_S3_Image_URL__c'] : '');
		if(doc['Main_Image__c']) {
			mainImg.src = imgSrc;
		}
		if(!imgSrc) {
			imgSrc = FT_truckTypeImageUrl[FT_defaultTruckImageKey];
		}
		img.src = imgSrc;
		truckImageContainer.appendChild(img);
	});
	if(!mainImg.src && ImageList.length) {
		mainImg.src = ImageList[0]['Amazon_S3_Image_URL__c'];
		nextBtn.style.display = ((ImageList.length > 1) ? 'block': 'none');
	}
	ParentNode.appendChild(truckImageContainer);
}

/* A function handles click event on indivisual truck. 
 * @Param element	: DOM-element holding image of truck.
 */	
var FT_prepareTruckDetails = function(element) {
	FT_TruckId = element.getAttribute('truckid');
	var selectedTruck;
	var isFound = false;
	FT_getBMFAStorage()['All Used Trucks'].some( function(truck) {
		selectedTruck = truck;
		return (isFound = (truck.Id === FT_TruckId));
	});
	if(isFound) {
		FT_clearContainerDom();
		FT_constructBackButton('To Truck List');
		var truckContainer = document.createElement('div');
		truckContainer.setAttribute('truckId', FT_TruckId);
		var truckPart1Container = document.createElement('div');
		var TruckDetailsHtml = '';
		for(var field in FT_GlobalFieldToStrHTML) {					
			var fieldVal = ((selectedTruck[field]) ? selectedTruck[field] : '');
			if(field === 'Cloud_Documents__r') {
				var tempImageContainer = document.createElement('div');
				truckImageContainer = document.createElement('div');				
				console.log('cloude docs : ', selectedTruck[field]);
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
				TruckDetailsHtml += FT_GlobalFieldToStrHTML[field].FT_format([FT_TheamBackground, fieldVal, 'document.getElementsByName(\''+FT_tab2Id+'\')[0].click()']);
			} else {
				TruckDetailsHtml += FT_GlobalFieldToStrHTML[field].FT_format([fieldVal]);
			}
		}
		truckPart1Container.innerHTML = TruckDetailsHtml;		
		truckContainer.appendChild(truckPart1Container);
		FT_BMFA_TruckContainer.appendChild(truckContainer);
		FT_bindEvent('click', FT_swiperClickHandler, FT_BMFA_TruckContainer.getElementsByClassName('FT_swiperBtn'));
		FT_bindEvent('click', FT_ImgClickHandler, FT_BMFA_TruckContainer.getElementsByClassName('FT_TruckImg'));
		FT_displayTabs(truckContainer, selectedTruck);		
	}	
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
	TruckDetailsContainer.className += 'FT_tabs';	
	var tabs = FT_createTabs();
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
				truckDetailsHtml += FT_DetailFieldToStrHTML[field].FT_format([FT_TheamBackground, innerFieldVal]);
			} else {
				truckDetailsHtml += FT_DetailFieldToStrHTML[field].FT_format([innerFieldVal]);
			}
		}
	}
	tab1Div.innerHTML = truckDetailsHtml;
	contentDiv.appendChild( tab1Div );	
	// Adding From for user interest(tab2).
	contentDiv.appendChild( FT_addInetrestFrom() );
	TruckDetailsContainer.appendChild( contentDiv );
	parentNode.appendChild( TruckDetailsContainer )
	FT_bindEvent('click', FT_tabClickHandling, tabs.getElementsByTagName('a'));
}

/* A function to add Intrest form to DOM. */
var FT_addInetrestFrom = function() {
	var fieldAndType = {
		'First Name':'input',
		'Last Name':'input',
		'Phone':'input',
		'Email':'input',
		'Purchase Timeframe':'select',
		'Make An Offer':'input',
		'City':'input',
		'State':'select',
		'Inquiry Message':'textarea'
	}
	
	var fieldToClasses = {
		'First Name':'FT_input FT_required',
		'Last Name':'FT_input FT_required',
		'Phone':'FT_input FT_required FT_phone',
		'Email':'FT_input FT_required FT_email',
		'Purchase Timeframe':'FT_input FT_required',
		'Make An Offer':'FT_input FT_required',
		'City':'FT_input FT_required',
		'State':'FT_input FT_required',
		'Inquiry Message':'FT_input FT_required'
	}
	
	var PurchaseTimeframeOpt = ['', 'Less than 1 month', '1 month - 3 months', '6 months - 12 months', '12 months+'];
	var StateOpt = ['', 'CA'];
	
	var tab2Div = document.createElement('div');
	tab2Div.id = FT_tab2Id;
	tab2Div.style.display = 'none';
	tab2Div.className = 'FT_gryTxt';
	
	var formTitleDiv = document.createElement('div');
	formTitleDiv.innerHTML = 'Contact us to learn more about this truck.';
	formTitleDiv.className = 'FT_formTitle';
	tab2Div.appendChild(formTitleDiv);
	
	var messageContainerDiv = document.createElement('div');
	messageContainerDiv.id = 'messageContainerId';
	messageContainerDiv.classClass = 'FT_closeBtn';
	tab2Div.appendChild(messageContainerDiv);
	var index = 0;
	for(var fieldName in fieldAndType) {
		var inputContainer = document.createElement('div');
		inputContainer.className += ((index%2) ? 'FT_fL' : 'FT_fR');
		var dynamicDom = document.createElement(fieldAndType[fieldName]);
		dynamicDom.name = fieldName.replace(/\s/g,'');
		dynamicDom.className = fieldToClasses[fieldName];
		if(fieldName === 'Purchase Timeframe') {
			dynamicDom.className += ' FT_gryTxt';
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
		} else if(fieldName === 'State') {
			dynamicDom.className += ' FT_gryTxt';
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
		} else {
			dynamicDom.placeholder = fieldName;			
			if(fieldName === 'Phone') {
				FT_bindEvent('keyup', FT_processNumberEntry, [dynamicDom]);
			} else if(fieldName === 'Inquiry Message') {
				inputContainer.className += 'FT_TextArea';
			}
		}
		inputContainer.appendChild(dynamicDom);
		tab2Div.appendChild(inputContainer);
		index++;
	}
	var submitButton = document.createElement('button');
	submitButton.type = 'button';
	submitButton.className = 'FT_submitBtn';
	submitButton.innerHTML = 'Submit Fire Truck Inquiry';
	tab2Div.appendChild(submitButton);
	FT_bindEvent('click', FT_submitEnquiry, [submitButton]);
	return tab2Div;
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

var FT_clearFormMessage = function(element) {
	var messageContainer = document.getElementById('messageContainerId');
	messageContainer.innerHTML = '';
}

/* A function to add page message.
 * @Param isSuccess	: set message for Error or Success.
 * @Param errorMessage	: Message to display.
 */
var FT_setMessage = function(isSuccess, errorMessage) {
	var messageContainer = document.getElementById('messageContainerId');
	var messages = messageContainer.getElementsByClassName('FT_message');
	if(!messages.length && errorMessage) {
		messageDiv = document.createElement('div');
		messageDiv.className += ((isSuccess) ? 'FT_errorMsg' : 'FT_successMsg');				
		messageDiv.innerHTML  = errorMessage + '<a class="FT_closeBtn"/>';		
		messageContainer.appendChild(messageDiv);
		FT_bindEvent('click', FT_clearFormMessage, messageContainer.getElementsByTagName('a'));
	} else if(messages.length) {
		messages[0].innerHTML = errorMessage;
	}
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
	var isFirstError = true;
	for(var index = 0; index < fieldElementList.length; index++) {
		var element = fieldElementList[index];
		var elementValue = element.value;
		var errorMessage;
		if(elementValue && elementValue.trim()) {
			if(FT_hasClass(element, 'FT_required')) {				
				if(FT_hasClass(element, 'FT_email')) {
					isProcced = FT_emailRegex.test(elementValue);
					errorMessage = 'Invalid Email!';
				} else if(FT_hasClass(element, 'FT_phone')) {
					isProcced = FT_phoneRegex.test(elementValue);
					errorMessage = 'Invalid Phone!';
				} else {
					isProcced = true;
				}			
			}
			
			if(isProcced) {
				inquirJSON[element.name] = elementValue;
				element.style.borderColor = 'darkgrey';
			} else {
				element.style.borderColor = 'red';
			}
		} else if(FT_hasClass(element, 'FT_required')) {
			element.style.borderColor = 'red';
			if(isProcced) isProcced = false;
			errorMessage = 'Please Fill All Required Fields!';
		}
		if(!isProcced && isFirstError) {
			element.focus();
			FT_setMessage(!isProcced, errorMessage);
			isFirstError = false;
		}		
	}
	return ((isProcced)? inquirJSON : isProcced);
}

/* A function to submit from for inquiry. */
var FT_submitEnquiry = function() {

	var JSON_Buffer = FT_validateData();
	if(!JSON_Buffer) {
		console.log('Please fill all required values');
	} else {
		JSON_Buffer['AccountId'] = FT_DealerAccointId;
		JSON_Buffer['TruckId'] = FT_TruckId;
		
		console.log(JSON_Buffer);
		
	    FT_WebRequestHandler.postRequest(JSON.stringify(JSON_Buffer), function(xhttp) {
			console.log(xhttp);
			if ( xhttp && xhttp.readyState == 4 && xhttp.status == 200 ) {
				var serverResponse = JSON.parse(xhttp.responseText);
				if(serverResponse.Success) {
					FT_setMessage(true, 'Your Request Has Been Submited Successfully!');
				} else {
					console.log(serverResponse.Message);
					FT_setMessage(false, 'Something Went Wrong. Please Contact Admin!');
				}
			}
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
		currentTabToDisplay.getElementsByClassName('FT_input')[0].focus();
	}
	window.scrollTo(0, document.body.scrollHeight);
}

/* A function to add tabs to DOM. */
var FT_createTabs = function() {
	var ul = document.createElement('ul');
	ul.className = 'FT_tab-links';
	
	var li1 = document.createElement('li');
	li1.className = 'FT_active';
	var a1 = document.createElement('a');
	a1.innerHTML = 'DESCRIPTION';
	a1.href = 'javascript:void(0)';
	a1.name = FT_tab1Id;
	li1.appendChild(a1);
	ul.appendChild(li1);
	
	var li2 = document.createElement('li');
	var a2 = document.createElement('a');
	a2.innerHTML = 'YES I&#39;M INTERESTED';
	a2.href = 'javascript:void(0)';
	a2.name = FT_tab2Id;
	li2.appendChild(a2);
	ul.appendChild(li2);
	
	return ul;
}

var FT_clearContainerDom = function() {
	while (FT_BMFA_TruckContainer.hasChildNodes()) {
		FT_BMFA_TruckContainer.removeChild(FT_BMFA_TruckContainer.lastChild);
	}
}