import Card from "./Card";
import TeacherCard from "./TeacherCard";
import Testimonials from "./Testimonials";


function Home() {
    return (
        <div className="container mt-4">
            {/* Latest Courses Section */}
            <h5 className="border-bottom pb-1 mb-4">
                Latest Courses
                <a href="/#" className="float-end">
                    See All
                </a>
            </h5>
            <div className="row mb-4">
                <div className="col-md-4 p-2">
                    <Card course_id={1}/>
                </div>
                <div className="col-md-4 p-2">
                    <Card course_id={2}/>
                </div>
                <div className="col-md-4 p-2">
                    <Card course_id={3}/>
                </div>
                <div className="col-md-4 p-2">
                    <Card course_id={7}/>
                </div>
            </div>
            {/* End Latest Courses Section */}

            {/* Popular  Courses Section */}
            <h5 className="border-bottom pb-1 my-4">Popular Courses  <a href="/#" className="float-end">See All</a> </h5>
            <div className="row mb-4">
                <div className="col-md-4   p-2">
                    <Card course_id={4}/>
                </div>
                <div className="col-md-4  p-2">
                    <Card course_id={5} />
                </div>
                <div className="col-md-4 p-2">
                    <Card  course_id={6}/>
                </div>
            </div>
            {/* End Popular  Courses Section */}


            {/* Featured Teachers  Section */}
            <h5 className="border-bottom pb-1 my-4">Featured Teachers  <a href="/#" className="float-end">See All</a> </h5>
            <div className="row mb-4">
                <div className="col-md-4   p-2">
                    <TeacherCard />
                </div>
                <div className="col-md-4  p-2">
                    <TeacherCard />
                </div>
                <div className="col-md-4 p-2">
                    <TeacherCard />
                </div>
            </div>
            {/* End Teachers Section */}

            {/* Testimonials Section */}
            <h5 className="border-bottom pb-1 my-4">Testimonials</h5>
            <Testimonials />

        </div>
    )
}
export default Home;