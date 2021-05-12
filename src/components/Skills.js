import React, { Component } from 'react';
import '../styles/Skills.css';
import uniqid from 'uniqid';
import Section from './Section';
import Bullet from './Bullet';

class Skills extends Component {
    render() {
        return (
            <Section
                sectionTitle="Skills"
                items={[skillFactory(), skillFactory()]}
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
