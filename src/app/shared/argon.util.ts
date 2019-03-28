
declare var $: any;
declare var Headroom: any;

export class ArgonUtil {

    static start() {
        // Collapse navigation
        $('.navbar-main .collapse').on('hide.bs.collapse', function () {
            var $this = $(this);
            $this.addClass('collapsing-out');
        });

        $('.navbar-main .collapse').on('hidden.bs.collapse', function () {
            var $this = $(this);
            $this.removeClass('collapsing-out');
        });

        $('.navbar-main .dropdown').on('hide.bs.dropdown', function () {
            var $this = $(this).find('.dropdown-menu');

            $this.addClass('close');

            setTimeout(function () {
                $this.removeClass('close');
            }, 200);

        });

        // Headroom - show/hide navbar on scroll
        if ($('.headroom')[0]) {
            var headroom = new Headroom(document.querySelector("#navbar-main"), {
                offset: 300,
                tolerance: {
                    up: 30,
                    down: 30
                },
            });
            headroom.init();
        }

        // Datepicker
        $('.datepicker')[0] && $('.datepicker').each(function () {
            $('.datepicker').datepicker({
                disableTouchKeyboard: true,
                autoclose: false
            });
        });

        // Tooltip
        $('[data-toggle="tooltip"]').tooltip();

        // Popover
        $('[data-toggle="popover"]').each(function () {
            var popoverClass = '';
            if ($(this).data('color')) {
                popoverClass = 'popover-' + $(this).data('color');
            }
            $(this).popover({
                trigger: 'focus',
                template: '<div class="popover ' + popoverClass + '" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
            })
        });

        // Additional .focus class on form-groups
        $('.form-control').on('focus blur', function (e) {
            $(this).parents('.form-group').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
        }).trigger('blur');
    }

}