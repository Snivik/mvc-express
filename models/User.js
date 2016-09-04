/*
* Sample Model for ElasticSearch
*
*/
module.exports = {

    "flight": {
        "properties": {
            "first_name": {
                "type": "string"
            },

            "last_name": {
                "type": "string"
            },

            "address": {
                "properties": {
                    "city": {
                        "type": "string"
                    },
                    "street": {
                        "type": "string"
                    },
                    "house_number": {
                        "type": "integer"
                    },
                    "state": {
                        "type": "string"
                    },
                    "country": {
                        "type": "string"
                    },
                    "zip": {
                        "type": "string"
                    }

                }
            }

        }
    }

};