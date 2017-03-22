const initialState = [
    {
        title: 'Lorem ipsum dolor sit amet',
        message: 'consectetur adipiscing elit. Praesent venenatis, tellus et consectetur imperdiet, lorem sem tempus mi, eu commodo est orci id urna. Sed pretium ligula sed varius viverra. Nulla tortor velit, vehicula et erat et, vulputate vulputate eros.',
        author: 'Willem Bever',
        likes: 10,
        comments: [
            {
                author: 'Brent Lobbezoo',
                message: 'Quisque ipsum tortor, egestas vel pulvinar eu, vulputate ac purus.'
            }
        ]
    },
    {
        title: 'Nam placerat eleifend nulla id condimentum.',
        message: 'Vestibulum pulvinar ligula eleifend justo bibendum, id ornare nunc tincidunt. Suspendisse quis semper massa. Pellentesque vitae risus blandit nibh malesuada placerat. Curabitur facilisis orci vitae enim euismod, quis tristique velit commodo. Sed et nisl vel lacus aliquet luctus.',
        author: 'Matthias Meerhof',
        likes: 3,
        comments: [
            {
                author: 'Jan Jansen',
                message: 'Scelerisque consectetur lectus.'
            }
        ]
    },
    {
        title: 'Nunc finibus eros sem, feugiat dignissim quam maximus iaculis.',
        message: 'Nunc sit amet vestibulum ex. In tincidunt placerat massa, at ornare elit. Sed vel dui consequat, laoreet sapien at, scelerisque est. Quisque vehicula, tortor sed mollis laoreet, metus ligula tempor lacus, sed rhoncus neque urna et lorem.',
        author: 'Brent Lobbezoo',
        likes: 0,
        comments: []
    }
];

const PostReducer = (state = initialState, action) => {
    console.log(action); //Temporarily logging all actions
    switch (action.type) {
        case "ADD_POST":
            console.log(state);
            state.push(action.payload);
            return state;
        default:
            return state;
    }
};
export default PostReducer;