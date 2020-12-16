import Item from './item';
const Content = ({ data }) => {
    return (
        <table className="manage__users">
            <tr className='manage__row'>
                <th className='col-3 manage__headers'>Selected 2 users</th>
                <th className='col-3 manage__headers'>User ID</th>
                <th className='col-3 manage__headers'>Phone Number</th>
                <th className='col-3 manage__headers'>Email Address</th>
                <th className='col-1 manage__headers'>Account Created</th>
            </tr>
            <Item users={data}/>
        </table>
    );
};
export default Content;