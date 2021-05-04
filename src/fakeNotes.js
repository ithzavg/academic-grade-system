const faker = require('faker');
const fs = require('fs');

const numberTeacher = Math.round(Math.random() * (10 - 1) + 1);
const arr = ["Computer Science", "Chemistry ", "Economics", "Maths", "Physics", "English Language", "Religion", "Social Science"];


function generateNotesStudents() {
    let users = [];

    for (let i = 1; i <= numberTeacher; i++) {

        const teacherData = {};
        teacherData.id = faker.datatype.uuid();
        teacherData.firstName= faker.name.firstName();
        teacherData.lastName= faker.name.lastName();
        teacherData.groups = [];
        const group = Math.round(Math.random() * (10 - 4) + 4);
        for (let i = 1; i <= group; i++) {
            
            const groupData = {}
            groupData.id = faker.datatype.uuid();
            groupData.subject = arr[Math.floor(Math.random() * arr.length)];
            groupData.grade = Math.round(Math.random() * (11 - 0) + 0);
            groupData.students = [];    
            const student = Math.round(Math.random() * (50 - 40) + 50);
            for (let i = 1; i <= student; i++) {
                const studentData = {}
                studentData.id= faker.datatype.uuid();
                studentData.firstName = faker.name.firstName();
                studentData.lastName = faker.name.lastName();
                studentData.notes =[
                    {

                        note_1: faker.datatype.float({min: 0, max: 5, precision: 0.1}),
                         note_2:faker.datatype.float({min: 0, max: 5, precision: 0.1}),
                         note_3: 0.0,
                         note_4:  0.0   
                    }
                ]

                groupData.students.push(studentData);
            }
            teacherData.groups.push(groupData);
        }
      users.push(teacherData);
    }
    return users
    
}


const generateData = generateNotesStudents();

fs.writeFileSync('data.json', JSON.stringify(generateData, null, "\t"));