import React,{useState} from 'react'
import { Card } from 'react-bootstrap'
import ReactTable from 'sk-react-table'
import BaseApp from '../Base/base'
import '../App.css';


const TablesReact = () =>{

    const data =[
        {   
            id:1,
            name : 'Siva',
            position:'active'
        },
        {   
            id:2,
            name : 'Selva',
            status:'active'
        },
        
        {   
            id:3,
            name : 'Kumar',
            status:'active'
        },
        
        {   
            id:4,
            name : 'Pandi',
            status:'active'
        },
        
        {   
            id:5,
            name : 'Karthik',
            status:'active'
        },
        
        {   
            id:6,
            name : 'Maha',
            status:'active'
        },
        {   
            id:6,
            name : 'Lakshimi',
            status:'active'
        },
        
        {   
            id:6,
            name : 'Kutty',
            status:'active'
        },
        
        {   
            id:6,
            name : 'Rass',
            status:'active'
        },
        
        {   
            id:6,
            name : 'Ragu',
            status:'active'
        },
        
        {   
            id:6,
            name : 'Sathis',
            status:'active'
        },
        

        
    ]
    const columns =[
        {
            name: 'Name',
            cell: (row,fun) => <span>{row.name}</span>
        },
        {
            name: 'Status',
            cell: (row,fun) => <span onClick={fun.view}>{row.status}</span>
        },
        
    ]
    const setColor ={
        backgroundColor:'#283046',
        textColor:'#d0d2d6',
        borderColor:'#404656',
        paginationItemColor : '#110f2e',
        paginationActiveColor:'#31497c',
    }

    const [rowParPage, setrowParPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [selected, setSelected] = useState([]);
    const [filterValue, setFilterValue] = useState('')

    const rowNumber = [5];
    const selectRef = 'id';
    const filterKey = ['', 'food', 'electronix', 'technology']; 
    const paginationItemShow = 4;

    const selectedRow = (selectRowData) => {
        console.log(selectRowData)
    }

    const view = ()=>{

    }

    return(
        <div className='App'>
            <BaseApp>
            <div className="head-table">
            <h2>Tables</h2>

        <p className="para">
        DataTables is a third party plugin that is used to generate the demo table below. For more information about DataTables, please visit the official DataTables documentation.
        </p>
      </div>

      <Card className="Tables">
      <Card.Header>DataTables Example</Card.Header>
      <Card.Body>
        <Card.Text>
        <ReactTable
                data={data}
                columns={columns}
                setColor={setColor}
                rowNumber={rowNumber}
                setrowParPage={setrowParPage}
                parPage={rowParPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                totalItem={10}
                selector
                selectRef={selectRef}
                deleteData={selectedRow}
                setSelected={setSelected}
                selected={selected}
                filterKey={filterKey}
                filterValue={filterValue}
                setFilterValue={setFilterValue}
                useFunction={{ view }}
                paginationItemShow={paginationItemShow}
           />
        </Card.Text>
      </Card.Body>
    </Card>
            
           </BaseApp>
        </div>
    )
}

export default TablesReact