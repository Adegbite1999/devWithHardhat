// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract Test{
    struct Person{
        string fullname;
        uint age;
        string location;
        string gender;
    }

uint index =0;
event AddPerson(Person person);
mapping(uint => Person) PersonRecord;
    function addPerson( Person memory p) external {
        Person storage person = PersonRecord[index];
        person.age = p.age;
        person.location = p.location;
        person.fullname = p.fullname;
        index++;
    emit AddPerson(p);
    }

    function getPerson(uint _index) view external returns(Person memory){
        return PersonRecord[_index];
    }
// write a contract that has a struct which has a func that assigns value to a struct and you have a function that returns a struct
// }the function must have a structs as the input

// your function should have an event that emits the event

// the script shold console.log your view function
// console.log at most one of the event parameter
}