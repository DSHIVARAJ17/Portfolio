import "../CSS/Aboutme.css";
const Aboutme = () => {
    return(
        <div class="b">
        <div class="about">
        <h1>Shivaraj D</h1>
        <img src="./public/porfolioimg.jpeg"  class="img" alt="image"  />;
        </div>
        <div className="objective-container">
        <div className="objective-content">
  <h1>Summary</h1>
  <span>As a <b>Full Stack Developer</b> and a third-year <strong>IT student</strong> at <u>St. Joseph's Institute of Technology</u>, my goal is to leverage my skills in <mark>Java, Data Structures & Algorithms</mark>, and modern web technologies to build efficient, scalable, and user-friendly applications.</span>
  <span>I am passionate about problem-solving, backend optimization, and creating seamless user experiences.</span>
  <span>With a strong foundation in <b>JavaScript, React.js, Node.js</b>, and database management, I am eager to apply my knowledge in real-world scenarios.</span>
</div>

    </div>
        </div>
    )
}
export default Aboutme;