export const handleInputValue = (text: any) => {
    const regexOnlyLettersOrSpace = /^[a-zA-Z\s]*$/;
    const fctTest = () => {
        return regexOnlyLettersOrSpace.test(text)
    }
    return fctTest()
}