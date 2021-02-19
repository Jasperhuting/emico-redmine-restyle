chrome.browserAction.onClicked.addListener(function(activeTab) {
    chrome.tabs.executeScript(null, {file: "content.js"});
});

chrome.runtime.onMessage.addListener(function (msg) {
    if (msg.action === "updateIcon") {
        if (msg.value) {
            chrome.browserAction.setIcon({
                path : "emico-on.png"
            });
        } else {
            chrome.browserAction.setIcon({
                path : "emico-off.png"
            });
        }
    }
});