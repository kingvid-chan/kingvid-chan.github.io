define({ "api": [
  {
    "type": "ATTENTION",
    "url": "Banner模块对象扩展了公共模块函数，并包含GoodsRec、UserDefine模块对象（轮播图模块）",
    "title": "ATTENTION",
    "name": "ATTENTION",
    "group": "Banner",
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "Banner"
  },
  {
    "type": "url",
    "url": "http://jshop.jd.com/visualediting/preview.html?veBean.pageInstanceId=10324325&veBean.appId=457613",
    "title": "JSlide()",
    "name": "JSlide",
    "group": "Banner",
    "description": "<p>窗口内可同时展示多张图片，通过点击左右按钮来滚动切换图片</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>包住图片和左右点击按钮的外层div类名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "items",
            "description": "<p>包含单张图片的最外层类名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "itemImgs",
            "description": "<p>滑动的图片对象</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "prevTrigger/nextTrigger",
            "description": "<p>左/右按钮可点击时的样式类名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "prevTriggerDisableCls/nextTriggerDisableCls",
            "description": "<p>左/右按钮不可点击时的样式类名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "prevTriggerOverCLs/nextTriggerOverCls",
            "description": "<p>鼠标移上左/右按钮时的样式类名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "prevTriggerOutCls/nextTriggerOutCls",
            "description": "<p>鼠标移出左/右按钮时的样式类名</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isMouseoverStop",
            "defaultValue": "true",
            "description": "<p>鼠标hover图片时是否停止自动滑动</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "autoSlide",
            "defaultValue": "true",
            "description": "<p>true/false,是否自动滑动</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "slideInterval",
            "defaultValue": "5000",
            "description": "<p>自动滑动时，本次滑动开始时间距离上次滑动结束的时间差（单位：毫秒）</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "slideDuration",
            "defaultValue": "500",
            "description": "<p>滑动的时间（单位：毫秒）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "slideEasing",
            "defaultValue": "swing",
            "description": "<p>eg:&quot;easing&quot;/&quot;linear&quot;，表示滑动的动画效果</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "steps",
            "defaultValue": "1",
            "description": "<p>点击左/右按钮时滑过的图片数量</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uid",
            "description": "<p>本地缓存的id</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "demo",
        "content": "<div class=\"j-module\" module-function=\"JSlide\" module-param=\"{\n                cls: '',\n                content: '.smallPic',\n                items: '.smallList li',\n                itemImgs: '.smallList img',\n                prevTrigger: '.goLeft',\n                prevTriggerOverCLs: 'goLeft',\n                prevTriggerOutCls: 'goLeft',\n                prevTriggerDisableCls: 'goLeftDisable',\n                nextTrigger: '.goRight',\n                nextTriggerOverCls: 'goRight',\n                nextTriggerOutCls: 'goRight',\n                nextTriggerDisableCls: 'goRightDisable',\n                activeCls: 'current',\n                activeIndex: 0,\n                slideInterval: 5000,\n                slideDuration: 500,\n                slideEasing: 'swing',\n                autoSlide: false,\n                isMouseoverStop: true,\n                steps: 5,\n                uid: 'jBanner'\n            }\">\n    <div class=\"smallPic\">\n        <a class=\"goLeft\" href=\"javascript:void(0);\"></a>\n        <div class=\"smallWarp\">\n            <ul class=\"smallList\">\n            #foreach($!banner in $!bannerContent)\n                #if($!banner.publish == 1)\n                <li>                    \n                    <div class=\"jItem\">\n                        <div class=\"jPic\">\n                            <a href=\"$!banner.url\" target=\"_blank\"><img src=\"$!banner.imageUrl\" alt=\"$!banner.name\" /></a>\n                        </div>\n                        <div class=\"jDesc\">\n                            <a href=\"#\">$!banner.name</a>\n                        </div>\n                    </div>\n                </li>\n                #end\n            #end\n            </ul>\n        </div>\n        <a class=\"goRight\" href=\"javascript:void(0);\"></a>\n    </div>\n</div>",
        "type": "json"
      },
      {
        "title": "code",
        "content": "JSlide:function(args) {\n\tif(args == undefined){\n\t\tif(validateData($(this).attr(\"module-param\"))){\n\t\t\tvar args = eval('('+$(this).attr(\"module-param\")+')');\n\t\t}\n\t}\n\t\n\tvar container = this;\n    var\tslide = new JSlide(container, args);\t\t\t\t\t\n}\n\n//JSilde的函数原型\nfunction JSlide(container, config) {\n    var self = this,\n        _config = {\n            // 当前轮播显示的第一个item的index\n            // positionIndex: 0,\n            // 当前高亮的轮播item\n            // activeIndex: 0,\n            // 轮播时间间隔\n            slideInterval: 5000,\n            // 轮播滚动持续事件\n            slideDuration: 500,\n            // 轮播图滚动效果 swing/linear\n            slideEasing: 'swing',\n            // slideEasing: 'linear',\n            // 是否自动轮播\n            autoSlide: true,\n            // 轮播item mouseover时是否停止自动轮播\n            isMouseoverStop: true,\n            steps: 1\n        };\n    if(!container) {return false;}\n\n    self.container = $(container);\n    self.timer = null;\n    self.config = $.extend(_config, config);\n\n    self._init();\n}\n\nJSlide.prototype = {            \n    //创建select结构\n    _init: function() {                 \n        var self = this;\n        // 解析html结构\n        self._parseMarkup();\n        // 初始化滚动位置\n        self.positionIndex = 0;\n        // 初始化设置滚动位置\n        self.direction = FORWARD;\n        // 获取当前高亮item和滚动位置\n        self._getActive();\n        // 设置当前高亮item和滚动位置\n        self._setActive();\n        // 初始化滚动\n        self._initSlide();\n        // 绑定事件\n        self._bind();\n    },\n    //解析html结构\n    _parseMarkup: function() {\n        var self = this,\n            cfg = self.config,\n            container = self.container,\n            items = container.find(cfg.items);\n        // 每个滚动item的width\n        self.stepWidth = items.eq(0).outerWidth(true);\n        self.len = items.length;\n\n        if(container.find(cfg.content).length) {\n\n            items.parent().css('position', 'relative');\n\n            // 轮播item设置index\n            items.each(function(i, item) {\n                item = $(item);\n                item.attr('data-slide-idx', i);\n            });\n        }\n    },\n    //事件绑定\n    _bind: function() {\n        var self = this,\n            cfg = self.config,\n            container = self.container;\n        \n        if(container.find(cfg.content).length) {\n            self._bindContent();\n        }\n        self._bindTrigger();\n    },\n    //轮播区域 事件绑定\n    _bindContent: function() {\n        var self = this,\n            cfg = self.config,\n            container = self.container,\n            imgs = container.find(cfg.itemImgs);\n            \n        // by wanchuan 点击专题时，将点击专题的编号、当前左边显示的第一个专题的编号、点击专题的链接地址添加到本地存储里。\n        container.delegate(cfg.items, 'click', function(ev) {\n            // console.log(ev.currentTarget);\n            var target = $(ev.currentTarget);\n                ls = {};\n            self.activeIndex = target.attr('data-slide-idx');\n            self.positionIndex = self.positionIndex;\n            self.href = target.find('a').attr('href');\n            self.__setActive();\n        });\n            \n        if(!cfg.isMouseoverStop) {return true;} //如果条件为真（这里取反了参数，参数传的是真，取反了就为假，条件应该不成立？），则继续执行\n\n        container.delegate(cfg.items, 'mouseenter mouseleave', function(ev) {\n            // console.log('items mouse event:', ev.target, ev.type);\n            // 鼠标移到、移出轮播图item时 \n            var type = ev.type;\n            if(type === 'mouseenter') {\n                self._clearTimer();\n            }else {\n                self._initSlide();\n            }\n        });\n    },\n    //轮播trigger 事件绑定\n    _bindTrigger: function() {\n        var self = this,\n            cfg = self.config,\n            container = self.container;\n\n        container.delegate(cfg.prevTrigger, 'click', function(ev) {\n            var target = $(ev.currentTarget),\n                idx = self.positionIndex - cfg.steps;\n            if(target.hasClass(cfg.prevTriggerDisableCls)) { return false;}\n\n            self.direction = BACKWARD;\n\n            if(idx < 0) {\n                idx = 0;\n            }\n            self._slideTo(idx);\n        });\n\n        container.delegate(cfg.nextTrigger, 'click', function(ev) {\n            var target = $(ev.currentTarget), \n                steps = cfg.steps,\n                idx = self.positionIndex + steps,\n                len = self.len;\n            if(target.hasClass(cfg.nextTriggerDisableCls)) { return false;}\n\n            self.direction = FORWARD;\n\n            if(idx + steps > len) {\n                idx = len - steps;\n            }\n            self._slideTo(idx);\n        });\n\n        container.delegate(cfg.prevTrigger, 'mouseenter mouseleave', function(ev) {\n            var type = ev.type,\n                target = $(ev.currentTarget);\n\n            if(type === 'mouseenter') {\n                target.removeClass(cfg.prevTriggerOutCls);\n                target.addClass(cfg.prevTriggerOverCLs);\n            }else {\n                target.removeClass(cfg.prevTriggerOverCLs);\n                target.addClass(cfg.prevTriggerOutCls);\n            }\n        });\n\n        container.delegate(cfg.nextTrigger, 'mouseenter mouseleave', function(ev) {\n            var type = ev.type,\n                target = $(ev.currentTarget);\n\n            if(type === 'mouseenter') {\n                target.removeClass(cfg.nextTriggerOutCls);\n                target.addClass(cfg.nextTriggerOverCls);\n            }else {\n                target.removeClass(cfg.nextTriggerOverCls);\n                target.addClass(cfg.nextTriggerOutCls);\n            }\n        });\n    },\n    //设置滚动\n    _initSlide: function() {\n        var self = this,\n            cfg = self.config,\n            container = self.container;\n\n        if(!cfg.autoSlide) {return false;}\n\n        self.timer = setInterval(function() {\n            var index = self.positionIndex,\n                lastIdx = self.len - 1;\n\n            if(self.direction === BACKWARD) {\n                index -= 7;\n                if(index < 0) {\n                    index = 0;\n                }\n            }else {\n                index += 7;\n                if(index + 7 > lastIdx) {\n                    index = lastIdx - 6;\n                }\n            }\n\n            self._slideTo(index);\n        }, cfg.slideInterval);\n    },\n    ///滚动\n    //@param index {Number} 滚动到的序号\n    _slideTo: function(index) {\n        var self = this,\n            cfg = self.config,\n            container = self.container,\n            content = container.find(cfg.content),\n            positionIndex = self.positionIndex,\n            left,\n            slideContent = container.find(cfg.items).parent();\n        slideContent.stop(true, true);\n\n        left = slideContent.css('left');\n        if(left === 'auto') {\n            left = 0;\n        }else {\n            left = parseInt(left, 10);\n        }\n        distance = index * self.stepWidth + left;\n        // console.log('slide to:', index, left, distance);\n\n        $(self).trigger('slideStart', [self.positionIndex, index]);\n\n        self._dealTrigger(index);\n        slideContent.animate({\"left\": \"-=\" + distance +\"px\"}, cfg.slideDuration, cfg.slideEasing, function() {\n\n            $(self).trigger('slideEnd', [self.positionIndex, index]);\n            // self.__setActive();\n        });\n    },\n    //处理向前、向后按钮状态\n    //@param index {Number} 滚动的位置\n    _dealTrigger: function(index) {\n        var self = this,\n            cfg = self.config,\n            container = self.container,\n            prevTrigger = container.find(cfg.prevTrigger),\n            prevTriggerDisableCls = cfg.prevTriggerDisableCls,\n            nextTrigger = container.find(cfg.nextTrigger),\n            nextTriggerDisableCls = cfg.nextTriggerDisableCls;\n\n        self.positionIndex = index;\n\n        prevTrigger.removeClass(prevTriggerDisableCls);\n        nextTrigger.removeClass(nextTriggerDisableCls);\n\n        if(index === 0) {\n            prevTrigger.addClass(prevTriggerDisableCls);\n            self.direction = FORWARD;\n        }else if(index + cfg.steps === self.len) {\n            nextTrigger.addClass(nextTriggerDisableCls);\n            self.direction = BACKWARD;  \n        }\n    },      \n    //获取当前高亮item和滚动位置\n    _getActive: function() {\n        var self = this,\n            cfg = self.config,\n            href = window.location.href,\n            items = self.container.find(cfg.items),\n            len = self.len,\n            steps = cfg.steps,\n            ls;\n        try{\n            ls = $.parseJSON(localStorage.getItem(cfg.uid)) || {};\n        }catch(e) {\n            ls = {};\n        }\n        if(href === ls.href) {\n            self.activeIndex = ls.activeIndex;\n            self.positionIndex = ls.positionIndex;\n        }else {\n            items.each(function(i, item) {\n                if($(item).find('a').attr('href') === href) {\n                    self.activeIndex = i;\n\n                    self.positionIndex = i;\n                    if(i + steps > len - 1) {\n                        self.positionIndex = len - steps;\n                    }\n                }\n            });\n        }\n      \n        \n        self.href = href;\n        self.__setActive();\n\n        return self;\n    },      \n    //设置当前高亮item和滚动位置\n    _setActive: function() {\n        var self = this,\n            cfg = self.config,\n            container = self.container,\n            activeCls = cfg.activeCls,\n            items = container.find(cfg.items),\n            idx = self.activeIndex;\n\n        items.removeClass(activeCls);\n\n        if(idx >= 0) {\n            items.eq(idx).addClass(activeCls);\n        }\n\n        self._slideTo(self.positionIndex);\n    },          \n    //本地存储数据\n    __setActive: function() {   \n        var self = this,\n            ls = [];\n        // console.log(JSON.stringify(ls));\n        // localStorage.setItem(self.config.uid, JSON.stringify(ls));\n        ls.push('{\"activeIndex\":');\n        ls.push(self.activeIndex + ',');    \n        ls.push('\"positionIndex\":');\n        ls.push(self.positionIndex + ',');  \n        ls.push('\"href\":');\n        ls.push('\"' + self.href + '\"}');\n        // console.log(ls.join(''));\n        localStorage.setItem(self.config.uid, ls.join(''));\n    },          \n    //清空timer\n    _clearTimer: function() {\n        var self = this;\n        if(self.timer) {\n            clearInterval(self.timer);\n            self.timer = null;\n        }\n    }\n}",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "Banner"
  },
  {
    "type": "url",
    "url": "http://jshop.jd.com/visualediting/preview.html?veBean.pageInstanceId=10324428&veBean.appId=457613",
    "title": "baseSlide()",
    "name": "baseSlide",
    "group": "Banner",
    "description": "<p>适合做banner轮播，可点击“圆点”切换（增加提示消息判断，即errorMessage()）</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imgArea",
            "defaultValue": ".jbannerImg",
            "description": "<p>所有大图最外层的div</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imgNode",
            "defaultValue": ".jbannerImg dl",
            "description": "<p>每一个大图外层的dl</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tabArea",
            "defaultValue": ".jbannerTab",
            "description": "<p>所有缩略小图最外层的div</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tabNode",
            "defaultValue": ".jbannerTab span",
            "description": "<p>每一个缩略小图的span</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "photoName",
            "defaultValue": ".jDesc",
            "description": "<p>图片描述</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "arrowLeft",
            "defaultValue": ".jPreOut",
            "description": "<p>左箭头</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "arrowRight",
            "defaultValue": ".jNextOut",
            "description": "<p>右箭头</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "arrowLeftOver",
            "defaultValue": ".jPreOver",
            "description": "<p>左箭头鼠标移动的样式类</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "arrowRightOver",
            "defaultValue": ".jNextOver",
            "description": "<p>右箭头鼠标移动的样式类</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "defaultClass",
            "defaultValue": "show",
            "description": "<p>当前显示的图片的样式类</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "defaultValue": ".jMessageRemind",
            "description": "<p>,pageMode=&quot;.j-edit-page&quot;  当处于装修页面，同时图片尺寸不符合布局宽度时，显示提示消息</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "slideDirection",
            "defaultValue": "left",
            "description": "<p>滑动方向,即水平向左滑动，可传入&quot;top&quot;，垂直向上滑动</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "timer",
            "defaultValue": "3",
            "description": "<p>每一张图片滑动的时间（单位：秒）</p>"
          }
        ]
      }
    },
    "header": {
      "examples": [
        {
          "title": "函数功能",
          "content": "1、判断当前是否处于装修页面，如果是且同时大图片宽度不等于布局的宽度，显示提示消息； \n2、当图片宽度不等于布局宽度时，自动拉伸或缩小图片宽度以撑满布局；\n3、轮播图高度等于图片高度，用户不用再选择轮播图高度和宽度，只需要确定自己想在哪个布局下做轮播图即可；\n4、html结构及样式可以自定义修改，只需将节点class调用传入即可。",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "demo",
        "content": "<div class=\"j-module\" module-function=\"baseSlide\" module-param=\"{imgArea:\".jbannerImg\", imgNode:\".jbannerImg dl\", tabArea:\".jbannerTab\", tabNode:\".jbannerTab span\", photoName:\".jDesc\", arrowLeft:\".jPreOut\", arrowRight:\".jNextOut\", arrowLeftOver:\"jPreOver\", arrowRightOver:\"jNextOver\", defaultClass:\"show\", message:\".jMessageRemind\", pageMode:\".j-edit-page\"}\">;\n也可以不传使用默认参数：<div class=\"j-module\" module-function=\"baseSlide\" module-param=\"{}\">;",
        "type": "json"
      },
      {
        "title": "code",
        "content": "baseSlide:function(args){\n\t\t\tif(args == undefined){\n\t\t\t\tif(validateData($(this).attr(\"module-param\"))){\n\t\t\t\t\tvar args = eval('('+$(this).attr(\"module-param\")+')');\n\t\t\t\t}\n\t\t\t}\n\t\t\tif(!$(this)[0]) return;\n\t\t\t\n\t\t\t// 定义传入的CSS调用变量\n\t\t\tvar _this=this,\n\t\t\t\tparam=$.extend({imgArea:\".jbannerImg\", imgNode:\".jbannerImg dl\", tabArea:\".jbannerTab\", tabNode:\".jbannerTab span\", photoName:\".jDesc\", arrowLeft:\".jPreOut\", arrowRight:\".jNextOut\", arrowLeftOver:\"jPreOver\", arrowRightOver:\"jNextOver\", defaultClass:\"show\", message:\".jMessageRemind\", pageMode:\".j-edit-page\", slideDirection:\"left\", timer:\"3\"}, args),\n\t\t\t\timgArea = $(_this).find(param.imgArea),\n\t\t\t\timgNode = $(_this).find(param.imgNode),\n\t\t\t\ttabArea = $(_this).find(param.tabArea),\n\t\t\t\ttabNode = $(_this).find(param.tabNode),\n\t\t\t\tphotoName = $(_this).find(param.photoName),\n\t\t\t\tarrowLeft = $(_this).find(param.arrowLeft),\n\t\t\t\tarrowRight = $(_this).find(param.arrowRight),\n\t\t\t\tarrowLeftOver = param.arrowLeftOver,\n\t\t\t\tarrowRightOver = param.arrowRightOver,\n\t\t\t\tdefaultClass = param.defaultClass,\n\t\t\t\tmessage = $(_this).find(param.message),\n\t\t\t\tpageMode = $(param.pageMode),\n\t\t\t\tslideDirection = param.slideDirection,\n\t\t\t\ttimer = param.timer*1000,\n\t\t\t\tscroll;\n\t\t\t\n\t\t\t\n\t\t\tjshop.module.ridLazy(_this);\n\t\t\tscroll = (slideDirection == \"top\")?\"scrollTop\":\"scrollLeft\";\n\n\t\t\t// 当处于装修页面，同时获取到的图像宽度和布局宽度不同时显示提示消息\n\t\t\tif(imgArea.find(\"img\").width() != $(_this).width()){\n\t\t\t\tif(pageMode[0]){jshop.module.Banner.errorMessage.call(this, message);}\n\t\t\t}\n\t\t\t\n\t\t\t// 初始化显示第一个\n\t\t\timgNode.eq(0).addClass(defaultClass);\n\t\t\ttabNode.eq(0).addClass(defaultClass);\n\t\t\tphotoName.text(imgNode.eq(0).find(\"img\").attr(\"title\"));\n\t\t\t\n\t\t\t// 初始化部分动态css属性\n\t\t\tvar imgHeight = imgNode.find(\"img\").height();\n\t\t\t$(_this).css({height:imgHeight});\n\t\t\timgArea.css({width:$(_this).parent().width(), height:$(_this).parent().height()});\n\t\t\tif(slideDirection == \"top\"){\n\t\t\t\timgArea.children().css({height:10000, width:\"auto\"});\n\t\t\t\timgNode.css({width:$(_this).parent().width(),height:\"auto\",\"float\":\"none\"});\n\t\t\t}else{\n\t\t\t\timgArea.children().css({width:10000, height:\"auto\"});\n\t\t\t\timgNode.css({width:$(_this).parent().width(),height:\"100%\",\"float\":\"left\"});\n\t\t\t};//将这个宽度写在css里，在ie6下面，获取到的父级宽度是被这个元素撑开的宽度\n\t\t\t\n\t\t\timgNode.find(\"img\").css({height:imgHeight,width:\"100%\"});//img的宽度写在css里，在ie6/7下面图片的高度会自动跟随宽度变化而变形\n\t\t\t\n\t\t\t// 定义局部变量\n\t\t\tvar\tindex = 0,\n\t\t\t\tmoveRange,\n\t\t\t\tpartTime,\n\t\t\t\tdirection = 1;\n\t\t\tif(slideDirection == \"top\"){moveRange = imgNode.height()}else{moveRange = imgNode.width()}\n\t\t\timgArea[0][scroll] = index * moveRange;\n\t\t\t\n\t\t\t// 默认循环显示图片\n\t\t\tvar time = setInterval(imgMove, timer);\n\t\t\t\n\t\t\t// 给每个tab缩略图绑定事件\n\t\t\ttabNode.each(function(i,elem){\n\t\t\t\t$(this).click(function(){\n\t\t\t\t\timgNode.eq(index).removeClass(defaultClass);\n\t\t\t\t\ttabNode.eq(index).removeClass(defaultClass);\n\t\t\t\t\tindex = i;\n\t\t\t\t\timgNode.eq(index).addClass(defaultClass);\n\t\t\t\t\ttabNode.eq(index).addClass(defaultClass);\n\t\t\t\t\tphotoName.text(imgNode.eq(index).find(\"img\").attr(\"title\"));\n\t\t\t\t\tallImgMove();\n\t\t\t\t});\n\t\t\t});\n\t\t\t\n\t\t\t// 每一张图片和所有图片\n\t\t\tfunction allImgMove(){\n\t\t\t\tclearInterval(partTime);\n\t\t\t\tclearInterval(time);\n\t\t\t\tpartTime = setInterval(oneImgMove, 30);\n\t\t\t\ttime = setInterval(imgMove, timer);\n\t\t\t}\n\t\t\t\n\t\t\t// 每一张图片分10次移动\n\t\t\tfunction oneImgMove(){\n\t\t\t\tvar nowMoveRange = (index * moveRange) - imgArea[0][scroll],\n\t\t\t\t\tpartImgRange = nowMoveRange > 0 ? Math.ceil(nowMoveRange / 10) : Math.floor(nowMoveRange / 10);\n\t\t\t\t\timgArea[0][scroll] += partImgRange;\n\t\t\t\tif (partImgRange == 0){\n\t\t\t\t\tclearInterval(partTime);\n\t\t\t\t\timgNode.eq(index).addClass(defaultClass);\n\t\t\t\t\ttabNode.eq(index).addClass(defaultClass);\n\t\t\t\t\tphotoName.text(imgNode.eq(index).find(\"img\").attr(\"title\"));\n\t\t\t\t\tpartImgRange = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\t\n\t\t\t// 所有图片移动\n\t\t\tfunction imgMove(){\n\t\t\t\tif (direction == 1){\n\t\t\t\t\tif (index < imgNode.length - 1){\n\t\t\t\t\t\tclassOper([imgNode,tabNode],defaultClass,true);\n\t\t\t\t\t}else{\n\t\t\t\t\t\tdirection = 0;\n\t\t\t\t\t\tclassOper([imgNode,tabNode],defaultClass,false);\n\t\t\t\t\t}\n\t\t\t\t}else{\n\t\t\t\t\tif (index > 0){\n\t\t\t\t\t\tclassOper([imgNode,tabNode],defaultClass,false);\n\t\t\t\t\t}else{\n\t\t\t\t\t\tdirection = 1;\n\t\t\t\t\t\tclassOper([imgNode,tabNode],defaultClass,true);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tphotoName.text(imgNode.eq(index).find(\"img\").attr(\"title\"));\n\t\t\t\tallImgMove();\n\t\t\t}\n\t\t\t\n\t\t\t// 节点css类名操作\n\t\t\tfunction classOper(arr,className,flag){\n\t\t\t\tarr.each(function(ind,n){\n\t\t\t\t\tn.eq(index).removeClass(className);\n\t\t\t\t})\n\t\t\t\tflag?(index++):(index--);\n\t\t\t\tarr.each(function(ind,n){\n\t\t\t\t\tn.eq(index).addClass(className);\n\t\t\t\t});\n\t\t\t}\n\t\t\t\n\t\t\t// 上一张图片\n\t\t\tarrowLeft.bind({\n\t\t\t\tclick:function(){\n\t\t\t\t\t// 判断当前是不是第一张\n\t\t\t\t\tif(index != 0){\n\t\t\t\t\t\tclassOper([imgNode,tabNode],defaultClass,false);\n\t\t\t\t\t\tallImgMove();\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\tmouseover:function(){$(this).addClass(arrowLeftOver);},\n\t\t\t\tmouseout:function(){$(this).removeClass(arrowLeftOver);}\n\t\t\t});\n\t\t\t\n\t\t\t// 下一张图片\n\t\t\tarrowRight.bind({\n\t\t\t\tclick:function(){\n\t\t\t\t\t// 判断当前是不是最后一张\n\t\t\t\t\tif(index < imgNode.length - 1){\n\t\t\t\t\t\tclassOper([imgNode,tabNode],defaultClass,true);\n\t\t\t\t\t\tallImgMove();\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\tmouseover:function(){$(this).addClass(arrowRightOver);},\n\t\t\t\tmouseout:function(){$(this).removeClass(arrowRightOver);}\n\t\t\t});\n\t\t}",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "Banner"
  },
  {
    "type": "url",
    "url": "http://jshop.jd.com/visualediting/preview.html?veBean.pageInstanceId=10324398&veBean.appId=457613",
    "title": "c_slide()",
    "name": "c_slide",
    "group": "Banner",
    "description": "<p>适合做banner轮播，含左右点击按钮，和半透明遮罩层，目前只支持左右滚动</p>",
    "examples": [
      {
        "title": "demo",
        "content": "<div class=\"j-module\" module-function=\"c_slide\" module-param=\"{height:'$height',width:'$!width',slideType:2,slideShow:0}\">\n    <div class=\"banner_left\"></div>\n    <div class=\"u_bannerpic\" id=\"big_list1\">\n        <ul id=\"big_list\">\n            #foreach($!banner in $!bannerContent)\n            #if($!banner.publish == 1)\n            <li><a href=\"$!banner.url\" target=\"_bank\"><img src=\"$!banner.imageUrl\" height=\"$!height\" width=\"$!width\"></a></li>\n            #end\n            #end\n        </ul>\n    </div>\n    <div class=\"banner_right\"></div>\n    <div class=\"btn_prev\"></div>\n    <div class=\"btn_next\"></div>\n</div>",
        "type": "json"
      },
      {
        "title": "参数注释",
        "content": "node：容器节点li\nslideNext：右按钮，默认是'.btn_next'\nslidePrev：左按钮，默认是'.btn_prev'\nheight：\".j-module\"的高度，默认是360\nwidth：\".j-module\"的宽度，默认是700\ntimer：轮播间隔时间，默认是2（单位：秒）\nslideShow：值为“1”时隐藏左右点击按钮，值为“0”时不隐藏，默认为“1”\nslideType：值为“1”时，轮播滚动结束时将回到第一张图片的位置重新开始轮播；值为“2”时，轮播将来回滚动，默认是“2”",
        "type": "json"
      },
      {
        "title": "code",
        "content": "c_slide: function(args){\n\tvar param=$.extend({node:'li',slideNext:'.btn_next',slidePrev:'.btn_prev',slideType:2,height:360,width:700,timer:2,slideShow:1}, args||{}),\n        _this=$(this),\n        _currentSlide = 0,\n        imgArea = $(_this).find(param.node),\n        FrameHeight = param.height,\n        FrameWidth = param.width,\n        slideNext = $(_this).find(param.slideNext),\n        slidePrev = $(_this).find(param.slidePrev),\n        slideLength = imgArea.length,\n        scrollType = 'left',    //方式（目前只有一种）\n        slideType = param.slideType,\n        slideShow = param.slideShow,\n        _duration = parseInt(parseFloat(param.timer || 0.5)*1000),\n        flag = true;\n    if(!imgArea.length) return;\n\n    if(slideShow==1){\n        slidePrev.hide();\n        slideNext.hide();\n    }\n\t//设置宽、高\n\t_this.css({'height':FrameHeight});\n\t_this.find('.banner_left').css({'height':FrameHeight,'width':(_this.width()-FrameWidth)/2});\n\t_this.find('.banner_right').css({'height':FrameHeight,'width':(_this.width()-FrameWidth)/2,'left':parseInt(FrameWidth)+parseInt((_this.width()-FrameWidth)/2)});\n\n\timgArea.css({'height':FrameHeight,'width':FrameWidth});\n\timgArea.find('img').css({'height':FrameHeight,'width':FrameWidth});\n\t_this.find('.u_bannerpic').css({'height':FrameHeight,'width':_this.width()});\n\t_this.find('ul').css({'left':-(FrameWidth-((_this.width()-FrameWidth)/2))});\n\tslideNext.css({'top':(FrameHeight-slidePrev.height())/2,'right':((_this.width()-FrameWidth)/2)+20});\n\tslidePrev.css({'top':(FrameHeight-slidePrev.height())/2,'left':((_this.width()-FrameWidth)/2)+20});\n\t//克隆第一张和最后一张\n\timgArea.eq(slideLength-1).after(imgArea.eq(0).clone());\n\timgArea.eq(0).before(imgArea.eq(slideLength-1).clone());\n\n    //给“上一个”、“下一个”按钮添加动作\n    function _event(){\n        slideNext.bind({\n            click:function(){\n                if (_currentSlide < slideLength - 1) {\n                     _currentSlide += 1;\n                     _go(_currentSlide);\n                 } else {\n                    flag=false;\n                 }\n\n            }\n        });\n        slidePrev.bind({\n            click:function(){\n                if (_currentSlide > 0) {\n                    _currentSlide -= 1;\n                    _go(_currentSlide);\n                } else {\n                    flag=false;\n                }\n            }\n        });\n        //定论鼠标划过时，自动轮换的处理\n        _this.bind('mouseover', function () {\n            slidePrev.show();\n            slideNext.show();\n            clearTimeout(autoExt);\n        });\n\n        _this.bind('mouseout', function () {\n            if(slideShow==1){\n                slidePrev.hide();\n                slideNext.hide();\n            }\n            clearTimeout(autoExt);\n            autoExt = setTimeout(function () {\n                extInterval();\n            },_duration);\n        });\n    }\n\n    function _go(index){\n        _currentSlide = index;\n        if (scrollType == \"left\") {\n            $(_this).find('ul').animate({\n                marginLeft: (-index * FrameWidth) + \"px\"\n            }, { duration: 600, queue: false });\n        }\n        imgArea.removeClass(\"visited\");\n        imgArea.eq(index).addClass(\"visited\");\n    }\n\n    function extInterval(){\n        if(slideType==1){\n            if (_currentSlide < slideLength - 1) {\n                _currentSlide += 1;\n                _go(_currentSlide);\n            } else {\n                _currentSlide = 0;\n                _go(0);\n            }\n        }else if (slideType==2){\n            if(flag){\n                if((_currentSlide+1)==(slideLength)){\n                    flag=false;\n                    _currentSlide -= 1;\n                }else{\n                    _currentSlide += 1;\n                }\n            }else{\n                flag==false;\n                if(_currentSlide==0){\n                    flag = true;\n                    _currentSlide += 1;\n                }else{\n                    _currentSlide -= 1;\n                }\n            }\n            _go(_currentSlide);\n        }\n        var self = this;\n        autoExt = setTimeout(function () {\n            extInterval();\n        }, _duration);\n    }\n    _event();\n    //开始自动轮换\n    autoExt = setTimeout(function () {\n        extInterval();\n    }, _duration);\n}",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "Banner"
  },
  {
    "type": "url",
    "url": "none",
    "title": "errorMessage()",
    "name": "errorMessage",
    "group": "Banner",
    "description": "<p>插入提示消息和10秒后删除提示消息</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>jquery对象</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "code",
        "content": "errorMessage:function(message){\n\t\t\tmessage.show(); setTimeout(function(){message.animate({top:-message.outerHeight(true)},200);},10000);\n\t\t}",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "Banner"
  },
  {
    "type": "url",
    "url": "http://jshop.jd.com/visualediting/preview.html?veBean.pageInstanceId=10324003&veBean.appId=457613",
    "title": "slide()",
    "name": "slide",
    "group": "Banner",
    "description": "<p>滑动（可供选择的参数在轮播中是最多的）--重新整理轮播图方法，增加图片透明效果。<a target=\"_blank\" href=\"http://jshop.jd.com/visualediting/preview.html?veBean.pageInstanceId=10324003&veBean.appId=457613\">查看demo</a></p>",
    "examples": [
      {
        "title": "demo",
        "content": "<div class=\"j-module\" module-function=\"slide\" module-param=\"{slideDirection:'left',subFunction:'moveEffect',timer:'$!timer'}\">\n    #if(!$!height)\n    <div class=\"jMessageRemind\" style=\"display:block; position:static;\"><br /><br />此模板需要在当前轮播图模块的“设置”中，配置图片的高度和宽度后才能生效！<br /><br /></div>\n    #else\n    <div class=\"jbannerImg\" style=\"width:$!{width}px; height:$!{height}px;\">\n        <div class=\"jImgNodeArea\">\n            #foreach($!banner in $!bannerContent)\n                #if($!banner.publish == 1)\n            <dl background=\"$!banner.bgColor\" ref=\"$!banner.url\">\n                <dt><img src=\"$!banner.imageUrl\" title=\"$!banner.name\" width=\"$!width\" height=\"$!height\" /></dt>\n                <dd></dd>\n            </dl>\n               #end\n           #end\n        </div> \n    </div>\n   <div class=\"jbannerTab\">\n        <div class=\"jbannerThumbnail\">\n            <em class=\"jPreOut\"></em>\n            #foreach($!banner in $!bannerContent)\n                #if($!banner.publish == 1)\n                    #if($!banner.thumUrl)\n                    <span><img src=\"$!banner.thumUrl\" /></span>\n                    #else\n                    <span><img src=\"//img13.360buyimg.com/cms/g14/M0A/08/05/rBEhVlIkY28IAAAAAAAFJD1FlqQAABmJAGBs3wAAAU8667.gif\" /></span>\n                    #end\n               #end\n           #end        \n           <em class=\"jNextOut\"></em>\n        </div>\n        <label class=\"jDesc\"></label>\n        <div class=\"jShade\"></div>\n    </div>\n    #end\n</div>",
        "type": "json"
      },
      {
        "title": "参数注释",
        "content": "imgArea：所有大图最外层的div,eg:模版默认是\".jbannerImg\"\nimgNode：每一个大图外层的dl,eg:默认是\".jbannerImg dl\"\ntabArea：所有缩略小图最外层的div,eg:默认是\".jbannerTab\"\ntabNode：每一个缩略小图的span,eg:默认是\".jbannerTab span\"\nphotoName：图片描述,默认是\".jDesc\"\narrowLeft：左箭头,默认是\".jPreOut\"\narrowRight：右箭头,默认是\".jNextOut\"\narrowLeftOver：左箭头鼠标移动的样式类,默认是\"jPreOver\"\narrowRightOver：右箭头鼠标移动的样式类,默认是\"jNextOver\"\ndefaultClass：当前显示的图片的样式类,默认是\"show\"\nmessage:默认是\".jMessageRemind\", pageMode:默认是\".j-edit-page\" 当处于装修页面，同时图片尺寸不符合布局宽度时，显示提示消息\nslideDirection:滑动方向，默认是\"left\" ，即水平向左，可传入\"top\"，垂直向上滑动\ntimer:每一张图片滑动的时间，默认是\"3\"（单位：秒）\nsubFunction：轮播图所有效果（transparentEffect--通过图片透明度变化来实现图片切换，此时图片不再滚动；moveEffect--图片切换以滚动的形式），默认是“transparentEffect”\neventType：给每个tab缩略图绑定事件类型，默认是“click”\nshowArrow：是否显示左右移动箭头，值为“1”时显示左右箭头，值为“0”时不显示，只有当鼠标hover时才显现。默认是“1”\nisCircular：判断是否是圆形循环，只支持渐变方式，（false时轮播将来回滚动；true时，轮播滚动结束时将回到第一张图片的位置重新开始轮播）默认是“false”\nisTabAvailable：切换切点是否可用，可用的话将给每个tab缩略图绑定事件，默认是“true”\nisAreaClick：轮播区域是否可以点击跳转链接，默认是“true”\nisHoverStop：是否鼠标移动到内容区域时，停止轮播，默认是“true”",
        "type": "json"
      },
      {
        "title": "code",
        "content": "slide:function(args){\n\t// 定义传入的CSS调用变量\n\tvar _this=this,\n\t\tparam=$.extend({imgArea:'.jbannerImg', imgNodeArea:'.jImgNodeArea', imgNode:'.jbannerImg dl', tabArea:'.jbannerTab', tabNode:'.jbannerTab span', photoName:'.jDesc', arrowLeft:'.jPreOut', arrowRight:'.jNextOut', arrowLeftOver:'jPreOver', arrowRightOver:'jNextOver', defaultClass:'show', slideDirection:'left', timer:'3', subFunction:'transparentEffect', eventType:'click', showArrow:1, isCircular:false, isTabAvailable:true, isAreaClick:true, isHoverStop:true}, args),\n\t\timgArea = $(_this).find(param.imgArea),\n\t\timgNode = $(_this).find(param.imgNode),\n\t\ttabArea = $(_this).find(param.tabArea),\n\t\ttabNode = $(_this).find(param.tabNode),\n\t\tphotoName = $(_this).find(param.photoName),\n\t\tdefaultClass = param.defaultClass,\n\t\teventType = param.eventType,\n\t\ttimer = !param.timer*1000?3000:param.timer*1000,\n\t\tscroll,\n\t\timgNodeArea = $(_this).find(param.imgNodeArea),\n\t\tisFull = param.isFull;\n\t\n\t//全局变量\n\tvar index = 0,direction = 1,time = null,moveRange = 0,partTime = null,animate = null,enterFlag = false;\n\tif(!imgNode.length) return;\n\t\n\t//是否鼠标移动到内容区域时，停止轮播\n\tif(param.isHoverStop){\n\t\timgArea.bind({\n\t\t\tmouseenter:function(){\n\t\t\t\tenterFlag = true;\n\t\t\t\t_stop();\n\t\t\t},\n\t\t\tmouseleave:function(){\n\t\t\t\tenterFlag = false;\n\t\t\t\ttime = setTimeout(imgMove, timer);\t\n\t\t\t}\n\t\t});\n\t}\n\t//轮播图所有效果\n\tjshop.module.ridLazy(_this);\n\tvar banner = {\n\t\ttransparentEffect : function(){\n\t\t\t//初始化\n\t\t\t$(_this).css({'background-color':imgNode.eq(index).attr('background')});\n\t\t\t\n\t\t\t// 调用函数\n\t\t\tinit();\n\t\t\tif(param.isTabAvailable){triggerThumbnail();}//如果切换切点可用\n\t\t\ttriggerDirection();\n\t\t\tif(param.showArrow!=1){triggerArrow();}\n\t\t\tanimate = transparent;\n\t\t\ttime = setTimeout(imgMove, timer);\n\t\t},\n\t\tmoveEffect : function(){\n\t\t\tvar isTop = (param.slideDirection == 'top')?true:false;\n\t\t\tscroll = (isTop)?\"scrollTop\":\"scrollLeft\";\n\t\t\t\n\t\t\t//初始化\n\t\t\t$(_this).css({'background-color':imgNode.eq(index).attr('background')});\n\t\t\tif(isTop){\n\t\t\t\timgNodeArea.css({height:20000, width:$(_this).width()});\n\t\t\t\timgNode.css({width:imgNodeArea.width(),height:\"auto\",\"float\":\"none\"});\n\t\t\t\tmoveRange = imgNode.height();\n\t\t\t\timgArea[0][scroll] = index * moveRange;\n\t\t\t}else{\n\t\t\t\timgNodeArea.css({width:20000});\n\t\t\t\timgNode.css({width:imgNode.find(\"img\").width(),height:\"100%\",\"float\":\"left\"});//将这个宽度写在css里，在ie6下面，获取到的父级宽度是被这个元素撑开的宽度\n\t\t\t\tmoveRange = imgNode.width();\n\t\t\t\timgArea[0][scroll] = index * moveRange;\n\t\t\t};\n\t\t\t\n\t\t\t// 调用函数\n\t\t\tinit();\n\t\t\tif(param.isTabAvailable){triggerThumbnail();}//如果切换切点可用\n\t\t\ttriggerDirection();\t\n\t\t\tif(param.showArrow!=1){triggerArrow();}\n\t\t\tanimate = oneImgMove;\n\t\t\ttime = setTimeout(imgMove, timer);\n\t\t}\n\t};\n\t\n\t//根据传入的子方法名执行对应的子方法\n\tif(banner[param.subFunction])\n\t\tbanner[param.subFunction].call(_this);\n\t\n\t//轮播图初始化\n\tfunction init(){\n\t\timgArea.css({width:imgNode.find(\"img\").width(),height:imgNode.find(\"img\").height()});\n\t\timgNode.eq(0).addClass(defaultClass);\n\t\ttabNode.eq(0).addClass(defaultClass);\n\t\tphotoName.text(imgNode.eq(0).find(\"img\").attr(\"title\"));\n\t\t\n\t\tif(param.isAreaClick){\n\t\t\t$(_this).click(function(){\n\t\t\t\twindow.open(imgNode.eq(index).attr('ref'));\n\t\t\t});\n\t\t}\n\t\t\n\t\tautoMiddle();\n\t\t$(window).resize(function(){\n\t\t\tautoMiddle();\n\t\t});\n\t}\n\t\n\t// 轮播图自适应居中于屏幕中间\n\tfunction autoMiddle(){\n\t\tvar extra = imgArea.width()-$(_this).width();\n\t\tif(extra>0){\n\t\t\timgArea.css({'margin-left':-extra/2});\n\t\t}else{\n\t\t\timgArea.css('margin','0 auto');\n\t\t}\n\t}\n\n\t//给每个tab缩略图绑定事件\n\tfunction triggerThumbnail(){\n\t\ttabNode.each(function(i,elem){\n\t\t\t$(elem)[eventType](function(){\n\t\t\t\timgNode.eq(index).removeClass(defaultClass);\n\t\t\t\ttabNode.eq(index).removeClass(defaultClass);\n\t\t\t\tindex = i;\n\t\t\t\timgNode.eq(index).addClass(defaultClass);\n\t\t\t\ttabNode.eq(index).addClass(defaultClass);\n\t\t\t\tphotoName.text(imgNode.eq(index).find(\"img\").attr(\"title\"));\n\t\t\t\tanimate();\n\t\t\t\treturn false;\n\t\t\t});\n\t\t});\n\t}\n\t\n\t//点击箭头或数字时，重置时间\n\tfunction _stop(){\n\t\tclearTimeout(time);\n\t\ttime = null;\n\t\t//clearTimeout(partTime);\n\t\t//partTime = null;\n\t\timgNodeArea.clearQueue();\n\t\timgNode.eq(index).clearQueue();\n\t}\n\t\n\t//切换图片和缩略图\n\t \n\tfunction imgMove(){\n\t\t//判断是否是圆形循环，只支持渐变方式\n\t\tif(param.isCircular){\n\t\t\tif (index < imgNode.length - 1){\n\t\t\t\tclassOper([imgNode,tabNode],defaultClass,true);\n\t\t\t}else{\n\t\t\t\tindex = -1;\n\t\t\t\tclassOper([imgNode,tabNode],defaultClass,true);\n\t\t\t\t\n\t\t\t}\n\t\t}else{\n\t\t\tif (direction == 1){\n\t\t\t\tif (index < imgNode.length - 1){\n\t\t\t\t\tclassOper([imgNode,tabNode],defaultClass,true);\n\t\t\t\t}else{\n\t\t\t\t\tdirection = 0;\n\t\t\t\t\tclassOper([imgNode,tabNode],defaultClass,false);\n\t\t\t\t}\n\t\t\t}else{\n\t\t\t\tif (index > 0){\n\t\t\t\t\tclassOper([imgNode,tabNode],defaultClass,false);\n\t\t\t\t}else{\n\t\t\t\t\tdirection = 1;\n\t\t\t\t\tclassOper([imgNode,tabNode],defaultClass,true);\n\t\t\t\t}\n\t\t\t}\t\n\t\t}\n\t\t\n\t\tphotoName.text(imgNode.eq(index).find(\"img\").attr(\"title\"));\n\t\tanimate();\n\t}\n\t\n\t//鼠标移动显示左右移动箭头\n\tfunction triggerArrow(){\n\t\tvar arrowLeft = $(_this).find(param.arrowLeft),arrowRight = $(_this).find(param.arrowRight);\n\t\t$(_this).bind({\n\t\t\tmouseover:function(){\n\t\t\t\tarrowLeft.show();\n\t\t\t\tarrowRight.show();\n\t\t\t},\n\t\t\tmouseout:function(){\n\t\t\t\tarrowLeft.hide();\n\t\t\t\tarrowRight.hide();\n\t\t\t}\n\t\t });\n\t}\n\t\n\t//处理左右移动箭头\n\tfunction triggerDirection(){\n\t\tvar arrowLeft = $(_this).find(param.arrowLeft),arrowRight = $(_this).find(param.arrowRight),\n\t\t\tarrowLeftOver = param.arrowLeftOver, arrowRightOver = param.arrowRightOver;\n\t\t\n\t\tarrowLeft.bind({\n\t\t\tclick:function(){\n\t\t\t\tif(index != 0){// 判断当前是不是第一张\n\t\t\t\t\tclassOper([imgNode,tabNode],defaultClass,false);\n\t\t\t\t\tanimate();\n\t\t\t\t}else{\n\t\t\t\t\t//判断是否是圆形循环，只支持渐变方式\n\t\t\t\t\tif(param.isCircular){\n\t\t\t\t\t\tclassOper([imgNode,tabNode],defaultClass,false);\n\t\t\t\t\t\tindex = imgNode.length;\n\t\t\t\t\t\tclassOper([imgNode,tabNode],defaultClass,false);\n\t\t\t\t\t\tanimate();\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\treturn false;\n\t\t\t},\n\t\t\tmouseover:function(){$(this).addClass(arrowLeftOver);},\n\t\t\tmouseout:function(){$(this).removeClass(arrowLeftOver);}\n\t\t});\n\t\tarrowRight.bind({\n\t\t\tclick:function(){\n\t\t\t\tif(index < imgNode.length - 1){// 判断当前是不是最后一张\n\t\t\t\t\tclassOper([imgNode,tabNode],defaultClass,true);\n\t\t\t\t\tanimate();\n\t\t\t\t}else{\n\t\t\t\t\t//判断是否是圆形循环，只支持渐变方式\n\t\t\t\t\tif(param.isCircular){\n\t\t\t\t\t\tindex = -1;\n\t\t\t\t\t\tclassOper([imgNode,tabNode],defaultClass,true);\n\t\t\t\t\t\tanimate();\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\treturn false;\n\t\t\t},\n\t\t\tmouseover:function(){$(this).addClass(arrowRightOver);},\n\t\t\tmouseout:function(){$(this).removeClass(arrowRightOver);}\n\t\t});\n\t}\n\t\n\t//透明效果\n\tfunction transparent(){\n\t\timgNode.animate({\n\t\t\topacity: 0\n\t\t  }, 0, function() {\n\t\t  });\n\t\t$(_this).css({'background-color':imgNode.eq(index).attr('background')});\n\t\timgNode.eq(index).animate({\n\t\t\topacity: 1\n\t\t  }, 1000, function() {\n\t\t\t  _stop();\n\t\t\t  if(enterFlag) return;\n\t\t\t  time = setTimeout(imgMove, timer);\n\t\t  });\n\t}\n\t\n\t// 移动效果：每一张图片分10次移动\n\tfunction oneImgMove(){\n\t\tvar nowMoveRange = (index * moveRange) - imgArea[0][scroll],\n\t\tpartImgRange = nowMoveRange > 0 ? Math.ceil(nowMoveRange / 10) : Math.floor(nowMoveRange / 10);\n\t\timgArea[0][scroll] += partImgRange;\n\t\tif (partImgRange == 0){\n\t\t\timgNode.eq(index).addClass(defaultClass);\n\t\t\ttabNode.eq(index).addClass(defaultClass);\n\t\t\tphotoName.text(imgNode.eq(index).find(\"img\").attr(\"title\"));\n\t\t\tpartImgRange = null;\n\t\t\t_stop();\n\t\t\tif(!enterFlag)\n\t\t\t\ttime = setTimeout(imgMove, timer);\n\t\t}\n\t\telse{\n\t\t\tpartTime = setTimeout(oneImgMove,30);\t\n\t\t}\n\t\t$(_this).css({'background-color':imgNode.eq(index).attr('background')});\n\t}\n\n\t//节点css类名操作 \n\tfunction classOper(arr,className,flag){\n\t\tarr.each(function(ind,n){\n\t\t\tn.eq(index).removeClass(className);\n\t\t});\n\t\tflag?(index++):(index--);\n\t\tarr.each(function(ind,n){\n\t\t\tn.eq(index).addClass(className);\n\t\t});\n\t}\n\t\n}",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "Banner"
  },
  {
    "type": "ATTENTION",
    "url": "扩展了公共模块函数，并且包含GoodsRec、UserDefine、Banner、tuan模块对象（品牌推荐模块）",
    "title": "ATTENTION",
    "name": "ATTENTION",
    "group": "BrandSale",
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "BrandSale"
  },
  {
    "type": "ATTENTION",
    "url": "倒计时模块",
    "title": "ATTENTION",
    "name": "ATTENTION",
    "group": "Countdown",
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "Countdown"
  },
  {
    "type": "url",
    "url": "http://jshop.jd.com/visualediting/preview.html?veBean.pageInstanceId=10348438&veBean.appId=457613",
    "title": "base()",
    "name": "base",
    "group": "Countdown",
    "description": "<p>只需要设置一个结束时间点，就可以自动倒数</p>",
    "examples": [
      {
        "title": "demo",
        "content": "<div class=\"j-module\" module-function=\"base\" module-param=\"{countDownInfo:'$!countDownInfo',hasDay:false,minuteCnt:'.minutes',secondCnt:'.seconds',minsecCnt:'.minsec', hasMinSec: true}\" >\n    <div class=\"jTime\">\n        <span class=\"jText\">距离活动结束还有:</span>\n        <span class=\"jNum\">\n            <em class=\"minutes\">00</em><i>分</i><em class=\"seconds\">00</em><i>秒</i><em class=\"minsec\">00</em>\n        </span>\n    </div>\n</div>",
        "type": "json"
      },
      {
        "title": "参数注释",
        "content": "countDownInfo：活动结束时间\nhasDay：true/false,是否显示天数，默认是true\ndayCnt：日期节点\nhourCnt：小时节点\nminuteCnt：分钟节点\nsecondCnt：秒钟节点\nminsecCnt：比秒小的时间单位节点（默认是1秒=99）\nhasMinSec：true/false,true时倒计时将显示 minsecCnt 节点，默认是false",
        "type": "json"
      },
      {
        "title": "code",
        "content": "base : (function(){\n    var _timer = null,\n                _sysTime = null,\n                _countdownList = null;\n            return function(arg){\n                var _this = $(this),\n                _args = jQuery.extend({\n                    hasDay : true,\n                    hasMinSec: false,\n                    dayCnt : '',\n                    hourCnt : '',\n                    minuteCnt : '',\n                    secondCnt : '',\n                    minsecCnt : ''\n                },arg || {}),\n                _cut_time = null;\n\n                function _init(){\n                    if(!_args.countDownInfo) return;\n                    _get_cut_time();\n                    _this.data('cutTime',_cut_time).data('arg',_args).data('over',false);\n                    _countdownList = $('[module-function=\"base\"]').toArray();\n                    _timer = null;\n                    if(!_timer){\n                        w.getServerTime(function(date){\n                            _sysTime = date;\n                             if(!_timer)\n                                _count_down()\n                        });\n                    }\n                }\n\n                function _get_cut_time(){\n                    var __cut_time_str = _args.countDownInfo,\n                        __row_temp = __cut_time_str.split(' '),\n                        __inplicit = __row_temp[0].split('-'),\n                        __explicit = __row_temp[1].split(':');\n                    _cut_time = new Date(Number(__inplicit[0]),(Number(__inplicit[1]) + 11)%12,Number(__inplicit[2]),Number(__explicit[0]),Number(__explicit[1]),Number(__explicit[2]));\n                }\n\n                function _get_count_down_item() {\n                    var _result = [];\n                    for (var i = 0, len = _countdownList.length ; i < len; i++) {\n                        var __module = $(_countdownList[i]),\n                            __cut_time = __module.data('cutTime'),\n                            __arg = __module.data('arg'),\n                            __left_time = parseInt((__cut_time - _sysTime)/1000);\n                        if(__arg){\n                            _result.push({\n                                __module: __module,\n                                __arg: __arg,\n                                __left_time: __left_time\n                            });\n                        }\n                    };\n                    return _result;\n                }\n\n                function _count_down(){\n                    var arr = _get_count_down_item();\n                    for(var i = 0, len = arr.length; i < len; i++) {\n                        (function(i){\n                            var __module = arr[i].__module,\n                            __arg = arr[i].__arg,\n                            __left_time = arr[i].__left_time;\n                            _timer = setInterval(function(){\n                                if(__left_time < 0) {\n                                    clearInterval(_timer);\n                                    return;\n                                }\n                                var __day = Math.floor(__left_time/(24*3600)),\n                                    __hour = Math.floor(__left_time/3600) - (__arg.hasDay?__day*24:0),\n                                    __minute = Math.floor(__left_time%3600/60),\n                                    __second = __left_time%60;\n                                if(__arg.hasDay){\n                                    __module.find(__arg.dayCnt).html(__day > 9?__day:'0' + __day);\n                                }\n                                __module.find(__arg.hourCnt).html(__hour > 9?__hour:'0' + __hour);\n                                __module.find(__arg.minuteCnt).html(__minute > 9? __minute:'0' + __minute);\n                                __module.find(__arg.secondCnt).html(__second > 9?__second:'0' + __second);\n                                if(__arg.hasMinSec) {\n                                    var j = 99;\n                                    minTimer = setInterval(function(){\n                                        if(__module.find(__arg.hourCnt).html() === '00' && __module.find(__arg.minuteCnt).html() === '00' && __module.find(__arg.secondCnt).html() === '00') {\n                                            clearInterval(minTimer);\n                                            __module.find(__arg.minsecCnt).html('00');\n                                            return;\n                                        }\n                                        j = parseInt(j);\n                                        if(j < 10) {\n                                            j = '0' + j;\n                                        }\n                                        if (j == '00') {\n                                            j = 99;\n                                        }\n                                        __module.find(__arg.minsecCnt).html(j);\n                                        j--;\n                                    }, 10);\n                                }\n                                __left_time--;\n                            },1000);\n                        })(i);\n                    }\n                }\n                _init();\n\n            };\n})()",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "Countdown"
  },
  {
    "type": "ATTENTION",
    "url": "扩展了公共模块函数，并包含了cateFlashSale、newLimitTime、HotRanking、Social模块对象（商品智能推荐模块）",
    "title": "ATTENTION",
    "name": "ATTENTION",
    "group": "GoodsIntRec",
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "GoodsIntRec"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "getGoodsRec()",
    "name": "getGoodsRec",
    "group": "GoodsIntRec",
    "description": "<p>商品智能推荐业务逻辑</p>",
    "examples": [
      {
        "title": "demo",
        "content": "<div class=\"j-module\" module-function=\"getGoodsRec\" module-param=\"{c1 : 6994, c2 : 6995, c3 : 7002}\">\n    <span class=\"btn-replace\">换一换</span>\n    <span class=\"s-mt\">猜你喜欢</span>\n    <div class=\"bi-area\">\n        <ul><li class=\"current\"><div class=\"item\"><a href=\"//item.jd.com&quot;/1000335182.html&quot;\" target=\"_blank\" class=\"item-pic\"><img src=\"//img14.360buyimg.com/n6/jfs/t2395/108/44791315/121080/274f7e1e/55e91abcNf8169f70.jpg\" alt=\"e-WEITA/味它 优质狗粮  [成犬粮]10公斤/箱\" height=\"230\" width=\"230\"></a><span class=\"info\"><a href=\"//item.jd.com&quot;/1000335182.html&quot;\" target=\"_blank\" class=\"desc\">e-WEITA/味它 优质狗粮  [成犬粮]10公斤/箱</a><span class=\"jd-price\"><a href=\"//gate.jd.com/InitCart.aspx?pid=1000335182&amp;pcount=1&amp;ptype=1\" target=\"_blank\" class=\"add-to-cart\">点击抢购</a><span class=\"jText\">售价：</span><span class=\"jd-num\">128.00</span></span></span></div></li><li class=\"current\"><div class=\"item\"><a href=\"//item.jd.com&quot;/1000055710.html&quot;\" target=\"_blank\" class=\"item-pic\"><img src=\"//img14.360buyimg.com/n6/jfs/t967/67/931600392/98347/b066970/555d3f28N765e66ea.jpg\" alt=\"爱倍宠物狗主粮 狗粮天然成犬粮10kg金毛哈士奇萨摩耶拉布拉多德牧边牧专用中小大型犬 狗狗\" height=\"230\" width=\"230\"></a><span class=\"info\"><a href=\"//item.jd.com&quot;/1000055710.html&quot;\" target=\"_blank\" class=\"desc\">爱倍宠物狗主粮 狗粮天然成犬粮10kg金毛哈士奇萨摩耶拉布拉多德牧边牧专用中小大型犬 狗狗</a><span class=\"jd-price\"><a href=\"//gate.jd.com/InitCart.aspx?pid=1000055710&amp;pcount=1&amp;ptype=1\" target=\"_blank\" class=\"add-to-cart\">点击抢购</a><span class=\"jText\">售价：</span><span class=\"jd-num\">95.00</span></span></span></div></li><li class=\"current\"><div class=\"item\"><a href=\"//item.jd.com&quot;/1000103012.html&quot;\" target=\"_blank\" class=\"item-pic\"><img src=\"//img14.360buyimg.com/n6/jfs/t1906/233/40922029/135401/938bc4f8/55e92070Nc55478d4.jpg\" alt=\"E-WEITA/味它 【贵宾泰迪犬专用】成犬粮狗粮5kg/箱\" height=\"230\" width=\"230\"></a><span class=\"info\"><a href=\"//item.jd.com&quot;/1000103012.html&quot;\" target=\"_blank\" class=\"desc\">E-WEITA/味它 【贵宾泰迪犬专用】成犬粮狗粮5kg/箱</a><span class=\"jd-price\"><a href=\"//gate.jd.com/InitCart.aspx?pid=1000103012&amp;pcount=1&amp;ptype=1\" target=\"_blank\" class=\"add-to-cart\">点击抢购</a><span class=\"jText\">售价：</span><span class=\"jd-num\">88.00</span></span></span></div></li><li class=\"current\"><div class=\"item\"><a href=\"//item.jd.com&quot;/598279.html&quot;\" target=\"_blank\" class=\"item-pic\"><img src=\"//img14.360buyimg.com/n6/jfs/t2134/329/1659116517/301931/50a06e14/56696556Nd3454874.jpg\" alt=\"皇家royalcanin 宠物PD30贵宾成犬狗粮 3kg\" height=\"230\" width=\"230\"></a><span class=\"info\"><a href=\"//item.jd.com&quot;/598279.html&quot;\" target=\"_blank\" class=\"desc\">皇家royalcanin 宠物PD30贵宾成犬狗粮 3kg</a><span class=\"jd-price\"><a href=\"//gate.jd.com/InitCart.aspx?pid=598279&amp;pcount=1&amp;ptype=1\" target=\"_blank\" class=\"add-to-cart\">点击抢购</a><span class=\"jText\">售价：</span><span class=\"jd-num\">171.00</span></span></span></div></li><li><div class=\"item\"><a href=\"//item.jd.com&quot;/660056.html&quot;\" target=\"_blank\" class=\"item-pic\"><img src=\"//img14.360buyimg.com/n6/g12/M00/06/18/rBEQYFGUq2IIAAAAAAHkqVoodZsAABUwgHyaU8AAeTB558.jpg\" alt=\"珍宝SANPO 宠物欢乐骨狗粮 10kg\" height=\"230\" width=\"230\"></a><span class=\"info\"><a href=\"//item.jd.com&quot;/660056.html&quot;\" target=\"_blank\" class=\"desc\">珍宝SANPO 宠物欢乐骨狗粮 10kg</a><span class=\"jd-price\"><a href=\"//gate.jd.com/InitCart.aspx?pid=660056&amp;pcount=1&amp;ptype=1\" target=\"_blank\" class=\"add-to-cart\">点击抢购</a><span class=\"jText\">售价：</span><span class=\"jd-num\">129.00</span></span></span></div></li><li><div class=\"item\"><a href=\"//item.jd.com&quot;/1186517.html&quot;\" target=\"_blank\" class=\"item-pic\"><img src=\"//img14.360buyimg.com/n6/jfs/t208/80/3181535898/110213/a987537e/53e2e797N9e77510b.jpg\" alt=\"麦富迪（Myfoodie） 宠物狗粮 藻趣儿成犬粮牛肉味7.5kg 犬粮\" height=\"230\" width=\"230\"></a><span class=\"info\"><a href=\"//item.jd.com&quot;/1186517.html&quot;\" target=\"_blank\" class=\"desc\">麦富迪（Myfoodie） 宠物狗粮 藻趣儿成犬粮牛肉味7.5kg 犬粮</a><span class=\"jd-price\"><a href=\"//gate.jd.com/InitCart.aspx?pid=1186517&amp;pcount=1&amp;ptype=1\" target=\"_blank\" class=\"add-to-cart\">点击抢购</a><span class=\"jText\">售价：</span><span class=\"jd-num\">79.00</span></span></span></div></li><li><div class=\"item\"><a href=\"//item.jd.com&quot;/1000055733.html&quot;\" target=\"_blank\" class=\"item-pic\"><img src=\"//img14.360buyimg.com/n6/jfs/t1282/229/212707051/139501/9956fba3/555d4361Na042ce43.jpg\" alt=\"爱倍(贝)宠物主粮狗粮天然营养配方幼犬粮10kg 比熊金毛拉布拉多德牧哈士奇萨摩耶\" height=\"230\" width=\"230\"></a><span class=\"info\"><a href=\"//item.jd.com&quot;/1000055733.html&quot;\" target=\"_blank\" class=\"desc\">爱倍(贝)宠物主粮狗粮天然营养配方幼犬粮10kg 比熊金毛拉布拉多德牧哈士奇萨摩耶</a><span class=\"jd-price\"><a href=\"//gate.jd.com/InitCart.aspx?pid=1000055733&amp;pcount=1&amp;ptype=1\" target=\"_blank\" class=\"add-to-cart\">点击抢购</a><span class=\"jText\">售价：</span><span class=\"jd-num\">99.00</span></span></span></div></li><li><div class=\"item\"><a href=\"//item.jd.com&quot;/709806.html&quot;\" target=\"_blank\" class=\"item-pic\"><img src=\"//img14.360buyimg.com/n6/jfs/t2554/17/812672508/284227/ccfe811d/566975a6N0a700cc4.jpg\" alt=\"皇家royalcanin 宠物狗粮 小型犬奶糕 MIS30-怀孕哺乳母犬和离乳期至2月龄幼犬 1kg\" height=\"230\" width=\"230\"></a><span class=\"info\"><a href=\"//item.jd.com&quot;/709806.html&quot;\" target=\"_blank\" class=\"desc\">皇家royalcanin 宠物狗粮 小型犬奶糕 MIS30-怀孕哺乳母犬和离乳期至2月龄幼犬 1kg</a><span class=\"jd-price\"><a href=\"//gate.jd.com/InitCart.aspx?pid=709806&amp;pcount=1&amp;ptype=1\" target=\"_blank\" class=\"add-to-cart\">点击抢购</a><span class=\"jText\">售价：</span><span class=\"jd-num\">60.00</span></span></span></div></li><li><div class=\"item\"><a href=\"//item.jd.com&quot;/1034165843.html&quot;\" target=\"_blank\" class=\"item-pic\"><img src=\"//img14.360buyimg.com/n6/jfs/t2071/180/1663218845/153255/bbdfc67b/5667ece7N32709cdd.jpg\" alt=\"耐威克宠物狗粮 泰迪/贵宾狗粮成犬 5kg\" height=\"230\" width=\"230\"></a><span class=\"info\"><a href=\"//item.jd.com&quot;/1034165843.html&quot;\" target=\"_blank\" class=\"desc\">耐威克宠物狗粮 泰迪/贵宾狗粮成犬 5kg</a><span class=\"jd-price\"><a href=\"//gate.jd.com/InitCart.aspx?pid=1034165843&amp;pcount=1&amp;ptype=1\" target=\"_blank\" class=\"add-to-cart\">点击抢购</a><span class=\"jText\">售价：</span><span class=\"jd-num\">105.00</span></span></span></div></li><li><div class=\"item\"><a href=\"//item.jd.com&quot;/1069301.html&quot;\" target=\"_blank\" class=\"item-pic\"><img src=\"//img14.360buyimg.com/n6/g14/M07/12/15/rBEhVlMMP5UIAAAAAAHfRkQher8AAJI_wBUqeIAAd9e504.jpg\" alt=\"耐威克（Navarch） 宠物天然粮全犬种成犬犬粮10kg\" height=\"230\" width=\"230\"></a><span class=\"info\"><a href=\"//item.jd.com&quot;/1069301.html&quot;\" target=\"_blank\" class=\"desc\">耐威克（Navarch） 宠物天然粮全犬种成犬犬粮10kg</a><span class=\"jd-price\"><a href=\"//gate.jd.com/InitCart.aspx?pid=1069301&amp;pcount=1&amp;ptype=1\" target=\"_blank\" class=\"add-to-cart\">点击抢购</a><span class=\"jText\">售价：</span><span class=\"jd-num\">158.00</span></span></span></div></li><li><div class=\"item\"><a href=\"//item.jd.com&quot;/1137470.html&quot;\" target=\"_blank\" class=\"item-pic\"><img src=\"//img14.360buyimg.com/n6/g16/M00/0C/03/rBEbRlOGjWwIAAAAAAHRDw_bxQ4AACW6QEiKJ4AAdEn321.jpg\" alt=\"伯纳天纯（Pure&amp;Natural） 宠物狗粮中大型犬幼犬15kg\" height=\"230\" width=\"230\"></a><span class=\"info\"><a href=\"//item.jd.com&quot;/1137470.html&quot;\" target=\"_blank\" class=\"desc\">伯纳天纯（Pure&amp;Natural） 宠物狗粮中大型犬幼犬15kg</a><span class=\"jd-price\"><a href=\"//gate.jd.com/InitCart.aspx?pid=1137470&amp;pcount=1&amp;ptype=1\" target=\"_blank\" class=\"add-to-cart\">点击抢购</a><span class=\"jText\">售价：</span><span class=\"jd-num\">425.00</span></span></span></div></li><li><div class=\"item\"><a href=\"//item.jd.com&quot;/631645.html&quot;\" target=\"_blank\" class=\"item-pic\"><img src=\"//img14.360buyimg.com/n6/g1/M05/04/13/rBEGD0-qQckIAAAAAAHTBCW4t7QAAA5xgMQRssAAdMc100.jpg\" alt=\"宝路 宠物 均衡营配方幼犬狗粮 10kg\" height=\"230\" width=\"230\"></a><span class=\"info\"><a href=\"//item.jd.com&quot;/631645.html&quot;\" target=\"_blank\" class=\"desc\">宝路 宠物 均衡营配方幼犬狗粮 10kg</a><span class=\"jd-price\"><a href=\"//gate.jd.com/InitCart.aspx?pid=631645&amp;pcount=1&amp;ptype=1\" target=\"_blank\" class=\"add-to-cart\">点击抢购</a><span class=\"jText\">售价：</span><span class=\"jd-num\">238.90</span></span></span></div></li></ul>\n    </div>\n</div>",
        "type": "json"
      },
      {
        "title": "参数注释",
        "content": "nodeCon：默认是“.bi-area ul”\ndomNode：默认是“li”\nurlGoodsrec：商品推荐接口，默认是INTERFACE.diviner + '?'\nlim：默认是12\np：默认是619001\nc3：默认是823\nnode装拼装好的容器节点ul；\nurl接口",
        "type": "json"
      },
      {
        "title": "code",
        "content": "getGoodsRec : function(arg){\n\tvar param = jQuery.extend({\n\t\t\tnodeCon : '.bi-area ul',\n\t\t\tdomNode : 'li',\n\t\t\turlGoodsrec : INTERFACE.diviner + '?', // 商品推荐接口\n\t\t\tlim : 12,\n\t\t\tp : 619001,\n\t\t\tc1 : '',\n\t\t\tc2 : '',\n\t\t\tc3 : 823\n\t\t},arg || {}),\n\t\t_this = jQuery(this),\n\t\tnode_con = _this.find(param.nodeCon),\n\t\tdomNode = _this.find(param.domNode);\n\t\t\n\tif(!node_con.length) return;\n    var pin=\"\";\n    if(readCookie('pin')){\n        pin=decodeURI(readCookie('pin'));\n    }\n\t\t// 定义接口传入参数 \n\tvar data = {\n\t\tp : param.p,\n\t\tpin : pin,\n\t\tuuid : readCookie('uuid'),\n\t\tc1 : param.c1,\n\t\tc2 : param.c2,\n\t\tc3 : param.c3,\n\t\tlid : readCookie('areald') ? readCookie('areald') : 1,\n\t\tlim : param.lim,\n\t\thi : '',\n\t\tec : 'utf-8'\n\t};\n\t\n\t// 组装html片段 \n\tfunction getHtml(data){\n\t\tvar outerHtml = '',\n\t\t\toLi = '<li>'\n\t\t\t\t+  '<div class=\"item\">'\n\t\t\t\t+    '<a href=' + INTERFACE.linkGoods + '\"/{sku}.html\" target=\"_blank\" class=\"item-pic\">'\n\t\t\t\t+      '<img src=\"//img14.360buyimg.com/n6/{img}\" alt=\"{t}\" height=\"230\" width=\"230\">'\n\t\t\t\t+    '</a>'\n\t\t\t\t+    '<span class=\"info\">'\n\t\t\t\t+      '<a href=' + INTERFACE.linkGoods + '\"/{sku}.html\" target=\"_blank\" class=\"desc\">{t}</a>'\n\t\t\t\t+      '<span class=\"jd-price\">'\n\t\t\t\t+        '<a href=\"' + INTERFACE.linkCart + '?pid={sku}&pcount=1&ptype=1\" target=\"_blank\" class=\"add-to-cart\">&#x70B9;&#x51FB;&#x62A2;&#x8D2D;</a>'\n\t\t\t\t+        '<span class=\"jText\">&#x552E;&#x4EF7;&#xFF1A;</span>'\n\t\t\t\t+        '<span class=\"jd-num\">{jp}</span>'\n\t\t\t\t+      '</span>'\n\t\t\t\t+    '</span>'\n\t\t\t\t+  '</div>'\n\t\t\t\t+  '</li>';\n\t\t\t\t\n\t\tfor (var i = 0, len = data.data.length; i < len; i++) {\n\t\t\touterHtml += jshop.module.renderHTML.apply(this, [oLi, data.data[i]]);\n\t\t}\n\t\treturn outerHtml;\n\t}\n\t\n\t// 获取商品智能推荐数据\n\t!function(){\n\t\tjQuery.ajax({\n\t\t\turl : param.urlGoodsrec.substring(0,param.urlGoodsrec.indexOf('?')+1),\n\t\t\tdata : data,\n\t\t\tdataType : 'jsonp',\n\t\t\tjsonp : 'cb',\n\t\t\tjsonpCallback  : 'jsonp' + new Date().getTime(),\n\t\t\tsuccess : function(data){\n\t\t\t\tif(!data.data){\n\t\t\t\t\treturn;\n\t\t\t\t}\n\t\t\t\tnode_con.html(getHtml(data));\n\t\t\t\tjshop.module.showNode.call(_this, {node : 'li', btn : '.btn-replace', pageNum : 4, className : 'current'});\n\t\t\t}\n\t\t});\n\t}();\n}",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "GoodsIntRec"
  },
  {
    "type": "ATTENTION",
    "url": "热门排行模块",
    "title": "ATTENTION",
    "name": "ATTENTION",
    "group": "HotRanking",
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "HotRanking"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "base()",
    "name": "base",
    "group": "HotRanking",
    "description": "<p>none</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "none",
        "type": "json"
      },
      {
        "title": "code",
        "content": "base:(function(){\n   \t\t\treturn function(arg){\n   \t\t\t\tvar that = this,\n   \t\t\t\t param = $.extend({\n\t\t \t\t\thotnavs:\"ul.hot-nav\", //热门排行菜单\n\t\t \t\t\thotnav:\"li\",          //热门排行菜单项\n\t\t \t\t\thotnav_current:\"current\",  //当前选中菜单项的样式\n\t\t \t\t\tdata_area:\".hot-content\",  //显示数据区域\n\t\t \t\t\tnotice_area:\".notice\",     //显示更新时间区域\n\t\t \t\t\twrap:\".hot-wrap-module\"\n\t\t \t\t},arg || {}),\n                url= INTERFACE.rankData + '?jsonPara=';\n\n\n              function _bandEvent(){\n\t\t\t \t\t//点击分类显示相应的内容\n\t\t\t\t \t$(that).find(param.hotnavs).delegate(param.hotnav,\"click\",function(){\n\t\t\t\t \t\t$(this).addClass(param.hotnav_current).siblings().removeClass(param.hotnav_current);\n\t\t\t\t \t\t//根据current显示ul\n\t\t\t    \t\tvar dataId = $(this).attr(\"data-id\"),\n\t\t\t    \t\t    _current_ul = $(that).find(\"ul.c\"+dataId+\"\");\n\t\t\t    \t\t_current_ul.fadeIn().siblings().hide();\n\t\t\t    \t\tjshop.module.ridLazy(_current_ul);\n\t\t\t\t \t});\n\n\t\t\t \t\tvar selectFirstCateId = $(that).find(\".selectFirstCateId\").val(),\n\t\t\t \t\t    type = $(that).find(\".selectFirstCateId\").attr(\"catetype\");\n\t\t\t \t\t//根据分类判断请求:返回2级类目时，直接请求商品\n\t\t\t \t\tif(type == 2 && selectFirstCateId!=\"\" && selectFirstCateId.split(\"-\").length == 2){\n\t\t\t \t\t\tvar cateIds = [];\n\t\t\t \t\t\tcateIds[selectFirstCateId.split[\"-\"][1]] = $(that).find(\".selectFirstCateId\").attr(\"catename\");\n\t\t\t \t\t\tvar cateStr = \"1-\"+selectFirstCateId.split(\"-\")[1];\n\t\t\t \t\t\t_ajaxGoods.call(that,cateIds,cateStr);\n\t\t\t \t\t\treturn false;\n\t\t\t \t\t}\n\t\t\t \t\t//返回三级类目，不请求数据，隐藏该模块\n\t\t\t \t\telse if(type == 2 && selectFirstCateId!=\"\" && selectFirstCateId.split(\"-\").length == 3){\n\t\t\t \t\t\t$(that).hide();\n\t\t\t \t\t\treturn false;\n\t\t\t \t\t}else if(type == 2 && selectFirstCateId==\"1\"){\n\t\t\t\t\t\tselectFirstCateId = \"\";\n\t\t\t\t\t}\n\t\t\t \t\t//其他情况，则是先请求二级类目，再根据类目请求商品数据\n\t\t\t \t\t_ajaxData.call(that,selectFirstCateId);\n\t\t\t \t}\n\n\t\t\t \tfunction _ajaxData(selectFirstCateId){\n\t\t\t \t\tvar cateIds = [];//请求数据\n\t\t\t \t\t\t_url = url+'{\"categoryIds\":\"'+selectFirstCateId+'\"}&callback=?';\n\t\t\t \t\t\n\t\t\t \t\t//获取二级类目\n\t\t\t \t\tjQuery.ajax({\n\t\t\t\t\t\t  url: _url,\n\t\t\t\t\t\t  type:\"get\",\n\t\t\t\t\t\t  dataType:\"jsonp\",\n\t\t\t\t\t\t  success: function(data){\n\t\t\t\t\t\t  \tif(data.code == \"0\"){\n\t\t\t\t\t\t  \t\tvar resLists = data.result.resList;\n\t\t\t\t\t\t  \t\tvar cateStr = \"\";//接口入参形式必须是一级分类-二级分类传递,实际上一级分类没任何实际用途，故此处随意取值1-key\n\t\t\t\t\t\t  \t\tfor(var c = 0; c < resLists.length; c++){\n\t\t\t\t\t\t  \t\t\tcategoryList = resLists[c].categoryList;\n\t\t\t\t\t\t  \t\t\tfor(var i = 0; i < categoryList.length; i++){\t\t\t\t\t\t  \t\t\t\n\t\t\t\t\t\t  \t\t\t\tcateIds[categoryList[i].categoryId] = categoryList[i].categoryName;\n\t\t\t\t\t\t  \t\t\t\tcateStr+=\"1-\"+categoryList[i].categoryId+\",\";\n\t\t\t\t\t\t  \t\t\t}\n\t\t\t\t\t\t  \t\t}\n\t\t\t\t\t\t  \t\t_ajaxGoods.call(that,cateIds,cateStr.slice(0,cateStr.length-1)); //请求二级类目下的商品\n\t\t\t\t\t\t  \t}\n\t\t\t\t\t\t  }\n\t\t\t\t\t});\n\t\t\t \t}\n\n\n\t\t\t \t//获取二级类目下的商品\n\t\t\t \tfunction _ajaxGoods(cateIds,cateStr){\n\t\t\t \t\tvar secondCates=[];\n\t\t\t\t\tif(cateStr == \"\"){\n\t\t\t \t\t\t$(that).hide();return;\n\t\t\t \t\t}\n\t\t\t\t\tjQuery.ajax({\n\t\t\t\t\t\t  url: url+'{\"categoryIds\":\"'+cateStr+'\"}&callback=?',\n\t\t\t\t\t\t  type:\"get\",\n\t\t\t\t\t\t  dataType:\"jsonp\",\n\t\t\t\t\t\t  success: function(data){\n\t\t\t\t\t\t    \tif(data.code === \"0\"){\n\t\t\t\t\t\t    \t\tvar resLists = data.result.resList;\n\t\t\t\t\t\t    \t\t//不存在商品，该模块不展示\n\t\t\t\t\t\t    \t\tif(resLists.length == 0){\n\t\t\t\t\t\t    \t\t\t$(that).hide();return;\n\t\t\t\t\t\t    \t\t}\n\t\t\t\t\t\t    \t\tvar ul_str = [];\n\t\t\t\t\t\t    \t\tfor(var index = 0; index < resLists.length; index++){\n\t\t\t\t\t\t    \t\t\tvar resList = resLists[index],\n\t\t\t\t\t\t    \t\t\t    categoryId = resList.categoryId,\n\t\t\t\t\t\t    \t\t\t    _ul_str = '<ul class=\"item-list c'+categoryId+'\">',\n\t\t\t\t\t\t    \t\t\t    wares = resList.wares;\n\t\t\t\t\t\t\t    \t\tif(wares.length > 0){\n\t\t\t\t\t\t\t    \t\t\tvar dataStr = [];\n\t\t\t\t\t\t\t   \n\t\t\t\t\t\t\t    \t\t\tfor (var i = 0; i < wares.length; i++) {\n\t\t\t\t\t\t\t\t\t\t\t\tif(i >= 28){break;}\n\t\t\t\t\t\t\t    \t\t\t\tvar ware = wares[i],\t\t\t\t\t\t\t    \t\t\t\t   \n\t\t\t\t\t\t\t    \t\t\t\t    _str = '<li data-sku=\"'+ware.sku+'\"><div class=\"item-range r'+(i+1)+'\">'+(+i+1)+'</div><a href=\\'openapp.jdipad://virtual?params={\"category\":\"jump\",\"des\":\"productDetail\",\"skuId\":\"'+ware.sku+'\",\"sourceType\":\"yuni\" ,\"sourceValue\":\"yuni\"}\\'  target=\"_blank\" class=\"item-pic\"><img class=\"J_imgLazyload\" src=\"//img14.360buyimg.com/cms/g10/M00/13/04/rBEQWFFj4PUIAAAAAAAESxyqJLUAADvdAIHC9oAAARj186.gif\" original=\"'+ware.imgUrl+'\"></a><a href=\\'openapp.jdipad://virtual?params={\"category\":\"jump\",\"des\":\"productDetail\",\"skuId\":\"'+ware.sku+'\",\"sourceType\":\"yuni\" ,\"sourceValue\":\"yuni\"}\\' target=\"_blank\" class=\"item-title\" title=\"'+ware.title+'\">'+ware.title+'</a><a href=\\'openapp.jdipad://virtual?params={\"category\":\"jump\",\"des\":\"productDetail\",\"skuId\":\"'+ware.sku+'\",\"sourceType\":\"yuni\" ,\"sourceValue\":\"yuni\"}\\' target=\"_blank\" class=\"item-price\"><span> ¥ '+ware.price+'</span></a><a href=\\'openapp.jdipad://virtual?params={\"category\":\"jump\",\"des\":\"cart\",\"skuId\":\"'+ware.sku+'\",\"skuNum\":\"1\",\"sourceType\":\"yuni\" ,\"sourceValue\":\"yuni\"}\\' class=\"item-addcart\" >加入购物车</a></li>';\n\t\t\t\t\t\t\t    \t\t\t\tdataStr.push(_str);\n\t\t\t\t\t\t\t    \t\t\t}\n\t\t\t\t\t\t\t    \t\t\t_ul_str += dataStr.join(\"\");\n\n\t\t\t\t\t\t\t    \t\t\t//商品存在，显示二级类目\n\t\t\t\t\t\t\t    \t\t\tif(secondCates.length == 0){\n\t\t\t\t\t\t\t    \t\t\t\tsecondCates.push('<li data-id=\"'+categoryId+'\" cateId=\"'+categoryId+'\" class=\"current\"><a href=\"javascript:;\">'+cateIds[categoryId]+'</a></li>');\n\t\t\t\t\t\t\t    \t\t\t\t//更新时间,pc目前默认显示第一个分类的时间\n\t\t\t\t\t\t\t\t\t    \t\tif(resList.updateTime){\n\t\t\t\t\t\t\t\t\t    \t\t\t$(that).find(param.notice_area).find(\"span\").text(resList.updateTime);\t\n\t\t\t\t\t\t\t\t\t    \t\t\t$(that).find(param.hotnavs).addClass(\"transalte68\");\t\t\t\t    \t\t\t\n\t\t\t\t\t\t\t\t\t    \t\t\t$(that).find(param.data_area).addClass(\"transalte68 item-list-mb\");\t\n\t\t\t\t\t\t\t\t\t    \t\t}\n\t\t\t\t\t\t\t    \t\t\t}else{\n\t\t\t\t\t\t\t    \t\t\t\tsecondCates.push('<li data-id=\"'+categoryId+'\" cateId=\"'+categoryId+'\"><a href=\"javascript:;\">'+cateIds[categoryId]+'</a></li>');\n\t\t\t\t\t\t\t    \t\t\t}\n\t\t\t\t\t\t\t    \t\t}\n\t\t\t\t\t\t\t    \t\t_ul_str += \"</ul>\";\n\t\t\t\t\t\t\t    \t\tul_str.push(_ul_str);\n\t\t\t\t\t\t\t    \t\t\n\t\t\t\t\t\t    \t\t}\n\t\t\t\t\t\t    \t\t$(that).find(param.data_area).html(ul_str.join(\"\")); //添加到item-list-wrap中\n\t\t\t\t\t\t\t    \t$(that).find(param.hotnavs).html(secondCates.join(\"\")); //添加菜单到nav中\n\t\t\t\t\t\t    \t\t//根据current显示ul\n\t\t\t\t\t\t    \t\tvar dataId = $(that).find(param.hotnavs+\" \"+param.hotnav+\".current\").attr(\"data-id\");\n\t\t\t\t\t\t    \t\tvar _current_ul = $(that).find(\"ul.c\"+dataId+\"\");\n\t\t\t\t\t\t    \t\t_current_ul.fadeIn();\n\t\t\t\t\t\t    \t\tjshop.module.ridLazy(_current_ul);\n\n\t\t\t\t\t\t    \t}else{\n\t\t\t\t\t\t    \t\t$(that).find(param.notice_area).hide();\n\t\t\t\t\t\t    \t\t$(that).find(param.data_area).hide();\n\t\t\t\t\t\t    \t}\n\t\t\t\t\t\t  }\n\t\t\t\t\t});\n\t\t\t\t}\n\n\t\t\t\t_bandEvent.call(that);\n\n   \t\t\t};\n   \t\t})()",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "HotRanking"
  },
  {
    "type": "ATTENTION",
    "url": "抽奖模块",
    "title": "ATTENTION",
    "name": "ATTENTION",
    "group": "Lottery",
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "Lottery"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "base()",
    "name": "base",
    "group": "Lottery",
    "description": "<p>none</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "none",
        "type": "json"
      },
      {
        "title": "code",
        "content": "base : function(arg){\n            var _this = $(this),\n                _arg = $.extend({\n                    serieId : '',\n                    nameRecord : '.name',\n                    timeRecord : '.time'\n                },arg || {}),\n                _data = null;\n            function _init(){\n                if(!_arg.serieId) return;\n                _get_data();\n                _get_img();\n            }\n            function _get_data(){\n                var __url = INTERFACE.lottery.getWinnerList + '?';\n                $.ajax({\n                    url : __url,\n                    type : 'GET',\n                    cache : false,\n                    data :{\n                        lotteryCode : _arg.serieId,\n                        count : 30\n                    },\n                    dataType : 'jsonp',\n                    success : function(data){\n                        if(data.responseCode == '0000'){\n                            _data = data.data;\n                            _render();\n                        }\n                        else{\n                            alert(data.responseMessage);\n                        }\n                    }\n                });\n            }\n            \n            function _get_img(){\n                if(navigator&&(navigator.userAgent.indexOf('iPad')>-1)){\n                    var __url = INTERFACE.lottery.getLotteryInfo;\n                    $.ajax({\n                        url : __url,\n                        data : {lotteryCode : _arg.serieId},\n                        dataType : 'jsonp',\n                        success : function(data){\n                            if(data.responseCode == '0000'){\n                                _this.find('.lucky-panel').prepend('<img style=\"height:100%;width:100%;\"src=\"' + data.data.promptImg + '\" />');\n                                _this.find('embed').hide();\n                            }\n                        }\n                    });\n                }\n            }\n            \n            function _render(){\n            if(!_data) return;\n                _data.each(function(index,n){\n                    if(index == 0){\n                        _this.find('.name').html(n.userPin);\n                        _this.find('.time').html(n.prizeName);\n                    }\n                    else{\n                        var __name_clone = _this.find('li:first').clone(true);\n                        __name_clone.find('.name').html(n.userPin);\n                        __name_clone.find('.time').html(n.prizeName);\n                        _this.find('ul').append(__name_clone);\n                    }\n                });\n                _this.find('.scroll-con').cntScroll();\n            }   \n            _init();\n        }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "Lottery"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "bindLottery()",
    "name": "bindLottery",
    "group": "Lottery",
    "description": "<p>none</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "none",
        "type": "json"
      },
      {
        "title": "code",
        "content": "bindLottery: function(args) {\n            var _this = $(this),\n                msgs = {\n                '0000': '请求成功',\n                '0001': '用户未验证',\n                '0002': '签名验证失败',\n                '0003': '活动ID验证失败',\n                '0004': '非法参数',\n                '0005': '活动已停用',\n                '0006': '活动已结束',\n                '0007': '活动未开始',\n                '0008': '活动已删除',\n                '0009': '活动未启用',\n                '0010': '活动不支持京豆兑换抽奖次数',\n                '0011': '京豆兑换抽奖次数已达最高限制次数',\n                '0012': '可以使用京豆抽奖',\n                '0013': '京豆数量不足',\n                '0014': '未开启支付密码',\n                '0015': '抽奖频率过快',\n                '0016': '抽奖前需先启用邮箱验证',\n                '0017': '抽奖前需先启用手机验证',\n                '1000': '系统错误',\n                '2001': '营销通用令牌绑定失败',\n                '2002': '活动不支持根据营销通用令牌兑换抽奖次数'\n            },\n            tfl = _this.find('.J_TipForLost'),\n            tfg = _this.find('.J_TipForGet'),\n            tfn = _this.find('.J_TipForNoTimes');\n\n            \n            function getCookie(key){\n                var val = document.cookie.match(new RegExp(\"(^| )\" + key + \"=([^;]*)(;|$)\"));\n                return null != val ? unescape(val[2]) : null;\n            }\n\n            function doLottery(code, callback) {\n                if (!code) {\n                    callback && callback({\n                        result: false,\n                        msg: '缺少必要参数'\n                    });\n                }\n\n                var lotApi = INTERFACE.lottery.lottery_start;\n\n                jQuery.ajax({\n                    url: lotApi,\n                    type: 'post',\n                    dataType: 'jsonp',\n                    data: {\n                        lotteryCode: code\n                    },\n                    success: function(data) {\n                        if (data.responseCode === '0000') {\n                            data.data.result = true;\n                            // data.data.winner = true;\n                            callback && callback(data.data);\n                        } else {\n                            callback && callback({\n                                result: false,\n                                msg: msgs[data.responseCode],\n                                code: data.responseCode\n                            });\n                        }\n                    }\n                });\n            }\n\n            var lc = _this.find('.J_StartDraw').attr('data-code'),\n                winnerApi = INTERFACE.lottery.getWinnerList;\n            jQuery.ajax({\n                url: winnerApi,\n                type: 'post',\n                dataType: 'jsonp',\n                data: {\n                    lotteryCode: lc,\n                    count: 10\n                },\n                success: function(data) {\n                    if (data.responseCode === '0000') {\n                        var lotList = '';\n                        jQuery.each(data.data, function(idx, d){\n                            lotList += '<li class=\"ui-marquee-item\">' + d.userPin + '  ' + d.prizeName + '</li>';\n                        });\n                        _this.find('.ui-marquee-main').html(lotList);\n                        var scr = new SeamlessScroll({\n                            box: _this.find('.marquee'),\n                            el: '.ui-marquee-main',\n                            itemClass: '.ui-marquee-item',\n                            interval: 80,\n                            step: 2\n                        });\n                        scr.init();\n                    } else {\n                        throw(msgs[data.responseCode]);\n                    }\n                }\n            });\n\n            _this.find('.J_StartDraw').click(function(ev){\n                ev.preventDefault();\n\n                // if (!getCookie('pin')) {\n                //     location.href = 'https://passport.jd.com/new/login.aspx?ReturnUrl=' + encodeURIComponent(location.href);\n                //     return false;\n                // }\n                thick_login(function(){\n                    var t = $(ev.currentTarget),\n                        lotteryCode = encodeURIComponent(t.attr('data-code'));\n\n                    if(_this.find('a.draw-btn').hasClass('slot-sign')){\n                        return; \n                    }else{\n\n                        jQuery.ajax({\n                            url: INTERFACE.lottery.lottery_chance,\n                            type: 'get',\n                            dataType: 'jsonp',\n                            data: {\n                                lotteryCode: lotteryCode\n                            },\n                            success: function(data) {\n                                if (!data.data || data.responseCode !== '0000') {\n                                    tfl.find('p').html(data.data ? data.data.promptMsg : '');\n                                    tfl.show();\n                                    _this.find('a.draw-btn').removeClass('slot-sign');\n                                    _this.find(\".handle\").removeClass('handled');\n                                    return;\n                                } else if (data.responseCode === '0000' && data.data.chances <= 0) {\n                                    // tfn.show();\n                                    tfl.find('p').html(data.data.promptMsg);\n                                    tfl.show();\n                                    _this.find('a.draw-btn').removeClass('slot-sign');\n                                    _this.find(\".handle\").removeClass('handled');\n                                    return;\n                                }\n                                doLottery(lotteryCode, function(json){\n                                    var isWin = (json.result && json.winner),\n                                        rs = [],\n                                        str = '123',\n                                        num = 2;\n                                    _this.find('a.draw-btn').addClass('slot-sign');\n                                    _this.find(\".handle\").addClass('handled');\n                                    if (isWin) {\n                                        num = +(str.split(\"\")[Math.floor(Math.random() * 3)]);\n                                        rs = [num, num, num];\n                                    } else {\n                                        rs[0] = +(str.split(\"\")[Math.floor(Math.random() * 3)]);\n                                        str = str.replace(rs[0] + '', \"\");\n                                        rs[1] = +(str.split(\"\")[Math.floor(Math.random() * 2)]);\n                                        rs[2] = +(str.split(\"\")[Math.floor(Math.random() * 2)]);\n                                    }\n                                    var soltItem0 = new Slot();\n                                    soltItem0.el = _this.find(\".solt-item-0\");\n                                    soltItem0.options.duration = 230;\n                                    soltItem0.options.step = 2;\n                                    soltItem0.options.result = rs[0];\n                                    soltItem0.init();\n                                    var soltItem1 = new Slot();\n                                    soltItem1.el = _this.find(\".solt-item-1\");\n                                    soltItem1.options.duration = 250;\n                                    soltItem1.options.step = 2;\n                                    soltItem1.options.result = rs[1];\n                                    soltItem1.init();\n                                    var soltItem2 = new Slot();\n                                    soltItem2.el = _this.find(\".solt-item-2\");\n                                    soltItem2.options.duration = 300;\n                                    soltItem2.options.step = 2;\n                                    soltItem2.options.result = rs[2];\n                                    soltItem2.options.complete = function () {\n                                        // $('.cover-succ').show();\n                                        if (isWin) {\n                                            tfg.show();\n                                        } else {\n                                            tfl.find('p').html(json.promptMsg);\n                                            tfl.show();\n                                        }\n                                        _this.find('a.draw-btn').removeClass('slot-sign');\n                                        _this.find(\".handle\").removeClass('handled');\n                                    }\n                                    soltItem2.init();\n                                });\n                            }\n                        });\n                    }\n                });\n            });\n\n            tfg.click(function(){\n                $(this).hide();\n            });\n            tfl.click(function(){\n                $(this).hide();\n            });\n            tfn.click(function(){\n                $(this).hide();\n            });\n\n            _this.find('a.draw-btn').mousedown(function () {\n                if(_this.find('a.draw-btn').hasClass('slot-sign')){\n                    return;\n                }else{\n                    $(this).addClass('drawed-btn');\n                    _this.find(\".handle\").addClass('handled');\n                    \n                }\n                \n\n            });\n            _this.find('a.draw-btn').mouseup(function () {\n                $(this).removeClass('drawed-btn');\n            });\n        }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "Lottery"
  },
  {
    "type": "ATTENTION",
    "url": "促销推荐模块",
    "title": "ATTENTION",
    "name": "ATTENTION",
    "group": "PromptRecommend",
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "PromptRecommend"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "base()",
    "name": "base",
    "group": "PromptRecommend",
    "description": "<p>none</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "none",
        "type": "json"
      },
      {
        "title": "code",
        "content": "base : function(arg){\n\tvar _this = $(this),\n\t\t_arg = $.extend({\n\t\t\tnode : 'li',\n\t\t\tclick_node : '.jBtnArea a'\n\t\t},arg || {}),\n\t\t_ids = [],\n\t\t_base_url = INTERFACE.actJshop.ms;\n\t\n\tfunction _init(){\n\t\t_get_ids();\n\t\t_get_state();\n\t}\n\t\n\tfunction _get_ids(){\n\t\t_this.find(_arg.node).each(function(index,n){\n\t\t\t_ids.push($(n).attr('prompt-id'));\n\t\t});\t\t\t\t\n\t}\n\t\n\tfunction _get_state(){\n\t\t$.ajax({\n\t\t\turl : _base_url,\n\t\t\ttype : 'POST',\n\t\t\tdata : {promoId : _ids.join(',')},\n\t\t\tdataType : 'jsonp',\n\t\t\tsuccess : function(data){\n\t\t\t\tif(data.result){\n\t\t\t\t\tdata.values.each(function(index,n){\n\t\t\t\t\t\tif(n.status == '0'){\n\t\t\t\t\t\t\t$(_this).find('li[prompt-id=\"' + n.id + '\"]').attr('class',_arg.overCls).find(_arg.click_node).attr('href','#none');\n\t\t\t\t\t\t}\n\t\t\t\t\t\telse if(n.status == '1'){\n\t\t\t\t\t\t\t$(_this).find('li[prompt-id=\"' + n.id + '\"]').attr('class',_arg.underwayCls);\n\t\t\t\t\t\t}\n\t\t\t\t\t\telse{\n\t\t\t\t\t\t\t$(_this).find('li[prompt-id=\"' + n.id + '\"]').attr('class',_arg.waitCls).find(_arg.click_node).attr('href','#none');;\n\t\t\t\t\t\t}\n\t\t\t\t\t});\n\t\t\t\t}\n\t\t\t}\n\t\t});\n\t}\n\t_init();\n}",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "PromptRecommend"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "jingdou()",
    "name": "jingdou",
    "group": "PromptRecommend",
    "description": "<p>none</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "none",
        "type": "json"
      },
      {
        "title": "code",
        "content": "jingdou : function(arg){\n\tvar _this = $(this),\n\t\t_args = $.extend({\n\t\t\tpprice:'.Jpprice',\n\t\t\tjingNum:'.Jjnum'\n\t\t},arg || {}),\n\t\t_ids = [];\n\t\n\tfunction _init(){\n\t\t_get_skuids();\n\t\tif(!_ids.length) return;\n\t\t_get_jindou_info();\n\t}\n\t\n\tfunction _get_skuids(){\n\t\t_this.find('[prompt-id]').each(function(index,n){\n\t\t\t_ids.push($(n).attr('skuid') + '-' + $(n).attr('prompt-id'));\n\t\t});\n\t}\n\t\n\tfunction _get_jindou_info(){\n\t\t$.ajax({\n\t\t\turl : '//jprice.360buy.com/skuprice/' + _ids.join(',') + '-1-1.html',\n\t\t\tdataType : 'jsonp',\n\t\t\tcache : false,\n\t\t\tsuccess : function(data){\n\t\t\t\tif(data&&data.length){\n\t\t\t\t\tdata.each(function(index,n){\n\t\t\t\t\t\tif(n.s != 1) return;\n\t\t\t\t\t\tvar __node = _this.find('[skuid=' + n.sid + ']');\n\t\t\t\t\t\t__node.find(_args.pprice).html(n.pp);\n\t\t\t\t\t\t__node.find(_args.jingNum).html(n.jbn || 0);\n\t\t\t\t\t});\n\t\t\t\t}\n\t\t\t}\n\t\t})\n\t}\n\t_init();\n}",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "PromptRecommend"
  },
  {
    "type": "ATTENTION",
    "url": "圈子推荐模块",
    "title": "ATTENTION",
    "name": "ATTENTION",
    "group": "Social",
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "Social"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "circle()",
    "name": "circle",
    "group": "Social",
    "description": "<p>none</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "none",
        "type": "json"
      },
      {
        "title": "code",
        "content": "circle : function(){\n            var that = $(this),\n                followBtn = that.find('.q-join .q-join-link'),\n                api = INTERFACE.group.addGroupCircle;\n\n            var tipNodeText = '<div id=\"J_SocialTip\" style=\"position:absolute;z-index:10000;padding-top:15px;width:198px;height:65px;border:1px solid #ccc;text-align:center;background-color:#fff;visibility:hidden;\">'\n                + '<p class=\"J_WarnWords\" style=\"font-size:12px;line-height:30px;color:#686868;\">您未登录，请先<a href=\"' + INTERFACE.passport.login + '?ReturnUrl=' + location.href + '\">登录</a></p>'\n                + '<p style=\"font-size:12px;color:#ccc;\">3s后自动消失</p>'\n                + '</div>',\n                tipNode = jQuery(tipNodeText),\n                showTimer = null;\n\n            if (jQuery('#J_SocialTip').length == 0) {\n                jQuery('body').append(tipNode);\n            }\n\n            tipNode = jQuery('#J_SocialTip');\n\n            function showTip(cont, time, success) {\n                var textBox = tipNode.find('.J_WarnWords'),\n                    succColor = '#7abd54',\n                    failColor = '#b90000',\n                    win = jQuery(window),\n                    color = succColor;\n                textBox.html(cont);\n                color = success ? succColor : failColor;\n                textBox.css('color', color);\n                tipNode.css({\n                    left: win.width() / 2 - tipNode.width() / 2 + win.scrollLeft(),\n                    top: win.height() / 2 - tipNode.height() / 2 + win.scrollTop(),\n                    visibility: 'visible'\n                });\n                if (showTimer) {\n                    clearTimeout(showTimer);\n                    showTimer = null;\n                }\n                showTimer = setTimeout(function(){\n                    tipNode.css('visibility', 'hidden');\n                }, time * 1000);\n            }\n\n            jQuery.ajax({\n                url: INTERFACE.group.isJoinQuanZi,\n                type: 'get',\n                dataType: 'jsonp',\n                data: {\n                    groupId: followBtn.attr('data-groupId')\n                },\n                success: function(data) {\n                    var group;\n                    if (data) {\n                        jQuery.each(data, function(idx, g){\n                            if (g.groupId == followBtn.attr('data-groupId')) {\n                                group = g;\n                            }\n                        });\n                        if (group.status) {\n                            followBtn.addClass('active').html('已加入');\n                        }\n                    }\n                }\n            });\n\n            followBtn.click(function(ev){\n                ev.preventDefault();\n                var _this = $(this);\n                if (_this.hasClass('active')) {\n                    return false;\n                }\n                jQuery.ajax({\n                    url: api,\n                    type: 'get',\n                    dataType: 'jsonp',\n                    data: {\n                        groupId: _this.attr('data-groupId')\n                    },\n                    success: function(data) {\n                        if (data.success) {\n                            if (!data.result.error) {\n                                _this.addClass('active').html('已加入');\n                            } else {\n                                // alert(data.result.message);\n                                showTip(data.result.message, 3, false);\n                            }\n                        } else {\n                            // alert(data.result.message);\n                            showTip(data.result.message, 3, false);\n                        }\n                    }\n                })\n            });\n        }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "Social"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "invitation()",
    "name": "invitation",
    "group": "Social",
    "description": "<p>none</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "none",
        "type": "json"
      },
      {
        "title": "code",
        "content": "invitation: function() {\n            var that = $(this);\n\n            jshop.module.ridLazy(this); // 取消懒加载\n\n            that.find('.J_ReplyArea .t-fullwidth').html('').append($('<textarea cols=\"30\" rows=\"10\" name=\"content\" class=\"J_TextEntry t-text\" placeholder=\"我来回复\">'));\n\n            // 判断是否登录\n            $.ajax({\n                url: INTERFACE.passport.helloService,\n                type: 'get',\n                dataType: 'jsonp',\n                data: {\n                    m: \"ls\"\n                },\n                success: function(data){\n                    // console.log(data);\n                    if (data.info.indexOf(\"退出\") === -1) {\n                        that.find('.J_ReplyArea .t-fullwidth').append('<div class=\"J_LoginLayer\" style=\"position:absolute;top:24px;left:0;right:0;height:30px;line-height:30px;background-color:#ccc;text-align:center;border-radius:3px;\">' + data.info + '</div>');\n                    }\n                }\n            });\n\n            that.find('.J_ReplyArea .t-auth-box img').addClass('J_AuthPic t-auth-pic');\n\n            function setAuthCode(img) {\n                var acid = \"authcode-jshop-tiezi-\" + new Date().getTime();\n                img.attr('src', '//authcode.jd.com/verify/image?acid=' + acid + '&srcid=group');\n                return acid;\n            }\n\n            var tipNodeText = '<div id=\"J_SocialTip\" style=\"position:absolute;z-index:10000;padding-top:15px;width:198px;height:65px;border:1px solid #ccc;text-align:center;background-color:#fff;visibility:hidden;\">'\n                + '<p class=\"J_WarnWords\" style=\"font-size:12px;line-height:30px;color:#686868;\">您未登录，请先<a href=\"' + INTERFACE.passport.login +'?ReturnUrl=' + location.href + '\">登录</a></p>'\n                + '<p style=\"font-size:12px;color:#ccc;\">3s后自动消失</p>'\n                + '</div>',\n                tipNode = jQuery(tipNodeText),\n                showTimer = null;\n\n            if (jQuery('#J_SocialTip').length == 0) {\n                jQuery('body').append(tipNode);\n            }\n\n            tipNode = jQuery('#J_SocialTip');\n\n            function showTip(cont, time, success) {\n                var textBox = tipNode.find('.J_WarnWords'),\n                    succColor = '#7abd54',\n                    failColor = '#b90000',\n                    win = jQuery(window),\n                    color = succColor;\n                textBox.html(cont);\n                color = success ? succColor : failColor;\n                textBox.css('color', color);\n                tipNode.css({\n                    left: win.width() / 2 - tipNode.width() / 2 + win.scrollLeft(),\n                    top: win.height() / 2 - tipNode.height() / 2 + win.scrollTop(),\n                    visibility: 'visible'\n                });\n                if (showTimer) {\n                    clearTimeout(showTimer);\n                    showTimer = null;\n                }\n                showTimer = setTimeout(function(){\n                    tipNode.css('visibility', 'hidden');\n                }, time * 1000);\n            }\n\n            var followBtn = that.find('.t-bar .t-fav'),\n                favapi = INTERFACE.group.collect;\n            followBtn.click(function(ev){\n                ev.preventDefault();\n                var _this = $(this);\n                jQuery.ajax({\n                    url: favapi,\n                    type: 'get',\n                    dataType: 'jsonp',\n                    data: {\n                        threadId: _this.attr('data-threadId')\n                    },\n                    success: function(data) {\n                        if (data.success) {\n                            if (!data.result.error) {\n                                // alert('收藏成功！');\n                                showTip('收藏成功！', 3, true);\n                                followBtn.html('<span class=\"icons icon-fav\"></span>&nbsp;已收藏');\n                            } else {\n                                // alert(data.result.message);\n                                showTip(data.result.message, 3, false);\n                            }\n                        } else {\n                            // alert(data.result.message);\n                            showTip(data.result.message, 3, false);\n                        }\n                    }\n                })\n            });\n\n            var reArea = that.find('.J_ReplyArea'),\n                reBtn = reArea.find('.J_Reply'),\n                reCon = reArea.find('.J_TextEntry'),\n                reCode = reArea.find('.J_AuthCode'),\n                rePic = reArea.find('.J_AuthPic'),\n                reKey = setAuthCode(rePic),\n                reNum = that.find('.J_ReplyNum'),\n                reList = that.find('.J_ReplyList'),\n                siteId = that.find('.J_SiteId').val(),\n                threadId = that.find('.J_ThreadId').val(),\n                api = INTERFACE.group.saveGroupPost; // 回复帖子\n\n            var parseData = function(obj) {\n                var rItem = $('<li class=\"t-item\">'),\n                    rHtml = '';\n                rHtml += '<img src=\"' + obj.headPic + '\" class=\"t-head\">';\n                rHtml += '<div class=\"t-re-cont\">';\n                rHtml += '<h3 class=\"t-re-tit\">' + obj.nick + '</h3>';\n                rHtml += '<div class=\"t-re-body\">' + obj.content + '</div>';\n                rHtml += '<p class=\"t-re-foot\">' + obj.reply_time + '</p></div>';\n\n                rItem.html(rHtml);\n                return rItem;\n            };\n\n            rePic.click(function(ev){\n                reKey = setAuthCode(rePic);\n            });\n\n            reBtn.click(function(ev){\n                ev.preventDefault();\n                if (!reCon.val()) {\n                    // alert('回复内容不能为空！');\n                    showTip('回复内容不能为空！', 3, false);\n                    return false;\n                }\n                if ((!reCode.val()) || (!/^[a-z0-9]+$/gi.test(reCode.val()))) {\n                    // alert('验证码错误！');\n                    showTip('验证码错误！', 3, false);\n                    return false;\n                }\n                jQuery.ajax({\n                    url: api,\n                    type: 'get',\n                    dataType: 'jsonp',\n                    data: {\n                        authKey: reKey,\n                        authCode: reCode.val(),\n                        siteId: siteId,\n                        threadId: threadId,\n                        parentId: '-1',\n                        parentPin: '-1',\n                        content: encodeURIComponent(reCon.val())\n                    },\n                    success: function(data) {\n                        if (data.success) {\n                            if (!data.result.error) {\n                                var reply = parseData(data.result),\n                                    num = +(reNum.html().replace(/,/g, \"\"));\n                                reply.insertBefore(reList.children().eq(0));\n                                num += 1;\n                                reNum.html((num + '').replace(/\\B(?=(\\d{3})+$)/g, ','));\n                                reCon.val('');\n                                reCode.val('');\n                                if (reList.find('.no-reply').length > 0) {\n                                    reList.find('.no-reply').remove();\n                                }\n                            } else {\n                                // alert(data.result.message);\n                                showTip(data.result.message, 3, false);\n                            }\n                        } else {\n                            // alert(data.result.message);\n                            showTip(data.result.message, 3, false);\n                        }\n                        reKey = setAuthCode(rePic);\n                    }\n                });\n            });\n        }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "Social"
  },
  {
    "type": "ATTENTION",
    "url": "UserDefine模块还扩展了公共模块中的所有函数，并包含GoodsRec模块对象",
    "title": "ATTENTION",
    "name": "ATTENTION",
    "group": "UserDefine",
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "UserDefine"
  },
  {
    "type": "ATTENTION",
    "url": "自定义内容区",
    "title": "ATTENTION",
    "name": "ATTENTION",
    "group": "UserDefine",
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "UserDefine"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "addFavorite()",
    "name": "addFavorite",
    "group": "UserDefine",
    "description": "<p>添加收藏--将链接地址添加到浏览器收藏夹，方便以后访问。</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "title:字符串，自定义名字\nurl:自定义链接地址",
        "type": "json"
      },
      {
        "title": "code",
        "content": "addFavorite: function(args) {\n\tif(args == undefined){\n\t\tif(validateData($(this).attr('module-param'))){\n\t\t\tvar args = eval('('+$(this).attr('module-param')+')');\n\t\t}\n\t}\n\t\n\tvar _this = this,\n\t\tparam = $.extend({title:'京东商城', url:'//www.jd.com'},args),\n\t\ttitle = param.title,\n\t\turl = param.url;\n\t\n\t$(_this).css('cursor','pointer');\n\t$(_this).click(function(e){\n\t\tif (document.all) {\n\t        window.external.AddFavorite(url, title);\n\t    } else if (window.sidebar) {\n\t        window.sidebar.addPanel(title, url, \"\");\n\t    } else {\n\t        alert(\"对不起，您的浏览器不支持此操作!\\n请您使用菜单栏或Ctrl+D收藏本站。\");\n\t    }\n\t});\t\t    \n}",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "UserDefine"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "autoCenter()",
    "name": "autoCenter",
    "group": "UserDefine",
    "description": "<p>none</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "none",
        "type": "json"
      },
      {
        "title": "code",
        "content": "autoCenter : function(args){\n\tvar _this = $(this),\n\t\tparam = $.extend({autoMiddleNode:'.userDefinedArea', isOwnLink : true} , args || {}),\n\t\tnode = _this.find(param.autoMiddleNode),\n\t\tisOwnLink = param.isOwnLink;\n\t\n\talignCenter();\n\t$(window).resize(function(){\n\t\talignCenter();\n\t});\n\t\n\tfunction alignCenter(){\n\t\tvar extra = node.width()-_this.width();\n\t\tif(extra>0){\n\t\t\tnode.css({'margin-left':-extra/2});\n\t\t}else{\n\t\t\tnode.css('margin','0 auto');\n\t\t}\n\t}\n\t\n\t//判断自定义编辑器里面的图片是否有链接  20150907 by cdwanchuan@jd.ccom\n\tif(isOwnLink && location.href.indexOf('visualEditing')!= -1){\n\t\tvar img = node.find('img');\n\t\timg.each(function(i,e){\n\t\t\tif((jQuery(e).parent()[0].tagName!= 'A') && !jQuery(e).attr('usemap')){\n\t\t\t\tvar relativePar = jQuery(jQuery(e)[0].offsetParent);\n\t\t\t\tif(relativePar.length && jQuery(e).length){\n\t\t\t\t\tvar top = jQuery(e).offset().top - relativePar.offset().top + jQuery(e).height()/2 -11,\n\t\t\t\t\t\tleft = jQuery(e).width()/2 - 31;\n\t\t\t\t\tnode.append('<img src=\"//img11.360buyimg.com/cms/jfs/t2353/241/73326232/691/b8435b2b/55ed2da1N0a73abac.png\" width=\"62\" height=\"23\" style=\"position:absolute; left:' + left +'px; top:' + top + 'px;\" />');\n\t\t\t\t}\n\t\t\t}\n\t\t});\n\t}",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "UserDefine"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "sideSlip()",
    "name": "sideSlip",
    "group": "UserDefine",
    "description": "<p>侧滑--用于当页链接锚点或专题入口跳转</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "vertical:字符串，样式里面的垂直位置参数，可选值top、bottom\nverticalValue:数字，当垂直位置为top时，此值必须大于170，不然无效。（因京东头高度为170px，此功能展示界面不能遮挡京东头）\nhorizontal:字符串，样式里面的水平位置参数，可选值left、right\nhorizontalValue:数字，无限制\nzindex:数字，前后位置",
        "type": "json"
      },
      {
        "title": "param-Example",
        "content": "<div class=\"j-module\" module-function=\"sideSlip\" module-param=\"{vertical:'top', verticalValue:170, horizontal:'left', horizontalValue:0}\">\n也可以不传使用默认参数: <div class=\"j-module\" module-function=\"sideSlip\" module-param=\"{}\">;",
        "type": "json"
      },
      {
        "title": "code",
        "content": "sideSlip:function(args){\n   \n   \t//此方法应用的图片不使用懒加载\n\t   var imgs = $(this).find('img');\n\t   imgs.each(function(index,n){\n\t\t  $(n).attr('src',$(n).attr('original'));\n\t\t  $(n).removeAttr('original');\n\t\t  $(n).removeClass('J_imgLazyload');\n\t   });\n\t   \n\t\tif(args == undefined){\n\t\t\tif(validateData($(this).attr('module-param'))){\n\t\t\t\tvar args = eval('('+$(this).attr('module-param')+')');\n\t\t\t}\n\t\t}\n\t\t\n\t\tvar _this = this,\n\t\t\tparam = $.extend({vertical:'top', verticalValue:170, horizontal:'left', horizontalValue:0, zindex:10},args),\n\t\t\tvertical = param.vertical,\n\t\t\tverticalValue = param.verticalValue,\n\t\t\thorizontal = param.horizontal,\n\t\t\thorizontalValue = param.horizontalValue,\n\t\t\tzindex = param.zindex;\n\t\t\n\t\t//判断参数个数\n\t\tvar count = 0;\n\t\tfor(var i in param){\n\t\t\tcount++;\n\t\t}\n\t\t//如果垂直是top，水平是right\n\t\tif(count == 5 && vertical == 'top' && verticalValue >= 170 && horizontal == 'right'){\n\t\t\tsetInterval(function(){\n\t\t\t\tverticalValue += (getTop() + param.verticalValue - verticalValue)/20;\n\t\t\t\t$(_this).css({'position':'absolute', 'top':verticalValue, 'right':horizontalValue, 'zIndex':zindex});\n\t\t\t},20);\n\t\t}\n\t\t//如果垂直是top，水平是left\n\t\tif(count == 5 && vertical == 'top' && verticalValue >= 170 && horizontal == 'left'){\n\t\t\tsetInterval(function(){\n\t\t\t\tverticalValue += (getTop() + param.verticalValue - verticalValue)/20;\n\t\t\t\t$(_this).css({'position':'absolute', 'top':verticalValue, 'left':horizontalValue, 'zIndex':zindex});\n\t\t\t},20);\n\t\t}\n\t\t//如果垂直是bottom，水平是right\n\t\tif(count == 5 && vertical == 'bottom' && horizontal == 'right'){\n\t\t\tvar a = $(window).height()-$(_this).height()-param.verticalValue,\n\t\t\t\tb = a;\n\t\t\tsetInterval(function(){\n\t\t\t\ta += (getTop() + b - a)/20;\n\t\t\t\t$(_this).css({'position':'absolute', 'top':a, 'right':horizontalValue, 'zIndex':zindex});\n\t\t\t},20);\n\t\t}\n\t\t//如果垂直是bottom，水平是left\n\t\tif(count == 5 && vertical == 'bottom' && horizontal == 'left'){\n\t\t\tvar a = $(window).height()-$(_this).height()-param.verticalValue,\n\t\t\t\tb = a;\n\t\t\tsetInterval(function(){\n\t\t\t\ta += (getTop() + b - a)/20;\n\t\t\t\t$(_this).css({'position':'absolute', 'top':a, 'left':horizontalValue, 'zIndex':zindex});\n\t\t\t},20);\n\t\t}\n\t\t//如果垂直是bottom，水平是middle\n\t\tif(count == 5 && vertical == 'bottom' && horizontal == 'middle'){\n\t\t\tvar a = $(window).height()-$(_this).height()-param.verticalValue,\n\t\t\t\tb = a;\n\t\t\t\n\t\t\tsetInterval(function(){\n\t\t\t\ta += (getTop() + b - a)/20;\n\t\t\t\t$(_this).css({'position':'absolute','top':a, 'left':horizontalValue, 'margin-left':-($(_this).width()/2), 'zIndex':zindex});\n\t\t\t},20);\n\t\t}\n\t\tfunction getTop(){\n\t\t\treturn (document.documentElement.scrollTop||document.body.scrollTop||0)-(document.documentElement.clientTop||document.body.clientTop||0);\n\t\t}\n\t}",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "UserDefine"
  },
  {
    "type": "ATTENTION",
    "url": "拍卖模块",
    "title": "ATTENTION",
    "name": "ATTENTION",
    "group": "auction",
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "auction"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "base()",
    "name": "base",
    "group": "auction",
    "description": "<p>none</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "none",
        "type": "json"
      },
      {
        "title": "code",
        "content": "base : (function(){\n\t\tvar timer = null,\n\t\t\tauctionList = [],\n\t\t\tcount = 0,\n\t\t\ttempList = [];\n\t\treturn function(arg){\n\t\t\tvar _this = this,\n\t\t\t\t_options = $.extend({\n\t\t\t\t\tstatus : ['wait','go','over'],\n\t\t\t\t\titem : 'li',\n\t\t\t\t\ttimePanel : '.jNum',\n\t\t\t\t\tbtnArea : '.jBtnArea a',\n\t\t\t\t\tpriceNode : '.jdNum',\n\t\t\t\t\tprocess : '.jBgCurrent',\n\t\t\t\t\ttext : '.jText',\n\t\t\t\t\ttext1 : '.jText1',\n\t\t\t\t\tdataMsg : '.jDataMessage',\n\t\t\t\t\tday : '.days',\n\t\t\t\t\thour : '.hours',\n\t\t\t\t\tminute : '.minutes',\n\t\t\t\t\tsecond : '.seconds',\n\t\t\t\t\tstock : '.stock',\n\t\t\t\t\tneedDay : false\n\t\t\t\t},arg || {});\n\t\t\t\t\n\t\t\tfunction _unique(arr){\n\t\t\t\tvar newArr = [],\n\t\t\t\t\ttemp = {};\n\t\t\t\t\t\n\t\t\t\tfor(var i = 0, len = arr.length; i < len;i++){\n\t\t\t\t\tif(!temp[arr[i]]){\n\t\t\t\t\t\ttemp[arr[i]] = 1;\n\t\t\t\t\t\tnewArr.push(arr[i]);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\treturn newArr;\n\t\t\t}\n\t\t\t\n\t\t\tfunction _getAuctionData(flag){\n\t\t\t\tvar list = flag?tempList : auctionList,\n\t\t\t\t\tlevel = Math.ceil(list.length/10);\n\t\t\t\tfor(var i = 0, len = level; i < len ; i++){\n\t\t\t\t\tvar tempArr = [];\n\t\t\t\t\tfor(var inner = i*10, innerLen = Math.min(list.length, (i+1)*10); inner < innerLen; inner ++){\n\t\t\t\t\t\ttempArr.push(list[inner]);\n\t\t\t\t\t}\n\t\t\t\t\t$.ajax({\n\t\t\t\t\t\turl : INTERFACE.paimai.currentList,\n\t\t\t\t\t\ttype : 'POST',\n\t\t\t\t\t\tdataType : 'jsonp',\n\t\t\t\t\t\tdata : {\n\t\t\t\t\t\t\tpaimaiIds : tempArr.join('-')\n\t\t\t\t\t\t},\n\t\t\t\t\t\tsuccess : function(data){\n\t\t\t\t\t\t\t_ajaxHandle(data);\n\t\t\t\t\t\t}\n\t\t\t\t\t});\n\t\t\t\t}\n\t\t\t}\n\t\t\t\n\t\t\tfunction _ajaxHandle(data){\n\t\t\t\tif(data){\n\t\t\t\t\t$.each(data,function(index,n){\n\t\t\t\t\t\tvar __item = $('[paimaiId=' + n.paimaiId + ']');\n\t\t\t\t\t\t__item.closest(_options.item).attr('class',_options.status[n.auctionStatus]);\n\t\t\t\t\t\t__item.find(_options.priceNode).html(parseInt(n.currentPrice,10) <= 0 ? '暂无报价' : n.currentPrice);\n\t\t\t\t\t\t__item.find('.jRmb').html(n.currentPrice < 0 ? '' : '￥');\n\t\t\t\t\t\t__item.find('.startPrice').html(n.startPrice < 0 ? '暂无报价' : n.startPrice.toFixed(2));\n\t\t\t\t\t\tif(n.auctionType === 0){\n                            __item.find('.minPrice').html(n.minPrice < 0 ? '暂无报价' : n.minPrice.toFixed(2));\n                            if(n.auctionStatus == 2)\n                                __item.find(_options.priceNode).html(n.minPrice < 0 ? '暂无报价' : n.minPrice.toFixed(2));\n                        }\n\t\t\t\t\t\tif(n.auctionStatus == 0 || n.remainTime == - 1 || n.auctionStatus == 2){\n\t\t\t\t\t\t\t__item.find(_options.process).css('width','0%');\n\t\t\t\t\t\t}\n\t\t\t\t\t\telse{\n\t\t\t\t\t\t\tvar __progress = (n.reduceTime*60*1000 - n.remainTime)/(n.reduceTime*60*1000);\n\t\t\t\t\t\t\t__item.find(_options.process).css('width',(__progress.toFixed(2)*100) + '%');\n\t\t\t\t\t\t}\n\t\t\t\t\t\t\n\t\t\t\t\t\tif(n.auctionStatus == 2){\n\t\t\t\t\t\t\t__item.find(_options.text).html('');\n\t\t\t\t\t\t\t__item.find(_options.text1).html();\n\t\t\t\t\t\t\t__item.find(_options.dataMsg).html(__item.find(_options.dataMsg).attr('endText'));\n\t\t\t\t\t\t\t__item.removeClass(_options.item.replace('.',''));\n\t\t\t\t\t\t}\n\t\t\t\t\t\telse{\n\t\t\t\t\t\t\t__item.find(_options.text).html(__item.find(_options.text).attr('defaultTxt'));\n\t\t\t\t\t\t\t__item.data('leftTime',parseInt(n.remainTime/1000));\n\t\t\t\t\t\t\t_showTime.call(__item);\n\t\t\t\t\t\t\t__item.find(_options.text1).html(n.auctionStatus == 0 || n.nextPrice == n.currentPrice || n.nextPrice < 0 ?'':__item.find(_options.text1).attr('defaultTxt'));\n\t\t\t\t\t\t\t__item.find(_options.dataMsg).html(n.auctionStatus == 0 ? __item.find(_options.dataMsg).attr('startTxt') : (n.nextPrice == n.currentPrice || n.nextPrice < 0?__item.find(_options.dataMsg).attr('endTxt'):'￥' + n.nextPrice.toFixed(2)));\n\t\t\t\t\t\t\tif(!!_options.stock)\n\t\t\t\t\t\t\t\t__item.find(_options.stock).html(n.currentNum);\n\t\t\t\t\t\t}\n\t\t\t\t\t\tvar __btn = __item.find(_options.btnArea);\n\t\t\t\t\t\tif(n.auctionStatus == 1){\n\t\t\t\t\t\t\t__btn.attr('href',__btn.attr('detailUrl')).attr('target','_blank');\n\t\t\t\t\t\t}\n\t\t\t\t\t\telse{\n\t\t\t\t\t\t\t__btn.attr('href','#none').removeAttr('target');\n\t\t\t\t\t\t}\n\t\t\t\t\t});\n\t\t\t\t}\t\t\n\t\t\t}\n\t\t\t\n\t\t\tfunction _showTime(){\n\t\t\t\tvar __item = $(this),\n\t\t\t\t\t__left = __item.data('leftTime'),\n\t\t\t\t\t__second = __left%60,\n\t\t\t\t\t__minute = Math.floor(__left/60)%60,\n\t\t\t\t\t__hour = Math.floor(__left/3600)%24,\n\t\t\t\t\t__day = Math.floor(__left/60/60/24),\n\t\t\t\t\t__date = [];\n\t\t\t\tif(_options.needDay){\n\t\t\t\t\t__item.find(_options.day).html(__day>9?__day:'0'+__day)\n\t\t\t\t}\n\t\t\t\telse{\n\t\t\t\t\t__hour += __day*24;\n\t\t\t\t}\n\t\t\t\t__item.find(_options.hour).html(__hour>9?__hour:'0'+__hour);\n\t\t\t\t__item.find(_options.minute).html(__minute>9?__minute:'0'+__minute);\n\t\t\t\t__item.find(_options.second).html(__second>9?__second:'0'+__second);\t\n\t\t\t}\n\t\t\t\n\t\t\tfunction _excute(){\n\t\t\t\tcount = count%30;\n\t\t\t\tif(count == 0){\n\t\t\t\t\t_getAuctionData();\n\t\t\t\t}\n\t\t\t\telse{\n\t\t\t\t\tvar items = $('[paimaiId]');\n\t\t\t\t\titems.each(function(index,n){\n\t\t\t\t\t\tvar _remaindTime = $(n).data('leftTime');\n\t\t\t\t\t\tif(typeof _remaindTime !='undefined'){\n\t\t\t\t\t\t\tif(_remaindTime >0){\n\t\t\t\t\t\t\t\t_remaindTime --;\n\t\t\t\t\t\t\t\t$(n).data('leftTime',_remaindTime);\n\t\t\t\t\t\t\t\t_showTime.call($(n));\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\telse{\n\t\t\t\t\t\t\t\t$(n).removeData('leftTime');\n\t\t\t\t\t\t\t\ttempList.push($(n).attr('paimaiId'));\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t});\n\t\t\t\t\tif(tempList.length)\n\t\t\t\t\t\t_getAuctionData(true);\n\t\t\t\t\ttempList = [];\n\t\t\t\t}\n\t\t\t\tcount ++;\n\t\t\t}\n\t\t\t\n\t\t\tfunction _init(){\n\t\t\t\tvar __item =  $(_this).find(_options.item);\n\t\t\t\tif(__item.length === 0) return;\n\t\t\t\t\n\t\t\t\tif(timer){\n\t\t\t\t\tclearInterval(timer);\n\t\t\t\t\ttimer = null;\n\t\t\t\t\tcount = 0;\n\t\t\t\t}\n\t\t\t\t$(_this).find(_options.item).each(function(index,n){\n\t\t\t\t\tauctionList.push($(n).attr('paimaiId'));\n\t\t\t\t});\n\t\t\t\tauctionList = _unique(auctionList);\n\t\t\t\ttimer = setInterval(function(){\n\t\t\t\t\t_excute();\n\t\t\t\t},1000);\n\t\t\t}\n\t\t\t_init();\n\t\t}\n\t})()",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "auction"
  },
  {
    "type": "ATTENTION",
    "url": "扩展了公共模块函数，并包含newLimitTime、HotRanking、Social、GoodsIntRec、couponExchange模块对象（分类限时抢购模块）",
    "title": "ATTENTION",
    "name": "ATTENTION",
    "group": "cateFlashSale",
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "cateFlashSale"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "base()",
    "name": "base",
    "group": "cateFlashSale",
    "description": "<p>批次分类推荐商品方法，里面整合了tab切换和autofill模板方法，可传相同参数</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "none",
        "type": "json"
      },
      {
        "title": "code",
        "content": "base: function(args) {\n            var param = jQuery.extend({\n                tabContainer: '.J_sort_tab',\n                skuContainer: '.J_sort_content',\n                tabNode: '.J_sort_tab .J_tab',  // tab节点（tab切换要用）\n                tabContent: '.J_sort_content ul', // tab对应内容节点（tab切换要用）\n                imgSize : 7,\n                waitingCls: '.J_waiting',\n                buynowCls: '.J_buy_now',\n                overCls: '.J_over_time',\n                defaultCls: 'J_default_item',\n                diffCls: 'diff-item J_diff_item',\n                modId: '',   // 模块实例id\n                tagIndex: 0\n            }, args),\n                _this = jQuery(this),\n                batch = {}; // 批次对象\n            param.modId = _this.parent().parent().attr('instanceid');\n\n            function formatDate(time) {\n                var month = time.getMonth() + 1,\n                    date = time.getDate(),\n                    hours = time.getHours(),\n                    minutes = time.getMinutes(),\n                    result = '';\n                month = month < 10 ? '0' + month : month;\n                date = date < 10 ? '0' + date : date;\n                hours = hours < 10 ? '0' + hours : hours;\n                minutes = minutes < 10 ? '0' + minutes : minutes;\n                result = month + '月' + date + '日&nbsp;' + hours + ':' + minutes;\n                return result;\n            }\n\n            function  getImgServer(){\n                var num = 10 + parseInt(Math.random()*4);\n                return '//img' + num + '.360buyimg.com/n';\n            }\n\n            function getData() {\n                jQuery.ajax({\n                    url: 'http://act-jshop.jd.com/cfs.html',\n                    data: {\n                        modId: param.modId\n                    },\n                    dataType: 'jsonp',\n                    success: function(data) {\n                        if(data && data.result) {\n                            batch = data.values;\n                            if(typeof batch !== 'string' && batch != undefined) {\n                                var tabContainer = _this.find(param.tabContainer),\n                                    skuContainer = _this.find(param.skuContainer);\n                                for (var i = 0; i < batch.length; i++) {\n                                    (function(i){\n                                        var beginTime = new Date(batch[i].beginTime.replace(\"-\", \"/\").replace(\"-\", \"/\")),\n                                            endTime = new Date(batch[i].endTime.replace(\"-\", \"/\").replace(\"-\", \"/\")),\n                                            nowTime = new Date(batch[i].nowTime.replace(\"-\", \"/\").replace(\"-\", \"/\")),\n                                            batchTag;   // 标记批次状态，0表示正在进行，1表示未开始，2表示已结束\n                                        if(\n                                            nowTime.getTime() < endTime.getTime() &&\n                                            nowTime.getTime() > beginTime.getTime()\n                                        ) {\n                                            // 表示该批次正在进行\n                                            batchTag = 0;\n                                            tabContainer.append(\n                                                '<span class=\"J_tab now\">' +\n                                                    '<i></i>' +\n                                                    '<span class=\"time\">' + formatDate(beginTime) + '</span>' +\n                                                    '<span class=\"word\">正在秒杀</span>' +\n                                                '</span>'\n                                            );\n                                            skuContainer.append('<ul batch-id=\"'+ batch[i].id +'\"></ul>');\n                                        } else if(\n                                            nowTime.getTime() < endTime.getTime() &&\n                                            nowTime.getTime() < beginTime.getTime()\n                                        ) {\n                                            // 表示该批次未开始\n                                            batchTag = 1;\n                                            tabContainer.append(\n                                                '<span class=\"J_tab wait\">' +\n                                                    '<i></i>' +\n                                                    '<span class=\"time\">' + formatDate(beginTime) + '</span>' +\n                                                    '<span class=\"word\">未开始</span>' +\n                                                '</span>'\n                                            );\n                                            skuContainer.append('<ul batch-id=\"'+ batch[i].id +'\"></ul>');\n                                        } else {\n                                            // 批次已结束\n                                            batchTag = 2;\n                                            tabContainer.append(\n                                                '<span class=\"J_tab now\">' +\n                                                    '<i></i>' +\n                                                    '<span class=\"time\">' + formatDate(beginTime) + '</span>' +\n                                                    '<span class=\"word\"></span>' +\n                                                    '<span class=\"over\">已结束</span>' +\n                                                '</span>'\n                                            );\n                                            skuContainer.append('<ul batch-id=\"'+ batch[i].id +'\"></ul>');\n                                        }\n                                        renderData(batchTag, batch[i]);\n                                    })(i);\n                                };\n                                // 调用tab切换及去除图片懒加载模块方法\n                                jshop.module.cateFlashSale.tab.call(_this[0], param);\n                                jshop.module.cateFlashSale.ridLazy.call(_this[0], param.tabContent);\n                            }\n                        }\n                    }\n                });\n            }\n\n            function renderData(batchTag, batch) {\n                // 渲染每个批次下商品信息\n                for (var j = 0; j < batch.flashSalePromoList.length; j++) {\n                    (function(j){\n                        var skuItem = batch.flashSalePromoList[j],\n                            beginTime = skuItem.timeBegin,\n                            endTime = skuItem.timeEnd,\n                            timer;\n                        _this.find(param.skuContainer)\n                        .find('[batch-id=\"' + batch.id + '\"]')\n                        .append(\n                            '<li sku-id=\"' + skuItem.skuId + '\" clstag=\"sale|keycount|' + param.modId + '|' + (param.tagIndex++) + '\">' +\n                                '<div class=\"goods-item\">' +\n                                    '<a class=\"goods-click\" href=\"http://item.jd.com/' + skuItem.skuId + '.html\" target=\"_blank\"></a>' +\n                                    '<div class=\"goods-num J_goods_num\">限量<span>' + skuItem.numAvailable + '件</span></div>' +\n                                    '<div class=\"goods-pic\">' +\n                                        '<img src=\"' + getImgServer() + param.imgSize + '/'+ skuItem.goodImg + '\" alt=\"' + skuItem.goodName + '\">' +\n                                    '</div>' +\n                                    '<div class=\"goods-info\">' +\n                                        '<div class=\"goods-name\">' +\n                                            '<span>' + skuItem.goodName + '</span>' +\n                                        '</div>' +\n                                        '<div class=\"goods-price\">' +\n                                            '<span class=\"price-tag\">￥</span>' +\n                                            '<span class=\"price-num\">' + skuItem.promoPrice + '</span>' +\n                                            '<a class=\"buy-now J_buy_now\" href=\"http://item.jd.com/' + skuItem.skuId + '.html\" target=\"_blank\">' +\n                                                '<span class=\"go\"></span>' +\n                                                '<span class=\"word\">立即秒杀</span>' +\n                                            '</a>' +\n                                            '<a class=\"waiting J_waiting\">未开始</a>' +\n                                        '</div>' +\n                                    '</div>' +\n                                '</div>' +\n                                '<div class=\"over J_over_time\"></div>' +\n                            '</li>'\n                        );\n                        var nowTime = new Date(batch.nowTime.replace(\"-\", \"/\").replace(\"-\", \"/\")),\n                            currentItem = _this.find('[batch-id=\"' + batch.id + '\"]').find('[sku-id=\"' + skuItem.skuId + '\"]');\n                        if(skuItem.numAvailable === 0) {\n                            currentItem.find('.J_goods_num').html('不限量');\n                        }\n                        switch(batchTag) {\n                            case 0:\n                                // 批次正在进行，依次判断每个商品状态\n                                // 判断商品秒杀时间,动态更改状态\n                                if(nowTime.getTime() > endTime) {\n                                    // 商品秒杀已结束\n                                    currentItem.find(param.buynowCls).show();\n                                    currentItem.find(param.overCls).show();\n                                } else if(nowTime.getTime() < beginTime){\n                                    // 商品秒杀未开始，首先显示未开始\n                                    // 随后监听时间变化，到点变成立即秒杀按钮\n                                    currentItem.find(param.waitingCls).show();\n                                    var leftTime = beginTime - nowTime;\n                                    timer = setInterval(function(){\n                                        if(leftTime <= 0) {\n                                            currentItem.find(param.waitingCls).hide();\n                                            currentItem.find(param.buynowCls).show();\n                                            clearInterval(timer);\n                                        }\n                                        leftTime--;\n                                    }, 1000);\n                                } else {\n                                    // 商品正在秒杀，首先显示立即秒杀按钮\n                                    // 随后监听时间变化，到点变成已结束\n                                    currentItem.find(param.buynowCls).show();\n                                    var leftTime = endTime - nowTime;\n                                    timer = setInterval(function(){\n                                        if(leftTime <= 0) {\n                                            currentItem.find(param.overCls).show();\n                                            clearInterval(timer);\n                                        }\n                                        leftTime--;\n                                    }, 1000);\n                                }\n                                break;\n                            case 1:\n                                // 批次未开始，所有商品显示未开始状态\n                                currentItem.find(param.waitingCls).show();\n                                break;\n                            case 2:\n                                // 批次已结束，所有商品结束状态\n                                currentItem.find(param.overCls).show();\n                                break;\n                            default:\n                                return;\n                                break;\n                        }\n                        // 根据mod 6结果添加样式（适应每行布局不一样模板）\n                        if(j % 6 !== 0 && j % 6 !== 1) {\n                            // 表示为4列一行的，添加样式\n                            currentItem.addClass(param.diffCls);\n                            // 调用自适应商品宽度模块方法\n                            param.autoFillNode = '.J_diff_item';\n                            param.minWidth = '240';\n                            jshop.module.cateFlashSale.autoFill.call(\n                                _this.find(param.skuContainer).find('[batch-id=\"' + batch.id + '\"]')[0],\n                                param\n                            );\n                        } else {\n                            // 表示为2列一行的，添加样式\n                            currentItem.addClass(param.defaultCls);\n                            // 调用自适应商品宽度模块方法\n                            param.autoFillNode = '.J_default_item';\n                            param.minWidth = '490';\n                            jshop.module.cateFlashSale.autoFill.call(\n                                _this.find(param.skuContainer).find('[batch-id=\"' + batch.id + '\"]')[0],\n                                param\n                            );\n                        }\n                    })(j);\n                };\n            }\n\n            function bindRulesTrigger() {\n                _this.find('.J_rules_trigger').bind('click', function(){\n                    var rules = _this.find('.J_rules_content');\n                    if(rules.hasClass('show')) {\n                        rules.removeClass('show').slideUp();\n                    } else {\n                        rules.addClass('show').slideDown();\n                    }\n                });\n                jQuery('body').bind('click', function(e){\n                    var target = $(e.target);\n                    if(!target.hasClass('J_rules_trigger')) {\n                        var rules = _this.find('.J_rules_content');\n                        if(rules.hasClass('show')) {\n                            rules.removeClass('show').slideUp();\n                        }\n                    }\n                });\n            }\n\n            function init() {\n                getData();\n                bindRulesTrigger();\n            }\n\n            init();\n        }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "cateFlashSale"
  },
  {
    "type": "ATTENTION",
    "url": "优惠券推荐模块",
    "title": "ATTENTION",
    "name": "ATTENTION",
    "group": "coupon",
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "coupon"
  },
  {
    "type": "ATTENTION",
    "url": "京豆换券模块",
    "title": "ATTENTION",
    "name": "ATTENTION",
    "group": "couponExchange",
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "couponExchange"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "beanAction()",
    "name": "beanAction",
    "group": "couponExchange",
    "description": "<p>none</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "none",
        "type": "json"
      },
      {
        "title": "code",
        "content": "//baseInfo:{},\nbeanAction:function(param){\n            //解决由于父级overflow：hidden后鼠标移动上去显示不完的问题\n            $(this).closest(\".d-layout-one\").css(\"overflow\",\"visible\");\n            $(this).closest(\".d-layout\").css(\"overflow\",\"visible\");\n            $(this).find(\".\"+param.btnClass).bind(\"click\",function(){\n                //如果按钮为灰色，表示不可点击，直接返回\n                if($(this).hasClass(param.btnGreyClass)) return\n                var tempObj = w.jshop.module.couponExchange;\n                var tempObjInfo = tempObj.baseInfo;\n                tempObjInfo.jbeanId = $(this).attr(\"jbeanId\");\n                tempObjInfo.jbeanShopName = $(this).attr(\"jbeanShopName\");\n                tempObjInfo.jbeanNum = $(this).attr(\"jbeanNum\");\n                tempObjInfo.jbeanCutMoney = $(this).attr(\"jbeanCutMoney\");\n                tempObjInfo.jbeanFullMoney = $(this).attr(\"jbeanFullMoney\");\n                tempObjInfo.jbeanStartDate = $(this).attr(\"jbeanStartDate\");\n                tempObjInfo.jbeanEndDate = $(this).attr(\"jbeanEndDate\");\n                thick_login(function(){\n                    $(\"body\").dialog({\n                        type: \"html\",\n                        //扩展主题class\n                        extendMainClass:\"beans-defined-dialog-1001\",\n                        width: 304,\n                        height: 144,\n                        autoUpdate:true,\n                        source: \"<div class='jd-beans-exchange'><h3 class='text-algin'>兑换1张&nbsp;\"+tempObjInfo.jbeanShopName+\"</br>\"+tempObjInfo.jbeanCutMoney+\"元优惠券（满\"+tempObjInfo.jbeanFullMoney+\"减\"+tempObjInfo.jbeanCutMoney+\"）</h3><p>有效期：\"+tempObjInfo.jbeanStartDate+\"至\"+tempObjInfo.jbeanEndDate+\"</p><p>每个ID限领一张</p><p>本活动为概率性事件，不保证每位客户成功兑换优惠券</p></div>\",\n                        title: \"您正在使用\"+tempObjInfo.jbeanNum+\"个京豆\",\n                        hasButton:true,\n                        cancelButton:\"取消\",\n                        submitButton:\"确定\",\n                        onSubmit:function(){\n                            $.closeDialog();\n                            var _url = INTERFACE.actJshop.couponExchange + \"?itemId=\" + tempObjInfo.jbeanId;\n                            $.ajax({\n                                url: _url,\n                                dataType: \"jsonp\",\n                                success: function (result) {\n                                    tempObj.beanExchange(result,tempObjInfo);\n                                },\n                                error:function(error){\n                                    var result = {};\n                                    tempObj.beanExchange(result,tempObjInfo);\n                                }\n                            });\n                        }\n                    })\n                })\n            });\n        }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "couponExchange"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "beanExchange()",
    "name": "beanExchange",
    "group": "couponExchange",
    "description": "<p>none</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "none",
        "type": "json"
      },
      {
        "title": "code",
        "content": "beanExchange:function(result,tempObjInfo){\n            if(result.success){\n                $(\"body\").dialog({\n                    type: \"html\",\n                    //扩展主题class\n                    extendMainClass:\"beans-defined-dialog-1001\",\n                    width: 304,\n                    height: 98,\n                    autoUpdate:true,\n                    source: \"<div class='jd-beans-exchange'><h3 class='text-algin'>恭喜您，优惠券兑换成功！</h3><p>优惠券已经发放到您的账号中，请到<a href='//quan.jd.com/user_quan.action' target='_blank'>我的京东&nbsp;&gt;&nbsp;优惠券</a>中查看</p></div>\",\n                    title: \"领取优惠券\",\n                    hasButton:true,\n                    cancelButton:\"取消\",\n                    submitButton:\"确定\",\n                    onSubmit:function(){\n                        $.closeDialog();\n                    },\n                    onCancel:function(){\n\n                    }\n                })\n            }else{\n                var _hintStr;\n                if(result.resultCode == \"6\"){\n                    _hintStr = \"很抱歉，您的京豆不足</br>无法兑换成功,快去攒京豆吧\";\n                }else{\n                    _hintStr = \"对不起，该优惠券已经被兑换完</br>去看看其他的吧\";\n                }\n                $(\"body\").dialog({\n                    type: \"html\",\n                    //扩展主题class\n                    extendMainClass:\"beans-defined-dialog-1001\",\n                    width: 304,\n                    height: 144,\n                    autoUpdate:true,\n                    source: \"<div class='jd-beans-exchange'><h3 class='text-algin'>\"+_hintStr+\"</h3><p>有效期：\"+tempObjInfo.jbeanStartDate+\"至\"+tempObjInfo.jbeanEndDate+\"</p><p>每个ID限领一张</p><p>本活动为概率性事件，不保证每位客户成功兑换优惠券</p></div>\",\n                    title: \"兑换提示\",\n                    hasButton:true,\n                    cancelButton:\"取消\",\n                    submitButton:\"确定\",\n                    onSubmit:function(){\n                        $.closeDialog();\n                    },\n                    onCancel:function(){\n\n                    }\n                })\n            }\n        }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "couponExchange"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "acquire()",
    "name": "acquire",
    "group": "coupon",
    "description": "<p>none</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "none",
        "type": "json"
      },
      {
        "title": "code",
        "content": "acquire : function(arg){\n                var options = $.extend({\n                    item : 'li',\n                    leftTrigger : '.al',\n                    rightTrigger : '.ar',\n                    coupons : '.coupon-des a',\n                    cls : 'current',\n                    couponDetail : '.J-CouponDetail',\n                    couponResult : '.J-CouponResult',\n                    couponDiscount : '.J-Discount',\n                    couponQuoto : '.coupon-quoto span:first',\n                    couponLimit : '.coupon-limit span',\n                    close : '.J_BoxClose',\n                    acquire : '.coupon-acquire',\n                    cancel : '.coupon-cancel',\n                    successCls : 'success',\n                    overCls : 'over',\n                    hadCls : 'had',\n                    failCls : 'fail',\n                    jumpLink : '.J-GoJump a',\n                    mask : '.coupon-mask',\n                    // 带图片的优惠券(尚新券)区域(by llp)\n                    couponArea: '.coupon-area',\n                    couponBefore: '.JS-get-coupon',\n                    couponAfter: '.JS-finish-coupon',\n                    couponName: '.J-Couponname',\n                    couponActivity: '.J-Activity a'\n                }),\n\n                root = $(this);\n                jshop.module.ridLazy(root);\n\n                var mask = root.find(options.mask).appendTo('body'),\n                    detail = root.find(options.couponDetail).appendTo('body'),\n                    result = root.find(options.couponResult).appendTo('body'),\n                    loginState,currentItem,pin;\n\n                try{\n                    pin = getCookie('pin');\n                }catch(e){\n                    pin = CookieUtil.getCookie('pin');\n                }\n                loginState = !!pin;\n                pin = encodeURIComponent(pin);\n\n\n                jshop.module.coupon.base.call(this,arg);\n\n                function fill(){\n                    detail.find(options.couponDiscount).html(currentItem.attr('discount').split('.')[0]);\n                    detail.find(options.couponQuoto).html(currentItem.attr('quoto').split('.')[0]);\n                    detail.find(options.couponLimit).html(currentItem.attr('limit'));\n                    detail.find(options.couponName).html(currentItem.attr('coupon-name'));\n                    result.find(options.jumpLink).attr('href',currentItem.closest('li').find(options.jumpLink).attr('href'));\n                    result.find(options.couponActivity).attr('href', currentItem.attr('act-url'));\n                }\n\n                //@param  {type 请求类型(初始化请求为'init',点击请求为'click')}\n                //@param  {currentItem 当前优惠券jQuery对象}\n                //@return {[type]}\n                function acquire(type, currentItem){\n\n                    function getPO(){\n                        var src = currentItem.attr('href'),\n                            a = src.split('?')[1].split('&'),\n                            o = {};\n                            $.each(a,function(i,n){\n                                var b = n.split('=');\n                                o[b[0]] = b[1];\n                            });\n                        return o;\n\n                    }\n                    var p = getPO();\n\n                    $.ajax({\n                        url : url,\n                        data : {\n                            key : p.key,\n                            roleId : p.roleId,\n                            pin : pin\n                        },\n                        dataType : 'jsonp',\n                        type : 'POST',\n                        success : function(data){\n                            detail.hide();\n                            try{\n                                if(data.code == 999){\n                                    result.removeClass(options.overCls);\n                                    result.removeClass(options.hadCls);\n                                    result.removeClass(options.failCls);\n                                    result.addClass(options.successCls);\n                                    // 获取当前优惠券的已选择文案选择器，更改显示文案\n                                    currentItem.parent().parent().find(options.couponAfter).addClass('show');\n                                }else if(data.code == 8){\n                                    result.removeClass(options.successCls);\n                                    result.removeClass(options.hadCls);\n                                    result.removeClass(options.failCls);\n                                    result.addClass(options.overCls);\n                                    currentItem.parent().parent().find(options.couponAfter).addClass('show');\n                                }else if(data.code == 14 || data.code == 15){\n                                    result.removeClass(options.successCls);\n                                    result.removeClass(options.overCls);\n                                    result.removeClass(options.failCls);\n                                    result.addClass(options.hadCls);\n                                    currentItem.parent().parent().find(options.couponAfter).addClass('show');\n                                }\n                                else{\n                                    result.removeClass(options.successCls);\n                                    result.removeClass(options.overCls);\n                                    result.removeClass(options.hadCls);\n                                    result.addClass(options.failCls);\n                                }\n                                showBox(result);\n                            }\n                            catch(e){\n                                result.addClass(options.failCls);\n                                showBox(result);\n                            }\n                            currentItem.closest(options.item).find(options.rightTrigger).trigger('click');\n                        }\n                    });\n                }\n\n                function showMask(){\n                    mask.css({\n                        height : $('window').height()\n                    }).show();\n                }\n\n                function showBox(obj){\n                    obj.css({\n                        top : ($(window).height() - 300)/ 2 + $(window).scrollTop()\n                    }).show();\n                }\n\n                // 关注品牌\n                function attent(){\n                    $.ajax({\n                        url : INTERFACE.brandFollow.batchfollow,\n\t\t\t\t\t\tdata : {brandId : JSON.stringify([{activityId: currentItem.attr('data-id')}]), sysName : 'sale.jd.com'},\n                        dataType : 'jsonp',\n                        success : function(data){\n                            return;\n                        }\n                    });\n                }\n\n                !function(){\n                    root.find(options.item).each(function(i,n){\n                        var item = $(n);\n\n                        item.find(options.coupons).click(function(){\n                            currentItem = $(this);\n                            fill();\n                            showMask();\n                            showBox(detail);\n                            return false;\n                        });\n\n                        item.find(options.couponArea).hover(function(){\n                            var $this = $(this),\n                                couponAfter = $this.find(options.couponAfter),\n                                couponBefore = $this.find(options.couponBefore);\n                            if (!couponAfter.hasClass('show')) {\n                                couponBefore.addClass('show');\n                            };\n                        }, function(){\n                            $(this).find(options.couponBefore).removeClass('show');\n                        });\n\n                    });\n\n                    detail.find(options.close + ',' + options.cancel).click(function(){\n                        detail.hide();\n                        mask.hide();\n                        return false;\n                    });\n\n                    result.find(options.close).click(function(){\n                        result.hide();\n                        mask.hide();\n                        return false;\n                    });\n\n                    detail.find(options.acquire).click(function(){\n                        if(!loginState){\n                            thick_login(function(){\n                                location.href = location.href;\n                            });\n                        }\n                        else{\n                            attent();\n                            acquire('click', currentItem);\n                        }\n                    });\n                }();\n            }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "coupon"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "base()",
    "name": "base",
    "group": "coupon",
    "description": "<p>none</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "none",
        "type": "json"
      },
      {
        "title": "code",
        "content": "//var url = INTERFACE.actJshop.couponSend;\n  base : function(arg){\n                var options = $.extend({\n                        item : 'li',\n                        leftTrigger : '.al',\n                        rightTrigger : '.ar',\n                        coupons : '.coupon-des a',\n                        cls : 'current'\n                    },arg),\n                    root = $(this);\n\n                !function(){\n                    root.find(options.item).each(function(i,n){\n                        var item = $(this).data('index',0),\n                            coupons = item.find(options.coupons),\n                            total = coupons.length;\n\n                        coupons.eq(0).addClass(options.cls).siblings().removeClass(options.cls);\n\n                        item.find(options.leftTrigger).click(function(){\n                            var index = item.data('index');\n                            if(index-- <= 0) return false;\n                            item.data('index',index);\n                            coupons.eq(index).addClass(options.cls).siblings().removeClass(options.cls);\n                        });\n\n                        item.find(options.rightTrigger).click(function(){\n                            var index = item.data('index');\n                            if(index++ >= total -1) return false;\n                            item.data('index',index);\n                            coupons.eq(index).addClass(options.cls).siblings().removeClass(options.cls);\n                        });\n                    });\n                }();\n            }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "coupon"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "getCoupon()",
    "name": "getCoupon",
    "group": "coupon",
    "description": "<p>none</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "none",
        "type": "json"
      },
      {
        "title": "code",
        "content": "getCoupon : function(arg){\n                var options = $.extend({\n                    item : 'li',\n                    leftTrigger : '.al',\n                    rightTrigger : '.ar',\n                    coupons : '.coupon-des a',\n                    cls : 'current',\n                    couponDetail : '.J-CouponDetail',\n                    couponResult : '.J-CouponResult',\n                    couponDiscount : '.J-Discount',\n                    couponQuoto : '.coupon-quoto span:first',\n                    couponLimit : '.coupon-limit span',\n                    close : '.J_BoxClose',\n                    acquire : '.coupon-acquire',\n                    cancel : '.coupon-cancel',\n                    successCls : 'success',\n                    failCls : 'fail',\n                    jumpLink : '.J-GoJump a',\n                    mask : '.coupon-mask',\n                    // 带图片的优惠券(尚新券)区域(by llp)\n                    couponArea: '.coupon-area',\n                    couponBefore: '.JS-get-coupon',\n                    couponAfter: '.JS-finish-coupon',\n                    couponName: '.J-Couponname',\n                    couponActivity: '.J-Activity a'\n                }),\n\n                root = $(this);\n                jshop.module.ridLazy(root);\n\n                var mask = root.find(options.mask).appendTo('body'),\n                    detail = root.find(options.couponDetail).appendTo('body'),\n                    result = root.find(options.couponResult).appendTo('body'),\n                    loginState,currentItem,pin;\n\n                try{\n                    pin = getCookie('pin');\n                }catch(e){\n                    pin = CookieUtil.getCookie('pin');\n                }\n                loginState = !!pin;\n                pin = encodeURIComponent(pin);\n\n\n                jshop.module.coupon.base.call(this,arg);\n\n                function fill(){\n                    detail.find(options.couponDiscount).html(currentItem.attr('discount').split('.')[0]);\n                    detail.find(options.couponQuoto).html(currentItem.attr('quoto').split('.')[0]);\n                    detail.find(options.couponLimit).html(currentItem.attr('limit'));\n                    detail.find(options.couponName).html(currentItem.attr('coupon-name'));\n                    result.find(options.jumpLink).attr('href',currentItem.closest('li').find(options.jumpLink).attr('href'));\n                    result.find(options.couponActivity).attr('href', currentItem.attr('act-url'));\n                }\n\n                function acquire(currentItem){\n\n                    function getPO(){\n                        var src = currentItem.attr('href'),\n                            a = src.split('?')[1].split('&'),\n                            o = {};\n                            $.each(a,function(i,n){\n                                var b = n.split('=');\n                                o[b[0]] = b[1];\n                            });\n                        return o;\n\n                    }\n                    var p = getPO();\n\n                    $.ajax({\n                        url : url,\n                        data : {\n                            key : p.key,\n                            roleId : p.roleId,\n                            pin : pin\n                        },\n                        dataType : 'jsonp',\n                        type : 'POST',\n                        success : function(data){\n                            detail.hide();\n                            try{\n                                if(data.code == 999){\n                                    // 领券成功\n                                    result.removeClass(options.failCls);\n                                    result.addClass(options.successCls);\n                                    // 获取当前优惠券的已选择文案选择器，更改显示文案\n                                    currentItem.parent().parent().find(options.couponAfter).addClass('show');\n                                } else {\n                                    // 领券失败\n                                    result.removeClass(options.successCls);\n                                    result.addClass(options.failCls);\n                                }\n                                result.find('.coupon-box-des').html(data.desc);\n                                showBox(result);\n                            }\n                            catch(e){\n                                result.addClass(options.failCls);\n                                showBox(result);\n                            }\n                            currentItem.closest(options.item).find(options.rightTrigger).trigger('click');\n                        }\n                    });\n                }\n\n                function showMask(){\n                    mask.css({\n                        height : $('window').height()\n                    }).show();\n                }\n\n                function showBox(obj){\n                    obj.css({\n                        top : ($(window).height() - 300)/ 2 + $(window).scrollTop()\n                    }).show();\n                }\n\n                // 关注品牌\n                function attent(){\n                    $.ajax({\n                        url : INTERFACE.brandFollow.batchfollow,\n\t\t\t\t\t\tdata : {brandId : JSON.stringify([{activityId: currentItem.attr('data-id')}]), sysName : 'sale.jd.com'},\n                        dataType : 'jsonp',\n                        success : function(data){\n                            return;\n                        }\n                    });\n                }\n\n                !function(){\n                    root.find(options.item).each(function(i,n){\n                        var item = $(n);\n\n                        item.find(options.coupons).click(function(){\n                            currentItem = $(this);\n                            fill();\n                            showMask();\n                            showBox(detail);\n                            return false;\n                        });\n\n                        item.find(options.couponArea).hover(function(){\n                            var $this = $(this),\n                                couponAfter = $this.find(options.couponAfter),\n                                couponBefore = $this.find(options.couponBefore);\n                            if (!couponAfter.hasClass('show')) {\n                                couponBefore.addClass('show');\n                            };\n                        }, function(){\n                            $(this).find(options.couponBefore).removeClass('show');\n                        });\n\n                    });\n\n                    detail.find(options.close + ',' + options.cancel).click(function(){\n                        detail.hide();\n                        mask.hide();\n                        return false;\n                    });\n\n                    result.find(options.close).click(function(){\n                        result.hide();\n                        mask.hide();\n                        return false;\n                    });\n\n                    detail.find(options.acquire).click(function(){\n                        if(!loginState){\n                            thick_login(function(){\n                                location.href = location.href;\n                            });\n                        }\n                        else{\n                            attent();\n                            acquire(currentItem);\n                        }\n                    });\n                }();\n            }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "coupon"
  },
  {
    "type": "ATTENTION",
    "url": "预售模块",
    "title": "ATTENTION",
    "name": "ATTENTION",
    "group": "forwardSale",
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "forwardSale"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "base()",
    "name": "base",
    "group": "forwardSale",
    "description": "<p>none</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "none",
        "type": "json"
      },
      {
        "title": "code",
        "content": "base : function(args){\n            var _param=$.extend({node:'div'}, args || {}),\n                _this = this,\n                _prefixUrl = INTERFACE.soaYushou + '?sku=',\n                _suffixUrl = '&callback=callBackService',\n                _sku = _param.skuid,\n                _remain_t= 0,\n                _url = _prefixUrl + _param.skuid + _suffixUrl;\n            \n            w.callBackService = function(data){\n                var __$this = $('[sku=\"' + data.sku + '\"]'),\n                    __arr = ['.presale','.appoint','.wait','.go','.over'];\n                for(var i= 0;len=__arr.length,i<len;i++){\n                    $(__$this).find(__arr[i]).addClass('hide');\n                }\n                data.state = data.state==0?5:data.state;\n                $(__$this).find(__arr[data.state-1]).removeClass('hide');\n                $('.has_appointed',__$this).addClass('hide');\n                if(data.state==2){\n                    if(data.flag==false){\n                        $('.appoint').removeClass('wait2');\n                        $(__arr[data.state-1]+\">a\",__$this).attr('href',data.url);\n                        $(__arr[data.state-1]+\">a\",__$this).attr('target','_blank');\n                    }else{\n                        $(__arr[data.state-1]+\">a\",__$this).attr('href','#none');\n                        $(__arr[data.state-1]+\">a\",__$this).attr('target','');\n                        $('.appoint').addClass('wait2');\n                        $('.appoint .button',__$this).unbind('click');\n                    }\n                    $('.has_appointed',__$this).removeClass('hide');\n                    $('.has_appointed>span',__$this).html(data.num);\n                }else if(data.state==4){\n                    $(__arr[data.state-1]+\">a\",__$this).attr('href',data.url);\n\t\t\t\t\t$('.has_appointed>span',__$this).html(data.num);\n                }\n                if((data.state!=0) && (data.state!=5)){\n                    _remain_t = data.d;\n\t\t\t\t\tif(_remain_t > 0)\n\t\t\t\t\t\t_start_timer(_remain_t,__$this);\n                }\n\n                $('.appoint .button',__$this).unbind('click');\n                $('.appoint .button',__$this).click(function(){\n                    if($(this).attr('href')=='#none' || !$(this).attr('href')){\n                        return false;\n                    }\n                    var r = window.open($(this).attr('href'));\n                    if(r){\n                        $('.appoint',__$this).addClass('wait2');\n                        $('.appoint>a',__$this).attr('target','');\n                        $('.appoint>a',__$this).attr('href','#none');\n                        $('.appoint .button',__$this).unbind('click');\n                    }\n                    return false;\n                });\n            }\n\n            function _start_timer(t,arg){\n                var __mode =  arg,\n                    _remain_t = t,\n                    __instanceid = __mode.parents('[instanceid]').attr('instanceid');\n                if(w.jshop.module.forwardSale.modeTimer[__instanceid])\n                    clearInterval(w.jshop.module.forwardSale.modeTimer[__instanceid]);\n                w.jshop.module.forwardSale.modeTimer[__instanceid] = setInterval(function(){\n                    if(_remain_t <= 0)\n                        clearInterval(w.jshop.module.forwardSale.modeTimer[__instanceid]);\n                    var __tt = _remain_t,\n                        __seconds = parseInt(__tt)%60,\n                        __minutes = parseInt((__tt) / 60) % 60,\n                        __hours = parseInt((__tt / 60 / 60) % 24),\n                        __days = parseInt(__tt / 60 / 60 / 24);\n\n                    __days < 10 ? __days = \"0\" + __days : __days = __days;\n                    __hours < 10 ? __hours = \"0\" + __hours : __hours = __hours;\n                    __seconds < 10 ? __seconds = \"0\" + __seconds : __seconds = __seconds;\n                    __minutes < 10 ? __minutes = \"0\" + __minutes : __minutes = __minutes;\n                    if((__days==0 || __days=='00') && (__hours==0 || __hours=='00')  && (__minutes==0 || __minutes=='00') && (__seconds==0 || __seconds=='00')){\n                        var __arg = eval('(' + __mode.attr('module-param') + ')');\n                        w.jshop.module.forwardSale.base.call(__mode,__arg);\n                    }\n                    $('.days', __mode).html(__days);\n                    $('.hours',__mode).html(__hours);\n                    $('.minutes',__mode).html(__minutes);\n                    $('.seconds',__mode).html(__seconds);\n                    _remain_t -= 1;\n                },1000);\n            }\n\n            function _init(){\n                if(_sku){\n                    $.getScript(_url);\n                }\n            }\n\n            _init();\n        }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "forwardSale"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "batchPhase1()",
    "name": "batchPhase1",
    "group": "forwardSale",
    "description": "<p>none</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "none",
        "type": "json"
      },
      {
        "title": "code",
        "content": "batchPhase1 : function(arg){\n\t\t\tvar that = this,\n\t\t\t\toptions = $.extend({\n\t\t\t\t\tisFillZero : true,\n\t\t\t\t\titem:'.item',\n\t\t\t\t\tdefaultCls : 'd-current',\n\t\t\t\t\tisNeedSecond : false,\n\t\t\t\t\tday : '.days',\n\t\t\t\t\thour : '.hours',\n\t\t\t\t\tminute : '.minutes',\n\t\t\t\t\tsecond : '.seconds',\n\t\t\t\t\thasAppoint : '.has_appointed>span',\n\t\t\t\t\tbutton : '.button'\n\t\t\t\t},arg),\n\t\t\t\tinstanceid = $(that).parents('[instanceid]').attr('instanceid'),\n\t\t\t\tduration = options.isNeedSecond ? 1000 : (60*1000),\n\t\t\t\tcountdownItem = [];\n\t\t\t\t\n\t\t\t\n\t\t\tvar item = $(that).find(options.item),\n\t\t\t\tlen = item.length,\n\t\t\t\tcount = 0;\n\t\t\tif(!len) return\n\t\t\t\n\t\t\tfunction getData(){\n\t\t\t\titem.each(function(index,n){\n\t\t\t\t\tvar node = $(n);\n\t\t\t\t\t$.ajax({\n\t\t\t\t\t\turl : INTERFACE.soaYushou + '?sku=' + node.attr('saleid'),\n\t\t\t\t\t\tdataType : 'jsonp',\n\t\t\t\t\t\tsuccess : function(data){\n\t\t\t\t\t\t\tvar __arr = ['presale','appoint','wait','go','over'];\n\t\t\t\t\t\t\tdata.state = data.state==0?5:data.state;\n\t\t\t\t\t\t\tnode.addClass(__arr[data.state - 1]).addClass(options.defaultCls);\n\t\t\t\t\t\t\tif(data.state === 2){\n\t\t\t\t\t\t\t\tif(data.flag){\n\t\t\t\t\t\t\t\t\tnode.find(options.button).attr('href','#none').attr('target','');\n\t\t\t\t\t\t\t\t\tnode.addClass('wait2');\n\t\t\t\t\t\t\t\t}else{\n\t\t\t\t\t\t\t\t\tnode.removeClass('wait2');\n\t\t\t\t\t\t\t\t\tnode.find(options.button).attr('href',data.url).attr('target','_blank');\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tnode.find(options.hasAppoint).html(data.num);\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\tif(data.state == 4)\n\t\t\t\t\t\t\t\tnode.find(options.button).attr('href',data.url);\n\t\t\t\t\t\t\t\tnode.find(options.hasAppoint).html(data.num);\n\t\t\t\t\t\t\t\tnode.find(options.button).unbind('click').click(function(){\n\t\t\t\t\t\t\t\t if($(this).attr('href')=='#none' || !$(this).attr('href')){\n\t\t\t\t\t\t\t\t\treturn false;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tvar __r = window.open($(this).attr('href'));\n\t\t\t\t\t\t\t\tif(__r){\n\t\t\t\t\t\t\t\t\tnode.addClass('wait2');\n\t\t\t\t\t\t\t\t\tnode.children('a').attr('target','').attr('href','#none');\n\t\t\t\t\t\t\t\t\t$(this).unbind('click');\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\treturn false;\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t\tcount ++;\n\t\t\t\t\t\t\tif(data.state != 5){\n\t\t\t\t\t\t\t\tnode.data('left',data.d);\n\t\t\t\t\t\t\t\tif(data.d > 0)\n\t\t\t\t\t\t\t\t\tcountdownItem.push(node);\n\t\t\t\t\t\t\t\tif(count == len)\n\t\t\t\t\t\t\t\t\tcountdown();\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t});\n\t\t\t\t});\n\t\t\t}\n\t\t\t\n\t\t\tfunction countdown(){\n\t\t\t\thandle();\n\t\t\t\tjshop.module.forwardSale.modeTimer[instanceid] = setInterval(handle,duration);\n\t\t\t\t\n\t\t\t}\n\t\t\t\n\t\t\tfunction init(){\n\t\t\t\tif(jshop.module.forwardSale.modeTimer[instanceid])\n\t\t\t\t\tclearInterval(jshop.module.forwardSale.modeTimer[instanceid]);\n\t\t\t\tcount = 0;\n\t\t\t\tcountdownItem = [];\n\t\t\t\tgetData();\t\n\t\t\t}\n\t\t\t\n\t\t\tfunction handle(){\n\t\t\t\tvar hasStep = false;\n\t\t\t\tfor(var i= 0 , len = countdownItem.length; i < len; i++){\n\t\t\t\t\tvar node = countdownItem[i],\n\t\t\t\t\t\tleft = node.data('left'),\n\t\t\t\t\t\tdays = Math.floor(left/(60*24*60)),\n\t\t\t\t\t\thours = Math.floor(left/3600)%24,\n\t\t\t\t\t\tminutes = Math.floor(left/60)%60,\n\t\t\t\t\t\tseconds = left%60;\n        \t\t\t\n\t\t\t\t\tif(options.isFillZero){\n\t\t\t\t\t\tdays = days > 9 ? days : '0' + days;\n\t\t\t\t\t\thours = hours > 9 ? hours : '0' + hours;\n\t\t\t\t\t\tminutes = minutes > 9 ? minutes : '0' + minutes; \n\t\t\t\t\t\tseconds = seconds > 9 ?seconds : '0' + seconds;\n\t\t\t\t\t} \n\t\t\t\t\tnode.find(options.day).html(days);\n\t\t\t\t\tnode.find(options.hour).html(hours);\n\t\t\t\t\tnode.find(options.minute).html(minutes);\n\t\t\t\t\t\n\t\t\t\t\tif(options.isNeedSecond){\n\t\t\t\t\t\tnode.find(options.second).html(seconds);\n\t\t\t\t\t}\n\t\t\t\t\tif(options.isNeedSecond){\n\t\t\t\t\t\tleft --;\n\t\t\t\t\t}\n\t\t\t\t\telse{\n\t\t\t\t\t\tleft -= 60;\n\t\t\t\t\t}\n\t\t\t\t\tnode.data('left',left);\n\t\t\t\t\tif(left <=0){\n\t\t\t\t\t\thasStep = true;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\tif(hasStep)\n\t\t\t\t\tinit();\n\t\t\t}\n\t\t\t\n\t\t\tinit();\n\t\t\t\n\t\t}",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "forwardSale"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "batchPhase2()",
    "name": "batchPhase2",
    "group": "forwardSale",
    "description": "<p>none</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "none",
        "type": "json"
      },
      {
        "title": "code",
        "content": "batchPhase2 : function(arg){\n\t\t\tvar that = this,\n        \t\toptions = $.extend({\n        \t\t\titem : '.jItem',\n        \t\t\tisNeedSecond : false,\n        \t\t\tisFillZero : true,\n        \t\t\tpriceNode : '.presellprice',\n        \t\t\tearnestNode : '.presellearnest',\n        \t\t\tpresellNum : '.presellnum',\n        \t\t\tday:'.days',\n        \t\t\thour : '.hours',\n        \t\t\tminute : '.minutes',\n        \t\t\tsecond : '.seconds',\n        \t\t\twaitCls : 'wait',\n        \t\t\tundergoCls : 'go',\n        \t\t\toverCls : 'over',\n        \t\t\tstairpreCls : 'state',\n        \t\t\tstateCls : 'jCurrent',\n        \t\t\tstairNode : '.jdPrice',\n        \t\t\tstairPreNum : '.prenum',\n        \t\t\tstairPrice : '.pricenode',\n\t\t\t\t\tpresell : '.jpresell'\n        \t\t},arg || {}),\n        \t\tbaseUrl = INTERFACE.soaYushou + '?source=2&sku=',\n        \t\tinstanceid = $(that).parents('[instanceid]').attr('instanceid'),\n\t\t\t\turl = INTERFACE.linkPresale + '?pcount=1&ptype=1&pid=',\n\t\t\t\titems = $(that).find(options.item),\n\t\t\t\tlength = items.length,\n\t\t\t\tcount = 0,\n\t\t\t\tcountdownList = [],\n\t\t\t\tduration = options.isNeedSecond ? 1000 : (60*1000);\n\t\t\t\t\n\t\t\tif(!length) return;\n\t\t\t\t\n\t\t\tfunction getData(){\n\t\t\t\titems.each(function(index,n){\n\t\t\t\t\tvar node = $(n);\n\t\t\t\t\t$.ajax({\n\t\t\t\t\t\turl : baseUrl + node.attr('saleid'),\n\t\t\t\t\t\tdataType : 'jsonp',\n\t\t\t\t\t\tsuccess : function(data){\n\t\t\t\t\t\t\tif(data&&data.type){\n\t\t\t\t\t\t\t\tvar ret = data.ret;\n\t\t\t\t\t\t\t\tif(ret.sa){\n\t\t\t\t\t\t\t\t\tvar nodes = node.find(options.stairNode);\n\t\t\t\t\t\t\t\t\tnodes.each(function(index,n){\n\t\t\t\t\t\t\t\t\t\t$(n).find(options.stairPreNum).html(ret.sa[index].c);\n\t\t\t\t\t\t\t\t\t\t$(n).find(options.stairPrice).html(ret.sa[index].m);\n\t\t\t\t\t\t\t\t\t});\n\t\t\t\t\t\t\t\t\tif(ret.s === 1){\n\t\t\t\t\t\t\t\t\t\tnode.find(options.stairNode).eq(ret.cs - 1).addClass(options.stateCls).parent().addClass(options.stairpreCls + (ret.cs || 1));\n\t\t\t\t\t\t\t\t\t\tnode.find(options.stairNode + ':lt(' + (ret.cs - 1) +')').addClass('history');\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\telse{\n\t\t\t\t\t\t\t\t\tnode.find(options.priceNode).html(ret.cp);\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tnode.find(options.earnestNode).html(ret.pm);\n\t\t\t\t\t\t\t\tif(!!ret.s)\n\t\t\t\t\t\t\t\t\tnode.find(options.presellNum).html(ret.cc);\n\t\t\t\t\t\t\t\tnode.data('left',ret.d);\n\t\t\t\t\t\t\t\tnode.addClass((!ret.s)?options.waitCls:((ret.s === 1) ? options.undergoCls :options.overCls));\n\t\t\t\t\t\t\t\tif(ret.s === 1){\n\t\t\t\t\t\t\t\t\tnode.find(options.presell).attr('href',url + node.attr('saleid')).attr('target','blank');\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tcount ++;\n\t\t\t\t\t\t\t\tif(ret.d > 0 && ret.s != 2){\n\t\t\t\t\t\t\t\t\tcountdownList.push(node);\n\t\t\t\t\t\t\t\t\tif(count === length)\n\t\t\t\t\t\t\t\t\t\tcountdown();\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t});\n\t\t\t\t});\n\t\t\t}\n\t\t\t\t\n\t\t\tfunction countdown(){\n\t\t\t\thandle();\n\t\t\t\tjshop.module.forwardSale.modeTimer[instanceid] = setInterval(handle,duration);\n\t\t\t}\n\t\t\t\t\n\t\t\tfunction handle(){\n\t\t\t\tvar hasStep = false;\n\t\t\t\tfor(var i = 0 , len = countdownList.length; i < len; i++){\n\t\t\t\t\tvar node = countdownList[i],\n\t\t\t\t\t\tleft = node.data('left'),\n\t\t\t\t\t\tdays = Math.floor(left/(60*24*60)),\n\t\t\t\t\t\thours = Math.floor(left/3600)%24,\n\t\t\t\t\t\tminutes = Math.floor(left/60)%60,\n\t\t\t\t\t\tseconds = left%60;\n\t\t\t\t\n\t\t\t\t\tif(options.isFillZero){\n\t\t\t\t\t\tdays = days > 9 ? days : '0' + days;\n\t\t\t\t\t\thours = hours > 9 ? hours : '0' + hours;\n\t\t\t\t\t\tminutes = minutes > 9 ? minutes : '0' + minutes; \n\t\t\t\t\t\tseconds = seconds > 9 ?seconds : '0' + seconds;\n\t\t\t\t\t}\n\t\t\t\t\t\n\t\t\t\t\tnode.find(options.day).html(days);\n\t\t\t\t\tnode.find(options.hour).html(hours);\n\t\t\t\t\tnode.find(options.minute).html(minutes);\n\t\t\t\t\t\n\t\t\t\t\tif(options.isNeedSecond){\n\t\t\t\t\t\tnode.find(options.second).html(seconds);\n\t\t\t\t\t}\n\t\t\t\t\t\n\t\t\t\t\tif(options.isNeedSecond){\n\t\t\t\t\tleft --;\n\t\t\t\t\t}\n\t\t\t\t\telse{\n\t\t\t\t\t\tleft -= 60;\n\t\t\t\t\t}\n\t\t\t\t\tnode.data('left',left);\n\t\t\t\t\tif(left <=0){\n\t\t\t\t\t\thasStep = true;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\tif(hasStep)\n\t\t\t\t\tinit();\n\t\t\t}\n\t\t\t\n\t\t\tfunction init(){\n\t\t\t\tif(jshop.module.forwardSale.modeTimer[instanceid])\n\t\t\t\t\tclearInterval(jshop.module.forwardSale.modeTimer[instanceid]);\n\t\t\t\tcount = 0;\n\t\t\t\tcountdownList = [];\n\t\t\t\tgetData();\t\n\t\t\t}\n\t\t\t\n\t\t\tinit();\n\t\t}",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "forwardSale"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "phase1()",
    "name": "phase1",
    "group": "forwardSale",
    "description": "<p>none</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "none",
        "type": "json"
      },
      {
        "title": "code",
        "content": "phase1 : function(arg){\n\t\t\tvar _args=$.extend({\n\t\t\t\tisFillZero : true,\n\t\t\t\tnode:'div',\n\t\t\t\tdefaultCls : 'd-current',\n\t\t\t\tisNeedSecond : false,\n\t\t\t\tday : '.days',\n\t\t\t\thour : '.hours',\n\t\t\t\tminute : '.minutes',\n\t\t\t\tsecond : '.seconds',\n\t\t\t\thasAppoint : '.has_appointed>span',\n\t\t\t\tbutton : '.button'\n\t\t\t\t}, arg || {}),\n                _this = $(this),\n                _prefixUrl = INTERFACE.soaYushou + '?sku=',\n                _sku = _args.skuid,\n                _left= 0,\n\t\t\t\t_instanceid = _this.parents('[instanceid]').attr('instanceid'),\n\t\t\t\t_node = _this.find(_args.node),\n\t\t\t\t_duration = _args.isNeedSecond ? 1000 : (60*1000),\n                _url = _prefixUrl + _sku;\n\n            function _init(){\n                if(jshop.module.forwardSale.modeTimer[_instanceid])\n\t\t\t\t\tclearInterval(jshop.module.forwardSale.modeTimer[_instanceid]);\n\t\t\t\tif(!_args.skuid) return;\n\t\t\t\t\n\t\t\t\t$.ajax({\n\t\t\t\t\turl : _url,\n\t\t\t\t\tdataType : 'jsonp',\n\t\t\t\t\tsuccess : function(data){\n\t\t\t\t\t\tvar __arr = ['presale','appoint','wait','go','over'];\n\t\t\t\t\t\tdata.state = data.state==0?5:data.state;\n\t\t\t\t\t\t_node.addClass(__arr[data.state - 1]).addClass(_args.defaultCls);\n\t\t\t\t\t\tif(data.state === 2){\n\t\t\t\t\t\t\tif(data.flag){\n\t\t\t\t\t\t\t\t_node.find(_args.button).attr('href','#none').attr('target','');\n\t\t\t\t\t\t\t\t_node.addClass('wait2');\n\t\t\t\t\t\t\t}else{\n\t\t\t\t\t\t\t\t_node.removeClass('wait2');\n\t\t\t\t\t\t\t\t_node.find(_args.button).attr('href',data.url).attr('target','_blank');\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t_node.find(_args.hasAppoint).html(data.num);\n\t\t\t\t\t\t}\n\t\t\t\t\t\t\n\t\t\t\t\t\tif(data.state == 4)\n\t\t\t\t\t\t\t_node.find(_args.button).attr('href',data.url);\n\t\t\t\t\t\t\t_node.find(_args.hasAppoint).html(data.num);\n\t\t\t\t\t\t\t_node.find(_args.button).unbind('click').click(function(){\n\t\t\t\t\t\t\t if($(this).attr('href')=='#none' || !$(this).attr('href')){\n\t\t\t\t\t\t\t\treturn false;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tvar __r = window.open($(this).attr('href'));\n\t\t\t\t\t\t\tif(__r){\n\t\t\t\t\t\t\t\t_node.addClass('wait2');\n\t\t\t\t\t\t\t\t_node.children('a').attr('target','').attr('href','#none');\n\t\t\t\t\t\t\t\t$(this).unbind('click');\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\treturn false;\n\t\t\t\t\t\t});\n\t\t\t\t\t\t\n\t\t\t\t\t\tif(data.state != 5){\n\t\t\t\t\t\t\t_left = data.d;\n\t\t\t\t\t\t\tif(_left > 0)\n\t\t\t\t\t\t\t\t_countdown_start();\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t});\n            }\n\t\t\t\n\t\t\tfunction _countdown_start(){\n\t\t\t\t_time_fill();\n\t\t\t\tjshop.module.forwardSale.modeTimer[_instanceid] = setInterval(function(){\n\t\t\t\t\t_handle();\n        \t\t},_duration);\n\t\t\t}\n\t\t\t\n\t\t\tfunction _time_fill(){\n\t\t\t\tvar __days = Math.floor(_left/(60*24*60)),\n\t        \t\t\t__hours = Math.floor(_left/3600)%24,\n\t        \t\t\t__minutes = Math.floor(_left/60)%60,\n\t        \t\t\t__seconds = _left%60;\n        \t\t\t\n\t\t\t\tif(_args.isFillZero){\n\t\t\t\t\t__days = __days > 9 ? __days : '0' + __days;\n\t\t\t\t\t__hours = __hours > 9 ? __hours : '0' + __hours;\n\t\t\t\t\t__minutes = __minutes > 9 ? __minutes : '0' + __minutes; \n\t\t\t\t\t__seconds = __seconds > 9 ?__seconds : '0' + __seconds;\n\t\t\t\t} \n\t\t\t\t_this.find(_args.day).html(__days);\n\t\t\t\t_this.find(_args.hour).html(__hours);\n\t\t\t\t_this.find(_args.minute).html(__minutes);\n\t\t\t\t\n\t\t\t\tif(_args.isNeedSecond){\n\t\t\t\t\t_this.find(_args.second).html(__seconds);\n\t\t\t\t}\n\t\t\t}\n\t\t\t\n\t\t\tfunction _handle(){\n\t\t\t\t_time_fill()\n\t\t\t\tif(_args.isNeedSecond){\n\t\t\t\t\t_left --;\n\t\t\t\t}\n\t\t\t\telse{\n\t\t\t\t\t_left -= 60;\n\t\t\t\t}\n\t\t\t\tif(_left <= 0)\n\t\t\t\t\t_init();\n\t\t\t}\n\n            _init();\n\t\t}",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "forwardSale"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "phase2()",
    "name": "phase2",
    "group": "forwardSale",
    "description": "<p>none</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "none",
        "type": "json"
      },
      {
        "title": "code",
        "content": "phase2 : function(arg){\n        \tvar _this = $(this),\n        \t\t_args = $.extend({\n        \t\t\tnode : '.jItem',\n        \t\t\tisNeedSecond : false,\n        \t\t\tisFillZero : true,\n        \t\t\tpriceNode : '.presellprice',\n        \t\t\tearnestNode : '.presellearnest',\n        \t\t\tpresellNum : '.presellnum',\n        \t\t\tday:'.days',\n        \t\t\thour : '.hours',\n        \t\t\tminute : '.minutes',\n        \t\t\tsecond : '.seconds',\n        \t\t\twaitCls : 'wait',\n        \t\t\tundergoCls : 'go',\n        \t\t\toverCls : 'over',\n        \t\t\tstairpreCls : 'state',\n        \t\t\tstateCls : 'jCurrent',\n        \t\t\tstairNode : '.jdPrice',\n        \t\t\tstairPreNum : '.prenum',\n        \t\t\tstairPrice : '.pricenode',\n\t\t\t\t\tpresell : '.jpresell'\n        \t\t},arg || {}),\n        \t\t_base_url = INTERFACE.soaYushou + '?source=2',\n        \t\t_instanceid = _this.parents('[instanceid]').attr('instanceid'),\n        \t\t_left = 0,\n\t\t\t\t_url = INTERFACE.linkPresale + '?pcount=1&ptype=1&pid=' + _args.skuid; \n\t\t\t\t\n\n\t\t\t\t_duration = _args.isNeedSecond ? 1000 : (60*1000);\n        \t\n        \tfunction init(){\n        \t\tif(jshop.module.forwardSale.modeTimer[_instanceid])\n\t\t\t\t\tclearInterval(jshop.module.forwardSale.modeTimer[_instanceid]);\n        \t\t\n        \t\tif(!_args.skuid) return;\n        \t\t\n        \t\t$.ajax({\n        \t\t\turl : _base_url + '&sku=' + _args.skuid,\n        \t\t\tdataType : 'jsonp',\n        \t\t\tsuccess : function(data){\n        \t\t\t\tif(data&&data.type){\n        \t\t\t\t\tvar ret = data.ret;\n\t\t\t\t\t\t\tif(ret.sa){\n\t\t\t\t\t\t\t\tvar nodes = _this.find(_args.stairNode);\n\t\t\t\t\t\t\t\tnodes.each(function(index,n){\n\t\t\t\t\t\t\t\t\t$(n).find(_args.stairPreNum).html(ret.sa[index].c);\n\t\t\t\t\t\t\t\t\t$(n).find(_args.stairPrice).html(ret.sa[index].m);\n\t\t\t\t\t\t\t\t});\n\t\t\t\t\t\t\t\tif(ret.s === 1){\n\t\t\t\t\t\t\t\t\t_this.find(_args.stairNode).eq(ret.cs - 1).addClass(_args.stateCls).parent().addClass(_args.stairpreCls + (ret.cs || 1));\n\t\t\t\t\t\t\t\t\t_this.find(_args.stairNode + ':lt(' + (ret.cs - 1) +')').addClass('history');\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\telse{\n        \t\t\t\t\t\t_this.find(_args.priceNode).html(ret.cp);\n        \t\t\t\t\t}\n        \t\t\t\t\t_this.find(_args.earnestNode).html(ret.pm);\n        \t\t\t\t\tif(!!ret.s)\n        \t\t\t\t\t\t_this.find(_args.presellNum).html(ret.cc);\n        \t\t\t\t\t_left = ret.d;\n        \t\t\t\t\t_this.find(_args.node).addClass((!ret.s)?_args.waitCls:((ret.s === 1) ? _args.undergoCls :_args.overCls));\n\t\t\t\t\t\t\tif(ret.s === 1){\n\t\t\t\t\t\t\t\t_this.find(_args.presell).attr('href',_url).attr('target','blank');\n\t\t\t\t\t\t\t}\n        \t\t\t\t\tif(_left > 0  && ret.s != 2){\n        \t\t\t\t\t\t_countdown_start();\n        \t\t\t\t\t}\n        \t\t\t\t}\n        \t\t\t}\n        \t\t});\n        \t}\n        \t\n        \tfunction _countdown_start(){\n\t\t\t\t_time_fill();\n        \t\tjshop.module.forwardSale.modeTimer[_instanceid] = setInterval(function(){\n\t\t\t\t\t_handle();\n        \t\t},_duration);\t\n        \t}\n\t\t\t\n\t\t\tfunction _time_fill(){\n\t\t\t\tvar __days = Math.floor(_left/(60*24*60)),\n\t        \t\t\t__hours = Math.floor(_left/3600)%24,\n\t        \t\t\t__minutes = Math.floor(_left/60)%60,\n\t        \t\t\t__seconds = _left%60;\n        \t\t\t\n        \t\t\tif(_args.isFillZero){\n        \t\t\t\t__days = __days > 9 ? __days : '0' + __days;\n        \t\t\t\t__hours = __hours > 9 ? __hours : '0' + __hours;\n        \t\t\t\t__minutes = __minutes > 9 ? __minutes : '0' + __minutes; \n        \t\t\t\t__seconds = __seconds > 9 ?__seconds : '0' + __seconds;\n        \t\t\t}\n        \t\t\t\n        \t\t\t_this.find(_args.day).html(__days);\n        \t\t\t_this.find(_args.hour).html(__hours);\n        \t\t\t_this.find(_args.minute).html(__minutes);\n        \t\t\t\n        \t\t\tif(_args.isNeedSecond){\n        \t\t\t\t_this.find(_args.second).html(__seconds);\n        \t\t\t}\n\t\t\t}\n\t\t\t\n\t\t\tfunction _handle(){\n        \t\t\t_time_fill()\n        \t\t\tif(_args.isNeedSecond){\n        \t\t\t\t_left --;\n        \t\t\t}\n        \t\t\telse{\n        \t\t\t\t_left -= 60;\n        \t\t\t}\n        \t\t\t\n        \t\t\tif(_left <= 0)\n        \t\t\t\tinit();\n\t\t\t}\n        \t\n        \tinit();\n        }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "forwardSale"
  },
  {
    "type": "ATTENTION",
    "url": "扩展了公共模块函数，并包含了GoodsRec、UserDefine、Banner、tuan、BrandSale、vote模块对象（图片show模块）",
    "title": "ATTENTION",
    "name": "ATTENTION",
    "group": "imgShow",
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "imgShow"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "autoImgShow()",
    "name": "autoImgShow",
    "group": "imgShow",
    "description": "<p>none</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "none",
        "type": "json"
      },
      {
        "title": "code",
        "content": "autoImgShow: function() {\n            if (validateData($(this).attr(\"module-param\"))) {\n                var args = eval(\"(\" + $(this).attr(\"module-param\") + \")\");\n            }\n            var param = $.extend({},\n            args);\n            jshop.module.imgShow.showImg.call(this, param);\n            jshop.module.imgShow.autoLayout.call(this, param);\n        }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "imgShow"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "autoLayout()",
    "name": "autoLayout",
    "group": "imgShow",
    "description": "<p>none</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "none",
        "type": "json"
      },
      {
        "title": "code",
        "content": "autoLayout: function(args) {\n            if (args == undefined) {\n                if (validateData($(this).attr(\"module-param\"))) {\n                    var args = eval(\"(\" + $(this).attr(\"module-param\") + \")\");\n                }\n            }\n            var param = $.extend({\n                node: \"li\",\n                extra: {}\n            },\n            args),\n            _this = this,\n            elems = $(_this).find(param.node),\n            elem = elems.eq(0);\n            elem.css(param.extra);\n            var outerWidth = parseInt(elem.data(\"outerWidth\") || elem.outerWidth(true)),\n            width = parseInt(elem.data(\"width\") || elem.css(\"width\")),\n            qty = parseInt(elem.parent().parent().width() / outerWidth);\n            elem.data({\n                \"outerWidth\": outerWidth,\n                \"width\": width\n            });\n            var extraWidth = outerWidth - width;\n            var newWidth = (elem.parent().parent().width() - extraWidth * qty) / qty - 0.1;\n            elems.css({\n                width: newWidth\n            });\n        }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "imgShow"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "showImg()",
    "name": "showImg",
    "group": "imgShow",
    "description": "<p>none</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "none",
        "type": "json"
      },
      {
        "title": "code",
        "content": "showImg: function(args) {\n            var silde = true;\n\t\t\t// 定义传入的CSS调用变量\n\t\t\tvar param=$.extend({timer:0,node:'li', nodeChild:'.jItem', imgNodeArea:'.jPic', imgNode:'.jPic a', defaultClass:'current', slideDirection:'left', subFunction:'moveEffect'}, args),\n\t\t\t\t_this=this,\n\t\t\t\timgArea = $(_this).find(param.node),\n\t\t\t\tnodeChild = $(_this).find(param.nodeChild),\n\t\t\t\tdefaultClass = param.defaultClass,\n\t\t\t\tcurrentNode = imgArea.eq(0).find(param.imgNode),\n\t\t\t\t_duration = parseInt(parseFloat(param.timer || 0)*1000);\n\t\t\t\n\t\t\tif(!imgArea.length) return;\n\t\t\t\n\t\t\t//全局变量\n\t\t\tvar index = 0,moveRange = 0,partTime = null,animate = null;\n\t\t\tvar isTop = (param.slideDirection == 'top')?true:false;\n            var enterFlag =[],count = 0;\n\t\t\t\n\t\t\t//轮播图所有效果\n\t\t\tvar banner = {\n\t\t\t\ttransparentEffect : function(){\n\t\t\t\t\t// 调用函数\n\t\t\t\t\tinit();\n\t\t\t\t\tanimate = transparent;\n\t\t\t\t\t_event();\n\t\t\t\t},\n\t\t\t\tmoveEffect : function(){\n\t\t\t\t\t//初始化\n\t\t\t\t\timgArea.each(function(i,n){\n\t\t\t\t\t\tvar imgNodeArea = $(n).find(param.imgNodeArea);\n\t\t\t\t\t\tif(isTop){\n\t\t\t\t\t\t\timgNodeArea.css({height:100000});\n\t\t\t\t\t\t\timgNodeArea.children().css({width:imgNodeArea.width(),height:\"auto\",\"float\":\"none\",display:\"block\"});\n\t\t\t\t\t\t}else{\n\t\t\t\t\t\t\timgNodeArea.css({width:100000});\n\t\t\t\t\t\t\timgNodeArea.children().css({width:imgNodeArea.find('img').width(),height:\"100%\",\"float\":\"left\",display:\"block\"});//将这个宽度写在css里，在ie6下面，获取到的父级宽度是被这个元素撑开的宽度\n\t\t\t\t\t\t};\n\t\t\t\t\t});\n\t\t\t\t\t\n\t\t\t\t\t// 调用函数\n\t\t\t\t\tinit();\n\t\t\t\t\tanimate = oneImgMove;\n\t\t\t\t\t_event();\n\t\t\t\t}\n\t\t\t};\n\t\t\t\n\t\t\t//根据传入的子方法名执行对应的子方法\n\t\t\t \n\t\t\t jshop.module.ridLazy(_this);\n\t\t\tif(banner[param.subFunction])\n\t\t\t\tbanner[param.subFunction].call(_this);\n\t\t\t\n\t\t\t//轮播图初始化\n\t\t\tfunction init(){\n\t\t\t\timgArea.css({width:currentNode.find('img').width(),height:currentNode.find('img').height()});\n\t\t\t\tnodeChild.css({width:currentNode.find('img').width(),height:currentNode.find('img').height()});\n\t\t\t}\n\t\t\t\n\t\t\t function _event(){\n                imgArea.each(function(index,n){\n                \tvar _ele = $(n);\n                    _ele.data('index',0);\n                \t_ele.data('count',0);\n                \t_ele.data('animating',false);\n\t\t\t\t\t_ele.data('direction',1);\n\n                \t_ele.bind({\n                        mouseenter:function(){\n\t\t\t\t\t\t\tvar _this = this,_area = $(this),_count = _area.data('count') + 1, _node = _area.find(param.imgNode);\n\t\t\t\t\t\t\t_area.data('count',_count),currentNode = _area.find(param.imgNode);\n\t\t\t\t\t\t\tif(!_area.data('animating')){\n\t\t\t\t\t\t\t\t_area.data('direction',1);\n\t\t\t\t\t\t\t\t_area.data('index',1);\n\t\t\t\t\t\t\t\tcurrentNode.removeClass(defaultClass).eq(1).addClass(defaultClass);\t\n\t\t\t\t\t\t\t\tanimate.call(_this);\n\t\t\t\t\t\t\t}\t\t\t\n\t\t\t\t\t\t},\n                        mouseleave:function(){\n\t\t\t\t\t\t\tvar _this = this,_area = $(this),_count = _area.data('count') + 1, _node = _area.find(param.imgNode);\n\t\t\t\t\t\t\t_area.data('count',_count),currentNode = _area.find(param.imgNode);\n\t\t\t\t\t\t\tif(!_area.data('animating')){\n\t\t\t\t\t\t\t\t_area.data('direction',2);\n\t\t\t\t\t\t\t\t_area.data('index',0);\n\t\t\t\t\t\t\t\tcurrentNode.removeClass(defaultClass).eq(0).addClass(defaultClass);\t\n\t\t\t\t\t\t\t\tanimate.call(_this);\n\t\t\t\t\t\t\t}\t   \n\t\t\t\t\t\t}\n                    });\n                });\n\t\t\t }\n\t\t\t\n\t\t\t//透明效果\n\t\t\tfunction transparent(){\n\t\t\t\n\t\t\t\tvar _this = this, _area = $(_this),_index = _area.data('index');\n\t\t\t\t\t_currentnode = _area.find(param.imgNode); \n\t\t\t\t\n\t\t\t\t_area.data('animating',true);\n\t\t\t\t_currentnode.animate({\n\t\t\t\t\topacity: 0\n\t\t\t\t  }, 0, function() {\n\t\t\t\t  });\n\t\t\t\t_currentnode.eq(_index).animate({\n\t\t\t\t\topacity: 1\n\t\t\t\t  }, _duration, function() {\n\t\t\t\t\t\t_area.data('animating',false);\n\t\t\t\t\t\tvar _count = _area.data('count'), _direction = _area.data('direction');\n\t\t\t\t\t\tif(_direction == 1){\n\t\t\t\t\t\t\tif(_count%2 == 0){\n\t\t\t\t\t\t\t\t_area.data('direction',2);\n\t\t\t\t\t\t\t\t_area.data('index',0);\n\t\t\t\t\t\t\t\t_area.find(param.imgNode).removeClass(defaultClass).eq(0).addClass(defaultClass);\t\n\t\t\t\t\t\t\t\tanimate.call(_this);\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\telse{\n\t\t\t\t\t\t\tif(_count%2 == 1){\n\t\t\t\t\t\t\t\t_area.data('direction',1);\n\t\t\t\t\t\t\t\t_area.data('index',1);\n\t\t\t\t\t\t\t\t_area.find(param.imgNode).removeClass(defaultClass).eq(1).addClass(defaultClass);\t\n\t\t\t\t\t\t\t\tanimate.call(_this);\t\t\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t  });\n\t\t\t}\n\t\t\t\n\t\t\t//移动效果：每一张图片分10次移动\n\t\t\t \n\t\t\tfunction oneImgMove(){\n\t\t\t\tvar _this = this,_area = $(_this),_css = {},\n\t\t\t\t\t_index = _area.data('index');\n\t\t\t\t_area.data('animating',true);\n\t\t\t\t\t\n\t\t\t\tif(isTop){\n\t\t\t\t\t_css.marginTop = -_index*_area.find(param.imgNode).height() + 'px';\n\t\t\t\t}\n\t\t\t\telse{\n\t\t\t\t\t_css.marginLeft = -_index*_area.find(param.imgNode).width() + 'px';\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t_area.find(param.imgNodeArea).animate(_css,_duration,function(){\n\t\t\t\t\t_area.data('animating',false);\n\t\t\t\t\tvar _count = _area.data('count'), _direction = _area.data('direction');\n\t\t\t\t\tif(_direction == 1){\n\t\t\t\t\t\tif(_count%2 == 0){\n\t\t\t\t\t\t\t_area.data('direction',2);\n\t\t\t\t\t\t\t_area.data('index',0);\n\t\t\t\t\t\t\t_area.find(param.imgNode).removeClass(defaultClass).eq(0).addClass(defaultClass);\t\n\t\t\t\t\t\t\tanimate.call(_this);\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\telse{\n\t\t\t\t\t\tif(_count%2 == 1){\n\t\t\t\t\t\t\t_area.data('direction',1);\n\t\t\t\t\t\t\t_area.data('index',1);\n\t\t\t\t\t\t\t_area.find(param.imgNode).removeClass(defaultClass).eq(1).addClass(defaultClass);\t\n\t\t\t\t\t\t\tanimate.call(_this);\t\t\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t\t}\n        }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "imgShow"
  },
  {
    "type": "ATTENTION",
    "url": "新限时抢购模块",
    "title": "ATTENTION",
    "name": "ATTENTION",
    "group": "newLimitTime",
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "newLimitTime"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "base()",
    "name": "base",
    "group": "newLimitTime",
    "description": "<p>none</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "none",
        "type": "json"
      },
      {
        "title": "code",
        "content": "base : (function(){\n\t\t\ttimer = {};\n\t\t\treturn function(arg){\n\t\t\t\tvar that = this,\n\t\t\t\t\troot = $(that),\n\t\t\t\t\toptions = $.extend({\n\t\t\t\t\t\tnode : 'li',\n\t\t\t\t\t\twaitCls : 'jWait',\n\t\t\t\t\t\tunderwayCls : 'jGo',\n\t\t\t\t\t\toverCls : 'jOver',\n\t\t\t\t\t\thour : '.jHours',\n\t\t\t\t\t\tminute : '.jMinutes',\n\t\t\t\t\t\tsecond : '.jSeconds',\n\t\t\t\t\t\tisWaitCount : false,\n\t\t\t\t\t\twaitHour : '.jHours',\n\t\t\t\t\t\twaitMinute : '.jMinutes',\n\t\t\t\t\t\twaitSecond : '.jSeconds',\n\t\t\t\t\t\tgoodsImg : '.jPic img',\n\t\t\t\t\t\tgoodsName : '.jDesc a',\n\t\t\t\t\t\tprice : '.jdPrice .jNum',\n\t\t\t\t\t\tnumAvailable : '.jNumAvailable em',\n\t\t\t\t\t\tavailableNode : '.jNumAvailable',\n\t\t\t\t\t\tlevelPrifix : 'jLevel',\n\t\t\t\t\t\tlevel : '.jLevelMember',\n\t\t\t\t\t\tlevelName : '.jLevelMember .jText',\n\t\t\t\t\t\tpriceAttr : 'price',\n\t\t\t\t\t\tlink : '.jPic a',\n\t\t\t\t\t\timgSize : 7,\n\t\t\t\t\t\tlevelDesSuf : '及以上专享',\n\t\t\t\t\t\tnoPrice : '暂无报价',\n\t\t\t\t\t\tbtn : '.jCart'\n\t\t\t\t\t},arg),\n\t\t\t\t\tnode = root.find(options.node),\n\t\t\t\t\tinstanceid = root.closest('[instanceid]').attr('instanceid'),\n\t\t\t\t\twaited = !1,phaseTwoLeft = 0,\n\t\t\t\tlevel = [{\n\t\t\t\t\tname : '注册',\n\t\t\t\t\tlevel : 50\n\t\t\t\t},{\n\t\t\t\t\tname : '铜牌',\n\t\t\t\t\tlevel : 56\n\t\t\t\t},{\n\t\t\t\t\tname : '银牌',\n\t\t\t\t\tlevel : 61\n\t\t\t\t},{\n\t\t\t\t\tname : '金牌',\n\t\t\t\t\tlevel : 62\n\t\t\t\t},{\n\t\t\t\t\tname : '钻石',\n\t\t\t\t\tlevel : 105\n\t\t\t\t},{\n\t\t\t\t\tname : 'VIP',\n\t\t\t\t\tlevel : 110\n\t\t\t\t},{\n\t\t\t\t\tname : '企业',\n\t\t\t\t\tlevel : 90\n\t\t\t\t}],timeLeft = 0;\n\n\t\t\t\tfunction getInfo(){\n\t\t\t\t\t$.ajax({\n\t\t\t\t\t\turl : INTERFACE.actJshop.fs,\n\t\t\t\t\t\tdata : {\n\t\t\t\t\t\t\tmodId : instanceid\n\t\t\t\t\t\t},\n\t\t\t\t\t\tdataType : 'jsonp',\n\t\t\t\t\t\tsuccess : function(data){\n\t\t\t\t\t\t\tif(data&&data.result){\n\t\t\t\t\t\t\t\tdata = data.values;\n\t\t\t\t\t\t\t\tif(!!data.skuId){\n\t\t\t\t\t\t\t\t\tvar sku = data.skuId;\n\t\t\t\t\t\t\t\t\tfill(options.price,'html',data.promoPrice < 0 ? options.noPrice : data.promoPrice);\n\t\t\t\t\t\t\t\t\tfill(options.goodsImg,'src',getImgServer() + options.imgSize + '/'+ data.goodImg);\n\t\t\t\t\t\t\t\t\tfill(options.goodsName,'html',data.goodName);\n\t\t\t\t\t\t\t\t\tif(!!data.numAvailable)\n\t\t\t\t\t\t\t\t\t\tfill(options.numAvailable,'html',data.numAvailable);\n\t\t\t\t\t\t\t\t\telse root.find(options.availableNode).hide();\n\t\t\t\t\t\t\t\t\tfill(options.link,'href', INTERFACE.linkGoods + '/' + sku + '.html');\n\t\t\t\t\t\t\t\t\tvar levelDes = getLevel(data.levelMember);\n\t\t\t\t\t\t\t\t\tfill(options.levelName,'html',levelDes.name + options.levelDesSuf);\n\t\t\t\t\t\t\t\t\troot.find(options.level).addClass(options.levelPrifix + levelDes.level);\n\t\t\t\t\t\t\t\t\tif(data.status == '1'){\n\t\t\t\t\t\t\t\t\t\tnode.attr('class',options.underwayCls);\n\t\t\t\t\t\t\t\t\t\tvar left =  getNowTime(data.endTime) - getNowTime(data.nowTime);\n\t\t\t\t\t\t\t\t\t\ttimeLeft = parseInt(left/1000);\n\t\t\t\t\t\t\t\t\t\tcount();\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\telse if(data.status == '0'){\n\t\t\t\t\t\t\t\t\t\tnode.attr('class',options.overCls);\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\telse{\n\t\t\t\t\t\t\t\t\t\tnode.attr('class',options.waitCls);\n\t\t\t\t\t\t\t\t\t\tif(options.isWaitCount){\n\t\t\t\t\t\t\t\t\t\t\twaited = true;\n\t\t\t\t\t\t\t\t\t\t\tvar left = getNowTime(data.startTime) - getNowTime(data.nowTime);\n\t\t\t\t\t\t\t\t\t\t\ttimeLeft = parseInt(left/1000);\n\n\t\t\t\t\t\t\t\t\t\t\tvar left2 = getNowTime(data.endTime) - getNowTime(data.startTime);\n\t\t\t\t\t\t\t\t\t\t\tphaseTwoLeft = parseInt(left2/1000);\n\t\t\t\t\t\t\t\t\t\t\tcount();\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\tnode.find('[' + options.priceAttr + ']').each(function(ind,q){\n\t\t\t\t\t\t\t\t\t\t$(q).attr($(q).attr(options.priceAttr),data.skuId);\n\t\t\t\t\t\t\t\t\t\t$(q).attr('jshop','price');\n\t\t\t\t\t\t\t\t\t});\n\t\t\t\t\t\t\t\t\tjshop.module.ridLazy(node);\n\t\t\t\t\t\t\t\t\tnode.find(options.btn).attr('href', INTERFACE.linkCart + '?pid=' + data.skuId + '&pcount=1&ptype=1');\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\telse{\n\t\t\t\t\t\t\t\t\tnode.attr('class',options.overCls);\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t});\n\t\t\t\t}\n\n\t\t\t\tfunction  getImgServer(){\n\t\t\t\t\tvar num = 10 + parseInt(Math.random()*4);\n\t\t\t\t\treturn '//img' + num + '.360buyimg.com/n';\n\t\t\t\t}\n\n\t\t\t\tfunction getNowTime(str){\n\t\t\t\t\tvar a = str.split(' '),\n\t\t\t\t\t\ta1 = a[0].split('-'),\n\t\t\t\t\t\ta2 = a[1].split(':'),\n\t\t\t\t\t\tdate = new Date(a1[0],parseInt(a1[1]) - 1,a1[2],a2[0],a2[1],a2[2]);\n\t\t\t\t\treturn date.getTime();\n\t\t\t\t}\n\n\t\t\t\tfunction getLevel(le){\n\t\t\t\t\tvar result = null;\n\t\t\t\t\tfor(var i = 0, len = level.length; i < len; i++){\n\t\t\t\t\t\tif(level[i].level == le){\n\t\t\t\t\t\t\tresult = level[i];\n\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\treturn result;\n\t\t\t\t}\n\n\t\t\t\tfunction fill(search,attr,value){\n\t\t\t\t\tif(node.find(search).length){\n\t\t\t\t\t\tif(attr == 'html'){\n\t\t\t\t\t\t\tnode.find(search).html(value);\n\t\t\t\t\t\t}\n\t\t\t\t\t\telse{\n\t\t\t\t\t\t\tnode.find(search).attr(attr,value);\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\tfunction count(){\n\t\t\t\t\thandle();\n\t\t\t\t\tif(timer[instanceid]){\n\t\t\t\t\t\tclearInterval(timer[instanceid]);\n\t\t\t\t\t\ttimer[instanceid] = null;\n\t\t\t\t\t}\n\t\t\t\t\ttimer[instanceid] = setInterval(function(){\n\t\t\t\t\t\thandle();\n\t\t\t\t\t},1000);\n\t\t\t\t}\n\n\t\t\t\tfunction handle(){\n\t\t\t\t\tif(timeLeft <= 0){\n\t\t\t\t\t\tif(waited){\n\t\t\t\t\t\t\tnode.attr('class',options.underwayCls);\n\t\t\t\t\t\t\ttimeLeft = phaseTwoLeft;\n\t\t\t\t\t\t\twaited = false;\n\t\t\t\t\t\t}\n\t\t\t\t\t\telse{\n\t\t\t\t\t\t\tnode.attr('class',options.overCls);\n\t\t\t\t\t\t\tclearInterval(timer[instanceid]);\n\t\t\t\t\t\t\ttimer[instanceid]  = null;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t}\n\t\t\t\t\telse{\n\t\t\t\t\t\tvar hour = parseInt(timeLeft/3600),\n\t\t\t\t\t\t\tminute = parseInt(timeLeft/60)%60,\n\t\t\t\t\t\t\tsecond = timeLeft%60;\n\t\t\t\t\t\thour = hour < 10 ? '0' + hour : hour;\n\t\t\t\t\t\tminute = minute < 10 ? '0' + minute : minute;\n\t\t\t\t\t\tsecond = second < 10 ? '0' + second : second;\n\t\t\t\t\t\troot.find(waited?options.waitHour:options.hour).html(hour);\n\t\t\t\t\t\troot.find(waited?options.waitMinute:options.minute).html(minute);\n\t\t\t\t\t\troot.find(waited?options.waitSecond:options.second).html(second);\n\t\t\t\t\t}\n\t\t\t\t\ttimeLeft -- ;\n\t\t\t\t}\n\n\t\t\t\tfunction init(){\n\t\t\t\t\tjshop.module.ridLazy(node);\n\t\t\t\t\tgetInfo();\n\t\t\t\t}\n\n\t\t\t\tinit();\n\t\t\t};\n\t\t})()",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "newLimitTime"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "addEllipsis()",
    "name": "addEllipsis",
    "group": "public_modules",
    "description": "<p>新EPT商品名称截断处理，自动添加省略号</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "none",
        "type": "json"
      },
      {
        "title": "code",
        "content": "addEllipsis:function(args){\n\n       if(!args)return;\n       var _this = this,\n               param = jQuery.extend({title:'li', count:20, text:'...'}, args),\n               elem = jQuery(_this).find(param.title),\n               reg = /\\s|\\,|\\.|\\!|\\'|\\\"|\\;|\\:|\\t|\\n|\\r/g;\n//               reg = new RegExp(\"\\\\s|\\\\,|\\\\.|\\\\!|\\\\'|\\\\\\\"|\\\\;|\\\\:|\\\\t|\\\\n|\\\\r\", \"g\");\n       elem.each(function(index, ele){\n           var _textNode = ele.firstChild,\n                   _textValue = _textNode.nodeValue;\n           if(_textNode && _textNode.nodeType == 3 && _textNode.length >= param.count){\n               var _tempValue = _textValue.substring(0, param.count - param.text.length);\n               var _char = _textValue.charAt(param.count - param.text.length);\n               if(reg.test(_char)){\n                   _textNode.nodeValue = _tempValue + param.text;\n               }else{\n                   var _arr = _tempValue.match(reg);\n                   _tempValue = _tempValue.substring(0, _tempValue.lastIndexOf(_arr[_arr.length - 1]) + 1) + param.text;\n                   _textNode.nodeValue = _tempValue;\n               }\n           }\n       });\n\n   }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "public_modules"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "addToCart()",
    "name": "addToCart",
    "group": "public_modules",
    "description": "<p>飞入购物车--点击购物车，获取商品图片飞入购物车特效</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "none",
        "type": "json"
      },
      {
        "title": "code",
        "content": "addToCart : function(args){\n        var param = $.extend({\n            node : 'li',\n            img : '.jPic img',//飞入节点\n            cart : '.jBtnArea a',//点击节点\n            property : 'data-sku',//获取节点li上的skuid\n            jdCart : '#settleup-2013',//购物车\n            cartNum : '#shopping-amount',//购物车数量\n            timer : 500\n        }, args || {}),\n            that = $(this),\n            node = that.find(param.node),\n            jdCart = $(param.jdCart),\n            cartNum = jdCart.find(param.cartNum);\n\n        node.each(function(i, e){\n            var img = $(e).find(param.img),\n                cart = $(e).find(param.cart);\n\n            cart.click(function(){\n                smarket.add(cart, $(e).attr(param.property), img, jdCart, cartNum, param.timer);\n            });\n        });\n\n        var smarket = {\n            ele : null,\n            sku : null,\n            ptype : null,\n            pcount : null,\n            add : function(a,b,img, jdCart, cartNum, timer, c,d){\n                0 != b &&(this.ele = a, this.sku = b, this.ptype = d || 1, this.pcount = c || 1, this.img = img, this.jdCart = jdCart, this.cartNum = cartNum, this.timer = timer, this.versonAnimate());\n            },\n\n            versonAnimate : function(){\n                var a = this;\n                clearTimeout(a.timer);\n                a.timer = null;\n                this.addToCart();\n                var b = a.img,\n                    c = b.height(),\n                    d = b.width(),\n                    e = b.offset().left,\n                    f = b.offset().top,\n                    g = $(document).scrollTop(),\n                    h = a.jdCart.offset().left + 50,\n                    i = a.jdCart.offset().top,\n                    j = $('<div class=\"flyGoods jGoodsRecommend20140909\" style=\"position:absolute;z-index: 10;\"></div>'),\n                    l = 25;\n\n            var t = $(a.ele);\n                j.html(b.clone()).css({\n                    left: e + d / 2 - l + Math.round(40Math.random() + 0 - 20),\n                    top: f + c/2 - 1 + Math.round(40Math.random() + 0 - 20)\n                });\n\n                j.appendTo('body');\n                j.animate({\n                    top : t.offset().top,\n                    left : t.offset().left + t.width() - 50\n                    },a.timer,'easeOutCirc',function(){\n                        j.animate({\n                            left : h,\n                            top : i,\n                            opacity : 0.1\n                        },a.timer,'easeInOutQuint',function(){\n                            a.getCartNum();\n                            j.remove();\n                        });\n                    });\n            },\n\n            addToCart : function(){\n                var a = INTERFACE.reBuyForOrderCenter + \"?wids={PID}&nums={PCOUNT}\";\n                a = a.replace(\"{PID}\", this.sku).replace(\"{PCOUNT}\", this.pcount).replace(\"{PTYPE}\", this.ptype),\n                jQuery.ajax({\n                    url: a,\n                    dataType: \"jsonp\"\n                });\n            },\n            getCartNum : function(){\n                var that = this;\n                jQuery.ajax({\n                    url : INTERFACE.miniCartServiceNew,\n                    data : {\n                        method : 'GetCart'\n                    },\n                    dataType : 'jsonp',\n                    success : function(data){\n                        try{\n                            that.cartNum.html(data.Cart.Num);\n                        }\n                        catch(e){\n                        }\n                    }\n                });\n            }\n        }\n    }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "public_modules"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "attentStoreOrAct()",
    "name": "attentStoreOrAct",
    "group": "public_modules",
    "description": "<p>关注店铺或活动</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "none",
        "type": "json"
      },
      {
        "title": "code",
        "content": "attentStoreOrAct: function(args) {\n        var param = jQuery.extend({\n                attentNode: 'a',  //点击元素\n                shopId: 'shop-id', //店铺ID（绑定在节点伪属性，可为空）\n                actId: 'act-id',  //活动ID（绑定在节点伪属性，可为空）\n                typeUrl: 'url'    //活动或店铺链接（绑定在节点伪属性）\n            }, args || {}),\n            followUrl = '',\n\t\t\tdata = {},\n            _this = $(this),\n            _node = _this.find(param.attentNode),\n            appType = 0; //链接类型\n        _node.each(function(){\n            var $this = $(this),\n                $parent = $this.parent();\n            // 调用公共方法获取链接类型（0表示采销活动，1表示店铺活动，2表示店铺）\n            appType =returnUrlType($this.attr(param.typeUrl));\n            $this.attr('data-type', 2); //表示默默关注\n            $parent.addClass('attentScope');\n            switch (appType) {\n                case 0:\n                case 1:\n                    // 活动\n                    $parent.saleAttent({\n                        attentType: 'activity',\n                        node: param.attentNode,\n                        dataId: 'act-id',\n                        current: 'favor-handle',\n                        activityType: appType\n                    });\n                    break;\n                case 2:\n                    // 店铺\n                    $parent.saleAttent({\n                        attentType: 'vender',\n                        node: param.attentNode,\n                        dataId: 'shop-id',\n                        current: 'favor-handle'\n                    });\n                    break;\n                default:\n                    break;\n            }\n        });\n    }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "public_modules"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "autoFill()",
    "name": "autoFill",
    "group": "public_modules",
    "description": "<p>自动填充宽度：通过传入不同的参数，让商品呈现不同的间距排列--可应用于列表类模块</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "如{autoFillNode:'li', xInner:0, yInner:0, minWidth:' ', xOuter:' ', yOuter:' '}\n1、autoFillNode为需要计算宽度的节点，默认为li；xInner为节点之间的横向间距；yInner为节点之间的纵向间距;\n2、minWidth为节点除内外边距、边框之后的宽度，如果没传则自动获取。如果最终算出来的宽度小于最小宽度，则不做改变;\n3、xOuter为节点父级左右边距，默认为空，表示两边没有间距；如果传入值大于0，则两边增加传入的间距值；如果等于0，则表示两边完全不要间距，包括每一行第一个节点和最后一个节点的边距。yOuter和xOuter相反;\n4、length 每一行的数量有三种方式：1是自定义传；2是根据每一行的宽度和单个的宽度计算能放下的数量；3是当一行的数量不够占一行的数量",
        "type": "json"
      },
      {
        "title": "code",
        "content": "autoFill : function(args){\n        var param = $.extend({autoFillNode:'li', xInner:0, yInner:0, minWidth:' ', xOuter:' ', yOuter:' ', isEqual:false, length:''} , args||{}),\n            _this = $(this),\n            node = _this.find(param.autoFillNode),\n            xInner = parseInt(param.xInner),\n            yInner = parseInt(param.yInner),\n            minWidth = parseInt(param.minWidth)?parseInt(param.minWidth):node.width(),\n            xOuter = param.xOuter,\n            yOuter = param.yOuter,\n            isEqual = param.isEqual,\n            length;\n\n\n        //有最外层横向两边距\n        if(xOuter !== 0){\n            //是否需要平均节点宽度\n            if(isEqual){\n                length = node.length;\n            }else if(param.length > 0){\n                length = param.length;\n            }else{\n                length = parseInt((_this.width() - xOuter*2)/minWidth);\n            }\n\n            var width = (_this.width() - (length+1)*xInner - xOuter*2 - length*(parseFloat(node.css('padding-left')) + parseFloat(node.css('padding-right')) + parseFloat(node.css('border-left-width')) + parseFloat(node.css('border-right-width'))))/length;\n\n            if(width < minWidth)return;};\n\n            init();\n            _this.css('padding-left',xOuter);\n        }\n\n        //不要最外层横向两边距\n        if(xOuter === 0){\n            //是否需要平均节点宽度\n            if(isEqual){\n                length = node.length;\n            }else if(param.length > 0){\n                length = param.length;\n            }else{\n                length = parseInt(_this.width()/minWidth);\n            }\n\n            var width = (_this.width() - (length-1)*xInner - length*(parseFloat(node.css('padding-left')) + parseFloat(node.css('padding-right')) + parseFloat(node.css('border-left-width')) + parseFloat(node.css('border-right-width'))))/length;\n\n            if(width < minWidth)return;};\n\n            init();\n            getRowFirst();\n        }\n\n        //默认状态，最外层横向两边距不存在\n        if(xOuter ===' '){\n            //是否需要平均节点宽度\n            if(isEqual){\n                length = node.length;\n            }else if(param.length > 0){\n                length = param.length;\n            }else{\n                length = parseInt(_this.width()/minWidth);\n            }\n\n            var width = (_this.width() - (length+1)*xInner - length*(parseFloat(node.css('padding-left')) + parseFloat(node.css('padding-right')) + parseFloat(node.css('border-left-width')) + parseFloat(node.css('border-right-width'))))/length;\n\n            if(width < minWidth)return;};\n\n            init();\n        }\n\n        //有最外层纵向两边距\n        if(yOuter != 0){\n            _this.css('padding-bottom',yInner+yOuter);\n            _this.css('padding-top',yOuter);\n        }\n\n        //不要最外层纵向两边距\n        if(yOuter === 0){\n            getRow();\n        }\n\n        //默认状态，最外层纵向两边距不存在\n        if(yOuter === ' '){\n            _this.css('padding-bottom',yInner);\n        }\n\n\n        node.css('width', width);\n\n        //初始化节点\n        function init(){\n            _this.css('overflow','hidden');\n\n            if(node.css('margin-left')||node.css('margin-right')){\n                node.css({'margin-left':0, 'margin-right':0});\n            }\n\n            node.css('margin-top',yInner);\n            node.css('margin-left',xInner);\n        }\n\n        //获取每一行的第一个节点\n        function getRowFirst(){\n            node.each(function(i,e){\n                if(i % length === 0){\n                    $(e).css('margin-left',0);\n                }\n            });\n        }\n\n        //获取任意多行节点\n        function getRow(){\n            var number = [1];\n            node.each(function(i,e){\n                for(var j = 0; j < number.length; j++){\n                    if(i >= length(number[j] - 1) && i < lengthnumber[j]){\n                        $(e).css('margin-top',0);\n                    }\n                }\n            });\n        }\n\n    }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "public_modules"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "autoTag()",
    "name": "autoTag",
    "group": "public_modules",
    "description": "<p>给a链接增加埋点</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "none",
        "type": "json"
      },
      {
        "title": "code",
        "content": "autoTag:function(args){\n        var param = jQuery.extend({\n\t\t\t\tnode:'a'\n\t\t\t\t}, args || {}),\n            _this = jQuery(this),\n\t\t\tnode = _this.find(param.node),\n\t\t\tinstanceid = _this.closest('div[instanceid]').attr('instanceid');\n\t\t\t\n\t\tnode.each(function(i,e){\n\t\t\tjQuery(e).attr('clstag','sale|keycount|'+instanceid+'|'+i);\n\t\t});\n    }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "public_modules"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "autoWidth()",
    "name": "autoWidth",
    "group": "public_modules",
    "description": "<p>自适应布局：自适应布局宽度，根据布局的宽度判断能放下的一行数量，并将多余的宽度赋给每一个列表。支持css对象传入</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "如{_this:'.template-area', node:'.item', extra:{}}",
        "type": "json"
      },
      {
        "title": "code",
        "content": "autoWidth:function(args){\n        var _para = $.extend({node:'li', extra:{}}, args || {}),\n            _this = this,\n            elems = $(_this).find(_para.node),\n            elem = elems.eq(0);\n\n        elems.css(_para.extra);\n\n        var outerWidth = parseInt(elem.data('outerWidth') || elem.outerWidth(true)),\n            width = parseInt(elem.data('width') || elem.css('width')),\n            qty = parseInt(elem.parent().parent().width()/outerWidth);\n\n        elem.data({'outerWidth':outerWidth, 'width':width});\n\n        var extraWidth = outerWidth - width;\n        var newWidth = (elem.parent().parent().width()-extraWidth*qty-0.03)/qty;\n        elems.css({width:newWidth});\n  }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "public_modules"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "brandAttent()",
    "name": "brandAttent",
    "group": "public_modules",
    "description": "<p>关注品牌--支持多个品牌关注</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "一、业务\n      0、关注店铺和关注品牌街活动，传的都是“品牌街”那边的品牌活动ID，当前活动的“品牌活动ID”可以在隐藏域#tb_id里面获取\n      1、点击元素：系统用j-attention（用此class名做唯一区分），用户自定义用e-attention\n      2、品牌活动ID：data-id（节点伪属性，将品牌活动ID保存在此）,品牌街活动是“品牌街活动ID”，商家是shopId\n      3、区分关注功能类型：data-type（节点伪属性，用户手动传入），0表示不需要改变文案及取消功能，1表示需要改变文案和要取消功能\n      4、currentDom：当前点击的元素\n      5、临时状态data-state ：0未关注；1关注成功；2已经关注；3关注数量达到上限；4关注失败\n      6、逻辑业务：\n          1）页面打开时，获取页面上所有带有点击class节点上的data-id，整体初始化；\n          2）点击某一个元素时，将此元素设置为当前元素，获取元素上的data-id，和data-state发送不同请求（关注或取消关注）\n          3）当元素是关注状态1和已经关注状态2时，hover上去都显示取消关注\n          4）根据不同的请求状态，修改按钮文案\n\n  二、系统使用（引入attent_bp.js）：\n      1、点击元素：j-attention（用此class名做唯一区分）\n      2、品牌活动ID：data-id（节点伪属性，将品牌活动ID保存在此）,品牌街活动是“品牌街活动ID”\n      3、区分关注功能类型：data-type（节点伪属性，用户手动传入），0表示不需要改变文案及取消功能，1表示需要改变文案和要取消功能\n\n 三、公共方法（Module.js里面增加brandAttent方法）\n      1、点击元素：e-attention（用此class名做唯一区分）\n      2、品牌活动ID：data-id（节点伪属性，将品牌活动ID保存在此）,品牌街活动是“品牌街活动ID”\n      3、区分关注功能类型：data-type（节点伪属性，用户手动传入），0表示不需要改变文案及取消功能，1表示需要改变文案和要取消功能\n      4、点击元素，受限于模块module-name，只有在模块下才能使用\n      5、使用方法：<div class=\"j-module\" public modules=\"brandAttent\" module-param=\"{}\">自定义代码</div>",
        "type": "json"
      },
      {
        "title": "code",
        "content": "brandAttent : function(args){\n        var param = jQuery.extend({\n            node : '.e-attention', //关注点击元素\n            pageIdValue : '#tb_id',\n            dataId : 'data-id',//（节点伪属性，将品牌活动ID保存在此）,品牌街活动是“品牌街活动ID”\n            dataState : 'data-state',\n            dataType : 'data-type'//关注类型，如果是1，则只需要关注和已经关注2个状态\n        }, args || {}),\n            _this = jQuery(this),\n            node = _this.find(param.node),\n            dataTye,//全局变量，获取点击元素上的类型  0只要关注和已经关注，非0则默认有取消功能，且修改按钮文案\n            currentDom,//全局变量，获取当前点击的元素\n            para = []; //传入参数\n\n        if(!node.length)return;}\n\n        var attentHtml = '<div class=\"follow-dialog-mask\"></div>'\n        +'<div class=\"follow-dialog\">'\n        +   '<div class=\"attent-mt\">'\n        +       '<span class=\"attent-close\" title=\"关闭\">关闭</span>'\n        +       '<span class=\"attent-title\">提示</span>'\n        +   '</div>'\n        +   '<div class=\"attent-mc\">'\n        +       '<div class=\"attent-con\">'\n        +           '<span class=\"attent-msg\"></span>'\n        +           '<span class=\"attent-other\"></span>'\n        +       '</div>'\n        +   '</div>'\n        +'</div>';\n\n        var attentCss = '<style id=\"followCls\">'\n        +'.follow-dialog-mask{position:fixed; _position:absolute; left:0; top:0; right:0; bottom:0; background:#000; opacity:0.3; filter:alpha(opacity=30); z-index:100; display:none;}'\n        +'.follow-dialog-mask.current{display:block;}'\n        +'.follow-dialog{width:310px; height:185px; border:solid 5px #ccc; background:#fff; position:fixed; _position:absolute; left:50%; top:50%; margin:-92px 0 0 -155px; z-index:101; display:none;}'\n        +'.follow-dialog.current{display:block;}'\n        +'.follow-dialog .attent-mt{height:32px; line-height:32px; background:#f5f5f5; font-size:16px; color:#222; text-indent:10px; overflow:hidden;}'\n        +'.follow-dialog .attent-close{float:right; width:32px; height:32px; text-indent:-9999px; background:url(//img10.360buyimg.com/cms/jfs/t1420/84/156758085/1080/d48a39fe/555e9e79N85386290.png) center center no-repeat; cursor:pointer;}'\n        +'.follow-dialog .attent-ok, .follow-dialog .attent-repeat, .follow-dialog .attent-error, .follow-dialog .attent-max{margin:48px 0 0 55px; height:40px; padding-left:48px;}'\n        +'.follow-dialog .attent-ok{background:url(//img12.360buyimg.com/cms/jfs/t1435/352/153421548/1347/d377c92d/555e9e71Nb767e906.png) left center no-repeat;}'\n        +'.follow-dialog .attent-repeat, .follow-dialog .attent-error, .follow-dialog .attent-max{background:url(//img14.360buyimg.com/cms/jfs/t1516/358/164942511/1418/e0c25f0c/555e9e75Nfca9da16.png) left center no-repeat;}'\n        +'.follow-dialog .attent-ok .attent-msg{font-size:14px; color:#009900; font-weight:bold;}'\n        +'.follow-dialog .attent-repeat .attent-msg, .follow-dialog .attent-error .attent-msg, .follow-dialog .attent-max .attent-msg{font-size:14px; color:#ff771e; font-weight:bold;}'\n        +'.follow-dialog .attent-other{color:#6f6363; display:block; margin-top:3px;}'\n        +'.follow-dialog .attent-other a{color:#004499;}'\n        +'.follow-dialog.attent-mall .attent-other a{margin:0 5px;}'\n        +'</style>';\n\n        var attentInfo = {\n            brand : {\n                msgOk : '&#x5173;&#x6CE8;&#x54C1;&#x724C;&#x6210;&#x529F;',\n                msgRepeat : '&#x5DF2;&#x7ECF;&#x5173;&#x6CE8;',\n                msgError : '&#x5173;&#x6CE8;&#x54C1;&#x724C;&#x5931;&#x8D25;',\n                msgMax : '&#x5173;&#x6CE8;&#x7684;&#x54C1;&#x724C;&#x8FBE;&#x5230;&#x6700;&#x5927;&#x6570;&#x91CF;',\n                msgOther : '<a href=\"//t.jd.com/follow/brand/list.action\" target=\"_blank\">&#x67E5;&#x770B;&#x6211;&#x7684;&#x5173;&#x6CE8;>></a>'\n            },\n            mall : {\n                msgOk : '&#x5173;&#x6CE8;&#x6210;&#x529F;',\n                msgRepeat : '&#x5DF2;&#x7ECF;&#x5173;&#x6CE8;',\n                msgError : '&#x5173;&#x6CE8;&#x5931;&#x8D25;',\n                msgOther : '&#x67E5;&#x770B;&#x6211;&#x5173;&#x6CE8;&#x7684;<a href=\"//t.jd.com/vender/followVenderList.action\" target=\"_blank\">&#x5E97;&#x94FA;</a>&#x548C;<a href=\"//t.jd.com/follow/brand/list.action\" target=\"_blank\">&#x54C1;&#x724C;</a>'\n            }\n        };\n\n        //临时状态data-state ：0未关注；1关注成功；2已经关注；3关注数量达到上限；4关注失败\n        function domOperate(){\n            //取消关注\n            if(currentDom.attr(param.dataState) == 0){\n                if(dataType == 1){currentDom.html('\\u5173\\u6ce8\\u54c1\\u724c');}//如果当前需要取消关注功能，就需要修改文案\n               return;\n            }\n\n            jQuery('body').append(attentHtml,attentCss);\n            var _this = jQuery('.follow-dialog'),\n                mask = jQuery('.follow-dialog-mask'),\n                con = _this.find('.attent-con'),\n                msg = _this.find('.attent-msg'),\n                other = _this.find('.attent-other'),\n                close = _this.find('.attent-close'),\n\t\t\t\tcssDom = jQuery('#followCls'),\n                current = 'current';\n\n            //关注成功\n            if(currentDom.attr(param.dataState) == 1){\n                if(dataType == 1){currentDom.html('\\u5df2\\u5173\\u6ce8');}//如果当前需要取消关注功能，就需要修改文案\n                msg.html(attentInfo.brand.msgOk);\n                other.html(attentInfo.brand.msgOther);\n                con.addClass('attent-ok');\n                _this.addClass(current);\n                mask.addClass(current);\n            }\n            //已经关注\n            if(currentDom.attr(param.dataState) == 2){\n                msg.html(attentInfo.brand.msgRepeat);\n                other.html(attentInfo.brand.msgOther);\n                con.addClass('attent-repeat');\n                _this.addClass(current);\n                mask.addClass(current);\n            }\n            //关注达到最大数量\n            if(currentDom.attr(param.dataState) == 3){\n                msg.html(attentInfo.brand.msgMax);\n                other.html(attentInfo.brand.msgOther);\n                con.addClass('attent-repeat');\n                _this.addClass(current);\n                mask.addClass(current);\n            }\n            //关注失败\n            if(currentDom.attr(param.dataState) == 4){\n                msg.html(attentInfo.brand.msgError);\n                other.html(attentInfo.brand.msgOther);\n                con.addClass('attent-error');\n                _this.addClass(current);\n                mask.addClass(current);\n            }\n            close.click(function(){\n                _this.remove();\n                mask.remove();\n\t\t\t\tcssDom.remove();\n            });\n        }\n\n        //获取参数ID，此段供初始化元素状态及文案所用\n        !function getActivityId(){\n            for(var i = 0, len = node.length; i<len; i+=1){\n                para.push({activityId : jQuery(node[i]).attr(param.dataId)});\n            }\n        }();\n\n        //获取预览页面活动ID\n        function getAppId(){\n             var args=new Object(),\n                qry=location.search.substring(1),\n                pairs=qry.split(\"&\");\n            for(var i=0;i<pairs.length;i++)\n             {\n                var pos=pairs[i].indexOf('=');\n                    if(pos==-1)   continue;\n                    var argname=pairs[i].substring(0,pos),\n                        val=pairs[i].substring(pos+1);\n                    args[argname]=unescape(val);\n             }\n           return args['veBean.appId'];\n        }\n\n        function init(){\n            getState();\n            event();\n        }\n\n        function event(){\n            node.mouseenter(function(){\n                var _state = jQuery(this).attr(param.dataState),\n                    dataType = jQuery(this).attr(param.dataType);\n\n                if(_state == 1 || _state == 2){\n                    if(dataType!=0){jQuery(this).html('\\u53d6\\u6d88\\u5173\\u6ce8');}//如果当前需要取消关注功能，就需要修改文案\n                }\n            }).mouseleave(function(){\n                var _state = jQuery(this).attr(param.dataState),\n                    dataType = jQuery(this).attr(param.dataType);\n\n                if(_state == 1 || _state == 2){\n                    if(dataType!=0){jQuery(this).html('\\u5df2\\u5173\\u6ce8');}//如果当前需要取消关注功能，就需要修改文案\n                }\n            });\n\n            node.click(function(){\n                //获取当前点击元素上的品牌活动ID伪属性data-id\n                currentDom = jQuery(this);\n                para = [{activityId:currentDom.attr(param.dataId)}],\n                dataType = currentDom.attr(param.dataType);\n\n                if(dataType!=0){//如果当前需要取消关注功能\n                    if(currentDom.attr(param.dataState) == 1 || currentDom.attr(param.dataState) == 2){\n                        thick_login(abortAttent); \n                    }else{\n                        thick_login(attent);\n                    }\n                }else{\n                    thick_login(attent);\n                }\n            });\n        }\n\n        function getState(){\n            $.ajax({\n                url : INTERFACE.brandFollow.batchIsFollow,\n\t\t\t\tdata : {brandId : JSON.stringify(para), sysName : 'sale.jd.com'},\n                dataType : 'jsonp',\n                success : function(data){\n                    if(data.code == 'F10000'){\n                        for(var i = 0, len = node.length; i < len; i+=1){\n                            var _node = jQuery(node[i]),\n                                dataId = _node.attr(param.dataId),\n                                dataType = _node.attr(param.dataType);\n\n                            if(data.data[dataId]){\n                                if(dataType == 1){_node.html('\\u5df2\\u5173\\u6ce8');}//如果当前需要取消关注功能，就需要修改文案\n                                _node.attr(param.dataState,1);//已关注\n                            }else{\n                                if(dataType == 1){_node.html('\\u5173\\u6ce8\\u54c1\\u724c');}//如果当前需要取消关注功能，就需要修改文案\n                                _node.attr(param.dataState,0);//未关注\n                            }\n                        }\n                    };\n                }\n            });\n        }\n\n        function attent(){\n            $.ajax({\n                url : INTERFACE.brandFollow.batchfollow,\n\t\t\t\tdata : {brandId : JSON.stringify(para), sysName : 'sale.jd.com'},\n                dataType : 'jsonp',\n                success : function(data){\n                    if(data.code == 'F10000'){\n                        if(data.data){\n                            currentDom.attr(param.dataState,1);\n                            domOperate();\n                        }\n                    }else if(data.code == 'F0402'){\n                        if(!data.data){\n                            currentDom.attr(param.dataState,2);\n                            domOperate();\n                        }\n                    }else if(data.code == 'F0410'){\n                        currentDom.attr(param.dataState,3);\n                        domOperate();\n                    }else{\n                        currentDom.attr(param.dataState,4);\n                        domOperate();\n                    }\n                }\n            });\n        }\n\n        function abortAttent(){\n            $.ajax({\n                url : INTERFACE.brandFollow.batchUnfollow,\n\t\t\t\tdata : {brandId : JSON.stringify(para), sysName : 'sale.jd.com'},\n                dataType : 'jsonp',\n                success : function(data){\n                    if(data.code == 'F10000'){\n                        if(data.data){\n                            currentDom.attr(param.dataState,0);\n                            domOperate();\n                        }\n                    }\n                }\n            });\n        }\n\n        init();\n    }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "public_modules"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "changePageUrl()",
    "name": "changePageUrl",
    "group": "public_modules",
    "description": "<p>页面跳转--应用场景：装修、预览、浏览</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "param：value页面地址中的关键字；url需要跳转的地址",
        "type": "json"
      },
      {
        "title": "code",
        "content": "changePageUrl : function(args){\n        var param = jQuery.extend({\n            value : 'sale',\n            url : '//www.jd.com'\n        }, args || {});\n        if(location.href.indexOf(param.value)!=-1){\n            location.href = param.url;\n        }\n    }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "public_modules"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "changePhoto()",
    "name": "changePhoto",
    "group": "public_modules",
    "description": "<p>改变图片，点击小图看大图</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "none",
        "type": "json"
      },
      {
        "title": "code",
        "content": "changePhoto : function(args){\n        var param = $.extend({changePhotoNode:'.jPic img' , smallPhoto:'.jScrollWrap li', title:'.jDesc a', defaultClass:'jCurrent', eventType:'click'} , args || {}),\n            _this = $(this),\n            largePhoto = _this.find(param.changePhotoNode),\n            smallPhoto = _this.find(param.smallPhoto),\n            title = _this.find(param.title);\n\n        //初始化\n        largePhoto.attr('src' , smallPhoto.eq(0).attr('data-src'));\n        largePhoto.parent().attr('href' , smallPhoto.eq(0).attr('data-href'));\n        title.attr('href' , smallPhoto.eq(0).attr('data-href'));\n\n        smallPhoto.eq(0).addClass(param.defaultClass);\n\n        //触发小图\n        smallPhoto[param.eventType](function(){\n            var _target = this;\n\n            largePhoto.attr('src' , $(_target).attr('data-src'));\n            largePhoto.parent().attr('href' , $(_target).attr('data-href'));\n            title.attr('href' , $(_target).attr('data-href'));\n\n            $(_target).addClass(param.defaultClass).siblings().removeClass(param.defaultClass);\n        });\n    }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "public_modules"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "changeStyle()",
    "name": "changeStyle",
    "group": "public_modules",
    "description": "<p>给鼠标当前出发的节点增加一个样式：主要应用在鼠标移动到节点，节点伸缩与展开等。</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "如{node:'li', defaultClass:'jCurrent', defaultShow:0}。\n1、参数node为单个节点名；\n2、参数defaultClass可任意命名，只要css里面有这个名字。",
        "type": "json"
      },
      {
        "title": "code",
        "content": "changeStyle:function(args){\n        var param = $.extend({node:'li', defaultClass:'jCurrent', defaultShow:0}, args),\n            elem = $(this).find(param.node),\n            defaultClass = param.defaultClass,\n            defaultShow = param.defaultShow;\n\n        elem.eq(defaultShow).addClass(defaultClass);\n\n        elem.each(function(index,n){\n            $(n).mouseenter(function(e){\n                $(this).addClass(defaultClass).siblings().removeClass(defaultClass);\n            });\n        });\n  }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "public_modules"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "choiceLot()",
    "name": "choiceLot",
    "group": "public_modules",
    "description": "<p>分群商品推荐模块</p>",
    "examples": [
      {
        "title": "demo",
        "content": "<div class=\"j-module\" module-function=\"choiceLot\" module-param=\"{rid:'$redirctId', containerSelector: '.j-list-wrap', itemTempSelector: '.j-template-li'}\">\n    <script type=\"template\" class=\"j-template-li\">\n        <li {{clstag}}>\n            <div>商品id：{{goodsId}}</div>\n            <div>商品名称：{{wname}}</div>\n            <div>跳转链接：{{url}}</div>\n            <div>图片url：{{imageurl}}</div>\n            <div>商品别名：{{alias}}</div>\n            <div>楼层id：{{groupId}}</div>\n            <div>标签：{{label}}</div>\n        </li>\n    </script>\n    <ul class=\"j-list-wrap\"></ul>\n</div>",
        "type": "json"
      },
      {
        "title": "module-param",
        "content": "rid                 分群id \ncontainerSelector    选品展示区域容器节点选择器\nitemTempSelector     一个选品的渲染模板的选择器\nlog                 是否发送日志（目前只是大脑模板才需要发日志）\nlogDetailSelector   约定用于埋点的跳转商品详情页的节点选择器\nlogCartSelector     约定用于埋点的加入购物车的节点选择器\nimgSize             SKU图片尺码",
        "type": "json"
      },
      {
        "title": "code",
        "content": "choiceLot: function(param){\n\n            var jTarget = $(this),\n                // URL = '//clever.jd.com/rule/mgets.action',\n                URL = INTERFACE.clever,\n                instanceid = jTarget.closest('[module-name]').attr('instanceid');\n            param = jQuery.extend({\n                    rid: '',\n                    log: false,\n                    containerSelector: '.j-list-wrap',                 \n                    itemTempSelector: '.j-template-li',    \n                    logDetailSelector: '.j-log-detail',\n                    logCartSelector: '.j-log-cart',\n                    imgSize: 'n6'                 \n                }, param);\n\n            //各种工具类\n            var tool = {\n\n                //模板替换工具\n                replace: function(str, obj){\n                    for(a in obj){\n                        var reg = new RegExp('\\\\{\\\\{' + a + '\\\\}\\\\}', 'g'),\n                            path = '';\n                        if(a === 'imageurl'){\n                            path = tool.getImgPrefix('sku');\n                        }else if(a === 'alias'){\n                            path = tool.getImgPrefix();\n                        }\n                        str = str.replace(reg, obj[a] === null? '': (path + obj[a]));\n                    }\n                    str = tool.handleHttpPrefix(str.replace(/\\jQuery.*?\\$/g, ''));\n                    return str;\n                },\n\n                //获取图片地址前缀\n                getImgPrefix: function(type){\n                    var path = type === 'sku'? param.imgSize: 'cms';\n                    return '//img1' + Math.round(Math.random() * 4) + '.360buyimg.com/' + path + '/';\n                },\n\n                //做http、https双兼容，统一去掉http协议名\n                handleHttpPrefix: function(str){\n                    return str.replace(/http:|https:/gi, '');\n                },\n\n                //获取选品数据并展示\n                getChoiceLot: function(){\n                    jQuery.ajax({\n                        url: URL,\n                        data: {rid: param.rid},\n                        dataType: 'jsonp',\n                        success: function(data){\n                            if(data.data && data.data.length > 0){\n                                successHandle(data);\n                            }else{\n                                //如果第一次拉取数据失败，会尝试再进行一次拉取。选品接口目前还不够稳定\n                                if(!jTarget.data('send')){\n                                    jTarget.data('send', true);\n                                    tool.getChoiceLot();\n                                }else{\n                                    console.error('获取选品接口响应异常：' + data);\n                                }\n                            }\n                        }\n                    });\n                },\n\n                //发送埋点请求\n                //@param type   埋点类型['show','detail','cart']。分别代表列表展示、打开商品详情页、加入购物车\n                //@param data   接口响应的数据\n                //@param skus   sku值，多个以英文逗号隔开\n                sendLog: function(type, data, skus){\n\n                    var paramVal = '',\n                        url = data.mercuryUrl,\n                        os = (function(){\n                            var val = 'other';\n                            if((navigator.platform == \"Win32\") || (navigator.platform == \"Windows\")){\n                                val = 'win';\n                            }else if((navigator.platform == \"Mac68K\") || (navigator.platform == \"MacPPC\") || (navigator.platform == \"Macintosh\")){\n                                val = 'mac';\n                            }\n                            return val;\n                        })();\n\n                    //展示列表的埋点请求\n                    if(type === 'show'){\n                        paramVal = 'action=0$';\n                    }else if(type  === 'detail'){\n                        //跳转商品详情页\n                        paramVal = 'action=1$';\n                    }else if(type === 'cart'){\n                        //点击加入购物车\n                        paramVal = 'action=4$';\n                    }\n\n                    //补全埋点需要的各种参数值\n                    url = url.replace(/mercury\\.jd\\.local/g, 'mercury.jd.com');\n                    url = url.replace(/action=\\d?\\$/, paramVal);\n                    url = url.replace(/uip=/, 'uip=' + data.clientIp);\n                    url = url.replace(/csku=[\\d,]*\\$/, 'csku=' + skus + '$');\n                    url = url.replace(/channel=/, 'channel=' + 1);\n                    url = url.replace(/\\$os=/, '$os=' + os);\n                    url = url.replace(/cul=/, 'cul=' + encodeURIComponent(location.href));\n                    url = url.replace(/ref=/, 'ref=' + document.referrer);\n                    url = url.replace(/&rm=/, '&rm=' + new Date().getTime());\n                    //ware_type是1（人工选品）2（大脑选品）。目前只有大脑需要发送埋点请求\n                    url = url.replace(/&cul/, '$ware_type=2&cul');\n\n                    var img = new Image();\n                    img.src = url;\n                }\n            }\n\n            //成功回调函数\n            function successHandle(data){\n                var html = '',\n                    jTpl = jTarget.find(param.itemTempSelector),\n                    tpl = jTpl.html(),\n                    arrData = data.data,\n                    arrSku = [];\n                jTpl.remove();\n                for(var i = 0; i < arrData.length; i++){\n                    arrData[i].clstag = 'clstag=\"sale|keycount|' + instanceid + '|' + (i + 1) + '\"';\n                    html += tool.replace(tpl, arrData[i]);\n                    var sku = parseFloat(arrData[i].goodsId);\n                    if(!isNaN(sku) && sku > 0){\n                        arrSku.push(sku);\n                    }\n                }\n                jTarget.find(param.containerSelector).html(html);\n\n                param.log && logHandle(arrSku, data);\n\n                //释放图片\n                jshop.module.ridLazy(jTarget);\n\n                //触发价格懒加载\n                jshop.component.getPrice(jTarget);\n\n                //如果模板里声明了autoFill，则触发autoFill的调用\n                jTarget.attr('module-function').match(/autoFill/) && jshop.module.autoFill.call(jTarget,  param);\n            }\n\n            //处理埋点相关\n            function logHandle(arrSku, data){\n                //必须要有mercuryUrl才认为是大脑数据，才进行埋点\n                if(arrSku.length && data.mercuryUrl){\n\n                    //绑定点击sku的相关埋点\n                    var jWrap = jTarget.find(param.containerSelector),\n                        skuMap = (function(){\n                                var obj = {};\n                                for(var i = 0; i < data.length; i++){\n                                    obj[data[i].goodsId] = data[i].groupId;\n                                }\n                                return obj;\n                            })();\n\n                    tool.sendLog('show', data, arrSku.join(','));\n\n                    //点击跳转商品详情页\n                    jWrap.find(param.logDetailSelector).bind('click', function(){\n                        var thisSku = $(this).attr('href').match(/item\\.jd\\.com\\/(\\d+)\\./);\n                        if(thisSku){\n                            thisSku = thisSku[1];\n                            tool.sendLog('detail', data, thisSku);\n                        }\n                    });\n\n                    //加入购物车\n                    jWrap.find(param.logCartSelector).bind('click', function(){\n                        var thisSku = $(this).attr('href').match(/pid=(\\d+)&/)[1];\n                        if(thisSku){\n                            thisSku = thisSku[1];\n                            tool.sendLog('cart', data, thisSku);\n                        }\n                    });\n                }\n                \n            }\n\n            //数据初始化\n            function dataInit(){\n                tool.getChoiceLot();\n            }\n\n            //初始化入口\n            !function init(){\n                if(param.rid && !isNaN(parseFloat(param.rid))){\n                    dataInit();\n                }\n            }();\n        }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "public_modules"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "clickToFly()",
    "name": "clickToFly",
    "group": "public_modules",
    "description": "<p>点击元素飞入，目标元素显示+1</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "none",
        "type": "json"
      },
      {
        "title": "code",
        "content": "clickToFly: function(args) {\n        var param = jQuery.extend({\n            clickToFlyNode: 'a', //点击元素\n            desNode: '.fly-des em', //目标元素\n            flyNode: '.fly-elems img', //飞行元素\n            tipNode: '.fly-elems .tip' //显隐元素\n        }, args || {}),\n            $this = this;\n        jQuery(param.clickToFlyNode).click(function() {\n            var _this = jQuery(this),\n                des = jQuery(param.desNode),\n                flyElm = jQuery($this).find(param.flyNode).clone(),\n                tipElm = jQuery($this).find(param.tipNode).clone();\n            if (des.length != 0) {\n                flyElm.css({\n                    'z-index': 9000,\n                    'display': 'block',\n                    'position': 'absolute',\n                    'top': _this.offset().top + 'px',\n                    'left': _this.offset().left + 'px',\n                    'width': '13px',\n                    'height': '12px'\n                });\n                jQuery('body').append(flyElm).append(tipElm);\n                flyElm.animate({\n                    top: des.offset().top + 13,\n                    left: des.offset().left + 11,\n                    opacity: 0\n                }, 1000);\n                setTimeout(function() {\n                    tipElm.html('+1').css({\n                        'z-index': 2147483647,\n                        'display': 'block',\n                        'position': 'absolute',\n                        width: '37px',\n                        height: '37px',\n                        top: des.offset().top,\n                        left: des.offset().left,\n                        color: '#FFF116',\n                        opacity: 1,\n                        'text-align': 'center',\n                        'font-size': '18px'\n                    }).animate({\n                        top: des.offset().top - 15,\n                        opacity: 0\n                    }, 800);\n\n                    setTimeout(function() {\n                        tipElm.remove();\n                        flyElm.remove();\n                    }, 800);\n                }, 1000);\n            }\n        });\n    }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "public_modules"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "createQrCode()",
    "name": "createQrCode",
    "group": "public_modules",
    "description": "<p>创建二维码--可应用于所有模块。</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "如{node:'li', defaultClass:'jCurrent', defaultShow:0}。\n1、参数node为单个节点名；\n2、参数defaultClass可任意命名，只要css里面有这个名字。",
        "type": "json"
      },
      {
        "title": "code",
        "content": "createQrCode : function(args){\n        var param = jQuery.extend({\n            node : 'li',\n            iconQrCode : '.iconQrCode',\n            qrCodeArea : '.jQrCode',\n            dataHref : 'qrHref',\n            qrCode : '.qrPic',\n            qrcJsImport : '//static.360buyimg.com/jshop/common/widget/qrCode/qrcode.min.js',\n            current : 'current'\n        }, args || {}),\n            _this = jQuery(this),\n            node = _this.find(param.node),\n            iconQrCode = _this.find(param.iconQrCode),\n            qrcJsImport = param.qrcJsImport,\n            eventType = param.eventType,\n            close = _this.find(param.close),\n            current = param.current;\n\n        //判断页面是否引入了二维码JS文件\n        isQrcJsImport = typeof isQrcJsImport === \"undefined\"? false: isQrcJsImport;\n        if (isQrcJsImport === false) {\n            isQrcJsImport = true;\n            jQuery.getScript(qrcJsImport, function (){});\n        }\n\n        //鼠标移动到节点上显示二维码\n        iconQrCode.hover(function () {\n            var dom = jQuery(this).closest(param.node);\n            domOperate(dom);\n        },function () {\n            //var dom = jQuery(this).closest(param.node);\n            //dom.removeClass(current);\n        });\n\n        //二维码主逻辑\n        function domOperate(dom){\n            var activityId,\n                qrCodeArea = dom.find(param.qrCodeArea),\n                qrCode = qrCodeArea.find(param.qrCode),\n                urlText,\n                qrCodeText;\n            if(qrCode.html() === '') {\n                urlText = qrCodeArea.attr(param.dataHref).replace(/ /g, \"\");\n                if (param.activityId) {\n                    activityId = $(\"#\" + param.activityId).val();\n                    qrCodeText = urlText + \"&resourceType=Jshop_pc_scan&resourceValue=Jshop_\" + activityId;\n                } else {\n                    qrCodeText = urlText;\n                }\n                new QRCode(qrCode[0], {\n                    text: qrCodeText,\n                    width: qrCode.width(),\n                    height: qrCode.height()\n                });\n                qrCodeArea.removeAttr(param.dataHref);\n            }\n            dom.addClass(current);\n\n            qrCodeArea.mouseleave(function(){\n                dom.removeClass(current);\n            });\n        }\n    }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "public_modules"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "equallyWidth()",
    "name": "equallyWidth",
    "group": "public_modules",
    "description": "<p>根据父节点宽度，平均分配子节点宽度</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "如{equallyNode:'.jSortTab span'}。\n参数equallyNode为单个节点名。",
        "type": "json"
      },
      {
        "title": "code",
        "content": "equallyWidth:function(args){\n        var param = $.extend({equallyNode:'.jSortTab span', equallyParentNode:null}, args),\n            _this = $(this),\n            nodeParent = (_this.find(param.equallyParentNode).length > 0) ? _this.find(param.equallyParentNode) : _this,\n            elems = _this.find(param.equallyNode),\n            elem = elems.eq(0);\n\n        var outerWidth = parseInt(elem.data('outerWidth') || elem.outerWidth(true)),\n            width = parseInt(elem.data('width') || elem.css('width')),\n            qty = elems.length;\n\n        elem.data({'outerWidth':outerWidth, 'width':width});\n\n        var extraWidth = outerWidth - width;\n        var newWidth = (nodeParent.width()-extraWidth*qty-0.03)/qty;\n        elems.css({width:newWidth});\n    }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "public_modules"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "estimation()",
    "name": "estimation",
    "group": "public_modules",
    "description": "<p>获取商品评论相关信息--评价星级规则：五星，好评度≥95%，四星，好评度≥90%，三星，好评度≥85%，二星，好评度≥80%，一星，好评度≥75%</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "注意：skuNode节点需要位于starNode、commentNode节点层级之上\n1、item         存放skuid商品单元节点选择器\n2、j-star       星级评价节点选择器\n3、j-rate       好评率节点选择器\n4、j-count      评论数节点选择器\n5、j-comment    评论内容节点选择器\n6、skuid        存放skuid的属性名称",
        "type": "json"
      },
      {
        "title": "code",
        "content": "estimation: function(args){\n        var _param = $.extend({skuNode: 'li', starNode: '.j-star', rateNote: '.j-rate', countNode: '.j-count', commentNode: '.j-comment', skuName: 'skuid'}, args),\n            _this = $(this),\n            _jItemNodes = _this.find(_param.skuNode),\n            _skuArr = [];\n        if(_jItemNodes.length === 0)return;\n        _jItemNodes.each(function(index, dom){\n            _skuArr.push(dom.getAttribute(_param.skuName));\n        });\n        for(var i = 0; i < _skuArr.length; i+=10){\n            $.ajax({\n                url: INTERFACE.actJshop.recommend,\n                type: \"GET\",\n                dataType: \"jsonp\",\n                data: {\"type\": 0, \"skuIds\": _skuArr.slice(i, i+10).join(\",\")},\n                success: function(arr){\n                    if(arr && arr.length > 0){\n                        for(var i = 0; i < arr.length; i++){\n                            var _jItem = _this.find(_param.skuNode + \"[\" + _param.skuName + \"='\" + arr[i].skuId + \"']\"),\n                                _class = \"\";\n                            _jItem.find(_param.rateNote).text(arr[i].rate10000 / 100);\n                            _jItem.find(_param.countNode).text(arr[i].count);\n                            _jItem.find(_param.commentNode).text(arr[i].comment).attr(\"title\", arr[i].comment);\n                            if(arr[i].rate >= 0.95){\n                                _class = \"star5\";\n                            }else if(arr[i].rate >= 0.9 && arr[i].rate < 0.95){\n                                _class = \"star4\";\n                            }else if(arr[i].rate >= 0.85 && arr[i].rate < 0.9){\n                                _class = \"star3\";\n                            }else if(arr[i].rate >= 0.8 && arr[i].rate < 0.85){\n                                _class = \"star2\";\n                            }else if(arr[i].rate >= 0.75 && arr[i].rate < 0.8){\n                                _class = \"star1\";\n                            }else{\n                                _class = \"star0\";\n                            }\n                            _jItem.find(_param.starNode).addClass(_class);\n                        }\n                    }\n                }\n            });\n        }\n\n    }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "public_modules"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "fullHeight()",
    "name": "fullHeight",
    "group": "public_modules",
    "description": "<p>撑满高度--用在相对定位里面有绝对定位时，背景透明图层以父节点为基准将高度撑满</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "none",
        "type": "json"
      },
      {
        "title": "code",
        "content": "fullHeight:function(args){\n        var param = $.extend({fullHeightNode:'li', fullNode:'.jShade'}, args),\n            elem = $(this).find(param.fullHeightNode),\n            fullNode;\n\n        elem.bind({\n            mouseenter:function(){\n                fullNode =$(this).find(param.fullNode);\n                fullNode.css({height:$(this).height()});\n\n            }\n        });\n    }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "public_modules"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "getGoodsAttentCount()",
    "name": "getGoodsAttentCount",
    "group": "public_modules",
    "description": "<p>获取商品关注数</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "none",
        "type": "json"
      },
      {
        "title": "code",
        "content": "getGoodsAttentCount: function(args){\n        var j = $,\n            _param = j.extend({skuNode: 'li', countNode: '.JAttentCount', skuName: 'skuid'}, args),\n            _this = j(this),\n            _jItemNodes = _this.find(_param.skuNode),\n            _skuArr = [];\n        if(_jItemNodes.length === 0)return;\n        _jItemNodes.each(function(index, dom){\n            _skuArr.push(dom.getAttribute(_param.skuName));\n        });\n        for(var i = 0; i < _skuArr.length; i+=10){\n            j.ajax({\n                url: INTERFACE.actJshop.attentionCount,\n                type: \"GET\",\n                dataType: \"jsonp\",\n                data: {\"type\": 0, \"attentionIds\": _skuArr.slice(i, i+10).join(\",\")},\n                success: function(arr){\n                    if(arr && arr.length > 0){\n                        for(var i = 0; i < arr.length; i++){\n                            var _jItem = _this.find(_param.skuNode + \"[\" + _param.skuName + \"='\" + arr[i].productId + \"']\");\n                            _jItem.find(_param.countNode).text(arr[i].count);\n                        }\n                    }\n                }\n            });\n        }\n    }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "public_modules"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "getProTag()",
    "name": "getProTag",
    "group": "public_modules",
    "description": "<p>获取促销标签--根据获取的促销标签编号显示促销标签，应用场景：带有SKUID商品的模块</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "1、node方法应用节点；\n2、tagNode标签节点；\n3、tagValue标签键值；\n4、dataNum每次最多能获取的商品数量；\n5、url接口；\n6、urlNum可用接口长度",
        "type": "json"
      },
      {
        "title": "code",
        "content": "getProTag : function(arg){\n        var param = $.extend({\n                node : 'li',\n                tagNode : '.jSlogan',\n                tagValue : {1:'直降', 3:'返券', 4:'赠京豆', 5:'赠品', 11:'会员特价', 22:'京豆优惠购'} ,//标签键值\n                dataNum : 40,//每次最多能获取的商品数量\n                url : INTERFACE.promoTag + '?callback=getPromotionTag&skuids=J_981821,J_1057746',//接口\n                urlNum : 26//可用接口长度\n            },arg),\n            that = $(this),\n            dom_node = that.find(param.node);\n\n        if(!dom_node.length)return;\n\n        function getTag(){\n            var a_skuid = [];\n            dom_node.each(function(index,n){\n                a_skuid.push('J_' + $(n).attr('skuid'));\n            });\n\n            var len = Math.ceil(a_skuid.length/param.dataNum);\n\n            for(var i=0; i<len; i++){\n                var a_single_skuid =  a_skuid.slice(i*param.dataNum , Math.min(a_skuid.length , (i+1)*param.dataNum));\n\n                $.ajax({\n                    url : param.url.substr(0,param.urlNum),\n                    data : {\n                        skuids : a_single_skuid.join(',')\n                    },\n                    dataType : 'jsonp',\n                    success : function(data){\n                        $.each(data,function(index,n){\n                            var dom = '';\n                            for(var i = 0; i<n.pf.length; i++){\n                                if(param.tagValue[n.pf[i]]){\n                                    dom += '<span>' + param.tagValue[n.pf[i]] + '</span>';\n                                }\n                            }\n                            that.find(param.node + '[skuid=' + n.pid + ']').find(param.tagNode).html(dom);\n                        });\n                    }\n                });\n            }\n        }\n        getTag();\n    }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "public_modules"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "getWechatPrice()",
    "name": "getWechatPrice",
    "group": "public_modules",
    "description": "<p>获取微信专享价</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "none",
        "type": "json"
      },
      {
        "title": "code",
        "content": "getWechatPrice: function(args){\n        var j = $,\n            _param = j.extend({skuNode: 'li', wechatPriceNode: '.jQrCode .wechatNum', skuName: 'skuid'}, args),\n            _this = j(this),\n            _jItemNodes = _this.find(_param.skuNode),\n            url = '//pe.3.cn/prices/pcpmgets',\n            _skuArr = [];\n        if(_jItemNodes.length === 0)return;\n        _jItemNodes.each(function(index, dom){\n            _skuArr.push(dom.getAttribute(_param.skuName));\n        });\n        for(var i = 0; i < _skuArr.length; i+=10){\n            j.ajax({\n                url: url,\n                type: \"GET\",\n                dataType: \"jsonp\",\n                data: {\n                    'skuids': _skuArr.slice(i, i+10).join(','),\n                    'origin': 5,\n                    'source': 'jshop'\n                },\n                success: function(arr){\n                    if(arr && arr.length > 0){\n                        for(var i = 0; i < arr.length; i++){\n                            var _jItem = _this.find(_param.wechatPriceNode + \"[\" + _param.skuName + \"='\" + arr[i].id + \"']\"),\n                                price = '';\n                            if (arr[i].p && arr[i].p > 0) {\n                                _jItem.text(arr[i].p);\n                            } else {\n                                _jItem.text('暂无价格');\n                            }\n                        }\n                    }\n                }\n            });\n        }\n    }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "public_modules"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "goodsFollow()",
    "name": "goodsFollow",
    "group": "public_modules",
    "description": "<p>none</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "none",
        "type": "json"
      },
      {
        "title": "code",
        "content": "goodsFollow : function(arg){\n        var that = this,\n            options = $.extend({\n                node : '.J-follow',\n                showNum : '.J-follow-num'\n            },arg);\n        $(that).find(options.node).JFollow(options);\n    }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "public_modules"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "goodsShare()",
    "name": "goodsShare",
    "group": "public_modules",
    "description": "<p>none</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "none",
        "type": "json"
      },
      {
        "title": "code",
        "content": "goodsShare : function(arg){\n        var that = this,\n            options = $.extend({\n                node : '.J-share',\n                eventType : 'mouseover',\n                offset :{\n                    top : 0,\n                    left : 0\n                }\n            },arg);\n        $(that).find(options.node).JShare({\n            eventType : options.eventType,\n            offset : options.offset\n        });\n    }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "public_modules"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "hideNode()",
    "name": "hideNode",
    "group": "public_modules",
    "description": "<p>隐藏节点--鼠标移动到某个节点时，隐藏传入的其他参数节点</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "none",
        "type": "json"
      },
      {
        "title": "code",
        "content": "hideNode : function(args){\n        var param = $.extend({currentNode:'.jLeftPic' , changeNode:'.jMiddlePic', defaultClass:'jCurrent', enterTime:200, leaveTime:100} , args || {}),\n            _this = $(this),\n            currentNode = _this.find(param.currentNode),\n            changeNode = _this.find(param.changeNode);\n\n        if(param.enterTime < 0 || param.leaveTime < 0 ){\n           return;\n        }\n\n        currentNode.mouseenter(function(){\n            changeNode.animate({\n                opacity:0\n            },param.enterTime,function(){\n                changeNode.addClass(param.defaultClass);\n            });\n        });\n        currentNode.mouseleave(function(){\n            changeNode.removeClass(param.defaultClass);\n            changeNode.animate({\n                opacity:1\n            },param.leaveTime,function(){\n\n            });\n        });\n    }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "public_modules"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "hoverAnimate()",
    "name": "hoverAnimate",
    "group": "public_modules",
    "description": "<p>移入动画--对节点的移入及移出执行不同的CSS属性动画，应用场景：所有。</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "1、hoverNode执行css动画的节点；\n2、cssValueOne和cssValueTwo数组对象--css value: backgroundPosition, borderWidth, borderBottomWidth, borderLeftWidth, borderRightWidth, borderTopWidth, borderSpacing, margin, marginBottom, marginLeft, marginRight, marginTop, outlineWidth, padding, paddingBottom, paddingLeft, paddingRight, paddingTop, height, width, maxHeight, maxWidth, minHeight, maxWidth, font, fontSize, bottom, left, right, top, letterSpacing, wordSpacing, lineHeight, textIndent, opacity\n3、timerOne和timerTwo为时间值",
        "type": "json"
      },
      {
        "title": "code",
        "content": "hoverAnimate : function(args){\n        var param = $.extend({\n                node : 'li .jItem',\n                cssValueOne : [\n                    {width: 235, height: 365, marginTop: -10, opacity:1},\n                    {width: 235, height: 355, marginTop: -5, opacity:0.9},\n                    {width: 235, height: 365, marginTop: -10, opacity:1}\n                ],\n                cssValueTwo : [\n                    {width: 235, height: 345, marginTop: 0, opacity:1}\n                ],\n                timerOne : 100,\n                timerTwo : 100\n            } , args||{}),\n            _this = $(this),\n            dom_node = _this.find(param.node),\n            a_css_value_enter = param.cssValueOne,\n            a_css_value_leave = param.cssValueTwo;\n\n        dom_node.bind({\n            mouseenter: function(){\n                var count = a_css_value_enter.length,\n                    index = 0,\n                    target = $(this);\n\n                function animate(){\n                    var caller = arguments.callee;\n                    target.animate(a_css_value_enter[index] , param.timerOne, function(){\n                        index++;\n                        if(index == count)return;\n                        caller();\n                    });\n                }\n                animate();\n            },\n            mouseleave: function(){\n                var count = a_css_value_leave.length,\n                    index = 0,\n                    target = $(this);\n\n                target.stop(true);\n\n                function animate(){\n                    var caller = arguments.callee;\n                    target.animate(a_css_value_leave[index], param.timerTwo, function(){\n                        index++;\n                        if(index == count)return;\n                        caller();\n                    });\n                }\n                animate();\n            }\n        });\n    }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "public_modules"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "marqueeLeft()",
    "name": "marqueeLeft",
    "group": "public_modules",
    "description": "<p>向左移动--可应用于图片类模块。</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "none",
        "type": "json"
      },
      {
        "title": "code",
        "content": "marqueeLeft : function(args){\n        var param = $.extend({\n                node : '.scroll-area',\n                tr : 'tr',\n                td : 'td',\n                speed : 20\n            },args || {}),\n            that = $(this),\n            par = that.find(param.node)[0],\n            tr = $(par).find(\"tr\")[0],\n            chi =$(par).find(\"td\")[0];\n\n        if(chi.offsetWidth>=par.offsetWidth){\n            copyChild();\n            var mar = setInterval(marquee, param.speed);\n            par.onmouseover = function(){clearInterval(mar)};\n            par.onmouseout = function(){mar = setInterval(marquee,param.speed)};\n        }\n        function copyChild(){\n            var copy=document.createElement(\"td\");\n            copy.innerHTML=chi.innerHTML;\n            tr.appendChild(copy);\n        }\n\n        function marquee(){\n            if(chi.offsetWidth-par.scrollLeft<=0){\n                par.scrollLeft-=chi.offsetWidth;\n            }else{\n                par.scrollLeft++;\n            }\n        }\n    }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "public_modules"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "middle()",
    "name": "middle",
    "group": "public_modules",
    "description": "<p>none</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "none",
        "type": "json"
      },
      {
        "title": "code",
        "content": "middle : function(obj){\n        var bIsIE6 = $.browser.msie&&$.browser.version == \"6.0\",\n            sPos = bIsIE6? 'absolute' : 'fixed',\n            w = $(window).width(),\n            h = $(window).height();\n        $(obj).css({\n            left : parseInt((w - $(obj).outerWidth())/2) + 'px',\n            top : parseInt((h - $(obj).outerHeight())/2) + (this.bIsIE6?$(window).scrollTop():0) + 'px',\n            position : sPos\n        });\n       return obj;\n    }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "public_modules"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "moveNode()",
    "name": "moveNode",
    "group": "public_modules",
    "description": "<p>移动节点--点击左右箭头移动节点，可移动单个节点，也可移动一屏节点，可左右移动，也可左右循环移动</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "注意：如果是移动一屏，则需要的节点总数量必须为每一屏可显示的整数倍；如果是循环切换，disabled参数可不用。 \n1、moveNode需要移动的节点；\n2、arrowPrev左箭头；\n3、arrowNext右箭头；\n4、disabled箭头不可用样式；\n5、showNum一屏显示数量，可传入正确的一屏数量，没传则程序计算；\n6、cssValue改变的css属性名；\n7、isLoop是否循环，默认为真；\n8、isScreen是否是移动一屏，默认为真；\n9、timer每一次移动的时间，默认为1，值取0-4之间。",
        "type": "json"
      },
      {
        "title": "code",
        "content": "moveNode : function(args){\n        var param = $.extend({moveNode:'.scroll-area li' , arrowPrev:'.arrow-left', arrowNext:'.arrow-right', disabled:'disabled', showNum:'', cssValue:'margin-left', isLoop:true, isScreen:true, timer:1} , args || {}),\n            _this = $(this),\n            node = _this.find(param.moveNode),\n            prev = _this.find(param.arrowPrev),\n            next = _this.find(param.arrowNext),\n            //当前父级宽度可以放下的节点个数\n            showNum = (param.showNum> 0)? parseInt(param.showNum) : Math.ceil(node.parent().parent().width()/node.outerWidth(true)),\n            index = 0,\n            length = param.isScreen ? Math.ceil(node.length/showNum) : node.length,\n            eventFlag = true,\n            moveWidth = param.isScreen ? showNum*node.eq(0).outerWidth(true) : node.eq(0).outerWidth(true),\n            visibleNum = param.isScreen ? 1 : showNum,\n            timer = !(param.timer > -1 && param.timer < 5) ? 1000 : param.timer*1000;\n\n        //初始化结构\n        if(length > visibleNum){\n            prev.show().addClass(param.disabled);\n            next.show();\n            node.parent().css('width',moveWidth*length*10);//初始化移动节点父级元素宽度，解决父级元素被css定义宽度导致放不下的问题\n\n            if(param.isLoop){initLoop();}//如果是循环，则初始化循环所需结构\n        }\n\n        //循环初始化\n        function initLoop(){\n            //复制前面3个节点及后面3个节点\n            for(var i=0; i<showNum; i++){\n                node.eq(i).clone().appendTo(node.parent());\n                node.eq(node.length-1-i).clone().prependTo(node.parent());\n            }\n            //初始化第一个节点显示位置\n            node.parent().css(param.cssValue,-moveWidth*visibleNum + parseInt(node.parent().css(param.cssValue)));\n        }\n\n        //移动的css属性可传margin-left或left\n        var cssJson = {};\n        node.parent().data('cssInitValue', parseInt(node.parent().css(param.cssValue)));\n\n        //向右移动\n        next.click(function(){\n            //如果不是循环\n            if(!param.isLoop){\n                if(index == 0) eventFlag = true;\n            }\n\n            if(eventFlag){\n                eventFlag = false;\n                index++;\n                cssJson[param.cssValue] = -moveWidth*index + node.parent().data('cssInitValue');\n\n                node.parent().animate(cssJson, timer, function(){\n                    eventFlag = true;\n                    //如果不是循环\n                    if(!param.isLoop){\n                        if(index > 0){\n                            prev.removeClass(param.disabled);\n                        }\n                        if(index+visibleNum == length){\n                            next.addClass(param.disabled);\n                            eventFlag = false;\n                        }\n                    }else{\n                        if(index == length){\n                            index = 0;\n                            node.parent().css(param.cssValue,node.parent().data('cssInitValue'));\n                        }\n                    }\n                });\n            }\n        });\n\n        //向左移动\n        prev.click(function(){\n            //如果不是循环\n            if(!param.isLoop){\n                eventFlag = (index > 0) ? true :false;\n            }\n\n            if(eventFlag){\n                eventFlag = false;\n                index--;\n                cssJson[param.cssValue] = -moveWidth*index + node.parent().data('cssInitValue');\n\n                node.parent().animate(cssJson, timer, function(){\n                    eventFlag = true;\n                    //如果不是循环\n                    if(!param.isLoop){\n                        if(index < length - 1){\n                            next.removeClass(param.disabled);\n                        }\n                        if(index == 0){\n                            prev.addClass(param.disabled);\n                            eventFlag = false;\n                        }\n                    }else{\n                        if(index < 0){\n                            index = length-1;\n                            node.parent().css(param.cssValue,node.parent().data('cssInitValue')+(-moveWidth*index));\n                        }\n                    }\n                });\n            }\n        });\n    }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "public_modules"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "movePhoto()",
    "name": "movePhoto",
    "group": "public_modules",
    "description": "<p>移动图片，点击左右箭头移动图片</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "none",
        "type": "json"
      },
      {
        "title": "code",
        "content": "movePhoto : function(args){\n        var param = $.extend({movePhotoNode:'.jScrollWrap li' , arrowPrev:'.jScrollPrev', arrowNext:'.jScrollNext', defaultClass:'disabled'} , args || {}),\n            _this = $(this),\n            node = _this.find(param.movePhotoNode),\n            prev = _this.find(param.arrowPrev),\n            next = _this.find(param.arrowNext),\n            visibleNode = parseInt(node.parent().parent().width()/node.width()),\n            index = 0,\n            length = node.length;\n\n        //初始化结构\n        if(length > visibleNode){\n            prev.addClass(param.defaultClass).show();\n            next.show();\n            node.parent().css('width',node.width()*length);\n        }\n\n        //向右移动\n        next.click(function(){\n            var _this = this;\n\n            if(length - visibleNode){\n                prev.removeClass(param.defaultClass);\n            }\n\n            if(index < length - visibleNode){\n                index++;\n                node.parent().animate({\n                    left:-node.eq(0).outerWidth(true)*index\n                },function(){\n                    if(index + visibleNode == length){\n                        $(_this).addClass(param.defaultClass);\n                    }\n                });\n            }\n        });\n\n        //向左移动\n        prev.click(function(){\n            var _this = this;\n            if(index  + visibleNode <= length){\n                next.removeClass(param.defaultClass);\n            }\n\n            if(index > 0){\n                index--;\n                node.parent().animate({\n                    left:-node.eq(0).outerWidth(true)*index\n                },function(){\n                    if(!index){\n                        $(_this).addClass(param.defaultClass);\n                    }\n                });\n            }\n        });\n    }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "public_modules"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "notity()",
    "name": "notity",
    "group": "public_modules",
    "description": "<p>none</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "none",
        "type": "json"
      },
      {
        "title": "code",
        "content": "notity : function(arg){\n        var _para = $.extend({\n            notityNode : '.jshop_jiangjia'\n        }, arg || {}),\n            _this = this;\n\n        NotifyPop.init = function(c,e){\n            var b = this,\n            f = this.serializeUrl(location.href),\n            d = /from=weibo/.test(location.href) ? location.search.replace(/\\?/, \"\") : \"\",\n            a;\n            if (/from=weibo/.test(location.href)) {\n                a = f.param.type;\n                this.setThickBox(a, d);\n            }\n            c.bind(\"click\",\n                    function() {\n                        var j = this,\n                        h = $(this).attr(\"id\"),\n                        g = $(this).attr(\"data-type\") || 2;\n                        b.sku = $(this).attr(\"data-sku\");\n                        b.checkLogin(function(k) {\n                        if (!k.IsAuthenticated) {\n                            thick_login(function(l){\n                                b._userPin = l.Identity.Name;\n                                b.setThickBox(g, d);\n                            });\n                        } else {\n                            b._userPin = k.Name;\n                            b.setThickBox(g, d);\n                        }\n             });\n           return false;\n            }).attr(\"href\", \"#none\").removeAttr(\"target\");\n        };\n\n        $(_this).find(_para.notityNode).each(function(index,n){\n            NotifyPop.init($(n));\n        });\n    }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "public_modules"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "operateNode()",
    "name": "operateNode",
    "group": "public_modules",
    "description": "<p>操作节点：通过不同的条件，调用不同的方法，查找对象里面的某一个或一些节点，并对这些节点做操作，默认为增加一个样式--可应用于任意模块，只要有使用场景。</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "如{operateNode:'li', operateParentNode:null, defaultClass:'jCurrent', length:0, subFunction:null, number:[], callBack:null}\n1、operateNode为需要查找的节点；\n2、operateParentNode为查找节点的父级节点；\n3、defaultClass为默认样式名；\n4、length为每一行的节点个数；\n5、subFunction为此方法里面的子方法；\n6、number为数组对象，当使用getNode方法时，表示数组里面指定的节点，当使用getColumn方法时，表示指定的列节点。当使用getRow方法时，表示指定的行节点；\n7、callBack为函数体，参数接收一个节点对象，可在函数体里对接收的这个对象做操作。",
        "type": "json"
      },
      {
        "title": "code",
        "content": "operateNode: function(args){\n        var param = $.extend({operateNode:'li', operateParentNode:null, defaultClass:'jCurrent', length:0, subFunction:null, number:[], callBack:null},args||{}),\n        _this = $(this),\n        node = _this.find(param.operateNode),\n        nodeParent = (_this.find(param.operateParentNode).length > 0) ? _this.find(param.operateParentNode) : _this.parent().parent().parent(),\n        defaultClass = param.defaultClass,\n        number = param.number,\n        length = (param.length != 0) ? param.length : parseInt(nodeParent.outerWidth(true)/node.outerWidth(true)),\n        callBack = typeof(param.callBack) === 'function' ? param.callBack : function(a){a.addClass(defaultClass);};\n\n        if(node.length === 0)return;\n\n        //ie9下获取nodeParent.outerWidth(true)有差异。为避免此问题，1、可传入明确知道宽度的节点；2、程序会取this的父级的父级的父级定义了宽度的层。\n        //此段尚未使用，当元素隐藏后获取不到元素的偏移值\n        var rowLen = 0;\n        var nowTop = $(node[0]).offset().top;\n        node.each(function(index, dom){\n            if(index > 0){\n                rowLen++;\n                var _top = $(dom).offset().top;\n                if(nowTop !== _top){\n                   return false;\n                }else{\n                    nowTop = _top;\n                }\n            }\n        });\n\n        var operate = {\n            //获取任意节点\n            getNode : function(){\n               return node.map(function(i,e){\n                    for(var j = 0; j < number.length; j++){\n                        if(i + 1 === number[j]){\n                           return e;\n                        }\n                    }\n                });\n            },\n            //获取所有奇数列节点\n            getAllOdd : function (){\n               return node.map(function(i, e){\n                    if(i % 2 === 0){\n                       return e;\n                    }\n                });\n            },\n            //获取所有偶数列节点\n            getAllEven : function(){\n               return node.map(function(i,e){\n                    if(i % 2 === 1){\n                       return e;\n                    }\n                });\n            },\n            //获取任意多列节点\n            getColumn : function(){\n               return node.map(function(i,e){\n                    for(var j = 0; j < number.length; j++){\n                        if(i % length === number[j] - 1){\n                           return e;\n                        }\n                    }\n                });\n            },\n            //获取任意多行节点\n            getRow : function(){\n               return node.map(function(i,e){\n                    for(var j = 0; j < number.length; j++){\n                        if(i >= length(number[j] - 1) && i < lengthnumber[j]){\n                           return e;\n                        }\n                    }\n                });\n            },\n            //获取每一行的奇数节点\n            getRowOdd : function(){\n               return node.map(function(i,e){\n                    if(i % length % 2 === 0){\n                       return e;\n                    }\n                });\n            },\n            //获取每一行的偶数节点\n            getRowEven : function(){\n               return node.map(function(i,e){\n                    if(i % length % 2 === 1){\n                       return e;\n                    }\n                });\n            },\n            //获取第一个节点\n            getFirst : function(){\n               return node.eq(0);\n            },\n            //获取最后一个节点\n            getLast : function(){\n               return node.eq(node.length - 1);\n            },\n            //获取每一行的第一个节点\n            getRowFirst : function(){\n               return node.map(function(i,e){\n                    if(i % length === 0){\n                       return e;\n                    }\n                });\n            },\n            //获取每一行的最后一个节点\n            getRowLast : function(){\n               return node.map(function(i,e){\n                    if(i % length === length - 1){\n                       return e;\n                    }\n                });\n            },\n            //获取每一行的第一个节点和最后一个节点\n            getRowFirstAndLast : function(){\n               return node.map(function(i,e){\n                    if(i % length === 0 || i % length === length - 1){\n                       return e;\n                    }\n                });\n            }\n        };\n\n        if(operate[param.subFunction]){\n            callBack(operate[param.subFunction]());\n        }\n    }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "public_modules"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "positionLayout()",
    "name": "positionLayout",
    "group": "public_modules",
    "description": "<p>none</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "none",
        "type": "json"
      },
      {
        "title": "code",
        "content": "positionLayout:function(args){\n        // 定义传入的CSS调用变量\n        var _this=this,\n            param=$.extend({node:'.btn-coll', nodeParent:'.d-layout'}, args),\n            node = $(_this).find(param.node),\n            nodeParent = $(_this).parents(param.nodeParent);\n        nodeParent.css({position:\"relative\"});\n        node.appendTo(nodeParent).siblings(param.node).remove();\n    }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "public_modules"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "removeBg()",
    "name": "removeBg",
    "group": "public_modules",
    "description": "<p>给每行最后一个节点增加样式：主要应用在每一行有多个节点，并且想给最后一个节点如改变背景、边框等</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "如{node:'li', defaultClass:'noBg'}。\n1、参数node为单个节点名；\n2、参数defaultClass可任意命名，只要css里面有这个名字。",
        "type": "json"
      },
      {
        "title": "code",
        "content": "removeBg:function(args){\n       var param=$.extend({defaultClass:\"noBg\"}, args),\n          elem = $(this).find(param.node),\n          qty = parseInt(elem.parent().width()/elem.outerWidth(true)),\n          defaultClass=param.defaultClass;\n \n       elem.each(function(index, e){\n          if(index && !(((index+1)/qty).toString().indexOf(\".\")>=0) ){\n              $(e).addClass(defaultClass);\n          }else if((index+1)/qty==1){\n              $(e).addClass(\"noBgOne\");\n          }\n       });\n }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "public_modules"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "renderHTML()",
    "name": "renderHTML",
    "group": "public_modules",
    "description": "<p>简单模板渲染--根据html模板及数据拼接html片段，应用场景任意。</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "none",
        "type": "json"
      },
      {
        "title": "code",
        "content": "renderHTML : function(tpl, data) {\n        var subTpl = tpl,\n            reg = /{([\\w-_]+)}/,\n            mArr;\n        while (mArr = subTpl.match(reg)) {\n            subTpl = subTpl.replace(reg, data[mArr[1]]);\n        }\n       return subTpl;\n    }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "public_modules"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "rid()",
    "name": "rid",
    "group": "public_modules",
    "description": "<p>none</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "none",
        "type": "json"
      },
      {
        "title": "code",
        "content": "rid : function(){\n        jshop.module.ridLazy(this);\n  }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "public_modules"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "ridLazy()",
    "name": "ridLazy",
    "group": "public_modules",
    "description": "<p>none</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "none",
        "type": "json"
      },
      {
        "title": "code",
        "content": "ridLazy : function(obj) {\n        $(obj).find('img.J_imgLazyload').each(function(){\n            $(this).attr('src',$(this).attr('original'));\n            $(this).removeAttr('original');\n            $(this).removeClass('J_imgLazyload');\n        });\n        setTimeout(function(){\n            skuIdPriceObj.localPriceRefresh(obj);\n        },0);\n    }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "public_modules"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "saleAttent()",
    "name": "saleAttent",
    "group": "public_modules",
    "description": "<p>关注--活动关注、店铺关注、商品关注，依赖module/utils.js</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "none",
        "type": "json"
      },
      {
        "title": "code",
        "content": "saleAttent : function(args){\n        jQuery(this).saleAttent(args);\n    }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "public_modules"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "seamlessScroll()",
    "name": "seamlessScroll",
    "group": "public_modules",
    "description": "<p>none</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "none",
        "type": "json"
      },
      {
        "title": "code",
        "content": "seamlessScroll: function(args) {\n        var args = jQuery.extend({\n            box: jQuery('.marquee'),\n            step: 5,\n            el: 'ul',\n            itemClass: '.item',\n            inteval: 30\n        }, args || {});\n        var scr = new SeamlessScroll(args);\n        scr.init();\n    }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "public_modules"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "showAppPriceCoupon()",
    "name": "showAppPriceCoupon",
    "group": "public_modules",
    "description": "<p>显示App专享价及相对于京东价的优惠金额</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "jdPriceNode    京东价格节点选择器\nappPriceNode    app价格节点选择器\ncouponPriceNode 优惠额度节点选择器\ncouponType      优惠额度计算类型，1：算优惠了多少金额（京东价 - App专享价），2：算相当于打了几折（App专享价 / 京东价10）\nskuAttName      价格节点上的sku标示\nitemNode        单个sku最外层的节点\nnoAppPriceClass 没有app专享价时给itemNode添加的样式",
        "type": "json"
      },
      {
        "title": "code",
        "content": "showAppPriceCoupon: function(param){\n\n        var jTarget = $(this),\n            arrSku = [],   //请求专享价时的arr\n            jprice_arr=[], //请求京东价时的arr\n            url = INTERFACE.price.jdMobile;\n        param = $.extend({\n            jdPriceNode: \".j-jd-price\",\n            appPriceNode: \".j-app-price\",\n            couponPriceNode: \".j-coupon-price\",\n            couponType: 1,\n            skuAttName: \"sku\",\n            itemNode: \"li\",\n            noAppPriceHandle: \"\"\n        }, param);\n\n        //返回优惠额度或者折扣\n        function getYh(jdPrice, appPrice){\n            var val = 0,\n                jdPrice = parseFloat(jdPrice),\n                appPrice = parseFloat(appPrice);\n            if(param.couponType === 1){\n                val = parseInt(100jdPrice - 100appPrice, 10) / 100;\n            }else if(param.couponType === 2){\n                val = parseInt(appPrice100 / jdPrice, 10) / 10;\n            }\n           return val;\n        }\n\n        /**\n        使用jsonp方式请求价格\n        param arr\n        param type\n        private;\n        \n        function jsonpPrice(arr) {\n            for(var i = 0; i < arr.length; i+=20){\n                //请求app专享价\n                $.ajax({\n                    url: url+\"?skuids=\"+arr.slice(i, i+20).join(\",\")+\"&origin=2\",\n                    type: \"get\",\n                    dataType: \"jsonp\",\n                    success: function(data) {\n                        if (data && data.constructor === Array) {\n                            for (var i = 0; i < data.length; i++) {\n                                var price = data[i],\n                                    id = price.id,\n                                    appPrice = +price.p <=0 ? \"暂无价格\" : price.p,\n                                    skuName = \"[\" + param.skuAttName + \"='\" + id + \"']\",\n                                    jJdPriceNode = jTarget.find(param.jdPriceNode + skuName),\n                                    jAppPriceNode = jTarget.find(param.appPriceNode + skuName).text(appPrice);\n                                //京东价已经请求响应完成\n                                if(jJdPriceNode.text() !== \"\"){\n                                    var yh = getYh(jJdPriceNode.text(), appPrice),\n                                        jItem = jAppPriceNode.closest(param.itemNode),\n                                        jCouponPriceNode = jTarget.find(param.couponPriceNode + skuName);\n                                    //如果没有专享价\n                                    if(isNaN(yh) || yh <= 0 || (param.couponType === 2 && yh === 10)){\n                                        jItem.addClass(param.noAppPriceClass);\n                                    }else{\n                                        jCouponPriceNode.text(yh);\n                                    }\n                                }\n                            }\n                        }\n                    }\n                });\n\n                //请求jd价\n                $.ajax({\n                    url: INTERFACE.price.jd + \"?skuids=\"+jprice_arr.slice(i, i+20).join(\",\"),\n                    type: \"get\",\n                    dataType: \"jsonp\",\n                    success: function(data) {\n                        if (data && data.constructor === Array) {\n                            for (var i = 0; i < data.length; i++) {\n                                var price = data[i],\n                                    id = price.id.substring(2, price.id.length),\n                                    jdPrice = price.p === \"-1\" ? \"暂无价格\" : price.p,\n                                    skuName = \"[\" + param.skuAttName + \"='\" + id + \"']\",\n                                    jAppPriceNode = jTarget.find(param.appPriceNode + skuName);\n                                jTarget.find(param.jdPriceNode + skuName).text(jdPrice);\n                                //专享价已经请求响应完成\n                                if(jAppPriceNode.text() !== \"\"){\n                                    var yh = getYh(jdPrice, jAppPriceNode.text()),\n                                        jItem = jAppPriceNode.closest(param.itemNode),\n                                        jCouponPriceNode = jTarget.find(param.couponPriceNode + skuName);\n                                    //如果没有专享价\n                                    if(isNaN(yh) || yh <= 0 || (param.couponType === 2 && yh === 10)){\n                                        jItem.addClass(param.noAppPriceClass);\n                                    }else{\n                                        jCouponPriceNode.text(yh);\n                                    }\n                                }\n                            }\n                        }\n                    }\n                });\n            }\n        }\n\n        $(this).find(param.appPriceNode).each(function(){\n            arrSku.push($(this).attr(\"sku\"));\n            jprice_arr.push(\"J_\"+$(this).attr(\"sku\"));\n        });\n\n        arrSku.length && jsonpPrice(arrSku, 1);\n\n    }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "public_modules"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "showNode()",
    "name": "showNode",
    "group": "public_modules",
    "description": "<p>显示节点：触发一个元素，根据设定的数量按先后顺序显示元素--可应用于任意模块，只要有使用场景。</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "如{par : '.jSaleAttention20150423-1', node : 'li', btn : '.jBtn', pageNum : 10, className : 'current'}\n1、par为被显示元素的父级元素；\n2、node被显示元素；btn触发元素；\n3、pageNum每一次显示数量；\n4、className被显示元素增加的class名",
        "type": "json"
      },
      {
        "title": "code",
        "content": "showNode : function(args){\n    var _this = this,\n        param = jQuery.extend({\n        par : '.jSaleAttention20150423-1',\n        node : 'li',\n        btn : '.jBtn',\n        pageNum : 10,\n        className : 'current'\n     }, args || {}),\n        par = jQuery(param.par),\n        node = jQuery(_this).find(param.node),\n        btn = jQuery(_this).find(param.btn),\n        index = 0,\n        pageTotal = Math.ceil(node.length/param.pageNum);\n\n    function showData(){\n        node.removeClass(param.className);\n        for(var i = index*param.pageNum; i <= index*param.pageNum +param.pageNum - 1; i+=1){\n            node.eq(i).addClass(param.className);\n        }\n    }\n    showData();\n\n    btn.click(function(){\n        if((index+1) == pageTotal) {\n            index = 0;\n        }else{\n            index +=1;\n        }\n        showData();\n    });\n    },\n    countdown : (function(){\n        var timer = null,\n            countList = [],\n            sysTime = 0;\n       return function(arg){\n            var that = this,\n                args = $.extend({\n                    hasDay : true,\n                    dayCnt : '.days',\n                    hourCnt : 'hours',\n                    minuteCnt : '.minutes',\n                    secondCnt : '.seconds'\n                },arg || {}),\n                cutTime = [];\n\n            function init(){\n                if(!args.countdownInfo)return;\n\n                getCutTime();\n                $(that).data('cutTime',cutTime).data('arg',args);\n                setTimeout(function(){\n                    countList = $('[public modules*=\"countdown\"]').toArray();\n                },0);\n                if(!timer){\n                    getServerTime(function(data){\n                        sysTime = new Date() - data;\n                        count();\n                    });\n                }\n            }\n\n            function timeStrHandler(str){\n                var rowTemp = str.split(' '),\n                    inplicit = rowTemp[0].split('-'),\n                    explicit = rowTemp[1].split(':');\n               return new Date(Number(inplicit[0]),(Number(inplicit[1]) + 11)%12,Number(inplicit[2]),Number(explicit[0]),Number(explicit[1]),Number(explicit[2]));\n            }\n\n            function getCutTime(){\n                var temp = args.countdownInfo;\n                if(temp.constructor == String){\n                    cutTime.push(timeStrHandler(temp));\n                }\n                else{\n                    $.each(temp,function(index,data){\n                        cutTime.push(timeStrHandler(data));\n                    });\n                }\n            }\n\n            function count(){\n                timer = setInterval(function(){\n                    for(var i = 0, len = countList.length; i < len; i++){\n                        var item = $(countList[i]),\n                            cT = item.data('cutTime'),\n                            options = item.data('arg'),\n                            leftTime = parseInt((cT[0] - new Date() + sysTime)/1000);\n                        if(leftTime < 0){\n                            cT.shift();\n                            if(cT.length === 0){\n                                countList.splice(i,1);\n                                len -- ;\n                                i--;\n                            }\n                            else{\n                                item.data('cutTime',cT);\n                            }\n                            item.closest('[module-name]').trigger('countdownchange');\n                        }\n                        else{\n                            var day = Math.floor(leftTime/(24*3600)),\n                                hour = Math.floor(leftTime/3600) - (options.hasDay?day*24 : 0),\n                                minute = Math.floor(leftTime%3600/60),\n                                second = leftTime%60;\n\n                            if(options.hasDay){\n                                item.find(options.dayCnt).html(day > 9?day : '0' + day);\n                            }\n\n                            item.find(options.hourCnt).html(hour > 9?hour : '0' + hour);\n                            item.find(options.minuteCnt).html(minute > 9?minute : '0' + minute);\n                            item.find(options.secondCnt).html(second > 9?second : '0' + second);\n                        }\n                    }\n                },1000);\n            }\n\n            init();\n        };\n    })(),\n\n    loop : function(arg){\n        var that = this,\n        root = $(that),\n        options = $.extend({\n            auto : false,\n            next : '.next',\n            prev : '.prev',\n            container : '.con',\n            item : '.item'\n        },arg),\n        container = root.find(options.container),\n        itemWidth = 0,\n        total = 0,\n        animating = false,\n        index = 0,step = 1,\n        itemContainer = null,\n        duration = options.duration || 1000;\n\n        function css(){\n            container.css({\n                overflow : 'hidden',\n                position : 'relative'\n            });\n            root.find(options.item).css('float','left');\n        }\n\n        function dom(){\n            var html = container.html(),\n                height = options.height || container.height();\n            root.find(options.item).remove();\n            container.height(height);\n            itemContainer = $('<div></div>').prependTo(container).css({\n                width : (total + 2*step)*itemWidth,\n                height : height,\n                position : 'absolute',\n                left : 0,\n                top :0\n            }).html(html);\n            if(options.conCls){\n                itemContainer.addClass(options.conCls);\n            }\n            var node = root.find(options.item);\n            for(var i = total - 1, little = total - step; i >= little; i--){\n                node.eq(i).clone(true).prependTo(itemContainer);\n            }\n            for(var i = 0;i < step; i++){\n                node.eq(i).clone(true).appendTo(itemContainer);\n            }\n            itemContainer.css('left',-step*itemWidth);\n        }\n\n        function event(){\n            root.find(options.next).click(function(){\n                if(animating)return;\n                animating = true;\n                index += step;\n                itemContainer.animate({\n                    left : -index*itemWidth\n                },duration,function(){\n                    if(index >= total + step){\n                        index = index - total;\n                        itemContainer.css('left',-(index)*itemWidth);\n                    }\n                    animating = false;\n                });\n            });\n\n            root.find(options.prev).click(function(){\n                if(animating)return;\n                animating = true;\n                index -= step;\n                itemContainer.animate({\n                    left : -index*itemWidth\n                },duration,function(){\n                    if(index < step){\n                        index = index + total;\n                        itemContainer.css('left',-index*itemWidth);\n                    }\n                    animating = false;\n                });\n            });\n\n            if(options.eventType){\n                root.find(options.item).each(function(index,n){\n                    $(n)[options.eventType](function(){\n                        options.handle(n,index,step);\n                    });\n                });\n            }\n\n        }\n\n        function init(){\n            css();\n            if(!root.find(options.item).length)return;\n            step = Math.ceil(container.width()/root.find(options.item).outerWidth(true));\n            itemWidth = root.find(options.item).outerWidth(true);\n            total = root.find(options.item).length;\n            index = step;\n            if(root.find(options.item).length < step)return;\n            dom();\n            event();\n        }\n\n        init();\n    }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "public_modules"
  },
  {
    "type": "url",
    "url": "http://jshop.jd.com/visualediting/preview.html?veBean.pageInstanceId=10324003&veBean.appId=457613",
    "title": "slide()",
    "name": "slide",
    "group": "public_modules",
    "description": "<p>图片轮播</p>",
    "header": {
      "examples": [
        {
          "title": "函数功能",
          "content": "1、实现轮播；\n2、自定义图片轮播间隔时间",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "demo",
        "content": "<div class=\"j-module\" module-function=\"slide\" module-param=\"{timer:'$!{cateImgWordInfo.time}',subFunction:'transparentEffect', imgArea:'.Info', imgNodeArea:'.scroll-area', imgNode:'.chunk', tabArea:'.Menu', tabNode:'.Menu li', defaultClass:'current', eventType:'mouseenter'}\">\n    <div class=\"Menu\">\n        <ul>\n        #if($!cateImgWordInfo && $!cateImgWordInfo.cateList && $!{cateImgWordInfo.cateList.size()} > 0)\n                #foreach($imgWordInfo in $!cateImgWordInfo.cateList)\n                <li>$!imgWordInfo.cateName</li>\n            #end\n        #end\n        </ul>\n    </div>\n    <div class=\"Info\">\n        <div class=\"scroll-area\">\n    #if($!cateImgWordInfo && $!cateImgWordInfo.cateList && $!{cateImgWordInfo.cateList.size()} > 0)\n        \n        #foreach($imgWordInfo in $!cateImgWordInfo.cateList)\n            <div class=\"chunk\" style=\"background-color: $!imgWordInfo.bgColor;\" >\n                <div class=\"content20140516\">                                \n                <a href=\"$!{imgWordInfo.imgList.get(0).linkUrl}\" target=\"_blank\" class=\"img1\"><img src=\"$!{imgWordInfo.imgList.get(0).imgUrl}\" height=\"96\" width=\"255\" alt=\"\" /></a>                                \n                <div class=\"text\">   \n                #set($index = 1)\n                #foreach($wordInfo in $!imgWordInfo.wordList)\n                    #if($index == 1)\n                    <a href=\"$!wordInfo.linkUrl\" class=\"text1\" target=\"_blank\">$!wordInfo.word</a>\n                    #else\n                    <a href=\"$!wordInfo.linkUrl\" class=\"text2\" target=\"_blank\">$!wordInfo.word</a>\n                    #end\n                    #set($index = $index + 1)\n                #end\n                </div>                            \n                </div>\n            </div>\n        \n        #end\n    #end\n        </div>\n    </div>\n</div>",
        "type": "json"
      },
      {
        "title": "参数注释",
        "content": "timer ： 图片轮播的间隔时间",
        "type": "json"
      },
      {
        "title": "code",
        "content": "slide:function(args){\n        // 定义传入的CSS调用变量\n        var _this=this,\n            param=$.extend({imgArea:'.jbannerImg', imgNodeArea:'.jImgNodeArea', imgNode:'.jbannerImg li', tabArea:'.jbannerTab', tabNode:'.jbannerTab span', arrowLeft:'.jPreOut', arrowRight:'.jNextOut', arrowLeftOver:'jPreOver', arrowRightOver:'jNextOver', defaultClass:'show', slideDirection:'left', timer:'3', subFunction:'transparentEffect', eventType:'click',showArrow:1, isCircular:false, isTabAvailable:true, isHoverStop:true}, args),\n            imgArea = $(_this).find(param.imgArea),\n            imgNode = $(_this).find(param.imgNode),\n            tabArea = $(_this).find(param.tabArea),\n            tabNode = $(_this).find(param.tabNode),\n            defaultClass = param.defaultClass,\n            eventType = param.eventType,\n            timer = !param.timer*1000?3000:param.timer*1000,\n            scroll,\n            ul = $(_this).find(param.imgNodeArea + '>ul'),\n            imgNodeArea = $(_this).find(param.imgNodeArea),\n            isFull = param.isFull;\n\n\n        //全局变量\n        var index = 0,direction = 1,time = null,moveRange = 0,partTime = null,animate = null,enterFlag = false;\n        if(!imgNode.length)return;\n        jshop.module.ridLazy($(_this));\n\n        //是否鼠标移动到内容区域时，停止轮播\n        if(param.isHoverStop){\n            imgArea.bind({\n                mouseenter:function(){\n                    enterFlag = true;\n                    _stop();\n                },\n                mouseleave:function(){\n                    enterFlag = false;\n                    time = setTimeout(imgMove, timer);\n                }\n            });\n        }\n\n        /**\n        轮播图所有效果\n        \n        var banner = {\n            transparentEffect : function(){\n                //初始化\n                $(_this).css({'background-color':imgNode.eq(index).attr('background')});\n\n                // 调用函数\n                init();\n                if(param.isTabAvailable){triggerThumbnail();}//如果切换切点可用\n                triggerDirection();\n                if(param.showArrow!=1){triggerArrow();}\n                animate = transparent;\n                time = setTimeout(imgMove, timer);\n            },\n            moveEffect : function(){\n                var isTop = (param.slideDirection == 'top')?true:false;\n                scroll = (isTop)?\"scrollTop\":\"scrollLeft\";\n\n                //初始化\n                $(_this).css({'background-color':imgNode.eq(index).attr('background')});\n                if(isTop){\n                    imgNodeArea.css({height:20000});\n                    imgNode.css({width:imgNode.attr(\"width\"),height:imgNode.attr(\"height\")});\n                    moveRange = imgNode.height();\n                    imgArea[0][scroll] = indexmoveRange;\n                }else{\n                    imgNodeArea.css({width:20000});\n                    imgNode.css({width:imgNode.attr(\"width\"),height:imgNode.attr(\"height\"),'float':\"left\"});//将这个宽度写在css里，在ie6下面，获取到的父级宽度是被这个元素撑开的宽度\n                    moveRange = imgNode.width();\n                    imgArea[0][scroll] = indexmoveRange;\n                };\n\n                // 调用函数\n                init();\n                if(param.isTabAvailable){triggerThumbnail();}//如果切换切点可用\n                triggerDirection();\n                if(param.showArrow!=1){triggerArrow();}\n                animate = oneImgMove;\n                time = setTimeout(imgMove, timer);\n            }\n        };\n\n        /**\n        根据传入的子方法名执行对应的子方法\n        \n        if(banner[param.subFunction])\n            banner[param.subFunction].call(_this);\n\n        /**\n        轮播图初始化\n        \n        function init(){\n            imgArea.css({width:imgNode.attr(\"width\"),height:imgNode.attr(\"height\")});\n            imgNode.eq(0).addClass(defaultClass);\n            tabNode.eq(0).addClass(defaultClass);\n            autoMiddle();\n            $(window).resize(function(){\n                autoMiddle();\n            });\n        }\n\n        /**\n        轮播图自适应居中于屏幕中间\n        \n        function autoMiddle(){\n            var extra = imgArea.width()-$(_this).width();\n            if(extra>0){\n                imgArea.css({'margin-left':-extra/2});\n            }else{\n                imgArea.css('margin','0 auto');\n            }\n        }\n\n        /**\n        给每个tab缩略图绑定事件\n        \n        function triggerThumbnail(){\n            tabNode.each(function(i,elem){\n                $(elem)[eventType](function(){\n                    imgNode.eq(index).removeClass(defaultClass);\n                    tabNode.eq(index).removeClass(defaultClass);\n                    index = i;\n                    imgNode.eq(index).addClass(defaultClass);\n                    tabNode.eq(index).addClass(defaultClass);\n                    animate();\n                   return false;\n                });\n            });\n        }\n\n        /**\n        点击箭头或数字时，重置时间\n        \n        function _stop(){\n            clearTimeout(time);\n            time = null;\n            //clearTimeout(partTime);\n            //partTime = null;\n            ul.clearQueue();\n            imgNode.eq(index).clearQueue();\n        }\n\n        /**\n        切换图片和缩略图\n        \n        function imgMove(){\n            //判断是否是圆形循环，只支持渐变方式\n            if(param.isCircular){\n                if (index < imgNode.length - 1){\n                    classOper([imgNode,tabNode],defaultClass,true);\n                }else{\n                    index = -1;\n                    classOper([imgNode,tabNode],defaultClass,true);\n\n                }\n            }else{\n                if (direction == 1){\n                    if (index < imgNode.length - 1){\n                        classOper([imgNode,tabNode],defaultClass,true);\n                    }else{\n                        direction = 0;\n                        classOper([imgNode,tabNode],defaultClass,false);\n                    }\n                }else{\n                    if (index > 0){\n                        classOper([imgNode,tabNode],defaultClass,false);\n                    }else{\n                        direction = 1;\n                        classOper([imgNode,tabNode],defaultClass,true);\n                    }\n                }\n            }\n            animate();\n        }\n\n        /**\n        鼠标移动显示左右移动箭头\n        \n        function triggerArrow(){\n            var arrowLeft = $(_this).find(param.arrowLeft),arrowRight = $(_this).find(param.arrowRight);\n            $(_this).bind({\n                mouseover:function(){\n                    arrowLeft.show();\n                    arrowRight.show();\n                },\n                mouseout:function(){\n                    arrowLeft.hide();\n                    arrowRight.hide();\n                }\n             });\n        }\n\n        /**\n        处理左右移动箭头\n        \n        function triggerDirection(){\n            var arrowLeft = $(_this).find(param.arrowLeft),arrowRight = $(_this).find(param.arrowRight),\n                arrowLeftOver = param.arrowLeftOver, arrowRightOver = param.arrowRightOver;\n\n            arrowLeft.bind({\n                click:function(){\n                    if(index != 0){// 判断当前是不是第一张\n                        classOper([imgNode,tabNode],defaultClass,false);\n                        animate();\n                    }else{\n                        //判断是否是圆形循环，只支持渐变方式\n                        if(param.isCircular){\n                            classOper([imgNode,tabNode],defaultClass,false);\n                            index = imgNode.length;\n                            classOper([imgNode,tabNode],defaultClass,false);\n                            animate();\n                        }\n                    }\n                   return false;\n                },\n                mouseover:function(){$(this).addClass(arrowLeftOver);},\n                mouseout:function(){$(this).removeClass(arrowLeftOver);}\n            });\n            arrowRight.bind({\n                click:function(){\n                    if(index < imgNode.length - 1){// 判断当前是不是最后一张\n                        classOper([imgNode,tabNode],defaultClass,true);\n                        animate();\n                    }else{\n                        //判断是否是圆形循环，只支持渐变方式\n                        if(param.isCircular){\n                            index = -1;\n                            classOper([imgNode,tabNode],defaultClass,true);\n                            animate();\n                        }\n                    }\n                   return false;\n                },\n                mouseover:function(){$(this).addClass(arrowRightOver);},\n                mouseout:function(){$(this).removeClass(arrowRightOver);}\n            });\n        }\n\n        /**\n        透明效果\n        \n        function transparent(){\n            imgNode.animate({\n                opacity: 0\n              }, 0, function() {\n              });\n            $(_this).css({'background-color':imgNode.eq(index).attr('background')});\n            imgNode.eq(index).animate({\n                opacity: 1\n              }, 1000, function() {\n                  _stop();\n                  if(enterFlag)return;\n                  time = setTimeout(imgMove, timer);\n              });\n\n        }\n\n        /**\n        移动效果：每一张图片分10次移动\n        \n        function oneImgMove(){\n            var nowMoveRange = (indexmoveRange) - imgArea[0][scroll],\n            partImgRange = nowMoveRange > 0 ? Math.ceil(nowMoveRange / 10) : Math.floor(nowMoveRange / 10);\n            imgArea[0][scroll] += partImgRange;\n            if (partImgRange == 0){\n                imgNode.eq(index).addClass(defaultClass);\n                tabNode.eq(index).addClass(defaultClass);\n                partImgRange = null;\n                _stop();\n                if(!enterFlag)\n                    time = setTimeout(imgMove, timer);\n            }\n            else{\n                partTime = setTimeout(oneImgMove,30);\n            }\n            $(_this).css({'background-color':imgNode.eq(index).attr('background')});\n        }\n\n        /**\n        节点css类名操作\n        \n        function classOper(arr,className,flag){\n            arr.each(function(ind,n){\n                n.eq(index).removeClass(className);\n            });\n            flag?(index++):(index--);\n            arr.each(function(ind,n){\n                n.eq(index).addClass(className);\n            });\n        }\n    }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "public_modules"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "specialAuction()",
    "name": "specialAuction",
    "group": "public_modules",
    "description": "<p>拍卖专场模块方法</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "idNode        \t包裹一个拍卖专场的节点，本身必须设置有拍卖id属性albumId\nbidNode\t\t\t出价次数节点，且属于idNode的后代节点\naccessNode\t\t围观次数节点，且属于idNode的后代节点\nstartNode\t\t拍卖开始时间的input节点，且属于idNode的后代节点\nendNode\t\t\t拍卖结束时间的input节点，且属于idNode的后代节点none",
        "type": "json"
      },
      {
        "title": "code",
        "content": "specialAuction: function(param){\n            var jTarget = $(this),\n                param = $.extend({\n                    idNode:'.item',\n                    bidNode:'.j-bid-count',\n                    accessNode:'.j-access-count',\n                    startNode:'j-start-time',\n                    endNode:'j-end-time',\n                    waitClass:'wait',\n                    goClass:'go',\n                    overClass:'over'\n                },param || {}),\n                baseurl = INTERFACE.paimai.queryCurAlbumInfo;\n\n            function getInfo(ids){\n                $.ajax({\n                    url : baseurl,\n                    data: {albumIdStr: ids},\n                    dataType : 'jsonp',\n                    success : function(data){\n                        //  [{\"bidCount\":0,\"access\":1},{\"bidCount\":0,\"access\":1},{\"bidCount\":0,\"access\":3}]\n                        if(data && data.length){\n                            getServerTime(function(nowDate){\n                                var nowDate = new Date(nowDate),\n                                    nowTime = nowDate.getFullYear() + \"-\" + (nowDate.getMonth() + 1) + \"-\" + nowDate.getDate() + \" \" + nowDate.getHours() + \":\" + nowDate.getMinutes() + \":\" + nowDate.getSeconds(),\n                                    jItems = jTarget.find(param.idNode);\n\n                                for(var i = 0; i < data.length; i++){\n                                    var jItem = jItems.eq(i),\n                                        startTime = jItem.find(param.startNode).val(),\n                                        endTime = jItem.find(param.endNode).val();\n                                    jItem.find(param.bidNode).text(data[i].bidCount);\n                                    jItem.find(param.accessNode).text(data[i].access);\n                                    if(startTime && endTime){\n                                        var startDate = new Date(startTime.replace(/-/g, \"/\").replace(/\\.\\d/, \"\")),\n                                            endDate = new Date(endTime.replace(/-/g, \"/\").replace(/\\.\\d/, \"\"));\n                                        if(startDate - nowDate > 100){\n                                            new Countdown(jItem, param, [{\"countDownTime\": startTime, \"class\": param.waitClass}, {\"countDownTime\": endTime, \"class\": param.goClass}, {\"class\": param.overClass}], i).init();\n                                        }else if(endDate - nowDate > 100){\n                                            new Countdown(jItem, param, [{\"countDownTime\": endTime, \"class\": param.goClass}, {\"class\": param.overClass}], i).init();\n                                        }else{\n                                            jItem.addClass(param.overClass);\n                                        }\n                                    }\n                                }\n                            });\n                        }\n                    }\n                });\n            }\n\n            //倒计时对象\n            //@private jContainer          容器div\n            //@private param               各种倒计时相关参数\n            //@private duration            一个数组，里面包含了倒计时的各个区间段，可以实现到点自动切换。格式：[{\"countDownTime\": \"\", \"class\": param.waitClass}*N]\n            //@private timerIndex          倒计时在模块中的序号，用于唯一标示倒计时的timer\n            function Countdown(jContainer, param, duration, timerIndex) {\n                var interval = 60000,\n                    setting = {\n                        hasDay: true,\n                        dayCnt: '.days',\n                        timerContainer: '.jTime',\n                        hourCnt: '.hours',\n                        minuteCnt: '.minutes',\n                        secondCnt: '.seconds'\n                    },\n                    nowTime = 0,\n                    beginTime = 0,\n                    endTime = 0,\n                    jDay,\n                    jHour,\n                    jMinu,\n                    jSeco,\n                    jTime,\n                    instanceid = jContainer.closest(\"div[instanceid]\").attr(\"instanceid\"),\n                    instanceTimer,\n                    durationIndex = 0;\n\n                //初始化\n                this.init = function () {\n\n                    //拍卖专场的倒计时定时器都放在这里面\n                    if(!jshop.paimaiCountDown){\n                        jshop.paimaiCountDown = {};\n                    }\n\n                    instanceTimer = jshop.paimaiCountDown[instanceid];\n                    if(!instanceTimer){\n                        instanceTimer = [];\n                    }\n\n                    //清除掉此模块下原先对应的timer\n                    for(var i = 0; i < instanceTimer.length; i++){\n                        clearTimeout(instanceTimer[i]);\n                    }\n\n                    //合并参数\n                    $.extend(setting, param);\n\n                    jDay = jContainer.find(setting.dayCnt);\n                    jHour = jContainer.find(setting.hourCnt);\n                    jMinu = jContainer.find(setting.minuteCnt);\n                    jSeco = jContainer.find(setting.secondCnt);\n                    jTime = jContainer.find(setting.timerContainer);\n\n                    endTime = new Date(duration[durationIndex].countDownTime.replace(/-/g, \"/\").replace(/\\.\\d/, \"\")).getTime();\n                    jContainer.addClass(duration[durationIndex][\"class\"]);\n\n                    //确定更新时间的周期\n                    setting.secondCnt && (interval = 1000);\n                    run();\n                }\n\n                \n                //更新并显示倒计时\n                //@param residualTime\n                //@return {number}    剩余的秒数；\n                //@private\n                function updateTime(residualTime) {\n                    nowTime += 1000;\n                    var secondUnit = 1000,\n                        minuteUnit = secondUnit * 60,\n                        hourUnit = minuteUnit * 60,\n                        dayUnit = hourUnit * 24,\n                        day = 0;\n\n                    if (setting.hasDay) {\n                        day = ~~(residualTime / dayUnit);\n                        jDay.text(day);\n                        var hour = ~~((residualTime - day * dayUnit) / hourUnit);\n                    } else {\n                        var hour = ~~(residualTime / hourUnit);\n                    }\n                    jHour.text(hour < 10 ? \"0\" + hour : hour);\n\n                    var minute = ~~((residualTime - day * dayUnit - hour * hourUnit) / minuteUnit);\n                    jMinu.text(minute < 10 ? \"0\" + minute : minute);\n                    var second = ~~((residualTime - day * dayUnit - hour * hourUnit - minute * minuteUnit) / secondUnit);\n                    jSeco.text(second < 10 ? \"0\" + second : second);\n                    return second;\n                }\n\n                function run() {\n\n                    //隐藏天\n                    setting.hasDay === false && jDay.hide() && jDay.next().hide();\n\n                    //获取系统时间是个异步方法，所以后面的执行逻辑都需要放到回调方法中\n                    getServerTime(function (date) {\n                        nowTime = beginTime = new Date(date).getTime();\n                        var residual = endTime - beginTime;\n\n                        function one() {\n                            updateTime(residual);\n                            residual -= interval;\n                            //如果天倒计时已经为0了，则隐藏天\n                            setting.hasDay && ~~jDay.text() === 0 && jDay.hide() && jDay.next().hide();\n                            //结束了就清掉timer\n                            if (residual <= 0 && jSeco && ~~jSeco.text() === 0) {\n                                clearTimeout(instanceTimer[timerIndex]);\n                                var nextDuration = duration[durationIndex + 1];\n                                if(nextDuration){\n                                    jContainer.removeClass(duration[durationIndex][\"class\"]).addClass(nextDuration[\"class\"]);\n                                    //如果还有下一个倒计时，则启动下一个倒计时\n                                    if(nextDuration.countDownTime){\n                                        residual = new Date(duration[++durationIndex].countDownTime.replace(/-/g, \"/\").replace(/\\.\\d/, \"\")).getTime() - nowTime;\n                                        instanceTimer[timerIndex] = setInterval(one, interval);\n                                    }\n                                }\n                            }\n                        }\n\n                        if (residual > 0) {\n                            instanceTimer[timerIndex] = setInterval(one, interval);\n                            one();\n                        } else {\n                            jDay.text(\"00\");\n                            jHour.text(\"00\");\n                            jMinu.text(\"00\");\n                            jSeco.text(\"00\");\n                        }\n\n                        jTime.css(\"visibility\", \"visible\");\n\n                    });\n                }\n\n            }\n\n            !function init(){\n                var ids = jTarget.find(param.idNode).map(function(){return this.getAttribute(\"albumId\")}).toArray().join(\",\");\n                getInfo(ids);\n            }();\n        }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "public_modules"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "tab()",
    "name": "tab",
    "group": "public_modules",
    "description": "<p>none</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "none",
        "type": "json"
      },
      {
        "title": "code",
        "content": "tab:function(args){\n        var param = $.extend({tabNode:'.jSortTab span', arrow:'.jSortTabArrow', defaultClass:'current', tabContent:'.jSortContent ul',isNeedWidth:true, eventType:'mouseenter'}, args),\n            _this = this,\n            tabNode = $(_this).find(param.tabNode),\n            tabContent = $(_this).find(param.tabContent),\n            arrow = $(_this).find(param.arrow), index = 0;\n\n        var eventFlag = true;\n\n        //初始化结构\n        tabNode.eq(0).addClass(param.defaultClass);\n         tabContent.eq(0).addClass(param.defaultClass).data('lazyload',true);\n\n        var width = (tabNode.parent().parent().width()-0.03)/tabNode.length;\n        if(param.isNeedWidth){\n            tabNode.css({width: width});\n        }\n        arrow.css({width: width});\n\n        //绑定鼠标移动事件\n        tabNode.each(function(ind,n){\n            $(n)[param.eventType](function(){\n                index = ind;\n                if(eventFlag){\n                    eventFlag = false;\n                    $(this).addClass(param.defaultClass).siblings().removeClass(param.defaultClass);\n                    tabContent.eq(index).addClass(param.defaultClass).siblings().removeClass(param.defaultClass);\n                    if(arrow.length){\n                        arrow.animate({\n                            left: (index)width\n                        },\n                        300,\n                        function() {\n                            eventFlag=true;\n                            if(index != ind){\n                                tabNode.eq(index).trigger(param.eventType);\n                            }\n                        });\n                    }\n                    else{\n                        eventFlag = true;\n                        if(index != ind){\n                            tabNode.eq(index).trigger(param.eventType);\n                        }\n                    }\n                }\n                if(!tabContent.eq(index).data('lazyload')){\n                    jshop.module.ridLazy(tabContent.eq(index).data('lazyload',true));\n                }\n            });\n        });\n    }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "public_modules"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "tabClass()",
    "name": "tabClass",
    "group": "public_modules",
    "description": "<p>none</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "none",
        "type": "json"
      },
      {
        "title": "code",
        "content": "tabClass:function(args){\n        var param = $.extend({node:'li', defaultClass:'current'}, args),\n            elem = $(this).find(param.node),\n            defaultClass = param.defaultClass,\n            defaultShow = param.defaultShow;\n\n        if(defaultShow){\n            elem.eq(defaultShow).addClass(defaultClass);\n        }\n\n        elem.bind({\n            mouseenter:function(){\n                $(this).addClass(defaultClass).siblings().removeClass(defaultClass);\n            },\n            mouseleave:function(){\n                $(this).removeClass(defaultClass);\n            }\n        });\n    }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "public_modules"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "tabShow()",
    "name": "tabShow",
    "group": "public_modules",
    "description": "<p>切换显示--通过触发一个元素，切换其他元素的显示。可选择闭环切换、前进后退及随机切换显示--可应用于任意模块，只要有使用场景。</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "如{eventNode:'.jClick', parentNode:'.jSortContent', childNode:'ul', defaultClass:'current', eventType:'click', num:0, tabTime:500, subFunction:'circle'}\n1、eventNode触发切换的节点；\n2、parent切换节点的父节点；\n3、child切换节点；\n4、defaultClass显示样式；\n5、eventType触发的事件类型；\n6、num初始显示第几个；\n7、tabTime每一屏切换的时间；\n8、subFunction显示方式：闭环circle、前进倒退direction、随机random。",
        "type": "json"
      },
      {
        "title": "code",
        "content": "tabShow : function(args){\n        var param = $.extend({eventNode:'.jClick', parentNode:'.jSortContent', childNode:'ul', defaultClass:'current', eventType:'click', num:0, tabTime:500, subFunction:'circle'},args),\n            _this = $(this),\n            eventNode = _this.find(param.eventNode),//触发切换的节点\n            parent = _this.find(param.parentNode),//切换节点的父节点\n            child = _this.find(param.childNode),//切换节点\n            defaultClass = param.defaultClass,//显示样式\n            eventType = param.eventType,//触发的事件类型\n            num = (param.num === Number && param.num <= len) ? param.num : 0,//初始显示第几个\n            tabTime = param.tabTime,//每一屏切换的时间\n            subFunction = param.subFunction,//显示方式：闭环circle、前进倒退direction、随机random\n            len = child.length,\n            isLeft = true;\n\n        //初始化显示\n        child.eq(num).addClass(defaultClass);\n\n        //事件触发\n        eventNode[eventType](function(){\n            if(param.subFunction){\n                showStyle[param.subFunction].call(_this);\n            }\n            callBack();\n        });\n\n        var showStyle = {\n            circle : function(){\n                num = (num + 1)%len;\n            },\n            direction : function(){\n                if(isLeft){\n                    num++;\n                    if(num == len - 1){\n                        isLeft = false;\n                    }\n                }else{\n                    num--;\n                    if(num  == 0){\n                        isLeft = true;\n                    }\n                }\n            },\n            random : function(){\n                num = parseInt(Math.random()len);\n            }\n        };\n\n        function callBack(){\n            child.eq(num).addClass(defaultClass).siblings().removeClass(defaultClass);\n            child.animate({opacity:0},0,function(){});\n            child.eq(num).animate({opacity:1},param.tabTime,function(){});\n        }\n    }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "public_modules"
  },
  {
    "type": "data",
    "url": "http://active.coupon.jd.com/ilink/couponActiveFront/ifram_index.action?key=79566ba7fcee44e8924a4354cdeda7ce&roleId=1422862&to=sale.jd.com/act/syji8khazyfjwluq.html",
    "title": "userGetCoupon()",
    "name": "userGetCoupon",
    "group": "public_modules",
    "description": "<p>优惠券iframe调用--支持public modules调用（里面除A链接外每一个结构上设置伪属性data-href）；a链接调用需在href里填写javascript:void(0)。应用场景：公用调用（采用public modules方式）；a链接调用。</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "none",
        "type": "json"
      },
      {
        "title": "code",
        "content": "userGetCoupon : function(args){\n        var param = jQuery.extend({\n            node : 'a',\n            dataAttr : 'data-href'\n        } , args || {}),\n            _this = jQuery(this),\n            node = _this.find(param.node);\n\n        if(!node.length){\n           return;\n        }\n\n        var activeCoupon= function(source){\n            $.jdThickBox({\n                type: 'iframe',\n                title: '免费抢券',\n                source: source,\n                width: 800,\n                height: 450,\n                _title: 'thicktitler',\n                _close: 'thickcloser',\n                _con: 'thickconr'\n            })\n        };\n\n        var activeCouponLogin= function(source){\n            thick_login(function(){\n                activeCoupon(source);\n             });\n        };\n\n        node.click(function(){\n            var href = jQuery(this).attr(param.dataAttr);\n            activeCouponLogin(href);\n        });\n    }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "public_modules"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "waterfallFlow()",
    "name": "waterfallFlow",
    "group": "public_modules",
    "description": "<p>瀑布流--主要应用在商品列表图片交错布局，就像瀑布一样</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "如{node:'li', topSpac:15}。\n1、参数node为单个节点名；\n2、参数topSpac为第一行与顶部的距离",
        "type": "json"
      },
      {
        "title": "code",
        "content": "waterfallFlow:function(args){\n   var _this = this,\n        param = jQuery.extend({node:\"li\", topSpac:10}, args),\n        elem = jQuery(_this).find(param.node),\n        qty = parseInt(elem.parent().width()/parseInt(elem.outerWidth(true))),\n        topPos,\n        array = [];\n\n   elem.each(function(index, e){\n       //获取行数\n        var row = parseInt(index/qty),\n            //获取列数：通过每一个的位置除去每一行的数量，剩下的余数就是每一列\n            col = index%qty,\n            //获取每一个的左边距：离最左边的距离\n            leftPos = col*jQuery(e).outerWidth(true);\n\n        //如果是第一行\n       if(row == 0){\n           topPos = parseInt((col%2)*param.topSpac);\n       }\n       else{\n           var topNode = jQuery(elem.get((row-1)*qty+col));\n           topPos = topNode.outerHeight(true)+parseInt(topNode.css(\"top\"));\n       }\n       jQuery(e).css({left:leftPos,top:topPos});\n\n        //将每一个的top和自身的高度之和保存到数组里\n        array.push(parseInt(jQuery(e).css(\"top\"))+jQuery(e).outerHeight(true));\n   });\n\n    //数组排序，获取最大的高度\n    function compare(value1, value2){\n        if(value1<value2){\n           return -1;\n        }else if(value1>value2){\n           return 1;\n        }else{\n           return 0;\n        }\n    }\n    array.sort(compare);\n\n    //重设父级的高度，以达到背景自适应\n    jQuery(_this).css(\"height\",array[array.length-1]);\n}",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "public_modules"
  },
  {
    "type": "ATTENTION",
    "url": "促销接龙模块",
    "title": "ATTENTION",
    "name": "ATTENTION",
    "group": "recPromo",
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "recPromo"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "base()",
    "name": "base",
    "group": "recPromo",
    "description": "<p>none</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "none",
        "type": "json"
      },
      {
        "title": "code",
        "content": "base : function(arg){\n\t\t\tvar _this = $(this),\n\t\t\t\t_arg = $.extend({\n\t\t\t\t\tnode:'li',\n\t\t\t\t\tstateNode : '.jBtnArea a',\n\t\t\t\t\taddressNode :'.saleAddress,.imgCon',\n\t\t\t\t\tgoodDes : '.saleAddress',\n\t\t\t\t\timgNode : '.imgCon img',\n\t\t\t\t\tcartNode : '.addCart',\n\t\t\t\t\tsaleNum : '.saleNum',\n\t\t\t\t\tsalePrice : '.jdPrice .jdNum',\n\t\t\t\t\tisPad : !1\n\t\t\t\t},arg || {}),\n\t\t\t\t_instance_id = _this.closest('[instanceid]').eq(0).attr('instanceid'),\n\t\t\t\t_base_url = INTERFACE.actJshop.promo + '?modId=';\n\t\t\tfunction _init(){\n\t\t\t\tjshop.module.ridLazy(_this);\n\t\t\t\t_get_info();\n\t\t\t}\n\t\t\t\n\t\t\tfunction _get_img_server(){\n\t\t\t\tvar __num = 10 + parseInt(Math.random()*4);\n\t\t\t\treturn '//img' + __num + '.360buyimg.com/n';\n\t\t\t}\n\t\t\t\n\t\t\t\n\t\t\tfunction _get_info(){\n\t\t\t\t$.ajax({\n\t\t\t\t\turl : _base_url + _instance_id,\n\t\t\t\t\ttype : 'POST',\n\t\t\t\t\tdataType : 'jsonp',\n\t\t\t\t\tsuccess : function(data){\n\t\t\t\t\t\tif(data.result){\n\n\t\t\t\t\t\t\tif(!data.values ||!data.values.skuId) return;\n\n\t\t\t\t\t\t\t//限定在指定促销id范围内赋值\n\t\t\t\t\t\t\tvar jObject = _this.find(_arg.node + \"[promoId=\" + data.values.id + \"]\").show(),\n\t\t\t\t\t\t\t\tisInRange = false;\n\t\t\t\t\t\t\tif(jObject && jObject.length){\n\t\t\t\t\t\t\t\t_this = jObject;\n\t\t\t\t\t\t\t\tisInRange = true;\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\tvar __sku = data.values.skuId,\n\t\t\t\t\t\t\t\t__src = _get_img_server(),\n\t\t\t\t\t\t\t\t__sale__address =  INTERFACE.linkGoods + '/' + __sku + '.html',\n\t\t\t\t\t\t\t\t__cart_address = INTERFACE.linkCart + '?pid=' + __sku + '&pcount=1&ptype=1',\n\t\t\t\t\t\t\t\t__img = _this.find(_arg.imgNode);\n\t\t\t\t\t\t\t_this.find(_arg.addressNode).attr('href',__sale__address);\n\t\t\t\t\t\t\t_this.find(_arg.cartNode).attr('href',__cart_address);\n\t\t\t\t\t\t\tif(_arg.isPad){\n\t\t\t\t\t\t\t\t_this.find(_arg.addressNode).attr('href','openapp.jdipad://virtual?params={\"category\":\"jump\",\"des\":\"productDetail\",\"skuId\":\"' + __sku + '\",\"sourceType\":\"yuni\",\"sourceValue\":\"yuni\"}');\n\t\t\t\t\t\t\t\t_this.find(_arg.cartNode).attr('href','openapp.jdipad://virtual?params={\"category\":\"jump\",\"des\":\"cart\",\"skuNum\":\"1\",\"skuId\":\"' + __sku + '\",\"sourceType\":\"yuni\",\"sourceValue\":\"yuni\"}');\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t__img.attr('src',__src + (__img.attr('ntype')||2) + '/' + data.values.goodImg);\n\t\t\t\t\t\t\t__img.attr('alt',data.values.goodName);\n\t\t\t\t\t\t\t_this.find(_arg.saleNum).html(data.values.num);\n\t\t\t\t\t\t\t_this.find(_arg.goodDes).html(data.values.goodName);\n\t\t\t\t\t\t\t_this.find(_arg.salePrice).html(data.values.price);\n\t\t\t\t\t\t\t_this.find('[ptype]').each(function(index,n){\n\t\t\t\t\t\t\t\t\t$(n).attr('jshop','price').attr($(n).attr('ptype'),data.values.skuId);\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t\tif(data.values.status == '0'){\n\t\t\t\t\t\t\t\tif(isInRange){\n\t\t\t\t\t\t\t\t\t_this.attr('class',_arg.overCls).find(_arg.stateNode).attr('href','#none');\n\t\t\t\t\t\t\t\t}else{\n\t\t\t\t\t\t\t\t\t_this.find(_arg.node).attr('class',_arg.overCls).find(_arg.stateNode).attr('href','#none');\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\telse if(data.values.status == '1'){\n\t\t\t\t\t\t\t\tif(isInRange){\n\t\t\t\t\t\t\t\t\t_this.attr('class',_arg.underwayCls);\n\t\t\t\t\t\t\t\t}else{\n\t\t\t\t\t\t\t\t\t_this.find(_arg.node).attr('class',_arg.underwayCls);\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\telse{\n\t\t\t\t\t\t\t\tif(isInRange){\n\t\t\t\t\t\t\t\t\t_this.attr('class',_arg.waitCls).find(_arg.stateNode).attr('href','#none');\n\t\t\t\t\t\t\t\t}else{\n\t\t\t\t\t\t\t\t\t$(_this).find(_arg.node).attr('class',_arg.waitCls).find(_arg.stateNode).attr('href','#none');\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tif(skuIdPriceObj)\n\t\t\t\t\t\t\t\tskuIdPriceObj.localPriceRefresh(_this);\n\t\t\t\t\t\t}\n\t\t\t\t\t\telse{\n\t\t\t\t\t\t\t_this.find(_arg.node).remove();\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t\t}\n\t\t\t_init();\n\t\t}",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "recPromo"
  },
  {
    "type": "ATTENTION",
    "url": "批量推荐活动关注模块",
    "title": "ATTENTION",
    "name": "ATTENTION",
    "group": "saleFollow",
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "saleFollow"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "base()",
    "name": "base",
    "group": "saleFollow",
    "description": "<p>none</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "none",
        "type": "json"
      },
      {
        "title": "code",
        "content": "\t\tbase : function(arg){\n\t\t\tvar _this = this,\n\t\t\t\t_args = $.extend({\n\t\t\t\t\titem : 'li',\n\t\t\t\t\tfollow : '.J-attention',\n\t\t\t\t\tfavorite : '.J-addFavorite'\n\t\t\t\t},arg || {}),\n\t\t\t\t_url = INTERFACE.activityFollw.follow,\n\t\t\t\t_follow_con = $('.jPageExtra .pop_cnt');\n\t\t\t\n\t\t\tfunction _init(){\n\t\t\t\t$(_this).find(_args.item).each(function(index,n){\n\t\t\t\t\tvar __id = $(n).attr('id'),\n\t\t\t\t\t\t__address = $(n).attr('address'),\n\t\t\t\t\t\t__title = $(n).attr('title'),\n\t\t\t\t\t\t__type = $(n).attr('srcType'),\n\t\t\t\t\t\tdata = {\n\t\t\t\t\t\t\tactivityId : __id,\n\t\t\t\t\t\t\tsrcType : __type,\n\t\t\t\t\t\t\tsysName : 'sale.jd.com'\n\t\t\t\t\t\t};\n\t\t\t\t\tif(!__id || !__address || !__title) return;\n\t\t\t\t\t$(n).find(_args.follow).click(function(){\n\t\t\t\t\t\tfunction __follow(){\n\t\t\t\t\t\t\t$.ajax({\n\t\t\t\t\t\t\t\turl : _url,\n\t\t\t\t\t\t\t\tdata : data,\n\t\t\t\t\t\t\t\tdataType : 'jsonp',\n\t\t\t\t\t\t\t\tasync : false,\n\t\t\t\t\t\t\t\tsuccess : function(data){\n\t\t\t\t\t\t\t\t\t_followSuccess(data);\n\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\terror : function(){\n\t\t\t\t\t\t\t\t\t_followFail('followTopicFailDiv');\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t}\n\t\t\t\t\t\tthick_login(__follow);\n\t\t\t\t\t});\n\t\t\t\t\t\n\t\t\t\t\t$(n).find(_args.favorite).click(function(){\n\t\t\t\t\t\ttry{\n\t\t\t\t\t\t\tif (document.all) {\n\t\t\t\t\t\t\t\twindow.external.AddFavorite(__address, __title);\n\t\t\t\t\t\t\t} else if (window.sidebar) {\n\t\t\t\t\t\t\t\twindow.sidebar.addPanel(__title, __address, \"\");\n\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\talert('对不起，您的浏览器不支持此操作!\\n请您使用菜单栏或Ctrl+D收藏，收藏地址为' + __address + '。');\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\tcatch(e){\n\t\t\t\t\t\t\talert('对不起，您的浏览器不支持此操作!\\n请您使用菜单栏或Ctrl+D收藏，收藏地址为' + __address + '。');\n\t\t\t\t\t\t}\n\t\t\t\t\t});\n\t\t\t\t});\n\t\t\t}\n\t\t\t\n\t\t\tfunction _followSuccess(data){\n\t\t\t\t//FIXME\n\t\t\t\tif( data.code == 'F10000' ){//F10000 成功\n\t\t\t\t\t_followed(\"followTopicSuccessDiv\");\n\t\t\t\t\treturn;\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\tif( data.code == 'F0402' ){//F0402 已关注过，不能加关注\n\t\t\t\t\t_followed(\"followedTopicDiv\");\n\t\t\t\t\treturn;\n\t\t\t\t}\n\t\t\t\tif(data.code == 'F0410'){\n\t\t\t\t\t_followFail(\"followTopicMaxDiv\");\n\t\t\t\t\treturn;\n\t\t\t\t}\n\t\t\t\t//弹出错误页面\n\t\t\t\t_followFail(\"followTopicFailDiv\");\n\t\t\t}\n\t\t\t\n\t\t\tfunction _followFail(divElem){\n\t\t\t\tjQuery.jdThickBox({\n    \t\t\t\t\t\twidth: 300,\n    \t\t\t\t\t\theight: 80,\n    \t\t\t\t\t\ttitle: '关注失败', \n    \t\t\t\t        source: _follow_con.find('#'+divElem).html()\n    \t\t\t\t\t}); \n    \t\t\t\t\treturn;\n\t\t\t}\n\t\t\t\n\t\t\tfunction _getFollowNum(url,followNumSuccessCallBack){\n\t\t\t\tjQuery.ajax({\n\t\t\t\t\t async: false,//同步调用\n\t\t\t\t\t url:url,\n\t\t\t\t\t data : {sysName : 'sale.jd.com'},\n\t\t\t\t\t dataType:\"jsonp\",\n\t\t\t\t\t success:function(data){\n\t\t\t\t\t\tfollowNumSuccessCallBack(data);\n\t\t\t\t\t\t\n\t\t\t\t\t },\n\t\t\t\t\t error: function(reques,msg){\n\t\t\t\t\t\t//弹出关注失败；\n\t\t\t\t\t\t_followShopFail();\n\t\t\t\t\t\t \n\t\t\t\t\t }\n\t\t\t\t });\n\t\t\t};\n\t\t\t\n\t\t\tfunction _followed(divElem){\n    \t\t\t\t\t//获取关注数量\n    \t\t\t\t\tvar title;\n    \t\t\t\t\tvar url;\n    \n    \t\t\t\t\ttitle=\"提示\";\n    \t\t\t\t\turl = INTERFACE.activityFollw.queryForCount;\n    \t\t\t\t\t_getFollowNum(url,function(data){\n    \t\t\t\t\t\tvar followedNum=\"您已关注\"+data.data+\"个活动\\， \";\n    \t\t\t\t\t\t_follow_con.find('#followedNum').html(followedNum);\n    \n    \t\t\t\t\t\tjQuery.jdThickBox({\n    \t\t\t\t\t\t\twidth: 300,\n    \t\t\t\t\t\t\theight: 80,\n    \t\t\t\t\t\t\ttitle: title, \n    \t\t\t\t\t        source: _follow_con.find('#'+divElem).html()\n    \t\t\t\t\t\t}); \n    \t\t\t\t\t});\n\t\t\t}\n\t\t\t\n\t\t\t_init();\n\t\t}",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "saleFollow"
  },
  {
    "type": "ATTENTION",
    "url": "批量推荐POP店铺模块",
    "title": "ATTENTION",
    "name": "ATTENTION",
    "group": "shopAtten",
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "shopAtten"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "follow()",
    "name": "follow",
    "group": "shopAtten",
    "description": "<p>none</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "none",
        "type": "json"
      },
      {
        "title": "code",
        "content": "\t\tfollow : function(args){\n\t\t\tvar _para = $.extend({\n\t\t\t\tcoll : '.jshop-btn-coll',\n\t\t\t\tnode : 'li',\n\t\t\t\tdefault_pop : '.j_default'\n\t\t\t},args || {}), _this = this,\n\t\t\t\t_follow_url = INTERFACE.venderFollow.follow,\n\t\t\t\t_shop_id = null,\n\t\t\t\t_followVM = null, _loaded = false, _user_cnt = null,_msg_timer,_node,_shop_url;\n\t\t\t\n\t\t\t//数据初始化\n\t\t\tfunction _init(){\n\t\t\t\tif($(_this).parents('.mc:first').find('#j-follow-cnt').length){\n\t\t\t\t\t_user_cnt = $(_this).parents('.mc:first').find('#j-follow-cnt');\n\t\t\t\t\t_user_cnt.find('.icon_close').unbind('click').click(function(){\n\t\t\t\t\t\t_close_box();\n\t\t\t\t\t});\n\t\t\t\t}\n\t\t\t}\n\t\t\t// 事件初始化\n\t\t\tfunction _event_init(){\n\t\t\t\t$(_this).find(_para.node + ' ' + _para.coll).click(function(){\n\t\t\t\t\t_shop_url = $(this).attr('shopurl');\n\t\t\t\t\tif(_user_cnt){\n\t\t\t\t\t\t_user_cnt.find('.p1>a,.p3>a').attr('href',_shop_url);\n\t\t\t\t\t}\n\t\t\t\t\t_login_and_follow.call(this);\n\t\t\t\t});\n\t\t\t};\n\t\t\t\n\t\t\t//登录及关注店铺\n\t\t\tfunction _login_and_follow(){\n\t\t\t\t_shop_id = $(this).attr('shopid'),\n\t\t\t\tdata = {venderId : _shop_id, sysName : 'mall.jd.com'};\n\t\t\t\tfunction __follow(){\n\t\t\t\t\t$.ajax({\n\t\t\t\t\t\tasync : false,\n\t\t\t\t\t\turl : _follow_url,\n\t\t\t\t\t\tdata : data,\n\t\t\t\t\t\tdataType : 'jsonp',\n\t\t\t\t\t\tsuccess : function(data){\n\t\t\t\t\t\t\t_follow_handle(data);\n\t\t\t\t\t\t},\n\t\t\t\t\t\terror : function(){\n\t\t\t\t\t\t\t_follow_error(data);\n\t\t\t\t\t\t}\n\t\t\t\t\t}); \n\t\t\t\t}\n\t\t\t\t\n\t\t\t\tthick_login(__follow);\n\t\t\t\t\n\t\t\t\t\n//\t\t\t$.login({\n//\t\t            modal: true,\n//\t\t            complete: function(result) {\n//\t\t                if (result != null && result.IsAuthenticated != null && result.IsAuthenticated) {\n//                            jdModelCallCenter.settings.fn();//已经登陆后。增加关注\n//                            jdModelCallCenter.settings.fn = null;\n//\t\t                }\n//\t\t            }\n//\t\t\t\t });\n//\t\t\t\t jdModelCallCenter.settings.fn = function() {\n//\t\t\t\t\t __follow();//登录后回调函数 。增加关注\n//\t\t\t\t };\n\t\t\t\t \n\t\t\t}\n\t\t\t\n\t\t\t//关注返回处理逻辑\n\t\t\tfunction _follow_handle(data){\n\n\t\t\t\t$('<link rel=\"stylesheet\" type=\"text/css\" href=\"//misc.360buyimg.com/product/skin/2012/product-attention.css\"/>').appendTo('head');\n\t\t\t\t_followVM = $(_this).parents('.mc:first').find(_para.default_pop);\n\t\t\t\t\n\t\t\t\t_check(data);\n\t\t\t}\n\t\t\t//根据关注返回数据转移逻辑\n\t\t\tfunction _check(data){\n\t\t\t\tswitch(data.code){\n\t\t\t\t\tcase 'F10000' : {\n\t\t\t\t\t\t_follow_success();\n\t\t\t\t\t\tbreak;\n\t\t\t\t\t}\n\t\t\t\t\tcase 'F0402' : {\n\t\t\t\t\t\t_followed();\n\t\t\t\t\t\tbreak;\n\t\t\t\t\t}\n\t\t\t\t\tcase 'F0410' : {\n\t\t\t\t\t\t_follow_error('followMaxDiv',1);\n\t\t\t\t\t\tbreak;\n\t\t\t\t\t}\n\t\t\t\t\tdefault : {\n\t\t\t\t\t\t_follow_error('followFailDiv',2);\n\t\t\t\t\t\t\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\t\n\t\t\tfunction _follow_error(cnt,type){\n\t\t\t\tif(_user_cnt){\n\t\t\t\t\ttry{\n\t\t\t\t\t\t_user_cnt.find('.p1,.p2,.p3').hide();\n\t\t\t\t\t\tif(type == 1){\n\t\t\t\t\t\t\t_user_cnt.find('.p3').show();\n\t\t\t\t\t\t}\n\t\t\t\t\t\telse{\n\t\t\t\t\t\t\t_user_cnt.find('.p2').show();\n\t\t\t\t\t\t}\n\t\t\t\t\t\t_open_box();\n\t\t\t\t\t}\n\t\t\t\t\tcatch(e){\n\t\t\t\t\t\t_show_box(cnt);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\telse{\n\t\t\t\t\t_show_box(cnt);\n\t\t\t\t}\n\t\t\t}\n\t\t\t\n\t\t\tfunction _follow_success(){\n\t\t\t\t_get_follow_num(function(){\n\t\t\t\t\tif(_user_cnt){\n\t\t\t\t\t\t_user_cnt.find('.p2,.p3').hide();\n\t\t\t\t\t\t_user_cnt.find('.p1').show();\n\t\t\t\t\t\t_open_box();\n\t\t\t\t\t}\n\t\t\t\t\telse{\n\t\t\t\t\t\t_get_follow_tags();\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t\t}\n\t\t\t\n\t\t\tfunction _open_box(){\n\t\t\t\t_center(_user_cnt);\n\t\t\t\t_mask();\n\t\t\t\t$('.thickdiv').show();\n\t\t\t\t_user_cnt.show();\n\t\t\t}\n\t\t\t\n\t\t\tfunction _close_box(){\n\t\t\t\t_user_cnt.hide();\n\t\t\t\t$('.thickdiv').hide();\n\t\t\t}\n\t\t\tfunction _show_success(html,handle){\n                $('.thickbox').html('');\n\t\t\t\t$.jdThickBox({\n\t\t\t\t\twidth : 510,\n\t\t\t\t\theight : 260,\n\t\t\t\t\ttitle : '关注店铺',\n\t\t\t\t\t_box : 'btn_coll_shop_pop',\n\t\t\t\t\tsource : html\n\t\t\t\t},function(){\n\t\t\t\t\thandle();\n\t\t\t\t});\n\t\t\t}\n\t\t\t\n\t\t\tfunction _get_follow_tags(){\n\t\t\t\tvar __url = INTERFACE.venderFollow.queryTagForListByCount + '?count=5';\n\t\t\t\t$.ajax({\n\t\t\t\t\tasync : false,\n\t\t\t\t\turl : __url,\n\t\t\t\t\tdataType : 'jsonp',\n\t\t\t\t\tsuccess : function(data){\n\t\t\t\t\t\t_fill_in_tags(data);\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t\t}\n\t\t\t\n\t\t\tfunction _fill_in_tags(data){\n\t\t\t\tvar _data = data.data,\n\t\t\t\t\t_cnt = '<ul id=\"oldTags\" class=\"att-tag-list\">';\n\t\t\t\tfor(var i = 0, len = _data.length; i < len; i++){\n                    _cnt += '<li isnewadd=\"true\"><a href=\"javascript:;\" isCheck=\"false\">' + decodeURIComponent(_data[i]) + '</a><li>';\n\t\t\t\t}\n\t\t\t\t_cnt +='</ul><ul id=\"newTags\" class=\"att-tag-list att-tag-list-save\">';\n\t\t\t\t_cnt +='<li id=\"att-tag-new\" class=\"att-tag-new\"><input id=\"newTag\" type=\"text\" placeholder=\"自定义\" maxLength=\"10\" /><span>保存</span></li></ul>';\n\t\t\t\t_followVM.find('#followTags').html(_cnt);\n\t\t\t\t_show_success(_followVM.find('#followSuccessDiv').html(),function(){\n\t\t\t\t    var pop = $('#btn_coll_shop_pop'),\n\t\t\t        \ttarget = $('#attention-tags').find('.mc');\n\t\t\t\t    pop.find('.thickcon').css('height', 'auto');\n\t\t\t\t    pop.css('height', 'auto');\n\t\t\t\t    //IE下占位符不起作用的补偿方式\n\t\t\t\t    $('#newTag').val( $('#newTag').attr('placeholder'));\n\t\t\t\t    $('#newTag').focus(function(){\n\t\t\t\t    \tif($.trim($(this).val()) == $(this).attr('placeholder'))\n\t\t\t\t    \t\t$(this).val('');\n\t\t\t\t    }).keyup(function(){\n\t\t\t\t    \t$(this).val($(this).val().substring(0,10));\n\t\t\t\t    }).blur(function(){\n\t\t\t\t    \tif($(this).val() == ''){\n\t\t\t\t    \t}\n\t\t\t\t    });\n\t\t\t\t    \n\t\t\t\t    $('#newTag').next('span').click(function(){\n\t\t\t\t    \t_check_tags();\n\t\t\t\t    });\n\n                    $('#oldTags li').click(function(){\n                        _chooseTag(this);\n                    });\n\n\t\t\t\t    $('#attention-tags .att-tag-btn>a:first').click(function(){\n\t\t\t\t    \tvar __names = '', __count = 0;\n\t\t\t\t    \t$('#oldTags,#newTags').find('a').each(function(index,n){\n\t\t\t\t    \t\tif($(n).attr('ischeck') == 'true'){\n\t\t\t\t    \t\t\t__count ++;\n\t\t\t\t    \t\t\tif(__names != ''){\n                                    __names += ',';\n\t\t\t\t    \t\t\t}\n\t\t\t\t    \t\t\t__names += $(n).html();\n\t\t\t\t    \t\t}\n\t\t\t\t    \t});\n\t\t\t\t    \t\n\t\t\t\t    \tif(__names == ''){\n\t\t\t\t    \t\t_show_message('请至少提供一个标签');\n\t\t\t\t    \t}\n\t\t\t\t    \tif(__count > 3){\n\t\t\t\t    \t\t_show_message('标签最多可选3个');\n\t\t\t\t    \t}\n\t\t\t\t    \t__names = encodeURIComponent(__names);\n\t\t\t\t    \tvar __url = INTERFACE.venderFollow.editTag;\n\t\t\t\t    \t\n\t\t\t\t    \t$.ajax({\n\t\t\t\t    \t\turl : __url,\n\t\t\t\t    \t\tdataType : 'jsonp',\n\t\t\t\t    \t\tdata : {\n\t\t\t\t    \t\t\tvenderId : _shop_id,\n\t\t\t\t    \t\t\ttagNames : __names\n\t\t\t\t    \t\t},\n\t\t\t\t    \t\tsuccess : function(data){\n\t\t\t\t    \t\t\tif(data.code == 'F10000'){\n\t\t\t\t    \t\t\t\t$('#follow_error_msg').removeClass();\n\t\t\t\t    \t\t\t\t$('#follow_error_msg').addClass('hl_green fl');\n\t\t\t\t    \t\t\t\t$('#follow_error_msg').html(\"设置成功\");\n\t\t\t\t\t   \t\t    \t$('#follow_error_msg').show();\n\t\t\t\t\t   \t\t    \tsetTimeout(function(){\n\t\t\t\t\t   \t\t    \t\t$('#follow_error_msg').hide();\n                                        $('.thickclose').click();\n                                    }, 5000);\n                                }\n                                else if(data.code == 'F0410'){\n                                    _show_message('设置的标签数超过最大限制');\n                                }\n                                else{\n                                    _show_message('设置失败');\n                                }\n                            },\n                            error : function(){\n                                _show_message('设置失败');\n                            }\n\t\t\t\t    \t});\n\t\t\t\t    });\n\t\t\t\t});\n\t\t\t\t\n\t\t\t\t\n\t\t\t}\n\t\t\t\n\t\t\t\n\t\t\tfunction _check_tags(){\n\t\t\t\tvar _val = $('#newTag').val(),\n\t\t\t\t\t_tips = '标签由数字、字母、汉字组成';\n\t\t\t\t\n\t\t\t\tfunction __validate(value){\n\t\t\t\t\tvar __reg = /[\\u4e00-\\u9fa5]|[0-9]|[a-z]|[A-Z]+/g,\n\t\t\t\t\t\t__result = value.match(__reg);\n\t\t\t\t\treturn !!__result;\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\tif(_val.length > 10 || _val.trim().length > 10){\n\t\t\t\t\t_show_message(_tips);\n\t\t\t\t\treturn false;\n\t\t\t\t}\n\t\t\t\tif(!__validate(_val)){\n\t\t\t\t\t_show_message(_tips);\n\t\t\t\t\treturn false;\n\t\t\t\t}\n\t\t\t\tif(_val == $('#newTag').attr('placeholder'))\n\t\t\t\t\treturn false;\n\t\t\t\t$('<li isNewAdd=\"true\"><a class=\"current\" href=\"javascript:;\" isCheck=\"true\">' + _val + '</a></li>').click(function(){\n\t\t\t\t\t_chooseTag(this);\n\t\t\t\t}).insertBefore( $('#att-tag-new'));\n                if($('#newTags li[isNewAdd]').length >= 3){\n\t\t\t\t\t$('#att-tag-new').hide();\n\t\t\t\t}\n                $('#newTag').val('');\n\t\t\t}\n\t\t\t\n\t\t\tfunction _chooseTag(obj){\n\t\t\t\tvar isCheck=$(obj).find('a').attr(\"isCheck\");\n\t\t\t\tif( 'undefined' == typeof isCheck || isCheck=='false' ){\n\t\t\t\t\t$(obj).find('a').attr(\"isCheck\",\"true\");\n\t\t\t\t\t$(obj).find('a').addClass(\"current\");\n\t\t\t\t}else{\n\t\t\t\t\t$(obj).find('a').attr(\"isCheck\",\"false\");\n\t\t\t\t\t$(obj).find('a').removeClass(\"current\");\n\t\t\t\t}\n\t\t\t}\n\t\t\t\n\t\t\tfunction _show_message(msg){\n\t\t\t\t$('#follow_error_msg').html(msg);\n\t\t    \t $('#follow_error_msg').show();\n\t\t    \t if(_msg_timer){\n\t\t    \t\t clearTimeout(_msg_timer);\n\t\t    \t }\n\t    \t\t _msg_timer = setTimeout(function(){\n\t\t    \t\t  $('#follow_error_msg').hide();\n\t\t     \t }, 3000);\n\t\t\t}\n\t\t\t\n\t\t\tfunction _followed(){\n\t\t\t\tif(_user_cnt){\n\t\t\t\t\t_user_cnt.find('.p1,.p2,.p3').hide();\n\t\t\t\t\t_user_cnt.find('.p3').show();\n\t\t\t\t\t_open_box();\n\t\t\t\t}\n\t\t\t\telse{\n\t\t\t\t\t_get_follow_num(function(){\n\t\t\t\t\t\t_show_box('followedDiv','已关注过该店铺');\n\t\t\t\t\t});\n\t\t\t\t}\n\t\t\t}\n\t\t\t\n\t\t\tfunction _get_follow_num(handle){\n\t\t\t\tvar __url = INTERFACE.venderFollow.queryForCount,\n\t\t\t\t\tdata = {sysName : 'mall.jd.com'};\n\t\t\t\t$.ajax({\n\t\t\t\t\turl : __url,\n\t\t\t\t\tdata : data,\n\t\t\t\t\tdataType : 'jsonp',\n\t\t\t\t\tasync : false,\n\t\t\t\t\tsuccess : function(data){\n\t\t\t\t\t\t_followVM.find('#followSuccessDiv #followedNum,#followedDiv #followedNum').html('您已关注' + data.data + '个店铺，');\n\t\t\t\t\t\thandle();\n\t\t\t\t\t\t\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t\t}\n\t\t\t\n\t\t\tfunction _show_box(cnt,title){\n                $('.thickbox').html('');\n\t\t\t\t$.jdThickBox({\n\t\t\t\t\twidth : 300,\n\t\t\t\t\theight : 80,\n\t\t\t\t\ttitle : title || '关注失败',\n\t\t\t\t\tsource : _followVM.find('#' + cnt).html()\n\t\t\t\t});\n\t\t\t} \n\t\t\t\n\t\t\tfunction _center(obj){\n\t\t\t\tvar __w = obj.outerWidth(),__h = obj.outerHeight();\n\t\t\t\tobj.css({\n\t\t\t\t\tposition:'absolute',\n\t\t\t\t\tleft : ($(window).width() - __w)/2 + $(window).scrollLeft() + 'px',\n\t\t\t\t\ttop : ($(window).height() - __h)/2 + $(window).scrollTop() + 'px',\n\t\t\t\t\tzIndex : 10000005\n\t\t\t\t});\n\t\t\t}\n\t\t\t\n\t\t\tfunction _mask(){\n\t\t\t\tif(!$('.thickdiv').length){\n\t\t\t\t\t$('<div class=\"thickdiv\"></div>').appendTo('body');\n\t\t\t\t}\n\t\t\t}\n\t\t\t_init();\n\t\t\t_event_init();\t\n\t\t}",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "shopAtten"
  },
  {
    "type": "ATTENTION",
    "url": "侧滑模块",
    "title": "ATTENTION",
    "name": "ATTENTION",
    "group": "sidePanel",
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "sidePanel"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "base()",
    "name": "base",
    "group": "sidePanel",
    "description": "<p>none</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "none",
        "type": "json"
      },
      {
        "title": "code",
        "content": "base : function(arg){\n\t\t\tvar _this = $(this),\n\t\t\t\t_args = $.extend({\n\t\t\t\t\thorizontal : 1,\n\t\t\t\t\ttop : 0,\n\t\t\t\t\tshow : false,\n\t\t\t\t\tanimate : 'normal'\n\t\t\t\t},arg || {}),\n\t\t\t_slide = _this.find('.J-container'),\n\t\t\t_h = _slide.height(),\n\t\t\t_scroll_h = 609,\n\t\t\t_show = false,\n\t\t\t_duration = 1000,\n\t\t\t_original_top = null,\n\t\t\t_animate;\n\t\t\t\n\t\t\tvar _show_animate = {\n\t\t\t\tnormal : {\n\t\t\t\t\tshow : function(){\n\t\t\t\t\t\t_slide.show();\n\t\t\t\t\t},\n\t\t\t\t\thide : function(){\n\t\t\t\t\t\t_slide.hide();\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\tfade : {\n\t\t\t\t\tshow : function(){\n\t\t\t\t\t\t_slide.fadeIn(_duration);\n\t\t\t\t\t},\n\t\t\t\t\thide : function(){\n\t\t\t\t\t\t_slide.fadeOut(_duration);\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\tfadeH : {\n\t\t\t\t\tshow : function(){\n\t\t\t\t\t\t_slide.animate({'height':_args.height + 'px'},_duration);\t\t\t\t\t\n\t\t\t\t\t},\n\t\t\t\t\thide : function(){\n\t\t\t\t\t\t_slide.animate({'height':'0px'},_duration,function(){\n\t\t\t\t\t\t\t_slide.show();\n\t\t\t\t\t\t});\n\t\t\t\t\t\t\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\tfadeW : {\n\t\t\t\t\tshow : function(){\n\t\t\t\t\t\t_slide.animate({'width':_args.width + 'px'},_duration);\n\t\t\t\t\t},\n\t\t\t\t\thide : function(){\n\t\t\t\t\t\t_slide.animate({'width':'0px'},_duration,function(){\n\t\t\t\t\t\t\t_slide.show();\n\t\t\t\t\t\t});\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t};\n\t\t\tfunction _init(){\n\t\t\t\tif(_this.parents('[instanceid]').data('panel'))\n\t\t\t\t\t_this.parents('[instanceid]').data('panel').remove();\n\t\t\t\t_this.parents('[instanceid]').data('panel',_slide); \n\t\t\t\t_animate = _show_animate[_args.animate] || _show_animate.normal;\n\t\t\t\tjshop.module.ridLazy(_this);\n\t\t\t\t_css_init();\n\t\t\t}\n\t\t\t\n\t\t\tfunction _css_init(){\n\t\t\t\tif(1 == _args.horizontal){\n\t\t\t\t\t_slide.css({\n\t\t\t\t\t\tright : '50%',\n\t\t\t\t\t\tmarginRight : '505px'\n\t\t\t\t\t});\n\t\t\t\t}\n\t\t\t\telse if(2 == _args.horizontal){\n\t\t\t\t\t_slide.css({\n\t\t\t\t\t\tleft : '50%',\n\t\t\t\t\t\tmarginLeft : '505px'\n\t\t\t\t\t});\n\t\t\t\t}\n\t\t\t\telse{\n\t\t\t\t\t_slide.css({\n\t\t\t\t\t\tmargin : '0 auto',\n\t\t\t\t\t\tmaxWidth : '990px',\n\t\t\t\t\t\tleft : '50%',\n\t\t\t\t\t\tmarginLeft : -_args.width/2 + 'px'\n\t\t\t\t\t});\n\t\t\t\t}\n\t\t\t\t_original_top = _args.horizontal < 3?_args.top:(_args.horizontal == 4?2:$(window).height() - _args.height - 2);\t\t\t\t\t\n\t\t\t\t_slide.css({\n\t\t\t\t\tposition : 'fixed',\n\t\t\t\t\tzIndex : 7,\n\t\t\t\t\ttop : _original_top + 'px',\n\t\t\t\t\toverflow : 'hidden'\n\t\t\t\t});\n\t\t\t\tif(_args.height){\n\t\t\t\t\t_slide.height(_args.height);\n\t\t\t\t}\n\t\t\t\tif(_args.width){\n\t\t\t\t\t_slide.width(_args.width);\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\tif(_args.show === 1){\n\t\t\t\t\tif($(window).scrollTop() < _scroll_h){\n\t\t\t\t\t\t_animate.hide();\n\t\t\t\t\t}\n\t\t\t\t\telse{\n\t\t\t\t\t\tif(_args.horizontal == 4){\n\t\t\t\t\t\t\tif($(window).scrollTop() >= 176)\n\t\t\t\t\t\t\t\t_slide.show();\n\t\t\t\t\t\t\t\t_show = true;\n\t\t\t\t\t\t}\n\t\t\t\t\t\telse{\n\t\t\t\t\t\t\t_slide.show();\n\t\t\t\t\t\t\t_show = true;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\t_scroll_handle();\n\t\t\t\t}\n\t\t\t\telse{\n\t\t\t\t\tif(_args.horizontal == 4){\n\t\t\t\t\t\t_animate.hide();\n\t\t\t\t\t\tif($(window).scrollTop() >= 175){\n\t\t\t\t\t\t\t_animate.show();\n\t\t\t\t\t\t\t_show = true;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t$(window).scroll(function(){\n\t\t\t\t\t\t\tif(!_show && $(this).scrollTop() >= 176){\n\t\t\t\t\t\t\t\t_animate.show();\n\t\t\t\t\t\t\t\t_show = true;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tif(_show && $(this).scrollTop() < 176){\n\t\t\t\t\t\t\t\t_animate.hide();\n\t\t\t\t\t\t\t\t_show = false;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t});\n\t\t\t\t\t}\n\t\t\t\t\telse{\n\t\t\t\t\t\t_animate.hide();\n\t\t\t\t\t\t_animate.show();\n\t\t\t\t\t\t_show = true;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tif($.browser.msie&&$.browser.version.match(/6/)){\n\t\t\t\t\t_slide.css('position','absolute');\n\t\t\t\t\t_ie_fix_handle();\n\t\t\t\t}\n\t\t\t}\n\t\t\tfunction _ie_fix_handle(){\n\t\t\t//var __vertical = ($('#service-2013').length?$('#service-2013').offset().top:$('body').height()) - _args.height - _args.top;\n\t\t\t\t$(window).scroll(function(){\n\t\t\t\t\t//if(_args.horizontal > 2){\n\t\t\t\t\t\tif(_show){\n\t\t\t\t\t\t\t_slide.css('top',_original_top + $(this).scrollTop() + 'px');\n\t\t\t\t\t\t}\n\t\t\t\t});\n\t\t\t\t$(window).resize(function(){\n\t\t\t\t\t_original_top = _args.horizontal < 3?_args.top:(_args.horizontal == 4?2:$(window).height() - _args.height - 2);\t\n\t\t\t\t\tif(_show){\n\t\t\t\t\t\t_slide.css('top',_original_top + $(this).scrollTop() + 'px');\n\t\t\t\t\t}\n\t\t\t\t\treturn;\n\t\t\t\t});\n\t\t\t}\n\t\t\t\n\t\t\tfunction _scroll_handle(){\n\t\t\t\t$(window).scroll(function(){\n\t\t\t\t\tif(!_show && $(this).scrollTop() >= _scroll_h){\n\t\t\t\t\t\t_animate.show();\n\t\t\t\t\t\t_show = true;\n\t\t\t\t\t}\n\t\t\t\t\tif(_show && $(this).scrollTop() < _scroll_h){\n\t\t\t\t\t\t_animate.hide();\n\t\t\t\t\t\t_show = false;\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t\t}\n\t\t\t\n\t\t\tfunction _bottom_scroll_handle(){\n\t\t\t\tvar __vertical = ($('#service-2013').length?$('#service-2013').offset().top:$('body').height()) - _args.height - _args.top;\n\t\t\t\t$(window).scroll(function(){\n\t\t\t\t\tif($(this).scrollTop() >= __vertical){\n\t\t\t\t\t\t_slide.css({\n\t\t\t\t\t\t\ttop : __vertical - $(this).scrollTop() + _args.top + 'px'\n\t\t\t\t\t\t});\n\t\t\t\t\t}\n\t\t\t\t\telse{\n\t\t\t\t\t\t_slide.css({\n\t\t\t\t\t\t\ttop : _args.top + 'px'\n\t\t\t\t\t\t});\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t\t}\n\t\t\t_init();\n\t\t}",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "sidePanel"
  },
  {
    "type": "ATTENTION",
    "url": "扩展了公共模块，并包含了GoodsRec、UserDefine、Banner、tuan、BrandSale、imgShow、vote模块对象（商品分类推荐模块）",
    "title": "ATTENTION",
    "name": "ATTENTION",
    "group": "sortRec",
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "sortRec"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "autoLayout()",
    "name": "autoLayout",
    "group": "sortRec",
    "description": "<p>自适应布局：自适应布局宽度，根据布局的宽度判断能放下的一行数量，并将多余的宽度赋给每一个列表。支持css对象传入</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "参数传递：如{_this:'.template-area', node:'.item', extra:{}}",
        "type": "json"
      },
      {
        "title": "code",
        "content": "autoLayout:function(args){\n            if(args == undefined){\n                if(validateData($(this).attr(\"module-param\"))){\n                    var args = eval('('+$(this).attr(\"module-param\")+')');\n                }\n            }\n\n            var param = $.extend({node:'li', extra:{}}, args),\n                _this = this,\n                elems = $(_this).find(param.node),\n                elem = elems.eq(0);\n\n            elem.css(param.extra);\n\n            var outerWidth = parseInt(elem.data('outerWidth') || elem.outerWidth(true)),\n                width = parseInt(elem.data('width') || elem.css('width')),\n                qty = parseInt(elem.parent().parent().width()/outerWidth);\n\n            //记录初始化值\n            elem.data({'outerWidth':outerWidth, 'width':width});\n\n            var extraWidth = outerWidth - width;\n            var newWidth = (elem.parent().parent().width()-extraWidth*qty-0.03)/qty;\n            elems.css({width:newWidth});\n        }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "sortRec"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "goodsSlide()",
    "name": "goodsSlide",
    "group": "sortRec",
    "description": "<p>商品列表轮播</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "none",
        "type": "json"
      },
      {
        "title": "code",
        "content": "goodsSlide: function(args) {\n            jQuery.goodsListSlide(args);\n        }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "sortRec"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "showComment()",
    "name": "showComment",
    "group": "sortRec",
    "description": "<p>获取商品评论数显示为已购买人数，并按此对sku进行排序</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "none",
        "type": "json"
      },
      {
        "title": "code",
        "content": "showComment: function(args) {\n            var param = $.extend({\n                parentContainer: '.JS_slide_item',\n                childContainer: 'li',\n                commentContainer:'.JS_summary_num',\n                indexTag: '.JS_tag',\n                goodsId: 'goods-id'\n            }, args),\n                _this = $(this),\n                commentUrl = '//club.jd.com/clubservice/summary-m-';\n            _this.find(param.commentContainer).each(function(){\n                commentUrl += jQuery(this).attr(param.goodsId) + ',';\n            });\n            commentUrl += '.html';\n            // 获取评价数渲染到已购买人数\n            jQuery.ajax({\n                url: commentUrl,\n                dataType: 'jsonp',\n                success: function(data) {\n                    for (var i = data.CommentsCount.length - 1; i >= 0; i--) {\n                        _this.find('[' + param.goodsId + '=' + data.CommentsCount[i].SkuId + ']').html(data.CommentsCount[i].CommentCount);\n                    };\n                    // 按已购买人数排序\n                    _this.find(param.parentContainer).each(function(){\n                        var $this = jQuery(this),\n                            liArr = $this.find(param.childContainer);\n                        liArr.sort(function(a, b){\n                            return parseInt(jQuery(a).find(param.commentContainer).html()) > parseInt(jQuery(b).find(param.commentContainer).html()) ? -1 : 1;\n                        }).each(function(n){\n                            jQuery(this).find(param.indexTag).html(n+1);\n                        });\n                        $this.empty().append(liArr);\n                    });\n                }\n            });\n        }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "sortRec"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "tabAutoLayout()",
    "name": "tabAutoLayout",
    "group": "sortRec",
    "description": "<p>自适应个数切换和商品自适应布局</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "none",
        "type": "json"
      },
      {
        "title": "code",
        "content": "tabAutoLayout:function(){\n            if(validateData($(this).attr(\"module-param\"))){\n                var args = eval('('+$(this).attr(\"module-param\")+')');\n            }\n\n            var param = $.extend({}, args);\n\n            jshop.module.sortRec.tab.call(this,param);\n            jshop.module.sortRec.autoLayout.call(this,param);\n        }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "sortRec"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "tabToggle()",
    "name": "tabToggle",
    "group": "sortRec",
    "description": "<p>按钮tab切换</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "none",
        "type": "json"
      },
      {
        "title": "code",
        "content": "tabToggle: function(args) {\n            var param = $.extend({\n                tabContainer: '.jItem',\n                tabNode:'.jSortTab a',\n                tabContent:'.jSortContent ul'\n            }, args),\n            _this = this,\n            tabContainer = $(_this).find(param.tabContainer);\n\n            tabContainer.each(function(){\n                var $this = $(this),\n                    tabNode = $this.find(param.tabNode),\n                    tabContent = $this.find(param.tabContent);\n                // 初始化商品显示(默认显示第一个)\n                $(tabNode[0]).addClass('current');\n                $(tabContent[0]).addClass('current');\n\n                tabNode.each(function(n){\n                    var $this = $(this),\n                        currentContent = $(tabContent[n]);\n                    // 绑定商品链接\n                    $this.attr('href', currentContent.find('.JGood').attr('href'));\n\n                    // 绑定鼠标移到tab上的切换动作\n                    $this.bind('mouseenter', function(){\n                        // 商品展示\n                        tabContent.removeClass('current');\n                        currentContent.addClass('current');\n                        // tab状态切换\n                        tabNode.removeClass('current');\n                        $this.addClass('current');\n                    });\n                });\n            });\n        }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "sortRec"
  },
  {
    "type": "ATTENTION",
    "url": "团购模块",
    "title": "ATTENTION",
    "name": "ATTENTION",
    "group": "tuan",
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "tuan"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "timer()",
    "name": "timer",
    "group": "tuan",
    "description": "<p>none</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "none",
        "type": "json"
      },
      {
        "title": "code",
        "content": "timer :(function(){\n\t\t\tvar _timer = null,\n\t\t\t\t_clear = function(){\n\t\t\t\t\tif(_timer)\n\t\t\t\t\t\tclearInterval(_timer);\n\t\t\t\t};\n\t\t\treturn function(arg){\n\t\t\t\tvar _this = this, \n\t\t\t\t_ids = [],\n\t\t\t\t_sysTime = null,\n\t\t\t\t_allIds = [],\n\t\t\t\t_args = $.extend({isNeedZero:true},arg);\n\t\t\t\t__getIds = function(){\n\t\t\t\t\t$(_this).find('div[tuanid]').each(function(index,n){\n\t\t\t\t\t\t_ids.push($(n).attr('tuanid'));\n\t\t\t\t\t});\n\t\t\t\t\t$('div[tuanid]').each(function(index,n){\n\t\t\t\t\t\t_allIds.push($(n).attr('tuanid'));\n\t\t\t\t\t});\n\t\t\t\t},\n\t\t\n\t\t\t\t\n\t\t\t\t __init = function(){\n\t\t\t\t\t__getIds();\n\t\t\t\t\t__initData();\n\t\t\t\t\t__initTimer();\n\t\t\t\t},\n\t\t\t\n\t\t\t\t__initData = function(){\n\t\t\t\t\tif(!_sysTime && !!_ids.length){\n\t\t\t\t\t\tvar localT = new Date().getTime(),\n\t\t\t\t\t\t\tsysT = jQuery('.jItem[tuanId='+_ids[0]+']').attr('currentTime');\n\t\t\t\t\t\t_sysTime = localT - sysT;\t\n\t\t\t\t\t}\n\t\t\t\t\tfor(var i  = _ids.length; i > 0; i--){\n\t\t\t\t\t\tvar item = jQuery('.jItem[tuanId='+_ids[i-1]+']'),\n\t\t\t\t\t\t\tcurrent = parseInt(item.find('.jGoodsInfo>.jTotalQty>.jLimitQty>.jNum').html()),\n\t\t\t\t\t\t\tbarCon = item.find('.jGoodsInfo>.jProgress>.jBar>.jIconBar'),\n\t\t\t\t\t\t\ttotal = parseInt(barCon.find('em').html());\n\t\t\t\t\t\tbarCon.find('.jCurrent').css('width',(100-current*100/total)+'%');\n\t\t\t\t\t\t\n\t\t\t\t\t\tvar endT = parseInt(item.attr('endTime'))*1000,\n\t\t\t\t\t\t\tperiodT = Math.floor((endT - parseInt(item.attr('currentTime')))/1000);\n\t\t\t\t\t\tif(periodT < 0) {\n\t\t\t\t\t\t\tvar str = '00:00:00';\n\t\t\t\t\t\t}\n\t\t\t\t\t\telse{\n\t\t\t\t\t\t\tvar hour =Math.floor(periodT/3600),\n\t\t\t\t\t\t\t\tminute = Math.floor(periodT%3600/60),\n\t\t\t\t\t\t\t\tsecond = periodT%60;\n\t\t\t\t\t\t\tif(_args.isNeedZero){\n\t\t\t\t\t\t\t\tvar str = hour <= 9 ? ('0' + hour) : hour;\n\t\t\t\t\t\t\t\tstr += ':';\n\t\t\t\t\t\t\t\tstr += minute <= 9 ? ('0' + minute) : minute; \n\t\t\t\t\t\t\t\tstr += ':';\n\t\t\t\t\t\t\t\tstr += second <= 9 ? ('0' + second) : second;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\telse{\n\t\t\t\t\t\t\t\tvar str = hour + ':' + minute + ':' + second;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\titem.find('.jTime>.jNum').html(str); \n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\n\t\t\t\t__initTimer = function(){\n\t\t\t\t\t_clear();\n\t\t\t\t\t_timer = setInterval(function(){\n\t\t\t\t\t\tfor(var i = _allIds.length; i > 0; i--){\n\t\t\t\t\t\t\tvar item = jQuery('.jItem[tuanId='+_allIds[i-1]+']'),\n\t\t\t\t\t\t\t\tlocalT = new Date().getTime(),\n\t\t\t\t\t\t\t\tperiodT = Math.floor((parseInt(item.attr('endTime'))*1000 - localT + _sysTime)/1000);\n\t\t\t\t\t\t\tif(periodT < 0){\n\t\t\t\t\t\t\t\t_allIds.splice(i-1,1);\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tvar str = Math.floor(periodT/3600);\n\t\t\t\t\t\t\t\tstr += ':' + Math.floor(periodT%3600/60);\n\t\t\t\t\t\t\t\tstr += ':' + periodT%60;\t\n\t\t\t\t\t\t\titem.find('.jTime>.jNum').html(str); \n\t\t\t\t\t\t}\n\t\t\t\t\t},1000);\n\t\t\t\t};\n\t\t\t\t\n\t\t\t\t__init();\n\t\t\t}\n\t\t})()",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "tuan"
  },
  {
    "type": "ATTENTION",
    "url": "视频推荐模块",
    "title": "ATTENTION",
    "name": "ATTENTION",
    "group": "videoPromo",
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "videoPromo"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "base()",
    "name": "base",
    "group": "videoPromo",
    "description": "<p>none</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "none",
        "type": "json"
      },
      {
        "title": "code",
        "content": "//timer : {}, \n  base : function(arg){\n\t\t\tvar _this = this,\n\t\t\t \t_args = $.extend({\n\t\t\t\tmainPic : '.main-pic',\n\t\t\t\tsidePic : '.side-pic',\n\t\t\t\ttimeTag : '.jIconTime',\n\t\t\t\tvideo : '.video'\n\t\t\t},arg || {}),\n\t\t\t_timer = null,\n\t\t\t_duration = 500,\n\t\t\t_animating = false,\n\t\t\t_in_flag = false,\n\t\t\t_has_video = false,\n\t\t\t_side_w = $(_this).find(_args.sidePic).width();\n\t\t\t\n\t\t\tfunction _init(){\n\t\t\t\t_has_video = !!$(_this).find(_args.video).length;\n\t\t\t\t_event_init();\n\t\t\t\t_timer_handler();\n\t\t\t}\n\t\t\t\n\t\t\tfunction _event_init(){\n\t\t\t\tvar __side = $(_this).find(_args.sidePic);\n\t\t\t\tif(!_has_video){\n\t\t\t\t\t$(_this).find(_args.mainPic).mouseover(function(){\n\t\t\t\t\t\tif(_animating) return;\n\t\t\t\t\t\t_in_flag = true;\n\t\t\t\t\t\t_animating = true;\n\t\t\t\t\t\t__side.animate({\n\t\t\t\t\t\t\twidth : '0px'\n\t\t\t\t\t\t},_duration,function(){\n\t\t\t\t\t\t\t_animating = false;\n\t\t\t\t\t\t\tif(!_in_flag){\n\t\t\t\t\t\t\t\t__side.animate({\n\t\t\t\t\t\t\t\t\twidth : _side_w + 'px'\n\t\t\t\t\t\t\t\t},_duration);\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t});\n\t\t\t\t\t}).mouseout(function(){\n\t\t\t\t\t\t_in_flag = false;\n\t\t\t\t\t\tif(!_animating){\n\t\t\t\t\t\t\t$(_this).find(_args.sidePic).animate({\n\t\t\t\t\t\t\t\twidth : _side_w + 'px'\n\t\t\t\t\t\t\t},_duration);\n\t\t\t\t\t\t}\n\t\t\t\t\t});\n\t\t\t\t}\n\t\t\t\telse{\n\t\t\t\t\t$(_this).find(_args.mainPic).mouseover(function(){\n\t\t\t\t\t\t$(this).animate({height:'0px'},_duration);\n\t\t\t\t\t\t__side.animate({width : '0px'},_duration);\n\t\t\t\t\t});\n\t\t\t\t\t\n\t\t\t\t\t$(_this).find('.icon_close').click(function(){\n\t\t\t\t\t\t$(_this).find(_args.mainPic).animate({height:'445px'},_duration);\n\t\t\t\t\t\t__side.animate({width:'198px'},_duration,function(){\n\t\t\t\t\t\t\tvar __html = $(_this).find(_args.video).html(),\n\t\t\t\t\t\t\t__parent = $(_this).find(_args.video).parent();\n\t\t\t\t\t\t\t$(_this).find(_args.video).remove();\n\t\t\t\t\t\t\t$('<div class=\"' + _args.video +'\">' + __html + '</div>').prependTo(__parent);\n\t\t\t\t\t\t});\n\t\t\t\t\t});\n\t\t\t\t}\n\t\t\t}\n\t\t\t\n\t\t\tfunction _timer_handler(){\n\t\t\t\tvar __sku = $(_this).find('[skuid]').attr('skuid');\n\t\t\t\tif(w.jshop.module.videoPromo[__sku]){\n\t\t\t\t\tclearInterval(w.jshop.module.videoPromo[__sku]);\n\t\t\t\t}\n\t\t\t\tvar __container = $(_this).find(_args.timeTag),\n\t\t\t\t\t__seconds = Math.floor(parseInt(__container.attr('resttime'))/1000);\n\t\t\t\tw.jshop.module.videoPromo[__sku] = setInterval(function(){\n\t\t\t\t\tvar __date = parseInt(__seconds/3600);\n\t\t\t\t\t\t__date +='时';\n\t\t\t\t\t\t__date += parseInt(__seconds%3600/60);\n\t\t\t\t\t\t__date += '分';\n\t\t\t\t\t\t__date += __seconds%60;\n\t\t\t\t\t\t__date += '秒';\n\t\t\t\t\t\t__seconds --;\n\t\t\t\t\t\tif(__seconds == 1){\n\t\t\t\t\t\t\t__seconds = 86400;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t__container.html(__date);\n\t\t\t\t},1000);\n\t\t\t}\n\t\t\t\n\t\t\t_init();\n\t\t}",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "videoPromo"
  },
  {
    "type": "ATTENTION",
    "url": "投票模块",
    "title": "ATTENTION",
    "name": "ATTENTION",
    "group": "vote",
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "vote"
  },
  {
    "type": "JSHOP",
    "url": "投票模块伪属性化--",
    "title": "base()",
    "name": "base",
    "group": "vote",
    "description": "<p>none</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "none",
        "type": "json"
      },
      {
        "title": "code",
        "content": "base : function(arg){\n\t\t\tvar _this = $(this),_items,_id,_pin = '',_itemid,\n\t\t\t\t_url = INTERFACE.vote.vote,\n\t\t\t\t_arg = $.extend({\n\t\t\t\t\tfaddingType : 1,\n\t\t\t\t\tdialogCls : '.voteResult',\n\t\t\t\t\tisLogin : true,\n\t\t\t\t\tposition : 2,\n\t\t\t\t\tduration : 3\n\t\t\t\t},arg || {}),\n\t\t\t\t_timer = null,\n\t\t\t\t_duration = parseInt(_arg.duration) * 1000,\n\t\t\t\t_current_item = null,\n\t\t\t\t_dialog = _this.find(_arg.dialogCls),\n\t\t\t\t_close_flag = true;\n\n\t\t\tfunction _init(){\n\t\t\t\t_get_vote_count(_get_ids());\n\t\t\t\t_event_register();\n\t\t\t}\n\n\t\t\tfunction _get_ids(){\n\t\t\t\tvar __ids = [];\n\t\t\t\t_items =  _this.find('[itemid]');\n\t\t\t\t_items.each(function(index,n){\n\t\t\t\t\t__ids.push($(n).attr('itemid'));\n\t\t\t\t});\n\t\t\t\treturn __ids.join(',');\n\t\t\t}\n\n\t\t\tfunction _vote(){\n\t\t\t\tvar __url = _url ;\n\t\t\t\t$.ajax({\n\t\t\t\t\turl : __url,\n\t\t\t\t\tdata : {\n\t\t\t\t\t\tid : _id,\n\t\t\t\t\t\tpin : _pin,\n\t\t\t\t\t\titemId : _itemid\n\t\t\t\t\t},\n\t\t\t\t\tcache : false,\n\t\t\t\t\tdataType : 'jsonp',\n\t\t\t\t\tsuccess : function(content){\n\t\t\t\t\t\tif(!content) return;\n\t\t\t\t\t\tif(content.isSuccess){\n\t\t\t\t\t\t\t$('[votecount='+content.itemId+']').html(content.count);\n\t\t\t\t\t\t}\n\t\t\t\t\t\tif(!_dialog.length){\n\t\t\t\t\t\t\t_close_flag = true;\n\t\t\t\t\t\t}\n\t\t\t\t\t\telse{\n\t\t\t\t\t\t\t_fill_cnt(content);\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t\t}\n\n\t\t\tfunction _get_vote_count(ids){\n\t\t\t\tvar __url = INTERFACE.vote.getCount;\n\t\t\t\t$.ajax({\n\t\t\t\t\turl : __url,\n\t\t\t\t\tdata : {ids : ids},\n\t\t\t\t\tdataType : 'jsonp',\n\t\t\t\t\tsuccess : function(data){\n\t\t\t\t\t\tfor(var i in data){\n\t\t\t\t\t\t\tvar node = $('[votecount='+i+']');\n\t\t\t\t\t\t\tnode.each(function(index,n){\n\t\t\t\t\t\t\t\t$(n).html(data[i]);\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t\t}\n\n\t\t\tfunction _fill_cnt(cnt){\n\t\t\t\tif(!_arg.selfMessage){\n\t\t\t\t\tif(cnt.isSuccess){\n\t\t\t\t\t\t_dialog.find('.success').show();\n\t\t\t\t\t\t_dialog.find('.fail').hide();\n\t\t\t\t\t}\n\t\t\t\t\telse{\n\t\t\t\t\t\t_dialog.find('.success').hide();\n\t\t\t\t\t\t_dialog.find('.fail').show();\n\t\t\t\t\t\t_dialog.find('.fail .specific').html(cnt.tip);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\telse{\n\t\t\t\t\t_dialog.removeClass('jMessageOk,jMessageError').addClass(cnt.isSuccess?'jMessageOk':'jMessageError');\n\t\t\t\t\t_dialog.html(cnt.tip);\n\t\t\t\t}\n\t\t\t\t_show_result();\n\t\t\t}\n\n\t\t\tfunction _show_result(){\n\t\t\t\tif(!_arg.selfMessage){\n\t\t\t\t\tvar __left = (_arg.position == 1?(_current_item.offset().left + parseInt(_current_item.outerWidth(true)/2)):(parseInt($(window).width()/2))) - _dialog.outerWidth()/2 + 'px',\n\t\t\t\t\t\t__top = (_arg.position == 1?(_current_item.offset().top + parseInt(_current_item.outerHeight(true)/2)):(parseInt($(window).height()/2) + $(window).scrollTop())) - _dialog.outerHeight()/2 + 'px';\n\t\t\t\t\t_dialog.css({\n\t\t\t\t\t\tposition : 'absolute',\n\t\t\t\t\t\tleft : __left,\n\t\t\t\t\t\ttop : __top\n\t\t\t\t\t});\n\t\t\t\t}\n\t\t\t\t_close_flag = false;\n\t\t\t\t_dialog.unbind('closed').bind('closed',function(){\n\t\t\t\t\t_close_flag = true;\n\t\t\t\t});\n\t\t\t\t_dialog.fadeIn();\n\t\t\t\tif(_arg.faddingType == 1){\n\t\t\t\t\t_timer = setTimeout(function(){\n\t\t\t\t\t\t_dialog.fadeOut();\n\t\t\t\t\t\t_close_flag = true;\n\t\t\t\t\t},_duration);\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tfunction _event_register(){\n\t\t\t\t_items.each(function(index,n){\n\t\t\t\t\t$(n).click(function(){\n\t\t\t\t\t\t//弹出结果关闭之前点击无效果\n\t\t\t\t\t\t\tif(!_close_flag)\n\t\t\t\t\t\t\t\treturn;\n\t\t\t\t\t\t\t_current_item = $(this).closest('li').eq(0);\n\t\t\t\t\t\t\t_id = $(this).attr('voteid');\n\t\t\t\t\t\t\t_itemid = $(this).attr('itemid');\n\t\t\t\t\t\t\tif(_arg.selfMessage)\n\t\t\t\t\t\t\t\t_dialog = _current_item.find('.message');\n\t\t\t\t\t\tif(_arg.isLogin){\n\t\t\t\t\t\t\tthick_login(function(c){\n\t\t\t\t\t\t\t\t_pin = c.Name;\n\t\t\t\t\t\t\t\t _vote();\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t}\n\t\t\t\t\t\telse{\n\t\t\t\t\t\t\t_vote();\n\t\t\t\t\t\t}\n\t\t\t\t\t});\n\t\t\t\t});\n\t\t\t}\n\t\t\t_init();\n\t\t}",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "vote"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "ratioVote()",
    "name": "ratioVote",
    "group": "vote",
    "description": "<p>投票功能（投票后显示投票结果，进入页面要根据用户投票情况判断是否展示投票结果及投票按钮）</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "不传参则需按命名规则给节点命名，不能传空值",
        "type": "json"
      },
      {
        "title": "code",
        "content": "ratioVote: function(args) {\n\t        var param = jQuery.extend({\n\t                //投票项\n\t                voteItem: 'li',\n\t                //投票按钮\n\t                voteBtn : '.jVoteBtn',\n\t                //投票结果区域\n\t                countArea: '.jCountArea',\n\t                //显示已参与人数节点\n\t                countTotal: '.jVoteTotal'\n\t            }, args || {});\n\t        $(this).JVote(param);\n\t    }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "vote"
  }
] });
