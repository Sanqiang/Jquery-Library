(function ($) {
    $.fn.Flipper = function (json) {
        var default_para =
        {
            view:
            {
                width: "100",
                height: "100",
                item_width: "100",
                item_height: "100",
                marginLeft: "10",
                marginTop: "10"
            },
            control:
            {
                el: 'default',
                rect: '10px'
            }

        };
        var para = $.extend({}, default_para, json);
        var origin_html = $(this).html();
        var update_html = ("<div style='overflow: hidden; width: " + para.view.width + "px; height: " + para.view.height + "px; position: relative' id='flipper_unblanked_container'><div style='position: relative;' id='flipper_blanked_container'>" + origin_html + "</div></div>");
        $(this).html(update_html);
        var sender = $(this);

        var control_panel = $("<table />").attr("id", "Control-Panel");

        var row = 1;
        $(sender).find("table tr").each(function () {
            var tds = $(this).find('td');
            var col = 1;
            var control_panel_tr = $("<tr />");
            $(tds).each(function () {
                var div = $(this).find('div');
                $(div).attr("id", "Flipper-DIV-" + row + "-" + col);
                $(div).css("width", para.view.item_width).css("height", para.view.item_height);
                var control_panel_td = $("<td />");
                control_panel_td.appendTo(control_panel_tr);
                var control_panel_div = $("<div />").css('width', para.control.rect).css('height', para.control.rect).attr('id', 'Control-Btn-' + row + '-' + col);
                control_panel_div.appendTo(control_panel_td);
                if ($(div).html().trim().length > 0) {
                    $(control_panel_div).attr("class", "Control-Btn-Active").css("cursor", "pointer");
                }
                control_panel_tr.appendTo(control_panel);
                col++;
            });
            row++;
        });

        //var l = $("#Flipper-DIV-1-1").position().left;
        //var t = $("#Flipper-DIV-1-1").position().top;
        //Go(l, t);
        var ControlGrid = $(control_panel).outerHTML();
        var WholeControl = "<table><tr><td id = 'Control-Arrow'>"
        + "<table><tr><td><div></div></td><td><div><img  id='Control-Arrow-Up' src='Include/Image/arrow-up.png' alt='arrow' /></div></td><td><div></div></td></tr><tr><td><div><img id='Control-Arrow-Left' src='Include/Image/arrow-left.png' alt='arrow' /></div></td><td><div></div></td><td><div><img id='Control-Arrow-Right' src='Include/Image/arrow-right.png' alt='arrow' /></div></td></tr><tr><td><div></div></td><td><div><img id='Control-Arrow-Down' src='Include/Image/arrow-down.png' alt='arrow' /></div></td><td><div></div></td></tr></table>"
        + "</td><td>" + ControlGrid + "</td></tr></table>";
        $(para.control.el).html(WholeControl);

        $(".Control-Btn-Active").click(function (e) {
            var current_row = $(e.target).attr("id").split("-")[2];
            var current_col = $(e.target).attr("id").split("-")[3];
            var l = $("#Flipper-DIV-" + current_row + "-" + current_col).position().left;
            var t = $("#Flipper-DIV-" + current_row + "-" + current_col).position().top;
            Go(l, t);
            ControlGo(current_row, current_col);
        });

        $("#Control-Arrow-Up").click(function (e) {
            var row = parseInt($("#Control-Arrow").attr("row")) - 1;
            var col = $("#Control-Arrow").attr("col");
            var l = $("#Flipper-DIV-" + row + "-" + col).position().left;
            var t = $("#Flipper-DIV-" + row + "-" + col).position().top;
            Go(l, t);
            ControlGo(row, col);
        });
        $("#Control-Arrow-Down").click(function (e) {
            var row = parseInt($("#Control-Arrow").attr("row")) + 1;
            var col = $("#Control-Arrow").attr("col");
            var l = $("#Flipper-DIV-" + row + "-" + col).position().left;
            var t = $("#Flipper-DIV-" + row + "-" + col).position().top;
            Go(l, t);
            ControlGo(row, col);
        });
        $("#Control-Arrow-Left").click(function (e) {
            var row = $("#Control-Arrow").attr("row");
            var col = parseInt($("#Control-Arrow").attr("col")) - 1; x(row + "=" + col)
            var l = $("#Flipper-DIV-" + row + "-" + col).position().left;
            var t = $("#Flipper-DIV-" + row + "-" + col).position().top;
            Go(l, t);
            ControlGo(row, col);
        });
        $("#Control-Arrow-Right").click(function (e) {
            var row = $("#Control-Arrow").attr("row");
            var col = parseInt($("#Control-Arrow").attr("col")) + 1;
            var l = $("#Flipper-DIV-" + row + "-" + col).position().left;
            var t = $("#Flipper-DIV-" + row + "-" + col).position().top;
            Go(l, t);
            ControlGo(row, col);
        });

        function ControlGo(current_row, current_col) {
            //Control
            $("#Control-Arrow div img").css("display", "none");
            if ($("#Control-Btn-" + (parseInt(current_row) + 1) + "-" + current_col).length > 0) {
                $("#Control-Arrow-Down").show();
            }
            if ($("#Control-Btn-" + (parseInt(current_row) - 1) + "-" + parseInt(current_col)).length > 0) {
                $("#Control-Arrow-Up").show();
            }
            if ($("#Control-Btn-" + parseInt(current_row) + "-" + (parseInt(current_col) + 1)).length > 0) {
                $("#Control-Arrow-Right").show();
            }
            if ($("#Control-Btn-" + parseInt(current_row) + "-" + (parseInt(current_col) - 1)).length > 0) {
                $("#Control-Arrow-Left").show();
            }
            //Record
            $("#Control-Arrow").attr("row", current_row).attr("col", current_col);
            $(".Control-Btn-Active-Current").attr("class", "Control-Btn-Active");
            $("#Control-Btn-" + current_row + "-" + current_col).attr("class", "Control-Btn-Active-Current");
        }

        function Go(l, t) {
            l = (-1) * (l - para.view.marginLeft);
            t = (-1) * (t - para.view.marginTop);
            $('#flipper_blanked_container').animate({
                left: l + 'px'
            }, 500).animate({
                top: t + 'px'
            }, 500);
        }
    }

    $.fn.FlipperGo = function (current_row, current_col) {
        var l = $("#Flipper-DIV-" + current_row + "-" + current_col).position().left;
        var t = $("#Flipper-DIV-" + current_row + "-" + current_col).position().top;
        l = (-1) * (l)//- para.view.marginLeft);
        t = (-1) * (t)//- para.view.marginTop);
        $('#flipper_blanked_container').animate({
            left: l + 'px'
        }, 500).animate({
            top: t + 'px'
        }, 500);

        $("#Control-Arrow div img").css("display", "none");
        if ($("#Control-Btn-" + (parseInt(current_row) + 1) + "-" + parseInt(current_col)).length > 0) {
            $("#Control-Arrow-Down").show();
        }
        if ($("#Control-Btn-" + (parseInt(current_row) - 1) + "-" + parseInt(current_col)).length > 0) {
            $("#Control-Arrow-Up").show();
        }
        if ($("#Control-Btn-" + parseInt(current_row) + "-" + (parseInt(current_col) + 1)).length > 0) {
            $("#Control-Arrow-Right").show();
        }
        if ($("#Control-Btn-" + parseInt(current_row) + "-" + (parseInt(current_col) - 1)).length > 0) {
            $("#Control-Arrow-Left").show();
        }

        //Record
        $("#Control-Arrow").attr("row", current_row).attr("col", current_col);
        $(".Control-Btn-Active-Current").attr("class", "Control-Btn-Active");
        $("#Control-Btn-" + current_row + "-" + current_col).attr("class", "Control-Btn-Active-Current");
    }

    $.fn.outerHTML = function () {
        return $(this).clone().wrap('<div></div>').parent().html();
    }

    $.fn.transform = function (json) {
        var default_para = {
            degree: 0,
            scale: 1
        };
        var para = $.extend({}, default_para, json);
        var sender = $(this);
        $(sender).css('-webkit-transform', 'rotate(' + para.degree + 'deg) scale(' + para.scale + ')');
        $(sender).css('-moz-transform', 'rotate(' + para.degree + 'deg) scale(' + para.scale + ')');
        $(sender).css('filter', 'progid:DXImageTransform.Microsoft.BasicImage(rotation=' + para.degree / 30 + ') scale(' + para.scale + ')');
    }

    $.fn.locate = function (json) {
        var default_para = {
            vertical: 'center',
            horizontal: 'center'
        };

        var para = $.extend({}, default_para, json);
        var sender = $(this);
        $(sender).css("position", "absolute")
        $(function () {
            locate();
        });
        $(window).resize(function (e) {
            locate();
        });
        $(window).scroll(function () {
            locate();
        });
        function locate() {
            var screen_width = $(window).width() + $(document).scrollLeft();
            var screen_height = $(window).height() + $(document).scrollTop();
            var item_width = $(sender).width();
            var item_height = $(sender).height();
            switch (para.vertical) {
                case 'center':
                    var top = screen_height / 2 - item_height / 2;
                    break;
                case 'top':
                    var top = 0;
                    break;
                case 'bottom':
                    var top = screen_height - item_height;
                    break;
            }
            switch (para.horizontal) {
                case 'center':
                    var left = screen_width / 2 - item_width / 2;
                    break;
                case 'left':
                    var left = 0;
                    break;
                case 'right':
                    var left = screen_width - item_width;
                    break;
            }
            $(sender).css("left", left).css("top", top);
        }

    }

    $.fn.Gallery = function (json) {
        var default_para = {
            res: ['http://pic.sc.chinaz.com/Files/pic/icons128/3597/display.png', 'http://pic1.sc.chinaz.com/Files/pic/icons128/3597/trash_full.png', 'http://pic1.sc.chinaz.com/Files/pic/icons128/3597/Firefox.png'],
            screen_width: 500,
            screen_height: 500,
            time_span: 3000,
            control: {
                el: '#c',
                item_width: 100,
                item_hright: 100
            }
        };
        var para = $.extend({}, default_para, json);
        var sender = $(this);
        $(sender).wrap("<div id='Gallery-Container' style='width:9" + para.screen_width + "px;height:9" + para.screen_height + "px;position: relative; overflow: hidden' />");
        var img_collection = "<div id='Gallery-Pic-Container'>", img_control = "";
        $.each(para.res, function (index, item) {
            img_collection += "<img id='Gallery-Pic-" + index + "' src='" + item + "' alt='' width='" + para.screen_width + "px' height='" + para.screen_height + "px' />";
            //Control
            img_control += "<img id='Gallery-Control-Pic-" + index + "' src='" + item + "' alt='' width='" + para.control.item_width + "px' height='" + para.control.item_height + "px' />";
        });
        img_collection + "</div>";
        $(sender).html(img_collection);
        $(para.control.el).html(img_control);
        //Mark them as hidden
        $("img[id*=Gallery-Pic-]").css("position", "absolute").css("left", para.screen_width).css("top", para.screen_height);

        AutoRun();
        var loop_inside, loop_outside;
        //loop_outside = setInterval(function () { AutoRun() }, $("img[id*=Gallery-Pic-]").length * para.time_span);
        var z_index = 0;

        function AutoRun() {
            $("img[id*=Gallery-Pic-]").each(function (index, item) {
                //var loop_inside = setTimeout(function () {
                $("#Gallery-Pic-" + index).queue('Gallery');
                $("#Gallery-Pic-" + index).delay(index * (para.time_span + 1000)).css("z-index", z_index++).css("left", para.screen_width).css("top", 0).animate({
                    left: 0
                }, 1000).delay(para.time_span).animate({
                    left: para.screen_width * (-1)
                }, 1000, function () {
                    if (para.res.length - 1 == index) {
                        AutoRun();
                    }
                }).css("z-index", z_index++).css("left", para.screen_width).css("top", 0);
                //}, index * para.time_span);
            });
            //AutoRun();
        }
        //Control
        $("img[id*=Gallery-Control-Pic-]").click(function (e) {
            var index = $(e.target).attr("id").split("-")[3];
            $("#Gallery-Pic-" + index).stop(true);
        });
        var isstop = false;
        $("#Gallery-Pic-Container").click(function (e) {
            $(e.target).stop(true);
            if (isstop) {
                $("img").stop(true);
                isstop = true;
            } else {
                $("img").stop(false);
                isstop = false;
            }

            $("#c").html($(e.target).attr("src"));
        });
    }

    function x(i) {
        console.info(i);
    }
})(jQuery);