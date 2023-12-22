import { Link } from "react-router-dom";
import styles from './Card.module.css';

function Card({course_id}) {
    let course = `/detail/${course_id}`;
    return (
        <div className="card m-3"  style={{ backgroundColor:"#f4f4f4"}}>
        
           <Link to={course}><img src="logo512.png" class="card-img-top" alt="..." className={styles.course_img}/></Link>
            <div class="card-body">
                <h6 class="card-title mb-3"><Link to={course}>Course title</Link></h6>
                {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                {/* <a href="/#" className={styles.detailBtn}>Details  &rarr;</a> */}
            </div>
        
        </div>
    )
}

export default Card;
