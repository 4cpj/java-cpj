'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dateLeave = dateLeave;
function dateLeave(e) {
  var _date = new Date(e * 1000),
      _nowDate = new Date(),
      _differenceValue = Math.floor((_nowDate - _date) / 1000);
  if (_differenceValue < 60) {
    //少于60秒
    return _differenceValue + '秒前';
  }
  if (_differenceValue >= 60 && _differenceValue < 3600) {
    //大于60秒，少一个小时
    return Math.floor(_differenceValue / 60) + '分钟前';
  }
  if (_differenceValue >= 3600 && _differenceValue < 86400) {
    //大于一个小时,小于1天
    return Math.floor(_differenceValue / 3600) + '小时前';
  }
  if (_differenceValue >= 86400) {
    //大于1天
    return Math.floor(_differenceValue / 86400) + '天前';
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdXRpbHMuanMiXSwibmFtZXMiOlsiZGF0ZUxlYXZlIiwiZSIsIl9kYXRlIiwiRGF0ZSIsIl9ub3dEYXRlIiwiX2RpZmZlcmVuY2VWYWx1ZSIsIk1hdGgiLCJmbG9vciJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFBTyxBQUFTO0FBQVQsbUJBQUEsQUFBbUIsR0FBRSxBQUN6QjtNQUFJLFFBQVEsSUFBQSxBQUFJLEtBQUssSUFBckIsQUFBWSxBQUFhO01BQ3JCLFdBQVcsSUFEZixBQUNlLEFBQUk7TUFDZixtQkFBbUIsS0FBQSxBQUFLLE1BQU0sQ0FBQyxXQUFELEFBQVksU0FGOUMsQUFFdUIsQUFBOEIsQUFDckQ7TUFBRyxtQkFBSCxBQUFzQixJQUFHLEFBQUU7QUFDM0I7V0FBTyxtQkFBUCxBQUEwQixBQUN6QjtBQUNEO01BQUcsb0JBQUEsQUFBb0IsTUFBTSxtQkFBN0IsQUFBZ0QsTUFBSyxBQUFFO0FBQ3ZEO1dBQU8sS0FBQSxBQUFLLE1BQU0sbUJBQVgsQUFBNEIsTUFBbkMsQUFBeUMsQUFDeEM7QUFDRDtNQUFHLG9CQUFBLEFBQW9CLFFBQVEsbUJBQS9CLEFBQWtELE9BQU0sQUFBRTtBQUMxRDtXQUFPLEtBQUEsQUFBSyxNQUFNLG1CQUFYLEFBQTRCLFFBQW5DLEFBQTJDLEFBQzFDO0FBQ0Q7TUFBRyxvQkFBSCxBQUF1QixPQUFNLEFBQUU7QUFDL0I7V0FBTyxLQUFBLEFBQUssTUFBTSxtQkFBWCxBQUE0QixTQUFuQyxBQUE0QyxBQUMzQztBQUNIIiwiZmlsZSI6InV0aWxzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYWMvRG93bmxvYWRzL3JlYWN0LWNwaiJ9