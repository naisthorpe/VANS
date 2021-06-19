import React from 'react';
import { Tab } from 'semantic-ui-react';


const panes = [
    {
        menuItem: 'IT Technologies',
        render: () => <Tab.Pane> IT Technologies content</Tab.Pane>
    },
    {
        menuItem: 'Health & Fitness',
        render: () => <Tab.Pane> Health & Fitness content</Tab.Pane>
    },
    {
        menuItem: 'Design',
        render: () => <Tab.Pane> Design content</Tab.Pane>
    },
    {
        menuItem: 'Development',
        render: () => <Tab.Pane> Development content</Tab.Pane>
    },
    {
        menuItem: 'Marketing',
        render: () => <Tab.Pane > Marketing content</Tab.Pane>
    },
    {
        menuItem: 'Business',
        render: () => <Tab.Pane> Business content</Tab.Pane>
    },
    {
        menuItem: 'Photography & Video Courses',
        render: () => <Tab.Pane> Photography & Video Courses content</Tab.Pane>
    },
];
const TabExampleVerticalTab = () => (

    <Tab menu={{ fluid: true, vertical: true, tab: "true" }} panes={panes} />

)
export default TabExampleVerticalTab;



