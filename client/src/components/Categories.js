
// import React, { Component } from 'react'

// class Search extends Component {
//     state = {
//         query: '',
//     }

//     handleInputChange = () => {
//         this.setState({
//             query: this.search.value
//         })
//     }


//     render() {
//         return (
//             <div
//                 id="about-container"
//                 className="content-containers container text-center mt-5">
//                 <h1 id="about" className={this.props.bounceLeft}>
//                     Categories
//             				</h1>
//                 <form>
//                     <input
//                         placeholder="Search for..."
//                         ref={input => this.search = input}
//                         onChange={this.handleInputChange}
//                     />
//                     <p>{this.state.query}</p>
//                 </form>
//             </div>
//         )

//     }
// }

// export default Search







import React from 'react';

const list = [
    {
        id: 'a',
        name: 'IT Technologies',
    },
    {
        id: 'b',
        name: 'Health & Fitness',
    },
    {
        id: 'c',
        name: 'Design',
    },
    {
        id: 'd',
        name: 'Development',
    },
    {
        id: 'e',
        name: 'Marketing',
    },
    {
        id: 'f',
        name: 'Business',
    },
    {
        id: 'g',
        name: 'Photography & Video Courses',
    },
];

const Categories = () => {
    return (
        <div
            id="about-container"
            className="content-containers container text-center mt-5">
            <h1 id="about">
                Categories
            </h1>
            <div className="d-flex w-100 justify-content-right" >
                <ul className="list-group">

                    {list.map((item) => (
                        <button className="list-group-item" key={item.id}>{item.name}</button>

                    ))}

                </ul>
            </div>
        </div>
    );
};

export default Categories;

