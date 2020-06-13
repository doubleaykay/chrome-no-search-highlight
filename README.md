# Remove Search Highlighting
A Chrome extension to prevent Google Search from highlighting text in webpages.

## What are you talking about?
See: https://www.theverge.com/2020/6/4/21280115/google-search-engine-yellow-highlight-featured-snippet-anchor-text

## What does this extension do?
It prrevents text from being highlighted by removing the part of the URL (which Google injects) that tells Chrome to highlight that text.

## How does Google do that?
See: https://github.com/WICG/scroll-to-text-fragment

Basically, when they pull a bit of text from the webpage for their search result, they tell Chrome to scroll to that text via the "scroll-to-text-fragment" functionality.

## Credits
This repo is forked from https://github.com/johngodley/chrome-remove-affiliate-links. Thank you @johngodley for the initial code.

I simply modified the extension to work on all webpages and to only remove the part of the URL Google injects to highlight text.