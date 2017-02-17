$(document).ready(function() {
    $("#blanks form").submit(function() {
        var name = $("input#name").val();
        var dob = $("#born").val();
        var consoleType = $("input#console").val();
        var change = $("input#change").val();
        var player = $("input:radio[name=player]:checked").val();
        var colorOne = $("#color1").val();
        var colorTwo = $("#color2").val();

        event.preventDefault();
    });
});
