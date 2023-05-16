$(document).ready(function(){

    $("#btnmodal").click(function(){
        $("#myModal").modal()
    })



    var textMa1 = $("#ma")
    var tbMa1 = $("#tbma")
    function ma1(){
        var re = /^[A-Z]{1,3}\-[A-Z]{3}\-\d{2}\-\d{4}$/;
        if(textMa1.val() == ""){
            tbMa1.html("Bắt buộc nhập");
            return false;
        }
        if(!re.test(textMa1.val())){
            tbMa1.html("Mã theo Mẫu : XXX-XXX-00-0000");
            return false;
        }
        tbMa1.html("*");
        return true;
    }
    textMa1.blur(ma1);

    var textMa2 = $("#ten")
    var tbMa2 = $("#tbten")
    function ma2(){
        var re = /^\D{1,}[^!@#$%^&*()_+-=~:"<>,.?]$/;
        if(textMa2.val() == ""){
            tbMa2.html("Bắt buộc nhập");
            return false;
        }
        if(!re.test(textMa2.val())){
            tbMa2.html("Nhập Tên!");
            return false;
        }
        tbMa2.html("*");
        return true;
    }
    textMa2.blur(ma2);

    var textMa3 = $("#tuoi")
    var tbMa3 = $("#tbtuoi")
    function ma3(){
        var re = /^[0-9]{1,}$/;
        if(textMa3.val() == ""){
            tbMa3.html("Bắt buộc nhập");
            return false;
        }
        if(textMa3.val() <= 0){
            tbMa3.html("Nhập số lớn 0");
            return false;
        }
        if(!re.test(textMa3.val())){
            tbMa3.html("Nhập số ");
            return false;
        }
        tbMa3.html("*");
        // if(textMa3.val() < 21){
        //   var a = textMa3.val()*35000;
        //   textMa4.val(a);
        // }
        // if(textMa3.val() <= 50){
        //   var a = textMa3.val()*30000;
        //   textMa4.val(a);
        // }
        // if(textMa3.val() > 50){
        //   var a = textMa3.val()*15000;
        //   textMa4.val(a);
        // }
        return true;
    }
    textMa3.blur(ma3);

    var textMa4 = $("#tien")
    var tbMa4 = $("#tbtien")
    function ma4(){
        var re = /^[0-9]{1,}$/;
        if(textMa4.val() == ""){
            tbMa4.html("Bắt buộc nhập");
            return false;
        }
        if(textMa4.val() <= 0){
            tbMa4.html("Nhập số lớn 0");
            return false;
        }
        if(!re.test(textMa4.val())){
            tbMa4.html("Nhập số ");
            return false;
        }
        tbMa4.html("*");
        return true;
    }
    textMa4.blur(ma4);

    // var textMa5 = $("#tien")
    // var tbMa5 = $("#tbtien")
    // function ma5(){
    //     var re = /^[0-9]{1,}$/;
    //     if(textMa5.val() == ""){
    //         tbMa5.html("Bắt buộc nhập");
    //         return false;
    //     }
    //     if(textMa5.val() <= 0){
    //         tbMa5.html("Nhập số lớn 0");
    //         return false;
    //     }
    //     if(!re.test(textMa5.val())){
    //         tbMa5.html("Nhập số ");
    //         return false;
    //     }
    //     tbMa5.html("*");
    //     return true;
    // }
    // textMa5.blur(ma5);

    // var textMa6 = $("#tien")
    // var tbMa6 = $("#tbtien")
    // function ma6(){
    //     var re = /^[0-9]{1,}$/;
    //     if(textMa6.val() == ""){
    //         tbMa6.html("Bắt buộc nhập");
    //         return false;
    //     }
    //     if(textMa6.val() <= 0){
    //         tbMa6.html("Nhập số lớn 0");
    //         return false;
    //     }
    //     if(!re.test(textMa6.val())){
    //         tbMa6.html("Nhập số ");
    //         return false;
    //     }
    //     tbMa6.html("*");
    //     return true;
    // }
    // textMa6.blur(ma6);
})
//add 
function add() {
    var payload = {};
    payload['ma'] = document.getElementById("ma").value;
    payload['ten'] = document.getElementById("ten").value;
    payload['tuoi'] = document.getElementById("tuoi").value;
    payload['tien'] = document.getElementById("tien").value;
    payload['hinh'] = document.getElementById("hinh").value;

  
  
    fetch('https://64535c59e9ac46cedf2333fd.mockapi.io/api/objects', {
      method: 'POST',
      headers: {'content-type':'application/json'},
      // Send your data in the request body as JSON
      body: JSON.stringify(payload)
    }).then(res => {
      if (res.ok) {
          return res.json();
      }
      // handle error
    }).then(task => {
      document.getElementById("ma").value = "";
      document.getElementById("ten").value = "";
      document.getElementById("tuoi").value = "";
      document.getElementById("tien").value = "";
      document.getElementById("hinh").value = "";
      getData();
    }).catch(error => {
      // handle error
    })
  
  }

//delete data
function deleteData(id){
    fetch(`https://64535c59e9ac46cedf2333fd.mockapi.io/api/objects/${id}`, {
    method: 'DELETE',
  }).then(res => {
    if (res.ok) {
        return res.json();
    }
    // handle error
  }).then(task => {
    getData();
  }).catch(error => {
    // handle error
  })
  }

// getdata
function getData() {
    fetch('https://64535c59e9ac46cedf2333fd.mockapi.io/api/objects', {
    method: 'GET',
    headers: {'content-type':'application/json'},
  }).then(res => {
    if (res.ok) {
      console.log(res)
        return res.json();
    }
  }).then(tasks => {
    var tmpData = "";
    tasks.forEach(obj => {
      tmpData+="<tr>"
      tmpData+="<td>"+obj.ma+"</td>"
      tmpData+="<td>"+obj.ten+"</td>"
      tmpData+="<td>"+obj.tuoi+"</td>"
      tmpData+="<td>"+obj.tien+"</td>"
      tmpData+="<td><img src="+obj.hinh+"></td>"
      tmpData+="<td><button class='btn-info'onclick='editData(`"+obj.id+"`)'>Edit</button></td>"
      tmpData+="<td><button class='btn-danger' onclick='deleteData(`"+obj.id+"`)'>Delete</button></td>"
      tmpData+="</tr>"
    });
    document.getElementById("tbData").innerHTML = tmpData;
  }).catch(error => {
    // handle error
  })
  }
  getData();
///////////////
