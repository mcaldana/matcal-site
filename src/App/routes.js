import Homepage from './pages/Homepage';
import Bio from './pages/Bio';
import Works from './pages/Works';

const appRoutes = [
  {
    id: 'homepage',
    path: '/homepage',
    component: Homepage,
    title: 'Homepage',
  },
  {
    id: 'bio',
    path: '/bio',
    component: Bio,
    title: 'Bio',
  },
  {
    id: 'works',
    path: '/works',
    component: Works,
    title: 'Works',
  },
  {
    id: 'root',
    redirect: true,
    path: '/',
    pathTo: '/homepage',
  }
];

export default appRoutes;