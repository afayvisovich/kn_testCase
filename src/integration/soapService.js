import request from "express";

export const soapService = (data) => {
    var xmlBody =
    '<?xml version="1.0" encoding="utf-8"?>' +
    '<soapenv:Envelope ' + 
        'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ' +
        'xmlns:api="http://127.0.0.1/Integrics/Enswitch/API" ' +
        'xmlns:xsd="http://www.w3.org/2001/XMLSchema" ' +
        'xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">' +
        '<soapenv:Body>' +
        '<api:pushData>' +
        data +
        '</api:pushData>' +
        '</soapenv:Body>' +
    '</soapenv:Envelope>';

    var clientServerOptions = {
        uri: 'http://SomeSOAPService.com/',
        body: xmlBody,
        method: 'POST',
        headers: {
            'Content-Type': 'text/xml',
            'SOAPAction': ''
        }
    }

    try {
        request(clientServerOptions, function (error, response) {
            console.log(error,response.body);
            return response.body;
        });
    } catch (err) {
        return `Error occured on sending data: ${err}`
    }
}

