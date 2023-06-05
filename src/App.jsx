import React, { useState } from 'react';
import './App.css';
import Title from '../Components/Title.jsx'


const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPageContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
          <div className='home'>
            <div className='home-content'>
              <h2>Fatima needs your help!</h2>

              <p>Fatima’s four family members (mom, dad, grandma and baby sister) escaped Taliban persecution and made their way to Pakistan where they are living precariously as temporary residents, in danger of deportation.</p>

              <p>Gloria Dei Lutheran Church and Vancouver First Church of the Nazarene have partnered together to cosponsor Fatima’s family and raise the funds necessary to bring the family to British Columbia (the funds include housing costs and basic necessities for their first year in Canada). The total cost required is $55,000. Approximately $44,000 has been raised with $11,000 more needed to bring the family to Canada.</p>
            </div>
            <div className='home-img'>
              <img src="3.jpeg" alt="" className='img' />
            </div>
          </div>
          </>
        );
      case 'story':
        return (
          <>
          <h2> Story </h2>
          <div className='story'>
            <div className='story-item'>
              <h3>Life before the Taliban</h3>
              <img src="2.jpeg" alt="" className='story-img' />
            </div>
            <div className='story-item'>
               <p className='story-paragraph'>The Qadiri family are Hazara, a people group that have long been persecuted in Afghanistan because they are Shia Muslim unlike the majority of Afghanis who are Sunni. Hazara people are easy to distinguish from other ethnicities within Afghanistan because of their distinctive physical features (smaller and more slanted eyes and smaller and flatter noses). These visible differences have made persecution easier for those wishing harm on the Hazara, including the Taliban, who murdered hundreds of thousands of Hazara when they took power in the early 2000s. While U.S. and other foreign troops were in Afghanistan the Hazara enjoyed some protection from persecution, though still subject to targeted bombings. </p>
              <p className='story-paragraph'>With the Taliban out of power, women in Afghanistan were protected under law and afforded rights in Afghan society. Hazara women, including Fatima’s mother, Nima, worked hard to achieve their goals and dreams, even though discrimination continued against them. Afghan women had the right to vote and work. Nima worked in the media in several capacities and was a member of Afghan Women Journalists, while  her father, Khalilullah worked for the Dutch embassy.</p>
            </div>
            <div className='story-item'>
              <h3>Life Under the Taliban</h3>
              <img src="3.jpeg" alt="" className='story-img' />
            </div>
            <div className='story-item'>
              <p className='story-paragraph'>
              Life changed drastically when the Taliban retook control of Afghanistan in August of 2021. Violence against the Hazara people escalated, and the Qadiri family was at special risk for violence because of Nima and Khalilulla’s education and occupations. Women journalists and those who work with western governments/organisations face the constant threat of death and violence under the Taliban.
              </p>
            </div>
            <div className='story-item'>
              <h3>Seeking to Come to Canada</h3>
              <div className='flex-wrapper'>
                <p className='story-paragraph'>
                In the spring of 2022, Khalilullah and Nima, who was six months pregnant with their daughter, Kiana, secured temporary visas to cross the border from Afghanistan into neighbouring Pakistan. A few months’ later they were joined by Khalilullah’s mother. Kiana was born in August of 2022, and the four are now waiting to join their daughters Fatima (23) and Muhadesa (18) in Canada. Their situation in Pakistan is extremely precarious, as the family only have temporary visas and are not allowed to apply for permanent or long-term residency. Additionally, as Hazara people they are still at risk for targeted bombings from the Taliban in Pakistan and Sunni extremist groups. Please consider donating to bring this family not only to safety but to reunite with their daughters who have made their homes in Canada.
                </p>
                <button onClick={() => setCurrentPage('donate')} className='donate'>Donate Now</button>
              </div>
            </div>
          </div>
          </>
          
        );
      case 'donate':
        return (
          <>
            <h2>How To Donate</h2>
            <div className='flex-wrapper'>
              <li>1. Go to the donation page on the <a href="https://www.canadahelps.org/en/dn/42524?v2=true" target="_blank">Gloria Dei Lutheran Church Canada Helps page.</a></li>
              <li>2. In the drop-down “Fund:” box, choose: "2. Refugee Support (Fatima Q.’s Family Fund)”</li>
              <a href="https://www.canadahelps.org/en/dn/42524?v1=true" target="_blank"><button className='donate'>Donate Now</button></a>
            </div>
            
          </> 
        )

      default:
        return null;
    }
  };

  return (
    <>
    <header>
      <Title/>
    </header>
    <div className='main-container'>
      <nav>
        <button onClick={() => setCurrentPage('home')}>Home</button>
        <button onClick={() => setCurrentPage('story')}>Story</button>
        <button onClick={() => setCurrentPage('donate')}>Donate</button>
      </nav>

      <div className='main'>{renderPageContent()}</div>
    </div>
    </>
    
  );
};

export default App;
