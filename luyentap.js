//bai1
let z = parseInt(prompt("nhập vào số a"));
let y = parseInt(prompt("nhập vào số b"));

if(z%y == 0){
    console.log(+z +" chia hết cho " +y);
}else if(y%z == 0){
    console.log(+y +" chia hết cho " +z)
}else{
    console.log("không chia hết");
}


//bai2

// Nhập độ dài các cạnh từ người dùng
var canhA = parseFloat(prompt("Nhập độ dài cạnh A:"));
var canhB = parseFloat(prompt("Nhập độ dài cạnh B:"));
var canhC = parseFloat(prompt("Nhập độ dài cạnh C:"));


function kiemTraTamGiac(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0) {
      return false; // Các cạnh không thể có độ dài âm hoặc bằng 0
    }
  
    if (a + b > c && b + c > a && c + a > b) {
      return true; // Các cạnh hợp lệ để tạo thành một tam giác
    } else {
      return false; // Các cạnh không thỏa mãn điều kiện tạo thành tam giác
    }
  }
  
  // Kiểm tra và in kết quả
  if (kiemTraTamGiac(canhA, canhB, canhC)) {
    console.log("Độ dài các cạnh nhập vào hợp lệ để tạo thành một tam giác.");
  } else {
    console.log("Độ dài các cạnh nhập vào không hợp lệ để tạo thành một tam giác.");
  }



  //bai3
  function kiemTraSoChinhPhuong(number) {
    if (number < 0) {
      return false; // Số chính phương không thể là số âm
    }
  
    var squareRoot = Math.sqrt(number);
    return squareRoot % 1 === 0; // Kiểm tra xem căn bậc hai của số có phải là số nguyên hay không
  }
  
  var userInput = parseFloat(prompt("Nhập một số:"));
  
  // Kiểm tra và in kết quả
  if (kiemTraSoChinhPhuong(userInput)) {
    console.log("Số vừa nhập là số chính phương.");
  } else {
    console.log("Số vừa nhập không phải là số chính phương.");
  }




  //bai4
  let year = parseInt(prompt("nhập vào 1 năm bất kì: "));

  if(year % 4 == 0 && year % 100 != 0){
    console.log(+year +":là năm nhuận");
  }else{
    console.log(+year +"không phải năm nhuận");
  }



  //bai5
  // Nhập hệ số a và b 
var t = parseFloat(prompt("Nhập hệ số a:"));
var d = parseFloat(prompt("Nhập hệ số b:"));

// Giải phương trình
if (t === 0) {
  if (d === 0) {
    console.log("Phương trình vô số nghiệm."); // Phương trình có vô số nghiệm
  } else {
    console.log("Phương trình vô nghiệm."); // Phương trình vô nghiệm
  }
} else {
  var x = -d / t;
  console.log("Nghiệm của phương trình là: x =", x); // Phương trình có nghiệm
}


//bai6
var userInput = parseInt(prompt("Nhập một số có 4 chữ số:"));

// Kiểm tra số có đúng 4 chữ số hay không
if (userInput < 1000 || userInput > 9999) {
  console.log("Số nhập vào không có đúng 4 chữ số.");
} else {
  // Tách các chữ số
  var hangNghin = Math.floor(userInput / 1000);
  var hangChuc = Math.floor((userInput % 1000) / 100);
  var hangTram = Math.floor((userInput % 100) / 10);
  var donVi = userInput % 10;

  // In kết quả
  console.log("Chữ số hàng nghìn:", hangNghin);
  console.log("Chữ số hàng chục:", hangChuc);
  console.log("Chữ số hàng trăm:", hangTram);
  console.log("Chữ số đơn vị:", donVi);
}



//bai7
// Nhập hệ số a, b và c 
var a = parseFloat(prompt("Nhập hệ số a:"));
var b = parseFloat(prompt("Nhập hệ số b:"));
var c = parseFloat(prompt("Nhập hệ số c:"));

// Tính delta
var delta = b * b - 4 * a * c;

// Kiểm tra giá trị của delta
if (delta > 0) {
  var x1 = (-b + Math.sqrt(delta)) / (2 * a);
  var x2 = (-b - Math.sqrt(delta)) / (2 * a);
  console.log("Phương trình có hai nghiệm phân biệt:");
  console.log("x1 =", x1);
  console.log("x2 =", x2);
} else if (delta === 0) {
  var x = -b / (2 * a);
  console.log("Phương trình có nghiệm kép:");
  console.log("x =", x);
} else {
  console.log("Phương trình không có nghiệm thực.");
}




//bai8
let f = prompt('Nhập a');
let g = prompt('Nhập b');

let pt = prompt("Nhập phép tính");

switch(pt){
    case "+":
        let sum = f + g;
        console.log(sum);
        break;
    case "-":
        let diff = f - g;
        console.log(diff);
        break;
    case "*":
        let multi = f*g;
        console.log(multi);
        break;
    case "/":
        let div = f/g;
        if(g===0){
            console.log("Phép tính không hợp lệ");
        }else{
            console.log(div);
        }
        break;
    default:
        console.log("Không hợp lệ");
}


//bai9
function kiemTraNgayTrongThang() {
    var month = parseInt(prompt("Nhập vào tháng (từ 1 đến 12):"));
    var years = parseInt(prompt("Nhập vào năm:"));
  
    // Kiểm tra tính hợp lệ của tháng và năm
    if (month < 1 || month > 12 || isNaN(month)) {
      console.log("Tháng không hợp lệ.");
      return;
    }
  
    if (years < 0 || isNaN(years)) {
      console.log("Năm không hợp lệ.");
      return;
    }
  
    // Tính số ngày trong tháng
    var soNgayTrongThang = new Date(years, month, 0).getDate();
  
    // In ra kết quả
    console.log("Số ngày trong tháng " + month + " năm " + years + " là: " + soNgayTrongThang);
  }
  
  kiemTraNgayTrongThang();



//bai10
// Các giá trị được coi là truthy trong JavaScript bao gồm:

// Đối tượng không rỗng (object)
// Một mảng không rỗng (array)
// Chuỗi không rỗng (string) khác ""
// Số nguyên không phải 0 (ví dụ: 1, -1)
// Số thực không phải 0 (ví dụ: 3.14, -0.5)
// Giá trị boolean true
// Bất kỳ đối tượng nào không phải là null hoặc undefined
// Các giá trị được coi là falsy trong JavaScript bao gồm:

// Giá trị boolean false
// Số 0
// Chuỗi rỗng (empty string: "")
// Giá trị null
// Giá trị undefined
// Giá trị NaN (Not-a-Number)