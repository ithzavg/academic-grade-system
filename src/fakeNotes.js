const faker = require('faker');
const fs = require('fs');

const arr = ["Computer Science", "Chemistry ", "Economics","Maths","Physics", "English Language", "Religion","Social Science" ];
const randomIndex = Math.floor(Math.random() * arr.length);

function generateNotesStudents(){
    let users =[];

    for(let id = 1; id <= 100; id++){
      
        const group = faker.datatype.number({min: 1, max: 5});
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        const subject = arr[randomIndex];
        const note_1 = faker.datatype.float({min: 0, max: 5, precision: 0.1});
        const note_2 = faker.datatype.float({min: 0, max: 5, precision: 0.1});
        const note_3 =  0.0
        const note_4 =  0.0   

        users.push({
            id:id,
            group:group,
            firstName:firstName,
            lastName:lastName,
            subject:subject,
            notes:{
                note_1:note_1,
                note_2:note_2,
                note_3:note_3,
                note_4:note_4
            }
        })
    }
    return {data: users}
}

const generateData = generateNotesStudents();

fs.writeFileSync('data.json',JSON.stringify(generateData,null,"\t"));


