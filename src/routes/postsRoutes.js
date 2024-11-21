import express from "express"; // Importa o framework Express para criar a aplicação web.
import { listarPosts } from "../controllers/postsController.js";

const routes = (app) => {
    // Permite que o servidor interprete requisições com o corpo no formato JSON.
    app.use(express.json()); 
    // Rota GET para obter todos os posts.
    app.get("/posts", listarPosts);
}

export default routes;