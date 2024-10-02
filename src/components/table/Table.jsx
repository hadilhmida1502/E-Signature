import React, {useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
//import './table.css';

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" />


const customStyles = {
    table: {
        style: {
            border: '2px solid #ddd',
        },
    },
    header: {
        style: {
            backgroundColor: '#f2f2f2',
        },
    },
    rows: {
        style: {
            fontSize: '16px',
        },
    },
    cell: {
        style: {
            padding: '8px',
        },
    },
};

function Table() {

    const [data, SetData] = React.useState([]);
    const [loading, setLoading] = useState(true);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        axios.get(`http://192.168.1.9/e-signature/e-signatureBackend/public/api/templates`)
                .then((result) => {
                    SetData(result.data);
                    setFilteredData(result.data)
                    setLoading(false);

                })
                .catch((res) => {
             
                  
                });
      }, []);

    const [isSticky, setIsSticky] = useState(false);
    
    //const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false); // State to track profile menu open/close


    const handleScroll = () => {
        setIsSticky(window.scrollY > 0);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    
    /***********************************************
    //const [openProfile, setOpenProfile] = useState(false);
    
    useEffect(() => {
        let subMenu = document.getElementById("subMenu");
        function toggleMenu() {
          subMenu.classList.toggle("open-menu");
        }
        window.toggleMenu = toggleMenu; // Expose toggleMenu to the global scope
      }, []);
      /***********************************************/

    const columns = [
        {
            name: 'Template ID',
            selector: 'id', 
            sortable: true,
          },
          {
            name: 'Template Name',
            selector: 'title', 
            sortable: true,
          },
                
    ];

    /*const data1 = [
        {
            id: 1,
            name: "Hadil",
            email: "hadil@gmail.com",
            age: "22"
        },
    ]*/


    const handleSearch = value => {
        const lowercasedValue = value.toLowerCase();
        const filteredItems = data.filter(item =>
            Object.values(item).some(
                field => field && field.toString().toLowerCase().includes(lowercasedValue)
            )
        );
        setFilteredData(filteredItems);
    };
    if (loading) {
        return <div>Loading...</div>;
      }
    return (
        <div className='main-table'>
            <header className={isSticky ? 'sticky' : ''}>
                <a href="/" className="logo">Home Page</a>
                <ul>
                    <li><a href="#">Templates</a></li>
                    <li><a href="#">Signature</a></li>
                    <li><a href="#">UserMenu</a></li>
                </ul>
            </header>
            <div className='container mt-5'>
                <br /><br /><br /><br /><br /><br />
                <div>
                    <h1 className="styled-title1">OUR</h1>
                    <h1 className="styled-title">TEMPLATES...</h1>
                </div>
                <br /><br /><br /><br />
                <div className='text-end'>
                    <input type="text" placeholder="Search" onChange={e => handleSearch(e.target.value)}/>            
                </div>
                <DataTable
                    title="Templates list"
                    columns={columns}
                    data={filteredData}
                    pagination
                    //selectableRows
                />
                <br /><br /><br />
            </div>
        </div>
    )
}
export default Table