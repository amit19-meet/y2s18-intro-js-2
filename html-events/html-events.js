// Put all your JavaScript in this file!
function favColor() {
	var answer= prompt("What's your favorite color?");
	var change= document.getElementsByTagName("body");
	change[0].style.backgroundColor= answer;


}