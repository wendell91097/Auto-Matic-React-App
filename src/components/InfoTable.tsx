import { useState } from 'react'
import Modal from './Modal'
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hook/Fetch';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90, hide:true},
  { field: 'nickname', headerName: 'Car Nickname', flex: 1},
  { field: 'make', headerName:'Make', flex: 1},
  { field: 'model', headerName: 'Model', flex: 1},
  { field: 'year', headerName: 'Year', flex: 1},
  { field: 'color', headerName: 'Color', flex: 1},
  { field: 'owner', headerName: 'Owner', flex: 1}
]

function DataTable() {
  const [ open, setOpen ] = useState(false);
  const { contactData, getData } = useGetData();
  const [ selectionModel, setSelectionModel ] = useState<string[]>([])

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)  
  }
    

  const deleteData = () => {
    for(let i = 0; i < selectionModel.length; i++){
        server_calls.delete(selectionModel[i]);
    }
    getData();
    console.log(`Selection model: ${selectionModel}`) 
    setTimeout(() => {window.location.reload()}, 500)
  }
    

  return (
    <>
        <Modal
            id= { selectionModel }
            open={ open } 
            onClose={ handleClose }
         />
        <div className='flex flex-row px-3 py-2'>
            <div>
                <button
                className='p-3 m-3 bg-slate-300 rounded-lg shadow-xl hover:bg-slate-800 hover:text-white'
                onClick={() => handleOpen()}>
                    Add New Car 
                
                </button>
            </div>
            <button onClick={ handleOpen } className='p-3 m-3 bg-slate-300 rounded-lg shadow-xl hover:bg-slate-800 hover:text-white'>Update</button>
            <button onClick={ deleteData } className='p-3 m-3 bg-slate-300 rounded-lg shadow-xl hover:bg-slate-800 hover:text-white'>Delete</button>
        </div>
        <div className={ open ? "hidden" : "container px-5 py-5 flex flex-col" }
             style={{ height: 560, width: '100%' }}
          >
            <h2 className='p-3 bg-slate-300 my-3 rounded'>My Cars</h2>
            <DataGrid rows={contactData} columns={columns} rowsPerPageOptions={[6]}
            checkboxSelection={true} 
            onSelectionModelChange={(item:any) => {
              setSelectionModel(item)
            }}
            />

        </div>
    </>
  )
}

export default DataTable