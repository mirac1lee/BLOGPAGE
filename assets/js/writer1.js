document.addEventListener('DOMContentLoaded', () => {

    const writerGroup1 = document.getElementById('writerGroup1');

    if (!writerGroup1) {

        console.error("bu id'ye sahip element bulunamadi");
        return;
    }
    
    const startPostIndex = 0;
    const postsLimit = 6;
    const apiUrl = `https://jsonplaceholder.typicode.com/posts?_start=${startPostIndex}&_limit=${postsLimit}`;

    async function getData() {
        
        const response = await fetch(apiUrl);

        if (response.ok) {
            const responseData = await response.json();

            writerGroup1.innerHTML = responseData 
            .map ((data) => `
            <div class="writerItem">
            <h1>${data.id} - ${data.title}</h1>
            <p>${data.body}</p>
            </div>
            `) .join("");
        } else {
            writerGroup1.innerHTML = "Veriler yuklenirken bir hata olsutu...";
        }
    }
    getData();
});