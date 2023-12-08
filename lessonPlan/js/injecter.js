async function getTabId() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

function getTitle() {
  return document.title;
}

chrome.scripting
  .executeScript({
    target: { tabId: getTabId() },
    func: getTitle,
  })
  .then(() => console.log("injected a function"));
