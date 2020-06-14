# No Search Highlight
A Chrome extension to prevent Google Search from highlighting text in webpages.

## How do I install it?
Download the zip file from the releases tab, unzip it somewhere, and install as an "Unpacked Extension." If this goes up on the Chrome Web Store, you can install it from there too (link will be provided).

## How does it work?
When Chrome wants to load a URL that contains the following flag: `#:~:text=`, this extension replaces the flag and subsequent part of the URL with nothing then tells Chrome to load that modified URL.

## What are you talking about?
See: https://www.theverge.com/2020/6/4/21280115/google-search-engine-yellow-highlight-featured-snippet-anchor-text

## How does Google do that?
See: https://github.com/WICG/scroll-to-text-fragment

## Credits
This repo is forked from https://github.com/johngodley/chrome-remove-affiliate-links. Thank you @johngodley for the initial code.

I modified the extension to work on all webpages and only remove the part of the URL Google injects to highlight text.

Icons by Dan Strauss. Thanks :)
