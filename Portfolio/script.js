const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const navbar = document.getElementsByClassName('.navbar');

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
})

var TO_ADDRESS = "l_keenan@outlook.com";

function doPost(e) {
  try{
    Logger.log(e);
    MailApp.sendEmail(TO_ADDRESS, "Contact Form Submitted", JSON.stringify(e.parameters));

    return contentService.createTextOutput(
      JSON.stringify({"result" : "success", "data" : JSON.stringift(e.parameters)})
    )
    .setMimeType(contentService.MimeType.JSON)
  }
  catch(error) {
    Logger.log(error);
    return contentService.createTextOutput(JSON.stringify({"result":"error", "error":e})).setMimeType(contentService.MimeType.JSON)
  }
}
