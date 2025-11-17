const pageUrls = {
    'b1': 'writer1.html',
    'b2': 'writer2.html',
    'b3': 'writer3.html',
    'b4': 'writer4.html',
    'b5': 'writer5.html',
    'b6': 'writer6.html',
    'b7': 'writer7.html',
};

    
const handleButtonClick = (event) => {

    const button = event.currentTarget;
    const { id } = button;

    const targetUrl = pageUrls[id];

    if(targetUrl) {
        
        window.location.href = targetUrl;
    } else {
        console.log('tiklama hatasissssss');
        
    }
};

const initalizePage = () => {

    const blogButtons = document.querySelectorAll('.containerBox button');

    blogButtons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });
};

document.addEventListener('DOMContentLoaded', initalizePage);
