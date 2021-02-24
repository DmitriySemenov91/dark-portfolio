import React from 'react'
import Tittle from '../components/Tittle'
import ImageSection from '../components/ImageSection';
import SkillsSection from '../components/SkillsSection';

function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Tittle title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'Javascript'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'Typescript'} progress={'30%'} width={'30%'} />
                <SkillsSection skill={'React Js'} progress={'50%'} width={'50%'} />
                <SkillsSection skill={'Node Js'} progress={'40%'} width={'40%'} />
                <SkillsSection skill={'React-Native'} progress={'50%'} width={'50%'} />
                <SkillsSection skill={'HTML5/CSS3(SASS/SCSS)'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Storybook/Styled-components'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Web Design'} progress={'25%'} width={'25%'} />
                <SkillsSection skill={'UI/UX Design'} progress={'56%'} width={'56%'} />
                <SkillsSection skill={'Docker'} progress={'50%'} width={'50%'} />
            </div>
        </div>
    )
}

export default AboutPage;
