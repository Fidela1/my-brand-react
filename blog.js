'use strict';

import _regeneratorRuntime from "babel-runtime/regenerator";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var e = React.createElement;
var Blog = function Blog(props) {
  var _React$useState = React.useState([]),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      blogArr = _React$useState2[0],
      setBrogArr = _React$useState2[1];

  var _React$useState3 = React.useState(0),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      liked = _React$useState4[0],
      setLiked = _React$useState4[1];

  React.useEffect(function () {
    var getData = function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
        var response, result, blogArr, reverseArr;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch("https://my-brand-backend-production.up.railway.app/api/v1/blogs");

              case 2:
                response = _context.sent;
                _context.next = 5;
                return response.json();

              case 5:
                result = _context.sent;
                blogArr = result.data.blog;
                reverseArr = blogArr.reverse();

                setBrogArr(reverseArr);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getData() {
        return _ref.apply(this, arguments);
      };
    }();

    getData();
  }, []);
  var singleArticle = function singleArticle(id) {
    location.href = "first-blog.html?id=" + id;
  };
  var handleLike = function handleLike() {
    console.log("here", liked);
    if (liked === 1) {
      setLiked(0);
    } else {
      setLiked(1);
    }
  };
  return React.createElement(
    "div",
    { className: "blog-card" },
    blogArr.slice(0, 4).map(function (blog, index) {
      console.log("blog:---", blog);
      return React.createElement(
        "div",
        { key: index, className: "card" },
        React.createElement("img", { src: blog.blog_image, alt: "4", style: { width: '100%', height: '90px' } }),
        React.createElement(
          "h2",
          null,
          blog.title,
          " "
        ),
        React.createElement("div", { dangerouslySetInnerHTML: { __html: blog.description.substring(0, 100) } }),
        React.createElement(
          "button",
          { onClick: function onClick() {
              return singleArticle(blog._id);
            }, id: "single-blog blog.title", className: "see-more" },
          "Read more"
        ),
        React.createElement(
          "div",
          { style: { display: "flex" } },
          React.createElement(
            "div",
            { className: "comment" },
            "0"
          ),
          React.createElement(
            "div",
            { className: "like", onClick: function onClick() {
                return handleLike();
              } },
            liked
          )
        )
      );
    })
  );
};
// ... the starter code you pasted ...

var domContainer = document.querySelector('#blog-card');
var root = ReactDOM.createRoot(domContainer);
root.render(e(Blog));