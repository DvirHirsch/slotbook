import ServiceCard from '../components/ServiceCard';
import services from '../data/services';

function Homepage() {
    return (
        <div>
            <h1>SlotBook</h1>
            {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
            ))}
        </div>
    )
}

export default Homepage;