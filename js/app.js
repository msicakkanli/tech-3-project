//set focus name label when page load
$(document).ready(function () {
    $('#name').focus();
})
// add and remove job role when selected other option
$('#title').on('change',function () {
    let jobTitle = $(this).val();
    if(jobTitle === "other") {
      let jobRole = '<input type="text" id="other-title" name="job_title" placeholder="Your Job Role">';
      $('#info').append(jobRole); 
    } else {
      $('#other-title').remove();  
    }
})

//select desing and change color select menu
$('#design').on('change',function () {
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

//change event for conferance checkbox
selectConferance.addEventListener('change', (e) => {
    selectHideConferance(e);
    calulateTotal(e);
})


// disable same time conferance control 
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

//calculate selected conferance price
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


//hide & show selected paymnet option 

$('#paypal').hide();
$('#bitcoin').hide();

let paymentMethod = document.querySelector('#payment');

paymentMethod.addEventListener('change',(e) =>{
    let paymentType = $('#payment').val()
    if (paymentType === "paypal") {
        $('#credit-card').hide();
        $('#bitcoin').hide();
        $('#paypal').show();
    } else if (paymentType === "bitcoin") {
        $('#credit-card').hide();
        $('#bitcoin').show();
        $('#paypal').hide();
    } else {
        $('#credit-card').show();
        $('#bitcoin').hide();
        $('#paypal').hide();
    };
})

//submit register form and control all label 

$(document).on('click', 'button', function (e) {
    //control name & emai label empty state 
    let submitForm = true;
    let name = $('#name').val();
    let email = $('#mail').val();
    let testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
    
    if (name === "") {
        
        $('#name').prev().css("color", "red");
        $('#name').prev().first().text('Name: (please provide your name)');
        $('#name').css("border-color", "red");
        submitForm = false;
    }
    
    if (testEmail.test(email)) {
        
    } 
    else {
        $('#mail').prev().css("color", "red");
        $('#mail').prev().first().text('Email: (please provide a valid  e-mail address)');
        $('#mail').css("border-color", "red");
        submitForm = false;
    }
    //control conferance section selected option
    let clickCount = 0; 
    for (let i = 0 ; i< conferanceList.length; i ++)
    {
        if (conferanceList[i].checked === true) {
            clickCount = clickCount + 1
        }
    };
    if (clickCount === 0) {
        
        $('.activities').children().first().append('<p id="select"> Please select an Activity </p>');
        $('#select').css("color","red");
        submitForm = false;
    }    
    let design = $('#design').val();
    let colorName = $('#color').val();
   
   // control selected t-shirt option  
   if (design === "Select Theme" || colorName === "default") {
       $('.shirt').children().first().append("<p id='forget'>Don't forget to pick up a T-Shirt</p>");
       $('#forget').css("color","red");
       submitForm = false;
   }

   //control credit card (card no, cvv, zip code) validation
   let paymentType = $('#payment').val();
   if (paymentType === "credit card") {
   let cvvNumber = $('#cvv').val();
   let numberOfDigitsCvv=cvvNumber.toString().length
   if ($.isNumeric(cvvNumber) &&  numberOfDigitsCvv === 3) {
    // everything is fine :)
   } else {
       $('#cvv').prev().css("color", "red");
       submitForm = false;
   };

   let zipCode = $('#zip').val();
   let numberOfDigitsZip=zipCode.toString().length
   if ($.isNumeric(zipCode) &&  numberOfDigitsZip === 5) {
    // everything is fine :)
   } else {
       $('#zip').prev().css("color", "red");
       submitForm = false;
   };

   let cardNumber = $('#cc-num').val();
   let numberOfDigitsCardNumber=cardNumber.toString().length
   if ($.isNumeric(cardNumber) && (12 < numberOfDigitsCardNumber && numberOfDigitsCardNumber < 17) ) {
   
   } else {
       $('#cc-num').prev().css("color", "red");
       submitForm = false;
   };
};

if(submitForm === false) { 
         e.preventDefault();
        } 
})
