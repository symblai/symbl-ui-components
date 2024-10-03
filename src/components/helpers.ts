export const addClassName = (className?: string): string => {
    return !!className ? className : "";
}

// @ts-ignore
export const getConfigValue = (key: string, obj = {},defaultValue= true) => obj.hasOwnProperty(key) ? !obj[key] : defaultValue