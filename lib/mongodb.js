const { MongoClient, ServerApiVersion } = require("mongodb");

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;
const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  // Em modo de desenvolvimento, usamos uma variável global para preservar o valor
  // através dos reloads de módulos causados pelo HMR (Hot Module Replacement).
  let globalWithMongo = global;
  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri, options);
    globalWithMongo._mongoClientPromise = client.connect();
  }
  clientPromise = globalWithMongo._mongoClientPromise;
} else {
  // Em modo de produção, é melhor não usar uma variável global.
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

// Exporta uma promessa do MongoClient com escopo de módulo.
// Ao fazer isso em um módulo separado, o cliente pode ser compartilhado entre funções.
module.exports = clientPromise;
