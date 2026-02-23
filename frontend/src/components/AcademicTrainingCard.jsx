export const AcademicTrainingCard = ({ image,Name, price, highlight }) => {
  return(
    <div className="AcademicTrainingCard">
       
        <img src={image} alt="AcademicTraining" />
        <div className="AcademicTraining-info">
            <p className="AcademicTraining-name">
                {highlight(Name)}
            </p>
            <p className="price">{price}</p>
        </div>
    </div>
  )
};

