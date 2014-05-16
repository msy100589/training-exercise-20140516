(function() {

    var result;
    var $element;

    function show()
    {
        $('.form', $element).removeAttr('hidden');
        $('.form input:text:first', $element).val('').focus();
        return (result = $.Deferred());
    }

    function save()
    {
        var item = {
            name: $('.form input[name=name]', $element).val()
        };

        $('.form', $element).attr('hidden', 'hidden');
        result.resolve(item);
    }

    function cancel()
    {
        $('.form', $element).attr('hidden', 'hidden');
        result.reject();
    }

    function lookupOrigin()
    {
        TradeLookup.show()
                .done(function(trade) {

                });
    }

    function lookupDest()
    {
        
    }

    function bindInputs()
    {
        $element.on('click', '.form .btn-save', save);
        $element.on('click', '.form .btn-cancel', cancel);
        $element.on('click', '.form .btn-search-origin', lookupOrigin);
        $element.on('click', '.form .btn-search-dest', lookupDest);
    }

    // make global
    window.TradeLaneForm = {
        show: show
    };

    // page initializer
    $(function() {
        $element = $('#trade-lane');
        bindInputs();
    });

})();