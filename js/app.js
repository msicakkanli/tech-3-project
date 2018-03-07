//set focus name label when page load
$(document).ready(function () {
    $('#name').focus();
})
// add and remove job role when selected other option
$('#title').on('click',function () {
    let jobTitle = $(this).val();
    if(jobTitle === "other") {
      let jobRole = '<input type="text" id="job" name="job_title" placeholder="Your job role">';
      $('#info').append(jobRole); 
    } else {
      $('#job').remove();  
    }
})

//select desing and change color select menu
$('#design').on('click',function () {
    let selectedDesing = $('#design').val();
    if (selectedDesing === "js puns") {
        $("#color").children('option').hide();
        $("#color").val("cornflowerblue")
      $("#color").children("option[value^=cornflowerblue]").show()
      $("#color").children("option[value^=darkslategrey]").show()
      $("#color").children("option[value^=gold]").show()
    } else if (selectedDesing === "heart js") {
        $("#color").children('option').hide();
        $("#color").val("tomato")
        $("#color").children("option[value^=tom]").show()
        $("#color").children("option[value^=ste]").show()
        $("#color").children("option[value^=dim]").show() 
    } else {
        $("#color").children('option').show();
        $("#color").val("default")
    }
})