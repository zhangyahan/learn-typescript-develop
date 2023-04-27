function padding(left, right, top, bottom) {
    return {
        top: top !== null && top !== void 0 ? top : left,
        right: right !== null && right !== void 0 ? right : left,
        left: left !== null && left !== void 0 ? left : left,
        bottom: bottom !== null && bottom !== void 0 ? bottom : left
    };
}
