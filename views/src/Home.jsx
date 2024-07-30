const React = require("react");
const Layout = require('./Layout')
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';



module.exports = function Home() {
  const data = [
    { id: 1, name: 'file1.txt' },
    { id: 2, name: 'file2.txt' },
    // Дополнительные данные...
];

const actionBodyTemplate = (rowData) => {
  const serializeData = JSON.stringify(rowData)
    return (
        <button className="download-btn" row_data={serializeData} label="Download" icon="pi pi-download" >Download</button>
    );
};

  return (
    <>
    <Layout>
    <DataTable value={data} paginator rows={10}>
            <Column field="id" header="ID" />
            <Column field="name" header="Name" />
            <Column body={actionBodyTemplate} header="Actions" />
        </DataTable>
    </Layout>
   </>
  );
};
