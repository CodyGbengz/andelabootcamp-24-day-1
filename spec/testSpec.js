const Person = require('../src/Person.js');
const Student = require('../src/Student.js');
const Teacher = require('../src/Teacher.js');

describe('Person class: create a person',() => {
    
    let gbenga = new Student('gbenga','ode','30/06/1993','male','Bright Minds High');

    it('The person should be a type of "object", and an instance of the "person" class',() => {
        expect(typeof gbenga).toBe('object');
        expect(gbenga instanceof Person).toBeTruthy();
    });

    it('should return "24"',() => {
        expect(gbenga.age).toEqual(24);
    });

    it('should return "ode gbenga"',() => {
        expect(gbenga.fullName).toEqual('ode gbenga');
    });

    it('should return "male"', () => {
        expect(gbenga.gender).toEqual('male');
    });

    it('should return "Hi!, I am ode gbenga and I am a student of Bright Minds High"', () => {
        expect(gbenga.introduction()).toEqual("Hi!, I am ode gbenga and I am a student of Bright Minds High");
    })
})
