function remove_text_highlight( details ) {
	if ( details.url.match( /#[a-zA-Z0-9\W]*:~:text=[a-zA-Z0-9\W]*/ ) != null) {
		return {
			redirectUrl: details.url.replace( /(#[a-zA-Z0-9\W]*:~:text=[a-zA-Z0-9\W]*)/, '' )
		};
	}
}

chrome.webRequest.onBeforeRequest.addListener( remove_text_highlight, {urls: ["<all_urls>"]}, ["blocking"] );
