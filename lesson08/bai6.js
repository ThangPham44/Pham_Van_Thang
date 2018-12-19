


var n ,sn;
var sum=0;

 do {
 	 n=prompt("Nhập n");
 	 sn=parseInt(n);
 	 if (n<=0) {
 	 	alert("Nhập n lớn hơn 0");
 	 }
 } while (n<=0);


 for (var i = 1; i <= n; i++) {
 	sum+=i;
 }
 document.write("Tổng là "+sum);