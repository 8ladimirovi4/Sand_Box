import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RichselectDatatable, { richselectTablecolumns, richselectTableRows } from './components/richselect-datatable/RichselectDatatable'
import TextEditorDatatable, { textEditorTableColumns, textEditorTableRows } from './components/text_editor_datatable/TextEditorDatatble'

function App() {

  return (
    <>
     {/* <RichselectDatatable rows={richselectTableRows} columns={richselectTablecolumns} /> */}
    <TextEditorDatatable initialRows={textEditorTableRows} columns={textEditorTableColumns}/>
    </>
  )
}

export default App
