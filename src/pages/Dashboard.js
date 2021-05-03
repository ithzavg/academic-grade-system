import json from '../data.json';

console.log(json[0].groups);

const groups = json[0].groups;
const students = groups[0].students;

console.log(students);

const Dashboard = () =>{
    const view = 
    `<section class= "groups">
            <div class= "groups__header">
                <p>Groups</p>
            </div>
    
            ${ groups.map(group => `
                
                <div class= "groups__item">
                    <div class="item__header">
                        <p>
                        Grade: ${group.grade}
                        </p>
                    </div>
                    <div class="item__content">
                        <p>${group.subject}</p>
                        <button>></button>
                    </div>
                
                </div>
            
            `).join('')}
            
       </section>
        <section class= "students">
            <div class="students__header">
                <p>Students</p>
            </div>
            <div class="students__content">
                <table class="table">
                    <tr>
                        <th>name</th>
                        <th>period 1</th>
                        <th>period 2</th>
                        <th>period 3</th>
                        <th>period 4</th>
                        <th>total</th>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
            </div>
        </section>
    `

    return view;
}

export default Dashboard;