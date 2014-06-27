document.addEventListener('click', function(){
  var value = document.title.substring(0, document.title.indexOf("-") - 1);
  chrome.storage.local.set({'value': value});
}, false);