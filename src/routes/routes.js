import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import getHash from './getHash';
import resolveRoutes from './resolveRoutes';
import Error404 from '../pages/Error404';
import {getStudents, sum} from '../utils/getStudents';

const routes = {
    '/': Home,
    '/:id': Dashboard
}

const router = async () => {
    const content = document.getElementById('main');
    const contentDashboard = document.getElementById('dashboard');
  
    let hash = getHash();

    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404;

    
    if(route == '/:id'){
        contentDashboard.innerHTML = await render();
        content.innerHTML = null;

        let totalGroups = document.getElementsByClassName('item__content');

        for(var i= 0; i < totalGroups.length; i++){
            
            let btnGroup = totalGroups[i].children[1];
            let idGroup = btnGroup.getAttribute('value');

            let getInfoStudents = document.getElementById('btn-getStudent-'+idGroup);
            let contentStudents = document.getElementById('tbl-students');
        
      
        
        const showStudents = async () => {
            contentStudents.innerHTML = null;
            contentStudents.innerHTML = await getStudents(idGroup);
            
            let cells = contentStudents.getElementsByClassName('testingID');
            console.log(cells);

            for(var i=0; i< cells.length; i++){
                let idBtnStudent = cells[i].children[0];
                let idStudent = idBtnStudent.getAttribute('value');
                
                let saveNotes= document.getElementById('btn-note-'+idStudent);
            
                let noteOne = document.getElementById('noteOne');
                let noteTwo = document.getElementById('noteTwo');
                let noteThree = document.getElementById('noteThree');
                let noteFour = document.getElementById('noteFour');
                let totalN = document.getElementById('total-notes');

            const updateNotes = () =>{
                
                let notes = {
                    id: idStudent,
                    note_1: noteOne.value,
                    note_2: noteTwo.value,
                    note_3: noteThree.value,
                    note_4: noteFour.value
                }
            }

            const autoTotal = () =>{
                let sumNotes = {
                    note_1: parseFloat(noteOne.value),
                    note_2: parseFloat(noteTwo.value),
                    note_3: parseFloat(noteThree.value),
                    note_4: parseFloat(noteFour.value)
                }

        
                totalN.value = sum(sumNotes);
                
            }
            
            saveNotes.addEventListener("click", updateNotes);
            
            noteOne.addEventListener("change", autoTotal);
            noteTwo.addEventListener("change", autoTotal);
            noteThree.addEventListener("change", autoTotal);
            noteFour.addEventListener("change", autoTotal);
                  
            }

        }

        getInfoStudents.addEventListener("click", showStudents);

        }

    }else{
        content.innerHTML = await render();
        contentDashboard.innerHTML = null;
    }

};

export default router;
