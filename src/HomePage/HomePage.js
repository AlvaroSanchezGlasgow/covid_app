import React from 'react';
import InitialSection from '../Sections/InitialSection.js';
import HeaderComponent from '../Components/HeaderComponent.js';



function HomePage() {
    return (
        <>
       <header>
            <HeaderComponent/>
       </header>
       <main>
            <section id='main_section'>
              <InitialSection />
            </section>
            
        </main>
        </>
    );
}

export default HomePage;
