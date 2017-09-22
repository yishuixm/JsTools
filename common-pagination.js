/**
 * 分页插件
 */

(function ($) {
    var pagination = function (config) {
        config.total = config.total || 0;
        config.size = config.size || 10;
        config.page = config.page || 0;

        return {
            innerHTML: '', // 内部HTML代码
            isFirst: false, // 是否显示首页
            isEnd: false, // 是否显示尾页
            previousText: '上一页', // 上一页名称
            nextText: '下一页', // 下一页名称
            firstText: '首页', // 首页文本
            endText: '尾页', // 尾页文本
            max: 10, // 最大页码个数
            total: 0, // 总条数
            size: 10, // 每页条数
            pages: 0, // 总页数
            page: 1, // 当前页码
            activeClass: 'active' // 当前页的class名

            init: function () { // 初始化分布数据
                this.total = config.total;
                this.size = config.size;
                this.page = config.page;
                this.pages = Math.ceil(this.total / this.size);
                this.queryString = config.queryString;  // 界面传入的GET参数 JSON 格式
                this.activeClass = config.activeClass || 'active';
                this.previousText = config.previousText || '上一页';
                this.nextText = config.nextText || '下一页';
                this.firstText = config.firstText || '首页';
                this.endText = config.endText || '尾页';
                this.isFirst = config.isFirst || false;
                this.isEnd = config.isEnd || false;

                var qsStr = '';
                for (qsIndex in this.queryString) {
                    if (qsStr != '') qsStr += '&';
                    if (qsIndex != 'page') {
                        qsStr += qsIndex + '=' + this.queryString[qsIndex];
                    }
                }

                if(this.isFirst){
                  var href = qsStr;
                  if (href != '') href += '&';
                  href += 'page=1';
                  this.innerHTML += '<li ' + (this.page == page ? 'class="' + this.activeClass + '"' : '') + '><a href="?' + href + '">' + this.firstText + '</a></li>';
                }

                if(this.page > 1){
                    var href = qsStr;
                    if (href != '') href += '&';
                    href += 'page=' + eval(this.page - 1);
                    this.innerHTML += '<li ' + (this.page == page ? 'class="' + this.activeClass + '"' : '') + '><a href="?' + href + '">' + this.previousText + '</a></li>';
                }

                var page = this.page - Math.ceil(this.max / 2);
                if(this.pages <= page+10){
                    page -= page + 10 - this.pages - 1;
                }
                if(page < 1) page = 1;
                for (var i = 0; i < this.max; i++) {
                    var href = qsStr;
                    if(page > this.pages){
                        break;
                    }
                    if (href != '') href += '&';
                    href += 'page=' + page;
                    this.innerHTML += '<li ' + (this.page == page ? 'class="' + this.activeClass + '"' : '') + '><a href="?' + href + '">' + page + '</a></li>';
                    page = page + 1;
                }

                if(this.page < this.pages){
                    var href = qsStr;
                    if (href != '') href += '&';
                    href += 'page=' + eval(this.page + 1);
                    this.innerHTML += '<li ' + (this.page == page ? 'class="' + this.activeClass + '"' : '') + '><a href="?' + href + '">' + this.nextText + '</a></li>';
                }

                if(this.isEnd){
                  var href = qsStr;
                  if (href != '') href += '&';
                  href += 'page=' + eval(this.pages);
                  this.innerHTML += '<li ' + (this.page == page ? 'class="' + this.activeClass + '"' : '') + '><a href="?' + href + '">' + this.endText + '</a></li>';
                }
            },
            html: function () { // 显示分页
                return this.innerHTML
            }
        }
    }

    $.fn.extend({
        pagination: function (config, callback) {
            config = config || {};
            var page = pagination(config);
            page.init();
            $(this).html(page.html());

            $(this).on('click', 'a', function(e){
              callback(sender, e);
            })
        }
    });
})(window.jQuery)
