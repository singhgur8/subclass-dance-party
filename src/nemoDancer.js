var nemoDancer = function (top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="nemoDancer"></span>');
  this.setPosition(top, left);
  $(document).ready(function() {
    $('.nemoDancer').mouseover(function() {
      $(this).fadeOut();
    });
  })
};


nemoDancer.prototype = Object.create(makeDancer.prototype);
nemoDancer.prototype.constructor = nemoDancer;
// var oldStep = makeBlinkyDancer.prototype.step;


//makeBlinkyDancer.prototype.step(this);

nemoDancer.prototype.step = function () {

  makeDancer.prototype.step.call(this);

  // var topPos = (Math.random()) * 900;
  // var bottomPos = (Math.random()) * 1100;
  // var leftpos = (Math.random()) * 1200;
  // var rightpos = (Math.random()) * 900;

  // leftpos = String(leftpos) + 'px';
  // rightpos = String(rightpos) + 'px';
  // topPos = String(topPos) + 'px';
  // bottomPos = String(bottomPos) + 'px';

  // this.$node.animate({
  //   left: leftpos,
  //   right: rightpos,
  //   top: topPos,
  //   bottom: bottomPos,
  // }
  // );
  // this.$node.animate({
  //   left: leftpos,
  //   right: rightpos,
  //   top: topPos,
  //   bottom: bottomPos,
  // }
  // );



};