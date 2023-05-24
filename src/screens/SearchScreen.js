import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../Components/SearchBar";
import { useState } from "react";
import useResults from "../hooks/useResults";
import ResultsList from "../Components/ResultsList";

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    }

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {results.length} results</Text>
            <ResultsList title="Cost Effective" results={filterResultsByPrice('$')} />
            <ResultsList title="Bit Pricier" results={filterResultsByPrice('$$')} />
            <ResultsList title="Big Spender" results={filterResultsByPrice('$$$')} />
        </View>
    )
}

const styles = StyleSheet.create({});

export default SearchScreen;