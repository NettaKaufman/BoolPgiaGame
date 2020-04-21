function showGame() {
  var x = document.getElementById("btn1");
  var y = document.getElementById("mainContainer");
  x.style.display = "none";
  y.style.display = " block";
  randomNumbers();
}
var numArr = new Array;
var numInput = new Array();
var isBP = new Array();

function randomNumbers()
{
  var numArr = [];
  while (numArr.length < 5)
    {
    var n =  Math.floor(Math.random() * 9 + 1);
    if (numArr.indexOf(n) == -1) {
      numArr.push(n);
      }
    }
      for ( i = 0; i < 4; i++) {
       console.log(numArr[i]);
      }
    }



function  checkNums(numArr)
{

   numInput[0] = document.getElementById("num1").value;
   numInput[1] = document.getElementById("num2").value;
   numInput[2] = document.getElementById("num3").value;
   numInput[3] = document.getElementById("num4").value;
   for (var i = 0; i < 4; i++) {
     console.log(numInput[i]);
   }
   for ( i = 0; i < 4; i++) {
    console.log(numArr[i]);
   }
  for (var i = 0; i < 4; i++)
   {
     if (numInput[i] == numArr[i])
     {
       isBP[i] = "X";
     }
     else
     {
       for (var j = 0; j<4; j++)
       {
         if (numInput[i] == numArr[j])
          {isBP[i] = "O";}
         else
          { isBP[i] = "-"; }
       }

     }

     }
     for (var i = 0; i < 4; i++)
       {  console.log(isBP[i]);  }



}
