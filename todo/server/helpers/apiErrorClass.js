class ApiError extends Error {
    constructuor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

export { ApiError };