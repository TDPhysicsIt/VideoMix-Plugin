/*
Videomix-Program-Template with two Videoplayers
400 & more Videoeffects and six Crossfade-Modes
FX-Player
FX- & Screenrecord
Videofiltereffects
Three Playlistmodes and many more

(c) 2024 Thomas Dittmar
*/

(function($) {
$.fn.videoMix = function(options) {
    var vidsettings = $.extend({
      "path": "file:///C:/Users/sonvt/Videos/",
      "tracks": ["Morgen fällt die Schule aus - Der Scherz der Woche", "Betragen ungenügend - Rache für Taft!", "Formel 1 Saison 1992 09 Großbritannien", "Formel 1 Saison 1993 11 Ungarn"],
      "extension": ".mp4",
      "pitch": false,
      "pitchrate1": 1,
      "pitchrate2": 1,
      "volume1": 1,
      "volume2": 1,
      "controls": false,
      "autoplay": false,
      "loop": false,
      "muted": false,
      "skiptime": 10,
      "pitchTime": 120,
      "crossfadeMode": "manuel",
      "trackChange": true,
      "tracklistBackground": "#303030",
      "fxboxBackground": "#303030",
      "fxSounds": [
        {
          "name": "vbge1.ogg",
          "label": "vbge1"
        },
        
        {
          "name": "vbge2.ogg",
          "label": "vbge2"
        },
        
        {
          "name": "vbge3.ogg",
          "label": "vbge3"
        },
        
        {
          "name": "vbge4.ogg",
          "label": "vbge4"
        },
        
        {
          "name": "vbge5.ogg",
          "label": "vbge5"
        },
        
        {
          "name": "vbge6.ogg",
          "label": "vbge6"
        },
        
        {
          "name": "vbge7.ogg",
          "label": "vbge7"
        },
        
        {
          "name": "vbge8.ogg",
          "label": "vbge8"
        },
        
        {
          "name": "vbge9.ogg",
          "label": "vbge9"
        },
        
        {
          "name": "vbge10.ogg",
          "label": "vbge10"
        }
      ],
      "fxPath": "file:///C:/Users/sonvt/Music/"
    }, options);
    
    var element = this;
    
    var vidmain = $("<div/>");
    vidmain.css({
      "width": "98%",
      "height": "96%",
      "background": "#151515",
      "border": "4px outset grey",
      "padding": "12px",
      "overflow": "auto"
    });
    
    element.html(vidmain);
    
    var vidtitleBar = $("<div/>");
    vidtitleBar.css({
      "width": "98.2%",
      "height": "30px",
      "background": "#151515",
      "border": "2px outset grey",
      "padding": "4px",
      "font-size": "25px",
      "font-weight": "bold",
      "color": "white"
    }).text("HTML5 VideoMix - Pro");
    
    vidtitleBar.appendTo(vidmain);
    
    var vidArea1 = $("<div/>");
    vidArea1.css({
      "width": "99%",
      "background": "#212121",
      "display": "flex",
      "flex-direction": "row",
      "text-align": "left",
      "margin-bottom": "6px"
    });
    
    vidArea1.appendTo(vidmain);
    
    var vidplayerArea1 = $("<div/>");
    vidplayerArea1.css({
      "width": "42%",
      "height": "440px",
      "background": "#303030",
    });
    
    vidplayerArea1.appendTo(vidArea1);
    
    var vidTools1 = $("<div/>");
    vidTools1.css({
      "width": "16%",
      "height": "440px",
      "background": "#202020",
    });
    
    vidTools1.appendTo(vidArea1);
    
    var vidplayerArea2 = $("<div/>");
    vidplayerArea2.css({
      "width": "42%",
      "height": "440px",
      "background": "#303030",
    });
    
    vidplayerArea2.appendTo(vidArea1);
    
    var vidplayer1 = $("<video id='videoplayer1' style='width:100%;'></video>");
    vidplayer1.css({
      "width": "100%",
      "height": "100%",
      "background": "#151515"
    });
    vidplayer1.appendTo(vidplayerArea1);
    vidplayer1.attr({
      "autoplay": false,
      "loop": false,
      "src": vidsettings.path+vidsettings.tracks[0]+vidsettings.extension,
      "controls": vidsettings.controls
    })
      .prop({
      "preservesPitch": vidsettings.pitch,
      "playbackRate": vidsettings.pitchrate1,
      "volume": vidsettings.volume,
      "muted": vidsettings.muted
    });
    
    var vidplayer2 = $("<video id='videoplayer2' style='width:100%;'></video>");
    vidplayer2.css({
      "width": "100%",
      "height": "100%",
      "background": "#151515"
    });
    vidplayer2.appendTo(vidplayerArea2);
    vidplayer2.attr({
      "autoplay": false,
      "loop": false,
      "src": vidsettings.path+vidsettings.tracks[1]+vidsettings.extension,
      "controls": vidsettings.controls
    })
      .prop({
      "preservesPitch": vidsettings.pitch,
      "playbackRate": vidsettings.pitchrate1,
      "volume": vidsettings.volume,
      "muted": vidsettings.muted
    });
    
    var vtoolbarArea1 = $("<div/>");
    vtoolbarArea1.css({
    "width": vidplayer1.width(),
    "background": "rgba(21,21,21,0.5)",
    "position": "absolute",
    "z-index": "300",
    "left": "10px",
    "top": "10px",
    "display": "none"
  	}).appendTo(element);
    
    var vidtoolbar1 = $("<div/>");
    vidtoolbar1.css({
    "width": "100%",
    "height": "45px",
    "display": "flex",
    "vertical-direction": "row",
    "padding-top": "12px"
  	}).appendTo(vtoolbarArea1);
    
    var vtoolbarArea2 = $("<div/>");
    vtoolbarArea2.css({
    "width": vidplayer2.width(),
    "background": "rgba(21,21,21,0.5)",
    "position": "absolute",
    "z-index": "300",
    "left": "30px",
    "top": "30px",
    "display": "none"
  	}).appendTo(element);
    
    var vidtoolbar2 = $("<div/>");
    vidtoolbar2.css({
    "width": "100%",
    "height": "45px",
    "display": "flex",
    "vertical-direction": "row",
    "padding-top": "12px"
  	}).appendTo(vtoolbarArea2);
    
    var showTool1, showTool2;
  
  vidplayer1.on("mousemove", function() {
    var lpos = vidplayer1.offset().left;
    var tpos = vidplayer1.offset().top + vidplayer1.height() - 45;
    clearTimeout(showTool1);
    vtoolbarArea1.animate({left: lpos + "px", top: tpos + "px"},1).show();
    showTool1 = setTimeout(function() {
      vtoolbarArea1.hide();
    },6000);
  });
    
  vidplayer2.on("mousemove", function() {
    var lpos2 = vidplayer2.offset().left;
    var tpos2 = vidplayer2.offset().top + vidplayer2.height() - 45;
    clearTimeout(showTool2);
    vtoolbarArea2.animate({left: lpos2 + "px", top: tpos2 + "px"},1).show();
    showTool2 = setTimeout(function() {
      vtoolbarArea2.hide();
    },6000);
  });
    
    var vidtoolsBtns1 = $("<button id='playBtn1' class='toolbuttons'>&#9654;</button>&nbsp;<button id='pauseBtn1' class='toolbuttons' style='margin-left:4px; width:40px;'>&#9632;</button>");
  	vidtoolsBtns1.appendTo(vidtoolbar1);
  
  	var vidrewBtn1 = $("<button class='toolbuttons' style='margin-left:4px; width:40px;'>&laquo;</button>");
  	vidrewBtn1.appendTo(vidtoolbar1);
  
  	var vidforwBtn1 = $("<button class='toolbuttons' style='margin-left:4px; width:40px;'>&raquo;</button>");
  	vidforwBtn1.appendTo(vidtoolbar1);
    
  	var vidskiprewBtn = $("<button class='toolbuttons' style='margin-left:4px; width:40px;'>|&laquo;</button>");
  	vidskiprewBtn.css({
    "background": "#202100",
    "border-color": "#202100",
    "display": "none"
  	});
  	vidskiprewBtn.appendTo(vidtoolbar1);
  
  	var vidskipforwBtn = $("<button class='toolbuttons' style='margin-left:4px; width:40px;'>&raquo;|</button>");
  	vidskipforwBtn.css({
    "background": "#202100",
    "border-color": "#202100",
    "display": "none"
  	});
  	vidskipforwBtn.appendTo(vidtoolbar1);
    
    var vidpitchupBtn = $("<button class='toolbuttons' style='margin-left:4px; width:40px;'>&uArr;</button>");
  	vidpitchupBtn.css({
    "background": "#002900",
    "border-color": "#002900",
    "display": "none"
  	});
  	vidpitchupBtn.appendTo(vidtoolbar1);
  
  	var vidpitchdownBtn = $("<button class='toolbuttons' style='margin-left:4px; width:40px;'>&dArr;</button>");
  	vidpitchdownBtn.css({
    "background": "#002900",
    "border-color": "#002900",
    "display": "none"
  	});
  	vidpitchdownBtn.appendTo(vidtoolbar1);
    
    var currentVideo = 0;
  
  	var vidtimeTools1 = $("<div class='timerBox'><div class='time1' id='searchtime1'><div id='progtime1' class='progtime'></div></div><div class='time2' id='playtime1'>0:00 / 0:00</div></div>");
  	vidtimeTools1.appendTo(vidtoolbar1);
    
    
    var vidtoolsBtns2 = $("<button id='playBtn2' class='toolbuttons'>&#9654;</button>&nbsp;<button id='pauseBtn2' class='toolbuttons' style='margin-left:4px; width:40px;'>&#9632;</button>");
  	vidtoolsBtns2.appendTo(vidtoolbar2);
  
  	var vidrewBtn2 = $("<button class='toolbuttons' style='margin-left:4px; width:40px;'>&laquo;</button>");
  	vidrewBtn2.appendTo(vidtoolbar2);
  
  	var vidforwBtn2 = $("<button class='toolbuttons' style='margin-left:4px; width:40px;'>&raquo;</button>");
  	vidforwBtn2.appendTo(vidtoolbar2);
    
  	var vidskiprewBtn2 = $("<button class='toolbuttons' style='margin-left:4px; width:40px;'>|&laquo;</button>");
  	vidskiprewBtn2.css({
    "background": "#202100",
    "border-color": "#202100",
    "display": "none"
  	});
  	vidskiprewBtn2.appendTo(vidtoolbar2);
  
  	var vidskipforwBtn2 = $("<button class='toolbuttons' style='margin-left:4px; width:40px;'>&raquo;|</button>");
  	vidskipforwBtn2.css({
    "background": "#202100",
    "border-color": "#202100",
    "display": "none"
  	});
  	vidskipforwBtn2.appendTo(vidtoolbar2);
    
    var vidpitchupBtn2 = $("<button class='toolbuttons' style='margin-left:4px; width:40px;'>&uArr;</button>");
  	vidpitchupBtn2.css({
    "background": "#002900",
    "border-color": "#002900",
    "display": "none"
  	});
  	vidpitchupBtn2.appendTo(vidtoolbar2);
  
  	var vidpitchdownBtn2 = $("<button class='toolbuttons' style='margin-left:4px; width:40px;'>&dArr;</button>");
  	vidpitchdownBtn2.css({
    "background": "#002900",
    "border-color": "#002900",
    "display": "none"
  	});
  	vidpitchdownBtn2.appendTo(vidtoolbar2);
  
  	var vidtimeTools2 = $("<div class='timerBox'><div class='time1' id='searchtime2'><div id='progtime2' class='progtime'></div></div><div class='time2' id='playtime2'>0:00 / 0:00</div></div>");
  	vidtimeTools2.appendTo(vidtoolbar2);
    
    var crossfadeBox = $("<div/>");
    crossfadeBox.css({
      "width": "100%",
      "text-align": "center",
    });
    
    crossfadeBox.appendTo(vidTools1);
    
    var crossfadeImg = $("<img/>");
    crossfadeImg.css({
      "width": "200px",
      "height": "80px"
    })
      .attr("src", "Symbole/Fade.png");
    
    crossfadeImg.appendTo(crossfadeBox);
    
    var crfadeBox1 = $("<div/>");
    crfadeBox1.css({
      "width": "100%",
      "text-align": "center",
      "margin-top": "6px"
    });
    
    crfadeBox1.appendTo(vidTools1);
    
    var vidfader1 = $("<input type='range' class='slider' style='width:240px; height:20px; background:#00a3ff;'/>");
    vidfader1.attr({
      "max": 1,
      "min": 0,
      "step": 0.01,
      "value": 1
    });
    
    vidfader1.appendTo(crfadeBox1);
    
    var crfadeBox2 = $("<div/>");
    crfadeBox2.css({
      "width": "100%",
      "text-align": "center",
      "margin-top": "6px"
    });
    
    crfadeBox2.appendTo(vidTools1);
    
    var vidfader2 = $("<input type='range' class='slider' style='width:240px; height:20px; background:#00a3ff;'/>");
    vidfader2.attr({
      "max": 1,
      "min": 0,
      "step": 0.01,
      "value": 0
    });
    
    vidfader2.appendTo(crfadeBox2);
    
    var crfadeAttr1 = $("<div/>");
    crfadeAttr1.css({
      "width": "100%",
      "text-align": "center",
      "margin-top": "6px"
    });
    
    crfadeAttr1.appendTo(vidTools1);
    
    var vidcrossFadeMode = $("<select style='width:150px; height:40px; font-weight:bold; font-size: 16px; color:white; background: #212121; border: 4px outset grey; border-radius:6px;'><option value='Fade'>Fade</option><option value='FadeOut'>FadeOut</option><option value='FadeIn'>FadeIn</option><option value='FadeInFast'>FadeInFast</option><option value='FadeTO'>FadeTimeOut</option><option value='FadeInOut'>FadeInOut</option></select>");
    vidcrossFadeMode.appendTo(crfadeAttr1);
    
    var vidcrossFadeTime = $("<input type='number' style='width:80px; height:30px; font-weight:bold; font-size: 16px; color:white; background: #212121; border: 4px outset grey; margin-left:6px; border-radius:6px;'>");
    vidcrossFadeTime.attr({
      "max": 30,
      "min": 0.1,
      "step": 0.1,
      "value": 10
    });
    
    vidcrossFadeTime.appendTo(crfadeAttr1);
    
    var crfadeAttr2 = $("<div/>");
    crfadeAttr2.css({
      "width": "100%",
      "text-align": "center",
      "margin-top": "6px"
    });
    
    crfadeAttr2.appendTo(vidTools1);
    
    var vidEffectMode = $('<select style="width:240px; height:40px; font-weight:bold; font-size: 16px; color:white; background: #212121; border: 4px outset grey; border-radius:6px;"><option value="" style="background:#151515;">No Filter</option><optgroup style="background:green; font-weight:bold; color:yellow;" label="Color &amp; Fading-Effects"><option value="filter1" style="background:#151515; color:white;">Fade Blur</option><option value="filter2" style="background:#151515; color:white;">Fade Dark</option><option value="filter3" style="background:#151515; color:white;">Fade Gray</option><option value="filter4" style="background:#151515; color:white;">Fade Full</option></optgroup><optgroup style="background:red; font-weight:bold; color:yellow;" label="Standard Move-Effects"><option value="filter5" style="background:#151515; color:white;">Zoom InOut</option><option value="filter6" style="background:#151515; color:white;">Zoom OutIn</option><option value="filter7" style="background:#151515; color:white;">Compress Horizontal</option><option value="filter8" style="background:#151515; color:white;">Compress Vertical</option><option value="filter9" style="background:#151515; color:white;">Compress &amp; Rotate horizontal</option><option value="filter10" style="background:#151515; color:white;">Compress &amp; Rotate vertical</option><option value="filter11" style="background:#151515; color:white;">SlideOut horizontal</option><option value="filter12" style="background:#151515; color:white;">SlideOut vertical</option><option value="filter13" style="background:#151515; color:white;">SlideOut diagonal</option><option value="filter14" style="background:#151515; color:white;">SlideOut &amp; compress horizontal</option><option value="filter15" style="background:#151515; color:white;">SlideOut &amp; compress vertical</option><option value="filter16" style="background:#151515; color:white;">SlideOut &amp; compress diagonal</option><option value="filter17" style="background:#151515; color:white;">SlideOut &amp; rotate horizontal</option><option value="filter18" style="background:#151515; color:white;">SlideOut &amp; rotate vertical</option><option value="filter19" style="background:#151515; color:white;">Stretch horizontal</option><option value="filter20" style="background:#151515; color:white;">Stretch vertical</option><option value="filter21" style="background:#151515; color:white;">Stretch diagonal from left to right</option><option value="filter22" style="background:#151515; color:white;">Stretch diagonal from right to left</option><option value="filter23" style="background:#151515; color:white;">Stretch diagonal from top to bottom</option><option value="filter24" style="background:#151515; color:white;">Stretch diagonal from bottom to top</option><option value="filter25" style="background:#151515; color:white;">Pop &amp; Compress horizontal</option><option value="filter26" style="background:#151515; color:white;">Pop &amp; Compress vertical</option><option value="filter27" style="background:#151515; color:white;">Pop &amp; Compress diagonal</option><option value="filter28" style="background:#151515; color:white;">Pop &amp; Rotate horizontal</option><option value="filter29" style="background:#151515; color:white;">Pop &amp; Rotate vertical</option><option value="filter30" style="background:#151515; color:white;">Pop &amp; Rotate diagonal</option></optgroup><optgroup style="background:navy; font-weight:bold; color:yellow;" label="Ellipse Moving-Effects"><option value="filter31" style="background:#151515; color:white;">Zoom-Elipse InOut</option><option value="filter32" style="background:#151515; color:white;">Compress-Elipse Horizontal</option><option value="filter33" style="background:#151515; color:white;">Compress-Elipse Vertical</option><option value="filter34" style="background:#151515; color:white;">Compress &amp; Rotate-Elipse horizontal</option><option value="filter35" style="background:#151515; color:white;">Compress &amp; Rotate-Elipse vertical</option><option value="filter36" style="background:#151515; color:white;">SlideOut &amp; compress-Elipse horizontal</option><option value="filter37" style="background:#151515; color:white;">SlideOut &amp; compress-Elipse vertical</option><option value="filter38" style="background:#151515; color:white;">SlideOut &amp; compress-Elipse diagonal</option><option value="filter39" style="background:#151515; color:white;">SlideOut &amp; rotate-Elipse horizontal</option><option value="filter40" style="background:#151515; color:white;">SlideOut &amp; rotate-Elipse vertical</option><option value="filter41" style="background:#151515; color:white;">Pop &amp; Compress-Elipse horizontal</option><option value="filter42" style="background:#151515; color:white;">Pop &amp; Compress-Elipse vertical</option><option value="filter43" style="background:#151515; color:white;">Pop &amp; Compress-Elipse diagonal</option><option value="filter44" style="background:#151515; color:white;">Pop &amp; Rotate-Elipse horizontal</option><option value="filter45" style="background:#151515; color:white;">Pop &amp; Rotate-Elipse vertical</option><option value="filter46" style="background:#151515; color:white;">Pop &amp; Rotate-Elipse diagonal</option></optgroup><optgroup style="background:purple; font-weight:bold; color:yellow;" label="3D-Standard Moving-Effects"><option value="filter47" style="background:#151515; color:white;">SlideOut horizontal 3D</option><option value="filter48" style="background:#151515; color:white;">SlideOut vertical 3D</option><option value="filter49" style="background:#151515; color:white;">SlideOut diagonal 3D</option><option value="filter50" style="background:#151515; color:white;">SlideOut &amp; compress horizontal 3D</option><option value="filter51" style="background:#151515; color:white;">SlideOut &amp; compress vertical 3D</option><option value="filter52" style="background:#151515; color:white;">SlideOut &amp; compress diagonal 3D</option><option value="filter53" style="background:#151515; color:white;">Pop &amp; Compress horizontal 3D</option><option value="filter54" style="background:#151515; color:white;">Pop &amp; Compress vertical 3D</option><option value="filter55" style="background:#151515; color:white;">Pop &amp; Compress diagonal 3D</option><option value="filter56" style="background:#151515; color:white;">Rotate 3D horizontal left</option><option value="filter57" style="background:#151515; color:white;">Rotate 3D horizontal right</option><option value="filter58" style="background:#151515; color:white;">Rotate 3D vertical up</option><option value="filter59" style="background:#151515; color:white;">Rotate 3D vertical down</option><option value="filter60" style="background:#151515; color:white;">Rotate 3D diagonal up-left</option><option value="filter61" style="background:#151515; color:white;">Rotate 3D diagonal down-right</option></optgroup><optgroup style="background:green; font-weight:bold; color:yellow;" label="3D-Spin- &amp; Moving-Effects"><option value="filter62" style="background:#151515; color:white;">SlideOut horizontal, Spin horizontal &amp; compress 3D</option><option value="filter63" style="background:#151515; color:white;">SlideOut vertical, Spin horizontal &amp; compress 3D</option><option value="filter64" style="background:#151515; color:white;">SlideOut diagonal, Spin horizontal &amp; compress 3D</option><option value="filter65" style="background:#151515; color:white;">SlideOut horizontal, Spin vertical &amp; compress 3D</option><option value="filter66" style="background:#151515; color:white;">SlideOut vertical, Spin vertical &amp; compress 3D</option><option value="filter67" style="background:#151515; color:white;">SlideOut diagonal, Spin vertical &amp; compress 3D</option><option value="filter68" style="background:#151515; color:white;">SlideOut horizontal, Spin diagonal &amp; compress 3D</option><option value="filter69" style="background:#151515; color:white;">SlideOut vertical, Spin diagonal &amp; compress 3D</option><option value="filter70" style="background:#151515; color:white;">SlideOut diagonal, Spin diagonal &amp; compress 3D</option><option value="filter71" style="background:#151515; color:white;">Pop horizontal, Spin horizontal &amp; compress 3D</option><option value="filter72" style="background:#151515; color:white;">Pop vertical, Spin horizontal &amp; compress 3D</option><option value="filter73" style="background:#151515; color:white;">Pop diagonal, Spin horizontal &amp; compress 3D</option><option value="filter74" style="background:#151515; color:white;">Pop horizontal, Spin vertical &amp; compress 3D</option><option value="filter75" style="background:#151515; color:white;">Pop vertical, Spin vertical &amp; compress 3D</option><option value="filter76" style="background:#151515; color:white;">Pop diagonal, Spin vertical &amp; compress 3D</option><option value="filter77" style="background:#151515; color:white;">Pop horizontal, Spin diagonal &amp; compress 3D</option><option value="filter78" style="background:#151515; color:white;">Pop vertical, Spin diagonal &amp; compress 3D</option><option value="filter79" style="background:#151515; color:white;">Pop diagonal, Spin diagonal &amp; compress 3D</option></optgroup><optgroup style="background:red; font-weight:bold; color:yellow;" label="Stretch Moving-Effects"><option value="filter80" style="background:#151515; color:white;">Stretch diagonal left-right &amp; compress</option><option value="filter81" style="background:#151515; color:white;">Stretch diagonal right-left &amp; compress</option><option value="filter82" style="background:#151515; color:white;">Stretch diagonal top-bottom &amp; compress</option><option value="filter83" style="background:#151515; color:white;">Stretch diagonal bottom-top &amp; compress</option><option value="filter84" style="background:#151515; color:white;">Stretch diagonal left-right, SlideOut horizontal &amp; compress</option><option value="filter85" style="background:#151515; color:white;">Stretch diagonal right-left, SlideOut horizontal &amp; compress</option><option value="filter86" style="background:#151515; color:white;">Stretch diagonal top-bottom, SlideOut horizontal &amp; compress</option><option value="filter87" style="background:#151515; color:white;">Stretch diagonal bottom-top, SlideOut horizontal &amp; compress</option><option value="filter88" style="background:#151515; color:white;">Stretch diagonal left-right, SlideOut vertical &amp; compress</option><option value="filter89" style="background:#151515; color:white;">Stretch diagonal right-left, SlideOut vertical &amp; compress</option><option value="filter90" style="background:#151515; color:white;">Stretch diagonal top-bottom, SlideOut vertical &amp; compress</option><option value="filter91" style="background:#151515; color:white;">Stretch diagonal bottom-top, SlideOut vertical &amp; compress</option><option value="filter92" style="background:#151515; color:white;">Stretch diagonal left-right, SlideOut diagonal &amp; compress</option><option value="filter93" style="background:#151515; color:white;">Stretch diagonal right-left, SlideOut diagonal &amp; compress</option><option value="filter94" style="background:#151515; color:white;">Stretch diagonal top-bottom, SlideOut diagonal &amp; compress</option><option value="filter95" style="background:#151515; color:white;">Stretch diagonal bottom-top, SlideOut diagonal &amp; compress</option><option value="filter96" style="background:#151515; color:white;">Stretch diagonal left-right, Pop diagonal &amp; compress</option><option value="filter97" style="background:#151515; color:white;">Stretch diagonal right-left, Pop diagonal &amp; compress</option><option value="filter98" style="background:#151515; color:white;">Stretch diagonal top-bottom, Pop diagonal &amp; compress</option><option value="filter99" style="background:#151515; color:white;">Stretch diagonal bottom-top, Pop diagonal &amp; compress</option></optgroup><optgroup style="background:navy; font-weight:bold; color:yellow;" label="FadeOut Moving-Effects"><option value="filter100" style="background:#151515; color:white;">Zoom-FadeOut InOut</option><option value="filter101" style="background:#151515; color:white;">Zoom-FadeOut OutIn</option><option value="filter102" style="background:#151515; color:white;">Compress-FadeOut Horizontal</option><option value="filter103" style="background:#151515; color:white;">Compress-FadeOut Vertical</option><option value="filter104" style="background:#151515; color:white;">Compress &amp; Rotate-FadeOut horizontal</option><option value="filter105" style="background:#151515; color:white;">Compress &amp; Rotate-FadeOut vertical</option><option value="filter106" style="background:#151515; color:white;">SlideOut &amp; compress-FadeOut horizontal</option><option value="filter107" style="background:#151515; color:white;">SlideOut &amp; compress-FadeOut vertical</option><option value="filter108" style="background:#151515; color:white;">SlideOut &amp; compress-FadeOut diagonal</option><option value="filter109" style="background:#151515; color:white;">SlideOut &amp; rotate-FadeOut horizontal</option><option value="filter110" style="background:#151515; color:white;">SlideOut &amp; rotate-FadeOut vertical</option><option value="filter111" style="background:#151515; color:white;">Pop &amp; Compress-FadeOut horizontal</option><option value="filter112" style="background:#151515; color:white;">Pop &amp; Compress-FadeOut vertical</option><option value="filter113" style="background:#151515; color:white;">Pop &amp; Compress-FadeOut diagonal</option><option value="filter114" style="background:#151515; color:white;">Pop &amp; Rotate-FadeOut horizontal</option><option value="filter115" style="background:#151515; color:white;">Pop &amp; Rotate-FadeOut vertical</option><option value="filter116" style="background:#151515; color:white;">Pop &amp; Rotate-FadeOut diagonal</option></optgroup><optgroup style="background:purple; font-weight:bold; color:yellow;" label="FadeOut &amp; Ellipse Moving-Effects"><option value="filter117" style="background:#151515; color:white;">Zoom-FadeOut-Ellipse InOut</option><option value="filter118" style="background:#151515; color:white;">Zoom-FadeOut-Ellipse OutIn</option><option value="filter119" style="background:#151515; color:white;">Compress-FadeOut-Ellipse Horizontal</option><option value="filter120" style="background:#151515; color:white;">Compress-FadeOut-Ellipse Vertical</option><option value="filter121" style="background:#151515; color:white;">Compress &amp; Rotate-FadeOut-Ellipse horizontal</option><option value="filter122" style="background:#151515; color:white;">Compress &amp; Rotate-FadeOut-Ellipse vertical</option><option value="filter123" style="background:#151515; color:white;">SlideOut &amp; compress-FadeOut-Ellipse horizontal</option><option value="filter124" style="background:#151515; color:white;">SlideOut &amp; compress-FadeOut-Ellipse vertical</option><option value="filter125" style="background:#151515; color:white;">SlideOut &amp; compress-FadeOut-Ellipse diagonal</option><option value="filter126" style="background:#151515; color:white;">SlideOut &amp; rotate-FadeOut-Ellipse horizontal</option><option value="filter127" style="background:#151515; color:white;">SlideOut &amp; rotate-FadeOut-Ellipse vertical</option><option value="filter128" style="background:#151515; color:white;">Pop &amp; Compress-FadeOut-Ellipse horizontal</option><option value="filter129" style="background:#151515; color:white;">Pop &amp; Compress-FadeOut-Ellipse vertical</option><option value="filter130" style="background:#151515; color:white;">Pop &amp; Compress-FadeOut-Ellipse diagonal</option><option value="filter131" style="background:#151515; color:white;">Pop &amp; Rotate-FadeOut-Ellipse horizontal</option><option value="filter132" style="background:#151515; color:white;">Pop &amp; Rotate-FadeOut-Ellipse vertical</option><option value="filter133" style="background:#151515; color:white;">Pop &amp; Rotate-FadeOut-Ellipse diagonal</option></optgroup><optgroup style="background:green; font-weight:bold; color:yellow;" label="3D-Fading-Moving-Effects"><option value="filter134" style="background:#151515; color:white;">SlideOut horizontal 3D-FadeOut</option><option value="filter135" style="background:#151515; color:white;">SlideOut vertical 3D-FadeOut</option><option value="filter136" style="background:#151515; color:white;">SlideOut diagonal 3D-FadeOut</option><option value="filter137" style="background:#151515; color:white;">SlideOut &amp; compress horizontal 3D-FadeOut</option><option value="filter138" style="background:#151515; color:white;">SlideOut &amp; compress vertical 3D-FadeOut</option><option value="filter139" style="background:#151515; color:white;">SlideOut &amp; compress diagonal 3D-FadeOut</option><option value="filter140" style="background:#151515; color:white;">Pop &amp; Compress horizontal 3D-FadeOut</option><option value="filter141" style="background:#151515; color:white;">Pop &amp; Compress vertical 3D-FadeOut</option><option value="filter142" style="background:#151515; color:white;">Pop &amp; Compress diagonal 3D-FadeOut</option><option value="filter143" style="background:#151515; color:white;">Rotate 3D-FadeOut horizontal left</option><option value="filter144" style="background:#151515; color:white;">Rotate-FadeOut 3D horizontal right</option><option value="filter145" style="background:#151515; color:white;">Rotate-FadeOut 3D vertical up</option><option value="filter146" style="background:#151515; color:white;">Rotate-FadeOut 3D vertical down</option><option value="filter147" style="background:#151515; color:white;">Rotate-FadeOut 3D diagonal up-left</option><option value="filter148" style="background:#151515; color:white;">Rotate-FadeOut 3D diagonal down-right</option></optgroup><optgroup style="background:red; font-weight:bold; color:yellow;" label="3D-Fading-Spin- &amp; Moving-Effects"><option value="filter149" style="background:#151515; color:white;">SlideOut horizontal, Spin horizontal &amp; compress 3D-Fading</option><option value="filter150" style="background:#151515; color:white;">SlideOut vertical, Spin horizontal &amp; compress 3D-Fading</option><option value="filter151" style="background:#151515; color:white;">SlideOut diagonal, Spin horizontal &amp; compress 3D-Fading</option><option value="filter152" style="background:#151515; color:white;">SlideOut horizontal, Spin vertical &amp; compress 3D-Fading</option><option value="filter153" style="background:#151515; color:white;">SlideOut vertical, Spin vertical &amp; compress 3D-Fading</option><option value="filter154" style="background:#151515; color:white;">SlideOut diagonal, Spin vertical &amp; compress 3D-Fading</option><option value="filter155" style="background:#151515; color:white;">SlideOut horizontal, Spin diagonal &amp; compress 3D-Fading</option><option value="filter156" style="background:#151515; color:white;">SlideOut vertical, Spin diagonal &amp; compress 3D-Fading</option><option value="filter157" style="background:#151515; color:white;">SlideOut diagonal, Spin diagonal &amp; compress 3D-Fading</option><option value="filter158" style="background:#151515; color:white;">Pop horizontal, Spin horizontal &amp; compress 3D-Fading</option><option value="filter159" style="background:#151515; color:white;">Pop vertical, Spin horizontal &amp; compress 3D-Fading</option><option value="filter160" style="background:#151515; color:white;">Pop diagonal, Spin horizontal &amp; compress 3D-Fading</option><option value="filter161" style="background:#151515; color:white;">Pop horizontal, Spin vertical &amp; compress 3D-Fading</option><option value="filter162" style="background:#151515; color:white;">Pop vertical, Spin vertical &amp; compress 3D-Fading</option><option value="filter163" style="background:#151515; color:white;">Pop diagonal, Spin vertical &amp; compress 3D-Fading</option><option value="filter164" style="background:#151515; color:white;">Pop horizontal, Spin diagonal &amp; compress 3D-Fading</option><option value="filter165" style="background:#151515; color:white;">Pop vertical, Spin diagonal &amp; compress 3D-Fading</option><option value="filter166" style="background:#151515; color:white;">Pop diagonal, Spin diagonal &amp; compress 3D-Fading</option></optgroup><optgroup style="background:navy; font-weight:bold; color:yellow;" label="Stretch Moving-Fading-Effects"><option value="filter167" style="background:#151515; color:white;">Stretch-Fading diagonal left-right &amp; compress</option><option value="filter168" style="background:#151515; color:white;">Stretch-Fading diagonal right-left &amp; compress</option><option value="filter169" style="background:#151515; color:white;">Stretch-Fading diagonal top-bottom &amp; compress</option><option value="filter170" style="background:#151515; color:white;">Stretch-Fading diagonal bottom-top &amp; compress</option><option value="filter171" style="background:#151515; color:white;">Stretch-Fading diagonal left-right, SlideOut horizontal &amp; compress</option><option value="filter172" style="background:#151515; color:white;">Stretch-Fading diagonal right-left, SlideOut horizontal &amp; compress</option><option value="filter173" style="background:#151515; color:white;">Stretch-Fading diagonal top-bottom, SlideOut horizontal &amp; compress</option><option value="filter174" style="background:#151515; color:white;">Stretch-Fading diagonal bottom-top, SlideOut horizontal &amp; compress</option><option value="filter175" style="background:#151515; color:white;">Stretch-Fading diagonal left-right, SlideOut vertical &amp; compress</option><option value="filter176" style="background:#151515; color:white;">Stretch-Fading diagonal right-left, SlideOut vertical &amp; compress</option><option value="filter177" style="background:#151515; color:white;">Stretch-Fading diagonal top-bottom, SlideOut vertical &amp; compress</option><option value="filter178" style="background:#151515; color:white;">Stretch-Fading diagonal bottom-top, SlideOut vertical &amp; compress</option><option value="filter179" style="background:#151515; color:white;">Stretch-Fading diagonal left-right, SlideOut diagonal &amp; compress</option><option value="filter180" style="background:#151515; color:white;">Stretch-Fading diagonal right-left, SlideOut diagonal &amp; compress</option><option value="filter181" style="background:#151515; color:white;">Stretch-Fading diagonal top-bottom, SlideOut diagonal &amp; compress</option><option value="filter182" style="background:#151515; color:white;">Stretch-Fading diagonal bottom-top, SlideOut diagonal &amp; compress</option><option value="filter183" style="background:#151515; color:white;">Stretch-Fading diagonal left-right, Pop diagonal &amp; compress</option><option value="filter184" style="background:#151515; color:white;">Stretch-Fading diagonal right-left, Pop diagonal &amp; compress</option><option value="filter185" style="background:#151515; color:white;">Stretch-Fading diagonal top-bottom, Pop diagonal &amp; compress</option><option value="filter186" style="background:#151515; color:white;">Stretch-Fading diagonal bottom-top, Pop diagonal &amp; compress</option></optgroup><optgroup style="background:purple; font-weight:bold; color:yellow;" label="FadeOut Spin-Moving-Effects"><option value="filter187" style="background:#151515; color:white;">Zoom-Spin-FadeOut InOut</option><option value="filter188" style="background:#151515; color:white;">Zoom-Spin-FadeOut OutIn</option><option value="filter189" style="background:#151515; color:white;">Compress-Spin-FadeOut Horizontal</option><option value="filter190" style="background:#151515; color:white;">Compress-Spin-FadeOut Vertical</option><option value="filter191" style="background:#151515; color:white;">Compress &amp; Rotate-Spin-FadeOut horizontal</option><option value="filter192" style="background:#151515; color:white;">Compress &amp; Rotate-Spin-FadeOut vertical</option><option value="filter193" style="background:#151515; color:white;">SlideOut &amp; compress-Spin-FadeOut horizontal</option><option value="filter194" style="background:#151515; color:white;">SlideOut &amp; compress-Spin-FadeOut vertical</option><option value="filter195" style="background:#151515; color:white;">SlideOut &amp; compress-Spin-FadeOut diagonal</option><option value="filter196" style="background:#151515; color:white;">SlideOut &amp; rotate-Spin-FadeOut horizontal</option><option value="filter197" style="background:#151515; color:white;">SlideOut &amp; rotate-Spin-FadeOut vertical</option><option value="filter198" style="background:#151515; color:white;">Pop &amp; Compress-Spin-FadeOut horizontal</option><option value="filter199" style="background:#151515; color:white;">Pop &amp; Compress-Spin-FadeOut vertical</option><option value="filter200" style="background:#151515; color:white;">Pop &amp; Compress-Spin-FadeOut diagonal</option><option value="filter201" style="background:#151515; color:white;">Pop &amp; Rotate-Spin-FadeOut horizontal</option><option value="filter202" style="background:#151515; color:white;">Pop &amp; Rotate-Spin-FadeOut vertical</option><option value="filter203" style="background:#151515; color:white;">Pop &amp; Rotate-Spin-FadeOut diagonal</option></optgroup><optgroup label="Parable-Horizontal SlideOut-Effects" style="background:green; color:yellow; font-weight:bold;"><option value="filter204" style="background:#151515; color:white;">Parable-Horizontal Compress</option><option value="filter205" style="background:#151515; color:white;">Parable-Horizontal Rotate horizontal</option><option value="filter206" style="background:#151515; color:white;">Parable-Horizontal Rotate vertical</option><option value="filter207" style="background:#151515; color:white;">Parable-Horizontal Rotate 3D-horizontal</option><option value="filter208" style="background:#151515; color:white;">Parable-Horizontal Rotate 3D-vertical</option><option value="filter209" style="background:#151515; color:white;">Parable-Horizontal Rotate 3D-diagonal</option><option value="filter210" style="background:#151515; color:white;">Parable-Horizontal Rotate 2D</option></optgroup><optgroup label="Parable-Horizontal SlideOut-Effects - Elipse" style="background:red; color:yellow; font-weight:bold;"><option value="filter211" style="background:#151515; color:white;">Parable-Horizontal Elipse-Compress</option><option value="filter212" style="background:#151515; color:white;">Parable-Horizontal Elipse-Rotate horizontal</option><option value="filter213" style="background:#151515; color:white;">Parable-Horizontal Elipse-Rotate vertical</option><option value="filter214" style="background:#151515; color:white;">Parable-Horizontal Elipse-Rotate 3D-horizontal</option><option value="filter215" style="background:#151515; color:white;">Parable-Horizontal Elipse-Rotate 3D-vertical</option><option value="filter216" style="background:#151515; color:white;">Parable-Horizontal Elipse-Rotate 3D-diagonal</option><option value="filter217" style="background:#151515; color:white;">Parable-Horizontal Elipse-Rotate 2D</option></optgroup><optgroup label="Parable-Horizontal SlideOut-Effects - FadeOut" style="background:navy; color:yellow; font-weight:bold;"><option value="filter218" style="background:#151515; color:white;">Parable-Horizontal FadeOut-Compress</option><option value="filter219" style="background:#151515; color:white;">Parable-Horizontal FadeOut-Rotate horizontal</option><option value="filter220" style="background:#151515; color:white;">Parable-Horizontal FadeOut-Rotate vertical</option><option value="filter221" style="background:#151515; color:white;">Parable-Horizontal FadeOut-Rotate 3D-horizontal</option><option value="filter222" style="background:#151515; color:white;">Parable-Horizontal FadeOut-Rotate 3D-vertical</option><option value="filter223" style="background:#151515; color:white;">Parable-Horizontal FadeOut-Rotate 3D-diagonal</option><option value="filter224" style="background:#151515; color:white;">Parable-Horizontal FadeOut-Rotate 2D</option></optgroup><optgroup label="Parable-Vertical SlideOut-Effects" style="background:green; color:yellow; font-weight:bold;"><option value="filter225" style="background:#151515; color:white;">Parable-Vertical Compress</option><option value="filter226" style="background:#151515; color:white;">Parable-Vertical Rotate horizontal</option><option value="filter227" style="background:#151515; color:white;">Parable-Vertical Rotate vertical</option><option value="filter228" style="background:#151515; color:white;">Parable-Vertical Rotate 3D-horizontal</option><option value="filter229" style="background:#151515; color:white;">Parable-Vertical Rotate 3D-vertical</option><option value="filter230" style="background:#151515; color:white;">Parable-Vertical Rotate 3D-diagonal</option><option value="filter231" style="background:#151515; color:white;">Parable-Vertical Rotate 2D</option></optgroup><optgroup label="Parable-Vertical SlideOut-Effects - Elipse" style="background:red; color:yellow; font-weight:bold;"><option value="filter232" style="background:#151515; color:white;">Parable-Vertical Elipse-Compress</option><option value="filter233" style="background:#151515; color:white;">Parable-Vertical Elipse-Rotate horizontal</option><option value="filter234" style="background:#151515; color:white;">Parable-Vertical Elipse-Rotate vertical</option><option value="filter235" style="background:#151515; color:white;">Parable-Vertical Elipse-Rotate 3D-horizontal</option><option value="filter236" style="background:#151515; color:white;">Parable-Vertical Elipse-Rotate 3D-vertical</option><option value="filter237" style="background:#151515; color:white;">Parable-Vertical Elipse-Rotate 3D-diagonal</option><option value="filter238" style="background:#151515; color:white;">Parable-Vertical Elipse-Rotate 2D</option></optgroup><optgroup label="Parable-Vertical SlideOut-Effects - FadeOut" style="background:navy; color:yellow; font-weight:bold;"><option value="filter239" style="background:#151515; color:white;">Parable-Vertical FadeOut-Compress</option><option value="filter240" style="background:#151515; color:white;">Parable-Vertical FadeOut-Rotate horizontal</option><option value="filter241" style="background:#151515; color:white;">Parable-Vertical FadeOut-Rotate vertical</option><option value="filter242" style="background:#151515; color:white;">Parable-Vertical FadeOut-Rotate 3D-horizontal</option><option value="filter243" style="background:#151515; color:white;">Parable-Vertical FadeOut-Rotate 3D-vertical</option><option value="filter244" style="background:#151515; color:white;">Parable-Vertical FadeOut-Rotate 3D-diagonal</option><option value="filter245" style="background:#151515; color:white;">Parable-Vertical FadeOut-Rotate 2D</option></optgroup><optgroup label="Parable-Diagonal SlideOut-Effects" style="background:green; color:yellow; font-weight:bold;"><option value="filter246" style="background:#151515; color:white;">Parable-Diagonal Compress</option><option value="filter247" style="background:#151515; color:white;">Parable-Diagonal Rotate horizontal</option><option value="filter248" style="background:#151515; color:white;">Parable-Diagonal Rotate vertical</option><option value="filter249" style="background:#151515; color:white;">Parable-Diagonal Rotate 3D-horizontal</option><option value="filter250" style="background:#151515; color:white;">Parable-Diagonal Rotate 3D-vertical</option><option value="filter251" style="background:#151515; color:white;">Parable-Diagonal Rotate 3D-diagonal</option><option value="filter252" style="background:#151515; color:white;">Parable-Diagonal Rotate 2D</option></optgroup><optgroup label="Parable-Diagonal SlideOut-Effects - Elipse" style="background:red; color:yellow; font-weight:bold;"><option value="filter253" style="background:#151515; color:white;">Parable-Diagonal Elipse-Compress</option><option value="filter254" style="background:#151515; color:white;">Parable-Diagonal Elipse-Rotate horizontal</option><option value="filter255" style="background:#151515; color:white;">Parable-Diagonal Elipse-Rotate vertical</option><option value="filter256" style="background:#151515; color:white;">Parable-Diagonal Elipse-Rotate 3D-horizontal</option><option value="filter257" style="background:#151515; color:white;">Parable-Diagonal Elipse-Rotate 3D-vertical</option><option value="filter258" style="background:#151515; color:white;">Parable-Diagonal Elipse-Rotate 3D-diagonal</option><option value="filter259" style="background:#151515; color:white;">Parable-Diagonal Elipse-Rotate 2D</option></optgroup><optgroup label="Parable-Diagonal SlideOut-Effects - FadeOut" style="background:navy; color:yellow; font-weight:bold;"><option value="filter260" style="background:#151515; color:white;">Parable-Diagonal FadeOut-Compress</option><option value="filter261" style="background:#151515; color:white;">Parable-Diagonal FadeOut-Rotate horizontal</option><option value="filter262" style="background:#151515; color:white;">Parable-Diagonal FadeOut-Rotate vertical</option><option value="filter263" style="background:#151515; color:white;">Parable-Diagonal FadeOut-Rotate 3D-horizontal</option><option value="filter264" style="background:#151515; color:white;">Parable-Diagonal FadeOut-Rotate 3D-vertical</option><option value="filter265" style="background:#151515; color:white;">Parable-Diagonal FadeOut-Rotate 3D-diagonal</option><option value="filter266" style="background:#151515; color:white;">Parable-Diagonal FadeOut-Rotate 2D</option></optgroup><optgroup label="Parable - 3D-Slide horizontal" style="background:green; font-family:; color:yellow; font-weight:bold;"><option value="filter267" style="background:#151515; color:white;">3D-Compress - X-Axis</option><option value="filter268" style="background:#151515; color:white;">3D-Compress - Y-Axis</option><option value="filter269" style="background:#151515; color:white;">3D-Compress - X-Axis - Ellipse</option><option value="filter270" style="background:#151515; color:white;">3D-Compress - Y-Axis - Ellipse</option><option value="filter271" style="background:#151515; color:white;">3D-Compress - X-Axis - FadeOut</option><option value="filter272" style="background:#151515; color:white;">3D-Compress - Y-Axis - FadeOut</option></optgroup><optgroup label="Parable - 3D-Slide vertical" style="background:red; font-family:; color:yellow; font-weight:bold;"><option value="filter273" style="background:#151515; color:white;">3D-Compress - X-Axis</option><option value="filter274" style="background:#151515; color:white;">3D-Compress - Y-Axis</option><option value="filter275" style="background:#151515; color:white;">3D-Compress - X-Axis - Ellipse</option><option value="filter276" style="background:#151515; color:white;">3D-Compress - Y-Axis - Ellipse</option><option value="filter277" style="background:#151515; color:white;">3D-Compress - X-Axis - FadeOut</option><option value="filter278" style="background:#151515; color:white;">3D-Compress - Y-Axis - FadeOut</option></optgroup><optgroup label="Parable - 3D-Slide diagonal" style="background:navy; font-family:; color:yellow; font-weight:bold;"><option value="filter279" style="background:#151515; color:white;">3D-Compress - X-Axis</option><option value="filter280" style="background:#151515; color:white;">3D-Compress - Y-Axis</option><option value="filter281" style="background:#151515; color:white;">3D-Compress - X-Axis - Ellipse</option><option value="filter282" style="background:#151515; color:white;">3D-Compress - Y-Axis - Ellipse</option><option value="filter283" style="background:#151515; color:white;">3D-Compress - X-Axis - FadeOut</option><option value="filter284" style="background:#151515; color:white;">3D-Compress - Y-Axis - FadeOut</option></optgroup><optgroup label="Cube-Parable-Horizontal SlideOut-Effects" style="background:green; color:yellow; font-weight:bold;"><option value="filter285" style="background:#151515; color:white;">Cube-Parable-Horizontal Compress</option><option value="filter286" style="background:#151515; color:white;">Cube-Parable-Horizontal Rotate horizontal</option><option value="filter287" style="background:#151515; color:white;">Cube-Parable-Horizontal Rotate vertical</option><option value="filter288" style="background:#151515; color:white;">Cube-Parable-Horizontal Rotate 3D-horizontal</option><option value="filter289" style="background:#151515; color:white;">Cube-Parable-Horizontal Rotate 3D-vertical</option><option value="filter290" style="background:#151515; color:white;">Cube-Parable-Horizontal Rotate 3D-diagonal</option><option value="filter291" style="background:#151515; color:white;">Cube-Parable-Horizontal Rotate 2D</option></optgroup><optgroup label="Cube-Parable-Horizontal SlideOut-Effects - Elipse" style="background:red; color:yellow; font-weight:bold;"><option value="filter292" style="background:#151515; color:white;">Cube-Parable-Horizontal Elipse-Compress</option><option value="filter293" style="background:#151515; color:white;">Cube-Parable-Horizontal Elipse-Rotate horizontal</option><option value="filter294" style="background:#151515; color:white;">Cube-Parable-Horizontal Elipse-Rotate vertical</option><option value="filter295" style="background:#151515; color:white;">Cube-Parable-Horizontal Elipse-Rotate 3D-horizontal</option><option value="filter296" style="background:#151515; color:white;">Cube-Parable-Horizontal Elipse-Rotate 3D-vertical</option><option value="filter297" style="background:#151515; color:white;">Cube-Parable-Horizontal Elipse-Rotate 3D-diagonal</option><option value="filter298" style="background:#151515; color:white;">Cube-Parable-Horizontal Elipse-Rotate 2D</option></optgroup><optgroup label="Cube-Parable-Horizontal SlideOut-Effects - FadeOut" style="background:navy; color:yellow; font-weight:bold;"><option value="filter299" style="background:#151515; color:white;">Cube-Parable-Horizontal FadeOut-Compress</option><option value="filter300" style="background:#151515; color:white;">Cube-Parable-Horizontal FadeOut-Rotate horizontal</option><option value="filter301" style="background:#151515; color:white;">Cube-Parable-Horizontal FadeOut-Rotate vertical</option><option value="filter302" style="background:#151515; color:white;">Cube-Parable-Horizontal FadeOut-Rotate 3D-horizontal</option><option value="filter303" style="background:#151515; color:white;">Cube-Parable-Horizontal FadeOut-Rotate 3D-vertical</option><option value="filter304" style="background:#151515; color:white;">Cube-Parable-Horizontal FadeOut-Rotate 3D-diagonal</option><option value="filter305" style="background:#151515; color:white;">Cube-Parable-Horizontal FadeOut-Rotate 2D</option></optgroup><optgroup label="Cube-Parable-Vertical SlideOut-Effects" style="background:green; color:yellow; font-weight:bold;"><option value="filter306" style="background:#151515; color:white;">Cube-Parable-Vertical Compress</option><option value="filter307" style="background:#151515; color:white;">Cube-Parable-Vertical Rotate horizontal</option><option value="filter308" style="background:#151515; color:white;">Cube-Parable-Vertical Rotate vertical</option><option value="filter309" style="background:#151515; color:white;">Cube-Parable-Vertical Rotate 3D-horizontal</option><option value="filter310" style="background:#151515; color:white;">Cube-Parable-Vertical Rotate 3D-vertical</option><option value="filter311" style="background:#151515; color:white;">Cube-Parable-Vertical Rotate 3D-diagonal</option><option value="filter312" style="background:#151515; color:white;">Cube-Parable-Vertical Rotate 2D</option></optgroup><optgroup label="Cube-Parable-Vertical SlideOut-Effects - Elipse" style="background:red; color:yellow; font-weight:bold;"><option value="filter313" style="background:#151515; color:white;">Cube-Parable-Vertical Elipse-Compress</option><option value="filter314" style="background:#151515; color:white;">Cube-Parable-Vertical Elipse-Rotate horizontal</option><option value="filter315" style="background:#151515; color:white;">Cube-Parable-Vertical Elipse-Rotate vertical</option><option value="filter316" style="background:#151515; color:white;">Cube-Parable-Vertical Elipse-Rotate 3D-horizontal</option><option value="filter317" style="background:#151515; color:white;">Cube-Parable-Vertical Elipse-Rotate 3D-vertical</option><option value="filter318" style="background:#151515; color:white;">Cube-Parable-Vertical Elipse-Rotate 3D-diagonal</option><option value="filter319" style="background:#151515; color:white;">Cube-Parable-Vertical Elipse-Rotate 2D</option></optgroup><optgroup label="Cube-Parable-Vertical SlideOut-Effects - FadeOut" style="background:navy; color:yellow; font-weight:bold;"><option value="filter320" style="background:#151515; color:white;">Cube-Parable-Vertical FadeOut-Compress</option><option value="filter321" style="background:#151515; color:white;">Cube-Parable-Vertical FadeOut-Rotate horizontal</option><option value="filter322" style="background:#151515; color:white;">Cube-Parable-Vertical FadeOut-Rotate vertical</option><option value="filter323" style="background:#151515; color:white;">Cube-Parable-Vertical FadeOut-Rotate 3D-horizontal</option><option value="filter324" style="background:#151515; color:white;">Cube-Parable-Vertical FadeOut-Rotate 3D-vertical</option><option value="filter325" style="background:#151515; color:white;">Cube-Parable-Vertical FadeOut-Rotate 3D-diagonal</option><option value="filter326" style="background:#151515; color:white;">Cube-Parable-Vertical FadeOut-Rotate 2D</option></optgroup><optgroup label="Cube-Parable-Diagonal SlideOut-Effects" style="background:green; color:yellow; font-weight:bold;"><option value="filter327" style="background:#151515; color:white;">Cube-Parable-Diagonal Compress</option><option value="filter328" style="background:#151515; color:white;">Cube-Parable-Diagonal Rotate horizontal</option><option value="filter329" style="background:#151515; color:white;">Cube-Parable-Diagonal Rotate vertical</option><option value="filter330" style="background:#151515; color:white;">Cube-Parable-Diagonal Rotate 3D-horizontal</option><option value="filter331" style="background:#151515; color:white;">Cube-Parable-Diagonal Rotate 3D-vertical</option><option value="filter332" style="background:#151515; color:white;">Cube-Parable-Diagonal Rotate 3D-diagonal</option><option value="filter333" style="background:#151515; color:white;">Cube-Parable-Diagonal Rotate 2D</option></optgroup><optgroup label="Cube-Parable-Diagonal SlideOut-Effects - Elipse" style="background:red; color:yellow; font-weight:bold;"><option value="filter334" style="background:#151515; color:white;">Cube-Parable-Diagonal Elipse-Compress</option><option value="filter335" style="background:#151515; color:white;">Cube-Parable-Diagonal Elipse-Rotate horizontal</option><option value="filter336" style="background:#151515; color:white;">Cube-Parable-Diagonal Elipse-Rotate vertical</option><option value="filter337" style="background:#151515; color:white;">Cube-Parable-Diagonal Elipse-Rotate 3D-horizontal</option><option value="filter338" style="background:#151515; color:white;">Cube-Parable-Diagonal Elipse-Rotate 3D-vertical</option><option value="filter339" style="background:#151515; color:white;">Cube-Parable-Diagonal Elipse-Rotate 3D-diagonal</option><option value="filter340" style="background:#151515; color:white;">Cube-Parable-Diagonal Elipse-Rotate 2D</option></optgroup><optgroup label="Cube-Parable-Diagonal SlideOut-Effects - FadeOut" style="background:navy; color:yellow; font-weight:bold;"><option value="filter341" style="background:#151515; color:white;">Cube-Parable-Diagonal FadeOut-Compress</option><option value="filter342" style="background:#151515; color:white;">Cube-Parable-Diagonal FadeOut-Rotate horizontal</option><option value="filter343" style="background:#151515; color:white;">Cube-Parable-Diagonal FadeOut-Rotate vertical</option><option value="filter344" style="background:#151515; color:white;">Cube-Parable-Diagonal FadeOut-Rotate 3D-horizontal</option><option value="filter345" style="background:#151515; color:white;">Cube-Parable-Diagonal FadeOut-Rotate 3D-vertical</option><option value="filter346" style="background:#151515; color:white;">Cube-Parable-Diagonal FadeOut-Rotate 3D-diagonal</option><option value="filter347" style="background:#151515; color:white;">Cube-Parable-Diagonal FadeOut-Rotate 2D</option></optgroup><optgroup label="Cube-Parable - 3D-Slide horizontal" style="background:green; font-family:; color:yellow; font-weight:bold;"><option value="filter348" style="background:#151515; color:white;">3D-Compress - X-Axis</option><option value="filter349" style="background:#151515; color:white;">3D-Compress - Y-Axis</option><option value="filter350" style="background:#151515; color:white;">3D-Compress - X-Axis - Ellipse</option><option value="filter351" style="background:#151515; color:white;">3D-Compress - Y-Axis - Ellipse</option><option value="filter352" style="background:#151515; color:white;">3D-Compress - X-Axis - FadeOut</option><option value="filter353" style="background:#151515; color:white;">3D-Compress - Y-Axis - FadeOut</option></optgroup><optgroup label="Cube-Parable - 3D-Slide vertical" style="background:red; font-family:; color:yellow; font-weight:bold;"><option value="filter354" style="background:#151515; color:white;">3D-Compress - X-Axis</option><option value="filter355" style="background:#151515; color:white;">3D-Compress - Y-Axis</option><option value="filter356" style="background:#151515; color:white;">3D-Compress - X-Axis - Ellipse</option><option value="filter357" style="background:#151515; color:white;">3D-Compress - Y-Axis - Ellipse</option><option value="filter358" style="background:#151515; color:white;">3D-Compress - X-Axis - FadeOut</option><option value="filter359" style="background:#151515; color:white;">3D-Compress - Y-Axis - FadeOut</option></optgroup><optgroup label="Cube-Parable - 3D-Slide diagonal" style="background:navy; font-family:; color:yellow; font-weight:bold;"><option value="filter360" style="background:#151515; color:white;">3D-Compress - X-Axis</option><option value="filter361" style="background:#151515; color:white;">3D-Compress - Y-Axis</option><option value="filter362" style="background:#151515; color:white;">3D-Compress - X-Axis - Ellipse</option><option value="filter363" style="background:#151515; color:white;">3D-Compress - Y-Axis - Ellipse</option><option value="filter364" style="background:#151515; color:white;">3D-Compress - X-Axis - FadeOut</option><option value="filter365" style="background:#151515; color:white;">3D-Compress - Y-Axis - FadeOut</option></optgroup><optgroup label="Zoom-Parable - Standard" style="background:green; color:yellow; font-weight:bold;"><option value="filter366" style="background:#151515; color:white;">Zoom</option><option value="filter367" style="background:#151515; color:white;">Zoom &amp; Slide horizontal</option><option value="filter368" style="background:#151515; color:white;">Zoom &amp; Slide vertical</option><option value="filter369" style="background:#151515; color:white;">Zoom &amp; Slide diagonal</option><option value="filter370" style="background:#151515; color:white;">Zoom &amp; Pop horizontal</option><option value="filter371" style="background:#151515; color:white;">Zoom &amp; Pop vertical</option><option value="filter372" style="background:#151515; color:white;">Zoom &amp; Pop diagonal</option><option value="filter373" style="background:#151515; color:white;">Zoom &amp; Slide horizontal - Parable</option><option value="filter374" style="background:#151515; color:white;">Zoom &amp; Slide vertical - Parable</option><option value="filter375" style="background:#151515; color:white;">Zoom &amp; Slide diagonal - Parable</option><option value="filter376" style="background:#151515; color:white;">Zoom &amp; Slide horizontal - Cube-Parable</option><option value="filter377" style="background:#151515; color:white;">Zoom &amp; Slide vertical - Cube-Parable</option><option value="filter378" style="background:#151515; color:white;">Zoom &amp; Slide diagonal - Cube-Parable</option></optgroup><optgroup label="Zoom-Parable - Ellipse" style="background:red; color:yellow; font-weight:bold;"><option value="filter379" style="background:#151515; color:white;">Zoom - Ellipse</option><option value="filter380" style="background:#151515; color:white;">Zoom &amp; Slide horizontal - Ellipse</option><option value="filter381" style="background:#151515; color:white;">Zoom &amp; Slide vertical - Ellipse</option><option value="filter382" style="background:#151515; color:white;">Zoom &amp; Slide diagonal - Ellipse</option><option value="filter383" style="background:#151515; color:white;">Zoom &amp; Pop horizontal - Ellipse</option><option value="filter384" style="background:#151515; color:white;">Zoom &amp; Pop vertical - Ellipse</option><option value="filter385" style="background:#151515; color:white;">Zoom &amp; Pop diagonal - Ellipse</option><option value="filter386" style="background:#151515; color:white;">Zoom &amp; Slide horizontal - Parable - Ellipse</option><option value="filter387" style="background:#151515; color:white;">Zoom &amp; Slide vertical - Parable - Ellipse</option><option value="filter388" style="background:#151515; color:white;">Zoom &amp; Slide diagonal - Parable - Ellipse</option><option value="filter389" style="background:#151515; color:white;">Zoom &amp; Slide horizontal - Cube-Parbable - Ellipse</option><option value="filter390" style="background:#151515; color:white;">Zoom &amp; Slide vertical - Cube-Parable - Ellipse</option><option value="filter391" style="background:#151515; color:white;">Zoom &amp; Slide diagonal - Cube-Parable - Ellipse</option></optgroup><optgroup label="Zoom-Parable - FadeOut" style="background:navy; color:yellow; font-weight:bold;"><option value="filter392" style="background:#151515; color:white;">Zoom - FadeOut</option><option value="filter393" style="background:#151515; color:white;">Zoom &amp; Slide horizontal - FadeOut</option><option value="filter394" style="background:#151515; color:white;">Zoom &amp; Slide vertical - FadeOut</option><option value="filter395" style="background:#151515; color:white;">Zoom &amp; Slide diagonal - FadeOut</option><option value="filter396" style="background:#151515; color:white;">Zoom &amp; Pop horizontal - FadeOut</option><option value="filter397" style="background:#151515; color:white;">Zoom &amp; Pop vertical - FadeOut</option><option value="filter398" style="background:#151515; color:white;">Zoom &amp; Pop diagonal - FadeOut</option><option value="filter399" style="background:#151515; color:white;">Zoom &amp; Slide horizontal - Parable - FadeOut</option><option value="filter400" style="background:#151515; color:white;">Zoom &amp; Slide vertical - Parable - FadeOut</option><option value="filter401" style="background:#151515; color:white;">Zoom &amp; Slide diagonal - Parable - FadeOut</option><option value="filter402" style="background:#151515; color:white;">Zoom &amp; Slide horizontal - Cube-Parable - FadeOut</option><option value="filter403" style="background:#151515; color:white;">Zoom &amp; Slide vertical - Cube-Parable - FadeOut</option><option value="filter404" style="background:#151515; color:white;">Zoom &amp; Slide diagonal - Cube-Parbable - FadeOut</option></optgroup><optgroup label="Zoom-Parable - 3D Turn-90deg X-Axis" style="background:purple; color:yellow; font-weight:bold;"><option value="filter405" style="background:#151515; color:white;">Zoom - 3D Turn-90deg X-Axis</option><option value="filter406" style="background:#151515; color:white;">Zoom &amp; Slide horizontal - 3D Turn-90deg X-Axis</option><option value="filter407" style="background:#151515; color:white;">Zoom &amp; Slide vertical - 3D Turn-90deg X-Axis</option><option value="filter408" style="background:#151515; color:white;">Zoom &amp; Slide diagonal - 3D Turn-90deg X-Axis</option><option value="filter409" style="background:#151515; color:white;">Zoom &amp; Pop horizontal - 3D Turn-90deg X-Axis</option><option value="filter410" style="background:#151515; color:white;">Zoom &amp; Pop vertical - 3D Turn-90deg X-Axis</option><option value="filter411" style="background:#151515; color:white;">Zoom &amp; Pop diagonal - 3D Turn-90deg X-Axis</option><option value="filter412" style="background:#151515; color:white;">Zoom &amp; Slide horizontal - Parable - 3D Turn-90deg X-Axis</option><option value="filter413" style="background:#151515; color:white;">Zoom &amp; Slide vertical - Parable - 3D Turn-90deg X-Axis</option><option value="filter414" style="background:#151515; color:white;">Zoom &amp; Slide diagonal - Parable - 3D Turn-90deg X-Axis</option><option value="filter415" style="background:#151515; color:white;">Zoom &amp; Slide horizontal - Cube-Parable - 3D Turn-90deg X-Axis</option><option value="filter416" style="background:#151515; color:white;">Zoom &amp; Slide vertical - Cube-Parable - 3D Turn-90deg X-Axis</option><option value="filter417" style="background:#151515; color:white;">Zoom &amp; Slide diagonal - Cube-Parable - 3D Turn-90deg X-Axis</option></optgroup><optgroup label="Zoom-Parable - 3D Turn-90deg Y-Axis" style="background:#4B088A; color:yellow; font-weight:bold;"><option value="filter418" style="background:#151515; color:white;">Zoom - 3D Turn-90deg Y-Axis</option><option value="filter419" style="background:#151515; color:white;">Zoom &amp; Slide horizontal - 3D Turn-90deg Y-Axis</option><option value="filter420" style="background:#151515; color:white;">Zoom &amp; Slide vertical - 3D Turn-90deg Y-Axis</option><option value="filter421" style="background:#151515; color:white;">Zoom &amp; Slide diagonal - 3D Turn-90deg Y-Axis</option><option value="filter422" style="background:#151515; color:white;">Zoom &amp; Pop horizontal - 3D Turn-90deg Y-Axis</option><option value="filter423" style="background:#151515; color:white;">Zoom &amp; Pop vertical - 3D Turn-90deg Y-Axis</option><option value="filter424" style="background:#151515; color:white;">Zoom &amp; Pop diagonal - 3D Turn-90deg Y-Axis</option><option value="filter425" style="background:#151515; color:white;">Zoom &amp; Slide horizontal - Parable - 3D Turn-90deg Y-Axis</option><option value="filter426" style="background:#151515; color:white;">Zoom &amp; Slide vertical - Parable - 3D Turn-90deg Y-Axis</option><option value="filter427" style="background:#151515; color:white;">Zoom &amp; Slide diagonal - Parable - 3D Turn-90deg Y-Axis</option><option value="filter428" style="background:#151515; color:white;">Zoom &amp; Slide horizontal - Cube-Parable - 3D Turn-90deg Y-Axis</option><option value="filter429" style="background:#151515; color:white;">Zoom &amp; Slide vertical - Cube-Parable - 3D Turn-90deg Y-Axis</option><option value="filter430" style="background:#151515; color:white;">Zoom &amp; Slide diagonal - Cube-Parable - 3D Turn-90deg Y-Axis</option></optgroup><optgroup label="Zoom-Parable - 3D Turn-90deg XY-Axis" style="background:purple; color:yellow; font-weight:bold;"><option value="filter431" style="background:#151515; color:white;">Zoom - 3D Turn-90deg XY-Axis</option><option value="filter432" style="background:#151515; color:white;">Zoom &amp; Slide horizontal - 3D Turn-90deg XY-Axis</option><option value="filter433" style="background:#151515; color:white;">Zoom &amp; Slide vertical - 3D Turn-90deg XY-Axis</option><option value="filter434" style="background:#151515; color:white;">Zoom &amp; Slide diagonal - 3D Turn-90deg XY-Axis</option><option value="filter435" style="background:#151515; color:white;">Zoom &amp; Pop horizontal - 3D Turn-90deg XY-Axis</option><option value="filter436" style="background:#151515; color:white;">Zoom &amp; Pop vertical - 3D Turn-90deg XY-Axis</option><option value="filter437" style="background:#151515; color:white;">Zoom &amp; Pop diagonal - 3D Turn-90deg XY-Axis</option><option value="filter438" style="background:#151515; color:white;">Zoom &amp; Slide horizontal - Parable - 3D Turn-90deg XY-Axis</option><option value="filter439" style="background:#151515; color:white;">Zoom &amp; Slide vertical - Parable - 3D Turn-90deg XY-Axis</option><option value="filter440" style="background:#151515; color:white;">Zoom &amp; Slide diagonal - Parable - 3D Turn-90deg XY-Axis</option><option value="filter441" style="background:#151515; color:white;">Zoom &amp; Slide horizontal - Cube-Parable - 3D Turn-90deg XY-Axis</option><option value="filter442" style="background:#151515; color:white;">Zoom &amp; Slide vertical - Cube-Parable - 3D Turn-90deg XY-Axis</option><option value="filter443" style="background:#151515; color:white;">Zoom &amp; Slide diagonal - Cube-Parable - 3D Turn-90deg XY-Axis</option></optgroup></select>');
    vidEffectMode.appendTo(crfadeAttr2);
    
    var autoPlayArea = $("<div/>");
    autoPlayArea.css({
      "width": "100%",
      "text-align": "center",
      "margin-top": "6px"
    });
    
    autoPlayArea.appendTo(vidTools1);
    
    var vidautoplayBtn = $("<button class='toolbuttons5'>Autoplay</button>");
    vidautoplayBtn.appendTo(autoPlayArea);
    
    var trackChangeModeArea = $("<div/>");
    trackChangeModeArea.css({
      "width": "100%",
      "text-align": "center",
      "margin-top": "6px"
    });
    
    trackChangeModeArea.appendTo(vidTools1);
    
    var vidChangeArea = $("<div/>");
    vidChangeArea.css({
      "width": "100%",
      "text-align": "center",
      "margin-top": "12px"
    });
    
    vidChangeArea.appendTo(vidTools1);
    
    var vidChangeBtn = $("<button class='toolbuttons10'>Change Video</button>");
    vidChangeBtn.appendTo(vidChangeArea);
    
    var vidtrackChangeBtn = $("<button class='toolbuttons6' style='background: linear-gradient(to right, darkred, red, darkred); border-color:red;'>Video-Trackchange</button>");
    vidtrackChangeBtn.appendTo(trackChangeModeArea);
    
    var mediaLib = $("<div/>");
    mediaLib.css({
      "width": "98.6%",
      "display": "flex",
      "flex-direction": "row",
      "border": "2px solid rgba(255, 255, 255, 0.6)"
    });
    
    mediaLib.appendTo(vidmain);
    
    var trackLibTxt = $("<div/>");
    trackLibTxt.css({
      "width": "60%",
      "height": "30px",
      "font-size": "18px",
      "margin-top": "6px",
      "font-weight": "bold",
      "color": "white",
      "text-align": "center"
    })
      .text("Video-Library");
    
    trackLibTxt.appendTo(mediaLib);
    
    var bgLibTxt = $("<div/>");
    bgLibTxt.css({
      "width": "40%",
      "height": "30px",
      "font-size": "18px",
      "margin-top": "6px",
      "font-weight": "bold",
      "color": "white",
      "text-align": "center"
    })
      .text("Background-Sounds");
    
    bgLibTxt.appendTo(mediaLib);
    
    var mediaLibArea = $("<div/>");
    mediaLibArea.css({
      "width": "98.6%",
      "display": "flex",
      "flex-direction": "row",
      "border": "2px solid rgba(255, 255, 255, 0.6)"
    });
    
    mediaLibArea.appendTo(vidmain);
    
    var trackLib = $("<div/>");
    trackLib.css({
      "width": "60%",
      "height": "220px",
      "border": "2px outset rgba(255, 255, 255, 0.8)",
      "overflow": "auto",
      "background": vidsettings.tracklistBackground
    });
    
    trackLib.appendTo(mediaLibArea);
    
    var vidtrackLibList = $("<ul id='vidtracklist'></ul>");
    vidtrackLibList.css({
      "width": "99%",
      "padding": "1px",
      "margin": "1px",
      "list-style": "none",
      "font-size": "16px",
      "font-weight": "bold",
      "color": "white",
      "text-align": "left",
      "cursor": "pointer"
    });
    
    vidtrackLibList.appendTo(trackLib);
    
    var vidmediaTracks = [];
    for (var i=0; i<vidsettings.tracks.length; i++) {
      vidmediaTracks.push("<li style='padding-top:4px; padding-bottom:4px;'>"+vidsettings.tracks[i]+"</li>");
    }
    
    vidtrackLibList.html(vidmediaTracks.join(""));
    
    var fxLib = $("<div/>");
    fxLib.css({
      "width": "40%",
      "height": "220px",
      "border": "2px outset rgba(255, 255, 255, 0.8)",
      "overflow": "auto",
      "background": vidsettings.fxboxBackground
    });
    
    fxLib.appendTo(mediaLibArea);
    
    var vidfxLibList = $("<ul id='vidfxList'></ul>");
    vidfxLibList.css({
      "width": "99%",
      "padding": "1px",
      "margin": "1px",
      "list-style": "none",
      "font-size": "16px",
      "font-weight": "bold",
      "color": "white",
      "text-align": "left",
      "cursor": "pointer"
    });
    
    vidfxLibList.appendTo(fxLib);
    
    var vidmediaFxTracks = [];
    for (var j=0; j<vidsettings.fxSounds.length; j++) {
      vidmediaFxTracks.push("<li name='"+vidsettings.fxSounds[j].name+"' style='padding-top:4px; padding-bottom:4px;'>"+vidsettings.fxSounds[j].label+"</li>");
    }
    
    vidfxLibList.html(vidmediaFxTracks.join(""));
    
    $("#vidtracklist li:eq("+currentVideo+")").addClass("vidselTrack");
  
  	var mixerBox = $("<div/>");
    mixerBox.css({
      "width": "98.6%",
      "height": "220px",
      "overflow": "auto",
      "background": "#151515",
      "display": "none",
    });
    
    mixerBox.appendTo(vidmain);
  
  	var mixerArea1 = $("<div/>");
    mixerArea1.css({
      "width": "99.8%",
      "height": "150px",
      "background": "#151515",
      "display": "flex",
      "flex-direction": "row",
      "border": "2px solid rgba(255, 255, 255, 0.6)"
    });
    
    mixerArea1.appendTo(mixerBox);
  
  	var mixerArea2 = $("<div/>");
    mixerArea2.css({
      "width": "99.8%",
      "height": "60px",
      "background": "#151515",
      "display": "flex",
      "flex-direction": "row",
      "border": "2px solid rgba(255, 255, 255, 0.6)"
    });
    
    mixerArea2.appendTo(mixerBox);
  
    var filterbox1 = $("<div/>");
    filterbox1.css({
      "width": "50%",
      "height": "100%",
      "background": "#151515",
      "border": "2px solid rgba(255, 255, 255, 0.6)"
    });
    
    filterbox1.appendTo(mixerArea1);
  
  	var filterrow1 = $("<div/>");
    filterrow1.css({
      "width": "100%",
      "height": "50px",
      "display": "flex",
      "flex-direction": "row",
    });
    
    filterrow1.appendTo(filterbox1);
  
  	var filterrow2 = $("<div/>");
    filterrow2.css({
      "width": "100%",
      "height": "50px",
      "display": "flex",
      "flex-direction": "row",
    });
    
    filterrow2.appendTo(filterbox1);
  
  	var filterrow3 = $("<div/>");
    filterrow3.css({
      "width": "100%",
      "height": "50px",
      "display": "flex",
      "flex-direction": "row",
    });
    
    filterrow3.appendTo(filterbox1);
  
  	var filterbox2 = $("<div/>");
    filterbox2.css({
      "width": "50%",
      "height": "100%",
      "background": "#151515",
      "border": "2px solid rgba(255, 255, 255, 0.6)"
    });
    
    filterbox2.appendTo(mixerArea1);
  
  
  	var filterrow4 = $("<div/>");
    filterrow4.css({
      "width": "100%",
      "height": "50px",
      "display": "flex",
      "flex-direction": "row",
    });
    
    filterrow4.appendTo(filterbox2);
  
  	var filterrow5 = $("<div/>");
    filterrow5.css({
      "width": "100%",
      "height": "50px",
      "display": "flex",
      "flex-direction": "row",
    });
    
    filterrow5.appendTo(filterbox2);
  
  	var filterrow6 = $("<div/>");
    filterrow6.css({
      "width": "100%",
      "height": "50px",
      "display": "flex",
      "flex-direction": "row",
    });
    
    filterrow6.appendTo(filterbox2);
  	
  	var blurtxt1 = $("<div/>");
  	blurtxt1.css({
      "width": "15%",
      "height": "50px",
      "margin-left": "6px",
      "margin-top": "6px",
      "font-size": "20px",
      "font-weight": "bold",
      "color": "white",
      "font-family": "Century Gothic",
      "text-align": "right"
    }).text("Blur").appendTo(filterrow1);
  
  	var blurbox1 = $("<div/>");
  	blurbox1.css({
      "width": "15%",
      "height": "50px",
      "margin-left": "6px",
      "margin-top": "2px"
    }).appendTo(filterrow1);
  
  	var blurfilter1 = $("<input type='range' class='slider'>");
    blurfilter1.css({
      "width": "96%",
      "height": "20px",
      "background": "linear-gradient(to right, #151515, silver, #151515)",
      "border": "6px outset silver"
    })
      .attr({
      "max": 10,
      "min": 0,
      "step": 0.01,
      "value": 0
    }).appendTo(blurbox1);
  
  	var brighttxt1 = $("<div/>");
  	brighttxt1.css({
      "width": "15%",
      "height": "50px",
      "margin-left": "6px",
      "margin-top": "6px",
      "font-size": "20px",
      "font-weight": "bold",
      "color": "white",
      "font-family": "Century Gothic",
      "text-align": "right"
    }).text("Brightness").appendTo(filterrow1);
  
  	var brightbox1 = $("<div/>");
  	brightbox1.css({
      "width": "15%",
      "height": "50px",
      "margin-left": "6px",
      "margin-top": "2px"
    }).appendTo(filterrow1);
  
  	var brightfilter1 = $("<input type='range' class='slider'>");
    brightfilter1.css({
      "width": "96%",
      "height": "20px",
      "background": "linear-gradient(to right, #151515, silver, #151515)",
      "border": "6px outset silver"
    })
      .attr({
      "max": 500,
      "min": 0,
      "step": 1,
      "value": 100
    }).appendTo(brightbox1);
  
  	var contrasttxt1 = $("<div/>");
  	contrasttxt1.css({
      "width": "15%",
      "height": "50px",
      "margin-left": "6px",
      "margin-top": "6px",
      "font-size": "20px",
      "font-weight": "bold",
      "color": "white",
      "font-family": "Century Gothic",
      "text-align": "right"
    }).text("Contrast").appendTo(filterrow1);
  
  	var contrastbox1 = $("<div/>");
  	contrastbox1.css({
      "width": "15%",
      "height": "50px",
      "margin-left": "6px",
      "margin-top": "2px"
    }).appendTo(filterrow1);
  
  	var contrastfilter1 = $("<input type='range' class='slider'>");
    contrastfilter1.css({
      "width": "96%",
      "height": "20px",
      "background": "linear-gradient(to right, #151515, silver, #151515)",
      "border": "6px outset silver"
    })
      .attr({
      "max": 500,
      "min": 0,
      "step": 1,
      "value": 100
    }).appendTo(contrastbox1);
  
  	var huetxt1 = $("<div/>");
  	huetxt1.css({
      "width": "15%",
      "height": "50px",
      "margin-left": "6px",
      "margin-top": "6px",
      "font-size": "20px",
      "font-weight": "bold",
      "color": "white",
      "font-family": "Century Gothic",
      "text-align": "right"
    }).text("Hue-Rotate").appendTo(filterrow2);
  
  	var huebox1 = $("<div/>");
  	huebox1.css({
      "width": "15%",
      "height": "50px",
      "margin-left": "6px",
      "margin-top": "2px"
    }).appendTo(filterrow2);
  
  	var huefilter1 = $("<input type='range' class='slider'>");
    huefilter1.css({
      "width": "96%",
      "height": "20px",
      "background": "linear-gradient(to right, #151515, silver, #151515)",
      "border": "6px outset silver"
    })
      .attr({
      "max": 360,
      "min": 0,
      "step": 1,
      "value": 0
    }).appendTo(huebox1);
  
  	var graytxt1 = $("<div/>");
  	graytxt1.css({
      "width": "15%",
      "height": "50px",
      "margin-left": "6px",
      "margin-top": "6px",
      "font-size": "20px",
      "font-weight": "bold",
      "color": "white",
      "font-family": "Century Gothic",
      "text-align": "right"
    }).text("Grayscale").appendTo(filterrow2);
  
  	var graybox1 = $("<div/>");
  	graybox1.css({
      "width": "15%",
      "height": "50px",
      "margin-left": "6px",
      "margin-top": "2px"
    }).appendTo(filterrow2);
  
  	var grayfilter1 = $("<input type='range' class='slider'>");
    grayfilter1.css({
      "width": "96%",
      "height": "20px",
      "background": "linear-gradient(to right, #151515, silver, #151515)",
      "border": "6px outset silver"
    })
      .attr({
      "max": 100,
      "min": 0,
      "step": 0.01,
      "value": 0
    }).appendTo(graybox1);
  
  	var inverttxt1 = $("<div/>");
  	inverttxt1.css({
      "width": "15%",
      "height": "50px",
      "margin-left": "6px",
      "margin-top": "6px",
      "font-size": "20px",
      "font-weight": "bold",
      "color": "white",
      "font-family": "Century Gothic",
      "text-align": "right"
    }).text("Negativ").appendTo(filterrow2);
  
  	var invertbox1 = $("<div/>");
  	invertbox1.css({
      "width": "15%",
      "height": "50px",
      "margin-left": "6px",
      "margin-top": "2px"
    }).appendTo(filterrow2);
  
  	var invertfilter1 = $("<input type='range' class='slider'>");
    invertfilter1.css({
      "width": "96%",
      "height": "20px",
      "background": "linear-gradient(to right, #151515, silver, #151515)",
      "border": "6px outset silver"
    })
      .attr({
      "max": 100,
      "min": 0,
      "step": 1,
      "value": 0
    }).appendTo(invertbox1);
  
  	var opacitytxt1 = $("<div/>");
  	opacitytxt1.css({
      "width": "15%",
      "height": "50px",
      "margin-left": "6px",
      "margin-top": "6px",
      "font-size": "20px",
      "font-weight": "bold",
      "color": "white",
      "font-family": "Century Gothic",
      "text-align": "right"
    }).text("Opacity").appendTo(filterrow3);
  
  	var opacitybox1 = $("<div/>");
  	opacitybox1.css({
      "width": "15%",
      "height": "50px",
      "margin-left": "6px",
      "margin-top": "2px"
    }).appendTo(filterrow3);
  
  	var opacityfilter1 = $("<input type='range' class='slider'>");
    opacityfilter1.css({
      "width": "96%",
      "height": "20px",
      "background": "linear-gradient(to right, #151515, silver, #151515)",
      "border": "6px outset silver"
    })
      .attr({
      "max": 1,
      "min": 0,
      "step": 0.01,
      "value": 1
    }).appendTo(opacitybox1);
  
  	var sepiatxt1 = $("<div/>");
  	sepiatxt1.css({
      "width": "15%",
      "height": "50px",
      "margin-left": "6px",
      "margin-top": "6px",
      "font-size": "20px",
      "font-weight": "bold",
      "color": "white",
      "font-family": "Century Gothic",
      "text-align": "right"
    }).text("Sepia").appendTo(filterrow3);
  
  	var sepiabox1 = $("<div/>");
  	sepiabox1.css({
      "width": "15%",
      "height": "50px",
      "margin-left": "6px",
      "margin-top": "2px"
    }).appendTo(filterrow3);
  
  	var sepiafilter1 = $("<input type='range' class='slider'>");
    sepiafilter1.css({
      "width": "96%",
      "height": "20px",
      "background": "linear-gradient(to right, #151515, silver, #151515)",
      "border": "6px outset silver"
    })
      .attr({
      "max": 100,
      "min": 0,
      "step": 0.01,
      "value": 0
    }).appendTo(sepiabox1);
  
  	var sattxt1 = $("<div/>");
  	sattxt1.css({
      "width": "15%",
      "height": "50px",
      "margin-left": "6px",
      "margin-top": "6px",
      "font-size": "20px",
      "font-weight": "bold",
      "color": "white",
      "font-family": "Century Gothic",
      "text-align": "right"
    }).text("Saturate").appendTo(filterrow3);
  
  	var satbox1 = $("<div/>");
  	satbox1.css({
      "width": "15%",
      "height": "50px",
      "margin-left": "6px",
      "margin-top": "2px"
    }).appendTo(filterrow3);
  
  	var satfilter1 = $("<input type='range' class='slider'>");
    satfilter1.css({
      "width": "96%",
      "height": "20px",
      "background": "linear-gradient(to right, #151515, silver, #151515)",
      "border": "6px outset silver"
    })
      .attr({
      "max": 500,
      "min": 0,
      "step": 1,
      "value": 100
    }).appendTo(satbox1);
  
  	var blurtxt2 = $("<div/>");
  	blurtxt2.css({
      "width": "15%",
      "height": "50px",
      "margin-left": "6px",
      "margin-top": "6px",
      "font-size": "20px",
      "font-weight": "bold",
      "color": "white",
      "font-family": "Century Gothic",
      "text-align": "right"
    }).text("Blur").appendTo(filterrow4);
  
  	var blurbox2 = $("<div/>");
  	blurbox2.css({
      "width": "15%",
      "height": "50px",
      "margin-left": "6px",
      "margin-top": "2px"
    }).appendTo(filterrow4);
  
  	var blurfilter2 = $("<input type='range' class='slider'>");
    blurfilter2.css({
      "width": "96%",
      "height": "20px",
      "background": "linear-gradient(to right, #151515, silver, #151515)",
      "border": "6px outset silver"
    })
      .attr({
      "max": 10,
      "min": 0,
      "step": 0.01,
      "value": 0
    }).appendTo(blurbox2);
  
  	var brighttxt2 = $("<div/>");
  	brighttxt2.css({
      "width": "15%",
      "height": "50px",
      "margin-left": "6px",
      "margin-top": "6px",
      "font-size": "20px",
      "font-weight": "bold",
      "color": "white",
      "font-family": "Century Gothic",
      "text-align": "right"
    }).text("Brightness").appendTo(filterrow4);
  
  	var brightbox2 = $("<div/>");
  	brightbox2.css({
      "width": "15%",
      "height": "50px",
      "margin-left": "6px",
      "margin-top": "2px"
    }).appendTo(filterrow4);
  
  	var brightfilter2 = $("<input type='range' class='slider'>");
    brightfilter2.css({
      "width": "96%",
      "height": "20px",
      "background": "linear-gradient(to right, #151515, silver, #151515)",
      "border": "6px outset silver"
    })
      .attr({
      "max": 500,
      "min": 0,
      "step": 1,
      "value": 100
    }).appendTo(brightbox2);
  
  	var contrasttxt2 = $("<div/>");
  	contrasttxt2.css({
      "width": "15%",
      "height": "50px",
      "margin-left": "6px",
      "margin-top": "6px",
      "font-size": "20px",
      "font-weight": "bold",
      "color": "white",
      "font-family": "Century Gothic",
      "text-align": "right"
    }).text("Contrast").appendTo(filterrow4);
  
  	var contrastbox2 = $("<div/>");
  	contrastbox2.css({
      "width": "15%",
      "height": "50px",
      "margin-left": "6px",
      "margin-top": "2px"
    }).appendTo(filterrow4);
  
  	var contrastfilter2 = $("<input type='range' class='slider'>");
    contrastfilter2.css({
      "width": "96%",
      "height": "20px",
      "background": "linear-gradient(to right, #151515, silver, #151515)",
      "border": "6px outset silver"
    })
      .attr({
      "max": 500,
      "min": 0,
      "step": 1,
      "value": 100
    }).appendTo(contrastbox2);
  
  	var huetxt2 = $("<div/>");
  	huetxt2.css({
      "width": "15%",
      "height": "50px",
      "margin-left": "6px",
      "margin-top": "6px",
      "font-size": "20px",
      "font-weight": "bold",
      "color": "white",
      "font-family": "Century Gothic",
      "text-align": "right"
    }).text("Hue-Rotate").appendTo(filterrow5);
  
  	var huebox2 = $("<div/>");
  	huebox2.css({
      "width": "15%",
      "height": "50px",
      "margin-left": "6px",
      "margin-top": "2px"
    }).appendTo(filterrow5);
  
  	var huefilter2 = $("<input type='range' class='slider'>");
    huefilter2.css({
      "width": "96%",
      "height": "20px",
      "background": "linear-gradient(to right, #151515, silver, #151515)",
      "border": "6px outset silver"
    })
      .attr({
      "max": 360,
      "min": 0,
      "step": 1,
      "value": 0
    }).appendTo(huebox2);
  
  	var graytxt2 = $("<div/>");
  	graytxt2.css({
      "width": "15%",
      "height": "50px",
      "margin-left": "6px",
      "margin-top": "6px",
      "font-size": "20px",
      "font-weight": "bold",
      "color": "white",
      "font-family": "Century Gothic",
      "text-align": "right"
    }).text("Grayscale").appendTo(filterrow5);
  
  	var graybox2 = $("<div/>");
  	graybox2.css({
      "width": "15%",
      "height": "50px",
      "margin-left": "6px",
      "margin-top": "2px"
    }).appendTo(filterrow5);
  
  	var grayfilter2 = $("<input type='range' class='slider'>");
    grayfilter2.css({
      "width": "96%",
      "height": "20px",
      "background": "linear-gradient(to right, #151515, silver, #151515)",
      "border": "6px outset silver"
    })
      .attr({
      "max": 100,
      "min": 0,
      "step": 0.01,
      "value": 0
    }).appendTo(graybox2);
  
  	var inverttxt2 = $("<div/>");
  	inverttxt2.css({
      "width": "15%",
      "height": "50px",
      "margin-left": "6px",
      "margin-top": "6px",
      "font-size": "20px",
      "font-weight": "bold",
      "color": "white",
      "font-family": "Century Gothic",
      "text-align": "right"
    }).text("Negativ").appendTo(filterrow5);
  
  	var invertbox2 = $("<div/>");
  	invertbox2.css({
      "width": "15%",
      "height": "50px",
      "margin-left": "6px",
      "margin-top": "2px"
    }).appendTo(filterrow5);
  
  	var invertfilter2 = $("<input type='range' class='slider'>");
    invertfilter2.css({
      "width": "96%",
      "height": "20px",
      "background": "linear-gradient(to right, #151515, silver, #151515)",
      "border": "6px outset silver"
    })
      .attr({
      "max": 100,
      "min": 0,
      "step": 1,
      "value": 0
    }).appendTo(invertbox2);
  
  	var opacitytxt2 = $("<div/>");
  	opacitytxt2.css({
      "width": "15%",
      "height": "50px",
      "margin-left": "6px",
      "margin-top": "6px",
      "font-size": "20px",
      "font-weight": "bold",
      "color": "white",
      "font-family": "Century Gothic",
      "text-align": "right"
    }).text("Opacity").appendTo(filterrow6);
  
  	var opacitybox2 = $("<div/>");
  	opacitybox2.css({
      "width": "15%",
      "height": "50px",
      "margin-left": "6px",
      "margin-top": "2px"
    }).appendTo(filterrow6);
  
  	var opacityfilter2 = $("<input type='range' class='slider'>");
    opacityfilter2.css({
      "width": "96%",
      "height": "20px",
      "background": "linear-gradient(to right, #151515, silver, #151515)",
      "border": "6px outset silver"
    })
      .attr({
      "max": 1,
      "min": 0,
      "step": 0.01,
      "value": 1
    }).appendTo(opacitybox2);
  
  	var sepiatxt2 = $("<div/>");
  	sepiatxt2.css({
      "width": "15%",
      "height": "50px",
      "margin-left": "6px",
      "margin-top": "6px",
      "font-size": "20px",
      "font-weight": "bold",
      "color": "white",
      "font-family": "Century Gothic",
      "text-align": "right"
    }).text("Sepia").appendTo(filterrow6);
  
  	var sepiabox2 = $("<div/>");
  	sepiabox2.css({
      "width": "15%",
      "height": "50px",
      "margin-left": "6px",
      "margin-top": "2px"
    }).appendTo(filterrow6);
  
  	var sepiafilter2 = $("<input type='range' class='slider'>");
    sepiafilter2.css({
      "width": "96%",
      "height": "20px",
      "background": "linear-gradient(to right, #151515, silver, #151515)",
      "border": "6px outset silver"
    })
      .attr({
      "max": 100,
      "min": 0,
      "step": 0.01,
      "value": 0
    }).appendTo(sepiabox2);
  
  	var sattxt2 = $("<div/>");
  	sattxt2.css({
      "width": "15%",
      "height": "50px",
      "margin-left": "6px",
      "margin-top": "6px",
      "font-size": "20px",
      "font-weight": "bold",
      "color": "white",
      "font-family": "Century Gothic",
      "text-align": "right"
    }).text("Saturate").appendTo(filterrow6);
  
  	var satbox2 = $("<div/>");
  	satbox2.css({
      "width": "15%",
      "height": "50px",
      "margin-left": "6px",
      "margin-top": "2px"
    }).appendTo(filterrow6);
  
  	var satfilter2 = $("<input type='range' class='slider'>");
    satfilter2.css({
      "width": "96%",
      "height": "20px",
      "background": "linear-gradient(to right, #151515, silver, #151515)",
      "border": "6px outset silver"
    })
      .attr({
      "max": 500,
      "min": 0,
      "step": 1,
      "value": 100
    }).appendTo(satbox2);
  
  	var buttonbox1 = $("<div/>");
    buttonbox1.css({
      "width": "50%",
      "height": "100%",
      "background": "#151515",
      "border": "2px solid rgba(255, 255, 255, 0.6)"
    });
    
    buttonbox1.appendTo(mixerArea2);
  
  	var resetBtn1 = $("<button class='toolbuttons10'>Reset Videofilter</button>");
    resetBtn1.appendTo(buttonbox1);
  
  	var buttonbox2 = $("<div/>");
    buttonbox2.css({
      "width": "50%",
      "height": "100%",
      "background": "#151515",
      "border": "2px solid rgba(255, 255, 255, 0.6)"
    });
    
    buttonbox2.appendTo(mixerArea2);
  
  	var resetBtn2 = $("<button class='toolbuttons10'>Reset Videofilter</button>");
    resetBtn2.appendTo(buttonbox2);
  	
    
    var toolbarArea = $("<div/>");
    toolbarArea.css({
      "width": "98.6%",
      "height": "80px",
      "background": "#303030",
      "border": "2px solid rgba(255, 255, 255, 0.8)",
      "display": "flex",
      "flex-direction": "row",
      "text-align": "left"
    });
    
    toolbarArea.appendTo(vidmain);
    
    var trackToolbar = $("<div/>");
    trackToolbar.css({
      "width": "60%",
      "height": "60px",
      "background": "#202020",
      "border": "1px solid rgba(255, 255, 255, 0.8)",
      "text-align": "left",
      "padding-top": "18px",
    });
    
    trackToolbar.appendTo(toolbarArea);
    
    var fxToolbar = $("<div/>");
    fxToolbar.css({
      "width": "40%",
      "height": "60px",
      "background": "#202020",
      "border": "1px solid rgba(255, 255, 255, 0.8)",
      "padding-top": "18px"
    });
        
    fxToolbar.appendTo(toolbarArea);
    
    var trackToolbar2 = $("<div/>");
    trackToolbar2.css({
      "width": "98.6%",
      "height": "60px",
      "background": "#202020",
      "border": "1px solid rgba(255, 255, 255, 0.8)",
      "text-align": "left",
      "padding-top": "18px"
    });
    
    trackToolbar2.appendTo(vidmain);
    
    var playerNumber = $("<select style='width:120px; height:50px; font-weight:bold; font-size: 20px; color:white; background: #212121; border: 4px outset silver; border-radius:6px; margin-left:9px;'></select>");
    playerNumber.appendTo(trackToolbar);
    
    var playerOptions = $("<option value='player1'>Player 1</option><option value='player2'>Player 2</option>");
    playerOptions.appendTo(playerNumber);
    
    var remainVideos = $("<input type='text'/>");
    remainVideos.css({
      "width": "55px",
      "height": "50px",
      "font-size": "20px",
      "font-weight": "bold",
      "color": "white",
      "margin-left": "9px",
      "background": "#000029",
      "border-radius": "6px"
    }).val($("#tracklist li").length);
    
    remainVideos.appendTo(trackToolbar);
    
    var vidtrackLoadBtn = $("<button class='toolbuttons5'><img src='Symbole/open.png' style='width:16px; height:16px;'>&nbsp;Load Video</button>");
    vidtrackLoadBtn.css({
      "width": "200px",
      "height": "50px",
      "font-size": "20px",
      "margin-left": "9px",
      "background": "#000029",
      "border": "4px outset silver"
    });
    
    vidtrackLoadBtn.appendTo(trackToolbar);
    
    var vidtrackFile = $("<input type='file' style='display:none;' accept='video/mp4'/>");
    vidtrackFile.appendTo(trackToolbar);
    
    var vidtrackName = $("<input type='text' placeholder='Trackname'>");
    vidtrackName.css({
      "width": "250px",
      "height": "50px",
      "font-size": "20px",
      "font-weight": "bold",
      "color": "white",
      "margin-left": "9px",
      "background": "#212121",
      "border-radius": "6px",
    });
    
    vidtrackName.appendTo(trackToolbar);
    
    var vidaddTrackBtn = $("<button class='toolbuttons'>+</button>");
    vidaddTrackBtn.css({
      "width": "50px",
      "height": "50px",
      "font-size": "20px",
      "margin-left": "9px",
      "background": "#002929",
      "border-radius": "50%",
      "border": "4px outset silver"
    });
    
    vidaddTrackBtn.appendTo(trackToolbar);
    
    var vidtrackMultiFile = $("<input type='file' style='display:none;' accept='video/mp4' multiple/>");
    vidtrackMultiFile.appendTo(trackToolbar);
    
    var vidaddTrackMultiBtn = $("<button class='toolbuttons'><img src='Symbole/plist2.png' style='width:16px; height:16px;'></button>");
    vidaddTrackMultiBtn.css({
      "width": "50px",
      "height": "50px",
      "font-size": "20px",
      "margin-left": "9px",
      "background": "#000029",
      "border-radius": "50%",
      "border": "4px outset silver"
    });
    
    vidaddTrackMultiBtn.appendTo(trackToolbar);
    
     var vidtrackListFile = $("<input type='file' style='display:none;' id='vidtrackListFile' accept='.html, .htm'/>");
    vidtrackListFile.appendTo(trackToolbar2);
    
    var vidtrackListCode = $("<input type='text' id='vidtrackListCode' style='display:none;'/>");
    vidtrackListCode.appendTo(trackToolbar2);
    
    var vidtrackListLoadBtn = $("<button class='toolbuttons5'><img src='Symbole/open.png' style='width:16px; height:16px;'>&nbsp;Load Videolist</button>");
    vidtrackListLoadBtn.css({
      "width": "200px",
      "height": "50px",
      "font-size": "20px",
      "margin-left": "9px",
      "background": "#000029",
      "border": "4px outset silver"
    });
    
    vidtrackListLoadBtn.appendTo(trackToolbar2);
    
    var vidaddTrackListBtn = $("<button class='toolbuttons'>+</button>");
    vidaddTrackListBtn.css({
      "width": "50px",
      "height": "50px",
      "font-size": "20px",
      "margin-left": "9px",
      "background": "#000029",
      "border-radius": "50%",
      "border": "4px outset silver"
    });
    
    vidaddTrackListBtn.appendTo(trackToolbar2);
    
    var vidtrackCountUpBtn = $("<button class='toolbuttons'>&laquo;</button>");
    vidtrackCountUpBtn.css({
      "width": "50px",
      "height": "50px",
      "font-size": "20px",
      "margin-left": "9px",
      "background": "#292900",
      "border-radius": "50%",
      "border": "4px outset silver"
    });
    
    vidtrackCountUpBtn.appendTo(trackToolbar);
    
    var vidtrackCountDownBtn = $("<button class='toolbuttons'>&raquo;</button>");
    vidtrackCountDownBtn.css({
      "width": "50px",
      "height": "50px",
      "font-size": "20px",
      "margin-left": "9px",
      "background": "#292900",
      "border-radius": "50%",
      "border": "4px outset silver"
    });
    
    vidtrackCountDownBtn.appendTo(trackToolbar);
    
    var vidtrackUpBtn = $("<button class='toolbuttons'>&uArr;</button>");
    vidtrackUpBtn.css({
      "width": "50px",
      "height": "50px",
      "font-size": "16px",
      "margin-left": "9px",
      "background": "#290000",
      "border-radius": "50%",
      "border": "4px outset silver"
    });
    
    vidtrackUpBtn.appendTo(trackToolbar);
    
    var vidtrackDownBtn = $("<button class='toolbuttons'>&dArr;</button>");
    vidtrackDownBtn.css({
      "width": "50px",
      "height": "50px",
      "font-size": "20px",
      "margin-left": "9px",
      "background": "#290000",
      "border-radius": "50%",
      "border": "4px outset silver"
    });
    
    vidtrackDownBtn.appendTo(trackToolbar);
    
    var vidtrackSaveTxt = $("<input type='text' id='vidtrackSaveTxt' placeholder='Trackname' value='2playersVideomix'/>");
    vidtrackSaveTxt.css({
      "width": "350px",
      "height": "50px",
      "font-size": "20px",
      "font-weight": "bold",
      "color": "white",
      "margin-left": "9px",
      "background": "#212121",
      "border-radius": "6px",
    });
    
    vidtrackSaveTxt.appendTo(trackToolbar2);
    
    var vidtrackSaveBtn = $("<button class='toolbuttons5'><img src='Symbole/export.png' style='width:16px; height:16px;'>&nbsp;Save Tracklist</button>");
    vidtrackSaveBtn.css({
      "width": "250px",
      "height": "50px",
      "font-size": "20px",
      "margin-left": "9px",
      "background": "#000029",
      "border": "4px outset silver"
    });
    
    vidtrackSaveBtn.appendTo(trackToolbar2);
    
    var vidtrackDelBtn = $("<button class='toolbuttons'><img src='Symbole/delete.png' style='width:20px; height:20px;'></button>");
    vidtrackDelBtn.css({
      "width": "50px",
      "height": "50px",
      "font-size": "16px",
      "margin-left": "9px",
      "background": "#290000",
      "border-radius": "50%",
      "border": "4px outset silver"
    });
    
    vidtrackDelBtn.appendTo(trackToolbar2);
    
    var fxLoadBtn = $("<button class='toolbuttons5'><img src='Symbole/open.png' style='width:16px; height:16px;'>&nbsp;Load FX-Sound</button>");
    fxLoadBtn.css({
      "width": "170px",
      "height": "50px",
      "font-size": "16px",
      "margin-left": "9px",
      "background": "#000029",
      "border": "4px outset silver"
    });
    
    fxLoadBtn.appendTo(fxToolbar);
    
    var fxFile = $("<input type='file' style='display:none;'/>");
    fxFile.appendTo(fxToolbar);
    
    var fxFileName = $("<input type='text' placeholder='FX-Filename'/>");
    fxFileName.css({
      "width": "180px",
      "height": "50px",
      "margin-left": "9px",
      "font-size": "16px",
      "font-weight": "bold",
      "color": "white",
      "background": "#212121",
      "border-radius": "6px"
    });
    
    fxFileName.appendTo(fxToolbar);
    
    var fxFileLabel = $("<input type='text'/ placeholder='FX-Filename'>");
    fxFileLabel.css({
      "width": "180px",
      "height": "50px",
      "margin-left": "9px",
      "font-size": "16px",
      "font-weight": "bold",
      "color": "white",
      "background": "#212121",
      "border-radius": "6px"
    });
    
    fxFileLabel.appendTo(fxToolbar);
    
    var addFxBtn = $("<button class='toolbuttons'>+</button>");
    addFxBtn.css({
      "width": "50px",
      "height": "50px",
      "font-size": "16px",
      "margin-left": "9px",
      "background": "#002929",
      "border-radius": "50%",
      "border": "4px outset silver"
    });
    
    addFxBtn.appendTo(fxToolbar);
    
    var playFxBtn = $("<button class='toolbuttons'>FX</button>");
    playFxBtn.css({
      "width": "50px",
      "height": "50px",
      "font-size": "16px",
      "margin-left": "9px",
      "background": "#002929",
      "border-radius": "50%",
      "border": "4px outset silver"
    });
    
    playFxBtn.appendTo(fxToolbar);
    
    var bottomMain = $("<div/>");
    bottomMain.css({
      "width": "98.6%",
      "height": "80px",
      "border": "1px solid rgba(255, 255, 255, 0.8)",
      "background": "#212121",
      "padding-top": "16px"
    });
    
    bottomMain.appendTo(vidmain);
  
  	var filtermix = $("<button class='toolbuttons10'>Videofilter</button>");
    filtermix.appendTo(bottomMain);
  
  	filtermix.on("click", function() {
      mediaLibArea.toggle();
      mixerBox.toggle();
    });
    
    
    var vidautoplayer1, vidautoplayer2;
        
    $("#playBtn1").on("click", function() {
    var btnStyle1 = $(this).attr("style");
    var total1 = vidplayer1.prop("duration");
    
    if (total1 > 0) {
       if (!btnStyle1) {
          vidplayer1.trigger("play");
    	  $(this).css({
      	  "background":"linear-gradient(to right, navy, skyblue, navy)",
      	  "border-style":"inset",
      	  "border-color":"skyblue"
         }).html("||");
       } else {
          vidplayer1.trigger("pause");
          $(this).removeAttr("style").html("&#9654;");
       }
    }
  	});
    
    $("#playBtn2").on("click", function() {
    var btnStyle2 = $(this).attr("style");
    var total2 = vidplayer2.prop("duration");
    
    if (total2 > 0) {
       if (!btnStyle2) {
          vidplayer2.trigger("play");
    	  $(this).css({
      	  "background":"linear-gradient(to right, navy, skyblue, navy)",
      	  "border-style":"inset",
      	  "border-color":"skyblue"
         }).html("||");
       } else {
          vidplayer2.trigger("pause");
          $(this).removeAttr("style").html("&#9654;");
       }
    }
  	});
    
    vidplayer1.on("pause", function() {
      clearInterval(vidautoplayer1);
      $("#playBtn1").removeAttr("style").html("&#9654;");
  	});
    
    $("#pauseBtn1").on("click", function() {
      vidplayer1.trigger("pause");
      vidplayer1.prop("currentTime",0);
      $("#playBtn1").html("&#9654;");
  	});
    
    vidplayer2.on("pause", function() {
      clearInterval(vidautoplayer2);
      $("#playBtn2").removeAttr("style").html("&#9654;");
  	});
    
    $("#pauseBtn2").on("click", function() {
      vidplayer2.trigger("pause");
      vidplayer2.prop("currentTime",0);
      $("#playBtn2").html("&#9654;");
  	});
    
    vidrewBtn1.on("click", function() {
      var timeStamp1 = vidplayer1.prop("currentTime");
      clearInterval(vidautoplayer1);
      vidplayer1.prop("currentTime", timeStamp1 - 10);
  	});
  
  	vidforwBtn1.on("click", function() {
      var timeStamp1 = vidplayer1.prop("currentTime");
      clearInterval(vidautoplayer1);
      vidplayer1.prop("currentTime", timeStamp1 + 10);
  	});
    
    vidrewBtn2.on("click", function() {
      var timeStamp2 = vidplayer2.prop("currentTime");
      clearInterval(vidautoplayer2);
      vidplayer2.prop("currentTime", timeStamp2 - 10);
  	});
  
  	vidforwBtn2.on("click", function() {
      var timeStamp2 = vidplayer2.prop("currentTime");
      clearInterval(vidautoplayer2);
      vidplayer2.prop("currentTime", timeStamp2 + 10);
  	});
    
    var miniPlayer1 = $("<video id='miniplayer1'/>");
  	miniPlayer1.attr("src",vidsettings.path +""+ vidsettings.tracks[0] + "" + vidsettings.extension);
  	miniPlayer1.css({
      "width": "240px",
      "height": "135px",
      "background": "rgba(15, 15, 15, 0.8)",
      "position": "absolute",
      "z-index": "1000",
      "left": "100",
      "top": "10",
      "display": "none"
    });
    
    miniPlayer1.appendTo(element);
    
    var miniPlayer2 = $("<video id='miniplayer2'/>");
  	miniPlayer2.attr("src",vidsettings.path +""+ vidsettings.tracks[1] + "" + vidsettings.extension);
  	miniPlayer2.css({
      "width": "240px",
      "height": "135px",
      "background": "rgba(15, 15, 15, 0.8)",
      "position": "absolute",
      "z-index": "1000",
      "left": "100",
      "top": "10",
      "display": "none"
    });
    
    miniPlayer2.appendTo(element);
    
    var vidprevTime1 = $("<div/>");
  	vidprevTime1.css({
      "width": "150px",
      "height": "20px",
      "background": "rgba(15, 15, 15, 0.9)",
      "font-size": "15px",
      "font-weight": "bold",
      "color": "white",
      "border-radius": "10px",
      "border": "4px solid white",
      "text-align": "center",
      "position": "absolute",
      "z-index": "1000",
      "left": "100",
      "top": "10",
      "display": "none"
  	});
    
    vidprevTime1.text("0:00/0:00");
    vidprevTime1.appendTo(this);
    
    var vidprevTime2 = $("<div/>");
  	vidprevTime2.css({
      "width": "150px",
      "height": "20px",
      "background": "rgba(15, 15, 15, 0.9)",
      "font-size": "15px",
      "font-weight": "bold",
      "color": "white",
      "border-radius": "10px",
      "border": "4px solid white",
      "text-align": "center",
      "position": "absolute",
      "z-index": "1000",
      "left": "100",
      "top": "10",
      "display": "none"
  	});
    
    vidprevTime2.text("0:00/0:00");
    vidprevTime2.appendTo(this);
    
    var vidinfoBox = $("<div/>");
  	vidinfoBox.css({
      "width": "150px",
      "height": "25px",
      "background": "rgba(15, 15, 15, 0.9)",
      "font-size": "16px",
      "font-weight": "bold",
      "color": "white",
      "text-align": "center",
      "border-radius": "6px",
      "border": "1px solid white",
      "position": "absolute",
      "z-index": "1001",
      "padding-top": "6px",
      "left": "100",
      "top": "20",
      "display": "none"
  	});
  
    vidinfoBox.text("Tool-Title");
    vidinfoBox.appendTo(this);
    
    function showTitle(info) {
      vidinfoBox.text(info);
  	}
  
  	$("#playBtn1, #playBtn2").on("mouseenter", function() {
      showTitle("Play/Pause");
  	});
  
  	$("#playBtn1, #playBtn2").on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = vidinfoBox.width();
      var infoPos = infoWidth/2;
    
      vidinfoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show(100);
    });
    
    $("#playBtn1, #pauseBtn1, #playBtn2, #pauseBtn2").on("mouseleave", function() {
      vidinfoBox.hide(100);
  	});
    
    $("#pauseBtn1, #pauseBtn2").on("mouseenter", function() {
      showTitle("Stop");
  	});
  
  	$("#pauseBtn1, #pauseBtn2").on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = vidinfoBox.width();
      var infoPos = infoWidth/2;
    
      vidinfoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show(100);
    });
  
  	vidrewBtn1.on("mouseenter", function() {
      showTitle("Rewind - 10 Sec");
  	});
  
  	vidforwBtn1.on("mouseenter", function() {
      showTitle("Forward - 10 Sec");
  	});
  
  	vidrewBtn1.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = vidinfoBox.width();
      var infoPos = infoWidth/2;
    
      vidinfoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show(100);
    });
  
  	vidforwBtn1.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = vidinfoBox.width();
      var infoPos = infoWidth/2;
    
      vidinfoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show(100);
  	});
  
  	vidrewBtn1.on("mouseleave", function() {
      vidinfoBox.hide(100);
    });
  
  	vidforwBtn1.on("mouseleave", function() {
      vidinfoBox.hide(100);
  	});
    
    
    vidrewBtn2.on("mouseenter", function() {
      showTitle("Rewind - 10 Sec");
  	});
  
  	vidforwBtn2.on("mouseenter", function() {
      showTitle("Forward - 10 Sec");
  	});
  
  	vidrewBtn2.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = vidinfoBox.width();
      var infoPos = infoWidth/2;
    
      vidinfoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show(100);
    });
  
  	vidforwBtn2.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = vidinfoBox.width();
      var infoPos = infoWidth/2;
    
      vidinfoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show(100);
  	});
  
  	vidrewBtn2.on("mouseleave", function() {
      vidinfoBox.hide(100);
    });
  
  	vidforwBtn2.on("mouseleave", function() {
      vidinfoBox.hide(100);
  	});
        
    function setTime(mixplayer, timebox) {
      var total = $("#"+mixplayer).prop("duration");
      var timeStamp = $("#"+mixplayer).prop("currentTime");
      var deltaTime = total - timeStamp;
    
      var vHour = parseInt(timeStamp/3600);
      var vMin = parseInt(timeStamp/60 % 60);
      var vSec = parseInt(timeStamp % 60);
      var rHour = parseInt(deltaTime/3600);
      var rMin = parseInt(deltaTime/60 % 60);
      var rSec = parseInt(deltaTime % 60);
      vMin = (vMin < 10 ? "0"+vMin : vMin);
      vSec = (vSec < 10 ? "0"+vSec : vSec);
      rMin = (rMin < 10 ? "0"+rMin : rMin);
      rSec = (rSec < 10 ? "0"+rSec : rSec);
   
      if (total > 0) {
        $("#"+timebox).html(vHour + ":" + vMin + ":" + vSec + " / " + rHour + ":" + rMin + ":" + rSec);
      }
    }
    
    function setProgress(mixplayer, timeprog) {
      var total = $("#"+mixplayer).prop("duration");
      var timeStamp = $("#"+mixplayer).prop("currentTime");
      var progress = timeStamp/total*100;
    
      if (total > 0) {
        $("#"+timeprog).css("width",progress+"%");
      }
    }
    
    vidplayer1.on("timeupdate", function() {
      setTime("videoplayer1", "playtime1");
      setProgress("videoplayer1", "progtime1");
      setSlomo();
    });
  
    vidplayer1.on("durationchange", function() {
      setTime("videoplayer1", "playtime1");
    });
    
    vidplayer2.on("timeupdate", function() {
      setTime("videoplayer2", "playtime2");
      setProgress("videoplayer2", "progtime2");
      setSlomo();
    });
  
    vidplayer1.on("durationchange", function() {
      setTime("videoplayer2", "playtime2");
    });
    
    function moveProgress1(e) {
      var barSize = $("#searchtime1").width();
      var total1 = vidplayer1.prop("duration");
      var barPos = e.offsetX;
      var videoPos = barPos/barSize*total1;
    
      if (total1 > 0) {
        clearInterval(vidautoplayer1);
        vidplayer1.prop("currentTime",videoPos);
      }
    }
    
    function moveProgress2(e) {
      var barSize = $("#searchtime2").width();
      var total2 = vidplayer2.prop("duration");
      var barPos = e.offsetX;
      var videoPos = barPos/barSize*total2;
    
      if (total2 > 0) {
        clearInterval(vidautoplayer2);
        vidplayer2.prop("currentTime",videoPos);
      }
    }
    
    function showItems1(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var minPlSize = miniPlayer1.width();
      var prevSize = vidprevTime1.width();
      var barSize = $("#searchtime1").width();
      var total1 = vidplayer1.prop("duration");
      var barPos = e.offsetX;
      var videoPos = barPos/barSize*total1;
      var vidDelta = total1 - videoPos;
    
      var minPlPos = xPos - minPlSize/2;
      var prevPos = xPos - prevSize/2;
      var minVertPos = yPos - 200;
      var prevVertPos = yPos - 60;
    
      var forwPrevHour = parseInt(videoPos/3600);
      var forwPrevMin = parseInt(videoPos/60 %60);
      var forwPrevSec = parseInt(videoPos % 60);
    
      var rePrevHour = parseInt(vidDelta/3600);
      var rePrevMin = parseInt(vidDelta/60 %60);
      var rePrevSec = parseInt(vidDelta % 60);
    
      forwPrevMin = (forwPrevMin < 10 ? "0"+forwPrevMin : forwPrevMin);
      forwPrevSec = (forwPrevSec < 10 ? "0"+forwPrevSec : forwPrevSec);
      rePrevMin = (rePrevMin < 10 ? "0"+rePrevMin : rePrevMin);
      rePrevSec = (rePrevSec < 10 ? "0"+rePrevSec : rePrevSec);
    
      if (total1 > 0) {
        vidprevTime1.html(forwPrevHour + ":" + forwPrevMin + ":" + forwPrevSec + " / " + rePrevHour + ":" + rePrevMin + ":" + rePrevSec);
        miniPlayer1.prop("currentTime",videoPos);
      } else {
        vidprevTime1.html("No Video Load!");
      }
    
      $("#progtime1").css({"height":"12px", "margin-top":"4px"});
      miniPlayer1.animate({left: minPlPos+"px", top: minVertPos+"px"},10).show();
      vidprevTime1.animate({left: prevPos+"px", top: prevVertPos+"px"},10).show();
    }
    
    
    function showItems2(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var minPlSize = miniPlayer2.width();
      var prevSize = vidprevTime2.width();
      var barSize = $("#searchtime2").width();
      var total2 = vidplayer2.prop("duration");
      var barPos = e.offsetX;
      var videoPos = barPos/barSize*total2;
      var vidDelta = total2 - videoPos;
    
      var minPlPos = xPos - minPlSize/2;
      var prevPos = xPos - prevSize/2;
      var minVertPos = yPos - 200;
      var prevVertPos = yPos - 60;
    
      var forwPrevHour = parseInt(videoPos/3600);
      var forwPrevMin = parseInt(videoPos/60 %60);
      var forwPrevSec = parseInt(videoPos % 60);
    
      var rePrevHour = parseInt(vidDelta/3600);
      var rePrevMin = parseInt(vidDelta/60 %60);
      var rePrevSec = parseInt(vidDelta % 60);
    
      forwPrevMin = (forwPrevMin < 10 ? "0"+forwPrevMin : forwPrevMin);
      forwPrevSec = (forwPrevSec < 10 ? "0"+forwPrevSec : forwPrevSec);
      rePrevMin = (rePrevMin < 10 ? "0"+rePrevMin : rePrevMin);
      rePrevSec = (rePrevSec < 10 ? "0"+rePrevSec : rePrevSec);
    
      if (total2 > 0) {
        vidprevTime2.html(forwPrevHour + ":" + forwPrevMin + ":" + forwPrevSec + " / " + rePrevHour + ":" + rePrevMin + ":" + rePrevSec);
        miniPlayer2.prop("currentTime",videoPos);
      } else {
        vidprevTime2.html("No Video Load!");
      }
    
      $("#progtime2").css({"height":"12px", "margin-top":"4px"});
      miniPlayer2.animate({left: minPlPos+"px", top: minVertPos+"px"},10).show();
      vidprevTime2.animate({left: prevPos+"px", top: prevVertPos+"px"},10).show();
    }
    
    $("#searchtime1").on("click",moveProgress1);
  	$("#searchtime1").on("mouseenter", showItems1);
  	$("#searchtime1").on("mousemove", showItems1);
    
    $("#searchtime2").on("click",moveProgress2);
  	$("#searchtime2").on("mouseenter", showItems2);
  	$("#searchtime2").on("mousemove", showItems2);
    
    $("#searchtime1").on("mouseleave", function() {
      $("#progtime1").css({"height":"6px", "margin-top":"6px"});
      miniPlayer1.hide();
      vidprevTime1.hide();
    });
    
    $("#searchtime2").on("mouseleave", function() {
      $("#progtime2").css({"height":"6px", "margin-top":"6px"});
      miniPlayer2.hide();
      vidprevTime2.hide();
    });
    
    $("#searchtime1").on("mousedown touchstart", function() {
      $(this).on("mousemove",moveProgress1);
    });
  
    $("#searchtime1").on("mouseup touchend", function() {
      $(this).off("mousemove");
      $(this).on("mousemove", showItems1);
    });
    
    $("#searchtime2").on("mousedown touchstart", function() {
      $(this).on("mousemove",moveProgress2);
    });
  
    $("#searchtime2").on("mouseup touchend", function() {
      $(this).off("mousemove");
      $(this).on("mousemove", showItems2);
    });
    
    var pitchBox1 = $("<div/>");
    pitchBox1.css({
      "width": "50px",
      "height": "30px",
      "background": "#202020",
      "margin-left": "4px"
  	});
  
    pitchBox1.appendTo(vidtoolbar1);
    
    var pitchrange1 = $("<input type='range' id='pitchRange11' class='slider'/>");
    pitchrange1.css({
      "width": "50px",
      "height": "10px",
      "margin-top": "6px"
  	  }).attr({
      "max": "4",
      "min": "0.25",
      "step": "0.01",
      "value": 1
  	  });
  
    pitchrange1.appendTo(pitchBox1);
    
    var pitchBox2 = $("<div/>");
    pitchBox2.css({
      "width": "50px",
      "height": "30px",
      "background": "#202020",
      "margin-left": "4px"
  	});
  
    pitchBox2.appendTo(vidtoolbar2);
    
    var pitchrange2 = $("<input type='range' id='pitchRange22' class='slider'/>");
    pitchrange2.css({
      "width": "50px",
      "height": "10px",
      "margin-top": "6px"
  	  }).attr({
      "max": "4",
      "min": "0.25",
      "step": "0.01",
      "value": 1
  	  });
  
    pitchrange2.appendTo(pitchBox2);
    
    
    
    var volumeBox1 = $("<div/>");
    volumeBox1.css({
      "width": "50px",
      "height": "30px",
      "background": "#202020",
      "margin-left": "4px"
  	});
  
    volumeBox1.appendTo(vidtoolbar1);
    
    var volumer1 = $("<input type='range' class='slider'/>");
    volumer1.css({
      "width": "50px",
      "height": "10px",
      "margin-top": "6px"
  	  }).attr({
      "max": "1",
      "min": "0",
      "step": "0.01",
      "value": 1
  	  });
  
    volumer1.appendTo(volumeBox1);
    
    var volumeBox2 = $("<div/>");
    volumeBox2.css({
      "width": "50px",
      "height": "30px",
      "background": "#202020",
      "margin-left": "4px"
  	});
  
    volumeBox2.appendTo(vidtoolbar2);
    
    var volumer2 = $("<input type='range' class='slider'/>");
    volumer2.css({
      "width": "50px",
      "height": "10px",
      "margin-top": "6px"
  	  }).attr({
      "max": "1",
      "min": "0",
      "step": "0.01",
      "value": 1
  	  });
  
    volumer2.appendTo(volumeBox2);
    
    pitchrange1.on("change", function() {
      var pitchVal1 = $(this).val();
      vidplayer1.prop("playbackRate", pitchVal1);
      vidinfoBox.text("Pitch: " + pitchVal1);
      savePitchPlayer();
  	});

    pitchrange1.on("mousedown touchstart", function() {
      $(this).on("mousemove", function() {
        $(this).trigger("change");
      });
    });
  
    pitchrange1.on("mouseup touchend", function() {
      $(this).off("mousemove").on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = vidinfoBox.width();
      var infoPos = infoWidth/2;
    
      vidinfoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show(60);
  		});
    });
    
    pitchrange2.on("change", function() {
      var pitchVal2 = $(this).val();
      vidplayer2.prop("playbackRate", pitchVal2);
      vidinfoBox.text("Pitch: " + pitchVal2);
      savePitchPlayer();
  	});

    pitchrange2.on("mousedown touchstart", function() {
      $(this).on("mousemove", function() {
        $(this).trigger("change");
      });
    });
  
    pitchrange2.on("mouseup touchend", function() {
      $(this).off("mousemove").on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = vidinfoBox.width();
      var infoPos = infoWidth/2;
    
      vidinfoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show(60);
  		});
    });
    
    volumer1.on("change", function() {
      var volVal1 = $(this).val();
      vidplayer1.prop("volume", volVal1);
      vidinfoBox.text("Volume: " + volVal1*100 + "%");
      saveVolPlayer();
  	});

    volumer1.on("mousedown touchstart", function() {
      $(this).on("mousemove", function() {
        $(this).trigger("change");
      });
    });
  
    volumer1.on("mouseup touchend", function() {
      $(this).off("mousemove").on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = vidinfoBox.width();
      var infoPos = infoWidth/2;
    
      vidinfoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show(60);
  		});
    });
    
    volumer2.on("change", function() {
      var volVal2 = $(this).val();
      vidplayer2.prop("volume", volVal2);
      vidinfoBox.text("Volume: " + volVal2*100 + "%");
      saveVolPlayer();
  	});

    volumer2.on("mousedown touchstart", function() {
      $(this).on("mousemove", function() {
        $(this).trigger("change");
      });
    });
  
    volumer2.on("mouseup touchend", function() {
      $(this).off("mousemove").on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = vidinfoBox.width();
      var infoPos = infoWidth/2;
    
      vidinfoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show(60);
  		});
    });
    
    pitchrange1.on("mouseenter", function() {
      showTitle("Pitchrate");
  	});
  
  	pitchrange1.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = vidinfoBox.width();
      var infoPos = infoWidth/2;
    
      vidinfoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show(60);
  	});
  
    pitchrange1.on("mouseleave", function() {
      vidinfoBox.hide(60);
    });
  
    pitchrange2.on("mouseenter", function() {
      showTitle("Pitchrate");
  	});
    
    pitchrange2.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = vidinfoBox.width();
      var infoPos = infoWidth/2;
    
      vidinfoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show(60);
  	});
  
    pitchrange2.on("mouseleave", function() {
      vidinfoBox.hide(60);
    });
    
    volumer1.on("mouseenter", function() {
      showTitle("Volume");
  	});
    
    volumer1.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = vidinfoBox.width();
      var infoPos = infoWidth/2;
    
      vidinfoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show(60);
  	});
  
    volumer1.on("mouseleave", function() {
      vidinfoBox.hide(60);
    });
    
    volumer2.on("mouseenter", function() {
      showTitle("Volume");
  	});
    
    volumer2.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = vidinfoBox.width();
      var infoPos = infoWidth/2;
    
      vidinfoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show(60);
  	});
  
    volumer2.on("mouseleave", function() {
      vidinfoBox.hide(60);
    });
    
    var toggleVolume1 = $("<button class='toolbuttons' id='togglemute1' style='display:none;'><img src='Symbole/volume.png' style='filter:invert(100%)'></button>");
  	toggleVolume1.appendTo(vidtoolbar1);
  
  	toggleVolume1.on("click", function() {
    var symbol = $("#togglemute1 img").attr("src");
    
    if (symbol === "Symbole/volume.png") {
      volumer1.val(0).trigger("change");
      $("#togglemute1 img").attr("src","Symbole/mute.png");
    } else {
      volumer1.val(1).trigger("change");
      $("#togglemute1 img").attr("src","Symbole/volume.png");
    }
  	});
    
    var toggleVolume2 = $("<button class='toolbuttons' id='togglemute2' style='display:none;'><img src='Symbole/volume.png' style='filter:invert(100%)'></button>");
  	toggleVolume2.appendTo(vidtoolbar2);
  
  	toggleVolume2.on("click", function() {
    var symbol = $("#togglemute2 img").attr("src");
    
    if (symbol === "Symbole/volume.png") {
      volumer2.val(0).trigger("change");
      $("#togglemute2 img").attr("src","Symbole/mute.png");
    } else {
      volumer2.val(1).trigger("change");
      $("#togglemute2 img").attr("src","Symbole/volume.png");
    }
  	});
    
    var vidfxBtn1 = $("<button class='toolbuttons' style='display:none;'>FX</button>");
  	vidfxBtn1.css({
      "background": "#002900",
      "border-color": "#002900"
    });

    vidfxBtn1.appendTo(vidtoolbar1);
      
    var revBtn1 = $("<button class='toolbuttons4' style='display:none;'>Rv</button>");
    revBtn1.appendTo(vidtoolbar1);
  
    var settingBtn1 = $("<button class='toolbuttons' style='background:#2d0000; border-color:#2d0000;'><img src='Symbole/settings.png' style='width:16px; height: 16px; filter:invert(100%);'></button>");
    settingBtn1.appendTo(vidtoolbar1);
  
    var galleryBtn1 = $("<button class='toolbuttons' style='background:#002900; border-color:#002900; display:none;'><img src='Symbole/img.png' style='width:16px; height: 16px; filter:invert(100%);'></button>");
    galleryBtn1.appendTo(vidtoolbar1);
  
  	var ratioBtn1 = $("<button class='toolbuttons14' style='display:none;'>16:9</button>");
    ratioBtn1.appendTo(vidtoolbar1);
    
    var vidrecBtn1 = $("<button class='toolbuttons' style='background:#2d0000; border-color:#2d0000; display:none;'><img src='Symbole/rec.png' style='width:16px; height: 16px; filter:invert(100%);'></button>");
    vidrecBtn1.appendTo(vidtoolbar1);
    
    var vidchgPlayer1 = $("<button class='toolbuttons' style='display:none;'>&#8660;</button>");
    vidchgPlayer1.appendTo(vidtoolbar1);
      
    var fullScreen1 = $("<button class='toolbuttons' id='toggleFull'><img src='Symbole/fullscreen.png' style='width:16px; height: 16px;'></button>");
    fullScreen1.appendTo(vidtoolbar1);
    
    
    var vidfxBtn2 = $("<button class='toolbuttons' style='display:none;'>FX</button>");
  	vidfxBtn2.css({
      "background": "#002900",
      "border-color": "#002900"
    });

    vidfxBtn2.appendTo(vidtoolbar2);
      
    var revBtn2 = $("<button class='toolbuttons4' style='display:none;'>Rv</button>");
    revBtn2.appendTo(vidtoolbar2);
  
    var settingBtn2 = $("<button class='toolbuttons' style='background:#2d0000; border-color:#2d0000;'><img src='Symbole/settings.png' style='width:16px; height: 16px; filter:invert(100%);'></button>");
    settingBtn2.appendTo(vidtoolbar2);
  
    var galleryBtn2 = $("<button class='toolbuttons' style='background:#002900; border-color:#002900; display:none;'><img src='Symbole/img.png' style='width:16px; height: 16px; filter:invert(100%);'></button>");
    galleryBtn2.appendTo(vidtoolbar2);
  
    var ratioBtn2 = $("<button class='toolbuttons14' style='display:none;'>16:9</button>");
    ratioBtn2.appendTo(vidtoolbar2);
    
    var vidrecBtn2 = $("<button class='toolbuttons' style='background:#2d0000; border-color:#2d0000; display:none;'><img src='Symbole/rec.png' style='width:16px; height: 16px; filter:invert(100%);'></button>");
    vidrecBtn2.appendTo(vidtoolbar2);
    
    var vidchgPlayer2 = $("<button class='toolbuttons' style='display:none;'>&#8660;</button>");
    vidchgPlayer2.appendTo(vidtoolbar2);
      
    var fullScreen2 = $("<button class='toolbuttons' id='toggleFull2'><img src='Symbole/fullscreen.png' style='width:16px; height: 16px;'></button>");
    fullScreen2.appendTo(vidtoolbar2);
    
    
    vidcrossFadeMode.on("mouseenter", function() {
      vidinfoBox.text("Crossfade-Mode");
    });
    
    vidcrossFadeMode.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = vidinfoBox.width();
      var infoPos = infoWidth/2;
    
      vidinfoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    vidcrossFadeMode.on("mouseleave", function() {
      vidinfoBox.hide();
    });
    
    vidcrossFadeTime.on("mouseenter", function() {
      vidinfoBox.text("Crossfade-Time");
    });
    
    vidcrossFadeTime.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = vidinfoBox.width();
      var infoPos = infoWidth/2;
    
      vidinfoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    vidcrossFadeTime.on("mouseleave", function() {
      vidinfoBox.hide();
    });
    
    vidEffectMode.on("mouseenter", function() {
      vidinfoBox.text("Video-CrossEffect");
    });
    
    vidEffectMode.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = vidinfoBox.width();
      var infoPos = infoWidth/2;
    
      vidinfoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    vidEffectMode.on("mouseleave", function() {
      vidinfoBox.hide();
    });
    
    vidaddTrackBtn.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = vidinfoBox.width();
      var infoPos = infoWidth/2;
    
      vidinfoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    vidaddTrackBtn.on("mouseleave", function() {
      vidinfoBox.hide();
    });
    
    vidaddTrackMultiBtn.on("mouseenter", function() {
      vidinfoBox.text("Load Videos");
    });
    
    vidaddTrackMultiBtn.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = vidinfoBox.width();
      var infoPos = infoWidth/2;
    
      vidinfoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    vidaddTrackListBtn.on("mouseleave", function() {
      vidinfoBox.hide();
    });
    
    vidtrackCountUpBtn.on("mouseenter", function() {
      vidinfoBox.text("Previous Track");
    });
    
    vidtrackCountUpBtn.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = vidinfoBox.width();
      var infoPos = infoWidth/2;
    
      vidinfoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    vidtrackCountUpBtn.on("mouseleave", function() {
      vidinfoBox.hide();
    });
    
    vidtrackCountDownBtn.on("mouseenter", function() {
      vidinfoBox.text("Next Track");
    });
    
    vidtrackCountDownBtn.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = vidinfoBox.width();
      var infoPos = infoWidth/2;
    
      vidinfoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    vidtrackCountUpBtn.on("mouseleave", function() {
      vidinfoBox.hide();
    });
    
    vidtrackUpBtn.on("mouseenter", function() {
      vidinfoBox.text("Move Track Up");
    });
    
    vidtrackUpBtn.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = vidinfoBox.width();
      var infoPos = infoWidth/2;
    
      vidinfoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    vidtrackUpBtn.on("mouseleave", function() {
      vidinfoBox.hide();
    });
    
    vidtrackDownBtn.on("mouseenter", function() {
      vidinfoBox.text("Move Track Down");
    });
    
    vidtrackDownBtn.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = vidinfoBox.width();
      var infoPos = infoWidth/2;
    
      vidinfoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    vidtrackDownBtn.on("mouseleave", function() {
      vidinfoBox.hide();
    });
      
    vidtrackDelBtn.on("mouseenter", function() {
      vidinfoBox.text("Delete Track");
    });
    
    vidtrackDelBtn.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = vidinfoBox.width();
      var infoPos = infoWidth/2;
    
      vidinfoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    vidtrackDelBtn.on("mouseleave", function() {
      vidinfoBox.hide();
    });
    
    addFxBtn.on("mouseenter", function() {
      vidinfoBox.text("Add FX-Sound");
    });
    
    addFxBtn.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = vidinfoBox.width();
      var infoPos = infoWidth/2;
    
      vidinfoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    addFxBtn.on("mouseleave", function() {
      vidinfoBox.hide();
    });
    
    playFxBtn.on("mouseenter", function() {
      vidinfoBox.text("Play FX-Sound");
    });
    
    playFxBtn.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = vidinfoBox.width();
      var infoPos = infoWidth/2;
    
      vidinfoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    playFxBtn.on("mouseleave", function() {
      vidinfoBox.hide();
    });
    
    remainVideos.on("mouseenter", function() {
      vidinfoBox.text("Remaining-Tracks");
    });
    
    remainVideos.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = vidinfoBox.width();
      var infoPos = infoWidth/2;
    
      vidinfoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    remainVideos.on("mouseleave", function() {
      vidinfoBox.hide();
    });
    
    vidpitchupBtn.on("mouseenter", function() {
      vidinfoBox.text("Pitch Up +0.05");
    });
    
    vidpitchupBtn.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = vidinfoBox.width();
      var infoPos = infoWidth/2;
    
      vidinfoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    vidpitchupBtn.on("mouseleave", function() {
      vidinfoBox.hide();
    });
    
    vidpitchdownBtn.on("mouseenter", function() {
      vidinfoBox.text("Pitch Down -0.05");
    });
    
    vidpitchdownBtn.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = vidinfoBox.width();
      var infoPos = infoWidth/2;
    
      vidinfoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    vidpitchdownBtn.on("mouseleave", function() {
      vidinfoBox.hide();
    });
    
    vidpitchupBtn2.on("mouseenter", function() {
      vidinfoBox.text("Pitch Up +0.05");
    });
    
    vidpitchupBtn2.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = vidinfoBox.width();
      var infoPos = infoWidth/2;
    
      vidinfoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    vidpitchupBtn2.on("mouseleave", function() {
      vidinfoBox.hide();
    });
    
    vidpitchdownBtn2.on("mouseenter", function() {
      vidinfoBox.text("Pitch Down -0.05");
    });
    
    vidpitchdownBtn2.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = vidinfoBox.width();
      var infoPos = infoWidth/2;
    
      vidinfoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    vidpitchdownBtn2.on("mouseleave", function() {
      vidinfoBox.hide();
    });
    
    vidfxBtn1.on("mouseenter", function() {
      vidinfoBox.text("Play Fx");
    });
    
    vidfxBtn1.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = vidinfoBox.width();
      var infoPos = infoWidth/2;
    
      vidinfoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    vidfxBtn1.on("mouseleave", function() {
      vidinfoBox.hide();
    });
    
    vidfxBtn2.on("mouseenter", function() {
      vidinfoBox.text("Play Fx");
    });
    
    vidfxBtn2.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = vidinfoBox.width();
      var infoPos = infoWidth/2;
    
      vidinfoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    vidfxBtn2.on("mouseleave", function() {
      vidinfoBox.hide();
    });
    
    revBtn1.on("mouseenter", function() {
      vidinfoBox.text("Play Reverse");
    });
    
    revBtn1.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = vidinfoBox.width();
      var infoPos = infoWidth/2;
    
      vidinfoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    revBtn1.on("mouseleave", function() {
      vidinfoBox.hide();
    });
    
    revBtn2.on("mouseenter", function() {
      vidinfoBox.text("Play Reverse");
    });
    
    revBtn2.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = vidinfoBox.width();
      var infoPos = infoWidth/2;
    
      vidinfoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    revBtn2.on("mouseleave", function() {
      vidinfoBox.hide();
    });
    
    vidrecBtn1.on("mouseenter", function() {
      vidinfoBox.text("Record");
    });
    
    vidrecBtn1.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = vidinfoBox.width();
      var infoPos = infoWidth/2;
    
      vidinfoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    vidrecBtn1.on("mouseleave", function() {
      vidinfoBox.hide();
    });
    
    vidrecBtn2.on("mouseenter", function() {
      vidinfoBox.text("Record");
    });
    
    vidrecBtn2.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = vidinfoBox.width();
      var infoPos = infoWidth/2;
    
      vidinfoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    vidrecBtn2.on("mouseleave", function() {
      vidinfoBox.hide();
    });
  
    ratioBtn1.on("mouseenter", function() {
      vidinfoBox.text("Select Screen");
    });
    
    ratioBtn1.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = vidinfoBox.width();
      var infoPos = infoWidth/2;
    
      vidinfoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    ratioBtn1.on("mouseleave", function() {
      vidinfoBox.hide();
    });
  
    ratioBtn2.on("mouseenter", function() {
      vidinfoBox.text("Select Screen");
    });
    
    ratioBtn2.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = vidinfoBox.width();
      var infoPos = infoWidth/2;
    
      vidinfoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    ratioBtn2.on("mouseleave", function() {
      vidinfoBox.hide();
    });
    
    settingBtn1.on("mouseenter", function() {
      vidinfoBox.text("VideoSettings");
    });
    
    settingBtn1.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = vidinfoBox.width();
      var infoPos = infoWidth/2;
    
      vidinfoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    settingBtn1.on("mouseleave", function() {
      vidinfoBox.hide();
    });
    
    settingBtn2.on("mouseenter", function() {
      vidinfoBox.text("VideoSettings");
    });
    
    settingBtn2.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = vidinfoBox.width();
      var infoPos = infoWidth/2;
    
      vidinfoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    settingBtn2.on("mouseleave", function() {
      vidinfoBox.hide();
    });
  
    vidchgPlayer1.on("mouseenter", function() {
      vidinfoBox.text("Change Video");
    });
    
    vidchgPlayer1.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = vidinfoBox.width();
      var infoPos = infoWidth/2;
    
      vidinfoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    vidchgPlayer1.on("mouseleave", function() {
      vidinfoBox.hide();
    });
  
    vidchgPlayer2.on("mouseenter", function() {
      vidinfoBox.text("Change Video");
    });
    
    vidchgPlayer2.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = vidinfoBox.width();
      var infoPos = infoWidth/2;
    
      vidinfoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    vidchgPlayer2.on("mouseleave", function() {
      vidinfoBox.hide();
    });
    
    fullScreen1.on("mouseenter", function() {
      vidinfoBox.text("Fullscreen");
    });
    
    fullScreen1.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = vidinfoBox.width();
      var infoPos = infoWidth/2;
    
      vidinfoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    fullScreen1.on("mouseleave", function() {
      vidinfoBox.hide();
    });
    
    fullScreen2.on("mouseenter", function() {
      vidinfoBox.text("Fullscreen");
    });
    
    fullScreen2.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = vidinfoBox.width();
      var infoPos = infoWidth/2;
    
      vidinfoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    fullScreen2.on("mouseleave", function() {
      vidinfoBox.hide();
    });
  
    galleryBtn1.on("mouseenter", function() {
      vidinfoBox.text("Show Videogallery");
    });
    
    galleryBtn1.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = vidinfoBox.width();
      var infoPos = infoWidth/2;
    
      vidinfoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    galleryBtn1.on("mouseleave", function() {
      vidinfoBox.hide();
    });
  
    galleryBtn2.on("mouseenter", function() {
      vidinfoBox.text("Show Videogallery");
    });
    
    galleryBtn2.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = vidinfoBox.width();
      var infoPos = infoWidth/2;
    
      vidinfoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    galleryBtn2.on("mouseleave", function() {
      vidinfoBox.hide();
    });
    
    
    var settingsMod = $("<div/>");
  	settingsMod.css({
    "width": "72%",
    "height": "auto",
    "background": "rgba(15, 15, 15, 0.8)",
    "position": "absolute",
    "left": "10px",
    "top": "10px",
    "display": "none",
    "border": "4px outset rgba(255, 255, 255, 0.8)",
    "z-index": "1200"
  	});
  
  	settingsMod.appendTo(element);
    
    var settingsHead = $("<div/>");
  	settingsHead.css({
    "width": "100%",
    "height": "40px",
    "font-size": "25px",
    "font-weight": "bold",
    "color": "white",
    "text-align": "left"
  	}).text("Video-Settings");
  
  	settingsHead.appendTo(settingsMod);
  
  	var closeBtn = $("<button class='closeBtn'>X</button>");
  	closeBtn.appendTo(settingsHead);
  
  	settingBtn1.on("click", function() {
    settingsMod.animate({left: element.width()/2 - settingsMod.width()/2 + "px", top: element.height()/2 - settingsMod.height()/2 + "px"},1).show();
  	});
    
    settingBtn2.on("click", function() {
    settingsMod.show();
  	});
    
    closeBtn.on("click", function() {
    settingsMod.hide();
  	});
    
    var settingsArea = $("<div/>");
  	settingsArea.css({
    "width": "100%",
    "height": "50px",
    "font-size": "25px",
    "font-weight": "bold",
    "color": "white",
    "text-align": "center",
    "padding": "16px",
    "display": "flex",
    "vertical-direction": "row"
  	});
  
  	settingsArea.appendTo(settingsMod);
  
  	var settTxt1 = $("<div/>");
  
  	settTxt1.css({
    "width": "240px",
    "height": "50px",
    "font-size": "20px",
    "font-weight": "bold",
    "color": "white",
    "text-align": "right"
  	}).text("Screen-Ratio Player1:");
  
  	settTxt1.appendTo(settingsArea);
  
  	var ratioSelect = $("<select><option value='0'>Standard</option><option value='1'>4:3 (480p)</option><option value='2'>4:3 (360p)</option><option value='3'>3:2</option><option value='4'>WideScreen</option></select>");
  
  	ratioSelect.css({
    "background": "#151515",
    "width": "160px",
    "height": "25px",
    "font-size": "16px",
    "font-weight": "bold",
    "color": "white",
    "text-align": "right",
    "margin-left": "12px",
    "border-radius": "6px"
  	});
  
  	ratioSelect.appendTo(settingsArea);
  
  	var settTxt2 = $("<div/>");
  
  	settTxt2.css({
    "width": "240px",
    "height": "50px",
    "font-size": "20px",
    "font-weight": "bold",
    "color": "white",
    "text-align": "right"
  	}).text("Video-Width Player1:");
  
  	settTxt2.appendTo(settingsArea);
  
  	var vidWidth = $("<input type='number'/>");
  
  	vidWidth.css({
    "background": "#151515",
    "width": "160px",
    "height": "25px",
    "font-size": "16px",
    "font-weight": "bold",
    "color": "white",
    "text-align": "right",
    "margin-left": "12px",
    "border-radius": "6px"
  	}).attr({
    "max": 2,
    "min": -2,
    "value": 1,
    "step": 0.01
  	});
  
  	vidWidth.appendTo(settingsArea);
  
  	var settTxt3 = $("<div/>");
  
  	settTxt3.css({
    "width": "240px",
    "height": "50px",
    "font-size": "20px",
    "font-weight": "bold",
    "color": "white",
    "text-align": "right"
  	}).text("Video-Height Player1:");
  
  	settTxt3.appendTo(settingsArea);
  
  	var vidHeight = $("<input type='number'/>");
  
  	vidHeight.css({
    "background": "#151515",
    "width": "160px",
    "height": "25px",
    "font-size": "16px",
    "font-weight": "bold",
    "color": "white",
    "text-align": "right",
    "margin-left": "12px",
    "border-radius": "6px"
  	}).attr({
    "max": 2,
    "min": -2,
    "value": 1,
    "step": 0.01
  	});
  
  	vidHeight.appendTo(settingsArea);
    
    
    var settingsArea2 = $("<div/>");
  	settingsArea2.css({
    "width": "100%",
    "height": "50px",
    "font-size": "25px",
    "font-weight": "bold",
    "color": "white",
    "text-align": "center",
    "padding": "16px",
    "display": "flex",
    "vertical-direction": "row"
  	});
  
  	settingsArea2.appendTo(settingsMod);
    
    var settTxt11 = $("<div/>");
  
  	settTxt11.css({
    "width": "240px",
    "height": "50px",
    "font-size": "20px",
    "font-weight": "bold",
    "color": "white",
    "text-align": "right"
  	}).text("Screen-Ratio Player2:");
  
  	settTxt11.appendTo(settingsArea2);
  
  	var ratioSelect2 = $("<select><option value='0'>Standard</option><option value='1'>4:3 (480p)</option><option value='2'>4:3 (360p)</option><option value='3'>3:2</option><option value='4'>WideScreen</option></select>");
  
  	ratioSelect2.css({
    "background": "#151515",
    "width": "160px",
    "height": "25px",
    "font-size": "16px",
    "font-weight": "bold",
    "color": "white",
    "text-align": "right",
    "margin-left": "12px",
    "border-radius": "6px"
  	});
  
  	ratioSelect2.appendTo(settingsArea2);
    
    var settTxt12 = $("<div/>");
  
  	settTxt12.css({
    "width": "240px",
    "height": "50px",
    "font-size": "20px",
    "font-weight": "bold",
    "color": "white",
    "text-align": "right"
  	}).text("Video-Width Player2:");
  
  	settTxt12.appendTo(settingsArea2);
  
  	var vidWidth2 = $("<input type='number'/>");
  
  	vidWidth2.css({
    "background": "#151515",
    "width": "160px",
    "height": "25px",
    "font-size": "16px",
    "font-weight": "bold",
    "color": "white",
    "text-align": "right",
    "margin-left": "12px",
    "border-radius": "6px"
  	}).attr({
    "max": 2,
    "min": -2,
    "value": 1,
    "step": 0.01
  	});
  
  	vidWidth2.appendTo(settingsArea2);
    
    var settTxt13 = $("<div/>");
  
  	settTxt13.css({
    "width": "240px",
    "height": "50px",
    "font-size": "20px",
    "font-weight": "bold",
    "color": "white",
    "text-align": "right"
  	}).text("Video-Height Player2:");
  
  	settTxt13.appendTo(settingsArea2);
  
  	var vidHeight2 = $("<input type='number'/>");
  
  	vidHeight2.css({
    "background": "#151515",
    "width": "160px",
    "height": "25px",
    "font-size": "16px",
    "font-weight": "bold",
    "color": "white",
    "text-align": "right",
    "margin-left": "12px",
    "border-radius": "6px"
  	}).attr({
    "max": 2,
    "min": -2,
    "value": 1,
    "step": 0.01
  	});
  
  	vidHeight2.appendTo(settingsArea2);
    
    
    var settingsArea3 = $("<div/>");
  	settingsArea3.css({
    "width": "100%",
    "height": "50px",
    "font-size": "25px",
    "font-weight": "bold",
    "color": "white",
    "text-align": "center",
    "padding": "16px",
    "display": "flex",
    "vertical-direction": "row"
  	});
    
    
    settingsArea3.appendTo(settingsMod);
    
    var settTxt4 = $("<div/>");
  
  	settTxt4.css({
    "width": "240px",
    "height": "50px",
    "font-size": "20px",
    "font-weight": "bold",
    "color": "white",
    "text-align": "right"
  	}).text("Slomo-Speed:");
  
  	settTxt4.appendTo(settingsArea3);
  
  	var slomoSpeed = $("<select><option value='0.25'>0.25</option><option value='0.3'>0.30</option><option value='0.4'>0.40</option><option value='0.5' selected>0.50</option><option value='0.6'>0.60</option><option value='0.7'>0.70</option><option value='0.75'>0.75</option><option value='0.8'>0.80</option><option value='0.9'>0.90</option><option value='1'>1.00</option><option value='1.1'>1.10</option><option value='1.25'>1.25</option><option value='1.5'>1.50</option><option value='1.75'>1.75</option><option value='2'>2.00</option><option value='2.5'>2.50</option><option value='3'>3.00</option><option value='3.5'>3.50</option><option value='4'>4.00</option><option value='5'>5.00</option><option value='6'>6.00</option><option value='7'>7.00</option><option value='8'>8.00</option><option value='9'>9.00</option><option value='10'>10.00</option></select>");
  
  	slomoSpeed.css({
    "background": "#151515",
    "width": "160px",
    "height": "25px",
    "font-size": "16px",
    "font-weight": "bold",
    "color": "white",
    "text-align": "right",
    "margin-left": "12px",
    "border-radius": "6px"
  	});
  
  	slomoSpeed.appendTo(settingsArea3);
  
  	var settTxt5 = $("<div/>");
  
  	settTxt5.css({
    "width": "240px",
    "height": "50px",
    "font-size": "20px",
    "font-weight": "bold",
    "color": "white",
    "text-align": "right"
  	}).text("Slomo-Start:");
  
  	settTxt5.appendTo(settingsArea3);
  
  	var slomoStart = $("<input type='number'/>");
  
  	slomoStart.css({
    "background": "#151515",
    "width": "160px",
    "height": "25px",
    "font-size": "16px",
    "font-weight": "bold",
    "color": "white",
    "text-align": "right",
    "margin-left": "12px",
    "border-radius": "6px"
  	}).attr({
    "max": vidplayer1.prop("duration"),
    "min": 0,
    "value": 1,
    "step": 0.01
  	});
  
  	slomoStart.appendTo(settingsArea3);
  
  	var settTxt6 = $("<div/>");
  
  	settTxt6.css({
    "width": "240px",
    "height": "50px",
    "font-size": "20px",
    "font-weight": "bold",
    "color": "white",
    "text-align": "right"
  	}).text("Slomo-End:");
  
  	settTxt6.appendTo(settingsArea3);
  
  	var slomoEnd = $("<input type='number'/>");
  
  	slomoEnd.css({
    "background": "#151515",
    "width": "160px",
    "height": "25px",
    "font-size": "16px",
    "font-weight": "bold",
    "color": "white",
    "text-align": "right",
    "margin-left": "12px",
    "border-radius": "6px"
  	}).attr({
    "max": vidplayer1.prop("duration"),
    "min": 0,
    "value": 1,
    "step": 0.01
  	});
  
  	slomoEnd.appendTo(settingsArea3);
    
    slomoStart.on("focus", function() {
      var fscControl1 = fullScreen1.attr("style");
      var fscControl2 = fullScreen2.attr("style");
      
      if (playerNumber.val() === "player1") {
        $(this).val(Math.round(vidplayer1.prop("currentTime")));
      	slomoEnd.val(Math.round(vidplayer1.prop("currentTime")) + 5);
      } else if (playerNumber.val() === "player2") {
        $(this).val(Math.round(vidplayer2.prop("currentTime")));
      	slomoEnd.val(Math.round(vidplayer2.prop("currentTime")) + 5);
      }
    });
    
    ratioSelect.on("change", function() {
    var radSel = $(this).val();
    var fscControl1 = fullScreen1.attr("style");
    
    if (radSel === "0") {
      vidWidth.val(1);
      vidHeight.val(1);
    } else if (radSel === "1") {
      vidWidth.val(1.41);
      vidHeight.val(1);
    } else if (radSel === "2") {
      vidWidth.val(1.41);
      vidHeight.val(1.21);
    } else if (radSel === "3") {
      vidWidth.val(1.21);
      vidHeight.val(1);
    } else if (radSel === "4") {
      vidWidth.val(1);
      vidHeight.val(1.21);
    }
    
    if (fscControl1) {
      vidWidth.trigger("change");
      vidHeight.trigger("change");
    }
      
      saveRatioSelection();
  	});
    
    ratioSelect2.on("change", function() {
    var radSel2 = $(this).val();
    var fscControl2 = fullScreen2.attr("style");
    
    if (radSel2 === "0") {
      vidWidth2.val(1);
      vidHeight2.val(1);
    } else if (radSel2 === "1") {
      vidWidth2.val(1.41);
      vidHeight2.val(1);
    } else if (radSel2 === "2") {
      vidWidth2.val(1.41);
      vidHeight2.val(1.21);
    } else if (radSel2 === "3") {
      vidWidth2.val(1.21);
      vidHeight2.val(1);
    } else if (radSel2 === "4") {
      vidWidth2.val(1);
      vidHeight2.val(1.21);
    }
    
    if (fscControl2) {
      vidWidth2.trigger("change");
      vidHeight2.trigger("change");
    }
      
      saveRatioSelection2();
  	});
    
    vidWidth.on("change", function() {
    var scaleWidth = $(this).val();
    var scaleHeight = vidHeight.val();
    var fscControl1 = fullScreen1.attr("style");
    
    if (fscControl1) {
      vidplayer1.css("transform", "scale("+scaleWidth+", "+scaleHeight+")");
    }
      saveVideoSize();
  	});
    
    vidWidth2.on("change", function() {
    var scaleWidth2 = $(this).val();
    var scaleHeight2 = vidHeight2.val();
    var fscControl2 = fullScreen2.attr("style");
    
    if (fscControl2) {
      vidplayer2.css("transform", "scale("+scaleWidth2+", "+scaleHeight2+")");
    }
      saveVideoSize2();
  	});
  
  	vidHeight.on("change", function() {
    var scaleWidth = vidWidth.val();
    var scaleHeight = $(this).val();
    var fscControl1 = fullScreen1.attr("style");
    
    if (fscControl1) {
      vidplayer1.css("transform", "scale("+scaleWidth+", "+scaleHeight+")");
    }
      saveVideoSize();
  	});
    
    vidHeight2.on("change", function() {
    var scaleWidth2 = vidWidth2.val();
    var scaleHeight2 = $(this).val();
    var fscControl2 = fullScreen2.attr("style");
    
    if (fscControl2) {
      vidplayer2.css("transform", "scale("+scaleWidth2+", "+scaleHeight2+")");
    }
      saveVideoSize2();
  	});
    
    var playlistHead2 = $("<div/>");
  	playlistHead2.css({
    "width": "100%",
    "height": "30px",
    "font-size": "25px",
    "font-weight": "bold",
    "color": "white",
    "text-align": "center",
  	}).text("Playlist-Mode");
    
    var playlistMode = $("<div/>");
    playlistMode.css({
    "width": "100%",
    "height": "80px",
    "font-size": "25px",
    "font-weight": "bold",
    "color": "white",
    "text-align": "center",
    "padding": "16px",
    "display": "flex",
    "vertical-direction": "row"
  	});
    
    playlistHead2.appendTo(settingsMod);
    playlistMode.appendTo(settingsMod);
    
    var mode11 = $("<input type='radio' id='mode11' name='pMod2' style='display:none;' checked value='1'/>");
    mode11.appendTo(playlistMode);
    var label11 = $("<label for='mode11'>Forward</label>");
    label11.css({
      "background": "linear-gradient(to right, green, lime, green)",
      "border": "4px inset lime",
      "border-radius": "6px",
      "font-size": "25px",
      "font-weight": "bold",
      "color": "white",
      "width": "350px",
      "height": "35px",
      "margin-left": "16px",
      "padding": "4px"
    });
    label11.appendTo(playlistMode);
    
    var mode12 = $("<input type='radio' id='mode12' name='pMod2' style='display:none;' value='2'/>");
    mode12.appendTo(playlistMode);
    var label12 = $("<label for='mode12'>Reverse</label>");
    label12.css({
      "background": "#002500",
      "border": "4px outset #002500",
      "border-radius": "6px",
      "font-size": "25px",
      "font-weight": "bold",
      "color": "white",
      "width": "350px",
      "height": "35px",
      "margin-left": "16px",
      "padding": "4px"
    });
    label12.appendTo(playlistMode);
    
    var mode13 = $("<input type='radio' id='mode13' name='pMod2' style='display:none;' value='3'/>");
    mode13.appendTo(playlistMode);
    var label13 = $("<label for='mode13'>Random</label>");
    label13.css({
      "background": "#002500",
      "border": "4px outset #002500",
      "border-radius": "6px",
      "font-size": "25px",
      "font-weight": "bold",
      "color": "white",
      "width": "350px",
      "height": "35px",
      "margin-left": "16px",
      "padding": "4px"
    });
    label13.appendTo(playlistMode);
    
    mode11.on("change", function() {
      var plMode11 = $(this);
      
      if (plMode11.is(":checked")) {
        label11.css({
          "background": "linear-gradient(to right, green, lime, green)",
          "border-style": "inset",
          "border-color": "lime"
        });
        
        label12.css({
          "background": "#002500",
          "border-style": "outset",
          "border-color": "#002500"
        });
        
        label13.css({
          "background": "#002500",
          "border-style": "outset",
          "border-color": "#002500"
        });
        
        playModeBtn1.css({
          "background": "linear-gradient(to right, navy, skyblue, navy)",
          "border-style": "inset",
          "border-color": "skyblue"
        });
        
        playModeBtn2.removeAttr("style");
        playModeBtn3.removeAttr("style");
      }
    });
    
    mode12.on("change", function() {
      var plMode12 = $(this);
      
      if (plMode12.is(":checked")) {
        label12.css({
          "background": "linear-gradient(to right, green, lime, green)",
          "border-style": "inset",
          "border-color": "lime"
        });
        
        label11.css({
          "background": "#002500",
          "border-style": "outset",
          "border-color": "#002500"
        });
        
        label13.css({
          "background": "#002500",
          "border-style": "outset",
          "border-color": "#002500"
        });
        
        playModeBtn2.css({
          "background": "linear-gradient(to right, navy, skyblue, navy)",
          "border-style": "inset",
          "border-color": "skyblue"
        });
        
        playModeBtn1.removeAttr("style");
        playModeBtn3.removeAttr("style");
      }
    });
    
    mode13.on("change", function() {
      var plMode13 = $(this);
      
      if (plMode13.is(":checked")) {
        label13.css({
          "background": "linear-gradient(to right, green, lime, green)",
          "border-style": "inset",
          "border-color": "lime"
        });
        
        label11.css({
          "background": "#002500",
          "border-style": "outset",
          "border-color": "#002500"
        });
        
        label12.css({
          "background": "#002500",
          "border-style": "outset",
          "border-color": "#002500"
        });
        
        playModeBtn3.css({
          "background": "linear-gradient(to right, navy, skyblue, navy)",
          "border-style": "inset",
          "border-color": "skyblue"
        });
        
        playModeBtn1.removeAttr("style");
        playModeBtn2.removeAttr("style");
      }
      
      setRandom();
    });
    
    vidskiprewBtn.on("mouseenter", function() {
    if (mode13.is(":checked")) {
      vidinfoBox.css("width", "250px");
      showTitle("Random-Mode Active!");
    } else {
      showTitle("Video Reverse");
      vidinfoBox.css("width", "150px");
    }
  	});
  
  	vidskipforwBtn.on("mouseenter", function() {
    if (mode13.is(":checked")) {
      vidinfoBox.css("width", "250px");
      showTitle("Random-Mode Active!");
    } else {
      showTitle("Video Forward");
      vidinfoBox.css("width", "150px");
    }
  	});
    
    vidskiprewBtn2.on("mouseenter", function() {
    if (mode13.is(":checked")) {
      vidinfoBox.css("width", "250px");
      showTitle("Random-Mode Active!");
    } else {
      showTitle("Video Reverse");
      vidinfoBox.css("width", "150px");
    }
  	});
  
  	vidskipforwBtn2.on("mouseenter", function() {
    if (mode13.is(":checked")) {
      vidinfoBox.css("width", "250px");
      showTitle("Random-Mode Active!");
    } else {
      showTitle("Video Forward");
      vidinfoBox.css("width", "150px");
    }
  	});
    
    vidskiprewBtn.on("mousemove", function(e) {
    var xPos = e.pageX;
    var yPos = e.pageY;
    var infoWidth = vidinfoBox.width();
    var infoPos = infoWidth/2;
    
    vidinfoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show(100);
  	});
  
  	vidskipforwBtn.on("mousemove", function(e) {
    var xPos = e.pageX;
    var yPos = e.pageY;
    var infoWidth = vidinfoBox.width();
    var infoPos = infoWidth/2;
    
    vidinfoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show(100);
  	});
  
  	vidskiprewBtn.on("mouseleave", function() {
    vidinfoBox.hide(50);
    vidinfoBox.css("width", "150px");
  	});
  
  	vidskipforwBtn.on("mouseleave", function() {
    vidinfoBox.hide(50);
    vidinfoBox.css("width", "150px");
  	});
    
    vidpitchupBtn.on("click", function() {
      pitchrange1.val(parseFloat(pitchrange1.val()) + 0.05).trigger("change");
    });
    
    vidpitchdownBtn.on("click", function() {
      pitchrange1.val(pitchrange1.val() - 0.05).trigger("change");
    });
    
    vidpitchupBtn2.on("click", function() {
      pitchrange2.val(parseFloat(pitchrange2.val()) + 0.05).trigger("change");
    });
    
    vidpitchdownBtn2.on("click", function() {
      pitchrange2.val(pitchrange2.val() - 0.05).trigger("change");
    });
    
    var bgCanvas = $("<div/>");
    bgCanvas.css({
      "width": "100%",
      "height": "100%",
      "background": "#212121",
      "position": "fixed",
      "left": "0px",
      "top": "0px",
      "z-index": "250",
      "display": "none"
    }).appendTo(element);
    
    var mainfullScreen = $("<button class='toolbuttons5'>Fullscreen</button>");
    mainfullScreen.appendTo(bottomMain);
    
    
      function toggleFullScreen() {
 		 if (!document.fullscreenElement &&    // alternative standard method
    		  !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
   		 if (document.documentElement.requestFullscreen) {
   		   document.documentElement.requestFullscreen();
   		 } else if (document.documentElement.msRequestFullscreen) {
   		   document.documentElement.msRequestFullscreen();
  		  } else if (document.documentElement.mozRequestFullScreen) {
     		 document.documentElement.mozRequestFullScreen();
  		  } else if (document.documentElement.webkitRequestFullscreen) {
    		  document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
  		  }
  		} else {
   		 if (document.exitFullscreen) {
   		   document.exitFullscreen();
   		 } else if (document.msExitFullscreen) {
   		   document.msExitFullscreen();
  		  } else if (document.mozCancelFullScreen) {
    		  document.mozCancelFullScreen();
  		  } else if (document.webkitExitFullscreen) {
   		   document.webkitExitFullscreen();
   		 }
  		}
	}
    
    
    mainfullScreen.on("click", function() {
      var mfscControl = $(this).attr("style"); 
      toggleFullScreen();
      
      if (!mfscControl) {
        element.addClass("fullScreen");
        $(this).css({
          "background":"linear-gradient(to right, green, lime, green)", 
          "border-style":"inset", 
          "border-color":"lime"
        });
      } else {
        element.removeClass("fullScreen");
        $(this).removeAttr("style");
      }
    });
    
    fullScreen1.on("click", function() {
      var scH = window.screen.availHeight;
      var scaleWidth = vidWidth.val();
      var scaleHeight = vidHeight.val();
      var scaleWidth2 = vidWidth2.val();
      var scaleHeight2 = vidHeight2.val();
      var fscControl = $(this).attr("style");
      
      if (!mainfullScreen.attr("style")) {
        toggleFullScreen();
      }
      
      if (!fscControl) {
        vidplayer1.addClass("vidfullScreen1").css("z-index",291);
        vidplayer2.addClass("vidfullScreen2").css("z-index",290);
      	vtoolbarArea1.css({"width":"100%", "z-index":300}).hide();
        vtoolbarArea2.css({"width":"100%", "z-index":300}).hide();
        $("body").css("overflow","hidden");
        vidplayer1.css({"transform": "scale("+scaleWidth+", "+scaleHeight+")", "border-radius": "0px"});
        vidplayer2.css({"transform": "scale("+scaleWidth2+", "+scaleHeight2+")", "border-radius": "0px"});
        toggleVolume1.show();
        vidskiprewBtn.show();
        vidskipforwBtn.show();
        vidpitchupBtn.show();
        vidpitchdownBtn.show();
        vidfxBtn1.show();
        revBtn1.show();
        vidrecBtn1.show();
        vidchgPlayer1.show();
        ratioBtn1.show();
        galleryBtn1.show();
        toggleVolume2.show();
        vidskiprewBtn2.show();
        vidskipforwBtn2.show();
        vidpitchupBtn2.show();
        vidpitchdownBtn2.show();
        vidfxBtn2.show();
        revBtn2.show();
        vidrecBtn2.show();
        vidchgPlayer2.show();
        ratioBtn2.show();
        galleryBtn2.show();
        vidfader1.val(1).trigger("change");
        vidfader2.val(0).trigger("change");
        playerNumber.val("player1");
        bgCanvas.show();
        pitchBox1.css({
          "width":"80px",
          "margin-left":"9px"
        });
        volumeBox1.css({
          "width":"80px",
          "margin-left":"9px"
        });
        pitchrange1.css("width","80px");
        volumer1.css("width","80px");
        pitchBox2.css({
          "width":"80px",
          "margin-left":"9px"
        });
        volumeBox2.css({
          "width":"80px",
          "margin-left":"9px"
        });
        pitchrange2.css("width","80px");
        volumer2.css("width","80px");
        vidplayer1.off("mousemove").on("mousemove", function() {
    		clearTimeout(showTool1);
    		vtoolbarArea1.animate({left: "0px", top: scH + "px"},1).show();
    		showTool1 = setTimeout(function() {
      		vtoolbarArea1.hide();
    		},6000);
  		});
        vidplayer2.off("mousemove").on("mousemove", function() {
    		clearTimeout(showTool2);
    		vtoolbarArea2.animate({left: "0px", top: scH + "px"},1).show();
    		showTool2 = setTimeout(function() {
      		vtoolbarArea2.hide();
    		},6000);
  		});
        fullScreen2.css({"background":"linear-gradient(to right, navy, skyblue, navy)", "border-style":"inset", "border-color":"skyblue"});
        $(this).css({"background":"linear-gradient(to right, navy, skyblue, navy)", "border-style":"inset", "border-color":"skyblue"});
      } else {
        vidplayer1.removeClass("vidfullScreen1");
        vidplayer2.removeClass("vidfullScreen2");
        $("body").css("overflow","auto");
        vidplayer1.css({"transform": "scale(1,1)", "border-radius": "0px"});
        vidplayer2.css({"transform": "scale(1,1)", "border-radius": "0px"});
        vtoolbarArea1.css({"width":vidplayer1.width(), "z-index":200}).hide();
        vtoolbarArea2.css({"width":vidplayer2.width(), "z-index":200}).hide();
        toggleVolume1.hide();
        vidskiprewBtn.hide();
        vidskipforwBtn.hide();
        vidpitchupBtn.hide();
        vidpitchdownBtn.hide();
        vidfxBtn1.hide();
        revBtn1.hide();
        vidrecBtn1.hide();
        vidchgPlayer1.hide();
        ratioBtn1.hide();
        galleryBtn1.hide();
        toggleVolume2.hide();
        vidskiprewBtn2.hide();
        vidskipforwBtn2.hide();
        vidpitchupBtn2.hide();
        vidpitchdownBtn2.hide();
        vidfxBtn2.hide();
        revBtn2.hide();
        vidrecBtn2.hide();
        vidchgPlayer2.hide();
        ratioBtn2.hide();
        galleryBtn2.hide();
        bgCanvas.hide();
        pitchBox1.css({
          "width":"50px",
          "margin-left":"4px"
        });
        volumeBox1.css({
          "width":"50px",
          "margin-left":"4px"
        });
        pitchrange1.css("width","50px");
        volumer1.css("width","50px");
         pitchBox2.css({
          "width":"50px",
          "margin-left":"4px"
        });
        volumeBox2.css({
          "width":"50px",
          "margin-left":"4px"
        });
        pitchrange2.css("width","50px");
        volumer2.css("width","50px");
        vidplayer1.off("mousemove").on("mousemove", function() {
    		var lpos = vidplayer1.offset().left;
    		var tpos = vidplayer1.offset().top + vidplayer1.height() - 45;
    		clearTimeout(showTool1);
    		vtoolbarArea1.animate({left: lpos + "px", top: tpos + "px"},1).show();
    		showTool1 = setTimeout(function() {
      		vtoolbarArea1.hide();
    		},6000);
  		});
        vidplayer2.off("mousemove").on("mousemove", function() {
    		var lpos2 = vidplayer2.offset().left;
    		var tpos2 = vidplayer2.offset().top + vidplayer2.height() - 45;
    		clearTimeout(showTool2);
    		vtoolbarArea2.animate({left: lpos2 + "px", top: tpos2 + "px"},1).show();
    		showTool2 = setTimeout(function() {
      		vtoolbarArea2.hide();
    		},6000);
  		});
        fullScreen2.removeAttr("style");
        $(this).removeAttr("style");
      }
    });
    
    fullScreen2.on("click", function() {
      var scH = window.screen.availHeight;
      var scaleWidth = vidWidth.val();
      var scaleHeight = vidHeight.val();
      var scaleWidth2 = vidWidth2.val();
      var scaleHeight2 = vidHeight2.val();
      var fscControl = $(this).attr("style");
      if (!mainfullScreen.attr("style")) {
        toggleFullScreen();
      }
      
      if (!fscControl) {
        vidplayer1.addClass("vidfullScreen1").css("z-index",290);
        vidplayer2.addClass("vidfullScreen2").css("z-index",291);
        vtoolbarArea1.css({"width":"100%", "z-index":300}).hide();
      	vtoolbarArea2.css({"width":"100%", "z-index":300}).hide();
        $("body").css("overflow","hidden");
        vidplayer1.css({"transform": "scale("+scaleWidth+", "+scaleHeight+")", "border-radius": "0px"});
        vidplayer2.css({"transform": "scale("+scaleWidth2+", "+scaleHeight2+")", "border-radius": "0px"});
        toggleVolume1.show();
        vidskiprewBtn.show();
        vidskipforwBtn.show();
        vidpitchupBtn.show();
        vidpitchdownBtn.show();
        vidfxBtn1.show();
        revBtn1.show();
        vidrecBtn1.show();
        vidchgPlayer1.show();
        ratioBtn1.show();
        galleryBtn1.show();
        toggleVolume2.show();
        vidskiprewBtn2.show();
        vidskipforwBtn2.show();
        vidpitchupBtn2.show();
        vidpitchdownBtn2.show();
        vidfxBtn2.show();
        revBtn2.show();
        vidrecBtn2.show();
        vidchgPlayer2.show();
        ratioBtn2.show();
        galleryBtn2.show();
        vidfader2.val(1).trigger("change");
        vidfader1.val(0).trigger("change");
        playerNumber.val("player2");
        bgCanvas.show();
        pitchBox1.css({
          "width":"80px",
          "margin-left":"9px"
        });
        volumeBox1.css({
          "width":"80px",
          "margin-left":"9px"
        });
        pitchrange1.css("width","80px");
        volumer1.css("width","80px");
        pitchBox2.css({
          "width":"80px",
          "margin-left":"9px"
        });
        volumeBox2.css({
          "width":"80px",
          "margin-left":"9px"
        });
        pitchrange2.css("width","80px");
        volumer2.css("width","80px");
        vidplayer2.off("mousemove").on("mousemove", function() {
    		clearTimeout(showTool2);
    		vtoolbarArea2.animate({left: "0px", top: scH + "px"},1).show();
    		showTool2 = setTimeout(function() {
      		vtoolbarArea2.hide();
    		},6000);
  		});
        vidplayer1.off("mousemove").on("mousemove", function() {
    		clearTimeout(showTool1);
    		vtoolbarArea1.animate({left: "0px", top: scH + "px"},1).show();
    		showTool1 = setTimeout(function() {
      		vtoolbarArea1.hide();
    		},6000);
  		});
        fullScreen1.css({"background":"linear-gradient(to right, navy, skyblue, navy)", "border-style":"inset", "border-color":"skyblue"});
        $(this).css({"background":"linear-gradient(to right, navy, skyblue, navy)", "border-style":"inset", "border-color":"skyblue"});
      } else {
        vidplayer1.removeClass("vidfullScreen1");
        vidplayer2.removeClass("vidfullScreen2");
        $("body").css("overflow","auto");
        vidplayer1.css({"transform": "scale(1,1)", "border-radius": "0px"});
        vidplayer2.css({"transform": "scale(1,1)", "border-radius": "0px"});
        vtoolbarArea1.css({"width":vidplayer1.width(), "z-index":200}).hide();
        vtoolbarArea2.css({"width":vidplayer2.width(), "z-index":200}).hide();
        toggleVolume1.hide();
        vidskiprewBtn.hide();
        vidskipforwBtn.hide();
        vidpitchupBtn.hide();
        vidpitchdownBtn.hide();
        vidfxBtn1.hide();
        revBtn1.hide();
        vidrecBtn1.hide();
        vidchgPlayer1.hide();
        ratioBtn1.hide();
        galleryBtn1.hide();
        toggleVolume2.hide();
        vidskiprewBtn2.hide();
        vidskipforwBtn2.hide();
        vidpitchupBtn2.hide();
        vidpitchdownBtn2.hide();
        vidfxBtn2.hide();
        revBtn2.hide();
        vidrecBtn2.hide();
        vidchgPlayer2.hide();
        ratioBtn2.hide();
        galleryBtn2.hide();
        bgCanvas.hide();
        pitchBox1.css({
          "width":"50px",
          "margin-left":"4px"
        });
        volumeBox1.css({
          "width":"50px",
          "margin-left":"4px"
        });
        pitchrange1.css("width","50px");
        volumer1.css("width","50px");
        pitchBox2.css({
          "width":"50px",
          "margin-left":"4px"
        });
        volumeBox2.css({
          "width":"50px",
          "margin-left":"4px"
        });
        pitchrange2.css("width","50px");
        volumer2.css("width","50px");
        vidplayer2.off("mousemove").on("mousemove", function() {
    		var lpos2 = vidplayer2.offset().left;
    		var tpos2 = vidplayer2.offset().top + vidplayer1.height() - 45;
    		clearTimeout(showTool2);
    		vtoolbarArea2.animate({left: lpos2 + "px", top: tpos2 + "px"},1).show();
    		showTool2 = setTimeout(function() {
      		vtoolbarArea2.hide();
    		},6000);
  		});
        vidplayer1.off("mousemove").on("mousemove", function() {
    		var lpos = vidplayer1.offset().left;
    		var tpos = vidplayer1.offset().top + vidplayer1.height() - 45;
    		clearTimeout(showTool1);
    		vtoolbarArea1.animate({left: lpos + "px", top: tpos + "px"},1).show();
    		showTool1 = setTimeout(function() {
      		vtoolbarArea1.hide();
    		},6000);
  		});
        fullScreen1.removeAttr("style");
        $(this).removeAttr("style");
      }
    });
    
    var fxHead = $("<div/>");
    fxHead.css({
      "width": "100%",
      "height": "40px",
      "font-size": "25px",
      "font-weight": "bold",
      "color": "white",
      "text-align": "center"
    }).text("FX-Settings & Videoeffect-Rotation");
    
    fxHead.appendTo(settingsMod);
    
    var fxArea = $("<div/>");
    
    fxArea.css({
      "width": "100%",
      "height": "60px",
      "font-size": "25px",
      "font-weight": "bold",
      "color": "white",
      "text-align": "left",
      "padding": "16px",
      "display": "flex",
      "flex-direction": "row"
    });
    
    fxArea.appendTo(settingsMod);
  
    var fxTxt2 = $("<div/>");
    fxTxt2.css({
      "width": "16%",
      "height": "28px",
      "font-size": "22px",
      "text-align": "right",
      "margin-left": "6px",
      "margin-right": "6px",
      "margin-top": "16px"
    }).text("FX-Volume: ");
    
    fxTxt2.appendTo(fxArea);

    var fxVa = $("<div/>");
    fxVa.css({
      "width": "12%",
      "height": "28px",
      "text-align": "left",
      "margin-top": "18px",
      "margin-right": "12px"
    });
    
    fxVa.appendTo(fxArea);
    
    var fxVolume = $("<input type='range' value=1 max=1 min=0 step=0.01 class='slider'/>");
    fxVolume.css({
      "width": "150px",
      "height": "15px"
    });
    
    fxVolume.appendTo(fxVa);
    
    var fxTxt3 = $("<div/>");
    fxTxt3.css({
      "width": "15%",
      "height": "28px",
      "font-size": "22px",
      "text-align": "right",
      "margin-left": "6px",
      "margin-right": "6px",
      "margin-top": "16px"
    }).text("FX-Pitch: ");
    
    fxTxt3.appendTo(fxArea);

    var fxpt = $("<div/>");
    fxpt.css({
      "width": "15%",
      "height": "28px",
      "font-size": "22px",
      "text-align": "left",
      "margin-top": "18px"
    });
    
    fxpt.appendTo(fxArea);
    
    var fxPitch = $("<input type='range' value=1 max=4 min=0.25 step=0.01 class='slider'/>");
    fxPitch.css({
      "width": "150px",
      "height": "15px",
      "margin-right": "12px"
    });
    
    fxPitch.appendTo(fxpt);
    
    var fxPlayer = $("<audio/>");
    fxPlayer.css({
      "position": "absolute",
      "left": "10px",
      "top": "10px",
      "display": "none"
    }).prop("preservesPitch",false);
    
    fxPlayer.appendTo(this);
          
    var fxVolVal = $("<input type='text'/>");
    fxVolVal.css({
      "width": "60px",
      "height": "20px",
      "font-size": "16px",
      "font-weight": "bold",
      "color": "white",
      "background": "#151515",
      "border-radius": "6px",
      "margin-bottom": "12px"
    });
    
    fxVolVal.appendTo(fxTxt2);
    
    var fxPitchVal = $("<input type='text'/>");
    fxPitchVal.css({
      "width": "60px",
      "height": "20px",
      "font-size": "16px",
      "font-weight": "bold",
      "color": "white",
      "background": "#151515",
      "border-radius": "6px",
      "margin-bottom": "12px"
    });
    
    fxPitchVal.appendTo(fxTxt3);
    
    var fxTxt1 = $("<div/>");
    fxTxt1.css({
      "width": "25%",
      "height": "28px",
      "font-size": "22px",
      "text-align": "right",
      "margin-left": "6px",
      "margin-right": "6px",
      "padding-top": "12px"
    }).text("Effect-Rotation: ");
    
    fxTxt1.appendTo(fxArea);
    
    var rotlevel = $("<input type='number'/>");
    rotlevel.css({
      "width": "100px",
      "height": "20px",
      "font-size": "16px",
      "font-weight": "bold",
      "color": "white",
      "background": "#151515",
      "border-radius": "6px"
    }).attr("min",1).attr("value",1);
    
    rotlevel.appendTo(fxTxt1);
    
    function setSlomo() {
      var slStart = slomoStart.val();
      var slEnd = slomoEnd.val();
      var slSpeed = parseFloat(slomoSpeed.val());
      
      if (playerNumber.val() === "player1") {
        if (vidplayer1.prop("currentTime") > slStart && vidplayer1.prop("currentTime") < slEnd) {
        vidplayer1.prop("playbackRate", slSpeed);
        fxPlayer.prop("playbackRate", slSpeed);
      	} else {
        vidplayer1.prop("playbackRate", pitchrange1.val());
        fxPlayer.prop("playbackRate", fxPitch.val());
      	}
      } else if (playerNumber.val() === "player2") {
        if (vidplayer2.prop("currentTime") > slStart && vidplayer2.prop("currentTime") < slEnd) {
        vidplayer2.prop("playbackRate", slSpeed);
        fxPlayer.prop("playbackRate", slSpeed);
      	} else {
        vidplayer2.prop("playbackRate", pitchrange2.val());
        fxPlayer.prop("playbackRate", fxPitch.val());
      	}
      }
    }
    
    var vidReverser, vidReverser2;
      
    function playvidReverse() {
      var timeStamp1 = vidplayer1.prop("currentTime");
      var rangeVal1 = pitchrange1.val();
      clearInterval(vidautoplayer1);
      vidplayer1.prop("currentTime", timeStamp1 - 0.125 * rangeVal1);
    }
      
    function setvidReverse1() {
      var rangeVal1 = pitchrange1.val();
      vidReverser = setInterval(function() {
      playvidReverse();
      }, 90 / rangeVal1);
  	}
      
    revBtn1.on("click", function() {
      var vidrevStatus1 = $(this).attr("style");
      
      if (!vidrevStatus1) {
        setvidReverse1();
      	$(this).css({
          "background": "linear-gradient(to right, #363600, yellow, #363600)",
          "border-style": "inset",
          "border-color": "yellow"
        });
      } else {
        clearInterval(vidReverser);
        $(this).removeAttr("style");
      }
    });
    
    function playvidReverse2() {
      var timeStamp2 = vidplayer2.prop("currentTime");
      var rangeVal2 = pitchrange2.val();
      clearInterval(vidautoplayer2);
      vidplayer2.prop("currentTime", timeStamp2 - 0.125 * rangeVal2);
    }
      
    function setvidReverse2() {
      var rangeVal2 = pitchrange2.val();
      vidReverser2 = setInterval(function() {
      playvidReverse2();
      }, 90 / rangeVal2);
  	}
      
    revBtn2.on("click", function() {
      var vidrevStatus2 = $(this).attr("style");
      
      if (!vidrevStatus2) {
        setvidReverse2();
      	$(this).css({
          "background": "linear-gradient(to right, #363600, yellow, #363600)",
          "border-style": "inset",
          "border-color": "yellow"
        });
      } else {
        clearInterval(vidReverser2);
        $(this).removeAttr("style");
      }
    });
    
    fxVolume.on("change", function() {
      var fxVolumeVal = $(this).val();
      fxVolVal.val(fxVolumeVal);
      fxPlayer.prop("volume", fxVolumeVal);
      saveVolBgpPlayer();
        });
    
    fxVolume.on("mousemove", function() {
      $(this).trigger("change");
        });
    
    fxPitch.on("change", function() {
      var fxpitchRate = fxPitch.val();
      fxPitchVal.val(fxpitchRate);
      fxPlayer.prop("playbackRate", fxpitchRate);
      savePitchPlayerBgp();
        });
    
    fxPitch.on("mousemove", function() {
      $(this).trigger("change");
        });

    pitchrange1.on("contextmenu", function() {
      $(this).val(1);
      $(this).trigger("change");
      return false;
    });
    
    pitchrange2.on("contextmenu", function() {
      $(this).val(1);
      $(this).trigger("change");
      return false;
    });
    
    fxPitch.on("contextmenu", function() {
      $(this).val(1);
      $(this).trigger("change");
      return false;
    });
    
    var gallery = $("<div/>");
    gallery.css({
      "width": "99%",
      "height": "100%",
      "background": "rgba(30, 30, 30, 0.75)",
      "position": "absolute",
      "left": "10px",
      "top": "10px",
      "z-index": "1500",
      "display": "none"
    });
    
    gallery.appendTo(this);
    
    var galleryHead = $("<div/>");
    galleryHead.css({
      "width": "100%",
      "height": "30px",
      "font-size": "20px",
      "font-weight": "bold",
      "color": "white",
      "text-align": "left"
    }).text("Movie-Gallery");
    
    galleryHead.appendTo(gallery);
    
    var galleryClose = $("<button class='closeBtn'>X</button>");
    galleryClose.appendTo(galleryHead);
    
    var galleryItem = $("<div id='galleryList'></div>");
    galleryItem.css({
      "width": "95%",
      "height": "90%",
      "font-size": "16px",
      "font-weight": "bold",
      "color": "white",
      "padding": "16px",
      "background": "rgba(15, 15, 15, 0.9)",
      "overflow": "auto"
    });
    
    galleryItem.appendTo(gallery);
    
    function setGallery() {
      var galleryCols = [];
      var galleryRows = [];
      var colNumber = 6;
      var rowNumber = Math.ceil($("#vidtracklist li").length/colNumber);
      
      for (var x=0; x<colNumber; x++) {
        galleryCols.push("<td style='width:"+100/colNumber+"%; height:150px; background:url(Symbole/vid.jpg); background-size:100%; text-align:center; vertical-align:top; font-size:16px; font-weight:bold; color:white; border:2px outset rgba(255, 255, 255, 0.8); cursor:pointer;'></td>");
      }
      
      for (var y=0; y<rowNumber; y++) {
        galleryRows.push("<tr>"+galleryCols.join("")+"</tr>");
      }
      
      galleryItem.html("<table style='width:90%;'>"+galleryRows.join("")+"</table>");
      
      for (var z=0; z<$("#vidtracklist li").length; z++) {
        $("#galleryList td:eq("+z+")").html($("#vidtracklist li:eq("+z+")").text());
      }
    }
    
    galleryClose.on("click", function() {
      gallery.hide();
    });
    
    galleryItem.on("mouseenter", function() {
      $("#galleryList td").on("click", function() {
        var gcells = $(this).index();
        var grows = $(this).parent().index();
        var gNumbers = $("#galleryList table tr:eq(0) td").length;
        var rangeVal = pitchrange1.val();
        var rangeVal2 = pitchrange2.val();
        var gCont = $(this).html();
      
        if (gCont  !== "") {
          currentVideo = grows * gNumbers + gcells;
          
          if (playerNumber.val() === "player1") {
            vidplayer1.attr("src",vidsettings.path+$(this).text()+vidsettings.extension);
          	miniPlayer1.attr("src",vidsettings.path+$(this).text()+vidsettings.extension);
          	vidplayer1.prop("playbackRate", rangeVal);
          } else if (playerNumber.val() === "player2") {
            vidplayer2.attr("src",vidsettings.path+$(this).text()+vidsettings.extension);
          	miniPlayer2.attr("src",vidsettings.path+$(this).text()+vidsettings.extension);
          	vidplayer2.prop("playbackRate", rangeVal2);
          }
         }

      gallery.hide();
       });
    });
    
    var vidInfoMod = $("<div/>");
    vidInfoMod.css({
      "width": "400px",
      "background": "rgba(30, 30, 30, 0.6)",
      "display": "none",
      "position": "absolute",
      "left": "10px",
      "top": "10px",
      "z-index": 1000
    });
    
    vidInfoMod.appendTo(this);
    
    var vidInfoHead = $("<div/>");
    vidInfoHead.css({
      "width": "400px",
      "height": "30px",
      "font-size": "20px",
      "font-weight": "bold",
      "color": "white",
      "padding": "6px",
      "text-align": "left"
    }).html("Video-Info");
    
    vidInfoHead.appendTo(vidInfoMod);
    
    var closeInfoBtn2 = $("<button class='closeBtn'>X</button>");
  	closeInfoBtn2.appendTo(vidInfoHead);
    
    closeInfoBtn2.on("click", function() {
      vidInfoMod.hide();
    });
    
    var vidInfoMain1 = $("<div/>");
    vidInfoMain1.css({
      "width": "400px",
      "font-size": "14px",
      "font-weight": "bold",
      "color": "white",
      "padding": "6px",
      "display": "flex",
      "flex-direction": "row"
    });
    
    vidInfoMain1.appendTo(vidInfoMod);
    
    var vidInfoTxt1 = $("<div/>");
    vidInfoTxt1.css({
      "width": "140px",
      "text-align": "left"
    }).text("Videoname:");
    
    vidInfoTxt1.appendTo(vidInfoMain1);
    
    var vidInfoItem1 = $("<div/>");
    vidInfoItem1.css({
      "width": "240px",
      "text-align": "left"
    });
    
    vidInfoItem1.appendTo(vidInfoMain1);
    
    var vidInfoMain2 = $("<div/>");
    vidInfoMain2.css({
      "width": "400px",
      "font-size": "14px",
      "font-weight": "bold",
      "color": "white",
      "padding": "6px",
      "display": "flex",
      "flex-direction": "row"
    });
    
    vidInfoMain2.appendTo(vidInfoMod);
    
    var vidInfoTxt2 = $("<div/>");
    vidInfoTxt2.css({
      "width": "140px",
      "text-align": "left"
    }).text("Videonumber:");
    
    vidInfoTxt2.appendTo(vidInfoMain2);
    
    var vidInfoItem2 = $("<div/>");
    vidInfoItem2.css({
      "width": "240px",
      "text-align": "left"
    });
    
    vidInfoItem2.appendTo(vidInfoMain2);
    
    var vidInfoMain3 = $("<div/>");
    vidInfoMain3.css({
      "width": "400px",
      "font-size": "14px",
      "font-weight": "bold",
      "color": "white",
      "padding": "6px",
      "display": "flex",
      "flex-direction": "row"
    });
    
    vidInfoMain3.appendTo(vidInfoMod);
    
    var vidInfoTxt3 = $("<div/>");
    vidInfoTxt3.css({
      "width": "140px",
      "text-align": "left"
    }).text("Videoduration:");
    
    vidInfoTxt3.appendTo(vidInfoMain3);
    
    var vidInfoItem3 = $("<div/>");
    vidInfoItem3.css({
      "width": "240px",
      "text-align": "left"
    });
    
    vidInfoItem3.appendTo(vidInfoMain3);
    
    var vidInfoMain4 = $("<div/>");
    vidInfoMain4.css({
      "width": "400px",
      "font-size": "14px",
      "font-weight": "bold",
      "color": "white",
      "padding": "6px",
      "display": "flex",
      "flex-direction": "row"
    });
    
    vidInfoMain4.appendTo(vidInfoMod);
    
    var vidInfoTxt4 = $("<div/>");
    vidInfoTxt4.css({
      "width": "140px",
      "text-align": "left"
    }).text("Videoresulotion:");
    
    vidInfoTxt4.appendTo(vidInfoMain4);
    
    var vidInfoItem4 = $("<div/>");
    vidInfoItem4.css({
      "width": "240px",
      "text-align": "left"
    });
    
    vidInfoItem4.appendTo(vidInfoMain4);
    
    var vidInfoMain5 = $("<div/>");
    vidInfoMain5.css({
      "width": "400px",
      "font-size": "14px",
      "font-weight": "bold",
      "color": "white",
      "padding": "6px",
      "display": "flex",
      "flex-direction": "row"
    });
    
    vidInfoMain5.appendTo(vidInfoMod);
    
    var vidInfoTxt5 = $("<div/>");
    vidInfoTxt5.css({
      "width": "140px",
      "text-align": "left"
    }).text("Videovolume:");
    
    vidInfoTxt5.appendTo(vidInfoMain5);
    
    var vidInfoItem5 = $("<div/>");
    vidInfoItem5.css({
      "width": "240px",
      "text-align": "left"
    });
    
    vidInfoItem5.appendTo(vidInfoMain5);
    
    var vidInfoMain6 = $("<div/>");
    vidInfoMain6.css({
      "width": "400px",
      "font-size": "14px",
      "font-weight": "bold",
      "color": "white",
      "padding": "6px",
      "display": "flex",
      "flex-direction": "row"
    });
    
    vidInfoMain6.appendTo(vidInfoMod);
    
    var vidInfoTxt6 = $("<div/>");
    vidInfoTxt6.css({
      "width": "140px",
      "text-align": "left"
    }).text("Videopitch:");
    
    vidInfoTxt6.appendTo(vidInfoMain6);
    
    var vidInfoItem6 = $("<div/>");
    vidInfoItem6.css({
      "width": "240px",
      "text-align": "left"
    });
    
    vidInfoItem6.appendTo(vidInfoMain6);
    
    var vidconMenu = $("<div id='vidmenu'></div>");
    
    vidconMenu.css({
      "width": "300px",
      "background": "rgba(21, 21, 21, 0.8)",
      "position": "absolute",
      "left": "10px",
      "top": "10px",
      "z-index": 600,
      "border": "2px outset #303030",
      "display": "none"
    });
    
    vidconMenu.appendTo(element);
    
    var menuList = $("<ul/>");
    menuList.css({
      "margin": "1px",
      "padding": "1px",
      "list-style": "none",
      "font-size": "20px",
      "font-weight": "bold",
      "color": "white",
      "text-align": "left",
    });
    
    menuList.appendTo(vidconMenu);
    
    var listPoint1 = $("<li style='border-bottom: 1px solid rgba(255, 255, 255, 0.6)'>&#9654;/|| Play/Pause</li>");
    listPoint1.css({
      "padding-top": "6px",
      "padding-bottom": "6px",
      "cursor": "pointer"
    });
    
    listPoint1.appendTo(menuList);
    
    var listPoint2 = $("<li style='border-bottom: 1px solid rgba(255, 255, 255, 0.6)'>Toggle Mute</li>");
    listPoint2.css({
      "padding-top": "6px",
      "padding-bottom": "6px",
      "cursor": "pointer"
    });
    
    listPoint2.appendTo(menuList);
    
    var listPoint3 = $("<li style='border-bottom: 1px solid rgba(255, 255, 255, 0.6)'>&laquo; Rewind (10s)</li>");
    listPoint3.css({
      "padding-top": "6px",
      "padding-bottom": "6px",
      "cursor": "pointer",
    });
    
    listPoint3.appendTo(menuList);
    
    var listPoint4 = $("<li style='border-bottom: 1px solid rgba(255, 255, 255, 0.6)'>&raquo; Forward (10s)</li>");
    listPoint4.css({
      "padding-top": "6px",
      "padding-bottom": "6px",
      "cursor": "pointer",
    });
    
    listPoint4.appendTo(menuList);
    
    var listPoint5 = $("<li style='border-bottom: 1px solid rgba(255, 255, 255, 0.6)'>|&laquo; VideoMode Reverse</li>");
    listPoint5.css({
      "padding-top": "6px",
      "padding-bottom": "6px",
      "cursor": "pointer",
    });
    
    listPoint5.appendTo(menuList);
    
    var listPoint6 = $("<li style='border-bottom: 1px solid rgba(255, 255, 255, 0.6)'>|&raquo; VideoMode Forward</li>");
    listPoint6.css({
      "padding-top": "6px",
      "padding-bottom": "6px",
      "cursor": "pointer",
    });
    
    listPoint6.appendTo(menuList);
    
    var listPoint7 = $("<li style='border-bottom: 1px solid rgba(255, 255, 255, 0.6)'>VideoMode Random</li>");
    listPoint7.css({
      "padding-top": "6px",
      "padding-bottom": "6px",
      "cursor": "pointer",
    });
    
    listPoint7.appendTo(menuList);
    
    var listPoint8 = $("<li style='border-bottom: 1px solid rgba(255, 255, 255, 0.6)'>Settings...</li>");
    listPoint8.css({
      "padding-top": "6px",
      "padding-bottom": "6px",
      "cursor": "pointer"
    });
    
    listPoint8.appendTo(menuList);
    
    var listPoint9 = $("<li style='border-bottom: 1px solid rgba(255, 255, 255, 0.6)'>Toggle Fullscreen</li>");
    listPoint9.css({
      "padding-top": "6px",
      "padding-bottom": "6px",
      "cursor": "pointer"
    });
    
    listPoint9.appendTo(menuList);
    
    var listPoint10 = $("<li style='border-bottom: 1px solid rgba(255, 255, 255, 0.6)'><img src='Symbole/open.png' style='width:20px; height:20px;'>&nbsp;Load Video</li>");
    listPoint10.css({
      "padding-top": "6px",
      "padding-bottom": "6px",
      "cursor": "pointer"
    });
    
    listPoint10.appendTo(menuList);
    
    var listPoint11 = $("<li style='border-bottom: 1px solid rgba(255, 255, 255, 0.6)'>Change Player</li>");
    listPoint11.css({
      "padding-top": "6px",
      "padding-bottom": "6px",
      "cursor": "pointer"
    });
    
    listPoint11.appendTo(menuList);
    
    var listPoint12 = $("<li style='border-bottom: 1px solid rgba(255, 255, 255, 0.6)'>Change Video</li>");
    listPoint12.css({
      "padding-top": "6px",
      "padding-bottom": "6px",
      "cursor": "pointer"
    });
    
    listPoint12.appendTo(menuList);
    
    var listPoint13 = $("<li style='border-bottom: 1px solid rgba(255, 255, 255, 0.6)'>Show Gallery</li>");
    listPoint13.css({
      "padding-top": "6px",
      "padding-bottom": "6px",
      "cursor": "pointer"
    });
    
    listPoint13.appendTo(menuList);
    
    var listPoint14 = $("<li style='border-bottom: 1px solid rgba(255, 255, 255, 0.6)'>Video-Infos...</li>");
    listPoint14.css({
      "padding-top": "6px",
      "padding-bottom": "6px",
      "cursor": "pointer"
    });
    
    listPoint14.appendTo(menuList);
    
    vidplayer1.on("click", function() {
      $("#playBtn1").click();
      vidconMenu.hide();
    });
    
    vidplayer2.on("click", function() {
      $("#playBtn2").click();
      vidconMenu.hide();
    });
    
    vidplayer1.on("contextmenu", function(e) {
      var scW = window.screen.availWidth;
      var scH = window.screen.availHeight;
      var menuX = e.pageX;
      var menuY = e.pageY;
      var menSizeX = vidconMenu.width();
      var menSizeY = vidconMenu.height();
      var menuPoxX = menuX + menSizeX;
      var menuPosY = menuY + menSizeY;
      
      if (menuPoxX > scW && menuPosY < scH) {
        vidconMenu.animate({left: menuX - menSizeX, top: menuY},6).show();
      } else if (menuPosY > scH && menuPoxX < scW) {
        vidconMenu.animate({left: menuX, top: menuY - menSizeY},6).show();
      } else if (menuPosY > scH && menuPoxX > scW) {
        vidconMenu.animate({left: menuX - menSizeX, top: menuY - menSizeY},6).show();
      } else {
        vidconMenu.animate({left: menuX, top: menuY},6).show();
      }
      playerNumber.val("player1");
      return false;
    });
    
    vidplayer2.on("contextmenu", function(e) {
      var scW = window.screen.availWidth;
      var scH = window.screen.availHeight;
      var menuX = e.pageX;
      var menuY = e.pageY;
      var menSizeX = vidconMenu.width();
      var menSizeY = vidconMenu.height();
      var menuPoxX = menuX + menSizeX;
      var menuPosY = menuY + menSizeY;
      
      if (menuPoxX > scW && menuPosY < scH) {
        vidconMenu.animate({left: menuX - menSizeX, top: menuY},6).show();
      } else if (menuPosY > scH && menuPoxX < scW) {
        vidconMenu.animate({left: menuX, top: menuY - menSizeY},6).show();
      } else if (menuPosY > scH && menuPoxX > scW) {
        vidconMenu.animate({left: menuX - menSizeX, top: menuY - menSizeY},6).show();
      } else {
        vidconMenu.animate({left: menuX, top: menuY},6).show();
      }
      playerNumber.val("player2");
      return false;
    });
    
    var closeMenu;

    vidconMenu.on("mouseenter", function() {
	clearTimeout(closeMenu);
    });

    vidconMenu.on("mouseleave", function() {
	closeMenu = setTimeout(function() {
	   vidconMenu.hide();
	},2000);	
    });

    vidtoolbar1.on("mouseenter", function() {
	clearTimeout(showTool1);
    });
    
    vidtoolbar2.on("mouseenter", function() {
	clearTimeout(showTool2);
    });
    
    function setVidInfos() {
      var trackSource1 = vidplayer1.attr("src");
      var trackSource2 = vidplayer2.attr("src");
      var vidVol = vidplayer1.prop("volume");
      var vidVol2 = vidplayer2.prop("volume");
      var playRate1 = vidplayer1.prop("playbackRate");
      var playRate2 = vidplayer2.prop("playbackRate");
      var resoluteX = vidplayer1.prop("videoWidth");
      var resoluteY = vidplayer1.prop("videoHeight");
      var resoluteX2 = vidplayer2.prop("videoWidth");
      var resoluteY2 = vidplayer2.prop("videoHeight");
      var total1 = vidplayer1.prop("duration");
      var total2 = vidplayer2.prop("duration");
      
      var infoHour = parseInt(total1/3600);
      var infoMin = parseInt(total1/60 % 60);
      var infoSec = parseInt(total1 % 60);
      var infoHour2 = parseInt(total2/3600);
      var infoMin2 = parseInt(total2/60 % 60);
      var infoSec2 = parseInt(total2 % 60);
      
      infoMin = (infoMin<10 ? "0"+infoMin : infoMin);
      infoSec = (infoSec<10 ? "0"+infoSec : infoSec);
      infoMin2 = (infoMin2<10 ? "0"+infoMin2 : infoMin2);
      infoSec2 = (infoSec2<10 ? "0"+infoSec2 : infoSec2);
      
      if (playerNumber.val() === "player1") {
        vidInfoItem1.text(trackSource1.substring(trackSource1.lastIndexOf("/") + 1, trackSource1.lastIndexOf(".")));
        vidInfoItem3.text(infoHour + ":" + infoMin + ":" + infoSec);
        vidInfoItem4.text(resoluteX + " x " + resoluteY);
      	vidInfoItem5.text(vidVol*100 + "%");
      	vidInfoItem6.text(playRate1);
      } else if (playerNumber.val() === "player2") {
        vidInfoItem1.text(trackSource2.substring(trackSource2.lastIndexOf("/") + 1, trackSource2.lastIndexOf(".")));
        vidInfoItem3.text(infoHour2 + ":" + infoMin2 + ":" + infoSec2);
        vidInfoItem4.text(resoluteX2 + " x " + resoluteY2);
      	vidInfoItem5.text(vidVol2*100 + "%");
      	vidInfoItem6.text(playRate2);
      }
     vidInfoItem2.text(currentVideo+1);
    }
    
    listPoint1.on("click", function() {
      if (playerNumber.val() === "player1") {
        $("#playBtn1").click();
      } else if (playerNumber.val() === "player2") {
        $("#playBtn2").click();
      }
      vidconMenu.hide();
    });
    
    listPoint2.on("click", function() {
      if (playerNumber.val() === "player1") {
        toggleVolume1.click();
      } else if (playerNumber.val() === "player2") {
        toggleVolume2.click();
      }
      vidconMenu.hide();
    });
    
    listPoint3.on("click", function() {
      if (playerNumber.val() === "player1") {
        vidrewBtn1.click();
      } else if (playerNumber.val() === "player2") {
        vidrewBtn2.click();
      }
      vidconMenu.hide();
    });
    
    listPoint4.on("click", function() {
      if (playerNumber.val() === "player1") {
        vidforwBtn1.click();
      } else if (playerNumber.val() === "player2") {
        vidforwBtn2.click();
      }
      vidconMenu.hide();
    });
    
    listPoint5.on("click", function() {
      mode12.click();
      vidconMenu.hide();
    });
    
    listPoint6.on("click", function() {
      mode11.click();
      vidconMenu.hide();
    });
    
    listPoint7.on("click", function() {
      mode13.click();
      vidconMenu.hide();
    });
    
    listPoint8.on("click", function() {
      if (playerNumber.val() === "player1") {
        settingBtn1.click();
      } else if (playerNumber.val() === "player2") {
        settingBtn2.click();
      }
      vidconMenu.hide();
    });
    
    listPoint9.on("click", function() {
      if (playerNumber.val() === "player1") {
        fullScreen1.click();
      } else if (playerNumber.val() === "player2") {
        fullScreen2.click();
      }
      vidconMenu.hide();
    });
    
    listPoint11.on("click", function() {
      if (playerNumber.val() === "player1") {
        vidplayer2.css("z-index",292);
        vidplayer1.css("z-index",291);
        vidfader1.val(0).trigger("change");
        vidfader2.val(1).trigger("change");
        playerNumber.val("player2");
      } else if (playerNumber.val() === "player2") {
        vidplayer2.css("z-index",291);
        vidplayer1.css("z-index",292);
        vidfader1.val(1).trigger("change");
        vidfader2.val(0).trigger("change");
        playerNumber.val("player1");
      }
      vidconMenu.hide();
    });
    
    listPoint12.on("click", function() {
      if (playerNumber.val() === "player1") {
        vidchgPlayer1.click();
      } else if (playerNumber.val() === "player2") {
        vidchgPlayer2.click();
      }
      vidconMenu.hide();
    });
    
    listPoint13.on("click", function() {
      setGallery();
      gallery.show();
      vidconMenu.hide();
    });
    
    listPoint14.on("click", function() {
      setVidInfos();
      vidInfoMod.show();
      vidconMenu.hide();
    });
    
    $("#pauseBtn1").on("mousedown touchstart", function() {
      $(this).css({
        "background": "linear-gradient(to right, navy, skyblue, navy)",
        "border-style": "inset",
        "border-color": "skyblue"
      });
    });
    
    $("#pauseBtn1").on("mouseup touchend", function() {
      $(this).css({
        "background": "#000029",
        "border-style": "outset",
        "border-color": "#000029"
      });
    });
    
    $("#pauseBtn2").on("mousedown touchstart", function() {
      $(this).css({
        "background": "linear-gradient(to right, navy, skyblue, navy)",
        "border-style": "inset",
        "border-color": "skyblue"
      });
    });
    
    $("#pauseBtn2").on("mouseup touchend", function() {
      $(this).css({
        "background": "#000029",
        "border-style": "outset",
        "border-color": "#000029"
      });
    });
    
    vidrewBtn1.on("mousedown touchstart", function() {
      $(this).css({
        "background": "linear-gradient(to right, navy, skyblue, navy)",
        "border-style": "inset",
        "border-color": "skyblue"
      });
    });
    
    vidrewBtn1.on("mouseup touchend", function() {
      $(this).css({
        "background": "#000029",
        "border-style": "outset",
        "border-color": "#000029"
      });
    });
    
    vidforwBtn1.on("mousedown touchstart", function() {
      $(this).css({
        "background": "linear-gradient(to right, navy, skyblue, navy)",
        "border-style": "inset",
        "border-color": "skyblue"
      });
    });
    
    vidforwBtn1.on("mouseup touchend", function() {
      $(this).css({
        "background": "#000029",
        "border-style": "outset",
        "border-color": "#000029"
      });
    });
    
    vidrewBtn2.on("mousedown touchstart", function() {
      $(this).css({
        "background": "linear-gradient(to right, navy, skyblue, navy)",
        "border-style": "inset",
        "border-color": "skyblue"
      });
    });
    
    vidrewBtn2.on("mouseup touchend", function() {
      $(this).css({
        "background": "#000029",
        "border-style": "outset",
        "border-color": "#000029"
      });
    });
    
    vidforwBtn2.on("mousedown touchstart", function() {
      $(this).css({
        "background": "linear-gradient(to right, navy, skyblue, navy)",
        "border-style": "inset",
        "border-color": "skyblue"
      });
    });
    
    vidforwBtn2.on("mouseup touchend", function() {
      $(this).css({
        "background": "#000029",
        "border-style": "outset",
        "border-color": "#000029"
      });
    });
    
    toggleVolume1.on("mousedown touchstart", function() {
      $(this).css({
        "background": "linear-gradient(to right, navy, skyblue, navy)",
        "border-style": "inset",
        "border-color": "skyblue"
      });
    });
    
    toggleVolume1.on("mouseup touchend", function() {
      $(this).css({
        "background": "#000029",
        "border-style": "outset",
        "border-color": "#000029"
      });
    });
    
    toggleVolume2.on("mousedown touchstart", function() {
      $(this).css({
        "background": "linear-gradient(to right, navy, skyblue, navy)",
        "border-style": "inset",
        "border-color": "skyblue"
      });
    });
    
    toggleVolume2.on("mouseup touchend", function() {
      $(this).css({
        "background": "#000029",
        "border-style": "outset",
        "border-color": "#000029"
      });
    });
    
    settingBtn1.on("mousedown touchstart", function() {
      $(this).css({
        "background": "linear-gradient(to right, darkred, red, darkred)",
        "border-style": "inset",
        "border-color": "red"
      });
    });
    
    settingBtn2.on("mouseup touchend", function() {
      $(this).css({
        "background": "#290000",
        "border-style": "outset",
        "border-color": "#290000"
      });
    });
    
    settingBtn2.on("mousedown touchstart", function() {
      $(this).css({
        "background": "linear-gradient(to right, darkred, red, darkred)",
        "border-style": "inset",
        "border-color": "red"
      });
    });
    
    settingBtn1.on("mouseup touchend", function() {
      $(this).css({
        "background": "#290000",
        "border-style": "outset",
        "border-color": "#290000"
      });
    });
    
    vidrecBtn1.on("mousedown touchstart", function() {
      $(this).css({
        "background": "linear-gradient(to right, darkred, red, darkred)",
        "border-style": "inset",
        "border-color": "red"
      });
    });
    
    vidrecBtn2.on("mousedown touchstart", function() {
      $(this).css({
        "background": "linear-gradient(to right, darkred, red, darkred)",
        "border-style": "inset",
        "border-color": "red"
      });
    });
    
    vidrecBtn1.on("mouseup touchend", function() {
      $(this).css({
        "background": "#290000",
        "border-style": "outset",
        "border-color": "#290000"
      });
    });
    
    vidrecBtn2.on("mouseup touchend", function() {
      $(this).css({
        "background": "#290000",
        "border-style": "outset",
        "border-color": "#290000"
      });
    });
    
    vidskiprewBtn.on("mousedown touchstart", function() {
      $(this).css({
        "background": "linear-gradient(to right, #5b5d00, yellow, #5b5d00)",
        "border-style": "inset",
        "border-color": "yellow"
      });
    });
    
    vidskiprewBtn.on("mouseup touchend", function() {
      $(this).css({
        "background": "#292900",
        "border-style": "outset",
        "border-color": "#292900"
      });
    });
    
    vidskipforwBtn.on("mousedown touchstart", function() {
      $(this).css({
        "background": "linear-gradient(to right, #5b5d00, yellow, #5b5d00)",
        "border-style": "inset",
        "border-color": "yellow"
      });
    });
    
    vidskipforwBtn.on("mouseup touchend", function() {
      $(this).css({
        "background": "#292900",
        "border-style": "outset",
        "border-color": "#292900"
      });
    });
    
    vidskiprewBtn2.on("mousedown touchstart", function() {
      $(this).css({
        "background": "linear-gradient(to right, #5b5d00, yellow, #5b5d00)",
        "border-style": "inset",
        "border-color": "yellow"
      });
    });
    
    vidskiprewBtn2.on("mouseup touchend", function() {
      $(this).css({
        "background": "#292900",
        "border-style": "outset",
        "border-color": "#292900"
      });
    });
    
    vidfxBtn1.on("mousedown touchstart", function() {
      $(this).css({
        "background": "linear-gradient(to right, green, lime, green)",
        "border-style": "inset",
        "border-color": "lime"
      });
    });
    
    vidfxBtn1.on("mouseup touchend", function() {
      $(this).css({
        "background": "#002900",
        "border-style": "outset",
        "border-color": "#002900"
      });
    });
    
    vidfxBtn2.on("mousedown touchstart", function() {
      $(this).css({
        "background": "linear-gradient(to right, green, lime, green)",
        "border-style": "inset",
        "border-color": "lime"
      });
    });
    
    vidfxBtn2.on("mouseup touchend", function() {
      $(this).css({
        "background": "#002900",
        "border-style": "outset",
        "border-color": "#002900"
      });
    });
    
    vidpitchdownBtn.on("mousedown touchstart", function() {
      $(this).css({
        "background": "linear-gradient(to right, green, lime, green)",
        "border-style": "inset",
        "border-color": "lime"
      });
    });
    
    vidpitchdownBtn.on("mouseup touchend", function() {
      $(this).css({
        "background": "#002900",
        "border-style": "outset",
        "border-color": "#002900"
      });
    });
    
    vidpitchupBtn.on("mousedown touchstart", function() {
      $(this).css({
        "background": "linear-gradient(to right, green, lime, green)",
        "border-style": "inset",
        "border-color": "lime"
      });
    });
    
    vidpitchupBtn.on("mouseup touchend", function() {
      $(this).css({
        "background": "#002900",
        "border-style": "outset",
        "border-color": "#002900"
      });
    });
    
    vidpitchdownBtn2.on("mousedown touchstart", function() {
      $(this).css({
        "background": "linear-gradient(to right, green, lime, green)",
        "border-style": "inset",
        "border-color": "lime"
      });
    });
    
    vidpitchdownBtn2.on("mouseup touchend", function() {
      $(this).css({
        "background": "#002900",
        "border-style": "outset",
        "border-color": "#002900"
      });
    });
    
    vidpitchupBtn2.on("mousedown touchstart", function() {
      $(this).css({
        "background": "linear-gradient(to right, green, lime, green)",
        "border-style": "inset",
        "border-color": "lime"
      });
    });
    
    vidpitchupBtn2.on("mouseup touchend", function() {
      $(this).css({
        "background": "#002900",
        "border-style": "outset",
        "border-color": "#002900"
      });
    });
    
    vidskipforwBtn2.on("mousedown touchstart", function() {
      $(this).css({
        "background": "linear-gradient(to right, #5b5d00, yellow, #5b5d00)",
        "border-style": "inset",
        "border-color": "yellow"
      });
    });
    
    vidskipforwBtn2.on("mouseup touchend", function() {
      $(this).css({
        "background": "#292900",
        "border-style": "outset",
        "border-color": "#292900"
      });
    });
    
    vidchgPlayer1.on("mousedown touchstart", function() {
      $(this).css({
        "background": "linear-gradient(to right, navy, skyblue, navy)",
        "border-style": "inset",
        "border-color": "skyblue"
      });
    });
    
    vidchgPlayer1.on("mouseup touchend", function() {
      $(this).css({
        "background": "#000029",
        "border-style": "outset",
        "border-color": "#000029"
      });
    });
    
    vidchgPlayer2.on("mousedown touchstart", function() {
      $(this).css({
        "background": "linear-gradient(to right, navy, skyblue, navy)",
        "border-style": "inset",
        "border-color": "skyblue"
      });
    });
    
    vidchgPlayer2.on("mouseup touchend", function() {
      $(this).css({
        "background": "#000029",
        "border-style": "outset",
        "border-color": "#000029"
      });
    });
    
    function videffect1() {
	var vidmove1 = vidfader1.val();
	var vidfilter = vidEffectMode.val();
	var widescreen1 = vidWidth.val();
	var heiscreen1 = vidHeight.val();
	var rotlv = rotlevel.val();
	var vidbright = vidmove1*100;
	var vidblur = (1-vidmove1)*100;
	var shrink1 = widescreen1*vidmove1;
	var shrinky1 = heiscreen1*vidmove1;
	var expand1 = widescreen1*(3-2*vidmove1);
	var expand3 = heiscreen1*(3-2*vidmove1);
	var compr1 = widescreen1*Math.pow(vidmove1,2);
	var compr3 = heiscreen1*Math.pow(vidmove1,2);
	var rothori1 = widescreen1*vidmove1*Math.sin((4*rotlv+1)/2*Math.PI*vidmove1);
	var rotvert1 = heiscreen1*vidmove1*Math.sin((4*rotlv+1)/2*Math.PI*vidmove1);
	var slihori1 = 100*(1-vidmove1);
	var silvert1 = -100*(1-vidmove1);
	var strhorilr1 = -90*widescreen1*(1-vidmove1);
	var strverttb1 = -90*heiscreen1*(1-vidmove1);
	var strhorirl1 = 90*widescreen1*(1-vidmove1);
	var strvertbt1 = 90*heiscreen1*(1-vidmove1);
	var pophori1 = 100*(1-vidmove1)*Math.sin((4*rotlv+1)/2*Math.PI*vidmove1);
	var popvert1 = -100*(1-vidmove1)*Math.sin((4*rotlv+1)/2*Math.PI*vidmove1);
	var slidia1 = -100*(1-Math.sqrt(vidmove1));
	var popdia1 = -100*(1-Math.sqrt(vidmove1))*Math.sin((4*rotlv+1)/2*Math.PI*vidmove1);
	var persp1 = 2000*(1-vidmove1);
	var rotdim1 = 90*(1-vidmove1);
	var rotdim2 = -90*(1-vidmove1);
	var rotdim5 = 360*rotlv*(1-vidmove1);
	var slihori11 = 400*(-2*Math.pow(vidmove1,2)+3*vidmove1-1);
	var silvert11 = 400*(2*Math.pow(vidmove1,2)-3*vidmove1+1);
	var slihori111 = 900*(16/3*Math.pow(vidmove1,3)-32/3*Math.pow(vidmove1,2)+19/3*vidmove1-1);
	var silvert111 = 900*(-16/3*Math.pow(vidmove1,3)+32/3*Math.pow(vidmove1,2)-19/3*vidmove1+1);
	var compr11 = widescreen1*(-3*Math.pow(vidmove1,2)+4*vidmove1);
	var compr33 = heiscreen1*(-3*Math.pow(vidmove1,2)+4*vidmove1);
  
  
	if (vidfilter === "filter1") {
  	vidplayer1.css({"filter":"blur("+vidblur+"px)"});
		} else if (vidfilter === "filter2") {
  	vidplayer1.css({"filter":"brightness("+vidbright+"%)"});
        } else if (vidfilter === "filter3") {
  	vidplayer1.css({"filter":"contrast("+vidbright+"%)"});
        } else if (vidfilter === "filter4") {
  	vidplayer1.css({"filter":"opacity("+vidbright+"%)"});
        } else if (vidfilter === "filter5") {
 	 vidplayer1.css({"transform":"scale("+shrink1+", "+shrinky1+")"});
        } else if (vidfilter === "filter6") {
 	 vidplayer1.css({"transform":"scale("+expand1+", "+expand3+")"});
        } else if (vidfilter === "filter7") {
 	 vidplayer1.css({"transform":"scale("+compr1+","+heiscreen1+")"});
        } else if (vidfilter === "filter8") {
  	vidplayer1.css({"transform":"scale("+widescreen1+","+compr3+")"});
        } else if (vidfilter === "filter9") {
  	vidplayer1.css({"transform":"scale("+rothori1+","+shrinky1+")"});
        } else if (vidfilter === "filter10") {
  	vidplayer1.css({"transform":"scale("+shrink1+","+rotvert1+")"});
        } else if (vidfilter === "filter11") {
  	vidplayer1.css({"transform":"scale("+widescreen1+","+heiscreen1+") translateX("+slihori1+"%)"});
        } else if (vidfilter === "filter12") {
  	vidplayer1.css({"transform":"scale("+widescreen1+","+heiscreen1+") translateY("+silvert1+"%)"});
        } else if (vidfilter === "filter13") {
  	vidplayer1.css({"transform":"scale("+widescreen1+","+heiscreen1+") translate("+slihori1+"%,"+slidia1+"%)"});
        } else if (vidfilter === "filter14") {
  	vidplayer1.css({"transform":"scale("+shrink1+","+shrinky1+") translateX("+slihori1+"%)"});
        } else if (vidfilter === "filter15") {
 	 vidplayer1.css({"transform":"scale("+shrink1+","+shrinky1+") translateY("+silvert1+"%)"});
        } else if (vidfilter === "filter16") {
 	 vidplayer1.css({"transform":"scale("+shrink1+","+shrinky1+") translate("+slihori1+"%,"+slidia1+"%)"});
        } else if (vidfilter === "filter17") {
  	vidplayer1.css({"transform":"scale("+rothori1+","+shrinky1+") translate("+slihori1+"%,"+slidia1+"%)"});
        } else if (vidfilter === "filter18") {
  	vidplayer1.css({"transform":"scale("+shrink1+","+rotvert1+") translate("+slihori1+"%,"+slidia1+"%)"});
        } else if (vidfilter === "filter19") {
 	 vidplayer1.css({"transform":"scale("+expand1+", "+compr1+")"});
        } else if (vidfilter === "filter20") {
  	vidplayer1.css({"transform":"scale("+compr3+", "+expand3+")"});
        } else if (vidfilter === "filter21") {
  	vidplayer1.css({"transform":"scale("+widescreen1+","+heiscreen1+") skewX("+strhorilr1+"deg)"});
        } else if (vidfilter === "filter22") {
  	vidplayer1.css({"transform":"scale("+widescreen1+","+heiscreen1+") skewX("+strhorirl1+"deg)"});
        } else if (vidfilter === "filter23") {
  	vidplayer1.css({"transform":"scale("+widescreen1+","+heiscreen1+") skewY("+strverttb1+"deg)"});
        } else if (vidfilter === "filter24") {
  	vidplayer1.css({"transform":"scale("+widescreen1+","+heiscreen1+") skewY("+strvertbt1+"deg)"});
        } else if (vidfilter === "filter25") {
  	vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translateX("+pophori1+"%)"});
        } else if (vidfilter === "filter26") {
  	vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translateY("+popvert1+"%)"});
        } else if (vidfilter === "filter27") {
  	vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori1+"%,"+popdia1+"%)"});
        } else if (vidfilter === "filter28") {
  	vidplayer1.css({"transform":"scale("+rothori1+","+compr3+") translateX("+pophori1+"%)"});
        } else if (vidfilter === "filter29") {
  	vidplayer1.css({"transform":"scale("+rothori1+","+compr3+") translateY("+popvert1+"%)"});
        } else if (vidfilter === "filter30") {
  	vidplayer1.css({"transform":"scale("+rothori1+","+compr3+") translate("+slihori1+"%,"+popdia1+"%)"});
        } else if (vidfilter === "filter31") {
  	vidplayer1.css({"transform":"scale("+shrink1+", "+shrinky1+")","border-radius":"100%"});
        } else if (vidfilter === "filter32") {
  	vidplayer1.css({"transform":"scale("+compr1+","+heiscreen1+")","border-radius":"100%"});
        } else if (vidfilter === "filter33") {
  	vidplayer1.css({"transform":"scale("+widescreen1+","+compr3+")","border-radius":"100%"});
        } else if (vidfilter === "filter34") {
  	vidplayer1.css({"transform":"scale("+rothori1+","+shrinky1+")","border-radius":"100%"});
        } else if (vidfilter === "filter35") {
  	vidplayer1.css({"transform":"scale("+shrink1+","+rotvert1+")","border-radius":"100%"});
        } else if (vidfilter === "filter36") {
  	vidplayer1.css({"transform":"scale("+shrink1+","+shrinky1+") translateX("+slihori1+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter37") {
  	vidplayer1.css({"transform":"scale("+shrink1+","+shrinky1+") translateY("+silvert1+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter38") {
  	vidplayer1.css({"transform":"scale("+shrink1+","+shrinky1+") translate("+slihori1+"%,"+slidia1+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter39") {
  	vidplayer1.css({"transform":"scale("+rothori1+","+shrinky1+") translate("+slihori1+"%,"+slidia1+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter40") {
  	vidplayer1.css({"transform":"scale("+shrink1+","+rotvert1+") translate("+slihori1+"%,"+slidia1+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter41") {
  	vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translateX("+pophori1+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter42") {
  	vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translateY("+popvert1+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter43") {
  	vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori1+"%,"+popdia1+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter44") {
  	vidplayer1.css({"transform":"scale("+rothori1+","+compr3+") translateX("+pophori1+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter45") {
  	vidplayer1.css({"transform":"scale("+rothori1+","+compr3+") translateY("+popvert1+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter46") {
  	vidplayer1.css({"transform":"scale("+rothori1+","+compr3+") translate("+slihori1+"%,"+popdia1+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter47") {
  	vidplayer1.css({"transform":"scale("+widescreen1+","+heiscreen1+") translateX("+slihori1+"%) perspective(1500px) rotate3d(0,1,0,60deg)"});
        } else if (vidfilter === "filter48") {
  	vidplayer1.css({"transform":"scale("+widescreen1+","+heiscreen1+") translateY("+silvert1+"%) perspective(1000px) rotate3d(1,0,0,45deg)"});
        } else if (vidfilter === "filter49") {
  	vidplayer1.css({"transform":"scale("+widescreen1+","+heiscreen1+") translate("+slihori1+"%,"+slidia1+"%) perspective(1000px) rotate3d(1,0,0,45deg)"});
        } else if (vidfilter === "filter50") {
  	vidplayer1.css({"transform":"scale("+shrink1+","+shrinky1+") translateX("+slihori1+"%) perspective(1500px) rotate3d(0,1,0,60deg)"});
        } else if (vidfilter === "filter51") {
  	vidplayer1.css({"transform":"scale("+shrink1+","+shrinky1+") translateY("+silvert1+"%) perspective(1000px) rotate3d(1,0,0,45deg)"});
        } else if (vidfilter === "filter52") {
  	vidplayer1.css({"transform":"scale("+shrink1+","+shrinky1+") translate("+slihori1+"%,"+slidia1+"%) perspective(1000px) rotate3d(1,0,0,45deg)"});
        } else if (vidfilter === "filter53") {
  	vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translateX("+pophori1+"%) perspective(1500px) rotate3d(0,1,0,60deg)"});
        } else if (vidfilter === "filter54") {
  	vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translateY("+popvert1+"%) perspective(1000px) rotate3d(1,0,0,45deg)"});
        } else if (vidfilter === "filter55") {
  	vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori1+"%,"+popdia1+"%) perspective(1000px) rotate3d(1,0,0,45deg)"});
        } else if (vidfilter === "filter56") {
  	vidplayer1.css({"transform":"scale("+widescreen1+","+heiscreen1+") perspective("+persp1+"px) rotate3d(0,1,0,"+rotdim1+"deg)"});
        } else if (vidfilter === "filter57") {
  	vidplayer1.css({"transform":"scale("+widescreen1+","+heiscreen1+") perspective("+persp1+"px) rotate3d(0,1,0,"+rotdim2+"deg)"});
        } else if (vidfilter === "filter58") {
  	vidplayer1.css({"transform":"scale("+widescreen1+","+heiscreen1+") perspective("+persp1+"px) rotate3d(1,0,0,"+rotdim1+"deg)"});
        } else if (vidfilter === "filter59") {
  	vidplayer1.css({"transform":"scale("+widescreen1+","+heiscreen1+") perspective("+persp1+"px) rotate3d(1,0,0,"+rotdim2+"deg)"});
        } else if (vidfilter === "filter60") {
  	vidplayer1.css({"transform":"scale("+widescreen1+","+heiscreen1+") perspective("+persp1+"px) rotate3d(1,1,0,"+rotdim1+"deg)"});
        } else if (vidfilter === "filter61") {
  	vidplayer1.css({"transform":"scale("+widescreen1+","+heiscreen1+") perspective("+persp1+"px) rotate3d(1,1,0,"+rotdim2+"deg)"});
        } else if (vidfilter === "filter62") {
  	vidplayer1.css({"transform":"scale("+shrink1+","+shrinky1+") translateX("+slihori1+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim5+"deg)"});
        } else if (vidfilter === "filter63") {
  	vidplayer1.css({"transform":"scale("+shrink1+","+shrinky1+") translateY("+silvert1+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim5+"deg)"});
        } else if (vidfilter === "filter64") {
  	vidplayer1.css({"transform":"scale("+shrink1+","+shrinky1+") translate("+slihori1+"%,"+slidia1+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim5+"deg)"});
        } else if (vidfilter === "filter65") {
  	vidplayer1.css({"transform":"scale("+shrink1+","+shrinky1+") translateX("+slihori1+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim5+"deg)"});
        } else if (vidfilter === "filter66") {
  	vidplayer1.css({"transform":"scale("+shrink1+","+shrinky1+") translateY("+silvert1+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim5+"deg)"});
        } else if (vidfilter === "filter67") {
  	vidplayer1.css({"transform":"scale("+shrink1+","+shrinky1+") translate("+slihori1+"%,"+slidia1+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim5+"deg)"});
        } else if (vidfilter === "filter68") {
  vidplayer1.css({"transform":"scale("+shrink1+","+shrinky1+") translateX("+slihori1+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim5+"deg)"});
        } else if (vidfilter === "filter69") {
  vidplayer1.css({"transform":"scale("+shrink1+","+shrinky1+") translateY("+silvert1+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim5+"deg)"});
        } else if (vidfilter === "filter70") {
  vidplayer1.css({"transform":"scale("+shrink1+","+shrinky1+") translate("+slihori1+"%,"+slidia1+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim5+"deg)"});
        } else if (vidfilter === "filter71") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translateX("+pophori1+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim5+"deg)"});
        } else if (vidfilter === "filter72") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translateY("+popvert1+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim5+"deg)"});
        } else if (vidfilter === "filter73") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+pophori1+"%,"+popdia1+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim5+"deg)"});
        } else if (vidfilter === "filter74") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translateX("+pophori1+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim5+"deg)"});
        } else if (vidfilter === "filter75") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translateY("+popvert1+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim5+"deg)"});
        } else if (vidfilter === "filter76") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+pophori1+"%,"+popdia1+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim5+"deg)"});
        } else if (vidfilter === "filter77") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translateX("+pophori1+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim5+"deg)"});
        } else if (vidfilter === "filter78") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translateY("+popvert1+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim5+"deg)"});
        } else if (vidfilter === "filter79") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+pophori1+"%,"+popdia1+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim5+"deg)"});
        } else if (vidfilter === "filter80") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") skewX("+strhorilr1+"deg)"});
        } else if (vidfilter === "filter81") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") skewX("+strhorirl1+"deg)"});
        } else if (vidfilter === "filter82") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") skewY("+strverttb1+"deg)"});
        } else if (vidfilter === "filter83") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") skewY("+strvertbt1+"deg)"});
        } else if (vidfilter === "filter84") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") skewX("+strhorilr1+"deg) translateX("+slihori1+"%)"});
        } else if (vidfilter === "filter85") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") skewX("+strhorirl1+"deg) translateX("+slihori1+"%)"});
        } else if (vidfilter === "filter86") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") skewY("+strverttb1+"deg) translateX("+slihori1+"%)"});
        } else if (vidfilter === "filter87") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") skewY("+strvertbt1+"deg) translateX("+slihori1+"%)"});
        } else if (vidfilter === "filter88") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") skewX("+strhorilr1+"deg) translateY("+silvert1+"%)"});
        } else if (vidfilter === "filter89") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") skewX("+strhorirl1+"deg) translateY("+silvert1+"%)"});
        } else if (vidfilter === "filter90") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") skewY("+strverttb1+"deg) translateY("+silvert1+"%)"});
        } else if (vidfilter === "filter91") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") skewY("+strvertbt1+"deg) translateY("+silvert1+"%)"});
        } else if (vidfilter === "filter92") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") skewX("+strhorilr1+"deg) translate("+slihori1+"%,"+slidia1+"%)"});
        } else if (vidfilter === "filter93") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") skewX("+strhorirl1+"deg) translate("+slihori1+"%,"+slidia1+"%)"});
        } else if (vidfilter === "filter94") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") skewY("+strverttb1+"deg) translate("+slihori1+"%,"+slidia1+"%)"});
        } else if (vidfilter === "filter95") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") skewY("+strvertbt1+"deg) translate("+slihori1+"%,"+slidia1+"%)"});
        } else if (vidfilter === "filter96") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") skewX("+strhorilr1+"deg) translate("+pophori1+"%,"+popdia1+"%)"});
        } else if (vidfilter === "filter97") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") skewX("+strhorirl1+"deg) translate("+pophori1+"%,"+popdia1+"%)"});
        } else if (vidfilter === "filter98") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") skewY("+strverttb1+"deg) translate("+pophori1+"%,"+popdia1+"%)"});
        } else if (vidfilter === "filter99") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") skewY("+strvertbt1+"deg) translate("+pophori1+"%,"+popdia1+"%)"});
        } else if (vidfilter === "filter100") {
  vidplayer1.css({"transform":"scale("+shrink1+", "+shrinky1+")","opacity":vidmove1});
        } else if (vidfilter === "filter101") {
  vidplayer1.css({"transform":"scale("+expand1+", "+expand3+")","opacity":vidmove1});
        } else if (vidfilter === "filter102") {
  vidplayer1.css({"transform":"scale("+compr1+","+heiscreen1+")","opacity":vidmove1});
        } else if (vidfilter === "filter103") {
  vidplayer1.css({"transform":"scale("+widescreen1+","+compr3+")","opacity":vidmove1});
        } else if (vidfilter === "filter104") {
  vidplayer1.css({"transform":"scale("+rothori1+","+shrinky1+")","opacity":vidmove1});
        } else if (vidfilter === "filter105") {
  vidplayer1.css({"transform":"scale("+shrink1+","+rotvert1+")","opacity":vidmove1});
        } else if (vidfilter === "filter106") {
  vidplayer1.css({"transform":"scale("+shrink1+","+shrinky1+") translateX("+slihori1+"%)","opacity":vidmove1});
        } else if (vidfilter === "filter107") {
  vidplayer1.css({"transform":"scale("+shrink1+","+shrinky1+") translateY("+silvert1+"%)","opacity":vidmove1});
        } else if (vidfilter === "filter108") {
  vidplayer1.css({"transform":"scale("+shrink1+","+shrinky1+") translate("+slihori1+"%,"+slidia1+"%)","opacity":vidmove1});
        } else if (vidfilter === "filter109") {
  vidplayer1.css({"transform":"scale("+rothori1+","+shrinky1+") translate("+slihori1+"%,"+slidia1+"%)","opacity":vidmove1});
        } else if (vidfilter === "filter110") {
  vidplayer1.css({"transform":"scale("+shrink1+","+rotvert1+") translate("+slihori1+"%,"+slidia1+"%)","opacity":vidmove1});
        } else if (vidfilter === "filter111") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translateX("+pophori1+"%)","opacity":vidmove1});
        } else if (vidfilter === "filter112") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translateY("+popvert1+"%)","opacity":vidmove1});
        } else if (vidfilter === "filter113") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori1+"%,"+popdia1+"%)","opacity":vidmove1});
        } else if (vidfilter === "filter114") {
  vidplayer1.css({"transform":"scale("+rothori1+","+compr3+") translateX("+pophori1+"%)","opacity":vidmove1});
        } else if (vidfilter === "filter115") {
  vidplayer1.css({"transform":"scale("+rothori1+","+compr3+") translateY("+popvert1+"%)","opacity":vidmove1});
        } else if (vidfilter === "filter116") {
  vidplayer1.css({"transform":"scale("+rothori1+","+compr3+") translate("+slihori1+"%,"+popdia1+"%)","opacity":vidmove1});
        } else if (vidfilter === "filter117") {
  vidplayer1.css({"transform":"scale("+shrink1+", "+shrinky1+")","opacity":vidmove1,"border-radius":"100%"});
        } else if (vidfilter === "filter118") {
  vidplayer1.css({"transform":"scale("+expand1+", "+expand3+")","opacity":vidmove1,"border-radius":"100%"});
        } else if (vidfilter === "filter119") {
  vidplayer1.css({"transform":"scale("+compr1+","+heiscreen1+")","opacity":vidmove1,"border-radius":"100%"});
        } else if (vidfilter === "filter120") {
  vidplayer1.css({"transform":"scale("+widescreen1+","+compr3+")","opacity":vidmove1,"border-radius":"100%"});
        } else if (vidfilter === "filter121") {
  vidplayer1.css({"transform":"scale("+rothori1+","+shrinky1+")","opacity":vidmove1,"border-radius":"100%"});
        } else if (vidfilter === "filter122") {
  vidplayer1.css({"transform":"scale("+shrink1+","+rotvert1+")","opacity":vidmove1,"border-radius":"100%"});
        } else if (vidfilter === "filter123") {
  vidplayer1.css({"transform":"scale("+shrink1+","+shrinky1+") translateX("+slihori1+"%)","opacity":vidmove1,"border-radius":"100%"});
        } else if (vidfilter === "filter124") {
  vidplayer1.css({"transform":"scale("+shrink1+","+shrinky1+") translateY("+silvert1+"%)","opacity":vidmove1,"border-radius":"100%"});
        } else if (vidfilter === "filter125") {
  vidplayer1.css({"transform":"scale("+shrink1+","+shrinky1+") translate("+slihori1+"%,"+slidia1+"%)","opacity":vidmove1,"border-radius":"100%"});
        } else if (vidfilter === "filter126") {
  vidplayer1.css({"transform":"scale("+rothori1+","+shrinky1+") translate("+slihori1+"%,"+slidia1+"%)","opacity":vidmove1,"border-radius":"100%"});
        } else if (vidfilter === "filter127") {
  vidplayer1.css({"transform":"scale("+shrink1+","+rotvert1+") translate("+slihori1+"%,"+slidia1+"%)","opacity":vidmove1,"border-radius":"100%"});
        } else if (vidfilter === "filter128") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translateX("+pophori1+"%)","opacity":vidmove1,"border-radius":"100%"});
        } else if (vidfilter === "filter129") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translateY("+popvert1+"%)","opacity":vidmove1,"border-radius":"100%"});
        } else if (vidfilter === "filter130") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori1+"%,"+popdia1+"%)","opacity":vidmove1,"border-radius":"100%"});
        } else if (vidfilter === "filter131") {
  vidplayer1.css({"transform":"scale("+rothori1+","+compr3+") translateX("+pophori1+"%)","opacity":vidmove1,"border-radius":"100%"});
        } else if (vidfilter === "filter132") {
  vidplayer1.css({"transform":"scale("+rothori1+","+compr3+") translateY("+popvert1+"%)","opacity":vidmove1,"border-radius":"100%"});
        } else if (vidfilter === "filter133") {
  vidplayer1.css({"transform":"scale("+rothori1+","+compr3+") translate("+slihori1+"%,"+popdia1+"%)","opacity":vidmove1,"border-radius":"100%"});
        } else if (vidfilter === "filter134") {
  vidplayer1.css({"transform":"scale("+widescreen1+","+heiscreen1+") translateX("+slihori1+"%) perspective(1500px) rotate3d(0,1,0,60deg)","opacity":vidmove1});
        } else if (vidfilter === "filter135") {
  vidplayer1.css({"transform":"scale("+widescreen1+","+heiscreen1+") translateY("+silvert1+"%) perspective(1000px) rotate3d(1,0,0,45deg)","opacity":vidmove1});
        } else if (vidfilter === "filter136") {
  vidplayer1.css({"transform":"scale("+widescreen1+","+heiscreen1+") translate("+slihori1+"%,"+slidia1+"%) perspective(1000px) rotate3d(1,0,0,45deg)","opacity":vidmove1});
        } else if (vidfilter === "filter137") {
  vidplayer1.css({"transform":"scale("+shrink1+","+shrinky1+") translateX("+slihori1+"%) perspective(1500px) rotate3d(0,1,0,60deg)","opacity":vidmove1});
        } else if (vidfilter === "filter138") {
  vidplayer1.css({"transform":"scale("+shrink1+","+shrinky1+") translateY("+silvert1+"%) perspective(1000px) rotate3d(1,0,0,45deg)","opacity":vidmove1});
        } else if (vidfilter === "filter139") {
  vidplayer1.css({"transform":"scale("+shrink1+","+shrinky1+") translate("+slihori1+"%,"+slidia1+"%) perspective(1000px) rotate3d(1,0,0,45deg)","opacity":vidmove1});
        } else if (vidfilter === "filter140") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translateX("+pophori1+"%) perspective(1500px) rotate3d(0,1,0,60deg)","opacity":vidmove1});
        } else if (vidfilter === "filter141") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translateY("+popvert1+"%) perspective(1000px) rotate3d(1,0,0,45deg)","opacity":vidmove1});
        } else if (vidfilter === "filter142") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori1+"%,"+popdia1+"%) perspective(1000px) rotate3d(1,0,0,45deg)","opacity":vidmove1});
        } else if (vidfilter === "filter143") {
  vidplayer1.css({"transform":"scale("+widescreen1+","+heiscreen1+") perspective("+persp1+"px) rotate3d(0,1,0,"+rotdim1+"deg)","opacity":vidmove1});
        } else if (vidfilter === "filter144") {
  vidplayer1.css({"transform":"scale("+widescreen1+","+heiscreen1+") perspective("+persp1+"px) rotate3d(0,1,0,"+rotdim2+"deg)","opacity":vidmove1});
        } else if (vidfilter === "filter145") {
  vidplayer1.css({"transform":"scale("+widescreen1+","+heiscreen1+") perspective("+persp1+"px) rotate3d(1,0,0,"+rotdim1+"deg)","opacity":vidmove1});
        } else if (vidfilter === "filter146") {
  vidplayer1.css({"transform":"scale("+widescreen1+","+heiscreen1+") perspective("+persp1+"px) rotate3d(1,0,0,"+rotdim2+"deg)","opacity":vidmove1});
        } else if (vidfilter === "filter147") {
  vidplayer1.css({"transform":"scale("+widescreen1+","+heiscreen1+") perspective("+persp1+"px) rotate3d(1,1,0,"+rotdim1+"deg)","opacity":vidmove1});
        } else if (vidfilter === "filter148") {
  vidplayer1.css({"transform":"scale("+widescreen1+","+heiscreen1+") perspective("+persp1+"px) rotate3d(1,1,0,"+rotdim2+"deg)","opacity":vidmove1});
        } else if (vidfilter === "filter149") {
  vidplayer1.css({"transform":"scale("+shrink1+","+shrinky1+") translateX("+slihori1+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim5+"deg)","opacity":vidmove1});
        } else if (vidfilter === "filter150") {
  vidplayer1.css({"transform":"scale("+shrink1+","+shrinky1+") translateY("+silvert1+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim5+"deg)","opacity":vidmove1});
        } else if (vidfilter === "filter151") {
  vidplayer1.css({"transform":"scale("+shrink1+","+shrinky1+") translate("+slihori1+"%,"+slidia1+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim5+"deg)","opacity":vidmove1});
        } else if (vidfilter === "filter152") {
  vidplayer1.css({"transform":"scale("+shrink1+","+shrinky1+") translateX("+slihori1+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim5+"deg)","opacity":vidmove1});
        } else if (vidfilter === "filter153") {
  vidplayer1.css({"transform":"scale("+shrink1+","+shrinky1+") translateY("+silvert1+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim5+"deg)","opacity":vidmove1});
        } else if (vidfilter === "filter154") {
  vidplayer1.css({"transform":"scale("+shrink1+","+shrinky1+") translate("+slihori1+"%,"+slidia1+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim5+"deg)","opacity":vidmove1});
        } else if (vidfilter === "filter155") {
  vidplayer1.css({"transform":"scale("+shrink1+","+shrinky1+") translateX("+slihori1+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim5+"deg)","opacity":vidmove1});
        } else if (vidfilter === "filter156") {
  vidplayer1.css({"transform":"scale("+shrink1+","+shrinky1+") translateY("+silvert1+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim5+"deg)","opacity":vidmove1});
        } else if (vidfilter === "filter157") {
  vidplayer1.css({"transform":"scale("+shrink1+","+shrinky1+") translate("+slihori1+"%,"+slidia1+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim5+"deg)","opacity":vidmove1});
        } else if (vidfilter === "filter158") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translateX("+pophori1+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim5+"deg)","opacity":vidmove1});
        } else if (vidfilter === "filter159") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translateY("+popvert1+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim5+"deg)","opacity":vidmove1});
        } else if (vidfilter === "filter160") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+pophori1+"%,"+popdia1+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim5+"deg)","opacity":vidmove1});
        } else if (vidfilter === "filter161") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translateX("+pophori1+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim5+"deg)","opacity":vidmove1});
        } else if (vidfilter === "filter162") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translateY("+popvert1+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim5+"deg)","opacity":vidmove1});
        } else if (vidfilter === "filter163") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+pophori1+"%,"+popdia1+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim5+"deg)","opacity":vidmove1});
        } else if (vidfilter === "filter164") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translateX("+pophori1+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim5+"deg)","opacity":vidmove1});
        } else if (vidfilter === "filter165") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translateY("+popvert1+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim5+"deg)","opacity":vidmove1});
        } else if (vidfilter === "filter166") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+pophori1+"%,"+popdia1+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim5+"deg)","opacity":vidmove1});
        } else if (vidfilter === "filter167") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") skewX("+strhorilr1+"deg)","opacity":vidmove1});
        } else if (vidfilter === "filter168") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") skewX("+strhorirl1+"deg)","opacity":vidmove1});
        } else if (vidfilter === "filter169") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") skewY("+strverttb1+"deg)","opacity":vidmove1});
        } else if (vidfilter === "filter170") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") skewY("+strvertbt1+"deg)","opacity":vidmove1});
        } else if (vidfilter === "filter171") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") skewX("+strhorilr1+"deg) translateX("+slihori1+"%)","opacity":vidmove1});
        } else if (vidfilter === "filter172") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") skewX("+strhorirl1+"deg) translateX("+slihori1+"%)","opacity":vidmove1});
        } else if (vidfilter === "filter173") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") skewY("+strverttb1+"deg) translateX("+slihori1+"%)","opacity":vidmove1});
        } else if (vidfilter === "filter174") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") skewY("+strvertbt1+"deg) translateX("+slihori1+"%)","opacity":vidmove1});
        } else if (vidfilter === "filter175") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") skewX("+strhorilr1+"deg) translateY("+silvert1+"%)","opacity":vidmove1});
        } else if (vidfilter === "filter176") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") skewX("+strhorirl1+"deg) translateY("+silvert1+"%)","opacity":vidmove1});
        } else if (vidfilter === "filter177") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") skewY("+strverttb1+"deg) translateY("+silvert1+"%)","opacity":vidmove1});
        } else if (vidfilter === "filter178") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") skewY("+strvertbt1+"deg) translateY("+silvert1+"%)","opacity":vidmove1});
        } else if (vidfilter === "filter179") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") skewX("+strhorilr1+"deg) translate("+slihori1+"%,"+slidia1+"%)","opacity":vidmove1});
        } else if (vidfilter === "filter180") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") skewX("+strhorirl1+"deg) translate("+slihori1+"%,"+slidia1+"%)","opacity":vidmove1});
        } else if (vidfilter === "filter181") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") skewY("+strverttb1+"deg) translate("+slihori1+"%,"+slidia1+"%)","opacity":vidmove1});
        } else if (vidfilter === "filter182") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") skewY("+strvertbt1+"deg) translate("+slihori1+"%,"+slidia1+"%)","opacity":vidmove1});
        } else if (vidfilter === "filter183") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") skewX("+strhorilr1+"deg) translate("+pophori1+"%,"+popdia1+"%)","opacity":vidmove1});
        } else if (vidfilter === "filter184") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") skewX("+strhorirl1+"deg) translate("+pophori1+"%,"+popdia1+"%)","opacity":vidmove1});
        } else if (vidfilter === "filter185") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") skewY("+strverttb1+"deg) translate("+pophori1+"%,"+popdia1+"%)","opacity":vidmove1});
        } else if (vidfilter === "filter186") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") skewY("+strvertbt1+"deg) translate("+pophori1+"%,"+popdia1+"%)","opacity":vidmove1});
        } else if (vidfilter === "filter187") {
  vidplayer1.css({"transform":"scale("+shrink1+", "+shrinky1+") rotate("+rotdim5+"deg)","opacity":vidmove1});
        } else if (vidfilter === "filter188") {
  vidplayer1.css({"transform":"scale("+expand1+", "+expand3+") rotate("+rotdim5+"deg)","opacity":vidmove1});
        } else if (vidfilter === "filter189") {
  vidplayer1.css({"transform":"scale("+compr1+","+heiscreen1+") rotate("+rotdim5+"deg)","opacity":vidmove1});
        } else if (vidfilter === "filter190") {
  vidplayer1.css({"transform":"scale("+widescreen1+","+compr3+") rotate("+rotdim5+"deg)","opacity":vidmove1});
        } else if (vidfilter === "filter191") {
  vidplayer1.css({"transform":"scale("+rothori1+","+shrinky1+") rotate("+rotdim5+"deg)","opacity":vidmove1});
        } else if (vidfilter === "filter192") {
  vidplayer1.css({"transform":"scale("+shrink1+","+rotvert1+") rotate("+rotdim5+"deg)","opacity":vidmove1});
        } else if (vidfilter === "filter193") {
  vidplayer1.css({"transform":"scale("+shrink1+","+shrinky1+") translateX("+slihori1+"%) rotate("+rotdim5+"deg)","opacity":vidmove1});
        } else if (vidfilter === "filter194") {
  vidplayer1.css({"transform":"scale("+shrink1+","+shrinky1+") translateY("+silvert1+"%) rotate("+rotdim5+"deg)","opacity":vidmove1});
        } else if (vidfilter === "filter195") {
  vidplayer1.css({"transform":"scale("+shrink1+","+shrinky1+") translate("+slihori1+"%,"+slidia1+"%) rotate("+rotdim5+"deg)","opacity":vidmove1});
        } else if (vidfilter === "filter196") {
  vidplayer1.css({"transform":"scale("+rothori1+","+shrinky1+") translate("+slihori1+"%,"+slidia1+"%) rotate("+rotdim5+"deg)","opacity":vidmove1});
        } else if (vidfilter === "filter197") {
  vidplayer1.css({"transform":"scale("+shrink1+","+rotvert1+") translate("+slihori1+"%,"+slidia1+"%) rotate("+rotdim5+"deg)","opacity":vidmove1});
        } else if (vidfilter === "filter198") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translateX("+pophori1+"%) rotate("+rotdim5+"deg)","opacity":vidmove1});
        } else if (vidfilter === "filter199") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translateY("+popvert1+"%) rotate("+rotdim5+"deg)","opacity":vidmove1});
        } else if (vidfilter === "filter200") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori1+"%,"+popdia1+"%) rotate("+rotdim5+"deg)","opacity":vidmove1});
        } else if (vidfilter === "filter201") {
  vidplayer1.css({"transform":"scale("+rothori1+","+compr3+") translateX("+pophori1+"%) rotate("+rotdim5+"deg)","opacity":vidmove1});
        } else if (vidfilter === "filter202") {
  vidplayer1.css({"transform":"scale("+rothori1+","+compr3+") translateY("+popvert1+"%) rotate("+rotdim5+"deg)","opacity":vidmove1});
        } else if (vidfilter === "filter203") {
  vidplayer1.css({"transform":"scale("+rothori1+","+compr3+") translate("+slihori1+"%,"+popdia1+"%) rotate("+rotdim5+"deg)","opacity":vidmove1});
        } else if (vidfilter === "filter204") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori11+"%,"+slidia1+"%)"});
        } else if (vidfilter === "filter205") {
  vidplayer1.css({"transform":"scale("+rothori1+","+compr3+") translate("+slihori11+"%,"+slidia1+"%)"});
        } else if (vidfilter === "filter206") {
  vidplayer1.css({"transform":"scale("+compr1+","+rotvert1+") translate("+slihori11+"%,"+slidia1+"%)"});
        } else if (vidfilter === "filter207") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori11+"%,"+slidia1+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim5+"deg)"});
        } else if (vidfilter === "filter208") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori11+"%,"+slidia1+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim5+"deg)"});
        } else if (vidfilter === "filter209") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori11+"%,"+slidia1+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim5+"deg)"});
        } else if (vidfilter === "filter210") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori11+"%,"+slidia1+"%) rotate("+rotdim5+"deg)"});
        } else if (vidfilter === "filter211") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori11+"%,"+slidia1+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter212") {
  vidplayer1.css({"transform":"scale("+rothori1+","+compr3+") translate("+slihori11+"%,"+slidia1+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter213") {
  vidplayer1.css({"transform":"scale("+compr1+","+rotvert1+") translate("+slihori11+"%,"+slidia1+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter214") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori11+"%,"+slidia1+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim5+"deg)","border-radius":"100%"});
        } else if (vidfilter === "filter215") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori11+"%,"+slidia1+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim5+"deg)","border-radius":"100%"});
        } else if (vidfilter === "filter216") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori11+"%,"+slidia1+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim5+"deg)","border-radius":"100%"});
        } else if (vidfilter === "filter217") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori11+"%,"+slidia1+"%) rotate("+rotdim5+"deg)","border-radius":"100%"});
        } else if (vidfilter === "filter218") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori11+"%,"+slidia1+"%)","opacity":vidmove1});
        } else if (vidfilter === "filter219") {
  vidplayer1.css({"transform":"scale("+rothori1+","+compr3+") translate("+slihori11+"%,"+slidia1+"%)","opacity":vidmove1});
        } else if (vidfilter === "filter220") {
  vidplayer1.css({"transform":"scale("+compr1+","+rotvert1+") translate("+slihori11+"%,"+slidia1+"%)","opacity":vidmove1});
        } else if (vidfilter === "filter221") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori11+"%,"+slidia1+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim5+"deg)","opacity":vidmove1});
        } else if (vidfilter === "filter222") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori11+"%,"+slidia1+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim5+"deg)","opacity":vidmove1});
        } else if (vidfilter === "filter223") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori11+"%,"+slidia1+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim5+"deg)","opacity":vidmove1});
        } else if (vidfilter === "filter224") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori11+"%,"+slidia1+"%) rotate("+rotdim5+"deg)","opacity":vidmove1});
        } else if (vidfilter === "filter225") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori1+"%,"+silvert11+"%)"});
        } else if (vidfilter === "filter226") {
  vidplayer1.css({"transform":"scale("+rothori1+","+compr3+") translate("+slihori1+"%,"+silvert11+"%)"});
        } else if (vidfilter === "filter227") {
  vidplayer1.css({"transform":"scale("+compr1+","+rotvert1+") translate("+slihori1+"%,"+silvert11+"%)"});
        } else if (vidfilter === "filter228") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori1+"%,"+silvert11+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim5+"deg)"});
        } else if (vidfilter === "filter229") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori1+"%,"+silvert11+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim5+"deg)"});
        } else if (vidfilter === "filter230") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori1+"%,"+silvert11+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim5+"deg)"});
        } else if (vidfilter === "filter231") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori1+"%,"+silvert11+"%) rotate("+rotdim5+"deg)"});
        } else if (vidfilter === "filter232") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori1+"%,"+silvert11+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter233") {
  vidplayer1.css({"transform":"scale("+rothori1+","+compr3+") translate("+slihori1+"%,"+silvert11+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter234") {
  vidplayer1.css({"transform":"scale("+compr1+","+rotvert1+") translate("+slihori1+"%,"+silvert11+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter235") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori1+"%,"+silvert11+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim5+"deg)","border-radius":"100%"});
        } else if (vidfilter === "filter236") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori1+"%,"+silvert11+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim5+"deg)","border-radius":"100%"});
        } else if (vidfilter === "filter237") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori1+"%,"+silvert11+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim5+"deg)","border-radius":"100%"});
        } else if (vidfilter === "filter238") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori1+"%,"+silvert11+"%) rotate("+rotdim5+"deg)","border-radius":"100%"});
        } else if (vidfilter === "filter239") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori1+"%,"+silvert11+"%)","opacity":vidmove1});
        } else if (vidfilter === "filter240") {
  vidplayer1.css({"transform":"scale("+rothori1+","+compr3+") translate("+slihori1+"%,"+silvert11+"%)","opacity":vidmove1});
        } else if (vidfilter === "filter241") {
  vidplayer1.css({"transform":"scale("+compr1+","+rotvert1+") translate("+slihori1+"%,"+silvert11+"%)","opacity":vidmove1});
        } else if (vidfilter === "filter242") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori1+"%,"+silvert11+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim5+"deg)","opacity":vidmove1});
        } else if (vidfilter === "filter243") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori1+"%,"+silvert11+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim5+"deg)","opacity":vidmove1});
        } else if (vidfilter === "filter244") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori1+"%,"+silvert11+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim5+"deg)","opacity":vidmove1});
        } else if (vidfilter === "filter245") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori1+"%,"+silvert11+"%) rotate("+rotdim5+"deg)","opacity":vidmove1});
        } else if (vidfilter === "filter246") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori11+"%,"+silvert11+"%)"});
        } else if (vidfilter === "filter247") {
  vidplayer1.css({"transform":"scale("+rothori1+","+compr3+") translate("+slihori11+"%,"+silvert11+"%)"});
        } else if (vidfilter === "filter248") {
  vidplayer1.css({"transform":"scale("+compr1+","+rotvert1+") translate("+slihori11+"%,"+silvert11+"%)"});
        } else if (vidfilter === "filter249") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori11+"%,"+silvert11+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim5+"deg)"});
        } else if (vidfilter === "filter250") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori11+"%,"+silvert11+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim5+"deg)"});
        } else if (vidfilter === "filter251") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori11+"%,"+silvert11+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim5+"deg)"});
        } else if (vidfilter === "filter252") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori11+"%,"+silvert11+"%) rotate("+rotdim5+"deg)"});
        } else if (vidfilter === "filter253") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori11+"%,"+silvert11+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter254") {
  vidplayer1.css({"transform":"scale("+rothori1+","+compr3+") translate("+slihori11+"%,"+silvert11+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter255") {
  vidplayer1.css({"transform":"scale("+compr1+","+rotvert1+") translate("+slihori11+"%,"+silvert11+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter256") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori11+"%,"+silvert11+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim5+"deg)","border-radius":"100%"});
        } else if (vidfilter === "filter257") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori11+"%,"+silvert11+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim5+"deg)","border-radius":"100%"});
        } else if (vidfilter === "filter258") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori11+"%,"+silvert11+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim5+"deg)","border-radius":"100%"});
        } else if (vidfilter === "filter259") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori11+"%,"+silvert11+"%) rotate("+rotdim5+"deg)","border-radius":"100%"});
        } else if (vidfilter === "filter260") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori11+"%,"+silvert11+"%)","opacity":vidmove1});
        } else if (vidfilter === "filter261") {
  vidplayer1.css({"transform":"scale("+rothori1+","+compr3+") translate("+slihori11+"%,"+silvert11+"%)","opacity":vidmove1});
        } else if (vidfilter === "filter262") {
  vidplayer1.css({"transform":"scale("+compr1+","+rotvert1+") translate("+slihori11+"%,"+silvert11+"%)","opacity":vidmove1});
        } else if (vidfilter === "filter263") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori11+"%,"+silvert11+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim5+"deg)","opacity":vidmove1});
        } else if (vidfilter === "filter264") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori11+"%,"+silvert11+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim5+"deg)","opacity":vidmove1});
        } else if (vidfilter === "filter265") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori11+"%,"+silvert11+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim5+"deg)","opacity":vidmove1});
        } else if (vidfilter === "filter266") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori11+"%,"+silvert11+"%) rotate("+rotdim5+"deg)","opacity":vidmove1});
        } else if (vidfilter === "filter267") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori11+"%,"+slidia1+"%) perspective(1000px) rotate3d(1,0,0,45deg)"});
        } else if (vidfilter === "filter268") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori11+"%,"+slidia1+"%) perspective(1000px) rotate3d(0,1,0,45deg)"});
        } else if (vidfilter === "filter269") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori11+"%,"+slidia1+"%) perspective(1000px) rotate3d(1,0,0,45deg)","border-radius":"100%"});
        } else if (vidfilter === "filter270") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori11+"%,"+slidia1+"%) perspective(1000px) rotate3d(0,1,0,45deg)","border-radius":"100%"});
        } else if (vidfilter === "filter271") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori11+"%,"+slidia1+"%) perspective(1000px) rotate3d(1,0,0,45deg)","opacity":vidmove1});
        } else if (vidfilter === "filter272") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori11+"%,"+slidia1+"%) perspective(1000px) rotate3d(0,1,0,45deg)","opacity":vidmove1});
        } else if (vidfilter === "filter273") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori1+"%,"+silvert11+"%) perspective(1000px) rotate3d(1,0,0,45deg)"});
        } else if (vidfilter === "filter274") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori1+"%,"+silvert11+"%) perspective(1000px) rotate3d(0,1,0,45deg)"});
        } else if (vidfilter === "filter275") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori1+"%,"+silvert11+"%) perspective(1000px) rotate3d(1,0,0,45deg)","border-radius":"100%"});
        } else if (vidfilter === "filter276") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori1+"%,"+silvert11+"%) perspective(1000px) rotate3d(0,1,0,45deg)","border-radius":"100%"});
        } else if (vidfilter === "filter277") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori1+"%,"+silvert11+"%) perspective(1000px) rotate3d(1,0,0,45deg)","opacity":vidmove1});
        } else if (vidfilter === "filter278") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori1+"%,"+silvert11+"%) perspective(1000px) rotate3d(0,1,0,45deg)","opacity":vidmove1});
        } else if (vidfilter === "filter279") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori11+"%,"+silvert11+"%) perspective(1000px) rotate3d(1,0,0,45deg)"});
        } else if (vidfilter === "filter280") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori11+"%,"+silvert11+"%) perspective(1000px) rotate3d(0,1,0,45deg)"});
        } else if (vidfilter === "filter281") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori11+"%,"+silvert11+"%) perspective(1000px) rotate3d(1,0,0,45deg)","border-radius":"100%"});
        } else if (vidfilter === "filter282") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori11+"%,"+silvert11+"%) perspective(1000px) rotate3d(0,1,0,45deg)","border-radius":"100%"});
        } else if (vidfilter === "filter283") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori11+"%,"+silvert11+"%) perspective(1000px) rotate3d(1,0,0,45deg)","opacity":vidmove1});
        } else if (vidfilter === "filter284") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori11+"%,"+silvert11+"%) perspective(1000px) rotate3d(0,1,0,45deg)","opacity":vidmove1});
        } else if (vidfilter === "filter285") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori111+"%,"+slidia1+"%)"});
        } else if (vidfilter === "filter286") {
  vidplayer1.css({"transform":"scale("+rothori1+","+compr3+") translate("+slihori111+"%,"+slidia1+"%)"});
        } else if (vidfilter === "filter287") {
  vidplayer1.css({"transform":"scale("+compr1+","+rotvert1+") translate("+slihori111+"%,"+slidia1+"%)"});
        } else if (vidfilter === "filter288") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori111+"%,"+slidia1+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim5+"deg)"});
        } else if (vidfilter === "filter289") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori111+"%,"+slidia1+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim5+"deg)"});
        } else if (vidfilter === "filter290") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori111+"%,"+slidia1+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim5+"deg)"});
        } else if (vidfilter === "filter291") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori111+"%,"+slidia1+"%) rotate("+rotdim5+"deg)"});
        } else if (vidfilter === "filter292") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori111+"%,"+slidia1+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter293") {
  vidplayer1.css({"transform":"scale("+rothori1+","+compr3+") translate("+slihori111+"%,"+slidia1+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter294") {
  vidplayer1.css({"transform":"scale("+compr1+","+rotvert1+") translate("+slihori111+"%,"+slidia1+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter295") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori111+"%,"+slidia1+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim5+"deg)","border-radius":"100%"});
        } else if (vidfilter === "filter296") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori111+"%,"+slidia1+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim5+"deg)","border-radius":"100%"});
        } else if (vidfilter === "filter297") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori111+"%,"+slidia1+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim5+"deg)","border-radius":"100%"});
        } else if (vidfilter === "filter298") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori111+"%,"+slidia1+"%) rotate("+rotdim5+"deg)","border-radius":"100%"});
        } else if (vidfilter === "filter299") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori111+"%,"+slidia1+"%)","opacity":vidmove1});
        } else if (vidfilter === "filter300") {
  vidplayer1.css({"transform":"scale("+rothori1+","+compr3+") translate("+slihori111+"%,"+slidia1+"%)","opacity":vidmove1});
        } else if (vidfilter === "filter301") {
  vidplayer1.css({"transform":"scale("+compr1+","+rotvert1+") translate("+slihori111+"%,"+slidia1+"%)","opacity":vidmove1});
        } else if (vidfilter === "filter302") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori111+"%,"+slidia1+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim5+"deg)","opacity":vidmove1});
        } else if (vidfilter === "filter303") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori111+"%,"+slidia1+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim5+"deg)","opacity":vidmove1});
        } else if (vidfilter === "filter304") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori111+"%,"+slidia1+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim5+"deg)","opacity":vidmove1});
        } else if (vidfilter === "filter305") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori111+"%,"+slidia1+"%) rotate("+rotdim5+"deg)","opacity":vidmove1});
        } else if (vidfilter === "filter306") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori1+"%,"+silvert111+"%)"});
        } else if (vidfilter === "filter307") {
  vidplayer1.css({"transform":"scale("+rothori1+","+compr3+") translate("+slihori1+"%,"+silvert111+"%)"});
        } else if (vidfilter === "filter308") {
  vidplayer1.css({"transform":"scale("+compr1+","+rotvert1+") translate("+slihori1+"%,"+silvert111+"%)"});
        } else if (vidfilter === "filter309") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori1+"%,"+silvert111+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim5+"deg)"});
        } else if (vidfilter === "filter310") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori1+"%,"+silvert111+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim5+"deg)"});
        } else if (vidfilter === "filter311") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori1+"%,"+silvert111+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim5+"deg)"});
        } else if (vidfilter === "filter312") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori1+"%,"+silvert111+"%) rotate("+rotdim5+"deg)"});
        } else if (vidfilter === "filter313") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori1+"%,"+silvert111+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter314") {
  vidplayer1.css({"transform":"scale("+rothori1+","+compr3+") translate("+slihori1+"%,"+silvert111+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter315") {
  vidplayer1.css({"transform":"scale("+compr1+","+rotvert1+") translate("+slihori1+"%,"+silvert111+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter316") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori1+"%,"+silvert111+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim5+"deg)","border-radius":"100%"});
        } else if (vidfilter === "filter317") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori1+"%,"+silvert111+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim5+"deg)","border-radius":"100%"});
        } else if (vidfilter === "filter318") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori1+"%,"+silvert111+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim5+"deg)","border-radius":"100%"});
        } else if (vidfilter === "filter319") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori1+"%,"+silvert111+"%) rotate("+rotdim5+"deg)","border-radius":"100%"});
        } else if (vidfilter === "filter320") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori1+"%,"+silvert111+"%)","opacity":vidmove1});
        } else if (vidfilter === "filter321") {
  vidplayer1.css({"transform":"scale("+rothori1+","+compr3+") translate("+slihori1+"%,"+silvert111+"%)","opacity":vidmove1});
        } else if (vidfilter === "filter322") {
  vidplayer1.css({"transform":"scale("+compr1+","+rotvert1+") translate("+slihori1+"%,"+silvert111+"%)","opacity":vidmove1});
        } else if (vidfilter === "filter323") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori1+"%,"+silvert111+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim5+"deg)","opacity":vidmove1});
        } else if (vidfilter === "filter324") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori1+"%,"+silvert111+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim5+"deg)","opacity":vidmove1});
        } else if (vidfilter === "filter325") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori1+"%,"+silvert111+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim5+"deg)","opacity":vidmove1});
        } else if (vidfilter === "filter326") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori1+"%,"+silvert111+"%) rotate("+rotdim5+"deg)","opacity":vidmove1});
        } else if (vidfilter === "filter327") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori111+"%,"+silvert111+"%)"});
        } else if (vidfilter === "filter328") {
  vidplayer1.css({"transform":"scale("+rothori1+","+compr3+") translate("+slihori111+"%,"+silvert111+"%)"});
        } else if (vidfilter === "filter329") {
  vidplayer1.css({"transform":"scale("+compr1+","+rotvert1+") translate("+slihori111+"%,"+silvert111+"%)"});
        } else if (vidfilter === "filter330") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori111+"%,"+silvert111+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim5+"deg)"});
        } else if (vidfilter === "filter331") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori111+"%,"+silvert111+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim5+"deg)"});
        } else if (vidfilter === "filter332") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori111+"%,"+silvert111+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim5+"deg)"});
        } else if (vidfilter === "filter333") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori111+"%,"+silvert111+"%) rotate("+rotdim5+"deg)"});
        } else if (vidfilter === "filter334") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori111+"%,"+silvert111+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter335") {
  vidplayer1.css({"transform":"scale("+rothori1+","+compr3+") translate("+slihori111+"%,"+silvert111+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter336") {
  vidplayer1.css({"transform":"scale("+compr1+","+rotvert1+") translate("+slihori111+"%,"+silvert111+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter337") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori111+"%,"+silvert111+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim5+"deg)","border-radius":"100%"});
        } else if (vidfilter === "filter338") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori111+"%,"+silvert111+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim5+"deg)","border-radius":"100%"});
        } else if (vidfilter === "filter339") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori111+"%,"+silvert111+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim5+"deg)","border-radius":"100%"});
        } else if (vidfilter === "filter340") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori111+"%,"+silvert111+"%) rotate("+rotdim5+"deg)","border-radius":"100%"});
        } else if (vidfilter === "filter341") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori111+"%,"+silvert111+"%)","opacity":vidmove1});
        } else if (vidfilter === "filter342") {
  vidplayer1.css({"transform":"scale("+rothori1+","+compr3+") translate("+slihori111+"%,"+silvert111+"%)","opacity":vidmove1});
        } else if (vidfilter === "filter343") {
  vidplayer1.css({"transform":"scale("+compr1+","+rotvert1+") translate("+slihori111+"%,"+silvert111+"%)","opacity":vidmove1});
        } else if (vidfilter === "filter344") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori111+"%,"+silvert111+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim5+"deg)","opacity":vidmove1});
        } else if (vidfilter === "filter345") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori111+"%,"+silvert111+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim5+"deg)","opacity":vidmove1});
        } else if (vidfilter === "filter346") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori111+"%,"+silvert111+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim5+"deg)","opacity":vidmove1});
        } else if (vidfilter === "filter347") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori111+"%,"+silvert111+"%) rotate("+rotdim5+"deg)","opacity":vidmove1});
        } else if (vidfilter === "filter348") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori111+"%,"+slidia1+"%) perspective(1000px) rotate3d(1,0,0,45deg)"});
        } else if (vidfilter === "filter349") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori111+"%,"+slidia1+"%) perspective(1000px) rotate3d(0,1,0,45deg)"});
        } else if (vidfilter === "filter350") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori111+"%,"+slidia1+"%) perspective(1000px) rotate3d(1,0,0,45deg)","border-radius":"100%"});
        } else if (vidfilter === "filter351") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori111+"%,"+slidia1+"%) perspective(1000px) rotate3d(0,1,0,45deg)","border-radius":"100%"});
        } else if (vidfilter === "filter352") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori111+"%,"+slidia1+"%) perspective(1000px) rotate3d(1,0,0,45deg)","opacity":vidmove1});
        } else if (vidfilter === "filter353") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori111+"%,"+slidia1+"%) perspective(1000px) rotate3d(0,1,0,45deg)","opacity":vidmove1});
        } else if (vidfilter === "filter354") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori1+"%,"+silvert111+"%) perspective(1000px) rotate3d(1,0,0,45deg)"});
        } else if (vidfilter === "filter355") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori1+"%,"+silvert111+"%) perspective(1000px) rotate3d(0,1,0,45deg)"});
        } else if (vidfilter === "filter356") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori1+"%,"+silvert111+"%) perspective(1000px) rotate3d(1,0,0,45deg)","border-radius":"100%"});
        } else if (vidfilter === "filter357") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori1+"%,"+silvert111+"%) perspective(1000px) rotate3d(0,1,0,45deg)","border-radius":"100%"});
        } else if (vidfilter === "filter358") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori1+"%,"+silvert111+"%) perspective(1000px) rotate3d(1,0,0,45deg)","opacity":vidmove1});
        } else if (vidfilter === "filter359") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori1+"%,"+silvert111+"%) perspective(1000px) rotate3d(0,1,0,45deg)","opacity":vidmove1});
        } else if (vidfilter === "filter360") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori111+"%,"+silvert111+"%) perspective(1000px) rotate3d(1,0,0,45deg)"});
        } else if (vidfilter === "filter361") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori111+"%,"+silvert111+"%) perspective(1000px) rotate3d(0,1,0,45deg)"});
        } else if (vidfilter === "filter362") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori111+"%,"+silvert111+"%) perspective(1000px) rotate3d(1,0,0,45deg)","border-radius":"100%"});
        } else if (vidfilter === "filter363") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori111+"%,"+silvert111+"%) perspective(1000px) rotate3d(0,1,0,45deg)","border-radius":"100%"});
        } else if (vidfilter === "filter364") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori111+"%,"+silvert111+"%) perspective(1000px) rotate3d(1,0,0,45deg)","opacity":vidmove1});
        } else if (vidfilter === "filter365") {
  vidplayer1.css({"transform":"scale("+compr1+","+compr3+") translate("+slihori111+"%,"+silvert111+"%) perspective(1000px) rotate3d(0,1,0,45deg)","opacity":vidmove1});
        } else if (vidfilter === "filter366") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+")"});
        } else if (vidfilter === "filter367") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") translateX("+slihori1+"%)"});
        } else if (vidfilter === "filter368") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") translateY("+silvert1+"%)"});
        } else if (vidfilter === "filter369") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") translate("+slihori1+"%,"+slidia1+"%)"});
        } else if (vidfilter === "filter370") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") translateX("+pophori1+"%)"});
        } else if (vidfilter === "filter371") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") translateY("+popvert1+"%)"});
        } else if (vidfilter === "filter372") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") translate("+slihori1+"%,"+popdia1+"%)"});
        } else if (vidfilter === "filter373") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") translate("+slihori11/2+"%,"+slidia1+"%)"});
        } else if (vidfilter === "filter374") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") translate("+slihori1+"%,"+silvert11/2+"%)"});
        } else if (vidfilter === "filter375") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") translate("+slihori11/2+"%,"+silvert11/2+"%)"});
        } else if (vidfilter === "filter376") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") translate("+slihori111/3+"%,"+slidia1+"%)"});
        } else if (vidfilter === "filter377") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") translate("+slihori1+"%,"+silvert111/3+"%)"});
        } else if (vidfilter === "filter378") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") translate("+slihori111/3+"%,"+silvert111/3+"%)"});
        } else if (vidfilter === "filter379") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+")","border-radius":"100%"});
        } else if (vidfilter === "filter380") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") translateX("+slihori1+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter381") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") translateY("+silvert1+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter382") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") translate("+slihori1+"%,"+slidia1+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter383") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") translateX("+pophori1+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter384") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") translateY("+popvert1+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter385") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") translate("+slihori1+"%,"+popdia1+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter386") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") translate("+slihori11/2+"%,"+slidia1+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter387") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") translate("+slihori1+"%,"+silvert11/2+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter388") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") translate("+slihori11/2+"%,"+silvert11/2+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter389") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") translate("+slihori111/3+"%,"+slidia1+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter390") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") translate("+slihori1+"%,"+silvert111/3+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter391") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") translate("+slihori111/3+"%,"+silvert111/3+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter392") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+")","opacity":vidmove1});
        } else if (vidfilter === "filter393") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") translateX("+slihori1+"%)","opacity":vidmove1});
        } else if (vidfilter === "filter394") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") translateY("+silvert1+"%)","opacity":vidmove1});
        } else if (vidfilter === "filter395") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") translate("+slihori1+"%,"+slidia1+"%)","opacity":vidmove1});
        } else if (vidfilter === "filter396") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") translateX("+pophori1+"%)","opacity":vidmove1});
        } else if (vidfilter === "filter397") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") translateY("+popvert1+"%)","opacity":vidmove1});
        } else if (vidfilter === "filter398") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") translate("+slihori1+"%,"+popdia1+"%)","opacity":vidmove1});
        } else if (vidfilter === "filter399") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") translate("+slihori11/2+"%,"+slidia1+"%)","opacity":vidmove1});
        } else if (vidfilter === "filter400") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") translate("+slihori1+"%,"+silvert11/2+"%)","opacity":vidmove1});
        } else if (vidfilter === "filter401") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") translate("+slihori11/2+"%,"+silvert11/2+"%)","opacity":vidmove1});
        } else if (vidfilter === "filter402") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") translate("+slihori111/3+"%,"+slidia1+"%)","opacity":vidmove1});
        } else if (vidfilter === "filter403") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") translate("+slihori1+"%,"+silvert111/3+"%)","opacity":vidmove1});
        } else if (vidfilter === "filter404") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") translate("+slihori111/3+"%,"+silvert111/3+"%)","opacity":vidmove1});
        } else if (vidfilter === "filter405") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") perspective(1000px) rotate3d(1,0,0,"+rotdim1+"deg)"});
        } else if (vidfilter === "filter406") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") translateX("+slihori1+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim1+"deg)"});
        } else if (vidfilter === "filter407") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") translateY("+silvert1+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim1+"deg)"});
        } else if (vidfilter === "filter408") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") translate("+slihori1+"%,"+slidia1+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim1+"deg)"});
        } else if (vidfilter === "filter409") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") translateX("+pophori1+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim1+"deg)"});
        } else if (vidfilter === "filter410") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") translateY("+popvert1+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim1+"deg)"});
        } else if (vidfilter === "filter411") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") translate("+slihori1+"%,"+popdia1+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim1+"deg)"});
        } else if (vidfilter === "filter412") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") translate("+slihori11/2+"%,"+slidia1+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim1+"deg)"});
        } else if (vidfilter === "filter413") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") translate("+slihori1+"%,"+silvert11/2+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim1+"deg)"});
        } else if (vidfilter === "filter414") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") translate("+slihori11/2+"%,"+silvert11/2+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim1+"deg)"});
        } else if (vidfilter === "filter415") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") translate("+slihori111/4+"%,"+slidia1+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim1+"deg)"});
        } else if (vidfilter === "filter416") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") translate("+slihori1+"%,"+silvert111/4+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim1+"deg)"});
        } else if (vidfilter === "filter417") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") translate("+slihori111/4+"%,"+silvert111/4+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim1+"deg)"});
        } else if (vidfilter === "filter418") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") perspective(1000px) rotate3d(0,1,0,"+rotdim1+"deg)"});
        } else if (vidfilter === "filter419") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") translateX("+slihori1+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim1+"deg)"});
        } else if (vidfilter === "filter420") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") translateY("+silvert1+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim1+"deg)"});
        } else if (vidfilter === "filter421") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") translate("+slihori1+"%,"+slidia1+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim1+"deg)"});
        } else if (vidfilter === "filter422") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") translateX("+pophori1+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim1+"deg)"});
        } else if (vidfilter === "filter423") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") translateY("+popvert1+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim1+"deg)"});
        } else if (vidfilter === "filter424") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") translate("+slihori1+"%,"+popdia1+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim1+"deg)"});
        } else if (vidfilter === "filter425") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") translate("+slihori11/2+"%,"+slidia1+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim1+"deg)"});
        } else if (vidfilter === "filter426") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") translate("+slihori1+"%,"+silvert11/2+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim1+"deg)"});
        } else if (vidfilter === "filter427") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") translate("+slihori11/2+"%,"+silvert11/2+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim1+"deg)"});
        } else if (vidfilter === "filter428") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") translate("+slihori111/4+"%,"+slidia1+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim1+"deg)"});
        } else if (vidfilter === "filter429") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") translate("+slihori1+"%,"+silvert111/4+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim1+"deg)"});
        } else if (vidfilter === "filter430") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") translate("+slihori111/4+"%,"+silvert111/4+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim1+"deg)"});
        } else if (vidfilter === "filter431") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") perspective(1000px) rotate3d(1,1,0,"+rotdim1+"deg)"});
        } else if (vidfilter === "filter432") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") translateX("+slihori1+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim1+"deg)"});
        } else if (vidfilter === "filter433") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") translateY("+silvert1+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim1+"deg)"});
        } else if (vidfilter === "filter434") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") translate("+slihori1+"%,"+slidia1+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim1+"deg)"});
        } else if (vidfilter === "filter435") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") translateX("+pophori1+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim1+"deg)"});
        } else if (vidfilter === "filter436") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") translateY("+popvert1+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim1+"deg)"});
        } else if (vidfilter === "filter437") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") translate("+slihori1+"%,"+popdia1+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim1+"deg)"});
        } else if (vidfilter === "filter438") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") translate("+slihori11/2+"%,"+slidia1+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim1+"deg)"});
        } else if (vidfilter === "filter439") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") translate("+slihori1+"%,"+silvert11/2+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim1+"deg)"});
        } else if (vidfilter === "filter440") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") translate("+slihori11/2+"%,"+silvert11/2+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim1+"deg)"});
        } else if (vidfilter === "filter441") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") translate("+slihori111/4+"%,"+slidia1+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim1+"deg)"});
        } else if (vidfilter === "filter442") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") translate("+slihori1+"%,"+silvert111/4+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim1+"deg)"});
        } else if (vidfilter === "filter443") {
  vidplayer1.css({"transform":"scale("+compr11+","+compr33+") translate("+slihori111/4+"%,"+silvert111/4+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim1+"deg)"});
        }

   if (vidmove1 > 0.99 && vidfilter !== "") {
    vidplayer1.css({"filter":"none", "border-radius":"0px"});
 		 }
	}
    
    function videffect2() {
	var vidmove2 = vidfader2.val();
	var vidfilter = vidEffectMode.val();
	var widescreen2 = vidWidth2.val();
	var heiscreen2 = vidHeight2.val();
	var rotlv = rotlevel.val();
	var shrink2 = widescreen2*vidmove2;
	var shrinky2 = heiscreen2*vidmove2;
	var vidbright2 = vidmove2*100;
	var vidblur2 = (1-vidmove2)*100;
	var expand2 = widescreen2*(3-2*vidmove2);
	var expand4 = heiscreen2*(3-2*vidmove2);
	var compr2 = widescreen2*Math.pow(vidmove2,2);
	var compr4 = heiscreen2*Math.pow(vidmove2,2);
	var rothori2 = widescreen2*vidmove2*Math.sin((4*rotlv+1)/2*Math.PI*vidmove2);
	var rotvert2 = heiscreen2*vidmove2*Math.sin((4*rotlv+1)/2*Math.PI*vidmove2);
	var slihori2 = -100*(1-vidmove2);
	var silvert2 = 100*(1-vidmove2);
	var strhorilr2 = -90*widescreen2*(1-vidmove2);
	var strverttb2 = -90*heiscreen2*(1-vidmove2);
	var strhorirl2 = 90*widescreen2*(1-vidmove2);
	var strvertbt2 = 90*heiscreen2*(1-vidmove2);
	var slidia2 = -100*(1-Math.sqrt(vidmove2));
	var pophori2 = 100*(1-vidmove2)*Math.sin((4*rotlv+1)/2*Math.PI*vidmove2);
	var popvert2 = 100*(1-vidmove2)*Math.sin((4*rotlv+1)/2*Math.PI*vidmove2);
	var popdia2 = 100*(1-Math.sqrt(vidmove2))*Math.sin((4*rotlv+1)/2*Math.PI*vidmove2);
	var persp2 = 2000*(1-vidmove2);
	var rotdim3 = 90*(1-vidmove2);
	var rotdim4 = -90*(1-vidmove2);
	var rotdim6 = 360*rotlv*(1-vidmove2);
	var slihori22 = 400*(2*Math.pow(vidmove2,2)-3*vidmove2+1);
	var silvert22 = 400*(-2*Math.pow(vidmove2,2)+3*vidmove2-1);
	var slihori222 = 900*(-16/3*Math.pow(vidmove2,3)+32/3*Math.pow(vidmove2,2)-19/3*vidmove2+1);
	var silvert222 = 900*(16/3*Math.pow(vidmove2,3)-32/3*Math.pow(vidmove2,2)+19/3*vidmove2-1);
	var compr22 = widescreen2*(-3*Math.pow(vidmove2,2)+4*vidmove2);
	var compr44 = heiscreen2*(-3*Math.pow(vidmove2,2)+4*vidmove2);
    
	if (vidfilter === "filter1") {
  vidplayer2.css({"filter":"blur("+vidblur2+"px)"});
		} else if (vidfilter === "filter2") {
  vidplayer2.css({"filter":"brightness("+vidbright2+"%)"});
        } else if (vidfilter === "filter3") {
  vidplayer2.css({"filter":"contrast("+vidbright2+"%)"});
        } else if (vidfilter === "filter4") {
  vidplayer2.css({"filter":"opacity("+vidbright2+"%)"});
        } else if (vidfilter === "filter5") {
  vidplayer2.css({"transform":"scale("+shrink2+", "+shrinky2+")"});
        } else if (vidfilter === "filter6") {
  vidplayer2.css({"transform":"scale("+expand2+", "+expand4+")"});
        } else if (vidfilter === "filter7") {
  vidplayer2.css({"transform":"scale("+compr2+","+heiscreen2+")"});
        } else if (vidfilter === "filter8") {
  vidplayer2.css({"transform":"scale("+widescreen2+","+compr4+")"});
        } else if (vidfilter === "filter9") {
  vidplayer2.css({"transform":"scale("+rothori2+","+shrinky2+")"});
        } else if (vidfilter === "filter10") {
  vidplayer2.css({"transform":"scale("+shrink2+","+rotvert2+")"});
        } else if (vidfilter === "filter11") {
  vidplayer2.css({"transform":"scale("+widescreen2+","+heiscreen2+") translateX("+slihori2+"%)"});
        } else if (vidfilter === "filter12") {
  vidplayer2.css({"transform":"scale("+widescreen2+","+heiscreen2+") translateY("+silvert2+"%)"});
        } else if (vidfilter === "filter13") {
  vidplayer2.css({"transform":"scale("+widescreen2+","+heiscreen2+") translate("+slihori2+"%,"+slidia2+"%)"});
        } else if (vidfilter === "filter14") {
  vidplayer2.css({"transform":"scale("+shrink2+","+shrinky2+") translateX("+slihori2+"%)"});
        } else if (vidfilter === "filter15") {
  vidplayer2.css({"transform":"scale("+shrink2+","+shrinky2+") translateY("+silvert2+"%)"});
        } else if (vidfilter === "filter16") {
  vidplayer2.css({"transform":"scale("+shrink2+","+shrinky2+") translate("+slihori2+"%,"+slidia2+"%)"});
        } else if (vidfilter === "filter17") {
  vidplayer2.css({"transform":"scale("+rothori2+","+shrinky2+") translate("+slihori2+"%,"+slidia2+"%)"});
        } else if (vidfilter === "filter18") {
  vidplayer2.css({"transform":"scale("+shrink2+","+rotvert2+") translate("+slihori2+"%,"+slidia2+"%)"});
        } else if (vidfilter === "filter19") {
  vidplayer2.css({"transform":"scale("+expand2+", "+compr2+")"});
        } else if (vidfilter === "filter20") {
  vidplayer2.css({"transform":"scale("+compr4+", "+expand4+")"});
        } else if (vidfilter === "filter21") {
  vidplayer2.css({"transform":"scale("+widescreen2+","+heiscreen2+") skewX("+strhorilr2+"deg)"});
        } else if (vidfilter === "filter22") {
  vidplayer2.css({"transform":"scale("+widescreen2+","+heiscreen2+") skewX("+strhorirl2+"deg)"});
        } else if (vidfilter === "filter23") {
  vidplayer2.css({"transform":"scale("+widescreen2+","+heiscreen2+") skewY("+strverttb2+"deg)"});
        } else if (vidfilter === "filter24") {
  vidplayer2.css({"transform":"scale("+widescreen2+","+heiscreen2+") skewY("+strvertbt2+"deg)"});
        } else if (vidfilter === "filter25") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translateX("+pophori2+"%)"});
        } else if (vidfilter === "filter26") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translateY("+popvert2+"%)"});
        } else if (vidfilter === "filter27") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori2+"%,"+popdia2+"%)"});
        } else if (vidfilter === "filter28") {
  vidplayer2.css({"transform":"scale("+rothori2+","+compr4+") translateX("+pophori2+"%)"});
        } else if (vidfilter === "filter29") {
  vidplayer2.css({"transform":"scale("+rothori2+","+compr4+") translateY("+popvert2+"%)"});
        } else if (vidfilter === "filter30") {
  vidplayer2.css({"transform":"scale("+rothori2+","+compr4+") translate("+slihori2+"%,"+popdia2+"%)"});
        } else if (vidfilter === "filter31") {
  vidplayer2.css({"transform":"scale("+shrink2+", "+shrinky2+")","border-radius":"100%"});
        } else if (vidfilter === "filter32") {
  vidplayer2.css({"transform":"scale("+compr2+","+heiscreen2+")","border-radius":"100%"});
        } else if (vidfilter === "filter33") {
  vidplayer2.css({"transform":"scale("+widescreen2+","+compr4+")","border-radius":"100%"});
        } else if (vidfilter === "filter34") {
  vidplayer2.css({"transform":"scale("+rothori2+","+shrinky2+")","border-radius":"100%"});
        } else if (vidfilter === "filter35") {
  vidplayer2.css({"transform":"scale("+shrink2+","+rotvert2+")","border-radius":"100%"});
        } else if (vidfilter === "filter36") {
  vidplayer2.css({"transform":"scale("+shrink2+","+shrinky2+") translateX("+slihori2+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter37") {
  vidplayer2.css({"transform":"scale("+shrink2+","+shrinky2+") translateY("+silvert2+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter38") {
  vidplayer2.css({"transform":"scale("+shrink2+","+shrinky2+") translate("+slihori2+"%,"+slidia2+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter39") {
  vidplayer2.css({"transform":"scale("+rothori2+","+shrinky2+") translate("+slihori2+"%,"+slidia2+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter40") {
  vidplayer2.css({"transform":"scale("+shrink2+","+rotvert2+") translate("+slihori2+"%,"+slidia2+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter41") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translateX("+pophori2+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter42") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translateY("+popvert2+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter43") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori2+"%,"+popdia2+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter44") {
  vidplayer2.css({"transform":"scale("+rothori2+","+compr4+") translateX("+pophori2+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter45") {
  vidplayer2.css({"transform":"scale("+rothori2+","+compr4+") translateY("+popvert2+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter46") {
  vidplayer2.css({"transform":"scale("+rothori2+","+compr4+") translate("+slihori2+"%,"+popdia2+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter47") {
  vidplayer2.css({"transform":"scale("+widescreen2+","+heiscreen2+") translateX("+slihori2+"%) perspective(1500px) rotate3d(0,1,0,60deg)"});
        } else if (vidfilter === "filter48") {
  vidplayer2.css({"transform":"scale("+widescreen2+","+heiscreen2+") translateY("+silvert2+"%) perspective(1000px) rotate3d(1,0,0,45deg)"});
        } else if (vidfilter === "filter49") {
  vidplayer2.css({"transform":"scale("+widescreen2+","+heiscreen2+") translate("+slihori2+"%,"+slidia2+"%) perspective(1000px) rotate3d(1,0,0,45deg)"});
        } else if (vidfilter === "filter50") {
  vidplayer2.css({"transform":"scale("+shrink2+","+shrinky2+") translateX("+slihori2+"%) perspective(1500px) rotate3d(0,1,0,60deg)"});
        } else if (vidfilter === "filter51") {
  vidplayer2.css({"transform":"scale("+shrink2+","+shrinky2+") translateY("+silvert2+"%) perspective(1000px) rotate3d(1,0,0,45deg)"});
        } else if (vidfilter === "filter52") {
  vidplayer2.css({"transform":"scale("+shrink2+","+shrinky2+") translate("+slihori2+"%,"+slidia2+"%) perspective(1000px) rotate3d(1,0,0,45deg)"});
        } else if (vidfilter === "filter53") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translateX("+pophori2+"%) perspective(1500px) rotate3d(0,1,0,60deg)"});
        } else if (vidfilter === "filter54") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translateY("+popvert2+"%) perspective(1000px) rotate3d(1,0,0,45deg)"});
        } else if (vidfilter === "filter55") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori2+"%,"+popdia2+"%) perspective(1000px) rotate3d(1,0,0,45deg)"});
        } else if (vidfilter === "filter56") {
  vidplayer2.css({"transform":"scale("+widescreen2+","+heiscreen2+") perspective("+persp2+"px) rotate3d(0,1,0,"+rotdim3+"deg)"});
        } else if (vidfilter === "filter57") {
  vidplayer2.css({"transform":"scale("+widescreen2+","+heiscreen2+") perspective("+persp2+"px) rotate3d(0,1,0,"+rotdim4+"deg)"});
        } else if (vidfilter === "filter58") {
  vidplayer2.css({"transform":"scale("+widescreen2+","+heiscreen2+") perspective("+persp2+"px) rotate3d(1,0,0,"+rotdim3+"deg)"});
        } else if (vidfilter === "filter59") {
  vidplayer2.css({"transform":"scale("+widescreen2+","+heiscreen2+") perspective("+persp2+"px) rotate3d(1,0,0,"+rotdim4+"deg)"});
        } else if (vidfilter === "filter60") {
  vidplayer2.css({"transform":"scale("+widescreen2+","+heiscreen2+") perspective("+persp2+"px) rotate3d(1,1,0,"+rotdim3+"deg)"});
        } else if (vidfilter === "filter61") {
  vidplayer2.css({"transform":"scale("+widescreen2+","+heiscreen2+") perspective("+persp2+"px) rotate3d(1,1,0,"+rotdim4+"deg)"});
        } else if (vidfilter === "filter62") {
  vidplayer2.css({"transform":"scale("+shrink2+","+shrinky2+") translateX("+slihori2+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim6+"deg)"});
        } else if (vidfilter === "filter63") {
  vidplayer2.css({"transform":"scale("+shrink2+","+shrinky2+") translateY("+silvert2+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim6+"deg)"});
        } else if (vidfilter === "filter64") {
  vidplayer2.css({"transform":"scale("+shrink2+","+shrinky2+") translate("+slihori2+"%,"+slidia2+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim6+"deg)"});
        } else if (vidfilter === "filter65") {
  vidplayer2.css({"transform":"scale("+shrink2+","+shrinky2+") translateX("+slihori2+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim6+"deg)"});
        } else if (vidfilter === "filter66") {
  vidplayer2.css({"transform":"scale("+shrink2+","+shrinky2+") translateY("+silvert2+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim6+"deg)"});
        } else if (vidfilter === "filter67") {
  vidplayer2.css({"transform":"scale("+shrink2+","+shrinky2+") translate("+slihori2+"%,"+slidia2+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim6+"deg)"});
        } else if (vidfilter === "filter68") {
  vidplayer2.css({"transform":"scale("+shrink2+","+shrinky2+") translateX("+slihori2+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim6+"deg)"});
        } else if (vidfilter === "filter69") {
  vidplayer2.css({"transform":"scale("+shrink2+","+shrinky2+") translateY("+silvert2+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim6+"deg)"});
        } else if (vidfilter === "filter70") {
  vidplayer2.css({"transform":"scale("+shrink2+","+shrinky2+") translate("+slihori2+"%,"+slidia2+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim6+"deg)"});
        } else if (vidfilter === "filter71") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translateX("+pophori2+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim6+"deg)"});
        } else if (vidfilter === "filter72") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translateY("+popvert2+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim6+"deg)"});
        } else if (vidfilter === "filter73") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+pophori2+"%,"+popdia2+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim6+"deg)"});
        } else if (vidfilter === "filter74") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translateX("+pophori2+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim6+"deg)"});
        } else if (vidfilter === "filter75") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translateY("+popvert2+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim6+"deg)"});
        } else if (vidfilter === "filter76") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+pophori2+"%,"+popdia2+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim6+"deg)"});
        } else if (vidfilter === "filter77") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translateX("+pophori2+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim6+"deg)"});
        } else if (vidfilter === "filter78") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translateY("+popvert2+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim6+"deg)"});
        } else if (vidfilter === "filter79") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+pophori2+"%,"+popdia2+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim6+"deg)"});
        } else if (vidfilter === "filter80") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") skewX("+strhorilr2+"deg)"});
        } else if (vidfilter === "filter81") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") skewX("+strhorirl2+"deg)"});
        } else if (vidfilter === "filter82") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") skewY("+strverttb2+"deg)"});
        } else if (vidfilter === "filter83") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") skewY("+strvertbt2+"deg)"});
        } else if (vidfilter === "filter84") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") skewX("+strhorilr2+"deg) translateX("+slihori2+"%)"});
        } else if (vidfilter === "filter85") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") skewX("+strhorirl2+"deg) translateX("+slihori2+"%)"});
        } else if (vidfilter === "filter86") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") skewY("+strverttb2+"deg) translateX("+slihori2+"%)"});
        } else if (vidfilter === "filter87") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") skewY("+strvertbt2+"deg) translateX("+slihori2+"%)"});
        } else if (vidfilter === "filter88") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") skewX("+strhorilr2+"deg) translateY("+silvert2+"%)"});
        } else if (vidfilter === "filter89") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") skewX("+strhorirl2+"deg) translateY("+silvert2+"%)"});
        } else if (vidfilter === "filter90") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") skewY("+strverttb2+"deg) translateY("+silvert2+"%)"});
        } else if (vidfilter === "filter91") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") skewY("+strvertbt2+"deg) translateY("+silvert2+"%)"});
        } else if (vidfilter === "filter92") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") skewX("+strhorilr2+"deg) translate("+slihori2+"%,"+slidia2+"%)"});
        } else if (vidfilter === "filter93") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") skewX("+strhorirl2+"deg) translate("+slihori2+"%,"+slidia2+"%)"});
        } else if (vidfilter === "filter94") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") skewY("+strverttb2+"deg) translate("+slihori2+"%,"+slidia2+"%)"});
        } else if (vidfilter === "filter95") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") skewY("+strvertbt2+"deg) translate("+slihori2+"%,"+slidia2+"%)"});
        } else if (vidfilter === "filter96") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") skewX("+strhorilr2+"deg) translate("+pophori2+"%,"+popdia2+"%)"});
        } else if (vidfilter === "filter97") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") skewX("+strhorirl2+"deg) translate("+pophori2+"%,"+popdia2+"%)"});
        } else if (vidfilter === "filter98") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") skewY("+strverttb2+"deg) translate("+pophori2+"%,"+popdia2+"%)"});
        } else if (vidfilter === "filter99") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") skewY("+strvertbt2+"deg) translate("+pophori2+"%,"+popdia2+"%)"});
        } else if (vidfilter === "filter100") {
  vidplayer2.css({"transform":"scale("+shrink2+", "+shrinky2+")","opacity":vidmove2});
        } else if (vidfilter === "filter101") {
  vidplayer2.css({"transform":"scale("+expand2+", "+expand4+")","opacity":vidmove2});
        } else if (vidfilter === "filter102") {
  vidplayer2.css({"transform":"scale("+compr2+","+heiscreen2+")","opacity":vidmove2});
        } else if (vidfilter === "filter103") {
  vidplayer2.css({"transform":"scale("+widescreen2+","+compr4+")","opacity":vidmove2});
        } else if (vidfilter === "filter104") {
  vidplayer2.css({"transform":"scale("+rothori2+","+shrinky2+")","opacity":vidmove2});
        } else if (vidfilter === "filter105") {
  vidplayer2.css({"transform":"scale("+shrink2+","+rotvert2+")","opacity":vidmove2});
        } else if (vidfilter === "filter106") {
  vidplayer2.css({"transform":"scale("+shrink2+","+shrinky2+") translateX("+slihori2+"%)","opacity":vidmove2});
        } else if (vidfilter === "filter107") {
  vidplayer2.css({"transform":"scale("+shrink2+","+shrinky2+") translateY("+silvert2+"%)","opacity":vidmove2});
        } else if (vidfilter === "filter108") {
  vidplayer2.css({"transform":"scale("+shrink2+","+shrinky2+") translate("+slihori2+"%,"+slidia2+"%)","opacity":vidmove2});
        } else if (vidfilter === "filter109") {
  vidplayer2.css({"transform":"scale("+rothori2+","+shrinky2+") translate("+slihori2+"%,"+slidia2+"%)","opacity":vidmove2});
        } else if (vidfilter === "filter110") {
  vidplayer2.css({"transform":"scale("+shrink2+","+rotvert2+") translate("+slihori2+"%,"+slidia2+"%)","opacity":vidmove2});
        } else if (vidfilter === "filter111") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translateX("+pophori2+"%)","opacity":vidmove2});
        } else if (vidfilter === "filter112") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translateY("+popvert2+"%)","opacity":vidmove2});
        } else if (vidfilter === "filter113") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori2+"%,"+popdia2+"%)","opacity":vidmove2});
        } else if (vidfilter === "filter114") {
  vidplayer2.css({"transform":"scale("+rothori2+","+compr4+") translateX("+pophori2+"%)","opacity":vidmove2});
        } else if (vidfilter === "filter115") {
  vidplayer2.css({"transform":"scale("+rothori2+","+compr4+") translateY("+popvert2+"%)","opacity":vidmove2});
        } else if (vidfilter === "filter116") {
  vidplayer2.css({"transform":"scale("+rothori2+","+compr4+") translate("+slihori2+"%,"+popdia2+"%)","opacity":vidmove2});
        } else if (vidfilter === "filter117") {
  vidplayer2.css({"transform":"scale("+shrink2+", "+shrinky2+")","opacity":vidmove2,"border-radius":"100%"});
        } else if (vidfilter === "filter118") {
  vidplayer2.css({"transform":"scale("+expand2+", "+expand4+")","opacity":vidmove2,"border-radius":"100%"});
        } else if (vidfilter === "filter119") {
  vidplayer2.css({"transform":"scale("+compr2+","+heiscreen2+")","opacity":vidmove2,"border-radius":"100%"});
        } else if (vidfilter === "filter120") {
  vidplayer2.css({"transform":"scale("+widescreen2+","+compr4+")","opacity":vidmove2,"border-radius":"100%"});
        } else if (vidfilter === "filter121") {
  vidplayer2.css({"transform":"scale("+rothori2+","+shrinky2+")","opacity":vidmove2,"border-radius":"100%"});
        } else if (vidfilter === "filter122") {
  vidplayer2.css({"transform":"scale("+shrink2+","+rotvert2+")","opacity":vidmove2,"border-radius":"100%"});
        } else if (vidfilter === "filter123") {
  vidplayer2.css({"transform":"scale("+shrink2+","+shrinky2+") translateX("+slihori2+"%)","opacity":vidmove2,"border-radius":"100%"});
        } else if (vidfilter === "filter124") {
  vidplayer2.css({"transform":"scale("+shrink2+","+shrinky2+") translateY("+silvert2+"%)","opacity":vidmove2,"border-radius":"100%"});
        } else if (vidfilter === "filter125") {
  vidplayer2.css({"transform":"scale("+shrink2+","+shrinky2+") translate("+slihori2+"%,"+slidia2+"%)","opacity":vidmove2,"border-radius":"100%"});
        } else if (vidfilter === "filter126") {
  vidplayer2.css({"transform":"scale("+rothori2+","+shrinky2+") translate("+slihori2+"%,"+slidia2+"%)","opacity":vidmove2,"border-radius":"100%"});
        } else if (vidfilter === "filter127") {
  vidplayer2.css({"transform":"scale("+shrink2+","+rotvert2+") translate("+slihori2+"%,"+slidia2+"%)","opacity":vidmove2,"border-radius":"100%"});
        } else if (vidfilter === "filter128") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translateX("+pophori2+"%)","opacity":vidmove2,"border-radius":"100%"});
        } else if (vidfilter === "filter129") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translateY("+popvert2+"%)","opacity":vidmove2,"border-radius":"100%"});
        } else if (vidfilter === "filter130") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori2+"%,"+popdia2+"%)","opacity":vidmove2,"border-radius":"100%"});
        } else if (vidfilter === "filter131") {
  vidplayer2.css({"transform":"scale("+rothori2+","+compr4+") translateX("+pophori2+"%)","opacity":vidmove2,"border-radius":"100%"});
        } else if (vidfilter === "filter132") {
  vidplayer2.css({"transform":"scale("+rothori2+","+compr4+") translateY("+popvert2+"%)","opacity":vidmove2,"border-radius":"100%"});
        } else if (vidfilter === "filter133") {
  vidplayer2.css({"transform":"scale("+rothori2+","+compr4+") translate("+slihori2+"%,"+popdia2+"%)","opacity":vidmove2,"border-radius":"100%"});
        } else if (vidfilter === "filter134") {
  vidplayer2.css({"transform":"scale("+widescreen2+","+heiscreen2+") translateX("+slihori2+"%) perspective(1500px) rotate3d(0,1,0,60deg)","opacity":vidmove2});
        } else if (vidfilter === "filter135") {
  vidplayer2.css({"transform":"scale("+widescreen2+","+heiscreen2+") translateY("+silvert2+"%) perspective(1000px) rotate3d(1,0,0,45deg)","opacity":vidmove2});
        } else if (vidfilter === "filter136") {
  vidplayer2.css({"transform":"scale("+widescreen2+","+heiscreen2+") translate("+slihori2+"%,"+slidia2+"%) perspective(1000px) rotate3d(1,0,0,45deg)","opacity":vidmove2});
        } else if (vidfilter === "filter137") {
  vidplayer2.css({"transform":"scale("+shrink2+","+shrinky2+") translateX("+slihori2+"%) perspective(1500px) rotate3d(0,1,0,60deg)","opacity":vidmove2});
        } else if (vidfilter === "filter138") {
  vidplayer2.css({"transform":"scale("+shrink2+","+shrinky2+") translateY("+silvert2+"%) perspective(1000px) rotate3d(1,0,0,45deg)","opacity":vidmove2});
        } else if (vidfilter === "filter139") {
  vidplayer2.css({"transform":"scale("+shrink2+","+shrinky2+") translate("+slihori2+"%,"+slidia2+"%) perspective(1000px) rotate3d(1,0,0,45deg)","opacity":vidmove2});
        } else if (vidfilter === "filter140") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translateX("+pophori2+"%) perspective(1500px) rotate3d(0,1,0,60deg)","opacity":vidmove2});
        } else if (vidfilter === "filter141") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translateY("+popvert2+"%) perspective(1000px) rotate3d(1,0,0,45deg)","opacity":vidmove2});
        } else if (vidfilter === "filter142") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori2+"%,"+popdia2+"%) perspective(1000px) rotate3d(1,0,0,45deg)","opacity":vidmove2});
        } else if (vidfilter === "filter143") {
  vidplayer2.css({"transform":"scale("+widescreen2+","+heiscreen2+") perspective("+persp2+"px) rotate3d(0,1,0,"+rotdim3+"deg)","opacity":vidmove2});
        } else if (vidfilter === "filter144") {
  vidplayer2.css({"transform":"scale("+widescreen2+","+heiscreen2+") perspective("+persp2+"px) rotate3d(0,1,0,"+rotdim4+"deg)","opacity":vidmove2});
        } else if (vidfilter === "filter145") {
  vidplayer2.css({"transform":"scale("+widescreen2+","+heiscreen2+") perspective("+persp2+"px) rotate3d(1,0,0,"+rotdim3+"deg)","opacity":vidmove2});
        } else if (vidfilter === "filter146") {
  vidplayer2.css({"transform":"scale("+widescreen2+","+heiscreen2+") perspective("+persp2+"px) rotate3d(1,0,0,"+rotdim4+"deg)","opacity":vidmove2});
        } else if (vidfilter === "filter147") {
  vidplayer2.css({"transform":"scale("+widescreen2+","+heiscreen2+") perspective("+persp2+"px) rotate3d(1,1,0,"+rotdim3+"deg)","opacity":vidmove2});
        } else if (vidfilter === "filter148") {
  vidplayer2.css({"transform":"scale("+widescreen2+","+heiscreen2+") perspective("+persp2+"px) rotate3d(1,1,0,"+rotdim4+"deg)","opacity":vidmove2});
        } else if (vidfilter === "filter149") {
  vidplayer2.css({"transform":"scale("+shrink2+","+shrinky2+") translateX("+slihori2+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim6+"deg)","opacity":vidmove2});
        } else if (vidfilter === "filter150") {
  vidplayer2.css({"transform":"scale("+shrink2+","+shrinky2+") translateY("+silvert2+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim6+"deg)","opacity":vidmove2});
        } else if (vidfilter === "filter151") {
  vidplayer2.css({"transform":"scale("+shrink2+","+shrinky2+") translate("+slihori2+"%,"+slidia2+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim6+"deg)","opacity":vidmove2});
        } else if (vidfilter === "filter152") {
  vidplayer2.css({"transform":"scale("+shrink2+","+shrinky2+") translateX("+slihori2+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim6+"deg)","opacity":vidmove2});
        } else if (vidfilter === "filter153") {
  vidplayer2.css({"transform":"scale("+shrink2+","+shrinky2+") translateY("+silvert2+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim6+"deg)","opacity":vidmove2});
        } else if (vidfilter === "filter154") {
  vidplayer2.css({"transform":"scale("+shrink2+","+shrinky2+") translate("+slihori2+"%,"+slidia2+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim6+"deg)","opacity":vidmove2});
        } else if (vidfilter === "filter155") {
  vidplayer2.css({"transform":"scale("+shrink2+","+shrinky2+") translateX("+slihori2+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim6+"deg)","opacity":vidmove2});
        } else if (vidfilter === "filter156") {
  vidplayer2.css({"transform":"scale("+shrink2+","+shrinky2+") translateY("+silvert2+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim6+"deg)","opacity":vidmove2});
        } else if (vidfilter === "filter157") {
  vidplayer2.css({"transform":"scale("+shrink2+","+shrinky2+") translate("+slihori2+"%,"+slidia2+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim6+"deg)","opacity":vidmove2});
        } else if (vidfilter === "filter158") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translateX("+pophori2+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim6+"deg)","opacity":vidmove2});
        } else if (vidfilter === "filter159") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translateY("+popvert2+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim6+"deg)","opacity":vidmove2});
        } else if (vidfilter === "filter160") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+pophori2+"%,"+popdia2+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim6+"deg)","opacity":vidmove2});
        } else if (vidfilter === "filter161") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translateX("+pophori2+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim6+"deg)","opacity":vidmove2});
        } else if (vidfilter === "filter162") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translateY("+popvert2+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim6+"deg)","opacity":vidmove2});
        } else if (vidfilter === "filter163") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+pophori2+"%,"+popdia2+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim6+"deg)","opacity":vidmove2});
        } else if (vidfilter === "filter164") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translateX("+pophori2+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim6+"deg)","opacity":vidmove2});
        } else if (vidfilter === "filter165") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translateY("+popvert2+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim6+"deg)","opacity":vidmove2});
        } else if (vidfilter === "filter166") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+pophori2+"%,"+popdia2+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim6+"deg)","opacity":vidmove2});
        } else if (vidfilter === "filter167") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") skewX("+strhorilr2+"deg)","opacity":vidmove2});
        } else if (vidfilter === "filter168") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") skewX("+strhorirl2+"deg)","opacity":vidmove2});
        } else if (vidfilter === "filter169") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") skewY("+strverttb2+"deg)","opacity":vidmove2});
        } else if (vidfilter === "filter170") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") skewY("+strvertbt2+"deg)","opacity":vidmove2});
        } else if (vidfilter === "filter171") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") skewX("+strhorilr2+"deg) translateX("+slihori2+"%)","opacity":vidmove2});
        } else if (vidfilter === "filter172") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") skewX("+strhorirl2+"deg) translateX("+slihori2+"%)","opacity":vidmove2});
        } else if (vidfilter === "filter173") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") skewY("+strverttb2+"deg) translateX("+slihori2+"%)","opacity":vidmove2});
        } else if (vidfilter === "filter174") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") skewY("+strvertbt2+"deg) translateX("+slihori2+"%)","opacity":vidmove2});
        } else if (vidfilter === "filter175") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") skewX("+strhorilr2+"deg) translateY("+silvert2+"%)","opacity":vidmove2});
        } else if (vidfilter === "filter176") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") skewX("+strhorirl2+"deg) translateY("+silvert2+"%)","opacity":vidmove2});
        } else if (vidfilter === "filter177") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") skewY("+strverttb2+"deg) translateY("+silvert2+"%)","opacity":vidmove2});
        } else if (vidfilter === "filter178") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") skewY("+strvertbt2+"deg) translateY("+silvert2+"%)","opacity":vidmove2});
        } else if (vidfilter === "filter179") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") skewX("+strhorilr2+"deg) translate("+slihori2+"%,"+slidia2+"%)","opacity":vidmove2});
        } else if (vidfilter === "filter180") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") skewX("+strhorirl2+"deg) translate("+slihori2+"%,"+slidia2+"%)","opacity":vidmove2});
        } else if (vidfilter === "filter181") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") skewY("+strverttb2+"deg) translate("+slihori2+"%,"+slidia2+"%)","opacity":vidmove2});
        } else if (vidfilter === "filter182") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") skewY("+strvertbt2+"deg) translate("+slihori2+"%,"+slidia2+"%)","opacity":vidmove2});
        } else if (vidfilter === "filter183") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") skewX("+strhorilr2+"deg) translate("+pophori2+"%,"+popdia2+"%)","opacity":vidmove2});
        } else if (vidfilter === "filter184") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") skewX("+strhorirl2+"deg) translate("+pophori2+"%,"+popdia2+"%)","opacity":vidmove2});
        } else if (vidfilter === "filter185") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") skewY("+strverttb2+"deg) translate("+pophori2+"%,"+popdia2+"%)","opacity":vidmove2});
        } else if (vidfilter === "filter186") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") skewY("+strvertbt2+"deg) translate("+pophori2+"%,"+popdia2+"%)","opacity":vidmove2});
        } else if (vidfilter === "filter187") {
  vidplayer2.css({"transform":"scale("+shrink2+", "+shrinky2+") rotate("+rotdim6+"deg)","opacity":vidmove2});
        } else if (vidfilter === "filter188") {
  vidplayer2.css({"transform":"scale("+expand2+", "+expand4+") rotate("+rotdim6+"deg)","opacity":vidmove2});
        } else if (vidfilter === "filter189") {
  vidplayer2.css({"transform":"scale("+compr2+","+heiscreen2+") rotate("+rotdim6+"deg)","opacity":vidmove2});
        } else if (vidfilter === "filter190") {
  vidplayer2.css({"transform":"scale("+widescreen2+","+compr4+") rotate("+rotdim6+"deg)","opacity":vidmove2});
        } else if (vidfilter === "filter191") {
  vidplayer2.css({"transform":"scale("+rothori2+","+shrinky2+") rotate("+rotdim6+"deg)","opacity":vidmove2});
        } else if (vidfilter === "filter192") {
  vidplayer2.css({"transform":"scale("+shrink2+","+rotvert2+") rotate("+rotdim6+"deg)","opacity":vidmove2});
        } else if (vidfilter === "filter193") {
  vidplayer2.css({"transform":"scale("+shrink2+","+shrinky2+") translateX("+slihori2+"%) rotate("+rotdim6+"deg)","opacity":vidmove2});
        } else if (vidfilter === "filter194") {
  vidplayer2.css({"transform":"scale("+shrink2+","+shrinky2+") translateY("+silvert2+"%) rotate("+rotdim6+"deg)","opacity":vidmove2});
        } else if (vidfilter === "filter195") {
  vidplayer2.css({"transform":"scale("+shrink2+","+shrinky2+") translate("+slihori2+"%,"+slidia2+"%) rotate("+rotdim6+"deg)","opacity":vidmove2});
        } else if (vidfilter === "filter196") {
  vidplayer2.css({"transform":"scale("+rothori2+","+shrinky2+") translate("+slihori2+"%,"+slidia2+"%) rotate("+rotdim6+"deg)","opacity":vidmove2});
        } else if (vidfilter === "filter197") {
  vidplayer2.css({"transform":"scale("+shrink2+","+rotvert2+") translate("+slihori2+"%,"+slidia2+"%) rotate("+rotdim6+"deg)","opacity":vidmove2});
        } else if (vidfilter === "filter198") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translateX("+pophori2+"%) rotate("+rotdim6+"deg)","opacity":vidmove2});
        } else if (vidfilter === "filter199") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translateY("+popvert2+"%) rotate("+rotdim6+"deg)","opacity":vidmove2});
        } else if (vidfilter === "filter200") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori2+"%,"+popdia2+"%) rotate("+rotdim6+"deg)","opacity":vidmove2});
        } else if (vidfilter === "filter201") {
  vidplayer2.css({"transform":"scale("+rothori2+","+compr4+") translateX("+pophori2+"%) rotate("+rotdim6+"deg)","opacity":vidmove2});
        } else if (vidfilter === "filter202") {
  vidplayer2.css({"transform":"scale("+rothori2+","+compr4+") translateY("+popvert2+"%) rotate("+rotdim6+"deg)","opacity":vidmove2});
        } else if (vidfilter === "filter203") {
  vidplayer2.css({"transform":"scale("+rothori2+","+compr4+") translate("+slihori2+"%,"+popdia2+"%) rotate("+rotdim6+"deg)","opacity":vidmove2});
        } else if (vidfilter === "filter204") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori22+"%,"+popdia2+"%)"});
        } else if (vidfilter === "filter205") {
  vidplayer2.css({"transform":"scale("+rothori2+","+compr4+") translate("+slihori22+"%,"+popdia2+"%)"});
        } else if (vidfilter === "filter206") {
  vidplayer2.css({"transform":"scale("+compr2+","+rotvert2+") translate("+slihori22+"%,"+popdia2+"%)"});
        } else if (vidfilter === "filter207") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori22+"%,"+popdia2+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim6+"deg)"});
        } else if (vidfilter === "filter208") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori22+"%,"+popdia2+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim6+"deg)"});
        } else if (vidfilter === "filter209") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori22+"%,"+popdia2+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim6+"deg)"});
        } else if (vidfilter === "filter210") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori22+"%,"+slidia2+"%) rotate("+rotdim6+"deg)"});
        } else if (vidfilter === "filter211") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori22+"%,"+slidia2+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter212") {
  vidplayer2.css({"transform":"scale("+rothori2+","+compr4+") translate("+slihori22+"%,"+slidia2+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter213") {
  vidplayer2.css({"transform":"scale("+compr2+","+rotvert2+") translate("+slihori22+"%,"+slidia2+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter214") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori22+"%,"+slidia2+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim6+"deg)","border-radius":"100%"});
        } else if (vidfilter === "filter215") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori22+"%,"+slidia2+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim6+"deg)","border-radius":"100%"});
        } else if (vidfilter === "filter216") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori22+"%,"+slidia2+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim6+"deg)","border-radius":"100%"});
        } else if (vidfilter === "filter217") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori22+"%,"+slidia2+"%) rotate("+rotdim6+"deg)","border-radius":"100%"});
        } else if (vidfilter === "filter218") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori22+"%,"+slidia2+"%)","opacity":vidmove2});
        } else if (vidfilter === "filter219") {
  vidplayer2.css({"transform":"scale("+rothori2+","+compr4+") translate("+slihori22+"%,"+slidia2+"%)","opacity":vidmove2});
        } else if (vidfilter === "filter220") {
  vidplayer2.css({"transform":"scale("+compr2+","+rotvert2+") translate("+slihori22+"%,"+slidia2+"%)","opacity":vidmove2});
        } else if (vidfilter === "filter221") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori22+"%,"+slidia2+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim6+"deg)","opacity":vidmove2});
        } else if (vidfilter === "filter222") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori22+"%,"+slidia2+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim6+"deg)","opacity":vidmove2});
        } else if (vidfilter === "filter223") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori22+"%,"+slidia2+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim6+"deg)","opacity":vidmove2});
        } else if (vidfilter === "filter224") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori22+"%,"+slidia2+"%) rotate("+rotdim6+"deg)","opacity":vidmove2});
        } else if (vidfilter === "filter225") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori2+"%,"+silvert22+"%)"});
        } else if (vidfilter === "filter226") {
  vidplayer2.css({"transform":"scale("+rothori2+","+compr4+") translate("+slihori2+"%,"+silvert22+"%)"});
        } else if (vidfilter === "filter227") {
  vidplayer2.css({"transform":"scale("+compr2+","+rotvert2+") translate("+slihori2+"%,"+silvert22+"%)"});
        } else if (vidfilter === "filter228") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori2+"%,"+silvert22+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim6+"deg)"});
        } else if (vidfilter === "filter229") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori2+"%,"+silvert22+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim6+"deg)"});
        } else if (vidfilter === "filter230") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori2+"%,"+silvert22+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim6+"deg)"});
        } else if (vidfilter === "filter231") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori2+"%,"+silvert22+"%) rotate("+rotdim6+"deg)"});
        } else if (vidfilter === "filter232") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori2+"%,"+silvert22+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter233") {
  vidplayer2.css({"transform":"scale("+rothori2+","+compr4+") translate("+slihori2+"%,"+silvert22+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter234") {
  vidplayer2.css({"transform":"scale("+compr2+","+rotvert2+") translate("+slihori2+"%,"+silvert22+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter235") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori2+"%,"+silvert22+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim6+"deg)","border-radius":"100%"});
        } else if (vidfilter === "filter236") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori2+"%,"+silvert22+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim6+"deg)","border-radius":"100%"});
        } else if (vidfilter === "filter237") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori2+"%,"+silvert22+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim6+"deg)","border-radius":"100%"});
        } else if (vidfilter === "filter238") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori2+"%,"+silvert22+"%) rotate("+rotdim6+"deg)","border-radius":"100%"});
        } else if (vidfilter === "filter239") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori2+"%,"+silvert22+"%)","opacity":vidmove2});
        } else if (vidfilter === "filter240") {
  vidplayer2.css({"transform":"scale("+rothori2+","+compr4+") translate("+slihori2+"%,"+silvert22+"%)","opacity":vidmove2});
        } else if (vidfilter === "filter241") {
  vidplayer2.css({"transform":"scale("+compr2+","+rotvert2+") translate("+slihori2+"%,"+silvert22+"%)","opacity":vidmove2});
        } else if (vidfilter === "filter242") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori2+"%,"+silvert22+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim6+"deg)","opacity":vidmove2});
        } else if (vidfilter === "filter243") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori2+"%,"+silvert22+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim6+"deg)","opacity":vidmove2});
        } else if (vidfilter === "filter244") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori2+"%,"+silvert22+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim6+"deg)","opacity":vidmove2});
        } else if (vidfilter === "filter245") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori2+"%,"+silvert22+"%) rotate("+rotdim6+"deg)","opacity":vidmove2});
        } else if (vidfilter === "filter246") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori22+"%,"+silvert22+"%)"});
        } else if (vidfilter === "filter247") {
  vidplayer2.css({"transform":"scale("+rothori2+","+compr4+") translate("+slihori22+"%,"+silvert22+"%)"});
        } else if (vidfilter === "filter248") {
  vidplayer2.css({"transform":"scale("+compr2+","+rotvert2+") translate("+slihori22+"%,"+silvert22+"%)"});
        } else if (vidfilter === "filter249") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori22+"%,"+silvert22+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim6+"deg)"});
        } else if (vidfilter === "filter250") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori22+"%,"+silvert22+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim6+"deg)"});
        } else if (vidfilter === "filter251") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori22+"%,"+silvert22+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim6+"deg)"});
        } else if (vidfilter === "filter252") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori22+"%,"+silvert22+"%) rotate("+rotdim6+"deg)"});
        } else if (vidfilter === "filter253") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori22+"%,"+silvert22+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter254") {
  vidplayer2.css({"transform":"scale("+rothori2+","+compr4+") translate("+slihori22+"%,"+silvert22+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter255") {
  vidplayer2.css({"transform":"scale("+compr2+","+rotvert2+") translate("+slihori22+"%,"+silvert22+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter256") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori22+"%,"+silvert22+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim6+"deg)","border-radius":"100%"});
        } else if (vidfilter === "filter257") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori22+"%,"+silvert22+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim6+"deg)","border-radius":"100%"});
        } else if (vidfilter === "filter258") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori22+"%,"+silvert22+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim6+"deg)","border-radius":"100%"});
        } else if (vidfilter === "filter259") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori22+"%,"+silvert22+"%) rotate("+rotdim6+"deg)","border-radius":"100%"});
        } else if (vidfilter === "filter260") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori22+"%,"+silvert22+"%)","opacity":vidmove2});
        } else if (vidfilter === "filter261") {
  vidplayer2.css({"transform":"scale("+rothori2+","+compr4+") translate("+slihori22+"%,"+silvert22+"%)","opacity":vidmove2});
        } else if (vidfilter === "filter262") {
  vidplayer2.css({"transform":"scale("+compr2+","+rotvert2+") translate("+slihori22+"%,"+silvert22+"%)","opacity":vidmove2});
        } else if (vidfilter === "filter263") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori22+"%,"+silvert22+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim6+"deg)","opacity":vidmove2});
        } else if (vidfilter === "filter264") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori22+"%,"+silvert22+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim6+"deg)","opacity":vidmove2});
        } else if (vidfilter === "filter265") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori22+"%,"+silvert22+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim6+"deg)","opacity":vidmove2});
        } else if (vidfilter === "filter266") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori22+"%,"+silvert22+"%) rotate("+rotdim6+"deg)","opacity":vidmove2});
        } else if (vidfilter === "filter267") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori22+"%,"+popdia2+"%) perspective(1000px) rotate3d(1,0,0,45deg)"});
        } else if (vidfilter === "filter268") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori22+"%,"+popdia2+"%) perspective(1000px) rotate3d(0,1,0,45deg)"});
        } else if (vidfilter === "filter269") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori22+"%,"+popdia2+"%) perspective(1000px) rotate3d(1,0,0,45deg)","border-radius":"100%"});
        } else if (vidfilter === "filter270") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori22+"%,"+popdia2+"%) perspective(1000px) rotate3d(0,1,0,45deg)","border-radius":"100%"});
        } else if (vidfilter === "filter271") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori22+"%,"+popdia2+"%) perspective(1000px) rotate3d(1,0,0,45deg)","opacity":vidmove2});
        } else if (vidfilter === "filter272") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori22+"%,"+popdia2+"%) perspective(1000px) rotate3d(0,1,0,45deg)","opacity":vidmove2});
        } else if (vidfilter === "filter273") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori2+"%,"+silvert22+"%) perspective(1000px) rotate3d(1,0,0,45deg)"});
        } else if (vidfilter === "filter274") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori2+"%,"+silvert22+"%) perspective(1000px) rotate3d(0,1,0,45deg)"});
        } else if (vidfilter === "filter275") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori2+"%,"+silvert22+"%) perspective(1000px) rotate3d(1,0,0,45deg)","border-radius":"100%"});
        } else if (vidfilter === "filter276") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori2+"%,"+silvert22+"%) perspective(1000px) rotate3d(0,1,0,45deg)","border-radius":"100%"});
        } else if (vidfilter === "filter277") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori2+"%,"+silvert22+"%) perspective(1000px) rotate3d(1,0,0,45deg)","opacity":vidmove2});
        } else if (vidfilter === "filter278") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori2+"%,"+silvert22+"%) perspective(1000px) rotate3d(0,1,0,45deg)","opacity":vidmove2});
        } else if (vidfilter === "filter279") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori22+"%,"+silvert22+"%) perspective(1000px) rotate3d(1,0,0,45deg)"});
        } else if (vidfilter === "filter280") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori22+"%,"+silvert22+"%) perspective(1000px) rotate3d(0,1,0,45deg)"});
        } else if (vidfilter === "filter281") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori22+"%,"+silvert22+"%) perspective(1000px) rotate3d(1,0,0,45deg)","border-radius":"100%"});
        } else if (vidfilter === "filter282") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori22+"%,"+silvert22+"%) perspective(1000px) rotate3d(0,1,0,45deg)","border-radius":"100%"});
        } else if (vidfilter === "filter283") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori22+"%,"+silvert22+"%) perspective(1000px) rotate3d(1,0,0,45deg)","opacity":vidmove2});
        } else if (vidfilter === "filter284") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori22+"%,"+silvert22+"%) perspective(1000px) rotate3d(0,1,0,45deg)","opacity":vidmove2});
        } else if (vidfilter === "filter285") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori222+"%,"+popdia2+"%)"});
        } else if (vidfilter === "filter286") {
  vidplayer2.css({"transform":"scale("+rothori2+","+compr4+") translate("+slihori222+"%,"+popdia2+"%)"});
        } else if (vidfilter === "filter287") {
  vidplayer2.css({"transform":"scale("+compr2+","+rotvert2+") translate("+slihori222+"%,"+popdia2+"%)"});
        } else if (vidfilter === "filter288") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori222+"%,"+popdia2+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim6+"deg)"});
        } else if (vidfilter === "filter289") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori222+"%,"+popdia2+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim6+"deg)"});
        } else if (vidfilter === "filter290") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori222+"%,"+popdia2+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim6+"deg)"});
        } else if (vidfilter === "filter291") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori222+"%,"+slidia2+"%) rotate("+rotdim6+"deg)"});
        } else if (vidfilter === "filter292") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori222+"%,"+slidia2+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter293") {
  vidplayer2.css({"transform":"scale("+rothori2+","+compr4+") translate("+slihori222+"%,"+slidia2+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter294") {
  vidplayer2.css({"transform":"scale("+compr2+","+rotvert2+") translate("+slihori222+"%,"+slidia2+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter295") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori222+"%,"+slidia2+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim6+"deg)","border-radius":"100%"});
        } else if (vidfilter === "filter296") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori222+"%,"+slidia2+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim6+"deg)","border-radius":"100%"});
        } else if (vidfilter === "filter297") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori222+"%,"+slidia2+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim6+"deg)","border-radius":"100%"});
        } else if (vidfilter === "filter298") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori222+"%,"+slidia2+"%) rotate("+rotdim6+"deg)","border-radius":"100%"});
        } else if (vidfilter === "filter299") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori222+"%,"+slidia2+"%)","opacity":vidmove2});
        } else if (vidfilter === "filter300") {
  vidplayer2.css({"transform":"scale("+rothori2+","+compr4+") translate("+slihori222+"%,"+slidia2+"%)","opacity":vidmove2});
        } else if (vidfilter === "filter301") {
  vidplayer2.css({"transform":"scale("+compr2+","+rotvert2+") translate("+slihori222+"%,"+slidia2+"%)","opacity":vidmove2});
        } else if (vidfilter === "filter302") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori222+"%,"+slidia2+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim6+"deg)","opacity":vidmove2});
        } else if (vidfilter === "filter303") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori222+"%,"+slidia2+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim6+"deg)","opacity":vidmove2});
        } else if (vidfilter === "filter304") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori222+"%,"+slidia2+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim6+"deg)","opacity":vidmove2});
        } else if (vidfilter === "filter305") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori222+"%,"+slidia2+"%) rotate("+rotdim6+"deg)","opacity":vidmove2});
        } else if (vidfilter === "filter306") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori2+"%,"+silvert222+"%)"});
        } else if (vidfilter === "filter307") {
  vidplayer2.css({"transform":"scale("+rothori2+","+compr4+") translate("+slihori2+"%,"+silvert222+"%)"});
        } else if (vidfilter === "filter308") {
  vidplayer2.css({"transform":"scale("+compr2+","+rotvert2+") translate("+slihori2+"%,"+silvert222+"%)"});
        } else if (vidfilter === "filter309") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori2+"%,"+silvert222+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim6+"deg)"});
        } else if (vidfilter === "filter310") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori2+"%,"+silvert222+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim6+"deg)"});
        } else if (vidfilter === "filter311") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori2+"%,"+silvert222+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim6+"deg)"});
        } else if (vidfilter === "filter312") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori2+"%,"+silvert222+"%) rotate("+rotdim6+"deg)"});
        } else if (vidfilter === "filter313") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori2+"%,"+silvert222+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter314") {
  vidplayer2.css({"transform":"scale("+rothori2+","+compr4+") translate("+slihori2+"%,"+silvert222+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter315") {
  vidplayer2.css({"transform":"scale("+compr2+","+rotvert2+") translate("+slihori2+"%,"+silvert222+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter316") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori2+"%,"+silvert222+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim6+"deg)","border-radius":"100%"});
        } else if (vidfilter === "filter317") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori2+"%,"+silvert222+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim6+"deg)","border-radius":"100%"});
        } else if (vidfilter === "filter318") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori2+"%,"+silvert222+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim6+"deg)","border-radius":"100%"});
        } else if (vidfilter === "filter319") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori2+"%,"+silvert222+"%) rotate("+rotdim6+"deg)","border-radius":"100%"});
        } else if (vidfilter === "filter320") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori2+"%,"+silvert222+"%)","opacity":vidmove2});
        } else if (vidfilter === "filter321") {
  vidplayer2.css({"transform":"scale("+rothori2+","+compr4+") translate("+slihori2+"%,"+silvert222+"%)","opacity":vidmove2});
        } else if (vidfilter === "filter322") {
  vidplayer2.css({"transform":"scale("+compr2+","+rotvert2+") translate("+slihori2+"%,"+silvert222+"%)","opacity":vidmove2});
        } else if (vidfilter === "filter323") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori2+"%,"+silvert222+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim6+"deg)","opacity":vidmove2});
        } else if (vidfilter === "filter324") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori2+"%,"+silvert222+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim6+"deg)","opacity":vidmove2});
        } else if (vidfilter === "filter325") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori2+"%,"+silvert222+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim6+"deg)","opacity":vidmove2});
        } else if (vidfilter === "filter326") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori2+"%,"+silvert222+"%) rotate("+rotdim6+"deg)","opacity":vidmove2});
        } else if (vidfilter === "filter327") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori222+"%,"+silvert222+"%)"});
        } else if (vidfilter === "filter328") {
  vidplayer2.css({"transform":"scale("+rothori2+","+compr4+") translate("+slihori222+"%,"+silvert222+"%)"});
        } else if (vidfilter === "filter329") {
  vidplayer2.css({"transform":"scale("+compr2+","+rotvert2+") translate("+slihori222+"%,"+silvert222+"%)"});
        } else if (vidfilter === "filter330") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori222+"%,"+silvert222+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim6+"deg)"});
        } else if (vidfilter === "filter331") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori222+"%,"+silvert222+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim6+"deg)"});
        } else if (vidfilter === "filter332") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori222+"%,"+silvert222+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim6+"deg)"});
        } else if (vidfilter === "filter333") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori222+"%,"+silvert222+"%) rotate("+rotdim6+"deg)"});
        } else if (vidfilter === "filter334") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori222+"%,"+silvert222+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter335") {
  vidplayer2.css({"transform":"scale("+rothori2+","+compr4+") translate("+slihori222+"%,"+silvert222+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter336") {
  vidplayer2.css({"transform":"scale("+compr2+","+rotvert2+") translate("+slihori222+"%,"+silvert222+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter337") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori222+"%,"+silvert222+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim6+"deg)","border-radius":"100%"});
        } else if (vidfilter === "filter338") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori222+"%,"+silvert222+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim6+"deg)","border-radius":"100%"});
        } else if (vidfilter === "filter339") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori222+"%,"+silvert222+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim6+"deg)","border-radius":"100%"});
        } else if (vidfilter === "filter340") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori222+"%,"+silvert222+"%) rotate("+rotdim6+"deg)","border-radius":"100%"});
        } else if (vidfilter === "filter341") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori222+"%,"+silvert222+"%)","opacity":vidmove2});
        } else if (vidfilter === "filter342") {
  vidplayer2.css({"transform":"scale("+rothori2+","+compr4+") translate("+slihori222+"%,"+silvert222+"%)","opacity":vidmove2});
        } else if (vidfilter === "filter343") {
  vidplayer2.css({"transform":"scale("+compr2+","+rotvert2+") translate("+slihori222+"%,"+silvert222+"%)","opacity":vidmove2});
        } else if (vidfilter === "filter344") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori222+"%,"+silvert222+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim6+"deg)","opacity":vidmove2});
        } else if (vidfilter === "filter345") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori222+"%,"+silvert222+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim6+"deg)","opacity":vidmove2});
        } else if (vidfilter === "filter346") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori222+"%,"+silvert222+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim6+"deg)","opacity":vidmove2});
        } else if (vidfilter === "filter347") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori222+"%,"+silvert222+"%) rotate("+rotdim6+"deg)","opacity":vidmove2});
        } else if (vidfilter === "filter348") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori222+"%,"+popdia2+"%) perspective(1000px) rotate3d(1,0,0,45deg)"});
        } else if (vidfilter === "filter349") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori222+"%,"+popdia2+"%) perspective(1000px) rotate3d(0,1,0,45deg)"});
        } else if (vidfilter === "filter350") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori222+"%,"+popdia2+"%) perspective(1000px) rotate3d(1,0,0,45deg)","border-radius":"100%"});
        } else if (vidfilter === "filter351") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori222+"%,"+popdia2+"%) perspective(1000px) rotate3d(0,1,0,45deg)","border-radius":"100%"});
        } else if (vidfilter === "filter352") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori222+"%,"+popdia2+"%) perspective(1000px) rotate3d(1,0,0,45deg)","opacity":vidmove2});
        } else if (vidfilter === "filter353") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori222+"%,"+popdia2+"%) perspective(1000px) rotate3d(0,1,0,45deg)","opacity":vidmove2});
        } else if (vidfilter === "filter354") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori2+"%,"+silvert222+"%) perspective(1000px) rotate3d(1,0,0,45deg)"});
        } else if (vidfilter === "filter355") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori2+"%,"+silvert222+"%) perspective(1000px) rotate3d(0,1,0,45deg)"});
        } else if (vidfilter === "filter356") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori2+"%,"+silvert222+"%) perspective(1000px) rotate3d(1,0,0,45deg)","border-radius":"100%"});
        } else if (vidfilter === "filter357") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori2+"%,"+silvert222+"%) perspective(1000px) rotate3d(0,1,0,45deg)","border-radius":"100%"});
        } else if (vidfilter === "filter358") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori2+"%,"+silvert222+"%) perspective(1000px) rotate3d(1,0,0,45deg)","opacity":vidmove2});
        } else if (vidfilter === "filter359") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori2+"%,"+silvert222+"%) perspective(1000px) rotate3d(0,1,0,45deg)","opacity":vidmove2});
        } else if (vidfilter === "filter360") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori222+"%,"+silvert222+"%) perspective(1000px) rotate3d(1,0,0,45deg)"});
        } else if (vidfilter === "filter361") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori222+"%,"+silvert222+"%) perspective(1000px) rotate3d(0,1,0,45deg)"});
        } else if (vidfilter === "filter362") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori222+"%,"+silvert222+"%) perspective(1000px) rotate3d(1,0,0,45deg)","border-radius":"100%"});
        } else if (vidfilter === "filter363") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori222+"%,"+silvert222+"%) perspective(1000px) rotate3d(0,1,0,45deg)","border-radius":"100%"});
        } else if (vidfilter === "filter364") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori222+"%,"+silvert222+"%) perspective(1000px) rotate3d(1,0,0,45deg)","opacity":vidmove2});
        } else if (vidfilter === "filter365") {
  vidplayer2.css({"transform":"scale("+compr2+","+compr4+") translate("+slihori222+"%,"+silvert222+"%) perspective(1000px) rotate3d(0,1,0,45deg)","opacity":vidmove2});
        } else if (vidfilter === "filter366") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+")"});
        } else if (vidfilter === "filter367") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") translateX("+slihori2+"%)"});
        } else if (vidfilter === "filter368") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") translateY("+silvert2+"%)"});
        } else if (vidfilter === "filter369") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") translate("+slihori2+"%,"+slidia2+"%)"});
        } else if (vidfilter === "filter370") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") translateX("+pophori2+"%)"});
        } else if (vidfilter === "filter371") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") translateY("+popvert2+"%)"});
        } else if (vidfilter === "filter372") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") translate("+slihori2+"%,"+popdia2+"%)"});
        } else if (vidfilter === "filter373") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") translate("+slihori22/2+"%,"+slidia2+"%)"});
        } else if (vidfilter === "filter374") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") translate("+slihori2+"%,"+silvert22/2+"%)"});
        } else if (vidfilter === "filter375") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") translate("+slihori22/2+"%,"+silvert22/2+"%)"});
        } else if (vidfilter === "filter376") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") translate("+slihori222/3+"%,"+slidia2+"%)"});
        } else if (vidfilter === "filter377") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") translate("+slihori2+"%,"+silvert222/3+"%)"});
        } else if (vidfilter === "filter378") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") translate("+slihori222/3+"%,"+silvert222/3+"%)"});
        } else if (vidfilter === "filter379") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+")","border-radius":"100%"});
        } else if (vidfilter === "filter380") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") translateX("+slihori2+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter381") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") translateY("+silvert2+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter382") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") translate("+slihori2+"%,"+slidia2+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter383") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") translateX("+pophori2+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter384") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") translateY("+popvert2+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter385") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") translate("+slihori2+"%,"+popdia2+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter386") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") translate("+slihori22/2+"%,"+slidia2+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter387") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") translate("+slihori2+"%,"+silvert22/2+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter388") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") translate("+slihori22/2+"%,"+silvert22/2+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter389") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") translate("+slihori222/3+"%,"+slidia2+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter390") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") translate("+slihori2+"%,"+silvert222/3+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter391") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") translate("+slihori222/3+"%,"+silvert222/3+"%)","border-radius":"100%"});
        } else if (vidfilter === "filter392") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+")","opacity":vidmove2});
        } else if (vidfilter === "filter393") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") translateX("+slihori2+"%)","opacity":vidmove2});
        } else if (vidfilter === "filter394") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") translateY("+silvert2+"%)","opacity":vidmove2});
        } else if (vidfilter === "filter395") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") translate("+slihori2+"%,"+slidia2+"%)","opacity":vidmove2});
        } else if (vidfilter === "filter396") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") translateX("+pophori2+"%)","opacity":vidmove2});
        } else if (vidfilter === "filter397") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") translateY("+popvert2+"%)","opacity":vidmove2});
        } else if (vidfilter === "filter398") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") translate("+slihori2+"%,"+popdia2+"%)","opacity":vidmove2});
        } else if (vidfilter === "filter399") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") translate("+slihori22/2+"%,"+slidia2+"%)","opacity":vidmove2});
        } else if (vidfilter === "filter400") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") translate("+slihori2+"%,"+silvert22/2+"%)","opacity":vidmove2});
        } else if (vidfilter === "filter401") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") translate("+slihori22/2+"%,"+silvert22/2+"%)","opacity":vidmove2});
        } else if (vidfilter === "filter402") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") translate("+slihori222/3+"%,"+slidia2+"%)","opacity":vidmove2});
        } else if (vidfilter === "filter403") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") translate("+slihori2+"%,"+silvert222/3+"%)","opacity":vidmove2});
        } else if (vidfilter === "filter404") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") translate("+slihori222/3+"%,"+silvert222/3+"%)","opacity":vidmove2});
        } else if (vidfilter === "filter405") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") perspective(1000px) rotate3d(1,0,0,"+rotdim4+"deg)"});
        } else if (vidfilter === "filter406") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") translateX("+slihori2+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim4+"deg)"});
        } else if (vidfilter === "filter407") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") translateY("+silvert2+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim4+"deg)"});
        } else if (vidfilter === "filter408") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") translate("+slihori2+"%,"+slidia2+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim4+"deg)"});
        } else if (vidfilter === "filter409") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") translateX("+pophori2+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim4+"deg)"});
        } else if (vidfilter === "filter410") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") translateY("+popvert2+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim4+"deg)"});
        } else if (vidfilter === "filter411") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") translate("+slihori2+"%,"+popdia2+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim4+"deg)"});
        } else if (vidfilter === "filter412") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") translate("+slihori22/2+"%,"+slidia2+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim4+"deg)"});
        } else if (vidfilter === "filter413") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") translate("+slihori2+"%,"+silvert22/2+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim4+"deg)"});
        } else if (vidfilter === "filter414") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") translate("+slihori22/2+"%,"+silvert22/2+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim4+"deg)"});
        } else if (vidfilter === "filter415") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") translate("+slihori222/4+"%,"+slidia2+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim4+"deg)"});
        } else if (vidfilter === "filter416") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") translate("+slihori2+"%,"+silvert222/4+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim4+"deg)"});
        } else if (vidfilter === "filter417") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") translate("+slihori222/4+"%,"+silvert222/4+"%) perspective(1000px) rotate3d(1,0,0,"+rotdim4+"deg)"});
        } else if (vidfilter === "filter418") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") perspective(1000px) rotate3d(0,1,0,"+rotdim4+"deg)"});
        } else if (vidfilter === "filter419") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") translateX("+slihori2+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim4+"deg)"});
        } else if (vidfilter === "filter420") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") translateY("+silvert2+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim4+"deg)"});
        } else if (vidfilter === "filter421") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") translate("+slihori2+"%,"+slidia2+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim4+"deg)"});
        } else if (vidfilter === "filter422") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") translateX("+pophori2+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim4+"deg)"});
        } else if (vidfilter === "filter423") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") translateY("+popvert2+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim4+"deg)"});
        } else if (vidfilter === "filter424") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") translate("+slihori2+"%,"+popdia2+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim4+"deg)"});
        } else if (vidfilter === "filter425") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") translate("+slihori22/2+"%,"+slidia2+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim4+"deg)"});
        } else if (vidfilter === "filter426") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") translate("+slihori2+"%,"+silvert22/2+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim4+"deg)"});
        } else if (vidfilter === "filter427") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") translate("+slihori22/2+"%,"+silvert22/2+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim4+"deg)"});
        } else if (vidfilter === "filter428") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") translate("+slihori222/4+"%,"+slidia2+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim4+"deg)"});
        } else if (vidfilter === "filter429") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") translate("+slihori2+"%,"+silvert222/4+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim4+"deg)"});
        } else if (vidfilter === "filter430") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") translate("+slihori222/4+"%,"+silvert222/4+"%) perspective(1000px) rotate3d(0,1,0,"+rotdim4+"deg)"});
        } else if (vidfilter === "filter431") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") perspective(1000px) rotate3d(1,1,0,"+rotdim4+"deg)"});
        } else if (vidfilter === "filter432") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") translateX("+slihori2+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim4+"deg)"});
        } else if (vidfilter === "filter433") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") translateY("+silvert2+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim4+"deg)"});
        } else if (vidfilter === "filter434") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") translate("+slihori2+"%,"+slidia2+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim4+"deg)"});
        } else if (vidfilter === "filter435") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") translateX("+pophori2+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim4+"deg)"});
        } else if (vidfilter === "filter436") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") translateY("+popvert2+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim4+"deg)"});
        } else if (vidfilter === "filter437") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") translate("+slihori2+"%,"+popdia2+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim4+"deg)"});
        } else if (vidfilter === "filter438") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") translate("+slihori22/3+"%,"+slidia2+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim4+"deg)"});
        } else if (vidfilter === "filter439") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") translate("+slihori2+"%,"+silvert22/3+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim4+"deg)"});
        } else if (vidfilter === "filter440") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") translate("+slihori22/3+"%,"+silvert22/3+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim4+"deg)"});
        } else if (vidfilter === "filter441") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") translate("+slihori222/6+"%,"+slidia2+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim4+"deg)"});
        } else if (vidfilter === "filter442") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") translate("+slihori2+"%,"+silvert222/6+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim4+"deg)"});
        } else if (vidfilter === "filter443") {
  vidplayer2.css({"transform":"scale("+compr22+","+compr44+") translate("+slihori222/6+"%,"+silvert222/6+"%) perspective(1000px) rotate3d(1,1,0,"+rotdim4+"deg)"});
        }
  
  if (vidmove2 > 0.99 && vidfilter !== "") {
    vidplayer2.css({"filter":"none", "border-radius": "0px"});
 		 }
	}
    
     vidfader1.on("change", function() {
      var volMix1 = volumer1.val();
      var vidfadeVal1 = $(this).val();
      
       if (fullScreen1.attr("style")) {
         videffect1();
       }
      vidplayer1.prop("volume", volMix1*vidfadeVal1);
    	});
    
     vidfader1.on("mousemove", function() {
      $(this).trigger("change");
    	});
    
    vidfader2.on("change", function() {
      var volMix2 = volumer2.val();
      var vidfadeVal2 = $(this).val();
      
       if (fullScreen2.attr("style")) {
         videffect2();
       }
      vidplayer2.prop("volume", volMix2*vidfadeVal2);
    	});
    
     vidfader2.on("mousemove", function() {
      $(this).trigger("change");
    	});
    
    function vidcrossfade121() {
      var vidfadeVal2 = parseFloat(vidfader2.val());
      var vidcrossTime = vidcrossFadeTime.val();
      vidfader2.val(vidfadeVal2 + 0.01).trigger("change");
      
      if (vidfadeVal2 < 1) {
        setTimeout(vidcrossfade121, vidcrossTime*10);
      }
    }
    
    function vidcrossfade122() {
      var vidfadeVal1 = vidfader1.val();
      var vidcrossTime = vidcrossFadeTime.val();
      vidfader1.val(vidfadeVal1 - 0.01).trigger("change");
      
      if (vidfadeVal1 > 0) {
        setTimeout(vidcrossfade122, vidcrossTime*10);
      }
    }
    
    function vidcrossfade123() {
      var vidfadeVal2 = parseFloat(vidfader2.val());
      var vidcrossTime = vidcrossFadeTime.val();
      vidfader2.val(vidfadeVal2 + 0.01).trigger("change");
      
      if (vidfadeVal2 < 1) {
        setTimeout(vidcrossfade123, vidcrossTime*5);
      }
    }
    
    function vidcrossfade124() {
      var vidfadeVal1 = vidfader1.val();
      var vidcrossTime = vidcrossFadeTime.val();
      vidfader1.val(vidfadeVal1 - 0.01).trigger("change");
      
      if (vidfadeVal1 > 0) {
        setTimeout(vidcrossfade124, vidcrossTime*5);
      }
    }
    
    function vidcrossfade231() {
      var vidfadeVal1 = parseFloat(vidfader1.val());
      var vidcrossTime = vidcrossFadeTime.val();
      vidfader1.val(vidfadeVal1 + 0.01).trigger("change");
      
      if (vidfadeVal1 < 1) {
        setTimeout(vidcrossfade231, vidcrossTime*10);
      }
    }
    
    function vidcrossfade232() {
      var vidfadeVal2 = vidfader2.val();
      var vidcrossTime = vidcrossFadeTime.val();
      vidfader2.val(vidfadeVal2 - 0.01).trigger("change");
      
      if (vidfadeVal2 > 0) {
        setTimeout(vidcrossfade232, vidcrossTime*10);
      }
    }
    
    function vidcrossfade233() {
      var vidfadeVal1 = parseFloat(vidfader1.val());
      var vidcrossTime = vidcrossFadeTime.val();
      vidfader1.val(vidfadeVal1 + 0.01).trigger("change");
      
      if (vidfadeVal1 < 1) {
        setTimeout(vidcrossfade233, vidcrossTime*5);
      }
    }
    
    function vidcrossfade234() {
      var vidfadeVal2 = vidfader2.val();
      var vidcrossTime = vidcrossFadeTime.val();
      vidfader2.val(vidfadeVal2 - 0.01).trigger("change");
      
      if (vidfadeVal2 > 0) {
        setTimeout(vidcrossfade234, vidcrossTime*5);
      }
    }
    
    function vidfadeOut1(mixplayer) {
      vidfader2.val(1).trigger("change");
      $("#"+mixplayer).trigger("play");
    }
    
    function vidfadeOut2(mixplayer) {
      vidfader1.val(1).trigger("change");
      $("#"+mixplayer).trigger("play");
    }
    
    function vidfadeIn1(mixplayer) {
      var vidcrossTime = vidcrossFadeTime.val();
      setTimeout(function() {
        vidfader1.val(0).trigger("change");
      }, vidcrossTime*1000);
      
      $("#"+mixplayer).trigger("play");
    }
    
    function vidfadeIn2(mixplayer) {
      var vidcrossTime = vidcrossFadeTime.val();
      setTimeout(function() {
        vidfader2.val(0).trigger("change");
      }, vidcrossTime*1000);
      
      $("#"+mixplayer).trigger("play");
    }
    
    function vidsetCrossFade1() {
      var vidcrMode = vidcrossFadeMode.val();
      var vidcrossTime = vidcrossFadeTime.val();
      
      if (vidcrMode === "Fade") {
        vidcrossfade121();
        vidcrossfade122();
        vidplayer1.css("z-index",292);
        vidplayer2.css("z-index",291);
        vidplayer2.trigger("play");
      } else if (vidcrMode === "FadeOut") {
        vidfadeOut1("videoplayer2");
        vidcrossfade122();
        vidplayer1.css("z-index",292);
        vidplayer2.css("z-index",291);
      } else if (vidcrMode === "FadeIn") {
        vidcrossfade121();
        vidfadeIn1("videoplayer2");
        vidplayer1.css("z-index",291);
        vidplayer2.css("z-index",292);
      } else if (vidcrMode === "FadeInFast") {
        vidcrossfade123();
        vidcrossfade122();
        vidplayer1.css("z-index",292);
        vidplayer2.css("z-index",291);
        vidplayer2.trigger("play");
      } else if (vidcrMode === "FadeTO") {
        vidcrossfade121();
        setTimeout(vidcrossfade124, vidcrossTime*500);
        vidplayer2.trigger("play");
        vidplayer1.css("z-index",291);
        vidplayer2.css("z-index",292);
      } else if (vidcrMode === "FadeInOut") {
        vidcrossfade123();
        setTimeout(vidcrossfade124, vidcrossTime*500);
        vidplayer2.trigger("play");
        vidplayer1.css("z-index",291);
        vidplayer2.css("z-index",292);
      }
      
      playerNumber.val("player2");
    }
    
    function vidsetCrossFade2() {
      var vidcrMode = vidcrossFadeMode.val();
      var vidcrossTime = vidcrossFadeTime.val();
      
      if (vidcrMode === "Fade") {
        vidcrossfade231();
        vidcrossfade232();
        vidplayer1.trigger("play");
        vidplayer1.css("z-index",291);
        vidplayer2.css("z-index",292);
      } else if (vidcrMode === "FadeOut") {
        vidfadeOut2("videoplayer1");
        vidcrossfade232();
        vidplayer1.css("z-index",291);
        vidplayer2.css("z-index",292);
      } else if (vidcrMode === "FadeIn") {
        vidcrossfade231();
        vidfadeIn2("videoplayer1");
        vidplayer1.css("z-index",292);
        vidplayer2.css("z-index",291);
      } else if (vidcrMode === "FadeInFast") {
        vidcrossfade233();
        vidcrossfade232();
        vidplayer1.css("z-index",291);
        vidplayer2.css("z-index",292);
        vidplayer1.trigger("play");
      } else if (vidcrMode === "FadeTO") {
        vidcrossfade231();
        setTimeout(vidcrossfade234, vidcrossTime*500);
        vidplayer1.trigger("play");
        vidplayer1.css("z-index",292);
        vidplayer2.css("z-index",291);
      } else if (vidcrMode === "FadeInOut") {
        vidcrossfade233();
        setTimeout(vidcrossfade234, vidcrossTime*500);
        vidplayer1.css("z-index",292);
        vidplayer2.css("z-index",291);
        vidplayer1.trigger("play");
      }
      
      playerNumber.val("player1");
    }
    
    vidchgPlayer1.on("click", function() {
      clearTimeout(vidautoplayer1);
      vidsetCrossFade1();
    });
    
    vidchgPlayer2.on("click", function() {
      clearTimeout(vidautoplayer2);
      vidsetCrossFade2();
    });
    
    vidChangeBtn.click(function() {
  	var vidmove1 = vidfader1.val();
  	if (vidmove1 < 0.5) {
    	vidsetCrossFade2();
 		 } else {
    	vidsetCrossFade1();
         }
      });
    
    function vidautoPlay1() {
      var total1 = vidplayer1.prop("duration");
      var timeStamp1 = vidplayer1.prop("currentTime");
      var playRate1 = vidplayer1.prop("playbackRate");
      var vidaplayCtrl = vidautoplayBtn.attr("style");
      var vidcrossTime = vidcrossFadeTime.val();
      var apTimeFull = ((total1 - timeStamp1)/playRate1 - vidcrossTime)*1000;
      
      vidautoplayer1 = setTimeout(vidsetCrossFade1, apTimeFull);
    }
    
    function vidautoPlay2() {
      var total2 = vidplayer2.prop("duration");
      var timeStamp2 = vidplayer2.prop("currentTime");
      var playRate2 = vidplayer2.prop("playbackRate");
      var vidaplayCtrl = vidautoplayBtn.attr("style");
      var vidcrossTime = vidcrossFadeTime.val();
      var apTimeFull = ((total2 - timeStamp2)/playRate2 - vidcrossTime)*1000;
      
      vidautoplayer2 = setTimeout(vidsetCrossFade2, apTimeFull);
    }
    
    vidautoplayBtn.on("click", function() {
      var vidaplayCtrl = vidautoplayBtn.attr("style");
      var status1 = $("#playBtn1").attr("style");
      var status2 = $("#playBtn2").attr("style");
      
      if(!vidaplayCtrl) {
        if (status1) {
          vidautoPlay1();
        } else if (status2) {
          vidautoPlay2();
        }
        
        vidautoplayBtn.css({
          "background": "linear-gradient(to right, green, lime, green)",
          "border-style": "inset",
          "border-color": "lime"
        });
      } else {
        clearTimeout(vidautoplayer1);
        clearTimeout(vidautoplayer2);
        $(this).removeAttr("style");
      }
    });
    
    vidplayer1.on("playing", function() {
      var total1 = vidplayer1.prop("duration");
      var timeStamp1 = vidplayer1.prop("currentTime");
      var playRate1 = vidplayer1.prop("playbackRate");
      var vidaplayCtrl = vidautoplayBtn.attr("style");
      var vidcrossTime = vidcrossFadeTime.val();
      var aplimit1 = (total1-timeStamp1)/playRate1;
      clearTimeout(vidautoplayer1);
      
      if (vidaplayCtrl && aplimit1>vidcrossTime*2 && total1>=60) {
        vidautoPlay1();
      } else {
        clearTimeout(vidautoplayer1);
        clearTimeout(vidautoplayer2);
        vidautoplayBtn.removeAttr("style");
      }
      
      $("#playBtn1").css({
        "background": "linear-gradient(to right, navy, skyblue, navy)",
        "border-style": "inset",
        "border-color": "skyblue"
      }).html("||");
    });
    
    vidplayer1.on("pause", function() {
      clearTimeout(vidautoplayer1);
      $("#playBtn1").removeAttr("style").html("&#9654;");
    });
    
    vidplayer2.on("playing", function() {
      var total2 = vidplayer2.prop("duration");
      var timeStamp2 = vidplayer2.prop("currentTime");
      var playRate2 = vidplayer2.prop("playbackRate");
      var vidaplayCtrl = vidautoplayBtn.attr("style");
      var vidcrossTime = vidcrossFadeTime.val();
      var aplimit1 = (total2-timeStamp2)/playRate2;
      clearTimeout(vidautoplayer2);
      
      if (vidaplayCtrl && aplimit1>vidcrossTime*2 && total2>=60) {
        vidautoPlay2();
      } else {
        clearTimeout(vidautoplayer1);
        clearTimeout(vidautoplayer2);
        vidautoplayBtn.removeAttr("style");
      }
      
      $("#playBtn2").css({
        "background": "linear-gradient(to right, navy, skyblue, navy)",
        "border-style": "inset",
        "border-color": "skyblue"
      }).html("||");
    });
    
    vidplayer2.on("pause", function() {
      clearTimeout(vidautoplayer1);
      $("#playBtn2").removeAttr("style").html("&#9654;");
    });
    
    fxPlayer.on("playing", function() {
      vidfxBtn1.css({
        "background": "linear-gradient(to right, green, lime, green)",
        "border-style": "inset",
        "border-color": "lime"
      });
      
      vidfxBtn2.css({
        "background": "linear-gradient(to right, green, lime, green)",
        "border-style": "inset",
        "border-color": "lime"
      });
      
      playFxBtn.css({
        "background": "linear-gradient(to right, green, lime, green)",
        "border-style": "inset",
        "border-color": "lime"
      });
    });
      
    fxPlayer.on("ended", function() {
      vidfxBtn1.css({
        "background": "#002900",
        "border-style": "outset",
        "border-color": "#002900"
      });
      
      vidfxBtn2.css({
        "background": "#002900",
        "border-style": "outset",
        "border-color": "#002900"
      });
      
      playFxBtn.css({
        "background": "#002900",
        "border-style": "outset",
        "border-color": "#002900"
      });
    });
    
    var crossfadeControlsMod = $("<div/>");
    crossfadeControlsMod.css({
      "width": "50%",
      "height": "40px",
      "background": "rgba(21, 21, 21, 0.8)",
      "position": "absolute",
      "left": "10px",
      "top": "10px",
      "border": "4px outset white",
      "z-index": 600,
      "display": "none"
    }).appendTo(element);
    
    var crossfadeControls = $("<div/>");
    crossfadeControls.css({
      "width": "100%",
      "height": "40px",
      "display": "flex",
      "flext-direction": "row"
    }).appendTo(crossfadeControlsMod);
    
    var crfcontrol1 = $("<div/>");
    crfcontrol1.css({
      "width": "30%",
      "height": "40px",
      "font-size": "16px",
      "font-weight": "bold",
      "color": "white",
      "text-align": "left",
      "margin-top": "12px",
      "margin-left": "12px"
    }).text("Crossfade-Mode: ").appendTo(crossfadeControls);
    
    var crfcontrol2 = $("<div/>");
    crfcontrol2.css({
      "width": "40%",
      "height": "40px",
      "font-size": "16px",
      "font-weight": "bold",
      "color": "white",
      "text-align": "left",
      "margin-top": "12px",
      "margin-left": "12px"
    }).text("VideoEffect-Mode: ").appendTo(crossfadeControls);
    
    var crfcontrol3 = $("<div/>");
    crfcontrol3.css({
      "width": "30%",
      "height": "40px",
      "font-size": "16px",
      "font-weight": "bold",
      "color": "white",
      "text-align": "left",
      "margin-top": "12px",
      "margin-left": "12px"
    }).text("Crossfade-Time: ").appendTo(crossfadeControls);
    
    vidcrossFadeMode.on("change", function() {
      var vidcrMode = vidcrossFadeMode.val();
      var vidaplayCtrl = vidautoplayBtn.attr("style");
      var status1 = $("#playBtn1").attr("style");
      var status2 = $("#playBtn2").attr("style");
      
      if (status1 && vidaplayCtrl) {
        clearTimeout(vidautoplayer1);
        vidautoPlay1();
      } else if (status2 && vidaplayCtrl) {
        clearTimeout(vidautoplayer2);
        vidautoPlay2();
      }
      
      crossfadeImg.attr("src","symbole/"+vidcrMode+".png");
      vidsaveCrossfadeSettings();
      crfcontrol1.text("Crossfade-Mode: " + vidcrMode);
    });
    
    vidcrossFadeTime.on("change", function() {
      var vidaplayCtrl = vidautoplayBtn.attr("style");
      var status1 = $("#playBtn1").attr("style");
      var status2 = $("#playBtn2").attr("style");
      
      if (status1 && vidaplayCtrl) {
    	clearTimeout(vidautoplayer1);
    	vidautoPlay1();
     	} else if (status2 && vidaplayCtrl) {
    	clearTimeout(vidautoplayer2);
    	vidautoPlay2();
     	}
      
      vidsaveCrossfadeSettings();
      crfcontrol3.text("Crossfade-Time: " + $(this).val() + " s");
    });
    
    vidEffectMode.on("change", function() {
      var vidaplayCtrl = vidautoplayBtn.attr("style");
      var status1 = $("#playBtn1").attr("style");
      var status2 = $("#playBtn2").attr("style");
      
      if (status1 && vidaplayCtrl) {
    	clearTimeout(vidautoplayer1);
    	vidautoPlay1();
     	} else if (status2 && vidaplayCtrl) {
    	clearTimeout(vidautoplayer2);
    	vidautoPlay2();
     	}
      
      vidsaveCrossfadeSettings();
      crfcontrol2.text("Crossfade-Mode: " + $(this).val());
    });
    
    vidplayer1.on("ratechange", function() {
      var vidaplayCtrl = vidautoplayBtn.attr("style");
      var status1 = $("#playBtn1").attr("style");
      clearTimeout(vidautoplayer1);
      
      if (vidaplayCtrl && status1) {
        vidautoPlay1();
      }
    });
    
    vidplayer2.on("ratechange", function() {
      var vidaplayCtrl = vidautoplayBtn.attr("style");
      var status2 = $("#playBtn2").attr("style");
      clearTimeout(vidautoplayer2);
      
      if (vidaplayCtrl && status2) {
        vidautoPlay2();
      }
    });
    
    var pitchMenuMod1 = $("<div/>");
    pitchMenuMod1.css({
      "width": "90px",
      "height": "200px",
      "overflow": "auto",
      "padding": "6px",
      "background": "rgba(15, 15, 15, 0.8)",
      "border": "2px outset rgba(255, 255, 255, 0.6)",
      "position": "absolute",
      "left": "20px",
      "top": "20px",
      "z-index": 600,
      "display": "none"
    }).appendTo(element);
    
    var pitchList1 = $("<ul id='pitchList11'></ul>");
    pitchList1.css({
      "padding": "1px",
      "margin": "1px",
      "font-size": "16px",
      "font-weight": "bold",
      "color": "white"
    }).appendTo(pitchMenuMod1);
    
    var pitchVals1 = $("<li style='border-bottom: 1px solid rgba(255, 255, 255, 0.8); padding-top:6px; padding-bottom:6px; cursor:pointer;'>0.25</li><li style='border-bottom: 1px solid rgba(255, 255, 255, 0.8); padding-top:6px; padding-bottom:6px; cursor:pointer;'>0.50</li><li style='border-bottom: 1px solid rgba(255, 255, 255, 0.8); padding-top:6px; padding-bottom:6px; cursor:pointer;'>0.75</li><li style='border-bottom: 1px solid rgba(255, 255, 255, 0.8); padding-top:6px; padding-bottom:6px; cursor:pointer;'>1.00</li><li style='border-bottom: 1px solid rgba(255, 255, 255, 0.8); padding-top:6px; padding-bottom:6px; cursor:pointer;'>1.25</li><li style='border-bottom: 1px solid rgba(255, 255, 255, 0.8); padding-top:6px; padding-bottom:6px; cursor:pointer;'>1.50</li><li style='border-bottom: 1px solid rgba(255, 255, 255, 0.8); padding-top:6px; padding-bottom:6px; cursor:pointer;'>1.75</li><li style='padding-top:6px; padding-bottom:6px; cursor:pointer;'>2.00</li>");
    pitchVals1.appendTo(pitchList1);
    
    var pitchMenuMod2 = $("<div/>");
    pitchMenuMod2.css({
      "width": "90px",
      "height": "200px",
      "overflow": "auto",
      "padding": "6px",
      "background": "rgba(15, 15, 15, 0.8)",
      "border": "2px outset rgba(255, 255, 255, 0.6)",
      "position": "absolute",
      "left": "20px",
      "top": "20px",
      "z-index": 600,
      "display": "none"
    }).appendTo(element);
    
    var pitchList2 = $("<ul id='pitchList22'></ul>");
    pitchList2.css({
      "padding": "1px",
      "margin": "1px",
      "font-size": "16px",
      "font-weight": "bold",
      "color": "white"
    }).appendTo(pitchMenuMod2);
    
    var pitchVals2 = $("<li style='border-bottom: 1px solid rgba(255, 255, 255, 0.8); padding-top:6px; padding-bottom:6px; cursor:pointer;'>0.25</li><li style='border-bottom: 1px solid rgba(255, 255, 255, 0.8); padding-top:6px; padding-bottom:6px; cursor:pointer;'>0.50</li><li style='border-bottom: 1px solid rgba(255, 255, 255, 0.8); padding-top:6px; padding-bottom:6px; cursor:pointer;'>0.75</li><li style='border-bottom: 1px solid rgba(255, 255, 255, 0.8); padding-top:6px; padding-bottom:6px; cursor:pointer;'>1.00</li><li style='border-bottom: 1px solid rgba(255, 255, 255, 0.8); padding-top:6px; padding-bottom:6px; cursor:pointer;'>1.25</li><li style='border-bottom: 1px solid rgba(255, 255, 255, 0.8); padding-top:6px; padding-bottom:6px; cursor:pointer;'>1.50</li><li style='border-bottom: 1px solid rgba(255, 255, 255, 0.8); padding-top:6px; padding-bottom:6px; cursor:pointer;'>1.75</li><li style='padding-top:6px; padding-bottom:6px; cursor:pointer;'>2.00</li>");
    pitchVals2.appendTo(pitchList2);
    
    vidpitchupBtn.on("contextmenu", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      
      pitchMenuMod1.animate({left:xPos - pitchMenuMod1.width()/2+"px", top:yPos - vidpitchupBtn.height() - pitchMenuMod1.height() - 20},1).show();
      return false;
    });
    
    vidpitchdownBtn.on("contextmenu", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      
      pitchMenuMod1.animate({left:xPos - pitchMenuMod1.width()/2+"px", top:yPos - vidpitchdownBtn.height() - pitchMenuMod1.height() - 20},1).show();
      return false;
    });
    
    vidpitchupBtn2.on("contextmenu", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      
      pitchMenuMod2.animate({left:xPos - pitchMenuMod2.width()/2+"px", top:yPos - vidpitchupBtn2.height() - pitchMenuMod1.height() - 20},1).show();
      return false;
    });
    
    vidpitchdownBtn2.on("contextmenu", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      
      pitchMenuMod2.animate({left:xPos - pitchMenuMod2.width()/2+"px", top:yPos - vidpitchdownBtn2.height() - pitchMenuMod1.height() - 20},1).show();
      return false;
    });
    
    var closePitch1;
    
    pitchMenuMod1.on("mouseleave", function() {
      closePitch1 = setTimeout(function() {
        pitchMenuMod1.hide();
      },1500);
    });
    
    pitchMenuMod1.on("mouseenter", function() {
      clearTimeout(closePitch1);
    });
    
    var closePitch2;
    
    pitchMenuMod2.on("mouseleave", function() {
      closePitch2 = setTimeout(function() {
        pitchMenuMod2.hide();
      },1500);
    });
    
    pitchMenuMod2.on("mouseenter", function() {
      clearTimeout(closePitch2);
    });
    
    pitchList1.on("mouseenter", function() {
      $("#pitchList11 li").on("mouseenter", function() {
        $(this).css("background", "#00b9ff");
      });
      
      $("#pitchList11 li").on("mouseleave", function() {
        $(this).css("background", "none");
      });
      
      $("#pitchList11 li").on("click", function() {
        pitchrange1.val($(this).text()).trigger("change");
        pitchMenuMod1.hide();
      });
      
      $("#pitchList11 li").on("contextmenu", function() {
        $(this).click();
        return false;
      });
    });
    
    pitchList1.on("mouseleave", function() {
      $("#pitchList11 li").off("mouseenter").off("mouseleave").off("click").off("contextmenu");
    });
    
    
    pitchList2.on("mouseenter", function() {
      $("#pitchList22 li").on("mouseenter", function() {
        $(this).css("background", "#00b9ff");
      });
      
      $("#pitchList22 li").on("mouseleave", function() {
        $(this).css("background", "none");
      });
      
      $("#pitchList22 li").on("click", function() {
        pitchrange2.val($(this).text()).trigger("change");
        pitchMenuMod2.hide();
      });
      
      $("#pitchList22 li").on("contextmenu", function() {
        $(this).click();
        return false;
      });
    });
    
    pitchList2.on("mouseleave", function() {
      $("#pitchList22 li").off("mouseenter").off("mouseleave").off("click").off("contextmenu");
    });
  
    var ratioMenuMod1 = $("<div/>");
    ratioMenuMod1.css({
      "width": "100px",
      "height": "140px",
      "overflow": "auto",
      "padding": "6px",
      "background": "rgba(15, 15, 15, 0.8)",
      "border": "2px outset rgba(255, 255, 255, 0.6)",
      "position": "absolute",
      "left": "20px",
      "top": "20px",
      "z-index": 600,
      "display": "none"
    }).appendTo(element);
  
    var ratioList1 = $("<ul id='ratioList11'></ul>");
    ratioList1.css({
      "padding": "1px",
      "margin": "1px",
      "font-size": "16px",
      "font-weight": "bold",
      "color": "white",
      "text-align": "left"
    }).appendTo(ratioMenuMod1);
  
    var ratioVals1 = $("<li name='1' style='border-bottom: 1px solid rgba(255, 255, 255, 0.8); padding-top:6px; padding-bottom:6px; cursor:pointer;'>4:3</li><li name='2' style='border-bottom: 1px solid rgba(255, 255, 255, 0.8); padding-top:6px; padding-bottom:6px; cursor:pointer;'>4:3 WS</li><li name='3' style='border-bottom: 1px solid rgba(255, 255, 255, 0.8); padding-top:6px; padding-bottom:6px; cursor:pointer;'>3:2</li><li name='4' style='padding-top:6px; padding-bottom:6px; cursor:pointer;'>16:9 WS</li>");
    ratioVals1.appendTo(ratioList1);
  
    var ratioMenuMod2 = $("<div/>");
    ratioMenuMod2.css({
      "width": "100px",
      "height": "140px",
      "overflow": "auto",
      "padding": "6px",
      "background": "rgba(15, 15, 15, 0.8)",
      "border": "2px outset rgba(255, 255, 255, 0.6)",
      "position": "absolute",
      "left": "20px",
      "top": "20px",
      "z-index": 600,
      "display": "none"
    }).appendTo(element);
  
    var ratioList2 = $("<ul id='ratioList22'></ul>");
    ratioList2.css({
      "padding": "1px",
      "margin": "1px",
      "font-size": "16px",
      "font-weight": "bold",
      "color": "white",
      "text-align": "left"
    }).appendTo(ratioMenuMod2);
  
    var ratioVals2 = $("<li name='1' style='border-bottom: 1px solid rgba(255, 255, 255, 0.8); padding-top:6px; padding-bottom:6px; cursor:pointer;'>4:3</li><li name='2' style='border-bottom: 1px solid rgba(255, 255, 255, 0.8); padding-top:6px; padding-bottom:6px; cursor:pointer;'>4:3 WS</li><li name='3' style='border-bottom: 1px solid rgba(255, 255, 255, 0.8); padding-top:6px; padding-bottom:6px; cursor:pointer;'>3:2</li><li name='4' style='padding-top:6px; padding-bottom:6px; cursor:pointer;'>16:9 WS</li>");
    ratioVals2.appendTo(ratioList2);
  
    ratioBtn1.on("contextmenu", function() {
      ratioSelect.val(0).trigger("change");
      return false;
    });
  
    ratioBtn2.on("contextmenu", function() {
      ratioSelect2.val(0).trigger("change");
      return false;
    });
  
    ratioBtn1.on("click", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      
      ratioMenuMod1.animate({left:xPos - ratioMenuMod1.width()/2+"px", top:yPos - ratioBtn1.height() - ratioMenuMod1.height() - 20},1).show();
    });
    
    ratioBtn2.on("click", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      
      ratioMenuMod2.animate({left:xPos - ratioMenuMod2.width()/2+"px", top:yPos - ratioBtn2.height() - ratioMenuMod2.height() - 20},1).show();
    });
  
    ratioList1.on("mouseenter", function() {
      $("#ratioList11 li").on("mouseenter", function() {
        $(this).css("background", "#00b9ff");
      });
      
      $("#ratioList11 li").on("mouseleave", function() {
        $(this).css("background", "none");
      });
      
      $("#ratioList11 li").on("click", function() {
        ratioSelect.val($(this).attr("name")).trigger("change");
        ratioMenuMod1.hide();
      });
      
      $("#ratioList11 li").on("contextmenu", function() {
        $(this).click();
        return false;
      });
    });
    
    ratioList2.on("mouseleave", function() {
      $("#pitchList22 li").off("mouseenter").off("mouseleave").off("click").off("contextmenu");
    });
  
    ratioList2.on("mouseenter", function() {
      $("#ratioList22 li").on("mouseenter", function() {
        $(this).css("background", "#00b9ff");
      });
      
      $("#ratioList22 li").on("mouseleave", function() {
        $(this).css("background", "none");
      });
      
      $("#ratioList22 li").on("click", function() {
        ratioSelect2.val($(this).attr("name")).trigger("change");
        ratioMenuMod2.hide();
      });
      
      $("#ratioList22 li").on("contextmenu", function() {
        $(this).click();
        return false;
      });
    });
    
    ratioList2.on("mouseleave", function() {
      $("#pitchList22 li").off("mouseenter").off("mouseleave").off("click").off("contextmenu");
    });
  
    var closeRatio1;
    
    ratioMenuMod1.on("mouseleave", function() {
      closeRatio1 = setTimeout(function() {
        ratioMenuMod1.hide();
      },1500);
    });
    
    ratioMenuMod1.on("mouseenter", function() {
      clearTimeout(closeRatio1);
    });
    
    var closeRatio2;
    
    ratioMenuMod2.on("mouseleave", function() {
      closeRatio2 = setTimeout(function() {
        ratioMenuMod2.hide();
      },1500);
    });
    
    ratioMenuMod2.on("mouseenter", function() {
      clearTimeout(closeRatio2);
    });
    
    var fxmenuMod = $("<div/>");
    fxmenuMod.css({
      "width": "90px",
      "height": "200px",
      "overflow": "auto",
      "padding": "6px",
      "background": "rgba(15, 15, 15, 0.8)",
      "border": "2px outset rgba(255, 255, 255, 0.6)",
      "position": "absolute",
      "left": "20px",
      "top": "20px",
      "z-index": 600,
      "display": "none"
    }).appendTo(element);
    
    var fxMenu = $("<ul id='fxmenu'></ul>");
    fxMenu.css({
      "padding": "1px",
      "margin": "1px",
      "font-size": "16px",
      "font-weight": "bold",
      "color": "white"
    }).html(vidfxLibList.html()).appendTo(fxmenuMod);
    
    var closeFx;
    
    fxmenuMod.on("mouseleave", function() {
      closeFx = setTimeout(function() {
        fxmenuMod.hide();
      },1500);
    });
    
    fxmenuMod.on("mouseenter", function() {
      clearTimeout(closeFx);
    });
    
    vidfxBtn1.on("contextmenu", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      
      fxmenuMod.animate({left:xPos - fxmenuMod.width()/2+"px", top:yPos - vidfxBtn1.height() - fxmenuMod.height() - 20},1).show();
      return false;
    });
    
    vidfxBtn2.on("contextmenu", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      
      fxmenuMod.animate({left:xPos - fxmenuMod.width()/2+"px", top:yPos - vidfxBtn2.height() - fxmenuMod.height() - 20},1).show();
      return false;
    });
    
    var videoControlsMod = $("<div/>");
    videoControlsMod.css({
      "width": "35%",
      "height": "40px",
      "background": "rgba(21, 21, 21, 0.8)",
      "position": "absolute",
      "left": "10px",
      "top": "10px",
      "border": "4px outset white",
      "z-index": 600,
      "display": "none"
    }).appendTo(element);
    
    var videoControls = $("<div/>");
    videoControls.css({
      "width": "100%",
      "height": "40px",
      "display": "flex",
      "flext-direction": "row",
      "text-align": "left"
    }).appendTo(videoControlsMod);
    
    var controlVidnumber = $("<input type='number'/>");
    controlVidnumber.css({
      "width": "80px",
      "height": "30px",
      "font-size": "16px",
      "font-weight": "bold",
      "color": "white",
      "margin-top": "4px",
      "margin-left": "4px",
      "background": "#151515",
      "border-radius": "6px"
    }).val(currentVideo).appendTo(videoControls);
    
    var controlVidname = $("<div/>");
    controlVidname.css({
      "width": "66%",
      "height": "30px",
      "font-size": "16px",
      "font-weight": "bold",
      "color": "white",
      "margin-left": "12px",
      "padding-top": "9px",
      "margin-top": "4px",
    }).text("Video").appendTo(videoControls);
    
    var controlVidBtn = $("<button/>");
    controlVidBtn.css({
      "width": "80px",
      "height": "30px",
      "font-size": "16px",
      "font-weight": "bold",
      "color": "white",
      "margin-top": "4px",
      "margin-left": "4px",
      "background": "#151515",
      "border-radius": "6px",
      "float": "right"
    }).text("Set").appendTo(videoControls);
    
    
    var fxControlsMod = $("<div/>");
    fxControlsMod.css({
      "width": "15%",
      "height": "40px",
      "background": "rgba(21, 21, 21, 0.8)",
      "position": "absolute",
      "left": "10px",
      "top": "10px",
      "border": "4px outset white",
      "z-index": 600,
      "display": "none"
    }).appendTo(element);
    
    var fxControls = $("<div/>");
    fxControls.css({
      "width": "100%",
      "height": "40px",
      "display": "flex",
      "flext-direction": "row",
      "text-align": "left"
    }).appendTo(fxControlsMod);
    
    var controlfxnumber = $("<input type='number'/>");
    controlfxnumber.css({
      "width": "80px",
      "height": "30px",
      "font-size": "16px",
      "font-weight": "bold",
      "color": "white",
      "margin-top": "4px",
      "margin-left": "4px",
      "background": "#151515",
      "border-radius": "6px"
    }).appendTo(fxControls);
    
    var controlFxname = $("<div/>");
    controlFxname.css({
      "width": "66%",
      "height": "30px",
      "font-size": "16px",
      "font-weight": "bold",
      "color": "white",
      "margin-left": "12px",
      "padding-top": "9px",
      "margin-top": "4px",
    }).text("FX-Sound").appendTo(fxControls);
    
    var controlFxBtn = $("<button/>");
    controlFxBtn.css({
      "width": "80px",
      "height": "30px",
      "font-size": "16px",
      "font-weight": "bold",
      "color": "white",
      "margin-top": "4px",
      "margin-left": "4px",
      "background": "#151515",
      "border-radius": "6px",
      "float": "right"
    }).text("Set").appendTo(fxControls);
    
    controlVidnumber.on("focus", function() {
      $(this).attr({"max": $("#vidtracklist li").length - 1, "min": 0}).val(currentVideo);
    });
    
    controlVidnumber.on("change", function() {
      controlVidname.text($("#vidtracklist li:eq("+$(this).val()+")").text());
    });
    
    controlfxnumber.on("focus", function() {
      $(this).attr({"max": $("#vidfxList li").length - 1, "min": 0});
    });
    
    controlfxnumber.on("change", function() {
      controlFxname.text($("#vidfxList li:eq("+$(this).val()+")").attr("name"));
    });
    
    controlVidBtn.on("click", function() {
      if (playerNumber.val() === "player1") {
        vidplayer2.attr("src", vidsettings.path+controlVidname.text()+vidsettings.extension);
        miniPlayer2.attr("src", vidsettings.path+controlVidname.text()+vidsettings.extension);
        vidplayer2.prop("playbackRate", pitchrange2.val());
      } else if (playerNumber.val() === "player2") {
        vidplayer1.attr("src", vidsettings.path+controlVidname.text()+vidsettings.extension);
        miniPlayer1.attr("src", vidsettings.path+controlVidname.text()+vidsettings.extension);
        vidplayer1.prop("playbackRate", pitchrange1.val());
      }
      videoControlsMod.hide();
    });
    
    controlFxBtn.on("click", function() {
      var fxVol = fxVolume.val();
      var fxpitchRate = fxPitch.val();
        
      $("#vidfxList li").removeClass("vidselFx");
      $("#vidfxList li:eq("+controlfxnumber.val()+")").addClass("vidselFx");
      fxPlayer.attr("src", vidsettings.fxPath+controlFxname.text()).prop({"volume": fxVol, "playbackRate": fxpitchRate});
      fxControlsMod.hide();
    });
    
    var videotimeControlsMod = $("<div/>");
    videotimeControlsMod.css({
      "width": "200px",
      "height": "40px",
      "background": "rgba(21, 21, 21, 0.8)",
      "position": "absolute",
      "left": "10px",
      "top": "10px",
      "border": "4px outset white",
      "z-index": 600,
      "display": "none"
    }).appendTo(element);
    
    var controltimeVidnumber = $("<input type='number'/>");
    controltimeVidnumber.css({
      "width": "80px",
      "height": "30px",
      "font-size": "16px",
      "font-weight": "bold",
      "color": "white",
      "margin-top": "4px",
      "margin-left": "2px",
      "background": "#151515",
      "border-radius": "6px"
    }).appendTo(videotimeControlsMod);
    
    var controltimeVidBtn = $("<button/>");
    controltimeVidBtn.css({
      "width": "80px",
      "height": "30px",
      "font-size": "16px",
      "font-weight": "bold",
      "color": "white",
      "margin-top": "4px",
      "margin-left": "2px",
      "background": "#151515",
      "border-radius": "6px",
      "float": "right"
    }).text("Set").appendTo(videotimeControlsMod);
    
    controltimeVidnumber.on("focus", function() {
      if (playerNumber.val() === "player1") {
        $(this).val(Math.round(vidplayer2.prop("currentTime"))).attr("max", vidplayer2.prop("duration"));
      } else if (playerNumber.val() === "player2") {
        $(this).val(Math.round(vidplayer1.prop("currentTime"))).attr("max", vidplayer1.prop("duration"));
      }
    });
    
    controltimeVidBtn.on("click", function() {
      if (playerNumber.val() === "player1") {
        vidplayer2.prop("currentTime", controltimeVidnumber.val());
      } else if (playerNumber.val() === "player2") {
        vidplayer1.prop("currentTime", controltimeVidnumber.val());
      }
      videotimeControlsMod.hide();
    });
    
    function loadVideo(pitchnumber, mixplayer, minplayer) {
      var vidtrack = $("#vidtracklist li:eq("+currentVideo+")").text();
      var pitchVals = $("#"+pitchnumber).val();
      $("#"+mixplayer).attr("src", vidsettings.path+vidtrack+vidsettings.extension);
      $("#"+minplayer).attr("src", vidsettings.path+vidtrack+vidsettings.extension);
      $("#"+mixplayer).prop("playbackRate", pitchVals);
    }
    
    vidtrackLibList.on("mouseenter", function() {
      $("#vidtracklist li").on("click", function() {
        $("#vidtracklist li").removeClass("vidselTrack");
        currentVideo = $(this).index();
        $(this).addClass("vidselTrack");
      });
      
      $("#vidtracklist li").on("dblclick", function() {
        var pitchVals1 = pitchrange1.val();
        var pitchVals2 = pitchrange2.val();
        var plNumb = playerNumber.val();
        
        if (plNumb === "player1") {
          vidplayer1.attr("src", vidsettings.path+$(this).text()+vidsettings.extension);
          miniPlayer1.attr("src", vidsettings.path+$(this).text()+vidsettings.extension);
          vidplayer1.prop("playbackRate", pitchVals1);
          
        } else if (plNumb === "player2") {
          vidplayer2.attr("src", vidsettings.path+$(this).text()+vidsettings.extension);
          miniPlayer2.attr("src", vidsettings.path+$(this).text()+vidsettings.extension);
          vidplayer2.prop("playbackRate", pitchVals2);
        }
      });
      
      $("#vidtracklist li").on("mouseenter", function() {
        $(this).css("background", "#00b7ff");
      });
      
      $("#vidtracklist li").on("mouseleave", function() {
        $(this).css("background", "none");
      });
    });
    
    vidtrackLibList.on("mouseleave", function() {
      $("#vidtracklist li").off("click").off("mouseenter").off("mouseleave").off("dblclick");
    });
    
    function vidtrackForward() {
      $("#vidtracklist li").removeClass("vidselTrack");
      currentVideo++;
      
      if (currentVideo == $("#vidtracklist li").length) {
        currentVideo = 0;
      }
      
      $("#vidtracklist li:eq("+currentVideo+")").addClass("vidselTrack");
      remainVideos.val($("#vidtracklist li").length - currentVideo - 1);
    }
    
    function vidtrackReverse() {
      $("#vidtracklist li").removeClass("vidselTrack");
      currentVideo--;
      
      if (currentVideo == -1) {
        currentVideo = $("#vidtracklist li").length - 1;
      }
      
      $("#vidtracklist li:eq("+currentVideo+")").addClass("vidselTrack");
      remainVideos.val($("#vidtracklist li").length - $("#vidtracklist li").length + currentVideo);
    }
    
    function setPosition() {
    var trArea = trackLib.height();
    var trHead = $("#vidtracklist li").outerHeight();
    var trTrack = $("#vidtracklist li").outerHeight();
    var trPos = currentVideo * trTrack + trHead;
    var trScroll = trPos - trArea + 30;

    if (mode13.is(":checked")) {
      trackLib.animate({ scrollTop: trPos + "px" }, 10);
    } else {
      if (trPos > trArea) {
        trackLib.animate({ scrollTop: trScroll + "px" }, 10);
      } else if (currentVideo === 0) {
        trackLib.animate({ scrollTop: "-100px" }, 10);
      }
    }
  }
    
    vidtrackCountDownBtn.on("click", function() {
      var plNumb = playerNumber.val();
      var loadedVideos = vidtrackLibList.html();
      
      if (loadedVideos !== "") {
        vidtrackForward();
      	setPosition();
      
      	if (plNumb === "player1") {
          loadVideo("pitchRange11", "videoplayer1", "miniplayer1");
      	} else if (plNumb === "player2") {
          loadVideo("pitchRange22", "videoplayer2", "miniplayer2");
      	}
      }
    });
    
    vidtrackCountUpBtn.on("click", function() {
      var plNumb = playerNumber.val();
      var loadedVideos = vidtrackLibList.html();
      
      if (loadedVideos !== "") {
        vidtrackReverse();
      	setPosition();
      
      	if (plNumb === "player1") {
          loadVideo("pitchRange11", "videoplayer1", "miniplayer1");
      	} else if (plNumb === "player2") {
          loadVideo("pitchRange22", "videoplayer2", "miniplayer2");
      	}
      }
    });
    
    var random;
    
    function setRandom() {
      random = [];
      var vidtrackNumbs = $("#vidtracklist li");
      for (var x = 0; x < vidtrackNumbs.length; x++) {
        random.push($("#vidtracklist li:eq("+x+")").text());
      }
    }
    
    function vidplayRandom(pitchnumber, mixplayer, minplayer) {
      var pitchVals = $("#"+pitchnumber).val();
      var vidrandomSize = random.length;
      var vidrandomNumber = Math.floor(Math.random()*vidrandomSize);
      $("#vidtracklist li").removeClass("vidselTrack");
      $("#"+mixplayer).attr("src", vidsettings.path+random[vidrandomNumber]+vidsettings.extension);
      $("#"+minplayer).attr("src", vidsettings.path+random[vidrandomNumber]+vidsettings.extension);
      $("#vidtracklist li:contains("+random[vidrandomNumber]+")").addClass("vidselTrack");
      
      $(".vidselTrack:eq(0)").each(function() {
        currentVideo = $(this).index();
      });
      
      random.splice(vidrandomNumber,1);
      $("#"+mixplayer).prop("playbackRate", pitchVals);
      remainVideos.val(vidrandomSize - 1);
      
      if (vidrandomSize < 2) {
        setRandom();
      }
    }
    
    vidskipforwBtn.on("click", function() {
      var loadedVideos = vidtrackLibList.html();
      
      if (loadedVideos !== "") {
          if (mode13.is(":checked")) {
          vidplayRandom("pitchRange11", "videoplayer1", "miniplayer1");
      	} else {
          vidtrackForward();
          loadVideo("pitchRange11", "videoplayer1", "miniplayer1");
      	}
        setPosition();
      }
    });
    
    vidskiprewBtn.on("click", function() {
      var loadedVideos = vidtrackLibList.html();
      
      if (loadedVideos !== "") {
          if (mode13.is(":checked")) {
          vidplayRandom("pitchRange11", "videoplayer1", "miniplayer1");
      	} else {
          vidtrackReverse();
          loadVideo("pitchRange11", "videoplayer1", "miniplayer1");
      	}
      setPosition();
      }
    });
    
    vidskipforwBtn2.on("click", function() {
      var loadedVideos = vidtrackLibList.html();
      
      if (loadedVideos !== "") {
          if (mode13.is(":checked")) {
          vidplayRandom("pitchRange22", "videoplayer2", "miniplayer2");
      	} else {
          vidtrackForward();
          loadVideo("pitchRange22", "videoplayer2", "miniplayer2");
      	}
        setPosition();
      }
    });
    
    vidskiprewBtn2.on("click", function() {
      var loadedVideos = vidtrackLibList.html();
      
      if (loadedVideos !== "") {
          if (mode13.is(":checked")) {
          vidplayRandom("pitchRange22", "videoplayer2", "miniplayer2");
      	} else {
          vidtrackReverse();
          loadVideo("pitchRange22", "videoplayer2", "miniplayer2");
      	}
      setPosition();
      }
    });
    
    vidtrackChangeBtn.on("click", function() {
      var vidtrCstatus = $(this).attr("style");
      
      if (!vidtrCstatus) {
        $(this).css({
          "background": "linear-gradient(to right, darkred, red, darkred)",
          "border-style": "inset",
          "border-color": "red"
        });
      } else {
        $(this).removeAttr("style");
      }
    });
    
    vidplayer1.on("ended", function() {
      var vidtrCstatus = vidtrackChangeBtn.attr("style");
      var loadedVideos = vidtrackLibList.html();
      
      if (vidtrCstatus && loadedVideos !== "") {
        if (mode11.is(":checked")) {
          vidtrackForward();
          loadVideo("pitchRange11", "videoplayer1", "miniplayer1");
        } else if (mode12.is(":checked")) {
          vidtrackReverse();
          loadVideo("pitchRange11", "videoplayer1", "miniplayer1");
        } else if (mode13.is(":checked")) {
          vidplayRandom("pitchRange11", "videoplayer1", "miniplayer1");
        }
	setPosition();
      }
    });
    
    vidplayer2.on("ended", function() {
      var vidtrCstatus = vidtrackChangeBtn.attr("style");
      var loadedVideos = vidtrackLibList.html();
      
      if (vidtrCstatus && loadedVideos !== "") {
        if (mode11.is(":checked")) {
          vidtrackForward();
          loadVideo("pitchRange22", "videoplayer2", "miniplayer2");
        } else if (mode12.is(":checked")) {
          vidtrackReverse();
          loadVideo("pitchRange22", "videoplayer2", "miniplayer2");
        } else if (mode13.is(":checked")) {
          vidplayRandom("pitchRange22", "videoplayer2", "miniplayer2");
        }
	setPosition();
      }
    });
    
    var vidonePlay = $("<button class='toolbuttons9'>Standard-Playlist</button>");
    vidonePlay.appendTo(bottomMain);
    
    var vidplayLoop = $("<button class='toolbuttons10'>Loop Tracks</button>");
    vidplayLoop.appendTo(bottomMain);
    
    vidonePlay.on("click", function() {
      var opCtrl = $(this).attr("style");
      var plNumb = playerNumber.val();
      
      if (!opCtrl) {
        clearTimeout(vidautoplayer1);
        clearTimeout(vidautoplayer2);
        vidautoplayBtn.removeAttr("style").attr("disabled", "disabled").text("One-Play!");
        vidtrackChangeBtn.removeAttr("disabled").text("Auto-Trackchange");
        vidtrackChangeBtn.css({
          "background": "linear-gradient(to right, darkred, red, darkred)",
          "border-style": "inset",
          "border-color": "red"
        });
        vidplayLoop.removeAttr("style");
        if (plNumb === 'player1') {
          $("#videoplayer1").attr("autoplay", true).removeAttr("loop");
        } else if (plNumb === 'player2') {
          $("#videoplayer2").attr("autoplay", true).removeAttr("loop");
        }
        
        $(this).css({
          "background": "linear-gradient(to right, darkred, red, darkred)",
          "border-style": "inset",
          "border-color": "red"
        });
      } else {
        vidautoplayBtn.removeAttr("disabled").text("Autoplay");
        $("#videoplayer1").removeAttr("autoplay");
        $("#videoplayer2").removeAttr("autoplay");
        $(this).removeAttr("style");
      }
    });
    
    vidplayLoop.on("click", function() {
      var lpCtrl = $(this).attr("style");
      var plNumb = playerNumber.val();
      
      if (!lpCtrl) {
        clearTimeout(vidautoplayer1);
        clearTimeout(vidautoplayer2);
        vidautoplayBtn.removeAttr("style").attr("disabled", "disabled").text("Loop-Mode!");
        vidtrackChangeBtn.removeAttr("style").attr("disabled", "disabled").text("Loop-Mode On!");
        vidonePlay.removeAttr("style");
        if (plNumb === 'player1') {
          $("#videoplayer1").attr("loop", true).removeAttr("autoplay");
        } else if (plNumb === 'player2') {
          $("#videoplayer2").attr("loop", true).removeAttr("autoplay");
        }
        
        $(this).css({
          "background": "linear-gradient(to right, #404000, yellow, #404000)",
          "border-style": "inset",
          "border-color": "yellow"
        });
      } else {
        vidautoplayBtn.removeAttr("disabled").text("Autoplay");
        vidtrackChangeBtn.removeAttr("disabled").text("Auto-Trackchange");
        vidtrackChangeBtn.css({
          "background": "linear-gradient(to right, darkred, red, darkred)",
          "border-style": "inset",
          "border-color": "red"
        });
        $("#videoplayer1").removeAttr("loop");
        $("#videoplayer2").removeAttr("loop");
        $(this).removeAttr("style");
      }
    });
    
    var infoMod = $("<div/>");
    infoMod.css({
      "background": "212121",
      "border": "2px outset rgba(255, 255, 255, 0.8)",
      "width": "600px",
      "position": "fixed",
      "left": "20px",
      "top": "20px",
      "z-index": "250",
      "display": "none"
    }).appendTo(element);
    
    var infoHead = $("<div/>");
    infoHead.css({
      "width": "98.6%",
      "height": "30px",
      "font-size": "20px",
      "background": "#292929",
      "font-weight": "bold",
      "color": "white",
      "text-align": "left",
      "padding": "4px"
    }).text("Modal-Message").appendTo(infoMod);
    
    var infoCloseBtn = $("<button class='closeBtn'>X</button>");
    infoCloseBtn.appendTo(infoHead);
    
    var infoMain = $("<div/>");
    infoMain.css({
      "width": "100%",
      "height": "140px",
      "text-align": "left",
      "background": "#151515",
      "display": "flex",
      "flext-direction": "row"
    }).appendTo(infoMod);
    
    var infoImgBox = $("<div/>");
    infoImgBox.css({
      "width": "30%",
      "height": "140px",
      "text-align": "center"
    }).appendTo(infoMain);
    
    var infoSymbol = $("<img src='Symbole/info.png'/>");
    infoSymbol.css({
      "margin-top": "20px"
    });
    infoSymbol.appendTo(infoImgBox);
    
    var infoTextBox = $("<div/>");
    infoTextBox.css({
      "width": "70%",
      "height": "140px",
      "text-align": "left",
      "font-weight": "bold",
      "color": "white",
      "font-size": "25px",
      "padding-top": "20px"
    }).html("Info-Text!").appendTo(infoMain);
    
    var infoFoot = $("<div/>");
    infoFoot.css({
      "width": "98.6%",
      "height": "30px",
      "font-size": "20px",
      "background": "#151515",
      "font-weight": "bold",
      "color": "white",
      "text-align": "center",
      "padding": "4px",
      "border-top": "1px solid rgba(255, 255, 255, 0.8)"
    }).appendTo(infoMod);
    
    var infoFootBtn = $("<button class='toolbuttons9'>Close</button>");
    infoFootBtn.css({
      "width": "120px",
      "height": "26px",
      "font-size": "16px",
      "background": "#303030",
      "border": "2px outset grey"
    });
    infoFootBtn.appendTo(infoFoot);
    
    infoCloseBtn.on("click", function() {
      infoMod.hide();
    });
    
    infoFootBtn.on("click", function() {
      infoMod.hide();
    });
    
    function addVideos(evt) {
    var multiaudiofiles = evt.target.files;
    var maudioext = $(this)[0].value;
    var output = [];

    if (maudioext.substring(maudioext.lastIndexOf(".")) === ".mp4") {
      for (var i = 0, f; f = multiaudiofiles[i]; i++) {
        output.push("<li style='padding-top:4px; padding-bottom:4px;'>" + f.name.substring(0, f.name.lastIndexOf(".")) + "</li>");
        if (mode13.is(":checked")) {
          random.push(f.name.substring(0, f.name.lastIndexOf(".")));
        }
      }
      vidtrackLibList.append(output.join(""));
      infoTextBox.html("Trackload successfull!<br>"+i+ " Videos loaded!<br>"+$("#vidtracklist li").length+" Videos in Tracklist!");
      infoMod.animate({left: element.width()/2 - infoMod.width()/2 + "px", top: element.height()/2 - infoMod.height()/2 + "px"},1).show();
      remainVideos.val($("#vidtracklist li").length);
    }
  }

    vidtrackMultiFile.on("change", addVideos);
    vidaddTrackMultiBtn.on("click", function() {
      vidtrackMultiFile.click();
    });
    
    var vidpitchin, vidpitchout, vidpitchin2, vidpitchout2;
    
    function vidpitchIn() {
      var playRate1 = vidplayer1.prop("playbackRate");
      clearTimeout(vidautoplayer1);
      clearTimeout(vidautoplayer2);
      vidplayer1.prop("playbackRate", playRate1 + 0.01);
      
      if (playRate1 > 1) {
        clearInterval(vidpitchin);
        $("#playBtn1").removeAttr("disabled");
      }
    }
    
    function vidpitchOut() {
      var playRate1 = vidplayer1.prop("playbackRate");
      clearTimeout(vidautoplayer1);
      clearTimeout(vidautoplayer2);
      vidplayer1.prop("playbackRate", playRate1 - 0.01);
      $("#playBtn1").attr("disabled", "disabled").css({
          "background": "linear-gradient(to right, #363636, yellow, #363636)",
          "border-color": "yellow"
        });
      
      if (playRate1 < 0.26) {
        clearInterval(vidpitchout);
        $("#playBtn1").removeAttr("disabled").css({
          "background": "linear-gradient(to right, navy, skyblue, navy)",
          "border-color": "skyblue"
        });
        vidplayer1.trigger("pause");
      }
    }
    
    function vidstartPitchIn1() {
      vidplayer1.trigger("play").prop("playbackRate", 0.25);
      $("#playBtn1").attr("disabled", "disabled").css({
          "background": "linear-gradient(to right, #363636, yellow, #363636)",
          "border-color": "yellow"
        });
	  vidpitchin = setInterval(vidpitchIn, vidsettings.pitchTime);
    }
    
    function vidstartPitchOut1() {
      $("#playBtn1").attr("disabled", "disabled");
	  vidpitchout = setInterval(vidpitchOut, vidsettings.pitchTime);
    }
    
    $("#playBtn1").on("contextmenu", function() {
      var status1 = $(this).attr("style");
      
      if (!status1) {
        vidstartPitchIn1();
      } else {
        vidstartPitchOut1();
      }
      
      return false;
    });
    
    function vidpitchIn2() {
      var playRate2 = vidplayer2.prop("playbackRate");
      clearTimeout(vidautoplayer1);
      clearTimeout(vidautoplayer2);
      vidplayer2.prop("playbackRate", playRate2 + 0.01);
      
      if (playRate2 > 1) {
        clearInterval(vidpitchin2);
        $("#playBtn2").removeAttr("disabled");
      }
    }
    
    function vidpitchOut2() {
      var playRate2 = vidplayer2.prop("playbackRate");
      clearTimeout(vidautoplayer1);
      clearTimeout(vidautoplayer2);
      vidplayer2.prop("playbackRate", playRate2 - 0.01);
      $("#playBtn2").attr("disabled", "disabled").css({
          "background": "linear-gradient(to right, #363636, yellow, #363636)",
          "border-color": "yellow"
        });
      
      if (playRate2 < 0.26) {
        clearInterval(vidpitchout2);
        $("#playBtn2").removeAttr("disabled").css({
          "background": "linear-gradient(to right, navy, skyblue, navy)",
          "border-color": "skyblue"
        });
        vidplayer2.trigger("pause");
      }
    }
    
    function vidstartPitchIn2() {
      vidplayer2.trigger("play").prop("playbackRate", 0.25);
      $("#playBtn2").attr("disabled", "disabled").css({
          "background": "linear-gradient(to right, #363636, yellow, #363636)",
          "border-color": "yellow"
        });
	  vidpitchin2 = setInterval(vidpitchIn2, vidsettings.pitchTime);
    }
    
    function vidstartPitchOut2() {
      $("#playBtn2").attr("disabled", "disabled");
	  vidpitchout2 = setInterval(vidpitchOut2, vidsettings.pitchTime);
    }
    
    $("#playBtn2").on("contextmenu", function() {
      var status2 = $(this).attr("style");
      
      if (!status2) {
        vidstartPitchIn2();
      } else {
        vidstartPitchOut2();
      }
      
      return false;
    });
    
    vidChangeBtn.on("mousedown touchstart", function() {
      $(this).css({
        "background": "linear-gradient(to right, #363636, yellow, #363600)",
        "border-style": "inset",
        "border-color": "yellow"
      });
    });
    
    vidChangeBtn.on("mouseup mouseleave touchend", function() {
      $(this).css({
        "background": "#292900",
        "border-style": "outset",
        "border-color": "#292900"
      });
    });
    
    function importFile(filefield, targetfield, storefield) {
	  var asText = document.getElementById(filefield);
	  var textbox = document.getElementById(targetfield);

        var file = asText.files[0];
        var textType = /text.*/;

        if (file.type.match(textType)) {
            var reader = new FileReader();

            reader.onload = function(e) {
                textbox.value = reader.result;
                document.getElementById(storefield).value = file.name.substring(0,file.name.lastIndexOf("."));
            };

            reader.readAsText(file);    
        	} else {
            textbox.value = "Dateityp nicht unterstützt";
        	}
	  }
    
    vidtrackListFile.on("change", function() {
      importFile("vidtrackListFile","vidtrackListCode","vidtrackSaveTxt");
      vidaddTrackListBtn.css({
        "background":"linear-gradient(to right, navy, skyblue, navy)"
      });
    });
    
    vidtrackListLoadBtn.on("click", function() {
      vidtrackListFile.click();
    });
    
    vidaddTrackListBtn.click(function(evt) {
	  var listcode = vidtrackListCode.val();
  
	  if (listcode.substring(1, 4) !== "li ") {
    	alertMod.animate({left: element.width()/2 - alertMod.width()/2 + "px", top: element.height()/2 - alertMod.height()/2 + "px"},1).show();
		alertTextBox.html("This File is no Playlist!");  
		} else {
          if (evt.ctrlKey) {
            $("#vidtracklist li").removeClass("vidselTrack");
            vidtrackLibList.append(listcode);
          } else if (evt.shiftKey) {
            $("#vidtracklist li").removeClass("vidselTrack");
            vidtrackLibList.prepend(listcode);
          } else {
            vidtrackLibList.html(listcode);
          }
	
    	  $(".vidselTrack:eq(0)").each(function() {
      		currentVideo = $(this).index();
    		});
          
          infoMod.animate({left: element.width()/2 - infoMod.width()/2 + "px", top: element.height()/2 - infoMod.height()/2 + "px"},1).show();
		  infoTextBox.html("Fileload succesfull!<br>"+$("#vidtracklist li").length+ " Tracks are in this Playlist!");
          remainVideos.val($("#vidtracklist li").length);
          
          if (mode13.is(":checked")) {
            setRandom();
          }
    	}
    });
    
    var alertMod = $("<div/>");
    alertMod.css({
      "background": "212121",
      "border": "2px outset rgba(255, 255, 255, 0.8)",
      "width": "600px",
      "position": "fixed",
      "left": "20px",
      "top": "20px",
      "z-index": "600",
      "display": "none"
    }).appendTo(element);
    
    var alertHead = $("<div/>");
    alertHead.css({
      "width": "98.6%",
      "height": "30px",
      "font-size": "20px",
      "background": "#292929",
      "font-weight": "bold",
      "color": "white",
      "text-align": "left",
      "padding": "4px",
    }).text("Modal-Message").appendTo(alertMod);
    
    var alertClosBtn = $("<button class='closeBtn'>X</button>");
    alertClosBtn.appendTo(alertHead);
    
    var alertMain = $("<div/>");
    alertMain.css({
      "width": "100%",
      "height": "140px",
      "text-align": "left",
      "background": "#151515",
      "display": "flex",
      "flext-direction": "row"
    }).appendTo(alertMod);
    
    var alertImgBox = $("<div/>");
    alertImgBox.css({
      "width": "30%",
      "height": "140px",
      "text-align": "center"
    }).appendTo(alertMain);
    
    var alertSymbol = $("<img src='Symbole/alert.png'/>");
    alertSymbol.css({
      "margin-top": "20px"
    });
    alertSymbol.appendTo(alertImgBox);
    
    var alertTextBox = $("<div/>");
    alertTextBox.css({
      "width": "70%",
      "height": "140px",
      "text-align": "left",
      "font-weight": "bold",
      "color": "white",
      "font-size": "25px",
      "padding-top": "20px"
    }).html("Alert-Warning!").appendTo(alertMain);
    
    var alertFoot = $("<div/>");
    alertFoot.css({
      "width": "98.6%",
      "height": "30px",
      "font-size": "20px",
      "background": "#151515",
      "font-weight": "bold",
      "color": "white",
      "text-align": "center",
      "padding": "4px",
      "border-top": "1px solid rgba(255, 255, 255, 0.8)"
    }).appendTo(alertMod);
    
    var alertFootBtn = $("<button class='toolbuttons9'>Close</button>");
    alertFootBtn.css({
      "width": "120px",
      "height": "26px",
      "font-size": "16px",
      "background": "#303030",
      "border": "2px outset grey"
    });
    alertFootBtn.appendTo(alertFoot);
    
    alertClosBtn.on("click", function() {
      alertMod.hide();
    });
    
    alertFootBtn.on("click", function() {
      alertMod.hide();
    });
    
    function exp2htm(filename, elId, mimeType) {
      var elHtml = document.getElementById(elId).innerHTML;
      var link = document.createElement('a');
      mimeType = mimeType || 'text/html';

      link.setAttribute('download', filename);
      link.setAttribute('href', 'data:' + mimeType  +  ';charset=utf-8,' + encodeURIComponent(elHtml));
      link.click(); 
	}
    
    vidtrackSaveBtn.click(function(evt) {
	  var savename = vidtrackSaveTxt.val();
	  
    if (evt.ctrlKey) {
      vidsaveTracklist();
      $(this).animate({borderColor: "lime"},100).delay(2000).animate({borderColor: "silver"},100);
  		} else {
      exp2htm(savename+'.html','vidtracklist','text/html');
        }
      });
    
    vidtrackUpBtn.click(function(){
    $(".vidselTrack:eq(0)").each( function(i,x) {
        var newPos = $("#vidtracklist li").index(this) - 1;
        if (newPos > -1) {
          $("#vidtracklist li").eq(newPos).before("<li style='"+$(this).attr("style")+"' class='vidselTrack'>"+$(this).text()+"</li>");
          currentVideo = newPos;
          $(this).remove();
        	}
    	});
	 });
    
    vidtrackDownBtn.click(function(){
    var countOptions = $("#vidtracklist li").length;
    $(".vidselTrack:eq(0)").each( function() {
        var newPos = $("#vidtracklist li").index(this) + 1;
        if (newPos < countOptions) {
          $("#vidtracklist li").eq(newPos).after("<li style='"+$(this).attr("style")+"' class='vidselTrack'>"+$(this).text()+"</li>");
          currentVideo = newPos;
          $(this).remove();
        	}
    	});
	});
    
      vidtrackDelBtn.click(function() {
	    $(".vidselTrack:eq(0)").each(function() {
	    $(this).remove();
        });
      });
    
    vidtrackFile.change(function(evt) {
	  var file = evt.currentTarget.files[0];
	  var objectUrl = URL.createObjectURL(file);
	  var plNumb = playerNumber.val();
      var pitchVals1 = pitchrange1.val();
      var pitchVals2 = pitchrange2.val();

	  if (plNumb === "player1") {
  	      vidplayer1.attr("src",objectUrl);
          miniPlayer1.attr("src",objectUrl);
          vidplayer1.prop("playbackRate", pitchVals1);
		} else if (plNumb === "player2") {
  		  vidplayer2.attr("src",objectUrl);
          miniPlayer2.attr("src",objectUrl);
          vidplayer2.prop("playbackRate", pitchVals2);
        }
	  vidtrackName.val(file.name);
    });
    
    vidtrackLoadBtn.click(function() {
	  vidtrackFile.click();
    });
    
    listPoint10.on("click", function() {
      vidtrackFile.click();
      vidconMenu.hide();
    });
    
    $("#vidmenu li").on("mouseenter", function() {
      $(this).css("background","#009aff");
    });
    
    $("#vidmenu li").on("mouseleave", function() {
      $(this).css("background","none");
    });
    
    $("#vidmenu li").on("contextmenu", function(e) {
      $(this).click();
      e.preventDefault();
    });
    
    vidaddTrackBtn.click(function() {
  	  var trname = vidtrackName.val();
  	  var ttrname = trname.substring(0, trname.lastIndexOf("."));
  
  	if (trname.substring(trname.lastIndexOf(".") + 1) !== "mp4") {
      alertMod.animate({left: element.width()/2 - alertMod.width()/2, top: element.height()/2 - alertMod.height()/2},1).show();
	  alertTextBox.html("Please import A mp4-File.<br>Playlists only with this File-Extension!");
  		} else {
      $("#vidtracklist li").removeClass("vidselTrack");
      vidtrackLibList.append("<li style='padding-top:4px; padding-bottom:4px;'>"+ttrname+"</li>");
  	  $("#vidtracklist li:eq(0)").addClass("vidselTrack");
    	}
	});
    
    vidtrackLoadBtn.on("mousedown touchstart", function() {
      $(this).css({
        "background": "linear-gradient(to right, navy, skyblue, navy)",
        "border-style": "inset",
        "border-color": "white"
      });
    });
    
    vidtrackLoadBtn.on("mouseup mouseleave touchend", function() {
      $(this).css({
        "background": "#000029",
        "border-style": "outset",
        "border-color": "silver"
      });
    });
    
    vidaddTrackMultiBtn.on("mousedown touchstart", function() {
      $(this).css({
        "background": "linear-gradient(to right, navy, skyblue, navy)",
        "border-style": "inset",
        "border-color": "white"
      });
    });
    
    vidaddTrackMultiBtn.on("mouseup mouseleave touchend", function() {
      $(this).css({
        "background": "#000029",
        "border-style": "outset",
        "border-color": "silver"
      });
    });
    
    vidaddTrackBtn.on("mousedown touchstart", function() {
      $(this).css({
        "background": "linear-gradient(to right, green, lime, green)",
        "border-style": "inset",
        "border-color": "white"
      });
    });
    
    vidaddTrackBtn.on("mouseup mouseleave touchend", function() {
      $(this).css({
        "background": "#002900",
        "border-style": "outset",
        "border-color": "silver"
      });
    });
    
    vidtrackUpBtn.on("mousedown touchstart", function() {
      $(this).css({
        "background": "linear-gradient(to right, darkred, red, darkred)",
        "border-style": "inset",
        "border-color": "white"
      });
    });
    
    vidtrackUpBtn.on("mouseup mouseleave touchend", function() {
      $(this).css({
        "background": "#290000",
        "border-style": "outset",
        "border-color": "silver"
      });
    });
    
    vidtrackDownBtn.on("mousedown touchstart", function() {
      $(this).css({
        "background": "linear-gradient(to right, darkred, red, darkred)",
        "border-style": "inset",
        "border-color": "white"
      });
    });
    
    vidtrackDownBtn.on("mouseup mouseleave touchend", function() {
      $(this).css({
        "background": "#290000",
        "border-style": "outset",
        "border-color": "silver"
      });
    });
    
    vidtrackCountUpBtn.on("mousedown touchstart", function() {
      $(this).css({
        "background": "linear-gradient(to right, #363600, yellow, #363600)",
        "border-style": "inset",
        "border-color": "white"
      });
    });
    
    vidtrackCountUpBtn.on("mouseup mouseleave touchend", function() {
      $(this).css({
        "background": "#292900",
        "border-style": "outset",
        "border-color": "silver"
      });
    });
    
    vidtrackCountDownBtn.on("mousedown touchstart", function() {
      $(this).css({
        "background": "linear-gradient(to right, #363600, yellow, #363600)",
        "border-style": "inset",
        "border-color": "white"
      });
    });
    
    vidtrackCountDownBtn.on("mouseup mouseleave touchend", function() {
      $(this).css({
        "background": "#292900",
        "border-style": "outset",
        "border-color": "silver"
      });
    });
    
    vidtrackListLoadBtn.on("mousedown touchstart", function() {
      $(this).css({
        "background": "linear-gradient(to right, navy, skyblue, navy)",
        "border-style": "inset",
        "border-color": "white"
      });
    });
    
    vidtrackListLoadBtn.on("mouseup mouseleave touchend", function() {
      $(this).css({
        "background": "#000029",
        "border-style": "outset",
        "border-color": "silver"
      });
    });
    
    vidaddTrackListBtn.on("mousedown touchstart", function() {
      $(this).css({
        "background": "linear-gradient(to right, navy, skyblue, navy)",
        "border-style": "inset",
        "border-color": "white"
      });
    });
    
    vidaddTrackListBtn.on("mouseup mouseleave touchend", function() {
      $(this).css({
        "background": "#000029",
        "border-style": "outset",
        "border-color": "silver"
      });
    });
    
    vidtrackSaveBtn.on("mousedown touchstart", function() {
      $(this).css({
        "background": "linear-gradient(to right, navy, skyblue, navy)",
        "border-style": "inset",
        "border-color": "white"
      });
    });
    
    vidtrackSaveBtn.on("mouseup mouseleave touchend", function() {
      $(this).css({
        "background": "#000029",
        "border-style": "outset",
        "border-color": "silver"
      });
    });
    
    vidtrackDelBtn.on("mouseup mouseleave touchend", function() {
      $(this).css({
        "background": "#290000",
        "border-style": "outset",
        "border-color": "silver"
      });
    });
    
    vidtrackDelBtn.on("mousedown touchstart", function() {
      $(this).css({
        "background": "linear-gradient(to right, darkred, red, darkred)",
        "border-style": "inset",
        "border-color": "white"
      });
    });
    
    infoFootBtn.on("mousedown touchstart", function() {
      $(this).css({
        "background": "linear-gradient(to right, grey, silver, grey)",
        "border-style": "inset",
        "border-color": "white"
      });
    });
    
    infoFootBtn.on("mouseup mouseleave touchend", function() {
      $(this).css({
        "background": "#303030",
        "border-style": "outset",
        "border-color": "silver"
      });
    });
    
    alertFootBtn.on("mousedown touchstart", function() {
      $(this).css({
        "background": "linear-gradient(to right, grey, silver, grey)",
        "border-style": "inset",
        "border-color": "white"
      });
    });
    
    alertFootBtn.on("mouseup mouseleave touchend", function() {
      $(this).css({
        "background": "#303030",
        "border-style": "outset",
        "border-color": "silver"
      });
    });
      
    fxFile.on("change", function(e) {
      var fxFn = e.currentTarget.files[0];
      fxFileName.val(fxFn.name);
    });
    
    fxLoadBtn.on("click", function() {
      fxFile.click();
    });
    
    addFxBtn.on("click", function() {
      var fxName = fxFileName.val();
      var fxLabel = fxFileLabel.val();
      vidfxLibList.prepend("<li name='"+fxName+"' style='padding-top:4px; padding-bottom:4px;'>"+fxLabel+"</li>");
    });
    
    vidfxLibList.on("mouseenter", function() {
      $("#vidfxList li").on("mouseenter", function() {
        $(this).css("background", "#00aaff");
      });
      
      $("#vidfxList li").on("mouseleave", function() {
        $(this).css("background", "none");
      });
      
      $("#vidfxList li").on("click", function() {
        $("#vidfxList li").removeClass("vidselFx");
        var fxVol = fxVolume.val();
        var fxpitchRate = fxPitch.val();
        
        $(this).addClass("vidselFx");
        fxPlayer.attr("src", vidsettings.fxPath+$(this).attr("name")).prop({"volume": fxVol, "playbackRate": fxpitchRate});
      });
    });
    
    vidfxLibList.on("mouseleave", function() {
        $("#vidfxList li").off("click").off("mouseenter").off("mouseleave");
      });
    
    playFxBtn.on("click", function() {
      fxPlayer.trigger("play");
    });
    
    vidfxBtn1.on("click", function() {
      fxPlayer.trigger("play");
    });
    
    vidfxBtn2.on("click", function() {
      fxPlayer.trigger("play");
    });
    
    fxLoadBtn.on("mousedown touchstart", function() {
      $(this).css({
        "background": "linear-gradient(to right, navy, skyblue, navy)",
        "border-style": "inset",
        "border-color": "white"
      });
    });
    
    fxLoadBtn.on("mouseup mouseleave touchend", function() {
      $(this).css({
        "background": "#000029",
        "border-style": "outset",
        "border-color": "silver"
      });
    });
    
    addFxBtn.on("mousedown touchstart", function() {
      $(this).css({
        "background": "linear-gradient(to right, green, lime, green)",
        "border-style": "inset",
        "border-color": "white"
      });
    });
    
    addFxBtn.on("mouseup mouseleave touchend", function() {
      $(this).css({
        "background": "#002900",
        "border-style": "outset",
        "border-color": "silver"
      });
    });
    
    var vidtracklistDelBtn = $("<button class='toolbuttons'><img src='Symbole/delete2.png' style='width:20px; height:20px; filter:invert(100%);'></button>");
    vidtracklistDelBtn.css({
      "width": "50px",
      "height": "50px",
      "font-size": "16px",
      "margin-left": "9px",
      "background": "#290000",
      "border-radius": "50%",
      "border": "4px outset silver"
    });
    
    vidtracklistDelBtn.appendTo(trackToolbar2);
    
    var confirmMod = $("<div/>");
    confirmMod.css({
      "background": "212121",
      "border": "2px outset rgba(255, 255, 255, 0.8)",
      "width": "600px",
      "position": "fixed",
      "left": "20px",
      "top": "20px",
      "z-index": "250",
      "display": "none"
    }).appendTo(element);
    
    var confirmHead = $("<div/>");
    confirmHead.css({
      "width": "98.6%",
      "height": "30px",
      "font-size": "20px",
      "background": "#292929",
      "font-weight": "bold",
      "color": "white",
      "text-align": "left",
      "padding": "4px",
    }).text("Modal-Message").appendTo(confirmMod);
    
    var confirmClosBtn = $("<button class='closeBtn'>X</button>");
    confirmClosBtn.appendTo(confirmHead);
    
    var confirmMain = $("<div/>");
    confirmMain.css({
      "width": "100%",
      "height": "140px",
      "text-align": "left",
      "background": "#151515",
      "display": "flex",
      "flext-direction": "row"
    }).appendTo(confirmMod);
    
    var confirmImgBox = $("<div/>");
    confirmImgBox.css({
      "width": "30%",
      "height": "140px",
      "text-align": "center"
    }).appendTo(confirmMain);
    
    var confirmSymbol = $("<img src='Symbole/confirm.png'/>");
    confirmSymbol.css({
      "margin-top": "20px"
    });
    confirmSymbol.appendTo(confirmImgBox);
    
    var confirmTextBox = $("<div/>");
    confirmTextBox.css({
      "width": "70%",
      "height": "140px",
      "text-align": "left",
      "font-weight": "bold",
      "color": "white",
      "font-size": "25px",
      "padding-top": "20px"
    }).html("Alert-Warning!").appendTo(confirmMain);
    
    var confirmFoot = $("<div/>");
    confirmFoot.css({
      "width": "98.6%",
      "height": "30px",
      "font-size": "20px",
      "background": "#151515",
      "font-weight": "bold",
      "color": "white",
      "text-align": "center",
      "padding": "4px",
      "border-top": "1px solid rgba(255, 255, 255, 0.8)"
    }).appendTo(confirmMod);
    
    var confirmFootBtn1 = $("<button class='toolbuttons9'>OK</button>");
    confirmFootBtn1.css({
      "width": "120px",
      "height": "26px",
      "font-size": "16px",
      "background": "#303030",
      "border": "2px outset grey"
    });
    confirmFootBtn1.appendTo(confirmFoot);
    
    var confirmFootBtn2 = $("<button class='toolbuttons9'>Abort</button>");
    confirmFootBtn2.css({
      "width": "120px",
      "height": "26px",
      "font-size": "16px",
      "background": "#303030",
      "border": "2px outset grey",
      "margin-left": "4px"
    });
    confirmFootBtn2.appendTo(confirmFoot);
    
    vidtracklistDelBtn.on("click", function() {
      confirmMod.animate({left: element.width()/2 - confirmMod.width()/2 + "px", top: element.height()/2 - confirmMod.height()/2 + "px"},1).show();
      confirmTextBox.html("Will You Delete<br>the complete Videolist?");
      confirmFootBtn1.one("click", function() {
        vidtrackLibList.html("");
        confirmMod.hide();
      });
    });
    
    vidtracklistDelBtn.on("mouseup mouseleave touchend", function() {
      $(this).css({
        "background": "#290000",
        "border-style": "outset",
        "border-color": "silver"
      });
    });
    
    vidtracklistDelBtn.on("mousedown touchstart", function() {
      $(this).css({
        "background": "linear-gradient(to right, darkred, red, darkred)",
        "border-style": "inset",
        "border-color": "white"
      });
    });
    
    confirmFootBtn1.on("mousedown touchstart", function() {
      $(this).css({
        "background": "linear-gradient(to right, grey, silver, grey)",
        "border-style": "inset",
        "border-color": "white"
      });
    });
  
    vidtracklistDelBtn.on("mouseenter", function() {
      vidinfoBox.text("Delete Tracklist");
    });
    
    vidtracklistDelBtn.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = vidinfoBox.width();
      var infoPos = infoWidth/2;
    
      vidinfoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
    });
    
    vidtracklistDelBtn.on("mouseleave", function() {
      vidinfoBox.hide();
    });
    
    confirmFootBtn1.on("mouseup mouseleave touchend", function() {
      $(this).css({
        "background": "#303030",
        "border-style": "outset",
        "border-color": "silver"
      });
    });
    
    confirmFootBtn2.on("mousedown touchstart", function() {
      $(this).css({
        "background": "linear-gradient(to right, grey, silver, grey)",
        "border-style": "inset",
        "border-color": "white"
      });
    });
    
    confirmFootBtn2.on("mouseup mouseleave touchend", function() {
      $(this).css({
        "background": "#303030",
        "border-style": "outset",
        "border-color": "silver"
      });
    });
    
    confirmClosBtn.on("click", function() {
      confirmMod.hide();
    });
    
    confirmFootBtn2.on("click", function() {
      confirmMod.hide();
    });
    
    var vidnewTrackPosMod = $("<div/>");
    vidnewTrackPosMod.css({
      "width": "350px",
      "position": "absolute",
      "left": "30px",
      "top": "30px",
      "background": "rgba(15, 15, 15, 0.8)",
      "border": "4px outset white",
      "border-radius": "6px",
      "display": "none",
      "z-index": 250
    }).appendTo(element);
    
    var vidnewPosArea = $("<div/>");
    vidnewPosArea.css({
      "width": "100%",
      "height": "40px",
      "padding": "4px",
      "text-align": "left"
    }).appendTo(vidnewTrackPosMod);
    
    var vidtrackNewpos = $("<input type='number'>");
    vidtrackNewpos.css({
      "width": "80px",
      "height": "40px",
      "font-size": "20px",
      "font-weight": "bold",
      "color": "white",
      "background": "#212121",
      "border": "2px outset silver",
      "border-radius": "6px"
    }).appendTo(vidnewPosArea);
    
    var vidnewBtn = $("<button/>");
    vidnewBtn.css({
      "width": "80px",
      "height": "40px",
      "font-size": "20px",
      "font-weight": "bold",
      "color": "white",
      "background": "#212121",
      "border": "2px outset silver",
      "border-radius": "6px",
      "margin-left": "6px",
      "cursor": "pointer"
    }).text("Set").appendTo(vidnewPosArea);
    
    var vidnewFirstBtn = $("<button/>");
    vidnewFirstBtn.css({
      "width": "80px",
      "height": "40px",
      "font-size": "20px",
      "font-weight": "bold",
      "color": "white",
      "background": "#212121",
      "border": "2px outset silver",
      "border-radius": "6px",
      "margin-left": "6px",
      "cursor": "pointer"
    }).text("First").appendTo(vidnewPosArea);
    
    var vidnewLastBtn = $("<button/>");
    vidnewLastBtn.css({
      "width": "80px",
      "height": "40px",
      "font-size": "20px",
      "font-weight": "bold",
      "color": "white",
      "background": "#212121",
      "border": "2px outset silver",
      "border-radius": "6px",
      "margin-left": "6px",
      "cursor": "pointer"
    }).text("Last").appendTo(vidnewPosArea);
    
    vidnewBtn.on("mousedown touchstart", function() {
      $(this).css({
        "background": "linear-gradient(to right, grey, silver, grey)",
        "border-style": "inset",
        "border-color": "white"
      });
    });
    
    vidnewBtn.on("mouseup mouseleave touchend", function() {
      $(this).css({
        "background": "#212121",
        "border-style": "outset",
        "border-color": "silver"
      });
    });
    
    vidnewFirstBtn.on("mousedown touchstart", function() {
      $(this).css({
        "background": "linear-gradient(to right, grey, silver, grey)",
        "border-style": "inset",
        "border-color": "white"
      });
    });
    
    vidnewFirstBtn.on("mouseup mouseleave touchend", function() {
      $(this).css({
        "background": "#212121",
        "border-style": "outset",
        "border-color": "silver"
      });
    });
    
    vidnewLastBtn.on("mousedown touchstart", function() {
      $(this).css({
        "background": "linear-gradient(to right, grey, silver, grey)",
        "border-style": "inset",
        "border-color": "white"
      });
    });
    
    vidnewLastBtn.on("mouseup mouseleave touchend", function() {
      $(this).css({
        "background": "#212121",
        "border-style": "outset",
        "border-color": "silver"
      });
    });
    
    vidtrackUpBtn.on("contextmenu", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      vidnewTrackPosMod.animate({left: xPos - vidnewTrackPosMod.width()/2, top: yPos - vidnewTrackPosMod.height() - 16},1).show();
      return false;
    });
    
    vidtrackDownBtn.on("contextmenu", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      vidnewTrackPosMod.animate({left: xPos - vidnewTrackPosMod.width()/2, top: yPos - vidnewTrackPosMod.height() - 16},1).show();
      return false;
    });
    
    vidtrackNewpos.on("focus", function() {
      $(this).val($("#vidtracklist li").length);
      $(this).attr({
        "min": 1,
        "max": $("#vidtracklist li").length
    	});
    });
    
    var closeNewTrack;
    
    vidnewTrackPosMod.on("mouseenter", function() {
      clearTimeout(closeNewTrack);
    });
    
    vidnewTrackPosMod.on("mouseleave", function() {
      closeNewTrack = setTimeout(function() {
        vidnewTrackPosMod.hide();
      },1600);
    });
    
    vidnewBtn.on("click", function() {
      var trNew = vidtrackNewpos.val() - 1;
      $(".vidselTrack:eq(0)").each(function() {
        $("#vidtracklist li").removeClass("vidselTrack");
        $("#vidtracklist li:eq("+trNew+")").before("<li style='"+$(this).attr("style")+"'>"+$(this).text()+"</li>");
        $("#vidtracklist li:eq("+trNew+")").addClass("vidselTrack");
        currentVideo = trNew;
        $(this).remove();
      });
      
      vidnewTrackPosMod.hide();
      setPosition();
    });
    
    vidnewFirstBtn.on("click", function() {
      $(".vidselTrack:eq(0)").each(function() {
        $("#vidtracklist li").removeClass("vidselTrack");
        vidtrackLibList.prepend("<li style='"+$(this).attr("style")+"'>"+$(this).text()+"</li>");
        $("#vidtracklist li:eq(0)").addClass("vidselTrack");
        currentVideo = 0;
        $(this).remove();
      });
      
      vidnewTrackPosMod.hide();
      setPosition();
    });
    
    vidnewLastBtn.on("click", function() {
      $(".vidselTrack:eq(0)").each(function() {
        $("#vidtracklist li").removeClass("vidselTrack");
        vidtrackLibList.append("<li style='"+$(this).attr("style")+"'>"+$(this).text()+"</li>");
        $("#vidtracklist li:eq(-1)").addClass("vidselTrack");
        currentVideo = $("#tracklist li").length - 2;
        $(this).remove();
      });
      
      vidnewTrackPosMod.hide();
      setPosition();
    });
    
    var trZoomBtn = $("<button class='toolbuttons11'>Zoom Tracklist</button>");
    trZoomBtn.css({
      "border": "2px outset silver"
    }).appendTo(bottomMain);
    
    var vidbigTrackMod = $("<div/>");
    vidbigTrackMod.css({
      "width": "70%",
      "background": "#212121",
      "border": "4px outset white",
      "position": "absolute",
      "left": "20px",
      "top": "20px",
      "z-index": 400,
      "display": "none"
    }).appendTo(element);
    
    var bigTrackHead = $("<div/>");
    bigTrackHead.css({
      "width": "100%",
      "height": "25px",
      "background": "#151515",
      "padding-top": "6px",
      "font-size": "20px",
      "font-weight": "bold",
      "color": "white",
      "text-align": "left"
    }).text("Zoom Videolist").appendTo(vidbigTrackMod);
    
    var bigCloseBtn = $("<button class='closeBtn'>X</button>");
    bigCloseBtn.css({
      "margin-right": "6px",
      "margin-bottom": "4px"
    });
    bigCloseBtn.appendTo(bigTrackHead);
    
    var bigTrackArea = $("<div/>");
    bigTrackArea.css({
      "width": "100%",
      "height": "600px",
      "border-top": "4px solid rgba(255, 255, 255, 0.8)",
      "border-bottom": "4px solid rgba(255, 255, 255, 0.8)",
      "display": "flex",
      "flex-direction": "row"
    }).appendTo(vidbigTrackMod);
    
    var bigTrackBox = $("<div/>");
    bigTrackBox.css({
      "width": "65%",
      "height": "584px",
      "margin": "4px",
      "border": "4px solid rgba(255, 255, 255, 0.6)",
      "overflow": "auto"
    }).appendTo(bigTrackArea);
    
    var bigFxBox = $("<div/>");
    bigFxBox.css({
      "width": "34%",
      "height": "584px",
      "margin": "4px",
      "border": "4px solid rgba(255, 255, 255, 0.6)",
      "overflow": "auto"
    }).appendTo(bigTrackArea);
    
    var bigTrackfoot = $("<div/>");
    bigTrackfoot.css({
      "width": "100%",
      "height": "35px",
      "background": "#151515",
      "padding-top": "6px",
      "font-size": "20px",
      "font-weight": "bold",
      "color": "white",
      "text-align": "center",
      "cursor": "pointer"
    }).appendTo(vidbigTrackMod);
    
    var vidtrackBigList = $("<ul id='vidtrackBigList'></ul>");
    vidtrackBigList.css({
      "padding": "1px",
      "margin": "1px",
      "font-size": "20px",
      "font-weight": "bold",
      "color": "white",
      "list-style": "none",
      "text-align": "left",
      "cursor": "pointer",
    }).appendTo(bigTrackBox);
    
    var vidfxBigList = $("<ul id='vidfxBigList'></ul>");
    vidfxBigList.css({
      "padding": "1px",
      "margin": "1px",
      "font-size": "20px",
      "font-weight": "bold",
      "color": "white",
      "list-style": "none",
      "text-align": "left",
      "cursor": "pointer"
    }).appendTo(bigFxBox);
    
    var vidsortBtn1 = $("<button/>");
    vidsortBtn1.css({
      "width": "180px",
      "height": "30px",
      "font-size": "20px",
      "font-weight": "bold",
      "color": "white",
      "background": "#212121",
      "border": "2px outset silver",
      "border-radius": "6px",
      "margin-left": "6px",
      "cursor": "pointer"
    }).text("Sort A-Z").appendTo(bigTrackfoot);
    
    var vidsortBtn2 = $("<button/>");
    vidsortBtn2.css({
      "width": "180px",
      "height": "30px",
      "font-size": "20px",
      "font-weight": "bold",
      "color": "white",
      "background": "#212121",
      "border": "2px outset silver",
      "border-radius": "6px",
      "margin-left": "6px",
      "cursor": "pointer"
    }).text("Sort Z-A").appendTo(bigTrackfoot);
    
    var vidplayFxBtn2 = $("<button/>");
    vidplayFxBtn2.css({
      "width": "180px",
      "height": "30px",
      "font-size": "20px",
      "font-weight": "bold",
      "color": "white",
      "background": "#212121",
      "border": "2px outset silver",
      "border-radius": "6px",
      "margin-left": "6px",
      "cursor": "pointer"
    }).text("Play FX").appendTo(bigTrackfoot);
    
    var closeBigTrack = $("<button/>");
    closeBigTrack.css({
      "width": "180px",
      "height": "30px",
      "font-size": "20px",
      "font-weight": "bold",
      "color": "white",
      "background": "#212121",
      "border": "2px outset silver",
      "border-radius": "6px",
      "margin-left": "6px",
      "cursor": "pointer"
    }).text("Close Videobox").appendTo(bigTrackfoot);
    
    trZoomBtn.on("click", function() {
      vidtrackBigList.html(vidtrackLibList.html());
      vidfxBigList.html(vidfxLibList.html());
      vidbigTrackMod.animate({left: element.width()/2 - vidbigTrackMod.width()/2, top: element.height()/2 - vidbigTrackMod.height()/2},1).show();
    });
    
    closeBigTrack.on("click", function() {
      vidbigTrackMod.hide();
    });
    
    bigCloseBtn.on("click", function() {
      vidbigTrackMod.hide();
    });
    
    bigTrackBox.on("mouseenter", function() {
      $("#vidtrackBigList li").on("mouseenter", function() {
        $(this).css("background", "#00b2ff");
      });
      
      $("#vidtrackBigList li").on("mouseleave", function() {
        $(this).css("background", "none");
      });
      
      $("#vidtrackBigList li").on("click", function() {
        $("#vidtracklist li").removeClass("vidselTrack");
        currentVideo = $(this).index();
        $("#vidtracklist li:eq("+currentVideo+")").addClass("vidselTrack");
        
        if (playerNumber.val() === "player1") {
          loadVideo("pitchRange11", "videoplayer1", "miniplayer1");
        } else if (playerNumber.val() === "player2") {
          loadVideo("pitchRange22", "videoplayer2", "miniplayer2");
        }
        
        vidbigTrackMod.hide();
      });
    });
    
    bigFxBox.on("mouseenter", function() {
      $("#vidfxBigList li").on("mouseenter", function() {
        $(this).css("background", "#00b2ff");
      });
      
      $("#vidfxBigList li").on("mouseleave", function() {
        $(this).css("background", "none");
      });
      
      $("#vidfxBigList li").on("click", function() {
        var fxVol = fxVolume.val();
        var fxPitchVal = fxPitch.val();
        
        $("#vidfxList li").removeClass("vidselFx");
        $("#vidfxList li:eq("+$(this).index()+")").addClass("vidselFx");
        fxPlayer.attr("src", vidsettings.fxPath+$(this).attr("name")).prop({"volume": fxVol, "playbackRate": fxPitchVal});
      });
    });
    
    bigTrackBox.on("mouseleave", function() {
      $("#vidtrackBigList li").off("mouseenter").off("mouseleave").off("click");
    });
    
    bigFxBox.on("mouseleave", function() {
      $("#vidfxBigList li").off("mouseenter").off("mouseleave").off("click");
    });
    
    fxmenuMod.on("mouseenter", function() {
      $("#fxmenu li").on("mouseenter", function() {
        $(this).css("background", "#00b2ff");
      });
      
      $("#fxmenu li").on("mouseleave", function() {
        $(this).css("background", "none");
      });
      
      $("#fxmenu li").on("click", function() {
        var fxVol = fxVolume.val();
        var fxPitchVal = fxPitch.val();
        
        $("#vidfxList li").removeClass("vidselFx");
        $("#vidfxList li:eq("+$(this).index()+")").addClass("vidselFx");
        fxPlayer.attr("src", vidsettings.fxPath+$(this).attr("name")).prop({"volume": fxVol, "playbackRate": fxPitchVal});
        fxmenuMod.hide();
      });
      
      $("#fxmenu li").on("contextmenu", function() {
        $(this).click();
        return false;
      });
    });
    
    bigTrackBox.on("mouseleave", function() {
      $("#vidtrackBigList li").off("mouseenter").off("mouseleave").off("click").off("contextmenu");
    });
    
    fxmenuMod.on("mouseleave", function() {
      $("#vidfxBigList li").off("mouseenter").off("mouseleave").off("click");
    });
    
    vidplayFxBtn2.on("click", function() {
      fxPlayer.trigger("play");
    });
    
    vidsortBtn1.on("click", function() {
      var vidsortArr = [];
      var vidsortArr2 = [];
      
      for (var y=0; y<$("#vidtracklist li").length; y++) {
        vidsortArr.push($("#vidtracklist li:eq("+y+")").text());
      }
      
      vidsortArr.sort();
      for (var z=0; z<vidsortArr.length; z++) {
        vidsortArr2.push("<li style='padding-top:4px; padding-bottom:4px;'>"+vidsortArr[z]+"</li>");
      }
      
      vidtrackLibList.html(vidsortArr2.join(""));
      $("#vidtracklist li:eq(0)").addClass("vidselTrack");
      trZoomBtn.click();
    });
    
    vidsortBtn2.on("click", function() {
      var vidsortrevArr = [];
      var vidsortrevArr2 = [];
      
      for (var y=0; y<$("#vidtracklist li").length; y++) {
        vidsortrevArr.push($("#vidtracklist li:eq("+y+")").text());
      }
      
      vidsortrevArr.sort().reverse();
      for (var z=0; z<vidsortrevArr.length; z++) {
        vidsortrevArr2.push("<li style='padding-top:4px; padding-bottom:4px;'>"+vidsortrevArr[z]+"</li>");
      }
      
      vidtrackLibList.html(vidsortrevArr2.join(""));
      $("#tracklist li:eq(0)").addClass("vidselTrack");
      trZoomBtn.click();
    });
    
    vidsortBtn1.on("mousedown touchstart", function() {
      $(this).css({
        "background": "linear-gradient(to right, grey, silver, grey)",
        "border-style": "inset",
        "border-color": "white"
      });
    });
    
    vidsortBtn1.on("mouseup mouseleave touchend", function() {
      $(this).css({
        "background": "#212121",
        "border-style": "outset",
        "border-color": "silver"
      });
    });
    
    vidsortBtn2.on("mousedown touchstart", function() {
      $(this).css({
        "background": "linear-gradient(to right, grey, silver, grey)",
        "border-style": "inset",
        "border-color": "white"
      });
    });
    
    vidsortBtn2.on("mouseup mouseleave touchend", function() {
      $(this).css({
        "background": "#212121",
        "border-style": "outset",
        "border-color": "silver"
      });
    });
    
    vidplayFxBtn2.on("mousedown touchstart", function() {
      $(this).css({
        "background": "linear-gradient(to right, grey, silver, grey)",
        "border-style": "inset",
        "border-color": "white"
      });
    });
    
    vidplayFxBtn2.on("mouseup mouseleave touchend", function() {
      $(this).css({
        "background": "#212121",
        "border-style": "outset",
        "border-color": "silver"
      });
    });
    
    closeBigTrack.on("mousedown touchstart", function() {
      $(this).css({
        "background": "linear-gradient(to right, grey, silver, grey)",
        "border-style": "inset",
        "border-color": "white"
      });
    });
    
    closeBigTrack.on("mouseup mouseleave touchend", function() {
      $(this).css({
        "background": "#212121",
        "border-style": "outset",
        "border-color": "silver"
      });
    });
    
    trZoomBtn.on("mousedown touchstart", function() {
      $(this).css({
        "background": "linear-gradient(to right, navy, skyblue, navy)",
        "border-style": "inset",
        "border-color": "white"
      });
    });
    
    trZoomBtn.on("mouseup mouseleave touchend", function() {
      $(this).css({
        "background": "#000029",
        "border-style": "outset",
        "border-color": "silver"
      });
    });
    
    var vidtrackInfoMod = $("<div/>");
    vidtrackInfoMod.css({
      "width": "600px",
      "background": "rgba(30, 30, 30, 0.8)",
      "border": "4px outset rgba(255, 255, 255, 0.8)",
      "display": "none",
      "position": "absolute",
      "left": "20px",
      "top": "20px",
      "z-index": 1000
    });
    
    vidtrackInfoMod.appendTo(element);
    
    var trackInfoHead = $("<div/>");
    trackInfoHead.css({
      "width": "600px",
      "height": "30px",
      "font-size": "20px",
      "font-weight": "bold",
      "color": "white",
      "padding": "6px",
      "text-align": "left"
    }).html("Tracklist-Info");
    
    trackInfoHead.appendTo(vidtrackInfoMod);
    
    var closeInfoBtn = $("<button class='closeBtn'>X</button>");
  	closeInfoBtn.appendTo(trackInfoHead);
    
    var trackInfoMain1 = $("<div/>");
    trackInfoMain1.css({
      "width": "600px",
      "font-size": "14px",
      "font-weight": "bold",
      "color": "white",
      "padding": "6px",
      "display": "flex",
      "flex-direction": "row"
    });
    
    trackInfoMain1.appendTo(vidtrackInfoMod);
    
    var trackInfoTxt1 = $("<div/>");
    trackInfoTxt1.css({
      "width": "240px",
      "text-align": "left"
    }).text("Videolistname:");
    
    trackInfoTxt1.appendTo(trackInfoMain1);
    
    var trackInfoItem1 = $("<div/>");
    trackInfoItem1.css({
      "width": "340px",
      "text-align": "left"
    });
    
    trackInfoItem1.appendTo(trackInfoMain1);
    
    var trackInfoMain2 = $("<div/>");
    trackInfoMain2.css({
      "width": "600px",
      "font-size": "14px",
      "font-weight": "bold",
      "color": "white",
      "padding": "6px",
      "display": "flex",
      "flex-direction": "row"
    });
    
    trackInfoMain2.appendTo(vidtrackInfoMod);
    
    var trackInfoTxt2 = $("<div/>");
    trackInfoTxt2.css({
      "width": "240px",
      "text-align": "left"
    }).text("Numbers of Videos:");
    
    trackInfoTxt2.appendTo(trackInfoMain2);
    
    var trackInfoItem2 = $("<div/>");
    trackInfoItem2.css({
      "width": "340px",
      "text-align": "left"
    });
    
    trackInfoItem2.appendTo(trackInfoMain2);
    
    var trackInfoMain3 = $("<div/>");
    trackInfoMain3.css({
      "width": "600px",
      "font-size": "14px",
      "font-weight": "bold",
      "color": "white",
      "padding": "6px",
      "display": "flex",
      "flex-direction": "row"
    });
    
    trackInfoMain3.appendTo(vidtrackInfoMod);
    
    var trackInfoTxt3 = $("<div/>");
    trackInfoTxt3.css({
      "width": "240px",
      "text-align": "left"
    }).text("Remaining Videos:");
    
    trackInfoTxt3.appendTo(trackInfoMain3);
    
    var trackInfoItem3 = $("<div/>");
    trackInfoItem3.css({
      "width": "340px",
      "text-align": "left"
    });
    
    trackInfoItem3.appendTo(trackInfoMain3);
    
    var trackInfoMain4 = $("<div/>");
    trackInfoMain4.css({
      "width": "600px",
      "font-size": "14px",
      "font-weight": "bold",
      "color": "white",
      "padding": "6px",
      "display": "flex",
      "flex-direction": "row"
    });
    
    trackInfoMain4.appendTo(vidtrackInfoMod);
    
    var trackInfoTxt4 = $("<div/>");
    trackInfoTxt4.css({
      "width": "240px",
      "text-align": "left"
    }).text("Current Video Player 1:");
    
    trackInfoTxt4.appendTo(trackInfoMain4);
    
    var trackInfoItem4 = $("<div/>");
    trackInfoItem4.css({
      "width": "340px",
      "text-align": "left"
    });
    
    trackInfoItem4.appendTo(trackInfoMain4);
    
    var trackInfoMain5 = $("<div/>");
    trackInfoMain5.css({
      "width": "600px",
      "font-size": "14px",
      "font-weight": "bold",
      "color": "white",
      "padding": "6px",
      "display": "flex",
      "flex-direction": "row"
    });
    
    trackInfoMain5.appendTo(vidtrackInfoMod);
    
    var trackInfoTxt5 = $("<div/>");
    trackInfoTxt5.css({
      "width": "240px",
      "text-align": "left"
    }).text("Current Video Player 2:");
    
    trackInfoTxt5.appendTo(trackInfoMain5);
    
    var trackInfoItem5 = $("<div/>");
    trackInfoItem5.css({
      "width": "340px",
      "text-align": "left"
    });
    
    trackInfoItem5.appendTo(trackInfoMain5);
    
    var trackInfoMain6 = $("<div/>");
    trackInfoMain6.css({
      "width": "600px",
      "font-size": "14px",
      "font-weight": "bold",
      "color": "white",
      "padding": "6px",
      "display": "flex",
      "flex-direction": "row"
    });
    
    trackInfoMain6.appendTo(vidtrackInfoMod);
    
    var trackInfoTxt6 = $("<div/>");
    trackInfoTxt6.css({
      "width": "240px",
      "text-align": "left"
    }).text("Playlist-Mode:");
    
    trackInfoTxt6.appendTo(trackInfoMain6);
    
    var trackInfoItem6 = $("<div/>");
    trackInfoItem6.css({
      "width": "340px",
      "text-align": "left"
    });
    
    trackInfoItem6.appendTo(trackInfoMain6);
    
    function vidInfos() {
      var trackSource1 = vidplayer1.attr("src");
      var trackSource2 = vidplayer2.attr("src");
      
      trackInfoItem1.text(vidtrackSaveTxt.val());
      trackInfoItem2.text($("#vidtracklist li").length);
      trackInfoItem3.text(remainVideos.val());
      trackInfoItem4.text(trackSource1.substring(trackSource1.lastIndexOf("/")+1, trackSource1.lastIndexOf(".")));
      trackInfoItem5.text(trackSource2.substring(trackSource2.lastIndexOf("/")+1, trackSource2.lastIndexOf(".")));
      
      if (mode11.is(":checked")) {
        trackInfoItem6.text("Standard");
      } else if (mode12.is(":checked")) {
        trackInfoItem6.text("Reverse");
      } else if (mode13.is(":checked")) {
        trackInfoItem6.text("Random");
      }
    }
    
    var mainconMenu = $("<div id='mainmenu'></div>");
    mainconMenu.css({
      "width": "280px",
      "background": "rgba(21, 21, 21, 0.8)",
      "position": "absolute",
      "left": "10px",
      "top": "10px",
      "z-index": 400,
      "border": "2px outset #303030",
      "display": "none"
    });
    
    mainconMenu.appendTo(element);
    
    var mainmenuList = $("<ul/>");
    mainmenuList.css({
      "margin": "1px",
      "padding": "1px",
      "list-style": "none",
      "font-size": "20px",
      "font-weight": "bold",
      "color": "white",
      "text-align": "left",
    });
    
    mainmenuList.appendTo(mainconMenu);
    
    var mainlistPoint1 = $("<li style='border-bottom: 1px solid rgba(255, 255, 255, 0.6);'>Autoplay On</li>");
    mainlistPoint1.css({
      "padding-top": "9px",
      "padding-bottom": "9px",
      "cursor": "pointer"
    }).appendTo(mainmenuList);
    
    var mainlistPoint2 = $("<li style='border-bottom: 1px solid rgba(255, 255, 255, 0.6);'>Trackchange Off</li>");
    mainlistPoint2.css({
      "padding-top": "9px",
      "padding-bottom": "9px",
      "cursor": "pointer"
    }).appendTo(mainmenuList);
    
    var mainlistPoint3 = $("<li style='border-bottom: 1px solid rgba(255, 255, 255, 0.6);'>Standard-Playlist</li>");
    mainlistPoint3.css({
      "padding-top": "9px",
      "padding-bottom": "9px",
      "cursor": "pointer"
    }).appendTo(mainmenuList);
    
    var mainlistPoint4 = $("<li style='border-bottom: 1px solid rgba(255, 255, 255, 0.6);'>Loop</li>");
    mainlistPoint4.css({
      "padding-top": "9px",
      "padding-bottom": "9px",
      "cursor": "pointer"
    }).appendTo(mainmenuList);
    
    var mainlistPoint5 = $("<li style='border-bottom: 1px solid rgba(255, 255, 255, 0.6);'>Zoom Tracklist</li>");
    mainlistPoint5.css({
      "padding-top": "9px",
      "padding-bottom": "9px",
      "cursor": "pointer"
    }).appendTo(mainmenuList);
    
    var mainlistPoint6 = $("<li style='border-bottom: 1px solid rgba(255, 255, 255, 0.6);'><img src='Symbole/plist2.png' style='width:16px; height:16px;'>&nbsp;Load Videos</li>");
    mainlistPoint6.css({
      "padding-top": "9px",
      "padding-bottom": "9px",
      "cursor": "pointer"
    }).appendTo(mainmenuList);
    
    var mainlistPoint7 = $("<li style='border-bottom: 1px solid rgba(255, 255, 255, 0.6);'><img src='Symbole/open.png' style='width:16px; height:16px;'>&nbsp;Load Videolist</li>");
    mainlistPoint7.css({
      "padding-top": "9px",
      "padding-bottom": "9px",
      "cursor": "pointer"
    }).appendTo(mainmenuList);
    
    var mainlistPoint8 = $("<li style='border-bottom: 1px solid rgba(255, 255, 255, 0.6);'><img src='Symbole/export.png' style='width:16px; height:16px;'>&nbsp;Save Playlist</li>");
    mainlistPoint8.css({
      "padding-top": "9px",
      "padding-bottom": "9px",
      "cursor": "pointer"
    }).appendTo(mainmenuList);
    
    var mainlistPoint9 = $("<li style='border-bottom: 1px solid rgba(255, 255, 255, 0.6);'><img src='Symbole/fullscreen.png' style='width:16px; height:16px;'>&nbsp;Toogle Fullscreen</li>");
    mainlistPoint9.css({
      "padding-top": "9px",
      "padding-bottom": "9px",
      "cursor": "pointer"
    }).appendTo(mainmenuList);
    
    var mainlistPoint10 = $("<li>Tracklist-Info</li>");
    mainlistPoint10.css({
      "padding-top": "9px",
      "padding-bottom": "9px",
      "cursor": "pointer"
    });
    mainlistPoint10.appendTo(mainmenuList);
        
    vidmain.on("contextmenu", function(e) {
      var scW = window.screen.availWidth;
      var scH = window.screen.availHeight;
      var menuX = e.pageX;
      var menuY = e.pageY;
      var menSizeX = mainconMenu.width();
      var menSizeY = mainconMenu.height();
      var menuPoxX = menuX + menSizeX;
      var menuPosY = menuY + menSizeY;
      
      if (menuPoxX > scW && menuPosY < scH) {
        mainconMenu.animate({left: menuX - menSizeX, top: menuY},6).show();
      } else if (menuPosY > scH && menuPoxX < scW) {
        mainconMenu.animate({left: menuX, top: menuY - menSizeY},6).show();
      } else if (menuPosY > scH && menuPoxX > scW) {
        mainconMenu.animate({left: menuX - menSizeX, top: menuY - menSizeY},6).show();
      } else {
        mainconMenu.animate({left: menuX, top: menuY},6).show();
      }
      
      return false;
    });
    
    var maincloseMenu;

    mainconMenu.on("mouseenter", function() {
	clearTimeout(maincloseMenu);
    });
    
    mainconMenu.on("mouseleave", function() {
	maincloseMenu = setTimeout(function() {
	   mainconMenu.hide();
	},1600);	
    });
    
    mainlistPoint1.on("click", function() {
      vidautoplayBtn.click();
      if (vidautoplayBtn.attr("style")) {
        $(this).html("Autoplay Off");
      } else {
        $(this).html("Autoplay On");
      }
      mainconMenu.hide();
    });
    
    mainlistPoint2.on("click", function() {
      vidtrackChangeBtn.click();
      if (vidtrackChangeBtn.attr("style")) {
        $(this).html("Trackchange Off");
      } else {
        $(this).html("Trackchange On");
      }
      mainconMenu.hide();
    });
    
    mainlistPoint3.on("click", function() {
      vidonePlay.click();
      if (vidonePlay.attr("style")) {
        $(this).html("Crossfade-Mode");
      } else {
        $(this).html("Standard-Playlist");
      }
      mainconMenu.hide();
    });
    
    mainlistPoint4.on("click", function() {
      vidplayLoop.click();
      if (vidonePlay.attr("style")) {
        $(this).html("Loop-Mode Off");
      } else {
        $(this).html("Loop");
      }
      mainconMenu.hide();
    });
    
    mainlistPoint5.on("click", function() {
      trZoomBtn.click();
      mainconMenu.hide();
    });
    
    mainlistPoint6.on("click", function() {
      vidaddTrackMultiBtn.click();
      mainconMenu.hide();
    });
    
    mainlistPoint7.on("click", function() {
      vidtrackListLoadBtn.click();
      mainconMenu.hide();
    });
    
    mainlistPoint8.on("click", function() {
      vidtrackSaveBtn.click();
      mainconMenu.hide();
    });
    
    mainlistPoint9.on("click", function() {
      mainfullScreen.click();
      if (mainfullScreen.attr("style")) {
        $(this).html("<img src='Symbole/fullscreenoff.png' style='width: 16px; height: 16px;'>&nbsp;Exit Fullscreen");
      } else {
        $(this).html("<img src='Symbole/fullscreen.png' style='width: 16px; height: 16px;'>&nbsp;Fullscreen");
      }
      mainconMenu.hide();
    });
    
    mainlistPoint10.on("click", function() {
      vidInfos();
      vidtrackInfoMod.animate({left: element.width()/2 - vidtrackInfoMod.width()/2 + "px", top: element.height()/2 - vidtrackInfoMod.height()/2 + "px"},1).show();
      mainconMenu.hide();
    });
    
    closeInfoBtn.on("click", function() {
      vidtrackInfoMod.hide();
    });
    
    $("#mainmenu li").on("mouseenter", function() {
      $(this).css("background","#009aff");
    });
    
    $("#mainmenu li").on("mouseleave", function() {
      $(this).css("background","none");
    });
    
    $("#mainmenu li").on("contextmenu", function(e) {
      $(this).click();
      return false;
    });
    
    var recmodBtn = $("<button class='toolbuttons9'>");
    recmodBtn.css({
      "border-color": "silver"
    }).html("<img src='Symbole/rec.png' style='width:18px; height: 18px; margin-right: 6px;'>Record").appendTo(bottomMain);
      
    var recMod = $("<div/>");
    recMod.css({
      "width": "1000px",
      "border": "4px outset white",
      "background": "#212121",
      "position": "absolute",
      "left": "20px",
      "top": "20px",
      "display": "none",
      "z-index": 1000
    }).appendTo(element);
    
    var recHead = $("<div/>");
    recHead.css({
      "width": "98%",
      "height": "auto",
      "background": "#151515",
      "font-weight": "bold",
	  "font-size": "20px",
	  "color": "white",
      "text-align": "left",
      "padding": "6px"
    }).text("Audio-Record").appendTo(recMod);
    
    var recClose = $("<button class='closeBtn' style='margin-bottom:6px;'>X</button>");
    recClose.appendTo(recHead);
    
    var recNavi = $("<ul/>");
    recNavi.css({
      "background": "#212121",
      "list-style": "none",
      "margin": "1px",
      "padding": "1px",
      "text-align": "left",
      "width": "98%",
      "height": "25px"
    }).appendTo(recMod);
    
    var recTab = $("<li/>");
    recTab.css({
      "font-size": "20px",
      "font-weight": "bold",
      "color": "white",
      "background": "#363636",
      "float": "left",
      "width": "200px",
      "height": "25px",
      "cursor": "pointer"
    }).text("FX-Record").appendTo(recNavi);
    
    var vidrecTab = $("<li/>");
    vidrecTab.css({
      "font-size": "20px",
      "font-weight": "bold",
      "color": "white",
      "background": "#363636",
      "float": "left",
      "width": "200px",
      "height": "25px",
      "cursor": "pointer",
      "margin-left": "6px"
    }).text("Screen-Record").appendTo(recNavi);
    
    var recMain = $("<div/>");
    recMain.css({
      "width": "98%",
      "height": "550px",
    }).appendTo(recMod);
    
    var recArea = $("<div/>");
    recArea.css({
      "background": "#151515",
      "width": "100%",
      "height": "60px",
   }).appendTo(recMain);
    
    var recPlayer = $("<audio id='recplayer2'></audio>");
    recPlayer.appendTo(recArea);
    
    var recplayArea = $("<div/>");
    recplayArea.css({
      "width": "600px",
      "height": "50px",
      "display": "flex",
      "flex-direction": "row",
      "background": "#212121",
      "border": "1px solid rgba(255, 255, 255, 0.8)",
      "padding-top": "8px"
    }).appendTo(recArea);
    
    var recplayBtn = $("<button class='toolbuttons2'>&#9654;</button>");
    recplayBtn.appendTo(recplayArea);
    
    var rectimeBox = $("<div/>");
    rectimeBox.css({
      "width": "420px",
      "height": "35px",
      "background": "#262626",
      "margin-left": "6px",
      "text-align": "left"
    }).appendTo(recplayArea);
    
    var recProgress = $("<div/>");
    recProgress.css({
      "width": "100%",
      "height": "12px",
      "background": "yellow",
      "margin-top": "12px"
    }).appendTo(rectimeBox);
    
    var recplayTime = $("<div/>");
    recplayTime.css({
      "width": "100px",
      "height": "30px",
      "background": "#262626",
      "margin-left": "6px",
      "font-size": "16px",
      "font-weight": "bold",
      "color": "white",
      "padding-top": "6px"
    }).text("00:00").appendTo(recplayArea);

    
    var saveRecName = $("<div/>");
    saveRecName.css({
      "background": "#000029",
      "width": "100%",
      "height": "50px"
    }).appendTo(recMain);
    
    var recSaveTxt = $("<input id='recfilename2'/>");
    recSaveTxt.css({
      "background": "#212121",
      "width": "400px",
      "height": "40px",
      "font-weight": "bold",
      "font-size": "20px",
      "color": "white",
      "border-radius": "6px"
    }).appendTo(saveRecName);
    
    var reclistArea = $("<div/>");
    reclistArea.css({
      "background": "#303030",
      "width": "100%",
      "height": "450px",
      "overflow": "auto"
    }).appendTo(recMain);
    
    var recordingsList = $("<ul id='recordingsList2'></ul>");
    recordingsList.css({
      "padding": "1px",
      "margin": "1px",
      "font-size": "20px",
      "font-weight": "bold",
      "list-style": "none",
      "cursor": "pointer",
      "text-align": "left"
    }).appendTo(reclistArea);
    
    var recFoot = $("<div/>");
    recFoot.css({
      "width": "98%",
      "height": "auto",
      "background": "#151515",
      "font-weight": "bold",
	  "font-size": "20px",
	  "color": "white",
      "text-align": "center",
      "padding": "6px"
    }).appendTo(recMod);
    
    var recStart = $("<button class='toolbuttons9'></button>");
    recStart.css({
      "background": "#212121",
      "border-color": "silver"
     }).text("Start Record").appendTo(recFoot);
          
    var recordButton = $("<button class='toolbuttons9'>");
    recordButton.css({
      "background": "#002900",
      "border-color": "silver"
     }).html("<img src='Symbole/rec.png' style='width:18px; height: 18px; margin-right: 6px;'>Record").appendTo(recFoot);
          
    var stopButton = $("<button class='toolbuttons9'></button>");
    stopButton.css({
      "background": "#212121",
      "border-color": "silver"
    }).text("Stop Record").appendTo(recFoot);
    
    var recClose2 = $("<button class='toolbuttons9'></button>");
    recClose2.css({
      "background": "#212121",
      "border-color": "silver"
    }).text("Close").appendTo(recFoot);
    
    recmodBtn.on("click", function() {
      recMod.animate({left: element.width()/2 - recMod.width()/2 + "px", top: element.height()/2 - recMod.height()/2 + "px"},1).show();
    });
    
    vidrecBtn1.on("click", function() {
      recMod.animate({left: element.width()/2 - recMod.width()/2 + "px", top: element.height()/2 - recMod.height()/2 + "px"},1).show();
    });
    
    vidrecBtn2.on("click", function() {
      recMod.animate({left: element.width()/2 - recMod.width()/2 + "px", top: element.height()/2 - recMod.height()/2 + "px"},1).show();
    });
    
    recClose.on("click", function() {
      recMod.hide();
    });
    
    recClose2.on("click", function() {
      recMod.hide();
    });
    
    var recorder2, vidrecorder2;
    
    recStart.on('click',function() {
	// get audio stream from user's mic
	  navigator.mediaDevices.getUserMedia({
	   audio: true
	  	})
		.then(function (stream2) {
	    recordButton.removeAttr("disabled");
	    recordButton.on('click', startRecording);
	    stopButton.on('click', stopRecording);
	    recorder2 = new MediaRecorder(stream2);

	// listen to dataavailable, which gets triggered whenever we have
    // an audio blob available
		recorder2.addEventListener('dataavailable', onRecordingReady);
			});
		});


	function startRecording() {
	  recordButton.attr("disabled", "disabled").css({
        "background": "linear-gradient(to right, green, lime, green)",
        "border-style": "inset",
        "border-color": "lime"
      });
	  stopButton.removeAttr("disabled");
	  recorder2.start();
	}

	function stopRecording() {
	  recordButton.removeAttr("disabled").css({
        "background": "#002900",
        "border-style": "outset",
        "border-color": "silver"
      });
	  stopButton.attr("disabled", "disabled");

	  // Stopping the recorder will eventually trigger the `dataavailable` event and we can complete the recording process
	  recorder2.stop();
	}

	function onRecordingReady(e) {
	  var audio = document.getElementById('recplayer2');
	  var li = document.createElement('li');
	  var link = document.createElement('a');
	  var recordfile = document.getElementById('recfilename2').value;
          

	  // e.data contains a blob representing the recording
	  audio.src = URL.createObjectURL(e.data);
	  audio.play();
      link.href = audio.src;
      link.download = recordfile + "." + "ogg";
      link.innerHTML = link.download;
      li.appendChild(link);
	  recordingsList.append(li);
	}
    
    recStart.on("mousedown touchstart", function() {
      $(this).css({
        "background": "linear-gradient(to right, grey, silver, grey)",
        "border-style": "inset",
        "border-color": "white"
      });
    });
    
    recStart.on("mouseup mouseleave touchend", function() {
      $(this).css({
        "background": "#212121",
        "border-style": "outset",
        "border-color": "silver"
      });
    });
    
    stopButton.on("mousedown touchstart", function() {
      $(this).css({
        "background": "linear-gradient(to right, grey, silver, grey)",
        "border-style": "inset",
        "border-color": "white"
      });
    });
    
    stopButton.on("mouseup mouseleave touchend", function() {
      $(this).css({
        "background": "#212121",
        "border-style": "outset",
        "border-color": "silver"
      });
    });
    
    recClose2.on("mousedown touchstart", function() {
      $(this).css({
        "background": "linear-gradient(to right, grey, silver, grey)",
        "border-style": "inset",
        "border-color": "white"
      });
    });
    
    recClose2.on("mouseup mouseleave touchend", function() {
      $(this).css({
        "background": "#212121",
        "border-style": "outset",
        "border-color": "silver"
      });
    });
    
    recmodBtn.on("mousedown touchstart", function() {
      $(this).css({
        "background": "linear-gradient(to right, darkred, red, darkred)",
        "border-style": "inset",
        "border-color": "white"
      });
    });
    
    recmodBtn.on("mouseup mouseleave touchend", function() {
      $(this).css({
        "background": "#290000",
        "border-style": "outset",
        "border-color": "silver"
      });
    });
    
    function setRectime() {
      var rectimeFull = recPlayer.prop("duration");
      var rectimeStamp = recPlayer.prop("currentTime");
      var rectimeDelta = rectimeFull-rectimeStamp;
      var recMin = parseInt(rectimeDelta/60 % 60);
      var recSec = parseInt(rectimeDelta % 60);
      recMin = (recMin < 10 ? "0"+recMin : recMin);
      recSec = (recSec < 10 ? "0"+recSec : recSec);
      recplayTime.text(recMin + ":" + recSec);
      recProgress.css("width",rectimeStamp/rectimeFull*100 + "%");
    }
    
    recPlayer.on("timeupdate durationchange", setRectime);
    
    recPlayer.on("playing", function() {
      recplayBtn.css({
        "background": "linear-gradient(to right, green, lime, green)",
        "border-style": "inset",
        "border-color": "lime"
      });
    });
    
    recPlayer.on("pause", function() {
      recplayBtn.removeAttr("style");
    });
    
    recplayBtn.on("click", function() {
      if (recPlayer.prop("duration") > 0) {
        if (!$(this).attr("style")) {
        recPlayer.trigger("play");
        $(this).css({
          "background": "linear-gradient(to right, green, lime, green)",
          "border-style": "inset",
          "border-color": "lime"
        	});
      	} else {
          $(this).removeAttr("style");
          recPlayer.trigger("pause");
        }
      }
    });
    
    var trackinfoBtn = $("<button class='toolbuttons12'>");
    trackinfoBtn.css({
      "border-color": "silver"
    }).html("<img src='Symbole/info.png' style='width:18px; height: 18px; margin-right: 6px;'>Info").appendTo(bottomMain);
    
    trackinfoBtn.on("click", function() {
      vidInfos();
      vidtrackInfoMod.animate({left: element.width()/2 - vidtrackInfoMod.width()/2 + "px", top: element.height()/2 - vidtrackInfoMod.height()/2 + "px"},1).show();
    });
    
    trackinfoBtn.on("mousedown touchstart", function() {
      $(this).css({
        "background": "linear-gradient(to right, #363600, yellow, #363600)",
        "border-style": "inset",
        "border-color": "white"
      });
    });
    
    trackinfoBtn.on("mouseup mouseleave touchend", function() {
      $(this).css({
        "background": "#292900",
        "border-style": "outset",
        "border-color": "silver"
      });
    });
    
    var vidrecMain = $("<div/>");
    vidrecMain.css({
      "width": "98%",
      "height": "550px",
      "display": "none"
    }).appendTo(recMod);
    
    var vidrecArea = $("<div/>");
    vidrecArea.css({
	  "background": "#212121",
      "width": "100%",
      "height": "300px"
    }).appendTo(vidrecMain);
        
    var vidrecPlayer = $("<video id='vidrecplayer2' controls style='width:400px; height:300px;'></video>");
    vidrecPlayer.appendTo(vidrecArea);
    
    var vidsaveRecName = $("<div/>");
    vidsaveRecName.css({
      "background": "#000029",
      "width": "100%",
      "height": "50px"
    }).appendTo(vidrecMain);
    
    var vidrecSaveTxt = $("<input id='vidrecfilename2'/>");
    vidrecSaveTxt.css({
	  "background": "#212121",
      "width": "400px",
      "height": "40px",
      "font-weight": "bold",
      "font-size": "20px",
      "color": "white",
      "border-radius": "6px"
    }).appendTo(vidsaveRecName);
    
    var vidrecSaveExt = $("<select id='vidrecExt2'><option value='webm'>WEBM</option><option value='mp4'>MP4</option><option value='mp3'>MP3</option></select>");
    vidrecSaveExt.css({
	  "background": "#212121",
      "width": "100px",
      "height": "40px",
      "font-weight": "bold",
      "font-size": "20px",
      "color": "white",
      "border-radius": "6px",
      "margin-left": "6px"
    }).appendTo(vidsaveRecName);
    
    var vidreclistArea = $("<div/>");
    vidreclistArea.css({
      "background": "#292929",
      "width": "100%",
      "height": "200px",
      "overflow": "auto",
    }).appendTo(vidrecMain);
    
    var vidrecordingsList = $("<ul id='vidrecordingsList2'></ul>");
	vidrecordingsList.css({
	  "padding": "1px",
	  "margin": "1px",
	  "font-size": "20px",
	  "font-weight": "bold",
	  "list-style": "none",
	  "cursor": "pointer",
	  "text-align": "left"
	}).appendTo(vidreclistArea);
    
    var vidrecFoot = $("<div/>");
    vidrecFoot.css({
      "background": "#151515",
      "width": "100%",
      "height": "50px",
      "display": "none"
    }).appendTo(recMod);
    
    var vidrecStart = $("<button class='toolbuttons9'></button>");
    vidrecStart.css({
	  "background": "#212121",
	  "border-color": "silver"
	}).text("Start Record").appendTo(vidrecFoot);
          
	var vidrecordButton = $("<button class='toolbuttons9'>");
	vidrecordButton.css({
	  "background": "#002900",
	  "border-color": "silver"
	}).html("<img src='Symbole/rec.png' style='width:18px; height: 18px; margin-right: 6px;'>Record").appendTo(vidrecFoot);
          
	var vidstopButton = $("<button class='toolbuttons9'></button>");
	vidstopButton.css({
	  "background": "#212121",
	  "border-color": "silver"
	}).text("Stop Record").appendTo(vidrecFoot);
    
    var vidcloseButton = $("<button class='toolbuttons9'></button>");
	vidcloseButton.css({
	  "background": "#212121",
	  "border-color": "silver"
	}).text("Close").appendTo(vidrecFoot);
    
    vidrecTab.on("click", function() {
      recMain.hide();
      recFoot.hide();
      vidrecMain.show();
      vidrecFoot.show();
      $(this).css({
        "background": "#00baff",
        "outline": "4px solid red"
      });
      recTab.css({
        "background": "#363636",
        "outline": "none"
      });
    });
    
    recTab.on("click", function() {
      vidrecMain.hide();
      vidrecFoot.hide();
      recMain.show();
      recFoot.show();
      $(this).css({
        "background": "#00baff",
        "outline": "4px solid red"
      });
      vidrecTab.css({
        "background": "#363636",
        "outline": "none"
      });
    });
  
  var recordTimer;
    
    vidcloseButton.on("click", function() {
      recMod.hide();
    });
    
     vidrecStart.on('click',function() {
			// get audio stream from user's mic
	  		navigator.mediaDevices.getDisplayMedia({
	    	  audio: true,
              video: true,
		  	  selfBrowserSurface: "include"
	  		})
			.then(function (vidstream2) {
	    	vidrecordButton.removeAttr("disabled");
	    	vidrecordButton.on('click', vidstartRecording);
	    	vidstopButton.on('click', vidstopRecording);
	    	vidrecorder2 = new MediaRecorder(vidstream2);

			// listen to dataavailable, which gets triggered whenever we have
	    // an audio blob available
		  	vidrecorder2.addEventListener('dataavailable', vidonRecordingReady);
			});
		});


	function vidstartRecording() {
	  vidrecordButton.attr("disabled", "disabled").css({
        "background": "linear-gradient(to right, green, lime, green)",
        "border-style": "inset",
        "border-color": "lime"
      });
	  vidstopButton.removeAttr("disabled");
      vidrecStart.attr("disabled", "disabled");
      recmodBtn.css({
        "background": "linear-gradient(to right, darkred, red, darkred)",
        "border-style": "inset",
        "border-color": "red"
      });
      vidrecBtn1.css({
        "background": "linear-gradient(to right, darkred, red, darkred)",
        "border-style": "inset",
        "border-color": "red"
      });
      vidrecBtn2.css({
        "background": "linear-gradient(to right, darkred, red, darkred)",
        "border-style": "inset",
        "border-color": "red"
      });
      recMod.hide();
	  vidrecorder2.start();
      recordTimer = setTimeout(function() {
        recMod.show();
        vidstopRecording();
      },900000);
	}

	function vidstopRecording() {
	  vidrecordButton.removeAttr("disabled").css({
        "background": "#002900",
        "border-style": "outset",
        "border-color": "silver"
      });
      recmodBtn.css({
        "background": "#290000",
        "border-style": "outset",
        "border-color": "#290000"
      });
      vidrecBtn1.css({
        "background": "#290000",
        "border-style": "outset",
        "border-color": "#290000"
      });
      vidrecBtn2.css({
        "background": "#290000",
        "border-style": "outset",
        "border-color": "#290000"
      });
	  vidstopButton.attr("disabled", "disabled");
      vidrecStart.removeAttr("disabled");

	  // Stopping the recorder will eventually trigger the `dataavailable` event and we can complete the recording process
	  vidrecorder2.stop();
      clearInterval(recordTimer);
	}

	function vidonRecordingReady(e) {
	  var video = document.getElementById('vidrecplayer2');
	  var vidli = document.createElement('li');
	  var vidlink = document.createElement('a');
	  var vidrecordfile = document.getElementById('vidrecfilename2').value;
      var vidrecordExt = document.getElementById('vidrecExt2').value;
          

	  // e.data contains a blob representing the recording
	  video.src = URL.createObjectURL(e.data);
	  video.play();
          vidlink.href = video.src;
          vidlink.download = vidrecordfile + "." + vidrecordExt;
    	  vidlink.innerHTML = vidlink.download;
          vidli.appendChild(vidlink);
	   	  vidrecordingsList.append(vidli);
	}
    
    vidrecStart.on("mousedown", function() {
      $(this).css({
        "background": "linear-gradient(to right, grey, silver, grey)",
        "border-style": "inset",
        "border-color": "white"
      });
    });
    
    vidrecStart.on("mouseup mouseleave", function() {
      $(this).css({
        "background": "#212121",
        "border-style": "outset",
        "border-color": "silver"
      });
    });
    
    vidstopButton.on("mousedown", function() {
      $(this).css({
        "background": "linear-gradient(to right, grey, silver, grey)",
        "border-style": "inset",
        "border-color": "white"
      });
    });
    
    vidstopButton.on("mouseup mouseleave", function() {
      $(this).css({
        "background": "#212121",
        "border-style": "outset",
        "border-color": "silver"
      });
    });
    
    vidcloseButton.on("mousedown", function() {
      $(this).css({
        "background": "linear-gradient(to right, grey, silver, grey)",
        "border-style": "inset",
        "border-color": "white"
      });
    });
    
    vidcloseButton.on("mouseup mouseleave", function() {
      $(this).css({
        "background": "#212121",
        "border-style": "outset",
        "border-color": "silver"
      });
    });
  
  blurfilter1.on("mouseenter", function() {
      vidinfoBox.text("Blur: ");
    });
    
    blurfilter1.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = vidinfoBox.width();
      var infoPos = infoWidth/2;
    
      vidinfoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
      vidinfoBox.text("Blur: "+ $(this).val() + "px");
      $(this).trigger("change");
    });
    
    blurfilter1.on("mouseleave", function() {
      vidinfoBox.hide();
    });
  
  blurfilter2.on("mouseenter", function() {
      vidinfoBox.text("Blur: ");
    });
  
  blurfilter2.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = vidinfoBox.width();
      var infoPos = infoWidth/2;
    
      vidinfoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
      vidinfoBox.text("Blur: "+ $(this).val() + "px");
      $(this).trigger("change");
    });
    
    blurfilter2.on("mouseleave", function() {
      vidinfoBox.hide();
    });
  
  brightfilter1.on("mouseenter", function() {
      vidinfoBox.text("Brightness: ");
    });
    
    brightfilter1.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = vidinfoBox.width();
      var infoPos = infoWidth/2;
    
      vidinfoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
      vidinfoBox.text("Brightness: "+ $(this).val() + "%");
      $(this).trigger("change");
    });
    
    brightfilter1.on("mouseleave", function() {
      vidinfoBox.hide();
    });
  
  brightfilter2.on("mouseenter", function() {
      vidinfoBox.text("Brightness: ");
    });
  
  brightfilter2.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = vidinfoBox.width();
      var infoPos = infoWidth/2;
    
      vidinfoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
      vidinfoBox.text("Brightness: "+ $(this).val() + "%");
      $(this).trigger("change");
    });
    
    brightfilter2.on("mouseleave", function() {
      vidinfoBox.hide();
    });
  
  contrastfilter1.on("mouseenter", function() {
      vidinfoBox.text("Contrast: ");
    });
    
    contrastfilter1.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = vidinfoBox.width();
      var infoPos = infoWidth/2;
    
      vidinfoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
      vidinfoBox.text("Contrast: "+ $(this).val() + "%");
      $(this).trigger("change");
    });
    
    contrastfilter1.on("mouseleave", function() {
      vidinfoBox.hide();
    });
  
  contrastfilter2.on("mouseenter", function() {
      vidinfoBox.text("Contrast: ");
    });
  
  contrastfilter2.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = vidinfoBox.width();
      var infoPos = infoWidth/2;
    
      vidinfoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
      vidinfoBox.text("Contrast: "+ $(this).val() + "%");
      $(this).trigger("change");
    });
    
    contrastfilter2.on("mouseleave", function() {
      vidinfoBox.hide();
    });
  
  huefilter1.on("mouseenter", function() {
      vidinfoBox.text("Color-Rotation: ");
    });
    
    huefilter1.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = vidinfoBox.width();
      var infoPos = infoWidth/2;
    
      vidinfoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
      vidinfoBox.text("Color-Rotation: "+ $(this).val() + "deg");
      $(this).trigger("change");
    });
    
    huefilter1.on("mouseleave", function() {
      vidinfoBox.hide();
    });
  
  huefilter2.on("mouseenter", function() {
      vidinfoBox.text("Color-Rotation: ");
    });
  
  huefilter2.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = vidinfoBox.width();
      var infoPos = infoWidth/2;
    
      vidinfoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
      vidinfoBox.text("Color-Rotation: "+ $(this).val() + "deg");
      $(this).trigger("change");
    });
    
    huefilter2.on("mouseleave", function() {
      vidinfoBox.hide();
    });
  
  grayfilter1.on("mouseenter", function() {
      vidinfoBox.text("Grayscale: ");
    });
    
    grayfilter1.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = vidinfoBox.width();
      var infoPos = infoWidth/2;
    
      vidinfoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
      vidinfoBox.text("Grayscale: "+ $(this).val() + "%");
      $(this).trigger("change");
    });
    
    grayfilter1.on("mouseleave", function() {
      vidinfoBox.hide();
    });
  
  grayfilter2.on("mouseenter", function() {
      vidinfoBox.text("Grayscale: ");
    });
  
  grayfilter2.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = vidinfoBox.width();
      var infoPos = infoWidth/2;
    
      vidinfoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
      vidinfoBox.text("Grayscale: "+ $(this).val() + "%");
      $(this).trigger("change");
    });
    
    grayfilter2.on("mouseleave", function() {
      vidinfoBox.hide();
    });
  
  invertfilter1.on("mouseenter", function() {
      vidinfoBox.text("Invert: ");
    });
    
    invertfilter1.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = vidinfoBox.width();
      var infoPos = infoWidth/2;
    
      vidinfoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
      vidinfoBox.text("Invert: "+ $(this).val() + "%");
      $(this).trigger("change");
    });
    
    invertfilter1.on("mouseleave", function() {
      vidinfoBox.hide();
    });
  
  invertfilter2.on("mouseenter", function() {
      vidinfoBox.text("Invert: ");
    });
  
  invertfilter2.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = vidinfoBox.width();
      var infoPos = infoWidth/2;
    
      vidinfoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
      vidinfoBox.text("Invert: "+ $(this).val() + "%");
      $(this).trigger("change");
    });
    
    invertfilter2.on("mouseleave", function() {
      vidinfoBox.hide();
    });
  
  opacityfilter1.on("mouseenter", function() {
      vidinfoBox.text("Opacity: ");
    });
    
    opacityfilter1.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = vidinfoBox.width();
      var infoPos = infoWidth/2;
    
      vidinfoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
      vidinfoBox.text("Opacity: "+ $(this).val()*100 + "%");
      $(this).trigger("change");
    });
    
    opacityfilter1.on("mouseleave", function() {
      vidinfoBox.hide();
    });
  
  opacityfilter2.on("mouseenter", function() {
      vidinfoBox.text("Opacity: ");
    });
  
  opacityfilter2.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = vidinfoBox.width();
      var infoPos = infoWidth/2;
    
      vidinfoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
      vidinfoBox.text("Invert: "+ $(this).val()*100 + "%");
      $(this).trigger("change");
    });
    
    opacityfilter2.on("mouseleave", function() {
      vidinfoBox.hide();
    });
  
  sepiafilter1.on("mouseenter", function() {
      vidinfoBox.text("Sepia: ");
    });
    
    sepiafilter1.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = vidinfoBox.width();
      var infoPos = infoWidth/2;
    
      vidinfoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
      vidinfoBox.text("Sepia: "+ $(this).val() + "%");
      $(this).trigger("change");
    });
    
    sepiafilter1.on("mouseleave", function() {
      vidinfoBox.hide();
    });
  
  sepiafilter2.on("mouseenter", function() {
      vidinfoBox.text("Sepia: ");
    });
  
  sepiafilter2.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = vidinfoBox.width();
      var infoPos = infoWidth/2;
    
      vidinfoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
      vidinfoBox.text("Sepia: "+ $(this).val() + "%");
      $(this).trigger("change");
    });
    
    sepiafilter2.on("mouseleave", function() {
      vidinfoBox.hide();
    });
  
	satfilter1.on("mouseenter", function() {
      vidinfoBox.text("Saturate: ");
    });
    
    satfilter1.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = vidinfoBox.width();
      var infoPos = infoWidth/2;
    
      vidinfoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
      vidinfoBox.text("Saturate: "+ $(this).val() + "%");
      $(this).trigger("change");
    });
    
    satfilter1.on("mouseleave", function() {
      vidinfoBox.hide();
    });
  
  satfilter2.on("mouseenter", function() {
      vidinfoBox.text("Saturate: ");
    });
  
  satfilter2.on("mousemove", function(e) {
      var xPos = e.pageX;
      var yPos = e.pageY;
      var infoWidth = vidinfoBox.width();
      var infoPos = infoWidth/2;
    
      vidinfoBox.animate({left: xPos - infoPos, top: yPos - 60},6).show();
      vidinfoBox.text("Saturate: "+ $(this).val() + "%");
      $(this).trigger("change");
    });
    
    satfilter2.on("mouseleave", function() {
      vidinfoBox.hide();
    });  
  
  function setFilters1() {
    var blur = blurfilter1.val();
    var bright = brightfilter1.val();
    var contrast = contrastfilter1.val();
    var colrotate = huefilter1.val();
    var grayscale = grayfilter1.val();
    var invert = invertfilter1.val();
    var opacit = opacityfilter1.val()*100;
    var sepia = sepiafilter1.val();
    var sat = satfilter1.val();
    vidplayer1.css("filter", "blur("+blur+"px) brightness("+bright+"%) contrast("+contrast+"%) hue-rotate("+colrotate+"deg) grayscale("+grayscale+"%) invert("+invert+"%) opacity("+opacit+"%) sepia("+sepia+"%) saturate("+sat+"%)");
    miniPlayer1.css("filter", "blur("+blur+"px) brightness("+bright+"%) contrast("+contrast+"%) hue-rotate("+colrotate+"deg) grayscale("+grayscale+"%) invert("+invert+"%) opacity("+opacit+"%) sepia("+sepia+"%) saturate("+sat+"%)");
  }
  
  blurfilter1.on("change", setFilters1);
  brightfilter1.on("change", setFilters1);
  contrastfilter1.on("change", setFilters1);
  huefilter1.on("change", setFilters1);
  grayfilter1.on("change", setFilters1);
  invertfilter1.on("change", setFilters1);
  opacityfilter1.on("change", setFilters1);
  sepiafilter1.on("change", setFilters1);
  satfilter1.on("change", setFilters1);
  
  function setFilters2() {
    var blur2 = blurfilter2.val();
    var bright2 = brightfilter2.val();
    var contrast2 = contrastfilter2.val();
    var colrotate2 = huefilter2.val();
    var grayscale2 = grayfilter2.val();
    var invert2 = invertfilter2.val();
    var opacit2 = opacityfilter2.val()*100;
    var sepia2 = sepiafilter2.val();
    var sat2 = satfilter2.val();
    vidplayer2.css("filter", "blur("+blur2+"px) brightness("+bright2+"%) contrast("+contrast2+"%) hue-rotate("+colrotate2+"deg) grayscale("+grayscale2+"%) invert("+invert2+"%) opacity("+opacit2+"%) sepia("+sepia2+"%) saturate("+sat2+"%)");
    miniPlayer2.css("filter", "blur("+blur2+"px) brightness("+bright2+"%) contrast("+contrast2+"%) hue-rotate("+colrotate2+"deg) grayscale("+grayscale2+"%) invert("+invert2+"%) opacity("+opacit2+"%) sepia("+sepia2+"%) saturate("+sat2+"%)");
  }
  
  blurfilter1.on("change", setFilters1);
  brightfilter1.on("change", setFilters1);
  contrastfilter1.on("change", setFilters1);
  huefilter1.on("change", setFilters1);
  grayfilter1.on("change", setFilters1);
  invertfilter1.on("change", setFilters1);
  opacityfilter1.on("change", setFilters1);
  sepiafilter1.on("change", setFilters1);
  satfilter1.on("change", setFilters1);
  
  blurfilter2.on("change", setFilters2);
  brightfilter2.on("change", setFilters2);
  contrastfilter2.on("change", setFilters2);
  huefilter2.on("change", setFilters2);
  grayfilter2.on("change", setFilters2);
  invertfilter2.on("change", setFilters2);
  opacityfilter2.on("change", setFilters2);
  sepiafilter2.on("change", setFilters2);
  satfilter2.on("change", setFilters2);
  
  resetBtn1.on("click", function() {
    blurfilter1.val(0);
  	brightfilter1.val(100);
  	contrastfilter1.val(100);
  	huefilter1.val(0);
  	grayfilter1.val(0);
  	invertfilter1.val(0);
  	opacityfilter1.val(1);
  	sepiafilter1.val(0);
  	satfilter1.val(100);
    vidplayer1.css("filter", "none");
    miniPlayer1.css("filter", "none");
  });
  
  resetBtn2.on("click", function() {
    blurfilter2.val(0);
  	brightfilter2.val(100);
  	contrastfilter2.val(100);
  	huefilter2.val(0);
  	grayfilter2.val(0);
  	invertfilter2.val(0);
  	opacityfilter2.val(1);
  	sepiafilter2.val(0);
  	satfilter2.val(100);
    vidplayer2.css("filter", "none");
    miniPlayer2.css("filter", "none");
  });
  
  resetBtn1.on("mousedown touchstart", function() {
      $(this).css({
        "background": "linear-gradient(to right, #363636, yellow, #363600)",
        "border-style": "inset",
        "border-color": "yellow"
      });
    });
    
    resetBtn1.on("mouseup mouseleave touchend", function() {
      $(this).css({
        "background": "#292900",
        "border-style": "outset",
        "border-color": "#292900"
      });
    });
  
  resetBtn2.on("mousedown touchstart", function() {
      $(this).css({
        "background": "linear-gradient(to right, #363636, yellow, #363600)",
        "border-style": "inset",
        "border-color": "yellow"
      });
    });
    
    resetBtn2.on("mouseup mouseleave touchend", function() {
      $(this).css({
        "background": "#292900",
        "border-style": "outset",
        "border-color": "#292900"
      });
    });
  
  filtermix.on("mousedown touchstart", function() {
      $(this).css({
        "background": "linear-gradient(to right, #363636, yellow, #363600)",
        "border-style": "inset",
        "border-color": "yellow"
      });
    });
    
    filtermix.on("mouseup mouseleave touchend", function() {
      $(this).css({
        "background": "#292900",
        "border-style": "outset",
        "border-color": "#292900"
      });
    });
  
    ratioBtn1.on("mousedown touchstart", function() {
      $(this).css({
        "background": "linear-gradient(to right, #363636, yellow, #363600)",
        "border-style": "inset",
        "border-color": "yellow"
      });
    });
    
    ratioBtn1.on("mouseup mouseleave touchend", function() {
      $(this).css({
        "background": "#292900",
        "border-style": "outset",
        "border-color": "#292900"
      });
    });
  
    ratioBtn2.on("mousedown touchstart", function() {
      $(this).css({
        "background": "linear-gradient(to right, #363636, yellow, #363600)",
        "border-style": "inset",
        "border-color": "yellow"
      });
    });
    
    ratioBtn2.on("mouseup mouseleave touchend", function() {
      $(this).css({
        "background": "#292900",
        "border-style": "outset",
        "border-color": "#292900"
      });
    });
  
    galleryBtn1.on("click", function() {
      setGallery();
      gallery.show();
    });
  
    galleryBtn2.on("click", function() {
      setGallery();
      gallery.show();
    });
  
    galleryBtn1.on("mousedown touchstart", function() {
      $(this).css({
        "background": "linear-gradient(to right, green, lime, green)",
        "border-style": "inset",
        "border-color": "lime"
      });
    });
    
    galleryBtn1.on("mouseup mouseleave touchend", function() {
      $(this).css({
        "background": "#002900",
        "border-style": "outset",
        "border-color": "#002900"
      });
    });
  
    galleryBtn2.on("mousedown touchstart", function() {
      $(this).css({
        "background": "linear-gradient(to right, green, lime, green)",
        "border-style": "inset",
        "border-color": "lime"
      });
    });
    
    galleryBtn2.on("mouseup mouseleave touchend", function() {
      $(this).css({
        "background": "#002900",
        "border-style": "outset",
        "border-color": "#002900"
      });
    });
  
    var playModeBtn1 = $("<button class='toolbuttons13'>Videolist Forward</button>");
    playModeBtn1.appendTo(trackToolbar2);
  
    var playModeBtn2 = $("<button class='toolbuttons13'>Videolist Reverse</button>");
    playModeBtn2.appendTo(trackToolbar2);
  
    var playModeBtn3 = $("<button class='toolbuttons13'>Videolist Random</button>");
    playModeBtn3.appendTo(trackToolbar2);
  
    playModeBtn1.on("click", function() {
      mode11.click();
    });
  
    playModeBtn2.on("click", function() {
      mode12.click();
    });
  
    playModeBtn3.on("click", function() {
      mode13.click();
    });
  
    
    function setPlaySettings() {
      if (vidsettings.autoplay === true && vidsettings.loop === false) {
        vidonePlay.click();
      } else if (vidsettings.autoplay === false && vidsettings.loop === true) {
        vidplayLoop.click();
      }
      
      if (vidsettings.crossfadeMode === "auto") {
        vidautoplayBtn.click();
      }
      
      if (vidsettings.trackChange === false) {
        vidtrackChangeBtn.click();
      }
    }
    
    setPlaySettings();
    
    
    function setAreaSize() {
      if (element.width() < 1600) {
        vidtitleBar.css({
          "height": "20px",
          "font-size": "16px"
        });
        
        vidplayerArea1.css("height", "300px");
        vidplayerArea2.css("height", "300px");
        vidTools1.css("height", "150px");
        
         crossfadeImg.css({
      	  "width": "130px",
      	  "height": "50px"
    	});
        
         vidfader1.css({
      	  "width": "160px",
      	  "height": "12px",
	  	  "margin-top": "4px"
    	});
        
         vidfader2.css({
      	  "width": "160px",
      	  "height": "12px",
	  	  "margin-top": "4px"
    	});
        
        vidcrossFadeMode.css({
      	 "width": "110px",
      	 "height": "30px",
         "font-size": "12px",
    	});
        
         vidcrossFadeTime.css({
      	  "width": "50px",
      	  "height": "20px",
          "font-size": "12px",
    	});
        
        vidEffectMode.css({
      	  "width": "170px",
      	  "height": "30px",
          "font-size": "12px",
    	});
        
        trackLibTxt.css({
      	  "height": "20px",
      	  "font-size": "12px",
      	  "margin-top": "2px",
    	});
        
        bgLibTxt.css({
      	  "height": "20px",
      	  "font-size": "12px",
      	  "margin-top": "2px",
    	});
        
        trackLib.css({
          "height": "170px",
    	});
        
        vidtrackLibList.css({
          "font-size": "14px",
    	});
        
        fxLib.css({
          "height": "170px",
    	});
        
        vidfxLibList.css({
          "font-size": "14px",
    	});
        
        toolbarArea.css({
      	  "height": "auto",
    	});
        
        trackToolbar.css({
      	  "height": "auto",
          "padding": "4px"
    	});
        
        fxToolbar.css({
      	  "height": "auto",
          "padding": "4px"
    	});
        
        trackToolbar2.css({
      	  "height": "auto",
          "padding": "4px"
    	});
        
        playerNumber.css({
          "width": "80px",
      	  "height": "35px",
      	  "font-size": "14px",
          "border-width": "2px",
      	  "margin-left": "6px"
    	});
        
        remainVideos.css({
      	  "height": "35px",
          "width": "45px",
      	  "font-size": "16px",
      	  "margin-left": "6px",
      	  "border-radius": "6px"
    	});
        
        vidtrackLoadBtn.css({
      	  "width": "130px",
      	  "height": "35px",
      	  "font-size": "16px",
      	  "margin-left": "6px",
      	  "border": "2px outset silver"
    	});
        
        vidtrackName.css({
      	  "width": "160px",
      	  "height": "35px",
      	  "font-size": "16px",
      	  "margin-left": "6px",
      	  "border": "2px outset silver"
    	});
        
        vidaddTrackBtn.css({
      	  "width": "35px",
          "height": "35px",
          "font-size": "16px",
          "margin-left": "6px",
      	  "border": "4px outset silver"
    	});
        
        vidaddTrackMultiBtn.css({
      	  "width": "35px",
          "height": "35px",
          "font-size": "16px",
          "margin-left": "6px",
      	  "border": "4px outset silver"
    	});
        
        vidtrackCountUpBtn.css({
      	  "width": "35px",
          "height": "35px",
          "font-size": "16px",
          "margin-left": "6px",
      	  "border": "4px outset silver"
    	});
        
        vidtrackCountDownBtn.css({
      	  "width": "35px",
          "height": "35px",
          "font-size": "16px",
          "margin-left": "6px",
      	  "border": "4px outset silver"
    	});
        
        vidtrackUpBtn.css({
      	  "width": "35px",
          "height": "35px",
          "font-size": "16px",
          "margin-left": "6px",
      	  "border": "4px outset silver"
    	});
        
        vidtrackDownBtn.css({
      	  "width": "35px",
          "height": "35px",
          "font-size": "16px",
          "margin-left": "6px",
      	  "border": "4px outset silver"
    	});
        
        vidtrackListLoadBtn.css({
      	  "width": "160px",
      	  "height": "35px",
      	  "font-size": "16px",
      	  "margin-left": "6px",
      	  "border": "4px outset silver"
    	});
        
        vidaddTrackListBtn.css({
      	  "width": "35px",
      	  "height": "35px",
      	  "font-size": "16px",
      	  "margin-left": "6px",
      	  "border": "4px outset silver"
    	});
        
        vidtrackDelBtn.css({
      	  "width": "35px",
          "height": "35px",
          "font-size": "16px",
          "margin-left": "6px",
      	  "border": "4px outset silver"
    	});
        
        vidtracklistDelBtn.css({
      	  "width": "35px",
          "height": "35px",
          "font-size": "16px",
          "margin-left": "6px",
      	  "border": "4px outset silver"
    	});
        
        vidtrackSaveTxt.css({
      	  "width": "290px",
      	  "height": "35px",
      	  "font-size": "16px",
      	  "margin-left": "6px",
      	  "border": "4px outset silver"
    	});
        
        vidtrackSaveBtn.css({
      	  "width": "160px",
      	  "height": "35px",
      	  "font-size": "16px",
      	  "margin-left": "6px",
      	  "border": "4px outset silver"
    	});
        
        fxLoadBtn.css({
      	  "width": "160px",
          "height": "35px",
          "font-size": "16px",
          "margin-left": "6px",
      	  "border": "4px outset silver"
    	});
        
        fxFileName.css({
      	  "width": "100px",
      	  "height": "35px",
      	  "font-size": "14px",
      	  "margin-left": "6px",
      	  "border": "4px outset silver"
    	});
        
        fxFileLabel.css({
      	  "width": "100px",
      	  "height": "35px",
      	  "font-size": "14px",
      	  "margin-left": "6px",
      	  "border": "4px outset silver"
    	});
        
        addFxBtn.css({
      	  "width": "35px",
          "height": "35px",
          "font-size": "16px",
          "margin-left": "6px",
      	  "border": "4px outset silver"
    	});
        
        playFxBtn.css({
      	  "width": "35px",
          "height": "35px",
          "font-size": "16px",
          "margin-left": "6px",
      	  "border": "4px outset silver"
    	});
        
        mixerBox.css({
      	  "height": "170px",
    	});
        
        mixerArea1.css({
      	  "height": "120px",
    	});
        
        mixerArea2.css({
      	  "height": "40px",
    	});
        
        filterrow1.css({
      	  "height": "35px",
      	  "padding-top": "2px",
    	});
        
        filterrow2.css({
      	  "height": "35px",
      	  "padding-top": "2px",
    	});
        
        filterrow3.css({
      	  "height": "35px",
      	  "padding-top": "2px",
    	});
        
        filterrow4.css({
      	  "height": "35px",
      	  "padding-top": "2px",
    	});
        
        filterrow5.css({
      	  "height": "35px",
      	  "padding-top": "2px",
    	});
        
        filterrow6.css({
      	  "height": "35px",
      	  "padding-top": "2px",
    	});
        
        blurtxt1.css({
      	  "height": "35px",
      	  "font-size": "16px",
      	  "padding-top": "2px",
	  	  "font-family": "arial"
    	});
        
        blurtxt2.css({
      	  "height": "35px",
      	  "font-size": "16px",
      	  "padding-top": "2px",
	  	  "font-family": "arial"
    	});

        brighttxt1.css({
      	  "height": "35px",
      	  "font-size": "16px",
      	  "padding-top": "2px",
	  	  "font-family": "arial"
    	});
        
        brighttxt2.css({
      	  "height": "35px",
      	  "font-size": "16px",
      	  "padding-top": "2px",
	  	  "font-family": "arial"
    	});
        
        contrasttxt1.css({
      	  "height": "35px",
      	  "font-size": "16px",
      	  "padding-top": "2px",
	  	  "font-family": "arial"
    	});
        
        contrasttxt2.css({
      	  "height": "35px",
      	  "font-size": "16px",
      	  "padding-top": "2px",
	  	  "font-family": "arial"
    	});
        
        contrasttxt1.css({
      	  "height": "35px",
      	  "font-size": "16px",
      	  "padding-top": "2px",
	  	  "font-family": "arial"
    	});
        
        huetxt1.css({
      	  "height": "35px",
      	  "font-size": "16px",
      	  "padding-top": "2px",
	  	  "font-family": "arial"
    	});
        
        huetxt2.css({
      	  "height": "35px",
      	  "font-size": "16px",
      	  "padding-top": "2px",
	  	  "font-family": "arial"
    	});
        
        graytxt1.css({
      	  "height": "35px",
      	  "font-size": "16px",
      	  "padding-top": "2px",
	  	  "font-family": "arial"
    	});
        
        graytxt2.css({
      	  "height": "35px",
      	  "font-size": "16px",
      	  "padding-top": "2px",
	  	  "font-family": "arial"
    	});
        
        inverttxt1.css({
      	  "height": "35px",
      	  "font-size": "16px",
      	  "padding-top": "2px",
	  	  "font-family": "arial"
    	});
        
        inverttxt2.css({
      	  "height": "35px",
      	  "font-size": "16px",
      	  "padding-top": "2px",
	  	  "font-family": "arial"
    	});
        
        opacitytxt1.css({
      	  "height": "35px",
      	  "font-size": "16px",
      	  "padding-top": "2px",
	  	  "font-family": "arial"
    	});
        
        opacitytxt2.css({
      	  "height": "35px",
      	  "font-size": "16px",
      	  "padding-top": "2px",
	  	  "font-family": "arial"
    	});
        
        sepiatxt1.css({
      	  "height": "35px",
      	  "font-size": "16px",
      	  "padding-top": "2px",
	  	  "font-family": "arial"
    	});
        
        sepiatxt2.css({
      	  "height": "35px",
      	  "font-size": "16px",
      	  "padding-top": "2px",
	  	  "font-family": "arial"
    	});
        
        sattxt1.css({
      	  "height": "35px",
      	  "font-size": "16px",
      	  "padding-top": "2px",
	  	  "font-family": "arial"
    	});
        
        sattxt2.css({
      	  "height": "35px",
      	  "font-size": "16px",
      	  "padding-top": "2px",
	  	  "font-family": "arial"
    	});
        
        blurfilter1.css({
      	  "height": "15px",
      	  "border": "4px outset silver"
    	});
        
        brightfilter1.css({
      	  "height": "15px",
      	  "border": "4px outset silver"
    	});
        
        contrastfilter1.css({
      	  "height": "15px",
      	  "border": "4px outset silver"
    	});
        
        huefilter1.css({
      	  "height": "15px",
      	  "border": "4px outset silver"
    	});
        
        grayfilter1.css({
      	  "height": "15px",
      	  "border": "4px outset silver"
    	});
        
        invertfilter1.css({
      	  "height": "15px",
      	  "border": "4px outset silver"
    	});
        
        opacityfilter1.css({
      	  "height": "15px",
      	  "border": "4px outset silver"
    	});
        
        sepiafilter1.css({
      	  "height": "15px",
      	  "border": "4px outset silver"
    	});
        
        satfilter1.css({
      	  "height": "15px",
      	  "border": "4px outset silver"
    	});
        
        blurfilter2.css({
      	  "height": "15px",
      	  "border": "4px outset silver"
    	});
        
        brightfilter2.css({
      	  "height": "15px",
      	  "border": "4px outset silver"
    	});
        
        contrastfilter2.css({
      	  "height": "15px",
      	  "border": "4px outset silver"
    	});
        
        huefilter2.css({
      	  "height": "15px",
      	  "border": "4px outset silver"
    	});
        
        grayfilter2.css({
      	  "height": "15px",
      	  "border": "4px outset silver"
    	});
        
        invertfilter2.css({
      	  "height": "15px",
      	  "border": "4px outset silver"
    	});
        
        opacityfilter2.css({
      	  "height": "15px",
      	  "border": "4px outset silver"
    	});
        
        sepiafilter2.css({
      	  "height": "15px",
      	  "border": "4px outset silver"
    	});
        
        satfilter2.css({
      	  "height": "15px",
      	  "border": "4px outset silver"
    	});
        
        blurbox1.css({
      	  "height": "35px",
      	  "font-size": "16px",
      	  "padding-top": "2px",
	  	  "font-family": "arial"
    	});
        
        blurbox2.css({
      	  "height": "35px",
      	  "font-size": "16px",
      	  "padding-top": "2px",
	  	  "font-family": "arial"
    	});
        
        brightbox1.css({
      	  "height": "35px",
      	  "font-size": "16px",
      	  "padding-top": "2px",
	  	  "font-family": "arial"
    	});
        
        brightbox2.css({
      	  "height": "35px",
      	  "font-size": "16px",
      	  "padding-top": "2px",
	  	  "font-family": "arial"
    	});
        
        contrastbox1.css({
      	  "height": "35px",
      	  "font-size": "16px",
      	  "padding-top": "2px",
	  	  "font-family": "arial"
    	});
        
        contrastbox2.css({
      	  "height": "35px",
      	  "font-size": "16px",
      	  "padding-top": "2px",
	  	  "font-family": "arial"
    	});
        
        contrastbox1.css({
      	  "height": "35px",
      	  "font-size": "16px",
      	  "padding-top": "2px",
	  	  "font-family": "arial"
    	});
        
        huebox1.css({
      	  "height": "35px",
      	  "font-size": "16px",
      	  "padding-top": "2px",
	  	  "font-family": "arial"
    	});
        
        huebox2.css({
      	  "height": "35px",
      	  "font-size": "16px",
      	  "padding-top": "2px",
	  	  "font-family": "arial"
    	});
        
        graybox1.css({
      	  "height": "35px",
      	  "font-size": "16px",
      	  "padding-top": "2px",
	  	  "font-family": "arial"
    	});
        
        graybox2.css({
      	  "height": "35px",
      	  "font-size": "16px",
      	  "padding-top": "2px",
	  	  "font-family": "arial"
    	});
        
        invertbox1.css({
      	  "height": "35px",
      	  "font-size": "16px",
      	  "padding-top": "2px",
	  	  "font-family": "arial"
    	});
        
        invertbox2.css({
      	  "height": "35px",
      	  "font-size": "16px",
      	  "padding-top": "2px",
	  	  "font-family": "arial"
    	});
        
        opacitybox1.css({
      	  "height": "35px",
      	  "font-size": "16px",
      	  "padding-top": "2px",
	  	  "font-family": "arial"
    	});
        
        opacitybox2.css({
      	  "height": "35px",
      	  "font-size": "16px",
      	  "padding-top": "2px",
	  	  "font-family": "arial"
    	});
        
        sepiabox1.css({
      	  "height": "35px",
      	  "font-size": "16px",
      	  "padding-top": "2px",
	  	  "font-family": "arial"
    	});
        
        sepiabox2.css({
      	  "height": "35px",
      	  "font-size": "16px",
      	  "padding-top": "2px",
	  	  "font-family": "arial"
    	});
        
        satbox1.css({
      	  "height": "35px",
      	  "font-size": "16px",
      	  "padding-top": "2px",
	  	  "font-family": "arial"
    	});
        
        satbox2.css({
      	  "height": "35px",
      	  "font-size": "16px",
      	  "padding-top": "2px",
	  	  "font-family": "arial"
    	});
        
        bottomMain.css({
          "height": "auto"
        });
      }
    }
    
    setAreaSize();
  
  var volumeControlMod = $("<div/>");
    volumeControlMod.css({
      "width": "20%",
      "height": "80px",
      "background": "rgba(21, 21, 21, 0.8)",
      "position": "absolute",
      "left": "10px",
      "top": "10px",
      "border": "4px outset white",
      "z-index": 600,
      "display": "none"
    }).appendTo(element);
    
    var volControls1 = $("<div/>");
    volControls1.css({
      "width": "100%",
      "height": "40px",
      "display": "flex",
      "flext-direction": "row",
      "text-align": "left"
    }).appendTo(volumeControlMod);
    
    var voltxt1 = $("<div/>");
    voltxt1.css({
      "width": "40%",
      "height": "40px",
      "font-size": "16px",
      "font-weight": "bold",
      "color": "white",
      "padding-top": "12px",
      "padding-left": "6px",
      "border-radius": "6px",
      "text-align": "left"
    }).text("Volume Player:").appendTo(volControls1);
    
    var volprogbox1 = $("<div/>");
    volprogbox1.css({
      "width": "40%",
      "height": "40px",
      "text-align": "left"
    }).appendTo(volControls1);
    
    var volprogress1 = $("<p/>");
    volprogress1.css({
      "width": "100%",
      "height": "20px",
      "margin-top": "10px",
      "text-align": "left",
      "background": "lime"
    }).appendTo(volprogbox1);
    
    var volnumber1 = $("<div/>");
    volnumber1.css({
      "width": "20%",
      "height": "40px",
      "text-align": "center",
      "font-size": "16px",
      "font-weight": "bold",
      "color": "white",
      "padding-top": "12px",
      "padding-left": "6px"
    }).appendTo(volControls1);
    
    var volControls2 = $("<div/>");
    volControls2.css({
      "width": "100%",
      "height": "40px",
      "display": "flex",
      "flext-direction": "row",
      "text-align": "left"
    }).appendTo(volumeControlMod);
    
    var voltxt2 = $("<div/>");
    voltxt2.css({
      "width": "40%",
      "height": "40px",
      "font-size": "16px",
      "font-weight": "bold",
      "color": "white",
      "padding-top": "12px",
      "padding-left": "6px",
      "border-radius": "6px",
      "text-align": "left"
    }).text("Volume FX-Player:").appendTo(volControls2);
    
    var volprogbox2 = $("<div/>");
    volprogbox2.css({
      "width": "40%",
      "height": "40px",
      "text-align": "left"
    }).appendTo(volControls2);
    
    var volprogress2 = $("<p/>");
    volprogress2.css({
      "width": "100%",
      "height": "20px",
      "margin-top": "10px",
      "text-align": "left",
      "background": "red"
    }).appendTo(volprogbox2);
    
    var volnumber2 = $("<div/>");
    volnumber2.css({
      "width": "20%",
      "height": "40px",
      "text-align": "center",
      "font-size": "16px",
      "font-weight": "bold",
      "color": "white",
      "padding-top": "12px",
      "padding-left": "6px"
    }).appendTo(volControls2);
    
    var aplayControlMod = $("<div/>");
    aplayControlMod.css({
      "width": "20%",
      "height": "40px",
      "background": "rgba(255, 0, 0, 0.8)",
      "position": "absolute",
      "left": "10px",
      "top": "10px",
      "border": "4px outset darkred",
      "z-index": 600,
      "display": "none",
      "font-size": "30px",
      "font-weight": "bold",
      "color": "white",
      "padding-top": "5px",
      "padding-left": "6px"
    }).appendTo(element);
  
  var pitchControlMod = $("<div/>");
    pitchControlMod.css({
      "width": "35%",
      "height": "80px",
      "background": "rgba(21, 21, 21, 0.8)",
      "position": "absolute",
      "left": "10px",
      "top": "10px",
      "border": "4px outset white",
      "z-index": 600,
      "display": "none"
    }).appendTo(element);
    
    var pitchControls1 = $("<div/>");
    pitchControls1.css({
      "width": "100%",
      "height": "40px",
      "display": "flex",
      "flext-direction": "row",
      "text-align": "left"
    }).appendTo(pitchControlMod);
    
    var pitchtxt1 = $("<div/>");
    pitchtxt1.css({
      "width": "40%",
      "height": "40px",
      "font-size": "16px",
      "font-weight": "bold",
      "color": "white",
      "padding-top": "12px",
      "padding-left": "6px",
      "border-radius": "6px",
      "text-align": "left"
    }).text("Pitch Player:").appendTo(pitchControls1);
    
    var pitchprogbox1 = $("<div/>");
    pitchprogbox1.css({
      "width": "50%",
      "height": "40px",
      "text-align": "left"
    }).appendTo(pitchControls1);
    
    var pitchprogress1 = $("<p/>");
    pitchprogress1.css({
      "width": "100%",
      "height": "20px",
      "margin-top": "10px",
      "text-align": "left",
      "background": "fuchsia"
    }).appendTo(pitchprogbox1);
    
    var pitnumber1 = $("<div/>");
    pitnumber1.css({
      "width": "10%",
      "height": "40px",
      "text-align": "center",
      "font-size": "16px",
      "font-weight": "bold",
      "color": "white",
      "padding-top": "12px",
      "padding-left": "6px"
    }).appendTo(pitchControls1);
    
    var pitchControls2 = $("<div/>");
    pitchControls2.css({
      "width": "100%",
      "height": "40px",
      "display": "flex",
      "flext-direction": "row",
      "text-align": "left"
    }).appendTo(pitchControlMod);
    
    var pitchtxt2 = $("<div/>");
    pitchtxt2.css({
      "width": "40%",
      "height": "40px",
      "font-size": "16px",
      "font-weight": "bold",
      "color": "white",
      "padding-top": "12px",
      "padding-left": "6px",
      "border-radius": "6px",
      "text-align": "left"
    }).text("Pitch FX-Player:").appendTo(pitchControls2);
    
    var pitchprogbox2 = $("<div/>");
    pitchprogbox2.css({
      "width": "50%",
      "height": "40px",
      "text-align": "left"
    }).appendTo(pitchControls2);
    
    var pitchprogress2 = $("<p/>");
    pitchprogress2.css({
      "width": "100%",
      "height": "20px",
      "margin-top": "10px",
      "text-align": "left",
      "background": "skyblue"
    }).appendTo(pitchprogbox2);
    
    var pitnumber2 = $("<div/>");
    pitnumber2.css({
      "width": "10%",
      "height": "40px",
      "text-align": "center",
      "font-size": "16px",
      "font-weight": "bold",
      "color": "white",
      "padding-top": "12px",
      "padding-left": "6px"
    }).appendTo(pitchControls2);
    
      function savePitchPlayer() {
      localStorage.setItem("pitchsave", pitchrange1.val());
      localStorage.setItem("pitchsave2", pitchrange2.val());
      loadPitchPlayer();
    	}
    
      function loadPitchPlayer() {
      var loadPitch = localStorage.getItem("pitchsave");
      var loadPitch2 = localStorage.getItem("pitchsave2");
      pitchrange1.val(loadPitch);
      pitchrange2.val(loadPitch2);
      vidplayer1.prop("playbackRate", loadPitch);
      vidplayer2.prop("playbackRate", loadPitch2);
    	}
    
      try {
        if (!localStorage.getItem("pitchsave") || !localStorage.getItem("pitchsave2")) {
      	savePitchPlayer();
    	} else {
      	loadPitchPlayer();
    	}
      } catch(error) {
      alertMod.animate({left: element.width()/2 - alertMod.width()/2, top: element.height()/2 - alertMod.height()/2},1).show();
      alertTextBox.text(error);
    }
      
      function saveVolPlayer() {
      localStorage.setItem("volsave", volumer1.val());
      localStorage.setItem("volsave2", volumer2.val());
      loadVolPlayer();
    }
    
    function loadVolPlayer() {
      var loadVol = localStorage.getItem("volsave");
      var loadVol2 = localStorage.getItem("volsave2");
      volumer1.val(loadVol);
      volumer2.val(loadVol2);
    }
    
      try {
        if (!localStorage.getItem("volsave") || !localStorage.getItem("volsave2")) {
      	saveVolPlayer();
    	} else {
      	loadVolPlayer();
    	}
      } catch(error) {
      alertMod.animate({left: element.width()/2 - alertMod.width()/2, top: element.height()/2 - alertMod.height()/2},1).show();
      alertTextBox.text(error);
    }
      
      function savePitchPlayerBgp() {
      localStorage.setItem("bgppitchsave", fxPitch.val());
      loadPitchPlayerBgp();
    }
    
    function loadPitchPlayerBgp() {
      var loadBgpPitch = localStorage.getItem("bgppitchsave");
      fxPitch.val(loadBgpPitch);
      fxPitchVal.val(loadBgpPitch);
    }
      
      try {
        if (!localStorage.getItem("bgppitchsave")) {
      savePitchPlayerBgp();
    } else {
      loadPitchPlayerBgp();
    }
      } catch(error) {
      alertMod.animate({left: element.width()/2 - alertMod.width()/2, top: element.height()/2 - alertMod.height()/2},1).show();
      alertTextBox.text(error);
    }
    
    function saveVolBgpPlayer() {
      localStorage.setItem("volbgpsave", fxVolume.val());
      loadVolBgpPlayer();
    }
    
    function loadVolBgpPlayer() {
      var loadbgpVol = localStorage.getItem("volbgpsave");
      fxVolume.val(loadbgpVol);
      fxVolVal.val(loadbgpVol);
    }
    
      try {
        if (!localStorage.getItem("volbgpsave")) {
      	saveVolBgpPlayer();
    	} else {
      	loadVolBgpPlayer();
    	}
      } catch(error) {
      alertMod.animate({left: element.width()/2 - alertMod.width()/2, top: element.height()/2 - alertMod.height()/2},1).show();
      alertTextBox.text(error);
    }
      
      function saveRatioSelection() {
      localStorage.setItem("ratsel", ratioSelect.val());
      loadRatioSelection();
    	}
    
      function loadRatioSelection() {
      var ratioVal = localStorage.getItem("ratsel");
      ratioSelect.val(ratioVal);
    	}
    
      try {
        if (!localStorage.getItem("ratsel")) {
      saveRatioSelection();
    	} else {
      loadRatioSelection();
    	}
      } catch(error) {
      alertMod.animate({left: element.width()/2 - alertMod.width()/2, top: element.height()/2 - alertMod.height()/2},1).show();
      alertTextBox.text(error);
    	}
      
      function saveRatioSelection2() {
      localStorage.setItem("ratsel2", ratioSelect2.val());
      loadRatioSelection2();
    	}
    
      function loadRatioSelection2() {
      var ratioVal2 = localStorage.getItem("ratsel2");
      ratioSelect2.val(ratioVal2);
    	}
    
      try {
        if (!localStorage.getItem("ratsel2")) {
      saveRatioSelection2();
    	} else {
      loadRatioSelection2();
    	}
      } catch(error) {
      console.log(error);
    	}
      
      function loadPlaylistRadio() {
	  $("input[name='pMod2']").each(function(index, element) {
	  if ($(this).val() == localStorage.getItem($(this).attr("name"))){
	  $(this).attr("checked","checked").trigger("change");
			}
       	});
	}

    $("input[name='pMod2']").on("click", function(e) {
        $("input[name='pMod2']:checked").each(function(index, element) {
            localStorage.setItem($(this).attr("name"),$(this).val());
        });
    });
    
      try {
        loadPlaylistRadio();
      } catch(error) {
      alertMod.animate({left: element.width()/2 - alertMod.width()/2, top: element.height()/2 - alertMod.height()/2},1).show();
      alertTextBox.text(error);
    }
      
      function saveVideoSize() {
      localStorage.setItem("vidW", vidWidth.val());
      localStorage.setItem("vidH", vidHeight.val());
      loadVideoSize();
    }
    
    function loadVideoSize() {
      var ratioWidth = localStorage.getItem("vidW");
      var ratioHeight = localStorage.getItem("vidH");
      vidWidth.val(ratioWidth);
      vidHeight.val(ratioHeight);
    }
    
      try {
        if (!localStorage.getItem("vidW") && !localStorage.getItem("vidH")) {
      	saveVideoSize();
    	} else {
        loadVideoSize();
    	}
      } catch(error) {
      alertMod.animate({left: element.width()/2 - alertMod.width()/2, top: element.height()/2 - alertMod.height()/2},1).show();
      alertTextBox.text(error);
    }
      
      function saveVideoSize2() {
      localStorage.setItem("vidW2", vidWidth2.val());
      localStorage.setItem("vidH2", vidHeight2.val());
      loadVideoSize2();
    }
    
    function loadVideoSize2() {
      var ratioWidth2 = localStorage.getItem("vidW2");
      var ratioHeight2 = localStorage.getItem("vidH2");
      vidWidth2.val(ratioWidth2);
      vidHeight2.val(ratioHeight2);
    }
    
      try {
        if (!localStorage.getItem("vidW2") && !localStorage.getItem("vidH2")) {
      	saveVideoSize2();
    	} else {
        loadVideoSize2();
    	}
      } catch(error) {
      alertMod.animate({left: element.width()/2 - alertMod.width()/2, top: element.height()/2 - alertMod.height()/2},1).show();
      alertTextBox.text(error);
    }
    
    function vidsaveCrossfadeSettings() {
      localStorage.setItem("vcrfImg", crossfadeImg.attr("src"));
      localStorage.setItem("vcrfMode", vidcrossFadeMode.val());
      localStorage.setItem("vcrfTime", vidcrossFadeTime.val());
      localStorage.setItem("veffect", vidEffectMode.val());
      vidsetCrossfadeSettings();
    }
    
    function vidsetCrossfadeSettings() {
      var vidnewCrfImg = localStorage.getItem("vcrfImg");
      var vidnewCrfMode = localStorage.getItem("vcrfMode");
      var vidnewCrfTime = localStorage.getItem("vcrfTime");
      var vidnewEffect = localStorage.getItem("veffect");
      
      crossfadeImg.attr("src", vidnewCrfImg);
      vidcrossFadeMode.val(vidnewCrfMode);
      vidcrossFadeTime.val(vidnewCrfTime);
      vidEffectMode.val(vidnewEffect);
    }
    
    try {
        if (!localStorage.getItem("vcrfImg") && !localStorage.getItem("vcrfMode") && !localStorage.getItem("vcrfTime") && !localStorage.getItem("veffect")) {
        vidsaveCrossfadeSettings();
    	} else {
        vidsetCrossfadeSettings();
    	}
    } catch(error) {
      alertMod.animate({left: element.width()/2 - alertMod.width()/2, top: element.height()/2 - alertMod.height()/2},1).show();
      alertTextBox.text(error);
    }
    
    function vidsaveTracklist() {
	  localStorage.setItem("mixvideos", vidtrackLibList.html());
	  vidsetTracklist();
	}

	function vidsetTracklist() {
	  var currentHtml11 = localStorage.getItem("mixvideos");
	  vidtrackLibList.html(currentHtml11);
      remainVideos.val($("#vidtracklist li").length);
  
	  if (mode13.is(":checked")) {
  	    setRandom();
		}
	  }
    
	try {
      if(!localStorage.getItem("mixvideos")) {
      vidsaveTracklist();
    	} else {
      vidsetTracklist();
    	}
    } catch(error) {
      alertMod.animate({left: element.width()/2 - alertMod.width()/2, top: element.height()/2 - alertMod.height()/2},1).show();
      alertTextBox.text(error);
    }
    
    var vidcontrolers, volcontrolers, aplaycontroler, pitchcontrolers;
    
    $(document).on("keydown", function(event) {
      if (event.ctrlKey && event.key === "d") {
        vidcrossFadeTime.focus();
        clearTimeout(vidcontrolers);
        crossfadeControlsMod.show();
        vidcontrolers = setTimeout(function() {
          crossfadeControlsMod.hide();
        },6000);
        return false;
      } else if (event.ctrlKey && event.key === "m") {
        vidEffectMode.focus();
        clearTimeout(vidcontrolers);
        crossfadeControlsMod.show();
        vidcontrolers = setTimeout(function() {
          crossfadeControlsMod.hide();
        },6000);
        return false;
      } else if (event.ctrlKey && event.key === "y") {
        vidcrossFadeMode.focus();
        clearTimeout(vidcontrolers);
        crossfadeControlsMod.show();
        vidcontrolers = setTimeout(function() {
          crossfadeControlsMod.hide();
        },6000);
        return false;
      } else if (event.ctrlKey && event.key === "g") {
        videoControlsMod.show();
        controlVidnumber.focus().select();
        return false;
      } else if (event.ctrlKey && event.key === "k") {
        videotimeControlsMod.show();
        controltimeVidnumber.focus().select();
        return false;
      } else if (event.ctrlKey && event.key === "i") {
        listPoint11.click();
        return false;
      } else if (event.ctrlKey && event.key === "j") {
        listPoint12.click();
        return false;
      } else if (event.ctrlKey && event.key === "u") {
        fxControlsMod.show();
        controlfxnumber.focus().select();
        return false;
      } else if (event.ctrlKey && event.key === "f") {
        playFxBtn.click();
        return false;
      } else if (event.ctrlKey && event.key === "l") {
        $("#playBtn1").click();
        return false;
      } else if (event.ctrlKey && event.key === "r") {
        $("#playBtn2").click();
        return false;
      } else if (event.ctrlKey && event.key === "6") {
        if (playerNumber.val() === "player1") {
          vidplayer1.css("transform", "scale(1,1)");
          vidWidth.val(1);
          vidHeight.val(1);
          ratioSelect.val(0);
        } else if (playerNumber.val() === "player2") {
          vidplayer2.css("transform", "scale(1,1)");
          vidWidth.val(1);
          vidHeight.val(1);
          ratioSelect.val(0);
        }
        return false;
      } else if (event.ctrlKey && event.key === "7") {
        if (playerNumber.val() === "player1") {
          vidplayer1.css("transform", "scale(1.41, 1)");
          vidWidth.val(1.41);
          vidHeight.val(1);
          ratioSelect.val(1);
        } else if (playerNumber.val() === "player2") {
          vidplayer2.css("transform", "scale(1.41, 1)");
          vidWidth2.val(1.41);
          vidHeight2.val(1);
          ratioSelect2.val(1);
        }
        return false;
      } else if (event.ctrlKey && event.key === "8") {
        if (playerNumber.val() === "player1") {
          vidplayer1.css("transform", "scale(1.41, 1.21)");
          vidWidth.val(1.41);
          vidHeight.val(1.21);
          ratioSelect.val(2);
        } else if (playerNumber.val() === "player2") {
          vidplayer2.css("transform", "scale(1.41, 1.21)");
          vidWidth2.val(1.41);
          vidHeight2.val(1.21);
          ratioSelect2.val(2);
        }
        return false;
      } else if (event.ctrlKey && event.key === "9") {
        if (playerNumber.val() === "player1") {
          vidplayer1.css("transform", "scale(1.21, 1)");
          vidWidth.val(1.21);
          vidHeight.val(1);
          ratioSelect.val(3);
        } else if (playerNumber.val() === "player2") {
          vidplayer2.css("transform", "scale(1.21, 1)");
          vidWidth2.val(1.21);
          vidHeight2.val(1);
          ratioSelect2.val(3);
        }
        return false;
      } else if (event.ctrlKey && event.key === "0") {
        if (playerNumber.val() === "player1") {
          vidplayer1.css("transform", "scale(1, 1.21)");
          vidWidth.val(1);
          vidHeight.val(1.21);
          ratioSelect.val(4);
        } else if (playerNumber.val() === "player2") {
          vidplayer2.css("transform", "scale(1, 1.21)");
          vidWidth2.val(1.21);
          vidHeight2.val(1);
          ratioSelect2.val(3);
        }
        return false;
      } else if (event.ctrlKey && !event.shiftKey && event.key === "ArrowLeft") {
        if (playerNumber.val() === "player1") {
          vidrewBtn1.click();
        } else if (playerNumber.val() === "player2") {
          vidrewBtn2.click();
        }
        return false;
      } else if (event.ctrlKey && !event.shiftKey && event.key === "ArrowRight") {
        if (playerNumber.val() === "player1") {
          vidforwBtn1.click();
        } else if (playerNumber.val() === "player2") {
          vidforwBtn2.click();
        }
        return false;
      }
      
       else if (event.ctrlKey && event.shiftKey && event.key === "ArrowLeft") {
        if (playerNumber.val() === "player1") {
          vidskiprewBtn.click();
        } else if (playerNumber.val() === "player2") {
          vidskiprewBtn2.click();
        }
        return false;
      } else if (event.ctrlKey && event.shiftKey && event.key === "ArrowRight") {
        if (playerNumber.val() === "player1") {
          vidskipforwBtn.click();
        } else if (playerNumber.val() === "player2") {
          vidskipforwBtn2.click();
        }
        return false;
      } else if (event.ctrlKey && !event.shiftKey && event.key === "ArrowUp") {
        if (playerNumber.val() === "player1") {
          pitchrange1.val(parseFloat(pitchrange1.val()) + 0.05).trigger("change");
          pitchtxt1.text("Pitch Player 1: ");
          pitchprogress1.css("width", pitchprogbox1.width()*(pitchrange1.val()/pitchrange1.attr("max")) + "px");
          pitnumber1.text(pitchrange1.val());
        } else if (playerNumber.val() === "player2") {
          pitchrange2.val(parseFloat(pitchrange2.val()) + 0.05).trigger("change");
          pitchtxt1.text("Pitch Player 2: ");
          pitchprogress1.css("width", pitchprogbox1.width()*(pitchrange2.val()/pitchrange2.attr("max")) + "px");
          pitnumber1.text(pitchrange2.val());
        }
        clearTimeout(pitchcontrolers);
        pitchControlMod.show();
        pitchcontrolers = setTimeout(function() {
          pitchControlMod.hide();
        },6000);
        return false;
      } else if (event.ctrlKey && !event.shiftKey && event.key === "ArrowDown") {
        if (playerNumber.val() === "player1") {
          pitchrange1.val(parseFloat(pitchrange1.val()) - 0.05).trigger("change");
          pitchtxt1.text("Pitch Player 1: ");
          pitchprogress1.css("width", pitchprogbox1.width()*(pitchrange1.val()/pitchrange1.attr("max")) + "px");
          pitnumber1.text(pitchrange1.val());
        } else if (playerNumber.val() === "player2") {
          pitchrange2.val(parseFloat(pitchrange2.val()) - 0.05).trigger("change");
          pitchtxt1.text("Pitch Player 2: ");
          pitchprogress1.css("width", pitchprogbox1.width()*(pitchrange2.val()/pitchrange2.attr("max")) + "px");
          pitnumber1.text(pitchrange2.val());
        }
        clearTimeout(pitchcontrolers);
        pitchControlMod.show();
        pitchcontrolers = setTimeout(function() {
          pitchControlMod.hide();
        },6000);
        return false;
      } else if (event.ctrlKey && event.shiftKey && event.key === "ArrowUp") {
        fxPitch.val(parseFloat(fxPitch.val()) + 0.05).trigger("change");
        pitchprogress2.css("width", pitchprogbox2.width()*(fxPitch.val()/fxPitch.attr("max")) + "px");
        pitnumber2.text(fxPitch.val());
        clearTimeout(pitchcontrolers);
        pitchControlMod.show();
        pitchcontrolers = setTimeout(function() {
          pitchControlMod.hide();
        },6000);
        return false;
      } else if (event.ctrlKey && event.shiftKey && event.key === "ArrowDown") {
        fxPitch.val(parseFloat(fxPitch.val()) - 0.05).trigger("change");
        pitchprogress2.css("width", pitchprogbox2.width()*(fxPitch.val()/fxPitch.attr("max")) + "px");
        pitnumber2.text(fxPitch.val());
        clearTimeout(pitchcontrolers);
        pitchControlMod.show();
        pitchcontrolers = setTimeout(function() {
          pitchControlMod.hide();
        },6000);
        return false;
      } else if (event.ctrlKey && !event.shiftKey && event.key === "+") {
        if (playerNumber.val() === "player1") {
          volumer1.val(parseFloat(volumer1.val()) + 0.01).trigger("change");
          voltxt1.text("Volume Player 1: ");
          volprogress1.css("width", volprogbox1.width()*volumer1.val() + "px");
          volnumber1.text(volumer1.val()*100 + "%");
        } else if (playerNumber.val() === "player2") {
          volumer2.val(parseFloat(volumer2.val()) + 0.01).trigger("change");
          voltxt1.text("Volume Player 2: ");
          volprogress1.css("width", volprogbox1.width()*volumer2.val() + "px");
          volnumber1.text(volumer2.val()*100 + "%");
        }
        clearTimeout(volcontrolers);
        volumeControlMod.show();
        volcontrolers = setTimeout(function() {
          volumeControlMod.hide();
        },6000);
        return false;
      } else if (event.ctrlKey && !event.shiftKey && event.key === "-") {
        if (playerNumber.val() === "player1") {
          volumer1.val(parseFloat(volumer1.val()) - 0.01).trigger("change");
          voltxt1.text("Volume Player 1: ");
          volprogress1.css("width", volprogbox1.width()*volumer1.val() + "px");
          volnumber1.text(volumer1.val()*100 + "%");
        } else if (playerNumber.val() === "player2") {
          volumer2.val(parseFloat(volumer2.val()) - 0.01).trigger("change");
          voltxt1.text("Volume Player 2: ");
          volprogress1.css("width", volprogbox1.width()*volumer2.val() + "px");
          volnumber1.text(volumer2.val()*100 + "%");
        }
        clearTimeout(volcontrolers);
        volumeControlMod.show();
        volcontrolers = setTimeout(function() {
          volumeControlMod.hide();
        },6000);
        return false;
      } else if (event.ctrlKey && event.shiftKey && event.key === "+") {
        fxVolume.val(parseFloat(fxVolume.val()) + 0.01).trigger("change");
        volprogress2.css("width", volprogbox2.width()*fxVolume.val() + "px");
        volnumber2.text(fxVolume.val()*100 + "%");
        clearTimeout(volcontrolers);
        volumeControlMod.show();
        volcontrolers = setTimeout(function() {
          volumeControlMod.hide();
        },6000);
        return false;
      } else if (event.ctrlKey && event.shiftKey && event.key === "-") {
        fxVolume.val(parseFloat(fxVolume.val()) - 0.01).trigger("change");
        volprogress2.css("width", volprogbox2.width()*fxVolume.val() + "px");
        volnumber2.text(fxVolume.val()*100 + "%");
        clearTimeout(volcontrolers);
        volumeControlMod.show();
        volcontrolers = setTimeout(function() {
          volumeControlMod.hide();
        },6000);
        return false;
      } else if (event.ctrlKey && event.key === "q") {
        vidautoplayBtn.click();
        if (vidautoplayBtn.attr("style")) {
          aplayControlMod.css({
            "background": "lime",
            "border-style": "inset",
            "border-color": "green"
          }).text("Autoplay On!");
        } else {
          aplayControlMod.css({
            "background": "red",
            "border-style": "outset",
            "border-color": "darkred"
          }).text("Autoplay Off!");
        }
        clearTimeout(aplaycontroler);
        aplayControlMod.show();
        aplaycontroler = setTimeout(function() {
          aplayControlMod.hide();
        },6000);
        return false;
      }
    });
    
    return element;
  };
}(jQuery));
