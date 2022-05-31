import React from 'react';
import Date from '../components/date'
import UserAvatar from '../components/user-avatar';
import Image from 'next/image'
import Link from 'next/link';
import styles from './result.module.css'

const result = ({ userData }, props) => {
  /* console.log(userData); */

    return (
        <div className={styles.result}>
            <UserAvatar userData={ userData } />
            <div className={styles.profile_infos}>
              <div className={styles.name}>{userData.name}</div>
              <div className={styles.profile}>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  @{userData.login}
                </a>
              </div>
              <div className={styles.date}>Joined <Date dateString={userData.created_at} /></div>
            </div>
          <div className={styles.bottom}>
            <p className={styles.presentation}>
              {`${userData.bio === null ? "This profile has no bio" : `${userData.bio}`}`}
              </p>
            <div className={styles.counter}>
              <div className={styles.stat}>
                <div className={styles.stat_header}>Repos</div>
                <div className={styles.stat_number}>{userData.public_repos}</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.stat_header}>Followers</div>
                <div className={styles.stat_number}>{userData.followers}</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.stat_header}>Following</div>
                <div className={styles.stat_number}>{userData.following}</div>
              </div>
            </div>
            <div className={styles.infos}>
              <div className={`${styles.infos_line} ${userData.location === null ? `${styles.disabled}` : "" }`}>
                <Image className={styles.icon_info} src="/images/icon-location.svg" alt="location" width={14} height={20} />
                <span className={styles.text_info} >{userData.location === null ? <span>Not Available</span> : userData.location}</span>
              </div>
              <div className={`${styles.infos_line} ${userData.blog === "" ? `${styles.disabled}` : "" }`}>
                <Image className={styles.icon_info} src="/images/icon-website.svg" alt="website" width={20} height={20} filter={'grayscale(100%) sepia(100%)'}/>
                <a
                  className={styles.text_info}
                  href={userData.blog}
                  target="_blank"
                  rel="noopener noreferrer" 
                >
                  {userData.blog === "" ? <span>Not Available</span> : userData.blog}
                </a>
              </div>
              <div className={`${styles.infos_line} ${userData.twitter_username === null ? `${styles.disabled}` : "" }`}>
                <Image className={styles.icon_info} src="/images/icon-twitter.svg" alt="twitter" width={20} height={18} />
                <a 
                  className={styles.text_info} 
                  href="userData.twitter_username"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {userData.twitter_username === null ? <span>Not Available</span> : userData.twitter_username}
                </a>
              </div>
              <div className={`${styles.infos_line} ${userData.company === null ? `${styles.disabled}` : "" }`}>
                <Image className={styles.icon_info} src="/images/icon-company.svg" alt="company" width={20} height={20} />
                <span className={styles.text_info} >{userData.company === null ? <span>Not Available</span> : userData.company}</span>
              </div>
            </div>
          
          </div>
        </div>
    );
};

export default result;