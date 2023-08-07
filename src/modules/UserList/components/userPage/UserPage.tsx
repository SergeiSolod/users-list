import React, { FC, useEffect, useState } from 'react';
import { useSelectorHook } from '@src/modules/UserList/hooks/useSelectorHook';
import { useActions } from '@src/modules/UserList/hooks/useActions';
import { filterUsers } from '@src/modules/UserList/hooks/useFilter';
import Input from '@src/UI/inputs/Input';
import UserBlock from '@src/modules/UserList/components/userBlock/UserBlock';
import Modal from '@src/UI/modals/Modal';
import Preloader from '@src/UI/preloder/Preloader';
import Button from '@src/UI/buttons/Button';
import Messages from '@src/UI/messages/Messages';
import './UserPage.scss';

const UserPage: FC = () => {
  const { users, error, loading, info } = useSelectorHook((state) => state.user);

  const [searchText, setSearchText] = useState('');
  const [userList, setUserList] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalId, setModalId] = useState(0);

  const { fetchUsers, deleteUser, resetUsers, closeInfo } = useActions();

  const openModal = (id: number) => {
    setModal(true);
    setModalId(id);
  };

  const closeModal = () => {
    setModal(false);
    setModal(null);
  };

  // deleting a user
  const deleteUserModal = () => {
    deleteUser(modalId);
    setModal(false);
  };

  // delay when entering text in the search bar
  useEffect(() => {
    const Debouce = setTimeout(() => {
      // filtering the desired users through a hook
      const filteredUsers = filterUsers(searchText, users);
      setUserList(filteredUsers);
    }, 300);

    return () => clearTimeout(Debouce);
  }, [searchText]);

  // request to the server during initialization
  useEffect(() => {
    fetchUsers();
  }, []);

  // check if users are loaded
  useEffect(() => {
    setUserList(users);
  }, [users]);

  // show preloader if users have not loaded
  if (loading) {
    return <Preloader height={'600px'} primary />;
  }

  if (error) {
    return <Messages isError styles={{ top: '150px' }} title={error} />;
  }

  return (
    <div className={'user-page-wrapper'}>
      <div className={'user-page-content'}>
        {info && <Messages styles={{ top: '150px' }} title={info} onAccept={closeInfo} />}

        {modal && (
          <Modal
            title={'Are you sure?'}
            buttonTextOk={'Delete'}
            buttonTextCancel={'Cancel'}
            styles={{ top: '150px' }}
            onCancel={closeModal}
            onAccept={deleteUserModal}
          />
        )}

        <div className={'user-page-input-wrapper'}>
          <Input
            value={searchText}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchText(e.target.value)}
            label={'Search'}
            id={'search'}
            description={'Find user'}
          />
        </div>

        <div>
          {userList.map((user) => (
            <UserBlock key={user.id} user={user} openModal={openModal} />
          ))}
          <Button onClick={resetUsers} styles={{ marginTop: '35px' }} description={'Click to reset user list'}>
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
