'use strict';

window.addEventListener('load', function() {
	var foreGround = $("#foreground_container");
	var nameHeader = $("#name_header");
	var picInfo = $("#pic_info");
	var textContainer = $("#text_container");
	var projectsContainer = $("#projects_container");
	var lostDivImg = $("#lost_div_img");
	var lostOverlay = $("#lost_overlay");
	var lostText = $("#lost_text");

	var paintrDivImg = $("#paintr_div_img");
	var paintrOverlay = $("#paintr_overlay");
	var paintrText = $("#paintr_text");

	var blocksDivImg = $("#blocks_div_img");
	var blocksOverlay = $("#blocks_overlay");
	var blocksText = $("#blocks_text");

	var calendarDivImg = $("#calendar_div_img");
	var calendarOverlay = $("#calendar_overlay");
	var calendarText = $("#calendar_text");

	var lostContainer = $("#lost_container");
	var paintrContainer = $("#paintr_container");
	var blocksContainer = $("#blocks_container");
	var calendarContainer = $("#calendar_container");

	function showContent() {
		if (!foreGround.is(":visible")) {
			foreGround.fadeIn();
			nameHeader.fadeOut();
			picInfo.fadeOut();
		}
	}

	document.body.addEventListener('click', showContent);
	document.body.addEventListener("keypress", showContent);

	function hideAllContainers() {
		projectsContainer.hide();
		textContainer.hide();
		lostContainer.hide();
		paintrContainer.hide();
		blocksContainer.hide();
		calendarContainer.hide();
		window.scrollTo(0, 0);
	}

	function addOverlay(divImg, overlay, text, container) {
		divImg.hover(function() {
			overlay.width(divImg.width());
			var height = divImg.height();
			overlay.height(height);
			text.css('margin-top', (height/2)+'px');
			overlay.fadeIn("fast");
		}, function() {
			overlay.fadeOut();
		});

		divImg.click(function() {
			hideAllContainers();			
			container.fadeIn();
		});

	}

	addOverlay(lostDivImg, lostOverlay, lostText, lostContainer);
	addOverlay(blocksDivImg, blocksOverlay, blocksText, blocksContainer);
	addOverlay(paintrDivImg, paintrOverlay, paintrText, paintrContainer);
	addOverlay(calendarDivImg, calendarOverlay, calendarText, calendarContainer);

	$("#home_p").click(function() {
		foreGround.fadeOut();
		nameHeader.fadeIn();
		picInfo.fadeIn();
	});
	$("#about_p").click(function() {
		if(!textContainer.is(":visible")) {
			hideAllContainers();
			textContainer.fadeIn();
		}
	});

	function showProjects() {
		if(!projectsContainer.is(":visible")) {
			hideAllContainers();
			projectsContainer.fadeIn();
		}
	}

	$("#projects_p").click(showProjects);
	$("#projects_link").click(showProjects);

});