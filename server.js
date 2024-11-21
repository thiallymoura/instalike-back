// Importa o framework Express para criar a aplicação web.
import express from "express"; 
import routes from "./src/routes/postsRoutes.js";


// Cria uma instância do Express, iniciando a aplicação
const app = express();
routes(app);


// Inicia o servidor na porta 3000 e exibe uma mensagem no console quando o servidor estiver ouvindo.
app.listen(3000, () => {
    console.log("Servidor escutando...");
});


/*function buscarPostPorId(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id);
    });
}

app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorId(req.params.id);
    res.status(200).json(posts[index]);
});
*/

