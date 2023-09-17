$(document).ready(function() {
    $("#btnLogin").on("click", function() {
        var ID = $("#memberId").val();
        var PW = $("#memberPw").val();
        
        $.ajax({
            type:"post",
            url:"/project01/LoginCheck.do",
            data: {memberId : ID, memberPw : PW},
            dataType:"json",
            success: function(data){
                if (data.status == "success") {
                    location.href="/main";
                }
                else {
                    $("#login-modal").modal("toggle");
                }
            }
        });
    });
    
    $("#btnLogout").on("click", function() {
        $.ajax({
            type:"post",
            url:"/project01/Logout.do",
            dataType:"json",
            success: function(data){
                if (data.status == "success") {
                    $("#modal-title").html("<i class='fas fa-info-circle mr-3' style='font-size:24px;color:blue'></i>Logout");
                    $("#modal-body").text("Logout 되었습니다.");
                }
                else {
                    
                    $("#modal-title").html("<i class='fas fa-exclamation-triangle mr-3' style='font-size:24px;color:red'></i>Logout Fail");
                    $("#modal-body").text("Logout 중 오류가 발생했습니다.");
                }
                
                $("#login-modal").modal();
                
                setTimeout(function(){
                    location.href="/main";
                   }, 1000);
            }
        });
    });
});

