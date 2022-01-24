var cartarr = JSON.parse(localStorage.getItem("cartitem")) || [];
discart(cartarr);
function discart(cartarr) {
  cartarr.map(function (elem, index) {
    var div1 = document.createElement("div");
    div1.setAttribute("id", "box1");
    var div2 = document.createElement("div");
    var avatar = document.createElement("img");
    avatar.setAttribute("src", elem.image_url);
    avatar.setAttribute("id", "avatar");
    var h4 = document.createElement("h6");
    h4.textContent = elem.brand;
    var h5 = document.createElement("p");
    h5.textContent = elem.name;
    var btn = document.createElement("button");
    btn.textContent = "";
    btn.setAttribute("id", "deltebtn");
    btn.addEventListener("click", function () {
      delcart(index);
    });
    var i = document.createElement("i");
    i.classList.add("bi", "bi-trash-fill");
    btn.append(i);
    //     var cost = document.createElement("h5");
    // cost.textContent = `INR ${elem.price}`;
    // cost.setAttribute("class", "Productcost")
    var cost = document.createElement("b");
    cost.textContent = `INR ${elem.price}`;
    // var div3 = document.createElement("div");
    // div3.setAttribute("id", "btndel")
    div2.append(h4, h5, cost, btn);
    div1.append(avatar, div2);
    document.querySelector("#blockelem").append(div1);
  });
}
var total = cartarr.reduce(function (acc, cv) {
  return acc + cv.price;
}, 0);
console.log(total);
document.querySelector("#total").textContent = total;
var x = total - (total * 30) / 100;
localStorage.setItem("total", JSON.stringify(x));

document.querySelector("#ta").textContent = x;
function delcart(index) {
  cartarr.splice(index, 1);
  localStorage.setItem("cartitem", JSON.stringify(cartarr));
  discart(cartarr);
  location.reload();
}
document.querySelector("form").addEventListener("submit", coupon);
function coupon() {
  event.preventDefault();
  var val = document.querySelector("#coupon").value;
  console.log(val);
  if (val == "GIFT4YOU") {
    // var alret = document.createElement("div");
    //     alret.setAttribute("id","alert");
    document.querySelector("#appcoup").textContent = "Coupon Applied";
    console.log(x);
    var y = Math.ceil(x - x / 10);
    document.querySelector("#ta").textContent = y;
    localStorage.setItem("total", JSON.stringify(y));

    alert("Coupon Applied");
  } else {
    alert("Invalid Coupon");
  }
}
function removeall() {
  document.querySelector("#blockelem").textContent = "";
}
var length = cartarr.length;
console.log(length);
localStorage.setItem("length", JSON.stringify(length));
