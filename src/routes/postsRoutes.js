import express from "express"; // Importa o framework Express para criar a aplicação web.
import multer from "multer"; // Importa o multer para lidar com o upload de arquivos.
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost} from "../controllers/postsController.js"; // Importa as funções de controle para lidar com as requisições de posts e uploads.
import cors from "cors";

const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
}
// Configura o armazenamento de arquivos utilizando o multer.
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Define o diretório de destino para os arquivos upados.
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        // Define o nome do arquivo, mantendo o nome original.
        cb(null, file.originalname);
    }
});

// Cria uma instância do multer com a configuração de armazenamento.
const upload = multer({ dest: "./uploads" , storage });

// Função que define as rotas da aplicação.
const routes = (app) => {
    // Permite que o servidor interprete requisições com o corpo no formato JSON.
    app.use(express.json()); 
    app.use(cors(corsOptions));
    // Rota GET para buscar todos os posts.
    app.get("/posts", listarPosts); // Chama a função listarPosts para lidar com essa rota.
    // Rota POST para criar um novo post.
    app.post("/posts", postarNovoPost); // Chama a função postarNovoPost para lidar com essa rota.
    // Rota POST para criar upload de arquivos.
    app.post("/upload", upload.single("imagem"), uploadImagem); // Chama a função uploadImagem para lidar com essa rota.
    // Rota PUT para atualizar um post.
    app.put("/upload/:id", atualizarNovoPost); 
};

export default routes; // Exporta a função routes para ser utilizada em outros módulos.