import Hero from "../../components/blogs/Hero";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styling from "../../styles/blogs/Hero.module.css";

const Blogs = () => {
  return (
    <div className={styling.body}>
          <Header />
          <Hero />
          <Footer />
    </div>
  )
}

export default Blogs;
