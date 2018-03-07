function myFunction() {
    var copyText = document.getElementById("series");
    copyText.select();
    document.execCommand("Copy");
    alert("已複製序號");
}
$().ready(function() {
    $("#sn").validate({
        submitHandler:function(form){
            $("#coupon").fadeIn("fast");
        },
        errorLabelContainer: $("#sn .error")
    });
});
