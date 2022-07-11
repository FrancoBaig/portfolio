function getIconFromTag(tag) {
    switch (tag.toLowerCase()) {
        case "html":
            return "fa-html5";
        case "css":
            return "fa-css3-alt";
        case "js":
            return "fa-js-square";
        case "react":
            return "fa-react";
        case "nodejs":
            return "fa-node";
        case "mysql":
            return "fa-database";
        case "mongodb":
            return "fa-database";
        case "scss":
        case "sass":
            return "fa-sass";
        default:
            break;
    }
}

export default getIconFromTag;
