function MySingleton () {
  MySingleton.count;
  if(!MySingleton.count) {
    MySingleton.count = 1;
    MySingleton.instance = new MySingleton;
  }
  if (MySingleton.instance) {
		return MySingleton.instance
  }
  
}

MySingleton.prototype.download = function(url){ };

var a = MySingleton();
var b = new MySingleton();
var c = new MySingleton();
var d = MySingleton();

console.log(a);

console.log(a===b); // true
console.log(b===c); // true
console.log(c===d); // true
console.log(a===d); // true