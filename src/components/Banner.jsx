import banner_img from "../assets/images/house-banner.png";
import Search from "./Search.jsx";

const Banner = () => {
    return (
        <>
          <section className="h-full max-h-[640px] mb-8 xl:mb-4">
              <div className="flex flex-col lg:flex-row">
                  <div className="lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0">
                      <h1 className="text-4xl lg:text-[58px] font-semibold leading-none mb-6">
                          <span className="text-violet-700">Rent</span> Your Dream House With Us
                      </h1>
                      <p className="max-w-[480px] mb-8">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti eaque eveniet magnam molestiae molestias nam quia quis similique temporibus vero?
                      </p>
                  </div>

              {/*image part*/}
                  <div className="hidden flex-1 lg:flex justify-end items-end">
                      <img src={banner_img} alt="banner_image"/>
                  </div>
              </div>
              <Search/>
          </section>
        </>
    );
};

export default Banner;