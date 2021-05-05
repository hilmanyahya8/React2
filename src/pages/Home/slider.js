import img1 from "../Item/img/img1.png"
import img2 from "../Item/img/img2.jpg"
import img3 from "../Item/img/img3.jpg"

export const Slider = () => {
    const sliders = [
        {
          key: 1,
          image: img1,
          text: '“Music is the moonlight in the gloomy night of life.”',
          subtext: '-John Paul Friedrich Richter-',
          active: true
        },
        {
          key: 2,
          image: img2,
          text: '“Music is the literature of the heart; it commences where speech ends.”',
          subtext: '-Alphonse de Lamartine-'
        },
        {
          key: 3,
          image: img3,
          text: '“Music expresses feeling and thought, without language; it was below and before speech, and it is above and beyond all words.”',
          subtext: '-Robert G. Ingersoll-'
        },
      ];
      
    return (
        <div className="row">
          <div className="col-md-12">
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="1" aria-label="Slide-1"></button>
                <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner" >
              {
                sliders.map(slide => {
                  const isDataActive = (slide.active ? 'active' : '');
                  return (
                    <div className={"carousel-item " + isDataActive} key={slide.key}>
                      <img src={slide.image}  class="d-block w-100" alt="..."></img>
                      <div className="carousel-caption d-md-block bg-danger">
                        <h5>{slide.text}</h5>
                        <p>{slide.subtext}</p>
                      </div>
                    </div>
                  )
                })
              }
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden"></span>
            </button>
           </div>
          </div>
        </div>
    )
}