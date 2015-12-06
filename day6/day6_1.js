var input = require('fs').readFileSync('./input.txt').toString();
var map = {};
var actions = {
	"turn on": x => true,
	"turn off": x => false,
	"toggle": x => !x
};
input.split("\n").filter(x => x !== '').forEach((v) => {
	var cmd = v.split(/[, ]/);
	action = cmd.shift();
	if(action === 'turn')
		action += " " + cmd.shift();

	var startx = +cmd.shift();
	var starty = +cmd.shift();
	cmd.shift(); // trough
	var endx = +cmd.shift();
	var endy = +cmd.shift();

	for(var x = startx; x <= endx; x++) {
		for(var y = starty; y <= endy; y++) {
			map[x + "x" + y] = ~~actions[action](!!map[x + "x" + y]);
		}
	}
});
console.log(Object.keys(map).filter(x => map[x] == true).length);
