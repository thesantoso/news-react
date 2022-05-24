import React, {useReducer} from 'react';
import { Link, useNavigate } from 'react-router-dom';

const searchReducer = (state, event) => {
    return {
      ...state,
      [event.name]: event.value
    }
   }




const Navbar = () => {
    let navigate = useNavigate();
    const [searchValue, setSearchValue] = useReducer(searchReducer, {});

    const handleSubmit = event => {
        navigate(`/search/${searchValue['search']}`);
      }

    const handleChange = event => {
        setSearchValue({
          name: event.target.name,
          value: event.target.value,
        });
      }

	return (
		<div id="navlist">
        <Link to={"/"}>Indonesia</Link>
        <Link to={"/programming"}>Programming</Link>
        <Link to={"/covid"}>COVID-19</Link>
        <Link to={"/saved"}>Saved</Link>
          
        <div className="search">
                <input type="text"
                    placeholder=" Search News"
                    name="search"
                    onChange={handleChange}
                    />
                <button onClick={handleSubmit}>
                    Cari
                </button>
        </div>
    </div>
	);
};

export default Navbar;