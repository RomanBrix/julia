export default function Videos() {
    return (
        <div className="videos about">
            <div className="content">
                <div className="big-video">
                    <div className="bg">
                        <img src="/videos/1.png" alt="videos" />
                    </div>
                    <div className="text">
                        <h1>Відеоматеріали</h1>
                        <p>
                            «Говорить Україна» – у проекті обговорюються події,
                            що сколихнули країну, і теми, значимі для тисяч
                            людей. Кожна з них розкривається через конкретні
                            людські долі, життєві перипетії і думки. В цьому шоу
                            я є постійним експертом.
                        </p>
                    </div>
                    <button
                        onClick={() => {
                            window
                                .open(
                                    "https://youtu.be/NwiFJDfiV7k?t=180",
                                    "_blank"
                                )
                                .focus();
                        }}
                    >
                        Перейти
                    </button>
                </div>
                <div className="mini-videos">{renderMini()}</div>
            </div>
        </div>
    );

    function renderMini() {
        let arr = [
            {
                head: "Говорить Україна",
                url: "https://www.youtube.com/watch?v=uIHtIECrhMw",
            },
            {
                head: "Говорить Україна",
                url: "https://www.youtube.com/watch?v=yPt0MZ1nvik",
            },
            {
                head: "Говорить Україна",
                url: "https://www.youtube.com/watch?v=JaDNnfUrRrU",
            },
            {
                head: "Говорить Україна",
                url: "https://www.youtube.com/watch?v=DY6O2hwHKtM",
            },
        ];

        return arr.map((item, index) => {
            return (
                <div className="mini-video" key={index}>
                    <div className="img">
                        <img src={`/videos/${index + 2}.png`} alt="videos" />
                    </div>
                    <div className="text">
                        <div className="head">{item.head}</div>
                        <button
                            onClick={() => {
                                window.open(item.url, "_blank").focus();
                            }}
                        >
                            Перейти
                        </button>
                    </div>
                </div>
            );
        });
    }
}
