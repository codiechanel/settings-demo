import {isBrowser} from "../../../../../../../csb-projects/figma-plugin-neu/src/Store"

onmessage = (event) => {
    if (!isBrowser) {
        if (event.data.pluginMessage.type === 'loadColor') {
            selectedObject.majorBackgroundColor = event.data.pluginMessage.color
        }
    }

}