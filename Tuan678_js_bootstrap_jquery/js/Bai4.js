var SoLuong, x;
var DS = new Array(100);
SoLuong = prompt("nhap so nguoi cho phong ban :", 3);
for (i=0; i < SoLuong; i++)
{
    DS[i] = prompt("nhap vao ho ten: ","");
}

DS.sort();
document.write("<H3> Danh sach phong ban sau khi da sap xep</H3>");
for(x in DS)
{
    document.write(DS[x] + "<BR>");
}
