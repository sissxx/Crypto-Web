import "../Components/styles/home.css";

export const HomePage = () => {
    return (
        <main className="home_content">
            <div className="content" >
                <h1>BUY and SELL <span>Crypto</span></h1>

                <p>A crypto is a digital currency designed to work as a medium of exchange
                </p>
                <p> that is not reliant on any central authority.
                </p>
                <a href="/trade" className="trade">TRADE</a>
            </div>

        </main>
    )
}