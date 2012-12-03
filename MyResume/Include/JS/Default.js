$(function () {

    var win_width = document.documentElement.clientWidth;
    var win_height = document.documentElement.clientHeight;

    $("#Content").Flipper({
        control: {
            el: "#Control",
            rect: "12"
        },
        view: {
            width: win_width,
            height: win_height,
            item_width: win_width - 2,
            item_height: win_height - 2,
            marginLeft: 0,
            marginTop: 0,
            col: 7,
            title: "#Title"
        }
    });
    $("#Control").locate({
        vertical: 'bottom',
        horizontal: 'center'
    });
    $("#Title").locate({
        vertical: 'top',
        horizontal: 'center'
    });

    //Grid
    $(".mosaic_proj").css("height", "250px").css("width", "300px").Mosaic({ style: 'magnify', action: '$("#Content").FlipperGo(2, 1);' });
    $(".mosaic_edu").css("height", "250px").css("width", "300px").Mosaic({ style: 'magnify', action: '$("#Content").FlipperGo(4, 1);' });
    $(".mosaic_skill").css("height", "250px").css("width", "300px").Mosaic({ style: 'magnify', action: '$("#Content").FlipperGo(5, 1);' });
    $(".mosaic_trans").css("height", "250px").css("width", "300px").Mosaic({ style: 'magnify', action: '$("#Content").FlipperGo(4, 2);' });
    $(".mosaic_job").css("height", "250px").css("width", "300px").Mosaic({ style: 'magnify', action: '$("#Content").FlipperGo(3, 1);' });
    $(".mosaic_ovewview").css("height", "250px").css("width", "300px").Mosaic({ style: 'magnify', action: '$("#Content").FlipperGo(5, 1);' });

    $("#zap_com").css("width", "500px").Mosaic({ style: "left-info", info: 'Junior Developer in Zap Solutions<br />Asp.Net Development using EntityFramework/Linq, WCF, MVC, TFS, Sharepoint.... <br /> Web-base technology like Jquery, Ajax, Json, Webservice....<br /> Apr 2012 - Dec 2012', action: '$("#Content").FlipperGo(3, 2);' });
    $("#21cn_com").css("width", "500px").Mosaic({ style: "right-info", info: 'Assistant in the 21cn<br / >July 2009 - Aug 2009', action: '$("#Content").FlipperGo(3, 2);' });


    $(".education_tab .upitt").css("width", "400px").height("height", "500px").Mosaic({ style: "left-info", info: 'Web Tech & Std<br />Database Mangement<br />Information Retrieval and Storage<br />Interactive System Design<br />....', action: '$("#Content").FlipperGo(4, 2);' });
    $(".education_tab .sias").css("width", "400px").height("height", "500px").Mosaic({ style: "right-info", info: 'Java Program<br />Sql Server<br />Data Structure<br />Web Design<br />....', action: '$("#Content").FlipperGo(4, 2);' });

    $("#ScriptTab").find("tr:odd").css("color", "White");

    $("#comet_proj").GalleryMul({
        res: img_list.comet.thumb,
        screen_width: 320,
        screen_height: 240,
        time_span: 4000,
        GUID: 'comet',
        pic_width: 1024,
        pic_height: 768,
        detail: {
            left: '10px',
            top: '10px',
            res_detail: img_list.comet.detail,
        }
        , intro: img_list.comet.intro,
        intro_extent: img_list.comet.context,
        action: "$(\"#Content\").FlipperGo(2, 2);",
    });
    $("#zap_proj").GalleryMul({
        res: img_list.zap.thumb,
        screen_width: 320,
        screen_height: 240,
        time_span: 4000,
        GUID: 'zap',
        pic_width: 1024,
        pic_height: 768,
        detail: {
            left: '10px',
            top: '10px',
            res_detail: img_list.zap.detail,
        }
        , intro: img_list.zap.intro,
        intro_extent: img_list.zap.context,
        action: "$(\"#Content\").FlipperGo(3, 2);",
    });
    $("#cn3_proj").GalleryMul({
        res: img_list.cn3.thumb,
        screen_width: 320,
        screen_height: 240,
        time_span: 4000,
        GUID: 'cn3',
        pic_width: 1024,
        pic_height: 768,
        detail: {
            left: '10px',
            top: '10px',
            res_detail: img_list.cn3.detail,
        }
        , intro: img_list.cn3.intro,
        intro_extent: img_list.cn3.context,
        action: "$(\"#Content\").FlipperGo(2, 3);",
    });;
    $("#googleplus_proj").GalleryMul({
        res: img_list.googleplus.thumb,
        screen_width: 320,
        screen_height: 240,
        time_span: 4000,
        GUID: 'gplus',
        pic_width: 1024,
        pic_height: 768,
        detail: {
            left: '10px',
            top: '10px',
            res_detail: img_list.googleplus.detail,
        }
        , intro: img_list.googleplus.intro,
        intro_extent: img_list.googleplus.context,
        action: "$(\"#Content\").FlipperGo(2, 4);",
    });;
    $("#cms_proj").GalleryMul({
        res: img_list.cms.thumb,
        screen_width: 320,
        screen_height: 240,
        time_span: 4000,
        GUID: 'cms',
        pic_width: 1024,
        pic_height: 768,
        detail: {
            left: '10px',
            top: '10px',
            res_detail: img_list.cms.detail,
        },
        intro: img_list.cms.intro,
        intro_extent: img_list.cms.context,
        action: "$(\"#Content\").FlipperGo(2, 5);",
    });;
    $("#salt_proj").GalleryMul({
        res: img_list.salt.thumb,
        screen_width: 320,
        screen_height: 240,
        time_span: 4000,
        GUID: 'salt',
        pic_width: 1024,
        pic_height: 768,
        detail: {
            left: '10px',
            top: '10px',
            res_detail: img_list.salt.detail,
        },
        intro: img_list.salt.intro,
        intro_extent: img_list.salt.context,
        action: "$(\"#Content\").FlipperGo(2, 6);",
    });;


    $("#zap_proj_d").GalleryMulEx({
        res: img_list.zap.detail,
        screen_width: win_width,
        screen_height: win_height - 100,
        time_span: 4000,
        GUID: 'zap_d',
        info: img_list.zap.context,
        detail: {
            left: '10px',
            top: '10px',
            info: img_list.zap.info,
        }
    });
    $("#comet_proj_d").GalleryMulEx({
        res: img_list.comet.detail,
        screen_width: win_width,
        screen_height: win_height - 100,
        time_span: 4000,
        GUID: 'comet_d',
        info: img_list.comet.context,
        detail: {
            left: '10px',
            top: '10px',
            info: img_list.comet.info,
        }
    });
    $("#cn3_proj_d").GalleryMulEx({
        res: img_list.cn3.detail,
        screen_width: win_width,
        screen_height: win_height - 100,
        time_span: 4000,
        GUID: 'cn3_d',
        info: img_list.cn3.context,
        detail: {
            left: '10px',
            top: '10px',
            info: img_list.cn3.info,
        }
    });
    $("#googleplus_proj_d").GalleryMulEx({
        res: img_list.googleplus.detail,
        screen_width: win_width,
        screen_height: win_height - 100,
        time_span: 4000,
        GUID: 'googleplus_d',
        info: img_list.googleplus.context,
        detail: {
            left: '10px',
            top: '10px',
            info: img_list.googleplus.info,
        }
    });
    $("#cms_proj_d").GalleryMulEx({
        res: img_list.cms.detail,
        screen_width: win_width,
        screen_height: win_height - 100,
        time_span: 4000,
        GUID: 'cms_d',
        info: img_list.cms.context,
        detail: {
            left: '10px',
            top: '10px',
            info: img_list.cms.info,
        }
    });
    $("#salt_proj_d").GalleryMulEx({
        res: img_list.salt.detail,
        screen_width: win_width,
        screen_height: win_height - 100,
        time_span: 4000,
        GUID: 'salt_d',
        info: img_list.salt.context,
        detail: {
            left: '10px',
            top: '10px',
            info: img_list.salt.info,
        }
    });

    //Move on Flipper 
    $("#Content").FlipperGo(1, 1);
    //ui
    $("button").button();

    
});