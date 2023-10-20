import chart from '../assets/chart.svg';

const Feature: React.FC = () => {
    return (
        <section className="bg-stone-100 about py-10 md:py-20 px-4 md:px-0">
            <div className="container m-auto md:flex justify-between items-center py-5 gap-20">
                <div className='md:w-1/2 mb-8'>
                    <div className="relative">
                        <img src="https://i.imgur.com/Dh0k8Ls.png" alt="Girl" loading="lazy" />
                        <div className='absolute -bottom-0 -right-10'>
                            <img src={chart} alt='Chart' />
                        </div>
                    </div>
                </div>
                <div className='flex-1'>
                    <div className="w-full max-w-[480px]">
                        <div className="text-blue-900 text-3xl md:text-5xl font-bold mb-8" style={{
                            lineHeight: '120%'
                        }}>
                            Chúng tôi luôn hoàn thành công việc đúng cách
                        </div>
                        <p className="text-gray-600 my-8">
                            A messaging app platform is a great way to keep in touch with your
                            customers. They create a sense of personal intimacy and experience. At
                            the same time, messaging app platforms can make money through
                            subscriptions or apps.
                        </p>
                        <div className="follow-buttons flex space-x-4">
                            <div className="about-customers">
                                <div className="customer-count text-4xl font-semibold mb-2">1000+</div>
                                <div className="text-gray-600">Khách hàng vui vẻ</div>
                            </div>
                            <div className="about-projects">
                                <div className="project-count text-4xl font-semibold mb-2">300+</div>
                                <div className="text-gray-600">Dự án hoàn thành</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Feature