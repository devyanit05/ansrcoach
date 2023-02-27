import Header from "../components/Header";
import Footer from "../components/Footer";
import { getblogs } from "../services/api";
import styles from "../styles/Blog.module.css";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

// const Blog = () => {

//    const router = useRouter();
//   const blogsId = router.pathname.split("/")[2];
//    const [blogId, setBlogId] = useState([]);

//  useEffect(() => {
//    const getProduct = async () => {
//      try {
//        const res = await axios.get(
//          `http://localhost:7000/api/blogs/feature/blogs${blogsId}`
//        );
//        setBlogId(res.data);
//      } catch {}
//    };
//    getProduct();
//  }, [blogsId]);

//   return (
//     <div>

//       <Header />

//       <div>
//       <div className={styles.container}>

//         <h2 className={styles.headerh2}>
//        {blogId.title}
//         </h2>
//         <img src="/images/line.png" style={{ marginLeft: "28em" }}></img>
//         <p className={styles.headerP}>
//           Last Updated on fdgsg by dg
//         </p>
//         <p className={styles.headerP} style={{ marginTop: "2px" }}>
//           2 mins read
//         </p>
//         <div className={styles.grid}>
//           <div className={styles.grid1}>
//             <img src="/images/blog_image1.png"></img>
//           </div>
//           <div className={styles.grid2}>
//             <div className={styles.searchbar}>
//               <h4>Search Blogs</h4>
//               <div className={styles.searchInput}>
//                 <input placeholder="Type here" />
//                 <div className={styles.searchIcon}>
//                   <img src="/images/search.png"></img>
//                   <p>Search</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className={styles.grid3}>
//             <h4>Recent Blogs</h4>

//             <div className={styles.sectionthree}>
//               <div className={styles.sectionThreePartOne}>
//                 <img src="/images/blog_image3.png"></img>
//                 <div>
//                   <h4>A 2022 Guide to How to Build Your own Mobile App</h4>
//                   <a>Read More</a>
//                 </div>
//               </div>

//               <div className={styles.sectionThreePartTwo}>
//                 <img src="/images/blog_image4.png"></img>
//                 <div>
//                   <h4>Bioinformatics and its Sub Disciplines</h4>
//                   <a>Read More</a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className={styles.article}>
//           <p>
//       mlksf
//           </p>

//         </div>
//       </div>
// </div>
//       <Footer />

//     </div>
//   );
// };

// export default Blog;

const Blog = () => {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h2 className={styles.headerh2}>
          The Main Skills needed to become a Python Pro!
        </h2>
        <img src="/images/line.png" style={{ marginLeft: "28em" }}></img>
        <p className={styles.headerP}>
          Last Updated on 12 Mar 2022 by Abhishek Singh Lodhi
        </p>
        <p className={styles.headerP} style={{ marginTop: "2px" }}>
          2 mins read
        </p>
        <div className={styles.grid}>
          <div className={styles.grid1}>
            <img src="/images/blog_image1.png"></img>
          </div>
          <div className={styles.grid2}>
            <div className={styles.searchbar}>
              <h4>Search Blogs</h4>
              <div className={styles.searchInput}>
                <input placeholder="Type here" />
                <div className={styles.searchIcon}>
                  <img src="/images/search.png"></img>
                  <p>Search</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.grid3}>
            <h4>Recent Blogs</h4>

            <div className={styles.sectionthree}>
              <div className={styles.sectionThreePartOne}>
                <img src="/images/blog_image3.png"></img>
                <div>
                  <h4>A 2022 Guide to How to Build Your own Mobile App</h4>
                  <a>Read More</a>
                </div>
              </div>

              <div className={styles.sectionThreePartTwo}>
                <img src="/images/blog_image4.png"></img>
                <div>
                  <h4>Bioinformatics and its Sub Disciplines</h4>
                  <a>Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.article}>
          <p>
            Python is one of the industry&lsquo;s most popular and sought-after
            programming languages. To become a skilled Python developer, one
            must acquire a variety of abilities. People frequently feel that
            merely knowing a language makes them aware of all conditions;
            nevertheless, in order to become a professional in anything, a
            specific set of abilities is always required, and we are here to
            educate you about those talents
          </p>
          <ul>
            <li>1. Python Core Expertise</li>
            <p>
              You should have a strong understanding of Core Python. The
              following are key Python ideas and elements to be familiar with:
              <br></br>● Iterators\sGenerators <br></br>● Handling Exceptions
              <br></br>● Concepts of file management <br></br>● Variables and
              data types<br></br>● Concepts of OOPs <br></br>● Structures of
              Data
            </p>
            <li>2. Data Scientist&lsquo;s Skills</li>
            <p>
              A Python developer can advance quickly in the field of Data
              Science if you understand the most common aspects of the
              discipline, such as: <br></br>● SQL expertise is required.
              <br></br>● Data Reorganisation <br></br>● Data Manipulation{" "}
              <br></br>● Data Interpretation <br></br>● Data Visualisation{" "}
              <br></br>● Mathematical Understanding <br></br>● Statistics
              expertise
            </p>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
