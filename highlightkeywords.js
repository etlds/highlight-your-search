// var highlighted_html = document.body.innerHTML.replace(/JavaScript/g, "<span style='background-color: yellow;'>JavaScript</span>");
// document.body.innerHTML = highlighted_html;
chrome.storage.local.get('value', function(result){
  console.log(result.value);
  if(result.value){
    var keywords = "(" + result.value.replace(/\s+/g, "|") + ")";
    console.log(keywords);
    var rex = new RegExp("\\s+" + keywords + "\\s+", "ig");
    console.log(rex);
    var tag_types = ["h1", "h2", "h3", "p", "div", "a"];
    for(var i = 0; i < tag_types.length; i++){
      var tags = document.getElementsByTagName(tag_types[i]);
      for(var j = 0; j < tags.length; j++){
        if(tags[j].childElementCount == 0){
          tags[j].innerHTML = tags[j].innerHTML.replace(rex, " <span style='background-color: yellow;'>$1</span> ");
        }
      }
    }
  }
});

// function when_match(match, contents, offset, s){
//   // match : The matched substring
//   // contents : The parenthesized submatch string
//   // offset : start index
//   // s : the total string
//   if(s.indexOf("autocomplete") > -1)
//     console.log(s);
//   if(s.match(/</g) === null || (s.match(/</g).length > 2 && s.match(/<input/g) === null))
//     return ' <span style="background-color: yellow;">' + contents + '</span> ';
//   else
//     return match;
// }
chrome.storage.local.clear();