function remove_text_highlight( details ) {
	if ( details.url.match( /:~:text=[a-zA-Z0-9\-]*/ ) != null) {
		return {
			redirectUrl: details.url.replace( /(:~:text=[a-zA-Z0-9\-]*)/, '' )
		};
	}
}

// chrome.webRequest.onBeforeRequest.addListener( remove_text_highlight, { urls: ["*://www.amazon.com/*", "*://www.amazon.co.uk/*", "*://amazon.com/*", "*://amazon.co.uk/*"] }, ["blocking"] );
chrome.webRequest.onBeforeRequest.addListener( remove_text_highlight, {urls: ["<all_urls>"]}, ["blocking"] );
