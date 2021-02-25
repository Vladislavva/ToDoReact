import React from 'react';

const Sort = (props) => {
    const { updateSort } = props;

    return (
        <div className="sort">
            <h3 className="sort__headding">Sort by:</h3>
            <select className="sort__select" onChange={ updateSort  }>
                <option value="none">None</option>
                <option value="name">Name</option>
                <option value="date">Date</option>
            </select>



        </div>
    )
};

export default Sort;