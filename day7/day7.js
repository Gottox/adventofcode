var input = require('fs').readFileSync('./input.txt').toString();
var ops = {
	"NOT": "~",
	"OR": "|",
	"AND": "&",
	"LSHIFT": "<<",
	"RSHIFT": ">>"
}
function gen() {
	return input.split("\n").filter(x => x.length).reduce((r,v) => {
		var cmd = v.split(/ *-> */, 2);
		r[cmd[1]] = new Function("var r = "
				+ cmd[0].split(/ +/).map(x => ops[x] || (isNaN(x) ? "this['"+x+"']()" : x)).join(" ")
				+ "; return (this."+cmd[1]+" = function() {return r;})();");
		return r;
	}, {});
}
var result;
console.log(result = gen().a());

var funcs = gen();
funcs.b = function() {
	return result;
};
console.log(funcs.a());
