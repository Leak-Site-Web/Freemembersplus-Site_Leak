const createLoader = () => {
    let modalLoader = document.createElement("div");
    modalLoader.classList.add("modalLoader");

        let modalContent = document.createElement("div");
        modalContent.classList.add("content");

            let spinner = document.createElement("div");
            spinner.classList.add("spinner");
            modalContent.appendChild(spinner);
        
        modalLoader.appendChild(modalContent);
    
    document.body.appendChild(modalLoader);
    return modalLoader;
};

const alertError = (error, callback) => {
    if(error.code === 3) {
        callback();
    } else {
        console.error(error);
        alert(`❌ ${error.message} (${error.code})`);
    };
};