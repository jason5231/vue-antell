export default {
  ByteTo: function (value) {
    var num = ''
    return num = value > Math.pow(1024, 5) ? (value / Math.pow(1024, 5)).toFixed(2) + "P" :
      value > Math.pow(1024, 4) ? (value / Math.pow(1024, 4)).toFixed(2) + "T" :
      value > Math.pow(1024, 3) ? (value / Math.pow(1024, 3)).toFixed(2) + "G" :
      value > Math.pow(1024, 2) ? (value / Math.pow(1024, 2)).toFixed(2) + "MB" :
      value > 1024 ? (value / 1024).toFixed(2) + "KB" :
      value > 8 ? (value / 8).toFixed(2) + "B" : value + "b";
  },
  searchNav: function (that, tab) {
    var w = that.last().offset().top;
    var jadegnum = 113
    if (tab.length > 0) {
      jadegnum = 173

    }

    if (w > jadegnum) {
      that.height("80px")
    } else {
      that.height("32px")
    }
  }
}
