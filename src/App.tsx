import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from 'pages/layout/Layout';
import GlobalStyles from 'styles/GlobalStyles';
import FormView from "components/forms/FormView";
import TableView from "components/tables/TableView";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<FormView />} />
          <Route path="*" element="Page Not Found" />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
