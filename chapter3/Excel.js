var Excel = React.createClass({
    displayName: "Excel", // displayNameプロパティを使用すると、React側に名前を伝えられる。
    getInitialState: function(){
        return {data: this.props.initialData};
    },
    propTypes: {
        header: React.PropTypes.arrayOf(
            React.PropTypes.string
        ),
        initialData: React.PropTypes.arrayOf(
            React.PropTypes.arrayOf(
                React.PropTypes.string
            )
        ),
    },
    _sort: function(e){
        var column = e.target.cellIndex;
        var data = Array.from(this.state.data)
        data.sort((a,b)=>{
            console.log(column);
            return a[column] > b[column] ? 1: -1;
        })
        this.setState({
            data: data,
        })
    },
    render: function (){
        return (
            React.DOM.table(null,
                React.DOM.thead({onClick: this._sort},
                    React.DOM.tr(null,
                        this.props.headers.map((title,index)=>{
                            return React.DOM.th({key: index}, title)
                        })
                    )
                ),
                React.DOM.tbody(null,
                    this.state.data.map((row, index)=>{
                        return (
                            React.DOM.tr({key: index},
                                row.map((cell, idx)=>{
                                    return React.DOM.td({key: idx}, cell);
                                })
                            )
                        )
                    })
                )
            )
        )
    }
});
