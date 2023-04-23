import Home from '../pages/Home';
import About from '../pages/About';
import Carboard from '../pages/Carboard';
import Support from '../pages/Support';

interface RouteType {
    path : string,
    component: () => JSX.Element,
    name: string,
    protected: boolean
} 

const routes: RouteType[] = [
    {
      path : "",
      component: Home,
      name: "Home Screen",
      protected: false,
    },
    {
      path : "/carboard",
      component: Carboard,
      name: "Carboard",
      protected: true,
    },
    {
      path : "/about",
      component: About,
      name: "About",
      protected: false,
    },
    {
      path : "/support",
      component: Support,
      name: "Support",
      protected: false,
    },
  ];

export default routes