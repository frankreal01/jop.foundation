/* JOP FOUNDATION — React enhancement
   This component is intentionally small: the main site remains semantic HTML/CSS/JS,
   while React powers an interactive "Foundation Architecture" module.
*/

const { useState } = React;

const architectureData = [
    {
        number: "01",
        title: "Identity",
        label: "KNOW YOURSELF",
        text: "Understanding values, strengths, character and direction creates the foundation for intentional growth.",
        points: ["Values", "Self-awareness", "Direction"]
    },
    {
        number: "02",
        title: "Intentionality",
        label: "CHOOSE DELIBERATELY",
        text: "Purpose becomes practical when everyday choices, habits and priorities are aligned with what matters.",
        points: ["Clarity", "Choice", "Consistency"]
    },
    {
        number: "03",
        title: "Professionalism",
        label: "CONTRIBUTE MEANINGFULLY",
        text: "Competence, character and conduct determine how effectively a person can create value in real environments.",
        points: ["Character", "Capability", "Conduct"]
    }
];

function FoundationArchitecture() {
    const [active, setActive] = useState(0);
    const item = architectureData[active];

    return (
        <section className="react-architecture" id="react-architecture">
            <div className="react-architecture-inner">
                <div className="react-intro">
                    <p className="eyebrow">
                        <span className="eyebrow-line"></span>
                        09 / FOUNDATION ARCHITECTURE
                    </p>
                    <h2>Three principles.<br /><span>One direction.</span></h2>
                    <p>
                        Explore the principles that form the intellectual architecture
                        behind JOP Foundation.
                    </p>
                </div>

                <div className="react-module">
                    <div className="react-tabs" role="tablist" aria-label="Foundation principles">
                        {architectureData.map((principle, index) => (
                            <button
                                key={principle.number}
                                className={`react-tab ${active === index ? "is-active" : ""}`}
                                onClick={() => setActive(index)}
                                role="tab"
                                aria-selected={active === index}
                            >
                                <span>{principle.number}</span>
                                <strong>{principle.title}</strong>
                                <small>{principle.label}</small>
                            </button>
                        ))}
                    </div>

                    <div className="react-detail" key={item.number}>
                        <div className="react-detail-number">{item.number}</div>
                        <div>
                            <p className="react-kicker">{item.label}</p>
                            <h3>{item.title}</h3>
                            <p className="react-description">{item.text}</p>

                            <div className="react-points">
                                {item.points.map((point) => (
                                    <span key={point}>{point}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const rootElement = document.getElementById("react-foundation-root");

if (rootElement) {
    ReactDOM.createRoot(rootElement).render(<FoundationArchitecture />);
}
