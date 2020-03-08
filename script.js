function showGame() {
  var x = document.getElementById("btn1");
  var y = document.getElementById("mainContainer");
  x.style.display = "none";
  y.style.display = " block";
  randomNumbers();
}

var numArr = new Array();

function randomNumbers() {
  var flag;
  for (var i = 0; i < 4; i++) {
    numArr[i] = Math.floor(Math.random() * 9 + 1);
    flag = true;
    if(i>0){
    for (var j = 0; j <i ; j++) {
      if(numArr[i] == numArr[j]){flag == false}
        }
    while (flag == false){
      flag = true;
      numArr[i] = Math.floor(Math.random() * 9 + 1);
      for (var j = 0; j <=i ; j++) {
        if(numArr[i] == numArr[j]){flag == false}
              }
          }
        }

      }
      for (var i = 0; i < 4; i++) {
       console.log(numArr[i]);
      }

    }






function  checkNums(){
  var nums = new Array();
  var isBP = new Array();
   nums[0] = document.getElementById("num1").value;
   nums[1] = document.getElementById("num2").value;
   nums[2] = document.getElementById("num3").value;
   nums[3] = document.getElementById("num4").value;
   for (var i = 0; i < 4; i++) {
     console.log(nums[i ]);
   }
  for (var i = 0; i < 4; i++) {
    if (nums[i] == numArr[i]) {
      isBP[i] == "BOOL!";
    }
    else{
      for (var j = 0; j<4; j++){
        if (nums[i] == numArr[j]){isBP[j] == "Pgia";}
      if(isBP[i] == null)
        {isBP[i] = "Not";}
    }

  }

  }
  for (var i = 0; i < 4; i++) {
    console.log(isBP[i]);
  }


//   if (arr == a) {
//         arr[0] = 'bool';
//       }
//         else if (a1 == b || a1 == c || a1 == d) {
//           arr[0] = 'Pgia';
//         }
//         else {
//           arr[0] = 'not';
//         }
//
//
//
//
//
//   if (document.getElementById("num1").value > document.getElementById("num2").value) {
//     document.getElementById('bigger').textContent = "num1 is bigger!"
//   }
}
