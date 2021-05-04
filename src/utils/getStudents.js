
import getGroups from '../utils/getGroups';

export const getStudents = async (idGroup) =>{

    const students = await getGroups(idGroup);
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

        

        <tr class="content-student-notes">
            <td id="student-id" value="${student.id}">${student.firstName}  ${student.lastName}</td>
            <td>
                <input class="tbl_input-note" id="noteOne" value="${student.notes.note_1 === 0 ? '0.0' : student.notes.note_1}"></input>
            </td>
            <td>
                <input class="tbl_input-note" id="noteTwo" value="${student.notes.note_2 === 0 ? '0.0' : student.notes.note_2}"></input>
            </td>
            <td>
                <input class="tbl_input-note" id="noteThree" value="${student.notes.note_3 === 0 ? '0.0' : student.notes.note_3}"></input>
            </td>
            <td>
                <input class="tbl_input-note" id="noteFour" value="${student.notes.note_4 === 0 ? '0.0' : student.notes.note_4}"></input>
            </td>

            <td><input class="tbl_input-note" id="total-notes" value="${sum(student.notes)}" disabled></input></td>
            <td class="testingID">
                <button class="btn btn-blue" id="btn-note-${student.id}" value="${student.id}">
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
    sum = notes.note_1 + notes.note_2 + notes.note_3 + notes.note_4;
   
    return sum.toFixed(1);

}