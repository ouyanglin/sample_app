// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
var char_limit = 140;
var l;

function updateCount() {
  l = document.getElementById("micropost_content").value.length;
  document.getElementById("charCount").innerHTML = char_limit-l;
}
