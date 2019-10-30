var makeDoriDancer = function (top, left, timeBetweenSteps) {
  //var DoriDancer = makeDancer(top, left, timeBetweenSteps);

  makeDancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function


  // DoriDancer.step = function() {
  //   // call the old version of step at the beginning of any call to this new version of step
  //   oldStep();
  //   // toggle() is a jQuery method to show/hide the <span> tag.
  //   // See http://api.jquery.com/category/effects/ for this and
  //   // other effects you can use on a jQuery-wrapped html tag.
  //   DoriDancer.$node.toggle();
  // };
  // var oldStep = this.step;
  // return DoriDancer;
};


makeDoriDancer.prototype = Object.create(makeDancer.prototype);
makeDoriDancer.prototype.constructor = makeDoriDancer;
// var oldStep = makeDoriDancer.prototype.step;


//makeDoriDancer.prototype.step(this);

makeDoriDancer.prototype.step = function () {
  // call the old version of step at the beginning of any call to this new version of step

  //oldStep.call(this);
  makeDancer.prototype.step.call(this);

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};
