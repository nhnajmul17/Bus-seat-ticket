
//js for signup page


const signUp = e => {
    e.preventDefault();

    let Uname = document.getElementById('Uname').value;
    let pwd = document.getElementById('pwd').value;

    let formData = JSON.parse(localStorage.getItem('formData')) || [];

    let exist = formData.length &&
        JSON.parse(localStorage.getItem('formData')).some(data =>
            data.Uname.toLowerCase() == Uname.toLowerCase()
        );

    if (!exist) {
        formData.push({ Uname, pwd });
        localStorage.setItem('formData', JSON.stringify(formData));
        alert("Account Created");
        window.location.href = "index.html";
    }
    else {
        alert("User Name Already Exists");
    }
}


//js for signin page

const signIn = e => {
    e.preventDefault();

    let user = document.getElementById('Username').value
    let pass = document.getElementById('pwd').value;

    let formData = JSON.parse(localStorage.getItem('formData')) || [];

    let exist = formData.length &&
        JSON.parse(localStorage.getItem('formData')).some(data => data.Uname.toLowerCase() == user && data.pwd.toLowerCase() == pass);


    if (!exist) {
        alert("Incorrect User Name or Password");
    }
    else {
        window.location.href = "booking.html";
    }

}



//js for booking page

// bookedSeat()
const seats = document.querySelectorAll('.container .seat')
const container = document.querySelector('.container')


const bookedSeat = () => {
    const selectedSeats = JSON.parse(localStorage.getItem('bookedSeat'))
    console.log(selectedSeats.length);

    if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('seat-occupied');
            }
        });
    }

}

document.getElementById('book').addEventListener('click', bookedSeat)

function updateSeat() {

    const selectedSeat = document.querySelectorAll('.container .seat.booked')
    const seatindex = [...selectedSeat].map(seat => [...seats].indexOf(seat));

    localStorage.setItem('bookedSeat', JSON.stringify(seatindex))
}

container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('seat-occupied')) {
        // e.target.classList.toggle('seat-occupied')
        e.target.classList.toggle('seat-occupied')
    }
    updateSeat()


})
