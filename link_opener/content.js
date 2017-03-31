// content.js
// Pass the first link on the page back to background.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if (request.message === "clicked_browser_action") {
		// Grab the first link on the page
		var firstHref = $("a[href^='http']").eq(0).attr("href");
		//alert(firstHref);
		// Send a message back
		chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});
	}
});
