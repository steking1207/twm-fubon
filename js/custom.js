$(document).ready(function() {
    $("#txtboxToFilter").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
             // Allow: Ctrl/cmd+A
            (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
             // Allow: Ctrl/cmd+C
            (e.keyCode == 67 && (e.ctrlKey === true || e.metaKey === true)) ||
             // Allow: Ctrl/cmd+X
            (e.keyCode == 88 && (e.ctrlKey === true || e.metaKey === true)) ||
             // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
});

$(document).ready(function() {
    $("#sn").submit(function(e) {
        e.preventDefault();
        $("#coupon").fadeIn("fast");
    });
});

function myFunction() {
    var copyText = document.getElementById("series");
    copyText.select();
    document.execCommand("Copy");
//    alert("已複製至剪貼簿: " + copyText.value);
    alert("已複製序號");
}


var inputField = document.getElementsByTagName("input");

var selectField = document.getElementsByTagName("select");

check(inputField);
checkSelect(selectField);

function validateSelect(sample, error) {
  if (sample.value.length < 8 || sample.value == null) {

    sample.classList.add("input-error");
    error.classList.add("is-active");
  } else {
    error.classList.remove("is-active");
    sample.classList.remove("input-error");
  }
}

function check(inputToCheck) {
  for (i = 0; i < inputToCheck.length; i++) {
    inputToCheck[i].addEventListener(
      "input",
      function(event) {
        validateInFocus(event.target, event.target.nextElementSibling);
      },
      true
    );
    inputToCheck[i].addEventListener('blur', function(event){
       validateOutFocus(event.target, event.target.nextElementSibling);
    })
  };
}

function checkSelect(inputToCheck) {
  for (i = 0; i < inputToCheck.length; i++) {
    inputToCheck[i].addEventListener(
      "input",
      function(event) {
        validateSelect(event.target, event.target.parentNode.nextElementSibling);
      },
      true
    );
  }
}
//
//function validateInFocus(element, sibling) {
// element.classList.remove("input-error");
// sibling.classList.remove("input-error-message");
//  if (element.value == "" || element.value == null) {
//    sibling.classList.add("input-assist-message", "is-active");
//    element.classList.add("input-assist");
//  } else if (element.value.length<8) {
//    sibling.classList.add("input-assist-message", "is-active");
//    element.classList.add("input-assist");
//  } else {
//    sibling.classList.remove("is-active");
//    element.classList.remove("input-assist");
//  }
//}
//
//function validateOutFocus(element, sibling) {
//  element.classList.remove("input-assist");
//  if (element.value == "" || element.value == null) {
//    sibling.classList.remove("input-assist-message");
//      sibling.classList.add("input-error-message", "is-active");
//      element.classList.add("input-error");
//    } else if (element.value.length<8) {
//      sibling.classList.remove("input-assist-message");
//      sibling.classList.add("input-error-message", "is-active");
//      element.classList.add("input-error");
//    } else {
//      sibling.classList.remove("input-error-message", "is-active");
//      element.classList.remove("input-error");
//    }
//}
