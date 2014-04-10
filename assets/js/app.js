(function() {
  var MyClass;

  MyClass = (function() {
    function MyClass() {}

    MyClass.prototype.something = 1;

    return MyClass;

  })();

}).call(this);
;(function() {
  var myFunc;

  myFunc = function() {
    return console.log("This function!");
  };

}).call(this);
