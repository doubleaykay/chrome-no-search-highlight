function remove_text_highlight( details ) {
	if ( details.url.match( /:~:text=*/ ) != null) {
		return {
			redirectUrl: details.url.replace( /(:~:text=*)/, '' )
		};
	}
}

// chrome.webRequest.onBeforeRequest.addListener( remove_text_highlight, { urls: ["*://www.amazon.com/*", "*://www.amazon.co.uk/*", "*://amazon.com/*", "*://amazon.co.uk/*"] }, ["blocking"] );
chrome.webRequest.onBeforeRequest.addListener( remove_text_highlight, {urls: ["<all_urls>"]}, ["blocking"] );
