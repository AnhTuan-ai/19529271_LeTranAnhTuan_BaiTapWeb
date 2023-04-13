function myFunction() {
    var x = document.getElementById("myTextarea").value.length;
      if (x > 20)
        alert("Bạn đã gõ qúa số ký tự cho phép !");
        document.getElementById("demo").innerHTML = x;
    }
