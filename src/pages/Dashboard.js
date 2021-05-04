import getHash from '../routes/getHash';
import getTeachers from '../utils/getTeachers';

const Dashboard = async () =>{
    const idGroup = getHash();
    const groups = await getTeachers(idGroup);

    const view = 
    `<section class= "groups">
            <div class= "groups__header">
                <p>Groups</p>
            </div>
    
            ${groups.groups.map(group => `
                
                <div class= "groups__item" id="total-groups">
                    <div class="item__header" id="item-id" value="${group.id}">
                        <p>
                        Grade: ${group.grade}
                        </p>
                    </div>
                    <div class="item__content">
                        <p>${group.subject}</p>
                        <button class="btn btn-green" id="btn-getStudent-${group.id}" value="${group.id}">
                            <img src="/src/img/group__arrowbutton.svg"></img>
                        </button>
                    </div>
                </div>
            
            `).join('')}
            
       </section>
        <section class= "students">
            <div class="groups__header">
                <p>Students</p>
            </div>
            <div class="students__content" id="students-content">
                <table class="tbl-students" id="tbl-students"></table>
            </div>
        </section>
    `
    return view;
}

export default Dashboard;


