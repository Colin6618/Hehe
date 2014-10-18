module.exports = {
	isArray: function(_d) {
		return Object.prototype.toString.call(_d) === '[object Array]';
	},
	isEmptyObjOrNull = function(obj) {
		if (obj === null) return true;
		for (var i in obj) {
			return false;
		}
		return true;
	};
}