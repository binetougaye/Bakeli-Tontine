const Input = ({input,name,born,firstname,job,mail,adress,phone,organisation}) => {
    return ( <div>
        <label className="form-label">{name}</label>
        <label className="form-label mt-2">{born}</label>
        <label className="form-label">{firstname}</label>
        <label className="form-label mt-2">{job}</label>
        <label className="form-label">{mail}</label>
        <label className="form-label ">{adress}</label>
        <label className="form-label">{phone}</label>
        <label className="form-label">{organisation}</label>
           <div>{input}</div>
    </div> );
}
 
export default Input;



























