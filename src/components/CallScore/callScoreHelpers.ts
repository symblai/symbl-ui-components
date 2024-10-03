export const getClassNameByScore = (actual: number, total: number) => {
    const percentage = actual / total * 100;
    return isNA(actual) ? "symbl-na-score" : percentage >= 66 ? 'symbl-positive' : percentage >= 33 ? 'symbl-neutral' : 'symbl-negative';
}

export const getColorByScore = (actual: number, total: number, positiveColor?: string, negativeColor?: string, neutralColor?: string) => {
    const percentage = actual / total * 100;
    return isNA(actual) ? neutralColor : percentage >= 66 ? positiveColor : percentage >= 33 ? neutralColor : negativeColor;
}

export const getColorStylesByScore = (actual: number, total: number, positiveColor?: string, negativeColor?: string, neutralColor?: string) => {
    const color = getColorByScore(actual, total, positiveColor, negativeColor, neutralColor);
    return !!color ? {color: color, stroke: color} : {};
}

export const getBackgroundColorStylesByScore = (actual: number, total: number, isHover: boolean, positiveColor?: string, negativeColor?: string, neutralColor?: string) => {
    const color = getColorByScore(actual, total, positiveColor, negativeColor, neutralColor);
    return !!color && isHover ? {backgroundColor: color} : {};
}

export const getBorderColorStyles = (color?: string) => {
    return !!color ? {borderColor: color} : {}
}

export const getClassNameContainerByScore = (actual: number, total: number) => {
    const percentage = actual / total * 100;
    return isNA(actual) ? "symbl-na-score-container" : percentage >= 66 ? 'symbl-positive-container' : percentage >= 33 ? 'symbl-neutral-container' : 'negative-container';
}

export const QUESTIONS = {
    WHAT_WORKED: "What worked ?",
    WHAT_DID_NOT_WORK: "What did not work ?",
    HOW_COULD_IT_BE_IMPROVED: "How could it be improved ?"
}

export const NA_SCORE = 'n/a';

export const isNA = (score: string | number) => {return score?.toString().toLowerCase() === NA_SCORE};