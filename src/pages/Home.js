const Home = () =>{
   let view='';
    for(var i=0; i<7; i ++){
         view += `
        <section class="item">
            <img src="/src/img/main__img-woman.png" class="item__profile"></img>
            <p class="item__name">Name: Ithzamary Vilchis Garcia </p>
            
            <a class="btn" href="#/1"> + </a>
        </section>
    `
    
    }

    return view;

    
}

export default Home;