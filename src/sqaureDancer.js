var makeSquareDancer = function (top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="squareDancer"></span>');
  this.setPosition(top, left);
};


makeSquareDancer.prototype = Object.create(makeDancer.prototype);
makeSquareDancer.prototype.constructor = makeSquareDancer;
// var oldStep = makeBlinkyDancer.prototype.step;


//makeBlinkyDancer.prototype.step(this);

makeSquareDancer.prototype.step = function () {


  makeDancer.prototype.step.call(this);

  // this.$node.rotate();
  this.$node.animate({
    left: '+=35px',
    right: '+=35px',
  }
  );
  this.$node.animate({
    left: '30px',
    right: '30px'
  }
  );

};