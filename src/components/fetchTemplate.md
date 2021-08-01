addReview = async() => {
        let requestHeaders: any = {
            "Content-Type": "application/json",
            Authorization: this.props.sessionToken,
        };
        try{
        const res = await fetch('', {
            method: "POST",
            body: JSON.stringify({

            }),
            headers: requestHeaders
        })

        const data = await res.json();
        console.log(`Data: ${data}`)
    } catch (err){
        console.log(err)
    }
}

fetchReviews = async () => {
        let requestHeaders: any = {
        "Content-Type": "application/json",
        Authorization: this.props.sessionToken
        };
        
        try {
            console.log("function hit")
        const res = await fetch(`http://localhost:4001/review/all`, {
            method: "GET",
            headers: requestHeaders
        });
        console.log(`Res: ${res}`)

        const data = await res.json();
        console.log(`Review Data: ${data.allReviews[0].comment}`);
        console.log(`Review Data: ${data.allReviews[5].comment}`);

        this.setState({reviews: data.allReviews})
        console.log(this.state)

        } catch (err) {
        console.log(err);
        }
};

fetchUserInfo = async () => {
        let requestHeaders: any = {
            "Content-Type": "application/json",
            Authorization: this.props.sessionToken,
        };
        try {
            // const res = await fetch(`${APIURL}/user/profile${ID}`, {
            // const res = await fetch(`${APIURL}/user/profile`, {

            const res = await fetch(`${APIURL}/user/profile/${this.props.sessionID()}`, {
                method: "GET",
                headers: requestHeaders,
            });
            const data = await res.json();
                console.log(`User Profile Data: ${data.thisUser.id}`);
                console.log(data);
                
            // this.setState({userData: data.userProfile})
                console.log(this.state)
            } catch (err) {
                console.log(err);
            }
        };