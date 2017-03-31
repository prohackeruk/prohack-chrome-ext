// background.js

// Listener for browser action click events
chrome.browserAction.onClicked.addListener(function(tab) {
	// Send a message to the active tab (works on JSON comms)
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		var activeTab = tabs[0];
		chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"}); // Keys on payload can be anything
	});
});