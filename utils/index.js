const validatePayload = (payload, schema) => {
    try {
        /** Validate payload with schema */
        const { error, value } = schema.validate(payload);

        /** Throw and error if there is payload validation error  */
        if (error) throw { message: error.details[0].message || "Insufficient request data", status: 400 }

        return value

    } catch (error) {
        console.log("[utils] :: [validatePayload] :: [EXCEPTION] :: ", error)
        throw error
    }
}

module.exports = {
    validatePayload
}