const Input = ({name,value,onChange}) => {
    return(
        <div className="form-group row">
            <label htmlFor={name} className="col-sm-2 col-form-label">{name}</label>
            <div className="col-sm-10">
                <input type="text" onChange={onChange} value={value} name={name} className="form-control" id={name} />
            </div>
        </div>
    )
}

export default Input;