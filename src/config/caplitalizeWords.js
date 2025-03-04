export const formatTitle = (text) => {
    return text?.split('_') // Underscore pe split karna
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Har word ka pehla letter capitalize karna
        .join(' '); // Words ko space ke saath join karna
};