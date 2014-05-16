$(function() {
    
    $('#navbar a').click(onNavAnchorClicked);

    function onNavAnchorClicked(e)
    {
        e.preventDefault();
        var href = $(this).attr('href');
        $('#content').load(href.substr(1));
    }

    // define a global data store object
    window.DataStore = {};

    // initial values
    DataStore.trades = [
        {name: 'Asia Pacific', ports: 'PORT1, PORT2, PORT3'},
        {name: 'South East Asia', ports: 'PORT1, PORT2, PORT3'},
        {name: 'North Asia', ports: 'PORT1, PORT2, PORT3'},
        {name: 'East Asia', ports: 'PORT1, PORT2, PORT3'},
        {name: 'West Asia', ports: 'PORT1, PORT2, PORT3'}
    ];

});