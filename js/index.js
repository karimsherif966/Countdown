
    
// to open nav bar //
$(".settings").click( ()=>{
    if($("nav").css("left")!=="0px"){
    $("nav").animate({left:"0px"},1000);
    // $(".mainTitleContainer").animate({left: $("nav").outerWidth(true)},1000) 
    }
    else{
        $("nav").animate({left: -$("nav").outerWidth(true)},1000)
        // $(".mainTitleContainer").animate({left:"0px"},1000)
    }
} );
// to close nav bar //
$(".close").click(()=>{
    $("nav").animate({left: -$("nav").outerWidth(true)},1000)
    // $(".mainTitleContainer").animate({left: "0px"},1000)
})

// to scroll //
$("nav a").click(function(){
  let targetPage= $(this).attr("my-href");
  $("html,body").animate({scrollTop:$(targetPage).offset().top},50)
})

//to hide open button when scroll//
$(document).scroll(function() {
   if ( $(document).scrollTop() > ($("main").outerHeight(true))/2 ){
    $(".settings").addClass("d-none");
   }
   else{
    $(".settings").removeClass("d-none");
   }
})


// to slide up and down //
$("h3").click(function() {
    $(this).next().slideToggle(1000);
});


// to make the countdown//
window.onload = function () { 
$("html,body").animate({scrollTop:"0"},50);

function countDown(){
let futureDate = (new Date("1 june 2024  18:30:00").getTime())/1000;
let nowDate=(new Date().getTime())/1000;
let countDate=futureDate-nowDate;

let days=Math.floor(countDate/(60*60*24));
let hrs=Math.floor((countDate-(days*60*60*24))/(60*60));
let min=Math.floor( (countDate-((days*60*60*24)+(hrs*60*60)))/60 )
let sec=Math.floor((countDate-((days*60*60*24)+(hrs*60*60)+(min*60))) )


$(".days").text(days + " "+ "days");
$(".hrs").text(hrs + " "+ "hrs");
$(".min").text(min + " "+ "min");
$(".sec").text(sec + " "+ "sec");
}
setInterval (countDown,1000);
}


//function to detrmine how many letter remaining//
let remainingChars=100;
$(".char").html(`<span class="text-red">${remainingChars} </span> Character Remaining`);

$(".msg").keyup(function () { 
    
    let chars=this.value.length;
    remainingChars=100-chars;
    if(remainingChars>=0){
    $(".char").html(`<span class="text-red">${remainingChars} </span> Character Remaining`).removeClass("text-red");
    }
    else{
        $(".char").text("Your available character finished").addClass("text-red");
    }
});


//function for send message btn//
$(".sendMsgBtn").click(()=>{
    window.location.reload()
}
)





















