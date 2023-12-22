// import { useParams } from "react-router-dom";

function CourseDetail() {
    // let {course_id} = useParams();
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-4">
                    <img src="logo512.png" className="img-thumbnail" alt="..." />
                </div>
                <div className="col-8">
                    <h3>Course Title</h3>
                    <p>Course Description</p>
                </div>
            </div>
        </div>
    )
}

export default CourseDetail;
