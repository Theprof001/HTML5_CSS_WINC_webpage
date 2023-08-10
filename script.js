document.getElementById("commentForm").addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the form from submitting

    // Get the form input value
    const comment = document.getElementById("comment").value;

    // Perform any desired action with the comment data (e.g., send it to an email address)

    // Reset the form
    document.getElementById("commentForm").reset();
});

document.getElementById("bidForm").addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the form from submitting

    // Get the form input value
    const bid = document.getElementById("bid").value;

    // Perform any desired action with the bid data (e.g., store it in a database)

    // Reset the form
    document.getElementById("bidForm").reset();
});