function Fox(x,y, colorBody,colorHead) {
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

Fox.prototype.draw = function (context) {
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
    // context,moveTo(x+40,y-20);
    // context.quadraticCurveTo(x+100,y-15,x+42,y+60);
    // context.quadraticCurveTo(x+20,y-15,x+40,y-20);
  //   context.beginPath();
  //   context.moveTo(20,20);
  //   context.quadraticCurveTo(20,100,200,20);
  //  // context.lineTo();
  // context.closePath();
  // context.fill();

    //body
    context.beginPath();
    context.fillStyle = "red";
    context.moveTo(x-38,y+28);
    context.bezierCurveTo(x-100,y+155,x+80,y+115,x+20,y+25);
    context.stroke();
    context.fill();
    // context.closePath();


    //mouth
    context.beginPath();
    context.moveTo(x+40,y-20);
    context.quadraticCurveTo(x+80,y-10,x+42,y+10);
    context.quadraticCurveTo(x+30,y,x+40,y-20);
    context.closePath();
    context.fill();

    //head
    context.beginPath(); //
    //context.fillStyle = "rgba(255,255,0,0.5)";
    context.fillStyle = "#CD853F";
    context.moveTo(x+40,y-20);
    context.bezierCurveTo(x-100,y-75,x-70,y+95,x+42,y+10);
    context.closePath();
      context.fill();
    context.stroke();

    //ear
    context.beginPath();
    context.fillStyle = "#CD853F";
    //left ear
    context.moveTo(x-54,y-6);
    context.quadraticCurveTo(x-65,y-20,x-60,y-35);
    context.quadraticCurveTo(x-45,y-35,x-40,y-22);
    //right ear
    context.moveTo(x-35,y-26);
    context.quadraticCurveTo(x-37,y-45,x-25,y-50);
    context.quadraticCurveTo(x-10,y-35,x-18,y-30);
   // context.closePath();
    context.fill();
    context.stroke();

    //eye
    //left eye
    context.moveTo(x-15,y-10);
     context.beginPath();
     context.fillStyle = "white";
     context.arc(x-30,y-15, 7, 0, (Math.PI * 2), true);
     context.fill();
     context.stroke();

    context.beginPath();
    context.fillStyle = "black";
    context.arc(x-28,y-17, 3, 0, (Math.PI * 2), true);
    context.fill();
    context.stroke();


    //right eye
    context.moveTo(x-15,y-10);
    context.beginPath();
      context.fillStyle = "white";
    context.arc(x-12,y-18, 7, 0, (Math.PI * 2), true);
    context.fill();
    context.stroke();

    context.beginPath();
    context.fillStyle = "black";
    context.arc(x-10,y-19, 3, 0, (Math.PI * 2), true);
    context.fill();
    context.stroke();

    //face
    context.beginPath();
    context.moveTo(x-20,y+10);
    context.quadraticCurveTo(x-5,y+25,x+5,y+10);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.fillStyle = "red";
    context.arc(x-38,y+5, 7, 0, (Math.PI * 2), true);
    context.fill();
    //context.stroke();
    context.closePath();


    //leg
    context.beginPath();
    context.moveTo(x-35,y+105);
    context.lineTo(x-38,y+128);
    context.moveTo(x-32,y+105);
    context.lineTo(x-35,y+128);
    context.stroke();

    context.beginPath();
    context.moveTo(x+5,y+103);
    context.lineTo(x+8,y+128);
    context.moveTo(x+8,y+101);
    context.lineTo(x+11,y+128);
    context.stroke();
    context.closePath();

    //foot
    context.beginPath();
    context.fillStyle = "black";
    context.moveTo(x+8,y+128);
    context.bezierCurveTo(x+30,y+130,x+30,y+120,x+11,y+122);
    context.fill();
    context.beginPath();
    context.fillStyle = "black";
    context.moveTo(x-38,y+128);
    context.bezierCurveTo(x-20,y+130,x-20,y+120,x-35,y+122);
    context.fill();

    //hand
    context.beginPath();
    context.fillStyle = "#CD853F";
    //left hand
    context.moveTo(x-48,y+55);
    context.lineTo(x-75,y+55);
    context.bezierCurveTo(x-75,y+35,x-79,y+35,x-80,y+55);
    context.bezierCurveTo(x-100,y+54,x-100,y+58,x-80,y+58);
    context.bezierCurveTo(x-79,y+78,x-76,y+78,x-75,y+58);
    context.lineTo(x-48,y+58);
    context.stroke();
    context.fill();
    //right hand
    context.moveTo(x+30,y+55);
    context.lineTo(x+62,y+55);
    context.bezierCurveTo(x+63,y+35,x+66,y+35,x+67,y+55);
    context.bezierCurveTo(x+90,y+54,x+90,y+58,x+67,y+58);
    context.bezierCurveTo(x+65,y+78,x+63,y+82,x+63,y+58);
    context.lineTo(x+30,y+58);
    context.stroke();
    context.fill();

    //tail
    context.beginPath();
    context.fillStyle = "#CD853F";
    context.moveTo(x-49,y+92);
    //context.lineTo(x-100,y+25);
    context.bezierCurveTo(x-115,y+75,x-115,y+35,x-110,y-15);
    context.bezierCurveTo(x-135,y+5,x-205,y+90,x-49,y+92);
    context.stroke();
    context.fill();

    // context.quadraticCurveTo(x-65,y-20,x-60,y-35);
    // context.quadraticCurveTo(x-45,y-35,x-40,y-22);


  if (this.lineWidth > 0) {
   // context.stroke();
  }
  context.restore();
};

Fox.prototype.getBounds = function () {
  return {
    x: this.x - this.radius,
    y: this.y - this.radius,
    width: this.radius * 2,
    height: this.radius * 2
  };
};
