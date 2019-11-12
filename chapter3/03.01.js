ReactDOM.render(
    React.createElement(Excel, {
        headers: headers,
        initailData: data,
    }),
    document.getElementById("app")
);