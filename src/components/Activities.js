import React, { Component } from 'react';
import uniqid from 'uniqid';
import Section from './Section';
import Bullet from './Bullet';

class Activities extends Component {
    render() {
        return (
            <Section
                sectionTitle="Activities"
                items={[activityFactory(), activityFactory()]}
                ItemTag={Bullet}
                itemFactory={activityFactory}
                isLastSection="true"
            />
        );
    }
}

const activityFactory = () => {
    return {
        text: 'Activity',
        id: uniqid(),
    };
};

export default Activities;
