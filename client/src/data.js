import ApiCalls from './template/apicall/ApiCalls'
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
    }
];