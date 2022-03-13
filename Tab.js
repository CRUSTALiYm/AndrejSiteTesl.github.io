(function () {
   var app = "https://script.google.com/macros/s/AKfycbzngb-5a3tDdHJ445o5LxqeN63V_ihhF_Nxlkz3gxLyMeG3MA/exec",
      output = '',
      xhr = new XMLHttpRequest();
   xhr.open('GET', app);
   xhr.onreadystatechange = function() {
     if (xhr.readyState !== 4) return;

     if (xhr.status == 200) {
        try {
            var r = JSON.parse(xhr.responseText),
               result = r["result"];
            for (var i = 0; i < result.length; i++){
                  var obj = r["result"][i];
                  output += obj.join("<br/>") + "<br/><hr/>";
            }
        } catch(e) {}
     } 
     
   document.getElementById('info').innerHTML = output;

   }
   xhr.send()
})()
