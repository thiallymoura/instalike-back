// Importar o express
import express from "express";

// Criar o servidor
const app = express();
app.listen(3000, () => {
    console.log("Servidor escutando...");
});

// Rotas (caminho) e definir as respostas
app.get("/api", (req, res) => {
    res.status(200).send("Boas Vindas à imersão!");
});



