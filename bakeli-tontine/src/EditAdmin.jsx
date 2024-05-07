import React from 'react'
import './Profil.css'
import "bootstrap/dist/css/bootstrap.min.css"

const EditAdmin = ({ profil, personne, admin, img }) => {

  return (
    <div className='container'>
      <div className='profil'>
        <p>{profil}</p>
        <img className='img' src={img} alt="" />
        <i class="fa-solid fa-camera"></i>
        <p>{personne} </p>
        <p>{admin}</p>
      </div>
      <div className='bordure'>
      </div>
      <div>
        <div className='input d-flex ' >
          <div class="mb-3">
            <label for="" class="form-label">Prenom</label>
            <input type="text" className="form-control m-2 nom" />
          </div>
          <div className="mb-3">
            <label for="" class="form-label">Nom</label>
            <input type="text" className="form-control m-2 nom" />
          </div>
        </div>

        <div className='d-flex flex-column '>
          <div cclassName="mb-3">
            <label for="" class="form-label">Email </label>
            <input type="email" className=' form-control m-2' />
          </div>
          <div cclassName="mb-3">
            <label for="" class="form-label">Telephone</label>
            <input type="telephone" className='form-control m-2' />
          </div>
          <div cclassName="mb-3">
            <label for="" class="form-label">Status</label>
            <input type="text" className=' form-control m-2' placeholder='admin' />
          </div>


        </div>

        <button className='  jour  '>Mettre à jour</button>
      </div>


    </div>
  )
}
export default EditAdmin

