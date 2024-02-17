import { format } from 'date-fns';

export const formattingDate = (date) => {
    const [day, month, year] = date.split('-');
    const formattedDate = format(new Date(year, month - 1, day), "yyyy-MM-dd'T'00:00:00'Z'");
    return formattedDate;
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
export const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

export function getStyles(name, proffesionType, theme) {
    return {
        fontWeight:
            proffesionType.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}