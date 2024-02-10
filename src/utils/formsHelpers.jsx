import { format } from 'date-fns';

export const formattingDate = (date) => {
    const [day, month, year] = date.split('-');
    const formattedDate = format(new Date(year, month - 1, day), "yyyy-MM-dd'T'00:00:00'Z'");
    return formattedDate;
};
