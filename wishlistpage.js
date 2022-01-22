var wishlistarr = JSON.parse(localStorage.getItem("wishlist")) || []
    console.log(wishlistarr)
        diswish(wishlistarr);
        function diswish(wishlistarr)
     {
        wishlistarr.map(function (elem,index){
         
         var div1 = document.createElement("div")
         div1.setAttribute("id","box1")
         var div2 =document.createElement("div")
        
        var avatar = document.createElement("img");
        avatar.setAttribute("src",elem.image_url);
        avatar.setAttribute("class","productimage");

        var h4 = document.createElement("h6"); 
        h4.textContent = elem.brand;
        h4.setAttribute("class","productbrand");

        var h5 = document.createElement("p");
        h5.textContent = elem.name;
        h5.setAttribute("class","productname");
        
        
        

        var btn = document.createElement("button");
        btn.textContent = "";
        btn.setAttribute("class","deltebtn")
        btn.addEventListener("click",function()
        {
            delcart(index)
        });

         var i = document.createElement("i");
        i.classList.add("bi", "bi-trash-fill");
        btn.append(i);
        

        var cost = document.createElement("p");
        cost.textContent = elem.price;
        cost.setAttribute("class","productcost");

        // var div3 = document.createElement("div");
        // div3.setAttribute("id","btndel")

        // div3.append(cost,btn);
        
        
        

        // div2.append()
        div1.append(avatar,h4,h5,cost,btn);
        document.querySelector("#blockelem").append(div1);
    });

     }

        
        function delcart(index) {
            wishlistarr.splice(index, 1)
            localStorage.setItem("wishlist", JSON.stringify(wishlistarr))
            diswish(wishlistarr)
            location.reload()
        }
        function removeall(){
            document.querySelector("#blockelem").textContent = "";
        }