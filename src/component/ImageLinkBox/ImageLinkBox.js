
import React from "react";


const ImageLinkBox = ({onInputChange, onButtonSubmit}) => {
    return (
        <div className='container'>
            <p className="text-white">This App will detect faces in your picture</p>
            <div className="inputdiv">
                <div className="input-group">
                    <input style ={{minWidth:"250px"}} type="text" className="form-control" placeholder="Paste Image URL" onChange={onInputChange}/>
                </div>
                <button type="button" style ={{backgroundColor:"#d63ecc"}} 
                 onClick={onButtonSubmit} className="btn btn-dark ">Detect</button>
            </div>
        </div>
    )

}

export default ImageLinkBox;