$(document).ready(function() {
    $('#registrationForm').submit(function(event) {
        event.preventDefault(); // Prevent default form submission

        // Capture form data
        var name = $('#name').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var dob = $('#dob').val();
        // Display the captured data
        var output = `
            <h3>Submitted Information:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>dob:</strong> ${dob}</p>
        `;
        $('#output').html(output);
    });
});