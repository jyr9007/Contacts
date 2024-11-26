
const contacts = ["Arnold", "Sly", "Dwayne", "Vin", "JCVD", "Steven"];

function displayContacts() {
    const contactsList = document.getElementById("contacts-list");
    for (let i = 0; i < contacts.length; i++) {
        const contactDiv = document.createElement("div");
        contactDiv.textContent = `Slot #${i} - ${contacts[i]}`;
        contactsList.appendChild(contactDiv);
    }
}

function promptUser() {
    let keepGoing = true;

    while (keepGoing) {

        let entry = prompt("Please provide an 'Entry Number':");

        if (entry === null) {
            keepGoing = false;
            break;
        }

        entry = parseInt(entry);

        if (entry >= 0 && entry < contacts.length) {
            let name = contacts[entry];
            let another = prompt(`Displaying ${name}.\n\nDo you want to make another selection? (y/n)`);
            if (another.toLowerCase() !== "y") {
                keepGoing = false;
            }
        } else {
            let another = prompt(`That Entry is not in the Database.\n\nDo you want to make another selection? (y/n)`);
            if (another.toLowerCase() !== "y") {
                keepGoing = false;
            }
        }
    }

    displayGoodbyeMessage();
}

function displayGoodbyeMessage() {
    document.body.innerHTML = `
        <h1 class="goodbye">Goodbye!</h1>
        <p>Thank you for using the Contacts Database. See you next time!</p>
    `;
}

window.onload = function () {
    displayContacts(); 
    setTimeout(promptUser, 1000); 
};
