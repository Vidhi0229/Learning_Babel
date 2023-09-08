const body = document.querySelector("body");

const bodyStyle = () =>  body.style.background = 'peachpuff';


const addTitle = (text) => {
    const title = document.createElement('h1');
    title.textContent = text;
    body.appendChild(title);
};


export {bodyStyle, addTitle};