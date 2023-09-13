let upi_radio_btn = document.getElementById("online");
let cash_radio_btn = document.getElementById("offline");
let qr_code = document.getElementById("online-payment")

upi_radio_btn.addEventListener('change', () => {
    if(upi_radio_btn.checked){
        qr_code.style = "display: flex"
        console.log("display qr")
    }
})

cash_radio_btn.addEventListener('change', () => {
    if(cash_radio_btn.checked){
        qr_code.style = "display: none"
        console.log("hide qr")
    }
})