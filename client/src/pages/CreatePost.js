// import React from 'react';

// const CreatePost = () => {
//     return <div>WE are on the Create Post page</div>;
// };

// export default CreatePost;


// import React from "react";
// import { Container, Form } from "react-bootstrap";

// const CreatePost = () => {
//     return (
//         <Container>
//             <form>
//                 <label>
//                     Post Name:
//                    <input type="text" name="Post Name" />
//                 </label>
//                 <label>
//                     Post Date:
//                    <input type="text" name="Post Date" />
//                 </label>

//             </form>
//         </Container>
//     );
// };
// export default CreatePost;

import React from 'react';
import Calendar from 'react-input-calendar'

const CreatePost = () => {

    return (
        <div className="wrapper">
            <h1>Create Post</h1>
            <form>
                <fieldset>
                    <label>
                        <p>Post Name</p>
                        <input name="name" />
                    </label>
                </fieldset>
                <fieldset>
                    <label>
                        <p>Post Date</p>
                        <Calendar format='DD/MM/YYYY' date='18-06-2021' />
                    </label>

                </fieldset>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default CreatePost;