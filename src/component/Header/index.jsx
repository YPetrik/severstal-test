import { Link } from 'react-router-dom';

import styles from '../../styles/header.module.scss';

const Header = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.nav__header}>
        <h3>Северсталь</h3>
        <div>
          <Link className={styles.nav__link} to="/get">
            Get
          </Link>
          <Link className={styles.nav__link} to="/post">
            Post
          </Link>
          <Link className={styles.nav__link} to="/delete">
            Delete
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
