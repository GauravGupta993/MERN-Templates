import ApiCalls from './template/apicall/ApiCalls'
import CurrencyConverter from './template/design/CurrencyConverter';
import HelloWorld from './template/design/HelloWorld'

export const apicalldata = [
    {
        id:'1',
        title: "API Calls",
        description: "Get and Post API Calls example.",
        urlTerm: "ApiCalls",
        element: <ApiCalls/>
    }
];

export const designdata = [
    {
        id:'1',
        title: "Hello World",
        description: "Basic Frontend Template",
        urlTerm: "HelloWorld",
        element: <HelloWorld/>
    },
    {
        id: '2',  
        title: "Currency Converter",
        description: "Real-time currency conversion",
        urlTerm: "CurrencyConverter",
        element: <CurrencyConverter/>  
    }
];