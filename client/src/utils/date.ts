export const formatTimestamp = (timestamp : string) : string => {
    const date = new Date(timestamp);
    const formated = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    }); 
    return formated;
}