import React from 'react'
import './Sponsors.css';

const Sponsors = () => {
    return (
        <div >

            <section className="bg-white text-black mt-16 mb-16 overflow-hidden">
                <div className="sponsors-container">
                    <div className="sponsor">
                        <img className="sponsor-logo" src="/img/Sponsors/Axure.png" alt="COMSOC" />
                    </div>
                    <div className="sponsor">
                        <img className="sponsor-logo" src="/img/Sponsors/InterviewCake.png" alt="CTS" />
                    </div>
                    <div className="sponsor">
                        <img className="sponsor-logo" src="/img/Sponsors/xyzDomain.png" alt="IAS" />
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Sponsors