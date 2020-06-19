import axios from 'axios';

const apiRequest = () => {
    axios.get('https://api.github.com/users/sideshowbarker')
        .then(response => {
            let output = document.getElementById("root");
            output.innerText = response.data.id;
            Object.keys(response);
            console.log(response.data);
            console.log()
        });
}

//have this execute whenever you want
apiRequest();