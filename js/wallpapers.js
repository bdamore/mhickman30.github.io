var firstName = "Matt Hickman";
var aye = document.getElementById("downlink");

function save() {
	console.log("Save");
	var canvas = document.getElementById("myCanvas");
	var img = canvas.toDataURL("image/png");
	var w = window.open("");
	w.document.write('<img src="' + img + '"/>');
	console.log("Written");
}

document.getElementById("one").onclick = function() {
	console.log("One");
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	var img = document.getElementById("one");
	ctx.drawImage(img, 0, 0, 324, 576);
	ctx.font = "18px Dancing Script";
	ctx.fillStyle = "white";
	ctx.textAlign = "right";
	ctx.fillText(firstName, 316, 566);
	aye.href = "";
	console.log("done");
};

document.getElementById("two").onclick = function() {
	console.log("Two");
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	var img = document.getElementById("two");
	ctx.drawImage(img, 0, 0, 324, 576);
	ctx.font = "18px Dancing Script";
	ctx.fillStyle = "white";
	ctx.textAlign = "right";
	ctx.fillText(firstName, 316, 566);
	aye.href = ""
	console.log("done");
};

document.getElementById("three").onclick = function() {
	console.log("Three");
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	var img = document.getElementById("three");
	ctx.drawImage(img, 0, 0, 324, 576);
	ctx.font = "18px Dancing Script";
	ctx.fillStyle = "white";
	ctx.textAlign = "right";
	ctx.fillText(firstName, 316, 566);
	aye.href = "";
	console.log("done");
};

document.getElementById("four").onclick = function() {
	console.log("Four");
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	var img = document.getElementById("four");
	ctx.drawImage(img, 0, 0, 324, 576);
	ctx.font = "18px Dancing Script";
	ctx.fillStyle = "white";
	ctx.textAlign = "right";
	ctx.fillText(firstName, 316, 566);
	aye.href = "";
	console.log("done");
};
