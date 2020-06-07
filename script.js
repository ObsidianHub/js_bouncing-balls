const Ball = function (x, y, radius) {
  this.color =
    "rgb(" +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    ")";
  this.direction = Math.random() * Math.PI * 2;
  this.radius = radius;
  this.speed = Math.random() * 3 + 1;
  this.x = x;
  this.y = y;
};

Ball.prototype = {
  updatePosition: function (width, height) {
    this.x += Math.cos(this.direction) * this.speed;
    this.y += Math.sin(this.direction) * this.speed;

    if (this.x - this.radius < 0) {
      this.x = this.radius;

      this.direction = Math.atan2(
        Math.sin(this.direction),
        Math.cos(this.direction) * -1
      );
    } else if (this.x + this.radius > width) {
      this.x = width - this.radius;

      this.direction = Math.atan2(
        Math.sin(this.direction),
        Math.cos(this.direction) * -1
      );
    }
  },
};
