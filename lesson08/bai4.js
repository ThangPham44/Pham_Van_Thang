


var m,sm;
var n,sn;
var k,sk;
var sum=0;

do {
	m=prompt("Nhập m");
	sm=parseInt(m);
	n=prompt("Nhập n");
	sn=parseInt(n);
    if (m<n) {
    	alert('Nhập m lớn hơn n');
    }
} while (m<n);

k=prompt("Nhập k");
sk=parseInt(k);

for ( var i=sm-1; i >= sn+1; i--) {
	if (i % sk==0) {
	  sum=sum+i;
	}
	 
}
alert("Tổng là" +sum);