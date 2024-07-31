function sendmail(){
  let parms = {
    name : document.getElementById("name").value,
    email : document.getElementById("email").value,
    message : document.getElementById("messahe").value,
  }
  emailjs.send("service_s73ax5v","template_uhzrndl",parms).then(alert("Your email is sended"));
}