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

  var topPos = (Math.random()) * 900;
  var bottomPos = (Math.random()) * 1100;
  var leftpos = (Math.random()) * 1200;
  var rightpos = (Math.random()) * 900;

  leftpos = String(leftpos) + 'px';
  rightpos = String(rightpos) + 'px';
  topPos = String(topPos) + 'px';
  bottomPos = String(bottomPos) + 'px';

  this.$node.animate({
    left: leftpos,
    right: rightpos,
    top: topPos,
    bottom: bottomPos,
  }
  );
  this.$node.animate({
    left: leftpos,
    right: rightpos,
    top: topPos,
    bottom: bottomPos,
  }
  );


};