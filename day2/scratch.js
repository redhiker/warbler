	var lib = ( function () {
	
		var o = {};
		
		var x;
		
		o.foo = function(){};
		
		o.bar = function(){};
		
		return o;
	}();

	var sum1 = 0;
	function sum() {
		
		for ( var ii in arguments ) {
			sum1 = sum1 + arguments[ii];
			
		}
		
	}
	
	sum(1,2,3,4,5);
	sum(6,7,8,9,10,11,12);
	sum(13,14,15);
	
	alert(sum1);
	
	function concatUpper() {
	
		var val = '';
		for( var ii in arguments ) {
			val += arguments[ii];
		}
		
		return val.toUpperCase();
	
	}
	
	alert(concatUpper('abc','dfg','xyz'));

var Animal = {
	sleep: function() {},
	eat: function() {}
};

var Cat = {
	meow: function() {},
	sleep: function() {},
	eat: function() {}
};
	function makeCat(age,name) {
		var o = Object.create(Cat);
		o.age = age;
		o.name = name;
	};
