var names = ['Alice', 'Emily', 'Kate', 'Sally', 'Jane'];

ReactDOM.render(
    <div>
        {
            names.map(function (name) {
                return <div>Hello and Good Morning, {name}!</div>
            })
        }
    </div>,
    document.getElementById('example')
);