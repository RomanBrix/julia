

export default function Services(){
    const serviceArray = [
        {
            head: 'Захист прав користувача',
            text: 'Юридична допомога у поверненні чи обміні товарів, порушенні термінів договору'
        },
        {
            head: 'Земельні справи',
            text: 'Оформлення нерухомості та земельних ділянок , захист прав в суді, питання пайової участі'
        },
        {
            head: 'Спадкові суперечки',
            text: 'Оскарження заповіту, визнання спадкоємця та інші питання'
        },
        {
            head: 'Захист трудових прав',
            text: 'Незаконне звільнення, заборгованість виплат, накладення стягнень'
        },
        {
            head: 'Кредитні питання',
            text: 'Вирішення питань з мікрокредитними та іншими організаціями'
        },
        {
            head: 'Вирішення питань з мікрокредитними та іншими організаціями',
            text: 'Юридична допомога при розлученні, розподілі майна, стягненні аліментів'
        }
    ];
    

    return (
        <div className="services">
            <div className="content">
                <h1>Послуги</h1>
                <div className="cool-blocks">
                    {renderBlock()}
                </div>
            </div>
        </div>
    )

    function renderBlock(){
        return serviceArray.map((item, index) => {
            return (
                <div className="block" key={index}>
                    <div className="head">
                        {item.head}
                    </div>
                    <div className="text">
                        {item.text}
                    </div>
                </div>
            )
        })
    }
}