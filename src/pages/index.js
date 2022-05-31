import React from 'react'
import { useState, useEffect } from 'react';
import Layout from '../components/layout'
import Result from '../components/result';
import SearchBox from '../components/search'
import { searchUser } from '../services/githubService';
import styles from '../styles/Home.module.css'

const Index = (props) => {
  const [userName, setUserName] = useState(props.userName); 
  const [userData, setUserData] = useState(props.userData);

  const handleSearch = async (userName) => {
    const res = await searchUser(userName);
    console.log(res.data);
    setUserData(res.data);
  };
  return (
    <Layout>
      <div className={styles.container}> 
        <main className={styles.main}>
          <SearchBox userName={userName} setUserName={setUserName}  onSearch={handleSearch} />
          <Result userData={userData} />      
        </main>
      </div>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const userName = 'octocat';
  const res = await searchUser(userName);

  return {
    props: {
      userData: res.data
    }
  };
};

export default Index;