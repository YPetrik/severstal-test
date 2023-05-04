import axios from 'axios';

import style from '../../styles/post.module.scss';

const Post = ({ setQueryStore }) => {
  const fetchAnswer = async () => {
    const now = new Date().toLocaleTimeString('en-GB');
    try {
      const response = await axios.post('/post');
      setQueryStore((prev) => [
        ...prev,
        { id: new Date().toISOString(), name: response?.data?.url, time: now },
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={style.main}>
      <button className={style.main__btn} onClick={fetchAnswer}>
        Post
      </button>
    </div>
  );
};

export default Post;
