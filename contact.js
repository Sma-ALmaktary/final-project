



function sendMail(){
  //names from emailjs
  var params = {
    from_name : document.getElementById('user-name').value, 
    name_id : document.getElementById('email').value,
    message : document.getElementById('question').value,
    phone_number : document.getElementById('phone-number').value
  };


  const serviceID = "service_tle8urg";
  const TemplateID = "template_wryvr18";
  //service id & Template ID & varaible's name


  emailjs.send(serviceID, TemplateID, params)
  .then(
    (res) =>{
      document.getElementById('user-name').value = "";
      document.getElementById('email').value = "";
      document.getElementById('question').value = "";
      document.getElementById('phone-number').value = "";
      console.log(res);
      alert("your message sent successfully");
    })
    .catch((err) => console.log(err)) ;
}

































//function sendEmail(event){
 // event.preventDefault();
 // }

  //submit.addEventListener('click', sendEmail )



  //let inputName = userName.value;
 // let inputEmail = email.value.trim().toLowerCase();
 // let inputPhoneNumber = phoneNumber.value;
  //let inputQuestion = question.value;
 // let body =  "name: " +inputName + "<br/> email: " + inputEmail + "<br/> phoneNumber: " + inputPhoneNumber + "<br/> question: " + inputQuestion;
   
   
   
   // if( inputName !== '' && inputEmail !== '' &&  inputPhoneNumber !== '' && inputQuestion !== '' ){
    
    //  Email.send({
       //  secureToken: "49d71d8b-84ca-4074-9028-9456dbfca505",
       //  Host : "smtp.gmail.com",
       //  Username : "moonlight19882017@gmail.com",
       //  Password : "moon123456789", 
       //     Host : "smtp.elasticemail.com",
        //    Username : "moonlight19882017@gmail.com",
       //     Password : "5C0C64ED06A28A371833E6F48F62017D2BBC", 
        //    To : 'moonlight19882017@gmail.com',
        //    From : inputEmail,
        //    Subject : "New Contact Form Enquiry",
        //    Body : body,
     //   }).then(
    //      message => alert("Massege")
    //    );
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           

  //form.reset();