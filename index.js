module.exports = function addFun(x) {
	return function add(y) {
		return x + y;
	}
}