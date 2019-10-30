var makeSharkDancer = function (top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="sharkDancer"></span>');
  this.setPosition(top, left);
  $(document).ready(function() {
    $('.sharkDancer').mouseover(function() {
      $(this).fadeOut();
    });
  })
};


makeSharkDancer.prototype = Object.create(makeDancer.prototype);
makeSharkDancer.prototype.constructor = makeSharkDancer;
// var oldStep = makeBlinkyDancer.prototype.step;


//makeBlinkyDancer.prototype.step(this);

makeSharkDancer.prototype.step = function () {


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