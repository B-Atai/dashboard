import React from 'react';
import {} from 'react-router-dom';
import axios from 'axios';
import Content from './content';
import key from '../../assets/key.svg';
import search from '../../assets/search.svg';
import plus from '../../assets/plus.svg';
import './style.scss';


const Manage = () => {
  const [usersData, setUsersData] = React.useState([]);
  const [activeModal, setActiveModal] = React.useState(false);
  const [newUser, setNewUser] = React.useState({
    id: '',
    avatar: '',
    fullName: '',
    userID:'',
    email: '',
    phone: '',
    dateOfRegistry: ''
  })

  const saveData = (event) => {
    setNewUser({
      id: '',
      avatar: event.target.form[1].value,
      fullName: event.target.form[0].value,
      userID:event.target.form[2].value,
      email: event.target.form[4].value,
      phone: event.target.form[3].value,
      dateOfRegistry: ''
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setUsersData([...usersData,newUser ])
    setNewUser({
      id: '',
      avatar: '',
      fullName: '',
      userID:'',
      email: '',
      phone: '',
      dateOfRegistry: ''
    })
  }
  
  const handleClick = () => {
      setActiveModal(activeModal ? false : true);
  };
  
  React.useEffect(async () => {
    await axios
    .get('http://localhost:3000/database.json')
    .then((call) => call)
    .then(({ data }) => setUsersData(data.users));
  }, []);
  return (
    <section className='manage'>
      {activeModal && (
        <div className='modal'>
          <form onSubmit={(event) => handleSubmit(event)}>
            <h3>Я есть модалка</h3>
            <input onChange={(event) => saveData(event)} value={newUser.fullName} type='text' placeholder='Введите Имя Пользователя' />
            <input onChange={(event) => saveData(event)} value={newUser.avatar} type='text' placeholder='Введите путь к картинке' />
            <input onChange={(event) => saveData(event)} value={newUser.userID} type='text' placeholder='Введите ID' />
            <input onChange={(event) => saveData(event)} value={newUser.phone} type='text' placeholder='Введите номер телефона' />
            <input onChange={(event) => saveData(event)} value={newUser.email} type='text' placeholder='Введите почту пользователя' />
           <button>Добавить пользователя</button>
          </form>
        </div>
      )}
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
          <button onClick={handleClick} className='manage__add'>
              <img src={plus} alt='plus' />
              <span>ADD USER</span>
          </button>
      </div>
      <Content data={usersData}/>
    </section>
  );
};

export default Manage;