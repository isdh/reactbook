var Excel = React.createClass({
    render: function (){
        return (
            React.DOM.table(null,
                React.DOM.thead(null,
                    React.DOM.tr(null,
                        this.props.headers.map(title=>React.DOM.th(null, title))
                    )
                )
            )
        )
    }
});