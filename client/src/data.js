import ApiCalls from './template/backend/ApiCalls'
import HelloWorld from './template/frontend/HelloWorld'

export const backenddata = [
    {
        id:'1',
        title: "API Calls",
        description: "Get and Post API Calls example.",
        urlTerm: "ApiCalls",
        element: <ApiCalls/>
    }
];

export const frontenddata = [
    {
        id:'1',
        title: "Hello World",
        description: "Basic Frontend Template",
        urlTerm: "HelloWorld",
        element: <HelloWorld/>
    }
];