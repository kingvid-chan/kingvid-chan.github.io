define({ "api": [
  {
    "type": "JSHOP",
    "url": "none",
    "title": "addEllipsis()",
    "name": "addEllipsis",
    "group": "module_function",
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
    "groupTitle": "module_function"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "addToCart()",
    "name": "addToCart",
    "group": "module_function",
    "description": "<p>function：飞入购物车 <br>description：点击购物车，获取商品图片飞入购物车特效</p>",
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
    "groupTitle": "module_function"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "attentStoreOrAct()",
    "name": "attentStoreOrAct",
    "group": "module_function",
    "description": "<p>[attentStoreOrAct 关注店铺或活动] <br>return {[type]}      [description]</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "param  {[type]} args [description]",
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
    "groupTitle": "module_function"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "autoFill()",
    "name": "autoFill",
    "group": "module_function",
    "description": "<p>function：自动填充宽度：通过传入不同的参数，让商品呈现不同的间距排列; <br>description：可应用于列表类模块; <br>autoFillNode为需要计算宽度的节点，默认为li；xInner为节点之间的横向间距；yInner为节点之间的纵向间距; <br>minWidth为节点除内外边距、边框之后的宽度，如果没传则自动获取。如果最终算出来的宽度小于最小宽度，则不做改变; <br>xOuter为节点父级左右边距，默认为空，表示两边没有间距；如果传入值大于0，则两边增加传入的间距值；如果等于0，则表示两边完全不要间距，包括每一行第一个节点和最后一个节点的边距。yOuter和xOuter相反; <br>length 每一行的数量有三种方式：1是自定义传；2是根据每一行的宽度和单个的宽度计算能放下的数量；3是当一行的数量不够占一行的数量</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "如{autoFillNode:'li', xInner:0, yInner:0, minWidth:' ', xOuter:' ', yOuter:' '}",
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
    "groupTitle": "module_function"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "autoTag()",
    "name": "autoTag",
    "group": "module_function",
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
    "groupTitle": "module_function"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "autoWidth()",
    "name": "autoWidth",
    "group": "module_function",
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
    "groupTitle": "module_function"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "brandAttent()",
    "name": "brandAttent",
    "group": "module_function",
    "description": "<p>function：关注品牌 <br>description：支持多个品牌关注 、业务 0、关注店铺和关注品牌街活动，传的都是“品牌街”那边的品牌活动ID，当前活动的“品牌活动ID”可以在隐藏域#tb_id里面获取 1、点击元素：系统用j-attention（用此class名做唯一区分），用户自定义用e-attention 2、品牌活动ID：data-id（节点伪属性，将品牌活动ID保存在此）,品牌街活动是“品牌街活动ID”，商家是shopId 3、区分关注功能类型：data-type（节点伪属性，用户手动传入），0表示不需要改变文案及取消功能，1表示需要改变文案和要取消功能 4、currentDom：当前点击的元素 5、临时状态data-state ：0未关注；1关注成功；2已经关注；3关注数量达到上限；4关注失败 6、逻辑业务： 1）页面打开时，获取页面上所有带有点击class节点上的data-id，整体初始化； 2）点击某一个元素时，将此元素设置为当前元素，获取元素上的data-id，和data-state发送不同请求（关注或取消关注） 3）当元素是关注状态1和已经关注状态2时，hover上去都显示取消关注 4）根据不同的请求状态，修改按钮文案</p> <pre><code>二、系统使用（引入attent_bp.js）：     1、点击元素：j-attention（用此class名做唯一区分）     2、品牌活动ID：data-id（节点伪属性，将品牌活动ID保存在此）,品牌街活动是“品牌街活动ID”     3、区分关注功能类型：data-type（节点伪属性，用户手动传入），0表示不需要改变文案及取消功能，1表示需要改变文案和要取消功能 </code></pre> <p>三、公共方法（Module.js里面增加brandAttent方法） 1、点击元素：e-attention（用此class名做唯一区分） 2、品牌活动ID：data-id（节点伪属性，将品牌活动ID保存在此）,品牌街活动是“品牌街活动ID” 3、区分关注功能类型：data-type（节点伪属性，用户手动传入），0表示不需要改变文案及取消功能，1表示需要改变文案和要取消功能 4、点击元素，受限于模块module-name，只有在模块下才能使用 5、使用方法：<div class=\"j-module\" module-function=\"brandAttent\" module-param=\"{}\">自定义代码</div></p>",
    "examples": [
      {
        "title": "module-param",
        "content": "none",
        "type": "json"
      },
      {
        "title": "code",
        "content": "brandAttent : function(args){\n        var param = jQuery.extend({\n            node : '.e-attention', //关注点击元素\n            pageIdValue : '#tb_id',\n            dataId : 'data-id',//（节点伪属性，将品牌活动ID保存在此）,品牌街活动是“品牌街活动ID”\n            dataState : 'data-state',\n            dataType : 'data-type'//关注类型，如果是1，则只需要关注和已经关注2个状态\n        }, args || {}),\n            _this = jQuery(this),\n            node = _this.find(param.node),\n            dataTye,//全局变量，获取点击元素上的类型  0只要关注和已经关注，非0则默认有取消功能，且修改按钮文案\n            currentDom,//全局变量，获取当前点击的元素\n            para = []; //传入参数\n\n        if(!node.length)return;}\n\n        var attentHtml = '<div class=\"follow-dialog-mask\"></div>'\n        +'<div class=\"follow-dialog\">'\n        +   '<div class=\"attent-mt\">'\n        +       '<span class=\"attent-close\" title=\"关闭\">关闭</span>'\n        +       '<span class=\"attent-title\">提示</span>'\n        +   '</div>'\n        +   '<div class=\"attent-mc\">'\n        +       '<div class=\"attent-con\">'\n        +           '<span class=\"attent-msg\"></span>'\n        +           '<span class=\"attent-other\"></span>'\n        +       '</div>'\n        +   '</div>'\n        +'</div>';\n\n        var attentCss = '<style id=\"followCls\">'\n        +'.follow-dialog-mask{position:fixed; _position:absolute; left:0; top:0; right:0; bottom:0; background:#000; opacity:0.3; filter:alpha(opacity=30); z-index:100; display:none;}'\n        +'.follow-dialog-mask.current{display:block;}'\n        +'.follow-dialog{width:310px; height:185px; /*border:solid 5px rgba(8,1,3,0.3);",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "module_function"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "changePageUrl()",
    "name": "changePageUrl",
    "group": "module_function",
    "description": "<p>function：页面跳转 <br>description： 应用场景：装修、预览、浏览</p>",
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
    "groupTitle": "module_function"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "changePhoto()",
    "name": "changePhoto",
    "group": "module_function",
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
    "groupTitle": "module_function"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "changeStyle()",
    "name": "changeStyle",
    "group": "module_function",
    "description": "<p>给鼠标当前出发的节点增加一个样式：主要应用在鼠标移动到节点，节点伸缩与展开等。</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "如{node:'li', defaultClass:'jCurrent', defaultShow:0}。\n参数node为单个节点名；参数defaultClass可任意命名，只要css里面有这个名字。",
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
    "groupTitle": "module_function"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "clickToFly()",
    "name": "clickToFly",
    "group": "module_function",
    "description": "<p>[clickToFly 点击元素飞入，目标元素显示+1] <br>return {[type]}      [description]</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "param  {[type]} args [description]",
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
    "groupTitle": "module_function"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "createQrCode()",
    "name": "createQrCode",
    "group": "module_function",
    "description": "<p>function：创建二维码 <br>description：可应用于所有模块。</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "如{node:'li', defaultClass:'jCurrent', defaultShow:0}。\n参数node为单个节点名；参数defaultClass可任意命名，只要css里面有这个名字。",
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
    "groupTitle": "module_function"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "equallyWidth()",
    "name": "equallyWidth",
    "group": "module_function",
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
    "groupTitle": "module_function"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "estimation()",
    "name": "estimation",
    "group": "module_function",
    "description": "<p>获取商品评论相关信息 评价星级规则：五星，好评度≥95%，四星，好评度≥90%，三星，好评度≥85%，二星，好评度≥80%，一星，好评度≥75% 备注：skuNode节点需要位于starNode、commentNode节点层级之上</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "param args.item         存放skuid商品单元节点选择器\nparam args.j-star       星级评价节点选择器\nparam args.j-rate       好评率节点选择器\nparam args.j-count      评论数节点选择器\nparam args.j-comment    评论内容节点选择器\nparam args.skuid        存放skuid的属性名称",
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
    "groupTitle": "module_function"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "fullHeight()",
    "name": "fullHeight",
    "group": "module_function",
    "description": "<p>撑满高度：用在相对定位里面有绝对定位时，背景透明图层以父节点为基准将高度撑满</p>",
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
    "groupTitle": "module_function"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "getGoodsAttentCount()",
    "name": "getGoodsAttentCount",
    "group": "module_function",
    "description": "<p>[getGoodsAttentCount 获取商品关注数] <br>return {[type]}      [description]</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "param  {[type]} args [模板参数]",
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
    "groupTitle": "module_function"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "getProTag()",
    "name": "getProTag",
    "group": "module_function",
    "description": "<p>function：获取促销标签 <br>description：根据获取的促销标签编号显示促销标签 应用场景：带有SKUID商品的模块</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "node方法应用节点；tagNode标签节点；tagValue标签键值；dataNum每次最多能获取的商品数量；url接口；urlNum可用接口长度",
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
    "groupTitle": "module_function"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "getWechatPrice()",
    "name": "getWechatPrice",
    "group": "module_function",
    "description": "<p>[getWechatPrice 获取微信专享价] <br>return {[type]}      [description]</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "param  {[type]} args [模板参数]",
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
    "groupTitle": "module_function"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "goodsFollow()",
    "name": "goodsFollow",
    "group": "module_function",
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
    "groupTitle": "module_function"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "goodsShare()",
    "name": "goodsShare",
    "group": "module_function",
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
    "groupTitle": "module_function"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "hideNode()",
    "name": "hideNode",
    "group": "module_function",
    "description": "<p>隐藏节点 鼠标移动到某个节点时，隐藏传入的其他参数节点</p>",
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
    "groupTitle": "module_function"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "hoverAnimate()",
    "name": "hoverAnimate",
    "group": "module_function",
    "description": "<p>function：移入动画 <br>description：对节点的移入及移出执行不同的CSS属性动画 css value: backgroundPosition, borderWidth, borderBottomWidth, borderLeftWidth, borderRightWidth, borderTopWidth, borderSpacing, margin, marginBottom, marginLeft, marginRight, marginTop, outlineWidth, padding, paddingBottom, paddingLeft, paddingRight, paddingTop, height, width, maxHeight, maxWidth, minHeight, maxWidth, font, fontSize, bottom, left, right, top, letterSpacing, wordSpacing, lineHeight, textIndent, opacity 应用场景：所有</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "hoverNode执行css动画的节点；cssValueOne和cssValueTwo数组对象；timerOne和timerTwo为时间值",
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
    "groupTitle": "module_function"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "marqueeLeft()",
    "name": "marqueeLeft",
    "group": "module_function",
    "description": "<p>function：向左移动 <br>description：可应用于图片类模块。</p>",
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
    "groupTitle": "module_function"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "middle()",
    "name": "middle",
    "group": "module_function",
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
    "groupTitle": "module_function"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "moveNode()",
    "name": "moveNode",
    "group": "module_function",
    "description": "<p>function： 移动节点 <br>description：点击左右箭头移动节点，可移动单个节点，也可移动一屏节点，可左右移动，也可左右循环移动 note：如果是移动一屏，则需要的节点总数量必须为每一屏可显示的整数倍；如果是循环切换，disabled参数可不用。</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "moveNode需要移动的节点；arrowPrev左箭头；arrowNext右箭头；disabled箭头不可用样式；showNum一屏显示数量，可传入正确的一屏数量，没传则程序计算；\ncssValue改变的css属性名；isLoop是否循环，默认为真；isScreen是否是移动一屏，默认为真；timer每一次移动的时间，默认为1，值取0-4之间。",
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
    "groupTitle": "module_function"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "movePhoto()",
    "name": "movePhoto",
    "group": "module_function",
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
    "groupTitle": "module_function"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "notity()",
    "name": "notity",
    "group": "module_function",
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
    "groupTitle": "module_function"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "operateNode()",
    "name": "operateNode",
    "group": "module_function",
    "description": "<p>function：操作节点：通过不同的条件，调用不同的方法，查找对象里面的某一个或一些节点，并对这些节点做操作，默认为增加一个样式。 <br>description：可应用于任意模块，只要有使用场景。 operateNode为需要查找的节点；operateParentNode为查找节点的父级节点；defaultClass为默认样式名；length为每一行的节点个数；subFunction为此方法里面的子方法； number为数组对象，当使用getNode方法时，表示数组里面指定的节点，当使用getColumn方法时，表示指定的列节点。当使用getRow方法时，表示指定的行节点； callBack为函数体，参数接收一个节点对象，可在函数体里对接收的这个对象做操作。</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "如{operateNode:'li', operateParentNode:null, defaultClass:'jCurrent', length:0, subFunction:null, number:[], callBack:null}",
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
    "groupTitle": "module_function"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "positionLayout()",
    "name": "positionLayout",
    "group": "module_function",
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
    "groupTitle": "module_function"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "removeBg()",
    "name": "removeBg",
    "group": "module_function",
    "description": "<p>给每行最后一个节点增加样式：主要应用在每一行有多个节点，并且想给最后一个节点如改变背景、边框等</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "如{node:'li', defaultClass:'noBg'}。\n参数node为单个节点名；参数defaultClass可任意命名，只要css里面有这个名字。",
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
    "groupTitle": "module_function"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "renderHTML()",
    "name": "renderHTML",
    "group": "module_function",
    "description": "<p>function: 简单模板渲染 <br>description：根据html模板及数据拼接html片段 应用场景：任意</p>",
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
    "groupTitle": "module_function"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "rid()",
    "name": "rid",
    "group": "module_function",
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
    "groupTitle": "module_function"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "ridLazy()",
    "name": "ridLazy",
    "group": "module_function",
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
    "groupTitle": "module_function"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "saleAttent()",
    "name": "saleAttent",
    "group": "module_function",
    "description": "<p>function：关注 <br>description：活动关注、店铺关注、商品关注，依赖module/utils.js</p>",
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
    "groupTitle": "module_function"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "seamlessScroll()",
    "name": "seamlessScroll",
    "group": "module_function",
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
    "groupTitle": "module_function"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "showAppPriceCoupon()",
    "name": "showAppPriceCoupon",
    "group": "module_function",
    "description": "<p>显示App专享价及相对于京东价的优惠金额</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "\tparam param.jdPriceNode     京东价格节点选择器\n    param param.appPriceNode    app价格节点选择器\n    param param.couponPriceNode 优惠额度节点选择器\n    param param.couponType      优惠额度计算类型，1：算优惠了多少金额（京东价 - App专享价），2：算相当于打了几折（App专享价 / 京东价10）\n    param param.skuAttName      价格节点上的sku标示\n    param param.itemNode        单个sku最外层的节点\n    param param.noAppPriceClass 没有app专享价时给itemNode添加的样式",
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
    "groupTitle": "module_function"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "showNode()",
    "name": "showNode",
    "group": "module_function",
    "description": "<p>function：显示节点：触发一个元素，根据设定的数量按先后顺序显示元素 <br>description：可应用于任意模块，只要有使用场景。 par为被显示元素的父级元素；node被显示元素；btn触发元素；pageNum每一次显示数量；className被显示元素增加的class名</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "如{par : '.jSaleAttention20150423-1', node : 'li', btn : '.jBtn', pageNum : 10, className : 'current'}",
        "type": "json"
      },
      {
        "title": "code",
        "content": "showNode : function(args){\n    var _this = this,\n        param = jQuery.extend({\n        par : '.jSaleAttention20150423-1',\n        node : 'li',\n        btn : '.jBtn',\n        pageNum : 10,\n        className : 'current'\n     }, args || {}),\n        par = jQuery(param.par),\n        node = jQuery(_this).find(param.node),\n        btn = jQuery(_this).find(param.btn),\n        index = 0,\n        pageTotal = Math.ceil(node.length/param.pageNum);\n\n    function showData(){\n        node.removeClass(param.className);\n        for(var i = index*param.pageNum; i <= index*param.pageNum +param.pageNum - 1; i+=1){\n            node.eq(i).addClass(param.className);\n        }\n    }\n    showData();\n\n    btn.click(function(){\n        if((index+1) == pageTotal) {\n            index = 0;\n        }else{\n            index +=1;\n        }\n        showData();\n    });\n    },\n    countdown : (function(){\n        var timer = null,\n            countList = [],\n            sysTime = 0;\n       return function(arg){\n            var that = this,\n                args = $.extend({\n                    hasDay : true,\n                    dayCnt : '.days',\n                    hourCnt : 'hours',\n                    minuteCnt : '.minutes',\n                    secondCnt : '.seconds'\n                },arg || {}),\n                cutTime = [];\n\n            function init(){\n                if(!args.countdownInfo)return;\n\n                getCutTime();\n                $(that).data('cutTime',cutTime).data('arg',args);\n                setTimeout(function(){\n                    countList = $('[module-function*=\"countdown\"]').toArray();\n                },0);\n                if(!timer){\n                    getServerTime(function(data){\n                        sysTime = new Date() - data;\n                        count();\n                    });\n                }\n            }\n\n            function timeStrHandler(str){\n                var rowTemp = str.split(' '),\n                    inplicit = rowTemp[0].split('-'),\n                    explicit = rowTemp[1].split(':');\n               return new Date(Number(inplicit[0]),(Number(inplicit[1]) + 11)%12,Number(inplicit[2]),Number(explicit[0]),Number(explicit[1]),Number(explicit[2]));\n            }\n\n            function getCutTime(){\n                var temp = args.countdownInfo;\n                if(temp.constructor == String){\n                    cutTime.push(timeStrHandler(temp));\n                }\n                else{\n                    $.each(temp,function(index,data){\n                        cutTime.push(timeStrHandler(data));\n                    });\n                }\n            }\n\n            function count(){\n                timer = setInterval(function(){\n                    for(var i = 0, len = countList.length; i < len; i++){\n                        var item = $(countList[i]),\n                            cT = item.data('cutTime'),\n                            options = item.data('arg'),\n                            leftTime = parseInt((cT[0] - new Date() + sysTime)/1000);\n                        if(leftTime < 0){\n                            cT.shift();\n                            if(cT.length === 0){\n                                countList.splice(i,1);\n                                len -- ;\n                                i--;\n                            }\n                            else{\n                                item.data('cutTime',cT);\n                            }\n                            item.closest('[module-name]').trigger('countdownchange');\n                        }\n                        else{\n                            var day = Math.floor(leftTime/(24*3600)),\n                                hour = Math.floor(leftTime/3600) - (options.hasDay?day*24 : 0),\n                                minute = Math.floor(leftTime%3600/60),\n                                second = leftTime%60;\n\n                            if(options.hasDay){\n                                item.find(options.dayCnt).html(day > 9?day : '0' + day);\n                            }\n\n                            item.find(options.hourCnt).html(hour > 9?hour : '0' + hour);\n                            item.find(options.minuteCnt).html(minute > 9?minute : '0' + minute);\n                            item.find(options.secondCnt).html(second > 9?second : '0' + second);\n                        }\n                    }\n                },1000);\n            }\n\n            init();\n        };\n    })(),\n\n    loop : function(arg){\n        var that = this,\n        root = $(that),\n        options = $.extend({\n            auto : false,\n            next : '.next',\n            prev : '.prev',\n            container : '.con',\n            item : '.item'\n        },arg),\n        container = root.find(options.container),\n        itemWidth = 0,\n        total = 0,\n        animating = false,\n        index = 0,step = 1,\n        itemContainer = null,\n        duration = options.duration || 1000;\n\n        function css(){\n            container.css({\n                overflow : 'hidden',\n                position : 'relative'\n            });\n            root.find(options.item).css('float','left');\n        }\n\n        function dom(){\n            var html = container.html(),\n                height = options.height || container.height();\n            root.find(options.item).remove();\n            container.height(height);\n            itemContainer = $('<div></div>').prependTo(container).css({\n                width : (total + 2*step)*itemWidth,\n                height : height,\n                position : 'absolute',\n                left : 0,\n                top :0\n            }).html(html);\n            if(options.conCls){\n                itemContainer.addClass(options.conCls);\n            }\n            var node = root.find(options.item);\n            for(var i = total - 1, little = total - step; i >= little; i--){\n                node.eq(i).clone(true).prependTo(itemContainer);\n            }\n            for(var i = 0;i < step; i++){\n                node.eq(i).clone(true).appendTo(itemContainer);\n            }\n            itemContainer.css('left',-step*itemWidth);\n        }\n\n        function event(){\n            root.find(options.next).click(function(){\n                if(animating)return;\n                animating = true;\n                index += step;\n                itemContainer.animate({\n                    left : -index*itemWidth\n                },duration,function(){\n                    if(index >= total + step){\n                        index = index - total;\n                        itemContainer.css('left',-(index)*itemWidth);\n                    }\n                    animating = false;\n                });\n            });\n\n            root.find(options.prev).click(function(){\n                if(animating)return;\n                animating = true;\n                index -= step;\n                itemContainer.animate({\n                    left : -index*itemWidth\n                },duration,function(){\n                    if(index < step){\n                        index = index + total;\n                        itemContainer.css('left',-index*itemWidth);\n                    }\n                    animating = false;\n                });\n            });\n\n            if(options.eventType){\n                root.find(options.item).each(function(index,n){\n                    $(n)[options.eventType](function(){\n                        options.handle(n,index,step);\n                    });\n                });\n            }\n\n        }\n\n        function init(){\n            css();\n            if(!root.find(options.item).length)return;\n            step = Math.ceil(container.width()/root.find(options.item).outerWidth(true));\n            itemWidth = root.find(options.item).outerWidth(true);\n            total = root.find(options.item).length;\n            index = step;\n            if(root.find(options.item).length < step)return;\n            dom();\n            event();\n        }\n\n        init();\n    }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "module_function"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "slide()",
    "name": "slide",
    "group": "module_function",
    "description": "<p>none</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "none",
        "type": "json"
      },
      {
        "title": "code",
        "content": "slide:function(args){\n        // 定义传入的CSS调用变量\n        var _this=this,\n            param=$.extend({imgArea:'.jbannerImg', imgNodeArea:'.jImgNodeArea', imgNode:'.jbannerImg li', tabArea:'.jbannerTab', tabNode:'.jbannerTab span', arrowLeft:'.jPreOut', arrowRight:'.jNextOut', arrowLeftOver:'jPreOver', arrowRightOver:'jNextOver', defaultClass:'show', slideDirection:'left', timer:'3', subFunction:'transparentEffect', eventType:'click',showArrow:1, isCircular:false, isTabAvailable:true, isHoverStop:true}, args),\n            imgArea = $(_this).find(param.imgArea),\n            imgNode = $(_this).find(param.imgNode),\n            tabArea = $(_this).find(param.tabArea),\n            tabNode = $(_this).find(param.tabNode),\n            defaultClass = param.defaultClass,\n            eventType = param.eventType,\n            timer = !param.timer*1000?3000:param.timer*1000,\n            scroll,\n            ul = $(_this).find(param.imgNodeArea + '>ul'),\n            imgNodeArea = $(_this).find(param.imgNodeArea),\n            isFull = param.isFull;\n\n        //全局变量\n        var index = 0,direction = 1,time = null,moveRange = 0,partTime = null,animate = null,enterFlag = false;\n        if(!imgNode.length)return;\n        jshop.module.ridLazy($(_this));\n\n        //是否鼠标移动到内容区域时，停止轮播\n        if(param.isHoverStop){\n            imgArea.bind({\n                mouseenter:function(){\n                    enterFlag = true;\n                    _stop();\n                },\n                mouseleave:function(){\n                    enterFlag = false;\n                    time = setTimeout(imgMove, timer);\n                }\n            });\n        }\n\n        /**\n        轮播图所有效果\n        \n        var banner = {\n            transparentEffect : function(){\n                //初始化\n                $(_this).css({'background-color':imgNode.eq(index).attr('background')});\n\n                // 调用函数\n                init();\n                if(param.isTabAvailable){triggerThumbnail();}//如果切换切点可用\n                triggerDirection();\n                if(param.showArrow!=1){triggerArrow();}\n                animate = transparent;\n                time = setTimeout(imgMove, timer);\n            },\n            moveEffect : function(){\n                var isTop = (param.slideDirection == 'top')?true:false;\n                scroll = (isTop)?\"scrollTop\":\"scrollLeft\";\n\n                //初始化\n                $(_this).css({'background-color':imgNode.eq(index).attr('background')});\n                if(isTop){\n                    imgNodeArea.css({height:20000});\n                    imgNode.css({width:imgNode.attr(\"width\"),height:imgNode.attr(\"height\")});\n                    moveRange = imgNode.height();\n                    imgArea[0][scroll] = indexmoveRange;\n                }else{\n                    imgNodeArea.css({width:20000});\n                    imgNode.css({width:imgNode.attr(\"width\"),height:imgNode.attr(\"height\"),'float':\"left\"});//将这个宽度写在css里，在ie6下面，获取到的父级宽度是被这个元素撑开的宽度\n                    moveRange = imgNode.width();\n                    imgArea[0][scroll] = indexmoveRange;\n                };\n\n                // 调用函数\n                init();\n                if(param.isTabAvailable){triggerThumbnail();}//如果切换切点可用\n                triggerDirection();\n                if(param.showArrow!=1){triggerArrow();}\n                animate = oneImgMove;\n                time = setTimeout(imgMove, timer);\n            }\n        };\n\n        /**\n        根据传入的子方法名执行对应的子方法\n        \n        if(banner[param.subFunction])\n            banner[param.subFunction].call(_this);\n\n        /**\n        轮播图初始化\n        \n        function init(){\n            imgArea.css({width:imgNode.attr(\"width\"),height:imgNode.attr(\"height\")});\n            imgNode.eq(0).addClass(defaultClass);\n            tabNode.eq(0).addClass(defaultClass);\n            autoMiddle();\n            $(window).resize(function(){\n                autoMiddle();\n            });\n        }\n\n        /**\n        轮播图自适应居中于屏幕中间\n        \n        function autoMiddle(){\n            var extra = imgArea.width()-$(_this).width();\n            if(extra>0){\n                imgArea.css({'margin-left':-extra/2});\n            }else{\n                imgArea.css('margin','0 auto');\n            }\n        }\n\n        /**\n        给每个tab缩略图绑定事件\n        \n        function triggerThumbnail(){\n            tabNode.each(function(i,elem){\n                $(elem)[eventType](function(){\n                    imgNode.eq(index).removeClass(defaultClass);\n                    tabNode.eq(index).removeClass(defaultClass);\n                    index = i;\n                    imgNode.eq(index).addClass(defaultClass);\n                    tabNode.eq(index).addClass(defaultClass);\n                    animate();\n                   return false;\n                });\n            });\n        }\n\n        /**\n        点击箭头或数字时，重置时间\n        \n        function _stop(){\n            clearTimeout(time);\n            time = null;\n            //clearTimeout(partTime);\n            //partTime = null;\n            ul.clearQueue();\n            imgNode.eq(index).clearQueue();\n        }\n\n        /**\n        切换图片和缩略图\n        \n        function imgMove(){\n            //判断是否是圆形循环，只支持渐变方式\n            if(param.isCircular){\n                if (index < imgNode.length - 1){\n                    classOper([imgNode,tabNode],defaultClass,true);\n                }else{\n                    index = -1;\n                    classOper([imgNode,tabNode],defaultClass,true);\n\n                }\n            }else{\n                if (direction == 1){\n                    if (index < imgNode.length - 1){\n                        classOper([imgNode,tabNode],defaultClass,true);\n                    }else{\n                        direction = 0;\n                        classOper([imgNode,tabNode],defaultClass,false);\n                    }\n                }else{\n                    if (index > 0){\n                        classOper([imgNode,tabNode],defaultClass,false);\n                    }else{\n                        direction = 1;\n                        classOper([imgNode,tabNode],defaultClass,true);\n                    }\n                }\n            }\n            animate();\n        }\n\n        /**\n        鼠标移动显示左右移动箭头\n        \n        function triggerArrow(){\n            var arrowLeft = $(_this).find(param.arrowLeft),arrowRight = $(_this).find(param.arrowRight);\n            $(_this).bind({\n                mouseover:function(){\n                    arrowLeft.show();\n                    arrowRight.show();\n                },\n                mouseout:function(){\n                    arrowLeft.hide();\n                    arrowRight.hide();\n                }\n             });\n        }\n\n        /**\n        处理左右移动箭头\n        \n        function triggerDirection(){\n            var arrowLeft = $(_this).find(param.arrowLeft),arrowRight = $(_this).find(param.arrowRight),\n                arrowLeftOver = param.arrowLeftOver, arrowRightOver = param.arrowRightOver;\n\n            arrowLeft.bind({\n                click:function(){\n                    if(index != 0){// 判断当前是不是第一张\n                        classOper([imgNode,tabNode],defaultClass,false);\n                        animate();\n                    }else{\n                        //判断是否是圆形循环，只支持渐变方式\n                        if(param.isCircular){\n                            classOper([imgNode,tabNode],defaultClass,false);\n                            index = imgNode.length;\n                            classOper([imgNode,tabNode],defaultClass,false);\n                            animate();\n                        }\n                    }\n                   return false;\n                },\n                mouseover:function(){$(this).addClass(arrowLeftOver);},\n                mouseout:function(){$(this).removeClass(arrowLeftOver);}\n            });\n            arrowRight.bind({\n                click:function(){\n                    if(index < imgNode.length - 1){// 判断当前是不是最后一张\n                        classOper([imgNode,tabNode],defaultClass,true);\n                        animate();\n                    }else{\n                        //判断是否是圆形循环，只支持渐变方式\n                        if(param.isCircular){\n                            index = -1;\n                            classOper([imgNode,tabNode],defaultClass,true);\n                            animate();\n                        }\n                    }\n                   return false;\n                },\n                mouseover:function(){$(this).addClass(arrowRightOver);},\n                mouseout:function(){$(this).removeClass(arrowRightOver);}\n            });\n        }\n\n        /**\n        透明效果\n        \n        function transparent(){\n            imgNode.animate({\n                opacity: 0\n              }, 0, function() {\n              });\n            $(_this).css({'background-color':imgNode.eq(index).attr('background')});\n            imgNode.eq(index).animate({\n                opacity: 1\n              }, 1000, function() {\n                  _stop();\n                  if(enterFlag)return;\n                  time = setTimeout(imgMove, timer);\n              });\n\n        }\n\n        /**\n        移动效果：每一张图片分10次移动\n        \n        function oneImgMove(){\n            var nowMoveRange = (indexmoveRange) - imgArea[0][scroll],\n            partImgRange = nowMoveRange > 0 ? Math.ceil(nowMoveRange / 10) : Math.floor(nowMoveRange / 10);\n            imgArea[0][scroll] += partImgRange;\n            if (partImgRange == 0){\n                imgNode.eq(index).addClass(defaultClass);\n                tabNode.eq(index).addClass(defaultClass);\n                partImgRange = null;\n                _stop();\n                if(!enterFlag)\n                    time = setTimeout(imgMove, timer);\n            }\n            else{\n                partTime = setTimeout(oneImgMove,30);\n            }\n            $(_this).css({'background-color':imgNode.eq(index).attr('background')});\n        }\n\n        /**\n        节点css类名操作\n        \n        function classOper(arr,className,flag){\n            arr.each(function(ind,n){\n                n.eq(index).removeClass(className);\n            });\n            flag?(index++):(index--);\n            arr.each(function(ind,n){\n                n.eq(index).addClass(className);\n            });\n        }\n    }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "input/test.js",
    "groupTitle": "module_function"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "tab()",
    "name": "tab",
    "group": "module_function",
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
    "groupTitle": "module_function"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "tabClass()",
    "name": "tabClass",
    "group": "module_function",
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
    "groupTitle": "module_function"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "tabShow()",
    "name": "tabShow",
    "group": "module_function",
    "description": "<p>function：切换显示：通过触发一个元素，切换其他元素的显示。可选择闭环切换、前进后退及随机切换显示。 <br>description：可应用于任意模块，只要有使用场景。 eventNode触发切换的节点；<br>parent切换节点的父节点；<br>child切换节点；<br>defaultClass显示样式；<br>eventType触发的事件类型； <br>num初始显示第几个；<br>tabTime每一屏切换的时间；<br>subFunction显示方式：<br>闭环circle、前进倒退direction、随机random；</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "如{eventNode:'.jClick', parentNode:'.jSortContent', childNode:'ul', defaultClass:'current', eventType:'click', num:0, tabTime:500, subFunction:'circle'}",
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
    "groupTitle": "module_function"
  },
  {
    "type": "data",
    "url": "http://active.coupon.jd.com/ilink/couponActiveFront/ifram_index.action?key=79566ba7fcee44e8924a4354cdeda7ce&roleId=1422862&to=sale.jd.com/act/syji8khazyfjwluq.html",
    "title": "userGetCoupon()",
    "name": "userGetCoupon",
    "group": "module_function",
    "description": "<p>function：优惠券iframe调用 <br>description：支持module-function调用（里面除A链接外每一个结构上设置伪属性data-href）；a链接调用需在href里填写javascript:void(0) 应用场景：公用调用（采用module-function方式）；a链接调用；优惠券iframe方法由高铁gaotie@jd.com提供</p>",
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
    "groupTitle": "module_function"
  },
  {
    "type": "JSHOP",
    "url": "none",
    "title": "waterfallFlow()",
    "name": "waterfallFlow",
    "group": "module_function",
    "description": "<p>瀑布流：主要应用在商品列表图片交错布局，就像瀑布一样</p>",
    "examples": [
      {
        "title": "module-param",
        "content": "如{node:'li', topSpac:15}。\n参数node为单个节点名；参数topSpac为第一行与顶部的距离",
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
    "groupTitle": "module_function"
  }
] });
