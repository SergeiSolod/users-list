import React, { FC, useState } from 'react';
import Accordion from '@src/UI/accordion/Accordion';
import IconRoundButton from '@src/UI/buttons/IconRoundButton';
import { IUserBlock } from '@src/modules/UserList/types/user';
import './UserBlock.scss';

const UserBlock: FC<IUserBlock> = (props) => {
  const { user, openModal = () => {} } = props;

  const [selectedId, setSelectedId] = useState(null);

  // needed to open the accordion
  const handleSelectedId = (id: number) => {
    if (id === selectedId) {
      setSelectedId(null);
    } else {
      setSelectedId(id);
    }
  };

  return (
    <div className={'user-block-wrapper'} key={user.id}>
      <div className={'user-block-accordion-wrapper'}>
        <Accordion
          id={user.id}
          selectedId={selectedId}
          handleSelectedId={handleSelectedId}
          titleFirst={'Name: ' + user.name}
          titleSecond={'Username: ' + user.username}
          titleThird={'Email: ' + user.email}
          textFirst={'Address: ' + user.address.city + ' ' + user.address.street}
          textSecond={'Company: ' + user.company.name}
          color={'#0f0f0f0'}
          isRoot={false}
          hasChildren={false}
          key={user.id}
        />
      </div>
      <div className={'user-block-button-wrapper'}>
        <IconRoundButton
          onClick={() => {
            openModal(user.id);
          }}
        >
          Delete
        </IconRoundButton>
      </div>
    </div>
  );
};

export default UserBlock;
