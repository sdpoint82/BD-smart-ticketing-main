
let seatsLeft = 40; // For seat count
let selectedSeats = [];
let totalPrice = 0;
const seatButtons = document.querySelectorAll('.seat');
const selectedSeatsDiv = document.getElementById('selectedSeats');
const totalSeatsDiv = document.getElementById('totalSeats');
const totalPriceDiv = document.getElementById('totalPrice');
const seatsLeftDiv = document.getElementById('seatsLeft');

// Function to update seat and price information
const seatDetailsDiv = document.getElementById('seatDetails');

// Function to update seat and price information
seatButtons.forEach(seat => {
    seat.addEventListener('click', () => {
        const seatName = seat.getAttribute('data-name');
        const seatPrice = parseInt(seat.getAttribute('data-price'));
        const seatClass = seat.getAttribute('data-class');

        // Check if seat is already selected
        if (!selectedSeats.includes(seatName)) {
            selectedSeats.push(seatName);
            totalPrice = totalPrice + seatPrice;
            seatsLeft--;

            // Update the seat details in the #seatDetails div (Option 4)
            seatDetailsDiv.innerHTML += `<p>Seat: ${seatName}, Class: ${seatClass}, Price: ${seatPrice} BDT</p>`;
        }

        // Update the seat and price display
        selectedSeatsDiv.textContent = `Seats: ${selectedSeats.join(', ')}`;
        totalSeatsDiv.textContent = `Selected Seats: ${selectedSeats.length}`;
        totalPriceDiv.textContent = `Total Price: ${totalPrice} BDT`;
    });
});


const couponInput = document.getElementById('coupon');
const applyCouponBtn = document.getElementById('applyCoupon');
const discountDiv = document.getElementById('discount');
const grandTotalDiv = document.getElementById('grandTotal');
let discount = 0;

applyCouponBtn.addEventListener('click', () => {
    const couponCode = couponInput.value.trim();
    if (couponCode === 'NEW15') {
        discount = totalPrice * 0.15; // 15% discount
    } else if (couponCode === 'COUPLE20') {
        discount = totalPrice * 0.20; // 20% discount
    } else {
        discount = 0; // Invalid coupon
        alert('Invalid coupon code');
    }

    // Update discount and grand total
    const grandTotal = totalPrice - discount;
    discountDiv.textContent = `Discount: ${discount.toFixed(2)} BDT`;
    grandTotalDiv.textContent = `Grand Total: ${grandTotal.toFixed(2)} BDT`;
});

document.getElementById("next").addEventListener("click", function(){
    window.location.href = "success.html";
    })


