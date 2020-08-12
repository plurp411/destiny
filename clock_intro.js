var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _MS_PER_DAY = 1000 * 60 * 60 * 24;
var _MS_PER_HOUR = 1000 * 60 * 60;
var _MS_PER_MINUTE = 1000 * 60;
var _MS_PER_SECOND = 1000;
var emojiCount = 128512;
var waitCount = 0;
var _WAIT_END = 100;

function getEmoji() {

  var emojiText = "&#" + emojiCount + ";";

  waitCount++;
  if (waitCount >= _WAIT_END) {
    waitCount = 0;
    emojiCount++;

    if (emojiCount == 129318) {
      emojiCount++;
    } else if (emojiCount > 129488) {
      emojiCount = 128512;
    } else if (emojiCount > 129327 && emojiCount < 129488) {
      emojiCount = 129488;
    } else if (emojiCount > 129301 && emojiCount < 129312) {
      emojiCount = 129312;
    } else if (emojiCount > 128580 && emojiCount < 129296) {
      emojiCount = 129296;
    } else if (emojiCount > 128567 && emojiCount < 128577) {
      emojiCount = 128577;
    }

    // if (emojiCount > 128567) {
    //   emojiCount = 128512;
    // } 
  }

  // document.write(waitCount + "         ");

  return String.fromCodePoint(emojiCount);
}

function FormattedDate(props) {

  var presentDate = props.date;
  
//   var leaveDate = new Date(2020, 4, 31, 12, 0, 0);
  var leaveDate = new Date(2020, 7, 24, 3, 0, 0);
  
  var timeDif = presentDate.getTime() - leaveDate.getTime();

  var days = Math.floor(timeDif / _MS_PER_DAY);
  if (days < 0) {
    days = 0;
  }

  var remainingMS = timeDif - _MS_PER_DAY * days;
  var hours = Math.floor(remainingMS / _MS_PER_HOUR);
  if (hours < 0) {
    hours = 0;
  }

  remainingMS -= _MS_PER_HOUR * hours;
  var minutes = Math.floor(remainingMS / _MS_PER_MINUTE);
  if (minutes < 0) {
    minutes = 0;
  }

  remainingMS -= _MS_PER_MINUTE * minutes;
  var seconds = Math.floor(remainingMS / _MS_PER_SECOND);
  if (seconds < 0) {
    seconds = 0;
  }

  remainingMS -= _MS_PER_SECOND * seconds;
  var milliseconds = Math.floor(remainingMS);
  if (milliseconds < 0) {
    milliseconds = 0;
  }

  var years = Math.floor(days / 365);
  if (years < 0) {
    years = 0;
  }

  days -= years * 365;

  var months = Math.floor(days / 30);
  if (months < 0) {
    months = 0;
  }

  days -= months * 30;

  // return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      { className: "time-div" },
      React.createElement(
        "h2",
        null,
        years,
        " YEARS"
      )
    ),
    React.createElement(
      "div",
      { className: "time-div" },
      React.createElement(
        "h2",
        null,
        months,
        " MONTHS"
      )
    ),
    React.createElement(
      "div",
      { className: "time-div" },
      React.createElement(
        "h2",
        null,
        days,
        " DAYS"
      )
    ),
    React.createElement(
      "div",
      { className: "time-div" },
      React.createElement(
        "h2",
        null,
        hours,
        " HOURS"
      )
    ),
    React.createElement(
      "div",
      { className: "time-div" },
      React.createElement(
        "h2",
        null,
        minutes,
        " MINUTES"
      )
    ),
    React.createElement(
      "div",
      { className: "time-div" },
      React.createElement(
        "h2",
        null,
        seconds,
        " SECONDS"
      )
    ),
    React.createElement(
      "div",
      { className: "time-div" },
      React.createElement(
        "h2",
        null,
        milliseconds,
        " MILLISECONDS"
      )
    )
  );
}

var EmojiDiv = function (_React$Component) {
  _inherits(EmojiDiv, _React$Component);

  function EmojiDiv() {
    _classCallCheck(this, EmojiDiv);

    return _possibleConstructorReturn(this, (EmojiDiv.__proto__ || Object.getPrototypeOf(EmojiDiv)).apply(this, arguments));
  }

  _createClass(EmojiDiv, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "emoji-div" },
        getEmoji()
      );
    }
  }]);

  return EmojiDiv;
}(React.Component);

var Clock = function (_React$Component2) {
  _inherits(Clock, _React$Component2);

  function Clock(props) {
    _classCallCheck(this, Clock);

    var _this2 = _possibleConstructorReturn(this, (Clock.__proto__ || Object.getPrototypeOf(Clock)).call(this, props));

    _this2.state = { date: new Date() };
    return _this2;
  }

  _createClass(Clock, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      this.timerID = setInterval(function () {
        return _this3.tick();
      }, 1);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.timerID);
    }
  }, {
    key: "tick",
    value: function tick() {
      this.setState({
        date: new Date()
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(FormattedDate, { date: this.state.date }),
        React.createElement(EmojiDiv, null)
      );
    }
  }]);

  return Clock;
}(React.Component);

function App() {
  return React.createElement(
    "div",
    null,
    React.createElement(Clock, null)
  );
}

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
