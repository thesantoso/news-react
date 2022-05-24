import axios from "axios";

function getNews(query = 'indonesia'){
    let now = new Date();
    let offset = now.getTimezoneOffset();
    let backdate = new Date(now.setDate(now.getDate() - 30));
    let realTimeDate = new Date(backdate.getTime()- (offset*60*1000));
    let nowFormattedDate = realTimeDate.toISOString().split('T')[0];
    

    const apiKey = "347d9cd586994981ab7a7298d912edd8";
    let url = `https://newsapi.org/v2/top-headlines?country=id&apiKey=${apiKey}`
    if(query !== 'indonesia'){
        url = 'https://newsapi.org/v2/everything?' +
          `q=${query}` +
          `&from=${nowFormattedDate}` +
          '&sortBy=popularity' +
          `&apiKey=${apiKey}`;
    }
    const res = axios.get(url).then((response) => response.data.articles).catch((error) => console.log(error))
    return res ;
}

export default {getNews};