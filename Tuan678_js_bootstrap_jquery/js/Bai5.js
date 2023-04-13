var D = new Date();
var ns, nht;
nht = D.getFullYear();
do{
    ns = prompt("nhap nam sinh: ","");
}while(parent(ns)>nht || parseInt(ns)<0);