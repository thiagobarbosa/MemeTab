import useMeme from "../hooks/useMeme";
import styles from "../styles/MemeContainer.module.css";


const MemeContainer = () => {
  const [meme] = useMeme();

  const getMeme = (image, index) => {
    return (
        <>
        <p>meme: {image}</p>
      <img src={image} />
      </>
    );
  };

  return <img src={meme} className={styles.memeImage} />
}

export default MemeContainer;
