
class Student{

    roll
    name
    division
    constructor(Roll, Name, Division)
    {
        this.roll=Roll;
        this.name=Name;
        this.division=Division;
    }

    getdetails(){

        console.log(`Person Details => roll: ${this.roll}, name: ${this.name}, division: ${this.division}`);
    }
}
    
    
const jenny=new Student(13, 'Pavan','A');
jenny.getdetails();

const david=new Student(14,'Sakshi' , 'A');
david.getdetails();

const buttler=new Student(14, 'Samiksha', 'B');
buttler.getdetails();
