let p=prompt("enter the pattern value");
let st;
let  a;
for(i=1;i<=p;i++){
    a=64;
    for(j=1;j<=i;j++){
        a++;
        st=String.fromCharCode(a);
        document.write(st);
    }
    document.write("<br>");
}