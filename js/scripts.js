
// Business Logic for AddressBook
function AddressBook() {
  this.contacts = {};
  this.currentId = 0;
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contacts[contact.id] = contact;
}

AddressBook.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
};

AddressBook.prototype.findContact = function(id) {
  if (this.contacts(id) !== undefined) {
    return this.contacts[id];
  }
  return false;
}

AddressBook.prototype.deleteContact = function(id) {
  if (this.contacts[id] === undefined) {
    return false;
  }
  delete this.contacts[id];
  return true; 
}

// Business Logic for Contacts
function Contact([firstName, lastName, phoneNumber]) {
  this.firstName = firstName; 
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

Contact.prototype.fullName() = function() {
  return this.firstName + " " + this.lastName;
}

function showContacts(array){
  const output = document.querySelector("#contacts");
  output.innerHTML = "";
  array.forEach(element => {
    let name = document.createElement("p");
    let phoneNumber = document.createElement("p");
    name.innerText = element.fullName;
    phoneNumber.innerText = "Phone Number: " + element.phoneNumber;
    output.append(name);
    output.append(phoneNumber);
  })
}


window.addEventListener("load", () => {
  const form = document.querySelector("#input");
  let contactsArray = [];
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let firstName = document.forms.input.elements.firstname.value;
    let lastName = document.forms.input.elements.lastname.value;
    let phoneNumber = document.forms.input.elements.phone.value;
    let NewContact = new Contact([firstName, lastName, phoneNumber]);
    contactsArray.push(NewContact);
    console.log(contactsArray);
    showContacts(contactsArray);
  })
})