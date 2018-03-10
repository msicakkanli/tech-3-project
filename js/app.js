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

//register conferance control
const selectConferance = document.querySelector('.activities');
const conferanceList = Array.from(selectConferance.getElementsByTagName("input"))

selectConferance.addEventListener('change', (e) => {

    selectHideConferance(e);
    calulateTotal(e);
    
})



function selectHideConferance(e) {
    const checkbox = e.target;
    const checked = checkbox.checked;
    if (checkbox.name === "js-frameworks" && checked) {
        conferanceList[3].disabled = true;
    }
    ;
    if (checkbox.name === "js-libs" && checked) {
        conferanceList[4].disabled = true;
    }
    ;
    if (checkbox.name === "node" && checked) {
        conferanceList[2].disabled = true;
    }
    if (checkbox.name === "express" && checked) {
        conferanceList[1].disabled = true;
    }
    if (checkbox.name === "js-frameworks" && checked === false) {
        conferanceList[3].disabled = false;
    }
    ;
    if (checkbox.name === "js-libs" && checked === false) {
        conferanceList[4].disabled = false;
    }
    ;
    if (checkbox.name === "node" && checked === false) {
        conferanceList[2].disabled = false;
    }
    if (checkbox.name === "express" && checked === false) {
        conferanceList[1].disabled = false;
    }
}

function calulateTotal(e) {
    const checkbox = e.target;
    const checked = checkbox.checked;
    const total = document.createElement('p');
        $('#total').remove();
        selectConferance.appendChild(total);
        total.innerHTML= "Total:";
        total.setAttribute('id','total');
    
    let totalPrice = 0;
    let count = 0;
        if (conferanceList[0].name === "all" && conferanceList[0].checked === true) {
            count = $("[type='checkbox']:checked").length;
            count = count + 1
        }      
        else {
            count = $("[type='checkbox']:checked").length;
        }
    totalPrice = 100 * count;
    $('#total').append('<span>'+ '$'+ totalPrice + '</span>');
    
}

