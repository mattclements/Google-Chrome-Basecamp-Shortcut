chrome.browserAction.onClicked.addListener(function(tab) {
	if(localStorage.getItem("basecampId")) {
	    chrome.tabs.create({'url': localStorage.getItem("basecampId")}, function(tab) {
	      // Tab opened.
	    });
	}
	else {
		alert('Sorry, please set your Basecamp ID');
	}
});