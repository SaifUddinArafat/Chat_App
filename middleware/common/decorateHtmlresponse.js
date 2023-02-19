function setPageTitle(page_title) {
    return function(req, res, next) {
        res.locals.html = true;
        res.locals.title = `${page_title} - ${process.env.App_Name}`;
        next();
    };
}

module.exports = {
    setPageTitle,
};