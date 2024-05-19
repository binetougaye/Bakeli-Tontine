import '../Styles/archives.css'
import React from 'react'
import { BsArchiveFill } from "react-icons/bs"
import { IoEyeOutline } from "react-icons/io5"
import Pagination from './Pagination'

// rafc

const Archives = () => {

    const tableau = [
        { Nom: "Selena Roy", date: "01/01/2022", actions: [<IoEyeOutline style={{ marginRight: '10px' }} />, <BsArchiveFill style={{ color: '#20DF7F' }} />] },
        { Nom: "Emma Watson", date: "01/01/2022", actions: [<IoEyeOutline style={{ marginRight: '10px' }} />, <BsArchiveFill style={{ color: '#20DF7F' }} />] },
        { Nom: "John Robert", date: "01/01/2022", actions: [<IoEyeOutline style={{ marginRight: '10px' }} />, <BsArchiveFill style={{ color: '#20DF7F' }} />] },
        { Nom: "Anne Hathaway", date: "01/01/2022", actions: [<IoEyeOutline style={{ marginRight: '10px' }} />, <BsArchiveFill style={{ color: '#20DF7F' }} />] },
        { Nom: "Ravi Shankar", date: "01/01/2022", actions: [<IoEyeOutline style={{ marginRight: '10px' }} />, <BsArchiveFill style={{ color: '#20DF7F' }} />] },
        { Nom: "Emma Stone", date: "01/01/2022", actions: [<IoEyeOutline style={{ marginRight: '10px' }} />, <BsArchiveFill style={{ color: '#20DF7F' }} />] }
    ]

    return (
        <div className='text-start'>
            <h1>Membres Archivés</h1>
            <div className='w-50 mx-auto mt-5'>
                <h3 className='text-center mb-3'>10 Membres Archivés</h3>
                <table className="table">
                    <thead>
                        <tr className='entete'>
                            <th>Membres</th>
                            <th>Date début</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tableau.map((user) => <tr><td>{user.Nom}</td><td>{user.date}</td><td>{user.actions[0]}{user.actions[1]}</td></tr>)
                        }
                    </tbody>
                </table>
                <Pagination />
            </div>
        </div>
    )
}

export default Archives 