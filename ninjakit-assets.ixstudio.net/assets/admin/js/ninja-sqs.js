/*****-------[ General ]-------*****/
if (typeof jQuery === 'undefined') {
  var script = document.createElement('script');
  script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
  script.onload = function() {
    console.log('jQuery has been loaded.');
    // Your jQuery-dependent code here
    runjQueryCode();
  };
  document.head.appendChild(script);
} else {
  console.log('jQuery is already loaded.');
  runjQueryCode();
  // Your jQuery-dependent code here
}

function runjQueryCode(){
/*****-------[ Image Comparison ]-------*****/
$("div#ninja-elements.ix-block-ninja-custom-after-before").each(function() {
        var divisor = $(this).find("#divisor");
        var handle = $(this).find("#handle");
        var slider = $(this).find("#slider");
        $(slider).on("input", function() {
            x = $(slider).val() + "%";
            $(handle).css('left',x);
            $(divisor).width(x);
        });
    });

/*****-------[ Button ]-------*****/
$(document).ready(function () {
  /* Button type 2 */
  $('div[data-alignment$="ixBtnStyle02"] .sqs-block-button-element').append('<span></span>');
  /* Button type 8 */
  $('div[data-alignment$="ixBtnStyle08"] .sqs-block-button-element').append('<span></span>');
  /* Button type 11 */
  $('div[data-alignment$="ixBtnStyle11"] .sqs-block-button-element').append('<i class="fas fa-arrow-right"></i>');
	$('div[data-alignment$="ixBtnStyle11"] .sqs-block-button-element').closest('div.sqs-block.button-block.sqs-block-button').each(function(){
	x = $(this).find('div[class^="sqs-block-button-container"][data-alignment$="ixBtnStyle11"] .sqs-block-button-element');
	t = x.text();
	y = x.html('<span>'+t+'</span>'+'<i class="fas fa-arrow-right"></i>');
   });
  /*button type 12*/
	/*var text = $('#ix-button-12 .sqs-block.sqs-block-button .sqs-block-button-element').text();
	$("#ix-button-12 .sqs-block.sqs-block-button .sqs-block-button-element").html("<span id='ix-button-type-12-content'></div>").find("#ix-button-type-12-content:first").html(text);
  $('div[data-alignment$="ixBtnStyle12"] .sqs-block-button-element').append('<span></span>');
  */
});

/* Load Button Color */
$("div[data-button-size]").each(function() {
var ixBtnColor = $(this).attr('data-button-size').split(' ').pop();
    $(this).css("--ixbtncolor", ixBtnColor);  
})


/*****-------[ FAQ ]-------*****/

$("#ninja-elements.ix-block-ninja-custom-faq").each(function(){
    let dataTrig = $(this).find('.accordion__item h4');
    for (let i = 0; i < dataTrig.length; i ++) {
        let id = dataTrig[i].getAttribute('data-trig'),
            trigger = $(this).find('.accordion__item h4[data-trig="' + id + '"]'),
            content = $(this).find('.accordion__item > div[data-trig="' + id + '"]');
        trigger.on('click', function () {
            content.slideToggle(300);
            $(this).toggleClass('active');
            $(this).parent().toggleClass('active');
        })
    }
})


/*****-------[ Typewriter ]-------*****/
$('.ix-block-ninja-custom-typewriter').each(function() {
var typedpblock = "#" + $(this).parent().parent().attr("id");
function newTyped() {}
$(function () {
  var fontsize=$(typedpblock).find('span#typed').data("fontsize") + 'px';
  var fontsizemobile=$(typedpblock).find('span#typed').data("fontsize-mobile") + 'px';
  var fontweight=$(typedpblock).find('span#typed').data("fontweight");
  var writingtextfontweight=$(typedpblock).find('span#typed').data("writingtextfontweight") ;
  var writingtextfontweight2=$(typedpblock).find('span#typed').css('font-weight');
  var writingtextfontsize=$(typedpblock).find('span#typed').data("writingtextfontsize") + 'px';
  var writingtextfontsize2=$(typedpblock).find('span#typed').css('font-size');
  var writingtextfontsizemobile=$(typedpblock).find('span#typed').data("writingtextfontsize-mobile") + 'px';
  var writingtextcolor=$(typedpblock).find('span#typed').css("color");
    $(typedpblock).find("span#typed").css("font-size",writingtextfontsize);
    if(writingtextfontsizemobile !== 'undefinedpx'){
    $(typedpblock).find(".type-wrap").css("--ixTypeWriterFontSizeMobile", writingtextfontsizemobile);
  }
          if(writingtextfontsize !== 'undefinedpx'){
    $(typedpblock).find(".type-wrap").css("--ixTypeWriterCursorFontSize", writingtextfontsize);
      } else {
    $(typedpblock).find(".type-wrap").css("--ixTypeWriterCursorFontSize", writingtextfontsize2);
      }
       if(writingtextfontweight !== undefined){
    $(typedpblock).find(".type-wrap").css("--ixTypeWriterCursorFontWeight", writingtextfontweight);
      } else {
    $(typedpblock).find(".type-wrap").css("--ixTypeWriterCursorFontWeight", writingtextfontweight2);
      }
    $(typedpblock).find(".type-wrap").css("--ixTypeWriterCursorColor", writingtextcolor);
    $(typedpblock).find("span#typed").css("font-weight",writingtextfontweight);
    $(typedpblock).find("span.typed-cursor").css("font-weight",);
    $(typedpblock).find("span#before_typed").css("font-size",fontsize);
    $(typedpblock).find("span#after_typed").css("font-size",fontsize);
    if(fontsizemobile !== 'undefinedpx'){
    // $(typedpblock).find(".type-wrap").css("--ixFontSizeMobile", fontsizemobile);
  }
    $(typedpblock).find("span#before_typed").css("font-weight",fontweight);
    $(typedpblock).find("span#after_typed").css("font-weight",fontweight);
    $(typedpblock).find('span#typed').typed({
        stringsElement: $(typedpblock).find("#typed-strings"),
        typeSpeed:parseInt($(typedpblock).find('span#typed').data("speed")),
        backDelay: parseInt($(typedpblock).find('span#typed').data("backdelay")),
        loop: $(typedpblock).find('span#typed').data("loop"),
        contentType: "html",
      //  loopCount: parseInt($(typedpblock).find('span#typed').attr("data-loopcount")),
        callback: function () {},
        resetCallback: function () {
            newTyped();
        },
    });
});
});






// The MIT License (MIT)

// Typed.js | Copyright (c) 2016 Matt Boldt | www.mattboldt.com

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

!(function ($) {
  "use strict";

  var Typed = function (el, options) {
    // chosen element to manipulate text
    this.el = $(el);

    // options
    this.options = $.extend({}, $.fn.typed.defaults, options);

    // attribute to type into
    this.isInput = this.el.is("input");
    this.attr = this.options.attr;

    // show cursor
    this.showCursor = this.isInput ? false : this.options.showCursor;

    // text content of element
    this.elContent = this.attr ? this.el.attr(this.attr) : this.el.text();

    // html or plain text
    this.contentType = this.options.contentType;

    // typing speed
    this.typeSpeed = this.options.typeSpeed;

    // add a delay before typing starts
    this.startDelay = this.options.startDelay;

    // backspacing speed
    this.backSpeed = this.options.backSpeed;

    // amount of time to wait before backspacing
    this.backDelay = this.options.backDelay;

    // div containing strings
    this.stringsElement = this.options.stringsElement;

    // input strings of text
    this.strings = this.options.strings;

    // character number position of current string
    this.strPos = 0;

    // current array position
    this.arrayPos = 0;

    // number to stop backspacing on.
    // default 0, can change depending on how many chars
    // you want to remove at the time
    this.stopNum = 0;

    // Looping logic
    this.loop = this.options.loop;
    this.loopCount = this.options.loopCount;
    this.curLoop = 0;

    // for stopping
    this.stop = false;

    // custom cursor
    this.cursorChar = this.options.cursorChar;

    // shuffle the strings
    this.shuffle = this.options.shuffle;
    // the order of strings
    this.sequence = [];

    // All systems go!
    this.build();
  };

  Typed.prototype = {
    constructor: Typed,

    init: function () {
      // begin the loop w/ first current string (global self.strings)
      // current string will be passed as an argument each time after this
      var self = this;
      self.timeout = setTimeout(function () {
        for (var i = 0; i < self.strings.length; ++i) self.sequence[i] = i;

        // shuffle the array if true
        if (self.shuffle) self.sequence = self.shuffleArray(self.sequence);

        // Start typing
        self.typewrite(self.strings[self.sequence[self.arrayPos]], self.strPos);
      }, self.startDelay);
    },

    build: function () {
      var self = this;
      // Insert cursor
      if (this.showCursor === true) {
        this.cursor = $(
          '<span class="typed-cursor">' + this.cursorChar + "</span>"
        );
        this.el.after(this.cursor);
      }
      if (this.stringsElement) {
        this.strings = [];
        this.stringsElement.hide();
        //console.log(this.stringsElement.children());
        var strings = this.stringsElement.children();
        $.each(strings, function (key, value) {
          self.strings.push($(value).html());
        });
      }
      this.init();
    },

    // pass current string state to each function, types 1 char per call
    typewrite: function (curString, curStrPos) {
      // exit when stopped
      if (this.stop === true) {
        return;
      }

      // varying values for setTimeout during typing
      // can't be global since number changes each time loop is executed
      var humanize = Math.round(Math.random() * (100 - 30)) + this.typeSpeed;
      var self = this;

      // ------------- optional ------------- //
      // backpaces a certain string faster
      // ------------------------------------ //
      // if (self.arrayPos == 1){
      //  self.backDelay = 50;
      // }
      // else{ self.backDelay = 500; }

      // contain typing function in a timeout humanize'd delay
      self.timeout = setTimeout(function () {
        // check for an escape character before a pause value
        // format: \^\d+ .. eg: ^1000 .. should be able to print the ^ too using ^^
        // single ^ are removed from string
        var charPause = 0;
        var substr = curString.substr(curStrPos);
        if (substr.charAt(0) === "^") {
          var skip = 1; // skip atleast 1
          if (/^\^\d+/.test(substr)) {
            substr = /\d+/.exec(substr)[0];
            skip += substr.length;
            charPause = parseInt(substr);
          }

          // strip out the escape character and pause value so they're not printed
          curString =
            curString.substring(0, curStrPos) +
            curString.substring(curStrPos + skip);
        }

        if (self.contentType === "html") {
          // skip over html tags while typing
          var curChar = curString.substr(curStrPos).charAt(0);
          if (curChar === "<" || curChar === "&") {
            var tag = "";
            var endTag = "";
            if (curChar === "<") {
              endTag = ">";
            } else {
              endTag = ";";
            }
            while (curString.substr(curStrPos + 1).charAt(0) !== endTag) {
              tag += curString.substr(curStrPos).charAt(0);
              curStrPos++;
              if (curStrPos + 1 > curString.length) {
                break;
              }
            }
            curStrPos++;
            tag += endTag;
          }
        }

        // timeout for any pause after a character
        self.timeout = setTimeout(function () {
          if (curStrPos === curString.length) {
            // fires callback function
            self.options.onStringTyped(self.arrayPos);

            // is this the final string
            if (self.arrayPos === self.strings.length - 1) {
              // animation that occurs on the last typed string
              self.options.callback();

              self.curLoop++;

              // quit if we wont loop back
              if (self.loop === false || self.curLoop === self.loopCount)
                return;
            }

            self.timeout = setTimeout(function () {
              self.backspace(curString, curStrPos);
            }, self.backDelay);
          } else {
            /* call before functions if applicable */
            if (curStrPos === 0) {
              self.options.preStringTyped(self.arrayPos);
            }

            // start typing each new char into existing string
            // curString: arg, self.el.html: original text inside element
            var nextString = curString.substr(0, curStrPos + 1);
            if (self.attr) {
              self.el.attr(self.attr, nextString);
            } else {
              if (self.isInput) {
                self.el.val(nextString);
              } else if (self.contentType === "html") {
                self.el.html(nextString);
              } else {
                self.el.text(nextString);
              }
            }

            // add characters one by one
            curStrPos++;
            // loop the function
            self.typewrite(curString, curStrPos);
          }
          // end of character pause
        }, charPause);

        // humanized value for typing
      }, humanize);
    },

    backspace: function (curString, curStrPos) {
      // exit when stopped
      if (this.stop === true) {
        return;
      }

      // varying values for setTimeout during typing
      // can't be global since number changes each time loop is executed
      var humanize = Math.round(Math.random() * (100 - 30)) + this.backSpeed;
      var self = this;

      self.timeout = setTimeout(function () {
        // ----- this part is optional ----- //
        // check string array position
        // on the first string, only delete one word
        // the stopNum actually represents the amount of chars to
        // keep in the current string. In my case it's 14.
        // if (self.arrayPos == 1){
        //  self.stopNum = 14;
        // }
        //every other time, delete the whole typed string
        // else{
        //  self.stopNum = 0;
        // }

        if (self.contentType === "html") {
          // skip over html tags while backspacing
          if (curString.substr(curStrPos).charAt(0) === ">") {
            var tag = "";
            while (curString.substr(curStrPos - 1).charAt(0) !== "<") {
              tag -= curString.substr(curStrPos).charAt(0);
              curStrPos--;
              if (curStrPos < 0) {
                break;
              }
            }
            curStrPos--;
            tag += "<";
          }
        }

        // ----- continue important stuff ----- //
        // replace text with base text + typed characters
        var nextString = curString.substr(0, curStrPos);
        if (self.attr) {
          self.el.attr(self.attr, nextString);
        } else {
          if (self.isInput) {
            self.el.val(nextString);
          } else if (self.contentType === "html") {
            self.el.html(nextString);
          } else {
            self.el.text(nextString);
          }
        }

        // if the number (id of character in current string) is
        // less than the stop number, keep going
        if (curStrPos > self.stopNum) {
          // subtract characters one by one
          curStrPos--;
          // loop the function
          self.backspace(curString, curStrPos);
        }
        // if the stop number has been reached, increase
        // array position to next string
        else if (curStrPos <= self.stopNum) {
          self.arrayPos++;

          if (self.arrayPos === self.strings.length) {
            self.arrayPos = 0;

            // Shuffle sequence again
            if (self.shuffle) self.sequence = self.shuffleArray(self.sequence);

            self.init();
          } else
            self.typewrite(
              self.strings[self.sequence[self.arrayPos]],
              curStrPos
            );
        }

        // humanized value for typing
      }, humanize);
    },
    /**
     * Shuffles the numbers in the given array.
     * @param {Array} array
     * @returns {Array}
     */
    shuffleArray: function (array) {
      var tmp,
        current,
        top = array.length;
      if (top)
        while (--top) {
          current = Math.floor(Math.random() * (top + 1));
          tmp = array[current];
          array[current] = array[top];
          array[top] = tmp;
        }
      return array;
    },

    // Start & Stop currently not working

    // , stop: function() {
    //     var self = this;

    //     self.stop = true;
    //     clearInterval(self.timeout);
    // }

    // , start: function() {
    //     var self = this;
    //     if(self.stop === false)
    //        return;

    //     this.stop = false;
    //     this.init();
    // }

    // Reset and rebuild the element
    reset: function () {
      var self = this;
      clearInterval(self.timeout);
      var id = this.el.attr("id");
      this.el.empty();
      if (typeof this.cursor !== "undefined") {
        this.cursor.remove();
      }
      this.strPos = 0;
      this.arrayPos = 0;
      this.curLoop = 0;
      // Send the callback
      this.options.resetCallback();
    }
  };

  $.fn.typed = function (option) {
    return this.each(function () {
      var $this = $(this),
        data = $this.data("typed"),
        options = typeof option == "object" && option;
      if (data) {
        data.reset();
      }
      $this.data("typed", (data = new Typed(this, options)));
      if (typeof option == "string") data[option]();
    });
  };

  $.fn.typed.defaults = {
    strings: [
      "These are the default values...",
      "You know what you should do?",
      "Use your own!",
      "Have a great day!"
    ],
    stringsElement: null,
    // typing speed
    typeSpeed: 0,
    // time before typing starts
    startDelay: 0,
    // backspacing speed
    backSpeed: 0,
    // shuffle the strings
    shuffle: false,
    // time before backspacing
    backDelay: 500,
    // loop
    loop: false,
    // false = infinite
    loopCount: false,
    // show cursor
    showCursor: true,
    // character for cursor
    cursorChar: "|",
    // attribute to type (null == text)
    attr: null,
    // either html or text
    contentType: "html",
    // call when done callback function
    callback: function () {},
    // starting callback function before each string
    preStringTyped: function () {},
    //callback for every typed string
    onStringTyped: function () {},
    // callback for reset
    resetCallback: function () {}
  };
})(window.jQuery);


/*****-------[ 360viewer ]-------*****/
$('.ix-block-ninja-custom-360viewer').each(function() {
  var block = "#" + $(this).parent().parent().attr("id");
  var stage;
  var canvas = $(block).find('#360viewer');
  if (!canvas || !canvas.getContext) return;
  stage = new createjs.Stage(canvas);
  stage.enableMouseOver(true);
  stage.mouseMoveOutside = true;
  createjs.Touch.enable(stage);
  var images =$(block).find('img');
  var imgList = [];
  for(var i = 0; i < images.length; i++) {
    imgList.push(images[i].src);
  }
  var images = [],
    loaded = 0,
    currentFrame = 0,
    totalFrames = imgList.length;
  var rotate360Interval, start_x;
  var bg = new createjs.Shape();
  stage.addChild(bg);
  var bmp = new createjs.Bitmap();
  stage.addChild(bmp);
  function load360Image() {
    var img = new Image();
    img.src = imgList[loaded];
    img.onload = img360Loaded;
    images[loaded] = img;
  }
  function img360Loaded(event) {
    loaded++;
    bg.graphics.clear()
    bg.graphics.beginFill("#fff").drawRect(0, 0, stage.canvas.width * loaded / totalFrames, stage.canvas.height);
    bg.graphics.endFill();
    if (loaded == totalFrames) start360();
    else load360Image();
  }
  function start360() {
    document.body.style.cursor = 'none';
    update360(0);
    rotate360Interval = setInterval(function() {
      if (currentFrame === totalFrames - 1) {
        clearInterval(rotate360Interval);
        addNavigation();
      }
      update360(1);
    }, 25);
  }

  function iconLoaded(event) {
    var iconBmp = new createjs.Bitmap();
    iconBmp.image = event.target;
    iconBmp.x = 20;
    iconBmp.y = canvas.height - iconBmp.image.height - 20;
    stage.addChild(iconBmp);
  }

  function update360(dir) {
    currentFrame += dir;
    if (currentFrame < 0) currentFrame = totalFrames - 1;
    else if (currentFrame > totalFrames - 1) currentFrame = 0;
    bmp.image = images[currentFrame];
  }
  function addNavigation() {
    stage.onMouseOver = mouseOver;
    stage.onMouseDown = mousePressed;
    document.body.style.cursor = 'auto';
  }
  function mouseOver(event) {
    document.body.style.cursor = 'pointer';
  }
  function mousePressed(event) {
    start_x = event.rawX;
    stage.onMouseMove = mouseMoved;
    stage.onMouseUp = mouseUp;
    document.body.style.cursor = 'w-resize';
  }
  function mouseMoved(event) {
    var dx = event.rawX - start_x;
    var abs_dx = Math.abs(dx);
    if (abs_dx > 5) {
      update360(dx / abs_dx);
      start_x = event.rawX;
    }
  }
  function mouseUp(event) {
    stage.onMouseMove = null;
    stage.onMouseUp = null;
    document.body.style.cursor = 'pointer';
  }
  function handleTick() {
    stage.update();
  }
  document.body.style.cursor = 'progress';
  load360Image();
  createjs.Ticker.addEventListener("tick", handleTick);
  createjs.Ticker.setFPS(24);
  createjs.Ticker.useRAF = true;
  var images_array = document.getElementById("sprite_sheet");
  sprite_sheet.parentNode.removeChild(sprite_sheet);
});




/**** End runjQueryCode ***/
}
