$("#submit-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbyfi7cft9b8HWZ60SThtpM-udp-m2lMwITJs8Bn2N1crQCgfod4U09adphHPnbgyRGcSw/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            document.getElementById("success-message").innerHTML="Submitted Successfully..!"
            
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})