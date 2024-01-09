export const getBackgroundColor = (representation) => {
    switch (representation) {
        case 1:
            return "#ecc657";
        case 2:
            return "#408926";
        case 3:
            return "#084cc1";
        default:
            return "transparent";
    }
};