
import getGroups from '../utils/getGroups';

export const getStudents = async (idGroup) =>{

    const students = await getGroups(idGroup);
    
    students.groups[0].students.map(student => {
        console.log(student.notes);
    })

    const view = `

    <tr class="tbl-students__header">
        <th>name</th>
        <th>period 1</th>
        <th>period 2</th>
        <th>period 3</th>
        <th>period 4</th>
        <th>total</th>
        <th></th>
    </tr>
    ${
        students.groups[0].students.map(student => `
        <tr>
            <td id="student-id" value="${student.id}">${student.firstName}  ${student.lastName}</td>

            ${student.notes.map(note => `
                <td>
                    <input class="tbl_input-note" id="noteOne" value="${note.note_1 === 0 ? '0.0' : note.note_1}"></input>
                </td>
                <td>
                    <input class="tbl_input-note" id="noteTwo" value="${note.note_2 === 0 ? '0.0' : note.note_2}"></input>
                </td>
                <td>
                    <input class="tbl_input-note" id="noteThree" value="${note.note_3 === 0 ? '0.0' : note.note_3}"></input>
                </td>
                <td>
                    <input class="tbl_input-note" id="noteFour" value="${note.note_4 === 0 ? '0.0' : note.note_4}"></input>
                </td>
            `  
            )}

            <td><input class="tbl_input-note" id="total-notes" value="${sum(student.notes)}" disabled></input></td>
            <td>
                <button class="btn btn-blue" id="btn-save-notes">
                    <img src="/src/img/student__savebtn.svg"></img>
                </button>
            </td>
        </tr>
        `

        ).join('')
    }
    
    `

    return view;
}



export function sum(notes){
    let sum = 0;
    sum = notes[0].note_1 + notes[0].note_2 + notes[0].note_3 + notes[0].note_4;
   
    return sum.toFixed(1);

}