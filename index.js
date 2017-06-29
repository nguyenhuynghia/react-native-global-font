import React from "react"
import {Text} from 'react-native'
import wrap from 'lodash.wrap'

let _applyed = false
export default class GlobalFont {
    static applyGlobal(fontFamily) {
        if (_applyed) { return }
        Text.prototype.render = wrap(Text.prototype.render, function (func, ...args) {
            let originText = func.apply(this, args)
            return React.cloneElement(originText, {
                style: [
                    {fontFamily: fontFamily},
                    originText.props.style
                ]
            })
        })
        _applyed = true
    }
}
