import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeRecent } from '../../redux/actions';

import './styles.css';

function RecentSearch (props) {
    const dispatch = useDispatch();
    const searchList = useSelector(state => state.searchList);

    const handleRemove = id => {
      dispatch(removeRecent(id))
    } 

    return (
        <div className="recentSearch">
            {
                searchList.map((item, key) => {
                    return (
                        <div className="item" key={key}>
                            <button
                                className="link"
                                onClick={ () => props.searchAction(item) }
                            >
                                { item }
                            </button>
                            
                            <button
                                className="remove"
                                onClick={ () => handleRemove(key) }
                            >
                                X
                            </button>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default RecentSearch;