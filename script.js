

function validation(){
    const mobNum = document.getElementById('mobNum').value
    const mailId = document.getElementById('mail').value
    let regexMob = /^[7-9]\d{9}$/
    let regexMail = /([a-z A-Z 0-9 \. _]+)@([a-z A-Z]+).([a-z A-Z]{2,6}).([a-z]{2,6})?$/

    if(mobNum.trim() == "" || mailId.trim() == ""){
        alert("please entre mobile number or email")
    }
    else if((regexMob.test(mobNum)) && ((regexMail.test(mailId)))){
        alert('mobile number and email submitted successfully')
    }
    else{
        alert("wrong mobile number or email")
    }
}