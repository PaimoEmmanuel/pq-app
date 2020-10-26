export const getColor = (color) => {
    if(color === "defaultBlue") {
        return "#3C64B1";
    }
    else if(color === "lightBlack") {
        return "#373F41";
    }
    else if(color === "white") {
        return "#FFFFFF";
    }
}

export const getColorRGB = (color) => {
    if(color === "defaultBlue") {
        return "60,100,177";
    }
    else if(color === "lightBlack") {
        return "55,63,65";
    }
    else if(color === "white") {
        return "255,255,255";
    }
}