	$().ready(function() {
		$("#sn").validate({
            submitHandler:function(form){
        $("#coupon").fadeIn("fast");
            },
			errorLabelContainer: $("#sn .error")
		});
	});

function myFunction() {
    var copyText = document.getElementById("series");
    copyText.select();
    document.execCommand("Copy");
//    alert("已複製至剪貼簿: " + copyText.value);
    alert("已複製序號");
}
