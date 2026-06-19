function ServiceCard({ service }) {
    return (
        <div className="service-card">
            <h3>{service.name}</h3>
            <p>{service.durationMinutes} דקות</p>
            <p>₪{service.price}</p>
        </div>
    )
}

export default ServiceCard;
