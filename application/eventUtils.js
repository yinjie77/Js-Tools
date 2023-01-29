//通用事件监听器函数（兼容ie）
const EventUtils = {
    addEvent: function (ele, type, handler) {
        if (ele.addEventListener)
            ele.addEventListener(type, handler, false)
        else if (ele.attachEvent)
            ele.attachEvent("on" + type, handler)
        else
            ele["on" + type] = handler
    },
    removeEvent: function (ele, type, handler) {
        if (ele.removeEventListener) {
            ele.removeEventListener(type, handler, false)
        } else if (ele, detachEvent) {
            ele.detachEvent("on" + type, handler)
        } else
            ele["on" + type] = null
    },
    getTarget: function (event) {
        return event.target || event.srcElement
    },
    getEven: function (event) {
        return event || window.event
    },
    stopPropagation: function (event) {
        if (event.stopPropagation)
            event.stopPropagation()
        else
            event.cancelBubble = true
    },
    prevetDefault: function (event) {
        if (event.prevetDefault)
            event.prevetDefault()
        else
            event.returnValue = false
    }

}