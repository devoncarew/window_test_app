
chrome.app.window.onBoundsChanged.addListener(function() {
  // This does not print (but should).
  console.log('window size changed');
});

chrome.app.window.onClosed.addListener(function() {
  // This does not print (but should).
  console.log('window closed');
});

chrome.app.window.current().onBoundsChanged.addListener(function() {
  // This prints.
  console.log('window size changed 2');
});

chrome.app.window.current().onClosed.addListener(function() {
  console.log('window closed 2');
});

//chrome.app.window.current().contentWindow.onClosed.addListener(function() {
//  console.log('window closed 3');
//});
