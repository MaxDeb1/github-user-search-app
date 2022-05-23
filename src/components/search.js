import React, { useState } from 'react';
import Image from 'next/image'
import styles from './search.module.css'
import { searchUser } from '../services/githubService';

const Search = ({ userName, setUserName, onSearch }) => {
  
  return (
    <form 
      className={styles.form} 
      onSubmit={e => { 
        e.preventDefault();
        onSearch(userName);
      }}
    >
          <Image
            priority
            src="/images/icon-search.svg"
            className={styles.search_icon}
            height={35}
            width={35}
            alt="sun"
          />
          <input 
            className={styles.search_input} 
            type="text" 
            name="user"
            placeholder="Search GitHub username..."
            value={userName}
            onChange={e => setUserName(e.target.value)}
          />
          <button 
            className={styles.button} 
            type="submit"
          >
            Search
          </button>
        </form>
  );
};

export default Search;