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







// const Categories = () => {
//     return (
//         <div>

//             <h1 id="about">
//                 Categories
//             </h1>
//             <div className="d-flex w-100 justify-content-right" >
//                 <ul className="list-group">

//                     {list.map((item) => (
//                         <button className="list-group-item" key={item.id}>{item.name}</button>

//                     ))}

//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default Categories;











// import React from 'react';

// const list = [
//     {
//         id: 'a',
//         name: 'IT Technologies',
//     },
//     {
//         id: 'b',
//         name: 'Health & Fitness',
//     },
//     {
//         id: 'c',
//         name: 'Design',
//     },
//     {
//         id: 'd',
//         name: 'Development',
//     },
//     {
//         id: 'e',
//         name: 'Marketing',
//     },
//     {
//         id: 'f',
//         name: 'Business',
//     },
//     {
//         id: 'g',
//         name: 'Photography & Video Courses',
//     },
// ];

// const Categories = () => {
//     return (

//         <div className="d-flex w-100 justify-content-right" >
//             <ul className="list-group">

//                 {list.map((item) => (
//                     <button className="list-group-item" key={item.id}>{item.name}</button>

//                 ))}

//             </ul>
//         </div>

//     );
// };

// export default Categories;