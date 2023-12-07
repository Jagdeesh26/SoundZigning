import React from "react";
import "./Blog.css";
import { blog1, blog2, blog3 } from "../../assets";

const Blog = () => {
  return (
    <section id="blog" className="pink">
      <div className="wrapper">
        <h2 className="light">Latest Posts</h2>
        <div className="content-container">
          <div className="post">
            <div className="tag">DAW</div>
            <a href="#">
              <img src={blog1} alt="" />
            </a>
            <a href="#">
              <div className="post-title">
                How To Use Drum Machine in Logic Pro X
              </div>
            </a>
          </div>
          <div className="post">
            <div className="tag">Mixing</div>
            <a href="#">
              <img src={blog2} alt="" />
            </a>
            <a href="#">
              <div className="post-title">How To Mix Guitars Effectively</div>
            </a>
          </div>
          <div className="post">
            <div className="tag">Vox</div>
            <a href="#">
              <img src={blog3} alt="" />
            </a>
            <a href="#">
              <div className="post-title">
                The Real Power of Harmonies in Music Production
              </div>
            </a>
          </div>
        </div>
        <div className="btn-container">
          <a href="#" className="all-posts-btn">
            All Post
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
