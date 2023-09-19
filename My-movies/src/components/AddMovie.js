import React from 'react';
import { Navigate } from "react-router-dom";
import { useNavigate,Link } from 'react-router-dom';
import serialize from 'form-serialize';


const AddMovie =(props)=>{
    
    const navigate = useNavigate();
    const handleFormSubmit =(e)=>{
        
        e.preventDefault();
        const newMovie = serialize(e.target, { hash: true });
        //console.log(newMovie);
        props.addMovieProp(newMovie);
        navigate('/');
      
    }

    return(
        <div className="container">
            <form className="mt-5" onSubmit={handleFormSubmit}>
            <input className="form-control" id="disabledInput" type="text" placeholder="Fill The Form To Add A Movie.." disabled/>

                <div className="form-row mt-1">
                    <div className="form-group col-md-9 " style={{float:'left',width:950}}>
                        <label htmlFor="inputName">Name</label>
                        <input  type="text" 
                                className="form-control " 
                                name="name"/>
                    </div>
                    <div className="form-group col-md-3 " style={{float:'right'}}>
                        <label htmlFor="inputRating">Rating</label>
                        <input 
                                type="text" 
                                className="form-control" 
                                name="rating"/>
                    </div>
                </div>
                
                <div className="form-row mt-5">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputImage">Image URL</label>
                        <input 
                                type="text" 
                                className="form-control" 
                                name="imageURL"/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="overviewTextarea">Overview</label>
                        <textarea 
                                className="form-control" 
                                name="overview" rows="5"></textarea>
                    </div>
                </div>
                <input type="submit" className="btn btn-danger btn-block mt-2" value="Add Movie" />
                
                <a href="/" class="btn btn-info mt-2" style={{float:'right',color:'white'}}>Anasayfa'ya dön</a>
            </form>
        </div>

    )

}
// <button type="button" class="btn btn-info mt-2" style={{float:'right'}}>Anasayfa'ya Dön</button>
export default AddMovie;
