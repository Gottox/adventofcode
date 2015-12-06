var input = require('fs').readFileSync('./input.txt').toString();
var map = {"0x0":1}, r = {x:0, y:0}, s = {x:0, y:0};
input.split("").forEach((v, index) => {
	var c = index % 2 == 0 ? r : s;
	switch(v) {
		case 'v': c.x--; break;
		case '^': c.x++; break;
		case '<': c.y--; break;
		case '>': c.y++; break;
	}
	map[c.y + "x" + c.x] = 1;
});
console.log(Object.keys(map).length);
