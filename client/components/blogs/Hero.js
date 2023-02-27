import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../../styles/blogs/Hero.module.css";
import { getblogs } from "../../services/api";
import { getblogsId } from "../../services/api";
import { useRouter } from "next/router";
const Hero = () => {
  const router = useRouter();
  const { id } = router.query;

  const [blogId, setBlogId] = useState();
  let [blogs, setblogs] = useState([]);

  useEffect(() => {
    const run = async () => {
      const blogResponse = await getblogsId(id);
      if (blogResponse.success) {
        setBlogId({
          basic: blogResponse.basic,
        });
      } else {
        console.log(blogResponse.error);
      }
    };
    if (id) {
      run();
    }
  }, [id]);

  useEffect(() => {
    const getblogsdetails = async () => {
      let data = await getblogs();
      setblogs(data);
    };
    getblogsdetails();
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.headerh2}>
        Welcome to Our <span style={{ color: "#FF242A" }}>Blogs</span>
      </h2>
      <img src="/images/line.png" style={{ marginLeft: "28em" }}></img>
      <p className={styles.headerP}>
        Stay updated with the newest design and development stories, cases
        studies,
      </p>

      <div className={styles.grid}>
        <div className={styles.blogs}>
          {blogs.map((blog, i) => {
            return (
              <Link key={i} href="/blog" className={styles.link}>
                <div className={styles.grid1}>
                  <div className={styles.sectionOne}>
                    <img src={blog.img}></img>

                    <div className={styles.sectionText}>
                      <h3>{blog.title}</h3>
                      <p>{blog.subtitle}</p>

                      <a href="#">Read More</a>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className={styles.second}>
          <div className={styles.searchbar}>
            <h4 className={styles.searchbarText}>Search Blogs</h4>

            <div className={styles.searchInput}>
              <input placeholder="Type here" />
              <div className={styles.searchIcon}>
                <img src="/images/search.png"></img>
                <p>Search</p>
              </div>
            </div>
          </div>

          <div className={styles.articleSection}>
            <h3 className={styles.articleSectionHeaderText}>Recent Blogs</h3>

            <div className={styles.sectionthree}>
              <div className={styles.sectionThreePartOne}>
                <img src="/images/blog_image3.png"></img>
                <div>
                  <h4 className={styles.sectionThreeText}>
                    A 2022 Guide to How to Build Your own Mobile App
                  </h4>
                  <a>Read More</a>
                </div>
              </div>

              <div className={styles.sectionThreePartTwo}>
                <img src="/images/blog_image4.png"></img>
                <div>
                  <h4 className={styles.sectionThreeText}>
                    Bioinformatics and its Sub Disciplines
                  </h4>
                  <a>Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
