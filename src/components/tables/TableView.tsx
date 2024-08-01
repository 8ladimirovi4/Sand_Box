import Webix from 'components/Webix'
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { tableSliceActions, tableSliceSelectors } from 'store/redux/tableSlice';


function getUI(select:(row: any) => void){
  return {
    view:"datatable", scroll:false, width:400, autoheight:true, select:true, columns:[
      { id:"name", fillspace:1 },
      { id:"email", fillspace:1 },
      { id:"age", width: 50 }
    ],
    data:[],
    on:{
      onAfterSelect:function(row: any){
        select(row);
      }
    }
  };
}

const TableView = () => {
  const dispatch = useAppDispatch()
  const { data, isLoading, error } = useAppSelector(tableSliceSelectors.tablesValues)
  const values = [...data]

  const select = (row:any) => {
    dispatch(tableSliceActions.setSelectedRow(row.id))
  }
  
    return(
        <Webix ui={getUI(select)} data={values} />
    )
}



export default TableView;
