import React from 'react';
import { GiSplitCross } from 'react-icons/gi'
const AdminFeedBack = ({ show }) => {
    const { _id } = show;
    console.log(show)
    const handleGiveFeedback = (event) => {
        event.preventDefault();
        // console.log(event.target.text.value)
        const feedBack = event.target.text.value;
        fetch(`http://localhost:5000/admin/feedbacks/:${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(feedBack)
        }).then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    return (
        <div className='w-full'>
            {/* The button to open modal */}
            {/* <label htmlFor="my_modal_6" className="btn">open modal</label> */}

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-full max-w-md mx-auto">
                    <h1 className='font-playfair font-extrabold text-4xl text-center mb-5 hover:text-orange-100'>FeedBack</h1>
                    <form action="" onSubmit={handleGiveFeedback}
                        className='flex flex-col'
                    >
                        <textarea className='w-full outline-none bg-blue-100 rounded-md mb-5' name="text" id="" cols="50" rows="5"></textarea>
                        <input className='bg-orange-100 font-playfair text-base h-7 rounded-md' type="submit" value="Submit" />

                    </form>


                    <label htmlFor="my_modal_6" className="btn absolute top-0 right-0 w-10 h-8 bg-red-600">
                        <GiSplitCross className='text-base text-white'></GiSplitCross>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default AdminFeedBack;