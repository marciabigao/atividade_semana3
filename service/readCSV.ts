import fs from 'fs';
import csv from 'csv-parser';

const readCSV = async (filePath: string): Promise<Data[]> => {
  return new Promise((resolve, reject) => {
    const results: Data[] = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data: Data) => results.push(data))
      .on('end', () => resolve(results))
      .on('error', (error) => reject(error));
  });
};

async function readLineCSV(filePath: string, produto: string): Promise<void> {
  const arquivoCompleto = await readCSV(filePath);
  const linha = arquivoCompleto.find((data) => data.nome == produto);
  var mensagem;
  if (linha != undefined)
    {
      mensagem = linha;
    }
    else
    {
      mensagem = "Não conseguimos achar o produto";
    }
  return console.log(mensagem);
};

const filePath = '/home/mbigao/projetos/Treinee/atividade_semana3/db/estoque.csv';
const produto = 'Produto';

readLineCSV(filePath, produto);



