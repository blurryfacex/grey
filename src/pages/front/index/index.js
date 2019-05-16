import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './index.less'

export default class index extends React.Component {

  render() {
    return (
      <div>
        <section>
          <div className="carousel">
            <Carousel>
              <Carousel.Item className="Carousel-Item">
                <picture>
                  <source sizes="(min-width: 600px) 100vw, 600px" media="(min-width: 600px)"
                          srcSet="https://amc-theatres-res.cloudinary.com/image/upload/c_fill,f_auto,fl_lossy,g_auto,h_600,q_auto,w_767/v1556122899/amc-cdn/general/film/poms/FLM_1670_POMS_DesktopHero_REV2.jpg 767w, https://amc-theatres-res.cloudinary.com/image/upload/c_fill,f_auto,fl_lossy,g_auto,h_600,q_auto,w_1024/v1556122899/amc-cdn/general/film/poms/FLM_1670_POMS_DesktopHero_REV2.jpg 1024w, https://amc-theatres-res.cloudinary.com/image/upload/c_fill,f_auto,fl_lossy,g_auto,h_600,q_auto,w_1260/v1556122899/amc-cdn/general/film/poms/FLM_1670_POMS_DesktopHero_REV2.jpg 1260w, https://amc-theatres-res.cloudinary.com/image/upload/c_fill,f_auto,fl_lossy,g_auto,h_600,q_auto,w_1600/v1556122899/amc-cdn/general/film/poms/FLM_1670_POMS_DesktopHero_REV2.jpg 1600w"/>
                  <img sizes="(min-width: 241px) and (max-width: 600px) 100vw, 600px"
                       srcSet="https://amc-theatres-res.cloudinary.com/image/upload/c_fill,f_auto,fl_lossy,g_auto,h_1020,q_auto,w_240/v1556122051/amc-cdn/general/film/poms/FLM_1670_POMS_MobileHero.jpg 240w, https://amc-theatres-res.cloudinary.com/image/upload/c_fill,f_auto,fl_lossy,g_auto,h_1020,q_auto,w_320/v1556122051/amc-cdn/general/film/poms/FLM_1670_POMS_MobileHero.jpg 320w, https://amc-theatres-res.cloudinary.com/image/upload/c_fill,f_auto,fl_lossy,g_auto,h_1020,q_auto,w_321/v1556122051/amc-cdn/general/film/poms/FLM_1670_POMS_MobileHero.jpg 321w, https://amc-theatres-res.cloudinary.com/image/upload/c_fill,f_auto,fl_lossy,g_auto,h_1020,q_auto,w_480/v1556122051/amc-cdn/general/film/poms/FLM_1670_POMS_MobileHero.jpg 480w, https://amc-theatres-res.cloudinary.com/image/upload/c_fill,f_auto,fl_lossy,g_auto,h_1020,q_auto,w_767/v1556122051/amc-cdn/general/film/poms/FLM_1670_POMS_MobileHero.jpg 767w"
                       alt="Poms"
                       itemProp="image"
                  />
                </picture>
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className="Carousel-Item">
                <picture>
                  <source sizes="(min-width: 600px) 100vw, 600px" media="(min-width: 600px)"
                          srcSet="https://amc-theatres-res.cloudinary.com/image/upload/c_fill,f_auto,fl_lossy,g_auto,h_600,q_auto,w_767/v1556122899/amc-cdn/general/film/poms/FLM_1670_POMS_DesktopHero_REV2.jpg 767w, https://amc-theatres-res.cloudinary.com/image/upload/c_fill,f_auto,fl_lossy,g_auto,h_600,q_auto,w_1024/v1556122899/amc-cdn/general/film/poms/FLM_1670_POMS_DesktopHero_REV2.jpg 1024w, https://amc-theatres-res.cloudinary.com/image/upload/c_fill,f_auto,fl_lossy,g_auto,h_600,q_auto,w_1260/v1556122899/amc-cdn/general/film/poms/FLM_1670_POMS_DesktopHero_REV2.jpg 1260w, https://amc-theatres-res.cloudinary.com/image/upload/c_fill,f_auto,fl_lossy,g_auto,h_600,q_auto,w_1600/v1556122899/amc-cdn/general/film/poms/FLM_1670_POMS_DesktopHero_REV2.jpg 1600w"/>
                  <img sizes="(min-width: 241px) and (max-width: 600px) 100vw, 600px"
                       srcSet="https://amc-theatres-res.cloudinary.com/image/upload/c_fill,f_auto,fl_lossy,g_auto,h_1020,q_auto,w_240/v1556122051/amc-cdn/general/film/poms/FLM_1670_POMS_MobileHero.jpg 240w, https://amc-theatres-res.cloudinary.com/image/upload/c_fill,f_auto,fl_lossy,g_auto,h_1020,q_auto,w_320/v1556122051/amc-cdn/general/film/poms/FLM_1670_POMS_MobileHero.jpg 320w, https://amc-theatres-res.cloudinary.com/image/upload/c_fill,f_auto,fl_lossy,g_auto,h_1020,q_auto,w_321/v1556122051/amc-cdn/general/film/poms/FLM_1670_POMS_MobileHero.jpg 321w, https://amc-theatres-res.cloudinary.com/image/upload/c_fill,f_auto,fl_lossy,g_auto,h_1020,q_auto,w_480/v1556122051/amc-cdn/general/film/poms/FLM_1670_POMS_MobileHero.jpg 480w, https://amc-theatres-res.cloudinary.com/image/upload/c_fill,f_auto,fl_lossy,g_auto,h_1020,q_auto,w_767/v1556122051/amc-cdn/general/film/poms/FLM_1670_POMS_MobileHero.jpg 767w"
                       alt="Poms"
                       itemProp="image"
                  />
                </picture>
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className="Carousel-Item">
                <picture className="Carousel-Slide-Image">
                  <source sizes="(min-width: 768px) 100vw, 768px" media="(min-width: 768px)"
                          srcSet="https://amc-theatres-res.cloudinary.com/image/upload/c_fill,f_auto,fl_lossy,g_auto,h_600,q_auto,w_767/v1557772028/amc-cdn/general/offers/dark-phoenix-gwp/FLM_1693_DarkPhoenixGWP_DesktopHero_Rev2.jpg 767w, https://amc-theatres-res.cloudinary.com/image/upload/c_fill,f_auto,fl_lossy,g_auto,h_600,q_auto,w_1024/v1557772028/amc-cdn/general/offers/dark-phoenix-gwp/FLM_1693_DarkPhoenixGWP_DesktopHero_Rev2.jpg 1024w, https://amc-theatres-res.cloudinary.com/image/upload/c_fill,f_auto,fl_lossy,g_auto,h_600,q_auto,w_1260/v1557772028/amc-cdn/general/offers/dark-phoenix-gwp/FLM_1693_DarkPhoenixGWP_DesktopHero_Rev2.jpg 1260w, https://amc-theatres-res.cloudinary.com/image/upload/c_fill,f_auto,fl_lossy,g_auto,h_600,q_auto,w_1600/v1557772028/amc-cdn/general/offers/dark-phoenix-gwp/FLM_1693_DarkPhoenixGWP_DesktopHero_Rev2.jpg 1600w"/>
                  <img sizes="(min-width: 241px) and (max-width: 767px) 100vw, 767px"
                       srcSet="https://amc-theatres-res.cloudinary.com/image/upload/c_fill,f_auto,fl_lossy,g_auto,h_1020,q_auto,w_240/v1557772027/amc-cdn/general/offers/dark-phoenix-gwp/FLM_1693_DarkPhoenixGWP_MobileHero_Rev2.jpg 240w, https://amc-theatres-res.cloudinary.com/image/upload/c_fill,f_auto,fl_lossy,g_auto,h_1020,q_auto,w_320/v1557772027/amc-cdn/general/offers/dark-phoenix-gwp/FLM_1693_DarkPhoenixGWP_MobileHero_Rev2.jpg 320w, https://amc-theatres-res.cloudinary.com/image/upload/c_fill,f_auto,fl_lossy,g_auto,h_1020,q_auto,w_321/v1557772027/amc-cdn/general/offers/dark-phoenix-gwp/FLM_1693_DarkPhoenixGWP_MobileHero_Rev2.jpg 321w, https://amc-theatres-res.cloudinary.com/image/upload/c_fill,f_auto,fl_lossy,g_auto,h_1020,q_auto,w_480/v1557772027/amc-cdn/general/offers/dark-phoenix-gwp/FLM_1693_DarkPhoenixGWP_MobileHero_Rev2.jpg 480w, https://amc-theatres-res.cloudinary.com/image/upload/c_fill,f_auto,fl_lossy,g_auto,h_1020,q_auto,w_767/v1557772027/amc-cdn/general/offers/dark-phoenix-gwp/FLM_1693_DarkPhoenixGWP_MobileHero_Rev2.jpg 767w"
                       alt="IMAX® Opening Night Fan Event" itemProp="image"/>
                </picture>
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </section>
        <section>
          <div className="swiper container">
            <h4>最近更新</h4>
            <hr />
            <div className="row ">
              <div className="col-md-3 col-sm-4 col-6">
                <div className="PosterSlide"><a aria-label="Avengers: Endgame" className="Link" itemProp="url" href="/movies/avengers-endgame-45840">
                  <picture className="Picture--rectangle">
                    <source srcSet="https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_600,q_auto,w_400/v1553695740/amc-cdn/production/2/movies/45800/45840/PosterDynamic/75045.jpg" media="(min-width: 767px)"/>
                    <img src="https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_300,q_auto,w_200/v1553695740/amc-cdn/production/2/movies/45800/45840/PosterDynamic/75045.jpg" alt="Avengers: Endgame" width="220px"/>
                  </picture>
                </a>
                  <div className="PosterContent"></div>
                </div>
                <div className="MoviePostersGrid-text"><a className="Link" itemProp="url" href="/movies/avengers-endgame-45840"><h3>Avengers: Endgame</h3></a>
                  <div className="Headline--eyebrow">
                    <p></p>
                  </div>
                  <a className="Btn Btn--primary" href="/movies/avengers-endgame-45840/showtimes">Get Tickets</a></div>
              </div>
              <div className="col-md-3 col-sm-4 col-6">
                <div className="PosterSlide"><a aria-label="Avengers: Endgame" className="Link" itemProp="url" href="/movies/avengers-endgame-45840">
                  <picture className="Picture--rectangle">
                    <source srcSet="https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_600,q_auto,w_400/v1553695740/amc-cdn/production/2/movies/45800/45840/PosterDynamic/75045.jpg" media="(min-width: 767px)"/>
                    <img src="https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_300,q_auto,w_200/v1553695740/amc-cdn/production/2/movies/45800/45840/PosterDynamic/75045.jpg" alt="Avengers: Endgame" width="220px"/>
                  </picture>
                </a>
                  <div className="PosterContent"></div>
                </div>
                <div className="MoviePostersGrid-text"><a className="Link" itemProp="url" href="/movies/avengers-endgame-45840"><h3>Avengers: Endgame</h3></a>
                  <div className="Headline--eyebrow">
                    <p></p>
                  </div>
                  <a className="Btn Btn--primary" href="/movies/avengers-endgame-45840/showtimes">Get Tickets</a></div>
              </div>
              <div className="col-md-3 col-sm-4 col-6">
                <div className="PosterSlide"><a aria-label="Avengers: Endgame" className="Link" itemProp="url" href="/movies/avengers-endgame-45840">
                  <picture className="Picture--rectangle">
                    <source srcSet="https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_600,q_auto,w_400/v1553695740/amc-cdn/production/2/movies/45800/45840/PosterDynamic/75045.jpg" media="(min-width: 767px)"/>
                    <img src="https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_300,q_auto,w_200/v1553695740/amc-cdn/production/2/movies/45800/45840/PosterDynamic/75045.jpg" alt="Avengers: Endgame" width="220px"/>
                  </picture>
                </a>
                  <div className="PosterContent"></div>
                </div>
                <div className="MoviePostersGrid-text"><a className="Link" itemProp="url" href="/movies/avengers-endgame-45840"><h3>Avengers: Endgame</h3></a>
                  <div className="Headline--eyebrow">
                    <p></p>
                  </div>
                  <a className="Btn Btn--primary" href="/movies/avengers-endgame-45840/showtimes">Get Tickets</a></div>
              </div>
              <div className="col-md-3 col-sm-4 col-6">
                <div className="PosterSlide"><a aria-label="Avengers: Endgame" className="Link" itemProp="url" href="/movies/avengers-endgame-45840">
                  <picture className="Picture--rectangle">
                    <source srcSet="https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_600,q_auto,w_400/v1553695740/amc-cdn/production/2/movies/45800/45840/PosterDynamic/75045.jpg" media="(min-width: 767px)"/>
                    <img src="https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_300,q_auto,w_200/v1553695740/amc-cdn/production/2/movies/45800/45840/PosterDynamic/75045.jpg" alt="Avengers: Endgame" width="220px"/>
                  </picture>
                </a>
                  <div className="PosterContent"></div>
                </div>
                <div className="MoviePostersGrid-text"><a className="Link" itemProp="url" href="/movies/avengers-endgame-45840"><h3>Avengers: Endgame</h3></a>
                  <div className="Headline--eyebrow">
                    <p></p>
                  </div>
                  <a className="Btn Btn--primary" href="/movies/avengers-endgame-45840/showtimes">Get Tickets</a></div>
              </div>
              <div className="col-md-3 col-sm-4 col-6">
                <div className="PosterSlide"><a aria-label="Avengers: Endgame" className="Link" itemProp="url" href="/movies/avengers-endgame-45840">
                  <picture className="Picture--rectangle">
                    <source srcSet="https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_600,q_auto,w_400/v1553695740/amc-cdn/production/2/movies/45800/45840/PosterDynamic/75045.jpg" media="(min-width: 767px)"/>
                    <img src="https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_300,q_auto,w_200/v1553695740/amc-cdn/production/2/movies/45800/45840/PosterDynamic/75045.jpg" alt="Avengers: Endgame" width="220px"/>
                  </picture>
                </a>
                  <div className="PosterContent"></div>
                </div>
                <div className="MoviePostersGrid-text"><a className="Link" itemProp="url" href="/movies/avengers-endgame-45840"><h3>Avengers: Endgame</h3></a>
                  <div className="Headline--eyebrow">
                    <p></p>
                  </div>
                  <a className="Btn Btn--primary" href="/movies/avengers-endgame-45840/showtimes">Get Tickets</a></div>
              </div>
              <div className="col-md-3 col-sm-4 col-6">
                <div className="PosterSlide"><a aria-label="Avengers: Endgame" className="Link" itemProp="url" href="/movies/avengers-endgame-45840">
                  <picture className="Picture--rectangle">
                    <source srcSet="https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_600,q_auto,w_400/v1553695740/amc-cdn/production/2/movies/45800/45840/PosterDynamic/75045.jpg" media="(min-width: 767px)"/>
                    <img src="https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_300,q_auto,w_200/v1553695740/amc-cdn/production/2/movies/45800/45840/PosterDynamic/75045.jpg" alt="Avengers: Endgame" width="220px"/>
                  </picture>
                </a>
                  <div className="PosterContent"></div>
                </div>
                <div className="MoviePostersGrid-text"><a className="Link" itemProp="url" href="/movies/avengers-endgame-45840"><h3>Avengers: Endgame</h3></a>
                  <div className="Headline--eyebrow">
                    <p></p>
                  </div>
                  <a className="Btn Btn--primary" href="/movies/avengers-endgame-45840/showtimes">Get Tickets</a></div>
              </div>
              <div className="col-md-3 col-sm-4 col-6">
                <div className="PosterSlide"><a aria-label="Avengers: Endgame" className="Link" itemProp="url" href="/movies/avengers-endgame-45840">
                  <picture className="Picture--rectangle">
                    <source srcSet="https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_600,q_auto,w_400/v1553695740/amc-cdn/production/2/movies/45800/45840/PosterDynamic/75045.jpg" media="(min-width: 767px)"/>
                    <img src="https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_300,q_auto,w_200/v1553695740/amc-cdn/production/2/movies/45800/45840/PosterDynamic/75045.jpg" alt="Avengers: Endgame" width="220px"/>
                  </picture>
                </a>
                  <div className="PosterContent"></div>
                </div>
                <div className="MoviePostersGrid-text"><a className="Link" itemProp="url" href="/movies/avengers-endgame-45840"><h3>Avengers: Endgame</h3></a>
                  <div className="Headline--eyebrow">
                    <p></p>
                  </div>
                  <a className="Btn Btn--primary" href="/movies/avengers-endgame-45840/showtimes">Get Tickets</a></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}