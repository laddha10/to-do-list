$(document).ready(function() {
    
    $("#btn1").click(function () {
        if ($("input").val() != "") {
            var inputval = $("input").val();

            $("ol").append('<li><input type="checkbox" class="done">' + inputval + '<button class="edit">Edit</button><img src="download.jpe" class="delete" height="15px" width="15px"></li>');
            $("#clear").val("");
        }
        else {
            return false;
        }

    });
    $(".to").keydown(function (e) {
        if (e.keyCode == 13) {
            if ($("input").val() !== "") {
                var inputval = $("input").val();
                $("ol").append('<li><input type="checkbox" class="done"/>' + inputval + '<button class="edit">Edit</button><img src="download.jpe" class="delete" height="15px" width="15px"></li>');
                $("#clear").val("");
            }
            else {

                return false;
            }

        }
        $(function() {
            $("img").click(function() {
                $(this).parent().remove();

            });
        });
    });
    $(document).on("click", '.edit', function() {
        $(this).closest("li").prop("contenteditable", true).focus();
    });
    $(document).on("keydown", 'li[contenteditable]', function (e) {
        if (e.which == 13) {
            $(this).removeAttr("contenteditable").blur();
            return false;
        }
    });
    $("#btn2").click(function () {

        $(".done:checked").closest("li").remove();

    });
    $(document).on("click", '.done', function () {
        $(this).closest("li").toggleClass("decorate")
    });
});
