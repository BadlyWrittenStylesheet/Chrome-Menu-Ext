function getTabId() {
  return new Promise((resolve) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const currentTab = tabs[0];
      resolve(currentTab.id);
    });
  });
}



console.log(getTabId());



chrome.scripting
  .executeScript({
    target: { tabId: getTabId() },
    files: ["script.js"],
  })
  .then(() => console.log("script injected"));




chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(
    sender.tab
      ? "from a content script:" + sender.tab.url
      : "from the extension"
  );
  if (request.greeting === "hello") sendResponse({ farewell: "goodbye" });
});

// async function injectScript(tabId) {
//   return new Promise((resolve) => {
//     chrome.scripting.executeScript(
//       {
//         target: { tabId: tabId },
//         files: ["js/script.js"],
//       },
//       () => resolve()
//     );
//   });
// }

// getTabId().then((tabId) => {
//   injectScript(tabId).then(() => {
//     console.log("Script injected into tab with ID:", tabId);
//   });
// });
