import './App.css';
import React, { Component }  from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

function App() {
  return (
    <div className="App">
      <div className='Main'>
        <div className='item1'>
          Січень
        </div>
        <div className='item'>
          " - Назва СІЧЕНЬ походить від слова «січа». У цей час наші предки починали розчищати землю, щоб весною її засіяти. Цей промисел називався січа. Так само й учні ДОЛІФМП, які встигли відпочити за канікули, починають "розчищати" свою голову після зимніх канікул та налаштовуватись на робочий лад, щоб в травні успішно здати сесію. "
        </div>
        <AnimationOnScroll animateIn="animate__backInLeft" animateOnce={true}  className='kostil'>
          <img src="./2.jpg" className='photo1'>
          </img> 
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}  className='kostil'> 
        <div className='item'>
          " - Була зима. Ішов січень місяць. Снігу намило стільки, що від дверей його доводилося відгрібати лопатами, а в лісі на горі дерева стояли до пояса в кучугурах і навіть гойдатися не могли, коли на них налітав вітер. Люди сиділи у будинках і топили каміни. "
        </div> 
        </AnimationOnScroll> 
        <AnimationOnScroll animateIn="animate__backInRight" animateOnce={true}  className='kostil2'> 
          <img src="./3.jpeg" width="80%" className='photo1'>
          </img> 
        </AnimationOnScroll> 
      </div>
      <div className='out'>
        Волков Ілля 11
      </div>
    </div>
  );
}

export default App;
