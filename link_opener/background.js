// background.js

// Listener for browser action click events
chrome.browserAction.onClicked.addListener(function(tab) {
	// Send a message to the active tab (works on JSON comms)
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		var activeTab = tabs[0];
		chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"}); // Keys on payload can be anything
	});
});

// Listen for the callback event
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) { // Request holds all the JSON data passed in the message
	if(request.message === "open_new_tab") {
		chrome.tabs.create({"url": request.url});
	}
});