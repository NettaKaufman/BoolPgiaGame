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
var flag = true;
var i; var j;


function randomNumbers()
{
  numArr = [];
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


  for ( i = 0; i < 4; i++)
   {
     if (numInput[i] == numArr[i])
     {
       isBP[i] = "X";
     }
     else
     {
       for ( j = 0; j<4; j++)
       {
         if (numArr[i] == numInput[j])
          {isBP[i] = "O";}
         else
          { isBP[i] = "-"; }
       }

     }

     }
     for (var i = 0; i < 4; i++)
       {  console.log(isBP[i]);  }

       var divInfo = document.getElementById('list');
       var quote = document.createElement('p');
       var t;
       t =numInput[0] + " "+numInput[1] + " "+numInput[2] + " "+numInput[3] + "  "+  isBP[0] + " " + isBP[1]+ " "+isBP[2] + " " + isBP[3];
       divInfo.appendChild(quote);
       quote.innerHTML += t;
      for ( i = 0; i < 4; i++) {
        if (isBP[i] != "X")
        {  flag=false;  }
        }
      if (flag) {
          alert("you won!");
          var a = document.getElementById("startOver");
          a.style.display = "block";
      }


  }
