import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


//index.js = point d'entrée principal de l'appli
import React from "react";  //biblio réact
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

import "./index.css"; //style de l'appli

//2 modules importés pour la gestion des routes dans l'appli
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import FruitsMaster from "./components/FruitsMaster";
import ErrorPage from "./components/ErrorPage";
import FruitDetails from "./components/FruitDetails";
import Signup from "./components/Signup";
import Signin from "./components/Signin";

const router = createBrowserRouter([
  {
    path: "/fruits/:fruitName", //chemin de l'url 
    element: <FruitDetails />,  // composant a afficher quand le chemin correspond
    errorElement: <ErrorPage />, //--------             en cas d'erreur
  },
  {
    path: "/creation-de-compte",
    element: <Signup />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/connexion",
    element: <Signin />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <FruitsMaster />,
    errorElement: <ErrorPage />,
  },
]);

//instance princapele de l'appli
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);



reportWebVitals(); //on appelle la fct pour mesurer les performances de l'appli 




