(function() {

    if (!DataStore.trades) {
        DataStore.trades = [];
    }

    var result;
    var $element;
    var items = DataStore.trades;

    function show()
    {
        loadPage();
        return (result = $.Deferred());
    }

    function loadPage()
    {
        var $elem = $('#trade-lookup');
        var contentLoaded = true;

        if ($elem.length === 0) {
            contentLoaded = $.Deferred(function(deferred) {
                $('<div></div>')
                        .appendTo('body')
                        .load('pages/trade/lookup.html', function() {
                            bindInputs();
                            deferred.resolve();
                        });
            }).promise();
        }

        $.when(contentLoaded).done(function() {
            $element.modal('show');
            loadList();
        });
    }

    function loadList()
    {
        var $list = $element.find('.list');
        TableUtil.renderItems($list, ['name', 'ports'], items);
    }

    function bindInputs()
    {
        $element = $('#trade-lookup');
        
        //$element.on('click', '.')
    }

    $(function() {
        $element = $('#trade-lookup');
    });

    window.TradeLookup = {
        show: show
    };

})();