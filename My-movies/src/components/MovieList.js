import React from 'react';



const MovieList =(props)=>{

    return(
    <div className='row rounded'>

       
            {props.movies.map((movie) => (
                <div className='col-lg-4' key={movie.id}>
                    <div className='card mb-4 shadow-sm' style={{height: 1000}}>
                        <img  src={movie.imageURL} className='card-img-top p-3' alt="Sample Movie" />
                        <div className='card-body d-flex flex-column '>
                            <h5 className='card-title p-2'>{movie.name}</h5>
                            <p className='card-text overflow-auto mb-auto p-2' style={{height:220}}>{movie.overview}</p>
                            <div className='d-flex p-2 justify-content-between align-items-center '>
                                <button type="button" onClick={(event)=> props.deleteMovieProp(movie) } className='btn btn-md btn-outline-danger'>Delete</button>
                                <h2><span className="badge bg-info">{movie.rating}</span></h2>
                            </div>
                        </div>
                    </div>
                </div>



            ))}

    </div>    


    )

}

export default MovieList;
