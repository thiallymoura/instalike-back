// Importar o express
import express from "express";

// Criar um array
const posts = [
    { id: 1, descricao: "Primeiro post", imagem: "https://placecats.com/millie/300/150" },
    { id: 2, descricao: "Post sobre gatos", imagem: "https://placecats.com/millie/300/150" },
    { id: 3, descricao: "Post sobre cachorros", imagem: "https://placecats.com/millie/300/150" },
];

// Criar o servidor
const app = express();
// Definir o caminho 
app.use(express.json());


app.listen(3000, () => {
    console.log("Servidor escutando...");
});

// Rotas (caminho) e definir as respostas
app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function buscarPostPorId(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id);
    });
}

app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorId(req.params.id);
    res.status(200).json(posts[index]);
});

