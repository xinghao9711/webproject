function Pig(x,y, colorBody,colorHead) {
  if (colorBody === undefined) { colorBody = "#ff0000"; }
  if (colorHead === undefined) { colorHead = "#00ff00"; }
  this.x = x;
  this.y = y;
  this.vx = 0;
  this.vy = 0;
  this.rotation = 0;
  this.scaleX = 1;
  this.scaleY = 1;
  //this.colorHead = utils.parseColor(colorHead);
  //this.colorBody = utils.parseColor(colorBody);
  this.lineWidth = 1;
}

Pig.prototype.draw = function (context) {
  context.save();
  context.translate(this.x, this.y);
  context.rotate(this.rotation);
  context.scale(this.scaleX, this.scaleY);
  
  context.lineWidth = this.lineWidth;
  context.fillStyle = this.color;
  context.beginPath();
  //x, y, radius, start_angle, end_angle, anti-clockwise
  //context.arc(0, 0, 5, 0, (Math.PI * 2), true);
    var x = this.x;
    var y = this.y;

    //ear
    context.beginPath();
    context.fillStyle = "#FFE4B5";
    //left ear
    context.moveTo(x-25,y-120);
    context.quadraticCurveTo(x-60,y-140,x-60,y-97);
    //right ear
    context.moveTo(x+25,y-120);
    context.quadraticCurveTo(x+60,y-140,x+60,y-97);
    context.fill();
    context.closePath();
    context.stroke();

    //body
    context.beginPath();
    context.fillStyle = "#FFE4B5";
    context.moveTo(x-40,y-15);
    context.quadraticCurveTo(x-50,y+40,x-40,y+68);
    context.quadraticCurveTo(x-35,y+55,x-30,y+68);
    context.lineTo(x-27,y+60);
    context.lineTo(x+27,y+60);
    context.lineTo(x+30,y+68);
    context.quadraticCurveTo(x+35,y+55,x+40,y+68);
    context.quadraticCurveTo(x+50,y+40,x+40,y-15);
    context.fill();
    context.stroke();

    //hand
    context.beginPath();
    context.moveTo(x-35,y+10);
    context.quadraticCurveTo(x-35,y+20,x-25,y+30);
    context.quadraticCurveTo(x-30,y+15,x-16,y+22);
    context.quadraticCurveTo(x-20,y+10,x-28,y+5);
    context.stroke();

    context.beginPath();
    context.moveTo(x+35,y+10);
    context.quadraticCurveTo(x+35,y+20,x+25,y+30);
    context.quadraticCurveTo(x+30,y+15,x+16,y+22);
    context.quadraticCurveTo(x+20,y+10,x+28,y+5);
    context.stroke();

    context.beginPath();
    context.moveTo(x-10,y+25);
    context.lineTo(x+10,y+45);
    context.moveTo(x+10,y+25);
    context.lineTo(x-10,y+45);
    context.stroke();

    //head
    context.beginPath();
    //context.fillStyle = "rgba(255,255,0,0.5)";
    context.fillStyle = "#FFE4B5";  //#FFE4B5  #FFC0CB
    context.moveTo(x-15,y-12);
    context.quadraticCurveTo(x,y+10,x+15,y-12);
    context.bezierCurveTo(x+90,y-12,x+90,y-120,x,y-122);
    context.bezierCurveTo(x-90,y-120,x-90,y-12,x-15,y-12);
    context.stroke();
    context.fill();

    //eye
    context.beginPath();
    context.fillStyle = "black";
    context.arc(x-20, y-90, 5, 0, (Math.PI * 2), true);
    context.fill();
    context.beginPath();
    context.arc(x+20, y-90, 5, 0, (Math.PI * 2), true);
    context.fill();

    //smile
    context.beginPath();
    context.fillStyle = "#FFC0CB";
    context.arc(x-50, y-80, 6, 0, (Math.PI * 2), true);
    context.fill();
    context.beginPath();
    context.arc(x+50, y-80, 6, 0, (Math.PI * 2), true);
    context.fill();

    //nose
    context.beginPath();
    context.fillStyle = "#FFA07A";
    context.moveTo(x,y-19);
    context.bezierCurveTo(x+60,y-12,x+60,y-65,x,y-60);
    context.bezierCurveTo(x-60,y-65,x-60,y-12,x,y-19);
    context.stroke();
    context.fill();

    context.beginPath();
    context.fillStyle = "#FF6347";
    context.moveTo(x-20,y-25);
    context.quadraticCurveTo(x-30,y-40,x-20,y-55);
    context.quadraticCurveTo(x-10,y-40,x-20,y-25);
    context.stroke();
    context.fill();

    context.beginPath();
    context.fillStyle = "#FF6347";
    context.moveTo(x+20,y-25);
    context.quadraticCurveTo(x+10,y-40,x+20,y-55);
    context.quadraticCurveTo(x+30,y-40,x+20,y-25);
    context.stroke();
    context.fill();




  if (this.lineWidth > 0) {
   // context.stroke();
  }
  context.restore();
};

Pig.prototype.getBounds = function () {
  return {
    x: this.x - this.radius,
    y: this.y - this.radius,
    width: this.radius * 2,
    height: this.radius * 2
  };
};
