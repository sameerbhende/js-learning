let person = {
    name: "Gajanan",
    city: "Pune",
    experience: 10
}

console.log(person);
//console.table(person);

console.log(`Type of person is: ${typeof person}`);




console.log(person);
//console.table(person);

console.log(`Type of person is: ${typeof person}`);

console.log(`====== Adding properties in an object =========`);
person.isMarried = true;
console.log(person);

console.log(`====== Delete properties from an object =========`);
delete person.experience;
console.log(person);




console.log(`====== Creating an empty object =========`);
let address= {
    
}

address.pin=112233;
console.log(address);



console.log("Creating method for object");

const bankSbi = {
    name: "SBI Bank Wakad",
    city: "Pune",
    totalStaff: 90,
    homeLoanROI: 9.5,
    bankDetail: function(){
        console.log(`Bank Details`);
        console.log(`Name: ${this.name}, City: ${this.city}, total staff: ${this.totalStaff}, Home Loan ROI: ${this.homeLoanROI}`);
    }
}
bankSbi.bankDetail();


console.log(`======== Nested Object============`);
const jennyPerson = {
    name: "Jenny",
    age: 25,
    country: "USA",
    address: {
        flatNo: 102,
        floorNumber: 3,
        street: "Bergen road",
        city: "LA",
        state: "ABC"
    }
}
console.log(`Type of jennyPerson : ${typeof jennyPerson}`);
console.log(`Type of address : ${typeof address}`);

console.log(`City: ${jennyPerson.address.city}`);
jennyPerson.address.state = "XYZ";



console.log(`======== Nested Object============`);
const jennyPerson = {
    name: "Jenny",
    age: 25,
    country: "USA",
    address: {
        flatNo: 102,
        floorNumber: 3,
        street: "Bergen road",
        city: "LA",
        state: "ABC",
        getAddress: function(){
            const address =  `Flat Number: ${this.flatNo}, Floor Number: ${this.floorNumber}, Street: ${this.street}, City: ${this.city}, State: ${this.state}`;
            return address;
        }
    }
}
console.log(`Type of jennyPerson : ${typeof jennyPerson}`);
console.log(`Type of address : ${typeof address}`);

console.log(`City: ${jennyPerson.address.city}`);
jennyPerson.address.state = "XYZ";

console.log(`===== Jenny complete address to courier is======`);
const jennyAddress = jennyPerson.address.getAddress();
console.log(jennyAddress);











let person={
    name:"Gajanan",
    city:"Pune",
    experience:10,
}
console.log(person);
console.log(`The type of person : ${typeof person}`);


const city=person.city;
console.log(`City of the sameer is ${city}`);

person.isMarried=true;
console.log(person);


let address={


}

person.pin=442201;
console.log(address);







