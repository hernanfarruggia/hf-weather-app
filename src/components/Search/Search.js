import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTempType } from '../../redux/actions';

import './styles.css';

function Search(props) {
    const dispatch = useDispatch();
    const initialSearchValue = useSelector(state => state.search);
    const tempType = useSelector(state => state.tempType);
    const [searchValue, setSearchValue] = useState(initialSearchValue);

    useEffect(() => {
        if (initialSearchValue !== searchValue) {
            setSearchValue(initialSearchValue);
        }
    }, [initialSearchValue]);

    const handleOnChange = e => {
        setSearchValue(e.target.value.toUpperCase());
    }

    const handleOnKeyUp = e => {
        if (e.keyCode === 13 && searchValue !== '') {
            props.searchAction(searchValue);
        }
    }

    const handleTempTypeChange = (type) => {
        dispatch(updateTempType(type));
    }

    return (
        <div className="searchBar">
            <input
                onChange={handleOnChange}
                onKeyUp={handleOnKeyUp}
                placeholder="Press 'Enter' to search..."
                type="text"
                value={searchValue}
            />

            <button
                disabled={ tempType === 'F' }
                onClick={() => handleTempTypeChange('F') }
            >
                F&deg;
            </button>
            
            <button
                disabled={ tempType === 'C' }
                onClick={() => handleTempTypeChange('C') }
            >
                C&deg;
            </button>
        </div>
    );
}

export default Search;