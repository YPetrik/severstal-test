import style from '../../styles/accordion.module.scss';

const Accordion = ({ queryStore }) => {
  return (
    <div className={style.accordion}>
      <details>
        <summary>Requests to API </summary>

        <ol className={style.accordion__ol}>
          {queryStore.map((obj) => (
            <li className={style.accordion__li} key={obj.id}>{`${obj.name} ${obj.time}`}</li>
          ))}
        </ol>
      </details>
    </div>
  );
};

export default Accordion;
