


var n,sn;

var sum=0;

var giai_thua=1;

do {
	n=prompt("Nhập n");
	sn=parseInt(n);
	if (n<=0) {
		aleart( "Nhập n lớn hơn 0");
	}
} while (n<=0);

for ( i = 1; i <= sn; i++) {
	giai_thua*=i;
	sum+=(1/giai_thua);
}
document.write("Tổng là"+sum);
