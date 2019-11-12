ReactDOM.render(
    React.createElement(Excel, {
        headers: headers,
        initialData: data,
    }),
    document.getElementById("app")
);