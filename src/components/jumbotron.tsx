import hero from '../assets/hero.svg';

const Jumbotron: React.FC = () => {
    return (
        <section className="container mx-auto md:mb-20">
            <div className='md:flex items-center gap-10'>
                <div className='max-w-[555px]'>
                    <div className='text-[64px] font-bold' style={{
                        lineHeight: '120%'
                    }}>
                        <div className='text-blue-500'>Chúng tôi tạo</div>
                        <div className='mb-4'>App, Websites và thương hiệu.</div>
                    </div>
                    <div className='text-gray-500'>
                        Với nhiều năm kinh nghiệm trong lĩnh vực phát triển phần mềm, chúng tôi tự hào mang đến cho bạn các giải pháp sáng tạo và chất lượng.
                    </div>
                </div>
                <div className='flex-1 flex justify-center'>
                    <img src={hero} alt='Hero' />
                </div>
            </div>
        </section>
    )
}

export default Jumbotron;