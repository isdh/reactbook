var Excel = React.createClass({
    displayName: "Excel", // displayNameプロパティを使用すると、React側に名前を伝えられる。
    render: function (){
        return (
            React.DOM.table(null,
                React.DOM.thead(null,
                    React.DOM.tr(null,
                        this.props.headers.map((title,index)=>React.DOM.th({key: index}, title))
                    )
                )
            )
        )
    }
});