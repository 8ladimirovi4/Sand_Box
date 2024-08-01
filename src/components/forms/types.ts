export interface FormElement {
    view?: string;
    name?: string;
    label?: string;
    placeholder?: string;
    value?: string;
    cols?: FormElement[];
    click?: (this: FormView) => void;
    onBeforeLoad?: () => void
  }
  
export interface FormView {
    view: string;
    id: string;
    width: number;
    elements: FormElement[];
    getFormView?(): FormView;
    getValues?(): FormValues;
    setValues?(args:FormValues): void;
    on?: FormElement 
  }

  export interface FormValues {
    name: string;
    email: string;
    age: string;
  }