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

  var leftpos = (Math.random()) * 1200;
  var rightpos = (Math.random()) * 900;

  leftpos = String(leftpos) + 'px';
  rightpos = String(rightpos) + 'px';


  this.$node.animate({
    left: leftpos,
    right: rightpos,
  }
  );
  this.$node.animate({
    left: leftpos,
    right: rightpos,
  }
  );

};