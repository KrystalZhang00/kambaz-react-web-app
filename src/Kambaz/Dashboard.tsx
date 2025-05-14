import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">      
    <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
    <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
    <div id="wd-dashboard-courses">
      <div className="wd-dashboard-course">
        <Link to="/Kambaz/Courses/1234/Home"
              className="wd-dashboard-course-link" >
          <img src="/images/reactjs.jpg" width={200} />
          <div>
            <h5> CS1234 React JS </h5>
            <p className="wd-dashboard-course-title">
              Full Stack software developer  </p>
            <button> Go </button>
          </div>
        </Link>
      </div>
      <div className="wd-dashboard-course">
        <Link to="/Kambaz/Courses/1234/Home"
              className="wd-dashboard-course-link" >
          <img src="/images/nodejs.jpg" width={200} />
          <div>
            <h5> CS2345 Node.js </h5>
            <p className="wd-dashboard-course-title">
              Full Stack software developer  </p>
            <button> Go </button>
          </div>
        </Link>
      </div>
      <div className="wd-dashboard-course">
        <Link to="/Kambaz/Courses/1234/Home"
              className="wd-dashboard-course-link" >
          <img src="/images/mongodb.jpg" width={200} />
          <div>
            <h5> CS3456 MongoDB </h5>
            <p className="wd-dashboard-course-title">
              Full Stack software developer  </p>
            <button> Go </button>
          </div>
        </Link>
      </div>
      <div className="wd-dashboard-course">
        <Link to="/Kambaz/Courses/1234/Home"
              className="wd-dashboard-course-link" >
          <img src="/images/express.jpg" width={200} />
          <div>
            <h5> CS4567 Express.js </h5>
            <p className="wd-dashboard-course-title">
              Full Stack software developer  </p>
            <button> Go </button>
          </div>
        </Link>
      </div>
      <div className="wd-dashboard-course">
        <Link to="/Kambaz/Courses/1234/Home"
              className="wd-dashboard-course-link" >
          <img src="/images/html.jpg" width={200} />
          <div>
            <h5> CS5678 HTML & CSS </h5>
            <p className="wd-dashboard-course-title">
              Full Stack software developer  </p>
            <button> Go </button>
          </div>
        </Link>
      </div>
      <div className="wd-dashboard-course">
        <Link to="/Kambaz/Courses/1234/Home"
              className="wd-dashboard-course-link" >
          <img src="/images/javascript.jpg" width={200} />
          <div>
            <h5> CS6789 JavaScript </h5>
            <p className="wd-dashboard-course-title">
              Full Stack software developer  </p>
            <button> Go </button>
          </div>
        </Link>
      </div>
      <div className="wd-dashboard-course">
        <Link to="/Kambaz/Courses/1234/Home"
              className="wd-dashboard-course-link" >
          <img src="/images/aws.jpg" width={200} />
          <div>
            <h5> CS7890 AWS Cloud </h5>
            <p className="wd-dashboard-course-title">
              Full Stack software developer  </p>
            <button> Go </button>
          </div>
        </Link>
      </div>
    </div>
  </div>
);}
