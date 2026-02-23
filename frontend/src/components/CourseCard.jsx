export const CourseCard = ({ image,Name,price,highlight}) => {
    return(
        <div className="course-card">
          <img src={image} alt="course" />
          <div className="course-info">
            <p className="course-name">
              {highlight(Name)}
            </p>
            <p className="price">{price}</p>           
          </div>
        </div>
    );
};