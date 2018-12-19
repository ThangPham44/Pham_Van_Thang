	





	/*  var thong_bao="Nhập vào 1 số ?";

	 var kq = prompt(thong_bao);

	 var so = parseInt(kq);

	  //  alert(1 + so);	
    document.writeln("<b style='color :red'>"+(1+so)+"</b><br>")




     function tong_2_so(a,b){
       return a+b;
     }

     function tong_2_so(a,b){
     	document.writeln(a+b);
     }*/


var sn;
var n;
do{
  sn =prompt("Nhập số n dương:");
  n= parseInt(sn);
}
while (n<=0);
  var mang =new Array(n);
  var smang=new Array(n);

  for (var i = 0; i < mang.length; i++) {
      smang[i]=	prompt("Nhập số thứ" +(i+1));
      mang[i]= parseInt(smang[i]);

  }
  var tong =0;
  for (var i = 0; i < mang.length; i++) {
  	tong=tong+mang[i];
  }
  document.writeln("Tổng là:"+tong);
 