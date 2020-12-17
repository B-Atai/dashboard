import React from 'react';
const Item = ({ users }) => {
    return (
        <React.Fragment>
            {users.map((item)=>{
                return(
                    <tr className='manage__row'>
                        <td className='col-3'>
                            <img src={item.avatar} alt="" className='manage__avatar'/>
                            <span className='manage__name'>{item.fullName}</span>
                        </td>
                        <td className='col-3'>{item.userID}</td>
                        <td className='col-3'>{item.phone}</td>
                        <td className='col-3'>{item.email}</td>
                        <td className='col-1'>{item.dateOfRegistry}</td>
                    </tr>
                );
            })}
        </React.Fragment>
    );
};
export default Item;