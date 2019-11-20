var Excel = React.createClass({
    displayName: "Excel", // displayNameプロパティを使用すると、React側に名前を伝えられる。
    getInitialState: function(){
        return {
            data: this.props.initialData,
            sortby: null,
            descending: false,
        };
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
        var descending = this.state.sortby === column && !this.state.descending;
        data.sort((a,b)=>{
            return descending
            ? (a[column] > b[column]) ? 1 : -1
            : (a[column] < b[column]) ? 1 : -1
        })
        this.setState({
            data: data,
            sortby: column,
            descending: descending,
        })
    },
    render: function (){
        return (
            React.DOM.table(null,
                React.DOM.thead({onClick: this._sort},
                    React.DOM.tr(null,
                        this.props.headers.map((title,index)=>{
                            if (this.state.sortby === index) {
                                title += this.state.descending ? "↑" : "↓"
                            }
                            return React.DOM.th({key: index}, title)
                        }, this)
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
