import React from 'react'
import './Sponsors.css';

const Sponsors = () => {
    return (
        <div >

            <section className="bg-white text-black mt-16 mb-16 overflow-hidden">
                <div className="sponsors-container">
                    <div className="sponsor">
                        <img className="sponsor-logo" src="/img/Sponsors/Axure.svg" alt="COMSOC" />
                    </div>
                    <div className="sponsor">
                        <img className="sponsor-logo" src="/img/Sponsors/echo3D.svg" alt="IAS" />
                    </div>
                    <div className="sponsor">
                        <img className="sponsor-logo" src="/img/Sponsors/InterviewCake.svg" alt="CTS" />
                    </div>
                    <div className="sponsor">
                        <img className="sponsor-logo" src="/img/Sponsors/InterviewBuddy.svg" alt="CTS" />
                    </div>
                    <div className="sponsor">
                        <img className="sponsor-logo" src="/img/Sponsors/xyzDomain.svg" alt="IAS" />
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Sponsors