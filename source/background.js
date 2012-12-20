/*
 * Redirect m.youtube.com to youtube.com
 * Only works on first load (when URL changes)
 */

var mobileYoutubeRegex = /(.*:\/\/)(m\.)(youtube\.com\/.*)/;

// Add listener for all tabs
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    /*
     * Whenever a tab changes - check the URL. if it is an m.youtube.com url,
     * we are going to replace it!
     */
    if (changeInfo.url) {
        if (changeInfo.url.match(mobileYoutubeRegex)) {
            var newUrl = changeInfo.url.replace(mobileYoutubeRegex, "$1$3");
            chrome.tabs.update(tabId, {url: newUrl});
        }
    }

});