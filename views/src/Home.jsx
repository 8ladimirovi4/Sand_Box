const React = require("react");
const Layout = require('./Layout')
import axios from 'axios';
import { saveAs } from 'file-saver';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

module.exports = function Home() {
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
