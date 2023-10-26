class Error {

    render() {
        const html = `
        <div class="error-container">
            <div class="error-message">        
                <h1 class="error-404">404</h1>
                <h2>Not Found</h2>
                <h3>The resource requested could not be found on this server</h3>
            </div>
        </div>
        `;

        ROOT_ERROR.innerHTML = html;
    };
}

const errorPage = new Error();