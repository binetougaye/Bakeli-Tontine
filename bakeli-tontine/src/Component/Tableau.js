import React, { useState } from 'react';
import { Table, Modal, } from 'react-bootstrap';
import Vector from '../assets/Vector.png';
import 'bootstrap/dist/css/bootstrap.min.css';

import Pagination from './Pagination';
import './Tableau.css';

const Tableau = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);

    const openModal = (member) => {
        setSelectedMember(member);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const members = [
        
        { name: "Selena Roy", startDate: "01/01/2022", cotisation: "200.000FCFA", restant: "100.000FCFA" },
        { name: "Emma Watson", startDate: "01/01/2022", cotisation: "200.000FCFA", restant: "100.000FCFA" },
        { name: "Jhon Robert", startDate: "01/01/2022", cotisation: "200.000FCFA", restant: "100.000FCFA" },
        { name: "Anne Hataway", startDate: "01/01/2022", cotisation: "200.000FCFA", restant: "100.000FCFA" },
        { name: "Ravis Shankar", startDate: "01/01/2022", cotisation: "200.000FCFA", restant: "100.000FCFA" },
        { name: "Emme Stone", startDate: "01/01/2022", cotisation: "200.000FCFA", restant: "100.000FCFA" },
        
    ];

    return (


        /**------------------------------- */
        <div style={{  position: 'relative', left: '25px',fontSize:'13px' }}>
            <Table className='table'style={{ width: '85%',height:'350px' }}>
                <thead>
                    <tr className='entete'>
                        <th>Membres</th>
                        <th>Date de début</th>
                        <th>Montant Cotisation</th>
                        <th>Montant restant</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody style={{position:'relative',bottom:'17px'}}>
                {members.map((member, index) => (
                        <tr key={index} style={member.name === "Selena Roy" || member.name === "Emma Watson"  || member.name === "Jhon Robert"|| member.name === "Anne Hataway"|| member.name === "Ravis Shankar"|| member.name === "Emme Stone"? {position:'relative',top:'30px', height:'60px'  } : {}}>
                            <td>{member.name}</td>
                            <td>{member.startDate}</td>
                            <td>{member.cotisation}</td>
                            <td>{member.restant}</td>
                            <td>
                                <img src={Vector} alt="foto" onClick={() => openModal(member)} style={{ cursor: 'pointer' }} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Modal show={showModal} onHide={closeModal} className='modalcontainer'>
    <Modal.Header closeButton style={{ background: '#20DF7F', fontSize: '7px',height:'40px' }}>
        <Modal.Title style={{ fontSize: '15px',position:'relative',left:'20px' }}>Détails Cotisations</Modal.Title>
    </Modal.Header>
    <h5 style={{position:'relative',left:'36px'}}>Selena Roy
    <br></br>
    <span className='text-secondary' style={{position:'relative',left:'57px',fontSize:'13px',bottom:'4px' }}>Designer</span>
    </h5>
    <Modal.Body>
        {selectedMember && (
            <div>
                <table className='tablemodal' style={{ width: '88%',marginLeft:'26px',height:'250px',position:'relative',bottom:'19px'}}>
                    <thead>
                   
                    <tr style={{height:''}}>
    <th style={{ background: '#093545', color: 'white', padding: '5px 10px' }}>Mois</th>
    <th style={{ background: '#093545', color: 'white', padding: '5px 10px' }}>Date</th>
    <th style={{ background: '#093545', color: 'white', padding: '5px 10px' }}>Montant</th>
</tr>

                    </thead>
                    <tbody className='tbody'>
                        <tr style={{ background: '#d2d2d2',position:'relative',top:'4px' ,opacity:'0.5'}}>
                            <td style={{ padding: '10px 20px'  }}>Janvier</td>
                            <td style={{ padding: '10px 20px'  }}>23-02-2022</td>
                            <td style={{ padding: '10px 20px' }}>25.000 FCFA</td>
                        </tr>
                        <tr style={{ background: '#d2d2d2',position:'relative',top:'8px' ,opacity:'0.5'}}>
                            <td style={{ padding: '10px 20px' }}>Février</td>
                            <td style={{ padding: '10px 20px' }}>22-01-2022</td>
                            <td style={{ padding: '10px 20px' }}>25.000 FCFA</td>
                        </tr>
                        <tr style={{ background: '#d2d2d2',position:'relative',top:'12px' ,opacity:'0.5' }}>
                            <td style={{ padding: '10px 20px' }}>Mars</td>
                            <td style={{ padding: '10px 20px' }}>12-03-2022</td>
                            <td style={{ padding: '10px 20px' }}>25.000 FCFA</td>
                        </tr>
                        <tr style={{ background: '#d2d2d2',position:'relative',top:'16px' ,opacity:'0.5' }}>
                            <td style={{ padding: '10px 20px' }}>Avril</td>
                            <td style={{ padding: '10px 20px' }}>05-04-2022</td>
                            <td style={{ padding: '10px 20px' }}>25.000 FCFA</td>
                        </tr>
                        <tr style={{ background: '#d2d2d2',position:'relative',top:'20px' ,opacity:'0.5' }}>
                            <td style={{ padding: '10px 20px' }}>Juin</td>
                            <td style={{ padding: '10px 20px' }}>09-06-2022</td>
                            <td style={{ padding: '10px 20px' }}>25.000 FCFA</td>
                        </tr>
                        <tr style={{ background: '#d2d2d2',position:'relative',top:'24px',opacity:'0.5'  }}>
                            <td style={{ padding: '10px 20px' }}>Juillet</td>
                            <td style={{ padding: '10px 20px' }}>09-06-2022</td>
                            <td style={{ padding: '10px 20px', }}>25.000 FCFA</td>
                        </tr>  
                    </tbody>
                </table>
                <p className="d-flex justify-content-end"style={{ padding: '12px' ,color:'#20DF7F',fontSize:'18px',position:'relative',top:'20px',}}>
                <strong>Total:300.000 FCFA</strong></p>
            </div>
            
        )}
    </Modal.Body>
</Modal>
<br/>
<Pagination/>
        </div>
    );
}

export default Tableau;
