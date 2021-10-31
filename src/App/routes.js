import Homepage from './pages/Homepage';

const appRoutes = [
  {
    id: 'homepage',
    path: '/homepage',
    component: Homepage,
    title: 'Homepage',
  },
  {
    id: 'root',
    redirect: true,
    path: '/',
    pathTo: '/homepage',
  }
];

export default appRoutes;