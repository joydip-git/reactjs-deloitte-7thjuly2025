const Star = (props: Readonly<{ outerWidth: number }>) => {
    return (
        <div style={{ width: props.outerWidth, overflow: 'hidden' }}>
            <div style={{ width: '100px' }}>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
            </div>
        </div>
    )
}

export default Star