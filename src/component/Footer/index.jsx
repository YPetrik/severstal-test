import Accordion from '../Accordion';

import style from '../../styles/footer.module.scss';

const Footer = ({ queryStore }) => {
  return (
    <div className={style.footer}>
      <div>
        <Accordion queryStore={queryStore} />
      </div>
    </div>
  );
};

export default Footer;
