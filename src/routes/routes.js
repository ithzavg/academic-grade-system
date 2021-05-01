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
  
    let hash = getHash();

    let route = await resolveRoutes(hash);
    console.log(routes);
    let render = routes[route] ? routes[route] : Error404;

    console.log(render);
    content.innerHTML = await render();
};

export default router;
