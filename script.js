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
  },
};
