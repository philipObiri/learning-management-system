import styles from './Card.module.css';

function TeacherCard() {
    return (
        <div class="card m-3" style={{ backgroundColor:"#f4f4f4"}}>
            <img src="logo512.png" class="card-img-top" alt="..." className={styles.course_img}/>
            <div class="card-body">
                <a href="/#"><h6 class="card-title mb-3">Name</h6></a>
                {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                {/* <a href="/#" className={styles.detailBtn}>Details  &rarr;</a> */}
            </div>
        </div>
    )
}

export default TeacherCard;
