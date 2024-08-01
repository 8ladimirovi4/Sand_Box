export interface TemplateState {
  data: Template;
  isLoading: boolean;
  error: any;
}

export interface Template {
  //id: string,
  [key: string]:string; 
}

export interface TemplateAction {
  //id: string,
  [key: string]:string; 
}

export interface FormState {

  data: Template;
  isLoading: boolean;
  error: any;
}

export interface Form {
  [key: string]:any; 
}

export interface FormAction {
  //id: string,
  [key: string]:string; 
}

export interface TablelateState {
  selected:any,
  data: Table[];
  isLoading: boolean;
  error: any;
}

export interface Table {
  id: number,
  [key: string]: any; 
}

export interface TableAction {
  //id: string,
  [key: string]:string; 
}
