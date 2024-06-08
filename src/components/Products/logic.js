export const handleSearch = (defaultState, setProductState, setInputState, value) => {
    setInputState(value);
    if (value) {
        const filteredData = defaultState.filter(product => product.text.includes(value) || product.title.includes(value));
        setProductState(filteredData);
    } else {
        setProductState(defaultState)
    }
}