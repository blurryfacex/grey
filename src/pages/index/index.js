import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './index.less'
export default class index extends React.Component {

  render () {
    return (
      <div className="content">
        <section className="carousel">
          <Carousel>
            <Carousel.Item>
              <picture className="Carousel-Slide-Image" >
                <source sizes="(min-width: 600px) 100vw, 600px" media="(min-width: 600px)"
                        srcSet="https://amc-theatres-res.cloudinary.com/image/upload/c_fill,f_auto,fl_lossy,g_auto,h_600,q_auto,w_767/v1556122899/amc-cdn/general/film/poms/FLM_1670_POMS_DesktopHero_REV2.jpg 767w, https://amc-theatres-res.cloudinary.com/image/upload/c_fill,f_auto,fl_lossy,g_auto,h_600,q_auto,w_1024/v1556122899/amc-cdn/general/film/poms/FLM_1670_POMS_DesktopHero_REV2.jpg 1024w, https://amc-theatres-res.cloudinary.com/image/upload/c_fill,f_auto,fl_lossy,g_auto,h_600,q_auto,w_1260/v1556122899/amc-cdn/general/film/poms/FLM_1670_POMS_DesktopHero_REV2.jpg 1260w, https://amc-theatres-res.cloudinary.com/image/upload/c_fill,f_auto,fl_lossy,g_auto,h_600,q_auto,w_1600/v1556122899/amc-cdn/general/film/poms/FLM_1670_POMS_DesktopHero_REV2.jpg 1600w" />
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
            <Carousel.Item>
              <picture className="Carousel-Slide-Image" >
                <source sizes="(min-width: 768px) 100vw, 768px" media="(min-width: 768px)"
                        srcSet="https://amc-theatres-res.cloudinary.com/image/upload/c_fill,f_auto,fl_lossy,g_auto,h_600,q_auto,w_767/v1556122899/amc-cdn/general/film/poms/FLM_1670_POMS_DesktopHero_REV2.jpg 767w, https://amc-theatres-res.cloudinary.com/image/upload/c_fill,f_auto,fl_lossy,g_auto,h_600,q_auto,w_1024/v1556122899/amc-cdn/general/film/poms/FLM_1670_POMS_DesktopHero_REV2.jpg 1024w, https://amc-theatres-res.cloudinary.com/image/upload/c_fill,f_auto,fl_lossy,g_auto,h_600,q_auto,w_1260/v1556122899/amc-cdn/general/film/poms/FLM_1670_POMS_DesktopHero_REV2.jpg 1260w, https://amc-theatres-res.cloudinary.com/image/upload/c_fill,f_auto,fl_lossy,g_auto,h_600,q_auto,w_1600/v1556122899/amc-cdn/general/film/poms/FLM_1670_POMS_DesktopHero_REV2.jpg 1600w" />
                <img sizes="(min-width: 241px) and (max-width: 767px) 100vw, 767px"
                     srcSet="https://amc-theatres-res.cloudinary.com/image/upload/c_fill,f_auto,fl_lossy,g_auto,h_1020,q_auto,w_240/v1556122051/amc-cdn/general/film/poms/FLM_1670_POMS_MobileHero.jpg 240w, https://amc-theatres-res.cloudinary.com/image/upload/c_fill,f_auto,fl_lossy,g_auto,h_1020,q_auto,w_320/v1556122051/amc-cdn/general/film/poms/FLM_1670_POMS_MobileHero.jpg 320w, https://amc-theatres-res.cloudinary.com/image/upload/c_fill,f_auto,fl_lossy,g_auto,h_1020,q_auto,w_321/v1556122051/amc-cdn/general/film/poms/FLM_1670_POMS_MobileHero.jpg 321w, https://amc-theatres-res.cloudinary.com/image/upload/c_fill,f_auto,fl_lossy,g_auto,h_1020,q_auto,w_480/v1556122051/amc-cdn/general/film/poms/FLM_1670_POMS_MobileHero.jpg 480w, https://amc-theatres-res.cloudinary.com/image/upload/c_fill,f_auto,fl_lossy,g_auto,h_1020,q_auto,w_767/v1556122051/amc-cdn/general/film/poms/FLM_1670_POMS_MobileHero.jpg 767w"
                     alt="Poms"
                     itemProp="image" />
              </picture>
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <picture className="Carousel-Slide-Image" >
                <source sizes="(min-width: 768px) 100vw, 768px" media="(min-width: 768px)"
                        srcSet="https://amc-theatres-res.cloudinary.com/image/upload/c_fill,f_auto,fl_lossy,g_auto,h_600,q_auto,w_767/v1556122899/amc-cdn/general/film/poms/FLM_1670_POMS_DesktopHero_REV2.jpg 767w, https://amc-theatres-res.cloudinary.com/image/upload/c_fill,f_auto,fl_lossy,g_auto,h_600,q_auto,w_1024/v1556122899/amc-cdn/general/film/poms/FLM_1670_POMS_DesktopHero_REV2.jpg 1024w, https://amc-theatres-res.cloudinary.com/image/upload/c_fill,f_auto,fl_lossy,g_auto,h_600,q_auto,w_1260/v1556122899/amc-cdn/general/film/poms/FLM_1670_POMS_DesktopHero_REV2.jpg 1260w, https://amc-theatres-res.cloudinary.com/image/upload/c_fill,f_auto,fl_lossy,g_auto,h_600,q_auto,w_1600/v1556122899/amc-cdn/general/film/poms/FLM_1670_POMS_DesktopHero_REV2.jpg 1600w" />
                <img sizes="(min-width: 241px) and (max-width: 767px) 100vw, 767px"
                     srcSet="https://amc-theatres-res.cloudinary.com/image/upload/c_fill,f_auto,fl_lossy,g_auto,h_1020,q_auto,w_240/v1556122051/amc-cdn/general/film/poms/FLM_1670_POMS_MobileHero.jpg 240w, https://amc-theatres-res.cloudinary.com/image/upload/c_fill,f_auto,fl_lossy,g_auto,h_1020,q_auto,w_320/v1556122051/amc-cdn/general/film/poms/FLM_1670_POMS_MobileHero.jpg 320w, https://amc-theatres-res.cloudinary.com/image/upload/c_fill,f_auto,fl_lossy,g_auto,h_1020,q_auto,w_321/v1556122051/amc-cdn/general/film/poms/FLM_1670_POMS_MobileHero.jpg 321w, https://amc-theatres-res.cloudinary.com/image/upload/c_fill,f_auto,fl_lossy,g_auto,h_1020,q_auto,w_480/v1556122051/amc-cdn/general/film/poms/FLM_1670_POMS_MobileHero.jpg 480w, https://amc-theatres-res.cloudinary.com/image/upload/c_fill,f_auto,fl_lossy,g_auto,h_1020,q_auto,w_767/v1556122051/amc-cdn/general/film/poms/FLM_1670_POMS_MobileHero.jpg 767w"
                     alt="Poms"
                     itemProp="image" />
              </picture>
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </section>
        <section>
          <div className="headline">
            <h4>最新更新</h4>
            <hr />
          </div>
        </section>
      </div>
    )
  }
}