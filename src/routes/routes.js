import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import getHash from './getHash';
import resolveRoutes from './resolveRoutes';
import Error404 from '../pages/Error404';

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

    console.log(route);
    if(route == '/:id'){
        contentDashboard.innerHTML = await render();
        content.innerHTML = null;
    }else{
        content.innerHTML = await render();
        contentDashboard.innerHTML = null;
    }

};

export default router;
