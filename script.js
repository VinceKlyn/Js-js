var btn = document.getElementById('btn');
btn.addEventListener("click",function(){


var xhr = new XMLHttpRequest();
var url = 'https://randomuser.me/api/?results=20';

    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4 && xhr.status == 200){
            var data = JSON.parse(xhr.response).results;


        for (var x = 0; x<data.length;x++){
            var para = document.createElement("p");
            para.innerText = x + " - " + data[x].gender + data[x].name.first + " " + data[x].name.title +   data[x].name.last + " " + data[x].email + " " + data[x].location + " " + data[x].phone    ;
            para.id = "p" +x ; 
            document.querySelector("#content").appendChild(para);
            var imahe = document.createElement("img");
            imahe.src = data[x].picture.thumbnail;
            document.querySelector("#"+para.id).append(imahe);
  
            console.log(data);
        }
    }
}
    xhr.open('GET',url);
    xhr.send();

})