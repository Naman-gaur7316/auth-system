
function validate(schema) {
    return (req, res, next) => {
        const result = schema.safeParse(req.body);

        if(!result.success) {
         res.status(400).json({
                errors: result.error.format()
            })
            return;
        }
        req.body = result.data;
        next();
    }
}

module.exports = {
    validate
}