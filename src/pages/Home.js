import getTeachers from '../utils/getTeachers';

const Home = async () =>{

    const teachers = await getTeachers();
    let view='';

        teachers.map( teacher =>  view += `
        <section class="item">
            <img src="/src/img/main__img-woman.png" class="item__profile"></img>
            <p class="item__name">Name: ${teacher.firstName} ${teacher.lastName} </p>
            
            <a class="btn btn-red" href="#/${teacher._id}"> + </a>
        </section>
        `)
        
    

    return view;

    
}

export default Home;