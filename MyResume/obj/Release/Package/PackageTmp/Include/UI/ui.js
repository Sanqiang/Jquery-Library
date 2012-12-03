(function ($) {

    $.fn.Mosaic = function (json) {
        var default_para = {
            GUID: '',
            style: '',
            info: '',
            action: ''
        };
        var para = $.extend({}, default_para, json);
        var sender = $(this);
        if (para.GUID == '') {
            para.GUID = (Math.random() * 10000).toString().split(".")[0];
        }
        var rect_width = 0
        var rect_height = 0
        if ($(sender).find("img").length > 0) {
            $(sender).find("img").load(function () {
                rect_width = $(sender).width();
                rect_height = $(sender).height();
                MosaicEffect(rect_width, rect_height);
            });
        } else {
            rect_width = $(sender).width();
            rect_height = $(sender).height();
            MosaicEffect(rect_width, rect_height);
        }

        function MosaicEffect(rect_width, rect_height) {
            $(sender).wrap("<div id='Mosaic-" + para.GUID + "' style='position:relative;overflow:hidden;width:" + rect_width + "px;height:" + rect_height + "px'></div>");
            $(sender).css("position", "absolute");
            $(sender).after("<div id='Mosaic-Shallow-" + para.GUID + "' style='position:absolute;width:" + rect_width + "px;height:" + rect_height + "px;cursor:pointer;' onclick='" + para.action + "'></div>");
            if (para.style == 'magnify') {
                $("#Mosaic-Shallow-" + para.GUID).css("background-color", "black").css("opacity", "0.1").css("background", "url('Include/Image/mosaic-magnify.png') no-repeat center center")
                $("#Mosaic-" + para.GUID).hover(function (event) {
                    $("#Mosaic-Shallow-" + para.GUID).stop().animate({
                        opacity: 0.7
                    });
                }, function (event) {
                    $("#Mosaic-Shallow-" + para.GUID).stop().animate({
                        opacity: 0.1
                    });
                });
            } else if (para.style == "left-info") {
                $("#Mosaic-Shallow-" + para.GUID).css("background-color", "black").css("color", "white").css("width", rect_width / 3).css("left", "-" + rect_width / 3 + "px").css("opacity", "0.3").html(para.info);
                $("#Mosaic-" + para.GUID).hover(function (event) {
                    $("#Mosaic-Shallow-" + para.GUID).stop().animate({
                        left: 0
                    });
                }, function (event) {
                    $("#Mosaic-Shallow-" + para.GUID).stop().animate({
                        left: "-" + rect_width / 3 + "px"
                    });
                });
            } else if (para.style == "right-info") {
                $("#Mosaic-Shallow-" + para.GUID).css("background-color", "black").css("color", "white").css("width", rect_width / 3).css("left", rect_width / 3 * 4 + "px").css("opacity", "0.3").html(para.info);
                $("#Mosaic-" + para.GUID).hover(function (event) {
                    $("#Mosaic-Shallow-" + para.GUID).stop().animate({
                        left: rect_width / 3 * 2 + "px"
                    });
                }, function (event) {
                    $("#Mosaic-Shallow-" + para.GUID).stop().animate({
                        left: rect_width / 3 * 4 + "px"
                    });
                });
            } else if (para.style == "") {

            }
            //Change color
            $("#Mosaic-" + para.GUID).hover(function (event) {
                $(sender).css("color", "rgb(9,93,122)");
            }, function (event) {
                $(sender).css("color", "#9F9F9F");
            });


        }
    }

    $.fn.GalleryMulEx = function (json) {
        var default_para = {
            res: ['http://3.bp.blogspot.com/-g1qmtOcEOgA/T2lq16P2o6I/AAAAAAAAAa4/1ellS7riR4A/s1600/letter_h.gif', 'http://0.tqn.com/d/homerepair/1/0/y/6/-/-/screen.jpg', 'http://d2o0t5hpnwv4c1.cloudfront.net/2068_screenscraping/preview.jpg', 'http://s.sk-gaming.com/image/member/6/3cdda8d7235d4e70l.jpg'],
            screen_width: 200, //auto adjust
            screen_height: 200, //auto adjust
            time_span: 4000,
            control: {
                el: '#c',
                item_width: 100,
                item_height: 100
            },
            animate: {
                timespan: 500
            },
            pic_width: 200,
            pic_height: 200,
            GUID: '',
            info: '',
            detail: {
                left: '10px',
                top: '10px',
                info: ['http://3.bp.blogspot.com/-g1qmtOcEOgA/T2lq16P2o6I/AAAAAAAAAa4/1ellS7riR4A/s1600/letter_h.gif', 'http://0.tqn.com/d/homerepair/1/0/y/6/-/-/screen.jpg', 'http://d2o0t5hpnwv4c1.cloudfront.net/2068_screenscraping/preview.jpg', 'http://s.sk-gaming.com/image/member/6/3cdda8d7235d4e70l.jpg'],
            }
        };
        var para = $.extend({}, default_para, json);
        var sender = $(this);
        if (para.GUID == '') {
            para.GUID = (Math.random() * 10000).toString().split(".")[0];
        }
        $(sender).css("width", para.screen_width).css("height", para.screen_height).css("overflow", "hidden").css("position", "relative");
        $(sender).html("<div class='Gallery-Pic-Style-" + para.GUID + "' id='Gallery-Pic-" + 0 + "-" + para.GUID + "' style='position:absolute;overflow:hidden;width:" + para.screen_width + "px;height:" + para.screen_height + "px;'><img src='" + para.res[0] + "' width='" + para.screen_width + "px' height='" + para.screen_height + "px' alt='Hypnoz'  /></div>");
        $(sender).before("<div id='Gallery-Detail-" + para.GUID + "' style='position:absolute;left:" + para.detail.left + "px;top:" + para.detail.top + "px;z-index:10;background-color:black;opacity:0.7;color:White;width:30%'>" + "" + "</div>");
        var SlideSpot = "";
        $(para.res).each(function (index, target) { SlideSpot += "<td id='Gallery-Control-" + index + "-" + para.GUID + "' class='Gallery-Control-Style-" + para.GUID + "' style='width:" + 100 / para.res.length + "%;cursor:pointer;'></td>" });
        $(sender).after("<div id='Gallery-Slider-" + para.GUID + "' style='height:10px;width:" + para.screen_width + "px;position:relative;background-color:rgb(32,32,32);'><table style='width:" + para.screen_width + "px;height:10px;'><tr>" + SlideSpot + "</tr></table></div>");
        $(sender).after("<div id='Gallery-TimeLine-" + para.GUID + "' style='width:" + para.screen_width + "px;height:" + 2 + "px;background-color:grey;'><div id='Gallery-TimeLine-Cursor-" + para.GUID + "' style='height:" + 2 + "px;width:0%;background-color:red'></div></div>");
        $(".Gallery-Control-Style-" + para.GUID).RountRect("15px");
        RecursiveAnimate(0);
        var TO;
        function RecursiveAnimate(index) {
            //Control
            $(".Gallery-Control-Style-" + para.GUID).css("background-color", "rgb(32,32,32)");
            $("#Gallery-Control-" + index + "-" + para.GUID).css("background-color", "rgb(9,93,122)");
            if (index > para.res.length - 1) {
                index = 0
            }
            var next = parseInt(index) + 1;
            if (next == para.res.length) {
                next = 0;
            }
            var last = index - 1;
            if (last == -1) {
                last = para.res.length - 1;
            }

            AnimateGo(index, last, next, Math.floor(Math.random() * 4));
            $("#Gallery-Detail-" + para.GUID).html(para.info + "<br />" + para.detail.info[next]);
            //Control
            TO = setTimeout(function () { RecursiveAnimate(next); }, para.time_span + para.animate.timespan);
        }
        //Animate
        function AnimateGo(index, last, next, s) {

            switch (s) {
                case 0:
                    //Do Up
                    $(sender).append("<div class='Gallery-Pic-Style-" + para.GUID + "' id='Gallery-Pic-" + next + "-" + para.GUID + "' style='position:absolute;overflow:hidden;width:" + para.screen_width + "px;height:" + para.screen_height + "px;top:" + para.screen_height + "px'><img src='" + para.res[next] + "' width='" + para.screen_width + "px' height='" + para.screen_height + "px' alt='Hypnoz'  /></div>");
                    $("#Gallery-Pic-" + next + "-" + para.GUID).css("z-index", 5);
                    $("#Gallery-Pic-" + next + "-" + para.GUID).animate({
                        top: 0
                    }, para.animate.timespan);
                    $("#Gallery-Pic-" + index + "-" + para.GUID).animate({
                        top: "-" + para.screen_height + "px"
                    }, para.animate.timespan);
                    break;
                case 1:
                    //Do Left
                    $(sender).append("<div class='Gallery-Pic-Style-" + para.GUID + "' id='Gallery-Pic-" + next + "-" + para.GUID + "' style='position:absolute;overflow:hidden;width:" + para.screen_width + "px;height:" + para.screen_height + "px;left:" + para.screen_width + "px'><img src='" + para.res[next] + "' width='" + para.screen_width + "px' height='" + para.screen_height + "px' alt='Hypnoz'  /></div>");
                    $("#Gallery-Pic-" + next + "-" + para.GUID).css("z-index", 5);
                    $("#Gallery-Pic-" + next + "-" + para.GUID).animate({
                        left: 0
                    }, para.animate.timespan);
                    $("#Gallery-Pic-" + index + "-" + para.GUID).animate({
                        left: "-" + para.screen_width + "px"
                    }, para.animate.timespan);
                    break;
                case 2:
                    //Do Down
                    $(sender).append("<div class='Gallery-Pic-Style-" + para.GUID + "' id='Gallery-Pic-" + next + "-" + para.GUID + "' style='position:absolute;overflow:hidden;width:" + para.screen_width + "px;height:" + para.screen_height + "px;top:-" + para.screen_height + "px'><img src='" + para.res[next] + "' width='" + para.screen_width + "px' height='" + para.screen_height + "px' alt='Hypnoz'  /></div>");
                    $("#Gallery-Pic-" + next + "-" + para.GUID).css("z-index", 5);
                    $("#Gallery-Pic-" + next + "-" + para.GUID).animate({
                        top: 0
                    }, para.animate.timespan);
                    $("#Gallery-Pic-" + index + "-" + para.GUID).animate({
                        top: para.screen_height + "px"
                    }, para.animate.timespan);
                    break;
                case 3:
                    //Do Right
                    $(sender).append("<div class='Gallery-Pic-Style-" + para.GUID + "' id='Gallery-Pic-" + next + "-" + para.GUID + "' style='position:absolute;overflow:hidden;width:" + para.screen_width + "px;height:" + para.screen_height + "px;left:-" + para.screen_width + "px'><img src='" + para.res[next] + "' width='" + para.screen_width + "px' height='" + para.screen_height + "px' alt='Hypnoz'  /></div>");
                    $("#Gallery-Pic-" + next + "-" + para.GUID).css("z-index", 5);
                    $("#Gallery-Pic-" + next + "-" + para.GUID).animate({
                        left: 0
                    }, para.animate.timespan);
                    $("#Gallery-Pic-" + index + "-" + para.GUID).animate({
                        left: para.screen_width + "px"
                    }, para.animate.timespan);
                    break;
            }

            $("#Gallery-Pic-" + last + "-" + para.GUID).remove();

            //Timer
            $("#Gallery-TimeLine-Cursor-" + para.GUID).animate({ width: '100%' }, para.time_span + para.animate.timespan, function () {
                $("#Gallery-TimeLine-Cursor-" + para.GUID).css("width", "0%");
            });

        }
        //Control
        function GalleryGo(index) {
            $("#Gallery-TimeLine-Cursor-" + para.GUID).stop().css("width", "0%");
            clearTimeout(TO);
            $(sender).html("<div class='Gallery-Pic-Style-" + para.GUID + "' id='Gallery-Pic-" + index + "-" + para.GUID + "' style='position:absolute;overflow:hidden;width:" + para.screen_width + "px;height:" + para.screen_height + "px;'><img src='" + para.res[index] + "' width='" + para.screen_width + "px' height='" + para.screen_height + "px' alt='Hypnoz'  /></div>");
            RecursiveAnimate(index);
        }
        $(".Gallery-TimeLine-Cursor-" + para.GUID).click(function (event) {
            var id = $(event.target).attr("id");
            var t = id.split("-")[2];
            GalleryGo(t);
        });
        $(".Gallery-Control-Style-" + para.GUID).click(function (event) {
            var id = $(event.target).attr("id");
            var t = id.split("-")[2];
            GalleryGo(t);
        });
    }

    $.fn.GalleryMul = function (json) {
        var default_para = {
            res: ['Include/Image/zap/a.jpg', 'Include/Image/zap/b.jpg', 'Include/Image/zap/c.jpg', 'Include/Image/zap/d.jpg', 'Include/Image/zap/e.jpg'],
            screen_width: 200, //auto adjust
            screen_height: 200, //auto adjust
            time_span: 4000,
            intro: 'info',
            intro_extent: 'info_ex',
            control: {
                el: '#c',
                item_width: 100,
                item_height: 100
            },
            animate: {
                col: 1,
                row: 10,
                direct: [1, 1],
                timespan: 500
            },
            res_detail: ['Include/Image/zap/a_d.jpg', 'Include/Image/zap/b_d.jpg', 'Include/Image/zap/c_d.jpg', 'Include/Image/zap/d_d.jpg', 'Include/Image/zap/e_d.jpg'],
            pic_width: 200,
            pic_height: 200,
            GUID: '',
            action: '',
        };
        var para = $.extend({}, default_para, json);
        var sender = $(this);
        if (para.GUID == '') {
            para.GUID = (Math.random() * 10000).toString().split(".")[0];
        }
        $(sender).css("width", para.screen_width).css("height", para.screen_height).css("overflow", "hidden").css("position", "relative");
        $(sender).html("<div class='Gallery-Pic-Style-" + para.GUID + "' id='Gallery-Pic-" + 0 + "-" + para.GUID + "' style='position:absolute;overflow:hidden;width:" + para.screen_width + "px;height:" + para.screen_height + "px;'><img src='" + para.res[0] + "' width='" + para.screen_width + "px' height='" + para.screen_height + "px' alt='Hypnoz'  /></div>");
        var SlideSpot = "";
        if (para.action.length > 0) {
            $(sender).after("<div style='width:" + para.screen_width + "px'><button onclick='" + para.action + "'>GO!!!</button></div>");
        }
        $(sender).after("<div id='Gallery-Intro-" + para.GUID + "' style='width:" + para.screen_width + "px;'>" + para.intro + "</div>");
        $(para.res).each(function (index, target) { SlideSpot += "<td id='Gallery-Control-" + index + "-" + para.GUID + "' class='Gallery-Control-Style-" + para.GUID + "' style='width:" + 100 / para.res.length + "%;cursor:pointer;'></td>" });
        $(sender).after("<div id='Gallery-Slider-" + para.GUID + "' style='height:10px;width:" + para.screen_width + "px;position:relative;background-color:rgb(32,32,32)'><table style='width:" + para.screen_width + "px;height:10px;'><tr>" + SlideSpot + "</tr></table></div>");
        $(sender).after("<div id='Gallery-TimeLine-" + para.GUID + "' style='width:" + para.screen_width + "px;height:" + 2 + "px;background-color:grey;'><div id='Gallery-TimeLine-Cursor-" + para.GUID + "' style='height:" + 2 + "px;width:0%;background-color:red'></div></div>");
        $(".Gallery-Control-Style-" + para.GUID).RountRect("5px");
        $(function () {
            //Add float enclosed div
            var screen_left = $(sender).offset().left;
            var screen_top = $(sender).offset().top;
            $(sender).after("<div id='Gallery-IntroEx-" + para.GUID + "' style='position:absolute;left:" + (screen_left + para.screen_width) + "px;top:" + screen_top + "px;z-index:100;background-color:black;opacity:0.7;color:white;display:none'>" + para.intro_extent + "</div>");
            $(sender).hover(function (event) {
                var Get_GUID = $(event.target).parent("div").attr("id").split("-")[3];
                if (typeof Get_GUID == 'undefined') {
                    var Get_GUID = $(event.target).parent("div").next().attr("id").split("-")[2]
                }
                $("#Gallery-IntroEx-" + Get_GUID).fadeIn('slow');
            }, function (event) {
                var Get_GUID = $(event.target).parent("div").attr("id").split("-")[3];
                if (typeof Get_GUID == 'undefined') {
                    var Get_GUID = $(event.target).parent("div").next().attr("id").split("-")[2]
                }
                $("#Gallery-IntroEx-" + Get_GUID).fadeOut('slow');
            });
        });


        RecursiveAnimate(0);
        var TO;
        function RecursiveAnimate(index) {
            //Control
            $(".Gallery-Control-Style-" + para.GUID).css("background-color", "rgb(32,32,32)");
            $("#Gallery-Control-" + index + "-" + para.GUID).css("background-color", "rgb(9,93,122)");
            //Change Direction
            if (para.animate.col > 1) {
                para.animate.col = 1;
            } else {
                para.animate.col = 10;
            }
            if (para.animate.row > 1) {
                para.animate.row = 1;
            } else {
                para.animate.row = 10;
            }
            if (index > para.res.length - 1) {
                index = 0
            }
            var next = parseInt(index) + 1;
            if (next == para.res.length) {
                next = 0;
            }
            var last = index - 1;
            if (last == -1) {
                last = para.res.length - 1;
            }
            $(sender).append("<div class='Gallery-Pic-Style-" + para.GUID + "' id='Gallery-Pic-" + next + "-" + para.GUID + "' style='position:absolute;overflow:hidden;width:" + para.screen_width + "px;height:" + para.screen_height + "px;'><img src='" + para.res[next] + "' width='" + para.screen_width + "px' height='" + para.screen_height + "px' alt='Hypnoz'  /></div>");
            $("#Gallery-Pic-" + next + "-" + para.GUID).css("z-index", 5);

            //Detail
            $(".Gallery-Pic-Style-" + para.GUID).click(function (event) {
                $("#Gallery-Detail-" + para.GUID).remove();
                var id = $(event.target).parent().attr("id");
                var t = id.split("-")[2];
                var src = para.detail.res_detail[t];
                $("body").append("<div id='Gallery-Detail-" + para.GUID + "' class='Gallery-Detail-Style' style='position:absolute;left:-10000px;top:-10000px;z-index:100;display:none'><img id='Gallery-Detail-Close-" + para.GUID + "' src='Include/Image/btn-close.gif' style='position:absolute;cursor:pointer;' /><img src='" + src + "' alt='Hypnoz' /></div>");
                var top = ($(window).height() - para.pic_height) / 2 + $(document).scrollTop();
                var left = ($(window).width() - para.pic_width) / 2 + $(document).scrollLeft();
                $("#Gallery-Detail-" + para.GUID).css("left", left + "px").css("top", top + "px");
                $("#Gallery-Detail-" + para.GUID).fadeIn(1000);
                //Close Hander
                $("#Gallery-Detail-Close-" + para.GUID).click(function () {
                    $("#Gallery-Detail-" + para.GUID).fadeOut(1000, function () { $("#Gallery-Detail-" + para.GUID).remove(); });
                });
                //Add
                //var second = false;
                //$(document).live('click',function (event) {
                //    if ($(".Gallery-Detail-Style").length > 0) {
                //        if ($(event.target).attr("class") != "Gallery-Detail-Style") {
                //            if (second) {
                //                $(".Gallery-Detail-Style").fadeOut(1000, function () { $("#Gallery-Detail-" + para.GUID).remove(); });
                //                second = false;
                //            } else {
                //                second = true;
                //            }
                //        }
                //    }
                //});
            });

            var src = $("#Gallery-Pic-" + index + "-" + para.GUID).find("img").attr("src");
            for (var j = 0; j < para.animate.row; j++) {
                for (var i = 0; i < para.animate.col; i++) {
                    var div = $("<div></div>");
                    var w_div = Math.ceil(para.screen_width / para.animate.col);
                    var h_div = Math.ceil(para.screen_height / para.animate.row);
                    div.css("position", "absolute").css('background-image', 'url(' + src + ')').css("background-repeat", "no-repeat").css("display", "block").css("z-index", 10);
                    div.css("width", w_div).css("left", 0 + w_div * i);
                    div.css("height", h_div).css("top", 0 + h_div * j);
                    div.css("background-position", (-1) * w_div * i + "px " + (-1) * h_div * j + "px");
                    $(sender).append($(div));

                    $("#Gallery-Pic-" + index + "-" + para.GUID).remove();
                    //Timer

                    $("#Gallery-TimeLine-Cursor-" + para.GUID).animate({ width: '100%' }, para.time_span + para.animate.timespan, function () {
                        $("#Gallery-TimeLine-Cursor-" + para.GUID).css("width", "0%");
                    });
                    //Go
                    if (para.animate.row > 1 && para.animate.col > 1) {
                        $(div).delay(para.animate.timespan / para.animate.row * j / para.animate.col * i).animate({
                            left: para.screen_width * para.animate.direct[0],
                            top: para.screen_height * para.animate.direct[1]
                        }, para.animate.timespan, function () {
                            $(this).remove();
                        });
                    }
                    else if (para.animate.row > 1) {
                        $(div).delay(para.animate.timespan / para.animate.row * j).animate({
                            left: para.animate.direct[0] * para.screen_width
                        }, para.animate.timespan,
                        function () {
                            $(this).remove();
                        });
                    } else if (para.animate.col > 1) {
                        $(div).delay(para.animate.timespan / para.animate.col * i).animate({
                            top: para.screen_height * para.animate.direct[1]
                        }, para.animate.timespan, function () {
                            $(this).remove();
                        });
                    }
                }
            }
            //Control
            TO = setTimeout(function () {
                RecursiveAnimate(next);
            }, para.time_span + para.animate.timespan);
        }

        //Control
        function GalleryGo(index) {
            $("#Gallery-TimeLine-Cursor-" + para.GUID).stop().css("width", "0%");
            clearTimeout(TO);
            $(sender).html("<div class='Gallery-Pic-Style-" + para.GUID + "' id='Gallery-Pic-" + index + "-" + para.GUID + "' style='position:absolute;overflow:hidden;width:" + para.screen_width + "px;height:" + para.screen_height + "px;'><img src='" + para.res[index] + "' width='" + para.screen_width + "px' height='" + para.screen_height + "px' alt='Hypnoz'  /></div>");
            RecursiveAnimate(index);
        }
        $(".Gallery-Control-Style-" + para.GUID).click(function (event) {
            var id = $(event.target).attr("id");
            var t = id.split("-")[2];
            GalleryGo(t);
        });
    }


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
                marginTop: "10",
                col: "6",
                title: "default"
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
        $(window).resize(function (event) {
            $(".Flipper-Style-Screen").css("height", document.documentElement.clientHeight).css("width", document.documentElement.clientWidth);
            $("#flipper_unblanked_container").css("height", document.documentElement.clientHeight).css("width", document.documentElement.clientWidth);
        });

        var row = 1;
        $("#flipper_blanked_container").children("table").attr("width", para.view.width * para.view.col);
        $("#flipper_blanked_container").children("table").children("tbody").children("tr").each(function () {
            var tds = $(this).children('td');
            var col = 1;
            var control_panel_tr = $("<tr />");
            $(tds).each(function () {
                var div = $(this).children('div');
                $(div).attr("id", "Flipper-DIV-" + row + "-" + col).attr("class","Flipper-Style-Screen");
                $(div).css("text-align", "center").css("display", 'table-cell').css("vertical-align", "middle").css("width", para.view.item_width).css("height", para.view.item_height + 'px');
                var control_panel_td = $("<td />");
                control_panel_td.appendTo(control_panel_tr);
                var control_panel_div = $("<div />").css('width', para.control.rect).css('height', para.control.rect).attr('id', 'Control-Btn-' + row + '-' + col);
                control_panel_div.appendTo(control_panel_td);
                if ($(div).html() != null) {
                    if ($(div).html().length > 0) {
                        $(control_panel_div).attr("class", "Control-Btn-Active").css("cursor", "pointer");
                    }
                }
                control_panel_tr.appendTo(control_panel);
                col++;
            });
            row++;
        });



        var ControlGrid = $(control_panel).outerHTML();
        var WholeControl = "<table><tr><td id = 'Control-Arrow'>"
        + "<table><tr><td><div></div></td><td><div><img  id='Control-Arrow-Up' src='Include/Image/arrow-up.png' alt='arrow' /></div></td><td><div></div></td></tr><tr><td><div><img id='Control-Arrow-Left' src='Include/Image/arrow-left.png' alt='arrow' /></div></td><td><div></div></td><td><div><img id='Control-Arrow-Right' src='Include/Image/arrow-right.png' alt='arrow' /></div></td></tr><tr><td><div></div></td><td><div><img id='Control-Arrow-Down' src='Include/Image/arrow-down.png' alt='arrow' /></div></td><td><div></div></td></tr></table>"
        + "</td><td>" + ControlGrid + "</td></tr></table>";
        $(para.control.el).html(WholeControl).css("z-index", "999");

        $(".Control-Btn-Active").click(function (e) {
            var current_row = $(e.target).attr("id").split("-")[2];
            var current_col = $(e.target).attr("id").split("-")[3];
            var l = $("#Flipper-DIV-" + current_row + "-" + current_col).position().left;
            var t = $("#Flipper-DIV-" + current_row + "-" + current_col).position().top;
            Go(l, t, current_row, current_col);
            ControlGo(current_row, current_col);
        });

        $("#Control-Arrow-Up").click(function (e) {
            var row = parseInt($("#Control-Arrow").attr("row")) - 1;
            var col = $("#Control-Arrow").attr("col");
            var l = $("#Flipper-DIV-" + row + "-" + col).position().left;
            var t = $("#Flipper-DIV-" + row + "-" + col).position().top;
            Go(l, t, row, col);
            ControlGo(row, col);
        });
        $("#Control-Arrow-Down").click(function (e) {
            var row = parseInt($("#Control-Arrow").attr("row")) + 1;
            var col = $("#Control-Arrow").attr("col");
            var l = $("#Flipper-DIV-" + row + "-" + col).position().left;
            var t = $("#Flipper-DIV-" + row + "-" + col).position().top;
            Go(l, t, row, col);
            ControlGo(row, col);
        });
        $("#Control-Arrow-Left").click(function (e) {
            var row = $("#Control-Arrow").attr("row");
            var col = parseInt($("#Control-Arrow").attr("col")) - 1;
            var l = $("#Flipper-DIV-" + row + "-" + col).position().left;
            var t = $("#Flipper-DIV-" + row + "-" + col).position().top;
            Go(l, t, row, col);
            ControlGo(row, col);
        });
        $("#Control-Arrow-Right").click(function (e) {
            var row = $("#Control-Arrow").attr("row");
            var col = parseInt($("#Control-Arrow").attr("col")) + 1;
            var l = $("#Flipper-DIV-" + row + "-" + col).position().left;
            var t = $("#Flipper-DIV-" + row + "-" + col).position().top;
            Go(l, t, row, col);
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

        function Go(l, t, row, col) {
            //Title
            $(para.view.title).text(Flipper[row + "-" + col]["title"]);

            //Move
            l = (-1) * (l - para.view.marginLeft);
            t = (-1) * (t - para.view.marginTop);
            $('#flipper_blanked_container').animate({
                left: l + 'px'
            }, 500).animate({
                top: t + 'px'
            }, 500, function () {
                RefineMouseMove();
            });
        }
    }

    //Addon MouseMove Share for Both Flipper and Flipper
    var base_left, base_top
    function RefineMouseMove() {
        /*
        base_left = parseInt($("#flipper_blanked_container").css("left"));
        base_top = parseInt($("#flipper_blanked_container").css("top"));
        

        $(document).mouseover(function (event) {
        var center_x = $(document).width() / 2;
        var center_y = $(document).height() / 2;
        var mouse_x = mouseCoords(event).x;
        var mouse_y = mouseCoords(event).y;
        var l = (mouse_x - center_x) / 7 * (-1);
        var t = (mouse_y - center_y) / 7 * (-1);
            
        $("#flipper_blanked_container").animate({
        left: base_left + l,
        top: base_top + t
        }, 0);
        });
        */
    }

    $.fn.FlipperGo = function (current_row, current_col) {
        //Title
        //Remind #Title
        $("#Title").text(Flipper[(current_row) + "-" + (current_col)]["title"]);

        var l = $("#Flipper-DIV-" + current_row + "-" + current_col).position().left;
        var t = $("#Flipper-DIV-" + current_row + "-" + current_col).position().top;
        l = (-1) * (l)//- para.view.marginLeft);
        t = (-1) * (t)//- para.view.marginTop);
        $('#flipper_blanked_container').animate({
            left: l + 'px'
        }, 500).animate({
            top: t + 'px'
        }, 500, function () {
            RefineMouseMove();
        });

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

    $.fn.SlideTransform = function (json) {
        var default_para = {
            col: 1,
            row: 100,
            timespan: 3000,
            direct: [1, 1]
        };
        var para = $.extend({}, default_para, json);
        var sender = $(this);

        var l = 0; //Math.ceil($(sender).position().left);
        var t = 0; //Math.ceil($(sender).position().top);

        $(sender).find("img").load(function () {
            var w = this.width;
            var h = this.height;
            var src = this.src;
            $(sender).wrap("<div id='Slide-Container' style='width:" + w + "px;height:" + h + "px;position: relative; overflow: hidden' />");
            for (var j = 0; j < para.row; j++) {
                for (var i = 0; i < para.col; i++) {
                    var div = $(sender).clone().html("");
                    var w_div = Math.ceil(w / para.col);
                    var h_div = Math.ceil(h / para.row);
                    div.css("position", "absolute").css('background-image', 'url(' + src + ')').css("display", "block");
                    div.css("width", w_div).css("left", l + w_div * i);
                    div.css("height", h_div).css("top", t + h_div * j);
                    div.css("background-position", (-1) * w_div * i + "px " + (-1) * h_div * j + "px");
                    $(div).appendTo($("#Slide-Container"));
                    $(sender).hide();
                    if (para.row > 1 && para.col > 1) {
                        $(div).delay(para.timespan / para.row * j / para.col * i).animate({
                            left: w * para.direct[0],
                            top: h * para.direct[1]
                        });
                    }
                    else if (para.row > 1) {
                        $(div).delay(para.timespan / para.row * j).animate({
                            left: para.direct[0] * w
                        });
                    } else if (para.col > 1) {
                        $(div).delay(para.timespan / para.col * i).animate({
                            top: h * para.direct[1]
                        });
                    }

                }
            }
        });
    }



    $.fn.SubjectReader = function (json) {
        var default_para = {
            screen_height: '800px',
            screen_width: '1200px',
            focus: "focus"
        };
        var para = $.extend({}, default_para, json);
        var sender = $(this);

        $(sender).css("height", para.screen_height).css("width", para.screen_width).css("position", "relative").css("overflow", "hidden");
        $("#" + para.focus).css("z-index", 2);

        //Generate ratio for every div in the container
        var random = new Array();
        $(sender).find("div").each(function (index, target) {
            var r = Math.random() * 2 + 1;
            random[index] = r;
        });

        $(sender).find("div#focus").each(function (index, target) {
            var ll = center(target).x;
            var tt = center(target).y;
            $(target).css("position", "absolute").css("left", ll).css("top", tt);

            $(document).mousemove(function (event) {
                var mouse_x = mouseCoords(event).x;
                var mouse_y = mouseCoords(event).y;
                var center_x = center(target).x;
                var center_y = center(target).y;
                if ($(target).attr("id") == para.focus) {
                    var l = center_x + (mouse_x - center_x) / 6 * (-1);
                    var t = center_y + (mouse_y - center_y) / 6 * (-1);
                    $(target).css("z-index", 2);
                    $(target).transform({
                        scale: 1
                    });
                    $(target).animate({
                        left: l, top: t
                    }, 0);
                } else {
                    var l = center_x + (mouse_x - center_x) / random[index] * (-1);
                    var t = center_y + (mouse_y - center_y) / random[index] * (-1);
                    $(target).css("z-index", 1);
                    $(target).transform({
                        scale: 0.8
                    });
                    $(target).animate({
                        left: l + (1 - random[index]) * 100, top: t + (1 - random[index]) * 100
                    }, 0);
                }

            });

            /*$(target).click(function (event) {
            x($(event.target).attr("id"));
            para.focus = $(event.target).attr("id");
            $(sender).SubjectReader(para);
            });*/
        });
    }

    //get mouse coords
    function mouseCoords(ev) {
        if (ev.pageX || ev.pageY) {
            return { x: ev.pageX, y: ev.pageY };
        }
        return {
            x: ev.clientX + document.body.scrollLeft - document.body.clientLeft,
            y: ev.clientY + document.body.scrollTop - document.body.clientTop
        };
    }

    //get target center coord
    function center(target) {
        var windowWidth = document.body.scrollWidth;
        var windowHeight = document.body.scrollHeight;
        var popupHeight = $(target).height();
        var popupWidth = $(target).width();
        var y = windowHeight / 2 - popupHeight / 2;
        var x = windowWidth / 2 - popupWidth / 2;
        return { 'x': x, 'y': y };
    }

    $.fn.button = function (json) {
        var sender = $(this);
        $(sender).css("padding", "0.3em 0.7em").css("border", 0);
        $(sender).css("cursor", "pointer");
        $(sender).RountRect("5px");
        $(sender).css("background-color", "#9F9F9F").css("color", "White").css("opacity", "0.5");
        $(sender).hover(function (event) {
            $(event.target).css("background-color", "rgb(9,93,122)").css("color", "White").stop().animate({ "opacity": "1" });
        }, function (event) {
            $(event.target).css("background-color", "#9F9F9F").css("color", "White").stop().animate({ "opacity": "0.5" });
        });
    }
    $.fn.RountRect = function (degree) {
        var sender = $(this)
        $(sender).css("-moz-border-radius-bottomright", degree).css("-webkit-border-bottom-right-radius", degree).css("-khtml-border-bottom-right-radius", degree).css("border-bottom-right-radius", degree);
        $(sender).css("-moz-border-radius-bottomleft", degree).css("-webkit-border-bottom-left-radius", degree).css("-khtml-border-bottom-left-radius", degree).css("border-bottom-left-radius", degree);
        $(sender).css("-moz-border-radius-topright", degree).css("-webkit-border-top-right-radius", degree).css("-khtml-border-top-right-radius", degree).css("border-top-right-radius", degree);
        $(sender).css("-moz-border-radius-topleft", degree).css("-webkit-border-top-left-radius", degree).css("-khtml-border-top-left-radius", degree).css("border-top-left-radius", degree);
    }
    function x(i) {
        //console.info(i);
    }
})(jQuery);