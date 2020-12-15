import key from '../../assets/key.svg';
import search from '../../assets/search.svg';
import plus from '../../assets/plus.svg';
const Top = () => {
    return (
        <div className='manage__top row'>
            <div className='row'>
                <div className='manage__filter'>
                    <img src={key} alt='key' />
                    <span>Filter</span>
                </div>
                <label className='manage__search'>
                    <a href='#'><img src={search} alt='loop' className='manage__search--icon' /></a>
                    <input type='text' placeholder='Search users by name, id' />
                </label>
            </div>
            <button className='manage__add'>
                <img src={plus} alt='plus' />
                <span>ADD USER</span>
            </button>
        </div>
    );
};
export default Top;