import React from 'react';
import {Link} from 'react-router-dom';


class SearchBar extends React.Component{



handleFormSubmit =(event)=>{
    event.preventDefault();
}


render(){
    return(
        <form onSubmit={this.handleFormSubmit}>
            <div className='form-row'>
                <div className='col-10 ' style={{float:'left'}}>
                    <input
                    type="text"
                    onChange={this.props.searchMovieProp}
                    className='form-control' placeholder='Search a movie' 
                    />
                </div>
                <div className='col-2' style={{float:'right'}}> 
                    <Link to='/add' type="button"
                            className="btn btn-md btn-danger"
                            style={{float:'right'}}>Add Movie
                    </Link>
                </div>

            </div>
        </form>
    )
}

}

export default SearchBar;
