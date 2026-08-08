document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("bookingForm");

    if (!form) return;

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const eventType = document.getElementById("eventType").value;
        const eventDate = document.getElementById("eventDate").value;
        const message = document.getElementById("message").value.trim();

        const whatsappNumber = "918220763283";

        const whatsappMessage =
            "Hello Grand Force Events!\n\n" +
            "New Event Enquiry\n\n" +
            "Name: " + name + "\n" +
            "Phone: " + phone + "\n" +
            "Event: " + eventType + "\n" +
            "Date: " + eventDate + "\n" +
            "Requirements: " + message;

        const url =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(whatsappMessage);

        window.location.href = url;

    });

});