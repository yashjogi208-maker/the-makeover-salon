// ===== WHATSAPP BOOKING FUNCTION =====
function sendWhatsApp() {

    // user inputs
    var name = document.getElementById("name").value;
    var message = document.getElementById("message").value;

    // default text agar user kuch na likhe
    if(name === "") {
        name = "Customer";
    }

    if(message === "") {
        message = "an appointment";
    }

    // ✅ YOUR WHATSAPP NUMBER (India code added)
    var phoneNumber = "918882367202";

    // auto message
    var text = "Hi The Makeover Ladies Salon, my name is " 
                + name + 
                ". I'd like to book an appointment for " 
                + message + ".";

    // whatsapp URL
    var whatsappURL =
        "https://wa.me/" + phoneNumber +
        "?text=" + encodeURIComponent(text);

    // open whatsapp
    window.open(whatsappURL, "_blank");
}


// ===== PAGE FADE ANIMATION (UNCHANGED) =====
window.addEventListener("load", function () {
    document.body.style.opacity = "0";
    setTimeout(function () {
        document.body.style.transition = "1s";
        document.body.style.opacity = "1";
    }, 200);
});
/* ===========================
   FEEDBACK SYSTEM
=========================== */

let selectedRating = 5;

// star click select
document.addEventListener("DOMContentLoaded", function () {

    const stars = document.querySelectorAll("#starRating span");

    stars.forEach(star => {
        star.addEventListener("click", function () {
            selectedRating = this.getAttribute("data-rate");

            stars.forEach(s => s.style.opacity = "0.4");
            for (let i = 0; i < selectedRating; i++) {
                stars[i].style.opacity = "1";
            }
        });
    });

    loadReviews();
});


// submit review
function submitReview() {

    let reviewText = document.getElementById("reviewText").value;

    if (reviewText.trim() === "") {
        alert("Please write your review 😊");
        return;
    }

    let review = {
        rating: selectedRating,
        text: reviewText
    };

    let reviews = JSON.parse(localStorage.getItem("salonReviews")) || [];
    reviews.push(review);

    localStorage.setItem("salonReviews", JSON.stringify(reviews));

    document.getElementById("reviewText").value = "";

    loadReviews();
}


// load reviews
function loadReviews() {

    let container = document.getElementById("reviewsContainer");
    if(!container) return;

    container.innerHTML = "";

    let reviews = JSON.parse(localStorage.getItem("salonReviews")) || [];

    reviews.reverse().forEach(r => {

        let div = document.createElement("div");
        div.className = "card shake";

        let stars = "⭐".repeat(r.rating);

        div.innerHTML =
            "<h3>" + stars + "</h3>" +
            "<p>" + r.text + "</p>";

        container.appendChild(div);
    });
}
/* ===== FEEDBACK SYSTEM ===== */

let selectedRating = 0;

// Star click selection
const stars = document.querySelectorAll("#starRating span");

stars.forEach(star => {
    star.addEventListener("click", function () {
        selectedRating = this.getAttribute("data-value");

        stars.forEach(s => s.style.opacity = "0.3");
        for (let i = 0; i < selectedRating; i++) {
            stars[i].style.opacity = "1";
        }
    });
});


// Submit Review
function submitReview() {

    const reviewText = document.getElementById("reviewText").value;

    if (selectedRating == 0 || reviewText.trim() === "") {
        alert("Please give rating and write review!");
        return;
    }

    const review = {
        rating: selectedRating,
        text: reviewText
    };

    let reviews = JSON.parse(localStorage.getItem("salonReviews")) || [];
    reviews.unshift(review);

    localStorage.setItem("salonReviews", JSON.stringify(reviews));

    document.getElementById("reviewText").value = "";
    loadReviews();
}


// Load Reviews on Page
function loadReviews() {

    const reviewsList = document.getElementById("reviewsList");
    let reviews = JSON.parse(localStorage.getItem("salonReviews")) || [];

    reviewsList.innerHTML = "";

    if (reviews.length === 0) {
        reviewsList.innerHTML =
            "<p class='no-review'>No reviews yet. Be the first one!</p>";
        return;
    }

    reviews.forEach(r => {

        const reviewDiv = document.createElement("div");
        reviewDiv.className = "review-card";

        reviewDiv.innerHTML = `
            <div class="review-stars">${"⭐".repeat(r.rating)}</div>
            <p>${r.text}</p>
        `;

        reviewsList.appendChild(reviewDiv);
    });
}


// Auto load when page opens
window.onload = loadReviews;
// FAQ Accordion
document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;

            // Toggle answer below clicked question
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                question.classList.remove('active');
            } else {
                // Close all other answers
                document.querySelectorAll('.faq-answer').forEach(ans => ans.style.display = 'none');
                document.querySelectorAll('.faq-question').forEach(q => q.classList.remove('active'));

                answer.style.display = 'block';
                question.classList.add('active');
            }
        });
    });
});

// Call Now button
function callNow() {
    window.location.href = "tel:+918882367202";
}

// WhatsApp Booking button
function sendWhatsApp() {
    let phone = "8882367202";
    let message = encodeURIComponent("Hi The Makeover Ladies Salon, I want to book an appointment.");
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
}
document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            // Find next faq-answer dynamically (skip non-p elements)
            let answer = question.nextElementSibling;
            while(answer && !answer.classList.contains('faq-answer')) {
                answer = answer.nextElementSibling;
            }
            if(!answer) return; // safety

            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                question.classList.remove('active');
            } else {
                document.querySelectorAll('.faq-answer').forEach(ans => ans.style.display = 'none');
                document.querySelectorAll('.faq-question').forEach(q => q.classList.remove('active'));
                answer.style.display = 'block';
                question.classList.add('active');
            }
        });
    });
});