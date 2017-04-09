const URL = 'https://spreadsheets.google.com/feeds/list/11X2I5DUuqi-KS2PuxHM6ptqERWEoiJLJi-2vDsgiJlM/od6/public/values?alt=json';

class QuoteAPI {

    static getAllQuotes() {
        return new Promise((resolve, reject) => {
            fetch(URL)
                .then(response => response.json())
                .then(json => {
                    var result = [];
                    json.feed.entry.map(value =>
                        result.push({
                            'quote': value.gsx$quote.$t,
                            'where': value.gsx$where.$t,
                            'who': value.gsx$who.$t,
                            'when': value.gsx$when.$t
                        })
                    );
                    resolve(result);
                });
        });

    }
}

export default QuoteAPI;