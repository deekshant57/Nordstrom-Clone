var wishlistarr = JSON.parse(localStorage.getItem("wishlist")) || []
var cartarr = JSON.parse(localStorage.getItem("cartitem"))
var wishtocart= wishlistarr
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
        var add = document.createElement("button");
        add.textContent="cart ";
        add.setAttribute("class","bag");
        add.addEventListener("click",function()
        {
            addbag(elem,index)
        })
        
        var i = document.createElement("i");
        i.classList.add("bi", "bi-bag-fill");
        add.append(i);

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
        cost.textContent =  `INR ${elem.price}`;
        cost.setAttribute("class","productcost");

        // var div3 = document.createElement("div");
        // div3.setAttribute("id","btndel")

        // div3.append(cost,btn);
        
        
        

        // div2.append()
        var baganddel = document.createElement("div");
        baganddel.setAttribute("class","bagAnddel");
        baganddel.append(add,btn);
        div1.append(avatar,h4,h5,cost,baganddel);
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
        function addbag(elem,index)
        {
            wishlistarr.splice(index,1)
            console.log(wishlistarr)
            localStorage.setItem("wishlist", JSON.stringify(wishlistarr))
            cartarr.push(elem)
            localStorage.setItem("cartitem",JSON.stringify(cartarr))
            console.log(cartarr)
            location.reload()
            alert("Product is added to bag!")

            
           

        }