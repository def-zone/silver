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
        <section className="container m-auto py-10 md:py-20 mb-10 px-4 md:px-0">
            <div className="review-container">
                <div className="section-header flex justify-between items-center mb-10">
                    <div className="text-blue-900 md:text-5xl text-2xl font-bold">
                        <div className="mb-2">Khách hàng nói về</div>
                        <div>chúng tôi</div>
                    </div>
                    <div className="flex gap-4">
                        <button type="button" className="h-10 w-10 flex items-center justify-center border-2 rounded-full">
                            <i className="fa-regular fa-circle-left" />
                        </button>
                        <button type="button" className="h-10 w-10 flex items-center justify-center border-2 rounded-full border-gray-800">
                            <i className="fa-regular fa-circle-right" />
                        </button>
                    </div>
                </div>
                <Slider
                    slidesPerRow={3}
                    autoplay
                    dots
                    responsive={[
                        {
                            breakpoint: 640,
                            settings: {
                                slidesPerRow: 1
                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesPerRow: 1
                            }
                        },
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesPerRow: 3
                            }
                        } 
                    ]}
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
                                    <img src="https://i.imgur.com/kQ5yd2B.png" loading="lazy" />
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