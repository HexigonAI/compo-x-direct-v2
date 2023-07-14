import React, { useState } from 'react';
import styles from '../../styles/WelcomeFooter.module.css';

const WelcomeFooter = () => {
  const [isClosed, setIsClosed] = useState(false);

  const toggleFooter = () => {
    setIsClosed(!isClosed);
  };
  
  return (
    <>
      <div
        className={`${styles.footer_blocks}${
          isClosed ? ` ${styles.slide_out}` : ''
        }`}
      >
        <div
          style={{
            textAlign: 'center',
            paddingTop: '1em',
            fontFamily: 'LeagueSpartanMedium',
          }}
        >
          <span>
            Welcome to <strong>CompoX</strong> Beta 1.2.{' '}
            <a
              style={{ textDecoration: 'underline' }}
              href='https://discord.gg/Wkv8j9Cz'
            >
              Join our Community{' '}
            </a>
            for more updates, training and more.
          </span>
          <span>
            <a
              style={{ cursor: 'pointer' }}
              onClick={(e) => toggleFooter()}
              className={styles.footer_close}
            ></a>
          </span>
        </div>
      </div>
    
    </>
  );
};

export default WelcomeFooter;
