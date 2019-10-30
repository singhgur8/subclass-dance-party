describe('nemoDancer', function() {

  var nemoDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    nemoDancer = new nemoDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(nemoDancer.$node).to.be.an.instanceof(jQuery);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(nemoDancer, 'step');
      expect(nemoDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(nemoDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(nemoDancer.step.callCount).to.be.equal(2);
    });
  });
});