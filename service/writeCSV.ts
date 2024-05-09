import { createObjectCsvWriter as createCsvWriter } from 'csv-writer';

const writeCSV = async (filePath: string, data: Data[]): Promise<void> => {
  const csvWriter = createCsvWriter({
    path: filePath,
    header: [
      { id: 'nome', title: 'NOME' },
      { id: 'peso', title: 'PESO' },
      { id: 'valor', title: 'VALOR'},
      { id: 'quantidade', title: 'QUANTIDADE'},
    ],
  });

  return csvWriter.writeRecords(data);
};

export default writeCSV;

const novosDados = [
  { id: 1, nome: 'Produto', valor: 10.99, peso: 0.5, quantidade: 100 },
];

writeCSV("/home/mbigao/projetos/Treinee/atividade_semana3/db/estoque.csv", novosDados);

