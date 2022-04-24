export const handleInputValue = (text: string) => {
    const regexOnlyLettersOrSpace = /^[a-zA-Z\s]*$/;
    const fctTest = () => {
        return regexOnlyLettersOrSpace.test(text)
    }
    return fctTest()
}