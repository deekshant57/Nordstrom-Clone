// To create links for image section.
function URLchangeHandler1() {
  window.location.href =
    "https://www.nordstrom.com/browse/women/all?campaign=0301hpdtwmn&jid=j012040-14745&cid=e9bsm&cm_sp=merch-_-multi-div_14745_j012040-_-hp_corp_persnav_shop&";
}
function URLchangeHandler2() {
  window.location.href =
    "https://www.nordstrom.com/browse/men/all?campaign=0301hpdtmn&jid=j012040-14745&cid=29spt&cm_sp=merch-_-multi-div_14745_j012040-_-hp_corp_persnav_shop&";
}

function URLchangeHandler3() {
  window.location.href =
    "https://www.nordstrom.com/browse/kids/all?campaign=0301hpdtkids&jid=j012040-14745&cid=qa7of&cm_sp=merch-_-multi-div_14745_j012040-_-hp_corp_persnav_shop&";
}
function URLchangeHandler4() {
  window.location.href =
    "https://www.nordstrom.com/browse/home/all?campaign=0301cahpdthome&jid=j012040-14745&cid=dl9i5&cm_sp=merch-_-multi-div_14745_j012040-_-hp_corp_persnav_shop&";
}
function URLchangeHandler5() {
  window.location.href =
    "https://www.nordstrom.com/browse/beauty/all?campaign=0301hpdtbty&jid=j012040-14745&cid=dbwjn&cm_sp=merch-_-multi-div_14745_j012040-_-hp_corp_persnav_shop&";
}
function URLchangeHandler6() {
  window.location.href =
    "https://www.nordstrom.com/browse/designer/new?campaign=0301hpdtdsg&jid=j012040-14745&cid=wnpjm&cm_sp=merch-_-multi-div_14745_j012040-_-hp_corp_persnav_shop&";
}

//Get the button
var backtoTopbtn = document.getElementById("back-to-top");

// When the user scrolls down 1000px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 1000 ||
    document.documentElement.scrollTop > 1000
  ) {
    backtoTopbtn.style.display = "block";
  } else {
    backtoTopbtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// show modal when page loads

var myModal = new bootstrap.Modal(document.getElementById("myModal"), {});
myModal.show();
