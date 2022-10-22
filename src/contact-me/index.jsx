import Map from "./Map";
const ContactMe = () => {
    return (
        <div>
            <span className="about-me--heading">Contact Me</span>
            <div className="underline"></div>
            <p className="about-me--generalInfo">
                Looks like you want to contact me, please feel free to do it anytime & for any reason, I would love to hear from you. (^///^)
            </p>
            <Map />
            <div>
                <span className="doing-main--what">Contact Form</span>
                <form>
                    <div className="form">
                        <input type="email" placeholder="Email (johndoe@gmail.com)" />
                        <input type="text" placeholder="Name (John Doe)" />
                    </div>
                    <textarea placeholder="Write your message" />
                    <button type="submit" className="btn">
                        <ion-icon name="send"></ion-icon>
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ContactMe;