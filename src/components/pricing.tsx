const Pricing: React.FC = () => {
    return (
        <section className="pricing bg-gray-100 text-center p-5 md:py-40">
            <div className="section-header mb-10 md:mb-20">
                <div className="text-blue-800 text-5xl font-bold mb-4">Bảng giá dịch vụ</div>
                <h2 className="text-gray-500">
                    Started today. We're ready!
                </h2>
            </div>
            <div className="pricing-list flex justify-center items-center m-auto">
                <div className="pricing-item lg:w-1/5 w-1/3 h-1/2 bg-white p-8 border rounded-l-3xl">
                    <div className="item-header border-b pb-5">
                        <h3>Silver</h3>
                        <div className="price">
                            <span className="amount">$50</span>
                            <span className="period">/month</span>
                        </div>
                    </div>
                    <ul className="item-features my-3">
                        <li className="feature-item py-3">
                            <i className="fa-solid fa-circle-check text-green-500" />
                            Service 01
                        </li>
                        <li className="feature-item py-3">
                            <i className="fa-solid fa-circle-check text-green-500" />
                            Service 02
                        </li>
                        <li className="feature-item py-3">
                            <i className="fa-solid fa-circle-check text-green-500" />
                            Service 03
                        </li>
                        <li className="feature-item py-3">
                            <i className="fa-solid fa-circle-check text-green-500" />
                            Service 04
                        </li>
                        <li className="feature-item py-3">
                            <i className="fa-solid fa-circle-check text-green-500" />
                            Service 05
                        </li>
                        <li className="feature-item py-3">
                            <i className="fa-solid fa-circle-check text-green-500" />
                            Service 06
                        </li>
                        <li className="feature-item py-3">
                            <i className="fa-solid fa-circle-check text-green-500" />
                            Service 07
                        </li>
                        <li className="feature-item py-3">
                            <i className="fa-solid fa-circle-check text-green-500" />
                            Service 08
                        </li>
                    </ul>
                    <div className="item-footer text-center">
                        <button
                            type="button"
                            className="px-8 py-2 md:px-12 md:py-4 bg-gray-200 text-blue-700 font-semibold rounded"
                        >
                            Chọn
                        </button>
                    </div>
                </div>
                <div className="pricing-item lg:w-1/5 w-1/3 h-full flex flex-col bg-blue-700 text-white p-8 border rounded-3xl relative">
                    <div className="highlight-button w-[80%] absolute top-0 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                        <button className="px-3 py-2 bg-lime-400 border-4 border-white rounded-full">
                            MOST POPULAR
                        </button>
                    </div>
                    <div className="item-header border-b pb-5 mt-10">
                        <h3>Gold</h3>
                        <div className="price">
                            <span className="amount">$50</span>
                            <span className="period">/month</span>
                        </div>
                    </div>
                    <ul className="item-features my-3">
                        <li className="feature-item py-3">
                            <i className="fa-solid fa-circle-check text-green-500" />
                            Service 01
                        </li>
                        <li className="feature-item py-3">
                            <i className="fa-solid fa-circle-check text-green-500" />
                            Service 02
                        </li>
                        <li className="feature-item py-3">
                            <i className="fa-solid fa-circle-check text-green-500" />
                            Service 03
                        </li>
                        <li className="feature-item py-3">
                            <i className="fa-solid fa-circle-check text-green-500" />
                            Service 04
                        </li>
                        <li className="feature-item py-3">
                            <i className="fa-solid fa-circle-check text-green-500" />
                            Service 05
                        </li>
                        <li className="feature-item py-3">
                            <i className="fa-solid fa-circle-check text-green-500" />
                            Service 06
                        </li>
                        <li className="feature-item py-3">
                            <i className="fa-solid fa-circle-check text-green-500" />
                            Service 07
                        </li>
                        <li className="feature-item py-3">
                            <i className="fa-solid fa-circle-check text-green-500" />
                            Service 08
                        </li>
                    </ul>
                    <div className="item-footer text-center">
                        <button
                            type="button"
                            className="px-8 py-2 md:px-12 md:py-4 bg-gray-200 text-blue-700 font-semibold rounded"
                        >
                            Chọn
                        </button>
                    </div>
                </div>
                <div className="pricing-item lg:w-1/5 w-1/3 h-1/2 bg-white flex flex-col p-8 border rounded-r-3xl">
                    <div className="item-header border-b pb-5">
                        <h3>Diamond</h3>
                        <div className="price">
                            <span className="amount">$50</span>
                            <span className="period">/month</span>
                        </div>
                    </div>
                    <ul className="item-features my-3">
                        <li className="feature-item py-3">
                            <i className="fa-solid fa-circle-check text-green-500" />
                            Service 01
                        </li>
                        <li className="feature-item py-3">
                            <i className="fa-solid fa-circle-check text-green-500" />
                            Service 02
                        </li>
                        <li className="feature-item py-3">
                            <i className="fa-solid fa-circle-check text-green-500" />
                            Service 03
                        </li>
                        <li className="feature-item py-3">
                            <i className="fa-solid fa-circle-check text-green-500" />
                            Service 04
                        </li>
                        <li className="feature-item py-3">
                            <i className="fa-solid fa-circle-check text-green-500" />
                            Service 05
                        </li>
                        <li className="feature-item py-3">
                            <i className="fa-solid fa-circle-check text-green-500" />
                            Service 06
                        </li>
                        <li className="feature-item py-3">
                            <i className="fa-solid fa-circle-check text-green-500" />
                            Service 07
                        </li>
                        <li className="feature-item py-3">
                            <i className="fa-solid fa-circle-check text-green-500" />
                            Service 08
                        </li>
                    </ul>
                    <div className="item-footer text-center">
                        <button
                            type="button"
                            className="px-8 py-2 md:px-12 md:py-4 bg-gray-200 text-blue-700 font-semibold rounded"
                        >
                            Chọn
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing