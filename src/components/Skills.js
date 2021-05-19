import React, { Component } from 'react';
import '../styles/Skills.css';
import uniqid from 'uniqid';
import Section from './Section';
import Bullet from './Bullet';

class Skills extends Component {
    render() {
        // Push 6 default skill bullets into items array.
        const defaultSkills = [];
        let n = 1;
        while (n <= 6) {
            defaultSkills.push(skillFactory());
            n++;
        }

        return (
            <Section
                sectionTitle="Skills"
                items={defaultSkills}
                ItemTag={Bullet}
                itemFactory={skillFactory}
            />
        );
    }
}

const skillFactory = () => {
    return {
        text: 'Skill',
        id: uniqid(),
    };
};

export default Skills;
