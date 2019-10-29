var makeSquareDancer = function (top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class = "squareDancer"></span>');
};


makeSquareDancer.prototype = Object.create(makeDancer.prototype);
makeSquareDancer.prototype.constructor = makeSquareDancer;
// var oldStep = makeBlinkyDancer.prototype.step;


//makeBlinkyDancer.prototype.step(this);

makeSquareDancer.prototype.step = function () {

  makeDancer.prototype.step.call(this);

  this.$node.slideUp();
  this.$node.slideDown();
};