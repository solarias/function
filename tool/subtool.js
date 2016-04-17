
//=================================================================================================================
//※ 함수 - 하위 브라우저 호환
//=================================================================================================================
//indexOf 호환용 (대상 : IE8)
if (!Array.prototype.indexOf)
{
  Array.prototype.indexOf = function(elt /*, from*/)
  {
    var len = this.length >>> 0;

    var from = Number(arguments[1]) || 0;
    from = (from < 0)
         ? Math.ceil(from)
         : Math.floor(from);
    if (from < 0)
      from += len;

    for (; from < len; from++)
    {
      if (from in this &&
          this[from] === elt)
        return from;
    }
    return -1;
  };
}

//trim 호환용 (대상 : IE8)
if(typeof String.prototype.trim !== 'function') {
    String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g, '');
    };
}

//classList 호환용 (대상 : IE8, IE9)
/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */
if("document" in self){if(!("classList" in document.createElement("_"))){(function(j){"use strict";if(!("Element" in j)){return}var a="classList",f="prototype",m=j.Element[f],b=Object,k=String[f].trim||function(){return this.replace(/^\s+|\s+$/g,"")},c=Array[f].indexOf||function(q){var p=0,o=this.length;for(;p<o;p++){if(p in this&&this[p]===q){return p}}return -1},n=function(o,p){this.name=o;this.code=DOMException[o];this.message=p},g=function(p,o){if(o===""){throw new n("SYNTAX_ERR","An invalid or illegal string was specified")}if(/\s/.test(o)){throw new n("INVALID_CHARACTER_ERR","String contains an invalid character")}return c.call(p,o)},d=function(s){var r=k.call(s.getAttribute("class")||""),q=r?r.split(/\s+/):[],p=0,o=q.length;for(;p<o;p++){this.push(q[p])}this._updateClassName=function(){s.setAttribute("class",this.toString())}},e=d[f]=[],i=function(){return new d(this)};n[f]=Error[f];e.item=function(o){return this[o]||null};e.contains=function(o){o+="";return g(this,o)!==-1};e.add=function(){var s=arguments,r=0,p=s.length,q,o=false;do{q=s[r]+"";if(g(this,q)===-1){this.push(q);o=true}}while(++r<p);if(o){this._updateClassName()}};e.remove=function(){var t=arguments,s=0,p=t.length,r,o=false,q;do{r=t[s]+"";q=g(this,r);while(q!==-1){this.splice(q,1);o=true;q=g(this,r)}}while(++s<p);if(o){this._updateClassName()}};e.toggle=function(p,q){p+="";var o=this.contains(p),r=o?q!==true&&"remove":q!==false&&"add";if(r){this[r](p)}if(q===true||q===false){return q}else{return !o}};e.toString=function(){return this.join(" ")};if(b.defineProperty){var l={get:i,enumerable:true,configurable:true};try{b.defineProperty(m,a,l)}catch(h){if(h.number===-2146823252){l.enumerable=false;b.defineProperty(m,a,l)}}}else{if(b[f].__defineGetter__){m.__defineGetter__(a,i)}}}(self))}else{(function(){var b=document.createElement("_");b.classList.add("c1","c2");if(!b.classList.contains("c2")){var c=function(e){var d=DOMTokenList.prototype[e];DOMTokenList.prototype[e]=function(h){var g,f=arguments.length;for(g=0;g<f;g++){h=arguments[g];d.call(this,h)}}};c("add");c("remove")}b.classList.toggle("c3",false);if(b.classList.contains("c3")){var a=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(d,e){if(1 in arguments&&!this.contains(d)===!e){return e}else{return a.call(this,d)}}}b=null}())}};

//getComputedStyle 호환용 (대상 : IE8)
!('getComputedStyle' in this) && (this.getComputedStyle=(function (){function getPixelSize(element, style, property, fontSize){varsizeWithSuffix=style[property],size=parseFloat(sizeWithSuffix),suffix=sizeWithSuffix.split(/\d/)[0],rootSize;fontSize=fontSize !=null ? fontSize : /%|em/.test(suffix) && element.parentElement ? getPixelSize(element.parentElement, element.parentElement.currentStyle, 'fontSize', null) : 16;rootSize=property=='fontSize' ? fontSize : /width/i.test(property) ? element.clientWidth : element.clientHeight;return (suffix=='em') ? size * fontSize : (suffix=='in') ? size * 96 : (suffix=='pt') ? size * 96 / 72 : (suffix=='%') ? size / 100 * rootSize : size;}function setShortStyleProperty(style, property){varborderSuffix=property=='border' ? 'Width' : '',t=property + 'Top' + borderSuffix,r=property + 'Right' + borderSuffix,b=property + 'Bottom' + borderSuffix,l=property + 'Left' + borderSuffix;style[property]=(style[t]==style[r]==style[b]==style[l] ? [style[t]]: style[t]==style[b] && style[l]==style[r] ? [style[t], style[r]]: style[l]==style[r] ? [style[t], style[r], style[b]]: [style[t], style[r], style[b], style[l]]).join(' ');}function CSSStyleDeclaration(element){varcurrentStyle=element.currentStyle,style=this,fontSize=getPixelSize(element, currentStyle, 'fontSize', null);for (property in currentStyle){if (/width|height|margin.|padding.|border.+W/.test(property) && style[property] !=='auto'){style[property]=getPixelSize(element, currentStyle, property, fontSize) + 'px';}else if (property==='styleFloat'){style['float']=currentStyle[property];}else{style[property]=currentStyle[property];}}setShortStyleProperty(style, 'margin');setShortStyleProperty(style, 'padding');setShortStyleProperty(style, 'border');style.fontSize=fontSize + 'px';return style;}CSSStyleDeclaration.prototype={constructor: CSSStyleDeclaration,getPropertyPriority: function (){},getPropertyValue: function ( prop ){return this[prop] || '';},item: function (){},removeProperty: function (){},setProperty: function (){},getPropertyCSSValue: function (){}};function getComputedStyle(element){return new CSSStyleDeclaration(element);}return getComputedStyle;})(this));
//=================================================================================================================
//※ 함수 - Type 1 (기존 개체에 추가)
//=================================================================================================================
//배열 최대치&최소치 함수
Array.prototype.max = function() {
  return Math.max.apply(null, this);
};
Array.prototype.min = function() {
  return Math.min.apply(null, this);
};

//=================================================================================================================
//※ 함수 - Type 2 (개별 작동)
//=================================================================================================================
    //DOM 선택자
    function $(parameter) {
        return document.querySelector(parameter);
    }
    function $$(parameter) {
        return document.querySelectorAll(parameter);
    }


    //=================================================================================================================
    //※ 구조물 조절
    //=================================================================================================================
    //배열&오브젝트 복제
    function deepCopy (dupeObj) {
        var retObj = new Object();
        if (typeof(dupeObj) == 'object') {
            if (typeof(dupeObj.length) != 'undefined')
                var retObj = new Array();
            for (var objInd in dupeObj) {
                if (typeof(dupeObj[objInd]) == 'object') {
                    retObj[objInd] = deepCopy(dupeObj[objInd]);
                } else if (typeof(dupeObj[objInd]) == 'string') {
                    retObj[objInd] = dupeObj[objInd];
                } else if (typeof(dupeObj[objInd]) == 'number') {
                    retObj[objInd] = dupeObj[objInd];
                } else if (typeof(dupeObj[objInd]) == 'boolean') {
                    ((dupeObj[objInd] == true) ? retObj[objInd] = true : retObj[objInd] = false);
                }
            }
        }
        return retObj;
    }

    //배열 셔플
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex ;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }


    //=================================================================================================================
    //※ 수 관련
    //=================================================================================================================
    //천단위 콤마 표시 (출처 : http://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript)
    function thousand(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    //가중치 적용 랜덤
    function rand(target) {//target : 숫자가 들어있는 배열
        var number = 0;
        for (i=0;i<target.length;i++) {
            number += target[i];
        }
        var tmp = Math.random() * number;

        number = 0;
        for (i=0;i<target.length;i++) {
            number += target[i];
            if (tmp < number) {
                return i;
            }
        }
    }

    //만단위 한글로 전환 (출처 : http://kin.naver.com/qna/detail.nhn?d1id=1&dirId=1040202&docId=159019083&qb=amF2YXNjcmlwdCDsiKvsnpAgNOuLqOychCDtlZzquIA=&enc=utf8&section=kin&rank=2&search_sort=0&spq=0&pid=R6VWNc5Y7vKssb7f6YZsssssssd-312648&sid=UKssqHJvLDEAAC0QENA)
    function setWon(pWon) {
        var won  = pWon.toString();
        var arrWon  = ["", "만 ", "억 ", "조 ", "경 ", "해 ", "자 ", "양 ", "구 ", "간 ", "정 "];
        var changeWon = "";
        var pattern = /(-?[0-9]+)([0-9]{4})/;
        while(pattern.test(won)) {
            won = won.replace(pattern,"$1,$2");
        }
        won = won + "";
        var arrCnt = won.split(",").length-1;
        for(var ii=0; ii<won.split(",").length; ii++) {
            changeWon += won.split(",")[ii]+arrWon[arrCnt];
            arrCnt--;
        }
        return changeWon;
    }

    //숫자인지 판단 (출처 : http://mwultong.blogspot.com/2007/01/isnum-isnumeric-isnumber-javascript.html)
    function isNumber(s) {
        s += ''; // 문자열로 변환
        s = s.replace(/^\s*|\s*$/g, ''); // 좌우 공백 제거
        if (s === '' || isNaN(s)) return false;
        return true;
    }


    //=================================================================================================================
    //※ 기타
    //=================================================================================================================
    //특정 select 비우기
    function clearSelect(selectbox)	{
        for (var i = selectbox.options.length-1;i>=0;i--) {
            selectbox.remove(i);
        }
    }