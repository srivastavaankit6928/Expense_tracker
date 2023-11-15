function Balance({total}){
    const options = {
        hour: 'numeric',
        minute: 'numeric',
        day: 'numeric',
        month: 'long',
        Year: 'numeric',
        weekday: 'short',
    };

    const formatedDate = new Intl.DateTimeFormat("en-IN",options).format(new Date());

    const formatedcurr = new Intl.NumberFormat("en-IN", {
        style: 'currency',
        currency: "INR",
        }).format(total);

    return(
        <div className="balance">
            <div>
            <p className="balance__label">Current Balance</p>
            <p className="balance__date ">{`As of ${formatedDate}`}</p>
            </div>
            <p className="balance__value">{formatedcurr}</p>
        </div>
    );
}

export default Balance
