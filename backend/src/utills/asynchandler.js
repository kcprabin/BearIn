export const asynchandler = (handler) => async (req, res, next) => {
    return Promise.resolve(handler(req, res, next)).catch(next);
}
    