import "./PhotoFull.css";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

const PhotoFull = ({ photo, setPhoto }) => {
  return (
    <motion.div
      className="photo-full"
      style={{ display: photo === null ? "none" : "flex" }}
      onClick={() => setPhoto(null)}
      initial={{ opacity: 0 }}
      animate={photo !== null ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.2, type: "tween" }}
    >
      <motion.img
        src={photo}
        alt=""
        initial={{ opacity: 0, scale: 0 }}
        animate={
          photo !== null ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
        }
        transition={{ duration: 0.1, type: "tween" }}
      />
      <div className="close" onClick={() => setPhoto(null)}>
        <AiOutlineClose className="closeIcon" />
      </div>
    </motion.div>
  );
};

export default PhotoFull;
