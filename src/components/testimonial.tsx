import Slider from "react-slick";

const Testimonial: React.FC = () => {

    const data = [
        {
            name: 'Cong Dinh',
            jobTitle: 'CEO UniCoreVN',
            message: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.'
        },
        {
            name: 'Cong Dinh',
            jobTitle: 'CEO UniCoreVN',
            message: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.'
        },
        {
            name: 'Cong Dinh',
            jobTitle: 'CEO UniCoreVN',
            message: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.'
        },
        {
            name: 'Cong Dinh',
            jobTitle: 'CEO UniCoreVN',
            message: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.'
        },
        {
            name: 'Cong Dinh',
            jobTitle: 'CEO UniCoreVN',
            message: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.'
        },
        {
            name: 'Cong Dinh',
            jobTitle: 'CEO UniCoreVN',
            message: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.'
        }
    ]

    return (
        <section className="container m-auto md:max-h-[50vh] lg:max-h-[40vh] customer-reviews">
            <div className="review-container">
                <div className="section-header flex justify-between items-center">
                    <h2 className="text-blue-800 text-4xl font-bold mb-10">
                        Khách hàng nói về chúng tôi
                    </h2>
                    <div className="review-controls text-3xl">
                        <button type="button" className="prev-review">
                            <i className="fa-regular fa-circle-left" />
                        </button>
                        <button type="button" className="next-review">
                            <i className="fa-regular fa-circle-right" />
                        </button>
                    </div>
                </div>
                <Slider
                    slidesPerRow={3}
                    autoplay
                >
                    {
                        data.map((x, i) => (
                            <div className="p-8 rounded bg-white" key={i}>
                                <div className="customer-info flex items-center space-x-4">
                                    <div className="customer-img w-16 h-16 rounded-full overflow-hidden">
                                        <img
                                            className="h-full"
                                            src="./assets/images/customer-01.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="customer-details">
                                        <h3 className="text-xl font-medium">Cong Dinh</h3>
                                        <span className="text-description">CEO, Coca Design</span>
                                    </div>
                                </div>
                                <div className="review-content my-5">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                                    quae ab illo inventore.
                                </div>
                                <div className="rating text-yellow-300">
                                    <i className="fa-solid fa-star" />
                                    <i className="fa-solid fa-star" />
                                    <i className="fa-solid fa-star" />
                                    <i className="fa-solid fa-star" />
                                    <i className="fa-solid fa-star" />
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </section>
    )
}

export default Testimonial