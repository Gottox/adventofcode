var input = require('fs').readFileSync('./input.txt').toString();
var map = {};
var actions = {
	"turn on": x => x+1,
	"turn off": x => x == 0 ? x : x - 1,
	"toggle": x => x+2
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
			map[x + "x" + y] = actions[action](map[x + "x" + y] || 0);
		}
	}
});
console.log(Object.keys(map).reduce((r, x) => r + map[x], 0));
