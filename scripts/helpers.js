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
    document.querySelector('.upiQRContainer').style.display = "block";
    document.querySelector('.CashRegistrationIDContainer').style.display = "none";

  } else {
    document.querySelector('.upiQRContainer').style.display = "none";
  }
})

const CashRadio = document.querySelector('#cashRadio');
CashRadio.addEventListener('change', () => {
  if (CashRadio.checked) {
    document.querySelector('.CashRegistrationIDContainer').style.display = "block";
    document.querySelector('.upiQRContainer').style.display = "none";
  } else {
    document.querySelector('.CashRegistrationIDContainer').style.display = "none";
  }
})