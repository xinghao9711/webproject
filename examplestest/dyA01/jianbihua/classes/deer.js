function Deer(x,y, colorBody,colorHead) {
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

Deer.prototype.draw = function (context) {
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


    //nose
    context.beginPath();
    context.fillStyle = "red";
    context.arc(x-30,y-15, 7, 0, (Math.PI * 2), true);
    context.fill();
    context.stroke();
    context.fill();

    //head
    context.beginPath();
    //context.fillStyle = "rgba(255,255,0,0.5)";
    context.fillStyle = "#CD853F";
    context.moveTo(x-25,y-12);
    context.bezierCurveTo(x-22,y+40,x+50,y+40,x+52,y-22);
    context.bezierCurveTo(x+50,y-55,x-5,y-40,x,y-35);
    context.quadraticCurveTo(x-10,y-15,x-26,y-14);
    //context.closePath();
    context.fill();
    context.stroke();

    //ear
    context.beginPath();
    context.fillStyle = "#CD853F";
    //left ear
    context.moveTo(x+1,y-38);
    context.bezierCurveTo(x-20,y-50,x-20,y-30,x+1,y-38);
    //right ear
    context.moveTo(x+40,y-38);
    context.bezierCurveTo(x+60,y-50,x+60,y-30,x+40,y-38);
    context.fill();
    context.closePath();
    context.stroke();

    //buckhorn
    context.beginPath();
    context.fillStyle = "#663300";
    //left buckhorn
    context.moveTo(x+1,y-38);
    context.quadraticCurveTo(x-20,y-70,x-10,y-118);
    context.lineTo(x-7,y-118);
    context.quadraticCurveTo(x-10,y-65,x+5,y-38);

    context.moveTo(x-9,y-58);
    context.quadraticCurveTo(x-20,y-52,x-25,y-58);
    context.lineTo(x-25,y-62);
    context.quadraticCurveTo(x-20,y-55,x-9,y-63);

    context.moveTo(x-7,y-83);
    context.quadraticCurveTo(x+10 ,y-77,x+15,y-85);
     context.lineTo(x+15,y-90);
     context.quadraticCurveTo(x+10,y-80,x-7,y-88);

    context.moveTo(x-12,y-98);
    context.quadraticCurveTo(x-20,y-98,x-27,y-105);
    context.lineTo(x-27,y-110);
    context.quadraticCurveTo(x-20,y-102,x-12,y-102);
    context.closePath();
    context.fill();


    //right buckhorn
    context.beginPath();
    context.moveTo(x+35,y-42);
    context.quadraticCurveTo(x+75,y-70,x+60,y-118);
    context.lineTo(x+62,y-118);
    context.quadraticCurveTo(x+80,y-65,x+38,y-38);

    context.moveTo(x+60,y-58);
    context.quadraticCurveTo(x+70,y-55,x+80,y-62);
    context.lineTo(x+80,y-67);
    context.quadraticCurveTo(x+65,y-58,x+62,y-63);


    context.moveTo(x+62,y-80);
    context.quadraticCurveTo(x+45,y-80,x+40,y-100);
    context.lineTo(x+43,y-105);
    context.quadraticCurveTo(x+45,y-85,x+63,y-85);


    context.moveTo(x+65,y-105);
    context.quadraticCurveTo(x+80,y-102,x+90,y-118);
    context.lineTo(x+92,y-116);
    context.quadraticCurveTo(x+80,y-95,x+65,y-103);
    context.fill();

     context.stroke();

    //eye
    //left eye
    context.beginPath();
    context.moveTo(x+1,y-25);
    context.quadraticCurveTo(x+6,y-15,x+14,y-25);
    context.moveTo(x+3,y-21);
    context.quadraticCurveTo(x+2,y-16,x+1,y-15);
    context.moveTo(x+8,y-20);
    context.quadraticCurveTo(x+6,y-15,x+8,y-12);
    context.moveTo(x+12,y-21);
    context.quadraticCurveTo(x+13,y-15,x+15,y-15);
  //  context.stroke();

    //right eye
  //  context.beginPath();
    context.moveTo(x+24,y-25);
    context.quadraticCurveTo(x+29,y-15,x+37,y-25);
    context.moveTo(x+26,y-21);
    context.quadraticCurveTo(x+25,y-16,x+24,y-15);
    context.moveTo(x+31,y-20);
    context.quadraticCurveTo(x+29,y-15,x+31,y-12);
    context.moveTo(x+35,y-21);
    context.quadraticCurveTo(x+36,y-15,x+38,y-15);
    context.stroke();

    ///mouth
    context.moveTo(x+24,y+12);
    context.quadraticCurveTo(x+29,y+20,x+35,y+5);
    context.stroke();

    //neck
    context.beginPath();
    context.fillStyle = "red";
    context.moveTo(x+18,y+24);
    context.lineTo(x+21,y+30);
    context.quadraticCurveTo(x+40,y+26,x+40,y+22);
    context.lineTo(x+38,y+16);
    context.fill();

    context.stroke();

    //body
    context.beginPath();
    context.fillStyle = "#CD853F";
    context.moveTo(x+21,y+30);
    context.lineTo(x+21,y+60);
    //leg
    context.quadraticCurveTo(x+8,y+60,x-4,y+70);

    //context.lineTo(x-5,y+77);
    context.quadraticCurveTo(x-8,y+72,x-5,y+77);
    context.quadraticCurveTo(x+50,y+50,x+123,y+77);
    context.quadraticCurveTo(x+130,y+74,x+123,y+71);
    context.quadraticCurveTo(x+105,y+68,x+98,y+60);
    context.quadraticCurveTo(x+80,y+40,x+90,y+25);
    //tail
    context.quadraticCurveTo(x+105,y+20,x+98,y+15);
    context.quadraticCurveTo(x+88,y+24,x+85,y+23);
    // back
    context.lineTo(x+40,y+22);
    context.fill();
    context.stroke();
    context.closePath();
    //leg back
    context.beginPath();
    context.moveTo(x+21,y+52);
    //context.lineTo(x+21,y+60);
    context.bezierCurveTo(x-12,y+55,x-11,y+77,x+20,y+60);

    context.moveTo(x+92,y+56);
    //context.lineTo(x+21,y+60);
    context.bezierCurveTo(x+140,y+60,x+145,y+78,x+92,y+63);

    //context.quadraticCurveTo(x-18,y+60,x+51,y+63);
    context.fill();
    context.stroke();
    context.closePath();

    //abdomen
    context.beginPath();
    context.fillStyle = "#FAFAD2";
    //context.fillStyle = "red";
    context.moveTo(x+22,y+68);
    //context.lineTo(x+21,y+60);
    context.bezierCurveTo(x+40,y+75,x+75,y+75,x+92,y+69);
    //context.bezierCurveTo(x+40,y+55,x+75,y+55,x+22,y+68);

    context.fill();
    context.stroke();

   // context.closePath();
   //
   //
   //  //leg
   //  context.beginPath();
   //  context.moveTo(x-35,y+105);
   //  context.lineTo(x-38,y+128);
   //  context.moveTo(x-32,y+105);
   //  context.lineTo(x-35,y+128);
   //  context.stroke();
   //
   //  context.beginPath();
   //  context.moveTo(x+5,y+103);
   //  context.lineTo(x+8,y+128);
   //  context.moveTo(x+8,y+101);
   //  context.lineTo(x+11,y+128);
   //  context.stroke();
   //  context.closePath();
   //
   //  //foot
   //  context.beginPath();
   //  context.fillStyle = "black";
   //  context.moveTo(x+8,y+128);
   //  context.bezierCurveTo(x+30,y+130,x+30,y+120,x+11,y+122);
   //  context.fill();
   //  context.beginPath();
   //  context.fillStyle = "black";
   //  context.moveTo(x-38,y+128);
   //  context.bezierCurveTo(x-20,y+130,x-20,y+120,x-35,y+122);
   //  context.fill();
   //
   //  //hand
   //  context.beginPath();
   //  context.fillStyle = "#CD853F";
   //  //left hand
   //  context.moveTo(x-48,y+55);
   //  context.lineTo(x-75,y+55);
   //  context.bezierCurveTo(x-75,y+35,x-79,y+35,x-80,y+55);
   //  context.bezierCurveTo(x-100,y+54,x-100,y+58,x-80,y+58);
   //  context.bezierCurveTo(x-79,y+78,x-76,y+78,x-75,y+58);
   //  context.lineTo(x-48,y+58);
   //  context.stroke();
   //  context.fill();
   //  //right hand
   //  context.moveTo(x+30,y+55);
   //  context.lineTo(x+62,y+55);
   //  context.bezierCurveTo(x+63,y+35,x+66,y+35,x+67,y+55);
   //  context.bezierCurveTo(x+90,y+54,x+90,y+58,x+67,y+58);
   //  context.bezierCurveTo(x+65,y+78,x+63,y+82,x+63,y+58);
   //  context.lineTo(x+30,y+58);
   //  context.stroke();
   //  context.fill();
   //
   //  //tail
   //  context.beginPath();
   //  context.fillStyle = "#CD853F";
   //  context.moveTo(x-49,y+92);
   //  //context.lineTo(x-100,y+25);
   //  context.bezierCurveTo(x-115,y+75,x-115,y+35,x-110,y-15);
   //  context.bezierCurveTo(x-135,y+5,x-205,y+90,x-49,y+92);
   //  context.stroke();
   //  context.fill();

  if (this.lineWidth > 0) {
   // context.stroke();
  }
  context.restore();
};

Deer.prototype.getBounds = function () {
  return {
    x: this.x - this.radius,
    y: this.y - this.radius,
    width: this.radius * 2,
    height: this.radius * 2
  };
};
