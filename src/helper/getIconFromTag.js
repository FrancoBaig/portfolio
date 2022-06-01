function getIconFromTag(tag) {
    switch (tag.toLowerCase()) {
        case "html":
            return "fa-html5";
        case "css":
            return "fa-css3-alt";
        case "scss":
        case "sass":
            return "fa-sass";
        case "react":
            return "fa-react";
        default:
            break;
    }
}

export default getIconFromTag;
