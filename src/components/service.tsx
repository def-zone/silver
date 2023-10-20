import sv1 from '../assets/sv1.svg';

type CardProps = {
    title: string;
    description: string;
    image: string;
}

const Card = (props: CardProps) => {
    return (
        <div className="flex card-shadow flex-col text-center items-center justify-center p-10 rounded">
            <div className='mb-6'>
                <img src={props.image} alt={props.title} />
            </div>
            <div className="text-blue-900 font-bold text-2xl mb-4">{props.title}</div>
            <div className="text-gray-400">
                {props.description}
            </div>
        </div>
    )
}

const Service: React.FC = () => {
    return (
        <section className='mb-10 md:mb-20'>
            <div className="text-center md:mb-20 mb-10">
                <div className="text-blue-500 uppercase text-sm font-bold">Dịch vụ của chúng tôi</div>
                <div className="md:text-4xl text-xl text-blue-800 font-bold">Giải pháp cho doanh nghiệp của bạn</div>
            </div>
            <div className="grid md:grid-cols-3 md:gap-10 gap-4 md:mx-40">
                <Card title="Mobile & IOS App Developement" description="We develope professional and fully functional moibile & IOS apps for your business according to your requirments" image={sv1} />
                <Card title="Mobile & IOS App Developement" description="We develope professional and fully functional moibile & IOS apps for your business according to your requirments" image={sv1} />
                <Card title="Mobile & IOS App Developement" description="We develope professional and fully functional moibile & IOS apps for your business according to your requirments" image={sv1} />
            </div>
        </section>
    )
}

export default Service