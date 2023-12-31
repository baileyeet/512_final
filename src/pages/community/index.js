import {React, useState, useEffect, useRef} from "react";

import Button from "../../components/button";
import Input from "../../components/input/inedx";
import TextBox from "../../components/text-box";

import filterIcon from "../../assets/filterIcon.png";
import img1 from "../../assets/backgroundImg1.png";
import img2 from "../../assets/backgroundImg2.png";
import img3 from "../../assets/backgroundImg3.png";
import plusIcon from "../../assets/plusIcon.png";
import blogImg1 from "../../assets/blogImg1.png";
import blogImg2 from "../../assets/blogImg2.png";
import style from "./community.module.scss";
import Question from "../../components/question";
import CreatePostModal from "../../components/create-post-modal";

const Community = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const componentRef = useRef();
  const [postCategory, setPostCategory] = useState("Mental Health");
  const [blogsData, setBlogsData] = useState(blogData);

  const categoryClicked = (category) => {
    setPostCategory(category);
    setModalOpen(true);
  }
    const openModal = () => {
      setModalOpen(true)
      console.log("modal open")
    };
    const closeModal = (title, body, category) => {
      setModalOpen(false);
      const newBlog = {
        title:title,
        desc : body,
      }
      setBlogsData((prevBlogData) => [newBlog, ...prevBlogData]);
    }

    const handleClickOutside = (event) => {
      if (componentRef.current && !componentRef.current.contains(event.target)) {
        setModalOpen(false);
      }
    };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <div className={style.bigContainer}>
      <div className = {style.modalContainer} ref = {componentRef}>
        <CreatePostModal isOpen={isModalOpen} onClose={closeModal} startingCategory={postCategory}/>
      </div>
      <div className={style.container}>
        <h1>Welcome to the MenoMate Community</h1>
        <p className={style.para}>
          Explore thousands of posts, questions and conversations with people just
          like you
        </p>

        <div className={style.inputSection}>
          <div className={style.inputDiv}>
            <Input />
          </div>
          <div className={style.btns}>
            <div onClick={openModal}>
            <Button
              title={"New Post"}
              icon={plusIcon}
              className={style.filterBtn}
              onClick={openModal}
            />
            </div>
            <Button title={"Filter"} icon={filterIcon} />
          </div>
        </div>

        {/* button section */}

        <div className={style.parent}>
          <img src={img1} alt="img" />
          <img src={img2} alt="img" />
          <img src={img3} alt="img" />
          <div className={style.child}>
            {textBoxData?.map(({ title }, i) => {
              return (
                <div onClick = {() => categoryClicked(title)}>
                  <TextBox title={title} />
                </div>
              );
            })}
          </div>
        </div>

        {/* plus btn  */}

        {/* Questions */}

        {blogsData?.map(({ title, desc, blogImg }) => {
          return <Question title={title} desc={desc} blogImg={blogImg} />;
        })}
      </div>
    </div>
  );
};

export default Community;

const textBoxData = [
  { title: "General" },
  { title: "Mental Health" },
  { title: "Physical Health" },
  { title: "Fitness" },
  { title: "Lifestyle" },
  { title: "Healthy Eating" },
  { title: "Opinion" },
  { title: "Sex" },
];

const blogData = [
  {
    title: "Is anyone else pissed that no one prepared you for menopause ?",
    desc: "   There was “the talk” plus sex ed. to prepare you for puberty sex and    pregnancy. But menopause? I was totally blindsided when my periods started becoming irregular and sometimes very heavy. I thought something was seriously wrong with me. It reminds me of the poor uneducated girls who got their periods for the first time and thought they were dying. I would have appreciated a bit more lifelong sexual and reproductive health in my sex ed.   ",
  },
  {
    title: "My experience with mental health and menopause - a blog post",
    blogImg: blogImg1,
  },
  {
    title: "Too lethargic to exercise? Is that a thing?",
    desc: "   There was “the talk” plus sex ed. to prepare you for puberty sex and    pregnancy. But menopause? I was totally blindsided when my periods started becoming irregular and sometimes very heavy. I thought something was seriously wrong with me. It reminds me of the poor uneducated girls who got their periods for the first time and thought they were dying. I would have appreciated a bit more lifelong sexual and reproductive health in my sex ed.   ",
  },
  {
    title: "The ultimate exercise guide for people with weak knees",
    blogImg: blogImg2,
  },
];
