//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the default form submission behavior

        const ageInput = document.getElementById("age").value;
        const nameInput = document.getElementById("name").value;

        if (ageInput === "" || nameInput === "") {
            alert("Both age and name fields are required.");
        } else {
            const age = parseInt(ageInput);

            const promise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (age >= 18) {
                        resolve(`Welcome, ${nameInput}. You can vote.`);
                    } else {
                        reject(`Oh sorry ${nameInput}. You aren't old enough.`);
                    }
                }, 4000); // Resolve/reject after 4 seconds
            });

            promise
                .then((message) => {
                    alert(message);
                })
                .catch((error) => {
                    alert(error);
                });
        }
    });
});