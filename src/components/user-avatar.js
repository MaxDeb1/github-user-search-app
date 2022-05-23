import React from 'react';
import Image from 'next/image';
import styles from './user-avatar.module.css';

const UserAvatar = ({ userData }) => {
  return (
    <div className={styles.user}>
      <figure className={`${styles.avatar} image`}>
        <Image className={styles.rounded} src={userData.avatar_url} alt="avatar" width={120} height={120}/>
      </figure>
    </div>
  );
};

export default UserAvatar;