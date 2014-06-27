// var highlighted_html = document.body.innerHTML.replace(/JavaScript/g, "<span style='background-color: yellow;'>JavaScript</span>");
// document.body.innerHTML = highlighted_html;
chrome.storage.local.get('value', function(result){
  if(result.value){
    var keywords = "(" + result.value.replace(/\s+/g, "|") + ")";
    var tag_types = ["p"];
    for(var i = 0; i < tag_types.length; i++){
      var tags = document.getElementsByTagName(tag_types[i]);
      for(var j = 0; j < tags.length; j++){
        if(tags[j].childElementCount == 0){
          tags[j].innerHTML = tags[j].innerHTML.replace(new RegExp(keywords, "ig"), '<span style="background-color: yellow;">$1</span>');
        }
      }
    }
  }
});
chrome.storage.local.clear();