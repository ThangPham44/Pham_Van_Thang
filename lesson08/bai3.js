
var n;
var sum=0;
var sn;
do {
	n = prompt("Nhập n");
	sn = parseInt(n);
	if (n<0) {
		alert('Nhập n lớn hơn 0');
	}
} while (n<=0);

for (var i = 1; i <= sn; i++) {
	sum+=(1/i);
}
document.write("Tổng là:"+sum);
