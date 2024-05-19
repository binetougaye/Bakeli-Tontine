import React from 'react'
import '../Styles/pagination.css'


export default function Pagination() {
    return (
        <div className='mt-3'>
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className='previous'>Previous page</li>
                    <li className='un'>1</li>
                    <li className='deux'>2</li>
                    <li className='next'>Next page</li>
                </ul>
            </nav>
        </div>
    )
}

