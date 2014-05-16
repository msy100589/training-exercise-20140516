(function() {

    if (!DataStore.trades) {
        DataStore.trades = [];
    }

    var items = DataStore.trades;
    var $element;

    function addItem()
    {
        $('.items', $element).attr('hidden', 'hidden');
        TradeForm.show()
                .done(function(item) {
                    items.push(item);
                })
                .always(function() {
                    showPage();
                });
    }

    function refreshList()
    {
        var $list = $('.items .list', $element);
        TableUtil.renderItems($list, ['name', 'ports'], items);
    }

    function showPage()
    {
        $('.items', $element).removeAttr('hidden');
        refreshList();
    }

    function bindInputs()
    {
        $element.on('click', '.items .btn-add', addItem);
    }

    // initializer
    $(function() {
        $element = $('#trade');
        bindInputs();
        showPage();
    });

})();