export const getBackgroundColor = (representation) => {
    switch (representation) {
        case 1:
            return "#ecc657";
        case 2:
            return "#408926";
        case 3:
            return "#084cc1";
        case 4:
            return "#6a0d3b";
        case 5:
            return "#be193d";
        default:
            return "#d3cee0";
    }
};