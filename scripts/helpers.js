const setActiveTab = () => {

}

const handleMenuClick = () => {

}

const TeamParticipationRadio = document.querySelector('#teamParticipation');
TeamParticipationRadio.addEventListener('change', () => {
  if (TeamParticipationRadio.checked) {
    document.querySelector('.teamName').style.display = "block";
  } else {
    document.querySelector('.teamName').style.display = "none";
  }
})

const IndividualParticipationRadio = document.querySelector('#individualParticipation');
IndividualParticipationRadio.addEventListener('change', () => {
  if (IndividualParticipationRadio.checked) {
    document.querySelector('.teamName').style.display = "none";

  }
})
const UPIRadio = document.querySelector('#UPIRadio');
UPIRadio.addEventListener('change', () => {
  if (UPIRadio.checked) {
    console.log("upi");
    document.querySelector('.upiQRContainer').style.display = "block";
    document.querySelector('.CashRegistrationIDContainer').style.display = "none";

  } else {
    document.querySelector('.upiQRContainer').style.display = "none";
  }
})

const randomCode = generateRandomCode(10);
const CashRadio = document.querySelector('#cashRadio');
const registration_id = document.querySelector('#rid');
CashRadio.addEventListener('change', () => {
  if (CashRadio.checked) {
    console.log("cash");
    registration_id.innerHTML = randomCode
    document.querySelector('.CashRegistrationIDContainer').style.display = "block";
    document.querySelector('.upiQRContainer').style.display = "none";
  } else {
    document.querySelector('.CashRegistrationIDContainer').style.display = "none";
  }
})


function generateRandomCode(length) {
  const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomCode = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    randomCode += charset[randomIndex];
  }

  return randomCode;
}