var crypto = require('crypto');

function checksum (str, algorithm, encoding) {
	return crypto
	.createHash(algorithm || 'md5')
	.update(str, 'utf8')
	.digest(encoding || 'hex')
}

for(var i = 0; true; i++) {
	if(checksum("yzbqklnj" + i).substr(0, 6) === "000000") {
		console.log(i);
		break;
	}
}
