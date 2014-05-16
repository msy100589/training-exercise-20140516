(function() {

    if (!DataStore.tradeLanes) {
        DataStore.tradeLanes = [];
    }

    var items = DataStore.tradeLanes;
    var $element;

    function addItem()
    {
        $('.items', $element).attr('hidden', 'hidden');
        TradeLaneForm.show()
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
        TableUtil.renderItems($list, ['name', 'originTradeName', 'destTradeName'], items);
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
        $element = $('#trade-lane');
        bindInputs();
        showPage();
    });

})();