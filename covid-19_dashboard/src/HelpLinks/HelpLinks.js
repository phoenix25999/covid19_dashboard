import React from 'react';

import styles from './HelpLinks.module.css';

const helpLinks = () => {
    return(
        <div className={styles.HelpLinks}>
            <div>
                <a href="https://www.who.int/health-topics/coronavirus/coronavirus#tab=tab_1">
                    World Health Organisation
                </a>
            </div>

            <div>
                <a href="https://www.cdc.gov/coronavirus/2019-ncov/index.html?CDC_AA_refVal=https%3A%2F%2Fwww.cdc.gov%2Fcoronavirus%2Findex.html">
                    Center for Disease Control COVID-19 Information
                </a>
            </div>

            <div>
                <a href="https://www.nhp.gov.in/coronavirus-infection_pg">
                    National Health Portal of India
                </a>
            </div>

            <div>
                <a href="http://tourism.gov.in/ministry-health-family-welfare-advisory-guidelines-hotels-prevention-coronavirus">
                    Ministry Of Tourism, India
                </a>
            </div>
        </div>
            
    );
}

export default helpLinks;