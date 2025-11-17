document.addEventListener('DOMContentLoaded', () => {

    const writerGroup4 = document.getElementById('writerGroup4');

    if (!writerGroup4) {

        console.error("bu id'ye sahip element bulunamadi");
        return;
    }
    
    const startPostIndex = 18;
    const postsLimit = 6;
    const apiUrl = `https://jsonplaceholder.typicode.com/posts?_start=${startPostIndex}&_limit=${postsLimit}`;

    async function getData() {
        
        const response = await fetch(apiUrl);

        if (response.ok) {
            const responseData = await response.json();

            writerGroup4.innerHTML = responseData 
            .map ((data) => `
            <div class="writerItem">
            <h1>${data.id} - ${data.title}</h1>
            <p>${data.body}</p>
            </div>
            `) .join("");
        } else {
            writerGroup4.innerHTML = "Veriler yuklenirken bir hata olsutu...";
        }
    }
    getData();
});