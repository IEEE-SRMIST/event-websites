import React from 'react';
import './styles.css'; // Ensure this import if styles are in a separate CSS file

const Speakers = () => {
    return (
        <div className="container">
            <div className="content">
                <div className="profile-info">
                    <h2>Dr. Bernaurdshaw Neppolian</h2>
                    <h3>Inspiring Excellence in Chemistry and Environmental Research</h3>
                    <p>
                        Dr. Bernaurdshaw Neppolian stands as a distinguished figure in the realm of chemistry, his contributions recognized both nationally and globally. His expertise has earned him a notable position as one of the top scientists in the field, with a commendable National Ranking of 149 and a Worldwide Ranking of 10269 by com for Chemistry Research in 2022.
                    </p>
                    <p>
                        Furthermore, his consistent excellence places him within the esteemed Top 2% of Researchers worldwide, according to Stanford University, USA, an honor conferred upon him in 2022, 2021, 2019, and 2017. Beyond his academic prowess, Dr. Neppolian has also garnered recognition for his leadership in higher education, being honored as an Outstanding Dean by Elets Technomedia in 2022.
                    </p>
                    <p>
                        His dedication to environmental research has been celebrated internationally, exemplified by the prestigious Hiyoshi Environmental Award from Japan's Hiyoshi Corporation in 2015. Dr. Neppolian's remarkable achievements include receiving the INSA, presented by the Cabinet Minister of Science and Technology in 2019. His multifaceted contributions underscore his commitment to advancing knowledge and addressing pressing global challenges, establishing him as a luminary in both academic and environmental spheres.
                    </p>
                </div>
                <div>
                    <img
                        className="profile-image"
                        src="/img/reference_img/NP.png"
                        alt="Dr. Bernaurdshaw Neppolian"
                    />
                </div>
            </div>
            <div className="shapes">
                <div className="shape shape1"></div>
                <div className="shape shape2"></div>
            </div>
        </div>
    );
};

export default Speakers;
