chrome.browserAction.onClicked.addListener((tab) => {
  if (tab.url.includes('echarts.apache.org/examples') && tab.url.includes('editor.html')) {
    chrome.tabs.sendMessage(tab.id, { action: "copyCode" });
  }
}); 