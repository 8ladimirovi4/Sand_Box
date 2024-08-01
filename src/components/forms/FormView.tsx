import { useAppDispatch, useAppSelector } from 'store/hooks';
import { formSliceSelectors } from 'store/redux/formSlice';
import { tableSliceActions } from 'store/redux/tableSlice';
import Webix from 'components/Webix';
import type { FormValues, FormView } from './types';
import TableView from '../tables/TableView';

function getForm(save: (value: FormValues) => void): FormView {

  return {
    view: 'form',
    id: 'form',
    width: 400,
    elements: [
      { view: 'text', name: 'name', label: 'Name', value:'kek', placeholder: 'Type your full name here' },
      { view: 'text', name: 'email', label: 'Email' },
      { view: 'slider', name: 'age', label: 'Age', value: '25' },
      {
        cols: [
          {},
          {
            view: 'button',
            value: 'Save',
            click: function () {
              const form = this.getFormView ? this.getFormView() : null;
              if (form && save && form.getValues && form.setValues) {
                save(form.getValues());
                form.setValues({
                  name: "", 
                  email: "",
                  age: ""
               });
              }
            },
          },
        ],
      },
    ],
  };
}

const FormView = () => {
  const dispatch = useAppDispatch()
  const {data, isLoading, error} = useAppSelector(formSliceSelectors.formValues)
  const values = {...data}
  
  const save = (values: FormValues) => {
    dispatch(tableSliceActions.setUserInfo(values))
  }

  return (
    <div>
      <Webix ui={getForm(save)} data={values} />
      <br />
      <TableView />
    </div>
  );
};
export default FormView;
