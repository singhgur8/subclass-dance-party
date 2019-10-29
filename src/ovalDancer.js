var makeOvalDancer = function (top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="ovalDancer"></span>');
  this.setPosition(top, left);
};


makeOvalDancer.prototype = Object.create(makeDancer.prototype);
makeOvalDancer.prototype.constructor = makeOvalDancer;
// var oldStep = makeBlinkyDancer.prototype.step;


//makeBlinkyDancer.prototype.step(this);

makeOvalDancer.prototype.step = function () {


  makeDancer.prototype.step.call(this);

  // this.$node.rotate();

  //could be like a heart beat
  this.$node.fadeIn();
  this.$node.fadeOut();

};