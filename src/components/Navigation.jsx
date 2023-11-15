function Navigation(){
    const hrs = new Date().getHours();
    const options = {
        year:'numeric',
        month:'short',
        day:'numeric',
        weekday:'short'
    }
    const formattedDate = new Date().toLocaleDateString('en-US', options);
    let greet;
    switch(true){
        case hrs>=4 && hrs<12 : greet = "Good Morning";
        break;

        case hrs>=12 && hrs<16 : greet = "Good Afternoon";
        break;

        case hrs>=16 && hrs<20 : greet ="Good Evening";
        break;

        default : greet = "Good Night"
        
    }
    return(
        <nav>
            <p className="welcome">{`${greet}`}, fellow</p>
            <img src="/public/logo.png" alt="img" className="logo"/>
            <p className="date">🗓️ {formattedDate}</p>
        </nav>
    );
}

export default Navigation
