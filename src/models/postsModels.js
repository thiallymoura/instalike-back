import 'dotenv/config';
// Importa a função para conectar ao banco de dados, definida em dbConfig.js.
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js"; 

// Conecta ao banco de dados utilizando a string de conexão fornecida pela variável de ambiente STRING_CONEXAO.
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO); 


// Função assíncrona para obter todos os posts do banco de dados.
export async function getTodosPosts() {
    // Obtém o banco de dados "imersao-instabytes".
    const db = conexao.db("imersao-instabytes");
    // Obtém a coleção "posts" dentro do banco de dados.
    const colecao = db.collection("posts");
    // Retorna todos os documentos da coleção como um array.
    return colecao.find().toArray();
}

export async function criarPost(novoPost) {
    // Obtém o banco de dados "imersao-instabytes".
    const db = conexao.db("imersao-instabytes");
    // Obtém a coleção "posts" dentro do banco de dados.
    const colecao = db.collection("posts");
    // Insere o novo post na coleção.
    return colecao.insertOne(novoPost);
}

export async function atualizarPost(id, novoPost) {
    // Obtém o banco de dados "imersao-instabytes".
    const db = conexao.db("imersao-instabytes");
    // Obtém a coleção "posts" dentro do banco de dados.
    const colecao = db.collection("posts");
    const objID = ObjectId.createFromHexString(id);
    return colecao.updateOne({_id: new ObjectId(objID)}, {$set: novoPost});
    
}